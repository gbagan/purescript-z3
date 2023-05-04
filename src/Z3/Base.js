import { init } from 'z3-solver'

var _counter = 0

export const initz3 = init
export const context = name => z3 => () => new z3.Context(name)

export const freshContext = z3 => () => {
    var name = "context__" + counter
    counter++
    return context(name)
}

export const solver = ctx => () => new ctx.Solver()
export const solverAdd = v => solver => () => solver.add(v)
export const solverCheck = solver => () => solver.check()
export const solverModel = solver => () => solver.model()
export const showModel = model => () => model.toString()
export const evalInt = model => v => () => model.eval(v).value()
export const mkIntVar = context => name => () => context.Int.const(name)
export const mkIntVal = context => name => () => context.Int.val(name)
export const mkBoolVar = context => name => () => context.Bool.const(name)
export const mkBoolVal = context => b => () => context.Bool.val(b)
export const and_ = a => b => () => a.and(b)
export const or_ = a => b => () => a.or(b)
export const not_ = a => () => a.neq()
export const distinct = context => a => () => context.Distinct(...a)
export const unsafeEq = a => b => () => a.eq(b)
export const unsafeNeq = a => b => () => a.neq(b)
export const unsafeLe = a => b => () => a.le(b)
export const unsafeGe = a => b => () => a.ge(b)
export const unsafeLt = a => b => () => a.lt(b)
export const unsafeGt = a => b => () => a.gt(b)
export const unsafeAdd = a => b => () => a.add(b)
export const unsafeMul = a => b => () => a.mul(b)