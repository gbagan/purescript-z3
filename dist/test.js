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
    const ctx = new Context('main');
    const b = ctx.Bool.const('b');
    const x = ctx.Int.const('x');
    const y = ctx.Real.const('y');
    const solver = new ctx.Solver();
    solver.add(x.gt(2), y.lt(10), y.add(x).eq(7))
    solver.add(y.gt(x))
    console.log(y.add(x).mul(2).id())
    console.log(y.add(x).mul(2).id())
    a = await solver.check()
    model = solver.model()
    console.log(y)
    console.log(model.eval(b).toString())
}

main()