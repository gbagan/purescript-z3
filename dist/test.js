const { init } = require('z3-solver');

const getMethods = (obj) => {
    let properties = new Set()
    let currentObj = obj
    do {
      Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
    } while ((currentObj = Object.getPrototypeOf(currentObj)))
    return [...properties.keys()].filter(item => typeof obj[item] === 'function')
  }

async function main() {
    const { Context } = await init();
    console.log("plop")
    const { Context: p2 } = await init();
    console.log("plop2")
    const ctx = new Context('main');

    const x = ctx.Int.const('x');
    const y = ctx.Int.const('y');
    console.log(getMethods(x))
    const solver = new ctx.Solver();
    solver.add(x.gt(2), y.lt(10), x.add(y.mul(2)).eq(7))
    a = await solver.check()
    console.log(a)
    model = solver.model()
    console.log(model.eval(x).value().toString())
}

main()