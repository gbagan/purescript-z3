module Z3.Types where

foreign import data Model :: Type → Type
foreign import data Z3Int :: Type → Type
foreign import data Z3Bool :: Type → Type
foreign import data Z3Array :: Type → Type → Type → Type
foreign import data Z3Sort :: Type → Type → Type