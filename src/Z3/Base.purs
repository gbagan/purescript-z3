module Z3.Base where

import Prelude
import Effect (Effect)
import JS.BigInt (BigInt)
import Promise (Promise)

foreign import data Z3 :: Type -> Type
foreign import data Em :: Type -> Type
foreign import data Context :: Type -> Type
foreign import data Solver :: Type -> Type
foreign import data Model :: Type -> Type
foreign import data Z3Int :: Type -> Type
foreign import data Z3Bool :: Type -> Type

foreign import data Z3Array :: Type -> Type -> Type -> Type
foreign import data Z3Sort :: Type -> Type -> Type

foreign import initz3 :: forall r. Effect (Promise (Z3 r))

foreign import em :: forall r. Z3 r -> Effect (Em r)

foreign import context :: forall r. String -> Z3 r -> Effect (Context r)

foreign import freshContext :: forall r. Z3 r -> Effect (Context r)

foreign import solver :: forall r. Context r -> Effect (Solver r)

foreign import solverAdd :: forall r. Z3Bool r -> Solver r -> Effect Unit

foreign import solverCheck :: forall r. Solver r -> Effect (Promise String)

foreign import solverModel :: forall r. Solver r -> Effect (Model r)

foreign import showModel :: forall r. Model r -> Effect String

foreign import evalInt :: forall r.  Model r ->  Z3Int r -> Effect BigInt

foreign import evalBool :: forall r.  Model r ->  Z3Bool r -> Effect Boolean

foreign import mkIntVar :: forall r. Context r -> String -> Effect (Z3Int r)

foreign import mkIntVal :: forall r. Context r -> Int -> Effect (Z3Int r)

foreign import mkIntSort :: forall r. Context r -> Effect (Z3Sort r (Z3Int r))


foreign import mkBoolVar :: forall r. Context r -> String -> Effect (Z3Bool r)

foreign import mkBoolVal :: forall r. Context r -> Boolean -> Effect (Z3Bool r)

foreign import mkBoolSort :: forall r. Context r -> Effect (Z3Sort r (Z3Bool r))


foreign import mkArrayVar :: forall r idx val. Context r 
                                            -> String 
                                            -> (Z3Sort r idx)
                                            -> (Z3Sort r val) 
                                            -> Effect (Z3Array r idx val)

foreign import mkArraySort :: forall r idx val. Context r  
                                            -> (Z3Sort r idx)
                                            -> (Z3Sort r val) 
                                            -> Effect (Z3Sort r (Z3Array r idx val))

foreign import and_ :: forall r. Z3Bool r -> Z3Bool r -> Z3Bool r

foreign import or_ :: forall r. Z3Bool r -> Z3Bool r ->  Z3Bool r

foreign import not_ :: forall r. Z3Bool r -> Z3Bool r

foreign import distinct :: forall a r. Context r -> Array a -> Effect (Z3Bool r)

foreign import unsafeEq :: forall r a b. a -> b -> Z3Bool r 

foreign import unsafeNeq :: forall r a b. a -> b -> Z3Bool r

foreign import unsafeLe :: forall r a b. a -> b -> Z3Bool r 

foreign import unsafeGe :: forall r a b. a -> b -> Z3Bool r

foreign import unsafeLt :: forall r a b. a -> b -> Z3Bool r 

foreign import unsafeGt :: forall r a b. a -> b -> Z3Bool r

foreign import unsafeAdd :: forall a b. a -> b -> a

foreign import unsafeMul :: forall a b. a -> b -> a

foreign import store :: forall r idx val. Z3Array r idx val -> idx -> val -> Z3Array r idx val

foreign import select :: forall r idx val. Z3Array r idx val -> idx -> val

foreign import killThreads :: forall r. Em r -> Effect Unit