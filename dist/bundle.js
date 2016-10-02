webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	__webpack_require__(2);
	
	var _Root = __webpack_require__(299);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(406);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactTapEventPlugin = __webpack_require__(1113);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactTapEventPlugin2.default)();
	
	_reactDom2.default.render(_react2.default.createElement(_Root2.default, null), document.getElementById('react-view'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(3);
	
	__webpack_require__(294);
	
	__webpack_require__(296);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(295)))

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(297);
	module.exports = __webpack_require__(10).RegExp.escape;

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routes = __webpack_require__(332);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _reactRedux = __webpack_require__(546);
	
	var _store = __webpack_require__(1102);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Routes = (0, _routes2.default)(_store2.default);
	
	var Root = function Root() {
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: _store2.default },
	    _react2.default.createElement(Routes, null)
	  );
	};
	
	exports.default = Root;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Root.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(333);
	
	var _reactRouterRedux = __webpack_require__(396);
	
	var _reactRouterApplyMiddleware = __webpack_require__(401);
	
	var _reactRouterApplyMiddleware2 = _interopRequireDefault(_reactRouterApplyMiddleware);
	
	var _reactRouterRelativeLinks = __webpack_require__(402);
	
	var _view = __webpack_require__(404);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = {
	    path: '/',
	    component: (0, _reactRouter.withRouter)(_view.App),
	    indexRoute: { component: _view.Landing },
	    childRoutes: [{ path: "home", component: _view.Home }]
	};
	
	exports.default = function (store) {
	    return function () {
	        return _react2.default.createElement(_reactRouter.Router, { routes: routes,
	            history: (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store),
	            render: (0, _reactRouterApplyMiddleware2.default)((0, _reactRouterRelativeLinks.useRelativeLinks)()) });
	    };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;
	
	var _RouteUtils = __webpack_require__(334);
	
	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});
	
	var _PropTypes2 = __webpack_require__(335);
	
	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});
	
	var _PatternUtils = __webpack_require__(340);
	
	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});
	
	var _Router2 = __webpack_require__(342);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Link2 = __webpack_require__(373);
	
	var _Link3 = _interopRequireDefault(_Link2);
	
	var _IndexLink2 = __webpack_require__(374);
	
	var _IndexLink3 = _interopRequireDefault(_IndexLink2);
	
	var _withRouter2 = __webpack_require__(375);
	
	var _withRouter3 = _interopRequireDefault(_withRouter2);
	
	var _IndexRedirect2 = __webpack_require__(377);
	
	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);
	
	var _IndexRoute2 = __webpack_require__(379);
	
	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);
	
	var _Redirect2 = __webpack_require__(378);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	var _Route2 = __webpack_require__(380);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _History2 = __webpack_require__(381);
	
	var _History3 = _interopRequireDefault(_History2);
	
	var _Lifecycle2 = __webpack_require__(382);
	
	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);
	
	var _RouteContext2 = __webpack_require__(383);
	
	var _RouteContext3 = _interopRequireDefault(_RouteContext2);
	
	var _useRoutes2 = __webpack_require__(384);
	
	var _useRoutes3 = _interopRequireDefault(_useRoutes2);
	
	var _RouterContext2 = __webpack_require__(370);
	
	var _RouterContext3 = _interopRequireDefault(_RouterContext2);
	
	var _RoutingContext2 = __webpack_require__(385);
	
	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);
	
	var _PropTypes3 = _interopRequireDefault(_PropTypes2);
	
	var _match2 = __webpack_require__(386);
	
	var _match3 = _interopRequireDefault(_match2);
	
	var _useRouterHistory2 = __webpack_require__(390);
	
	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);
	
	var _applyRouterMiddleware2 = __webpack_require__(391);
	
	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);
	
	var _browserHistory2 = __webpack_require__(392);
	
	var _browserHistory3 = _interopRequireDefault(_browserHistory2);
	
	var _hashHistory2 = __webpack_require__(395);
	
	var _hashHistory3 = _interopRequireDefault(_hashHistory2);
	
	var _createMemoryHistory2 = __webpack_require__(387);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Router = _Router3.default; /* components */
	
	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;
	
	/* components (configuration) */
	
	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	
	/* mixins */
	
	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;
	
	/* utils */
	
	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;
	
	/* histories */
	
	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}
	
	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}
	
	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}
	
	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);
	
	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);
	
	    if (childRoutes.length) route.childRoutes = childRoutes;
	
	    delete route.children;
	  }
	
	  return route;
	}
	
	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];
	
	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);
	
	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });
	
	  return routes;
	}
	
	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }
	
	  return routes;
	}

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;
	
	var _react = __webpack_require__(300);
	
	var _deprecateObjectProperties = __webpack_require__(336);
	
	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
	
	var _InternalPropTypes = __webpack_require__(339);
	
	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});
	
	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});
	
	// Deprecated stuff below:
	
	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };
	
	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };
	
	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };
	
	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);
	
	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}
	
	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}
	
	exports.default = defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.canUseMembrane = undefined;
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canUseMembrane = exports.canUseMembrane = false;
	
	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	
	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};
	
	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }
	
	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }
	
	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };
	
	      for (var prop in object) {
	        var _ret = _loop(prop);
	
	        if (_ret === 'continue') continue;
	      }
	
	      return membrane;
	    };
	  }
	}
	
	exports.default = deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;
	
	var _warning = __webpack_require__(338);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {};
	
	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }
	
	    warned[message] = true;
	  }
	
	  message = '[react-router] ' + message;
	
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}
	
	function _resetWarned() {
	  warned = {};
	}

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;
	
	var _react = __webpack_require__(300);
	
	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}
	
	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});
	
	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	
	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];
	
	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }
	
	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }
	
	    tokens.push(match[0]);
	
	    lastIndex = matcher.lastIndex;
	  }
	
	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }
	
	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}
	
	var CompiledPatternsCache = Object.create(null);
	
	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);
	
	  return CompiledPatternsCache[pattern];
	}
	
	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	
	  var _compilePattern2 = compilePattern(pattern);
	
	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;
	
	
	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }
	
	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }
	
	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }
	
	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);
	
	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }
	
	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }
	
	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}
	
	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}
	
	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }
	
	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;
	
	  var params = {};
	
	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });
	
	  return params;
	}
	
	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};
	
	  var _compilePattern3 = compilePattern(pattern);
	
	  var tokens = _compilePattern3.tokens;
	
	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;
	
	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];
	
	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;
	
	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;
	
	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }
	
	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createHashHistory = __webpack_require__(343);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _useQueries = __webpack_require__(359);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createTransitionManager = __webpack_require__(362);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _InternalPropTypes = __webpack_require__(339);
	
	var _RouterContext = __webpack_require__(370);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _RouteUtils = __webpack_require__(334);
	
	var _RouterUtils = __webpack_require__(372);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}
	
	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}
	
	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */
	
	var Router = _react2.default.createClass({
	  displayName: 'Router',
	
	
	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,
	
	    // Deprecated:
	    parseQueryString: func,
	    stringifyQuery: func,
	
	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;
	
	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;
	
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;
	
	    var _createRouterObjects = this.createRouterObjects();
	
	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;
	
	
	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	
	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;
	
	    if (matchContext) {
	      return matchContext;
	    }
	
	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;
	
	
	    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;
	
	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }
	
	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);
	
	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;
	
	
	    var createHistory = void 0;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }
	
	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },
	
	
	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;
	
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;
	
	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);
	
	    if (location == null) return null; // Async match
	
	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });
	
	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});
	
	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(345);
	
	var _PathUtils = __webpack_require__(346);
	
	var _ExecutionEnvironment = __webpack_require__(347);
	
	var _DOMUtils = __webpack_require__(348);
	
	var _DOMStateStorage = __webpack_require__(349);
	
	var _createDOMHistory = __webpack_require__(350);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}
	
	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();
	
	  if (isAbsolutePath(path)) return true;
	
	  _DOMUtils.replaceHashPath('/' + path);
	
	  return false;
	}
	
	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}
	
	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}
	
	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}
	
	var DefaultQueryKey = '_k';
	
	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;
	
	  var queryKey = options.queryKey;
	
	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;
	
	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();
	
	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);
	
	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }
	
	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.
	
	      transitionTo(getCurrentLocation());
	    }
	
	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    var path = (basename || '') + pathname + search;
	
	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }
	
	    var currentHash = _DOMUtils.getHashPath();
	
	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopHashChangeListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }
	
	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.push(location);
	  }
	
	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.replace(location);
	  }
	
	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();
	
	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
	
	    history.go(n);
	  }
	
	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopHashChangeListener();
	  }
	
	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.pushState(state, path);
	  }
	
	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;
	
	    history.replaceState(state, path);
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,
	
	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}
	
	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 345:
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';
	
	exports.__esModule = true;
	var PUSH = 'PUSH';
	
	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';
	
	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';
	
	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);
	
	  if (match == null) return string;
	
	  return string.substring(match[0].length);
	}
	
	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';
	
	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }
	
	  if (pathname === '') pathname = '/';
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 347:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },

/***/ 348:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;
	
	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}
	
	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}
	
	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}
	
	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}
	
	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}
	
	function go(n) {
	  if (n) window.history.go(n);
	}
	
	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}
	
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */
	
	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}
	
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	
	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';
	
	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];
	
	var SecurityError = 'SecurityError';
	
	function createKey(key) {
	  return KeyPrefix + key;
	}
	
	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;
	
	      return;
	    }
	
	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;
	
	      return;
	    }
	
	    throw error;
	  }
	}
	
	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;
	
	      return null;
	    }
	  }
	
	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }
	
	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment = __webpack_require__(347);
	
	var _DOMUtils = __webpack_require__(348);
	
	var _createHistory = __webpack_require__(351);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));
	
	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;
	
	    return history.listen(listener);
	  }
	
	  return _extends({}, history, {
	    listen: listen
	  });
	}
	
	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _deepEqual = __webpack_require__(352);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _PathUtils = __webpack_require__(346);
	
	var _AsyncUtils = __webpack_require__(355);
	
	var _Actions = __webpack_require__(345);
	
	var _createLocation2 = __webpack_require__(356);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	var _runTransitionHook = __webpack_require__(357);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _deprecate = __webpack_require__(358);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}
	
	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}
	
	var DefaultKeyLength = 6;
	
	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;
	
	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;
	
	  var transitionHooks = [];
	
	  function listenBefore(hook) {
	    transitionHooks.push(hook);
	
	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }
	
	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;
	
	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }
	
	  function updateLocation(newLocation) {
	    var current = getCurrent();
	
	    location = newLocation;
	
	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }
	
	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }
	
	  function listen(listener) {
	    changeListeners.push(listener);
	
	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }
	
	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }
	
	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }
	
	  var pendingLocation = undefined;
	
	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.
	
	    pendingLocation = nextLocation;
	
	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.
	
	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);
	
	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }
	
	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);
	
	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }
	
	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }
	
	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }
	
	  function goBack() {
	    go(-1);
	  }
	
	  function goForward() {
	    go(1);
	  }
	
	  function createKey() {
	    return createRandomKey(keyLength);
	  }
	
	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;
	
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	
	    var result = pathname;
	
	    if (search) result += search;
	
	    if (hash) result += hash;
	
	    return result;
	  }
	
	  function createHref(location) {
	    return createPath(location);
	  }
	
	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	
	    if (typeof action === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      location = _extends({}, location, { state: action });
	
	      action = key;
	      key = arguments[3] || createKey();
	    }
	
	    return _createLocation3['default'](location, action, key);
	  }
	
	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }
	
	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }
	
	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	    push(_extends({ state: state }, path));
	  }
	
	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	    replace(_extends({ state: state }, path));
	  }
	
	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,
	
	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}
	
	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(353);
	var isArguments = __webpack_require__(354);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },

/***/ 353:
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },

/***/ 354:
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },

/***/ 355:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;
	
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;
	
	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }
	
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) {
	      return;
	    }
	
	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }
	
	    sync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }
	
	    sync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }
	
	  next();
	}

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _Actions = __webpack_require__(345);
	
	var _PathUtils = __webpack_require__(346);
	
	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
	  if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	  if (typeof action === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;
	
	    location = _extends({}, location, { state: action });
	
	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }
	
	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}
	
	exports['default'] = createLocation;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);
	
	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}
	
	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}
	
	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _queryString = __webpack_require__(360);
	
	var _runTransitionHook = __webpack_require__(357);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _PathUtils = __webpack_require__(346);
	
	var _deprecate = __webpack_require__(358);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var SEARCH_BASE_KEY = '$searchBase';
	
	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}
	
	var defaultParseQueryString = _queryString.parse;
	
	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var history = createHistory(options);
	
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;
	
	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
	
	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;
	
	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;
	
	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }
	
	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.
	
	      return location;
	    }
	
	    function appendQuery(location, query) {
	      var _extends2;
	
	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }
	
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }
	
	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }
	
	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }
	
	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }
	
	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }
	
	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }
	
	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }
	
	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;
	
	      return history.createPath(appendQuery(location, query || location.query));
	    }
	
	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;
	
	      return history.createHref(appendQuery(location, query || location.query));
	    }
	
	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }
	
	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      push(_extends({ state: state }, path, { query: query }));
	    }
	
	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      replace(_extends({ state: state }, path, { query: query }));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,
	
	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}
	
	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(361);
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return {};
		}
	
		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
	
			return ret;
		}, {});
	};
	
	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return key;
			}
	
			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}
	
			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },

/***/ 361:
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = createTransitionManager;
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _computeChangedRoutes2 = __webpack_require__(363);
	
	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
	
	var _TransitionUtils = __webpack_require__(364);
	
	var _isActive2 = __webpack_require__(366);
	
	var _isActive3 = _interopRequireDefault(_isActive2);
	
	var _getComponents = __webpack_require__(367);
	
	var _getComponents2 = _interopRequireDefault(_getComponents);
	
	var _matchRoutes = __webpack_require__(369);
	
	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}
	
	function createTransitionManager(history, routes) {
	  var state = {};
	
	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }
	
	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }
	
	  var partialNextState = void 0;
	
	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }
	
	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);
	
	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;
	
	
	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);
	
	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);
	
	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
	
	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });
	
	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
	
	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }
	
	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }
	
	  var RouteGuid = 1;
	
	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }
	
	  var RouteHooks = Object.create(null);
	
	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }
	
	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }
	
	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });
	
	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);
	
	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }
	
	      callback(result);
	    });
	  }
	
	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);
	
	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }
	
	      return message;
	    }
	  }
	
	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;
	
	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }
	
	    delete RouteHooks[routeID];
	
	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }
	
	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }
	
	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];
	
	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	
	      RouteHooks[routeID] = [hook];
	
	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);
	
	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;
	
	        hooks.push(hook);
	      }
	    }
	
	    return function () {
	      var hooks = RouteHooks[routeID];
	
	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }
	
	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }
	
	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	
	//export default useRoutes
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(340);
	
	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;
	
	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);
	
	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}
	
	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;
	
	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });
	
	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();
	
	      enterRoutes = [];
	      changeRoutes = [];
	
	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;
	
	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }
	
	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}
	
	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;
	
	var _AsyncUtils = __webpack_require__(365);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    hook.apply(route, args);
	
	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}
	
	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));
	
	    return hooks;
	  }, []);
	}
	
	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}
	
	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }
	
	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };
	
	      return;
	    }
	
	    redirectInfo = location;
	  }
	
	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	
	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}
	
	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}
	
	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 365:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;
	
	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }
	
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) {
	      return;
	    }
	
	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }
	
	    sync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }
	
	    sync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }
	
	  next();
	}
	
	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];
	
	  if (length === 0) return callback(null, values);
	
	  var isDone = false,
	      doneCount = 0;
	
	  function done(index, error, value) {
	    if (isDone) return;
	
	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;
	
	      isDone = ++doneCount === length;
	
	      if (isDone) callback(null, values);
	    }
	  }
	
	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = isActive;
	
	var _PatternUtils = __webpack_require__(340);
	
	function deepEqual(a, b) {
	  if (a == b) return true;
	
	  if (a == null || b == null) return false;
	
	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }
	
	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }
	
	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	
	  return String(a) === String(b);
	}
	
	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }
	
	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }
	
	  return currentPathname === pathname;
	}
	
	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];
	
	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';
	
	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }
	
	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	
	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;
	
	  if (query == null) return true;
	
	  return deepEqual(query, activeQuery);
	}
	
	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;
	
	  if (currentLocation == null) return false;
	
	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }
	
	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }
	
	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(365);
	
	var _makeStateWithLocation = __webpack_require__(368);
	
	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }
	
	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }
	
	  var location = nextState.location;
	
	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);
	
	  getComponent.call(route, nextStateWithLocation, callback);
	}
	
	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}
	
	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = makeStateWithLocation;
	
	var _deprecateObjectProperties = __webpack_require__(336);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function makeStateWithLocation(state, location) {
	  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
	    var stateWithLocation = _extends({}, state);
	
	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.
	
	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }
	
	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };
	
	    for (var prop in location) {
	      var _ret = _loop(prop);
	
	      if (_ret === 'continue') continue;
	    }
	
	    return stateWithLocation;
	  }
	
	  return _extends({}, state, location);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = matchRoutes;
	
	var _AsyncUtils = __webpack_require__(365);
	
	var _makeStateWithLocation = __webpack_require__(368);
	
	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);
	
	var _PatternUtils = __webpack_require__(340);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _RouteUtils = __webpack_require__(334);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }
	
	  var sync = true,
	      result = void 0;
	
	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };
	
	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);
	
	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }
	
	    callback(error, childRoutes);
	  });
	
	  sync = false;
	  return result; // Might be undefined.
	}
	
	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };
	
	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);
	
	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });
	
	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}
	
	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];
	
	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }
	
	    return params;
	  }, params);
	}
	
	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}
	
	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';
	
	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }
	
	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }
	
	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };
	
	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;
	
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }
	
	            callback(null, match);
	          }
	        });
	
	        return {
	          v: void 0
	        };
	      }();
	
	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }
	
	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };
	
	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	
	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }
	
	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _deprecateObjectProperties = __webpack_require__(336);
	
	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
	
	var _getRouteParams = __webpack_require__(371);
	
	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
	
	var _RouteUtils = __webpack_require__(334);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	
	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',
	
	
	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },
	
	
	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;
	
	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;
	
	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }
	
	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;
	
	    var element = null;
	
	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.
	
	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };
	
	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }
	
	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};
	
	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }
	
	          return elements;
	        }
	
	        return _this.createElement(components, props);
	      }, element);
	    }
	
	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;
	
	    return element;
	  }
	});
	
	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(340);
	
	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};
	
	  if (!route.path) return routeParams;
	
	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });
	
	  return routeParams;
	}
	
	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;
	
	var _deprecateObjectProperties = __webpack_require__(336);
	
	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}
	
	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);
	
	  if (process.env.NODE_ENV !== 'production') {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }
	
	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _PropTypes = __webpack_require__(335);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;
	
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}
	
	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;
	
	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }
	
	  return to;
	}
	
	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',
	
	
	  contextTypes: {
	    router: _PropTypes.routerShape
	  },
	
	  propTypes: {
	    to: oneOfType([string, object]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);
	
	    if (event.defaultPrevented) return;
	
	    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;
	
	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;
	
	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;
	
	    event.preventDefault();
	
	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;
	    var hash = _props.hash;
	    var state = _props.state;
	
	    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	
	    this.context.router.push(location);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;
	
	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);
	
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;
	
	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;
	
	
	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (to == null) {
	        return _react2.default.createElement('a', props);
	      }
	
	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);
	
	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }
	
	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }
	
	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});
	
	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(373);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});
	
	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = withRouter;
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _hoistNonReactStatics = __webpack_require__(376);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _PropTypes = __webpack_require__(335);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;
	
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',
	
	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },
	
	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;
	
	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;
	
	      var router = this.props.router || this.context.router;
	      var props = _extends({}, this.props, { router: router });
	
	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }
	
	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });
	
	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;
	
	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Redirect = __webpack_require__(378);
	
	var _Redirect2 = _interopRequireDefault(_Redirect);
	
	var _InternalPropTypes = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	
	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },
	
	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(334);
	
	var _PatternUtils = __webpack_require__(340);
	
	var _InternalPropTypes = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	
	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);
	
	      if (route.from) route.path = route.from;
	
	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;
	
	
	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }
	
	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };
	
	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';
	
	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';
	
	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	
	        if (pattern.indexOf('/') === 0) break;
	      }
	
	      return '/' + parentPattern;
	    }
	  },
	
	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(334);
	
	var _InternalPropTypes = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var func = _react2.default.PropTypes.func;
	
	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	
	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },
	
	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(334);
	
	var _InternalPropTypes = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	
	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	
	var Route = _react2.default.createClass({
	  displayName: 'Route',
	
	
	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },
	
	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _InternalPropTypes = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {
	
	  contextTypes: {
	    history: _InternalPropTypes.history
	  },
	
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};
	
	exports.default = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var object = _react2.default.PropTypes.object;
	
	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	
	var Lifecycle = {
	
	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },
	
	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },
	
	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;
	
	    var route = this.props.route || this.context.route;
	
	    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;
	
	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};
	
	exports.default = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var object = _react2.default.PropTypes.object;
	
	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	
	var RouteContext = {
	
	  propTypes: {
	    route: object.isRequired
	  },
	
	  childContextTypes: {
	    route: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};
	
	exports.default = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _useQueries = __webpack_require__(359);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _createTransitionManager = __webpack_require__(362);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;
	
	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var routes = _ref.routes;
	
	    var options = _objectWithoutProperties(_ref, ['routes']);
	
	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}
	
	exports.default = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(370);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});
	
	exports.default = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Actions = __webpack_require__(345);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _createMemoryHistory = __webpack_require__(387);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	var _createTransitionManager = __webpack_require__(362);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _RouteUtils = __webpack_require__(334);
	
	var _RouterUtils = __webpack_require__(372);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;
	
	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);
	
	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;
	
	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));
	
	  var unlisten = void 0;
	
	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }
	
	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);
	
	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation && router.createLocation(redirectLocation, _Actions.REPLACE), nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));
	
	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}
	
	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createMemoryHistory;
	
	var _useQueries = __webpack_require__(359);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _useBasename = __webpack_require__(388);
	
	var _useBasename2 = _interopRequireDefault(_useBasename);
	
	var _createMemoryHistory = __webpack_require__(389);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ExecutionEnvironment = __webpack_require__(347);
	
	var _PathUtils = __webpack_require__(346);
	
	var _runTransitionHook = __webpack_require__(357);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _deprecate = __webpack_require__(358);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var history = createHistory(options);
	
	    var basename = options.basename;
	
	    var checkedBaseHref = false;
	
	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }
	
	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');
	
	        if (baseHref != null) {
	          basename = baseHref;
	
	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }
	
	      checkedBaseHref = true;
	    }
	
	    function addBasename(location) {
	      checkBaseHref();
	
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;
	
	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }
	
	      return location;
	    }
	
	    function prependBasename(location) {
	      checkBaseHref();
	
	      if (!basename) return location;
	
	      if (typeof location === 'string') location = _PathUtils.parsePath(location);
	
	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;
	
	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }
	
	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }
	
	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }
	
	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }
	
	    function replace(location) {
	      history.replace(prependBasename(location));
	    }
	
	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }
	
	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }
	
	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }
	
	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      push(_extends({ state: state }, path));
	    }
	
	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);
	
	      replace(_extends({ state: state }, path));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,
	
	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}
	
	exports['default'] = useBasename;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(344);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _PathUtils = __webpack_require__(346);
	
	var _Actions = __webpack_require__(345);
	
	var _createHistory = __webpack_require__(351);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}
	
	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }
	
	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));
	
	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;
	
	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }
	
	  entries = entries.map(function (entry) {
	    var key = history.createKey();
	
	    if (typeof entry === 'string') return { pathname: entry, key: key };
	
	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });
	
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });
	
	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }
	
	  var storage = createStateStorage(entries);
	
	  function saveState(key, state) {
	    storage[key] = state;
	  }
	
	  function readState(key) {
	    return storage[key];
	  }
	
	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;
	
	    var path = (basename || '') + pathname + (search || '');
	
	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }
	
	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }
	
	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }
	
	      current += n;
	
	      var currentLocation = getCurrentLocation();
	
	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }
	
	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;
	
	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);
	
	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }
	
	  return history;
	}
	
	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = useRouterHistory;
	
	var _useQueries = __webpack_require__(359);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _useBasename = __webpack_require__(388);
	
	var _useBasename2 = _interopRequireDefault(_useBasename);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(370);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _routerWarning = __webpack_require__(337);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  if (process.env.NODE_ENV !== 'production') {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }
	
	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);
	
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };
	
	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createBrowserHistory = __webpack_require__(393);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _createRouterHistory = __webpack_require__(394);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(341);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(345);
	
	var _PathUtils = __webpack_require__(346);
	
	var _ExecutionEnvironment = __webpack_require__(347);
	
	var _DOMUtils = __webpack_require__(348);
	
	var _DOMStateStorage = __webpack_require__(349);
	
	var _createDOMHistory = __webpack_require__(350);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;
	
	  var forceRefresh = options.forceRefresh;
	
	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;
	
	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }
	
	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;
	
	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	
	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }
	
	    var location = _PathUtils.parsePath(path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }
	
	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.
	
	      transitionTo(getCurrentLocation(event.state));
	    }
	
	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    _DOMStateStorage.saveState(key, state);
	
	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };
	
	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopPopStateListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopPopStateListener();
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}
	
	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};
	
	var _useRouterHistory = __webpack_require__(390);
	
	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	module.exports = exports['default'];

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createHashHistory = __webpack_require__(343);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _createRouterHistory = __webpack_require__(394);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;
	
	var _reducer = __webpack_require__(397);
	
	Object.defineProperty(exports, 'LOCATION_CHANGE', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.LOCATION_CHANGE;
	  }
	});
	Object.defineProperty(exports, 'routerReducer', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.routerReducer;
	  }
	});
	
	var _actions = __webpack_require__(398);
	
	Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
	  enumerable: true,
	  get: function get() {
	    return _actions.CALL_HISTORY_METHOD;
	  }
	});
	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _actions.push;
	  }
	});
	Object.defineProperty(exports, 'replace', {
	  enumerable: true,
	  get: function get() {
	    return _actions.replace;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _actions.go;
	  }
	});
	Object.defineProperty(exports, 'goBack', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goBack;
	  }
	});
	Object.defineProperty(exports, 'goForward', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goForward;
	  }
	});
	Object.defineProperty(exports, 'routerActions', {
	  enumerable: true,
	  get: function get() {
	    return _actions.routerActions;
	  }
	});
	
	var _sync = __webpack_require__(399);
	
	var _sync2 = _interopRequireDefault(_sync);
	
	var _middleware = __webpack_require__(400);
	
	var _middleware2 = _interopRequireDefault(_middleware);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.syncHistoryWithStore = _sync2['default'];
	exports.routerMiddleware = _middleware2['default'];

/***/ },

/***/ 397:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.routerReducer = routerReducer;
	/**
	 * This action type will be dispatched when your history
	 * receives a location change.
	 */
	var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
	
	var initialState = {
	  locationBeforeTransitions: null
	};
	
	/**
	 * This reducer will update the state with the most recent location history
	 * has transitioned to. This may not be in sync with the router, particularly
	 * if you have asynchronously-loaded routes, so reading from and relying on
	 * this state is discouraged.
	 */
	function routerReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var type = _ref.type;
	  var payload = _ref.payload;
	
	  if (type === LOCATION_CHANGE) {
	    return _extends({}, state, { locationBeforeTransitions: payload });
	  }
	
	  return state;
	}

/***/ },

