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
    const y = ctx.Int.const('y');
    const solver = new ctx.Solver();
    solver.add(x.gt(2), y.lt(10), x.add(y.mul(2)).eq(7))
    solver.add(b)
    a = await solver.check()
    // console.log(x)
    model = solver.model()
    console.log("plop")
    console.log(model.eval(b).toString())
}

main()