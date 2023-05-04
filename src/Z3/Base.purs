module Z3.Base where

import Prelude
import Effect (Effect)
import Promise (Promise)

foreign import data Z3 :: Type
foreign import data Context :: Type
foreign import data Solver :: Type
foreign import data Z3Int :: Type
foreign import data Z3Bool :: Type

foreign import initz3 :: Effect (Promise Z3)

foreign import context :: String -> Z3 -> Effect Context

foreign import solver :: Context -> Effect Solver

foreign import solverAdd :: Z3Bool -> Solver -> Effect Unit

foreign import solverCheck :: Solver -> Effect (Promise String)

foreign import mkIntVar :: Context -> String -> Effect Z3Int

foreign import unsafeLe :: forall a b. a -> b -> Effect Z3Bool 

foreign import unsafeGe :: forall a b. a -> b -> Effect Z3Bool

foreign import unsafeAdd :: forall a b. a -> b -> Effect a