/***/ 398:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This action type will be dispatched by the history actions below.
	 * If you're writing a middleware to watch for navigation events, be sure to
	 * look for actions of this type.
	 */
	var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';
	
	function updateLocation(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return {
	      type: CALL_HISTORY_METHOD,
	      payload: { method: method, args: args }
	    };
	  };
	}
	
	/**
	 * These actions correspond to the history API.
	 * The associated routerMiddleware will capture these events before they get to
	 * your reducer and reissue them as the matching function on your history.
	 */
	var push = exports.push = updateLocation('push');
	var replace = exports.replace = updateLocation('replace');
	var go = exports.go = updateLocation('go');
	var goBack = exports.goBack = updateLocation('goBack');
	var goForward = exports.goForward = updateLocation('goForward');
	
	var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = syncHistoryWithStore;
	
	var _reducer = __webpack_require__(397);
	
	var defaultSelectLocationState = function defaultSelectLocationState(state) {
	  return state.routing;
	};
	
	/**
	 * This function synchronizes your history state with the Redux store.
	 * Location changes flow from history to the store. An enhanced history is
	 * returned with a listen method that responds to store updates for location.
	 *
	 * When this history is provided to the router, this means the location data
	 * will flow like this:
	 * history.push -> store.dispatch -> enhancedHistory.listen -> router
	 * This ensures that when the store state changes due to a replay or other
	 * event, the router will be updated appropriately and can transition to the
	 * correct router state.
	 */
	function syncHistoryWithStore(history, store) {
	  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  var _ref$selectLocationSt = _ref.selectLocationState;
	  var selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt;
	  var _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay;
	  var adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;
	
	  // Ensure that the reducer is mounted on the store and functioning properly.
	  if (typeof selectLocationState(store.getState()) === 'undefined') {
	    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
	  }
	
	  var initialLocation = void 0;
	  var isTimeTraveling = void 0;
	  var unsubscribeFromStore = void 0;
	  var unsubscribeFromHistory = void 0;
	  var currentLocation = void 0;
	
	  // What does the store say about current location?
	  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
	    var locationState = selectLocationState(store.getState());
	    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
	  };
	
	  // Init initialLocation with potential location in store
	  initialLocation = getLocationInStore();
	
	  // If the store is replayed, update the URL in the browser to match.
	  if (adjustUrlOnReplay) {
	    var handleStoreChange = function handleStoreChange() {
	      var locationInStore = getLocationInStore(true);
	      if (currentLocation === locationInStore || initialLocation === locationInStore) {
	        return;
	      }
	
	      // Update address bar to reflect store state
	      isTimeTraveling = true;
	      currentLocation = locationInStore;
	      history.transitionTo(_extends({}, locationInStore, {
	        action: 'PUSH'
	      }));
	      isTimeTraveling = false;
	    };
	
	    unsubscribeFromStore = store.subscribe(handleStoreChange);
	    handleStoreChange();
	  }
	
	  // Whenever location changes, dispatch an action to get it in the store
	  var handleLocationChange = function handleLocationChange(location) {
	    // ... unless we just caused that location change
	    if (isTimeTraveling) {
	      return;
	    }
	
	    // Remember where we are
	    currentLocation = location;
	
	    // Are we being called for the first time?
	    if (!initialLocation) {
	      // Remember as a fallback in case state is reset
	      initialLocation = location;
	
	      // Respect persisted location, if any
	      if (getLocationInStore()) {
	        return;
	      }
	    }
	
	    // Tell the store to update by dispatching an action
	    store.dispatch({
	      type: _reducer.LOCATION_CHANGE,
	      payload: location
	    });
	  };
	  unsubscribeFromHistory = history.listen(handleLocationChange);
	
	  // The enhanced history uses store as source of truth
	  return _extends({}, history, {
	    // The listeners are subscribed to the store instead of history
	    listen: function listen(listener) {
	      // Copy of last location.
	      var lastPublishedLocation = getLocationInStore(true);
	
	      // Keep track of whether we unsubscribed, as Redux store
	      // only applies changes in subscriptions on next dispatch
	      var unsubscribed = false;
	      var unsubscribeFromStore = store.subscribe(function () {
	        var currentLocation = getLocationInStore(true);
	        if (currentLocation === lastPublishedLocation) {
	          return;
	        }
	        lastPublishedLocation = currentLocation;
	        if (!unsubscribed) {
	          listener(lastPublishedLocation);
	        }
	      });
	
	      // History listeners expect a synchronous call. Make the first call to the
	      // listener after subscribing to the store, in case the listener causes a
	      // location change (e.g. when it redirects)
	      listener(lastPublishedLocation);
	
	      // Let user unsubscribe later
	      return function () {
	        unsubscribed = true;
	        unsubscribeFromStore();
	      };
	    },
	
	
	    // It also provides a way to destroy internal listeners
	    unsubscribe: function unsubscribe() {
	      if (adjustUrlOnReplay) {
	        unsubscribeFromStore();
	      }
	      unsubscribeFromHistory();
	    }
	  });
	}

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = routerMiddleware;
	
	var _actions = __webpack_require__(398);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
	 * provided history object. This will prevent these actions from reaching your
	 * reducer or any middleware that comes after this one.
	 */
	function routerMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type !== _actions.CALL_HISTORY_METHOD) {
	          return next(action);
	        }
	
	        var _action$payload = action.payload;
	        var method = _action$payload.method;
	        var args = _action$payload.args;
	
	        history[method].apply(history, _toConsumableArray(args));
	      };
	    };
	  };
	}

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(370);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var applyMiddleware = function applyMiddleware() {
	  for (var _len = arguments.length, middleware = Array(_len), _key = 0; _key < _len; _key++) {
	    middleware[_key] = arguments[_key];
	  }
	
	  // middleware looks like: { renderContainer, renderRootContainer }
	  var withRootContainer = middleware.filter(function (m) {
	    return m.renderRootContainer;
	  });
	  var withContainer = middleware.filter(function (m) {
	    return m.renderContainer;
	  });
	
	  var finalCreateElement = function finalCreateElement(Component, props) {
	    return _react2.default.createElement(Component, props);
	  };
	
	  var createElement = withContainer.reduceRight(function (previous, _ref) {
	    var renderContainer = _ref.renderContainer;
	    return function (RouteComponent, props) {
	      return (0, _react.cloneElement)(renderContainer(RouteComponent, props), { createElement: previous });
	    };
	  }, finalCreateElement);
	
	  var finalRenderRootContainer = function finalRenderRootContainer(renderProps) {
	    return _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, { createElement: createElement }));
	  };
	
	  return withRootContainer.reduceRight(function (previous, _ref2) {
	    var renderRootContainer = _ref2.renderRootContainer;
	    return function (renderProps) {
	      return (0, _react.cloneElement)(renderRootContainer(renderProps), { render: previous });
	    };
	  }, finalRenderRootContainer);
	};
	
	exports.default = applyMiddleware;
	
	/*
	
	`applyMiddleware` turns this:
	
	```js
	const render = applyMiddleware(
	  useAsyncProps({ loadContext: { token } }),
	  useNamedRoutes(),
	  useRelativeLinks()
	)
	```
	
	into this:
	
	```js
	<Router
	  render={(props) => (
	    <AsyncProps {...props}
	      render={(props) => (
	        <NamedRoutes {...props}
	          render={(props) => (
	            <RelativeLinks {...props}
	              createElement={(Component, props) => (
	                <AsyncPropsContainer Component={Component} routerProps={props} token={token}
	                  createElement={(Component, props) => (
	                    <RelativeLinksContainer Component={Component} routerProps={props}/>
	                  )}
	                />
	              )}
	            />
	          )}
	        />
	      )}
	    />
	  )}
	/>
	```
	*/

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RelativeLink = exports.useRelativeLinks = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(373);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _PatternUtils = __webpack_require__(340);
	
	var _resolvePathname = __webpack_require__(403);
	
	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var useRelativeLinks = exports.useRelativeLinks = function useRelativeLinks() {
	  return {
	    renderContainer: function renderContainer(Component, props) {
	      return _react2.default.createElement(RelativeLinksContainer, { Component: Component, routerProps: props });
	    }
	  };
	};
	
	var _React$PropTypes = _react2.default.PropTypes;
	var oneOfType = _React$PropTypes.oneOfType;
	var shape = _React$PropTypes.shape;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var array = _React$PropTypes.array;
	
	
	var relativeLinksContextType = {
	  relativeLinks: shape({
	    params: object.isRequired,
	    route: object.isRequired,
	    routes: array.isRequired
	  }).isRequired
	};
	
	var RelativeLinksContainer = _react2.default.createClass({
	  displayName: 'RelativeLinksContainer',
	
	
	  propTypes: {
	    Component: func.isRequired,
	    routerProps: shape({
	      route: object.isRequired,
	      params: object.isRequired
	    }).isRequired
	  },
	
	  childContextTypes: relativeLinksContextType,
	
	  getChildContext: function getChildContext() {
	    var _props$routerProps = this.props.routerProps;
	    var params = _props$routerProps.params;
	    var routes = _props$routerProps.routes;
	    var route = _props$routerProps.route;
	
	    return { relativeLinks: { params: params, route: route, routes: routes } };
	  },
	  render: function render() {
	    var _props = this.props;
	    var createElement = _props.createElement;
	    var Component = _props.Component;
	    var routerProps = _props.routerProps;
	
	    return createElement(Component, routerProps);
	  }
	});
	
	var isAbsolute = function isAbsolute(to) {
	  return to.match(/^\//);
	};
	
	var constructRoutePattern = function constructRoutePattern(currentRoute, routes) {
	  var fullPath = '';
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var route = _step.value;
	      var path = route.path;
	
	
	      if (path) {
	        if (path[0] === '/') {
	          fullPath = path;
	        } else {
	          // If the first path-ed route has no leading slash, then this will add it.
	          if (fullPath[fullPath.length - 1] !== '/') {
	            fullPath += '/';
	          }
	
	          fullPath += path;
	        }
	      }
	
	      if (route === currentRoute) {
	        break;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return fullPath;
	};
	
	var resolvePathname = function resolvePathname(_ref) {
	  var relativePath = _ref.relativePath;
	  var route = _ref.route;
	  var routes = _ref.routes;
	  var params = _ref.params;
	
	  var patternUpToRoute = constructRoutePattern(route, routes);
	  // TODO: remove trailing slash hack
	  // we add a slash cause it's SUPER WEIRD if we don't, should add an option
	  // to history to always use trailing slashes to not do this and cause
	  // confusion for people who actually know how browsers resolve urls :P
	  var specialCase = relativePath.trim() === '';
	  var slash = specialCase ? '' : '/';
	  var resolvedPattern = (0, _resolvePathname2.default)('' + relativePath + slash, patternUpToRoute + '/');
	  var withoutSlash = resolvedPattern.substring(0, resolvedPattern.length - 1);
	  return (0, _PatternUtils.formatPattern)(withoutSlash, params);
	};
	
	var RelativeLink = exports.RelativeLink = _react2.default.createClass({
	  displayName: 'RelativeLink',
	
	
	  propTypes: {
	    to: oneOfType([string, object]).isRequired
	  },
	
	  contextTypes: relativeLinksContextType,
	
	  getInitialState: function getInitialState() {
	    return { to: this.calculateTo(this.props) };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.to !== this.props.to) {
	      this.setState({ to: this.calculateTo(nextProps) });
	    }
	  },
	  calculateTo: function calculateTo(props) {
	    var to = props.to;
	    var _context$relativeLink = this.context.relativeLinks;
	    var route = _context$relativeLink.route;
	    var routes = _context$relativeLink.routes;
	    var params = _context$relativeLink.params;
	
	    var isLocationDescriptor = (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object';
	    var relativePath = isLocationDescriptor ? to.pathname || '' : to;
	    var resolved = isAbsolute(relativePath) ? relativePath : resolvePathname({ relativePath: relativePath, route: route, routes: routes, params: params });
	    return isLocationDescriptor ? _extends({}, to, { pathname: resolved }) : resolved;
	  },
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { to: this.state.to }));
	  }
	});

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.resolvePathname=e():t.resolvePathname=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e){"use strict";var r=function(t){return"/"===t.charAt(0)},n=function(t,e){for(var r=e,n=r+1,o=t.length;o>n;r+=1,n+=1)t[r]=t[n];t.pop()},o=function(t){var e=arguments.length<=1||void 0===arguments[1]?"":arguments[1],o=t&&t.split("/")||[],i=e&&e.split("/")||[],f=t&&r(t),s=e&&r(e),u=f||s;if(t&&r(t)?i=o:o.length&&(i.pop(),i=i.concat(o)),!i.length)return"/";var p=void 0;if(i.length){var a=i[i.length-1];p="."===a||".."===a||""===a}else p=!1;for(var c=0,l=i.length;l>=0;l--){var v=i[l];"."===v?n(i,l):".."===v?(n(i,l),c++):c&&(n(i,l),c--)}if(!u)for(;c--;c)i.unshift("..");!u||""===i[0]||i[0]&&r(i[0])||i.unshift("");var d=i.join("/");return p&&"/"!==d.substr(-1)&&(d+="/"),d};t.exports=o}])});

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Landing = exports.Home = exports.Charlas = exports.App = undefined;
	
	var _App2 = __webpack_require__(405);
	
	var _App3 = _interopRequireDefault(_App2);
	
	var _Charlas2 = __webpack_require__(544);
	
	var _Charlas3 = _interopRequireDefault(_Charlas2);
	
	var _Home2 = __webpack_require__(953);
	
	var _Home3 = _interopRequireDefault(_Home2);
	
	var _Landing2 = __webpack_require__(1101);
	
	var _Landing3 = _interopRequireDefault(_Landing2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.App = _App3.default;
	exports.Charlas = _Charlas3.default;
	exports.Home = _Home3.default;
	exports.Landing = _Landing3.default;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(406);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'section',
	      { className: 'page-header' },
	      _react2.default.createElement(
	        'h1',
	        { className: 'project-name' },
	        'Charlas'
	      ),
	      _react2.default.createElement(
	        'h2',
	        { className: 'project-tagline' },
	        'Propuestas y pedidos de charlas'
	      )
	    ),
	    children
	  );
	};
	
	exports.default = App;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(406);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _connect = __webpack_require__(545);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _github = __webpack_require__(567);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Charlas = function Charlas(_ref) {
	  var gh = _ref.gh;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h3',
	      null,
	      ' Propuestas '
	    ),
	    _react2.default.createElement(
	      'ul',
	      null,
	      gh.issues.map(function (e) {
	        return _react2.default.createElement(
	          'li',
	          { key: e.number },
	          _react2.default.createElement(
	            'a',
	            null,
	            ' ',
	            e.title,
	            ' '
	          )
	        );
	      })
	    ),
	    _react2.default.createElement(
	      'h3',
	      null,
	      ' Meetups Pasados '
	    ),
	    _react2.default.createElement(
	      'ul',
	      null,
	      gh.repos.map(function (e) {
	        return _react2.default.createElement(
	          'li',
	          { key: e.name },
	          _react2.default.createElement(
	            'a',
	            { href: e.html_url },
	            ' ',
	            e.name,
	            ' '
	          )
	        );
	      })
	    )
	  );
	};
	
	var CharlasClass = _react2.default.createClass({
	  displayName: 'CharlasClass',
	
	  componentWillMount: function componentWillMount() {
	    this.props.actions.load_repos();
	    this.props.actions.load_issues();
	  },
	  render: function render() {
	    return Charlas(this.props);
	  }
	});
	
	exports.default = (0, _connect2.default)(function (state) {
	  return { gh: state.github };
	}, { load_repos: _github.load_repos, load_issues: _github.load_issues })(CharlasClass);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Charlas.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(546);
	
	var _redux = __webpack_require__(553);
	
	exports.default = function () {
	  var storeMapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (store) {
	    return {};
	  };
	  var actionMapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return (0, _reactRedux.connect)(storeMapping, function (dispatch) {
	    return {
	      actions: (0, _redux.bindActionCreators)(actionMapping, dispatch)
	    };
	  });
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "connect.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.load_repos = load_repos;
	exports.load_issues = load_issues;
	
	var _rxjs = __webpack_require__(568);
	
	var _reactRouterRedux = __webpack_require__(396);
	
	var _github = __webpack_require__(912);
	
	var event = _interopRequireWildcard(_github);
	
	var _githubApi = __webpack_require__(913);
	
	var _githubApi2 = _interopRequireDefault(_githubApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var github = new _githubApi2.default();
	
	exports.default = function (action$) {
	  return _rxjs.Observable.merge(action$.ofType(event.REPOS_REQUEST).flatMap(function (action) {
	    return github.getOrganization("ReactJS-BA").getRepos();
	  }).map(function (response) {
	    return {
	      type: event.REPOS_RESPONSE,
	      payload: response.data
	    };
	  }), action$.ofType(event.ISSUES_REQUEST).flatMap(function (action) {
	    return github.getIssues("ReactJS-BA", "charlas").listIssues();
	  }).map(function (response) {
	    return {
	      type: event.ISSUES_RESPONSE,
	      payload: response.data
	    };
	  }));
	};
	
	function load_repos() {
	  return { type: event.REPOS_REQUEST };
	}
	
	function load_issues() {
	  return { type: event.ISSUES_REQUEST };
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "github.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 912:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = reducer;
	var REPOS_REQUEST = exports.REPOS_REQUEST = 'module/github/repos/request';
	var REPOS_RESPONSE = exports.REPOS_RESPONSE = 'module/github/repos/response';
	var REPOS_FAIL = exports.REPOS_FAIL = 'module/github/repos/fail';
	
	var ISSUES_REQUEST = exports.ISSUES_REQUEST = 'module/github/issues/request';
	var ISSUES_RESPONSE = exports.ISSUES_RESPONSE = 'module/github/issues/response';
	var ISSUES_FAIL = exports.ISSUES_FAIL = 'module/github/issues/fail';
	
	var initialState = {
	    issues: [],
	    repos: []
	};
	
	function reducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    switch (action.type) {
	        case ISSUES_REQUEST:
	            return _extends({}, state, {
	                issues: []
	            });
	        case ISSUES_RESPONSE:
	            return _extends({}, state, {
	                issues: action.payload
	            });
	        case REPOS_REQUEST:
	            return _extends({}, state, {
	                issues: []
	            });
	        case REPOS_RESPONSE:
	            return _extends({}, state, {
	                repos: action.payload.filter(function (e) {
	                    return e.name.match(/^meetup-.*/);
	                })
	            });
	        default:
	            return state;
	    }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "github.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 913:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(914), __webpack_require__(943), __webpack_require__(944), __webpack_require__(945), __webpack_require__(952), __webpack_require__(946), __webpack_require__(949), __webpack_require__(950), __webpack_require__(951)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('./Gist'), require('./User'), require('./Issue'), require('./Search'), require('./RateLimit'), require('./Repository'), require('./Organization'), require('./Team'), require('./Markdown'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.Gist, global.User, global.Issue, global.Search, global.RateLimit, global.Repository, global.Organization, global.Team, global.Markdown);
	    global.GitHub = mod.exports;
	  }
	})(this, function (module, _Gist, _User, _Issue, _Search, _RateLimit, _Repository, _Organization, _Team, _Markdown) {
	  'use strict';
	
	  var _Gist2 = _interopRequireDefault(_Gist);
	
	  var _User2 = _interopRequireDefault(_User);
	
	  var _Issue2 = _interopRequireDefault(_Issue);
	
	  var _Search2 = _interopRequireDefault(_Search);
	
	  var _RateLimit2 = _interopRequireDefault(_RateLimit);
	
	  var _Repository2 = _interopRequireDefault(_Repository);
	
	  var _Organization2 = _interopRequireDefault(_Organization);
	
	  var _Team2 = _interopRequireDefault(_Team);
	
	  var _Markdown2 = _interopRequireDefault(_Markdown);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  var GitHub = function () {
	    /**
	     * Create a new GitHub.
	     * @param {Requestable.auth} [auth] - the credentials to authenticate to Github. If auth is
	     *                                  not provided requests will be made unauthenticated
	     * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	     */
	
	    function GitHub(auth) {
	      var apiBase = arguments.length <= 1 || arguments[1] === undefined ? 'https://api.github.com' : arguments[1];
	
	      _classCallCheck(this, GitHub);
	
	      this.__apiBase = apiBase;
	      this.__auth = auth || {};
	    }
	
	    /**
	     * Create a new Gist wrapper
	     * @param {number} [id] - the id for the gist, leave undefined when creating a new gist
	     * @return {Gist}
	     */
	
	
	    _createClass(GitHub, [{
	      key: 'getGist',
	      value: function getGist(id) {
	        return new _Gist2.default(id, this.__auth, this.__apiBase);
	      }
	    }, {
	      key: 'getUser',
	      value: function getUser(user) {
	        return new _User2.default(user, this.__auth, this.__apiBase);
	      }
	    }, {
	      key: 'getOrganization',
	      value: function getOrganization(organization) {
	        return new _Organization2.default(organization, this.__auth, this.__apiBase);
	      }
	    }, {
	      key: 'getTeam',
	      value: function getTeam(teamId) {
	        return new _Team2.default(teamId, this.__auth, this.__apiBase);
	      }
	    }, {
	      key: 'getRepo',
	      value: function getRepo(user, repo) {
	        return new _Repository2.default(this._getFullName(user, repo), this.__auth, this.__apiBase);
	      }
	    }, {
	      key: 'getIssues',
	      value: function getIssues(user, repo) {
	        return new _Issue2.default(this._getFullName(user, repo), this.__auth, this.__apiBase);
	      }
	    }, {
	      key: 'search',
	      value: function search(query) {
	        return new _Search2.default(query, this.__auth, this.__apiBase);
	      }
	    }, {
	      key: 'getRateLimit',
	      value: function getRateLimit() {
	        return new _RateLimit2.default(this.__auth, this.__apiBase);
	      }
	    }, {
	      key: 'getMarkdown',
	      value: function getMarkdown() {
	        return new _Markdown2.default(this.__auth, this.__apiBase);
	      }
	    }, {
	      key: '_getFullName',
	      value: function _getFullName(user, repo) {
	        var fullname = user;
	
	        if (repo) {
	          fullname = user + '/' + repo;
	        }
	
	        return fullname;
	      }
	    }]);
	
	    return GitHub;
	  }();
	
	  module.exports = GitHub;
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdpdEh1Yi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFxQk0sTTs7Ozs7Ozs7QUFPSCxvQkFBWSxJQUFaLEVBQXNEO0FBQUEsVUFBcEMsT0FBb0MseURBQTFCLHdCQUEwQjs7QUFBQTs7QUFDbkQsV0FBSyxTQUFMLEdBQWlCLE9BQWpCO0FBQ0EsV0FBSyxNQUFMLEdBQWMsUUFBUSxFQUF0QjtBQUNGOzs7Ozs7Ozs7Ozs4QkFPTyxFLEVBQUk7QUFDVCxlQUFPLG1CQUFTLEVBQVQsRUFBYSxLQUFLLE1BQWxCLEVBQTBCLEtBQUssU0FBL0IsQ0FBUDtBQUNGOzs7OEJBUU8sSSxFQUFNO0FBQ1gsZUFBTyxtQkFBUyxJQUFULEVBQWUsS0FBSyxNQUFwQixFQUE0QixLQUFLLFNBQWpDLENBQVA7QUFDRjs7O3NDQU9lLFksRUFBYztBQUMzQixlQUFPLDJCQUFpQixZQUFqQixFQUErQixLQUFLLE1BQXBDLEVBQTRDLEtBQUssU0FBakQsQ0FBUDtBQUNGOzs7OEJBT08sTSxFQUFRO0FBQ2IsZUFBTyxtQkFBUyxNQUFULEVBQWlCLEtBQUssTUFBdEIsRUFBOEIsS0FBSyxTQUFuQyxDQUFQO0FBQ0Y7Ozs4QkFRTyxJLEVBQU0sSSxFQUFNO0FBQ2pCLGVBQU8seUJBQWUsS0FBSyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLElBQXhCLENBQWYsRUFBOEMsS0FBSyxNQUFuRCxFQUEyRCxLQUFLLFNBQWhFLENBQVA7QUFDRjs7O2dDQVFTLEksRUFBTSxJLEVBQU07QUFDbkIsZUFBTyxvQkFBVSxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsQ0FBVixFQUF5QyxLQUFLLE1BQTlDLEVBQXNELEtBQUssU0FBM0QsQ0FBUDtBQUNGOzs7NkJBT00sSyxFQUFPO0FBQ1gsZUFBTyxxQkFBVyxLQUFYLEVBQWtCLEtBQUssTUFBdkIsRUFBK0IsS0FBSyxTQUFwQyxDQUFQO0FBQ0Y7OztxQ0FNYztBQUNaLGVBQU8sd0JBQWMsS0FBSyxNQUFuQixFQUEyQixLQUFLLFNBQWhDLENBQVA7QUFDRjs7O29DQU1hO0FBQ1gsZUFBTyx1QkFBYSxLQUFLLE1BQWxCLEVBQTBCLEtBQUssU0FBL0IsQ0FBUDtBQUNGOzs7bUNBUVksSSxFQUFNLEksRUFBTTtBQUN0QixZQUFJLFdBQVcsSUFBZjs7QUFFQSxZQUFJLElBQUosRUFBVTtBQUNQLHFCQUFjLElBQWQsU0FBc0IsSUFBdEI7QUFDRjs7QUFFRCxlQUFPLFFBQVA7QUFDRjs7Ozs7O0FBR0osU0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6IkdpdEh1Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cbi8qIGVzbGludCB2YWxpZC1qc2RvYzogW1wiZXJyb3JcIiwge1wicmVxdWlyZVJldHVybkRlc2NyaXB0aW9uXCI6IGZhbHNlfV0gKi9cblxuaW1wb3J0IEdpc3QgZnJvbSAnLi9HaXN0JztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgSXNzdWUgZnJvbSAnLi9Jc3N1ZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCBSYXRlTGltaXQgZnJvbSAnLi9SYXRlTGltaXQnO1xuaW1wb3J0IFJlcG9zaXRvcnkgZnJvbSAnLi9SZXBvc2l0b3J5JztcbmltcG9ydCBPcmdhbml6YXRpb24gZnJvbSAnLi9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi9UZWFtJztcbmltcG9ydCBNYXJrZG93biBmcm9tICcuL01hcmtkb3duJztcblxuLyoqXG4gKiBHaXRIdWIgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGNyZWF0ZSB2YXJpb3VzIEFQSSB3cmFwcGVyIG9iamVjdHMuXG4gKi9cbmNsYXNzIEdpdEh1YiB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBHaXRIdWIuXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIHRoZSBjcmVkZW50aWFscyB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViLiBJZiBhdXRoIGlzXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgcHJvdmlkZWQgcmVxdWVzdHMgd2lsbCBiZSBtYWRlIHVuYXV0aGVudGljYXRlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmdpdGh1Yi5jb21dIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqL1xuICAgY29uc3RydWN0b3IoYXV0aCwgYXBpQmFzZSA9ICdodHRwczovL2FwaS5naXRodWIuY29tJykge1xuICAgICAgdGhpcy5fX2FwaUJhc2UgPSBhcGlCYXNlO1xuICAgICAgdGhpcy5fX2F1dGggPSBhdXRoIHx8IHt9O1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBHaXN0IHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaWRdIC0gdGhlIGlkIGZvciB0aGUgZ2lzdCwgbGVhdmUgdW5kZWZpbmVkIHdoZW4gY3JlYXRpbmcgYSBuZXcgZ2lzdFxuICAgICogQHJldHVybiB7R2lzdH1cbiAgICAqL1xuICAgZ2V0R2lzdChpZCkge1xuICAgICAgcmV0dXJuIG5ldyBHaXN0KGlkLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBVc2VyIHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlcl0gLSB0aGUgbmFtZSBvZiB0aGUgdXNlciB0byBnZXQgaW5mb3JtYXRpb24gYWJvdXRcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmUgdW5kZWZpbmVkIGZvciB0aGUgYXV0aGVudGljYXRlZCB1c2VyXG4gICAgKiBAcmV0dXJuIHtVc2VyfVxuICAgICovXG4gICBnZXRVc2VyKHVzZXIpIHtcbiAgICAgIHJldHVybiBuZXcgVXNlcih1c2VyLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBPcmdhbml6YXRpb24gd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9yZ2FuaXphdGlvbiAtIHRoZSBuYW1lIG9mIHRoZSBvcmdhbml6YXRpb25cbiAgICAqIEByZXR1cm4ge09yZ2FuaXphdGlvbn1cbiAgICAqL1xuICAgZ2V0T3JnYW5pemF0aW9uKG9yZ2FuaXphdGlvbikge1xuICAgICAgcmV0dXJuIG5ldyBPcmdhbml6YXRpb24ob3JnYW5pemF0aW9uLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIGNyZWF0ZSBhIG5ldyBUZWFtIHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZWFtSWQgLSB0aGUgbmFtZSBvZiB0aGUgdGVhbVxuICAgICogQHJldHVybiB7dGVhbX1cbiAgICAqL1xuICAgZ2V0VGVhbSh0ZWFtSWQpIHtcbiAgICAgIHJldHVybiBuZXcgVGVhbSh0ZWFtSWQsIHRoaXMuX19hdXRoLCB0aGlzLl9fYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IFJlcG9zaXRvcnkgd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXIgLSB0aGUgdXNlciB3aG8gb3ducyB0aGUgcmVzcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXBvIC0gdGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEByZXR1cm4ge1JlcG9zaXRvcnl9XG4gICAgKi9cbiAgIGdldFJlcG8odXNlciwgcmVwbykge1xuICAgICAgcmV0dXJuIG5ldyBSZXBvc2l0b3J5KHRoaXMuX2dldEZ1bGxOYW1lKHVzZXIsIHJlcG8pLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBJc3N1ZSB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlciAtIHRoZSB1c2VyIHdobyBvd25zIHRoZSByZXNwb3NpdG9yeVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcG8gLSB0aGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeVxuICAgICogQHJldHVybiB7SXNzdWV9XG4gICAgKi9cbiAgIGdldElzc3Vlcyh1c2VyLCByZXBvKSB7XG4gICAgICByZXR1cm4gbmV3IElzc3VlKHRoaXMuX2dldEZ1bGxOYW1lKHVzZXIsIHJlcG8pLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBTZWFyY2ggd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gdGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3JcbiAgICAqIEByZXR1cm4ge1NlYXJjaH1cbiAgICAqL1xuICAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbmV3IFNlYXJjaChxdWVyeSwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgUmF0ZUxpbWl0IHdyYXBwZXJcbiAgICAqIEByZXR1cm4ge1JhdGVMaW1pdH1cbiAgICAqL1xuICAgZ2V0UmF0ZUxpbWl0KCkge1xuICAgICAgcmV0dXJuIG5ldyBSYXRlTGltaXQodGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgTWFya2Rvd24gd3JhcHBlclxuICAgICogQHJldHVybiB7TWFya2Rvd259XG4gICAgKi9cbiAgIGdldE1hcmtkb3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBNYXJrZG93bih0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENvbXB1dGVzIHRoZSBmdWxsIHJlcG9zaXRvcnkgbmFtZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXIgLSB0aGUgdXNlcm5hbWUgKG9yIHRoZSBmdWxsIG5hbWUpXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwbyAtIHRoZSByZXBvc2l0b3J5IG5hbWUsIG11c3Qgbm90IGJlIHBhc3NlZCBpZiBgdXNlcmAgaXMgdGhlIGZ1bGwgbmFtZVxuICAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgcmVwb3NpdG9yeSdzIGZ1bGwgbmFtZVxuICAgICovXG4gICBfZ2V0RnVsbE5hbWUodXNlciwgcmVwbykge1xuICAgICAgbGV0IGZ1bGxuYW1lID0gdXNlcjtcblxuICAgICAgaWYgKHJlcG8pIHtcbiAgICAgICAgIGZ1bGxuYW1lID0gYCR7dXNlcn0vJHtyZXBvfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdWxsbmFtZTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHaXRIdWI7XG4iXX0=
	//# sourceMappingURL=GitHub.js.map


/***/ },

/***/ 914:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('./Requestable'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.Requestable);
	    global.Gist = mod.exports;
	  }
	})(this, function (module, _Requestable2) {
	  'use strict';
	
	  var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var Gist = function (_Requestable) {
	    _inherits(Gist, _Requestable);
	
	    /**
	     * Create a Gist.
	     * @param {string} id - the id of the gist (not required when creating a gist)
	     * @param {Requestable.auth} [auth] - information required to authenticate to Github
	     * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	     */
	
	    function Gist(id, auth, apiBase) {
	      _classCallCheck(this, Gist);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Gist).call(this, auth, apiBase));
	
	      _this.__id = id;
	      return _this;
	    }
	
	    /**
	     * Fetch a gist.
	     * @see https://developer.github.com/v3/gists/#get-a-single-gist
	     * @param {Requestable.callback} [cb] - will receive the gist
	     * @return {Promise} - the Promise for the http request
	     */
	
	
	    _createClass(Gist, [{
	      key: 'read',
	      value: function read(cb) {
	        return this._request('GET', '/gists/' + this.__id, null, cb);
	      }
	    }, {
	      key: 'create',
	      value: function create(gist, cb) {
	        var _this2 = this;
	
	        return this._request('POST', '/gists', gist, cb).then(function (response) {
	          _this2.__id = response.data.id;
	          return response;
	        });
	      }
	    }, {
	      key: 'delete',
	      value: function _delete(cb) {
	        return this._request('DELETE', '/gists/' + this.__id, null, cb);
	      }
	    }, {
	      key: 'fork',
	      value: function fork(cb) {
	        return this._request('POST', '/gists/' + this.__id + '/forks', null, cb);
	      }
	    }, {
	      key: 'update',
	      value: function update(gist, cb) {
	        return this._request('PATCH', '/gists/' + this.__id, gist, cb);
	      }
	    }, {
	      key: 'star',
	      value: function star(cb) {
	        return this._request('PUT', '/gists/' + this.__id + '/star', null, cb);
	      }
	    }, {
	      key: 'unstar',
	      value: function unstar(cb) {
	        return this._request('DELETE', '/gists/' + this.__id + '/star', null, cb);
	      }
	    }, {
	      key: 'isStarred',
	      value: function isStarred(cb) {
	        return this._request204or404('/gists/' + this.__id + '/star', null, cb);
	      }
	    }, {
	      key: 'listComments',
	      value: function listComments(cb) {
	        return this._requestAllPages('/gists/' + this.__id + '/comments', null, cb);
	      }
	    }, {
	      key: 'getComment',
	      value: function getComment(comment, cb) {
	        return this._request('GET', '/gists/' + this.__id + '/comments/' + comment, null, cb);
	      }
	    }, {
	      key: 'createComment',
	      value: function createComment(comment, cb) {
	        return this._request('POST', '/gists/' + this.__id + '/comments', { body: comment }, cb);
	      }
	    }, {
	      key: 'editComment',
	      value: function editComment(comment, body, cb) {
	        return this._request('PATCH', '/gists/' + this.__id + '/comments/' + comment, { body: body }, cb);
	      }
	    }, {
	      key: 'deleteComment',
	      value: function deleteComment(comment, cb) {
	        return this._request('DELETE', '/gists/' + this.__id + '/comments/' + comment, null, cb);
	      }
	    }]);
	
	    return Gist;
	  }(_Requestable3.default);
	
	  module.exports = Gist;
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFZTSxJOzs7Ozs7Ozs7O0FBT0gsa0JBQVksRUFBWixFQUFnQixJQUFoQixFQUFzQixPQUF0QixFQUErQjtBQUFBOztBQUFBLDBGQUN0QixJQURzQixFQUNoQixPQURnQjs7QUFFNUIsWUFBSyxJQUFMLEdBQVksRUFBWjtBQUY0QjtBQUc5Qjs7Ozs7Ozs7Ozs7OzJCQVFJLEUsRUFBSTtBQUNOLGVBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLLElBQXBDLEVBQTRDLElBQTVDLEVBQWtELEVBQWxELENBQVA7QUFDRjs7OzZCQVNNLEksRUFBTSxFLEVBQUk7QUFBQTs7QUFDZCxlQUFPLEtBQUssUUFBTCxDQUFjLE1BQWQsRUFBc0IsUUFBdEIsRUFBZ0MsSUFBaEMsRUFBc0MsRUFBdEMsRUFDSCxJQURHLENBQ0UsVUFBQyxRQUFELEVBQWM7QUFDakIsaUJBQUssSUFBTCxHQUFZLFNBQVMsSUFBVCxDQUFjLEVBQTFCO0FBQ0EsaUJBQU8sUUFBUDtBQUNGLFNBSkcsQ0FBUDtBQUtGOzs7OEJBUU0sRSxFQUFJO0FBQ1IsZUFBTyxLQUFLLFFBQUwsQ0FBYyxRQUFkLGNBQWtDLEtBQUssSUFBdkMsRUFBK0MsSUFBL0MsRUFBcUQsRUFBckQsQ0FBUDtBQUNGOzs7MkJBUUksRSxFQUFJO0FBQ04sZUFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLGNBQWdDLEtBQUssSUFBckMsYUFBbUQsSUFBbkQsRUFBeUQsRUFBekQsQ0FBUDtBQUNGOzs7NkJBU00sSSxFQUFNLEUsRUFBSTtBQUNkLGVBQU8sS0FBSyxRQUFMLENBQWMsT0FBZCxjQUFpQyxLQUFLLElBQXRDLEVBQThDLElBQTlDLEVBQW9ELEVBQXBELENBQVA7QUFDRjs7OzJCQVFJLEUsRUFBSTtBQUNOLGVBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLLElBQXBDLFlBQWlELElBQWpELEVBQXVELEVBQXZELENBQVA7QUFDRjs7OzZCQVFNLEUsRUFBSTtBQUNSLGVBQU8sS0FBSyxRQUFMLENBQWMsUUFBZCxjQUFrQyxLQUFLLElBQXZDLFlBQW9ELElBQXBELEVBQTBELEVBQTFELENBQVA7QUFDRjs7O2dDQVFTLEUsRUFBSTtBQUNYLGVBQU8sS0FBSyxnQkFBTCxhQUFnQyxLQUFLLElBQXJDLFlBQWtELElBQWxELEVBQXdELEVBQXhELENBQVA7QUFDRjs7O21DQVFZLEUsRUFBSTtBQUNkLGVBQU8sS0FBSyxnQkFBTCxhQUFnQyxLQUFLLElBQXJDLGdCQUFzRCxJQUF0RCxFQUE0RCxFQUE1RCxDQUFQO0FBQ0Y7OztpQ0FTVSxPLEVBQVMsRSxFQUFJO0FBQ3JCLGVBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLLElBQXBDLGtCQUFxRCxPQUFyRCxFQUFnRSxJQUFoRSxFQUFzRSxFQUF0RSxDQUFQO0FBQ0Y7OztvQ0FTYSxPLEVBQVMsRSxFQUFJO0FBQ3hCLGVBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxjQUFnQyxLQUFLLElBQXJDLGdCQUFzRCxFQUFDLE1BQU0sT0FBUCxFQUF0RCxFQUF1RSxFQUF2RSxDQUFQO0FBQ0Y7OztrQ0FVVyxPLEVBQVMsSSxFQUFNLEUsRUFBSTtBQUM1QixlQUFPLEtBQUssUUFBTCxDQUFjLE9BQWQsY0FBaUMsS0FBSyxJQUF0QyxrQkFBdUQsT0FBdkQsRUFBa0UsRUFBQyxNQUFNLElBQVAsRUFBbEUsRUFBZ0YsRUFBaEYsQ0FBUDtBQUNGOzs7b0NBU2EsTyxFQUFTLEUsRUFBSTtBQUN4QixlQUFPLEtBQUssUUFBTCxDQUFjLFFBQWQsY0FBa0MsS0FBSyxJQUF2QyxrQkFBd0QsT0FBeEQsRUFBbUUsSUFBbkUsRUFBeUUsRUFBekUsQ0FBUDtBQUNGOzs7Ozs7QUFHSixTQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoiR2lzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuXG4vKipcbiAqIEEgR2lzdCBjYW4gcmV0cmlldmUgYW5kIG1vZGlmeSBnaXN0cy5cbiAqL1xuY2xhc3MgR2lzdCBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgR2lzdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBpZCBvZiB0aGUgZ2lzdCAobm90IHJlcXVpcmVkIHdoZW4gY3JlYXRpbmcgYSBnaXN0KVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihpZCwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9faWQgPSBpZDtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBGZXRjaCBhIGdpc3QuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI2dldC1hLXNpbmdsZS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBnaXN0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHJlYWQoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgZ2lzdC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy8jY3JlYXRlLWEtZ2lzdFxuICAgICogQHBhcmFtIHtPYmplY3R9IGdpc3QgLSB0aGUgZGF0YSBmb3IgdGhlIG5ldyBnaXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgZ2lzdCB1cG9uIGNyZWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZShnaXN0LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCAnL2dpc3RzJywgZ2lzdCwgY2IpXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX19pZCA9IHJlc3BvbnNlLmRhdGEuaWQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBnaXN0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNkZWxldGUtYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9naXN0cy8ke3RoaXMuX19pZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRm9yayBhIGdpc3QuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI2ZvcmstYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWNlaXZlIHRoZSBnaXN0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGZvcmsoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9naXN0cy8ke3RoaXMuX19pZH0vZm9ya3NgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGEgZ2lzdC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy8jZWRpdC1hLWdpc3RcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBnaXN0IC0gdGhlIG5ldyBkYXRhIGZvciB0aGUgZ2lzdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHRoZSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSBBUEkgcmVzdWx0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZShnaXN0LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9naXN0cy8ke3RoaXMuX19pZH1gLCBnaXN0LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogU3RhciBhIGdpc3QuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI3N0YXItYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBzdGFyKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC9naXN0cy8ke3RoaXMuX19pZH0vc3RhcmAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVbnN0YXIgYSBnaXN0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyN1bnN0YXItYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1bnN0YXIoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9zdGFyYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENoZWNrIGlmIGEgZ2lzdCBpcyBzdGFycmVkIGJ5IHRoZSB1c2VyLlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNjaGVjay1pZi1hLWdpc3QtaXMtc3RhcnJlZFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSBnaXN0IGlzIHN0YXJyZWQgYW5kIGZhbHNlIGlmIHRoZSBnaXN0IGlzIG5vdCBzdGFycmVkXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGlzU3RhcnJlZChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QyMDRvcjQwNChgL2dpc3RzLyR7dGhpcy5fX2lkfS9zdGFyYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGdpc3QncyBjb21tZW50c1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzL2NvbW1lbnRzLyNsaXN0LWNvbW1lbnRzLW9uLWEtZ2lzdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgYXJyYXkgb2YgY29tbWVudHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdENvbW1lbnRzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvZ2lzdHMvJHt0aGlzLl9faWR9L2NvbW1lbnRzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEZldGNoIG9uZSBvZiB0aGUgZ2lzdCdzIGNvbW1lbnRzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvY29tbWVudHMvI2dldC1hLXNpbmdsZS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gY29tbWVudCAtIHRoZSBpZCBvZiB0aGUgY29tbWVudFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tbWVudFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb21tZW50KGNvbW1lbnQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9naXN0cy8ke3RoaXMuX19pZH0vY29tbWVudHMvJHtjb21tZW50fWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDb21tZW50IG9uIGEgZ2lzdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzL2NvbW1lbnRzLyNjcmVhdGUtYS1jb21tZW50XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudCAtIHRoZSBjb21tZW50IHRvIGFkZFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHRoZSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSBBUEkgcmVzdWx0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUNvbW1lbnQoY29tbWVudCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9naXN0cy8ke3RoaXMuX19pZH0vY29tbWVudHNgLCB7Ym9keTogY29tbWVudH0sIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGEgY29tbWVudCBvbiB0aGUgZ2lzdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzL2NvbW1lbnRzLyNlZGl0LWEtY29tbWVudFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbW1lbnQgLSB0aGUgaWQgb2YgdGhlIGNvbW1lbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBib2R5IC0gdGhlIG5ldyBjb21tZW50XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtb2RpZmllZCBjb21tZW50XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGVkaXRDb21tZW50KGNvbW1lbnQsIGJvZHksIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9jb21tZW50cy8ke2NvbW1lbnR9YCwge2JvZHk6IGJvZHl9LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgY29tbWVudCBvbiB0aGUgZ2lzdC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy9jb21tZW50cy8jZGVsZXRlLWEtY29tbWVudFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbW1lbnQgLSB0aGUgaWQgb2YgdGhlIGNvbW1lbnRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVDb21tZW50KGNvbW1lbnQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9naXN0cy8ke3RoaXMuX19pZH0vY29tbWVudHMvJHtjb21tZW50fWAsIG51bGwsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHaXN0O1xuIl19
	//# sourceMappingURL=Gist.js.map


