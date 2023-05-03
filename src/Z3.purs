module Z3 where

import Prelude
import Control.Monad.Reader.Trans (runReaderT, ReaderT, asks)
import Effect (Effect)
import Effect.Ref (Ref)
import Effect.Ref as Ref
import Effect.Class (class MonadEffect, liftEffect)
import Z3.Base (Solver, Context, Z3Bool, Z3Int, context, solver, solverAdd, mkIntVar)

class (Applicative m, Monad m, MonadEffect m) <= MonadZ3 m where
  getSolver  :: m Solver
  getContext :: m Context
  freshName :: m String

data Z3Env
  = Z3Env 
    { context :: Context
    , solver :: Solver
    , counter :: Ref Int
    }


newtype Z3 a = Z3 (ReaderT Z3Env Effect a)
derive newtype instance Functor Z3
derive newtype instance Apply Z3
derive newtype instance Applicative Z3
derive newtype instance Bind Z3
derive newtype instance Monad Z3
derive newtype instance MonadEffect Z3


intVar :: forall m. MonadZ3 m => m Z3Int 
intVar = do
  ctx <- getContext
  name <- freshName
  liftEffect $ mkIntVar ctx name

instance MonadZ3 Z3 where
  getSolver  = Z3 $ asks \(Z3Env {solver}) -> solver
  getContext = Z3 $ asks \(Z3Env {context}) -> context
  freshName = Z3 $ do
    c <- asks \(Z3Env {counter}) -> counter
    v <- liftEffect $ Ref.read c
    liftEffect $ Ref.write (v+1) c
    pure $ "x_" <> show v

assert :: forall m. MonadZ3 m => Z3Bool -> m Unit
assert v = do
  solver <- getSolver
  liftEffect $ solverAdd v solver
  

run :: forall a. String -> Z3 a -> Effect a
run name (Z3 m) = do
  ctx <- context name
  slv <- solver ctx
  ref <- Ref.new 0
  runReaderT m (Z3Env { context: ctx, solver: slv, counter: ref })