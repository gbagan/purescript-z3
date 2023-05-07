# purescript-z3

PureScript FFI bindings for the [Z3 theorem prover](https://github.com/Z3Prover/z3)


### Documentation

Documentation is [published on Pursuit](https://pursuit.purescript.org/packages/purescript-z3)

### Install

```
spago install z3
npm install z3-solver
```

The npm repository is not up to date. Use the github repository to be able to use all features.
https://github.com/Z3Prover/z3/tree/master/src/api/js 

### Example

```haskell
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

idx :: forall a. Array a -> Int -> a
idx t i = unsafePartial $ unsafeIndex t i

solveSudoku :: Aff Unit
solveSudoku = Z3.run do
  vars ← Z3.intVector 81
  for2_ vars sudoku \var val → do
    if val == 0 then do
      Z3.assert $ var `ge` 1
      Z3.assert $ var `le` 9
    else
      Z3.assert $ var `eq` val

  for_ (0..8) \i -> do
    Z3.assert $ Z3.distinct $ (0..8) <#> \j -> idx vars (i * 9 + j)
    Z3.assert $ Z3.distinct $ (0..8) <#> \j -> idx vars (j * 9 + i)
    Z3.assert $ Z3.distinct $ (0..8) <#> \j -> idx vars (i / 3 * 27 + i `mod` 3 * 3 + j / 3 * 9 + j `mod` 3)

  m ← Z3.withModel $ flip Z3.eval vars
  liftEffect $ logShow m
  ```

### Another example (Optimization)

```haskell
petersen :: Array (Tuple Int Int)
petersen =
  [ 0 /\ 1, 1 /\ 2, 2 /\ 3, 3 /\ 4, 4 /\ 0
  , 5 /\ 7, 7 /\ 9, 9 /\ 6, 6 /\ 8, 8 /\ 5
  , 0 /\ 5, 1 /\ 6, 2 /\ 7, 3 /\ 8, 4 /\ 9
  ]

graphColoring :: Aff Unit
graphColoring = Z3.run do
  res ← Z3.runOpt do
    m ← Z3.int
    colors ← Z3.intVector 10
    for_ colors \c → do
      Z3.assertAll [c `ge` 1, c `le` m]
    for_ petersen \(u /\ v) →
      Z3.assert $ idx colors u `neq` idx colors v
    Z3.minimize m
    Z3.withModel (flip Z3.eval m)
  liftEffect $ logShow $ m
```

### More examples

https://github.com/gbagan/purescript-z3/blob/main/test/Main.purs
