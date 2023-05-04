module Test.Main where

import Prelude hiding (add, eq)

import Partial.Unsafe (unsafePartial)
import Data.Array ((..), zipWith, unsafeIndex)
import Data.Traversable (traverse, for_, sequence_)
import Debug (traceM)
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Z3 (distinct, eq, ge, le, assert, withModel, evalInt, run, intVar)

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

main2 :: Aff Unit
main2 = run "main2" do
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
    assert =<< distinct ((0..8) <#> \j ->
      let
        i1 = i / 3
        i2 = i `mod` 3
        j1 = j / 3
        j2 = j `mod` 3
      in
        uIndex vars (27 * i1 + 3 * i2 + 9 * j1 + j2)
      )

  vals <- withModel \m -> do
    traverse (evalInt m) vars
  traceM vals
  pure unit

main :: Effect Unit
main = launchAff_ do
  main2
  main2