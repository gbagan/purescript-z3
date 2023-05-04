module Z3 where

import Prelude
import Control.Monad.Reader.Trans (runReaderT, ReaderT, asks)
import Promise.Aff (toAffE)
import Effect.Ref (Ref)
import Effect.Ref as Ref
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Aff (Aff)
import Effect.Aff.Class (class MonadAff, liftAff)
import JS.BigInt (BigInt)
import Z3.Base (Solver, Context, Z3Bool, Z3Int)
import Z3.Base as Base

class (Applicative m, Monad m, MonadEffect m, MonadAff m) <= MonadZ3 m where
  getSolver  :: m Solver
  getContext :: m Context
  freshName :: m String

type Z3Env =
  { context :: Context
  , solver :: Solver
  , counter :: Ref Int
  }


newtype Z3 a = Z3 (ReaderT Z3Env Aff a)

derive newtype instance Functor Z3
derive newtype instance Apply Z3
derive newtype instance Applicative Z3
derive newtype instance Bind Z3
derive newtype instance Monad Z3
derive newtype instance MonadEffect Z3
derive newtype instance MonadAff Z3

class Arith a b where
  le :: forall m. MonadZ3 m => a -> b -> m Z3Bool
  ge :: forall m. MonadZ3 m => a -> b -> m Z3Bool
  add :: forall m. MonadZ3 m => a -> b -> m a

instance Arith Z3Int BigInt where
  le a b = liftEffect $  Base.unsafeLe a b
  ge a b = liftEffect $ Base.unsafeGe a b
  add a b = liftEffect $ Base.unsafeAdd a b

instance Arith Z3Int Z3Int where
  le a b = liftEffect $ Base.unsafeLe a b
  ge a b = liftEffect $ Base.unsafeGe a b
  add a b = liftEffect $ Base.unsafeAdd a b

intVar :: forall m. MonadZ3 m => m Z3Int 
intVar = do
  ctx <- getContext
  name <- freshName
  liftEffect $ Base.mkIntVar ctx name

instance MonadZ3 Z3 where
  getSolver  = Z3 $ asks _.solver
  getContext = Z3 $ asks _.context
  freshName = Z3 $ do
    c <- asks _.counter
    v <- liftEffect $ Ref.read c
    liftEffect $ Ref.write (v+1) c
    pure $ "x_" <> show v

assert :: forall m. MonadZ3 m => Z3Bool -> m Unit
assert v = do
  solver <- getSolver
  liftEffect $ Base.solverAdd v solver

check :: forall m. MonadZ3 m => m String
check = do
  solver <- getSolver
  liftAff $ toAffE $ Base.solverCheck solver 

run :: forall a. String -> Z3 a -> Aff a
run name (Z3 m) = do
  z3 <- toAffE $ Base.initz3 
  ctx <- liftEffect $ Base.context name z3
  slv <- liftEffect $ Base.solver ctx
  ref <- liftEffect $ Ref.new 0
  runReaderT m { context: ctx, solver: slv, counter: ref }