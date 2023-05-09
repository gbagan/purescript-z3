module Z3
  ( Z3
  , OptMode
  , class Expr
  , class Arith
  , class Equality
  , class Eval
  , class EvalRL
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
  , distinct
  , sum
  , product
  , forall_
  , exists
  , bool
  , boolVal
  , boolVector
  , int
  , intVal
  , intVector
  , real
  , realVal
  , realVector
  , toReal
  , array
  , function
  , function2
  , apply
  , apply2
  , select
  , store
  , assert
  , assertSoft
  , assertAll
  , withModel
  , showModel
  , eval
  , evalRL
  , minimize
  , maximize
  , run
  , runOpt
  , module Export
  )
  where

import Prelude

import Control.Monad.Reader.Trans (runReaderT, ReaderT, asks)
import Data.Array ((..))
import Data.Function.Uncurried (runFn2, runFn3)
import Data.Maybe (Maybe(..))
import Data.Symbol (class IsSymbol) 
import Data.Traversable (traverse, traverse_)
import Effect.Aff (Aff)
import Effect.Aff.Class (class MonadAff, liftAff)
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Ref (Ref)
import Effect.Ref as Ref
import Effect.Uncurried (runEffectFn1, runEffectFn2, runEffectFn3, runEffectFn4, runEffectFn5)
import JS.BigInt (BigInt)
import Prim.Row as Row
import Prim.RowList (RowList, Cons, Nil, class RowToList)
import Promise.Aff (toAffE)
import Record as Record
import Type.Proxy (Proxy(..))
import Z3.Internal (Solver, Context)
import Z3.Internal as Base
import Z3.Types (Z3Int, Z3Bool, Z3Real, Z3Array, Z3Function, Z3Function2, Z3Sort, Model)
import Z3.Types (Z3Int, Z3Bool, Z3Real, Z3Array, Z3Function, Z3Function2, Z3Sort, Model) as Export

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


data OptMode

