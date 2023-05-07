module Test.Main
  where

import Prelude hiding (add, mul, sub, eq, div)

import Data.Array ((..), zipWith, unsafeIndex)
import Data.Maybe (Maybe(..))
import Data.Traversable (for_, sequence_)
import Data.FoldableWithIndex (forWithIndex_)
import Data.Tuple (Tuple)
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Effect.Aff (launchAff_)
import JS.BigInt as B
import Partial.Unsafe (unsafePartial)
import Test.Spec (describe, it)
import Test.Spec.Assertions (shouldEqual, shouldSatisfy)
import Test.Spec.Reporter.Console (consoleReporter)
import Test.Spec.Runner (runSpec)
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

petersen :: Array (Tuple Int Int)
petersen =
  [ 0 /\ 1, 1 /\ 2, 2 /\ 3, 3 /\ 4, 4 /\ 0
  , 5 /\ 7, 7 /\ 9, 9 /\ 6, 6 /\ 8, 8 /\ 5
  , 0 /\ 5, 1 /\ 6, 2 /\ 7, 3 /\ 8, 4 /\ 9
  ]

for2_ :: ∀a b m. Applicative m ⇒ Array a → Array b → (a → b → m Unit) → m Unit
for2_ t1 t2 f = sequence_ (zipWith f t1 t2)

idx :: ∀a. Array a → Int → a
idx t i = unsafePartial $ unsafeIndex t i

main :: Effect Unit
main = launchAff_ $ runSpec [consoleReporter] do
  describe "solver" do
    it "solves Dog, Cat and Mouse" do
      res <- Z3.run do
        dog ← Z3.int
        cat ← Z3.int
        mouse ← Z3.int

        Z3.assert $ dog `ge` 1
        Z3.assert $ cat `ge` 1
        Z3.assert $ mouse `ge` 1
        Z3.assert $ Z3.sum [dog, cat, mouse] `eq` 100
        Z3.assert $ Z3.sum [dog `mul` 1500, cat `mul` 100, mouse `mul` 25] `eq` 10000
        Z3.withModel $ flip Z3.eval { dog, mouse, cat }
      res `shouldEqual` Just {cat: B.fromInt 41, dog: B.fromInt 3, mouse: B.fromInt 56}

    {-
    it "solves array problem" do
      res <- Z3.run do
        arr ← Z3.array
        x ← Z3.int
        y ← Z3.int
        Z3.assert $ Z3.store arr x y `eq` arr
        void $ Z3.withModel \m → do
          Z3.showModel m
    -}

    it "solves sudoku" do
      res <- Z3.run do
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
        Z3.withModel $ flip Z3.eval vars
      res `shouldEqual` Just (B.fromInt <$> [7,1,5,8,9,4,6,3,2,2,3,4,5,1,6,8,9,7,6,8,9,7,2,3,1,4,5,4,9,3,6,5,7,2,1,8,8,6,7,2,3,1,9,5,4,1,5,2,4,8,9,7,6,3,3,7,6,1,4,8,5,2,9,9,2,8,3,6,5,4,7,1,5,4,1,9,7,2,3,8,6])

    {-
    it "solves Pythagore" do
      res ← Z3.run do
        x ← Z3.int
        y ← Z3.int
        z ← Z3.int
        Z3.assertAll [x `ge` 1, y `ge` 1, z `ge` 1]
        Z3.assert $ (x `pow` 2) `add` (y `pow` 2) `eq` (z `pow` 2)
        Z3.withModel $ flip Z3.eval {x, y, z}
      res `shouldSatisfy` maybe false \{x, y, z} → x * x + y * y == z * z
    -}

    it "solves 8 queens" do
      res ← Z3.run do
        queens ← Z3.intVector 8
        for_ queens \q → do
          Z3.assertAll [q `ge` 0, q `le` 7]
        Z3.assert $ Z3.distinct queens
        forWithIndex_ queens \i q1  → do
          forWithIndex_ queens \j q2  → do
            when (i /= j) $
              Z3.assertAll [q1 `sub` q2 `neq` (i - j), q1 `sub` q2 `neq` (j - i)]
        Z3.withModel $ flip Z3.eval queens
      res `shouldSatisfy` const true

    it "solves graph coloring (optimization)" do
      res ← Z3.runOpt do
        m ← Z3.int
        colors ← Z3.intVector 10
        for_ colors \c → do
          Z3.assertAll [c `ge` 1, c `le` m]
        for_ petersen \(u /\ v) →
          Z3.assert $ idx colors u `neq` idx colors v
        Z3.minimize m
        Z3.withModel (flip Z3.eval m)
      res `shouldEqual` Just (B.fromInt 3)

{-
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



solveQuantifier :: Aff Unit
solveQuantifier = Z3.run do
  x ← Z3.int
  y ← Z3.int
  z ← Z3.int
  Z3.assert $ Z3.forall_ [y] ((y `ge` 0) `and` (y `le` 9)) `implies` (Z3.exists [z] $ (x `add` y `add` z) `eq` 10)
  n ← Z3.withModel (flip Z3.eval x)
  liftEffect $ log $ "quantifier: " <> show n


-}