(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all3) => {
    for (var name2 in all3)
      __defProp(target, name2, { get: all3[name2], enumerable: true });
  };
  var __copyProps = (to, from2, except2, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except2)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // node_modules/tslib/tslib.es6.js
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldIn: () => __classPrivateFieldIn,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __esDecorate: () => __esDecorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __propKey: () => __propKey,
    __read: () => __read,
    __rest: () => __rest,
    __runInitializers: () => __runInitializers,
    __setFunctionName: () => __setFunctionName,
    __spread: () => __spread,
    __spreadArray: () => __spreadArray,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values
  });
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context2 = {};
      for (var p in contextIn)
        context2[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context2.access[p] = contextIn.access[p];
      context2.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context2);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.push(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.push(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  }
  function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
  }
  function __setFunctionName(f, name2, prefix) {
    if (typeof name2 === "symbol")
      name2 = name2.description ? "[".concat(name2.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name2) : name2 });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve4) {
        resolve4(value);
      });
    }
    return new (P || (P = Promise))(function(resolve4, reject2) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject2(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject2(e);
        }
      }
      function step(result) {
        result.done ? resolve4(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __exportStar(m, o) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
        __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error2) {
      e = { error: error2 };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from2.length, ar; i < l; i++) {
        if (ar || !(i in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i);
          ar[i] = from2[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function verb(n) {
      if (g[n])
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject2) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject2(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v) {
        return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve4, reject2) {
          v = o[n](v), settle(resolve4, reject2, v.done, v.value);
        });
      };
    }
    function settle(resolve4, reject2, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve4({ value: v2, done: d });
      }, reject2);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod2) {
    if (mod2 && mod2.__esModule)
      return mod2;
    var result = {};
    if (mod2 != null) {
      for (var k in mod2)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod2, k))
          __createBinding(result, mod2, k);
    }
    __setModuleDefault(result, mod2);
    return result;
  }
  function __importDefault(mod2) {
    return mod2 && mod2.__esModule ? mod2 : { default: mod2 };
  }
  function __classPrivateFieldGet(receiver, state2, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state2.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state2, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state2.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state2, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
      throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.js"() {
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
    }
  });

  // node_modules/async-mutex/lib/errors.js
  var require_errors = __commonJS({
    "node_modules/async-mutex/lib/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.E_CANCELED = exports.E_ALREADY_LOCKED = exports.E_TIMEOUT = void 0;
      exports.E_TIMEOUT = new Error("timeout while waiting for mutex to become available");
      exports.E_ALREADY_LOCKED = new Error("mutex already locked");
      exports.E_CANCELED = new Error("request for lock canceled");
    }
  });

  // node_modules/async-mutex/lib/Semaphore.js
  var require_Semaphore = __commonJS({
    "node_modules/async-mutex/lib/Semaphore.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var errors_1 = require_errors();
      var Semaphore = (
        /** @class */
        function() {
          function Semaphore2(_maxConcurrency, _cancelError) {
            if (_cancelError === void 0) {
              _cancelError = errors_1.E_CANCELED;
            }
            this._maxConcurrency = _maxConcurrency;
            this._cancelError = _cancelError;
            this._queue = [];
            this._waiters = [];
            if (_maxConcurrency <= 0) {
              throw new Error("semaphore must be initialized to a positive value");
            }
            this._value = _maxConcurrency;
          }
          Semaphore2.prototype.acquire = function() {
            var _this = this;
            var locked = this.isLocked();
            var ticketPromise = new Promise(function(resolve4, reject2) {
              return _this._queue.push({ resolve: resolve4, reject: reject2 });
            });
            if (!locked)
              this._dispatch();
            return ticketPromise;
          };
          Semaphore2.prototype.runExclusive = function(callback) {
            return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
              var _a, value, release;
              return (0, tslib_1.__generator)(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, this.acquire()];
                  case 1:
                    _a = _b.sent(), value = _a[0], release = _a[1];
                    _b.label = 2;
                  case 2:
                    _b.trys.push([2, , 4, 5]);
                    return [4, callback(value)];
                  case 3:
                    return [2, _b.sent()];
                  case 4:
                    release();
                    return [
                      7
                      /*endfinally*/
                    ];
                  case 5:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          Semaphore2.prototype.waitForUnlock = function() {
            return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
              var waitPromise;
              var _this = this;
              return (0, tslib_1.__generator)(this, function(_a) {
                if (!this.isLocked()) {
                  return [2, Promise.resolve()];
                }
                waitPromise = new Promise(function(resolve4) {
                  return _this._waiters.push({ resolve: resolve4 });
                });
                return [2, waitPromise];
              });
            });
          };
          Semaphore2.prototype.isLocked = function() {
            return this._value <= 0;
          };
          Semaphore2.prototype.release = function() {
            if (this._maxConcurrency > 1) {
              throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
            }
            if (this._currentReleaser) {
              var releaser = this._currentReleaser;
              this._currentReleaser = void 0;
              releaser();
            }
          };
          Semaphore2.prototype.cancel = function() {
            var _this = this;
            this._queue.forEach(function(ticket) {
              return ticket.reject(_this._cancelError);
            });
            this._queue = [];
          };
          Semaphore2.prototype._dispatch = function() {
            var _this = this;
            var nextTicket = this._queue.shift();
            if (!nextTicket)
              return;
            var released = false;
            this._currentReleaser = function() {
              if (released)
                return;
              released = true;
              _this._value++;
              _this._resolveWaiters();
              _this._dispatch();
            };
            nextTicket.resolve([this._value--, this._currentReleaser]);
          };
          Semaphore2.prototype._resolveWaiters = function() {
            this._waiters.forEach(function(waiter) {
              return waiter.resolve();
            });
            this._waiters = [];
          };
          return Semaphore2;
        }()
      );
      exports.default = Semaphore;
    }
  });

  // node_modules/async-mutex/lib/Mutex.js
  var require_Mutex = __commonJS({
    "node_modules/async-mutex/lib/Mutex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var Semaphore_1 = require_Semaphore();
      var Mutex = (
        /** @class */
        function() {
          function Mutex2(cancelError) {
            this._semaphore = new Semaphore_1.default(1, cancelError);
          }
          Mutex2.prototype.acquire = function() {
            return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
              var _a, releaser;
              return (0, tslib_1.__generator)(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, this._semaphore.acquire()];
                  case 1:
                    _a = _b.sent(), releaser = _a[1];
                    return [2, releaser];
                }
              });
            });
          };
          Mutex2.prototype.runExclusive = function(callback) {
            return this._semaphore.runExclusive(function() {
              return callback();
            });
          };
          Mutex2.prototype.isLocked = function() {
            return this._semaphore.isLocked();
          };
          Mutex2.prototype.waitForUnlock = function() {
            return this._semaphore.waitForUnlock();
          };
          Mutex2.prototype.release = function() {
            this._semaphore.release();
          };
          Mutex2.prototype.cancel = function() {
            return this._semaphore.cancel();
          };
          return Mutex2;
        }()
      );
      exports.default = Mutex;
    }
  });

  // node_modules/async-mutex/lib/withTimeout.js
  var require_withTimeout = __commonJS({
    "node_modules/async-mutex/lib/withTimeout.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.withTimeout = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var errors_1 = require_errors();
      function withTimeout(sync, timeout, timeoutError) {
        var _this = this;
        if (timeoutError === void 0) {
          timeoutError = errors_1.E_TIMEOUT;
        }
        return {
          acquire: function() {
            return new Promise(function(resolve4, reject2) {
              return (0, tslib_1.__awaiter)(_this, void 0, void 0, function() {
                var isTimeout, handle, ticket, release, e_1;
                return (0, tslib_1.__generator)(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      isTimeout = false;
                      handle = setTimeout(function() {
                        isTimeout = true;
                        reject2(timeoutError);
                      }, timeout);
                      _a.label = 1;
                    case 1:
                      _a.trys.push([1, 3, , 4]);
                      return [4, sync.acquire()];
                    case 2:
                      ticket = _a.sent();
                      if (isTimeout) {
                        release = Array.isArray(ticket) ? ticket[1] : ticket;
                        release();
                      } else {
                        clearTimeout(handle);
                        resolve4(ticket);
                      }
                      return [3, 4];
                    case 3:
                      e_1 = _a.sent();
                      if (!isTimeout) {
                        clearTimeout(handle);
                        reject2(e_1);
                      }
                      return [3, 4];
                    case 4:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            });
          },
          runExclusive: function(callback) {
            return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
              var release, ticket;
              return (0, tslib_1.__generator)(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    release = function() {
                      return void 0;
                    };
                    _a.label = 1;
                  case 1:
                    _a.trys.push([1, , 7, 8]);
                    return [4, this.acquire()];
                  case 2:
                    ticket = _a.sent();
                    if (!Array.isArray(ticket))
                      return [3, 4];
                    release = ticket[1];
                    return [4, callback(ticket[0])];
                  case 3:
                    return [2, _a.sent()];
                  case 4:
                    release = ticket;
                    return [4, callback()];
                  case 5:
                    return [2, _a.sent()];
                  case 6:
                    return [3, 8];
                  case 7:
                    release();
                    return [
                      7
                      /*endfinally*/
                    ];
                  case 8:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          },
          /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
          release: function() {
            sync.release();
          },
          cancel: function() {
            return sync.cancel();
          },
          waitForUnlock: function() {
            return sync.waitForUnlock();
          },
          isLocked: function() {
            return sync.isLocked();
          }
        };
      }
      exports.withTimeout = withTimeout;
    }
  });

  // node_modules/async-mutex/lib/tryAcquire.js
  var require_tryAcquire = __commonJS({
    "node_modules/async-mutex/lib/tryAcquire.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.tryAcquire = void 0;
      var errors_1 = require_errors();
      var withTimeout_1 = require_withTimeout();
      function tryAcquire(sync, alreadyAcquiredError) {
        if (alreadyAcquiredError === void 0) {
          alreadyAcquiredError = errors_1.E_ALREADY_LOCKED;
        }
        return (0, withTimeout_1.withTimeout)(sync, 0, alreadyAcquiredError);
      }
      exports.tryAcquire = tryAcquire;
    }
  });

  // node_modules/async-mutex/lib/index.js
  var require_lib = __commonJS({
    "node_modules/async-mutex/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.tryAcquire = exports.withTimeout = exports.Semaphore = exports.Mutex = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var Mutex_1 = require_Mutex();
      Object.defineProperty(exports, "Mutex", { enumerable: true, get: function() {
        return Mutex_1.default;
      } });
      var Semaphore_1 = require_Semaphore();
      Object.defineProperty(exports, "Semaphore", { enumerable: true, get: function() {
        return Semaphore_1.default;
      } });
      var withTimeout_1 = require_withTimeout();
      Object.defineProperty(exports, "withTimeout", { enumerable: true, get: function() {
        return withTimeout_1.withTimeout;
      } });
      var tryAcquire_1 = require_tryAcquire();
      Object.defineProperty(exports, "tryAcquire", { enumerable: true, get: function() {
        return tryAcquire_1.tryAcquire;
      } });
      (0, tslib_1.__exportStar)(require_errors(), exports);
    }
  });

  // node_modules/z3-solver/build/low-level/types.__GENERATED__.js
  var require_types_GENERATED = __commonJS({
    "node_modules/z3-solver/build/low-level/types.__GENERATED__.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Z3_goal_prec = exports.Z3_error_code = exports.Z3_ast_print_mode = exports.Z3_param_kind = exports.Z3_decl_kind = exports.Z3_ast_kind = exports.Z3_sort_kind = exports.Z3_parameter_kind = exports.Z3_symbol_kind = exports.Z3_lbool = void 0;
      var Z3_lbool;
      (function(Z3_lbool2) {
        Z3_lbool2[Z3_lbool2["Z3_L_FALSE"] = -1] = "Z3_L_FALSE";
        Z3_lbool2[Z3_lbool2["Z3_L_UNDEF"] = 0] = "Z3_L_UNDEF";
        Z3_lbool2[Z3_lbool2["Z3_L_TRUE"] = 1] = "Z3_L_TRUE";
      })(Z3_lbool = exports.Z3_lbool || (exports.Z3_lbool = {}));
      var Z3_symbol_kind;
      (function(Z3_symbol_kind2) {
        Z3_symbol_kind2[Z3_symbol_kind2["Z3_INT_SYMBOL"] = 0] = "Z3_INT_SYMBOL";
        Z3_symbol_kind2[Z3_symbol_kind2["Z3_STRING_SYMBOL"] = 1] = "Z3_STRING_SYMBOL";
      })(Z3_symbol_kind = exports.Z3_symbol_kind || (exports.Z3_symbol_kind = {}));
      var Z3_parameter_kind;
      (function(Z3_parameter_kind2) {
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_INT"] = 0] = "Z3_PARAMETER_INT";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_DOUBLE"] = 1] = "Z3_PARAMETER_DOUBLE";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_RATIONAL"] = 2] = "Z3_PARAMETER_RATIONAL";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_SYMBOL"] = 3] = "Z3_PARAMETER_SYMBOL";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_SORT"] = 4] = "Z3_PARAMETER_SORT";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_AST"] = 5] = "Z3_PARAMETER_AST";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_FUNC_DECL"] = 6] = "Z3_PARAMETER_FUNC_DECL";
      })(Z3_parameter_kind = exports.Z3_parameter_kind || (exports.Z3_parameter_kind = {}));
      var Z3_sort_kind;
      (function(Z3_sort_kind2) {
        Z3_sort_kind2[Z3_sort_kind2["Z3_UNINTERPRETED_SORT"] = 0] = "Z3_UNINTERPRETED_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_BOOL_SORT"] = 1] = "Z3_BOOL_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_INT_SORT"] = 2] = "Z3_INT_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_REAL_SORT"] = 3] = "Z3_REAL_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_BV_SORT"] = 4] = "Z3_BV_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_ARRAY_SORT"] = 5] = "Z3_ARRAY_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_DATATYPE_SORT"] = 6] = "Z3_DATATYPE_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_RELATION_SORT"] = 7] = "Z3_RELATION_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_FINITE_DOMAIN_SORT"] = 8] = "Z3_FINITE_DOMAIN_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_FLOATING_POINT_SORT"] = 9] = "Z3_FLOATING_POINT_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_ROUNDING_MODE_SORT"] = 10] = "Z3_ROUNDING_MODE_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_SEQ_SORT"] = 11] = "Z3_SEQ_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_RE_SORT"] = 12] = "Z3_RE_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_CHAR_SORT"] = 13] = "Z3_CHAR_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_UNKNOWN_SORT"] = 1e3] = "Z3_UNKNOWN_SORT";
      })(Z3_sort_kind = exports.Z3_sort_kind || (exports.Z3_sort_kind = {}));
      var Z3_ast_kind;
      (function(Z3_ast_kind2) {
        Z3_ast_kind2[Z3_ast_kind2["Z3_NUMERAL_AST"] = 0] = "Z3_NUMERAL_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_APP_AST"] = 1] = "Z3_APP_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_VAR_AST"] = 2] = "Z3_VAR_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_QUANTIFIER_AST"] = 3] = "Z3_QUANTIFIER_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_SORT_AST"] = 4] = "Z3_SORT_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_FUNC_DECL_AST"] = 5] = "Z3_FUNC_DECL_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_UNKNOWN_AST"] = 1e3] = "Z3_UNKNOWN_AST";
      })(Z3_ast_kind = exports.Z3_ast_kind || (exports.Z3_ast_kind = {}));
      var Z3_decl_kind;
      (function(Z3_decl_kind2) {
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TRUE"] = 256] = "Z3_OP_TRUE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FALSE"] = 257] = "Z3_OP_FALSE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EQ"] = 258] = "Z3_OP_EQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DISTINCT"] = 259] = "Z3_OP_DISTINCT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ITE"] = 260] = "Z3_OP_ITE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AND"] = 261] = "Z3_OP_AND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_OR"] = 262] = "Z3_OP_OR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IFF"] = 263] = "Z3_OP_IFF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_XOR"] = 264] = "Z3_OP_XOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_NOT"] = 265] = "Z3_OP_NOT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IMPLIES"] = 266] = "Z3_OP_IMPLIES";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_OEQ"] = 267] = "Z3_OP_OEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ANUM"] = 512] = "Z3_OP_ANUM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AGNUM"] = 513] = "Z3_OP_AGNUM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LE"] = 514] = "Z3_OP_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_GE"] = 515] = "Z3_OP_GE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LT"] = 516] = "Z3_OP_LT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_GT"] = 517] = "Z3_OP_GT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ADD"] = 518] = "Z3_OP_ADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SUB"] = 519] = "Z3_OP_SUB";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UMINUS"] = 520] = "Z3_OP_UMINUS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_MUL"] = 521] = "Z3_OP_MUL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DIV"] = 522] = "Z3_OP_DIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IDIV"] = 523] = "Z3_OP_IDIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_REM"] = 524] = "Z3_OP_REM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_MOD"] = 525] = "Z3_OP_MOD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TO_REAL"] = 526] = "Z3_OP_TO_REAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TO_INT"] = 527] = "Z3_OP_TO_INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IS_INT"] = 528] = "Z3_OP_IS_INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_POWER"] = 529] = "Z3_OP_POWER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STORE"] = 768] = "Z3_OP_STORE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SELECT"] = 769] = "Z3_OP_SELECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CONST_ARRAY"] = 770] = "Z3_OP_CONST_ARRAY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_MAP"] = 771] = "Z3_OP_ARRAY_MAP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_DEFAULT"] = 772] = "Z3_OP_ARRAY_DEFAULT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_UNION"] = 773] = "Z3_OP_SET_UNION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_INTERSECT"] = 774] = "Z3_OP_SET_INTERSECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_DIFFERENCE"] = 775] = "Z3_OP_SET_DIFFERENCE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_COMPLEMENT"] = 776] = "Z3_OP_SET_COMPLEMENT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_SUBSET"] = 777] = "Z3_OP_SET_SUBSET";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AS_ARRAY"] = 778] = "Z3_OP_AS_ARRAY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_EXT"] = 779] = "Z3_OP_ARRAY_EXT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_HAS_SIZE"] = 780] = "Z3_OP_SET_HAS_SIZE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_CARD"] = 781] = "Z3_OP_SET_CARD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNUM"] = 1024] = "Z3_OP_BNUM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT1"] = 1025] = "Z3_OP_BIT1";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT0"] = 1026] = "Z3_OP_BIT0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNEG"] = 1027] = "Z3_OP_BNEG";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BADD"] = 1028] = "Z3_OP_BADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSUB"] = 1029] = "Z3_OP_BSUB";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BMUL"] = 1030] = "Z3_OP_BMUL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV"] = 1031] = "Z3_OP_BSDIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV"] = 1032] = "Z3_OP_BUDIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM"] = 1033] = "Z3_OP_BSREM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM"] = 1034] = "Z3_OP_BUREM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD"] = 1035] = "Z3_OP_BSMOD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV0"] = 1036] = "Z3_OP_BSDIV0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV0"] = 1037] = "Z3_OP_BUDIV0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM0"] = 1038] = "Z3_OP_BSREM0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM0"] = 1039] = "Z3_OP_BUREM0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD0"] = 1040] = "Z3_OP_BSMOD0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ULEQ"] = 1041] = "Z3_OP_ULEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SLEQ"] = 1042] = "Z3_OP_SLEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UGEQ"] = 1043] = "Z3_OP_UGEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SGEQ"] = 1044] = "Z3_OP_SGEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ULT"] = 1045] = "Z3_OP_ULT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SLT"] = 1046] = "Z3_OP_SLT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UGT"] = 1047] = "Z3_OP_UGT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SGT"] = 1048] = "Z3_OP_SGT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BAND"] = 1049] = "Z3_OP_BAND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BOR"] = 1050] = "Z3_OP_BOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNOT"] = 1051] = "Z3_OP_BNOT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BXOR"] = 1052] = "Z3_OP_BXOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNAND"] = 1053] = "Z3_OP_BNAND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNOR"] = 1054] = "Z3_OP_BNOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BXNOR"] = 1055] = "Z3_OP_BXNOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CONCAT"] = 1056] = "Z3_OP_CONCAT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SIGN_EXT"] = 1057] = "Z3_OP_SIGN_EXT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ZERO_EXT"] = 1058] = "Z3_OP_ZERO_EXT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXTRACT"] = 1059] = "Z3_OP_EXTRACT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_REPEAT"] = 1060] = "Z3_OP_REPEAT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BREDOR"] = 1061] = "Z3_OP_BREDOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BREDAND"] = 1062] = "Z3_OP_BREDAND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BCOMP"] = 1063] = "Z3_OP_BCOMP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSHL"] = 1064] = "Z3_OP_BSHL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BLSHR"] = 1065] = "Z3_OP_BLSHR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BASHR"] = 1066] = "Z3_OP_BASHR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ROTATE_LEFT"] = 1067] = "Z3_OP_ROTATE_LEFT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ROTATE_RIGHT"] = 1068] = "Z3_OP_ROTATE_RIGHT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXT_ROTATE_LEFT"] = 1069] = "Z3_OP_EXT_ROTATE_LEFT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXT_ROTATE_RIGHT"] = 1070] = "Z3_OP_EXT_ROTATE_RIGHT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT2BOOL"] = 1071] = "Z3_OP_BIT2BOOL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INT2BV"] = 1072] = "Z3_OP_INT2BV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BV2INT"] = 1073] = "Z3_OP_BV2INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CARRY"] = 1074] = "Z3_OP_CARRY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_XOR3"] = 1075] = "Z3_OP_XOR3";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMUL_NO_OVFL"] = 1076] = "Z3_OP_BSMUL_NO_OVFL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUMUL_NO_OVFL"] = 1077] = "Z3_OP_BUMUL_NO_OVFL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMUL_NO_UDFL"] = 1078] = "Z3_OP_BSMUL_NO_UDFL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV_I"] = 1079] = "Z3_OP_BSDIV_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV_I"] = 1080] = "Z3_OP_BUDIV_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM_I"] = 1081] = "Z3_OP_BSREM_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM_I"] = 1082] = "Z3_OP_BUREM_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD_I"] = 1083] = "Z3_OP_BSMOD_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_UNDEF"] = 1280] = "Z3_OP_PR_UNDEF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRUE"] = 1281] = "Z3_OP_PR_TRUE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ASSERTED"] = 1282] = "Z3_OP_PR_ASSERTED";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_GOAL"] = 1283] = "Z3_OP_PR_GOAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MODUS_PONENS"] = 1284] = "Z3_OP_PR_MODUS_PONENS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REFLEXIVITY"] = 1285] = "Z3_OP_PR_REFLEXIVITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_SYMMETRY"] = 1286] = "Z3_OP_PR_SYMMETRY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRANSITIVITY"] = 1287] = "Z3_OP_PR_TRANSITIVITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRANSITIVITY_STAR"] = 1288] = "Z3_OP_PR_TRANSITIVITY_STAR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MONOTONICITY"] = 1289] = "Z3_OP_PR_MONOTONICITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_QUANT_INTRO"] = 1290] = "Z3_OP_PR_QUANT_INTRO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_BIND"] = 1291] = "Z3_OP_PR_BIND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DISTRIBUTIVITY"] = 1292] = "Z3_OP_PR_DISTRIBUTIVITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_AND_ELIM"] = 1293] = "Z3_OP_PR_AND_ELIM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NOT_OR_ELIM"] = 1294] = "Z3_OP_PR_NOT_OR_ELIM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REWRITE"] = 1295] = "Z3_OP_PR_REWRITE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REWRITE_STAR"] = 1296] = "Z3_OP_PR_REWRITE_STAR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_PULL_QUANT"] = 1297] = "Z3_OP_PR_PULL_QUANT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_PUSH_QUANT"] = 1298] = "Z3_OP_PR_PUSH_QUANT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ELIM_UNUSED_VARS"] = 1299] = "Z3_OP_PR_ELIM_UNUSED_VARS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DER"] = 1300] = "Z3_OP_PR_DER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_QUANT_INST"] = 1301] = "Z3_OP_PR_QUANT_INST";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_HYPOTHESIS"] = 1302] = "Z3_OP_PR_HYPOTHESIS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_LEMMA"] = 1303] = "Z3_OP_PR_LEMMA";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_UNIT_RESOLUTION"] = 1304] = "Z3_OP_PR_UNIT_RESOLUTION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_TRUE"] = 1305] = "Z3_OP_PR_IFF_TRUE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_FALSE"] = 1306] = "Z3_OP_PR_IFF_FALSE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_COMMUTATIVITY"] = 1307] = "Z3_OP_PR_COMMUTATIVITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DEF_AXIOM"] = 1308] = "Z3_OP_PR_DEF_AXIOM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ASSUMPTION_ADD"] = 1309] = "Z3_OP_PR_ASSUMPTION_ADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_LEMMA_ADD"] = 1310] = "Z3_OP_PR_LEMMA_ADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REDUNDANT_DEL"] = 1311] = "Z3_OP_PR_REDUNDANT_DEL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_CLAUSE_TRAIL"] = 1312] = "Z3_OP_PR_CLAUSE_TRAIL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DEF_INTRO"] = 1313] = "Z3_OP_PR_DEF_INTRO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_APPLY_DEF"] = 1314] = "Z3_OP_PR_APPLY_DEF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_OEQ"] = 1315] = "Z3_OP_PR_IFF_OEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NNF_POS"] = 1316] = "Z3_OP_PR_NNF_POS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NNF_NEG"] = 1317] = "Z3_OP_PR_NNF_NEG";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_SKOLEMIZE"] = 1318] = "Z3_OP_PR_SKOLEMIZE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MODUS_PONENS_OEQ"] = 1319] = "Z3_OP_PR_MODUS_PONENS_OEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TH_LEMMA"] = 1320] = "Z3_OP_PR_TH_LEMMA";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_HYPER_RESOLVE"] = 1321] = "Z3_OP_PR_HYPER_RESOLVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_STORE"] = 1536] = "Z3_OP_RA_STORE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_EMPTY"] = 1537] = "Z3_OP_RA_EMPTY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_IS_EMPTY"] = 1538] = "Z3_OP_RA_IS_EMPTY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_JOIN"] = 1539] = "Z3_OP_RA_JOIN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_UNION"] = 1540] = "Z3_OP_RA_UNION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_WIDEN"] = 1541] = "Z3_OP_RA_WIDEN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_PROJECT"] = 1542] = "Z3_OP_RA_PROJECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_FILTER"] = 1543] = "Z3_OP_RA_FILTER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_NEGATION_FILTER"] = 1544] = "Z3_OP_RA_NEGATION_FILTER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_RENAME"] = 1545] = "Z3_OP_RA_RENAME";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_COMPLEMENT"] = 1546] = "Z3_OP_RA_COMPLEMENT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_SELECT"] = 1547] = "Z3_OP_RA_SELECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_CLONE"] = 1548] = "Z3_OP_RA_CLONE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FD_CONSTANT"] = 1549] = "Z3_OP_FD_CONSTANT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FD_LT"] = 1550] = "Z3_OP_FD_LT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_UNIT"] = 1551] = "Z3_OP_SEQ_UNIT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_EMPTY"] = 1552] = "Z3_OP_SEQ_EMPTY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_CONCAT"] = 1553] = "Z3_OP_SEQ_CONCAT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_PREFIX"] = 1554] = "Z3_OP_SEQ_PREFIX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_SUFFIX"] = 1555] = "Z3_OP_SEQ_SUFFIX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_CONTAINS"] = 1556] = "Z3_OP_SEQ_CONTAINS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_EXTRACT"] = 1557] = "Z3_OP_SEQ_EXTRACT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE"] = 1558] = "Z3_OP_SEQ_REPLACE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_RE"] = 1559] = "Z3_OP_SEQ_REPLACE_RE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_RE_ALL"] = 1560] = "Z3_OP_SEQ_REPLACE_RE_ALL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_ALL"] = 1561] = "Z3_OP_SEQ_REPLACE_ALL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_AT"] = 1562] = "Z3_OP_SEQ_AT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_NTH"] = 1563] = "Z3_OP_SEQ_NTH";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_LENGTH"] = 1564] = "Z3_OP_SEQ_LENGTH";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_INDEX"] = 1565] = "Z3_OP_SEQ_INDEX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_LAST_INDEX"] = 1566] = "Z3_OP_SEQ_LAST_INDEX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_TO_RE"] = 1567] = "Z3_OP_SEQ_TO_RE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_IN_RE"] = 1568] = "Z3_OP_SEQ_IN_RE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_TO_INT"] = 1569] = "Z3_OP_STR_TO_INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INT_TO_STR"] = 1570] = "Z3_OP_INT_TO_STR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UBV_TO_STR"] = 1571] = "Z3_OP_UBV_TO_STR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SBV_TO_STR"] = 1572] = "Z3_OP_SBV_TO_STR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_TO_CODE"] = 1573] = "Z3_OP_STR_TO_CODE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_FROM_CODE"] = 1574] = "Z3_OP_STR_FROM_CODE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STRING_LT"] = 1575] = "Z3_OP_STRING_LT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STRING_LE"] = 1576] = "Z3_OP_STRING_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_PLUS"] = 1577] = "Z3_OP_RE_PLUS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_STAR"] = 1578] = "Z3_OP_RE_STAR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_OPTION"] = 1579] = "Z3_OP_RE_OPTION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_CONCAT"] = 1580] = "Z3_OP_RE_CONCAT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_UNION"] = 1581] = "Z3_OP_RE_UNION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_RANGE"] = 1582] = "Z3_OP_RE_RANGE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_DIFF"] = 1583] = "Z3_OP_RE_DIFF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_INTERSECT"] = 1584] = "Z3_OP_RE_INTERSECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_LOOP"] = 1585] = "Z3_OP_RE_LOOP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_POWER"] = 1586] = "Z3_OP_RE_POWER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_COMPLEMENT"] = 1587] = "Z3_OP_RE_COMPLEMENT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_EMPTY_SET"] = 1588] = "Z3_OP_RE_EMPTY_SET";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_FULL_SET"] = 1589] = "Z3_OP_RE_FULL_SET";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_FULL_CHAR_SET"] = 1590] = "Z3_OP_RE_FULL_CHAR_SET";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_OF_PRED"] = 1591] = "Z3_OP_RE_OF_PRED";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_REVERSE"] = 1592] = "Z3_OP_RE_REVERSE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_DERIVATIVE"] = 1593] = "Z3_OP_RE_DERIVATIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_CONST"] = 1594] = "Z3_OP_CHAR_CONST";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_LE"] = 1595] = "Z3_OP_CHAR_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_TO_INT"] = 1596] = "Z3_OP_CHAR_TO_INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_TO_BV"] = 1597] = "Z3_OP_CHAR_TO_BV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_FROM_BV"] = 1598] = "Z3_OP_CHAR_FROM_BV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_IS_DIGIT"] = 1599] = "Z3_OP_CHAR_IS_DIGIT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LABEL"] = 1792] = "Z3_OP_LABEL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LABEL_LIT"] = 1793] = "Z3_OP_LABEL_LIT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_CONSTRUCTOR"] = 2048] = "Z3_OP_DT_CONSTRUCTOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_RECOGNISER"] = 2049] = "Z3_OP_DT_RECOGNISER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_IS"] = 2050] = "Z3_OP_DT_IS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_ACCESSOR"] = 2051] = "Z3_OP_DT_ACCESSOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_UPDATE_FIELD"] = 2052] = "Z3_OP_DT_UPDATE_FIELD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_AT_MOST"] = 2304] = "Z3_OP_PB_AT_MOST";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_AT_LEAST"] = 2305] = "Z3_OP_PB_AT_LEAST";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_LE"] = 2306] = "Z3_OP_PB_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_GE"] = 2307] = "Z3_OP_PB_GE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_EQ"] = 2308] = "Z3_OP_PB_EQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_LO"] = 40960] = "Z3_OP_SPECIAL_RELATION_LO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_PO"] = 40961] = "Z3_OP_SPECIAL_RELATION_PO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_PLO"] = 40962] = "Z3_OP_SPECIAL_RELATION_PLO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TO"] = 40963] = "Z3_OP_SPECIAL_RELATION_TO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TC"] = 40964] = "Z3_OP_SPECIAL_RELATION_TC";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TRC"] = 40965] = "Z3_OP_SPECIAL_RELATION_TRC";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN"] = 45056] = "Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY"] = 45057] = "Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_POSITIVE"] = 45058] = "Z3_OP_FPA_RM_TOWARD_POSITIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_NEGATIVE"] = 45059] = "Z3_OP_FPA_RM_TOWARD_NEGATIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_ZERO"] = 45060] = "Z3_OP_FPA_RM_TOWARD_ZERO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NUM"] = 45061] = "Z3_OP_FPA_NUM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_PLUS_INF"] = 45062] = "Z3_OP_FPA_PLUS_INF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MINUS_INF"] = 45063] = "Z3_OP_FPA_MINUS_INF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NAN"] = 45064] = "Z3_OP_FPA_NAN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_PLUS_ZERO"] = 45065] = "Z3_OP_FPA_PLUS_ZERO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MINUS_ZERO"] = 45066] = "Z3_OP_FPA_MINUS_ZERO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ADD"] = 45067] = "Z3_OP_FPA_ADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_SUB"] = 45068] = "Z3_OP_FPA_SUB";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NEG"] = 45069] = "Z3_OP_FPA_NEG";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MUL"] = 45070] = "Z3_OP_FPA_MUL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_DIV"] = 45071] = "Z3_OP_FPA_DIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_REM"] = 45072] = "Z3_OP_FPA_REM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ABS"] = 45073] = "Z3_OP_FPA_ABS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MIN"] = 45074] = "Z3_OP_FPA_MIN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MAX"] = 45075] = "Z3_OP_FPA_MAX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_FMA"] = 45076] = "Z3_OP_FPA_FMA";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_SQRT"] = 45077] = "Z3_OP_FPA_SQRT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ROUND_TO_INTEGRAL"] = 45078] = "Z3_OP_FPA_ROUND_TO_INTEGRAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_EQ"] = 45079] = "Z3_OP_FPA_EQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_LT"] = 45080] = "Z3_OP_FPA_LT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_GT"] = 45081] = "Z3_OP_FPA_GT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_LE"] = 45082] = "Z3_OP_FPA_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_GE"] = 45083] = "Z3_OP_FPA_GE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NAN"] = 45084] = "Z3_OP_FPA_IS_NAN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_INF"] = 45085] = "Z3_OP_FPA_IS_INF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_ZERO"] = 45086] = "Z3_OP_FPA_IS_ZERO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NORMAL"] = 45087] = "Z3_OP_FPA_IS_NORMAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_SUBNORMAL"] = 45088] = "Z3_OP_FPA_IS_SUBNORMAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NEGATIVE"] = 45089] = "Z3_OP_FPA_IS_NEGATIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_POSITIVE"] = 45090] = "Z3_OP_FPA_IS_POSITIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_FP"] = 45091] = "Z3_OP_FPA_FP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_FP"] = 45092] = "Z3_OP_FPA_TO_FP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_FP_UNSIGNED"] = 45093] = "Z3_OP_FPA_TO_FP_UNSIGNED";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_UBV"] = 45094] = "Z3_OP_FPA_TO_UBV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_SBV"] = 45095] = "Z3_OP_FPA_TO_SBV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_REAL"] = 45096] = "Z3_OP_FPA_TO_REAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_IEEE_BV"] = 45097] = "Z3_OP_FPA_TO_IEEE_BV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_BVWRAP"] = 45098] = "Z3_OP_FPA_BVWRAP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_BV2RM"] = 45099] = "Z3_OP_FPA_BV2RM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INTERNAL"] = 45100] = "Z3_OP_INTERNAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RECURSIVE"] = 45101] = "Z3_OP_RECURSIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UNINTERPRETED"] = 45102] = "Z3_OP_UNINTERPRETED";
      })(Z3_decl_kind = exports.Z3_decl_kind || (exports.Z3_decl_kind = {}));
      var Z3_param_kind;
      (function(Z3_param_kind2) {
        Z3_param_kind2[Z3_param_kind2["Z3_PK_UINT"] = 0] = "Z3_PK_UINT";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_BOOL"] = 1] = "Z3_PK_BOOL";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_DOUBLE"] = 2] = "Z3_PK_DOUBLE";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_SYMBOL"] = 3] = "Z3_PK_SYMBOL";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_STRING"] = 4] = "Z3_PK_STRING";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_OTHER"] = 5] = "Z3_PK_OTHER";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_INVALID"] = 6] = "Z3_PK_INVALID";
      })(Z3_param_kind = exports.Z3_param_kind || (exports.Z3_param_kind = {}));
      var Z3_ast_print_mode;
      (function(Z3_ast_print_mode2) {
        Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_SMTLIB_FULL"] = 0] = "Z3_PRINT_SMTLIB_FULL";
        Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_LOW_LEVEL"] = 1] = "Z3_PRINT_LOW_LEVEL";
        Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_SMTLIB2_COMPLIANT"] = 2] = "Z3_PRINT_SMTLIB2_COMPLIANT";
      })(Z3_ast_print_mode = exports.Z3_ast_print_mode || (exports.Z3_ast_print_mode = {}));
      var Z3_error_code;
      (function(Z3_error_code2) {
        Z3_error_code2[Z3_error_code2["Z3_OK"] = 0] = "Z3_OK";
        Z3_error_code2[Z3_error_code2["Z3_SORT_ERROR"] = 1] = "Z3_SORT_ERROR";
        Z3_error_code2[Z3_error_code2["Z3_IOB"] = 2] = "Z3_IOB";
        Z3_error_code2[Z3_error_code2["Z3_INVALID_ARG"] = 3] = "Z3_INVALID_ARG";
        Z3_error_code2[Z3_error_code2["Z3_PARSER_ERROR"] = 4] = "Z3_PARSER_ERROR";
        Z3_error_code2[Z3_error_code2["Z3_NO_PARSER"] = 5] = "Z3_NO_PARSER";
        Z3_error_code2[Z3_error_code2["Z3_INVALID_PATTERN"] = 6] = "Z3_INVALID_PATTERN";
        Z3_error_code2[Z3_error_code2["Z3_MEMOUT_FAIL"] = 7] = "Z3_MEMOUT_FAIL";
        Z3_error_code2[Z3_error_code2["Z3_FILE_ACCESS_ERROR"] = 8] = "Z3_FILE_ACCESS_ERROR";
        Z3_error_code2[Z3_error_code2["Z3_INTERNAL_FATAL"] = 9] = "Z3_INTERNAL_FATAL";
        Z3_error_code2[Z3_error_code2["Z3_INVALID_USAGE"] = 10] = "Z3_INVALID_USAGE";
        Z3_error_code2[Z3_error_code2["Z3_DEC_REF_ERROR"] = 11] = "Z3_DEC_REF_ERROR";
        Z3_error_code2[Z3_error_code2["Z3_EXCEPTION"] = 12] = "Z3_EXCEPTION";
      })(Z3_error_code = exports.Z3_error_code || (exports.Z3_error_code = {}));
      var Z3_goal_prec;
      (function(Z3_goal_prec2) {
        Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_PRECISE"] = 0] = "Z3_GOAL_PRECISE";
        Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_UNDER"] = 1] = "Z3_GOAL_UNDER";
        Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_OVER"] = 2] = "Z3_GOAL_OVER";
        Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_UNDER_OVER"] = 3] = "Z3_GOAL_UNDER_OVER";
      })(Z3_goal_prec = exports.Z3_goal_prec || (exports.Z3_goal_prec = {}));
    }
  });

  // node_modules/z3-solver/build/low-level/wrapper.__GENERATED__.js
  var require_wrapper_GENERATED = __commonJS({
    "node_modules/z3-solver/build/low-level/wrapper.__GENERATED__.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.init = void 0;
      async function init3(initModule) {
        let Mod = await initModule();
        function intArrayToByteArr(ints) {
          return new Uint8Array(new Uint32Array(ints).buffer);
        }
        function boolArrayToByteArr(bools) {
          return bools.map((b) => b ? 1 : 0);
        }
        function readUintArray(address, count) {
          return Array.from(new Uint32Array(Mod.HEAPU32.buffer, address, count));
        }
        let outAddress = Mod._malloc(24);
        let outUintArray = new Uint32Array(Mod.HEAPU32.buffer, outAddress, 4);
        let getOutUint = (i) => outUintArray[i];
        let outIntArray = new Int32Array(Mod.HEAPU32.buffer, outAddress, 4);
        let getOutInt = (i) => outIntArray[i];
        let outUint64Array = new BigUint64Array(Mod.HEAPU32.buffer, outAddress, 2);
        let getOutUint64 = (i) => outUint64Array[i];
        let outInt64Array = new BigInt64Array(Mod.HEAPU32.buffer, outAddress, 2);
        let getOutInt64 = (i) => outInt64Array[i];
        return {
          em: Mod,
          Z3: {
            mk_context: function(c) {
              let ctx = Mod._Z3_mk_context(c);
              Mod._set_noop_error_handler(ctx);
              return ctx;
            },
            mk_context_rc: function(c) {
              let ctx = Mod._Z3_mk_context_rc(c);
              Mod._set_noop_error_handler(ctx);
              return ctx;
            },
            global_param_set: function(param_id, param_value) {
              return Mod.ccall("Z3_global_param_set", "void", ["string", "string"], [param_id, param_value]);
            },
            global_param_reset_all: Mod._Z3_global_param_reset_all,
            global_param_get: function(param_id) {
              let ret = Mod.ccall("Z3_global_param_get", "boolean", ["string", "number"], [param_id, outAddress]);
              if (!ret) {
                return null;
              }
              return Mod.UTF8ToString(getOutUint(0));
            },
            mk_config: Mod._Z3_mk_config,
            del_config: Mod._Z3_del_config,
            set_param_value: function(c, param_id, param_value) {
              return Mod.ccall("Z3_set_param_value", "void", ["number", "string", "string"], [c, param_id, param_value]);
            },
            del_context: Mod._Z3_del_context,
            inc_ref: Mod._Z3_inc_ref,
            dec_ref: Mod._Z3_dec_ref,
            update_param_value: function(c, param_id, param_value) {
              return Mod.ccall("Z3_update_param_value", "void", ["number", "string", "string"], [c, param_id, param_value]);
            },
            get_global_param_descrs: Mod._Z3_get_global_param_descrs,
            interrupt: Mod._Z3_interrupt,
            enable_concurrent_dec_ref: Mod._Z3_enable_concurrent_dec_ref,
            mk_params: Mod._Z3_mk_params,
            params_inc_ref: Mod._Z3_params_inc_ref,
            params_dec_ref: Mod._Z3_params_dec_ref,
            params_set_bool: Mod._Z3_params_set_bool,
            params_set_uint: Mod._Z3_params_set_uint,
            params_set_double: Mod._Z3_params_set_double,
            params_set_symbol: Mod._Z3_params_set_symbol,
            params_to_string: function(c, p) {
              return Mod.ccall("Z3_params_to_string", "string", ["number", "number"], [c, p]);
            },
            params_validate: Mod._Z3_params_validate,
            param_descrs_inc_ref: Mod._Z3_param_descrs_inc_ref,
            param_descrs_dec_ref: Mod._Z3_param_descrs_dec_ref,
            param_descrs_get_kind: Mod._Z3_param_descrs_get_kind,
            param_descrs_size: Mod._Z3_param_descrs_size,
            param_descrs_get_name: Mod._Z3_param_descrs_get_name,
            param_descrs_get_documentation: function(c, p, s) {
              return Mod.ccall("Z3_param_descrs_get_documentation", "string", ["number", "number", "number"], [c, p, s]);
            },
            param_descrs_to_string: function(c, p) {
              return Mod.ccall("Z3_param_descrs_to_string", "string", ["number", "number"], [c, p]);
            },
            mk_int_symbol: Mod._Z3_mk_int_symbol,
            mk_string_symbol: function(c, s) {
              return Mod.ccall("Z3_mk_string_symbol", "number", ["number", "string"], [c, s]);
            },
            mk_uninterpreted_sort: Mod._Z3_mk_uninterpreted_sort,
            mk_bool_sort: Mod._Z3_mk_bool_sort,
            mk_int_sort: Mod._Z3_mk_int_sort,
            mk_real_sort: Mod._Z3_mk_real_sort,
            mk_bv_sort: Mod._Z3_mk_bv_sort,
            mk_finite_domain_sort: Mod._Z3_mk_finite_domain_sort,
            mk_array_sort: Mod._Z3_mk_array_sort,
            mk_array_sort_n: function(c, domain, range2) {
              return Mod.ccall("Z3_mk_array_sort_n", "number", ["number", "number", "array", "number"], [
                c,
                domain.length,
                intArrayToByteArr(domain),
                range2
              ]);
            },
            mk_tuple_sort: function(c, mk_tuple_name, field_names, field_sorts) {
              if (field_names.length !== field_sorts.length) {
                throw new TypeError(`field_names and field_sorts must be the same length (got ${field_names.length} and {field_sorts.length})`);
              }
              let outArray_proj_decl = Mod._malloc(4 * field_names.length);
              try {
                let ret = Mod.ccall("Z3_mk_tuple_sort", "number", [
                  "number",
                  "number",
                  "number",
                  "array",
                  "array",
                  "number",
                  "number"
                ], [
                  c,
                  mk_tuple_name,
                  field_names.length,
                  intArrayToByteArr(field_names),
                  intArrayToByteArr(field_sorts),
                  outAddress,
                  outArray_proj_decl
                ]);
                return {
                  rv: ret,
                  mk_tuple_decl: getOutUint(0),
                  proj_decl: readUintArray(outArray_proj_decl, field_names.length)
                };
              } finally {
                Mod._free(outArray_proj_decl);
              }
            },
            mk_enumeration_sort: function(c, name2, enum_names) {
              let outArray_enum_consts = Mod._malloc(4 * enum_names.length);
              try {
                let outArray_enum_testers = Mod._malloc(4 * enum_names.length);
                try {
                  let ret = Mod.ccall("Z3_mk_enumeration_sort", "number", ["number", "number", "number", "array", "number", "number"], [
                    c,
                    name2,
                    enum_names.length,
                    intArrayToByteArr(enum_names),
                    outArray_enum_consts,
                    outArray_enum_testers
                  ]);
                  return {
                    rv: ret,
                    enum_consts: readUintArray(outArray_enum_consts, enum_names.length),
                    enum_testers: readUintArray(outArray_enum_testers, enum_names.length)
                  };
                } finally {
                  Mod._free(outArray_enum_testers);
                }
              } finally {
                Mod._free(outArray_enum_consts);
              }
            },
            mk_list_sort: function(c, name2, elem_sort) {
              let ret = Mod.ccall("Z3_mk_list_sort", "number", [
                "number",
                "number",
                "number",
                "number",
                "number",
                "number",
                "number",
                "number",
                "number"
              ], [
                c,
                name2,
                elem_sort,
                outAddress,
                outAddress + 4,
                outAddress + 8,
                outAddress + 12,
                outAddress + 16,
                outAddress + 20
              ]);
              return {
                rv: ret,
                nil_decl: getOutUint(0),
                is_nil_decl: getOutUint(1),
                cons_decl: getOutUint(2),
                is_cons_decl: getOutUint(3),
                head_decl: getOutUint(4),
                tail_decl: getOutUint(5)
              };
            },
            mk_constructor: function(c, name2, recognizer, field_names, sorts, sort_refs) {
              if (field_names.length !== sorts.length) {
                throw new TypeError(`field_names and sorts must be the same length (got ${field_names.length} and {sorts.length})`);
              }
              if (field_names.length !== sort_refs.length) {
                throw new TypeError(`field_names and sort_refs must be the same length (got ${field_names.length} and {sort_refs.length})`);
              }
              return Mod.ccall("Z3_mk_constructor", "number", ["number", "number", "number", "number", "array", "array", "array"], [
                c,
                name2,
                recognizer,
                field_names.length,
                intArrayToByteArr(field_names),
                intArrayToByteArr(sorts),
                intArrayToByteArr(sort_refs)
              ]);
            },
            del_constructor: Mod._Z3_del_constructor,
            mk_datatype: function(c, name2, constructors) {
              return Mod.ccall("Z3_mk_datatype", "number", ["number", "number", "number", "array"], [
                c,
                name2,
                constructors.length,
                intArrayToByteArr(constructors)
              ]);
            },
            mk_datatype_sort: Mod._Z3_mk_datatype_sort,
            mk_constructor_list: function(c, constructors) {
              return Mod.ccall("Z3_mk_constructor_list", "number", ["number", "number", "array"], [
                c,
                constructors.length,
                intArrayToByteArr(constructors)
              ]);
            },
            del_constructor_list: Mod._Z3_del_constructor_list,
            mk_datatypes: function(c, sort_names, constructor_lists) {
              if (sort_names.length !== constructor_lists.length) {
                throw new TypeError(`sort_names and constructor_lists must be the same length (got ${sort_names.length} and {constructor_lists.length})`);
              }
              let outArray_sorts = Mod._malloc(4 * sort_names.length);
              try {
                let ret = Mod.ccall("Z3_mk_datatypes", "void", ["number", "number", "array", "number", "array"], [
                  c,
                  sort_names.length,
                  intArrayToByteArr(sort_names),
                  outArray_sorts,
                  intArrayToByteArr(constructor_lists)
                ]);
                return readUintArray(outArray_sorts, sort_names.length);
              } finally {
                Mod._free(outArray_sorts);
              }
            },
            query_constructor: function(c, constr, num_fields) {
              let outArray_accessors = Mod._malloc(4 * num_fields);
              try {
                let ret = Mod.ccall("Z3_query_constructor", "void", ["number", "number", "number", "number", "number", "number"], [
                  c,
                  constr,
                  num_fields,
                  outAddress,
                  outAddress + 4,
                  outArray_accessors
                ]);
                return {
                  constructor: getOutUint(0),
                  tester: getOutUint(1),
                  accessors: readUintArray(outArray_accessors, num_fields)
                };
              } finally {
                Mod._free(outArray_accessors);
              }
            },
            mk_func_decl: function(c, s, domain, range2) {
              return Mod.ccall("Z3_mk_func_decl", "number", ["number", "number", "number", "array", "number"], [
                c,
                s,
                domain.length,
                intArrayToByteArr(domain),
                range2
              ]);
            },
            mk_app: function(c, d, args) {
              return Mod.ccall("Z3_mk_app", "number", ["number", "number", "number", "array"], [c, d, args.length, intArrayToByteArr(args)]);
            },
            mk_const: Mod._Z3_mk_const,
            mk_fresh_func_decl: function(c, prefix, domain, range2) {
              return Mod.ccall("Z3_mk_fresh_func_decl", "number", ["number", "string", "number", "array", "number"], [
                c,
                prefix,
                domain.length,
                intArrayToByteArr(domain),
                range2
              ]);
            },
            mk_fresh_const: function(c, prefix, ty) {
              return Mod.ccall("Z3_mk_fresh_const", "number", ["number", "string", "number"], [c, prefix, ty]);
            },
            mk_rec_func_decl: function(c, s, domain, range2) {
              return Mod.ccall("Z3_mk_rec_func_decl", "number", ["number", "number", "number", "array", "number"], [
                c,
                s,
                domain.length,
                intArrayToByteArr(domain),
                range2
              ]);
            },
            add_rec_def: function(c, f, args, body) {
              return Mod.ccall("Z3_add_rec_def", "void", ["number", "number", "number", "array", "number"], [
                c,
                f,
                args.length,
                intArrayToByteArr(args),
                body
              ]);
            },
            mk_true: Mod._Z3_mk_true,
            mk_false: Mod._Z3_mk_false,
            mk_eq: Mod._Z3_mk_eq,
            mk_distinct: function(c, args) {
              return Mod.ccall("Z3_mk_distinct", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_not: Mod._Z3_mk_not,
            mk_ite: Mod._Z3_mk_ite,
            mk_iff: Mod._Z3_mk_iff,
            mk_implies: Mod._Z3_mk_implies,
            mk_xor: Mod._Z3_mk_xor,
            mk_and: function(c, args) {
              return Mod.ccall("Z3_mk_and", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_or: function(c, args) {
              return Mod.ccall("Z3_mk_or", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_add: function(c, args) {
              return Mod.ccall("Z3_mk_add", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_mul: function(c, args) {
              return Mod.ccall("Z3_mk_mul", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_sub: function(c, args) {
              return Mod.ccall("Z3_mk_sub", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_unary_minus: Mod._Z3_mk_unary_minus,
            mk_div: Mod._Z3_mk_div,
            mk_mod: Mod._Z3_mk_mod,
            mk_rem: Mod._Z3_mk_rem,
            mk_power: Mod._Z3_mk_power,
            mk_lt: Mod._Z3_mk_lt,
            mk_le: Mod._Z3_mk_le,
            mk_gt: Mod._Z3_mk_gt,
            mk_ge: Mod._Z3_mk_ge,
            mk_divides: Mod._Z3_mk_divides,
            mk_int2real: Mod._Z3_mk_int2real,
            mk_real2int: Mod._Z3_mk_real2int,
            mk_is_int: Mod._Z3_mk_is_int,
            mk_bvnot: Mod._Z3_mk_bvnot,
            mk_bvredand: Mod._Z3_mk_bvredand,
            mk_bvredor: Mod._Z3_mk_bvredor,
            mk_bvand: Mod._Z3_mk_bvand,
            mk_bvor: Mod._Z3_mk_bvor,
            mk_bvxor: Mod._Z3_mk_bvxor,
            mk_bvnand: Mod._Z3_mk_bvnand,
            mk_bvnor: Mod._Z3_mk_bvnor,
            mk_bvxnor: Mod._Z3_mk_bvxnor,
            mk_bvneg: Mod._Z3_mk_bvneg,
            mk_bvadd: Mod._Z3_mk_bvadd,
            mk_bvsub: Mod._Z3_mk_bvsub,
            mk_bvmul: Mod._Z3_mk_bvmul,
            mk_bvudiv: Mod._Z3_mk_bvudiv,
            mk_bvsdiv: Mod._Z3_mk_bvsdiv,
            mk_bvurem: Mod._Z3_mk_bvurem,
            mk_bvsrem: Mod._Z3_mk_bvsrem,
            mk_bvsmod: Mod._Z3_mk_bvsmod,
            mk_bvult: Mod._Z3_mk_bvult,
            mk_bvslt: Mod._Z3_mk_bvslt,
            mk_bvule: Mod._Z3_mk_bvule,
            mk_bvsle: Mod._Z3_mk_bvsle,
            mk_bvuge: Mod._Z3_mk_bvuge,
            mk_bvsge: Mod._Z3_mk_bvsge,
            mk_bvugt: Mod._Z3_mk_bvugt,
            mk_bvsgt: Mod._Z3_mk_bvsgt,
            mk_concat: Mod._Z3_mk_concat,
            mk_extract: Mod._Z3_mk_extract,
            mk_sign_ext: Mod._Z3_mk_sign_ext,
            mk_zero_ext: Mod._Z3_mk_zero_ext,
            mk_repeat: Mod._Z3_mk_repeat,
            mk_bit2bool: Mod._Z3_mk_bit2bool,
            mk_bvshl: Mod._Z3_mk_bvshl,
            mk_bvlshr: Mod._Z3_mk_bvlshr,
            mk_bvashr: Mod._Z3_mk_bvashr,
            mk_rotate_left: Mod._Z3_mk_rotate_left,
            mk_rotate_right: Mod._Z3_mk_rotate_right,
            mk_ext_rotate_left: Mod._Z3_mk_ext_rotate_left,
            mk_ext_rotate_right: Mod._Z3_mk_ext_rotate_right,
            mk_int2bv: Mod._Z3_mk_int2bv,
            mk_bv2int: Mod._Z3_mk_bv2int,
            mk_bvadd_no_overflow: Mod._Z3_mk_bvadd_no_overflow,
            mk_bvadd_no_underflow: Mod._Z3_mk_bvadd_no_underflow,
            mk_bvsub_no_overflow: Mod._Z3_mk_bvsub_no_overflow,
            mk_bvsub_no_underflow: Mod._Z3_mk_bvsub_no_underflow,
            mk_bvsdiv_no_overflow: Mod._Z3_mk_bvsdiv_no_overflow,
            mk_bvneg_no_overflow: Mod._Z3_mk_bvneg_no_overflow,
            mk_bvmul_no_overflow: Mod._Z3_mk_bvmul_no_overflow,
            mk_bvmul_no_underflow: Mod._Z3_mk_bvmul_no_underflow,
            mk_select: Mod._Z3_mk_select,
            mk_select_n: function(c, a, idxs) {
              return Mod.ccall("Z3_mk_select_n", "number", ["number", "number", "number", "array"], [c, a, idxs.length, intArrayToByteArr(idxs)]);
            },
            mk_store: Mod._Z3_mk_store,
            mk_store_n: function(c, a, idxs, v) {
              return Mod.ccall("Z3_mk_store_n", "number", ["number", "number", "number", "array", "number"], [c, a, idxs.length, intArrayToByteArr(idxs), v]);
            },
            mk_const_array: Mod._Z3_mk_const_array,
            mk_map: function(c, f, args) {
              return Mod.ccall("Z3_mk_map", "number", ["number", "number", "number", "array"], [c, f, args.length, intArrayToByteArr(args)]);
            },
            mk_array_default: Mod._Z3_mk_array_default,
            mk_as_array: Mod._Z3_mk_as_array,
            mk_set_has_size: Mod._Z3_mk_set_has_size,
            mk_set_sort: Mod._Z3_mk_set_sort,
            mk_empty_set: Mod._Z3_mk_empty_set,
            mk_full_set: Mod._Z3_mk_full_set,
            mk_set_add: Mod._Z3_mk_set_add,
            mk_set_del: Mod._Z3_mk_set_del,
            mk_set_union: function(c, args) {
              return Mod.ccall("Z3_mk_set_union", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_set_intersect: function(c, args) {
              return Mod.ccall("Z3_mk_set_intersect", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_set_difference: Mod._Z3_mk_set_difference,
            mk_set_complement: Mod._Z3_mk_set_complement,
            mk_set_member: Mod._Z3_mk_set_member,
            mk_set_subset: Mod._Z3_mk_set_subset,
            mk_array_ext: Mod._Z3_mk_array_ext,
            mk_numeral: function(c, numeral, ty) {
              return Mod.ccall("Z3_mk_numeral", "number", ["number", "string", "number"], [c, numeral, ty]);
            },
            mk_real: Mod._Z3_mk_real,
            mk_int: Mod._Z3_mk_int,
            mk_unsigned_int: Mod._Z3_mk_unsigned_int,
            mk_int64: Mod._Z3_mk_int64,
            mk_unsigned_int64: Mod._Z3_mk_unsigned_int64,
            mk_bv_numeral: function(c, bits) {
              return Mod.ccall("Z3_mk_bv_numeral", "number", ["number", "number", "array"], [c, bits.length, boolArrayToByteArr(bits)]);
            },
            mk_seq_sort: Mod._Z3_mk_seq_sort,
            is_seq_sort: function(c, s) {
              return Mod.ccall("Z3_is_seq_sort", "boolean", ["number", "number"], [c, s]);
            },
            get_seq_sort_basis: Mod._Z3_get_seq_sort_basis,
            mk_re_sort: Mod._Z3_mk_re_sort,
            is_re_sort: function(c, s) {
              return Mod.ccall("Z3_is_re_sort", "boolean", ["number", "number"], [c, s]);
            },
            get_re_sort_basis: Mod._Z3_get_re_sort_basis,
            mk_string_sort: Mod._Z3_mk_string_sort,
            mk_char_sort: Mod._Z3_mk_char_sort,
            is_string_sort: function(c, s) {
              return Mod.ccall("Z3_is_string_sort", "boolean", ["number", "number"], [c, s]);
            },
            is_char_sort: function(c, s) {
              return Mod.ccall("Z3_is_char_sort", "boolean", ["number", "number"], [c, s]);
            },
            mk_string: function(c, s) {
              return Mod.ccall("Z3_mk_string", "number", ["number", "string"], [c, s]);
            },
            mk_lstring: function(c, len, s) {
              return Mod.ccall("Z3_mk_lstring", "number", ["number", "number", "string"], [c, len, s]);
            },
            mk_u32string: function(c, chars) {
              return Mod.ccall("Z3_mk_u32string", "number", ["number", "number", "array"], [c, chars.length, intArrayToByteArr(chars)]);
            },
            is_string: function(c, s) {
              return Mod.ccall("Z3_is_string", "boolean", ["number", "number"], [c, s]);
            },
            get_string: function(c, s) {
              return Mod.ccall("Z3_get_string", "string", ["number", "number"], [c, s]);
            },
            get_string_length: Mod._Z3_get_string_length,
            get_string_contents: function(c, s, length3) {
              let outArray_contents = Mod._malloc(4 * length3);
              try {
                let ret = Mod.ccall("Z3_get_string_contents", "void", ["number", "number", "number", "number"], [c, s, length3, outArray_contents]);
                return readUintArray(outArray_contents, length3);
              } finally {
                Mod._free(outArray_contents);
              }
            },
            mk_seq_empty: Mod._Z3_mk_seq_empty,
            mk_seq_unit: Mod._Z3_mk_seq_unit,
            mk_seq_concat: function(c, args) {
              return Mod.ccall("Z3_mk_seq_concat", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_seq_prefix: Mod._Z3_mk_seq_prefix,
            mk_seq_suffix: Mod._Z3_mk_seq_suffix,
            mk_seq_contains: Mod._Z3_mk_seq_contains,
            mk_str_lt: Mod._Z3_mk_str_lt,
            mk_str_le: Mod._Z3_mk_str_le,
            mk_seq_extract: Mod._Z3_mk_seq_extract,
            mk_seq_replace: Mod._Z3_mk_seq_replace,
            mk_seq_at: Mod._Z3_mk_seq_at,
            mk_seq_nth: Mod._Z3_mk_seq_nth,
            mk_seq_length: Mod._Z3_mk_seq_length,
            mk_seq_index: Mod._Z3_mk_seq_index,
            mk_seq_last_index: Mod._Z3_mk_seq_last_index,
            mk_str_to_int: Mod._Z3_mk_str_to_int,
            mk_int_to_str: Mod._Z3_mk_int_to_str,
            mk_string_to_code: Mod._Z3_mk_string_to_code,
            mk_string_from_code: Mod._Z3_mk_string_from_code,
            mk_ubv_to_str: Mod._Z3_mk_ubv_to_str,
            mk_sbv_to_str: Mod._Z3_mk_sbv_to_str,
            mk_seq_to_re: Mod._Z3_mk_seq_to_re,
            mk_seq_in_re: Mod._Z3_mk_seq_in_re,
            mk_re_plus: Mod._Z3_mk_re_plus,
            mk_re_star: Mod._Z3_mk_re_star,
            mk_re_option: Mod._Z3_mk_re_option,
            mk_re_union: function(c, args) {
              return Mod.ccall("Z3_mk_re_union", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_re_concat: function(c, args) {
              return Mod.ccall("Z3_mk_re_concat", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_re_range: Mod._Z3_mk_re_range,
            mk_re_allchar: Mod._Z3_mk_re_allchar,
            mk_re_loop: Mod._Z3_mk_re_loop,
            mk_re_power: Mod._Z3_mk_re_power,
            mk_re_intersect: function(c, args) {
              return Mod.ccall("Z3_mk_re_intersect", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_re_complement: Mod._Z3_mk_re_complement,
            mk_re_diff: Mod._Z3_mk_re_diff,
            mk_re_empty: Mod._Z3_mk_re_empty,
            mk_re_full: Mod._Z3_mk_re_full,
            mk_char: Mod._Z3_mk_char,
            mk_char_le: Mod._Z3_mk_char_le,
            mk_char_to_int: Mod._Z3_mk_char_to_int,
            mk_char_to_bv: Mod._Z3_mk_char_to_bv,
            mk_char_from_bv: Mod._Z3_mk_char_from_bv,
            mk_char_is_digit: Mod._Z3_mk_char_is_digit,
            mk_linear_order: Mod._Z3_mk_linear_order,
            mk_partial_order: Mod._Z3_mk_partial_order,
            mk_piecewise_linear_order: Mod._Z3_mk_piecewise_linear_order,
            mk_tree_order: Mod._Z3_mk_tree_order,
            mk_transitive_closure: Mod._Z3_mk_transitive_closure,
            mk_pattern: function(c, terms) {
              return Mod.ccall("Z3_mk_pattern", "number", ["number", "number", "array"], [c, terms.length, intArrayToByteArr(terms)]);
            },
            mk_bound: Mod._Z3_mk_bound,
            mk_forall: function(c, weight, patterns, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_forall", "number", [
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                weight,
                patterns.length,
                intArrayToByteArr(patterns),
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_exists: function(c, weight, patterns, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_exists", "number", [
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                weight,
                patterns.length,
                intArrayToByteArr(patterns),
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_quantifier: function(c, is_forall, weight, patterns, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_quantifier", "number", [
                "number",
                "boolean",
                "number",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                is_forall,
                weight,
                patterns.length,
                intArrayToByteArr(patterns),
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_quantifier_ex: function(c, is_forall, weight, quantifier_id, skolem_id, patterns, no_patterns, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_quantifier_ex", "number", [
                "number",
                "boolean",
                "number",
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                is_forall,
                weight,
                quantifier_id,
                skolem_id,
                patterns.length,
                intArrayToByteArr(patterns),
                no_patterns.length,
                intArrayToByteArr(no_patterns),
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_forall_const: function(c, weight, bound, patterns, body) {
              return Mod.ccall("Z3_mk_forall_const", "number", ["number", "number", "number", "array", "number", "array", "number"], [
                c,
                weight,
                bound.length,
                intArrayToByteArr(bound),
                patterns.length,
                intArrayToByteArr(patterns),
                body
              ]);
            },
            mk_exists_const: function(c, weight, bound, patterns, body) {
              return Mod.ccall("Z3_mk_exists_const", "number", ["number", "number", "number", "array", "number", "array", "number"], [
                c,
                weight,
                bound.length,
                intArrayToByteArr(bound),
                patterns.length,
                intArrayToByteArr(patterns),
                body
              ]);
            },
            mk_quantifier_const: function(c, is_forall, weight, bound, patterns, body) {
              return Mod.ccall("Z3_mk_quantifier_const", "number", [
                "number",
                "boolean",
                "number",
                "number",
                "array",
                "number",
                "array",
                "number"
              ], [
                c,
                is_forall,
                weight,
                bound.length,
                intArrayToByteArr(bound),
                patterns.length,
                intArrayToByteArr(patterns),
                body
              ]);
            },
            mk_quantifier_const_ex: function(c, is_forall, weight, quantifier_id, skolem_id, bound, patterns, no_patterns, body) {
              return Mod.ccall("Z3_mk_quantifier_const_ex", "number", [
                "number",
                "boolean",
                "number",
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "number",
                "array",
                "number"
              ], [
                c,
                is_forall,
                weight,
                quantifier_id,
                skolem_id,
                bound.length,
                intArrayToByteArr(bound),
                patterns.length,
                intArrayToByteArr(patterns),
                no_patterns.length,
                intArrayToByteArr(no_patterns),
                body
              ]);
            },
            mk_lambda: function(c, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_lambda", "number", ["number", "number", "array", "array", "number"], [
                c,
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_lambda_const: function(c, bound, body) {
              return Mod.ccall("Z3_mk_lambda_const", "number", ["number", "number", "array", "number"], [
                c,
                bound.length,
                intArrayToByteArr(bound),
                body
              ]);
            },
            get_symbol_kind: Mod._Z3_get_symbol_kind,
            get_symbol_int: Mod._Z3_get_symbol_int,
            get_symbol_string: function(c, s) {
              return Mod.ccall("Z3_get_symbol_string", "string", ["number", "number"], [c, s]);
            },
            get_sort_name: Mod._Z3_get_sort_name,
            get_sort_id: Mod._Z3_get_sort_id,
            sort_to_ast: Mod._Z3_sort_to_ast,
            is_eq_sort: function(c, s1, s2) {
              return Mod.ccall("Z3_is_eq_sort", "boolean", ["number", "number", "number"], [c, s1, s2]);
            },
            get_sort_kind: Mod._Z3_get_sort_kind,
            get_bv_sort_size: Mod._Z3_get_bv_sort_size,
            get_finite_domain_sort_size: function(c, s) {
              let ret = Mod.ccall("Z3_get_finite_domain_sort_size", "boolean", ["number", "number", "number"], [c, s, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint64(0);
            },
            get_array_sort_domain: Mod._Z3_get_array_sort_domain,
            get_array_sort_domain_n: Mod._Z3_get_array_sort_domain_n,
            get_array_sort_range: Mod._Z3_get_array_sort_range,
            get_tuple_sort_mk_decl: Mod._Z3_get_tuple_sort_mk_decl,
            get_tuple_sort_num_fields: Mod._Z3_get_tuple_sort_num_fields,
            get_tuple_sort_field_decl: Mod._Z3_get_tuple_sort_field_decl,
            get_datatype_sort_num_constructors: Mod._Z3_get_datatype_sort_num_constructors,
            get_datatype_sort_constructor: Mod._Z3_get_datatype_sort_constructor,
            get_datatype_sort_recognizer: Mod._Z3_get_datatype_sort_recognizer,
            get_datatype_sort_constructor_accessor: Mod._Z3_get_datatype_sort_constructor_accessor,
            datatype_update_field: Mod._Z3_datatype_update_field,
            get_relation_arity: Mod._Z3_get_relation_arity,
            get_relation_column: Mod._Z3_get_relation_column,
            mk_atmost: function(c, args, k) {
              return Mod.ccall("Z3_mk_atmost", "number", ["number", "number", "array", "number"], [c, args.length, intArrayToByteArr(args), k]);
            },
            mk_atleast: function(c, args, k) {
              return Mod.ccall("Z3_mk_atleast", "number", ["number", "number", "array", "number"], [c, args.length, intArrayToByteArr(args), k]);
            },
            mk_pble: function(c, args, coeffs, k) {
              if (args.length !== coeffs.length) {
                throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
              }
              return Mod.ccall("Z3_mk_pble", "number", ["number", "number", "array", "array", "number"], [
                c,
                args.length,
                intArrayToByteArr(args),
                intArrayToByteArr(coeffs),
                k
              ]);
            },
            mk_pbge: function(c, args, coeffs, k) {
              if (args.length !== coeffs.length) {
                throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
              }
              return Mod.ccall("Z3_mk_pbge", "number", ["number", "number", "array", "array", "number"], [
                c,
                args.length,
                intArrayToByteArr(args),
                intArrayToByteArr(coeffs),
                k
              ]);
            },
            mk_pbeq: function(c, args, coeffs, k) {
              if (args.length !== coeffs.length) {
                throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
              }
              return Mod.ccall("Z3_mk_pbeq", "number", ["number", "number", "array", "array", "number"], [
                c,
                args.length,
                intArrayToByteArr(args),
                intArrayToByteArr(coeffs),
                k
              ]);
            },
            func_decl_to_ast: Mod._Z3_func_decl_to_ast,
            is_eq_func_decl: function(c, f1, f2) {
              return Mod.ccall("Z3_is_eq_func_decl", "boolean", ["number", "number", "number"], [c, f1, f2]);
            },
            get_func_decl_id: Mod._Z3_get_func_decl_id,
            get_decl_name: Mod._Z3_get_decl_name,
            get_decl_kind: Mod._Z3_get_decl_kind,
            get_domain_size: Mod._Z3_get_domain_size,
            get_arity: Mod._Z3_get_arity,
            get_domain: Mod._Z3_get_domain,
            get_range: Mod._Z3_get_range,
            get_decl_num_parameters: Mod._Z3_get_decl_num_parameters,
            get_decl_parameter_kind: Mod._Z3_get_decl_parameter_kind,
            get_decl_int_parameter: Mod._Z3_get_decl_int_parameter,
            get_decl_double_parameter: Mod._Z3_get_decl_double_parameter,
            get_decl_symbol_parameter: Mod._Z3_get_decl_symbol_parameter,
            get_decl_sort_parameter: Mod._Z3_get_decl_sort_parameter,
            get_decl_ast_parameter: Mod._Z3_get_decl_ast_parameter,
            get_decl_func_decl_parameter: Mod._Z3_get_decl_func_decl_parameter,
            get_decl_rational_parameter: function(c, d, idx) {
              return Mod.ccall("Z3_get_decl_rational_parameter", "string", ["number", "number", "number"], [c, d, idx]);
            },
            app_to_ast: Mod._Z3_app_to_ast,
            get_app_decl: Mod._Z3_get_app_decl,
            get_app_num_args: Mod._Z3_get_app_num_args,
            get_app_arg: Mod._Z3_get_app_arg,
            is_eq_ast: function(c, t1, t2) {
              return Mod.ccall("Z3_is_eq_ast", "boolean", ["number", "number", "number"], [c, t1, t2]);
            },
            get_ast_id: Mod._Z3_get_ast_id,
            get_ast_hash: Mod._Z3_get_ast_hash,
            get_sort: Mod._Z3_get_sort,
            is_well_sorted: function(c, t) {
              return Mod.ccall("Z3_is_well_sorted", "boolean", ["number", "number"], [c, t]);
            },
            get_bool_value: Mod._Z3_get_bool_value,
            get_ast_kind: Mod._Z3_get_ast_kind,
            is_app: function(c, a) {
              return Mod.ccall("Z3_is_app", "boolean", ["number", "number"], [c, a]);
            },
            is_numeral_ast: function(c, a) {
              return Mod.ccall("Z3_is_numeral_ast", "boolean", ["number", "number"], [c, a]);
            },
            is_algebraic_number: function(c, a) {
              return Mod.ccall("Z3_is_algebraic_number", "boolean", ["number", "number"], [c, a]);
            },
            to_app: Mod._Z3_to_app,
            to_func_decl: Mod._Z3_to_func_decl,
            get_numeral_string: function(c, a) {
              return Mod.ccall("Z3_get_numeral_string", "string", ["number", "number"], [c, a]);
            },
            get_numeral_binary_string: function(c, a) {
              return Mod.ccall("Z3_get_numeral_binary_string", "string", ["number", "number"], [c, a]);
            },
            get_numeral_decimal_string: function(c, a, precision) {
              return Mod.ccall("Z3_get_numeral_decimal_string", "string", ["number", "number", "number"], [c, a, precision]);
            },
            get_numeral_double: Mod._Z3_get_numeral_double,
            get_numerator: Mod._Z3_get_numerator,
            get_denominator: Mod._Z3_get_denominator,
            get_numeral_small: function(c, a) {
              let ret = Mod.ccall("Z3_get_numeral_small", "boolean", ["number", "number", "number", "number"], [c, a, outAddress, outAddress + 8]);
              if (!ret) {
                return null;
              }
              return { num: getOutInt64(0), den: getOutInt64(1) };
            },
            get_numeral_int: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_int", "boolean", ["number", "number", "number"], [c, v, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutInt(0);
            },
            get_numeral_uint: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_uint", "boolean", ["number", "number", "number"], [c, v, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint(0);
            },
            get_numeral_uint64: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_uint64", "boolean", ["number", "number", "number"], [c, v, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint64(0);
            },
            get_numeral_int64: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_int64", "boolean", ["number", "number", "number"], [c, v, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutInt64(0);
            },
            get_numeral_rational_int64: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_rational_int64", "boolean", ["number", "number", "number", "number"], [c, v, outAddress, outAddress + 8]);
              if (!ret) {
                return null;
              }
              return { num: getOutInt64(0), den: getOutInt64(1) };
            },
            get_algebraic_number_lower: Mod._Z3_get_algebraic_number_lower,
            get_algebraic_number_upper: Mod._Z3_get_algebraic_number_upper,
            pattern_to_ast: Mod._Z3_pattern_to_ast,
            get_pattern_num_terms: Mod._Z3_get_pattern_num_terms,
            get_pattern: Mod._Z3_get_pattern,
            get_index_value: Mod._Z3_get_index_value,
            is_quantifier_forall: function(c, a) {
              return Mod.ccall("Z3_is_quantifier_forall", "boolean", ["number", "number"], [c, a]);
            },
            is_quantifier_exists: function(c, a) {
              return Mod.ccall("Z3_is_quantifier_exists", "boolean", ["number", "number"], [c, a]);
            },
            is_lambda: function(c, a) {
              return Mod.ccall("Z3_is_lambda", "boolean", ["number", "number"], [c, a]);
            },
            get_quantifier_weight: Mod._Z3_get_quantifier_weight,
            get_quantifier_num_patterns: Mod._Z3_get_quantifier_num_patterns,
            get_quantifier_pattern_ast: Mod._Z3_get_quantifier_pattern_ast,
            get_quantifier_num_no_patterns: Mod._Z3_get_quantifier_num_no_patterns,
            get_quantifier_no_pattern_ast: Mod._Z3_get_quantifier_no_pattern_ast,
            get_quantifier_num_bound: Mod._Z3_get_quantifier_num_bound,
            get_quantifier_bound_name: Mod._Z3_get_quantifier_bound_name,
            get_quantifier_bound_sort: Mod._Z3_get_quantifier_bound_sort,
            get_quantifier_body: Mod._Z3_get_quantifier_body,
            simplify: function(c, a) {
              return Mod.async_call(Mod._async_Z3_simplify, c, a);
            },
            simplify_ex: function(c, a, p) {
              return Mod.async_call(Mod._async_Z3_simplify_ex, c, a, p);
            },
            simplify_get_help: function(c) {
              return Mod.ccall("Z3_simplify_get_help", "string", ["number"], [c]);
            },
            simplify_get_param_descrs: Mod._Z3_simplify_get_param_descrs,
            update_term: function(c, a, args) {
              return Mod.ccall("Z3_update_term", "number", ["number", "number", "number", "array"], [c, a, args.length, intArrayToByteArr(args)]);
            },
            substitute: function(c, a, from2, to) {
              if (from2.length !== to.length) {
                throw new TypeError(`from and to must be the same length (got ${from2.length} and {to.length})`);
              }
              return Mod.ccall("Z3_substitute", "number", ["number", "number", "number", "array", "array"], [
                c,
                a,
                from2.length,
                intArrayToByteArr(from2),
                intArrayToByteArr(to)
              ]);
            },
            substitute_vars: function(c, a, to) {
              return Mod.ccall("Z3_substitute_vars", "number", ["number", "number", "number", "array"], [c, a, to.length, intArrayToByteArr(to)]);
            },
            substitute_funs: function(c, a, from2, to) {
              if (from2.length !== to.length) {
                throw new TypeError(`from and to must be the same length (got ${from2.length} and {to.length})`);
              }
              return Mod.ccall("Z3_substitute_funs", "number", ["number", "number", "number", "array", "array"], [
                c,
                a,
                from2.length,
                intArrayToByteArr(from2),
                intArrayToByteArr(to)
              ]);
            },
            translate: Mod._Z3_translate,
            mk_model: Mod._Z3_mk_model,
            model_inc_ref: Mod._Z3_model_inc_ref,
            model_dec_ref: Mod._Z3_model_dec_ref,
            model_eval: function(c, m, t, model_completion) {
              let ret = Mod.ccall("Z3_model_eval", "boolean", ["number", "number", "number", "boolean", "number"], [c, m, t, model_completion, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint(0);
            },
            model_get_const_interp: function(c, m, a) {
              let ret = Mod.ccall("Z3_model_get_const_interp", "number", ["number", "number", "number"], [c, m, a]);
              if (ret === 0) {
                return null;
              }
              return ret;
            },
            model_has_interp: function(c, m, a) {
              return Mod.ccall("Z3_model_has_interp", "boolean", ["number", "number", "number"], [c, m, a]);
            },
            model_get_func_interp: function(c, m, f) {
              let ret = Mod.ccall("Z3_model_get_func_interp", "number", ["number", "number", "number"], [c, m, f]);
              if (ret === 0) {
                return null;
              }
              return ret;
            },
            model_get_num_consts: Mod._Z3_model_get_num_consts,
            model_get_const_decl: Mod._Z3_model_get_const_decl,
            model_get_num_funcs: Mod._Z3_model_get_num_funcs,
            model_get_func_decl: Mod._Z3_model_get_func_decl,
            model_get_num_sorts: Mod._Z3_model_get_num_sorts,
            model_get_sort: Mod._Z3_model_get_sort,
            model_get_sort_universe: Mod._Z3_model_get_sort_universe,
            model_translate: Mod._Z3_model_translate,
            is_as_array: function(c, a) {
              return Mod.ccall("Z3_is_as_array", "boolean", ["number", "number"], [c, a]);
            },
            get_as_array_func_decl: Mod._Z3_get_as_array_func_decl,
            add_func_interp: Mod._Z3_add_func_interp,
            add_const_interp: Mod._Z3_add_const_interp,
            func_interp_inc_ref: Mod._Z3_func_interp_inc_ref,
            func_interp_dec_ref: Mod._Z3_func_interp_dec_ref,
            func_interp_get_num_entries: Mod._Z3_func_interp_get_num_entries,
            func_interp_get_entry: Mod._Z3_func_interp_get_entry,
            func_interp_get_else: Mod._Z3_func_interp_get_else,
            func_interp_set_else: Mod._Z3_func_interp_set_else,
            func_interp_get_arity: Mod._Z3_func_interp_get_arity,
            func_interp_add_entry: Mod._Z3_func_interp_add_entry,
            func_entry_inc_ref: Mod._Z3_func_entry_inc_ref,
            func_entry_dec_ref: Mod._Z3_func_entry_dec_ref,
            func_entry_get_value: Mod._Z3_func_entry_get_value,
            func_entry_get_num_args: Mod._Z3_func_entry_get_num_args,
            func_entry_get_arg: Mod._Z3_func_entry_get_arg,
            open_log: function(filename) {
              return Mod.ccall("Z3_open_log", "boolean", ["string"], [filename]);
            },
            append_log: function(string) {
              return Mod.ccall("Z3_append_log", "void", ["string"], [string]);
            },
            close_log: Mod._Z3_close_log,
            toggle_warning_messages: Mod._Z3_toggle_warning_messages,
            set_ast_print_mode: Mod._Z3_set_ast_print_mode,
            ast_to_string: function(c, a) {
              return Mod.ccall("Z3_ast_to_string", "string", ["number", "number"], [c, a]);
            },
            pattern_to_string: function(c, p) {
              return Mod.ccall("Z3_pattern_to_string", "string", ["number", "number"], [c, p]);
            },
            sort_to_string: function(c, s) {
              return Mod.ccall("Z3_sort_to_string", "string", ["number", "number"], [c, s]);
            },
            func_decl_to_string: function(c, d) {
              return Mod.ccall("Z3_func_decl_to_string", "string", ["number", "number"], [c, d]);
            },
            model_to_string: function(c, m) {
              return Mod.ccall("Z3_model_to_string", "string", ["number", "number"], [c, m]);
            },
            benchmark_to_smtlib_string: function(c, name2, logic, status, attributes, assumptions, formula) {
              return Mod.ccall("Z3_benchmark_to_smtlib_string", "string", [
                "number",
                "string",
                "string",
                "string",
                "string",
                "number",
                "array",
                "number"
              ], [
                c,
                name2,
                logic,
                status,
                attributes,
                assumptions.length,
                intArrayToByteArr(assumptions),
                formula
              ]);
            },
            parse_smtlib2_string: function(c, str, sort_names, sorts, decl_names, decls) {
              if (sort_names.length !== sorts.length) {
                throw new TypeError(`sort_names and sorts must be the same length (got ${sort_names.length} and {sorts.length})`);
              }
              if (decl_names.length !== decls.length) {
                throw new TypeError(`decl_names and decls must be the same length (got ${decl_names.length} and {decls.length})`);
              }
              return Mod.ccall("Z3_parse_smtlib2_string", "number", [
                "number",
                "string",
                "number",
                "array",
                "array",
                "number",
                "array",
                "array"
              ], [
                c,
                str,
                sort_names.length,
                intArrayToByteArr(sort_names),
                intArrayToByteArr(sorts),
                decl_names.length,
                intArrayToByteArr(decl_names),
                intArrayToByteArr(decls)
              ]);
            },
            parse_smtlib2_file: function(c, file_name, sort_names, sorts, decl_names, decls) {
              if (sort_names.length !== sorts.length) {
                throw new TypeError(`sort_names and sorts must be the same length (got ${sort_names.length} and {sorts.length})`);
              }
              if (decl_names.length !== decls.length) {
                throw new TypeError(`decl_names and decls must be the same length (got ${decl_names.length} and {decls.length})`);
              }
              return Mod.ccall("Z3_parse_smtlib2_file", "number", [
                "number",
                "string",
                "number",
                "array",
                "array",
                "number",
                "array",
                "array"
              ], [
                c,
                file_name,
                sort_names.length,
                intArrayToByteArr(sort_names),
                intArrayToByteArr(sorts),
                decl_names.length,
                intArrayToByteArr(decl_names),
                intArrayToByteArr(decls)
              ]);
            },
            eval_smtlib2_string: async function(c, str) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_eval_smtlib2_string", "string", ["number", "string"], [c, str]));
            },
            mk_parser_context: Mod._Z3_mk_parser_context,
            parser_context_inc_ref: Mod._Z3_parser_context_inc_ref,
            parser_context_dec_ref: Mod._Z3_parser_context_dec_ref,
            parser_context_add_sort: Mod._Z3_parser_context_add_sort,
            parser_context_add_decl: Mod._Z3_parser_context_add_decl,
            parser_context_from_string: function(c, pc, s) {
              return Mod.ccall("Z3_parser_context_from_string", "number", ["number", "number", "string"], [c, pc, s]);
            },
            get_error_code: Mod._Z3_get_error_code,
            set_error: Mod._Z3_set_error,
            get_error_msg: function(c, err) {
              return Mod.ccall("Z3_get_error_msg", "string", ["number", "number"], [c, err]);
            },
            get_version: function() {
              let ret = Mod.ccall("Z3_get_version", "void", ["number", "number", "number", "number"], [outAddress, outAddress + 4, outAddress + 8, outAddress + 12]);
              return {
                major: getOutUint(0),
                minor: getOutUint(1),
                build_number: getOutUint(2),
                revision_number: getOutUint(3)
              };
            },
            get_full_version: function() {
              return Mod.ccall("Z3_get_full_version", "string", [], []);
            },
            enable_trace: function(tag) {
              return Mod.ccall("Z3_enable_trace", "void", ["string"], [tag]);
            },
            disable_trace: function(tag) {
              return Mod.ccall("Z3_disable_trace", "void", ["string"], [tag]);
            },
            reset_memory: Mod._Z3_reset_memory,
            finalize_memory: Mod._Z3_finalize_memory,
            mk_goal: Mod._Z3_mk_goal,
            goal_inc_ref: Mod._Z3_goal_inc_ref,
            goal_dec_ref: Mod._Z3_goal_dec_ref,
            goal_precision: Mod._Z3_goal_precision,
            goal_assert: Mod._Z3_goal_assert,
            goal_inconsistent: function(c, g) {
              return Mod.ccall("Z3_goal_inconsistent", "boolean", ["number", "number"], [c, g]);
            },
            goal_depth: Mod._Z3_goal_depth,
            goal_reset: Mod._Z3_goal_reset,
            goal_size: Mod._Z3_goal_size,
            goal_formula: Mod._Z3_goal_formula,
            goal_num_exprs: Mod._Z3_goal_num_exprs,
            goal_is_decided_sat: function(c, g) {
              return Mod.ccall("Z3_goal_is_decided_sat", "boolean", ["number", "number"], [c, g]);
            },
            goal_is_decided_unsat: function(c, g) {
              return Mod.ccall("Z3_goal_is_decided_unsat", "boolean", ["number", "number"], [c, g]);
            },
            goal_translate: Mod._Z3_goal_translate,
            goal_convert_model: Mod._Z3_goal_convert_model,
            goal_to_string: function(c, g) {
              return Mod.ccall("Z3_goal_to_string", "string", ["number", "number"], [c, g]);
            },
            goal_to_dimacs_string: function(c, g, include_names) {
              return Mod.ccall("Z3_goal_to_dimacs_string", "string", ["number", "number", "boolean"], [c, g, include_names]);
            },
            mk_tactic: function(c, name2) {
              return Mod.ccall("Z3_mk_tactic", "number", ["number", "string"], [c, name2]);
            },
            tactic_inc_ref: Mod._Z3_tactic_inc_ref,
            tactic_dec_ref: Mod._Z3_tactic_dec_ref,
            mk_probe: function(c, name2) {
              return Mod.ccall("Z3_mk_probe", "number", ["number", "string"], [c, name2]);
            },
            probe_inc_ref: Mod._Z3_probe_inc_ref,
            probe_dec_ref: Mod._Z3_probe_dec_ref,
            tactic_and_then: Mod._Z3_tactic_and_then,
            tactic_or_else: Mod._Z3_tactic_or_else,
            tactic_par_or: function(c, ts) {
              return Mod.ccall("Z3_tactic_par_or", "number", ["number", "number", "array"], [c, ts.length, intArrayToByteArr(ts)]);
            },
            tactic_par_and_then: Mod._Z3_tactic_par_and_then,
            tactic_try_for: Mod._Z3_tactic_try_for,
            tactic_when: Mod._Z3_tactic_when,
            tactic_cond: Mod._Z3_tactic_cond,
            tactic_repeat: Mod._Z3_tactic_repeat,
            tactic_skip: Mod._Z3_tactic_skip,
            tactic_fail: Mod._Z3_tactic_fail,
            tactic_fail_if: Mod._Z3_tactic_fail_if,
            tactic_fail_if_not_decided: Mod._Z3_tactic_fail_if_not_decided,
            tactic_using_params: Mod._Z3_tactic_using_params,
            probe_const: Mod._Z3_probe_const,
            probe_lt: Mod._Z3_probe_lt,
            probe_gt: Mod._Z3_probe_gt,
            probe_le: Mod._Z3_probe_le,
            probe_ge: Mod._Z3_probe_ge,
            probe_eq: Mod._Z3_probe_eq,
            probe_and: Mod._Z3_probe_and,
            probe_or: Mod._Z3_probe_or,
            probe_not: Mod._Z3_probe_not,
            get_num_tactics: Mod._Z3_get_num_tactics,
            get_tactic_name: function(c, i) {
              return Mod.ccall("Z3_get_tactic_name", "string", ["number", "number"], [c, i]);
            },
            get_num_probes: Mod._Z3_get_num_probes,
            get_probe_name: function(c, i) {
              return Mod.ccall("Z3_get_probe_name", "string", ["number", "number"], [c, i]);
            },
            tactic_get_help: function(c, t) {
              return Mod.ccall("Z3_tactic_get_help", "string", ["number", "number"], [c, t]);
            },
            tactic_get_param_descrs: Mod._Z3_tactic_get_param_descrs,
            tactic_get_descr: function(c, name2) {
              return Mod.ccall("Z3_tactic_get_descr", "string", ["number", "string"], [c, name2]);
            },
            probe_get_descr: function(c, name2) {
              return Mod.ccall("Z3_probe_get_descr", "string", ["number", "string"], [c, name2]);
            },
            probe_apply: Mod._Z3_probe_apply,
            tactic_apply: function(c, t, g) {
              return Mod.async_call(Mod._async_Z3_tactic_apply, c, t, g);
            },
            tactic_apply_ex: function(c, t, g, p) {
              return Mod.async_call(Mod._async_Z3_tactic_apply_ex, c, t, g, p);
            },
            apply_result_inc_ref: Mod._Z3_apply_result_inc_ref,
            apply_result_dec_ref: Mod._Z3_apply_result_dec_ref,
            apply_result_to_string: function(c, r) {
              return Mod.ccall("Z3_apply_result_to_string", "string", ["number", "number"], [c, r]);
            },
            apply_result_get_num_subgoals: Mod._Z3_apply_result_get_num_subgoals,
            apply_result_get_subgoal: Mod._Z3_apply_result_get_subgoal,
            mk_solver: Mod._Z3_mk_solver,
            mk_simple_solver: Mod._Z3_mk_simple_solver,
            mk_solver_for_logic: Mod._Z3_mk_solver_for_logic,
            mk_solver_from_tactic: Mod._Z3_mk_solver_from_tactic,
            solver_translate: Mod._Z3_solver_translate,
            solver_import_model_converter: Mod._Z3_solver_import_model_converter,
            solver_get_help: function(c, s) {
              return Mod.ccall("Z3_solver_get_help", "string", ["number", "number"], [c, s]);
            },
            solver_get_param_descrs: Mod._Z3_solver_get_param_descrs,
            solver_set_params: Mod._Z3_solver_set_params,
            solver_inc_ref: Mod._Z3_solver_inc_ref,
            solver_dec_ref: Mod._Z3_solver_dec_ref,
            solver_interrupt: Mod._Z3_solver_interrupt,
            solver_push: Mod._Z3_solver_push,
            solver_pop: Mod._Z3_solver_pop,
            solver_reset: Mod._Z3_solver_reset,
            solver_get_num_scopes: Mod._Z3_solver_get_num_scopes,
            solver_assert: Mod._Z3_solver_assert,
            solver_assert_and_track: Mod._Z3_solver_assert_and_track,
            solver_from_file: function(c, s, file_name) {
              return Mod.ccall("Z3_solver_from_file", "void", ["number", "number", "string"], [c, s, file_name]);
            },
            solver_from_string: function(c, s, file_name) {
              return Mod.ccall("Z3_solver_from_string", "void", ["number", "number", "string"], [c, s, file_name]);
            },
            solver_get_assertions: Mod._Z3_solver_get_assertions,
            solver_get_units: Mod._Z3_solver_get_units,
            solver_get_trail: Mod._Z3_solver_get_trail,
            solver_get_non_units: Mod._Z3_solver_get_non_units,
            solver_get_levels: function(c, s, literals, levels) {
              return Mod.ccall("Z3_solver_get_levels", "void", ["number", "number", "number", "number", "array"], [
                c,
                s,
                literals,
                levels.length,
                intArrayToByteArr(levels)
              ]);
            },
            solver_congruence_root: Mod._Z3_solver_congruence_root,
            solver_congruence_next: Mod._Z3_solver_congruence_next,
            solver_next_split: Mod._Z3_solver_next_split,
            solver_propagate_declare: function(c, name2, domain, range2) {
              return Mod.ccall("Z3_solver_propagate_declare", "number", ["number", "number", "number", "array", "number"], [
                c,
                name2,
                domain.length,
                intArrayToByteArr(domain),
                range2
              ]);
            },
            solver_propagate_register: Mod._Z3_solver_propagate_register,
            solver_propagate_register_cb: Mod._Z3_solver_propagate_register_cb,
            solver_propagate_consequence: function(c, cb, fixed, eq_lhs, eq_rhs, conseq) {
              if (eq_lhs.length !== eq_rhs.length) {
                throw new TypeError(`eq_lhs and eq_rhs must be the same length (got ${eq_lhs.length} and {eq_rhs.length})`);
              }
              return Mod.ccall("Z3_solver_propagate_consequence", "void", [
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                cb,
                fixed.length,
                intArrayToByteArr(fixed),
                eq_lhs.length,
                intArrayToByteArr(eq_lhs),
                intArrayToByteArr(eq_rhs),
                conseq
              ]);
            },
            solver_check: function(c, s) {
              return Mod.async_call(Mod._async_Z3_solver_check, c, s);
            },
            solver_check_assumptions: async function(c, s, assumptions) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_solver_check_assumptions", "number", ["number", "number", "number", "array"], [
                c,
                s,
                assumptions.length,
                intArrayToByteArr(assumptions)
              ]));
            },
            get_implied_equalities: function(c, s, terms) {
              let outArray_class_ids = Mod._malloc(4 * terms.length);
              try {
                let ret = Mod.ccall("Z3_get_implied_equalities", "number", ["number", "number", "number", "array", "number"], [
                  c,
                  s,
                  terms.length,
                  intArrayToByteArr(terms),
                  outArray_class_ids
                ]);
                return {
                  rv: ret,
                  class_ids: readUintArray(outArray_class_ids, terms.length)
                };
              } finally {
                Mod._free(outArray_class_ids);
              }
            },
            solver_get_consequences: function(c, s, assumptions, variables, consequences) {
              return Mod.async_call(Mod._async_Z3_solver_get_consequences, c, s, assumptions, variables, consequences);
            },
            solver_cube: function(c, s, vars, backtrack_level) {
              return Mod.async_call(Mod._async_Z3_solver_cube, c, s, vars, backtrack_level);
            },
            solver_get_model: Mod._Z3_solver_get_model,
            solver_get_proof: Mod._Z3_solver_get_proof,
            solver_get_unsat_core: Mod._Z3_solver_get_unsat_core,
            solver_get_reason_unknown: function(c, s) {
              return Mod.ccall("Z3_solver_get_reason_unknown", "string", ["number", "number"], [c, s]);
            },
            solver_get_statistics: Mod._Z3_solver_get_statistics,
            solver_to_string: function(c, s) {
              return Mod.ccall("Z3_solver_to_string", "string", ["number", "number"], [c, s]);
            },
            solver_to_dimacs_string: function(c, s, include_names) {
              return Mod.ccall("Z3_solver_to_dimacs_string", "string", ["number", "number", "boolean"], [c, s, include_names]);
            },
            stats_to_string: function(c, s) {
              return Mod.ccall("Z3_stats_to_string", "string", ["number", "number"], [c, s]);
            },
            stats_inc_ref: Mod._Z3_stats_inc_ref,
            stats_dec_ref: Mod._Z3_stats_dec_ref,
            stats_size: Mod._Z3_stats_size,
            stats_get_key: function(c, s, idx) {
              return Mod.ccall("Z3_stats_get_key", "string", ["number", "number", "number"], [c, s, idx]);
            },
            stats_is_uint: function(c, s, idx) {
              return Mod.ccall("Z3_stats_is_uint", "boolean", ["number", "number", "number"], [c, s, idx]);
            },
            stats_is_double: function(c, s, idx) {
              return Mod.ccall("Z3_stats_is_double", "boolean", ["number", "number", "number"], [c, s, idx]);
            },
            stats_get_uint_value: Mod._Z3_stats_get_uint_value,
            stats_get_double_value: Mod._Z3_stats_get_double_value,
            get_estimated_alloc_size: Mod._Z3_get_estimated_alloc_size,
            algebraic_is_value: function(c, a) {
              return Mod.ccall("Z3_algebraic_is_value", "boolean", ["number", "number"], [c, a]);
            },
            algebraic_is_pos: function(c, a) {
              return Mod.ccall("Z3_algebraic_is_pos", "boolean", ["number", "number"], [c, a]);
            },
            algebraic_is_neg: function(c, a) {
              return Mod.ccall("Z3_algebraic_is_neg", "boolean", ["number", "number"], [c, a]);
            },
            algebraic_is_zero: function(c, a) {
              return Mod.ccall("Z3_algebraic_is_zero", "boolean", ["number", "number"], [c, a]);
            },
            algebraic_sign: Mod._Z3_algebraic_sign,
            algebraic_add: Mod._Z3_algebraic_add,
            algebraic_sub: Mod._Z3_algebraic_sub,
            algebraic_mul: Mod._Z3_algebraic_mul,
            algebraic_div: Mod._Z3_algebraic_div,
            algebraic_root: Mod._Z3_algebraic_root,
            algebraic_power: Mod._Z3_algebraic_power,
            algebraic_lt: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_lt", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_gt: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_gt", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_le: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_le", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_ge: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_ge", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_eq: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_eq", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_neq: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_neq", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_roots: async function(c, p, a) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_algebraic_roots", "number", ["number", "number", "number", "array"], [c, p, a.length, intArrayToByteArr(a)]));
            },
            algebraic_eval: async function(c, p, a) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_algebraic_eval", "number", ["number", "number", "number", "array"], [c, p, a.length, intArrayToByteArr(a)]));
            },
            algebraic_get_poly: Mod._Z3_algebraic_get_poly,
            algebraic_get_i: Mod._Z3_algebraic_get_i,
            mk_ast_vector: Mod._Z3_mk_ast_vector,
            ast_vector_inc_ref: Mod._Z3_ast_vector_inc_ref,
            ast_vector_dec_ref: Mod._Z3_ast_vector_dec_ref,
            ast_vector_size: Mod._Z3_ast_vector_size,
            ast_vector_get: Mod._Z3_ast_vector_get,
            ast_vector_set: Mod._Z3_ast_vector_set,
            ast_vector_resize: Mod._Z3_ast_vector_resize,
            ast_vector_push: Mod._Z3_ast_vector_push,
            ast_vector_translate: Mod._Z3_ast_vector_translate,
            ast_vector_to_string: function(c, v) {
              return Mod.ccall("Z3_ast_vector_to_string", "string", ["number", "number"], [c, v]);
            },
            mk_ast_map: Mod._Z3_mk_ast_map,
            ast_map_inc_ref: Mod._Z3_ast_map_inc_ref,
            ast_map_dec_ref: Mod._Z3_ast_map_dec_ref,
            ast_map_contains: function(c, m, k) {
              return Mod.ccall("Z3_ast_map_contains", "boolean", ["number", "number", "number"], [c, m, k]);
            },
            ast_map_find: Mod._Z3_ast_map_find,
            ast_map_insert: Mod._Z3_ast_map_insert,
            ast_map_erase: Mod._Z3_ast_map_erase,
            ast_map_reset: Mod._Z3_ast_map_reset,
            ast_map_size: Mod._Z3_ast_map_size,
            ast_map_keys: Mod._Z3_ast_map_keys,
            ast_map_to_string: function(c, m) {
              return Mod.ccall("Z3_ast_map_to_string", "string", ["number", "number"], [c, m]);
            },
            mk_fixedpoint: Mod._Z3_mk_fixedpoint,
            fixedpoint_inc_ref: Mod._Z3_fixedpoint_inc_ref,
            fixedpoint_dec_ref: Mod._Z3_fixedpoint_dec_ref,
            fixedpoint_add_rule: Mod._Z3_fixedpoint_add_rule,
            fixedpoint_add_fact: function(c, d, r, args) {
              return Mod.ccall("Z3_fixedpoint_add_fact", "void", ["number", "number", "number", "number", "array"], [c, d, r, args.length, intArrayToByteArr(args)]);
            },
            fixedpoint_assert: Mod._Z3_fixedpoint_assert,
            fixedpoint_query: function(c, d, query) {
              return Mod.async_call(Mod._async_Z3_fixedpoint_query, c, d, query);
            },
            fixedpoint_query_relations: async function(c, d, relations) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_fixedpoint_query_relations", "number", ["number", "number", "number", "array"], [
                c,
                d,
                relations.length,
                intArrayToByteArr(relations)
              ]));
            },
            fixedpoint_get_answer: Mod._Z3_fixedpoint_get_answer,
            fixedpoint_get_reason_unknown: function(c, d) {
              return Mod.ccall("Z3_fixedpoint_get_reason_unknown", "string", ["number", "number"], [c, d]);
            },
            fixedpoint_update_rule: Mod._Z3_fixedpoint_update_rule,
            fixedpoint_get_num_levels: Mod._Z3_fixedpoint_get_num_levels,
            fixedpoint_get_cover_delta: Mod._Z3_fixedpoint_get_cover_delta,
            fixedpoint_add_cover: Mod._Z3_fixedpoint_add_cover,
            fixedpoint_get_statistics: Mod._Z3_fixedpoint_get_statistics,
            fixedpoint_register_relation: Mod._Z3_fixedpoint_register_relation,
            fixedpoint_set_predicate_representation: function(c, d, f, relation_kinds) {
              return Mod.ccall("Z3_fixedpoint_set_predicate_representation", "void", ["number", "number", "number", "number", "array"], [
                c,
                d,
                f,
                relation_kinds.length,
                intArrayToByteArr(relation_kinds)
              ]);
            },
            fixedpoint_get_rules: Mod._Z3_fixedpoint_get_rules,
            fixedpoint_get_assertions: Mod._Z3_fixedpoint_get_assertions,
            fixedpoint_set_params: Mod._Z3_fixedpoint_set_params,
            fixedpoint_get_help: function(c, f) {
              return Mod.ccall("Z3_fixedpoint_get_help", "string", ["number", "number"], [c, f]);
            },
            fixedpoint_get_param_descrs: Mod._Z3_fixedpoint_get_param_descrs,
            fixedpoint_to_string: function(c, f, queries) {
              return Mod.ccall("Z3_fixedpoint_to_string", "string", ["number", "number", "number", "array"], [
                c,
                f,
                queries.length,
                intArrayToByteArr(queries)
              ]);
            },
            fixedpoint_from_string: function(c, f, s) {
              return Mod.ccall("Z3_fixedpoint_from_string", "number", ["number", "number", "string"], [c, f, s]);
            },
            fixedpoint_from_file: function(c, f, s) {
              return Mod.ccall("Z3_fixedpoint_from_file", "number", ["number", "number", "string"], [c, f, s]);
            },
            mk_fpa_rounding_mode_sort: Mod._Z3_mk_fpa_rounding_mode_sort,
            mk_fpa_round_nearest_ties_to_even: Mod._Z3_mk_fpa_round_nearest_ties_to_even,
            mk_fpa_rne: Mod._Z3_mk_fpa_rne,
            mk_fpa_round_nearest_ties_to_away: Mod._Z3_mk_fpa_round_nearest_ties_to_away,
            mk_fpa_rna: Mod._Z3_mk_fpa_rna,
            mk_fpa_round_toward_positive: Mod._Z3_mk_fpa_round_toward_positive,
            mk_fpa_rtp: Mod._Z3_mk_fpa_rtp,
            mk_fpa_round_toward_negative: Mod._Z3_mk_fpa_round_toward_negative,
            mk_fpa_rtn: Mod._Z3_mk_fpa_rtn,
            mk_fpa_round_toward_zero: Mod._Z3_mk_fpa_round_toward_zero,
            mk_fpa_rtz: Mod._Z3_mk_fpa_rtz,
            mk_fpa_sort: Mod._Z3_mk_fpa_sort,
            mk_fpa_sort_half: Mod._Z3_mk_fpa_sort_half,
            mk_fpa_sort_16: Mod._Z3_mk_fpa_sort_16,
            mk_fpa_sort_single: Mod._Z3_mk_fpa_sort_single,
            mk_fpa_sort_32: Mod._Z3_mk_fpa_sort_32,
            mk_fpa_sort_double: Mod._Z3_mk_fpa_sort_double,
            mk_fpa_sort_64: Mod._Z3_mk_fpa_sort_64,
            mk_fpa_sort_quadruple: Mod._Z3_mk_fpa_sort_quadruple,
            mk_fpa_sort_128: Mod._Z3_mk_fpa_sort_128,
            mk_fpa_nan: Mod._Z3_mk_fpa_nan,
            mk_fpa_inf: Mod._Z3_mk_fpa_inf,
            mk_fpa_zero: Mod._Z3_mk_fpa_zero,
            mk_fpa_fp: Mod._Z3_mk_fpa_fp,
            mk_fpa_numeral_float: Mod._Z3_mk_fpa_numeral_float,
            mk_fpa_numeral_double: Mod._Z3_mk_fpa_numeral_double,
            mk_fpa_numeral_int: Mod._Z3_mk_fpa_numeral_int,
            mk_fpa_numeral_int_uint: Mod._Z3_mk_fpa_numeral_int_uint,
            mk_fpa_numeral_int64_uint64: Mod._Z3_mk_fpa_numeral_int64_uint64,
            mk_fpa_abs: Mod._Z3_mk_fpa_abs,
            mk_fpa_neg: Mod._Z3_mk_fpa_neg,
            mk_fpa_add: Mod._Z3_mk_fpa_add,
            mk_fpa_sub: Mod._Z3_mk_fpa_sub,
            mk_fpa_mul: Mod._Z3_mk_fpa_mul,
            mk_fpa_div: Mod._Z3_mk_fpa_div,
            mk_fpa_fma: Mod._Z3_mk_fpa_fma,
            mk_fpa_sqrt: Mod._Z3_mk_fpa_sqrt,
            mk_fpa_rem: Mod._Z3_mk_fpa_rem,
            mk_fpa_round_to_integral: Mod._Z3_mk_fpa_round_to_integral,
            mk_fpa_min: Mod._Z3_mk_fpa_min,
            mk_fpa_max: Mod._Z3_mk_fpa_max,
            mk_fpa_leq: Mod._Z3_mk_fpa_leq,
            mk_fpa_lt: Mod._Z3_mk_fpa_lt,
            mk_fpa_geq: Mod._Z3_mk_fpa_geq,
            mk_fpa_gt: Mod._Z3_mk_fpa_gt,
            mk_fpa_eq: Mod._Z3_mk_fpa_eq,
            mk_fpa_is_normal: Mod._Z3_mk_fpa_is_normal,
            mk_fpa_is_subnormal: Mod._Z3_mk_fpa_is_subnormal,
            mk_fpa_is_zero: Mod._Z3_mk_fpa_is_zero,
            mk_fpa_is_infinite: Mod._Z3_mk_fpa_is_infinite,
            mk_fpa_is_nan: Mod._Z3_mk_fpa_is_nan,
            mk_fpa_is_negative: Mod._Z3_mk_fpa_is_negative,
            mk_fpa_is_positive: Mod._Z3_mk_fpa_is_positive,
            mk_fpa_to_fp_bv: Mod._Z3_mk_fpa_to_fp_bv,
            mk_fpa_to_fp_float: Mod._Z3_mk_fpa_to_fp_float,
            mk_fpa_to_fp_real: Mod._Z3_mk_fpa_to_fp_real,
            mk_fpa_to_fp_signed: Mod._Z3_mk_fpa_to_fp_signed,
            mk_fpa_to_fp_unsigned: Mod._Z3_mk_fpa_to_fp_unsigned,
            mk_fpa_to_ubv: Mod._Z3_mk_fpa_to_ubv,
            mk_fpa_to_sbv: Mod._Z3_mk_fpa_to_sbv,
            mk_fpa_to_real: Mod._Z3_mk_fpa_to_real,
            fpa_get_ebits: Mod._Z3_fpa_get_ebits,
            fpa_get_sbits: Mod._Z3_fpa_get_sbits,
            fpa_is_numeral_nan: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_nan", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_inf: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_inf", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_zero: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_zero", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_normal: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_normal", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_subnormal: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_subnormal", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_positive: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_positive", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_negative: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_negative", "boolean", ["number", "number"], [c, t]);
            },
            fpa_get_numeral_sign_bv: Mod._Z3_fpa_get_numeral_sign_bv,
            fpa_get_numeral_significand_bv: Mod._Z3_fpa_get_numeral_significand_bv,
            fpa_get_numeral_sign: function(c, t) {
              let ret = Mod.ccall("Z3_fpa_get_numeral_sign", "boolean", ["number", "number", "number"], [c, t, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutInt(0);
            },
            fpa_get_numeral_significand_string: function(c, t) {
              return Mod.ccall("Z3_fpa_get_numeral_significand_string", "string", ["number", "number"], [c, t]);
            },
            fpa_get_numeral_significand_uint64: function(c, t) {
              let ret = Mod.ccall("Z3_fpa_get_numeral_significand_uint64", "boolean", ["number", "number", "number"], [c, t, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint64(0);
            },
            fpa_get_numeral_exponent_string: function(c, t, biased) {
              return Mod.ccall("Z3_fpa_get_numeral_exponent_string", "string", ["number", "number", "boolean"], [c, t, biased]);
            },
            fpa_get_numeral_exponent_int64: function(c, t, biased) {
              let ret = Mod.ccall("Z3_fpa_get_numeral_exponent_int64", "boolean", ["number", "number", "number", "boolean"], [c, t, outAddress, biased]);
              if (!ret) {
                return null;
              }
              return getOutInt64(0);
            },
            fpa_get_numeral_exponent_bv: Mod._Z3_fpa_get_numeral_exponent_bv,
            mk_fpa_to_ieee_bv: Mod._Z3_mk_fpa_to_ieee_bv,
            mk_fpa_to_fp_int_real: Mod._Z3_mk_fpa_to_fp_int_real,
            mk_optimize: Mod._Z3_mk_optimize,
            optimize_inc_ref: Mod._Z3_optimize_inc_ref,
            optimize_dec_ref: Mod._Z3_optimize_dec_ref,
            optimize_assert: Mod._Z3_optimize_assert,
            optimize_assert_and_track: Mod._Z3_optimize_assert_and_track,
            optimize_assert_soft: function(c, o, a, weight, id) {
              return Mod.ccall("Z3_optimize_assert_soft", "number", ["number", "number", "number", "string", "number"], [c, o, a, weight, id]);
            },
            optimize_maximize: Mod._Z3_optimize_maximize,
            optimize_minimize: Mod._Z3_optimize_minimize,
            optimize_push: Mod._Z3_optimize_push,
            optimize_pop: Mod._Z3_optimize_pop,
            optimize_check: async function(c, o, assumptions) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_optimize_check", "number", ["number", "number", "number", "array"], [
                c,
                o,
                assumptions.length,
                intArrayToByteArr(assumptions)
              ]));
            },
            optimize_get_reason_unknown: function(c, d) {
              return Mod.ccall("Z3_optimize_get_reason_unknown", "string", ["number", "number"], [c, d]);
            },
            optimize_get_model: Mod._Z3_optimize_get_model,
            optimize_get_unsat_core: Mod._Z3_optimize_get_unsat_core,
            optimize_set_params: Mod._Z3_optimize_set_params,
            optimize_get_param_descrs: Mod._Z3_optimize_get_param_descrs,
            optimize_get_lower: Mod._Z3_optimize_get_lower,
            optimize_get_upper: Mod._Z3_optimize_get_upper,
            optimize_get_lower_as_vector: Mod._Z3_optimize_get_lower_as_vector,
            optimize_get_upper_as_vector: Mod._Z3_optimize_get_upper_as_vector,
            optimize_to_string: function(c, o) {
              return Mod.ccall("Z3_optimize_to_string", "string", ["number", "number"], [c, o]);
            },
            optimize_from_string: function(c, o, s) {
              return Mod.ccall("Z3_optimize_from_string", "void", ["number", "number", "string"], [c, o, s]);
            },
            optimize_from_file: function(c, o, s) {
              return Mod.ccall("Z3_optimize_from_file", "void", ["number", "number", "string"], [c, o, s]);
            },
            optimize_get_help: function(c, t) {
              return Mod.ccall("Z3_optimize_get_help", "string", ["number", "number"], [c, t]);
            },
            optimize_get_statistics: Mod._Z3_optimize_get_statistics,
            optimize_get_assertions: Mod._Z3_optimize_get_assertions,
            optimize_get_objectives: Mod._Z3_optimize_get_objectives,
            polynomial_subresultants: function(c, p, q, x) {
              return Mod.async_call(Mod._async_Z3_polynomial_subresultants, c, p, q, x);
            },
            rcf_del: Mod._Z3_rcf_del,
            rcf_mk_rational: function(c, val) {
              return Mod.ccall("Z3_rcf_mk_rational", "number", ["number", "string"], [c, val]);
            },
            rcf_mk_small_int: Mod._Z3_rcf_mk_small_int,
            rcf_mk_pi: Mod._Z3_rcf_mk_pi,
            rcf_mk_e: Mod._Z3_rcf_mk_e,
            rcf_mk_infinitesimal: Mod._Z3_rcf_mk_infinitesimal,
            rcf_mk_roots: function(c, a) {
              let outArray_roots = Mod._malloc(4 * a.length);
              try {
                let ret = Mod.ccall("Z3_rcf_mk_roots", "number", ["number", "number", "array", "number"], [
                  c,
                  a.length,
                  intArrayToByteArr(a),
                  outArray_roots
                ]);
                return {
                  rv: ret,
                  roots: readUintArray(outArray_roots, a.length)
                };
              } finally {
                Mod._free(outArray_roots);
              }
            },
            rcf_add: Mod._Z3_rcf_add,
            rcf_sub: Mod._Z3_rcf_sub,
            rcf_mul: Mod._Z3_rcf_mul,
            rcf_div: Mod._Z3_rcf_div,
            rcf_neg: Mod._Z3_rcf_neg,
            rcf_inv: Mod._Z3_rcf_inv,
            rcf_power: Mod._Z3_rcf_power,
            rcf_lt: function(c, a, b) {
              return Mod.ccall("Z3_rcf_lt", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_gt: function(c, a, b) {
              return Mod.ccall("Z3_rcf_gt", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_le: function(c, a, b) {
              return Mod.ccall("Z3_rcf_le", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_ge: function(c, a, b) {
              return Mod.ccall("Z3_rcf_ge", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_eq: function(c, a, b) {
              return Mod.ccall("Z3_rcf_eq", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_neq: function(c, a, b) {
              return Mod.ccall("Z3_rcf_neq", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_num_to_string: function(c, a, compact, html) {
              return Mod.ccall("Z3_rcf_num_to_string", "string", ["number", "number", "boolean", "boolean"], [c, a, compact, html]);
            },
            rcf_num_to_decimal_string: function(c, a, prec) {
              return Mod.ccall("Z3_rcf_num_to_decimal_string", "string", ["number", "number", "number"], [c, a, prec]);
            },
            rcf_get_numerator_denominator: function(c, a) {
              let ret = Mod.ccall("Z3_rcf_get_numerator_denominator", "void", ["number", "number", "number", "number"], [c, a, outAddress, outAddress + 4]);
              return {
                n: getOutUint(0),
                d: getOutUint(1)
              };
            },
            fixedpoint_query_from_lvl: function(c, d, query, lvl) {
              return Mod.async_call(Mod._async_Z3_fixedpoint_query_from_lvl, c, d, query, lvl);
            },
            fixedpoint_get_ground_sat_answer: Mod._Z3_fixedpoint_get_ground_sat_answer,
            fixedpoint_get_rules_along_trace: Mod._Z3_fixedpoint_get_rules_along_trace,
            fixedpoint_get_rule_names_along_trace: Mod._Z3_fixedpoint_get_rule_names_along_trace,
            fixedpoint_add_invariant: Mod._Z3_fixedpoint_add_invariant,
            fixedpoint_get_reachable: Mod._Z3_fixedpoint_get_reachable,
            qe_model_project: function(c, m, bound, body) {
              return Mod.ccall("Z3_qe_model_project", "number", ["number", "number", "number", "array", "number"], [
                c,
                m,
                bound.length,
                intArrayToByteArr(bound),
                body
              ]);
            },
            qe_model_project_skolem: function(c, m, bound, body, map4) {
              return Mod.ccall("Z3_qe_model_project_skolem", "number", ["number", "number", "number", "array", "number", "number"], [
                c,
                m,
                bound.length,
                intArrayToByteArr(bound),
                body,
                map4
              ]);
            },
            model_extrapolate: Mod._Z3_model_extrapolate,
            qe_lite: Mod._Z3_qe_lite
          }
        };
      }
      exports.init = init3;
    }
  });

  // node_modules/z3-solver/build/low-level/index.js
  var require_low_level = __commonJS({
    "node_modules/z3-solver/build/low-level/index.js"(exports) {
      "use strict";
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding2(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar2(require_types_GENERATED(), exports);
      __exportStar2(require_wrapper_GENERATED(), exports);
    }
  });

  // node_modules/z3-solver/build/high-level/types.js
  var require_types = __commonJS({
    "node_modules/z3-solver/build/high-level/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Z3AssertionError = exports.Z3Error = void 0;
      var Z3Error = class extends Error {
      };
      exports.Z3Error = Z3Error;
      var Z3AssertionError = class extends Z3Error {
      };
      exports.Z3AssertionError = Z3AssertionError;
    }
  });

  // node_modules/z3-solver/build/high-level/utils.js
  var require_utils = __commonJS({
    "node_modules/z3-solver/build/high-level/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.allSatisfy = exports.assert = exports.assertExhaustive = void 0;
      var types_1 = require_types();
      function assertExhaustive(x) {
        throw new Error("Unexpected code execution detected, should be caught at compile time");
      }
      exports.assertExhaustive = assertExhaustive;
      function assert3(condition, reason) {
        if (!condition) {
          throw new types_1.Z3AssertionError(reason ?? "Assertion failed");
        }
      }
      exports.assert = assert3;
      function allSatisfy(collection, premise) {
        let hasItems = false;
        for (const arg of collection) {
          hasItems = true;
          if (!premise(arg)) {
            return false;
          }
        }
        return hasItems === true ? true : null;
      }
      exports.allSatisfy = allSatisfy;
    }
  });

  // node_modules/z3-solver/build/high-level/high-level.js
  var require_high_level = __commonJS({
    "node_modules/z3-solver/build/high-level/high-level.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createApi = void 0;
      var async_mutex_1 = require_lib();
      var low_level_1 = require_low_level();
      var types_1 = require_types();
      var utils_1 = require_utils();
      var FALLBACK_PRECISION = 17;
      var asyncMutex = new async_mutex_1.Mutex();
      function isCoercibleRational(obj) {
        const r = obj !== null && (typeof obj === "object" || typeof obj === "function") && (obj.numerator !== null && (typeof obj.numerator === "number" || typeof obj.numerator === "bigint")) && (obj.denominator !== null && (typeof obj.denominator === "number" || typeof obj.denominator === "bigint"));
        r && (0, utils_1.assert)((typeof obj.numerator !== "number" || Number.isSafeInteger(obj.numerator)) && (typeof obj.denominator !== "number" || Number.isSafeInteger(obj.denominator)), "Fraction numerator and denominator must be integers");
        return r;
      }
      function createApi(Z3) {
        const cleanup = new FinalizationRegistry((callback) => callback());
        function enableTrace(tag) {
          Z3.enable_trace(tag);
        }
        function disableTrace(tag) {
          Z3.disable_trace(tag);
        }
        function getVersion() {
          return Z3.get_version();
        }
        function getVersionString() {
          const { major, minor, build_number } = Z3.get_version();
          return `${major}.${minor}.${build_number}`;
        }
        function getFullVersion() {
          return Z3.get_full_version();
        }
        function openLog(filename) {
          return Z3.open_log(filename);
        }
        function appendLog(s) {
          Z3.append_log(s);
        }
        function setParam(key, value) {
          if (typeof key === "string") {
            Z3.global_param_set(key, value.toString());
          } else {
            (0, utils_1.assert)(value === void 0, "Can't provide a Record and second parameter to set_param at the same time");
            Object.entries(key).forEach(([key2, value2]) => setParam(key2, value2));
          }
        }
        function resetParams() {
          Z3.global_param_reset_all();
        }
        function getParam(name2) {
          return Z3.global_param_get(name2);
        }
        function createContext(name2, options) {
          const cfg = Z3.mk_config();
          if (options != null) {
            Object.entries(options).forEach(([key, value]) => check3(Z3.set_param_value(cfg, key, value.toString())));
          }
          const contextPtr = Z3.mk_context_rc(cfg);
          Z3.set_ast_print_mode(contextPtr, low_level_1.Z3_ast_print_mode.Z3_PRINT_SMTLIB2_COMPLIANT);
          Z3.del_config(cfg);
          function _assertContext(...ctxs) {
            ctxs.forEach((other) => (0, utils_1.assert)("ctx" in other ? ctx === other.ctx : ctx === other, "Context mismatch"));
          }
          function throwIfError() {
            if (Z3.get_error_code(contextPtr) !== low_level_1.Z3_error_code.Z3_OK) {
              throw new Error(Z3.get_error_msg(ctx.ptr, Z3.get_error_code(ctx.ptr)));
            }
          }
          function check3(val) {
            throwIfError();
            return val;
          }
          function _toSymbol(s) {
            if (typeof s === "number") {
              return check3(Z3.mk_int_symbol(contextPtr, s));
            } else {
              return check3(Z3.mk_string_symbol(contextPtr, s));
            }
          }
          function _fromSymbol(sym) {
            const kind = check3(Z3.get_symbol_kind(contextPtr, sym));
            switch (kind) {
              case low_level_1.Z3_symbol_kind.Z3_INT_SYMBOL:
                return Z3.get_symbol_int(contextPtr, sym);
              case low_level_1.Z3_symbol_kind.Z3_STRING_SYMBOL:
                return Z3.get_symbol_string(contextPtr, sym);
              default:
                (0, utils_1.assertExhaustive)(kind);
            }
          }
          function _toAst(ast) {
            switch (check3(Z3.get_ast_kind(contextPtr, ast))) {
              case low_level_1.Z3_ast_kind.Z3_SORT_AST:
                return _toSort(ast);
              case low_level_1.Z3_ast_kind.Z3_FUNC_DECL_AST:
                return new FuncDeclImpl(ast);
              default:
                return _toExpr(ast);
            }
          }
          function _toSort(ast) {
            switch (check3(Z3.get_sort_kind(contextPtr, ast))) {
              case low_level_1.Z3_sort_kind.Z3_BOOL_SORT:
                return new BoolSortImpl(ast);
              case low_level_1.Z3_sort_kind.Z3_INT_SORT:
              case low_level_1.Z3_sort_kind.Z3_REAL_SORT:
                return new ArithSortImpl(ast);
              case low_level_1.Z3_sort_kind.Z3_BV_SORT:
                return new BitVecSortImpl(ast);
              case low_level_1.Z3_sort_kind.Z3_ARRAY_SORT:
                return new ArraySortImpl(ast);
              default:
                return new SortImpl(ast);
            }
          }
          function _toExpr(ast) {
            const kind = check3(Z3.get_ast_kind(contextPtr, ast));
            if (kind === low_level_1.Z3_ast_kind.Z3_QUANTIFIER_AST) {
              if (Z3.is_quantifier_forall(contextPtr, ast))
                return new BoolImpl(ast);
              if (Z3.is_quantifier_exists(contextPtr, ast))
                return new BoolImpl(ast);
              if (Z3.is_lambda(contextPtr, ast))
                return new ExprImpl(ast);
              (0, utils_1.assert)(false);
            }
            const sortKind = check3(Z3.get_sort_kind(contextPtr, Z3.get_sort(contextPtr, ast)));
            switch (sortKind) {
              case low_level_1.Z3_sort_kind.Z3_BOOL_SORT:
                return new BoolImpl(ast);
              case low_level_1.Z3_sort_kind.Z3_INT_SORT:
                if (kind === low_level_1.Z3_ast_kind.Z3_NUMERAL_AST) {
                  return new IntNumImpl(ast);
                }
                return new ArithImpl(ast);
              case low_level_1.Z3_sort_kind.Z3_REAL_SORT:
                if (kind === low_level_1.Z3_ast_kind.Z3_NUMERAL_AST) {
                  return new RatNumImpl(ast);
                }
                return new ArithImpl(ast);
              case low_level_1.Z3_sort_kind.Z3_BV_SORT:
                if (kind === low_level_1.Z3_ast_kind.Z3_NUMERAL_AST) {
                  return new BitVecNumImpl(ast);
                }
                return new BitVecImpl(ast);
              case low_level_1.Z3_sort_kind.Z3_ARRAY_SORT:
                return new ArrayImpl(ast);
              default:
                return new ExprImpl(ast);
            }
          }
          function _flattenArgs(args) {
            const result = [];
            for (const arg of args) {
              if (isAstVector(arg)) {
                result.push(...arg.values());
              } else {
                result.push(arg);
              }
            }
            return result;
          }
          function _toProbe(p) {
            if (isProbe(p)) {
              return p;
            }
            return new ProbeImpl(p);
          }
          function _probeNary(f, args) {
            (0, utils_1.assert)(args.length > 0, "At least one argument expected");
            let r = _toProbe(args[0]);
            for (let i = 1; i < args.length; i++) {
              r = new ProbeImpl(check3(f(contextPtr, r.ptr, _toProbe(args[i]).ptr)));
            }
            return r;
          }
          function interrupt() {
            check3(Z3.interrupt(contextPtr));
          }
          function isModel(obj) {
            const r = obj instanceof ModelImpl;
            r && _assertContext(obj);
            return r;
          }
          function isAst(obj) {
            const r = obj instanceof AstImpl;
            r && _assertContext(obj);
            return r;
          }
          function isSort(obj) {
            const r = obj instanceof SortImpl;
            r && _assertContext(obj);
            return r;
          }
          function isFuncDecl(obj) {
            const r = obj instanceof FuncDeclImpl;
            r && _assertContext(obj);
            return r;
          }
          function isApp(obj) {
            if (!isExpr(obj)) {
              return false;
            }
            const kind = check3(Z3.get_ast_kind(contextPtr, obj.ast));
            return kind === low_level_1.Z3_ast_kind.Z3_NUMERAL_AST || kind === low_level_1.Z3_ast_kind.Z3_APP_AST;
          }
          function isConst(obj) {
            return isExpr(obj) && isApp(obj) && obj.numArgs() === 0;
          }
          function isExpr(obj) {
            const r = obj instanceof ExprImpl;
            r && _assertContext(obj);
            return r;
          }
          function isVar(obj) {
            return isExpr(obj) && check3(Z3.get_ast_kind(contextPtr, obj.ast)) === low_level_1.Z3_ast_kind.Z3_VAR_AST;
          }
          function isAppOf(obj, kind) {
            return isExpr(obj) && isApp(obj) && obj.decl().kind() === kind;
          }
          function isBool(obj) {
            const r = obj instanceof BoolImpl;
            r && _assertContext(obj);
            return r;
          }
          function isTrue(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_TRUE);
          }
          function isFalse(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_FALSE);
          }
          function isAnd(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_AND);
          }
          function isOr(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_OR);
          }
          function isImplies(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_IMPLIES);
          }
          function isNot(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_NOT);
          }
          function isEq(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_EQ);
          }
          function isDistinct(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_DISTINCT);
          }
          function isArith(obj) {
            const r = obj instanceof ArithImpl;
            r && _assertContext(obj);
            return r;
          }
          function isArithSort(obj) {
            const r = obj instanceof ArithSortImpl;
            r && _assertContext(obj);
            return r;
          }
          function isInt(obj) {
            return isArith(obj) && isIntSort(obj.sort);
          }
          function isIntVal(obj) {
            const r = obj instanceof IntNumImpl;
            r && _assertContext(obj);
            return r;
          }
          function isIntSort(obj) {
            return isSort(obj) && obj.kind() === low_level_1.Z3_sort_kind.Z3_INT_SORT;
          }
          function isReal(obj) {
            return isArith(obj) && isRealSort(obj.sort);
          }
          function isRealVal(obj) {
            const r = obj instanceof RatNumImpl;
            r && _assertContext(obj);
            return r;
          }
          function isRealSort(obj) {
            return isSort(obj) && obj.kind() === low_level_1.Z3_sort_kind.Z3_REAL_SORT;
          }
          function isBitVecSort(obj) {
            const r = obj instanceof BitVecSortImpl;
            r && _assertContext(obj);
            return r;
          }
          function isBitVec(obj) {
            const r = obj instanceof BitVecImpl;
            r && _assertContext(obj);
            return r;
          }
          function isBitVecVal(obj) {
            const r = obj instanceof BitVecNumImpl;
            r && _assertContext(obj);
            return r;
          }
          function isArraySort(obj) {
            const r = obj instanceof ArraySortImpl;
            r && _assertContext(obj);
            return r;
          }
          function isArray2(obj) {
            const r = obj instanceof ArrayImpl;
            r && _assertContext(obj);
            return r;
          }
          function isConstArray(obj) {
            return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_CONST_ARRAY);
          }
          function isProbe(obj) {
            const r = obj instanceof ProbeImpl;
            r && _assertContext(obj);
            return r;
          }
          function isTactic(obj) {
            const r = obj instanceof TacticImpl;
            r && _assertContext(obj);
            return r;
          }
          function isAstVector(obj) {
            const r = obj instanceof AstVectorImpl;
            r && _assertContext(obj);
            return r;
          }
          function eqIdentity(a, b) {
            return a.eqIdentity(b);
          }
          function getVarIndex(obj) {
            (0, utils_1.assert)(isVar(obj), "Z3 bound variable expected");
            return Z3.get_index_value(contextPtr, obj.ast);
          }
          function from2(value) {
            if (typeof value === "boolean") {
              return Bool.val(value);
            } else if (typeof value === "number") {
              if (!Number.isFinite(value)) {
                throw new Error(`cannot represent infinity/NaN (got ${value})`);
              }
              if (Math.floor(value) === value) {
                return Int.val(value);
              }
              return Real.val(value);
            } else if (isCoercibleRational(value)) {
              return Real.val(value);
            } else if (typeof value === "bigint") {
              return Int.val(value);
            } else if (isExpr(value)) {
              return value;
            }
            (0, utils_1.assert)(false);
          }
          async function solve(...assertions) {
            const solver2 = new ctx.Solver();
            solver2.add(...assertions);
            const result = await solver2.check();
            if (result === "sat") {
              return solver2.model();
            }
            return result;
          }
          async function simplify(e) {
            const result = await Z3.simplify(contextPtr, e.ast);
            return _toExpr(check3(result));
          }
          const Sort = {
            declare: (name3) => new SortImpl(Z3.mk_uninterpreted_sort(contextPtr, _toSymbol(name3)))
          };
          const Function = {
            declare: (name3, ...signature) => {
              const arity = signature.length - 1;
              const rng = signature[arity];
              _assertContext(rng);
              const dom = [];
              for (let i = 0; i < arity; i++) {
                _assertContext(signature[i]);
                dom.push(signature[i].ptr);
              }
              return new FuncDeclImpl(Z3.mk_func_decl(contextPtr, _toSymbol(name3), dom, rng.ptr));
            },
            fresh: (...signature) => {
              const arity = signature.length - 1;
              const rng = signature[arity];
              _assertContext(rng);
              const dom = [];
              for (let i = 0; i < arity; i++) {
                _assertContext(signature[i]);
                dom.push(signature[i].ptr);
              }
              return new FuncDeclImpl(Z3.mk_fresh_func_decl(contextPtr, "f", dom, rng.ptr));
            }
          };
          const RecFunc = {
            declare: (name3, ...signature) => {
              const arity = signature.length - 1;
              const rng = signature[arity];
              _assertContext(rng);
              const dom = [];
              for (let i = 0; i < arity; i++) {
                _assertContext(signature[i]);
                dom.push(signature[i].ptr);
              }
              return new FuncDeclImpl(Z3.mk_rec_func_decl(contextPtr, _toSymbol(name3), dom, rng.ptr));
            },
            addDefinition: (f, args, body) => {
              _assertContext(f, ...args, body);
              check3(Z3.add_rec_def(contextPtr, f.ptr, args.map((arg) => arg.ast), body.ast));
            }
          };
          const Bool = {
            sort: () => new BoolSortImpl(Z3.mk_bool_sort(contextPtr)),
            const: (name3) => new BoolImpl(Z3.mk_const(contextPtr, _toSymbol(name3), Bool.sort().ptr)),
            consts: (names) => {
              if (typeof names === "string") {
                names = names.split(" ");
              }
              return names.map((name3) => Bool.const(name3));
            },
            vector: (prefix, count) => {
              const result = [];
              for (let i = 0; i < count; i++) {
                result.push(Bool.const(`${prefix}__${i}`));
              }
              return result;
            },
            fresh: (prefix = "b") => new BoolImpl(Z3.mk_fresh_const(contextPtr, prefix, Bool.sort().ptr)),
            val: (value) => {
              if (value) {
                return new BoolImpl(Z3.mk_true(contextPtr));
              }
              return new BoolImpl(Z3.mk_false(contextPtr));
            }
          };
          const Int = {
            sort: () => new ArithSortImpl(Z3.mk_int_sort(contextPtr)),
            const: (name3) => new ArithImpl(Z3.mk_const(contextPtr, _toSymbol(name3), Int.sort().ptr)),
            consts: (names) => {
              if (typeof names === "string") {
                names = names.split(" ");
              }
              return names.map((name3) => Int.const(name3));
            },
            vector: (prefix, count) => {
              const result = [];
              for (let i = 0; i < count; i++) {
                result.push(Int.const(`${prefix}__${i}`));
              }
              return result;
            },
            fresh: (prefix = "x") => new ArithImpl(Z3.mk_fresh_const(contextPtr, prefix, Int.sort().ptr)),
            val: (value) => {
              (0, utils_1.assert)(typeof value === "bigint" || typeof value === "string" || Number.isSafeInteger(value));
              return new IntNumImpl(check3(Z3.mk_numeral(contextPtr, value.toString(), Int.sort().ptr)));
            }
          };
          const Real = {
            sort: () => new ArithSortImpl(Z3.mk_real_sort(contextPtr)),
            const: (name3) => new ArithImpl(check3(Z3.mk_const(contextPtr, _toSymbol(name3), Real.sort().ptr))),
            consts: (names) => {
              if (typeof names === "string") {
                names = names.split(" ");
              }
              return names.map((name3) => Real.const(name3));
            },
            vector: (prefix, count) => {
              const result = [];
              for (let i = 0; i < count; i++) {
                result.push(Real.const(`${prefix}__${i}`));
              }
              return result;
            },
            fresh: (prefix = "b") => new ArithImpl(Z3.mk_fresh_const(contextPtr, prefix, Real.sort().ptr)),
            val: (value) => {
              if (isCoercibleRational(value)) {
                value = `${value.numerator}/${value.denominator}`;
              }
              return new RatNumImpl(Z3.mk_numeral(contextPtr, value.toString(), Real.sort().ptr));
            }
          };
          const BitVec = {
            sort(bits) {
              (0, utils_1.assert)(Number.isSafeInteger(bits), "number of bits must be an integer");
              return new BitVecSortImpl(Z3.mk_bv_sort(contextPtr, bits));
            },
            const(name3, bits) {
              return new BitVecImpl(check3(Z3.mk_const(contextPtr, _toSymbol(name3), isBitVecSort(bits) ? bits.ptr : BitVec.sort(bits).ptr)));
            },
            consts(names, bits) {
              if (typeof names === "string") {
                names = names.split(" ");
              }
              return names.map((name3) => BitVec.const(name3, bits));
            },
            val(value, bits) {
              if (value === true) {
                return BitVec.val(1, bits);
              } else if (value === false) {
                return BitVec.val(0, bits);
              }
              return new BitVecNumImpl(check3(Z3.mk_numeral(contextPtr, value.toString(), isBitVecSort(bits) ? bits.ptr : BitVec.sort(bits).ptr)));
            }
          };
          const Array2 = {
            sort(...sig) {
              const arity = sig.length - 1;
              const r = sig[arity];
              const d = sig[0];
              if (arity === 1) {
                return new ArraySortImpl(Z3.mk_array_sort(contextPtr, d.ptr, r.ptr));
              }
              const dom = sig.slice(0, arity);
              return new ArraySortImpl(Z3.mk_array_sort_n(contextPtr, dom.map((s) => s.ptr), r.ptr));
            },
            const(name3, ...sig) {
              return new ArrayImpl(check3(Z3.mk_const(contextPtr, _toSymbol(name3), Array2.sort(...sig).ptr)));
            },
            consts(names, ...sig) {
              if (typeof names === "string") {
                names = names.split(" ");
              }
              return names.map((name3) => Array2.const(name3, ...sig));
            },
            K(domain, value) {
              return new ArrayImpl(check3(Z3.mk_const_array(contextPtr, domain.ptr, value.ptr)));
            }
          };
          function If(condition, onTrue, onFalse) {
            if (isProbe(condition) && isTactic(onTrue) && isTactic(onFalse)) {
              return Cond(condition, onTrue, onFalse);
            }
            (0, utils_1.assert)(!isProbe(condition) && !isTactic(onTrue) && !isTactic(onFalse), "Mixed expressions and goals");
            if (typeof condition === "boolean") {
              condition = Bool.val(condition);
            }
            onTrue = from2(onTrue);
            onFalse = from2(onFalse);
            return _toExpr(check3(Z3.mk_ite(contextPtr, condition.ptr, onTrue.ast, onFalse.ast)));
          }
          function Distinct(...exprs) {
            (0, utils_1.assert)(exprs.length > 0, "Can't make Distinct ouf of nothing");
            return new BoolImpl(check3(Z3.mk_distinct(contextPtr, exprs.map((expr) => {
              expr = from2(expr);
              _assertContext(expr);
              return expr.ast;
            }))));
          }
          function Const(name3, sort) {
            _assertContext(sort);
            return _toExpr(check3(Z3.mk_const(contextPtr, _toSymbol(name3), sort.ptr)));
          }
          function Consts(names, sort) {
            _assertContext(sort);
            if (typeof names === "string") {
              names = names.split(" ");
            }
            return names.map((name3) => Const(name3, sort));
          }
          function FreshConst(sort, prefix = "c") {
            _assertContext(sort);
            return _toExpr(Z3.mk_fresh_const(sort.ctx.ptr, prefix, sort.ptr));
          }
          function Var(idx, sort) {
            _assertContext(sort);
            return _toExpr(Z3.mk_bound(sort.ctx.ptr, idx, sort.ptr));
          }
          function Implies(a, b) {
            a = from2(a);
            b = from2(b);
            _assertContext(a, b);
            return new BoolImpl(check3(Z3.mk_implies(contextPtr, a.ptr, b.ptr)));
          }
          function Eq(a, b) {
            a = from2(a);
            b = from2(b);
            _assertContext(a, b);
            return a.eq(b);
          }
          function Xor(a, b) {
            a = from2(a);
            b = from2(b);
            _assertContext(a, b);
            return new BoolImpl(check3(Z3.mk_xor(contextPtr, a.ptr, b.ptr)));
          }
          function Not(a) {
            if (typeof a === "boolean") {
              a = from2(a);
            }
            _assertContext(a);
            if (isProbe(a)) {
              return new ProbeImpl(check3(Z3.probe_not(contextPtr, a.ptr)));
            }
            return new BoolImpl(check3(Z3.mk_not(contextPtr, a.ptr)));
          }
          function And(...args) {
            if (args.length == 1 && args[0] instanceof ctx.AstVector) {
              args = [...args[0].values()];
              (0, utils_1.assert)((0, utils_1.allSatisfy)(args, isBool) ?? true, "AstVector containing not bools");
            }
            const allProbes = (0, utils_1.allSatisfy)(args, isProbe) ?? false;
            if (allProbes) {
              return _probeNary(Z3.probe_and, args);
            } else {
              const castArgs = args.map(from2);
              _assertContext(...castArgs);
              return new BoolImpl(check3(Z3.mk_and(contextPtr, castArgs.map((arg) => arg.ptr))));
            }
          }
          function Or(...args) {
            if (args.length == 1 && args[0] instanceof ctx.AstVector) {
              args = [...args[0].values()];
              (0, utils_1.assert)((0, utils_1.allSatisfy)(args, isBool) ?? true, "AstVector containing not bools");
            }
            const allProbes = (0, utils_1.allSatisfy)(args, isProbe) ?? false;
            if (allProbes) {
              return _probeNary(Z3.probe_or, args);
            } else {
              const castArgs = args.map(from2);
              _assertContext(...castArgs);
              return new BoolImpl(check3(Z3.mk_or(contextPtr, castArgs.map((arg) => arg.ptr))));
            }
          }
          function ToReal(expr) {
            expr = from2(expr);
            _assertContext(expr);
            (0, utils_1.assert)(isInt(expr), "Int expression expected");
            return new ArithImpl(check3(Z3.mk_int2real(contextPtr, expr.ast)));
          }
          function ToInt(expr) {
            if (!isExpr(expr)) {
              expr = Real.val(expr);
            }
            _assertContext(expr);
            (0, utils_1.assert)(isReal(expr), "Real expression expected");
            return new ArithImpl(check3(Z3.mk_real2int(contextPtr, expr.ast)));
          }
          function IsInt(expr) {
            if (!isExpr(expr)) {
              expr = Real.val(expr);
            }
            _assertContext(expr);
            (0, utils_1.assert)(isReal(expr), "Real expression expected");
            return new BoolImpl(check3(Z3.mk_is_int(contextPtr, expr.ast)));
          }
          function Sqrt(a) {
            if (!isExpr(a)) {
              a = Real.val(a);
            }
            return a.pow("1/2");
          }
          function Cbrt(a) {
            if (!isExpr(a)) {
              a = Real.val(a);
            }
            return a.pow("1/3");
          }
          function BV2Int(a, isSigned) {
            _assertContext(a);
            return new ArithImpl(check3(Z3.mk_bv2int(contextPtr, a.ast, isSigned)));
          }
          function Int2BV(a, bits) {
            if (isArith(a)) {
              (0, utils_1.assert)(isInt(a), "parameter must be an integer");
            } else {
              (0, utils_1.assert)(typeof a !== "number" || Number.isSafeInteger(a), "parameter must not have decimal places");
              a = Int.val(a);
            }
            return new BitVecImpl(check3(Z3.mk_int2bv(contextPtr, bits, a.ast)));
          }
          function Concat(...bitvecs) {
            _assertContext(...bitvecs);
            return bitvecs.reduce((prev, curr) => new BitVecImpl(check3(Z3.mk_concat(contextPtr, prev.ast, curr.ast))));
          }
          function Cond(probe, onTrue, onFalse) {
            _assertContext(probe, onTrue, onFalse);
            return new TacticImpl(check3(Z3.tactic_cond(contextPtr, probe.ptr, onTrue.ptr, onFalse.ptr)));
          }
          class AstImpl {
            constructor(ptr) {
              this.ptr = ptr;
              this.ctx = ctx;
              const myAst = this.ast;
              Z3.inc_ref(contextPtr, myAst);
              cleanup.register(this, () => Z3.dec_ref(contextPtr, myAst));
            }
            get ast() {
              return this.ptr;
            }
            id() {
              return Z3.get_ast_id(contextPtr, this.ast);
            }
            eqIdentity(other) {
              _assertContext(other);
              return check3(Z3.is_eq_ast(contextPtr, this.ast, other.ast));
            }
            neqIdentity(other) {
              _assertContext(other);
              return !this.eqIdentity(other);
            }
            sexpr() {
              return Z3.ast_to_string(contextPtr, this.ast);
            }
            hash() {
              return Z3.get_ast_hash(contextPtr, this.ast);
            }
            toString() {
              return this.sexpr();
            }
          }
          class SolverImpl {
            constructor(ptr = Z3.mk_solver(contextPtr)) {
              this.ctx = ctx;
              let myPtr;
              if (typeof ptr === "string") {
                myPtr = check3(Z3.mk_solver_for_logic(contextPtr, _toSymbol(ptr)));
              } else {
                myPtr = ptr;
              }
              this.ptr = myPtr;
              Z3.solver_inc_ref(contextPtr, myPtr);
              cleanup.register(this, () => Z3.solver_dec_ref(contextPtr, myPtr));
            }
            push() {
              Z3.solver_push(contextPtr, this.ptr);
            }
            pop(num = 1) {
              Z3.solver_pop(contextPtr, this.ptr, num);
            }
            numScopes() {
              return Z3.solver_get_num_scopes(contextPtr, this.ptr);
            }
            reset() {
              Z3.solver_reset(contextPtr, this.ptr);
            }
            add(...exprs) {
              _flattenArgs(exprs).forEach((expr) => {
                _assertContext(expr);
                check3(Z3.solver_assert(contextPtr, this.ptr, expr.ast));
              });
            }
            addAndTrack(expr, constant) {
              if (typeof constant === "string") {
                constant = Bool.const(constant);
              }
              (0, utils_1.assert)(isConst(constant), "Provided expression that is not a constant to addAndTrack");
              check3(Z3.solver_assert_and_track(contextPtr, this.ptr, expr.ast, constant.ast));
            }
            assertions() {
              return new AstVectorImpl(check3(Z3.solver_get_assertions(contextPtr, this.ptr)));
            }
            async check(...exprs) {
              const assumptions = _flattenArgs(exprs).map((expr) => {
                _assertContext(expr);
                return expr.ast;
              });
              const result = await asyncMutex.runExclusive(() => check3(Z3.solver_check_assumptions(contextPtr, this.ptr, assumptions)));
              switch (result) {
                case low_level_1.Z3_lbool.Z3_L_FALSE:
                  return "unsat";
                case low_level_1.Z3_lbool.Z3_L_TRUE:
                  return "sat";
                case low_level_1.Z3_lbool.Z3_L_UNDEF:
                  return "unknown";
                default:
                  (0, utils_1.assertExhaustive)(result);
              }
            }
            model() {
              return new ModelImpl(check3(Z3.solver_get_model(contextPtr, this.ptr)));
            }
            toString() {
              return check3(Z3.solver_to_string(contextPtr, this.ptr));
            }
            fromString(s) {
              Z3.solver_from_string(contextPtr, this.ptr, s);
              throwIfError();
            }
          }
          class ModelImpl {
            constructor(ptr = Z3.mk_model(contextPtr)) {
              this.ptr = ptr;
              this.ctx = ctx;
              Z3.model_inc_ref(contextPtr, ptr);
              cleanup.register(this, () => Z3.model_dec_ref(contextPtr, ptr));
            }
            length() {
              return Z3.model_get_num_consts(contextPtr, this.ptr) + Z3.model_get_num_funcs(contextPtr, this.ptr);
            }
            [Symbol.iterator]() {
              return this.values();
            }
            *entries() {
              const length3 = this.length();
              for (let i = 0; i < length3; i++) {
                yield [i, this.get(i)];
              }
            }
            *keys() {
              for (const [key] of this.entries()) {
                yield key;
              }
            }
            *values() {
              for (const [, value] of this.entries()) {
                yield value;
              }
            }
            decls() {
              return [...this.values()];
            }
            sexpr() {
              return check3(Z3.model_to_string(contextPtr, this.ptr));
            }
            toString() {
              return this.sexpr();
            }
            eval(expr, modelCompletion = false) {
              _assertContext(expr);
              const r = check3(Z3.model_eval(contextPtr, this.ptr, expr.ast, modelCompletion));
              if (r === null) {
                throw new types_1.Z3Error("Failed to evaluate expression in the model");
              }
              return _toExpr(r);
            }
            get(i, to) {
              (0, utils_1.assert)(to === void 0 || typeof i === "number");
              if (typeof i === "number") {
                const length3 = this.length();
                if (i >= length3) {
                  throw new RangeError(`expected index ${i} to be less than length ${length3}`);
                }
                if (to === void 0) {
                  const numConsts = check3(Z3.model_get_num_consts(contextPtr, this.ptr));
                  if (i < numConsts) {
                    return new FuncDeclImpl(check3(Z3.model_get_const_decl(contextPtr, this.ptr, i)));
                  } else {
                    return new FuncDeclImpl(check3(Z3.model_get_func_decl(contextPtr, this.ptr, i - numConsts)));
                  }
                }
                if (to < 0) {
                  to += length3;
                }
                if (to >= length3) {
                  throw new RangeError(`expected index ${to} to be less than length ${length3}`);
                }
                const result = [];
                for (let j = i; j < to; j++) {
                  result.push(this.get(j));
                }
                return result;
              } else if (isFuncDecl(i) || isExpr(i) && isConst(i)) {
                const result = this.getInterp(i);
                (0, utils_1.assert)(result !== null);
                return result;
              } else if (isSort(i)) {
                return this.getUniverse(i);
              }
              (0, utils_1.assert)(false, "Number, declaration or constant expected");
            }
            getInterp(expr) {
              (0, utils_1.assert)(isFuncDecl(expr) || isConst(expr), "Declaration expected");
              if (isConst(expr)) {
                (0, utils_1.assert)(isExpr(expr));
                expr = expr.decl();
              }
              (0, utils_1.assert)(isFuncDecl(expr));
              if (expr.arity() === 0) {
                const result = check3(Z3.model_get_const_interp(contextPtr, this.ptr, expr.ptr));
                if (result === null) {
                  return null;
                }
                return _toExpr(result);
              } else {
                const interp = check3(Z3.model_get_func_interp(contextPtr, this.ptr, expr.ptr));
                if (interp === null) {
                  return null;
                }
                return new FuncInterpImpl(interp);
              }
            }
            getUniverse(sort) {
              _assertContext(sort);
              return new AstVectorImpl(check3(Z3.model_get_sort_universe(contextPtr, this.ptr, sort.ptr)));
            }
          }
          class FuncInterpImpl {
            constructor(ptr) {
              this.ptr = ptr;
              this.ctx = ctx;
              Z3.func_interp_inc_ref(contextPtr, ptr);
              cleanup.register(this, () => Z3.func_interp_dec_ref(contextPtr, ptr));
            }
          }
          class SortImpl extends AstImpl {
            get ast() {
              return Z3.sort_to_ast(contextPtr, this.ptr);
            }
            kind() {
              return Z3.get_sort_kind(contextPtr, this.ptr);
            }
            subsort(other) {
              _assertContext(other);
              return false;
            }
            cast(expr) {
              _assertContext(expr);
              (0, utils_1.assert)(expr.sort.eqIdentity(expr.sort), "Sort mismatch");
              return expr;
            }
            name() {
              return _fromSymbol(Z3.get_sort_name(contextPtr, this.ptr));
            }
            eqIdentity(other) {
              _assertContext(other);
              return check3(Z3.is_eq_sort(contextPtr, this.ptr, other.ptr));
            }
            neqIdentity(other) {
              return !this.eqIdentity(other);
            }
          }
          class FuncDeclImpl extends AstImpl {
            get ast() {
              return Z3.func_decl_to_ast(contextPtr, this.ptr);
            }
            name() {
              return _fromSymbol(Z3.get_decl_name(contextPtr, this.ptr));
            }
            arity() {
              return Z3.get_arity(contextPtr, this.ptr);
            }
            domain(i) {
              (0, utils_1.assert)(i < this.arity(), "Index out of bounds");
              return _toSort(Z3.get_domain(contextPtr, this.ptr, i));
            }
            range() {
              return _toSort(Z3.get_range(contextPtr, this.ptr));
            }
            kind() {
              return Z3.get_decl_kind(contextPtr, this.ptr);
            }
            params() {
              const n = Z3.get_decl_num_parameters(contextPtr, this.ptr);
              const result = [];
              for (let i = 0; i < n; i++) {
                const kind = check3(Z3.get_decl_parameter_kind(contextPtr, this.ptr, i));
                switch (kind) {
                  case low_level_1.Z3_parameter_kind.Z3_PARAMETER_INT:
                    result.push(check3(Z3.get_decl_int_parameter(contextPtr, this.ptr, i)));
                    break;
                  case low_level_1.Z3_parameter_kind.Z3_PARAMETER_DOUBLE:
                    result.push(check3(Z3.get_decl_double_parameter(contextPtr, this.ptr, i)));
                    break;
                  case low_level_1.Z3_parameter_kind.Z3_PARAMETER_RATIONAL:
                    result.push(check3(Z3.get_decl_rational_parameter(contextPtr, this.ptr, i)));
                    break;
                  case low_level_1.Z3_parameter_kind.Z3_PARAMETER_SYMBOL:
                    result.push(check3(Z3.get_decl_symbol_parameter(contextPtr, this.ptr, i)));
                    break;
                  case low_level_1.Z3_parameter_kind.Z3_PARAMETER_SORT:
                    result.push(new SortImpl(check3(Z3.get_decl_sort_parameter(contextPtr, this.ptr, i))));
                    break;
                  case low_level_1.Z3_parameter_kind.Z3_PARAMETER_AST:
                    result.push(new ExprImpl(check3(Z3.get_decl_ast_parameter(contextPtr, this.ptr, i))));
                    break;
                  case low_level_1.Z3_parameter_kind.Z3_PARAMETER_FUNC_DECL:
                    result.push(new FuncDeclImpl(check3(Z3.get_decl_func_decl_parameter(contextPtr, this.ptr, i))));
                    break;
                  default:
                    (0, utils_1.assertExhaustive)(kind);
                }
              }
              return result;
            }
            call(...args) {
              (0, utils_1.assert)(args.length === this.arity(), `Incorrect number of arguments to ${this}`);
              return _toExpr(check3(Z3.mk_app(contextPtr, this.ptr, args.map((arg, i) => {
                return this.domain(i).cast(arg).ast;
              }))));
            }
          }
          class ExprImpl extends AstImpl {
            get sort() {
              return _toSort(Z3.get_sort(contextPtr, this.ast));
            }
            eq(other) {
              return new BoolImpl(check3(Z3.mk_eq(contextPtr, this.ast, from2(other).ast)));
            }
            neq(other) {
              return new BoolImpl(check3(Z3.mk_distinct(contextPtr, [this, other].map((expr) => from2(expr).ast))));
            }
            params() {
              return this.decl().params();
            }
            decl() {
              (0, utils_1.assert)(isApp(this), "Z3 application expected");
              return new FuncDeclImpl(check3(Z3.get_app_decl(contextPtr, check3(Z3.to_app(contextPtr, this.ast)))));
            }
            numArgs() {
              (0, utils_1.assert)(isApp(this), "Z3 applicaiton expected");
              return check3(Z3.get_app_num_args(contextPtr, check3(Z3.to_app(contextPtr, this.ast))));
            }
            arg(i) {
              (0, utils_1.assert)(isApp(this), "Z3 applicaiton expected");
              (0, utils_1.assert)(i < this.numArgs(), `Invalid argument index - expected ${i} to be less than ${this.numArgs()}`);
              return _toExpr(check3(Z3.get_app_arg(contextPtr, check3(Z3.to_app(contextPtr, this.ast)), i)));
            }
            children() {
              const num_args = this.numArgs();
              if (isApp(this)) {
                const result = [];
                for (let i = 0; i < num_args; i++) {
                  result.push(this.arg(i));
                }
                return result;
              }
              return [];
            }
          }
          class BoolSortImpl extends SortImpl {
            cast(other) {
              if (typeof other === "boolean") {
                other = Bool.val(other);
              }
              (0, utils_1.assert)(isExpr(other), "true, false or Z3 Boolean expression expected.");
              (0, utils_1.assert)(this.eqIdentity(other.sort), "Value cannot be converted into a Z3 Boolean value");
              return other;
            }
            subsort(other) {
              _assertContext(other.ctx);
              return other instanceof ArithSortImpl;
            }
          }
          class BoolImpl extends ExprImpl {
            not() {
              return Not(this);
            }
            and(other) {
              return And(this, other);
            }
            or(other) {
              return Or(this, other);
            }
            xor(other) {
              return Xor(this, other);
            }
            implies(other) {
              return Implies(this, other);
            }
          }
          class ProbeImpl {
            constructor(ptr) {
              this.ptr = ptr;
              this.ctx = ctx;
            }
          }
          class TacticImpl {
            constructor(tactic) {
              this.ctx = ctx;
              let myPtr;
              if (typeof tactic === "string") {
                myPtr = check3(Z3.mk_tactic(contextPtr, tactic));
              } else {
                myPtr = tactic;
              }
              this.ptr = myPtr;
              Z3.tactic_inc_ref(contextPtr, myPtr);
              cleanup.register(this, () => Z3.tactic_dec_ref(contextPtr, myPtr));
            }
          }
          class ArithSortImpl extends SortImpl {
            cast(other) {
              const sortTypeStr = isIntSort(this) ? "IntSort" : "RealSort";
              if (isExpr(other)) {
                const otherS = other.sort;
                if (isArith(other)) {
                  if (this.eqIdentity(otherS)) {
                    return other;
                  } else if (isIntSort(otherS) && isRealSort(this)) {
                    return ToReal(other);
                  }
                  (0, utils_1.assert)(false, "Can't cast Real to IntSort without loss");
                } else if (isBool(other)) {
                  if (isIntSort(this)) {
                    return If(other, 1, 0);
                  } else {
                    return ToReal(If(other, 1, 0));
                  }
                }
                (0, utils_1.assert)(false, `Can't cast expression to ${sortTypeStr}`);
              } else {
                if (typeof other !== "boolean") {
                  if (isIntSort(this)) {
                    (0, utils_1.assert)(!isCoercibleRational(other), "Can't cast fraction to IntSort");
                    return Int.val(other);
                  }
                  return Real.val(other);
                }
                (0, utils_1.assert)(false, `Can't cast primitive to ${sortTypeStr}`);
              }
            }
          }
          class ArithImpl extends ExprImpl {
            add(other) {
              return new ArithImpl(check3(Z3.mk_add(contextPtr, [this.ast, this.sort.cast(other).ast])));
            }
            mul(other) {
              return new ArithImpl(check3(Z3.mk_mul(contextPtr, [this.ast, this.sort.cast(other).ast])));
            }
            sub(other) {
              return new ArithImpl(check3(Z3.mk_sub(contextPtr, [this.ast, this.sort.cast(other).ast])));
            }
            pow(exponent) {
              return new ArithImpl(check3(Z3.mk_power(contextPtr, this.ast, this.sort.cast(exponent).ast)));
            }
            div(other) {
              return new ArithImpl(check3(Z3.mk_div(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            mod(other) {
              return new ArithImpl(check3(Z3.mk_mod(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            neg() {
              return new ArithImpl(check3(Z3.mk_unary_minus(contextPtr, this.ast)));
            }
            le(other) {
              return new BoolImpl(check3(Z3.mk_le(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            lt(other) {
              return new BoolImpl(check3(Z3.mk_lt(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            gt(other) {
              return new BoolImpl(check3(Z3.mk_gt(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            ge(other) {
              return new BoolImpl(check3(Z3.mk_ge(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
          }
          class IntNumImpl extends ArithImpl {
            value() {
              return BigInt(this.asString());
            }
            asString() {
              return Z3.get_numeral_string(contextPtr, this.ast);
            }
            asBinary() {
              return Z3.get_numeral_binary_string(contextPtr, this.ast);
            }
          }
          class RatNumImpl extends ArithImpl {
            value() {
              return { numerator: this.numerator().value(), denominator: this.denominator().value() };
            }
            numerator() {
              return new IntNumImpl(Z3.get_numerator(contextPtr, this.ast));
            }
            denominator() {
              return new IntNumImpl(Z3.get_denominator(contextPtr, this.ast));
            }
            asNumber() {
              const { numerator, denominator } = this.value();
              const div2 = numerator / denominator;
              return Number(div2) + Number(numerator - div2 * denominator) / Number(denominator);
            }
            asDecimal(prec = Number.parseInt(getParam("precision") ?? FALLBACK_PRECISION.toString())) {
              return Z3.get_numeral_decimal_string(contextPtr, this.ast, prec);
            }
            asString() {
              return Z3.get_numeral_string(contextPtr, this.ast);
            }
          }
          class BitVecSortImpl extends SortImpl {
            size() {
              return Z3.get_bv_sort_size(contextPtr, this.ptr);
            }
            subsort(other) {
              return isBitVecSort(other) && this.size() < other.size();
            }
            cast(other) {
              if (isExpr(other)) {
                _assertContext(other);
                return other;
              }
              (0, utils_1.assert)(!isCoercibleRational(other), "Can't convert rational to BitVec");
              return BitVec.val(other, this.size());
            }
          }
          class BitVecImpl extends ExprImpl {
            size() {
              return this.sort.size();
            }
            add(other) {
              return new BitVecImpl(check3(Z3.mk_bvadd(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            mul(other) {
              return new BitVecImpl(check3(Z3.mk_bvmul(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            sub(other) {
              return new BitVecImpl(check3(Z3.mk_bvsub(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            sdiv(other) {
              return new BitVecImpl(check3(Z3.mk_bvsdiv(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            udiv(other) {
              return new BitVecImpl(check3(Z3.mk_bvudiv(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            smod(other) {
              return new BitVecImpl(check3(Z3.mk_bvsmod(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            urem(other) {
              return new BitVecImpl(check3(Z3.mk_bvurem(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            srem(other) {
              return new BitVecImpl(check3(Z3.mk_bvsrem(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            neg() {
              return new BitVecImpl(check3(Z3.mk_bvneg(contextPtr, this.ast)));
            }
            or(other) {
              return new BitVecImpl(check3(Z3.mk_bvor(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            and(other) {
              return new BitVecImpl(check3(Z3.mk_bvand(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            nand(other) {
              return new BitVecImpl(check3(Z3.mk_bvnand(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            xor(other) {
              return new BitVecImpl(check3(Z3.mk_bvxor(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            xnor(other) {
              return new BitVecImpl(check3(Z3.mk_bvxnor(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            shr(count) {
              return new BitVecImpl(check3(Z3.mk_bvashr(contextPtr, this.ast, this.sort.cast(count).ast)));
            }
            lshr(count) {
              return new BitVecImpl(check3(Z3.mk_bvlshr(contextPtr, this.ast, this.sort.cast(count).ast)));
            }
            shl(count) {
              return new BitVecImpl(check3(Z3.mk_bvshl(contextPtr, this.ast, this.sort.cast(count).ast)));
            }
            rotateRight(count) {
              return new BitVecImpl(check3(Z3.mk_ext_rotate_right(contextPtr, this.ast, this.sort.cast(count).ast)));
            }
            rotateLeft(count) {
              return new BitVecImpl(check3(Z3.mk_ext_rotate_left(contextPtr, this.ast, this.sort.cast(count).ast)));
            }
            not() {
              return new BitVecImpl(check3(Z3.mk_bvnot(contextPtr, this.ast)));
            }
            extract(high, low) {
              return new BitVecImpl(check3(Z3.mk_extract(contextPtr, high, low, this.ast)));
            }
            signExt(count) {
              return new BitVecImpl(check3(Z3.mk_sign_ext(contextPtr, count, this.ast)));
            }
            zeroExt(count) {
              return new BitVecImpl(check3(Z3.mk_zero_ext(contextPtr, count, this.ast)));
            }
            repeat(count) {
              return new BitVecImpl(check3(Z3.mk_repeat(contextPtr, count, this.ast)));
            }
            sle(other) {
              return new BoolImpl(check3(Z3.mk_bvsle(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            ule(other) {
              return new BoolImpl(check3(Z3.mk_bvule(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            slt(other) {
              return new BoolImpl(check3(Z3.mk_bvslt(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            ult(other) {
              return new BoolImpl(check3(Z3.mk_bvult(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            sge(other) {
              return new BoolImpl(check3(Z3.mk_bvsge(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            uge(other) {
              return new BoolImpl(check3(Z3.mk_bvuge(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            sgt(other) {
              return new BoolImpl(check3(Z3.mk_bvsgt(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            ugt(other) {
              return new BoolImpl(check3(Z3.mk_bvugt(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            redAnd() {
              return new BitVecImpl(check3(Z3.mk_bvredand(contextPtr, this.ast)));
            }
            redOr() {
              return new BitVecImpl(check3(Z3.mk_bvredor(contextPtr, this.ast)));
            }
            addNoOverflow(other, isSigned) {
              return new BoolImpl(check3(Z3.mk_bvadd_no_overflow(contextPtr, this.ast, this.sort.cast(other).ast, isSigned)));
            }
            addNoUnderflow(other) {
              return new BoolImpl(check3(Z3.mk_bvadd_no_underflow(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            subNoOverflow(other) {
              return new BoolImpl(check3(Z3.mk_bvsub_no_overflow(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            subNoUndeflow(other, isSigned) {
              return new BoolImpl(check3(Z3.mk_bvsub_no_underflow(contextPtr, this.ast, this.sort.cast(other).ast, isSigned)));
            }
            sdivNoOverflow(other) {
              return new BoolImpl(check3(Z3.mk_bvsdiv_no_overflow(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            mulNoOverflow(other, isSigned) {
              return new BoolImpl(check3(Z3.mk_bvmul_no_overflow(contextPtr, this.ast, this.sort.cast(other).ast, isSigned)));
            }
            mulNoUndeflow(other) {
              return new BoolImpl(check3(Z3.mk_bvmul_no_underflow(contextPtr, this.ast, this.sort.cast(other).ast)));
            }
            negNoOverflow() {
              return new BoolImpl(check3(Z3.mk_bvneg_no_overflow(contextPtr, this.ast)));
            }
          }
          class BitVecNumImpl extends BitVecImpl {
            value() {
              return BigInt(this.asString());
            }
            asSignedValue() {
              let val = this.value();
              const size = BigInt(this.size());
              if (val >= 2n ** (size - 1n)) {
                val = val - 2n ** size;
              }
              if (val < (-2n) ** (size - 1n)) {
                val = val + 2n ** size;
              }
              return val;
            }
            asString() {
              return Z3.get_numeral_string(contextPtr, this.ast);
            }
            asBinaryString() {
              return Z3.get_numeral_binary_string(contextPtr, this.ast);
            }
          }
          class ArraySortImpl extends SortImpl {
            domain() {
              return _toSort(check3(Z3.get_array_sort_domain(contextPtr, this.ptr)));
            }
            domain_n(i) {
              return _toSort(check3(Z3.get_array_sort_domain_n(contextPtr, this.ptr, i)));
            }
            range() {
              return _toSort(check3(Z3.get_array_sort_range(contextPtr, this.ptr)));
            }
          }
          class ArrayImpl extends ExprImpl {
            domain() {
              return this.sort.domain();
            }
            domain_n(i) {
              return this.sort.domain_n(i);
            }
            range() {
              return this.sort.range();
            }
            select(...indices) {
              const args = indices.map((arg, i) => this.domain_n(i).cast(arg));
              if (args.length === 1) {
                return _toExpr(check3(Z3.mk_select(contextPtr, this.ast, args[0].ast)));
              }
              const _args = args.map((arg) => arg.ast);
              return _toExpr(check3(Z3.mk_select_n(contextPtr, this.ast, _args)));
            }
            store(...indicesAndValue) {
              const args = indicesAndValue.map((arg, i) => {
                if (i === indicesAndValue.length - 1) {
                  return this.range().cast(arg);
                }
                return this.domain_n(i).cast(arg);
              });
              if (args.length <= 1) {
                throw new types_1.Z3Error("Array store requires both index and value arguments");
              }
              if (args.length === 2) {
                return _toExpr(check3(Z3.mk_store(contextPtr, this.ast, args[0].ast, args[1].ast)));
              }
              const _idxs = args.slice(0, args.length - 1).map((arg) => arg.ast);
              return _toExpr(check3(Z3.mk_store_n(contextPtr, this.ast, _idxs, args[args.length - 1].ast)));
            }
          }
          class AstVectorImpl {
            constructor(ptr = Z3.mk_ast_vector(contextPtr)) {
              this.ptr = ptr;
              this.ctx = ctx;
              Z3.ast_vector_inc_ref(contextPtr, ptr);
              cleanup.register(this, () => Z3.ast_vector_dec_ref(contextPtr, ptr));
            }
            length() {
              return Z3.ast_vector_size(contextPtr, this.ptr);
            }
            [Symbol.iterator]() {
              return this.values();
            }
            *entries() {
              const length3 = this.length();
              for (let i = 0; i < length3; i++) {
                yield [i, this.get(i)];
              }
            }
            *keys() {
              for (let [key] of this.entries()) {
                yield key;
              }
            }
            *values() {
              for (let [, value] of this.entries()) {
                yield value;
              }
            }
            get(from3, to) {
              const length3 = this.length();
              if (from3 < 0) {
                from3 += length3;
              }
              if (from3 >= length3) {
                throw new RangeError(`expected from index ${from3} to be less than length ${length3}`);
              }
              if (to === void 0) {
                return _toAst(check3(Z3.ast_vector_get(contextPtr, this.ptr, from3)));
              }
              if (to < 0) {
                to += length3;
              }
              if (to >= length3) {
                throw new RangeError(`expected to index ${to} to be less than length ${length3}`);
              }
              const result = [];
              for (let i = from3; i < to; i++) {
                result.push(_toAst(check3(Z3.ast_vector_get(contextPtr, this.ptr, i))));
              }
              return result;
            }
            set(i, v) {
              _assertContext(v);
              if (i >= this.length()) {
                throw new RangeError(`expected index ${i} to be less than length ${this.length()}`);
              }
              check3(Z3.ast_vector_set(contextPtr, this.ptr, i, v.ast));
            }
            push(v) {
              _assertContext(v);
              check3(Z3.ast_vector_push(contextPtr, this.ptr, v.ast));
            }
            resize(size) {
              check3(Z3.ast_vector_resize(contextPtr, this.ptr, size));
            }
            has(v) {
              _assertContext(v);
              for (const item of this.values()) {
                if (item.eqIdentity(v)) {
                  return true;
                }
              }
              return false;
            }
            sexpr() {
              return check3(Z3.ast_vector_to_string(contextPtr, this.ptr));
            }
          }
          class AstMapImpl {
            constructor(ptr = Z3.mk_ast_map(contextPtr)) {
              this.ptr = ptr;
              this.ctx = ctx;
              Z3.ast_map_inc_ref(contextPtr, ptr);
              cleanup.register(this, () => Z3.ast_map_dec_ref(contextPtr, ptr));
            }
            [Symbol.iterator]() {
              return this.entries();
            }
            get size() {
              return Z3.ast_map_size(contextPtr, this.ptr);
            }
            *entries() {
              for (const key of this.keys()) {
                yield [key, this.get(key)];
              }
            }
            keys() {
              return new AstVectorImpl(Z3.ast_map_keys(contextPtr, this.ptr));
            }
            *values() {
              for (const [_, value] of this.entries()) {
                yield value;
              }
            }
            get(key) {
              return _toAst(check3(Z3.ast_map_find(contextPtr, this.ptr, key.ast)));
            }
            set(key, value) {
              check3(Z3.ast_map_insert(contextPtr, this.ptr, key.ast, value.ast));
            }
            delete(key) {
              check3(Z3.ast_map_erase(contextPtr, this.ptr, key.ast));
            }
            clear() {
              check3(Z3.ast_map_reset(contextPtr, this.ptr));
            }
            has(key) {
              return check3(Z3.ast_map_contains(contextPtr, this.ptr, key.ast));
            }
            sexpr() {
              return check3(Z3.ast_map_to_string(contextPtr, this.ptr));
            }
          }
          const ctx = {
            ptr: contextPtr,
            name: name2,
            /////////////
            // Classes //
            /////////////
            Solver: SolverImpl,
            Model: ModelImpl,
            Tactic: TacticImpl,
            AstVector: AstVectorImpl,
            AstMap: AstMapImpl,
            ///////////////
            // Functions //
            ///////////////
            interrupt,
            isModel,
            isAst,
            isSort,
            isFuncDecl,
            isApp,
            isConst,
            isExpr,
            isVar,
            isAppOf,
            isBool,
            isTrue,
            isFalse,
            isAnd,
            isOr,
            isImplies,
            isNot,
            isEq,
            isDistinct,
            isArith,
            isArithSort,
            isInt,
            isIntVal,
            isIntSort,
            isReal,
            isRealVal,
            isRealSort,
            isBitVecSort,
            isBitVec,
            isBitVecVal,
            isArraySort,
            isArray: isArray2,
            isConstArray,
            isProbe,
            isTactic,
            isAstVector,
            eqIdentity,
            getVarIndex,
            from: from2,
            solve,
            /////////////
            // Objects //
            /////////////
            Sort,
            Function,
            RecFunc,
            Bool,
            Int,
            Real,
            BitVec,
            Array: Array2,
            ////////////////
            // Operations //
            ////////////////
            If,
            Distinct,
            Const,
            Consts,
            FreshConst,
            Var,
            Implies,
            Eq,
            Xor,
            Not,
            And,
            Or,
            ToReal,
            ToInt,
            IsInt,
            Sqrt,
            Cbrt,
            BV2Int,
            Int2BV,
            Concat,
            Cond
          };
          cleanup.register(ctx, () => Z3.del_context(contextPtr));
          return ctx;
        }
        return {
          enableTrace,
          disableTrace,
          getVersion,
          getVersionString,
          getFullVersion,
          openLog,
          appendLog,
          getParam,
          setParam,
          resetParams,
          Context: createContext
        };
      }
      exports.createApi = createApi;
    }
  });

  // node_modules/z3-solver/build/high-level/index.js
  var require_high_level2 = __commonJS({
    "node_modules/z3-solver/build/high-level/index.js"(exports) {
      "use strict";
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding2(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar2(require_high_level(), exports);
      __exportStar2(require_types(), exports);
    }
  });

  // node_modules/z3-solver/build/browser.js
  var require_browser = __commonJS({
    "node_modules/z3-solver/build/browser.js"(exports) {
      "use strict";
      var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding2(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.init = void 0;
      var high_level_1 = require_high_level2();
      var low_level_1 = require_low_level();
      __exportStar2(require_types(), exports);
      __exportStar2(require_types_GENERATED(), exports);
      async function init3() {
        const initZ3 = global.initZ3;
        if (initZ3 === void 0) {
          throw new Error("initZ3 was not imported correctly. Please consult documentation on how to load Z3 in browser");
        }
        const lowLevel = await (0, low_level_1.init)(initZ3);
        const highLevel = (0, high_level_1.createApi)(lowLevel.Z3);
        return { ...lowLevel, ...highLevel };
      }
      exports.init = init3;
    }
  });

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b) {
      return function(a) {
        return f(a)(b);
      };
    };
  };
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var voidRight = function(dictFunctor) {
    var map12 = map(dictFunctor);
    return function(x) {
      return map12($$const(x));
    };
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply(dictApply);
    var map4 = map(dictApply.Functor0());
    return function(a) {
      return function(b) {
        return apply1(map4($$const(identity2))(a))(b);
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var liftA1 = function(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    var pure1 = pure(dictApplicative);
    return function(f) {
      return function(a) {
        return apply2(pure1(f))(a);
      };
    };
  };

  // output/Control.Bind/index.js
  var discard = function(dict) {
    return dict.discard;
  };
  var bind = function(dict) {
    return dict.bind;
  };
  var bindFlipped = function(dictBind) {
    return flip(bind(dictBind));
  };
  var discardUnit = {
    discard: function(dictBind) {
      return bind(dictBind);
    }
  };

  // output/Debug/foreign.js
  var req = typeof module === "undefined" ? void 0 : module.require;
  var util = function() {
    try {
      return req === void 0 ? void 0 : req("util");
    } catch (e) {
      return void 0;
    }
  }();
  function _trace(x, k) {
    if (util !== void 0) {
      console.log(util.inspect(x, { depth: null, colors: true }));
    } else {
      console.log(x);
    }
    return k({});
  }
  var now = function() {
    var perf;
    if (typeof performance !== "undefined") {
      perf = performance;
    } else if (req) {
      try {
        perf = req("perf_hooks").performance;
      } catch (e) {
      }
    }
    return function() {
      return (perf || Date).now();
    };
  }();

  // output/Data.Function.Uncurried/foreign.js
  var runFn3 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        };
      };
    };
  };

  // output/Debug/index.js
  var discard2 = /* @__PURE__ */ discard(discardUnit);
  var trace = function() {
    return function(a) {
      return function(k) {
        return _trace(a, k);
      };
    };
  };
  var trace1 = /* @__PURE__ */ trace();
  var traceM = function() {
    return function(dictMonad) {
      var discard1 = discard2(dictMonad.Bind1());
      var pure5 = pure(dictMonad.Applicative0());
      return function(s) {
        return discard1(pure5(unit))(function() {
          return trace1(s)(function(v) {
            return pure5(unit);
          });
        });
      };
    };
  };

  // output/Effect.Aff/foreign.js
  var Aff = function() {
    var EMPTY = {};
    var PURE = "Pure";
    var THROW = "Throw";
    var CATCH = "Catch";
    var SYNC = "Sync";
    var ASYNC = "Async";
    var BIND = "Bind";
    var BRACKET = "Bracket";
    var FORK = "Fork";
    var SEQ = "Sequential";
    var MAP = "Map";
    var APPLY = "Apply";
    var ALT = "Alt";
    var CONS = "Cons";
    var RESUME = "Resume";
    var RELEASE = "Release";
    var FINALIZER = "Finalizer";
    var FINALIZED = "Finalized";
    var FORKED = "Forked";
    var FIBER = "Fiber";
    var THUNK = "Thunk";
    function Aff2(tag, _1, _2, _3) {
      this.tag = tag;
      this._1 = _1;
      this._2 = _2;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function(_1, _2, _3) {
        return new Aff2(tag, _1, _2, _3);
      };
      fn.tag = tag;
      return fn;
    }
    function nonCanceler2(error2) {
      return new Aff2(PURE, void 0);
    }
    function runEff(eff) {
      try {
        eff();
      } catch (error2) {
        setTimeout(function() {
          throw error2;
        }, 0);
      }
    }
    function runSync(left, right, eff) {
      try {
        return right(eff());
      } catch (error2) {
        return left(error2);
      }
    }
    function runAsync(left, eff, k) {
      try {
        return eff(k)();
      } catch (error2) {
        k(left(error2))();
        return nonCanceler2;
      }
    }
    var Scheduler = function() {
      var limit = 1024;
      var size = 0;
      var ix = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk;
        draining = true;
        while (size !== 0) {
          size--;
          thunk = queue[ix];
          queue[ix] = void 0;
          ix = (ix + 1) % limit;
          thunk();
        }
        draining = false;
      }
      return {
        isDraining: function() {
          return draining;
        },
        enqueue: function(cb) {
          var i, tmp;
          if (size === limit) {
            tmp = draining;
            drain();
            draining = tmp;
          }
          queue[(ix + size) % limit] = cb;
          size++;
          if (!draining) {
            drain();
          }
        }
      };
    }();
    function Supervisor(util2) {
      var fibers = {};
      var fiberId = 0;
      var count = 0;
      return {
        register: function(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function(result) {
              return function() {
                count--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count++;
        },
        isEmpty: function() {
          return count === 0;
        },
        killAll: function(killError, cb) {
          return function() {
            if (count === 0) {
              return cb();
            }
            var killCount = 0;
            var kills = {};
            function kill(fid) {
              kills[fid] = fibers[fid].kill(killError, function(result) {
                return function() {
                  delete kills[fid];
                  killCount--;
                  if (util2.isLeft(result) && util2.fromLeft(result)) {
                    setTimeout(function() {
                      throw util2.fromLeft(result);
                    }, 0);
                  }
                  if (killCount === 0) {
                    cb();
                  }
                };
              })();
            }
            for (var k in fibers) {
              if (fibers.hasOwnProperty(k)) {
                killCount++;
                kill(k);
              }
            }
            fibers = {};
            fiberId = 0;
            count = 0;
            return function(error2) {
              return new Aff2(SYNC, function() {
                for (var k2 in kills) {
                  if (kills.hasOwnProperty(k2)) {
                    kills[k2]();
                  }
                }
              });
            };
          };
        }
      };
    }
    var SUSPENDED = 0;
    var CONTINUE = 1;
    var STEP_BIND = 2;
    var STEP_RESULT = 3;
    var PENDING = 4;
    var RETURN = 5;
    var COMPLETED = 6;
    function Fiber(util2, supervisor, aff) {
      var runTick = 0;
      var status = SUSPENDED;
      var step = aff;
      var fail2 = null;
      var interrupt = null;
      var bhead = null;
      var btail = null;
      var attempts = null;
      var bracketCount = 0;
      var joinId = 0;
      var joins = null;
      var rethrow = true;
      function run3(localRunTick) {
        var tmp, result, attempt;
        while (true) {
          tmp = null;
          result = null;
          attempt = null;
          switch (status) {
            case STEP_BIND:
              status = CONTINUE;
              try {
                step = bhead(step);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e) {
                status = RETURN;
                fail2 = util2.left(e);
                step = null;
              }
              break;
            case STEP_RESULT:
              if (util2.isLeft(step)) {
                status = RETURN;
                fail2 = step;
                step = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step = util2.fromRight(step);
              }
              break;
            case CONTINUE:
              switch (step.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step._2;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step = util2.right(step._1);
                  } else {
                    status = STEP_BIND;
                    step = step._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step = runSync(util2.left, util2.right, step._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step = runAsync(util2.left, step._1, function(result2) {
                    return function() {
                      if (runTick !== localRunTick) {
                        return;
                      }
                      runTick++;
                      Scheduler.enqueue(function() {
                        if (runTick !== localRunTick + 1) {
                          return;
                        }
                        status = STEP_RESULT;
                        step = result2;
                        run3(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail2 = util2.left(step._1);
                  step = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util2, supervisor, step._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step._1) {
                    tmp.run();
                  }
                  step = util2.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step = sequential2(util2, supervisor, step._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step = interrupt || fail2 || step;
              } else {
                tmp = attempts._3;
                attempt = attempts._1;
                attempts = attempts._2;
                switch (attempt.tag) {
                  case CATCH:
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      status = RETURN;
                    } else if (fail2) {
                      status = CONTINUE;
                      step = attempt._2(util2.fromLeft(fail2));
                      fail2 = null;
                    }
                    break;
                  case RESUME:
                    if (interrupt && interrupt !== tmp && bracketCount === 0 || fail2) {
                      status = RETURN;
                    } else {
                      bhead = attempt._1;
                      btail = attempt._2;
                      status = STEP_BIND;
                      step = util2.fromRight(step);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail2 === null) {
                      result = util2.fromRight(step);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step = attempt._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step, fail2), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step = attempt._1.killed(util2.fromLeft(interrupt))(attempt._2);
                    } else if (fail2) {
                      step = attempt._1.failed(util2.fromLeft(fail2))(attempt._2);
                    } else {
                      step = attempt._1.completed(util2.fromRight(step))(attempt._2);
                    }
                    fail2 = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step, fail2), attempts, interrupt);
                    status = CONTINUE;
                    step = attempt._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step = attempt._1;
                    fail2 = attempt._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k in joins) {
                if (joins.hasOwnProperty(k)) {
                  rethrow = rethrow && joins[k].rethrow;
                  runEff(joins[k].handler(step));
                }
              }
              joins = null;
              if (interrupt && fail2) {
                setTimeout(function() {
                  throw util2.fromLeft(fail2);
                }, 0);
              } else if (util2.isLeft(step) && rethrow) {
                setTimeout(function() {
                  if (rethrow) {
                    throw util2.fromLeft(step);
                  }
                }, 0);
              }
              return;
            case SUSPENDED:
              status = CONTINUE;
              break;
            case PENDING:
              return;
          }
        }
      }
      function onComplete(join3) {
        return function() {
          if (status === COMPLETED) {
            rethrow = rethrow && join3.rethrow;
            join3.handler(step)();
            return function() {
            };
          }
          var jid = joinId++;
          joins = joins || {};
          joins[jid] = join3;
          return function() {
            if (joins !== null) {
              delete joins[jid];
            }
          };
        };
      }
      function kill(error2, cb) {
        return function() {
          if (status === COMPLETED) {
            cb(util2.right(void 0))();
            return function() {
            };
          }
          var canceler = onComplete({
            rethrow: false,
            handler: function() {
              return cb(util2.right(void 0));
            }
          })();
          switch (status) {
            case SUSPENDED:
              interrupt = util2.left(error2);
              status = COMPLETED;
              step = interrupt;
              run3(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util2.left(error2);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step(error2)), attempts, interrupt);
                }
                status = RETURN;
                step = null;
                fail2 = null;
                run3(++runTick);
              }
              break;
            default:
              if (interrupt === null) {
                interrupt = util2.left(error2);
              }
              if (bracketCount === 0) {
                status = RETURN;
                step = null;
                fail2 = null;
              }
          }
          return canceler;
        };
      }
      function join2(cb) {
        return function() {
          var canceler = onComplete({
            rethrow: false,
            handler: cb
          })();
          if (status === SUSPENDED) {
            run3(runTick);
          }
          return canceler;
        };
      }
      return {
        kill,
        join: join2,
        onComplete,
        isSuspended: function() {
          return status === SUSPENDED;
        },
        run: function() {
          if (status === SUSPENDED) {
            if (!Scheduler.isDraining()) {
              Scheduler.enqueue(function() {
                run3(runTick);
              });
            } else {
              run3(runTick);
            }
          }
        }
      };
    }
    function runPar(util2, supervisor, par, cb) {
      var fiberId = 0;
      var fibers = {};
      var killId = 0;
      var kills = {};
      var early = new Error("[ParAff] Early exit");
      var interrupt = null;
      var root = EMPTY;
      function kill(error2, par2, cb2) {
        var step = par2;
        var head = null;
        var tail = null;
        var count = 0;
        var kills2 = {};
        var tmp, kid;
        loop:
          while (true) {
            tmp = null;
            switch (step.tag) {
              case FORKED:
                if (step._3 === EMPTY) {
                  tmp = fibers[step._1];
                  kills2[count++] = tmp.kill(error2, function(result) {
                    return function() {
                      count--;
                      if (count === 0) {
                        cb2(result)();
                      }
                    };
                  });
                }
                if (head === null) {
                  break loop;
                }
                step = head._2;
                if (tail === null) {
                  head = null;
                } else {
                  head = tail._1;
                  tail = tail._2;
                }
                break;
              case MAP:
                step = step._2;
                break;
              case APPLY:
              case ALT:
                if (head) {
                  tail = new Aff2(CONS, head, tail);
                }
                head = step;
                step = step._1;
                break;
            }
          }
        if (count === 0) {
          cb2(util2.right(void 0))();
        } else {
          kid = 0;
          tmp = count;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join2(result, head, tail) {
        var fail2, step, lhs, rhs, tmp, kid;
        if (util2.isLeft(result)) {
          fail2 = result;
          step = null;
        } else {
          step = result;
          fail2 = null;
        }
        loop:
          while (true) {
            lhs = null;
            rhs = null;
            tmp = null;
            kid = null;
            if (interrupt !== null) {
              return;
            }
            if (head === null) {
              cb(fail2 || step)();
              return;
            }
            if (head._3 !== EMPTY) {
              return;
            }
            switch (head.tag) {
              case MAP:
                if (fail2 === null) {
                  head._3 = util2.right(head._1(util2.fromRight(step)));
                  step = head._3;
                } else {
                  head._3 = fail2;
                }
                break;
              case APPLY:
                lhs = head._1._3;
                rhs = head._2._3;
                if (fail2) {
                  head._3 = fail2;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, fail2 === lhs ? head._2 : head._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail === null) {
                        join2(fail2, null, null);
                      } else {
                        join2(fail2, tail._1, tail._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                } else if (lhs === EMPTY || rhs === EMPTY) {
                  return;
                } else {
                  step = util2.right(util2.fromRight(lhs)(util2.fromRight(rhs)));
                  head._3 = step;
                }
                break;
              case ALT:
                lhs = head._1._3;
                rhs = head._2._3;
                if (lhs === EMPTY && util2.isLeft(rhs) || rhs === EMPTY && util2.isLeft(lhs)) {
                  return;
                }
                if (lhs !== EMPTY && util2.isLeft(lhs) && rhs !== EMPTY && util2.isLeft(rhs)) {
                  fail2 = step === lhs ? rhs : lhs;
                  step = null;
                  head._3 = fail2;
                } else {
                  head._3 = step;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, step === lhs ? head._2 : head._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail === null) {
                        join2(step, null, null);
                      } else {
                        join2(step, tail._1, tail._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                }
                break;
            }
            if (tail === null) {
              head = null;
            } else {
              head = tail._1;
              tail = tail._2;
            }
          }
      }
      function resolve4(fiber) {
        return function(result) {
          return function() {
            delete fibers[fiber._1];
            fiber._3 = result;
            join2(result, fiber._2._1, fiber._2._2);
          };
        };
      }
      function run3() {
        var status = CONTINUE;
        var step = par;
        var head = null;
        var tail = null;
        var tmp, fid;
        loop:
          while (true) {
            tmp = null;
            fid = null;
            switch (status) {
              case CONTINUE:
                switch (step.tag) {
                  case MAP:
                    if (head) {
                      tail = new Aff2(CONS, head, tail);
                    }
                    head = new Aff2(MAP, step._1, EMPTY, EMPTY);
                    step = step._2;
                    break;
                  case APPLY:
                    if (head) {
                      tail = new Aff2(CONS, head, tail);
                    }
                    head = new Aff2(APPLY, EMPTY, step._2, EMPTY);
                    step = step._1;
                    break;
                  case ALT:
                    if (head) {
                      tail = new Aff2(CONS, head, tail);
                    }
                    head = new Aff2(ALT, EMPTY, step._2, EMPTY);
                    step = step._1;
                    break;
                  default:
                    fid = fiberId++;
                    status = RETURN;
                    tmp = step;
                    step = new Aff2(FORKED, fid, new Aff2(CONS, head, tail), EMPTY);
                    tmp = Fiber(util2, supervisor, tmp);
                    tmp.onComplete({
                      rethrow: false,
                      handler: resolve4(step)
                    })();
                    fibers[fid] = tmp;
                    if (supervisor) {
                      supervisor.register(tmp);
                    }
                }
                break;
              case RETURN:
                if (head === null) {
                  break loop;
                }
                if (head._1 === EMPTY) {
                  head._1 = step;
                  status = CONTINUE;
                  step = head._2;
                  head._2 = EMPTY;
                } else {
                  head._2 = step;
                  step = head;
                  if (tail === null) {
                    head = null;
                  } else {
                    head = tail._1;
                    tail = tail._2;
                  }
                }
            }
          }
        root = step;
        for (fid = 0; fid < fiberId; fid++) {
          fibers[fid].run();
        }
      }
      function cancel(error2, cb2) {
        interrupt = util2.left(error2);
        var innerKills;
        for (var kid in kills) {
          if (kills.hasOwnProperty(kid)) {
            innerKills = kills[kid];
            for (kid in innerKills) {
              if (innerKills.hasOwnProperty(kid)) {
                innerKills[kid]();
              }
            }
          }
        }
        kills = null;
        var newKills = kill(error2, root, cb2);
        return function(killError) {
          return new Aff2(ASYNC, function(killCb) {
            return function() {
              for (var kid2 in newKills) {
                if (newKills.hasOwnProperty(kid2)) {
                  newKills[kid2]();
                }
              }
              return nonCanceler2;
            };
          });
        };
      }
      run3();
      return function(killError) {
        return new Aff2(ASYNC, function(killCb) {
          return function() {
            return cancel(killError, killCb);
          };
        });
      };
    }
    function sequential2(util2, supervisor, par) {
      return new Aff2(ASYNC, function(cb) {
        return function() {
          return runPar(util2, supervisor, par, cb);
        };
      });
    }
    Aff2.EMPTY = EMPTY;
    Aff2.Pure = AffCtr(PURE);
    Aff2.Throw = AffCtr(THROW);
    Aff2.Catch = AffCtr(CATCH);
    Aff2.Sync = AffCtr(SYNC);
    Aff2.Async = AffCtr(ASYNC);
    Aff2.Bind = AffCtr(BIND);
    Aff2.Bracket = AffCtr(BRACKET);
    Aff2.Fork = AffCtr(FORK);
    Aff2.Seq = AffCtr(SEQ);
    Aff2.ParMap = AffCtr(MAP);
    Aff2.ParApply = AffCtr(APPLY);
    Aff2.ParAlt = AffCtr(ALT);
    Aff2.Fiber = Fiber;
    Aff2.Supervisor = Supervisor;
    Aff2.Scheduler = Scheduler;
    Aff2.nonCanceler = nonCanceler2;
    return Aff2;
  }();
  var _pure = Aff.Pure;
  var _throwError = Aff.Throw;
  function _map(f) {
    return function(aff) {
      if (aff.tag === Aff.Pure.tag) {
        return Aff.Pure(f(aff._1));
      } else {
        return Aff.Bind(aff, function(value) {
          return Aff.Pure(f(value));
        });
      }
    };
  }
  function _bind(aff) {
    return function(k) {
      return Aff.Bind(aff, k);
    };
  }
  var _liftEffect = Aff.Sync;
  function _parAffMap(f) {
    return function(aff) {
      return Aff.ParMap(f, aff);
    };
  }
  function _parAffApply(aff1) {
    return function(aff2) {
      return Aff.ParApply(aff1, aff2);
    };
  }
  var makeAff = Aff.Async;
  function _makeFiber(util2, aff) {
    return function() {
      return Aff.Fiber(util2, null, aff);
    };
  }
  var _delay = function() {
    function setDelay(n, k) {
      if (n === 0 && typeof setImmediate !== "undefined") {
        return setImmediate(k);
      } else {
        return setTimeout(k, n);
      }
    }
    function clearDelay(n, t) {
      if (n === 0 && typeof clearImmediate !== "undefined") {
        return clearImmediate(t);
      } else {
        return clearTimeout(t);
      }
    }
    return function(right, ms) {
      return Aff.Async(function(cb) {
        return function() {
          var timer = setDelay(ms, cb(right()));
          return function() {
            return Aff.Sync(function() {
              return right(clearDelay(ms, timer));
            });
          };
        };
      });
    };
  }();
  var _sequential = Aff.Seq;

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind5 = bind(dictMonad.Bind1());
    var pure5 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a) {
        return bind5(f)(function(f$prime) {
          return bind5(a)(function(a$prime) {
            return pure5(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Data.Semigroup/index.js
  var append = function(dict) {
    return dict.append;
  };

  // output/Control.Alt/index.js
  var alt = function(dict) {
    return dict.alt;
  };

  // output/Data.Bounded/foreign.js
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };

  // output/Data.Show/index.js
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };

  // output/Data.Maybe/index.js
  var identity3 = /* @__PURE__ */ identity(categoryFn);
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe$prime = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v(unit);
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 250, column 1 - line 250, column 62): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var fromMaybe$prime = function(a) {
    return maybe$prime(a)(identity3);
  };
  var altMaybe = {
    alt: function(v) {
      return function(v1) {
        if (v instanceof Nothing) {
          return v1;
        }
        ;
        return v;
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */ function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */ function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();
  var functorEither = {
    map: function(f) {
      return function(m) {
        if (m instanceof Left) {
          return new Left(m.value0);
        }
        ;
        if (m instanceof Right) {
          return new Right(f(m.value0));
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
      };
    }
  };
  var either = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Left) {
          return v(v2.value0);
        }
        ;
        if (v2 instanceof Right) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var hush = /* @__PURE__ */ function() {
    return either($$const(Nothing.value))(Just.create);
  }();

  // output/Effect/foreign.js
  var pureE = function(a) {
    return function() {
      return a;
    };
  };
  var bindE = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };

  // output/Data.Monoid/index.js
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name2, moduleName, init3) {
    var state2 = 0;
    var val;
    return function(lineNumber) {
      if (state2 === 2)
        return val;
      if (state2 === 1)
        throw new ReferenceError(name2 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state2 = 1;
      val = init3();
      state2 = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
    return {
      apply: ap(monadEffect),
      Functor0: function() {
        return $lazy_functorEffect(0);
      }
    };
  });
  var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);

  // output/Effect.Exception/foreign.js
  function error(msg) {
    return new Error(msg);
  }

  // output/Control.Monad.Error.Class/index.js
  var throwError = function(dict) {
    return dict.throwError;
  };

  // output/Data.Identity/index.js
  var Identity = function(x) {
    return x;
  };
  var functorIdentity = {
    map: function(f) {
      return function(m) {
        return f(m);
      };
    }
  };
  var applyIdentity = {
    apply: function(v) {
      return function(v1) {
        return v(v1);
      };
    },
    Functor0: function() {
      return functorIdentity;
    }
  };
  var bindIdentity = {
    bind: function(v) {
      return function(f) {
        return f(v);
      };
    },
    Apply0: function() {
      return applyIdentity;
    }
  };
  var applicativeIdentity = {
    pure: Identity,
    Apply0: function() {
      return applyIdentity;
    }
  };
  var monadIdentity = {
    Applicative0: function() {
      return applicativeIdentity;
    },
    Bind1: function() {
      return bindIdentity;
    }
  };

  // output/Effect.Ref/foreign.js
  var _new = function(val) {
    return function() {
      return { value: val };
    };
  };
  var read = function(ref) {
    return function() {
      return ref.value;
    };
  };
  var write = function(val) {
    return function(ref) {
      return function() {
        ref.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$new = _new;

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x) {
    return x;
  };

  // output/Control.Monad.Reader.Class/index.js
  var ask = function(dict) {
    return dict.ask;
  };
  var asks = function(dictMonadAsk) {
    var map4 = map(dictMonadAsk.Monad0().Bind1().Apply0().Functor0());
    var ask1 = ask(dictMonadAsk);
    return function(f) {
      return map4(f)(ask1);
    };
  };

  // output/Control.Monad.Trans.Class/index.js
  var lift = function(dict) {
    return dict.lift;
  };

  // output/Effect.Class/index.js
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

  // output/Control.Monad.Except.Trans/index.js
  var map2 = /* @__PURE__ */ map(functorEither);
  var ExceptT = function(x) {
    return x;
  };
  var runExceptT = function(v) {
    return v;
  };
  var mapExceptT = function(f) {
    return function(v) {
      return f(v);
    };
  };
  var functorExceptT = function(dictFunctor) {
    var map12 = map(dictFunctor);
    return {
      map: function(f) {
        return mapExceptT(map12(map2(f)));
      }
    };
  };
  var monadExceptT = function(dictMonad) {
    return {
      Applicative0: function() {
        return applicativeExceptT(dictMonad);
      },
      Bind1: function() {
        return bindExceptT(dictMonad);
      }
    };
  };
  var bindExceptT = function(dictMonad) {
    var bind5 = bind(dictMonad.Bind1());
    var pure5 = pure(dictMonad.Applicative0());
    return {
      bind: function(v) {
        return function(k) {
          return bind5(v)(either(function($187) {
            return pure5(Left.create($187));
          })(function(a) {
            var v1 = k(a);
            return v1;
          }));
        };
      },
      Apply0: function() {
        return applyExceptT(dictMonad);
      }
    };
  };
  var applyExceptT = function(dictMonad) {
    var functorExceptT1 = functorExceptT(dictMonad.Bind1().Apply0().Functor0());
    return {
      apply: ap(monadExceptT(dictMonad)),
      Functor0: function() {
        return functorExceptT1;
      }
    };
  };
  var applicativeExceptT = function(dictMonad) {
    return {
      pure: function() {
        var $188 = pure(dictMonad.Applicative0());
        return function($189) {
          return ExceptT($188(Right.create($189)));
        };
      }(),
      Apply0: function() {
        return applyExceptT(dictMonad);
      }
    };
  };
  var monadThrowExceptT = function(dictMonad) {
    var monadExceptT1 = monadExceptT(dictMonad);
    return {
      throwError: function() {
        var $198 = pure(dictMonad.Applicative0());
        return function($199) {
          return ExceptT($198(Left.create($199)));
        };
      }(),
      Monad0: function() {
        return monadExceptT1;
      }
    };
  };

  // output/Control.Plus/index.js
  var empty = function(dict) {
    return dict.empty;
  };

  // output/Safe.Coerce/index.js
  var coerce = function() {
    return unsafeCoerce2;
  };

  // output/Data.Newtype/index.js
  var coerce2 = /* @__PURE__ */ coerce();
  var unwrap = function() {
    return coerce2;
  };

  // output/Control.Monad.Reader.Trans/index.js
  var ReaderT = function(x) {
    return x;
  };
  var runReaderT = function(v) {
    return v;
  };
  var monadTransReaderT = {
    lift: function(dictMonad) {
      return function($147) {
        return ReaderT($$const($147));
      };
    }
  };
  var lift3 = /* @__PURE__ */ lift(monadTransReaderT);
  var mapReaderT = function(f) {
    return function(v) {
      return function($148) {
        return f(v($148));
      };
    };
  };
  var functorReaderT = function(dictFunctor) {
    return {
      map: function() {
        var $149 = map(dictFunctor);
        return function($150) {
          return mapReaderT($149($150));
        };
      }()
    };
  };
  var applyReaderT = function(dictApply) {
    var apply2 = apply(dictApply);
    var functorReaderT1 = functorReaderT(dictApply.Functor0());
    return {
      apply: function(v) {
        return function(v1) {
          return function(r) {
            return apply2(v(r))(v1(r));
          };
        };
      },
      Functor0: function() {
        return functorReaderT1;
      }
    };
  };
  var bindReaderT = function(dictBind) {
    var bind5 = bind(dictBind);
    var applyReaderT1 = applyReaderT(dictBind.Apply0());
    return {
      bind: function(v) {
        return function(k) {
          return function(r) {
            return bind5(v(r))(function(a) {
              var v1 = k(a);
              return v1(r);
            });
          };
        };
      },
      Apply0: function() {
        return applyReaderT1;
      }
    };
  };
  var applicativeReaderT = function(dictApplicative) {
    var applyReaderT1 = applyReaderT(dictApplicative.Apply0());
    return {
      pure: function() {
        var $154 = pure(dictApplicative);
        return function($155) {
          return ReaderT($$const($154($155)));
        };
      }(),
      Apply0: function() {
        return applyReaderT1;
      }
    };
  };
  var monadReaderT = function(dictMonad) {
    var applicativeReaderT1 = applicativeReaderT(dictMonad.Applicative0());
    var bindReaderT1 = bindReaderT(dictMonad.Bind1());
    return {
      Applicative0: function() {
        return applicativeReaderT1;
      },
      Bind1: function() {
        return bindReaderT1;
      }
    };
  };
  var monadAskReaderT = function(dictMonad) {
    var monadReaderT1 = monadReaderT(dictMonad);
    return {
      ask: pure(dictMonad.Applicative0()),
      Monad0: function() {
        return monadReaderT1;
      }
    };
  };
  var monadEffectReader = function(dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var monadReaderT1 = monadReaderT(Monad0);
    return {
      liftEffect: function() {
        var $157 = lift3(Monad0);
        var $158 = liftEffect(dictMonadEffect);
        return function($159) {
          return $157($158($159));
        };
      }(),
      Monad0: function() {
        return monadReaderT1;
      }
    };
  };

  // output/Control.Parallel.Class/index.js
  var sequential = function(dict) {
    return dict.sequential;
  };
  var parallel = function(dict) {
    return dict.parallel;
  };

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init3) {
      return function(xs) {
        var acc = init3;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init3) {
      return function(xs) {
        var acc = init3;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };

  // output/Data.Foldable/index.js
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond2 = applySecond(dictApplicative.Apply0());
    var pure5 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr22 = foldr(dictFoldable);
      return function(f) {
        return foldr22(function($454) {
          return applySecond2(f($454));
        })(pure5(unit));
      };
    };
  };
  var foldl = function(dict) {
    return dict.foldl;
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr22 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append2 = append(dictMonoid.Semigroup0());
      var mempty3 = mempty(dictMonoid);
      return function(f) {
        return foldr22(function(x) {
          return function(acc) {
            return append2(f(x))(acc);
          };
        })(mempty3);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };

  // output/Data.Traversable/foreign.js
  var traverseArrayImpl = function() {
    function array1(a) {
      return [a];
    }
    function array2(a) {
      return function(b) {
        return [a, b];
      };
    }
    function array3(a) {
      return function(b) {
        return function(c) {
          return [a, b, c];
        };
      };
    }
    function concat2(xs) {
      return function(ys) {
        return xs.concat(ys);
      };
    }
    return function(apply2) {
      return function(map4) {
        return function(pure5) {
          return function(f) {
            return function(array) {
              function go(bot, top2) {
                switch (top2 - bot) {
                  case 0:
                    return pure5([]);
                  case 1:
                    return map4(array1)(f(array[bot]));
                  case 2:
                    return apply2(map4(array2)(f(array[bot])))(f(array[bot + 1]));
                  case 3:
                    return apply2(apply2(map4(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                  default:
                    var pivot = bot + Math.floor((top2 - bot) / 4) * 2;
                    return apply2(map4(concat2)(go(bot, pivot)))(go(pivot, top2));
                }
              }
              return go(0, array.length);
            };
          };
        };
      };
    };
  }();

  // output/Control.Parallel/index.js
  var identity4 = /* @__PURE__ */ identity(categoryFn);
  var parTraverse_ = function(dictParallel) {
    var sequential2 = sequential(dictParallel);
    var traverse_2 = traverse_(dictParallel.Applicative1());
    var parallel2 = parallel(dictParallel);
    return function(dictFoldable) {
      var traverse_1 = traverse_2(dictFoldable);
      return function(f) {
        var $48 = traverse_1(function($50) {
          return parallel2(f($50));
        });
        return function($49) {
          return sequential2($48($49));
        };
      };
    };
  };
  var parSequence_ = function(dictParallel) {
    var parTraverse_1 = parTraverse_(dictParallel);
    return function(dictFoldable) {
      return parTraverse_1(dictFoldable)(identity4);
    };
  };

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial = function(f) {
    return f();
  };

  // output/Partial/foreign.js
  var _crashWith = function(msg) {
    throw new Error(msg);
  };

  // output/Partial/index.js
  var crashWith = function() {
    return _crashWith;
  };

  // output/Partial.Unsafe/index.js
  var crashWith2 = /* @__PURE__ */ crashWith();
  var unsafePartial = _unsafePartial;
  var unsafeCrashWith = function(msg) {
    return unsafePartial(function() {
      return crashWith2(msg);
    });
  };

  // output/Effect.Aff/index.js
  var $runtime_lazy2 = function(name2, moduleName, init3) {
    var state2 = 0;
    var val;
    return function(lineNumber) {
      if (state2 === 2)
        return val;
      if (state2 === 1)
        throw new ReferenceError(name2 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state2 = 1;
      val = init3();
      state2 = 2;
      return val;
    };
  };
  var $$void2 = /* @__PURE__ */ $$void(functorEffect);
  var functorParAff = {
    map: _parAffMap
  };
  var functorAff = {
    map: _map
  };
  var ffiUtil = /* @__PURE__ */ function() {
    var unsafeFromRight = function(v) {
      if (v instanceof Right) {
        return v.value0;
      }
      ;
      if (v instanceof Left) {
        return unsafeCrashWith("unsafeFromRight: Left");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v.constructor.name]);
    };
    var unsafeFromLeft = function(v) {
      if (v instanceof Left) {
        return v.value0;
      }
      ;
      if (v instanceof Right) {
        return unsafeCrashWith("unsafeFromLeft: Right");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v.constructor.name]);
    };
    var isLeft = function(v) {
      if (v instanceof Left) {
        return true;
      }
      ;
      if (v instanceof Right) {
        return false;
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v.constructor.name]);
    };
    return {
      isLeft,
      fromLeft: unsafeFromLeft,
      fromRight: unsafeFromRight,
      left: Left.create,
      right: Right.create
    };
  }();
  var makeFiber = function(aff) {
    return _makeFiber(ffiUtil, aff);
  };
  var launchAff = function(aff) {
    return function __do() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var launchAff_ = function($74) {
    return $$void2(launchAff($74));
  };
  var applyParAff = {
    apply: _parAffApply,
    Functor0: function() {
      return functorParAff;
    }
  };
  var monadAff = {
    Applicative0: function() {
      return applicativeAff;
    },
    Bind1: function() {
      return bindAff;
    }
  };
  var bindAff = {
    bind: _bind,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var applicativeAff = {
    pure: _pure,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var $lazy_applyAff = /* @__PURE__ */ $runtime_lazy2("applyAff", "Effect.Aff", function() {
    return {
      apply: ap(monadAff),
      Functor0: function() {
        return functorAff;
      }
    };
  });
  var pure2 = /* @__PURE__ */ pure(applicativeAff);
  var monadEffectAff = {
    liftEffect: _liftEffect,
    Monad0: function() {
      return monadAff;
    }
  };
  var parallelAff = {
    parallel: unsafeCoerce2,
    sequential: _sequential,
    Monad0: function() {
      return monadAff;
    },
    Applicative1: function() {
      return $lazy_applicativeParAff(0);
    }
  };
  var $lazy_applicativeParAff = /* @__PURE__ */ $runtime_lazy2("applicativeParAff", "Effect.Aff", function() {
    return {
      pure: function() {
        var $82 = parallel(parallelAff);
        return function($83) {
          return $82(pure2($83));
        };
      }(),
      Apply0: function() {
        return applyParAff;
      }
    };
  });
  var parSequence_2 = /* @__PURE__ */ parSequence_(parallelAff)(foldableArray);
  var semigroupCanceler = {
    append: function(v) {
      return function(v1) {
        return function(err) {
          return parSequence_2([v(err), v1(err)]);
        };
      };
    }
  };
  var nonCanceler = /* @__PURE__ */ $$const(/* @__PURE__ */ pure2(unit));
  var monoidCanceler = {
    mempty: nonCanceler,
    Semigroup0: function() {
      return semigroupCanceler;
    }
  };

  // output/Effect.Aff.Class/index.js
  var lift4 = /* @__PURE__ */ lift(monadTransReaderT);
  var monadAffAff = {
    liftAff: /* @__PURE__ */ identity(categoryFn),
    MonadEffect0: function() {
      return monadEffectAff;
    }
  };
  var liftAff = function(dict) {
    return dict.liftAff;
  };
  var monadAffReader = function(dictMonadAff) {
    var MonadEffect0 = dictMonadAff.MonadEffect0();
    var monadEffectReader3 = monadEffectReader(MonadEffect0);
    return {
      liftAff: function() {
        var $79 = lift4(MonadEffect0.Monad0());
        var $80 = liftAff(dictMonadAff);
        return function($81) {
          return $79($80($81));
        };
      }(),
      MonadEffect0: function() {
        return monadEffectReader3;
      }
    };
  };

  // output/Control.Monad.Except/index.js
  var unwrap2 = /* @__PURE__ */ unwrap();
  var runExcept = function($3) {
    return unwrap2(runExceptT($3));
  };

  // output/Foreign/foreign.js
  function tagOf(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
  }
  var isArray = Array.isArray || function(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  };

  // output/Data.NonEmpty/index.js
  var NonEmpty = /* @__PURE__ */ function() {
    function NonEmpty2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    NonEmpty2.create = function(value0) {
      return function(value1) {
        return new NonEmpty2(value0, value1);
      };
    };
    return NonEmpty2;
  }();
  var singleton2 = function(dictPlus) {
    var empty2 = empty(dictPlus);
    return function(a) {
      return new NonEmpty(a, empty2);
    };
  };

  // output/Data.List.Types/index.js
  var Nil = /* @__PURE__ */ function() {
    function Nil2() {
    }
    ;
    Nil2.value = new Nil2();
    return Nil2;
  }();
  var Cons = /* @__PURE__ */ function() {
    function Cons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons2.create = function(value0) {
      return function(value1) {
        return new Cons2(value0, value1);
      };
    };
    return Cons2;
  }();
  var NonEmptyList = function(x) {
    return x;
  };
  var listMap = function(f) {
    var chunkedRevMap = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Cons)) {
            $tco_var_v = new Cons(v1, v);
            $copy_v1 = v1.value1.value1.value1;
            return;
          }
          ;
          var unrolledMap = function(v2) {
            if (v2 instanceof Cons && (v2.value1 instanceof Cons && v2.value1.value1 instanceof Nil)) {
              return new Cons(f(v2.value0), new Cons(f(v2.value1.value0), Nil.value));
            }
            ;
            if (v2 instanceof Cons && v2.value1 instanceof Nil) {
              return new Cons(f(v2.value0), Nil.value);
            }
            ;
            return Nil.value;
          };
          var reverseUnrolledMap = function($copy_v2) {
            return function($copy_v3) {
              var $tco_var_v2 = $copy_v2;
              var $tco_done1 = false;
              var $tco_result2;
              function $tco_loop2(v2, v3) {
                if (v2 instanceof Cons && (v2.value0 instanceof Cons && (v2.value0.value1 instanceof Cons && v2.value0.value1.value1 instanceof Cons))) {
                  $tco_var_v2 = v2.value1;
                  $copy_v3 = new Cons(f(v2.value0.value0), new Cons(f(v2.value0.value1.value0), new Cons(f(v2.value0.value1.value1.value0), v3)));
                  return;
                }
                ;
                $tco_done1 = true;
                return v3;
              }
              ;
              while (!$tco_done1) {
                $tco_result2 = $tco_loop2($tco_var_v2, $copy_v3);
              }
              ;
              return $tco_result2;
            };
          };
          $tco_done = true;
          return reverseUnrolledMap(v)(unrolledMap(v1));
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return chunkedRevMap(Nil.value);
  };
  var functorList = {
    map: listMap
  };
  var foldableList = {
    foldr: function(f) {
      return function(b) {
        var rev = function() {
          var go = function($copy_v) {
            return function($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return v;
                }
                ;
                if (v1 instanceof Cons) {
                  $tco_var_v = new Cons(v1.value0, v);
                  $copy_v1 = v1.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
          return go(Nil.value);
        }();
        var $284 = foldl(foldableList)(flip(f))(b);
        return function($285) {
          return $284(rev($285));
        };
      };
    },
    foldl: function(f) {
      var go = function($copy_b) {
        return function($copy_v) {
          var $tco_var_b = $copy_b;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(b, v) {
            if (v instanceof Nil) {
              $tco_done1 = true;
              return b;
            }
            ;
            if (v instanceof Cons) {
              $tco_var_b = f(b)(v.value0);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_b, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
      return go;
    },
    foldMap: function(dictMonoid) {
      var append2 = append(dictMonoid.Semigroup0());
      var mempty3 = mempty(dictMonoid);
      return function(f) {
        return foldl(foldableList)(function(acc) {
          var $286 = append2(acc);
          return function($287) {
            return $286(f($287));
          };
        })(mempty3);
      };
    }
  };
  var foldr2 = /* @__PURE__ */ foldr(foldableList);
  var semigroupList = {
    append: function(xs) {
      return function(ys) {
        return foldr2(Cons.create)(ys)(xs);
      };
    }
  };
  var append1 = /* @__PURE__ */ append(semigroupList);
  var altList = {
    alt: append1,
    Functor0: function() {
      return functorList;
    }
  };
  var plusList = /* @__PURE__ */ function() {
    return {
      empty: Nil.value,
      Alt0: function() {
        return altList;
      }
    };
  }();

  // output/Data.List.NonEmpty/index.js
  var singleton3 = /* @__PURE__ */ function() {
    var $200 = singleton2(plusList);
    return function($201) {
      return NonEmptyList($200($201));
    };
  }();

  // output/Foreign/index.js
  var TypeMismatch = /* @__PURE__ */ function() {
    function TypeMismatch2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    TypeMismatch2.create = function(value0) {
      return function(value1) {
        return new TypeMismatch2(value0, value1);
      };
    };
    return TypeMismatch2;
  }();
  var unsafeToForeign = unsafeCoerce2;
  var unsafeFromForeign = unsafeCoerce2;
  var fail = function(dictMonad) {
    var $153 = throwError(monadThrowExceptT(dictMonad));
    return function($154) {
      return $153(singleton3($154));
    };
  };
  var unsafeReadTagged = function(dictMonad) {
    var pure1 = pure(applicativeExceptT(dictMonad));
    var fail1 = fail(dictMonad);
    return function(tag) {
      return function(value) {
        if (tagOf(value) === tag) {
          return pure1(unsafeFromForeign(value));
        }
        ;
        if (otherwise) {
          return fail1(new TypeMismatch(tag, tagOf(value)));
        }
        ;
        throw new Error("Failed pattern match at Foreign (line 123, column 1 - line 123, column 104): " + [tag.constructor.name, value.constructor.name]);
      };
    };
  };
  var readString = function(dictMonad) {
    return unsafeReadTagged(dictMonad)("String");
  };

  // output/Effect.Uncurried/foreign.js
  var mkEffectFn1 = function mkEffectFn12(fn) {
    return function(x) {
      return fn(x)();
    };
  };

  // output/Promise.Internal/foreign.js
  function thenOrCatch(k, c, p) {
    return p.then(k, c);
  }
  function resolve(a) {
    return Promise.resolve(a);
  }

  // output/Promise.Rejection/foreign.js
  function _toError(just, nothing, ref) {
    if (ref instanceof Error) {
      return just(ref);
    }
    return nothing;
  }

  // output/Promise.Rejection/index.js
  var toError = /* @__PURE__ */ function() {
    return runFn3(_toError)(Just.create)(Nothing.value);
  }();

  // output/Promise/index.js
  var thenOrCatch2 = function() {
    return function(k) {
      return function(c) {
        return function(p) {
          return function() {
            return thenOrCatch(mkEffectFn1(k), mkEffectFn1(c), p);
          };
        };
      };
    };
  };
  var resolve2 = function() {
    return resolve;
  };

  // output/Promise.Aff/index.js
  var voidRight2 = /* @__PURE__ */ voidRight(functorEffect);
  var mempty2 = /* @__PURE__ */ mempty(monoidCanceler);
  var thenOrCatch3 = /* @__PURE__ */ thenOrCatch2();
  var map3 = /* @__PURE__ */ map(functorEffect);
  var resolve3 = /* @__PURE__ */ resolve2();
  var alt2 = /* @__PURE__ */ alt(altMaybe);
  var map1 = /* @__PURE__ */ map(functorMaybe);
  var readString2 = /* @__PURE__ */ readString(monadIdentity);
  var bind2 = /* @__PURE__ */ bind(bindAff);
  var liftEffect2 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var toAff$prime = function(customCoerce) {
    return function(p) {
      return makeAff(function(cb) {
        return voidRight2(mempty2)(thenOrCatch3(function(a) {
          return map3(resolve3)(cb(new Right(a)));
        })(function(e) {
          return map3(resolve3)(cb(new Left(customCoerce(e))));
        })(p));
      });
    };
  };
  var coerce3 = function(rej) {
    return fromMaybe$prime(function(v) {
      return error("Promise failed, couldn't extract JS Error or String");
    })(alt2(toError(rej))(map1(error)(hush(runExcept(readString2(unsafeToForeign(rej)))))));
  };
  var toAff = /* @__PURE__ */ toAff$prime(coerce3);
  var toAffE = function(f) {
    return bind2(liftEffect2(f))(toAff);
  };

  // output/Z3.Base/foreign.js
  var import_z3_solver = __toESM(require_browser(), 1);
  var initz3 = import_z3_solver.init;
  var context = (name2) => (z3) => () => new z3.Context(name2);
  var solver = (ctx) => () => new ctx.Solver();
  var solverAdd = (v) => (solver2) => () => solver2.add(v);
  var solverCheck = (solver2) => () => solver2.check();
  var mkIntVar = (context2) => (name2) => () => context2.Int.const(name2);
  var unsafeLe = (a) => (b) => () => a.le(b);
  var unsafeGe = (a) => (b) => () => a.ge(b);
  var unsafeAdd = (a) => (b) => () => a.add(b);

  // output/Z3/index.js
  var monadEffectReader2 = /* @__PURE__ */ monadEffectReader(monadEffectAff);
  var bindReaderT2 = /* @__PURE__ */ bindReaderT(bindAff);
  var applicativeReaderT2 = /* @__PURE__ */ applicativeReaderT(applicativeAff);
  var asks2 = /* @__PURE__ */ asks(/* @__PURE__ */ monadAskReaderT(monadAff));
  var bind3 = /* @__PURE__ */ bind(bindReaderT2);
  var liftEffect3 = /* @__PURE__ */ liftEffect(monadEffectReader2);
  var discard3 = /* @__PURE__ */ discard(discardUnit)(bindReaderT2);
  var pure3 = /* @__PURE__ */ pure(applicativeReaderT2);
  var show2 = /* @__PURE__ */ show(showInt);
  var bind1 = /* @__PURE__ */ bind(bindAff);
  var liftEffect1 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var monadZ3 = /* @__PURE__ */ monadReaderT(monadAff);
  var monadEffectZ3 = monadEffectReader2;
  var monadAffZ3 = /* @__PURE__ */ monadAffReader(monadAffAff);
  var bindZ3 = bindReaderT2;
  var arithZ3IntZ3Int = {
    le: function(dictMonadZ3) {
      var liftEffect22 = liftEffect(dictMonadZ3.MonadAff3().MonadEffect0());
      return function(a) {
        return function(b) {
          return liftEffect22(unsafeLe(a)(b));
        };
      };
    },
    ge: function(dictMonadZ3) {
      var liftEffect22 = liftEffect(dictMonadZ3.MonadAff3().MonadEffect0());
      return function(a) {
        return function(b) {
          return liftEffect22(unsafeGe(a)(b));
        };
      };
    },
    add: function(dictMonadZ3) {
      var liftEffect22 = liftEffect(dictMonadZ3.MonadAff3().MonadEffect0());
      return function(a) {
        return function(b) {
          return liftEffect22(unsafeAdd(a)(b));
        };
      };
    }
  };
  var applicativeZ3 = applicativeReaderT2;
  var monadZ3Z3 = {
    getSolver: /* @__PURE__ */ asks2(function(v) {
      return v.solver;
    }),
    getContext: /* @__PURE__ */ asks2(function(v) {
      return v.context;
    }),
    freshName: /* @__PURE__ */ bind3(/* @__PURE__ */ asks2(function(v) {
      return v.counter;
    }))(function(c) {
      return bind3(liftEffect3(read(c)))(function(v) {
        return discard3(liftEffect3(write(v + 1 | 0)(c)))(function() {
          return pure3("x_" + show2(v));
        });
      });
    }),
    Applicative0: function() {
      return applicativeZ3;
    },
    Monad1: function() {
      return monadZ3;
    },
    MonadEffect2: function() {
      return monadEffectZ3;
    },
    MonadAff3: function() {
      return monadAffZ3;
    }
  };
  var run2 = function(name2) {
    return function(v) {
      return bind1(toAffE(initz3))(function(z3) {
        return bind1(liftEffect1(context(name2)(z3)))(function(ctx) {
          return bind1(liftEffect1(solver(ctx)))(function(slv) {
            return bind1(liftEffect1($$new(0)))(function(ref) {
              return runReaderT(v)({
                context: ctx,
                solver: slv,
                counter: ref
              });
            });
          });
        });
      });
    };
  };
  var getSolver = function(dict) {
    return dict.getSolver;
  };
  var getContext = function(dict) {
    return dict.getContext;
  };
  var ge = function(dict) {
    return dict.ge;
  };
  var freshName = function(dict) {
    return dict.freshName;
  };
  var intVar = function(dictMonadZ3) {
    var MonadEffect0 = dictMonadZ3.MonadAff3().MonadEffect0();
    var bind22 = bind(MonadEffect0.Monad0().Bind1());
    var freshName1 = freshName(dictMonadZ3);
    var liftEffect22 = liftEffect(MonadEffect0);
    return bind22(getContext(dictMonadZ3))(function(ctx) {
      return bind22(freshName1)(function(name2) {
        return liftEffect22(mkIntVar(ctx)(name2));
      });
    });
  };
  var check = function(dictMonadZ3) {
    var MonadAff3 = dictMonadZ3.MonadAff3();
    var liftAff2 = liftAff(MonadAff3);
    return bind(MonadAff3.MonadEffect0().Monad0().Bind1())(getSolver(dictMonadZ3))(function(solver2) {
      return liftAff2(toAffE(solverCheck(solver2)));
    });
  };
  var assert = function(dictMonadZ3) {
    var MonadEffect0 = dictMonadZ3.MonadAff3().MonadEffect0();
    var bind22 = bind(MonadEffect0.Monad0().Bind1());
    var getSolver1 = getSolver(dictMonadZ3);
    var liftEffect22 = liftEffect(MonadEffect0);
    return function(v) {
      return bind22(getSolver1)(function(solver2) {
        return liftEffect22(solverAdd(v)(solver2));
      });
    };
  };
  var add2 = function(dict) {
    return dict.add;
  };

  // output/Test.Main/index.js
  var bind4 = /* @__PURE__ */ bind(bindZ3);
  var intVar2 = /* @__PURE__ */ intVar(monadZ3Z3);
  var discard4 = /* @__PURE__ */ discard(discardUnit)(bindZ3);
  var bindFlipped2 = /* @__PURE__ */ bindFlipped(bindZ3);
  var assert2 = /* @__PURE__ */ assert(monadZ3Z3);
  var ge2 = /* @__PURE__ */ ge(arithZ3IntZ3Int)(monadZ3Z3);
  var add3 = /* @__PURE__ */ add2(arithZ3IntZ3Int)(monadZ3Z3);
  var check2 = /* @__PURE__ */ check(monadZ3Z3);
  var traceM2 = /* @__PURE__ */ traceM()(monadZ3);
  var pure4 = /* @__PURE__ */ pure(applicativeZ3);
  var main = /* @__PURE__ */ launchAff_(/* @__PURE__ */ run2("main")(/* @__PURE__ */ bind4(intVar2)(function(x) {
    return bind4(intVar2)(function(y) {
      return discard4(bindFlipped2(assert2)(bindFlipped2(ge2(x))(add3(x)(y))))(function() {
        return bind4(check2)(function(s) {
          return discard4(traceM2(s))(function() {
            return pure4(unit);
          });
        });
      });
    });
  })));

  // <stdin>
  main();
})();