-- | A monad which represents a `Z3` computation under a specific context. 
-- | The `Z3`` monad uses a phantom type to  prevent that the computation leaks any Z3 object
-- | references to the surrounding computation.
newtype Z3 :: Type -> Type -> Type -> Type
newtype Z3 r mode a = Z3 (ReaderT (Z3Env r) Aff a)

getSolver :: ∀r mode. Z3 r mode (Solver r)
getSolver  = Z3 $ asks _.solver

getContext :: ∀r mode. Z3 r mode (Context r)
getContext = Z3 $ asks _.context

freshName :: ∀r mode. Z3 r mode String
freshName = Z3 $ do
  c ← asks _.counter
  v ← liftEffect $ Ref.read c
  liftEffect $ Ref.write (v+1) c
  pure $ "x_" <> show v

derive newtype instance Functor (Z3 r mode)
derive newtype instance Apply (Z3 r mode)
derive newtype instance Applicative (Z3 r mode)
derive newtype instance Bind (Z3 r mode)
derive newtype instance Monad (Z3 r mode)
derive newtype instance MonadEffect (Z3 r mode)
derive newtype instance MonadAff (Z3 r mode)

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
  sort :: ∀mode. Z3 r mode (Z3Sort r a)

instance Expr r (Z3Int r) where
  sort = do
    ctx ← getContext
    liftEffect $ runEffectFn1 Base.mkIntSort ctx

instance Expr r (Z3Bool r) where
  sort = do
    ctx ← getContext
    liftEffect $ runEffectFn1 Base.mkBoolSort ctx

instance Expr r (Z3Real r) where
  sort = do
    ctx ← getContext
    liftEffect $ runEffectFn1 Base.mkRealSort ctx

instance (Expr r idx, Expr r val) ⇒ Expr r (Z3Array r idx val) where
  sort = do
    ctx ← getContext
    idxSort ← sort
    valSort ← sort
    liftEffect $ runEffectFn3 Base.mkArraySort ctx idxSort valSort


-- | this function does not work with the current latest repository of z3-solver in NPM
forall_ :: ∀a r. Expr r a ⇒ Array a →  Z3Bool r → Z3Bool r
forall_ = Base.unsafeForall

exists :: ∀a r. Expr r a ⇒ Array a →  Z3Bool r → Z3Bool r
exists = Base.unsafeForall


-- | asserts that all Z3 expressions in the array are distinct
distinct :: ∀a r. Expr r a ⇒ Array a → Z3Bool r
distinct = Base.distinct

class Equality :: Type → Type → Type → Constraint
class Equality a b r | a b → r

instance Equality (Z3Bool r) (Z3Bool r) r
instance Equality (Z3Int r) Int r
instance Equality (Z3Int r) BigInt r
instance Equality Int (Z3Int r) r
instance Equality BigInt (Z3Int r) r
instance Equality (Z3Int r) (Z3Int r) r
instance Equality (Z3Real r) (Z3Real r) r
instance Equality (Z3Real r) Number r
instance Equality Number (Z3Real r) r
instance Equality (Z3Array r idx val) (Z3Array r idx val) r

eq :: ∀ a b r. Equality a b r ⇒ a → b → Z3Bool r
eq a b = Base.unsafeEq a b

neq :: ∀ a b r. Equality a b r ⇒ a → b → Z3Bool r
neq a b = Base.unsafeNeq a b

class Arith :: Type -> Type -> Type -> Type -> Constraint
class Arith a b c r | a b → c r

instance Arith (Z3Int r) Int (Z3Int r) r
instance Arith (Z3Int r) BigInt (Z3Int r) r
instance Arith (Z3Int r) (Z3Int r) (Z3Int r) r
instance Arith Int (Z3Int r) (Z3Int r) r
instance Arith BigInt (Z3Int r) (Z3Int r) r
instance Arith (Z3Real r) (Z3Real r) (Z3Real r) r
instance Arith (Z3Real r) Number (Z3Real r) r
instance Arith Number (Z3Real r) (Z3Real r) r

le :: ∀ a b c r. Arith a b c r ⇒ a → b → Z3Bool r
le = Base.unsafeLe

ge :: ∀ a b c r. Arith a b c r ⇒ a → b → Z3Bool r
ge = Base.unsafeGe

lt :: ∀ a b c r. Arith a b c r ⇒ a → b → Z3Bool r
lt = Base.unsafeLt

gt :: ∀ a b c r. Arith a b c r ⇒ a → b → Z3Bool r
gt = Base.unsafeGt

add :: ∀ a b c r. Arith a b c r ⇒ a → b → c
add a b = Base.unsafeAdd a b

sub :: ∀ a b c r. Arith a b c r ⇒ a → b → c
sub a b = Base.unsafeSub a b

mul :: ∀ a b c r. Arith a b c r ⇒ a → b → c
mul a b = Base.unsafeMul a b

div :: ∀ a b c r. Arith a b c r ⇒ a → b → c
div a b = Base.unsafeDiv a b

mod_ :: ∀ a b c r. Arith a b c r ⇒ a → b → c
mod_ a b = Base.unsafeMod a b

pow :: ∀ a b c r. Arith a b c r ⇒ a → b → c
pow a b = Base.unsafePow a b

sum :: ∀a r. Arith a a a r ⇒ Array a → a
sum = Base.sum

product :: ∀a r. Arith a a a r ⇒ Array a → a
product = Base.product

toReal :: ∀r. Z3Int r → Z3Real r
toReal = Base.toReal

store :: ∀r idx val. Expr r idx ⇒ Expr r val ⇒
                            Z3Array r idx val → idx → val → Z3Array r idx val
store = runFn3 Base.store

select :: ∀r idx val. Expr r idx ⇒ Expr r val ⇒
                            Z3Array r idx val → idx → val
select = runFn2 Base.select

apply :: ∀r dom img. Expr r dom ⇒ Expr r img ⇒
                            Z3Function r dom img → dom → img
apply = runFn2 Base.apply

apply2 :: ∀r dom1 dom2 img. Expr r dom1 ⇒ Expr r dom2 ⇒ Expr r img ⇒
                            Z3Function2 r dom1 dom2 img → dom1 → dom2 → img
apply2 = runFn3 Base.apply2

-- | Create an integer Z3 variable with a fresh name
int :: ∀r mode. Z3 r mode (Z3Int r)
int = do
  ctx ← getContext
  name ← freshName
  liftEffect $ runEffectFn2 Base.mkIntVar ctx name

-- | Create an integer Z3 value
intVal :: ∀r mode. Int → Z3 r mode (Z3Int r)
intVal b = do
  ctx ← getContext
  liftEffect $ runEffectFn2 Base.mkIntVal ctx b


-- | Create an  array of n integer Z3 variables
intVector :: ∀r mode. Int → Z3 r mode (Array (Z3Int r))
intVector n = traverse (const int) (1..n)

-- | Create a boolean Z3 variable with a fresh name
bool :: ∀r mode. Z3 r mode (Z3Bool r)
bool = do
  ctx ← getContext
  name ← freshName
  liftEffect $ runEffectFn2 Base.mkBoolVar ctx name

-- | Create a boolean Z3 value
boolVal :: ∀r mode. Boolean → Z3 r mode (Z3Bool r)
boolVal b = do
  ctx ← getContext
  liftEffect $ runEffectFn2 Base.mkBoolVal ctx b

-- | Create an  array of n boolean Z3 variables
boolVector :: ∀r mode. Int → Z3 r mode (Array (Z3Bool r))
boolVector n = traverse (const bool) (1..n)

-- | Create a boolean Z3 variable with a fresh name
real :: ∀r mode. Z3 r mode (Z3Real r)
real = do
  ctx ← getContext
  name ← freshName
  liftEffect $ runEffectFn2 Base.mkRealVar ctx name

-- | Create a real Z3 value
realVal :: ∀r mode. Number → Z3 r mode (Z3Real r)
realVal v = do
  ctx ← getContext
  liftEffect $ runEffectFn2 Base.mkRealVal ctx v

-- | Create an  array of n real Z3 variables
realVector :: ∀r mode. Int → Z3 r mode (Array (Z3Real r))
realVector n = traverse (const real) (1..n)


-- | Create an  array Z3 variable (not to be confused with an array of Z3 variables)
array :: ∀r mode idx val. Expr r idx ⇒ Expr r val ⇒ Z3 r mode (Z3Array r idx val)
array = do
  ctx ← getContext
  name ← freshName
  idxSort ← sort 
  valSort ← sort
  liftEffect $ runEffectFn4 Base.mkArrayVar ctx name idxSort valSort

-- | declare a function of arity 1
function :: ∀r mode dom img. Expr r dom ⇒ Expr r img ⇒ Z3 r mode (Z3Function r dom img)
function = do
  ctx ← getContext
  name ← freshName
  domSort ← sort 
  imgSort ← sort
  liftEffect $ runEffectFn4 Base.mkFunDecl ctx name domSort imgSort

-- | declare a function of arity 2
function2 :: ∀r mode dom1 dom2 img. Expr r dom1 ⇒ Expr r dom2 ⇒ Expr r img ⇒
                Z3 r mode (Z3Function2 r dom1 dom2 img)
function2 = do
  ctx ← getContext
  name ← freshName
  dom1Sort ← sort
  dom2Sort ← sort 
  imgSort ← sort
  liftEffect $ runEffectFn5 Base.mkFunDecl2 ctx name dom1Sort dom2Sort imgSort

-- | Add a new assertion to the solver
assert :: ∀r mode. Z3Bool r → Z3 r mode Unit
assert v = do
  solver ← getSolver
  liftEffect $ runEffectFn2 Base.solverAdd solver v


-- | Add a new assertion to the solver
assertSoft :: ∀r. Z3Bool r → Int → String →  Z3 r OptMode Unit
assertSoft v weight id = do
  solver ← getSolver
  liftEffect $ runEffectFn4 Base.solverAddSoft solver v weight id

-- | Add an array of assertions to the solver
assertAll :: ∀r mode. Array (Z3Bool r) → Z3 r mode Unit
assertAll = traverse_ assert

-- | Check if the assertions are satisfiable.
-- | If satisfiable, compute a value from the given model
-- | ```haskell
-- | withModel \m → eval m [x, y, z]
-- | ````
withModel :: ∀r mode a. (Model r → Z3 r mode a) → Z3 r mode (Maybe a)
withModel f = do
  solver ← getSolver
  res ← liftAff $ toAffE $ runEffectFn1 Base.solverCheck solver
  if res == "sat" then do
    model ← liftEffect $ runEffectFn1 Base.solverModel solver
    Just <$> f model
  else
    pure Nothing

