import { init } from 'z3-solver'
const z3 = await init()

export const context = name => () => new z3.Context(name)
export const solver = ctx => () => new ctx.Solver()
export const solverAdd = v => solver => () => solver.add(v)
export const mkIntVar = context => name => () => context.Int.const(name)
export const unsafeLe = a => b => a.le(b)
export const unsafeGe = a => b => a.ge(b)
export const unsafeAdd = a => b => a.add(b)