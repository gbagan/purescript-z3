module Z3.Base where

import Prelude
import Effect (Effect)
import JS.BigInt (BigInt)
import Promise (Promise)

foreign import data Z3 :: Type -> Type
foreign import data Context :: Type -> Type
foreign import data Solver :: Type -> Type
foreign import data Model :: Type -> Type
foreign import data Z3Int :: Type -> Type
foreign import data Z3Bool :: Type -> Type

foreign import initz3 :: forall r. Effect (Promise (Z3 r))

foreign import context :: forall r. String -> (Z3 r) -> Effect (Context r)

foreign import solver :: forall r. Context r -> Effect (Solver r)

foreign import solverAdd :: forall r. Z3Bool r -> Solver r -> Effect Unit

foreign import solverCheck :: forall r. Solver r -> Effect (Promise String)

foreign import solverModel :: forall r. Solver r -> Effect (Model r)

foreign import showModel :: forall r. Model r -> Effect String

foreign import evalInt :: forall r.  Model r ->  Z3Int r -> Effect BigInt

foreign import mkIntVar :: forall r. Context r -> String -> Effect (Z3Int r)

foreign import mkBoolVar :: forall r. Context r -> String -> Effect (Z3Bool r)

foreign import and_ :: forall r. Context r -> Z3Bool r -> Z3Bool r -> Effect (Z3Bool r) 

foreign import or_ :: forall r. Context r -> Z3Bool r -> Z3Bool r ->  Effect (Z3Bool r)

foreign import not_ :: forall r. Context r -> Z3Bool r -> Effect (Z3Bool r) 

foreign import distinct :: forall a r. Context r -> Array a -> Effect (Z3Bool r)

foreign import unsafeEq :: forall r a b. a -> b -> Effect (Z3Bool r) 

foreign import unsafeNeq :: forall r a b. a -> b -> Effect (Z3Bool r) 

foreign import unsafeLe :: forall r a b. a -> b -> Effect (Z3Bool r) 

foreign import unsafeGe :: forall r a b. a -> b -> Effect (Z3Bool r)

foreign import unsafeLt :: forall r a b. a -> b -> Effect (Z3Bool r) 

foreign import unsafeGt :: forall r a b. a -> b -> Effect (Z3Bool r)

foreign import unsafeAdd :: forall a b. a -> b -> Effect a