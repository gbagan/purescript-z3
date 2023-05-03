module Test.Main where

import Prelude hiding (add)

import Effect (Effect)
import Z3.Base (add, ge)
import Z3 (assert, run, intVar)
import Debug (traceM)

main :: Effect Unit
main = run "main" do
  x <- intVar
  y <- intVar
  traceM $ x `add` y
  assert $ x `ge` y
  pure unit