module Z3.Base
  where

import Prelude
import Effect (Effect)
import JS.BigInt (BigInt)
import Promise (Promise)

foreign import data Z3 :: Type → Type
foreign import data Em :: Type → Type
foreign import data Context :: Type → Type
foreign import data Solver :: Type → Type
foreign import data Model :: Type → Type
foreign import data Z3Int :: Type → Type
foreign import data Z3Bool :: Type → Type

foreign import data Z3Array :: Type → Type → Type → Type
foreign import data Z3Sort :: Type → Type → Type

foreign import initz3 :: ∀r. Effect (Promise (Z3 r))

foreign import em :: ∀r. Z3 r → Effect (Em r)

foreign import context :: ∀r. String → Z3 r → Effect (Context r)

foreign import freshContext :: ∀r. Z3 r → Effect (Context r)

foreign import solver :: ∀r. Context r → Effect (Solver r)

foreign import solverAdd :: ∀r. Z3Bool r → Solver r → Effect Unit

foreign import solverCheck :: ∀r. Solver r → Effect (Promise String)

foreign import solverModel :: ∀r. Solver r → Effect (Model r)

foreign import showModel :: ∀r. Model r → Effect String

foreign import evalInt :: ∀r.  Model r →  Z3Int r → Effect BigInt

foreign import evalBool :: ∀r.  Model r →  Z3Bool r → Effect Boolean

foreign import mkIntVar :: ∀r. Context r → String → Effect (Z3Int r)

foreign import mkIntVal :: ∀r. Context r → Int → Effect (Z3Int r)

foreign import mkIntSort :: ∀r. Context r → Effect (Z3Sort r (Z3Int r))


foreign import mkBoolVar :: ∀r. Context r → String → Effect (Z3Bool r)

foreign import mkBoolVal :: ∀r. Context r → Boolean → Effect (Z3Bool r)

foreign import mkBoolSort :: ∀r. Context r → Effect (Z3Sort r (Z3Bool r))


foreign import mkArrayVar :: ∀r idx val. Context r 
                                            → String 
                                            → (Z3Sort r idx)
                                            → (Z3Sort r val) 
                                            → Effect (Z3Array r idx val)

foreign import mkArraySort :: ∀r idx val. Context r  
                                            → (Z3Sort r idx)
                                            → (Z3Sort r val) 
                                            → Effect (Z3Sort r (Z3Array r idx val))

foreign import and :: ∀r. Z3Bool r → Z3Bool r → Z3Bool r

foreign import or :: ∀r. Z3Bool r → Z3Bool r →  Z3Bool r

foreign import xor :: ∀r. Z3Bool r → Z3Bool r →  Z3Bool r

foreign import implies :: ∀r. Z3Bool r → Z3Bool r →  Z3Bool r

foreign import not_ :: ∀r. Z3Bool r → Z3Bool r

foreign import distinct :: ∀a r. Context r → Array a → Effect (Z3Bool r)

foreign import unsafeForall :: forall a r. Array a → Z3Bool r → Z3Bool r

foreign import unsafeEq :: ∀r a b. a → b → Z3Bool r 

foreign import unsafeNeq :: ∀r a b. a → b → Z3Bool r

foreign import unsafeLe :: ∀r a b. a → b → Z3Bool r 

foreign import unsafeGe :: ∀r a b. a → b → Z3Bool r

foreign import unsafeLt :: ∀r a b. a → b → Z3Bool r 

foreign import unsafeGt :: ∀r a b. a → b → Z3Bool r

foreign import unsafeAdd :: ∀a b. a → b → a

foreign import unsafeMul :: ∀a b. a → b → a

foreign import store :: ∀r idx val. Z3Array r idx val → idx → val → Z3Array r idx val

foreign import select :: ∀r idx val. Z3Array r idx val → idx → val

foreign import killThreads :: ∀r. Em r → Effect Unit