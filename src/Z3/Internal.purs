module Z3.Internal
  where

import Prelude
import Effect (Effect)
import Effect.Uncurried (EffectFn1, EffectFn2, EffectFn3, EffectFn4, EffectFn5)
import Data.Function.Uncurried (Fn2, Fn3)
import JS.BigInt (BigInt)
import Promise (Promise)
import Z3.Types (Model, Z3Int, Z3Real, Z3Bool, Z3Array, Z3Function, Z3Function2, Z3Sort)

foreign import data Z3 :: Type → Type
foreign import data Em :: Type → Type
foreign import data Context :: Type → Type
foreign import data Solver :: Type → Type

foreign import initz3 :: ∀r. Effect (Promise (Z3 r))

foreign import em :: ∀r. EffectFn1 (Z3 r) (Em r)

foreign import context :: ∀r. EffectFn2 (Z3 r) String (Context r)

foreign import freshContext :: ∀r. EffectFn1 (Z3 r) (Context r)

foreign import solver :: ∀r. EffectFn1 (Context r) (Solver r)

foreign import optimize :: ∀r. EffectFn1 (Context r) (Solver r)

foreign import solverAdd :: ∀r. EffectFn2 (Solver r) (Z3Bool r) Unit

foreign import solverAddSoft :: ∀r. EffectFn4 (Solver r) (Z3Bool r) Int String Unit

foreign import solverCheck :: ∀r. EffectFn1 (Solver r) (Promise String)

foreign import maximize :: ∀r a . EffectFn2 (Solver r) a Unit

foreign import minimize :: ∀r a. EffectFn2 (Solver r) a Unit

foreign import solverModel :: ∀r. EffectFn1 (Solver r) (Model r)

foreign import showModel :: ∀r. EffectFn1 (Model r) String

foreign import evalInt :: ∀r.  EffectFn2 (Model r) (Z3Int r) BigInt

foreign import evalBool :: ∀r.  EffectFn2 (Model r) (Z3Bool r) Boolean

foreign import mkIntVar :: ∀r. EffectFn2 (Context r) String (Z3Int r)

foreign import mkIntVal :: ∀r. EffectFn2 (Context r) Int (Z3Int r)

foreign import mkIntSort :: ∀r. EffectFn1 (Context r) (Z3Sort r (Z3Int r))


foreign import mkBoolVar :: ∀r. EffectFn2 (Context r) String (Z3Bool r)

foreign import mkBoolVal :: ∀r. EffectFn2 (Context r) Boolean (Z3Bool r)

foreign import mkBoolSort :: ∀r. EffectFn1 (Context r) (Z3Sort r (Z3Bool r))

foreign import mkRealVar :: ∀r. EffectFn2 (Context r) String (Z3Real r)

foreign import mkRealVal :: ∀r. EffectFn2 (Context r) Number (Z3Real r)

foreign import mkRealSort :: ∀r. EffectFn1 (Context r) (Z3Sort r (Z3Real r))


foreign import mkArrayVar :: ∀r idx val. EffectFn4 
                                          (Context r) 
                                          String 
                                          (Z3Sort r idx)
                                          (Z3Sort r val) 
                                          (Z3Array r idx val)

foreign import mkArraySort :: ∀r idx val. EffectFn3
                                            (Context r)  
                                            (Z3Sort r idx)
                                            (Z3Sort r val) 
                                            (Z3Sort r (Z3Array r idx val))

foreign import mkFunDecl :: ∀r dom img. EffectFn4
                                          (Context r)
                                          String 
                                          (Z3Sort r dom)
                                          (Z3Sort r img) 
                                          (Z3Function r dom img)

foreign import mkFunDecl2 :: ∀r dom1 dom2 img. EffectFn5
                                                (Context r)
                                                String 
                                                (Z3Sort r dom1)
                                                (Z3Sort r dom2)
                                                (Z3Sort r img) 
                                                (Z3Function2 r dom1 dom2 img)

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

foreign import store :: ∀r idx val. Fn3 (Z3Array r idx val) idx val (Z3Array r idx val)

foreign import select :: ∀r idx val. Fn2 (Z3Array r idx val) idx val

foreign import apply :: ∀r dom img. Fn2 (Z3Function r dom img) dom img

foreign import apply2 :: ∀r dom1 dom2 img. Fn3 (Z3Function2 r dom1 dom2 img) dom1 dom2 img

foreign import killThreads :: ∀r. EffectFn1 (Em r) Unit