/***/ },

/***/ 915:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	   if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(916), __webpack_require__(933), __webpack_require__(936), __webpack_require__(941)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	   } else if (typeof exports !== "undefined") {
	      factory(module, require('axios'), require('debug'), require('js-base64'), require('es6-promise'));
	   } else {
	      var mod = {
	         exports: {}
	      };
	      factory(mod, global.axios, global.debug, global.jsBase64, global.Promise);
	      global.Requestable = mod.exports;
	   }
	})(this, function (module, _axios, _debug, _jsBase, _es6Promise) {
	   'use strict';
	
	   var _axios2 = _interopRequireDefault(_axios);
	
	   var _debug2 = _interopRequireDefault(_debug);
	
	   function _interopRequireDefault(obj) {
	      return obj && obj.__esModule ? obj : {
	         default: obj
	      };
	   }
	
	   var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	      return typeof obj;
	   } : function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	   };
	
	   var _createClass = function () {
	      function defineProperties(target, props) {
	         for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];
	            descriptor.enumerable = descriptor.enumerable || false;
	            descriptor.configurable = true;
	            if ("value" in descriptor) descriptor.writable = true;
	            Object.defineProperty(target, descriptor.key, descriptor);
	         }
	      }
	
	      return function (Constructor, protoProps, staticProps) {
	         if (protoProps) defineProperties(Constructor.prototype, protoProps);
	         if (staticProps) defineProperties(Constructor, staticProps);
	         return Constructor;
	      };
	   }();
	
	   function _classCallCheck(instance, Constructor) {
	      if (!(instance instanceof Constructor)) {
	         throw new TypeError("Cannot call a class as a function");
	      }
	   }
	
	   function _possibleConstructorReturn(self, call) {
	      if (!self) {
	         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	      }
	
	      return call && (typeof call === "object" || typeof call === "function") ? call : self;
	   }
	
	   function _inherits(subClass, superClass) {
	      if (typeof superClass !== "function" && superClass !== null) {
	         throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	      }
	
	      subClass.prototype = Object.create(superClass && superClass.prototype, {
	         constructor: {
	            value: subClass,
	            enumerable: false,
	            writable: true,
	            configurable: true
	         }
	      });
	      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	   }
	
	   var log = (0, _debug2.default)('github:request');
	
	   if (typeof Promise === 'undefined') {
	      (0, _es6Promise.polyfill)();
	   }
	
	   /**
	    * The error structure returned when a network call fails
	    */
	
	   var ResponseError = function (_Error) {
	      _inherits(ResponseError, _Error);
	
	      /**
	       * Construct a new ResponseError
	       * @param {string} message - an message to return instead of the the default error message
	       * @param {string} path - the requested path
	       * @param {Object} response - the object returned by Axios
	       */
	
	      function ResponseError(message, path, response) {
	         _classCallCheck(this, ResponseError);
	
	         var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResponseError).call(this, message));
	
	         _this.path = path;
	         _this.request = response.config;
	         _this.response = response;
	         _this.status = response.status;
	         return _this;
	      }
	
	      return ResponseError;
	   }(Error);
	
	   var Requestable = function () {
	      /**
	       * Either a username and password or an oauth token for Github
	       * @typedef {Object} Requestable.auth
	       * @prop {string} [username] - the Github username
	       * @prop {string} [password] - the user's password
	       * @prop {token} [token] - an OAuth token
	       */
	      /**
	       * Initialize the http internals.
	       * @param {Requestable.auth} [auth] - the credentials to authenticate to Github. If auth is
	       *                                  not provided request will be made unauthenticated
	       * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	       */
	
	      function Requestable(auth, apiBase) {
	         _classCallCheck(this, Requestable);
	
	         this.__apiBase = apiBase || 'https://api.github.com';
	         this.__auth = {
	            token: auth.token,
	            username: auth.username,
	            password: auth.password
	         };
	
	         if (auth.token) {
	            this.__authorizationHeader = 'token ' + auth.token;
	         } else if (auth.username && auth.password) {
	            this.__authorizationHeader = 'Basic ' + _jsBase.Base64.encode(auth.username + ':' + auth.password);
	         }
	      }
	
	      /**
	       * Compute the URL to use to make a request.
	       * @private
	       * @param {string} path - either a URL relative to the API base or an absolute URL
	       * @return {string} - the URL to use
	       */
	
	
	      _createClass(Requestable, [{
	         key: '__getURL',
	         value: function __getURL(path) {
	            var url = path;
	
	            if (path.indexOf('//') === -1) {
	               url = this.__apiBase + path;
	            }
	
	            var newCacheBuster = 'timestamp=' + new Date().getTime();
	            return url.replace(/(timestamp=\d+)/, newCacheBuster);
	         }
	      }, {
	         key: '__getRequestHeaders',
	         value: function __getRequestHeaders(raw) {
	            var headers = {
	               'Accept': raw ? 'application/vnd.github.v3.raw+json' : 'application/vnd.github.v3+json',
	               'Content-Type': 'application/json;charset=UTF-8'
	            };
	
	            if (this.__authorizationHeader) {
	               headers.Authorization = this.__authorizationHeader;
	            }
	
	            return headers;
	         }
	      }, {
	         key: '_getOptionsWithDefaults',
	         value: function _getOptionsWithDefaults() {
	            var requestOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            if (!(requestOptions.visibility || requestOptions.affiliation)) {
	               requestOptions.type = requestOptions.type || 'all';
	            }
	            requestOptions.sort = requestOptions.sort || 'updated';
	            requestOptions.per_page = requestOptions.per_page || '100'; // eslint-disable-line
	
	            return requestOptions;
	         }
	      }, {
	         key: '_dateToISO',
	         value: function _dateToISO(date) {
	            if (date && date instanceof Date) {
	               date = date.toISOString();
	            }
	
	            return date;
	         }
	      }, {
	         key: '_request',
	         value: function _request(method, path, data, cb, raw) {
	            var url = this.__getURL(path);
	            var headers = this.__getRequestHeaders(raw);
	            var queryParams = {};
	
	            var shouldUseDataAsParams = data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && methodHasNoBody(method);
	            if (shouldUseDataAsParams) {
	               queryParams = data;
	               data = undefined;
	            }
	
	            var config = {
	               url: url,
	               method: method,
	               headers: headers,
	               params: queryParams,
	               data: data,
	               responseType: raw ? 'text' : 'json'
	            };
	
	            log(config.method + ' to ' + config.url);
	            var requestPromise = (0, _axios2.default)(config).catch(callbackErrorOrThrow(cb, path));
	
	            if (cb) {
	               requestPromise.then(function (response) {
	                  cb(null, response.data || true, response);
	               });
	            }
	
	            return requestPromise;
	         }
	      }, {
	         key: '_request204or404',
	         value: function _request204or404(path, data, cb) {
	            var method = arguments.length <= 3 || arguments[3] === undefined ? 'GET' : arguments[3];
	
	            return this._request(method, path, data).then(function success(response) {
	               if (cb) {
	                  cb(null, true, response);
	               }
	               return true;
	            }, function failure(response) {
	               if (response.status === 404) {
	                  if (cb) {
	                     cb(null, false, response);
	                  }
	                  return false;
	               }
	
	               if (cb) {
	                  cb(response);
	               }
	               throw response;
	            });
	         }
	      }, {
	         key: '_requestAllPages',
	         value: function _requestAllPages(path, options, cb, results) {
	            var _this2 = this;
	
	            results = results || [];
	
	            return this._request('GET', path, options).then(function (response) {
	               var thisGroup = void 0;
	               if (response.data instanceof Array) {
	                  thisGroup = response.data;
	               } else if (response.data.items instanceof Array) {
	                  thisGroup = response.data.items;
	               } else {
	                  var message = 'cannot figure out how to append ' + response.data + ' to the result set';
	                  throw new ResponseError(message, path, response);
	               }
	               results.push.apply(results, thisGroup);
	
	               var nextUrl = getNextPage(response.headers.link);
	               if (nextUrl) {
	                  log('getting next page: ' + nextUrl);
	                  return _this2._requestAllPages(nextUrl, options, cb, results);
	               }
	
	               if (cb) {
	                  cb(null, results, response);
	               }
	
	               response.data = results;
	               return response;
	            }).catch(callbackErrorOrThrow(cb, path));
	         }
	      }]);
	
	      return Requestable;
	   }();
	
	   module.exports = Requestable;
	
	   // ////////////////////////// //
	   //  Private helper functions  //
	   // ////////////////////////// //
	   var METHODS_WITH_NO_BODY = ['GET', 'HEAD', 'DELETE'];
	   function methodHasNoBody(method) {
	      return METHODS_WITH_NO_BODY.indexOf(method) !== -1;
	   }
	
	   function getNextPage() {
	      var linksHeader = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	      var links = linksHeader.split(/\s*,\s*/); // splits and strips the urls
	      return links.reduce(function (nextUrl, link) {
	         if (link.search(/rel="next"/) !== -1) {
	            return (link.match(/<(.*)>/) || [])[1];
	         }
	
	         return nextUrl;
	      }, undefined);
	   }
	
	   function callbackErrorOrThrow(cb, path) {
	      return function handler(response) {
	         var message = 'error making request ' + response.config.method + ' ' + response.config.url;
	         var error = new ResponseError(message, path, response);
	         log(message + ' ' + JSON.stringify(response.data));
	         if (cb) {
	            log('going to error callback');
	            cb(error);
	         } else {
	            log('throwing error');
	            throw error;
	         }
	      };
	   }
	});
	//# sourceMappingURL=data:application/json;base64,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LEtBQUg7QUFDRixVQUhELE1BR087QUFDSixnQkFBSSxnQkFBSjtBQUNBLGtCQUFNLEtBQU47QUFDRjtBQUNILE9BWEQ7QUFZRiIsImZpbGUiOiJSZXF1ZXN0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICdqcy1iYXNlNjQnO1xuaW1wb3J0IHtwb2x5ZmlsbH0gZnJvbSAnZXM2LXByb21pc2UnO1xuXG5jb25zdCBsb2cgPSBkZWJ1ZygnZ2l0aHViOnJlcXVlc3QnKTtcblxuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgcG9seWZpbGwoKTtcbn1cblxuLyoqXG4gKiBUaGUgZXJyb3Igc3RydWN0dXJlIHJldHVybmVkIHdoZW4gYSBuZXR3b3JrIGNhbGwgZmFpbHNcbiAqL1xuY2xhc3MgUmVzcG9uc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgIC8qKlxuICAgICogQ29uc3RydWN0IGEgbmV3IFJlc3BvbnNlRXJyb3JcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gYW4gbWVzc2FnZSB0byByZXR1cm4gaW5zdGVhZCBvZiB0aGUgdGhlIGRlZmF1bHQgZXJyb3IgbWVzc2FnZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcmVxdWVzdGVkIHBhdGhcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSAtIHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgQXhpb3NcbiAgICAqL1xuICAgY29uc3RydWN0b3IobWVzc2FnZSwgcGF0aCwgcmVzcG9uc2UpIHtcbiAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgIHRoaXMucmVxdWVzdCA9IHJlc3BvbnNlLmNvbmZpZztcbiAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgfVxufVxuXG4vKipcbiAqIFJlcXVlc3RhYmxlIHdyYXBzIHRoZSBsb2dpYyBmb3IgbWFraW5nIGh0dHAgcmVxdWVzdHMgdG8gdGhlIEFQSVxuICovXG5jbGFzcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIEVpdGhlciBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBvciBhbiBvYXV0aCB0b2tlbiBmb3IgR2l0aHViXG4gICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBSZXF1ZXN0YWJsZS5hdXRoXG4gICAgKiBAcHJvcCB7c3RyaW5nfSBbdXNlcm5hbWVdIC0gdGhlIEdpdGh1YiB1c2VybmFtZVxuICAgICogQHByb3Age3N0cmluZ30gW3Bhc3N3b3JkXSAtIHRoZSB1c2VyJ3MgcGFzc3dvcmRcbiAgICAqIEBwcm9wIHt0b2tlbn0gW3Rva2VuXSAtIGFuIE9BdXRoIHRva2VuXG4gICAgKi9cbiAgIC8qKlxuICAgICogSW5pdGlhbGl6ZSB0aGUgaHR0cCBpbnRlcm5hbHMuXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIHRoZSBjcmVkZW50aWFscyB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViLiBJZiBhdXRoIGlzXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3QgcHJvdmlkZWQgcmVxdWVzdCB3aWxsIGJlIG1hZGUgdW5hdXRoZW50aWNhdGVkXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihhdXRoLCBhcGlCYXNlKSB7XG4gICAgICB0aGlzLl9fYXBpQmFzZSA9IGFwaUJhc2UgfHwgJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20nO1xuICAgICAgdGhpcy5fX2F1dGggPSB7XG4gICAgICAgICB0b2tlbjogYXV0aC50b2tlbixcbiAgICAgICAgIHVzZXJuYW1lOiBhdXRoLnVzZXJuYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6IGF1dGgucGFzc3dvcmRcbiAgICAgIH07XG5cbiAgICAgIGlmIChhdXRoLnRva2VuKSB7XG4gICAgICAgICB0aGlzLl9fYXV0aG9yaXphdGlvbkhlYWRlciA9ICd0b2tlbiAnICsgYXV0aC50b2tlbjtcbiAgICAgIH0gZWxzZSBpZiAoYXV0aC51c2VybmFtZSAmJiBhdXRoLnBhc3N3b3JkKSB7XG4gICAgICAgICB0aGlzLl9fYXV0aG9yaXphdGlvbkhlYWRlciA9ICdCYXNpYyAnICsgQmFzZTY0LmVuY29kZShhdXRoLnVzZXJuYW1lICsgJzonICsgYXV0aC5wYXNzd29yZCk7XG4gICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ29tcHV0ZSB0aGUgVVJMIHRvIHVzZSB0byBtYWtlIGEgcmVxdWVzdC5cbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIGVpdGhlciBhIFVSTCByZWxhdGl2ZSB0byB0aGUgQVBJIGJhc2Ugb3IgYW4gYWJzb2x1dGUgVVJMXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gdGhlIFVSTCB0byB1c2VcbiAgICAqL1xuICAgX19nZXRVUkwocGF0aCkge1xuICAgICAgbGV0IHVybCA9IHBhdGg7XG5cbiAgICAgIGlmIChwYXRoLmluZGV4T2YoJy8vJykgPT09IC0xKSB7XG4gICAgICAgICB1cmwgPSB0aGlzLl9fYXBpQmFzZSArIHBhdGg7XG4gICAgICB9XG5cbiAgICAgIGxldCBuZXdDYWNoZUJ1c3RlciA9ICd0aW1lc3RhbXA9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKC8odGltZXN0YW1wPVxcZCspLywgbmV3Q2FjaGVCdXN0ZXIpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENvbXB1dGUgdGhlIGhlYWRlcnMgcmVxdWlyZWQgZm9yIGFuIEFQSSByZXF1ZXN0LlxuICAgICogQHByaXZhdGVcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmF3IC0gaWYgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgSlNPTiBvciBhcyBhIHJhdyByZXF1ZXN0XG4gICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gdGhlIGhlYWRlcnMgdG8gdXNlIGluIHRoZSByZXF1ZXN0XG4gICAgKi9cbiAgIF9fZ2V0UmVxdWVzdEhlYWRlcnMocmF3KSB7XG4gICAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgICdBY2NlcHQnOiByYXcgPyAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52My5yYXcranNvbicgOiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uJyxcbiAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuX19hdXRob3JpemF0aW9uSGVhZGVyKSB7XG4gICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0aGlzLl9fYXV0aG9yaXphdGlvbkhlYWRlcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICB9XG5cbiAgIC8qKlxuICAgICogU2V0cyB0aGUgZGVmYXVsdCBvcHRpb25zIGZvciBBUEkgcmVxdWVzdHNcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdE9wdGlvbnM9e31dIC0gdGhlIGN1cnJlbnQgb3B0aW9ucyBmb3IgdGhlIHJlcXVlc3RcbiAgICAqIEByZXR1cm4ge09iamVjdH0gLSB0aGUgb3B0aW9ucyB0byBwYXNzIHRvIHRoZSByZXF1ZXN0XG4gICAgKi9cbiAgIF9nZXRPcHRpb25zV2l0aERlZmF1bHRzKHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgIGlmICghKHJlcXVlc3RPcHRpb25zLnZpc2liaWxpdHkgfHwgcmVxdWVzdE9wdGlvbnMuYWZmaWxpYXRpb24pKSB7XG4gICAgICAgICByZXF1ZXN0T3B0aW9ucy50eXBlID0gcmVxdWVzdE9wdGlvbnMudHlwZSB8fCAnYWxsJztcbiAgICAgIH1cbiAgICAgIHJlcXVlc3RPcHRpb25zLnNvcnQgPSByZXF1ZXN0T3B0aW9ucy5zb3J0IHx8ICd1cGRhdGVkJztcbiAgICAgIHJlcXVlc3RPcHRpb25zLnBlcl9wYWdlID0gcmVxdWVzdE9wdGlvbnMucGVyX3BhZ2UgfHwgJzEwMCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgcmV0dXJuIHJlcXVlc3RPcHRpb25zO1xuICAgfVxuXG4gICAvKipcbiAgICAqIGlmIGEgYERhdGVgIGlzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIGl0IHdpbGwgYmUgY29udmVydGVkIHRvIGFuIElTTyBzdHJpbmdcbiAgICAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBvYmplY3QgdG8gYXR0ZW1wdCB0byBjb29lcmNlIGludG8gYW4gSVNPIGRhdGUgc3RyaW5nXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gdGhlIElTTyByZXByZXNlbnRhdGlvbiBvZiBgZGF0ZWAgb3Igd2hhdGV2ZXIgd2FzIHBhc3NlZCBpbiBpZiBpdCB3YXMgbm90IGEgZGF0ZVxuICAgICovXG4gICBfZGF0ZVRvSVNPKGRhdGUpIHtcbiAgICAgIGlmIChkYXRlICYmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgIGRhdGUgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRlO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyB0aGUgcmVzdWx0IG9mIHRoZSBBUEkgcmVxdWVzdC5cbiAgICAqIEBjYWxsYmFjayBSZXF1ZXN0YWJsZS5jYWxsYmFja1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5FcnJvcn0gZXJyb3IgLSB0aGUgZXJyb3IgcmV0dXJuZWQgYnkgdGhlIEFQSSBvciBgbnVsbGBcbiAgICAqIEBwYXJhbSB7KE9iamVjdHx0cnVlKX0gcmVzdWx0IC0gdGhlIGRhdGEgcmV0dXJuZWQgYnkgdGhlIEFQSSBvciBgdHJ1ZWAgaWYgdGhlIEFQSSByZXR1cm5zIGAyMDQgTm8gQ29udGVudGBcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXF1ZXN0IC0gdGhlIHJhdyB7QGxpbmtjb2RlIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zI3Jlc3BvbnNlLXNjaGVtYSBSZXNwb25zZX1cbiAgICAqL1xuICAgLyoqXG4gICAgKiBNYWtlIGEgcmVxdWVzdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSB0aGUgbWV0aG9kIGZvciB0aGUgcmVxdWVzdCAoR0VULCBQVVQsIFBPU1QsIERFTEVURSlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIHBhdGggZm9yIHRoZSByZXF1ZXN0XG4gICAgKiBAcGFyYW0geyp9IFtkYXRhXSAtIHRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZlci4gRm9yIEhUVFAgbWV0aG9kcyB0aGF0IGRvbid0IGhhdmUgYSBib2R5IHRoZSBkYXRhXG4gICAgKiAgICAgICAgICAgICAgICAgICB3aWxsIGJlIHNlbnQgYXMgcXVlcnkgcGFyYW1ldGVyc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHRoZSBjYWxsYmFjayBmb3IgdGhlIHJlcXVlc3RcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jhdz1mYWxzZV0gLSBpZiB0aGUgcmVxdWVzdCBzaG91bGQgYmUgc2VudCBhcyByYXcuIElmIHRoaXMgaXMgYSBmYWxzeSB2YWx1ZSB0aGVuIHRoZVxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0IHdpbGwgYmUgbWFkZSBhcyBKU09OXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIF9yZXF1ZXN0KG1ldGhvZCwgcGF0aCwgZGF0YSwgY2IsIHJhdykge1xuICAgICAgY29uc3QgdXJsID0gdGhpcy5fX2dldFVSTChwYXRoKTtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLl9fZ2V0UmVxdWVzdEhlYWRlcnMocmF3KTtcbiAgICAgIGxldCBxdWVyeVBhcmFtcyA9IHt9O1xuXG4gICAgICBjb25zdCBzaG91bGRVc2VEYXRhQXNQYXJhbXMgPSBkYXRhICYmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpICYmIG1ldGhvZEhhc05vQm9keShtZXRob2QpO1xuICAgICAgaWYgKHNob3VsZFVzZURhdGFBc1BhcmFtcykge1xuICAgICAgICAgcXVlcnlQYXJhbXMgPSBkYXRhO1xuICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1zLFxuICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgIHJlc3BvbnNlVHlwZTogcmF3ID8gJ3RleHQnIDogJ2pzb24nXG4gICAgICB9O1xuXG4gICAgICBsb2coYCR7Y29uZmlnLm1ldGhvZH0gdG8gJHtjb25maWcudXJsfWApO1xuICAgICAgY29uc3QgcmVxdWVzdFByb21pc2UgPSBheGlvcyhjb25maWcpLmNhdGNoKGNhbGxiYWNrRXJyb3JPclRocm93KGNiLCBwYXRoKSk7XG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICAgcmVxdWVzdFByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNiKG51bGwsIHJlc3BvbnNlLmRhdGEgfHwgdHJ1ZSwgcmVzcG9uc2UpO1xuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXF1ZXN0UHJvbWlzZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBNYWtlIGEgcmVxdWVzdCB0byBhbiBlbmRwb2ludCB0aGUgcmV0dXJucyAyMDQgd2hlbiB0cnVlIGFuZCA0MDQgd2hlbiBmYWxzZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCB0byByZXF1ZXN0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIGFueSBxdWVyeSBwYXJhbWV0ZXJzIGZvciB0aGUgcmVxdWVzdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIHJlY2VpdmUgYHRydWVgIG9yIGBmYWxzZWBcbiAgICAqIEBwYXJhbSB7bWV0aG9kfSBbbWV0aG9kPUdFVF0gLSBIVFRQIE1ldGhvZCB0byB1c2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgX3JlcXVlc3QyMDRvcjQwNChwYXRoLCBkYXRhLCBjYiwgbWV0aG9kID0gJ0dFVCcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KG1ldGhvZCwgcGF0aCwgZGF0YSlcbiAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgY2IobnVsbCwgdHJ1ZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICB9LCBmdW5jdGlvbiBmYWlsdXJlKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgICAgY2IobnVsbCwgZmFsc2UsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICAvKipcbiAgICAqIE1ha2UgYSByZXF1ZXN0IGFuZCBmZXRjaCBhbGwgdGhlIGF2YWlsYWJsZSBkYXRhLiBHaXRodWIgd2lsbCBwYWdpbmF0ZSByZXNwb25zZXMgc28gZm9yIHF1ZXJpZXNcbiAgICAqIHRoYXQgbWlnaHQgc3BhbiBtdWx0aXBsZSBwYWdlcyB0aGlzIG1ldGhvZCBpcyBwcmVmZXJyZWQgdG8ge0BsaW5rIFJlcXVlc3RhYmxlI3JlcXVlc3R9XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIHRvIHJlcXVlc3RcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gaW5jbHVkZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHRoZSBmdW5jdGlvbiB0byByZWNlaXZlIHRoZSBkYXRhLiBUaGUgcmV0dXJuZWQgZGF0YSB3aWxsIGFsd2F5cyBiZSBhbiBhcnJheS5cbiAgICAqIEBwYXJhbSB7T2JqZWN0W119IHJlc3VsdHMgLSB0aGUgcGFydGlhbCByZXN1bHRzLiBUaGlzIGFyZ3VtZW50IGlzIGludGVuZGVkIGZvciBpbnRlcmFsIHVzZSBvbmx5LlxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSBhIHByb21pc2Ugd2hpY2ggd2lsbCByZXNvbHZlIHdoZW4gYWxsIHBhZ2VzIGhhdmUgYmVlbiBmZXRjaGVkXG4gICAgKiBAZGVwcmVjYXRlZCBUaGlzIHdpbGwgYmUgZm9sZGVkIGludG8ge0BsaW5rIFJlcXVlc3RhYmxlI19yZXF1ZXN0fSBpbiB0aGUgMi4wIHJlbGVhc2UuXG4gICAgKi9cbiAgIF9yZXF1ZXN0QWxsUGFnZXMocGF0aCwgb3B0aW9ucywgY2IsIHJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgcGF0aCwgb3B0aW9ucylcbiAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRoaXNHcm91cDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgIHRoaXNHcm91cCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEuaXRlbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgdGhpc0dyb3VwID0gcmVzcG9uc2UuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGBjYW5ub3QgZmlndXJlIG91dCBob3cgdG8gYXBwZW5kICR7cmVzcG9uc2UuZGF0YX0gdG8gdGhlIHJlc3VsdCBzZXRgO1xuICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlRXJyb3IobWVzc2FnZSwgcGF0aCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIHRoaXNHcm91cCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSBnZXROZXh0UGFnZShyZXNwb25zZS5oZWFkZXJzLmxpbmspO1xuICAgICAgICAgICAgaWYgKG5leHRVcmwpIHtcbiAgICAgICAgICAgICAgIGxvZyhgZ2V0dGluZyBuZXh0IHBhZ2U6ICR7bmV4dFVybH1gKTtcbiAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMobmV4dFVybCwgb3B0aW9ucywgY2IsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgIGNiKG51bGwsIHJlc3VsdHMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlc3VsdHM7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICB9KS5jYXRjaChjYWxsYmFja0Vycm9yT3JUaHJvdyhjYiwgcGF0aCkpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RhYmxlO1xuXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAvL1xuLy8gIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyAgLy9cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIC8vXG5jb25zdCBNRVRIT0RTX1dJVEhfTk9fQk9EWSA9IFsnR0VUJywgJ0hFQUQnLCAnREVMRVRFJ107XG5mdW5jdGlvbiBtZXRob2RIYXNOb0JvZHkobWV0aG9kKSB7XG4gICByZXR1cm4gTUVUSE9EU19XSVRIX05PX0JPRFkuaW5kZXhPZihtZXRob2QpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dFBhZ2UobGlua3NIZWFkZXIgPSAnJykge1xuICAgY29uc3QgbGlua3MgPSBsaW5rc0hlYWRlci5zcGxpdCgvXFxzKixcXHMqLyk7IC8vIHNwbGl0cyBhbmQgc3RyaXBzIHRoZSB1cmxzXG4gICByZXR1cm4gbGlua3MucmVkdWNlKGZ1bmN0aW9uKG5leHRVcmwsIGxpbmspIHtcbiAgICAgIGlmIChsaW5rLnNlYXJjaCgvcmVsPVwibmV4dFwiLykgIT09IC0xKSB7XG4gICAgICAgICByZXR1cm4gKGxpbmsubWF0Y2goLzwoLiopPi8pIHx8IFtdKVsxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRVcmw7XG4gICB9LCB1bmRlZmluZWQpO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja0Vycm9yT3JUaHJvdyhjYiwgcGF0aCkge1xuICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIocmVzcG9uc2UpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gYGVycm9yIG1ha2luZyByZXF1ZXN0ICR7cmVzcG9uc2UuY29uZmlnLm1ldGhvZH0gJHtyZXNwb25zZS5jb25maWcudXJsfWA7XG4gICAgICBsZXQgZXJyb3IgPSBuZXcgUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBwYXRoLCByZXNwb25zZSk7XG4gICAgICBsb2coYCR7bWVzc2FnZX0gJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKX1gKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICAgbG9nKCdnb2luZyB0byBlcnJvciBjYWxsYmFjaycpO1xuICAgICAgICAgY2IoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGxvZygndGhyb3dpbmcgZXJyb3InKTtcbiAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgfTtcbn1cbiJdfQ==
	//# sourceMappingURL=Requestable.js.map


