module Test.Main where

import Prelude hiding (add)

import Effect (Effect)
import Effect.Aff (launchAff_)
import Z3 (add, ge, assert, check, run, intVar)
import Debug (traceM)

main :: Effect Unit
main = launchAff_ $ run "main" do
  x <- intVar
  y <- intVar
  assert =<< ge x =<< x `add` y
  s <- check
  traceM s
  pure unit