showModel :: ∀r mode. Model r → Z3 r mode String
showModel = liftEffect <<< runEffectFn1 Base.showModel

-- | Add objective function to minimize.
minimize :: ∀a r. Arith a a a r ⇒ a → Z3 r OptMode Unit
minimize expr = do
  solver ← getSolver
  liftEffect $ runEffectFn2 Base.minimize solver expr

-- | Add objective function to maximize.
maximize :: ∀a r. Arith a a a r ⇒ a → Z3 r OptMode Unit
maximize expr = do
  solver ← getSolver
  liftEffect $ runEffectFn2 Base.maximize solver expr


class Eval a b r | a → b r where
  eval :: ∀mode. Model r → a → Z3 r mode b

instance Eval (Z3Int r) BigInt r where
  eval m v = liftEffect $ runEffectFn2 Base.evalInt m v

instance Eval (Z3Bool r) Boolean r where
  eval m v = liftEffect $ runEffectFn2 Base.evalBool m v

instance Eval a b r ⇒ Eval (Array a) (Array b) r where
  eval = traverse <<< eval

instance (RowToList a al, EvalRL al a b r) ⇒ Eval (Record a) (Record b) r where
  eval m a = evalRL (Proxy :: _ al) m a

class EvalRL :: RowList Type → Row Type → Row Type → Type → Constraint
class EvalRL aL a b r | aL → a b r where
  evalRL :: ∀mode. Proxy aL → Model r → Record a → Z3 r mode (Record b)

