module Z3.Internal
  where

import Prelude
import Effect (Effect)
import JS.BigInt (BigInt)
import Promise (Promise)
import Z3.Types (Model, Z3Int, Z3Real, Z3Bool, Z3Array, Z3Function, Z3Function2, Z3Sort)

foreign import data Z3 :: Type → Type
foreign import data Em :: Type → Type
foreign import data Context :: Type → Type
foreign import data Solver :: Type → Type

foreign import initz3 :: ∀r. Effect (Promise (Z3 r))

foreign import em :: ∀r. Z3 r → Effect (Em r)

foreign import context :: ∀r. String → Z3 r → Effect (Context r)

foreign import freshContext :: ∀r. Z3 r → Effect (Context r)

foreign import solver :: ∀r. Context r → Effect (Solver r)

foreign import optimize :: ∀r. Context r → Effect (Solver r)

foreign import solverAdd :: ∀r. Z3Bool r → Solver r → Effect Unit

foreign import solverAddSoft :: ∀r. Z3Bool r → Int → String → Solver r → Effect Unit

foreign import solverCheck :: ∀r. Solver r → Effect (Promise String)

foreign import maximize :: ∀r a . a → Solver r → Effect Unit

foreign import minimize :: ∀r a. a →  Solver r → Effect Unit


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

foreign import mkRealVar :: ∀r. Context r → String → Effect (Z3Real r)

foreign import mkRealVal :: ∀r. Context r → Number → Effect (Z3Real r)

foreign import mkRealSort :: ∀r. Context r → Effect (Z3Sort r (Z3Real r))


foreign import mkArrayVar :: ∀r idx val. Context r 
                                            → String 
                                            → (Z3Sort r idx)
                                            → (Z3Sort r val) 
                                            → Effect (Z3Array r idx val)

foreign import mkArraySort :: ∀r idx val. Context r  
                                            → (Z3Sort r idx)
                                            → (Z3Sort r val) 
                                            → Effect (Z3Sort r (Z3Array r idx val))

foreign import mkFunDecl :: ∀r dom img. Context r 
                                            → String 
                                            → (Z3Sort r dom)
                                            → (Z3Sort r img) 
                                            → Effect (Z3Function r dom img)

foreign import mkFunDecl2 :: ∀r dom1 dom2 img. Context r 
                                            → String 
                                            → (Z3Sort r dom1)
                                            → (Z3Sort r dom2)
                                            → (Z3Sort r img) 
                                            → Effect (Z3Function2 r dom1 dom2 img)

foreign import and :: ∀r. Z3Bool r → Z3Bool r → Z3Bool r

foreign import or :: ∀r. Z3Bool r → Z3Bool r →  Z3Bool r

foreign import xor :: ∀r. Z3Bool r → Z3Bool r →  Z3Bool r

foreign import implies :: ∀r. Z3Bool r → Z3Bool r →  Z3Bool r

foreign import not_ :: ∀r. Z3Bool r → Z3Bool r

foreign import distinct :: ∀a r. Array a → Z3Bool r

foreign import sum :: ∀a. Array a → a

foreign import product :: ∀a. Array a → a


foreign import unsafeForall :: forall a r. Array a → Z3Bool r → Z3Bool r

foreign import unsafeExists :: forall a r. Array a → Z3Bool r → Z3Bool r

foreign import unsafeEq :: ∀r a b. a → b → Z3Bool r 

foreign import unsafeNeq :: ∀r a b. a → b → Z3Bool r

foreign import unsafeLe :: ∀r a b. a → b → Z3Bool r 

foreign import unsafeGe :: ∀r a b. a → b → Z3Bool r

foreign import unsafeLt :: ∀r a b. a → b → Z3Bool r 

foreign import unsafeGt :: ∀r a b. a → b → Z3Bool r

foreign import unsafeAdd :: ∀a b c. a → b → c

foreign import unsafeMul :: ∀a b c. a → b → c

foreign import unsafeSub :: ∀a b c. a → b → c

foreign import unsafeDiv :: ∀a b c. a → b → c

foreign import unsafeMod :: ∀a b c. a → b → c

foreign import unsafePow :: ∀a b c. a → b → c

foreign import toReal :: ∀r. Z3Int r → Z3Real r

foreign import store :: ∀r idx val. Z3Array r idx val → idx → val → Z3Array r idx val

foreign import select :: ∀r idx val. Z3Array r idx val → idx → val

foreign import apply :: ∀r dom img. Z3Function r dom img → dom → img

foreign import apply2 :: ∀r dom1 dom2 img. Z3Function2 r dom1 dom2 img → dom1 → dom2 → img


foreign import killThreads :: ∀r. Em r → Effect Unit