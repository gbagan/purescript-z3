module Z3 where

import Prelude

import Control.Monad.Reader.Trans (runReaderT, ReaderT, asks)
import Data.Array ((..))
import Data.Maybe (Maybe(..))
import Data.Traversable (traverse)
import Effect.Aff (Aff)
import Effect.Aff.Class (class MonadAff, liftAff)
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Ref (Ref)
import Effect.Ref as Ref
import JS.BigInt (BigInt)
import Promise.Aff (toAffE)
import Z3.Base (Model, Solver, Context, Z3Bool, Z3Int, Z3Array, Z3Sort)
import Z3.Base as Base

{-
class (Monad m, MonadEffect m, MonadAff m) <= MonadZ3 r m where
  getSolver  :: m (Solver r)
  getContext :: m (Context r)
  freshName :: m String
-}

type Z3Env r =
  { context :: Context r
  , solver :: Solver r
  , counter :: Ref Int
  }


newtype Z3 r a = Z3 (ReaderT (Z3Env r) Aff a)

getSolver :: forall r. Z3 r (Solver r)
getSolver  = Z3 $ asks _.solver

getContext :: forall r.  Z3 r (Context r)
getContext = Z3 $ asks _.context

freshName :: forall r. Z3 r String
freshName = Z3 $ do
  c <- asks _.counter
  v <- liftEffect $ Ref.read c
  liftEffect $ Ref.write (v+1) c
  pure $ "x_" <> show v

derive newtype instance Functor (Z3 r)
derive newtype instance Apply (Z3 r)
derive newtype instance Applicative (Z3 r)
derive newtype instance Bind (Z3 r)
derive newtype instance Monad (Z3 r)
derive newtype instance MonadEffect (Z3 r)
derive newtype instance MonadAff (Z3 r)

and_ :: forall r. Z3Bool r -> Z3Bool r -> Z3Bool r
and_ b1 b2 = Base.and_ b1 b2

or_ :: forall r. Z3Bool r -> Z3Bool r -> Z3Bool r
or_ b1 b2 = Base.or_ b1 b2

not_ :: forall r. Z3Bool r -> Z3Bool r
not_ = Base.not_

class Expr r a | a -> r where
  sort :: Z3 r (Z3Sort r a)

instance Expr r (Z3Int r) where
  sort = do
    ctx <- getContext
    liftEffect $ Base.mkIntSort ctx

instance Expr r (Z3Bool r) where
  sort = do
    ctx <- getContext
    liftEffect $ Base.mkBoolSort ctx

instance (Expr r idx, Expr r val) => Expr r (Z3Array r idx val) where
  sort = do
    ctx <- getContext
    idxSort <- sort
    valSort <- sort
    liftEffect $ Base.mkArraySort ctx idxSort valSort


forall_ :: forall a r. Expr r a => Array a ->  Z3Bool r -> Z3Bool r
forall_ = Base.unsafeForall

distinct :: forall a r. Expr r a => Array a -> Z3 r (Z3Bool r)
distinct a = do
  ctx <- getContext
  liftEffect $ Base.distinct ctx a

class Equality a b r | a b -> r where
  eq :: a -> b -> Z3Bool r
  neq :: a -> b -> Z3Bool r

instance Equality (Z3Int r) Int r where
  eq a b = Base.unsafeEq a b
  neq a b = Base.unsafeNeq a b

instance Equality (Z3Int r) BigInt r where
  eq a b = Base.unsafeEq a b
  neq a b = Base.unsafeNeq a b

instance Equality (Z3Int r) (Z3Int r) r where
  eq a b = Base.unsafeEq a b
  neq a b = Base.unsafeNeq a b

instance Equality (Z3Array r idx val) (Z3Array r idx val) r where
  eq a b = Base.unsafeEq a b
  neq a b = Base.unsafeNeq a b


class Arith a b r | a b -> r where
  le :: a -> b -> Z3Bool r
  ge :: a -> b -> Z3Bool r
  lt :: a -> b -> Z3Bool r
  gt :: a -> b -> Z3Bool r
  add :: a -> b -> a
  mul :: a -> b -> a

