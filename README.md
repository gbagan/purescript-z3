# purescript-z3

PureScript FFI bindings for the [Z3 theorem prover](https://github.com/Z3Prover/z3)


### Documentation

todo

### Install

```
spago install z3
npm install z3-solver
```

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

for2_ :: forall a b m. Applicative m => Array a -> Array b -> (a -> b -> m Unit) -> m Unit
for2_ t1 t2 f = sequence_ (zipWith f t1 t2)

uIndex :: forall a. Array a -> Int -> a
uIndex t i = unsafePartial $ unsafeIndex t i

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
  ```
