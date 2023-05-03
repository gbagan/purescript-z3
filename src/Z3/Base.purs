module Z3.Base where

import Prelude
import Effect (Effect)
import JS.BigInt (BigInt)

foreign import data Context :: Type
foreign import data Solver :: Type
foreign import data Z3Int :: Type
foreign import data Z3Bool :: Type

foreign import context :: String -> Effect Context

foreign import solver :: Context -> Effect Solver

foreign import solverAdd :: Z3Bool -> Solver -> Effect Unit

foreign import mkIntVar :: Context -> String -> Effect Z3Int

foreign import unsafeLe :: forall a b. a -> b -> Z3Bool 

foreign import unsafeGe :: forall a b. a -> b -> Z3Bool

foreign import unsafeAdd :: forall a b. a -> b -> a

class Arith a b where
  le :: a -> b -> Z3Bool
  ge :: a -> b -> Z3Bool
  add :: a -> b -> a

instance Arith Z3Int BigInt where
  le a b = unsafeLe a b
  ge a b = unsafeGe a b
  add a b = unsafeAdd a b

instance Arith Z3Int Z3Int where
  le a b = unsafeLe a b
  ge a b = unsafeGe a b
  add a b = unsafeAdd a b