instance Arith (Z3Int r) Int r where
  le a b = Base.unsafeLe a b
  ge a b = Base.unsafeGe a b
  lt a b = Base.unsafeLt a b
  gt a b = Base.unsafeGt a b
  add a b = Base.unsafeAdd a b
  mul a b = Base.unsafeMul a b

instance Arith (Z3Int r) BigInt r where
  le a b = Base.unsafeLe a b
  ge a b = Base.unsafeGe a b
  lt a b = Base.unsafeLt a b
  gt a b = Base.unsafeGt a b
  add a b = Base.unsafeAdd a b
  mul a b = Base.unsafeMul a b

instance Arith (Z3Int r) (Z3Int r) r where
  le a b = Base.unsafeLe a b
  ge a b = Base.unsafeGe a b
  lt a b = Base.unsafeLt a b
  gt a b = Base.unsafeGt a b
  add a b = Base.unsafeAdd a b
  mul a b = Base.unsafeMul a b


store :: forall r idx val. Expr r idx => Expr r val =>
                            Z3Array r idx val -> idx -> val -> Z3Array r idx val
store = Base.store

select :: forall r idx val. Expr r idx => Expr r val =>
                            Z3Array r idx val -> idx -> val
select = Base.select

int :: forall r. Z3 r (Z3Int r)
int = do
  ctx <- getContext
  name <- freshName
  liftEffect $ Base.mkIntVar ctx name

intVal :: forall r. Int -> Z3 r (Z3Int r)
intVal b = do
  ctx <- getContext
  liftEffect $ Base.mkIntVal ctx b

intVector :: forall r. Int -> Z3 r (Array (Z3Int r))
intVector n = traverse (const int) (1..n)

bool :: forall r. Z3 r (Z3Bool r)
bool = do
  ctx <- getContext
  name <- freshName
  liftEffect $ Base.mkBoolVar ctx name

boolVal :: forall r. Boolean -> Z3 r (Z3Bool r)
boolVal b = do
  ctx <- getContext
  liftEffect $ Base.mkBoolVal ctx b

boolVector :: forall r. Int -> Z3 r (Array (Z3Bool r))
boolVector n = traverse (const bool) (1..n)


array :: forall r idx val. Expr r idx => Expr r val => Z3 r (Z3Array r idx val)
array = do
  ctx <- getContext
  name <- freshName
  idxSort <- sort 
  valSort <- sort
  liftEffect $ Base.mkArrayVar ctx name idxSort valSort

assert :: forall r. Z3Bool r -> Z3 r Unit
assert v = do
  solver <- getSolver
  liftEffect $ Base.solverAdd v solver

withModel :: forall r a. (Model r -> Z3 r a) -> Z3 r (Maybe a)
withModel f = do
  solver <- getSolver
  res <- liftAff $ toAffE $ Base.solverCheck solver
  if res == "sat" then do
    model <- liftEffect $ Base.solverModel solver
    Just <$> f model
  else
    pure Nothing

showModel :: forall r. Model r -> Z3 r String
showModel = liftEffect <<< Base.showModel

class Eval a b r | a -> b r where
  eval :: Model r -> a -> Z3 r b

instance Eval (Z3Int r) BigInt r where
  eval m v = liftEffect $ Base.evalInt m v

instance Eval (Z3Bool r) Boolean r where
  eval m v = liftEffect $ Base.evalBool m v

instance Eval a b r => Eval (Array a) (Array b) r where
  eval = traverse <<< eval


run :: forall a. (forall r. Z3 r a) -> Aff a
run (Z3 m) = do
  z3 <- toAffE $ Base.initz3 
  em <- liftEffect $ Base.em z3
  ctx <- liftEffect $ Base.freshContext z3
  slv <- liftEffect $ Base.solver ctx
  ref <- liftEffect $ Ref.new 0
  res <- runReaderT m { context: ctx, solver: slv, counter: ref }
  liftEffect $ Base.killThreads em
  pure res