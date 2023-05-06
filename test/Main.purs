module Test.Main
  where

import Prelude hiding (add, mul, sub, eq, div)

import Data.Array ((..), zipWith, unsafeIndex)
import Data.Traversable (for_, sequence_)
import Data.Tuple (Tuple)
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Effect.Class (liftEffect)
import Effect.Console (log)
import Partial.Unsafe (unsafePartial)
import Z3 (add, eq, neq, ge, le, sub, mul, mod_, pow, and, implies)
import Z3 as Z3

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

for2_ :: ∀a b m. Applicative m ⇒ Array a → Array b → (a → b → m Unit) → m Unit
for2_ t1 t2 f = sequence_ (zipWith f t1 t2)

idx :: ∀a. Array a → Int → a
idx t i = unsafePartial $ unsafeIndex t i

solveDogCatMouse :: Aff Unit
solveDogCatMouse = Z3.run do
  dog ← Z3.int
  cat ← Z3.int
  mouse ← Z3.int

  Z3.assert $ dog `ge` 1
  Z3.assert $ cat `ge` 1
  Z3.assert $ mouse `ge` 1

  Z3.assert $ Z3.sum [dog, cat, mouse] `eq` 100
  Z3.assert $ Z3.sum [dog `mul` 1500, cat `mul` 100, mouse `mul` 25] `eq` 10000

  vals ← Z3.withModel $ flip Z3.eval { dog, mouse, cat }
  liftEffect $ log $ "dog, mouse and cat: " <> show vals

solveArray :: Aff Unit
solveArray = Z3.run do
  arr ← Z3.array
  x ← Z3.int
  y ← Z3.int
  Z3.assert $ Z3.store arr x y `eq` arr
  void $ Z3.withModel \m → do
    str ← Z3.showModel m
    liftEffect $ log str

solveSudoku :: Aff Unit
solveSudoku = Z3.run do
  vars ← Z3.intVector 81
  for2_ vars sudoku \var val → do
    if val == 0 then do
      Z3.assertAll [var `ge` 1, var `le` 9]
    else
      Z3.assert $ var `eq` val
  for_ (0..8) \i → do
    Z3.assert $ Z3.distinct $ 0..8 <#> \j → idx vars (i * 9 + j)
    Z3.assert $ Z3.distinct $ 0..8 <#> \j → idx vars (j * 9 + i)
    Z3.assert $ Z3.distinct $ 0..8 <#> \j → idx vars (i / 3 * 27 + i `mod` 3 * 3 + j / 3 * 9 + j `mod` 3)

  m ← Z3.withModel $ flip Z3.eval vars
  liftEffect $ log $ "sudoku: " <> show m

solveArith :: Aff Unit
solveArith = Z3.run do
  x ← Z3.int
  y ← Z3.real
  let x' = Z3.toReal(x)
  z ← Z3.int
  t ← Z3.int
  Z3.assert $ Z3.sum [x' `add` y, y `add` x'] `ge` 0.0
  y ← Z3.real
  Z3.assert $ 2 `add` x `eq` 8
  Z3.assert $ 10.0 `sub` y `eq` 2.0
  Z3.assert $ 13 `mod_` z `eq` 3
  Z3.assert $ t `pow` 2 `eq` 64
  vals ← Z3.withModel $ flip Z3.eval [x, z, t]
  liftEffect $ log $ "arith: " <> show vals

solvePythagore :: Aff Unit
solvePythagore = Z3.run do
  x ← Z3.int
  y ← Z3.int
  z ← Z3.int
  Z3.assertAll [x `ge` 1, y `ge` 1, z `ge` 1]
  Z3.assert $ (x `pow` 2) `add` (y `pow` 2) `eq` (z `pow` 2)
  vals ← Z3.withModel $ flip Z3.eval [x, y, z]
  liftEffect $ log $ "arith: " <> show vals

solveQuantifier :: Aff Unit
solveQuantifier = Z3.run do
  x ← Z3.int
  y ← Z3.int
  z ← Z3.int
  Z3.assert $ Z3.forall_ [y] ((y `ge` 0) `and` (y `le` 9)) `implies` (Z3.exists [z] $ (x `add` y `add` z) `eq` 10)
  n ← Z3.withModel (flip Z3.eval x)
  liftEffect $ log $ "quantifier: " <> show n

petersen :: Array (Tuple Int Int)
petersen =
  [ 0 /\ 1, 1 /\ 2, 2 /\ 3, 3 /\ 4, 4 /\ 0
  , 5 /\ 7, 7 /\ 9, 9 /\ 6, 6 /\ 8, 8 /\ 5
  , 0 /\ 5, 1 /\ 6, 2 /\ 7, 3 /\ 8, 4 /\ 9
  ]

solveGraphColoring :: Aff Unit
solveGraphColoring = Z3.run do
  colors ← Z3.intVector 10
  for_ colors \c → do
    Z3.assertAll [c `ge` 0, c `le` 2]
  for_ petersen \(u /\ v) →
    Z3.assert $ idx colors u `neq` idx colors v

  m ← Z3.withModel (flip Z3.eval colors)
  liftEffect $ log $ "petersen coloring: " <> show m

main :: Effect Unit
main = launchAff_ do
  solveDogCatMouse
  solveSudoku
  solveArray
  solveQuantifier
  solveArith
  solvePythagore
  solveGraphColoring