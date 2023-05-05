module Z3
  ( Z3
  , class Expr
  , class Arith
  , class Equality
  , class Eval
  , and
  , or
  , xor
  , not_
  , implies
  , eq
  , neq
  , le
  , ge
  , lt
  , gt
  , add
  , sub
  , mul
  , div
  , mod_
  , pow
  , sort
  , assert
  , assertAll
  , distinct
  , bool
  , boolVal
  , boolVector
  , forall_
  , int
  , intVal
  , intVector
  , array
  , select
  , store
  , withModel
  , showModel
  , eval
  , run
  , module Export
  )
  where

import Prelude

import Control.Monad.Reader.Trans (runReaderT, ReaderT, asks)
import Data.Array ((..))
import Data.Maybe (Maybe(..))
import Data.Traversable (traverse, traverse_)
import Effect.Aff (Aff)
import Effect.Aff.Class (class MonadAff, liftAff)
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Ref (Ref)
import Effect.Ref as Ref
import JS.BigInt (BigInt)
import Promise.Aff (toAffE)
import Z3.Internal (Solver, Context)
import Z3.Internal as Base
import Z3.Types (Z3Int, Z3Bool, Z3Array, Z3Sort, Model)
import Z3.Types (Z3Int, Z3Bool, Z3Array, Z3Sort, Model) as Export

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

