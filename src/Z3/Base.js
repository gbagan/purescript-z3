import { init } from 'z3-solver'

let _counter = 0

export const initz3 = init

export const em = z3 => () => z3.em

export const context = name => z3 => () => new z3.Context(name)

export const freshContext = z3 => () => {
    const name = "context__" + _counter
    _counter++
    return new z3.Context(name)
}

export const solver = ctx => () => new ctx.Solver()
export const solverAdd = v => solver => () => solver.add(v)
export const solverCheck = solver => () => solver.check()
export const solverModel = solver => () => solver.model()
export const showModel = model => () => model.toString()
export const evalInt = model => v => () => model.eval(v).value()
export const evalBool = model => v => () => model.eval(v).toString() === "true"
export const mkIntVar = context => name => () => context.Int.const(name)
export const mkIntVal = context => name => () => context.Int.val(name)
export const mkIntSort = context => () => context.Int.sort()
export const mkBoolVar = context => name => () => context.Bool.const(name)
export const mkBoolVal = context => b => () => context.Bool.val(b)
export const mkBoolSort = context => () => context.Bool.sort()
export const mkArrayVar = context => name => idxSort => valSort => () =>
                            context.Array.const(name, idxSort, valSort)
export const mkArraySort = context => idxSort => valSort => () =>
    context.Array.sort(idxSort, valSort)
export const and_ = a => b => a.and(b)
export const or_ = a => b => a.or(b)
export const not_ = a => a.neq()
export const distinct = context => a => () => context.Distinct(...a)
export const unsafeEq = a => b => a.eq(b)
export const unsafeNeq = a => b => a.neq(b)
export const unsafeLe = a => b => a.le(b)
export const unsafeGe = a => b => a.ge(b)
export const unsafeLt = a => b => a.lt(b)
export const unsafeGt = a => b => a.gt(b)
export const unsafeAdd = a => b => a.add(b)
export const unsafeMul = a => b => a.mul(b)
export const store = arr => idx => val => arr.store(idx, val)
export const select = arr => idx => arr.select(idx)

export const killThreads = em => () => em.PThread.terminateAllThreads()