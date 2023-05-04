module Z3 where

import Prelude

import Control.Monad.Reader.Trans (runReaderT, ReaderT, asks)
import Data.Maybe (Maybe(..))
import Effect.Aff (Aff)
import Effect.Aff.Class (class MonadAff, liftAff)
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Ref (Ref)
import Effect.Ref as Ref
import JS.BigInt (BigInt)
import Promise.Aff (toAffE)
import Z3.Base (Model, Solver, Context, Z3Bool, Z3Int)
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

and_ :: forall r. Z3Bool r -> Z3Bool r -> Z3 r (Z3Bool r)
and_ b1 b2 = do
  ctx <- getContext
  liftEffect $ Base.and_ ctx b1 b2

or_ :: forall r. Z3Bool r -> Z3Bool r -> Z3 r (Z3Bool r)
or_ b1 b2 = do
  ctx <- getContext
  liftEffect $ Base.or_ ctx b1 b2

not_ :: forall r. Z3Bool r -> Z3 r (Z3Bool r)
not_ b = do
  ctx <- getContext
  liftEffect $ Base.not_ ctx b

class Distinct a r | a -> r where
  distinct :: Array a -> Z3 r (Z3Bool r)

instance Distinct (Z3Int r) r where
  distinct a = do
    ctx <- getContext
    liftEffect $ Base.distinct ctx a

class Arith a b r | a -> r where
  eq :: a -> b -> Z3 r (Z3Bool r)
  neq :: a -> b -> Z3 r (Z3Bool r)
  le :: a -> b -> Z3 r (Z3Bool r)
  ge :: a -> b -> Z3 r (Z3Bool r)
  lt :: a -> b -> Z3 r (Z3Bool r)
  gt :: a -> b -> Z3 r (Z3Bool r)
  add :: a -> b -> Z3 r a

instance Arith (Z3Int r) Int r where
  eq a b = liftEffect $ Base.unsafeEq a b
  neq a b = liftEffect $ Base.unsafeNeq a b
  le a b = liftEffect $  Base.unsafeLe a b
  ge a b = liftEffect $ Base.unsafeGe a b
  lt a b = liftEffect $  Base.unsafeLt a b
  gt a b = liftEffect $ Base.unsafeGt a b
  add a b = liftEffect $ Base.unsafeAdd a b

instance Arith (Z3Int r) BigInt r where
  eq a b = liftEffect $ Base.unsafeEq a b
  neq a b = liftEffect $ Base.unsafeNeq a b
  le a b = liftEffect $  Base.unsafeLe a b
  ge a b = liftEffect $ Base.unsafeGe a b
  lt a b = liftEffect $  Base.unsafeLt a b
  gt a b = liftEffect $ Base.unsafeGt a b
  add a b = liftEffect $ Base.unsafeAdd a b

instance Arith (Z3Int r) (Z3Int r) r where
  eq a b = liftEffect $ Base.unsafeEq a b
  neq a b = liftEffect $ Base.unsafeNeq a b
  le a b = liftEffect $ Base.unsafeLe a b
  ge a b = liftEffect $ Base.unsafeGe a b
  lt a b = liftEffect $  Base.unsafeLt a b
  gt a b = liftEffect $ Base.unsafeGt a b
  add a b = liftEffect $ Base.unsafeAdd a b

intVar :: forall r. Z3 r (Z3Int r)
intVar = do
  ctx <- getContext
  name <- freshName
  liftEffect $ Base.mkIntVar ctx name

boolVar :: forall r. Z3 r (Z3Bool r)
boolVar = do
  ctx <- getContext
  name <- freshName
  liftEffect $ Base.mkBoolVar ctx name

assert :: forall r. Z3Bool r -> Z3 r Unit
assert v = do
  solver <- getSolver
  liftEffect $ Base.solverAdd v solver

check :: forall r. Z3 r String
check = do
  solver <- getSolver
  liftAff $ toAffE $ Base.solverCheck solver 

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

evalInt :: forall r.  Model r ->  Z3Int r -> Z3 r BigInt
evalInt m v = liftEffect $ Base.evalInt m v

run :: forall a. String -> (forall r. Z3 r a) -> Aff a
run name (Z3 m) = do
  z3 <- toAffE $ Base.initz3 
  ctx <- liftEffect $ Base.context name z3
  slv <- liftEffect $ Base.solver ctx
  ref <- liftEffect $ Ref.new 0
  runReaderT m { context: ctx, solver: slv, counter: ref }