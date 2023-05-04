module Test.Main where

import Prelude hiding (add, mul, eq)

import Data.Array ((..), zipWith, unsafeIndex)
import Data.Traversable (traverse, for_, sequence_)
import Debug (traceM)
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Partial.Unsafe (unsafePartial)
import Z3 (add, mul, distinct, eq, ge, le, assert, withModel, evalInt, run, intVar)

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

  assert =<< dog `ge` 1
  assert =<< cat `ge` 1
  assert =<< mouse `ge` 1
   
  sum <- add dog =<< cat `add` mouse
  assert =<< sum `eq` 100
   
  dog1500 <- dog `mul` 1500
  cat100 <- cat `mul` 100
  mouse25 <- mouse `mul` 25
  sum2 <- add dog1500 =<< cat100 `add` mouse25
  assert =<< sum2 `eq` 10000

  vals <- withModel \m -> do
    dog' <- evalInt m dog
    cat' <- evalInt m cat
    mouse' <- evalInt m mouse
    pure { dog: dog', mouse: mouse', cat: cat' }
  traceM vals

solveSudoku :: Aff Unit
solveSudoku = run do
  vars <- traverse (const intVar) sudoku
  for2_ vars sudoku \var val -> do
    if val == 0 then do
      assert =<< var `ge` 1
      assert =<< var `le` 9
    else
      assert =<< var `eq` val
  for_ (0..8) \i -> do
    assert =<< distinct ((0..8) <#> \j -> uIndex vars (i * 9 + j))
    assert =<< distinct ((0..8) <#> \j -> uIndex vars (j * 9 + i))
    assert =<< distinct ((0..8) <#> \j -> uIndex vars (i / 3 * 27 + i `mod` 3 * 3 + j / 3 * 9 + j `mod` 3))

  vals <- withModel \m -> do
    traverse (evalInt m) vars
  traceM vals

main :: Effect Unit
main = launchAff_ do
  solveDogCatMouse
  solveSudoku