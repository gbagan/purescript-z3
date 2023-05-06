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
export const mkRealVar = context => name => () => context.Real.const(name)
export const mkRealVal = context => b => () => context.Real.val(b)
export const mkRealSort = context => () => context.Real.sort()
export const mkArrayVar = context => name => idxSort => valSort => () =>
                            context.Array.const(name, idxSort, valSort)
export const mkArraySort = context => idxSort => valSort => () =>
    context.Array.sort(idxSort, valSort)
export const mkFunDecl = ctx => name => domSort => imgSort => () =>
                            ctx.Function.declare(name, domSort, imgSort)   
export const mkFunDecl2 = ctx => name => dom1Sort => dom2Sort => imgSort => () =>
                            ctx.Function.declare(name, dom1Sort, dom2Sort, imgSort) 
export const and = a => b => a.and(b)
export const or = a => b => a.or(b)
export const xor = a => b => a.xor(b)
export const implies = a => b => a.implies(b)
export const not_ = a => a.neq()
export const distinct = a => {
    if (a.length === 0)
        throw new Error("distinct: parameter is empty")
    else   
        return a[0].ctx.Distinct(...a)
}

export const sum = a => {
    if (a.length === 0)
        throw new Error("sum: parameter is empty")
    else   
        return a[0].ctx.Sum(...a)
}

export const product = a => {
    if (a.length === 0)
        throw new Error("product: parameter is empty")
    else   
        return a[0].ctx.Product(...a)
}

export const unsafeForall = vars => body => body.ctx.ForAll(vars, body)
export const unsafeExists = vars => body => body.ctx.Exists(vars, body)
export const unsafeEq = a => b => a.eq ? a.eq(b) : b.eq(a)
export const unsafeNeq = a => b => a.neq ? a.neq(b) : b.neq(a)
export const unsafeLe = a => b => a.le ? a.le(b) : b.ge(a)
export const unsafeGe = a => b => a.ge ? a.ge(b) : b.le(a)
export const unsafeLt = a => b => a.lt ? a.lt(b) : b.gt(a)
export const unsafeGt = a => b => a.gt ? a.gt(b) : b.gt(a)

const unsafeOp = op => a => b => {
    if (!a.add)
        a = b.ctx.isReal(b) ? b.ctx.Real.val(a) : b.ctx.Int.val(a)
    //else if (b.add && b.ctx.isInt(a) && b.ctx.isReal(a))
    //    a = b.ctx.ToReal(a)
    return a[op](b)
}

export const unsafeAdd = unsafeOp("add")
export const unsafeMul = unsafeOp("mul")
export const unsafeSub = unsafeOp("sub")
export const unsafeDiv = unsafeOp("div")
export const unsafeMod = unsafeOp("mod")
export const unsafePow = unsafeOp("pow")
export const toReal = a => a.ctx.ToReal(a)
export const store = arr => idx => val => arr.store(idx, val)
export const select = arr => idx => arr.select(idx)
export const apply = f => x => f.call(x)
export const apply2 = f => x => y => f.call(x, y)

export const killThreads = em => () => em.PThread.terminateAllThreads()
