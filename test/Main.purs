module Test.Main
  where

import Prelude hiding (add, mul, eq)

import Data.Array ((..), zipWith, unsafeIndex)
import Data.Traversable (traverse, for_, sequence_)
import Debug (traceM)
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Partial.Unsafe (unsafePartial)
import Z3 (add, mul, distinct, eq, ge, le, assert, withModel, eval, run, intVar, intVector)

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
solveDogCatMouse = run do
  dog <- intVar
  cat <- intVar
  mouse <- intVar

  assert $ dog `ge` 1
  assert $ cat `ge` 1
  assert $ mouse `ge` 1

  assert $ (dog `add` cat `add` mouse) `eq` 100
  assert $ (dog `mul` 1500) `add` (cat `mul` 100) `add` (mouse `mul` 25) `eq` 10000

  vals <- withModel \m -> do
    dog' <- eval m dog
    cat' <- eval m cat
    mouse' <- eval m mouse
    pure { dog: dog', mouse: mouse', cat: cat' }
  traceM vals

solveSudoku :: Aff Unit
solveSudoku = run do
  vars <- intVector 81
  for2_ vars sudoku \var val -> do
    if val == 0 then do
      assert $ var `ge` 1
      assert $ var `le` 9
    else
      assert $ var `eq` val
  for_ (0..8) \i -> do
    assert =<< distinct ((0..8) <#> \j -> uIndex vars (i * 9 + j))
    assert =<< distinct ((0..8) <#> \j -> uIndex vars (j * 9 + i))
    assert =<< distinct ((0..8) <#> \j -> uIndex vars (i / 3 * 27 + i `mod` 3 * 3 + j / 3 * 9 + j `mod` 3))

  vals <- withModel \m -> do
    traverse (eval m) vars
  traceM vals

main :: Effect Unit
main = launchAff_ do
  solveDogCatMouse
  solveSudoku