/***/ },

/***/ 916:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(917);

/***/ },

/***/ 917:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(918);
	var utils = __webpack_require__(919);
	var dispatchRequest = __webpack_require__(920);
	var InterceptorManager = __webpack_require__(928);
	var isAbsoluteURL = __webpack_require__(929);
	var combineURLs = __webpack_require__(930);
	var bind = __webpack_require__(931);
	var transformData = __webpack_require__(924);
	
	function Axios(defaultConfig) {
	  this.defaults = utils.merge({}, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Don't allow overriding defaults.withCredentials
	  config.withCredentials = config.withCredentials || this.defaults.withCredentials;
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	var defaultInstance = new Axios(defaults);
	var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
	
	// Expose properties from defaultInstance
	axios.defaults = defaultInstance.defaults;
	axios.interceptors = defaultInstance.interceptors;
	
	// Factory for creating new instances
	axios.create = function create(defaultConfig) {
	  return new Axios(defaultConfig);
	};
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(932);
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});


/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(919);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	module.exports = {
	  transformRequest: [function transformRequestJSON(data, headers) {
	    if (utils.isFormData(data)) {
	      return data;
	    }
	    if (utils.isArrayBuffer(data)) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
	      // Set application/json if no Content-Type has been specified
	      if (!utils.isUndefined(headers)) {
	        utils.forEach(headers, function processContentTypeHeader(val, key) {
	          if (key.toLowerCase() === 'content-type') {
	            headers['Content-Type'] = val;
	          }
	        });
	
	        if (utils.isUndefined(headers['Content-Type'])) {
	          headers['Content-Type'] = 'application/json;charset=utf-8';
	        }
	      }
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponseJSON(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1
	};


/***/ },

/***/ 919:
/***/ function(module, exports) {

	'use strict';
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return toString.call(val) === '[object FormData]';
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  trim: trim
	};


/***/ },

/***/ 920:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  return new Promise(function executor(resolve, reject) {
	    try {
	      var adapter;
	
	      if (typeof config.adapter === 'function') {
	        // For custom adapter support
	        adapter = config.adapter;
	      } else if (typeof XMLHttpRequest !== 'undefined') {
	        // For browsers use XHR adapter
	        adapter = __webpack_require__(921);
	      } else if (typeof process !== 'undefined') {
	        // For node use HTTP adapter
	        adapter = __webpack_require__(921);
	      }
	
	      if (typeof adapter === 'function') {
	        adapter(resolve, reject, config);
	      }
	    } catch (e) {
	      reject(e);
	    }
	  });
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 921:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(919);
	var buildURL = __webpack_require__(922);
	var parseHeaders = __webpack_require__(923);
	var transformData = __webpack_require__(924);
	var isURLSameOrigin = __webpack_require__(925);
	var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(926);
	
	module.exports = function xhrAdapter(resolve, reject, config) {
	  var requestData = config.data;
	  var requestHeaders = config.headers;
	
	  if (utils.isFormData(requestData)) {
	    delete requestHeaders['Content-Type']; // Let the browser set it
	  }
	
	  var request = new XMLHttpRequest();
	  var loadEvent = 'onreadystatechange';
	  var xDomain = false;
	
	  // For IE 8/9 CORS support
	  // Only supports POST and GET calls and doesn't returns the response headers.
	  // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	  if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	    request = new window.XDomainRequest();
	    loadEvent = 'onload';
	    xDomain = true;
	  }
	
	  // HTTP basic authentication
	  if (config.auth) {
	    var username = config.auth.username || '';
	    var password = config.auth.password || '';
	    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	  }
	
	  request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	  // Set the request timeout in MS
	  request.timeout = config.timeout;
	
	  // For IE 9 CORS support.
	  request.onprogress = function handleProgress() {};
	  request.ontimeout = function handleTimeout() {};
	
	  // Listen for ready state
	  request[loadEvent] = function handleLoad() {
	    if (!request || (request.readyState !== 4 && !xDomain)) {
	      return;
	    }
	
	    // The request errored out and we didn't get a response, this will be
	    // handled by onerror instead
	    if (request.status === 0) {
	      return;
	    }
	
	    // Prepare the response
	    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	    var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	    var response = {
	      data: transformData(
	        responseData,
	        responseHeaders,
	        config.transformResponse
	      ),
	      // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	      status: request.status === 1223 ? 204 : request.status,
	      statusText: request.status === 1223 ? 'No Content' : request.statusText,
	      headers: responseHeaders,
	      config: config,
	      request: request
	    };
	
	    // Resolve or reject the Promise based on the status
	    ((response.status >= 200 && response.status < 300) ||
	     (!('status' in request) && request.responseText) ?
	      resolve :
	      reject)(response);
	
	    // Clean up request
	    request = null;
	  };
	
	  // Handle low level network errors
	  request.onerror = function handleError() {
	    // Real errors are hidden from us by the browser
	    // onerror should only fire if it's a network error
	    reject(new Error('Network Error'));
	
	    // Clean up request
	    request = null;
	  };
	
	  // Handle timeout
	  request.ontimeout = function handleTimeout() {
	    var err = new Error('timeout of ' + config.timeout + 'ms exceeded');
	    err.timeout = config.timeout;
	    err.code = 'ECONNABORTED';
	    reject(err);
	
	    // Clean up request
	    request = null;
	  };
	
	  // Add xsrf header
	  // This is only done if running in a standard browser environment.
	  // Specifically not if we're in a web worker, or react-native.
	  if (utils.isStandardBrowserEnv()) {
	    var cookies = __webpack_require__(927);
	
	    // Add xsrf header
	    var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;
	
	    if (xsrfValue) {
	      requestHeaders[config.xsrfHeaderName] = xsrfValue;
	    }
	  }
	
	  // Add headers to the request
	  if ('setRequestHeader' in request) {
	    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	        // Remove Content-Type if data is undefined
	        delete requestHeaders[key];
	      } else {
	        // Otherwise add header to the request
	        request.setRequestHeader(key, val);
	      }
	    });
	  }
	
	  // Add withCredentials to request if needed
	  if (config.withCredentials) {
	    request.withCredentials = true;
	  }
	
	  // Add responseType to request if needed
	  if (config.responseType) {
	    try {
	      request.responseType = config.responseType;
	    } catch (e) {
	      if (request.responseType !== 'json') {
	        throw e;
	      }
	    }
	  }
	
	  // Handle progress if needed
	  if (config.progress) {
	    if (config.method === 'post' || config.method === 'put') {
	      request.upload.addEventListener('progress', config.progress);
	    } else if (config.method === 'get') {
	      request.addEventListener('progress', config.progress);
	    }
	  }
	
	  // Format request data
	  if (utils.isArrayBuffer(requestData)) {
	    requestData = new DataView(requestData);
	  }
	
	  if (requestData === undefined) {
	    requestData = null;
	  }
	
	  // Send the request
	  request.send(requestData);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 922:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(919);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};
	


/***/ },

/***/ 923:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(919);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },

/***/ 924:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(919);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },

/***/ 925:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(919);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },

/***/ 926:
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },

/***/ 927:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(919);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },

/***/ 928:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(919);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },

/***/ 929:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },

/***/ 930:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },

/***/ 931:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },

/***/ 932:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },

/***/ 936:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $
	 *
	 *  Licensed under the MIT license.
	 *    http://opensource.org/licenses/mit-license
	 *
	 *  References:
	 *    http://en.wikipedia.org/wiki/Base64
	 */
	
	(function(global) {
	    'use strict';
	    // existing version for noConflict()
	    var _Base64 = global.Base64;
	    var version = "2.1.9";
	    // if node.js, we use Buffer
	    var buffer;
	    if (typeof module !== 'undefined' && module.exports) {
	        try {
	            buffer = __webpack_require__(937).Buffer;
	        } catch (err) {}
	    }
	    // constants
	    var b64chars
	        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	    var b64tab = function(bin) {
	        var t = {};
	        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
	        return t;
	    }(b64chars);
	    var fromCharCode = String.fromCharCode;
	    // encoder stuff
	    var cb_utob = function(c) {
	        if (c.length < 2) {
	            var cc = c.charCodeAt(0);
	            return cc < 0x80 ? c
	                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
	                                + fromCharCode(0x80 | (cc & 0x3f)))
	                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
	                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
	                   + fromCharCode(0x80 | ( cc         & 0x3f)));
	        } else {
	            var cc = 0x10000
	                + (c.charCodeAt(0) - 0xD800) * 0x400
	                + (c.charCodeAt(1) - 0xDC00);
	            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
	                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
	                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
	                    + fromCharCode(0x80 | ( cc         & 0x3f)));
	        }
	    };
	    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
	    var utob = function(u) {
	        return u.replace(re_utob, cb_utob);
	    };
	    var cb_encode = function(ccc) {
	        var padlen = [0, 2, 1][ccc.length % 3],
	        ord = ccc.charCodeAt(0) << 16
	            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
	            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
	        chars = [
	            b64chars.charAt( ord >>> 18),
	            b64chars.charAt((ord >>> 12) & 63),
	            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
	            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
	        ];
	        return chars.join('');
	    };
	    var btoa = global.btoa ? function(b) {
	        return global.btoa(b);
	    } : function(b) {
	        return b.replace(/[\s\S]{1,3}/g, cb_encode);
	    };
	    var _encode = buffer ? function (u) {
	        return (u.constructor === buffer.constructor ? u : new buffer(u))
	        .toString('base64')
	    }
	    : function (u) { return btoa(utob(u)) }
	    ;
	    var encode = function(u, urisafe) {
	        return !urisafe
	            ? _encode(String(u))
	            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
	                return m0 == '+' ? '-' : '_';
	            }).replace(/=/g, '');
	    };
	    var encodeURI = function(u) { return encode(u, true) };
	    // decoder stuff
	    var re_btou = new RegExp([
	        '[\xC0-\xDF][\x80-\xBF]',
	        '[\xE0-\xEF][\x80-\xBF]{2}',
	        '[\xF0-\xF7][\x80-\xBF]{3}'
	    ].join('|'), 'g');
	    var cb_btou = function(cccc) {
	        switch(cccc.length) {
	        case 4:
	            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
	                |    ((0x3f & cccc.charCodeAt(1)) << 12)
	                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
	                |     (0x3f & cccc.charCodeAt(3)),
	            offset = cp - 0x10000;
	            return (fromCharCode((offset  >>> 10) + 0xD800)
	                    + fromCharCode((offset & 0x3FF) + 0xDC00));
	        case 3:
	            return fromCharCode(
	                ((0x0f & cccc.charCodeAt(0)) << 12)
	                    | ((0x3f & cccc.charCodeAt(1)) << 6)
	                    |  (0x3f & cccc.charCodeAt(2))
	            );
	        default:
	            return  fromCharCode(
	                ((0x1f & cccc.charCodeAt(0)) << 6)
	                    |  (0x3f & cccc.charCodeAt(1))
	            );
	        }
	    };
	    var btou = function(b) {
	        return b.replace(re_btou, cb_btou);
	    };
	    var cb_decode = function(cccc) {
	        var len = cccc.length,
	        padlen = len % 4,
	        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
	            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
	            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
	            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
	        chars = [
	            fromCharCode( n >>> 16),
	            fromCharCode((n >>>  8) & 0xff),
	            fromCharCode( n         & 0xff)
	        ];
	        chars.length -= [0, 0, 2, 1][padlen];
	        return chars.join('');
	    };
	    var atob = global.atob ? function(a) {
	        return global.atob(a);
	    } : function(a){
	        return a.replace(/[\s\S]{1,4}/g, cb_decode);
	    };
	    var _decode = buffer ? function(a) {
	        return (a.constructor === buffer.constructor
	                ? a : new buffer(a, 'base64')).toString();
	    }
	    : function(a) { return btou(atob(a)) };
	    var decode = function(a){
	        return _decode(
	            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
	                .replace(/[^A-Za-z0-9\+\/]/g, '')
	        );
	    };
	    var noConflict = function() {
	        var Base64 = global.Base64;
	        global.Base64 = _Base64;
	        return Base64;
	    };
	    // export Base64
	    global.Base64 = {
	        VERSION: version,
	        atob: atob,
	        btoa: btoa,
	        fromBase64: decode,
	        toBase64: encode,
	        utob: utob,
	        encode: encode,
	        encodeURI: encodeURI,
	        btou: btou,
	        decode: decode,
	        noConflict: noConflict
	    };
	    // if ES5 is available, make Base64.extendString() available
	    if (typeof Object.defineProperty === 'function') {
	        var noEnum = function(v){
	            return {value:v,enumerable:false,writable:true,configurable:true};
	        };
	        global.Base64.extendString = function () {
	            Object.defineProperty(
	                String.prototype, 'fromBase64', noEnum(function () {
	                    return decode(this)
	                }));
	            Object.defineProperty(
	                String.prototype, 'toBase64', noEnum(function (urisafe) {
	                    return encode(this, urisafe)
	                }));
	            Object.defineProperty(
	                String.prototype, 'toBase64URI', noEnum(function () {
	                    return encode(this, true)
	                }));
	        };
	    }
	    // that's it!
	    if (global['Meteor']) {
	       Base64 = global.Base64; // for normal export in Meteor.js
	    }
	})(this);


/***/ },

/***/ 937:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(938)
	var ieee754 = __webpack_require__(939)
	var isArray = __webpack_require__(940)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(937).Buffer, (function() { return this; }())))

/***/ },

/***/ 938:
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },

/***/ 939:
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },

/***/ 940:
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 941:
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  return function () {
	    vertxNext(flush);
	  };
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(942);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	polyfill();
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295), (function() { return this; }())))

/***/ },

/***/ 942:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 943:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	   if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915), __webpack_require__(933)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	   } else if (typeof exports !== "undefined") {
	      factory(module, require('./Requestable'), require('debug'));
	   } else {
	      var mod = {
	         exports: {}
	      };
	      factory(mod, global.Requestable, global.debug);
	      global.User = mod.exports;
	   }
	})(this, function (module, _Requestable2, _debug) {
	   'use strict';
	
	   var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	   var _debug2 = _interopRequireDefault(_debug);
	
	   function _interopRequireDefault(obj) {
	      return obj && obj.__esModule ? obj : {
	         default: obj
	      };
	   }
	
	   function _classCallCheck(instance, Constructor) {
	      if (!(instance instanceof Constructor)) {
	         throw new TypeError("Cannot call a class as a function");
	      }
	   }
	
	   var _createClass = function () {
	      function defineProperties(target, props) {
	         for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];
	            descriptor.enumerable = descriptor.enumerable || false;
	            descriptor.configurable = true;
	            if ("value" in descriptor) descriptor.writable = true;
	            Object.defineProperty(target, descriptor.key, descriptor);
	         }
	      }
	
	      return function (Constructor, protoProps, staticProps) {
	         if (protoProps) defineProperties(Constructor.prototype, protoProps);
	         if (staticProps) defineProperties(Constructor, staticProps);
	         return Constructor;
	      };
	   }();
	
	   function _possibleConstructorReturn(self, call) {
	      if (!self) {
	         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	      }
	
	      return call && (typeof call === "object" || typeof call === "function") ? call : self;
	   }
	
	   function _inherits(subClass, superClass) {
	      if (typeof superClass !== "function" && superClass !== null) {
	         throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	      }
	
	      subClass.prototype = Object.create(superClass && superClass.prototype, {
	         constructor: {
	            value: subClass,
	            enumerable: false,
	            writable: true,
	            configurable: true
	         }
	      });
	      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	   }
	
	   var log = (0, _debug2.default)('github:user');
	
	   /**
	    * A User allows scoping of API requests to a particular Github user.
	    */
	
	   var User = function (_Requestable) {
	      _inherits(User, _Requestable);
	
	      /**
	       * Create a User.
	       * @param {string} [username] - the user to use for user-scoped queries
	       * @param {Requestable.auth} [auth] - information required to authenticate to Github
	       * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	       */
	
	      function User(username, auth, apiBase) {
	         _classCallCheck(this, User);
	
	         var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this, auth, apiBase));
	
	         _this.__user = username;
	         return _this;
	      }
	
	      /**
	       * Get the url for the request. (dependent on if we're requesting for the authenticated user or not)
	       * @private
	       * @param {string} endpoint - the endpoint being requested
	       * @return {string} - the resolved endpoint
	       */
	
	
	      _createClass(User, [{
	         key: '__getScopedUrl',
	         value: function __getScopedUrl(endpoint) {
	            if (this.__user) {
	               return endpoint ? '/users/' + this.__user + '/' + endpoint : '/users/' + this.__user;
	            } else {
	               // eslint-disable-line
	               switch (endpoint) {
	                  case '':
	                     return '/user';
	
	                  case 'notifications':
	                  case 'gists':
	                     return '/' + endpoint;
	
	                  default:
	                     return '/user/' + endpoint;
	               }
	            }
	         }
	      }, {
	         key: 'listRepos',
	         value: function listRepos(options, cb) {
	            if (typeof options === 'function') {
	               cb = options;
	               options = {};
	            }
	
	            options = this._getOptionsWithDefaults(options);
	
	            log('Fetching repositories with options: ' + JSON.stringify(options));
	            return this._requestAllPages(this.__getScopedUrl('repos'), options, cb);
	         }
	      }, {
	         key: 'listOrgs',
	         value: function listOrgs(cb) {
	            return this._request('GET', this.__getScopedUrl('orgs'), null, cb);
	         }
	      }, {
	         key: 'listGists',
	         value: function listGists(cb) {
	            return this._request('GET', this.__getScopedUrl('gists'), null, cb);
	         }
	      }, {
	         key: 'listNotifications',
	         value: function listNotifications(options, cb) {
	            options = options || {};
	            if (typeof options === 'function') {
	               cb = options;
	               options = {};
	            }
	
	            options.since = this._dateToISO(options.since);
	            options.before = this._dateToISO(options.before);
	
	            return this._request('GET', this.__getScopedUrl('notifications'), options, cb);
	         }
	      }, {
	         key: 'getProfile',
	         value: function getProfile(cb) {
	            return this._request('GET', this.__getScopedUrl(''), null, cb);
	         }
	      }, {
	         key: 'listStarredRepos',
	         value: function listStarredRepos(cb) {
	            var requestOptions = this._getOptionsWithDefaults();
	            return this._requestAllPages(this.__getScopedUrl('starred'), requestOptions, cb);
	         }
	      }, {
	         key: 'follow',
	         value: function follow(username, cb) {
	            return this._request('PUT', '/user/following/' + this.__user, null, cb);
	         }
	      }, {
	         key: 'unfollow',
	         value: function unfollow(username, cb) {
	            return this._request('DELETE', '/user/following/' + this.__user, null, cb);
	         }
	      }, {
	         key: 'createRepo',
	         value: function createRepo(options, cb) {
	            return this._request('POST', '/user/repos', options, cb);
	         }
	      }]);
	
	      return User;
	   }(_Requestable3.default);
	
	   module.exports = User;
	});
	//# sourceMappingURL=data:application/json;base64,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Q0FBYyxRQUFkLHVCQUEyQyxLQUFLLE1BQWhELEVBQTBELElBQTFELEVBQWdFLEVBQWhFLENBQVA7QUFDRjs7O29DQVNVLE8sRUFBUyxFLEVBQUk7QUFDckIsbUJBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxFQUFzQixhQUF0QixFQUFxQyxPQUFyQyxFQUE4QyxFQUE5QyxDQUFQO0FBQ0Y7Ozs7OztBQUdKLFVBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nID0gZGVidWcoJ2dpdGh1Yjp1c2VyJyk7XG5cbi8qKlxuICogQSBVc2VyIGFsbG93cyBzY29waW5nIG9mIEFQSSByZXF1ZXN0cyB0byBhIHBhcnRpY3VsYXIgR2l0aHViIHVzZXIuXG4gKi9cbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIFVzZXIuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJuYW1lXSAtIHRoZSB1c2VyIHRvIHVzZSBmb3IgdXNlci1zY29wZWQgcXVlcmllc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9fdXNlciA9IHVzZXJuYW1lO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCB0aGUgdXJsIGZvciB0aGUgcmVxdWVzdC4gKGRlcGVuZGVudCBvbiBpZiB3ZSdyZSByZXF1ZXN0aW5nIGZvciB0aGUgYXV0aGVudGljYXRlZCB1c2VyIG9yIG5vdClcbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgLSB0aGUgZW5kcG9pbnQgYmVpbmcgcmVxdWVzdGVkXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gdGhlIHJlc29sdmVkIGVuZHBvaW50XG4gICAgKi9cbiAgIF9fZ2V0U2NvcGVkVXJsKGVuZHBvaW50KSB7XG4gICAgICBpZiAodGhpcy5fX3VzZXIpIHtcbiAgICAgICAgIHJldHVybiBlbmRwb2ludCA/XG4gICAgICAgICAgICBgL3VzZXJzLyR7dGhpcy5fX3VzZXJ9LyR7ZW5kcG9pbnR9YCA6XG4gICAgICAgICAgICBgL3VzZXJzLyR7dGhpcy5fX3VzZXJ9YFxuICAgICAgICAgICAgO1xuXG4gICAgICB9IGVsc2UgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICBzd2l0Y2ggKGVuZHBvaW50KSB7XG4gICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgcmV0dXJuICcvdXNlcic7XG5cbiAgICAgICAgICAgIGNhc2UgJ25vdGlmaWNhdGlvbnMnOlxuICAgICAgICAgICAgY2FzZSAnZ2lzdHMnOlxuICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtlbmRwb2ludH1gO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgcmV0dXJuIGAvdXNlci8ke2VuZHBvaW50fWA7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdXNlcidzIHJlcG9zaXRvcmllc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNsaXN0LXVzZXItcmVwb3NpdG9yaWVzXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIC0gYW55IG9wdGlvbnMgdG8gcmVmaW5lIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RSZXBvcyhvcHRpb25zLCBjYikge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMgPSB0aGlzLl9nZXRPcHRpb25zV2l0aERlZmF1bHRzKG9wdGlvbnMpO1xuXG4gICAgICBsb2coYEZldGNoaW5nIHJlcG9zaXRvcmllcyB3aXRoIG9wdGlvbnM6ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucyl9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKHRoaXMuX19nZXRTY29wZWRVcmwoJ3JlcG9zJyksIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBvcmdzIHRoYXQgdGhlIHVzZXIgYmVsb25ncyB0b1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvI2xpc3QtdXNlci1vcmdhbml6YXRpb25zXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIG9yZ2FuaXphdGlvbnNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdE9yZ3MoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCB0aGlzLl9fZ2V0U2NvcGVkVXJsKCdvcmdzJyksIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSB1c2VyJ3MgZ2lzdHNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy8jbGlzdC1hLXVzZXJzLWdpc3RzXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGdpc3RzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RHaXN0cyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIHRoaXMuX19nZXRTY29wZWRVcmwoJ2dpc3RzJyksIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSB1c2VyJ3Mgbm90aWZpY2F0aW9uc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2FjdGl2aXR5L25vdGlmaWNhdGlvbnMvI2xpc3QteW91ci1ub3RpZmljYXRpb25zXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIC0gYW55IG9wdGlvbnMgdG8gcmVmaW5lIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3ROb3RpZmljYXRpb25zKG9wdGlvbnMsIGNiKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY2IgPSBvcHRpb25zO1xuICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnNpbmNlID0gdGhpcy5fZGF0ZVRvSVNPKG9wdGlvbnMuc2luY2UpO1xuICAgICAgb3B0aW9ucy5iZWZvcmUgPSB0aGlzLl9kYXRlVG9JU08ob3B0aW9ucy5iZWZvcmUpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgdGhpcy5fX2dldFNjb3BlZFVybCgnbm90aWZpY2F0aW9ucycpLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogU2hvdyB0aGUgdXNlcidzIHByb2ZpbGVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My91c2Vycy8jZ2V0LWEtc2luZ2xlLXVzZXJcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHVzZXIncyBpbmZvcm1hdGlvblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRQcm9maWxlKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgdGhpcy5fX2dldFNjb3BlZFVybCgnJyksIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXRzIHRoZSBsaXN0IG9mIHN0YXJyZWQgcmVwb3NpdG9yaWVzIGZvciB0aGUgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2FjdGl2aXR5L3N0YXJyaW5nLyNsaXN0LXJlcG9zaXRvcmllcy1iZWluZy1zdGFycmVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHN0YXJyZWQgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RTdGFycmVkUmVwb3MoY2IpIHtcbiAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IHRoaXMuX2dldE9wdGlvbnNXaXRoRGVmYXVsdHMoKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXModGhpcy5fX2dldFNjb3BlZFVybCgnc3RhcnJlZCcpLCByZXF1ZXN0T3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEhhdmUgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlciBmb2xsb3cgdGhpcyB1c2VyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvdXNlcnMvZm9sbG93ZXJzLyNmb2xsb3ctYS11c2VyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgLSB0aGUgdXNlciB0byBmb2xsb3dcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBmb2xsb3codXNlcm5hbWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC91c2VyL2ZvbGxvd2luZy8ke3RoaXMuX191c2VyfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBIYXZlIHRoZSBjdXJyZW50bHkgYXV0aGVudGljYXRlZCB1c2VyIHVuZm9sbG93IHRoaXMgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3VzZXJzL2ZvbGxvd2Vycy8jZm9sbG93LWEtdXNlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIC0gdGhlIHVzZXIgdG8gdW5mb2xsb3dcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSByZWNlaXZlcyB0cnVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVuZm9sbG93KHVzZXJuYW1lLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvdXNlci9mb2xsb3dpbmcvJHt0aGlzLl9fdXNlcn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IHJlcG9zaXRvcnkgZm9yIHRoZSBjdXJyZW50bHkgYXV0aGVudGljYXRlZCB1c2VyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2NyZWF0ZVxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSB0aGUgcmVwb3NpdG9yeSBkZWZpbml0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBBUEkgcmVzcG9uc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlUmVwbyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCAnL3VzZXIvcmVwb3MnLCBvcHRpb25zLCBjYik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlcjtcbiJdfQ==
	//# sourceMappingURL=User.js.map


