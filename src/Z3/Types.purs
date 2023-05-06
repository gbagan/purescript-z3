module Z3.Types
  where

foreign import data Model :: Type → Type

foreign import data Z3Int :: Type → Type

foreign import data Z3Real :: Type → Type

foreign import data Z3Bool :: Type → Type

foreign import data Z3Array :: Type → Type → Type → Type

foreign import data Z3Function :: Type → Type → Type → Type

foreign import data Z3Function2 :: Type -> Type → Type → Type → Type

foreign import data Z3Sort :: Type → Type → Type