instance EvalRL Nil () () r where
  evalRL _ = const pure

instance
  ( EvalRL tail aTail bTail r
  , Eval a b r
  , IsSymbol sym
  , Row.Lacks sym aTail
  , Row.Lacks sym bTail
  , Row.Cons sym a aTail aRow
  , Row.Cons sym b bTail bRow
  ) =>
  EvalRL (Cons sym a tail) aRow bRow r where
  evalRL _ model a' = do
    let
      this = Record.get (Proxy :: _ sym) a'
    val <- eval model this
    tail <- evalRL (Proxy :: _ tail) model (Record.delete (Proxy :: _ sym) a')
    pure $ Record.insert (Proxy :: _ sym) val tail

-- | Run a `Z3` computation.
run :: ∀a. (∀r mode. Z3 r mode a) → Aff a
run (Z3 m) = do
  z3 ← toAffE $ Base.initz3 
  em ← liftEffect $ runEffectFn1 Base.em z3
  ctx ← liftEffect $ runEffectFn1 Base.freshContext z3
  slv ← liftEffect $ runEffectFn1 Base.solver ctx
  ref ← liftEffect $ Ref.new 0
  res ← runReaderT m { context: ctx, solver: slv, counter: ref }
  liftEffect $ runEffectFn1 Base.killThreads em
  pure res

-- | Run a `Z3` optimization computation.  
runOpt :: ∀a. (∀r. Z3 r OptMode a) → Aff a
runOpt (Z3 m) = do
  z3 ← toAffE $ Base.initz3 
  em ← liftEffect $ runEffectFn1 Base.em z3
  ctx ← liftEffect $ runEffectFn1 Base.freshContext z3
  slv ← liftEffect $ runEffectFn1 Base.optimize ctx
  ref ← liftEffect $ Ref.new 0
  res ← runReaderT m { context: ctx, solver: slv, counter: ref }
  liftEffect $ runEffectFn1 Base.killThreads em
  pure res