/***/ },

/***/ 944:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('./Requestable'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.Requestable);
	    global.Issue = mod.exports;
	  }
	})(this, function (module, _Requestable2) {
	  'use strict';
	
	  var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var Issue = function (_Requestable) {
	    _inherits(Issue, _Requestable);
	
	    /**
	     * Create a new Issue
	     * @param {string} repository - the full name of the repository (`:user/:repo`) to get issues for
	     * @param {Requestable.auth} [auth] - information required to authenticate to Github
	     * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	     */
	
	    function Issue(repository, auth, apiBase) {
	      _classCallCheck(this, Issue);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Issue).call(this, auth, apiBase));
	
	      _this.__repository = repository;
	      return _this;
	    }
	
	    /**
	     * Create a new issue
	     * @see https://developer.github.com/v3/issues/#create-an-issue
	     * @param {Object} issueData - the issue to create
	     * @param {Requestable.callback} [cb] - will receive the created issue
	     * @return {Promise} - the promise for the http request
	     */
	
	
	    _createClass(Issue, [{
	      key: 'createIssue',
	      value: function createIssue(issueData, cb) {
	        return this._request('POST', '/repos/' + this.__repository + '/issues', issueData, cb);
	      }
	    }, {
	      key: 'listIssues',
	      value: function listIssues(options, cb) {
	        return this._requestAllPages('/repos/' + this.__repository + '/issues', options, cb);
	      }
	    }, {
	      key: 'listIssueEvents',
	      value: function listIssueEvents(issue, cb) {
	        return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue + '/events', null, cb);
	      }
	    }, {
	      key: 'listIssueComments',
	      value: function listIssueComments(issue, cb) {
	        return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue + '/comments', null, cb);
	      }
	    }, {
	      key: 'getIssueComment',
	      value: function getIssueComment(id, cb) {
	        return this._request('GET', '/repos/' + this.__repository + '/issues/comments/' + id, null, cb);
	      }
	    }, {
	      key: 'createIssueComment',
	      value: function createIssueComment(issue, comment, cb) {
	        return this._request('POST', '/repos/' + this.__repository + '/issues/' + issue + '/comments', { body: comment }, cb);
	      }
	    }, {
	      key: 'editIssueComment',
	      value: function editIssueComment(id, comment, cb) {
	        return this._request('PATCH', '/repos/' + this.__repository + '/issues/comments/' + id, { body: comment }, cb);
	      }
	    }, {
	      key: 'deleteIssueComment',
	      value: function deleteIssueComment(id, cb) {
	        return this._request('DELETE', '/repos/' + this.__repository + '/issues/comments/' + id, null, cb);
	      }
	    }, {
	      key: 'editIssue',
	      value: function editIssue(issue, issueData, cb) {
	        return this._request('PATCH', '/repos/' + this.__repository + '/issues/' + issue, issueData, cb);
	      }
	    }, {
	      key: 'getIssue',
	      value: function getIssue(issue, cb) {
	        return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue, null, cb);
	      }
	    }, {
	      key: 'listMilestones',
	      value: function listMilestones(options, cb) {
	        return this._request('GET', '/repos/' + this.__repository + '/milestones', options, cb);
	      }
	    }, {
	      key: 'getMilestone',
	      value: function getMilestone(milestone, cb) {
	        return this._request('GET', '/repos/' + this.__repository + '/milestones/' + milestone, null, cb);
	      }
	    }, {
	      key: 'createMilestone',
	      value: function createMilestone(milestoneData, cb) {
	        return this._request('POST', '/repos/' + this.__repository + '/milestones', milestoneData, cb);
	      }
	    }, {
	      key: 'editMilestone',
	      value: function editMilestone(milestone, milestoneData, cb) {
	        return this._request('PATCH', '/repos/' + this.__repository + '/milestones/' + milestone, milestoneData, cb);
	      }
	    }, {
	      key: 'deleteMilestone',
	      value: function deleteMilestone(milestone, cb) {
	        return this._request('DELETE', '/repos/' + this.__repository + '/milestones/' + milestone, null, cb);
	      }
	    }]);
	
	    return Issue;
	  }(_Requestable3.default);
	
	  module.exports = Issue;
	});
	//# sourceMappingURL=data:application/json;base64,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b0NBVWEsUyxFQUFXLGEsRUFBZSxFLEVBQUk7QUFDekMsZUFBTyxLQUFLLFFBQUwsQ0FBYyxPQUFkLGNBQWlDLEtBQUssWUFBdEMsb0JBQWlFLFNBQWpFLEVBQThFLGFBQTlFLEVBQTZGLEVBQTdGLENBQVA7QUFDRjs7O3NDQVNlLFMsRUFBVyxFLEVBQUk7QUFDNUIsZUFBTyxLQUFLLFFBQUwsQ0FBYyxRQUFkLGNBQWtDLEtBQUssWUFBdkMsb0JBQWtFLFNBQWxFLEVBQStFLElBQS9FLEVBQXFGLEVBQXJGLENBQVA7QUFDRjs7Ozs7O0FBR0osU0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Iklzc3VlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5cbi8qKlxuICogSXNzdWUgd3JhcHMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gZ2V0IGlzc3VlcyBmb3IgcmVwb3NpdG9yaWVzXG4gKi9cbmNsYXNzIElzc3VlIGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgSXNzdWVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXBvc2l0b3J5IC0gdGhlIGZ1bGwgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeSAoYDp1c2VyLzpyZXBvYCkgdG8gZ2V0IGlzc3VlcyBmb3JcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gW2F1dGhdIC0gaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gYXV0aGVudGljYXRlIHRvIEdpdGh1YlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmdpdGh1Yi5jb21dIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqL1xuICAgY29uc3RydWN0b3IocmVwb3NpdG9yeSwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9fcmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzLyNjcmVhdGUtYW4taXNzdWVcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBpc3N1ZURhdGEgLSB0aGUgaXNzdWUgdG8gY3JlYXRlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjcmVhdGVkIGlzc3VlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUlzc3VlKGlzc3VlRGF0YSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXNgLCBpc3N1ZURhdGEsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBpc3N1ZXMgZm9yIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzLyNsaXN0LWlzc3Vlcy1mb3ItYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGZpbHRlcmluZyBvcHRpb25zXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBhcnJheSBvZiBpc3N1ZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdElzc3VlcyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBldmVudHMgZm9yIGFuIGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL2V2ZW50cy8jbGlzdC1ldmVudHMtZm9yLWFuLWlzc3VlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaXNzdWUgLSB0aGUgaXNzdWUgdG8gZ2V0IGV2ZW50cyBmb3JcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgZXZlbnRzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RJc3N1ZUV2ZW50cyhpc3N1ZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlcy8ke2lzc3VlfS9ldmVudHNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCBjb21tZW50cyBvbiBhbiBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9jb21tZW50cy8jbGlzdC1jb21tZW50cy1vbi1hbi1pc3N1ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IGlzc3VlIC0gdGhlIGlkIG9mIHRoZSBpc3N1ZSB0byBnZXQgY29tbWVudHMgZnJvbVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tbWVudHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdElzc3VlQ29tbWVudHMoaXNzdWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXMvJHtpc3N1ZX0vY29tbWVudHNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgc2luZ2xlIGNvbW1lbnQgb24gYW4gaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvY29tbWVudHMvI2dldC1hLXNpbmdsZS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSB0aGUgY29tbWVudCBpZCB0byBnZXRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1lbnRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0SXNzdWVDb21tZW50KGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzL2NvbW1lbnRzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENvbW1lbnQgb24gYW4gaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvY29tbWVudHMvI2NyZWF0ZS1hLWNvbW1lbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpc3N1ZSAtIHRoZSBpZCBvZiB0aGUgaXNzdWUgdG8gY29tbWVudCBvblxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnQgLSB0aGUgY29tbWVudCB0byBhZGRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNyZWF0ZWQgY29tbWVudFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVJc3N1ZUNvbW1lbnQoaXNzdWUsIGNvbW1lbnQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzLyR7aXNzdWV9L2NvbW1lbnRzYCwge2JvZHk6IGNvbW1lbnR9LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRWRpdCBhIGNvbW1lbnQgb24gYW4gaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvY29tbWVudHMvI2VkaXQtYS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSB0aGUgY29tbWVudCBpZCB0byBlZGl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudCAtIHRoZSBjb21tZW50IHRvIGVkaXRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGVkaXRlZCBjb21tZW50XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGVkaXRJc3N1ZUNvbW1lbnQoaWQsIGNvbW1lbnQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlcy9jb21tZW50cy8ke2lkfWAsIHtib2R5OiBjb21tZW50fSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIGNvbW1lbnQgb24gYW4gaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvY29tbWVudHMvI2RlbGV0ZS1hLWNvbW1lbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIHRoZSBjb21tZW50IGlkIHRvIGRlbGV0ZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlSXNzdWVDb21tZW50KGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzL2NvbW1lbnRzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEVkaXQgYW4gaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvI2VkaXQtYW4taXNzdWVcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpc3N1ZSAtIHRoZSBpc3N1ZSBudW1iZXIgdG8gZWRpdFxuICAgICogQHBhcmFtIHtPYmplY3R9IGlzc3VlRGF0YSAtIHRoZSBuZXcgaXNzdWUgZGF0YVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbW9kaWZpZWQgaXNzdWVcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZWRpdElzc3VlKGlzc3VlLCBpc3N1ZURhdGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlcy8ke2lzc3VlfWAsIGlzc3VlRGF0YSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIHBhcnRpY3VsYXIgaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvI2dldC1hLXNpbmdsZS1pc3N1ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IGlzc3VlIC0gdGhlIGlzc3VlIG51bWJlciB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgaXNzdWVcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0SXNzdWUoaXNzdWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXMvJHtpc3N1ZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgbWlsZXN0b25lcyBmb3IgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbWlsZXN0b25lcy8jbGlzdC1taWxlc3RvbmVzLWZvci1hLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gZmlsdGVyaW5nIG9wdGlvbnNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGFycmF5IG9mIG1pbGVzdG9uZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdE1pbGVzdG9uZXMob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L21pbGVzdG9uZXNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgbWlsZXN0b25lXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL21pbGVzdG9uZXMvI2dldC1hLXNpbmdsZS1taWxlc3RvbmVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBtaWxlc3RvbmUgLSB0aGUgaWQgb2YgdGhlIG1pbGVzdG9uZSB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgYXJyYXkgb2YgbWlsZXN0b25lc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRNaWxlc3RvbmUobWlsZXN0b25lLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbWlsZXN0b25lcy8ke21pbGVzdG9uZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IG1pbGVzdG9uZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9taWxlc3RvbmVzLyNjcmVhdGUtYS1taWxlc3RvbmVcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBtaWxlc3RvbmVEYXRhIC0gdGhlIG1pbGVzdG9uZSBkZWZpbml0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBhcnJheSBvZiBtaWxlc3RvbmVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZU1pbGVzdG9uZShtaWxlc3RvbmVEYXRhLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L21pbGVzdG9uZXNgLCBtaWxlc3RvbmVEYXRhLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRWRpdCBhIG1pbGVzdG9uZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9taWxlc3RvbmVzLyN1cGRhdGUtYS1taWxlc3RvbmVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBtaWxlc3RvbmUgLSB0aGUgaWQgb2YgdGhlIG1pbGVzdG9uZSB0byBlZGl0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gbWlsZXN0b25lRGF0YSAtIHRoZSB1cGRhdGVzIHRvIG1ha2UgdG8gdGhlIG1pbGVzdG9uZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgYXJyYXkgb2YgbWlsZXN0b25lc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBlZGl0TWlsZXN0b25lKG1pbGVzdG9uZSwgbWlsZXN0b25lRGF0YSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbWlsZXN0b25lcy8ke21pbGVzdG9uZX1gLCBtaWxlc3RvbmVEYXRhLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgbWlsZXN0b25lICh0aGlzIGlzIGRpc3RpbmN0IGZyb20gY2xvc2luZyBhIG1pbGVzdG9uZSlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbWlsZXN0b25lcy8jZGVsZXRlLWEtbWlsZXN0b25lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWlsZXN0b25lIC0gdGhlIGlkIG9mIHRoZSBtaWxlc3RvbmUgdG8gZGVsZXRlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBhcnJheSBvZiBtaWxlc3RvbmVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZU1pbGVzdG9uZShtaWxlc3RvbmUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9taWxlc3RvbmVzLyR7bWlsZXN0b25lfWAsIG51bGwsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJc3N1ZTtcbiJdfQ==
	//# sourceMappingURL=Issue.js.map


/***/ },

/***/ 945:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915), __webpack_require__(933)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('./Requestable'), require('debug'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.Requestable, global.debug);
	    global.Search = mod.exports;
	  }
	})(this, function (module, _Requestable2, _debug) {
	  'use strict';
	
	  var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	  var _debug2 = _interopRequireDefault(_debug);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var log = (0, _debug2.default)('github:search');
	
	  /**
	   * Wrap the Search API
	   */
	
	  var Search = function (_Requestable) {
	    _inherits(Search, _Requestable);
	
	    /**
	     * Create a Search
	     * @param {Object} defaults - defaults for the search
	     * @param {Requestable.auth} [auth] - information required to authenticate to Github
	     * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	     */
	
	    function Search(defaults, auth, apiBase) {
	      _classCallCheck(this, Search);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, auth, apiBase));
	
	      _this.__defaults = _this._getOptionsWithDefaults(defaults);
	      return _this;
	    }
	
	    /**
	     * Available search options
	     * @see https://developer.github.com/v3/search/#parameters
	     * @typedef {Object} Search.Params
	     * @param {string} q - the query to make
	     * @param {string} sort - the sort field, one of `stars`, `forks`, or `updated`.
	     *                      Default is [best match](https://developer.github.com/v3/search/#ranking-search-results)
	     * @param {string} order - the ordering, either `asc` or `desc`
	     */
	    /**
	     * Perform a search on the GitHub API
	     * @private
	     * @param {string} path - the scope of the search
	     * @param {Search.Params} [withOptions] - additional parameters for the search
	     * @param {Requestable.callback} [cb] - will receive the results of the search
	     * @return {Promise} - the promise for the http request
	     */
	
	
	    _createClass(Search, [{
	      key: '_search',
	      value: function _search(path) {
	        var _this2 = this;
	
	        var withOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        var cb = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
	
	        var requestOptions = {};
	        Object.keys(this.__defaults).forEach(function (prop) {
	          requestOptions[prop] = _this2.__defaults[prop];
	        });
	        Object.keys(withOptions).forEach(function (prop) {
	          requestOptions[prop] = withOptions[prop];
	        });
	
	        log('searching ' + path + ' with options:', requestOptions);
	        return this._requestAllPages('/search/' + path, requestOptions, cb);
	      }
	    }, {
	      key: 'forRepositories',
	      value: function forRepositories(options, cb) {
	        return this._search('repositories', options, cb);
	      }
	    }, {
	      key: 'forCode',
	      value: function forCode(options, cb) {
	        return this._search('code', options, cb);
	      }
	    }, {
	      key: 'forIssues',
	      value: function forIssues(options, cb) {
	        return this._search('issues', options, cb);
	      }
	    }, {
	      key: 'forUsers',
	      value: function forUsers(options, cb) {
	        return this._search('users', options, cb);
	      }
	    }]);
	
	    return Search;
	  }(_Requestable3.default);
	
	  module.exports = Search;
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsTUFBTSxNQUFNLHFCQUFNLGVBQU4sQ0FBWjs7Ozs7O01BS00sTTs7Ozs7Ozs7OztBQU9ILG9CQUFZLFFBQVosRUFBc0IsSUFBdEIsRUFBNEIsT0FBNUIsRUFBcUM7QUFBQTs7QUFBQSw0RkFDNUIsSUFENEIsRUFDdEIsT0FEc0I7O0FBRWxDLFlBQUssVUFBTCxHQUFrQixNQUFLLHVCQUFMLENBQTZCLFFBQTdCLENBQWxCO0FBRmtDO0FBR3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFtQk8sSSxFQUF3QztBQUFBOztBQUFBLFlBQWxDLFdBQWtDLHlEQUFwQixFQUFvQjtBQUFBLFlBQWhCLEVBQWdCLHlEQUFYLFNBQVc7O0FBQzdDLFlBQUksaUJBQWlCLEVBQXJCO0FBQ0EsZUFBTyxJQUFQLENBQVksS0FBSyxVQUFqQixFQUE2QixPQUE3QixDQUFxQyxVQUFDLElBQUQsRUFBVTtBQUM1Qyx5QkFBZSxJQUFmLElBQXVCLE9BQUssVUFBTCxDQUFnQixJQUFoQixDQUF2QjtBQUNGLFNBRkQ7QUFHQSxlQUFPLElBQVAsQ0FBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLFVBQUMsSUFBRCxFQUFVO0FBQ3hDLHlCQUFlLElBQWYsSUFBdUIsWUFBWSxJQUFaLENBQXZCO0FBQ0YsU0FGRDs7QUFJQSwyQkFBaUIsSUFBakIscUJBQXVDLGNBQXZDO0FBQ0EsZUFBTyxLQUFLLGdCQUFMLGNBQWlDLElBQWpDLEVBQXlDLGNBQXpDLEVBQXlELEVBQXpELENBQVA7QUFDRjs7O3NDQVNlLE8sRUFBUyxFLEVBQUk7QUFDMUIsZUFBTyxLQUFLLE9BQUwsQ0FBYSxjQUFiLEVBQTZCLE9BQTdCLEVBQXNDLEVBQXRDLENBQVA7QUFDRjs7OzhCQVNPLE8sRUFBUyxFLEVBQUk7QUFDbEIsZUFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLE9BQXJCLEVBQThCLEVBQTlCLENBQVA7QUFDRjs7O2dDQVNTLE8sRUFBUyxFLEVBQUk7QUFDcEIsZUFBTyxLQUFLLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLE9BQXZCLEVBQWdDLEVBQWhDLENBQVA7QUFDRjs7OytCQVNRLE8sRUFBUyxFLEVBQUk7QUFDbkIsZUFBTyxLQUFLLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE9BQXRCLEVBQStCLEVBQS9CLENBQVA7QUFDRjs7Ozs7O0FBR0osU0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyA9IGRlYnVnKCdnaXRodWI6c2VhcmNoJyk7XG5cbi8qKlxuICogV3JhcCB0aGUgU2VhcmNoIEFQSVxuICovXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIFNlYXJjaFxuICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIC0gZGVmYXVsdHMgZm9yIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gW2F1dGhdIC0gaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gYXV0aGVudGljYXRlIHRvIEdpdGh1YlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmdpdGh1Yi5jb21dIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqL1xuICAgY29uc3RydWN0b3IoZGVmYXVsdHMsIGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgICAgdGhpcy5fX2RlZmF1bHRzID0gdGhpcy5fZ2V0T3B0aW9uc1dpdGhEZWZhdWx0cyhkZWZhdWx0cyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQXZhaWxhYmxlIHNlYXJjaCBvcHRpb25zXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvc2VhcmNoLyNwYXJhbWV0ZXJzXG4gICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBTZWFyY2guUGFyYW1zXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcSAtIHRoZSBxdWVyeSB0byBtYWtlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydCAtIHRoZSBzb3J0IGZpZWxkLCBvbmUgb2YgYHN0YXJzYCwgYGZvcmtzYCwgb3IgYHVwZGF0ZWRgLlxuICAgICogICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyBbYmVzdCBtYXRjaF0oaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9zZWFyY2gvI3Jhbmtpbmctc2VhcmNoLXJlc3VsdHMpXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXIgLSB0aGUgb3JkZXJpbmcsIGVpdGhlciBgYXNjYCBvciBgZGVzY2BcbiAgICAqL1xuICAgLyoqXG4gICAgKiBQZXJmb3JtIGEgc2VhcmNoIG9uIHRoZSBHaXRIdWIgQVBJXG4gICAgKiBAcHJpdmF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgc2NvcGUgb2YgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtTZWFyY2guUGFyYW1zfSBbd2l0aE9wdGlvbnNdIC0gYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSByZXN1bHRzIG9mIHRoZSBzZWFyY2hcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgX3NlYXJjaChwYXRoLCB3aXRoT3B0aW9ucyA9IHt9LCBjYiA9IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0ge307XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLl9fZGVmYXVsdHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgIHJlcXVlc3RPcHRpb25zW3Byb3BdID0gdGhpcy5fX2RlZmF1bHRzW3Byb3BdO1xuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyh3aXRoT3B0aW9ucykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgcmVxdWVzdE9wdGlvbnNbcHJvcF0gPSB3aXRoT3B0aW9uc1twcm9wXTtcbiAgICAgIH0pO1xuXG4gICAgICBsb2coYHNlYXJjaGluZyAke3BhdGh9IHdpdGggb3B0aW9uczpgLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvc2VhcmNoLyR7cGF0aH1gLCByZXF1ZXN0T3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFNlYXJjaCBmb3IgcmVwb3NpdG9yaWVzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvc2VhcmNoLyNzZWFyY2gtcmVwb3NpdG9yaWVzXG4gICAgKiBAcGFyYW0ge1NlYXJjaC5QYXJhbXN9IFtvcHRpb25zXSAtIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmb3IgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVzdWx0cyBvZiB0aGUgc2VhcmNoXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGZvclJlcG9zaXRvcmllcyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaCgncmVwb3NpdG9yaWVzJywgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFNlYXJjaCBmb3IgY29kZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3NlYXJjaC8jc2VhcmNoLWNvZGVcbiAgICAqIEBwYXJhbSB7U2VhcmNoLlBhcmFtc30gW29wdGlvbnNdIC0gYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSByZXN1bHRzIG9mIHRoZSBzZWFyY2hcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZm9yQ29kZShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaCgnY29kZScsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTZWFyY2ggZm9yIGlzc3Vlc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3NlYXJjaC8jc2VhcmNoLWlzc3Vlc1xuICAgICogQHBhcmFtIHtTZWFyY2guUGFyYW1zfSBbb3B0aW9uc10gLSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHJlc3VsdHMgb2YgdGhlIHNlYXJjaFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBmb3JJc3N1ZXMob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWFyY2goJ2lzc3VlcycsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTZWFyY2ggZm9yIHVzZXJzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvc2VhcmNoLyNzZWFyY2gtdXNlcnNcbiAgICAqIEBwYXJhbSB7U2VhcmNoLlBhcmFtc30gW29wdGlvbnNdIC0gYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSByZXN1bHRzIG9mIHRoZSBzZWFyY2hcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZm9yVXNlcnMob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWFyY2goJ3VzZXJzJywgb3B0aW9ucywgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlYXJjaDtcbiJdfQ==
	//# sourceMappingURL=Search.js.map


/***/ },