-- | A monad which represents a `Z3` computation under a specific context. 
-- | The `Z3`` monad uses a phantom type to  prevent that the computation leaks any Z3 object
-- | references to the surrounding computation.
newtype Z3 r a = Z3 (ReaderT (Z3Env r) Aff a)

getSolver :: ∀r. Z3 r (Solver r)
getSolver  = Z3 $ asks _.solver

getContext :: ∀r.  Z3 r (Context r)
getContext = Z3 $ asks _.context

freshName :: ∀r. Z3 r String
freshName = Z3 $ do
  c ← asks _.counter
  v ← liftEffect $ Ref.read c
  liftEffect $ Ref.write (v+1) c
  pure $ "x_" <> show v

derive newtype instance Functor (Z3 r)
derive newtype instance Apply (Z3 r)
derive newtype instance Applicative (Z3 r)
derive newtype instance Bind (Z3 r)
derive newtype instance Monad (Z3 r)
derive newtype instance MonadEffect (Z3 r)
derive newtype instance MonadAff (Z3 r)

-- | boolean and between two Z3 expressions
and :: ∀r. Z3Bool r → Z3Bool r → Z3Bool r
and b1 b2 = Base.and b1 b2

-- | boolean or between two Z3 expressions
or :: ∀r. Z3Bool r → Z3Bool r → Z3Bool r
or b1 b2 = Base.or b1 b2

-- | boolean xor between two Z3 expressions
xor :: ∀r. Z3Bool r → Z3Bool r → Z3Bool r
xor b1 b2 = Base.xor b1 b2

-- | boolean imply operator between two Z3 expressions
implies :: ∀r. Z3Bool r → Z3Bool r → Z3Bool r
implies b1 b2 = Base.implies b1 b2

-- | boolean not
not_ :: ∀r. Z3Bool r → Z3Bool r
not_ = Base.not_

-- | is the class of Z3 expressions (i.e. Z3 ASTs)
class Expr r a | a → r where
  -- | sort represents the type of a Z3 expression
  sort :: Z3 r (Z3Sort r a)

instance Expr r (Z3Int r) where
  sort = do
    ctx ← getContext
    liftEffect $ Base.mkIntSort ctx

instance Expr r (Z3Bool r) where
  sort = do
    ctx ← getContext
    liftEffect $ Base.mkBoolSort ctx

instance (Expr r idx, Expr r val) ⇒ Expr r (Z3Array r idx val) where
  sort = do
    ctx ← getContext
    idxSort ← sort
    valSort ← sort
    liftEffect $ Base.mkArraySort ctx idxSort valSort


-- | this function does not work with the current latest repository of z3-solver in NPM
forall_ :: ∀a r. Expr r a ⇒ Array a →  Z3Bool r → Z3Bool r
forall_ = Base.unsafeForall

-- | asserts that all Z3 expressions in the array are distinct
distinct :: ∀a r. Expr r a ⇒ Array a → Z3Bool r
distinct = Base.distinct

class Equality a b r | a b → r where
  eq :: a → b → Z3Bool r
  neq :: a → b → Z3Bool r

instance Equality (Z3Bool r) (Z3Bool r) r where
  eq a b = Base.unsafeEq a b
  neq a b = Base.unsafeNeq a b

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


class Arith a b c r | a b → c r where
  le :: a → b → Z3Bool r
  ge :: a → b → Z3Bool r
  lt :: a → b → Z3Bool r
  gt :: a → b → Z3Bool r
  add :: a → b → c
  sub :: a → b → c
  mul :: a → b → c
  div :: a → b → c
  mod_ :: a → b → c
  pow :: a → b → c

instance Arith (Z3Int r) Int (Z3Int r) r where
  le a b = Base.unsafeLe a b
  ge a b = Base.unsafeGe a b
  lt a b = Base.unsafeLt a b
  gt a b = Base.unsafeGt a b
  add a b = Base.unsafeAdd a b
  sub a b = Base.unsafeSub a b
  mul a b = Base.unsafeMul a b
  div a b = Base.unsafeDiv a b
  mod_ a b = Base.unsafeMod a b
  pow a b = Base.unsafePow a b

instance Arith (Z3Int r) BigInt (Z3Int r) r where
  le a b = Base.unsafeLe a b
  ge a b = Base.unsafeGe a b
  lt a b = Base.unsafeLt a b
  gt a b = Base.unsafeGt a b
  add a b = Base.unsafeAdd a b
  sub a b = Base.unsafeSub a b
  mul a b = Base.unsafeMul a b
  div a b = Base.unsafeDiv a b
  mod_ a b = Base.unsafeMod a b
  pow a b = Base.unsafePow a b

instance Arith (Z3Int r) (Z3Int r) (Z3Int r) r where
  le a b = Base.unsafeLe a b
  ge a b = Base.unsafeGe a b
  lt a b = Base.unsafeLt a b
  gt a b = Base.unsafeGt a b
  add a b = Base.unsafeAdd a b
  sub a b = Base.unsafeSub a b
  mul a b = Base.unsafeMul a b
  div a b = Base.unsafeDiv a b
  mod_ a b = Base.unsafeMod a b
  pow a b = Base.unsafePow a b

instance Arith Int (Z3Int r) (Z3Int r) r where
  le a b = Base.unsafeLe a b
  ge a b = Base.unsafeGe a b
  lt a b = Base.unsafeLt a b
  gt a b = Base.unsafeGt a b
  add a b = Base.unsafeAdd a b
  sub a b = Base.unsafeSub a b
  mul a b = Base.unsafeMul a b
  div a b = Base.unsafeDiv a b
  mod_ a b = Base.unsafeMod a b
  pow a b = Base.unsafePow a b

instance Arith BigInt (Z3Int r) (Z3Int r) r where
  le a b = Base.unsafeLe a b
  ge a b = Base.unsafeGe a b
  lt a b = Base.unsafeLt a b
  gt a b = Base.unsafeGt a b
  add a b = Base.unsafeAdd a b
  sub a b = Base.unsafeSub a b
  mul a b = Base.unsafeMul a b
  div a b = Base.unsafeDiv a b
  mod_ a b = Base.unsafeMod a b
  pow a b = Base.unsafePow a b

store :: ∀r idx val. Expr r idx ⇒ Expr r val ⇒
                            Z3Array r idx val → idx → val → Z3Array r idx val
store = Base.store

select :: ∀r idx val. Expr r idx ⇒ Expr r val ⇒
                            Z3Array r idx val → idx → val
select = Base.select

-- | Create an integer Z3 variable with a fresh name
int :: ∀r. Z3 r (Z3Int r)
int = do
  ctx ← getContext
  name ← freshName
  liftEffect $ Base.mkIntVar ctx name

-- | Create an integer Z3 value
intVal :: ∀r. Int → Z3 r (Z3Int r)
intVal b = do
  ctx ← getContext
  liftEffect $ Base.mkIntVal ctx b


-- | Create an  array of n integer Z3 variables
intVector :: ∀r. Int → Z3 r (Array (Z3Int r))
intVector n = traverse (const int) (1..n)

-- | Create a boolean Z3 variable with a fresh name
bool :: ∀r. Z3 r (Z3Bool r)
bool = do
  ctx ← getContext
  name ← freshName
  liftEffect $ Base.mkBoolVar ctx name

-- | Create a boolean Z3 value
boolVal :: ∀r. Boolean → Z3 r (Z3Bool r)
boolVal b = do
  ctx ← getContext
  liftEffect $ Base.mkBoolVal ctx b

-- | Create an  array of n boolean Z3 variables
boolVector :: ∀r. Int → Z3 r (Array (Z3Bool r))
boolVector n = traverse (const bool) (1..n)


-- | Create an  array Z3 variable (not to be confused with an array of Z3 variables)
array :: ∀r idx val. Expr r idx ⇒ Expr r val ⇒ Z3 r (Z3Array r idx val)
array = do
  ctx ← getContext
  name ← freshName
  idxSort ← sort 
  valSort ← sort
  liftEffect $ Base.mkArrayVar ctx name idxSort valSort

-- | Add a new assertion to the solver
assert :: ∀r. Z3Bool r → Z3 r Unit
assert v = do
  solver ← getSolver
  liftEffect $ Base.solverAdd v solver

-- | Add an array of assertions to the solver
assertAll :: ∀r. Array (Z3Bool r) → Z3 r Unit
assertAll = traverse_ assert

-- | Check if the assertions are satisfiable.
-- | If satisfiable, compute a value from the given model
-- | ```haskell
-- | withModel \m → eval m [x, y, z]
-- | ````
withModel :: ∀r a. (Model r → Z3 r a) → Z3 r (Maybe a)
withModel f = do
  solver ← getSolver
  res ← liftAff $ toAffE $ Base.solverCheck solver
  if res == "sat" then do
    model ← liftEffect $ Base.solverModel solver
    Just <$> f model
  else
    pure Nothing

showModel :: ∀r. Model r → Z3 r String
showModel = liftEffect <<< Base.showModel

class Eval a b r | a → b r where
  eval :: Model r → a → Z3 r b

instance Eval (Z3Int r) BigInt r where
  eval m v = liftEffect $ Base.evalInt m v

instance Eval (Z3Bool r) Boolean r where
  eval m v = liftEffect $ Base.evalBool m v

instance Eval a b r ⇒ Eval (Array a) (Array b) r where
  eval = traverse <<< eval


-- | run a `ST` computation
run :: ∀a. (∀r. Z3 r a) → Aff a
run (Z3 m) = do
  z3 ← toAffE $ Base.initz3 
  em ← liftEffect $ Base.em z3
  ctx ← liftEffect $ Base.freshContext z3
  slv ← liftEffect $ Base.solver ctx
  ref ← liftEffect $ Ref.new 0
  res ← runReaderT m { context: ctx, solver: slv, counter: ref }
  liftEffect $ Base.killThreads em
  pure res