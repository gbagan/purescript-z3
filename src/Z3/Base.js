import { init } from 'z3-solver'

export const initz3 = init
export const context = name => z3 => () => new z3.Context(name)
export const solver = ctx => () => new ctx.Solver()
export const solverAdd = v => solver => () => solver.add(v)
export const solverCheck = solver => () => solver.check()
export const mkIntVar = context => name => () => context.Int.const(name)
export const unsafeLe = a => b => () => a.le(b)
export const unsafeGe = a => b => () => a.ge(b)
export const unsafeAdd = a => b => () => a.add(b)