/***/ 946:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Buffer) {(function (global, factory) {
	   if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915), __webpack_require__(947), __webpack_require__(936), __webpack_require__(933)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	   } else if (typeof exports !== "undefined") {
	      factory(module, require('./Requestable'), require('utf8'), require('js-base64'), require('debug'));
	   } else {
	      var mod = {
	         exports: {}
	      };
	      factory(mod, global.Requestable, global.utf8, global.jsBase64, global.debug);
	      global.Repository = mod.exports;
	   }
	})(this, function (module, _Requestable2, _utf, _jsBase, _debug) {
	   'use strict';
	
	   var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	   var _utf2 = _interopRequireDefault(_utf);
	
	   var _debug2 = _interopRequireDefault(_debug);
	
	   function _interopRequireDefault(obj) {
	      return obj && obj.__esModule ? obj : {
	         default: obj
	      };
	   }
	
	   var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	      return typeof obj;
	   } : function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	   };
	
	   function _classCallCheck(instance, Constructor) {
	      if (!(instance instanceof Constructor)) {
	         throw new TypeError("Cannot call a class as a function");
	      }
	   }
	
	   var _createClass = function () {
	      function defineProperties(target, props) {
	         for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];
	            descriptor.enumerable = descriptor.enumerable || false;
	            descriptor.configurable = true;
	            if ("value" in descriptor) descriptor.writable = true;
	            Object.defineProperty(target, descriptor.key, descriptor);
	         }
	      }
	
	      return function (Constructor, protoProps, staticProps) {
	         if (protoProps) defineProperties(Constructor.prototype, protoProps);
	         if (staticProps) defineProperties(Constructor, staticProps);
	         return Constructor;
	      };
	   }();
	
	   function _possibleConstructorReturn(self, call) {
	      if (!self) {
	         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	      }
	
	      return call && (typeof call === "object" || typeof call === "function") ? call : self;
	   }
	
	   function _inherits(subClass, superClass) {
	      if (typeof superClass !== "function" && superClass !== null) {
	         throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	      }
	
	      subClass.prototype = Object.create(superClass && superClass.prototype, {
	         constructor: {
	            value: subClass,
	            enumerable: false,
	            writable: true,
	            configurable: true
	         }
	      });
	      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	   }
	
	   var log = (0, _debug2.default)('github:repository');
	
	   /**
	    * Respository encapsulates the functionality to create, query, and modify files.
	    */
	
	   var Repository = function (_Requestable) {
	      _inherits(Repository, _Requestable);
	
	      /**
	       * Create a Repository.
	       * @param {string} fullname - the full name of the repository
	       * @param {Requestable.auth} [auth] - information required to authenticate to Github
	       * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	       */
	
	      function Repository(fullname, auth, apiBase) {
	         _classCallCheck(this, Repository);
	
	         var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Repository).call(this, auth, apiBase));
	
	         _this.__fullname = fullname;
	         _this.__currentTree = {
	            branch: null,
	            sha: null
	         };
	         return _this;
	      }
	
	      /**
	       * Get a reference
	       * @see https://developer.github.com/v3/git/refs/#get-a-reference
	       * @param {string} ref - the reference to get
	       * @param {Requestable.callback} [cb] - will receive the reference's refSpec or a list of refSpecs that match `ref`
	       * @return {Promise} - the promise for the http request
	       */
	
	
	      _createClass(Repository, [{
	         key: 'getRef',
	         value: function getRef(ref, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/git/refs/' + ref, null, cb);
	         }
	      }, {
	         key: 'createRef',
	         value: function createRef(options, cb) {
	            return this._request('POST', '/repos/' + this.__fullname + '/git/refs', options, cb);
	         }
	      }, {
	         key: 'deleteRef',
	         value: function deleteRef(ref, cb) {
	            return this._request('DELETE', '/repos/' + this.__fullname + '/git/refs/' + ref, null, cb);
	         }
	      }, {
	         key: 'deleteRepo',
	         value: function deleteRepo(cb) {
	            return this._request('DELETE', '/repos/' + this.__fullname, null, cb);
	         }
	      }, {
	         key: 'listTags',
	         value: function listTags(cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/tags', null, cb);
	         }
	      }, {
	         key: 'listPullRequests',
	         value: function listPullRequests(options, cb) {
	            options = options || {};
	            return this._request('GET', '/repos/' + this.__fullname + '/pulls', options, cb);
	         }
	      }, {
	         key: 'getPullRequest',
	         value: function getPullRequest(number, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/pulls/' + number, null, cb);
	         }
	      }, {
	         key: 'listPullRequestFiles',
	         value: function listPullRequestFiles(number, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/pulls/' + number + '/files', null, cb);
	         }
	      }, {
	         key: 'compareBranches',
	         value: function compareBranches(base, head, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/compare/' + base + '...' + head, null, cb);
	         }
	      }, {
	         key: 'listBranches',
	         value: function listBranches(cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/branches', null, cb);
	         }
	      }, {
	         key: 'getBlob',
	         value: function getBlob(sha, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/git/blobs/' + sha, null, cb, 'raw');
	         }
	      }, {
	         key: 'getCommit',
	         value: function getCommit(sha, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/git/commits/' + sha, null, cb);
	         }
	      }, {
	         key: 'listCommits',
	         value: function listCommits(options, cb) {
	            options = options || {};
	
	            options.since = this._dateToISO(options.since);
	            options.until = this._dateToISO(options.until);
	
	            return this._request('GET', '/repos/' + this.__fullname + '/commits', options, cb);
	         }
	      }, {
	         key: 'getSingleCommit',
	         value: function getSingleCommit(ref, cb) {
	            ref = ref || '';
	            return this._request('GET', '/repos/' + this.__fullname + '/commits/' + ref, null, cb);
	         }
	      }, {
	         key: 'getSha',
	         value: function getSha(branch, path, cb) {
	            branch = branch ? '?ref=' + branch : '';
	            return this._request('GET', '/repos/' + this.__fullname + '/contents/' + path + branch, null, cb);
	         }
	      }, {
	         key: 'listStatuses',
	         value: function listStatuses(sha, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/commits/' + sha + '/statuses', null, cb);
	         }
	      }, {
	         key: 'getTree',
	         value: function getTree(treeSHA, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/git/trees/' + treeSHA, null, cb);
	         }
	      }, {
	         key: 'createBlob',
	         value: function createBlob(content, cb) {
	            var postBody = this._getContentObject(content);
	
	            log('sending content', postBody);
	            return this._request('POST', '/repos/' + this.__fullname + '/git/blobs', postBody, cb);
	         }
	      }, {
	         key: '_getContentObject',
	         value: function _getContentObject(content) {
	            if (typeof content === 'string') {
	               log('contet is a string');
	               return {
	                  content: _utf2.default.encode(content),
	                  encoding: 'utf-8'
	               };
	            } else if (typeof Buffer !== 'undefined' && content instanceof Buffer) {
	               log('We appear to be in Node');
	               return {
	                  content: content.toString('base64'),
	                  encoding: 'base64'
	               };
	            } else if (typeof Blob !== 'undefined' && content instanceof Blob) {
	               log('We appear to be in the browser');
	               return {
	                  content: _jsBase.Base64.encode(content),
	                  encoding: 'base64'
	               };
	            } else {
	               // eslint-disable-line
	               log('Not sure what this content is: ' + (typeof content === 'undefined' ? 'undefined' : _typeof(content)) + ', ' + JSON.stringify(content));
	               throw new Error('Unknown content passed to postBlob. Must be string or Buffer (node) or Blob (web)');
	            }
	         }
	      }, {
	         key: 'updateTree',
	         value: function updateTree(baseTreeSHA, path, blobSHA, cb) {
	            var newTree = {
	               base_tree: baseTreeSHA, // eslint-disable-line
	               tree: [{
	                  path: path,
	                  sha: blobSHA,
	                  mode: '100644',
	                  type: 'blob'
	               }]
	            };
	
	            return this._request('POST', '/repos/' + this.__fullname + '/git/trees', newTree, cb);
	         }
	      }, {
	         key: 'createTree',
	         value: function createTree(tree, baseSHA, cb) {
	            return this._request('POST', '/repos/' + this.__fullname + '/git/trees', {
	               tree: tree,
	               base_tree: baseSHA // eslint-disable-line
	            }, cb);
	         }
	      }, {
	         key: 'commit',
	         value: function commit(parent, tree, message, cb) {
	            var _this2 = this;
	
	            var data = {
	               message: message,
	               tree: tree,
	               parents: [parent]
	            };
	
	            return this._request('POST', '/repos/' + this.__fullname + '/git/commits', data, cb).then(function (response) {
	               _this2.__currentTree.sha = response.data.sha; // Update latest commit
	               return response;
	            });
	         }
	      }, {
	         key: 'updateHead',
	         value: function updateHead(ref, commitSHA, force, cb) {
	            return this._request('PATCH', '/repos/' + this.__fullname + '/git/refs/' + ref, {
	               sha: commitSHA,
	               force: force
	            }, cb);
	         }
	      }, {
	         key: 'getDetails',
	         value: function getDetails(cb) {
	            return this._request('GET', '/repos/' + this.__fullname, null, cb);
	         }
	      }, {
	         key: 'getContributors',
	         value: function getContributors(cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/stats/contributors', null, cb);
	         }
	      }, {
	         key: 'getCollaborators',
	         value: function getCollaborators(cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/collaborators', null, cb);
	         }
	      }, {
	         key: 'isCollaborator',
	         value: function isCollaborator(username, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/collaborators/' + username, null, cb);
	         }
	      }, {
	         key: 'getContents',
	         value: function getContents(ref, path, raw, cb) {
	            path = path ? '' + encodeURI(path) : '';
	            return this._request('GET', '/repos/' + this.__fullname + '/contents/' + path, {
	               ref: ref
	            }, cb, raw);
	         }
	      }, {
	         key: 'getReadme',
	         value: function getReadme(ref, raw, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/readme', {
	               ref: ref
	            }, cb, raw);
	         }
	      }, {
	         key: 'fork',
	         value: function fork(cb) {
	            return this._request('POST', '/repos/' + this.__fullname + '/forks', null, cb);
	         }
	      }, {
	         key: 'listForks',
	         value: function listForks(cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/forks', null, cb);
	         }
	      }, {
	         key: 'createBranch',
	         value: function createBranch(oldBranch, newBranch, cb) {
	            var _this3 = this;
	
	            if (typeof newBranch === 'function') {
	               cb = newBranch;
	               newBranch = oldBranch;
	               oldBranch = 'master';
	            }
	
	            return this.getRef('heads/' + oldBranch).then(function (response) {
	               var sha = response.data.object.sha;
	               return _this3.createRef({
	                  sha: sha,
	                  ref: 'refs/heads/' + newBranch
	               }, cb);
	            });
	         }
	      }, {
	         key: 'createPullRequest',
	         value: function createPullRequest(options, cb) {
	            return this._request('POST', '/repos/' + this.__fullname + '/pulls', options, cb);
	         }
	      }, {
	         key: 'updatePullRequst',
	         value: function updatePullRequst(number, options, cb) {
	            return this._request('PATCH', '/repos/' + this.__fullname + '/pulls/' + number, options, cb);
	         }
	      }, {
	         key: 'listHooks',
	         value: function listHooks(cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/hooks', null, cb);
	         }
	      }, {
	         key: 'getHook',
	         value: function getHook(id, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/hooks/' + id, null, cb);
	         }
	      }, {
	         key: 'createHook',
	         value: function createHook(options, cb) {
	            return this._request('POST', '/repos/' + this.__fullname + '/hooks', options, cb);
	         }
	      }, {
	         key: 'updateHook',
	         value: function updateHook(id, options, cb) {
	            return this._request('PATCH', '/repos/' + this.__fullname + '/hooks/' + id, options, cb);
	         }
	      }, {
	         key: 'deleteHook',
	         value: function deleteHook(id, cb) {
	            return this._request('DELETE', this.__repoPath + '/hooks/' + id, null, cb);
	         }
	      }, {
	         key: 'deleteFile',
	         value: function deleteFile(branch, path, cb) {
	            var _this4 = this;
	
	            return this.getSha(branch, path).then(function (response) {
	               var deleteCommit = {
	                  message: 'Delete the file at \'' + path + '\'',
	                  sha: response.data.sha,
	                  branch: branch
	               };
	               return _this4._request('DELETE', '/repos/' + _this4.__fullname + '/contents/' + path, deleteCommit, cb);
	            });
	         }
	      }, {
	         key: 'move',
	         value: function move(branch, oldPath, newPath, cb) {
	            var _this5 = this;
	
	            var oldSha = void 0;
	            return this.getRef('heads/' + branch).then(function (_ref) {
	               var object = _ref.data.object;
	               return _this5.getTree(object.sha + '?recursive=true');
	            }).then(function (_ref2) {
	               var _ref2$data = _ref2.data;
	               var tree = _ref2$data.tree;
	               var sha = _ref2$data.sha;
	
	               oldSha = sha;
	               var newTree = tree.map(function (ref) {
	                  if (ref.path === oldPath) {
	                     ref.path = newPath;
	                  }
	                  if (ref.type === 'tree') {
	                     delete ref.sha;
	                  }
	                  return ref;
	               });
	               return _this5.createTree(newTree);
	            }).then(function (_ref3) {
	               var tree = _ref3.data;
	               return _this5.commit(oldSha, tree.sha, 'Renamed \'' + oldPath + '\' to \'' + newPath + '\'');
	            }).then(function (_ref4) {
	               var commit = _ref4.data;
	               return _this5.updateHead('heads/' + branch, commit.sha, true, cb);
	            });
	         }
	      }, {
	         key: 'writeFile',
	         value: function writeFile(branch, path, content, message, options, cb) {
	            var _this6 = this;
	
	            if (typeof options === 'function') {
	               cb = options;
	               options = {};
	            }
	            var filePath = path ? encodeURI(path) : '';
	            var shouldEncode = options.encode !== false;
	            var commit = {
	               branch: branch,
	               message: message,
	               author: options.author,
	               committer: options.committer,
	               content: shouldEncode ? _jsBase.Base64.encode(content) : content
	            };
	
	            return this.getSha(branch, filePath).then(function (response) {
	               commit.sha = response.data.sha;
	               return _this6._request('PUT', '/repos/' + _this6.__fullname + '/contents/' + filePath, commit, cb);
	            }, function () {
	               return _this6._request('PUT', '/repos/' + _this6.__fullname + '/contents/' + filePath, commit, cb);
	            });
	         }
	      }, {
	         key: 'isStarred',
	         value: function isStarred(cb) {
	            return this._request204or404('/user/starred/' + this.__fullname, null, cb);
	         }
	      }, {
	         key: 'star',
	         value: function star(cb) {
	            return this._request('PUT', '/user/starred/' + this.__fullname, null, cb);
	         }
	      }, {
	         key: 'unstar',
	         value: function unstar(cb) {
	            return this._request('DELETE', '/user/starred/' + this.__fullname, null, cb);
	         }
	      }, {
	         key: 'createRelease',
	         value: function createRelease(options, cb) {
	            return this._request('POST', '/repos/' + this.__fullname + '/releases', options, cb);
	         }
	      }, {
	         key: 'updateRelease',
	         value: function updateRelease(id, options, cb) {
	            return this._request('PATCH', '/repos/' + this.__fullname + '/releases/' + id, options, cb);
	         }
	      }, {
	         key: 'listReleases',
	         value: function listReleases(cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/releases', null, cb);
	         }
	      }, {
	         key: 'getRelease',
	         value: function getRelease(id, cb) {
	            return this._request('GET', '/repos/' + this.__fullname + '/releases/' + id, null, cb);
	         }
	      }, {
	         key: 'deleteRelease',
	         value: function deleteRelease(id, cb) {
	            return this._request('DELETE', '/repos/' + this.__fullname + '/releases/' + id, null, cb);
	         }
	      }, {
	         key: 'mergePullRequest',
	         value: function mergePullRequest(number, options, cb) {
	            return this._request('PUT', '/repos/' + this.__fullname + '/pulls/' + number + '/merge', options, cb);
	         }
	      }]);
	
	      return Repository;
	   }(_Requestable3.default);
	
	   module.exports = Repository;
	});
	//# sourceMappingURL=data:application/json;base64,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bkMsbUJBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLLFVBQXBDLGVBQXdELE1BQXhELGFBQXdFLE9BQXhFLEVBQWlGLEVBQWpGLENBQVA7QUFDRjs7Ozs7O0FBR0osVUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6IlJlcG9zaXRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcbmltcG9ydCBVdGY4IGZyb20gJ3V0ZjgnO1xuaW1wb3J0IHtcbiAgIEJhc2U2NFxufSBmcm9tICdqcy1iYXNlNjQnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyA9IGRlYnVnKCdnaXRodWI6cmVwb3NpdG9yeScpO1xuXG4vKipcbiAqIFJlc3Bvc2l0b3J5IGVuY2Fwc3VsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSB0byBjcmVhdGUsIHF1ZXJ5LCBhbmQgbW9kaWZ5IGZpbGVzLlxuICovXG5jbGFzcyBSZXBvc2l0b3J5IGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBSZXBvc2l0b3J5LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZ1bGxuYW1lIC0gdGhlIGZ1bGwgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihmdWxsbmFtZSwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9fZnVsbG5hbWUgPSBmdWxsbmFtZTtcbiAgICAgIHRoaXMuX19jdXJyZW50VHJlZSA9IHtcbiAgICAgICAgIGJyYW5jaDogbnVsbCxcbiAgICAgICAgIHNoYTogbnVsbFxuICAgICAgfTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSByZWZlcmVuY2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvcmVmcy8jZ2V0LWEtcmVmZXJlbmNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gdGhlIHJlZmVyZW5jZSB0byBnZXRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHJlZmVyZW5jZSdzIHJlZlNwZWMgb3IgYSBsaXN0IG9mIHJlZlNwZWNzIHRoYXQgbWF0Y2ggYHJlZmBcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UmVmKHJlZiwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvcmVmcy8ke3JlZn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgcmVmZXJlbmNlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L3JlZnMvI2NyZWF0ZS1hLXJlZmVyZW5jZVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHJlZlxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVmXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVJlZihvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvcmVmc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSByZWZlcmVuY2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvcmVmcy8jZGVsZXRlLWEtcmVmZXJlbmNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gdGhlIG5hbWUgb2YgdGhlIHJlZiB0byBkZWx0ZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlUmVmKHJlZiwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvcmVmcy8ke3JlZn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNkZWxldGUtYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVSZXBvKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdGFncyBvbiBhIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jbGlzdC10YWdzXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSB0YWcgZGF0YVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0VGFncyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3RhZ3NgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgb3BlbiBwdWxsIHJlcXVlc3RzIG9uIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHVsbHMvI2xpc3QtcHVsbC1yZXF1ZXN0c1xuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRvIGZpbHRlciB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIFBSc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0UHVsbFJlcXVlc3RzKG9wdGlvbnMsIGNiKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9wdWxsc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBwdWxsIHJlcXVlc3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wdWxscy8jZ2V0LWEtc2luZ2xlLXB1bGwtcmVxdWVzdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBQUiB5b3Ugd2lzaCB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgUFIgZnJvbSB0aGUgQVBJXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFB1bGxSZXF1ZXN0KG51bWJlciwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9wdWxscy8ke251bWJlcn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgZmlsZXMgb2YgYSBzcGVjaWZpYyBwdWxsIHJlcXVlc3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wdWxscy8jbGlzdC1wdWxsLXJlcXVlc3RzLWZpbGVzXG4gICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlciAtIHRoZSBQUiB5b3Ugd2lzaCB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBmaWxlcyBmcm9tIHRoZSBBUElcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFB1bGxSZXF1ZXN0RmlsZXMobnVtYmVyLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3B1bGxzLyR7bnVtYmVyfS9maWxlc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDb21wYXJlIHR3byBicmFuY2hlcy9jb21taXRzL3JlcG9zaXRvcmllc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbW1pdHMvI2NvbXBhcmUtdHdvLWNvbW1pdHNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlIC0gdGhlIGJhc2UgY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaGVhZCAtIHRoZSBoZWFkIGNvbW1pdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbXBhcmlzb25cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY29tcGFyZUJyYW5jaGVzKGJhc2UsIGhlYWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29tcGFyZS8ke2Jhc2V9Li4uJHtoZWFkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IGFsbCB0aGUgYnJhbmNoZXMgZm9yIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2xpc3QtYnJhbmNoZXNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGJyYW5jaGVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RCcmFuY2hlcyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2JyYW5jaGVzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIHJhdyBibG9iIGZyb20gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvYmxvYnMvI2dldC1hLWJsb2JcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaGEgLSB0aGUgc2hhIG9mIHRoZSBibG9iIHRvIGZldGNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgYmxvYiBmcm9tIHRoZSBBUElcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0QmxvYihzaGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZ2l0L2Jsb2JzLyR7c2hhfWAsIG51bGwsIGNiLCAncmF3Jyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgY29tbWl0IGZyb20gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb21taXRzLyNnZXQtYS1zaW5nbGUtY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gc2hhIC0gdGhlIHNoYSBmb3IgdGhlIGNvbW1pdCB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1pdCBkYXRhXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldENvbW1pdChzaGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZ2l0L2NvbW1pdHMvJHtzaGF9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGNvbW1pdHMgb24gYSByZXBvc2l0b3J5LCBvcHRpb25hbGx5IGZpbHRlcmluZyBieSBwYXRoLCBhdXRob3Igb3IgdGltZSByYW5nZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbW1pdHMvI2xpc3QtY29tbWl0cy1vbi1hLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgZmlsdGVyaW5nIG9wdGlvbnMgZm9yIGNvbW1pdHNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaGFdIC0gdGhlIFNIQSBvciBicmFuY2ggdG8gc3RhcnQgZnJvbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBhdGhdIC0gdGhlIHBhdGggdG8gc2VhcmNoIG9uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYXV0aG9yXSAtIHRoZSBjb21taXQgYXV0aG9yXG4gICAgKiBAcGFyYW0geyhEYXRlfHN0cmluZyl9IFtvcHRpb25zLnNpbmNlXSAtIG9ubHkgY29tbWl0cyBhZnRlciB0aGlzIGRhdGUgd2lsbCBiZSByZXR1cm5lZFxuICAgICogQHBhcmFtIHsoRGF0ZXxzdHJpbmcpfSBbb3B0aW9ucy51bnRpbF0gLSBvbmx5IGNvbW1pdHMgYmVmb3JlIHRoaXMgZGF0ZSB3aWxsIGJlIHJldHVybmVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBjb21taXRzIGZvdW5kIG1hdGNoaW5nIHRoZSBjcml0ZXJpYVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0Q29tbWl0cyhvcHRpb25zLCBjYikge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIG9wdGlvbnMuc2luY2UgPSB0aGlzLl9kYXRlVG9JU08ob3B0aW9ucy5zaW5jZSk7XG4gICAgICBvcHRpb25zLnVudGlsID0gdGhpcy5fZGF0ZVRvSVNPKG9wdGlvbnMudW50aWwpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29tbWl0c2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBzaW5nbGUgY29tbWl0IGluZm9ybWF0aW9uIGZvciBhIHJlcG9zaXRvcnlcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29tbWl0cy8jZ2V0LWEtc2luZ2xlLWNvbW1pdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmZXJlbmNlIGZvciB0aGUgY29tbWl0LWlzaFxuICAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjb21taXQgaW5mb3JtYXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgICovXG4gICBnZXRTaW5nbGVDb21taXQocmVmLCBjYikge1xuICAgICAgcmVmID0gcmVmIHx8ICcnO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2NvbW1pdHMvJHtyZWZ9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCB0aGEgc2hhIGZvciBhIHBhcnRpY3VsYXIgb2JqZWN0IGluIHRoZSByZXBvc2l0b3J5LiBUaGlzIGlzIGEgY29udmVuaWVuY2UgZnVuY3Rpb25cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb250ZW50cy8jZ2V0LWNvbnRlbnRzXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2JyYW5jaF0gLSB0aGUgYnJhbmNoIHRvIGxvb2sgaW4sIG9yIHRoZSByZXBvc2l0b3J5J3MgZGVmYXVsdCBicmFuY2ggaWYgb21pdHRlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCBvZiB0aGUgZmlsZSBvciBkaXJlY3RvcnlcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIGEgZGVzY3JpcHRpb24gb2YgdGhlIHJlcXVlc3RlZCBvYmplY3QsIGluY2x1ZGluZyBhIGBTSEFgIHByb3BlcnR5XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFNoYShicmFuY2gsIHBhdGgsIGNiKSB7XG4gICAgICBicmFuY2ggPSBicmFuY2ggPyBgP3JlZj0ke2JyYW5jaH1gIDogJyc7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29udGVudHMvJHtwYXRofSR7YnJhbmNofWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBjb21taXQgc3RhdHVzZXMgZm9yIGEgcGFydGljdWxhciBzaGEsIGJyYW5jaCwgb3IgdGFnXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3Mvc3RhdHVzZXMvI2xpc3Qtc3RhdHVzZXMtZm9yLWEtc3BlY2lmaWMtcmVmXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gc2hhIC0gdGhlIHNoYSwgYnJhbmNoLCBvciB0YWcgdG8gZ2V0IHN0YXR1c2VzIGZvclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2Ygc3RhdHVzZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFN0YXR1c2VzKHNoYSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb21taXRzLyR7c2hhfS9zdGF0dXNlc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSBkZXNjcmlwdGlvbiBvZiBhIGdpdCB0cmVlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L3RyZWVzLyNnZXQtYS10cmVlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdHJlZVNIQSAtIHRoZSBTSEEgb2YgdGhlIHRyZWUgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjYWxsYmFjayBkYXRhXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFRyZWUodHJlZVNIQSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvdHJlZXMvJHt0cmVlU0hBfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBibG9iXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L2Jsb2JzLyNjcmVhdGUtYS1ibG9iXG4gICAgKiBAcGFyYW0geyhzdHJpbmd8QnVmZmVyfEJsb2IpfSBjb250ZW50IC0gdGhlIGNvbnRlbnQgdG8gYWRkIHRvIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgZGV0YWlscyBvZiB0aGUgY3JlYXRlZCBibG9iXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUJsb2IoY29udGVudCwgY2IpIHtcbiAgICAgIGxldCBwb3N0Qm9keSA9IHRoaXMuX2dldENvbnRlbnRPYmplY3QoY29udGVudCk7XG5cbiAgICAgIGxvZygnc2VuZGluZyBjb250ZW50JywgcG9zdEJvZHkpO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvYmxvYnNgLCBwb3N0Qm9keSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgcHJvdmlkZWQgY29udGVudFxuICAgICogQHBhcmFtIHtzdHJpbmd8QnVmZmVyfEJsb2J9IGNvbnRlbnQgLSB0aGUgY29udGVudCB0byBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIHJlcHJlc2VudGF0aW9uIG9mIGBjb250ZW50YCBmb3IgdGhlIEdpdEh1YiBBUElcbiAgICAqL1xuICAgX2dldENvbnRlbnRPYmplY3QoY29udGVudCkge1xuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgbG9nKCdjb250ZXQgaXMgYSBzdHJpbmcnKTtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiBVdGY4LmVuY29kZShjb250ZW50KSxcbiAgICAgICAgICAgIGVuY29kaW5nOiAndXRmLTgnXG4gICAgICAgICB9O1xuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIGNvbnRlbnQgaW5zdGFuY2VvZiBCdWZmZXIpIHtcbiAgICAgICAgIGxvZygnV2UgYXBwZWFyIHRvIGJlIGluIE5vZGUnKTtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0J1xuICAgICAgICAgfTtcblxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udGVudCBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgIGxvZygnV2UgYXBwZWFyIHRvIGJlIGluIHRoZSBicm93c2VyJyk7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGVudDogQmFzZTY0LmVuY29kZShjb250ZW50KSxcbiAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0J1xuICAgICAgICAgfTtcblxuICAgICAgfSBlbHNlIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgbG9nKGBOb3Qgc3VyZSB3aGF0IHRoaXMgY29udGVudCBpczogJHt0eXBlb2YgY29udGVudH0sICR7SlNPTi5zdHJpbmdpZnkoY29udGVudCl9YCk7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gY29udGVudCBwYXNzZWQgdG8gcG9zdEJsb2IuIE11c3QgYmUgc3RyaW5nIG9yIEJ1ZmZlciAobm9kZSkgb3IgQmxvYiAod2ViKScpO1xuICAgICAgfVxuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSBhIHRyZWUgaW4gR2l0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L3RyZWVzLyNjcmVhdGUtYS10cmVlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVRyZWVTSEEgLSB0aGUgU0hBIG9mIHRoZSB0cmVlIHRvIHVwZGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCBmb3IgdGhlIG5ldyBmaWxlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYmxvYlNIQSAtIHRoZSBTSEEgZm9yIHRoZSBibG9iIHRvIHB1dCBhdCBgcGF0aGBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgdHJlZSB0aGF0IGlzIGNyZWF0ZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgUmVwb3NpdG9yeSNjcmVhdGVUcmVlfSBpbnN0ZWFkXG4gICAgKi9cbiAgIHVwZGF0ZVRyZWUoYmFzZVRyZWVTSEEsIHBhdGgsIGJsb2JTSEEsIGNiKSB7XG4gICAgICBsZXQgbmV3VHJlZSA9IHtcbiAgICAgICAgIGJhc2VfdHJlZTogYmFzZVRyZWVTSEEsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgIHRyZWU6IFt7XG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgc2hhOiBibG9iU0hBLFxuICAgICAgICAgICAgbW9kZTogJzEwMDY0NCcsXG4gICAgICAgICAgICB0eXBlOiAnYmxvYidcbiAgICAgICAgIH1dXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC90cmVlc2AsIG5ld1RyZWUsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgdHJlZSBpbiBnaXRcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvdHJlZXMvI2NyZWF0ZS1hLXRyZWVcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSB0cmVlIC0gdGhlIHRyZWUgdG8gY3JlYXRlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVNIQSAtIHRoZSByb290IHNoYSBvZiB0aGUgdHJlZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ldyB0cmVlIHRoYXQgaXMgY3JlYXRlZFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVUcmVlKHRyZWUsIGJhc2VTSEEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC90cmVlc2AsIHtcbiAgICAgICAgIHRyZWUsXG4gICAgICAgICBiYXNlX3RyZWU6IGJhc2VTSEEgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgfSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEFkZCBhIGNvbW1pdCB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpdC9jb21taXRzLyNjcmVhdGUtYS1jb21taXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnQgLSB0aGUgU0hBIG9mIHRoZSBwYXJlbnQgY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdHJlZSAtIHRoZSBTSEEgb2YgdGhlIHRyZWUgZm9yIHRoaXMgY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIHRoZSBjb21taXQgbWVzc2FnZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1pdCB0aGF0IGlzIGNyZWF0ZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY29tbWl0KHBhcmVudCwgdHJlZSwgbWVzc2FnZSwgY2IpIHtcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgIHRyZWUsXG4gICAgICAgICBwYXJlbnRzOiBbcGFyZW50XVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvY29tbWl0c2AsIGRhdGEsIGNiKVxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9fY3VycmVudFRyZWUuc2hhID0gcmVzcG9uc2UuZGF0YS5zaGE7IC8vIFVwZGF0ZSBsYXRlc3QgY29tbWl0XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVcGRhdGUgYSByZWZcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvcmVmcy8jdXBkYXRlLWEtcmVmZXJlbmNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gdGhlIHJlZiB0byB1cGRhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21taXRTSEEgLSB0aGUgU0hBIHRvIHBvaW50IHRoZSByZWZlcmVuY2UgdG9cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2UgLSBpbmRpY2F0ZXMgd2hldGhlciB0byBmb3JjZSBvciBlbnN1cmUgYSBmYXN0LWZvcndhcmQgdXBkYXRlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgdXBkYXRlZCByZWYgYmFja1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVIZWFkKHJlZiwgY29tbWl0U0hBLCBmb3JjZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC9yZWZzLyR7cmVmfWAsIHtcbiAgICAgICAgIHNoYTogY29tbWl0U0hBLFxuICAgICAgICAgZm9yY2U6IGZvcmNlXG4gICAgICB9LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2dldFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldERldGFpbHMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBjb250cmlidXRvcnMgdG8gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jbGlzdC1jb250cmlidXRvcnNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGNvbnRyaWJ1dG9yc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb250cmlidXRvcnMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9zdGF0cy9jb250cmlidXRvcnNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdXNlcnMgd2hvIGFyZSBjb2xsYWJvcmF0b3JzIG9uIHRoZSByZXBvc2l0b3J5LiBUaGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlciBtdXN0IGhhdmVcbiAgICAqIHB1c2ggYWNjZXNzIHRvIHVzZSB0aGlzIG1ldGhvZFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbGxhYm9yYXRvcnMvI2xpc3QtY29sbGFib3JhdG9yc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY29sbGFib3JhdG9yc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb2xsYWJvcmF0b3JzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29sbGFib3JhdG9yc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDaGVjayBpZiBhIHVzZXIgaXMgYSBjb2xsYWJvcmF0b3Igb24gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb2xsYWJvcmF0b3JzLyNjaGVjay1pZi1hLXVzZXItaXMtYS1jb2xsYWJvcmF0b3JcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIHRoZSB1c2VyIHRvIGNoZWNrXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSB1c2VyIGlzIGEgY29sbGFib3JhdG9yIGFuZCBmYWxzZSBpZiB0aGV5IGFyZSBub3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3Qge0Jvb2xlYW59IFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgaXNDb2xsYWJvcmF0b3IodXNlcm5hbWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29sbGFib3JhdG9ycy8ke3VzZXJuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgdGhlIGNvbnRlbnRzIG9mIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbnRlbnRzLyNnZXQtY29udGVudHNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmIHRvIGNoZWNrXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIGNvbnRhaW5pbmcgdGhlIGNvbnRlbnQgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmF3IC0gYHRydWVgIGlmIHRoZSByZXN1bHRzIHNob3VsZCBiZSByZXR1cm5lZCByYXcgaW5zdGVhZCBvZiBHaXRIdWIncyBub3JtYWxpemVkIGZvcm1hdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGZldGNoZWQgZGF0YVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb250ZW50cyhyZWYsIHBhdGgsIHJhdywgY2IpIHtcbiAgICAgIHBhdGggPSBwYXRoID8gYCR7ZW5jb2RlVVJJKHBhdGgpfWAgOiAnJztcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb250ZW50cy8ke3BhdGh9YCwge1xuICAgICAgICAgcmVmXG4gICAgICB9LCBjYiwgcmF3KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgdGhlIFJFQURNRSBvZiBhIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb250ZW50cy8jZ2V0LXRoZS1yZWFkbWVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmIHRvIGNoZWNrXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJhdyAtIGB0cnVlYCBpZiB0aGUgcmVzdWx0cyBzaG91bGQgYmUgcmV0dXJuZWQgcmF3IGluc3RlYWQgb2YgR2l0SHViJ3Mgbm9ybWFsaXplZCBmb3JtYXRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBmZXRjaGVkIGRhdGFcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UmVhZG1lKHJlZiwgcmF3LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3JlYWRtZWAsIHtcbiAgICAgICAgIHJlZlxuICAgICAgfSwgY2IsIHJhdyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRm9yayBhIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9mb3Jrcy8jY3JlYXRlLWEtZm9ya1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXdseSBjcmVhdGVkIGZvcmtcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZm9yayhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9mb3Jrc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IGEgcmVwb3NpdG9yeSdzIGZvcmtzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvZm9ya3MvI2xpc3QtZm9ya3NcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllcyBmb3JrZWQgZnJvbSB0aGlzIG9uZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0Rm9ya3MoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9mb3Jrc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgYnJhbmNoIGZyb20gYW4gZXhpc3RpbmcgYnJhbmNoLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvbGRCcmFuY2g9bWFzdGVyXSAtIHRoZSBuYW1lIG9mIHRoZSBleGlzdGluZyBicmFuY2hcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdCcmFuY2ggLSB0aGUgbmFtZSBvZiB0aGUgbmV3IGJyYW5jaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1pdCBkYXRhIGZvciB0aGUgaGVhZCBvZiB0aGUgbmV3IGJyYW5jaFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVCcmFuY2gob2xkQnJhbmNoLCBuZXdCcmFuY2gsIGNiKSB7XG4gICAgICBpZiAodHlwZW9mIG5ld0JyYW5jaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY2IgPSBuZXdCcmFuY2g7XG4gICAgICAgICBuZXdCcmFuY2ggPSBvbGRCcmFuY2g7XG4gICAgICAgICBvbGRCcmFuY2ggPSAnbWFzdGVyJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmKGBoZWFkcy8ke29sZEJyYW5jaH1gKVxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2hhID0gcmVzcG9uc2UuZGF0YS5vYmplY3Quc2hhO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVmKHtcbiAgICAgICAgICAgICAgIHNoYSxcbiAgICAgICAgICAgICAgIHJlZjogYHJlZnMvaGVhZHMvJHtuZXdCcmFuY2h9YFxuICAgICAgICAgICAgfSwgY2IpO1xuICAgICAgICAgfSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IHB1bGwgcmVxdWVzdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3B1bGxzLyNjcmVhdGUtYS1wdWxsLXJlcXVlc3RcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIHB1bGwgcmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ldyBwdWxsIHJlcXVlc3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlUHVsbFJlcXVlc3Qob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcHVsbHNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGEgcHVsbCByZXF1ZXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHVsbHMvI3VwZGF0ZS1hLXB1bGwtcmVxdWVzdFxuICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIHRoZSBwdWxsIHJlcXVlc3QgdG8gdXBkYXRlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBwdWxsIHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHB1bGwgcmVxdWVzdCBpbmZvcm1hdGlvblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVQdWxsUmVxdXN0KG51bWJlciwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3B1bGxzLyR7bnVtYmVyfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBob29rcyBmb3IgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9ob29rcy8jbGlzdC1ob29rc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgaG9va3NcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdEhvb2tzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vaG9va3NgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgaG9vayBmb3IgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9ob29rcy8jZ2V0LXNpbmdsZS1ob29rXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSB0aGUgaWQgb2YgdGhlIHdlYm9va1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGRldGFpbHMgb2YgdGhlIHdlYm9va1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRIb29rKGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEFkZCBhIG5ldyBob29rIHRvIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvaG9va3MvI2NyZWF0ZS1hLWhvb2tcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGNvbmZpZ3VyYXRpb24gZGVzY3JpYmluZyB0aGUgbmV3IGhvb2tcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgd2ViaG9va1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVIb29rKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEVkaXQgYW4gZXhpc3Rpbmcgd2ViaG9va1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2hvb2tzLyNlZGl0LWEtaG9va1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gdGhlIGlkIG9mIHRoZSB3ZWJob29rXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBuZXcgZGVzY3JpcHRpb24gb2YgdGhlIHdlYmhvb2tcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSB1cGRhdGVkIHdlYmhvb2tcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlSG9vayhpZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzLyR7aWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIHdlYmhvb2tcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9ob29rcy8jZGVsZXRlLWEtaG9va1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gdGhlIGlkIG9mIHRoZSB3ZWJob29rIHRvIGJlIGRlbGV0ZWRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIGNhbGwgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVIb29rKGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAke3RoaXMuX19yZXBvUGF0aH0vaG9va3MvJHtpZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgZmlsZSBmcm9tIGEgYnJhbmNoXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29udGVudHMvI2RlbGV0ZS1hLWZpbGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuY2ggLSB0aGUgYnJhbmNoIHRvIGRlbGV0ZSBmcm9tLCBvciB0aGUgZGVmYXVsdCBicmFuY2ggaWYgbm90IHNwZWNpZmllZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCBvZiB0aGUgZmlsZSB0byByZW1vdmVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjb21taXQgaW4gd2hpY2ggdGhlIGRlbGV0ZSBvY2N1cnJlZFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVGaWxlKGJyYW5jaCwgcGF0aCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNoYShicmFuY2gsIHBhdGgpXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbW1pdCA9IHtcbiAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBEZWxldGUgdGhlIGZpbGUgYXQgJyR7cGF0aH0nYCxcbiAgICAgICAgICAgICAgIHNoYTogcmVzcG9uc2UuZGF0YS5zaGEsXG4gICAgICAgICAgICAgICBicmFuY2hcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29udGVudHMvJHtwYXRofWAsIGRlbGV0ZUNvbW1pdCwgY2IpO1xuICAgICAgICAgfSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ2hhbmdlIGFsbCByZWZlcmVuY2VzIGluIGEgcmVwbyBmcm9tIG9sZFBhdGggdG8gbmV3X3BhdGhcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuY2ggLSB0aGUgYnJhbmNoIHRvIGNhcnJ5IG91dCB0aGUgcmVmZXJlbmNlIGNoYW5nZSwgb3IgdGhlIGRlZmF1bHQgYnJhbmNoIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRQYXRoIC0gb3JpZ2luYWwgcGF0aFxuICAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggLSBuZXcgcmVmZXJlbmNlIHBhdGhcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjb21taXQgaW4gd2hpY2ggdGhlIG1vdmUgb2NjdXJyZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbW92ZShicmFuY2gsIG9sZFBhdGgsIG5ld1BhdGgsIGNiKSB7XG4gICAgICBsZXQgb2xkU2hhO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmKGBoZWFkcy8ke2JyYW5jaH1gKVxuICAgICAgICAgLnRoZW4oKHtkYXRhOiB7b2JqZWN0fX0pID0+IHRoaXMuZ2V0VHJlZShgJHtvYmplY3Quc2hhfT9yZWN1cnNpdmU9dHJ1ZWApKVxuICAgICAgICAgLnRoZW4oKHtkYXRhOiB7dHJlZSwgc2hhfX0pID0+IHtcbiAgICAgICAgICAgIG9sZFNoYSA9IHNoYTtcbiAgICAgICAgICAgIGxldCBuZXdUcmVlID0gdHJlZS5tYXAoKHJlZikgPT4ge1xuICAgICAgICAgICAgICAgaWYgKHJlZi5wYXRoID09PSBvbGRQYXRoKSB7XG4gICAgICAgICAgICAgICAgICByZWYucGF0aCA9IG5ld1BhdGg7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBpZiAocmVmLnR5cGUgPT09ICd0cmVlJykge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlZi5zaGE7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICByZXR1cm4gcmVmO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVUcmVlKG5ld1RyZWUpO1xuICAgICAgICAgfSlcbiAgICAgICAgIC50aGVuKCh7ZGF0YTogdHJlZX0pID0+IHRoaXMuY29tbWl0KG9sZFNoYSwgdHJlZS5zaGEsIGBSZW5hbWVkICcke29sZFBhdGh9JyB0byAnJHtuZXdQYXRofSdgKSlcbiAgICAgICAgIC50aGVuKCh7ZGF0YTogY29tbWl0fSkgPT4gdGhpcy51cGRhdGVIZWFkKGBoZWFkcy8ke2JyYW5jaH1gLCBjb21taXQuc2hhLCB0cnVlLCBjYikpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFdyaXRlIGEgZmlsZSB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbnRlbnRzLyN1cGRhdGUtYS1maWxlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYnJhbmNoIC0gdGhlIG5hbWUgb2YgdGhlIGJyYW5jaFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCBmb3IgdGhlIGZpbGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIHRoZSBjb21taXQgbWVzc2FnZVxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGNvbW1pdCBvcHRpb25zXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuYXV0aG9yXSAtIHRoZSBhdXRob3Igb2YgdGhlIGNvbW1pdFxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmNvbW1pdGVyXSAtIHRoZSBjb21taXR0ZXJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZW5jb2RlXSAtIHRydWUgaWYgdGhlIGNvbnRlbnQgc2hvdWxkIGJlIGJhc2U2NCBlbmNvZGVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbmV3IGNvbW1pdFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB3cml0ZUZpbGUoYnJhbmNoLCBwYXRoLCBjb250ZW50LCBtZXNzYWdlLCBvcHRpb25zLCBjYikge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG4gICAgICBsZXQgZmlsZVBhdGggPSBwYXRoID8gZW5jb2RlVVJJKHBhdGgpIDogJyc7XG4gICAgICBsZXQgc2hvdWxkRW5jb2RlID0gb3B0aW9ucy5lbmNvZGUgIT09IGZhbHNlO1xuICAgICAgbGV0IGNvbW1pdCA9IHtcbiAgICAgICAgIGJyYW5jaCxcbiAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICBhdXRob3I6IG9wdGlvbnMuYXV0aG9yLFxuICAgICAgICAgY29tbWl0dGVyOiBvcHRpb25zLmNvbW1pdHRlcixcbiAgICAgICAgIGNvbnRlbnQ6IHNob3VsZEVuY29kZSA/IEJhc2U2NC5lbmNvZGUoY29udGVudCkgOiBjb250ZW50XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRTaGEoYnJhbmNoLCBmaWxlUGF0aClcbiAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29tbWl0LnNoYSA9IHJlc3BvbnNlLmRhdGEuc2hhO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2NvbnRlbnRzLyR7ZmlsZVBhdGh9YCwgY29tbWl0LCBjYik7XG4gICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29udGVudHMvJHtmaWxlUGF0aH1gLCBjb21taXQsIGNiKTtcbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENoZWNrIGlmIGEgcmVwb3NpdG9yeSBpcyBzdGFycmVkIGJ5IHlvdVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2FjdGl2aXR5L3N0YXJyaW5nLyNjaGVjay1pZi15b3UtYXJlLXN0YXJyaW5nLWEtcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVwb3NpdG9yeSBpcyBzdGFycmVkIGFuZCBmYWxzZSBpZiB0aGUgcmVwb3NpdG9yeVxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgbm90IHN0YXJyZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3Qge0Jvb2xlYW59IFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgaXNTdGFycmVkKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvdXNlci9zdGFycmVkLyR7dGhpcy5fX2Z1bGxuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTdGFyIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2FjdGl2aXR5L3N0YXJyaW5nLyNzdGFyLWEtcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVwb3NpdG9yeSBpcyBzdGFycmVkXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHN0YXIoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3VzZXIvc3RhcnJlZC8ke3RoaXMuX19mdWxsbmFtZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVW5zdGFyIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2FjdGl2aXR5L3N0YXJyaW5nLyN1bnN0YXItYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXBvc2l0b3J5IGlzIHVuc3RhcnJlZFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1bnN0YXIoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3VzZXIvc3RhcnJlZC8ke3RoaXMuX19mdWxsbmFtZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IHJlbGVhc2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9yZWxlYXNlcy8jY3JlYXRlLWEtcmVsZWFzZVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHJlbGVhc2VcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXdseSBjcmVhdGVkIHJlbGVhc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlUmVsZWFzZShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9yZWxlYXNlc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGEgcmVsZWFzZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL3JlbGVhc2VzLyNlZGl0LWEtcmVsZWFzZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gdGhlIGlkIG9mIHRoZSByZWxlYXNlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcmVsZWFzZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG1vZGlmaWVkIHJlbGVhc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlUmVsZWFzZShpZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3JlbGVhc2VzLyR7aWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhbGwgcmVsZWFzZXNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9yZWxlYXNlcy8jbGlzdC1yZWxlYXNlcy1mb3ItYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVsZWFzZSBpbmZvcm1hdGlvblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0UmVsZWFzZXMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9yZWxlYXNlc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSByZWxlYXNlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvcmVsZWFzZXMvI2dldC1hLXNpbmdsZS1yZWxlYXNlXG4gICAgKiBAcGFyYW0ge3N0cmlnbn0gaWQgLSB0aGUgaWQgb2YgdGhlIHJlbGVhc2VcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSByZWxlYXNlIGluZm9ybWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFJlbGVhc2UoaWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcmVsZWFzZXMvJHtpZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgcmVsZWFzZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL3JlbGVhc2VzLyNkZWxldGUtYS1yZWxlYXNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgcmVsZWFzZSB0byBiZSBkZWxldGVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVSZWxlYXNlKGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3JlbGVhc2VzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIE1lcmdlIGEgcHVsbCByZXF1ZXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHVsbHMvI21lcmdlLWEtcHVsbC1yZXF1ZXN0LW1lcmdlLWJ1dHRvblxuICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIHRoZSBwdWxsIHJlcXVlc3QgdG8gbWVyZ2VcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIG1lcmdlIG9wdGlvbnMgZm9yIHRoZSBwdWxsIHJlcXVlc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1lcmdlIGluZm9ybWF0aW9uIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBtZXJnZVB1bGxSZXF1ZXN0KG51bWJlciwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9wdWxscy8ke251bWJlcn0vbWVyZ2VgLCBvcHRpb25zLCBjYik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwb3NpdG9yeTtcbiJdfQ==
	//# sourceMappingURL=Repository.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(937).Buffer))

