module Test.Main
  where

import Prelude hiding (add, mul, eq)

import Data.Array ((..), zipWith, unsafeIndex)
import Data.Traversable (for_, sequence_)
import Effect.Class (liftEffect)
import Effect.Console (log, logShow)
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Partial.Unsafe (unsafePartial)
import Z3 as Z3
import Z3 (add, mul, eq, ge, le)

sudoku :: Array Int
sudoku = 
  [ 0, 0, 0, 0, 9, 4, 0, 3, 0
  , 0, 0, 0, 5, 1, 0, 0, 0, 7
  , 0, 8, 9, 0, 0, 0, 0, 4, 0
  , 0, 0, 0, 0, 0, 0, 2, 0, 8
  , 0, 6, 0, 2, 0, 1, 0, 5, 0
  , 1, 0, 2, 0, 0, 0, 0, 0, 0
  , 0, 7, 0, 0, 0, 0, 5, 2, 0
  , 9, 0, 0, 0, 6, 5, 0, 0, 0
  , 0, 4, 0, 9, 7, 0, 0, 0, 0
  ]

for2_ :: forall a b m. Applicative m => Array a -> Array b -> (a -> b -> m Unit) -> m Unit
for2_ t1 t2 f = sequence_ (zipWith f t1 t2)

uIndex :: forall a. Array a -> Int -> a
uIndex t i = unsafePartial $ unsafeIndex t i

solveDogCatMouse :: Aff Unit
solveDogCatMouse = Z3.run do
  dog <- Z3.intVar
  cat <- Z3.intVar
  mouse <- Z3.intVar

  Z3.assert $ dog `ge` 1
  Z3.assert $ cat `ge` 1
  Z3.assert $ mouse `ge` 1

  Z3.assert $ (dog `add` cat `add` mouse) `eq` 100
  Z3.assert $ (dog `mul` 1500) `add` (cat `mul` 100) `add` (mouse `mul` 25) `eq` 10000

  vals <- Z3.withModel \m -> do
    dog' <- Z3.eval m dog
    cat' <- Z3.eval m cat
    mouse' <- Z3.eval m mouse
    pure { dog: dog', mouse: mouse', cat: cat' }
  liftEffect $ logShow vals

solveArray :: Aff Unit
solveArray = Z3.run do
  arr <- Z3.arrayVar
  x <- Z3.intVar
  y <- Z3.intVar
  Z3.assert $ Z3.store arr x y `eq` arr
  void $ Z3.withModel \m -> do
    str <- Z3.showModel m
    liftEffect $ log str

solveSudoku :: Aff Unit
solveSudoku = Z3.run do
  vars <- Z3.intVector 81
  for2_ vars sudoku \var val -> do
    if val == 0 then do
      Z3.assert $ var `ge` 1
      Z3.assert $ var `le` 9
    else
      Z3.assert $ var `eq` val
  for_ (0..8) \i -> do
    Z3.assert =<< Z3.distinct ((0..8) <#> \j -> uIndex vars (i * 9 + j))
    Z3.assert =<< Z3.distinct ((0..8) <#> \j -> uIndex vars (j * 9 + i))
    Z3.assert =<< Z3.distinct ((0..8) <#> \j -> uIndex vars (i / 3 * 27 + i `mod` 3 * 3 + j / 3 * 9 + j `mod` 3))

  m <- Z3.withModel \m -> Z3.eval m vars
  liftEffect $ logShow m

main :: Effect Unit
main = launchAff_ do
  solveDogCatMouse
  solveSudoku
  solveArray