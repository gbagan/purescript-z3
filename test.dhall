let conf = ./spago.dhall

in conf // {
  sources = conf.sources # [ "test/**/*.purs" ],
  dependencies = conf.dependencies # [ "arrays", "debug", "foldable-traversable", "partial" ]
}
 