/***/ },

/***/ 947:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {
	
		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;
	
		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}
	
		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
		}
		/*--------------------------------------------------------------------------*/
	
		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}
	
		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}
	
		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}
	
			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}
	
			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}
	
		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;
	
			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}
	
			if (byteIndex == byteCount) {
				return false;
			}
	
			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}
	
			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}
	
			throw Error('Invalid UTF-8 detected');
		}
	
		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}
	
		/*--------------------------------------------------------------------------*/
	
		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(948)(module), (function() { return this; }())))

/***/ },

/***/ 948:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 949:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('./Requestable'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.Requestable);
	    global.Organization = mod.exports;
	  }
	})(this, function (module, _Requestable2) {
	  'use strict';
	
	  var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var Organization = function (_Requestable) {
	    _inherits(Organization, _Requestable);
	
	    /**
	     * Create a new Organization
	     * @param {string} organization - the name of the organization
	     * @param {Requestable.auth} [auth] - information required to authenticate to Github
	     * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	     */
	
	    function Organization(organization, auth, apiBase) {
	      _classCallCheck(this, Organization);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Organization).call(this, auth, apiBase));
	
	      _this.__name = organization;
	      return _this;
	    }
	
	    /**
	     * Create a repository in an organization
	     * @see https://developer.github.com/v3/repos/#create
	     * @param {Object} options - the repository definition
	     * @param {Requestable.callback} [cb] - will receive the created repository
	     * @return {Promise} - the promise for the http request
	     */
	
	
	    _createClass(Organization, [{
	      key: 'createRepo',
	      value: function createRepo(options, cb) {
	        return this._request('POST', '/orgs/' + this.__name + '/repos', options, cb);
	      }
	    }, {
	      key: 'getRepos',
	      value: function getRepos(cb) {
	        var requestOptions = this._getOptionsWithDefaults({ direction: 'desc' });
	
	        return this._requestAllPages('/orgs/' + this.__name + '/repos', requestOptions, cb);
	      }
	    }, {
	      key: 'isMember',
	      value: function isMember(username, cb) {
	        return this._request204or404('/orgs/' + this.__name + '/members/' + username, null, cb);
	      }
	    }, {
	      key: 'listMembers',
	      value: function listMembers(options, cb) {
	        return this._request('GET', '/orgs/' + this.__name + '/members', options, cb);
	      }
	    }, {
	      key: 'getTeams',
	      value: function getTeams(cb) {
	        return this._requestAllPages('/orgs/' + this.__name + '/teams', undefined, cb);
	      }
	    }, {
	      key: 'createTeam',
	      value: function createTeam(options, cb) {
	        return this._request('POST', '/orgs/' + this.__name + '/teams', options, cb);
	      }
	    }]);
	
	    return Organization;
	  }(_Requestable3.default);
	
	  module.exports = Organization;
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVlNLFk7Ozs7Ozs7Ozs7QUFPSCwwQkFBWSxZQUFaLEVBQTBCLElBQTFCLEVBQWdDLE9BQWhDLEVBQXlDO0FBQUE7O0FBQUEsa0dBQ2hDLElBRGdDLEVBQzFCLE9BRDBCOztBQUV0QyxZQUFLLE1BQUwsR0FBYyxZQUFkO0FBRnNDO0FBR3hDOzs7Ozs7Ozs7Ozs7O2lDQVNVLE8sRUFBUyxFLEVBQUk7QUFDckIsZUFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLGFBQStCLEtBQUssTUFBcEMsYUFBb0QsT0FBcEQsRUFBNkQsRUFBN0QsQ0FBUDtBQUNGOzs7K0JBUVEsRSxFQUFJO0FBQ1YsWUFBSSxpQkFBaUIsS0FBSyx1QkFBTCxDQUE2QixFQUFDLFdBQVcsTUFBWixFQUE3QixDQUFyQjs7QUFFQSxlQUFPLEtBQUssZ0JBQUwsWUFBK0IsS0FBSyxNQUFwQyxhQUFvRCxjQUFwRCxFQUFvRSxFQUFwRSxDQUFQO0FBQ0Y7OzsrQkFRUSxRLEVBQVUsRSxFQUFJO0FBQ3BCLGVBQU8sS0FBSyxnQkFBTCxZQUErQixLQUFLLE1BQXBDLGlCQUFzRCxRQUF0RCxFQUFrRSxJQUFsRSxFQUF3RSxFQUF4RSxDQUFQO0FBQ0Y7OztrQ0FXVyxPLEVBQVMsRSxFQUFJO0FBQ3RCLGVBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxhQUE4QixLQUFLLE1BQW5DLGVBQXFELE9BQXJELEVBQThELEVBQTlELENBQVA7QUFDRjs7OytCQVFRLEUsRUFBSTtBQUNWLGVBQU8sS0FBSyxnQkFBTCxZQUErQixLQUFLLE1BQXBDLGFBQW9ELFNBQXBELEVBQStELEVBQS9ELENBQVA7QUFDRjs7O2lDQWNVLE8sRUFBUyxFLEVBQUk7QUFDckIsZUFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLGFBQStCLEtBQUssTUFBcEMsYUFBb0QsT0FBcEQsRUFBNkQsRUFBN0QsQ0FBUDtBQUNGOzs7Ozs7QUFHSixTQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoiT3JnYW5pemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5cbi8qKlxuICogT3JnYW5pemF0aW9uIGVuY2Fwc3VsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSB0byBjcmVhdGUgcmVwb3NpdG9yaWVzIGluIG9yZ2FuaXphdGlvbnNcbiAqL1xuY2xhc3MgT3JnYW5pemF0aW9uIGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgT3JnYW5pemF0aW9uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3JnYW5pemF0aW9uIC0gdGhlIG5hbWUgb2YgdGhlIG9yZ2FuaXphdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3Rvcihvcmdhbml6YXRpb24sIGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgICAgdGhpcy5fX25hbWUgPSBvcmdhbml6YXRpb247XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgcmVwb3NpdG9yeSBpbiBhbiBvcmdhbml6YXRpb25cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jY3JlYXRlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSByZXBvc2l0b3J5IGRlZmluaXRpb25cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNyZWF0ZWQgcmVwb3NpdG9yeVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVSZXBvKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvb3Jncy8ke3RoaXMuX19uYW1lfS9yZXBvc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSByZXBvc2l0b3JpZXMgaW4gYW4gb3JnYW5pemF0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2xpc3Qtb3JnYW5pemF0aW9uLXJlcG9zaXRvcmllc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UmVwb3MoY2IpIHtcbiAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IHRoaXMuX2dldE9wdGlvbnNXaXRoRGVmYXVsdHMoe2RpcmVjdGlvbjogJ2Rlc2MnfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9vcmdzLyR7dGhpcy5fX25hbWV9L3JlcG9zYCwgcmVxdWVzdE9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBRdWVyeSBpZiB0aGUgdXNlciBpcyBhIG1lbWJlciBvciBub3RcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIHRoZSB1c2VyIGluIHF1ZXN0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHVzZXIgaXMgYSBtZW1iZXJcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgaXNNZW1iZXIodXNlcm5hbWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvb3Jncy8ke3RoaXMuX19uYW1lfS9tZW1iZXJzLyR7dXNlcm5hbWV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHVzZXJzIHdobyBhcmUgbWVtYmVycyBvZiB0aGUgY29tcGFueVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvbWVtYmVycy8jbWVtYmVycy1saXN0XG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGZpbHRlcmluZyBvcHRpb25zXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZmlsdGVyPWFsbF0gLSBjYW4gYmUgZWl0aGVyIGAyZmFfZGlzYWJsZWRgIG9yIGBhbGxgXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucm9sZT1hbGxdIC0gY2FuIGJlIG9uZSBvZjogYGFsbGAsIGBhZG1pbmAsIG9yIGBtZW1iZXJgXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHVzZXJzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RNZW1iZXJzKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9vcmdzLyR7dGhpcy5fX25hbWV9L21lbWJlcnNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgVGVhbXMgaW4gdGhlIE9yZ2FuaXphdGlvblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2xpc3QtdGVhbXNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgdGVhbXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0VGVhbXMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9vcmdzLyR7dGhpcy5fX25hbWV9L3RlYW1zYCwgdW5kZWZpbmVkLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgdGVhbVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2NyZWF0ZS10ZWFtXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRlYW0gY3JlYXRpb24gcGFyYW1ldGVyc1xuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB0ZWFtXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGVzY3JpcHRpb25dIC0gVGVhbSBkZXNjcmlwdGlvblxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnJlcG9fbmFtZXNdIC0gUmVwb3MgdG8gYWRkIHRoZSB0ZWFtIHRvXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucHJpdmFjeT1zZWNyZXRdIC0gVGhlIGxldmVsIG9mIHByaXZhY3kgdGhlIHRlYW0gc2hvdWxkIGhhdmUuIENhbiBiZSBlaXRoZXIgb25lXG4gICAgKiBvZjogYHNlY3JldGAsIG9yIGBjbG9zZWRgXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjcmVhdGVkIHRlYW1cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlVGVhbShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL29yZ3MvJHt0aGlzLl9fbmFtZX0vdGVhbXNgLCBvcHRpb25zLCBjYik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3JnYW5pemF0aW9uO1xuIl19
	//# sourceMappingURL=Organization.js.map


/***/ },

/***/ 950:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915), __webpack_require__(933)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('./Requestable'), require('debug'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.Requestable, global.debug);
	    global.Team = mod.exports;
	  }
	})(this, function (module, _Requestable2, _debug) {
	  'use strict';
	
	  var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	  var _debug2 = _interopRequireDefault(_debug);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var log = (0, _debug2.default)('github:team');
	
	  /**
	   * A Team allows scoping of API requests to a particular Github Organization Team.
	   */
	
	  var Team = function (_Requestable) {
	    _inherits(Team, _Requestable);
	
	    /**
	     * Create a Team.
	     * @param {string} [teamId] - the id for the team
	     * @param {Requestable.auth} [auth] - information required to authenticate to Github
	     * @param {string} [apiBase=https://api.github.com] - the base Github API URL
	     */
	
	    function Team(teamId, auth, apiBase) {
	      _classCallCheck(this, Team);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Team).call(this, auth, apiBase));
	
	      _this.__teamId = teamId;
	      return _this;
	    }
	
	    /**
	     * Get Team information
	     * @see https://developer.github.com/v3/orgs/teams/#get-team
	     * @param {Requestable.callback} [cb] - will receive the team
	     * @return {Promise} - the promise for the http request
	     */
	
	
	    _createClass(Team, [{
	      key: 'getTeam',
	      value: function getTeam(cb) {
	        log('Fetching Team ' + this.__teamId);
	        return this._request('Get', '/teams/' + this.__teamId, undefined, cb);
	      }
	    }, {
	      key: 'listRepos',
	      value: function listRepos(cb) {
	        log('Fetching repositories for Team ' + this.__teamId);
	        return this._requestAllPages('/teams/' + this.__teamId + '/repos', undefined, cb);
	      }
	    }, {
	      key: 'editTeam',
	      value: function editTeam(options, cb) {
	        log('Editing Team ' + this.__teamId);
	        return this._request('PATCH', '/teams/' + this.__teamId, options, cb);
	      }
	    }, {
	      key: 'listMembers',
	      value: function listMembers(options, cb) {
	        log('Getting members of Team ' + this.__teamId);
	        return this._requestAllPages('/teams/' + this.__teamId + '/members', options, cb);
	      }
	    }, {
	      key: 'getMembership',
	      value: function getMembership(username, cb) {
	        log('Getting membership of user ' + username + ' in Team ' + this.__teamId);
	        return this._request('GET', '/teams/' + this.__teamId + '/memberships/' + username, undefined, cb);
	      }
	    }, {
	      key: 'addMembership',
	      value: function addMembership(username, options, cb) {
	        log('Adding user ' + username + ' to Team ' + this.__teamId);
	        return this._request('PUT', '/teams/' + this.__teamId + '/memberships/' + username, options, cb);
	      }
	    }, {
	      key: 'isManagedRepo',
	      value: function isManagedRepo(owner, repo, cb) {
	        log('Getting repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
	        return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, undefined, cb);
	      }
	    }, {
	      key: 'manageRepo',
	      value: function manageRepo(owner, repo, options, cb) {
	        log('Adding or Updating repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
	        return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, options, cb, 'PUT');
	      }
	    }, {
	      key: 'unmanageRepo',
	      value: function unmanageRepo(owner, repo, cb) {
	        log('Remove repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
	        return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, undefined, cb, 'DELETE');
	      }
	    }, {
	      key: 'deleteTeam',
	      value: function deleteTeam(cb) {
	        log('Deleting Team ' + this.__teamId);
	        return this._request204or404('/teams/' + this.__teamId, undefined, cb, 'DELETE');
	      }
	    }]);
	
	    return Team;
	  }(_Requestable3.default);
	
	  module.exports = Team;
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLE1BQU0sTUFBTSxxQkFBTSxhQUFOLENBQVo7Ozs7OztNQUtNLEk7Ozs7Ozs7Ozs7QUFPSCxrQkFBWSxNQUFaLEVBQW9CLElBQXBCLEVBQTBCLE9BQTFCLEVBQW1DO0FBQUE7O0FBQUEsMEZBQzFCLElBRDBCLEVBQ3BCLE9BRG9COztBQUVoQyxZQUFLLFFBQUwsR0FBZ0IsTUFBaEI7QUFGZ0M7QUFHbEM7Ozs7Ozs7Ozs7Ozs4QkFRTyxFLEVBQUk7QUFDVCwrQkFBcUIsS0FBSyxRQUExQjtBQUNBLGVBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLLFFBQXBDLEVBQWdELFNBQWhELEVBQTJELEVBQTNELENBQVA7QUFDRjs7O2dDQVFTLEUsRUFBSTtBQUNYLGdEQUFzQyxLQUFLLFFBQTNDO0FBQ0EsZUFBTyxLQUFLLGdCQUFMLGFBQWdDLEtBQUssUUFBckMsYUFBdUQsU0FBdkQsRUFBa0UsRUFBbEUsQ0FBUDtBQUNGOzs7K0JBY1EsTyxFQUFTLEUsRUFBSTtBQUNuQiw4QkFBb0IsS0FBSyxRQUF6QjtBQUNBLGVBQU8sS0FBSyxRQUFMLENBQWMsT0FBZCxjQUFpQyxLQUFLLFFBQXRDLEVBQWtELE9BQWxELEVBQTJELEVBQTNELENBQVA7QUFDRjs7O2tDQVVXLE8sRUFBUyxFLEVBQUk7QUFDdEIseUNBQStCLEtBQUssUUFBcEM7QUFDQSxlQUFPLEtBQUssZ0JBQUwsYUFBZ0MsS0FBSyxRQUFyQyxlQUF5RCxPQUF6RCxFQUFrRSxFQUFsRSxDQUFQO0FBQ0Y7OztvQ0FTYSxRLEVBQVUsRSxFQUFJO0FBQ3pCLDRDQUFrQyxRQUFsQyxpQkFBc0QsS0FBSyxRQUEzRDtBQUNBLGVBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLLFFBQXBDLHFCQUE0RCxRQUE1RCxFQUF3RSxTQUF4RSxFQUFtRixFQUFuRixDQUFQO0FBQ0Y7OztvQ0FZYSxRLEVBQVUsTyxFQUFTLEUsRUFBSTtBQUNsQyw2QkFBbUIsUUFBbkIsaUJBQXVDLEtBQUssUUFBNUM7QUFDQSxlQUFPLEtBQUssUUFBTCxDQUFjLEtBQWQsY0FBK0IsS0FBSyxRQUFwQyxxQkFBNEQsUUFBNUQsRUFBd0UsT0FBeEUsRUFBaUYsRUFBakYsQ0FBUDtBQUNGOzs7b0NBVWEsSyxFQUFPLEksRUFBTSxFLEVBQUk7QUFDNUIsaURBQXVDLEtBQUssUUFBNUMsa0JBQWlFLEtBQWpFLFNBQTBFLElBQTFFO0FBQ0EsZUFBTyxLQUFLLGdCQUFMLGFBQWdDLEtBQUssUUFBckMsZUFBdUQsS0FBdkQsU0FBZ0UsSUFBaEUsRUFBd0UsU0FBeEUsRUFBbUYsRUFBbkYsQ0FBUDtBQUNGOzs7aUNBYVUsSyxFQUFPLEksRUFBTSxPLEVBQVMsRSxFQUFJO0FBQ2xDLDREQUFrRCxLQUFLLFFBQXZELGtCQUE0RSxLQUE1RSxTQUFxRixJQUFyRjtBQUNBLGVBQU8sS0FBSyxnQkFBTCxhQUFnQyxLQUFLLFFBQXJDLGVBQXVELEtBQXZELFNBQWdFLElBQWhFLEVBQXdFLE9BQXhFLEVBQWlGLEVBQWpGLEVBQXFGLEtBQXJGLENBQVA7QUFDRjs7O21DQVVZLEssRUFBTyxJLEVBQU0sRSxFQUFJO0FBQzNCLGdEQUFzQyxLQUFLLFFBQTNDLGtCQUFnRSxLQUFoRSxTQUF5RSxJQUF6RTtBQUNBLGVBQU8sS0FBSyxnQkFBTCxhQUFnQyxLQUFLLFFBQXJDLGVBQXVELEtBQXZELFNBQWdFLElBQWhFLEVBQXdFLFNBQXhFLEVBQW1GLEVBQW5GLEVBQXVGLFFBQXZGLENBQVA7QUFDRjs7O2lDQVFVLEUsRUFBSTtBQUNaLCtCQUFxQixLQUFLLFFBQTFCO0FBQ0EsZUFBTyxLQUFLLGdCQUFMLGFBQWdDLEtBQUssUUFBckMsRUFBaUQsU0FBakQsRUFBNEQsRUFBNUQsRUFBZ0UsUUFBaEUsQ0FBUDtBQUNGOzs7Ozs7QUFHSixTQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoiVGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTYgTWF0dCBTbWl0aCAoRGV2ZWxvcG1lbnQgU2VlZClcbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyA9IGRlYnVnKCdnaXRodWI6dGVhbScpO1xuXG4vKipcbiAqIEEgVGVhbSBhbGxvd3Mgc2NvcGluZyBvZiBBUEkgcmVxdWVzdHMgdG8gYSBwYXJ0aWN1bGFyIEdpdGh1YiBPcmdhbml6YXRpb24gVGVhbS5cbiAqL1xuY2xhc3MgVGVhbSBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgVGVhbS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVhbUlkXSAtIHRoZSBpZCBmb3IgdGhlIHRlYW1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gW2F1dGhdIC0gaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gYXV0aGVudGljYXRlIHRvIEdpdGh1YlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmdpdGh1Yi5jb21dIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqL1xuICAgY29uc3RydWN0b3IodGVhbUlkLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuX190ZWFtSWQgPSB0ZWFtSWQ7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IFRlYW0gaW5mb3JtYXRpb25cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNnZXQtdGVhbVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgdGVhbVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRUZWFtKGNiKSB7XG4gICAgICBsb2coYEZldGNoaW5nIFRlYW0gJHt0aGlzLl9fdGVhbUlkfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dldCcsIGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfWAsIHVuZGVmaW5lZCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIFRlYW0ncyByZXBvc2l0b3JpZXNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNsaXN0LXRlYW0tcmVwb3NcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RSZXBvcyhjYikge1xuICAgICAgbG9nKGBGZXRjaGluZyByZXBvc2l0b3JpZXMgZm9yIFRlYW0gJHt0aGlzLl9fdGVhbUlkfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH0vcmVwb3NgLCB1bmRlZmluZWQsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IFRlYW0gaW5mb3JtYXRpb25cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNlZGl0LXRlYW1cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gUGFyYW1ldGVycyBmb3IgdGVhbSBlZGl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5uYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRlYW1cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kZXNjcmlwdGlvbl0gLSBUZWFtIGRlc2NyaXB0aW9uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucmVwb19uYW1lc10gLSBSZXBvcyB0byBhZGQgdGhlIHRlYW0gdG9cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wcml2YWN5PXNlY3JldF0gLSBUaGUgbGV2ZWwgb2YgcHJpdmFjeSB0aGUgdGVhbSBzaG91bGQgaGF2ZS4gQ2FuIGJlIGVpdGhlciBvbmVcbiAgICAqIG9mOiBgc2VjcmV0YCwgb3IgYGNsb3NlZGBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHVwZGF0ZWQgdGVhbVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBlZGl0VGVhbShvcHRpb25zLCBjYikge1xuICAgICAgbG9nKGBFZGl0aW5nIFRlYW0gJHt0aGlzLl9fdGVhbUlkfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHVzZXJzIHdobyBhcmUgbWVtYmVycyBvZiB0aGUgVGVhbVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2xpc3QtdGVhbS1tZW1iZXJzXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFBhcmFtZXRlcnMgZm9yIGxpc3RpbmcgdGVhbSB1c2Vyc1xuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnJvbGU9YWxsXSAtIGNhbiBiZSBvbmUgb2Y6IGBhbGxgLCBgbWFpbnRhaW5lcmAsIG9yIGBtZW1iZXJgXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHVzZXJzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RNZW1iZXJzKG9wdGlvbnMsIGNiKSB7XG4gICAgICBsb2coYEdldHRpbmcgbWVtYmVycyBvZiBUZWFtICR7dGhpcy5fX3RlYW1JZH1gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9L21lbWJlcnNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IFRlYW0gbWVtYmVyc2hpcCBzdGF0dXMgZm9yIGEgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2dldC10ZWFtLW1lbWJlcnNoaXBcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIGNhbiBiZSBvbmUgb2Y6IGBhbGxgLCBgbWFpbnRhaW5lcmAsIG9yIGBtZW1iZXJgXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtZW1iZXJzaGlwIHN0YXR1cyBvZiBhIHVzZXJcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0TWVtYmVyc2hpcCh1c2VybmFtZSwgY2IpIHtcbiAgICAgIGxvZyhgR2V0dGluZyBtZW1iZXJzaGlwIG9mIHVzZXIgJHt1c2VybmFtZX0gaW4gVGVhbSAke3RoaXMuX190ZWFtSWR9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9L21lbWJlcnNoaXBzLyR7dXNlcm5hbWV9YCwgdW5kZWZpbmVkLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQWRkIGEgbWVtYmVyIHRvIHRoZSBUZWFtXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jYWRkLXRlYW0tbWVtYmVyc2hpcFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIC0gY2FuIGJlIG9uZSBvZjogYGFsbGAsIGBtYWludGFpbmVyYCwgb3IgYG1lbWJlcmBcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gUGFyYW1ldGVycyBmb3IgYWRkaW5nIGEgdGVhbSBtZW1iZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5yb2xlPW1lbWJlcl0gLSBUaGUgcm9sZSB0aGF0IHRoaXMgdXNlciBzaG91bGQgaGF2ZSBpbiB0aGUgdGVhbS4gQ2FuIGJlIG9uZVxuICAgICogb2Y6IGBtZW1iZXJgLCBvciBgbWFpbnRhaW5lcmBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1lbWJlcnNoaXAgc3RhdHVzIG9mIGFkZGVkIHVzZXJcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgYWRkTWVtYmVyc2hpcCh1c2VybmFtZSwgb3B0aW9ucywgY2IpIHtcbiAgICAgIGxvZyhgQWRkaW5nIHVzZXIgJHt1c2VybmFtZX0gdG8gVGVhbSAke3RoaXMuX190ZWFtSWR9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9L21lbWJlcnNoaXBzLyR7dXNlcm5hbWV9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCByZXBvIG1hbmFnZW1lbnQgc3RhdHVzIGZvciB0ZWFtXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jcmVtb3ZlLXRlYW0tbWVtYmVyc2hpcFxuICAgICogQHBhcmFtIHtzdHJpbmd9IG93bmVyIC0gT3JnYW5pemF0aW9uIG5hbWVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXBvIC0gUmVwbyBuYW1lXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtZW1iZXJzaGlwIHN0YXR1cyBvZiBhZGRlZCB1c2VyXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGlzTWFuYWdlZFJlcG8ob3duZXIsIHJlcG8sIGNiKSB7XG4gICAgICBsb2coYEdldHRpbmcgcmVwbyBtYW5hZ2VtZW50IGJ5IFRlYW0gJHt0aGlzLl9fdGVhbUlkfSBmb3IgcmVwbyAke293bmVyfS8ke3JlcG99YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfS9yZXBvcy8ke293bmVyfS8ke3JlcG99YCwgdW5kZWZpbmVkLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQWRkIG9yIFVwZGF0ZSByZXBvIG1hbmFnZW1lbnQgc3RhdHVzIGZvciB0ZWFtXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jYWRkLW9yLXVwZGF0ZS10ZWFtLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvd25lciAtIE9yZ2FuaXphdGlvbiBuYW1lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwbyAtIFJlcG8gbmFtZVxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBQYXJhbWV0ZXJzIGZvciBhZGRpbmcgb3IgdXBkYXRpbmcgcmVwbyBtYW5hZ2VtZW50IGZvciB0aGUgdGVhbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBlcm1pc3Npb25dIC0gVGhlIHBlcm1pc3Npb24gdG8gZ3JhbnQgdGhlIHRlYW0gb24gdGhpcyByZXBvc2l0b3J5LiBDYW4gYmUgb25lXG4gICAgKiBvZjogYHB1bGxgLCBgcHVzaGAsIG9yIGBhZG1pbmBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1lbWJlcnNoaXAgc3RhdHVzIG9mIGFkZGVkIHVzZXJcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbWFuYWdlUmVwbyhvd25lciwgcmVwbywgb3B0aW9ucywgY2IpIHtcbiAgICAgIGxvZyhgQWRkaW5nIG9yIFVwZGF0aW5nIHJlcG8gbWFuYWdlbWVudCBieSBUZWFtICR7dGhpcy5fX3RlYW1JZH0gZm9yIHJlcG8gJHtvd25lcn0vJHtyZXBvfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QyMDRvcjQwNChgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH0vcmVwb3MvJHtvd25lcn0vJHtyZXBvfWAsIG9wdGlvbnMsIGNiLCAnUFVUJyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogUmVtb3ZlIHJlcG8gbWFuYWdlbWVudCBzdGF0dXMgZm9yIHRlYW1cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNyZW1vdmUtdGVhbS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3duZXIgLSBPcmdhbml6YXRpb24gbmFtZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcG8gLSBSZXBvIG5hbWVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1lbWJlcnNoaXAgc3RhdHVzIG9mIGFkZGVkIHVzZXJcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdW5tYW5hZ2VSZXBvKG93bmVyLCByZXBvLCBjYikge1xuICAgICAgbG9nKGBSZW1vdmUgcmVwbyBtYW5hZ2VtZW50IGJ5IFRlYW0gJHt0aGlzLl9fdGVhbUlkfSBmb3IgcmVwbyAke293bmVyfS8ke3JlcG99YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfS9yZXBvcy8ke293bmVyfS8ke3JlcG99YCwgdW5kZWZpbmVkLCBjYiwgJ0RFTEVURScpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBUZWFtXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jZGVsZXRlLXRlYW1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZVRlYW0oY2IpIHtcbiAgICAgIGxvZyhgRGVsZXRpbmcgVGVhbSAke3RoaXMuX190ZWFtSWR9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfWAsIHVuZGVmaW5lZCwgY2IsICdERUxFVEUnKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZWFtO1xuIl19
	//# sourceMappingURL=Team.js.map


/***/ },

/***/ 951:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('./Requestable'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.Requestable);
	    global.Markdown = mod.exports;
	  }
	})(this, function (module, _Requestable2) {
	  'use strict';
	
	  var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var Markdown = function (_Requestable) {
	    _inherits(Markdown, _Requestable);
	
	    /**
	     * construct a RateLimit
	     * @param {Requestable.auth} auth - the credentials to authenticate to GitHub
	     * @param {string} [apiBase] - the base Github API URL
	     * @return {Promise} - the promise for the http request
	     */
	
	    function Markdown(auth, apiBase) {
	      _classCallCheck(this, Markdown);
	
	      return _possibleConstructorReturn(this, Object.getPrototypeOf(Markdown).call(this, auth, apiBase));
	    }
	
	    /**
	     * Render html from Markdown text.
	     * @see https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document
	     * @param {Object} options - conversion options
	     * @param {string} [options.text] - the markdown text to convert
	     * @param {string} [options.mode=markdown] - can be either `markdown` or `gfm`
	     * @param {string} [options.context] - repository name if mode is gfm
	     * @param {Requestable.callback} [cb] - will receive the converted html
	     * @return {Promise} - the promise for the http request
	     */
	
	
	    _createClass(Markdown, [{
	      key: 'render',
	      value: function render(options, cb) {
	        return this._request('POST', '/markdown', options, cb);
	      }
	    }]);
	
	    return Markdown;
	  }(_Requestable3.default);
	
	  module.exports = Markdown;
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BWU0sUTs7Ozs7Ozs7OztBQU9ILHNCQUFZLElBQVosRUFBa0IsT0FBbEIsRUFBMkI7QUFBQTs7QUFBQSx5RkFDbEIsSUFEa0IsRUFDWixPQURZO0FBRTFCOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVlNLE8sRUFBUyxFLEVBQUk7QUFDakIsZUFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQXNCLFdBQXRCLEVBQW1DLE9BQW5DLEVBQTRDLEVBQTVDLENBQVA7QUFDRjs7Ozs7O0FBR0osU0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Ik1hcmtkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5cbi8qKlxuICogUmF0ZUxpbWl0IGFsbG93cyB1c2VycyB0byBxdWVyeSB0aGVpciByYXRlLWxpbWl0IHN0YXR1c1xuICovXG5jbGFzcyBNYXJrZG93biBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogY29uc3RydWN0IGEgUmF0ZUxpbWl0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IGF1dGggLSB0aGUgY3JlZGVudGlhbHMgdG8gYXV0aGVudGljYXRlIHRvIEdpdEh1YlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFJlbmRlciBodG1sIGZyb20gTWFya2Rvd24gdGV4dC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9tYXJrZG93bi8jcmVuZGVyLWFuLWFyYml0cmFyeS1tYXJrZG93bi1kb2N1bWVudFxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb252ZXJzaW9uIG9wdGlvbnNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy50ZXh0XSAtIHRoZSBtYXJrZG93biB0ZXh0IHRvIGNvbnZlcnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tb2RlPW1hcmtkb3duXSAtIGNhbiBiZSBlaXRoZXIgYG1hcmtkb3duYCBvciBgZ2ZtYFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbnRleHRdIC0gcmVwb3NpdG9yeSBuYW1lIGlmIG1vZGUgaXMgZ2ZtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjb252ZXJ0ZWQgaHRtbFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICByZW5kZXIob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgJy9tYXJrZG93bicsIG9wdGlvbnMsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXJrZG93bjtcbiJdfQ==
	//# sourceMappingURL=Markdown.js.map


/***/ },

/***/ 952:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(915)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('./Requestable'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.Requestable);
	    global.RateLimit = mod.exports;
	  }
	})(this, function (module, _Requestable2) {
	  'use strict';
	
	  var _Requestable3 = _interopRequireDefault(_Requestable2);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var RateLimit = function (_Requestable) {
	    _inherits(RateLimit, _Requestable);
	
	    /**
	     * construct a RateLimit
	     * @param {Requestable.auth} auth - the credentials to authenticate to GitHub
	     * @param {string} [apiBase] - the base Github API URL
	     * @return {Promise} - the promise for the http request
	     */
	
	    function RateLimit(auth, apiBase) {
	      _classCallCheck(this, RateLimit);
	
	      return _possibleConstructorReturn(this, Object.getPrototypeOf(RateLimit).call(this, auth, apiBase));
	    }
	
	    /**
	     * Query the current rate limit
	     * @see https://developer.github.com/v3/rate_limit/
	     * @param {Requestable.callback} [cb] - will receive the rate-limit data
	     * @return {Promise} - the promise for the http request
	     */
	
	
	    _createClass(RateLimit, [{
	      key: 'getRateLimit',
	      value: function getRateLimit(cb) {
	        return this._request('GET', '/rate_limit', null, cb);
	      }
	    }]);
	
	    return RateLimit;
	  }(_Requestable3.default);
	
	  module.exports = RateLimit;
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhdGVMaW1pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVlNLFM7Ozs7Ozs7Ozs7QUFPSCx1QkFBWSxJQUFaLEVBQWtCLE9BQWxCLEVBQTJCO0FBQUE7O0FBQUEsMEZBQ2xCLElBRGtCLEVBQ1osT0FEWTtBQUUxQjs7Ozs7Ozs7Ozs7O21DQVFZLEUsRUFBSTtBQUNkLGVBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixhQUFyQixFQUFvQyxJQUFwQyxFQUEwQyxFQUExQyxDQUFQO0FBQ0Y7Ozs7OztBQUdKLFNBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJSYXRlTGltaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcblxuLyoqXG4gKiBSYXRlTGltaXQgYWxsb3dzIHVzZXJzIHRvIHF1ZXJ5IHRoZWlyIHJhdGUtbGltaXQgc3RhdHVzXG4gKi9cbmNsYXNzIFJhdGVMaW1pdCBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogY29uc3RydWN0IGEgUmF0ZUxpbWl0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IGF1dGggLSB0aGUgY3JlZGVudGlhbHMgdG8gYXV0aGVudGljYXRlIHRvIEdpdEh1YlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFF1ZXJ5IHRoZSBjdXJyZW50IHJhdGUgbGltaXRcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yYXRlX2xpbWl0L1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmF0ZS1saW1pdCBkYXRhXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFJhdGVMaW1pdChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsICcvcmF0ZV9saW1pdCcsIG51bGwsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSYXRlTGltaXQ7XG4iXX0=
	//# sourceMappingURL=RateLimit.js.map


/***/ },

/***/ 953:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(406);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _connect = __webpack_require__(545);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _view = __webpack_require__(404);
	
	var _user = __webpack_require__(954);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Home = function Home(_ref) {
	  var profile = _ref.profile;
	  var actions = _ref.actions;
	
	  return _react2.default.createElement(
	    'section',
	    { className: 'main-content' },
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Welcome ',
	      profile.nickname
	    ),
	    _react2.default.createElement(
	      'h3',
	      null,
	      _react2.default.createElement(
	        'a',
	        { onClick: actions.logout },
	        'Logout'
	      )
	    ),
	    _react2.default.createElement(_view.Charlas, null)
	  );
	};
	exports.default = (0, _connect2.default)(function (state) {
	  return { profile: state.user.profile };
	}, { logout: _user.logout })(Home);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 954:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	exports.logout = logout;
	
	var _rxjs = __webpack_require__(568);
	
	var _user = __webpack_require__(955);
	
	var event = _interopRequireWildcard(_user);
	
	var _auth = __webpack_require__(956);
	
	var auth = _interopRequireWildcard(_auth);
	
	var _reactRouterRedux = __webpack_require__(396);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (action$) {
	  return _rxjs.Observable.merge(action$.ofType(event.LOGOUT).do(function (action) {
	    return auth.logout();
	  }).ignoreElements(), action$.ofType(event.LOGIN_IN).flatMap(function (action) {
	    return auth.login();
	  }).map(function (result) {
	    return {
	      type: event.LOGIN_OK,
	      payload: result
	    };
	  }).catch(function (error) {
	    return _rxjs.Observable.of({
	      type: event.LOGIN_FAIL,
	      payload: error.xhr.response,
	      error: true
	    });
	  }));
	};
	
	function login() {
	  return { type: event.LOGIN_IN };
	}
	
	function logout() {
	  return { type: event.LOGOUT };
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "user.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 955:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LOGOUT = exports.LOGIN_FAIL = exports.LOGIN_OK = exports.LOGIN_IN = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = reducer;
	
	var _auth = __webpack_require__(956);
	
	var LOGIN_IN = exports.LOGIN_IN = 'module/user/login_in';
	var LOGIN_OK = exports.LOGIN_OK = 'module/user/login_ok';
	var LOGIN_FAIL = exports.LOGIN_FAIL = 'module/user/login_fail';
	var LOGOUT = exports.LOGOUT = 'module/user/logout';
	
	var ANON_USER = { name: 'anon', avatar: 'none' };
	var previous = {
	    token: (0, _auth.localToken)(),
	    profile: (0, _auth.localProfile)()
	};
	var initialState = {
	    loading: false,
	    token: previous.token,
	    profile: !previous.profile ? ANON_USER : {
	        name: previous.profile.nickname,
	        avatar: previous.profile.picture
	    }
	};
	
	function reducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    switch (action.type) {
	        case LOGIN_IN:
	            return _extends({}, state, {
	                token: state.token.clear()
	            });
	        case LOGOUT:
	            return _extends({}, state, {
	                profile: ANON_USER,
	                token: state.token.clear()
	            });
	        case LOGIN_OK:
	            return _extends({}, state, {
	                token: action.payload.token,
	                profile: {
	                    name: action.payload.profile.nickname,
	                    avatar: action.payload.profile.picture
	                }
	            });
	        case LOGIN_FAIL:
	            return _extends({}, state, {
	                token: state.token.clear()
	            });
	        default:
	            return state;
	    }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "user.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 956:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.localProfile = localProfile;
	exports.localToken = localToken;
	exports.login = login;
	exports.logout = logout;
	
	var _auth0Lock = __webpack_require__(957);
	
	var _auth0Lock2 = _interopRequireDefault(_auth0Lock);
	
	var _config = __webpack_require__(1097);
	
	var _jwtDecode = __webpack_require__(1098);
	
	var _jwtDecode2 = _interopRequireDefault(_jwtDecode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var lock = new _auth0Lock2.default(_config.auth0.client, _config.auth0.domain, { autoclose: true, auth: { redirect: false } });
	
	var offsetSeconds = 5;
	
	var Token = function () {
	    function Token(token) {
	        _classCallCheck(this, Token);
	
	        this.token = token;
	    }
	
	    _createClass(Token, [{
	        key: 'isLoggedIn',
	        value: function isLoggedIn() {
	            return !this.isTokenExpired();
	        }
	    }, {
	        key: 'isTokenExpired',
	        value: function isTokenExpired() {
	            var date = this.getTokenExpirationDate();
	            return date === null || !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
	        }
	    }, {
	        key: 'getTokenExpirationDate',
	        value: function getTokenExpirationDate() {
	            if (!this.token) return null;
	            var decoded = (0, _jwtDecode2.default)(this.token);
	            if (!decoded.exp) return null;
	            var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
	            date.setUTCSeconds(decoded.exp);
	            return date;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            return new Token();
	        }
	    }]);
	
	    return Token;
	}();
	
	function localProfile() {
	    return localStorage.profile ? JSON.parse(localStorage.profile) : null;
	}
	
	function localToken() {
	    return new Token(localStorage.id_token);
	}
	
	function login() {
	    lock.show();
	    return new Promise(function (ok, fail) {
	        lock.on('authenticated', function (result) {
	            lock.getProfile(result.idToken, function (error, profile) {
	                if (error) {
	                    logout();
	                    fail(error);
	                } else {
	                    saveLocal(result.idToken, profile);
	                    ok({ token: new Token(result.idToken), profile: profile });
	                }
	            });
	        });
	    });
	}
	
	function logout() {
	    removeLocal();
	}
	
	function saveLocal(idToken, profile) {
	    localStorage.setItem('id_token', idToken);
	    localStorage.setItem('profile', JSON.stringify(profile));
	}
	
	function removeLocal() {
	    localStorage.removeItem('id_token');
	    localStorage.removeItem('profile');
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "auth0.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 1097:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var URL = exports.URL = 'https://localhost:8181/';
	var auth0 = exports.auth0 = {
	    client: 'kDM2xRJpjwa6aFfbM0TxChd5MsgKJ0n3',
	    domain: 'sebasjm.auth0.com'
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "config.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 1098:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var base64_url_decode = __webpack_require__(1099);
	
	module.exports = function (token,options) {
	  if (typeof token !== 'string') {
	    throw new Error('Invalid token specified');
	  }
	
	  options = options || {};
	  var pos = options.header === true ? 0 : 1;
	  return JSON.parse(base64_url_decode(token.split('.')[pos]));
	};


/***/ },

/***/ 1099:
/***/ function(module, exports, __webpack_require__) {

	var atob = __webpack_require__(1100);
	
	function b64DecodeUnicode(str) {
	  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
	    var code = p.charCodeAt(0).toString(16).toUpperCase();
	    if (code.length < 2) {
	      code = '0' + code;
	    }
	    return '%' + code;
	  }));
	}
	
	module.exports = function(str) {
	  var output = str.replace(/-/g, "+").replace(/_/g, "/");
	  switch (output.length % 4) {
	    case 0:
	      break;
	    case 2:
	      output += "==";
	      break;
	    case 3:
	      output += "=";
	      break;
	    default:
	      throw "Illegal base64url string!";
	  }
	
	  try{
	    return b64DecodeUnicode(output);
	  } catch (err) {
	    return atob(output);
	  }
	};


/***/ },

/***/ 1100:
/***/ function(module, exports) {

	/**
	 * The code was extracted from:
	 * https://github.com/davidchambers/Base64.js
	 */
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function InvalidCharacterError(message) {
	  this.message = message;
	}
	
	InvalidCharacterError.prototype = new Error();
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';
	
	function polyfill (input) {
	  var str = String(input).replace(/=+$/, '');
	  if (str.length % 4 == 1) {
	    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
	  }
	  for (
	    // initialize result and counters
	    var bc = 0, bs, buffer, idx = 0, output = '';
	    // get next character
	    buffer = str.charAt(idx++);
	    // character found in table? initialize bit storage and add its ascii value;
	    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
	      // and if not first of each 4 characters,
	      // convert the first 8 bits to one ascii character
	      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
	  ) {
	    // try to find character in table (0-63, not found => -1)
	    buffer = chars.indexOf(buffer);
	  }
	  return output;
	}
	
	
	module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ },

/***/ 1101:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(406);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _connect = __webpack_require__(545);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _view = __webpack_require__(404);
	
	var _user = __webpack_require__(954);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Landing = function Landing(_ref) {
	  var actions = _ref.actions;
	  return _react2.default.createElement(
	    'section',
	    { className: 'main-content' },
	    _react2.default.createElement(
	      'div',
	      { className: 'login-box' },
	      _react2.default.createElement(
	        'h2',
	        null,
	        _react2.default.createElement(
	          'a',
	          { onClick: actions.login },
	          'Sign In'
	        )
	      )
	    )
	  );
	};
	
	exports.default = (0, _connect2.default)(undefined, { login: _user.login })(Landing);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Landing.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 1102:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRouter = __webpack_require__(333);
	
	var _reactRouterRedux = __webpack_require__(396);
	
	var _reduxLogger = __webpack_require__(1103);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxObservable = __webpack_require__(1104);
	
	var _configureStore = __webpack_require__(1109);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _model = __webpack_require__(1110);
	
	var _model2 = _interopRequireDefault(_model);
	
	var _controller = __webpack_require__(1111);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ownMiddleware = [];
	var enhancers = [];
	
	ownMiddleware.push((0, _reduxObservable.createEpicMiddleware)(_controller2.default));
	ownMiddleware.push((0, _reactRouterRedux.routerMiddleware)(_reactRouter.hashHistory));
	
	if (process.env.NODE_ENV !== 'production') {
	  ownMiddleware.push((0, _reduxLogger2.default)({ collapsed: true }));
	  enhancers.push(window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	  });
	}
	
	var initialState = JSON.parse(document.body.getAttribute('data-redux-state'));
	if (!initialState) {
	  initialState = {};
	}
	
	var store = (0, _configureStore2.default)({
	  initialState: initialState,
	  ownMiddleware: ownMiddleware,
	  enhancers: enhancers
	}, _model2.default);
	
	exports.default = store;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 1103:
/***/ function(module, exports) {

	"use strict";
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
	
	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */
	
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */
	
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;
	
	  // exit if console undefined
	
	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }
	
	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;
	
	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;
	
	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");
	
	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }
	
	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");
	
	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }
	
	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }
	
	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }
	
	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }
	
	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        printBuffer();
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	module.exports = createLogger;

/***/ },

/***/ 1104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createEpicMiddleware = __webpack_require__(1105);
	
	Object.defineProperty(exports, 'createEpicMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _createEpicMiddleware.createEpicMiddleware;
	  }
	});
	
	var _ActionsObservable = __webpack_require__(1106);
	
	Object.defineProperty(exports, 'ActionsObservable', {
	  enumerable: true,
	  get: function get() {
	    return _ActionsObservable.ActionsObservable;
	  }
	});
	
	var _combineEpics = __webpack_require__(1108);
	
	Object.defineProperty(exports, 'combineEpics', {
	  enumerable: true,
	  get: function get() {
	    return _combineEpics.combineEpics;
	  }
	});
	
	var _EPIC_END = __webpack_require__(1107);
	
	Object.defineProperty(exports, 'EPIC_END', {
	  enumerable: true,
	  get: function get() {
	    return _EPIC_END.EPIC_END;
	  }
	});

/***/ },

/***/ 1105:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createEpicMiddleware = createEpicMiddleware;
	
	var _Subject = __webpack_require__(569);
	
	var _map = __webpack_require__(682);
	
	var _switchMap = __webpack_require__(859);
	
	var _ActionsObservable = __webpack_require__(1106);
	
	var _EPIC_END = __webpack_require__(1107);
	
	var defaultAdapter = {
	  input: function input(action$) {
	    return action$;
	  },
	  output: function output(action$) {
	    return action$;
	  }
	};
	
	var defaultOptions = {
	  adapter: defaultAdapter
	};
	
	function createEpicMiddleware(epic) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? defaultOptions : arguments[1];
	
	  var _ref$adapter = _ref.adapter;
	  var adapter = _ref$adapter === undefined ? defaultAdapter : _ref$adapter;
	
	  if (typeof epic !== 'function') {
	    throw new TypeError('You must provide a root Epic to createEpicMiddleware');
	  }
	
	  var input$ = new _Subject.Subject();
	  var action$ = adapter.input(new _ActionsObservable.ActionsObservable(input$));
	  var epic$ = new _Subject.Subject();
	  var store = void 0;
	
	  var epicMiddleware = function epicMiddleware(_store) {
	    store = _store;
	
	    return function (next) {
	      var _context;
	
	      (_context = _map.map.call(epic$, function (epic) {
	        return epic(action$, store);
	      }), _switchMap.switchMap).call(_context, function (action$) {
	        return adapter.output(action$);
	      }).subscribe(store.dispatch);
	
	      // Setup initial root epic
	      epic$.next(epic);
	
	      return function (action) {
	        var result = next(action);
	        input$.next(action);
	        return result;
	      };
	    };
	  };
	
	  epicMiddleware.replaceEpic = function (epic) {
	    // gives the previous root Epic a last chance
	    // to do some clean up
	    store.dispatch({ type: _EPIC_END.EPIC_END });
	    // switches to the new root Epic, synchronously terminating
	    // the previous one
	    epic$.next(epic);
	  };
	
	  return epicMiddleware;
	}

/***/ },

/***/ 1106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ActionsObservable = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Observable2 = __webpack_require__(570);
	
	var _of2 = __webpack_require__(657);
	
	var _filter = __webpack_require__(751);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ActionsObservable = exports.ActionsObservable = function (_Observable) {
	  _inherits(ActionsObservable, _Observable);
	
	  _createClass(ActionsObservable, null, [{
	    key: 'of',
	    value: function of() {
	      return new this(_of2.of.apply(undefined, arguments));
	    }
	  }]);
	
	  function ActionsObservable(actionsSubject) {
	    _classCallCheck(this, ActionsObservable);
	
	    var _this = _possibleConstructorReturn(this, (ActionsObservable.__proto__ || Object.getPrototypeOf(ActionsObservable)).call(this));
	
	    _this.source = actionsSubject;
	    return _this;
	  }
	
	  _createClass(ActionsObservable, [{
	    key: 'lift',
	    value: function lift(operator) {
	      var observable = new ActionsObservable(this);
	      observable.operator = operator;
	      return observable;
	    }
	  }, {
	    key: 'ofType',
	    value: function ofType() {
	      for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
	        keys[_key] = arguments[_key];
	      }
	
	      return _filter.filter.call(this, function (_ref) {
	        var type = _ref.type;
	
	        var len = keys.length;
	        if (len === 1) {
	          return type === keys[0];
	        } else {
	          for (var i = 0; i < len; i++) {
	            if (keys[i] === type) {
	              return true;
	            }
	          }
	        }
	        return false;
	      });
	    }
	  }]);
	
	  return ActionsObservable;
	}(_Observable2.Observable);

/***/ },

/***/ 1107:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EPIC_END = exports.EPIC_END = '@@redux-observable/EPIC_END';

/***/ },

/***/ 1108:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineEpics = undefined;
	
	var _merge = __webpack_require__(648);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	  Merges all epics into a single one.
	 */
	var combineEpics = exports.combineEpics = function combineEpics() {
	  for (var _len = arguments.length, epics = Array(_len), _key = 0; _key < _len; _key++) {
	    epics[_key] = arguments[_key];
	  }
	
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _merge.merge.apply(undefined, _toConsumableArray(epics.map(function (epic) {
	      return epic.apply(undefined, args);
	    })));
	  };
	};

/***/ },

/***/ 1109:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var reducers = arguments[1];
	  var _options$initialState = options.initialState;
	  var initialState = _options$initialState === undefined ? {} : _options$initialState;
	  var _options$ownMiddlewar = options.ownMiddleware;
	  var ownMiddleware = _options$ownMiddlewar === undefined ? [] : _options$ownMiddlewar;
	  var _options$enhancers = options.enhancers;
	  var enhancers = _options$enhancers === undefined ? [] : _options$enhancers;
	
	
	  var appliedMiddleware = _redux.applyMiddleware.apply(undefined, _toConsumableArray(ownMiddleware));
	
	  var store = (0, _redux.createStore)(reducers, initialState, _redux.compose.apply(undefined, [appliedMiddleware].concat(_toConsumableArray(enhancers))));
	
	  return store;
	};
	
	var _redux = __webpack_require__(553);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "configureStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 1110:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.github = exports.user = undefined;
	
	var _redux = __webpack_require__(553);
	
	var _reactRouterRedux = __webpack_require__(396);
	
	var _user = __webpack_require__(955);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _github = __webpack_require__(912);
	
	var _github2 = _interopRequireDefault(_github);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import { reducer as formReducer } from 'redux-form';
	
	exports.user = _user2.default;
	exports.github = _github2.default;
	exports.default = (0, _redux.combineReducers)({
	  user: _user2.default,
	  github: _github2.default,
	  //  form: formReducer,
	  routing: _reactRouterRedux.routerReducer
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 1111:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.location = exports.github = exports.user = undefined;
	
	var _reduxObservable = __webpack_require__(1104);
	
	var _user = __webpack_require__(954);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _github = __webpack_require__(567);
	
	var _github2 = _interopRequireDefault(_github);
	
	var _location = __webpack_require__(1112);
	
	var _location2 = _interopRequireDefault(_location);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.user = _user2.default;
	exports.github = _github2.default;
	exports.location = _location2.default;
	exports.default = (0, _reduxObservable.combineEpics)(_user2.default, _github2.default, _location2.default);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 1112:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _rxjs = __webpack_require__(568);
	
	var _reactRouterRedux = __webpack_require__(396);
	
	var _user = __webpack_require__(955);
	
	var event = _interopRequireWildcard(_user);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var secured = ['/home'];
	
	exports.default = function (action$, store) {
	  var _action$$ofType$parti = action$.ofType('@@router/LOCATION_CHANGE').partition(function (action) {
	    return secured.indexOf(action.payload.pathname) !== -1 && !store.getState().user.token.isLoggedIn();
	  });
	
	  var _action$$ofType$parti2 = _slicedToArray(_action$$ofType$parti, 2);
	
	  var unauth = _action$$ofType$parti2[0];
	  var auth = _action$$ofType$parti2[1];
	
	
	  return _rxjs.Observable.merge(action$.ofType(event.LOGIN_OK).map(function (action) {
	    return (0, _reactRouterRedux.replace)('/home');
	  }), action$.ofType(event.LOGOUT).map(function (action) {
	    return (0, _reactRouterRedux.replace)('/');
	  }), unauth.filter(function (action) {
	    return action.payload.pathname !== '/';
	  }).map(function (action) {
	    return (0, _reactRouterRedux.replace)('/');
	  }), auth.filter(function (action) {
	    return action.payload.pathname === '/' && store.getState().user.token.isLoggedIn();
	  }).map(function (action) {
	    return (0, _reactRouterRedux.replace)('/home');
	  }));
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sebasjm/Work/github/charlas/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "location.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 1113:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(1114);
	var defaultClickRejectionStrategy = __webpack_require__(1115);
	
	var alreadyInjected = false;
	
	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;
	
	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }
	
	  alreadyInjected = true;
	
	  __webpack_require__(415).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(1116)(shouldRejectClick)
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 1114:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 1115:
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },

/***/ 1116:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(413);
	var EventPluginUtils = __webpack_require__(417);
	var EventPropagators = __webpack_require__(414);
	var SyntheticUIEvent = __webpack_require__(448);
	var TouchEventUtils = __webpack_require__(1117);
	var ViewportMetrics = __webpack_require__(449);
	
	var keyOf = __webpack_require__(1118);
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;
	
	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}
	
	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;
	
	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};
	
	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}
	
	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}
	
	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];
	
	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);
	
	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};
	
	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();
	
	function createTapEventPlugin(shouldRejectClick) {
	  return {
	
	    tapMoveThreshold: tapMoveThreshold,
	
	    ignoreMouseThreshold: ignoreMouseThreshold,
	
	    eventTypes: eventTypes,
	
	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {
	
	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }
	
	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }
	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }
	
	  };
	}
	
	module.exports = createTapEventPlugin;


/***/ },

/***/ 1117:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */
	
	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;
	
	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};
	
	module.exports = TouchEventUtils;


/***/ },

/***/ 1118:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";
	
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ }

});
//# sourceMappingURL=bundle.js.map