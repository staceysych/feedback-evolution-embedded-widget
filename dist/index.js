var dS = { exports: {} }, qp = {}, pS = { exports: {} }, Rt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JC;
function nk() {
  if (JC) return Rt;
  JC = 1;
  var j = Symbol.for("react.element"), I = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), Ze = Symbol.for("react.profiler"), Ye = Symbol.for("react.provider"), Me = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), xe = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Ue = Symbol.iterator;
  function te(k) {
    return k === null || typeof k != "object" ? null : (k = Ue && k[Ue] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var Te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ee = Object.assign, ne = {};
  function tt(k, $, Ne) {
    this.props = k, this.context = $, this.refs = ne, this.updater = Ne || Te;
  }
  tt.prototype.isReactComponent = {}, tt.prototype.setState = function(k, $) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, $, "setState");
  }, tt.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function _n() {
  }
  _n.prototype = tt.prototype;
  function en(k, $, Ne) {
    this.props = k, this.context = $, this.refs = ne, this.updater = Ne || Te;
  }
  var Xe = en.prototype = new _n();
  Xe.constructor = en, ee(Xe, tt.prototype), Xe.isPureReactComponent = !0;
  var je = Array.isArray, Tt = Object.prototype.hasOwnProperty, Ce = { current: null }, vt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qe(k, $, Ne) {
    var Qe, it = {}, ct = null, St = null;
    if ($ != null) for (Qe in $.ref !== void 0 && (St = $.ref), $.key !== void 0 && (ct = "" + $.key), $) Tt.call($, Qe) && !vt.hasOwnProperty(Qe) && (it[Qe] = $[Qe]);
    var ht = arguments.length - 2;
    if (ht === 1) it.children = Ne;
    else if (1 < ht) {
      for (var wt = Array(ht), $t = 0; $t < ht; $t++) wt[$t] = arguments[$t + 2];
      it.children = wt;
    }
    if (k && k.defaultProps) for (Qe in ht = k.defaultProps, ht) it[Qe] === void 0 && (it[Qe] = ht[Qe]);
    return { $$typeof: j, type: k, key: ct, ref: St, props: it, _owner: Ce.current };
  }
  function fn(k, $) {
    return { $$typeof: j, type: k.type, key: $, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function dn(k) {
    return typeof k == "object" && k !== null && k.$$typeof === j;
  }
  function jt(k) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Ne) {
      return $[Ne];
    });
  }
  var mt = /\/+/g;
  function an(k, $) {
    return typeof k == "object" && k !== null && k.key != null ? jt("" + k.key) : $.toString(36);
  }
  function We(k, $, Ne, Qe, it) {
    var ct = typeof k;
    (ct === "undefined" || ct === "boolean") && (k = null);
    var St = !1;
    if (k === null) St = !0;
    else switch (ct) {
      case "string":
      case "number":
        St = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case j:
          case I:
            St = !0;
        }
    }
    if (St) return St = k, it = it(St), k = Qe === "" ? "." + an(St, 0) : Qe, je(it) ? (Ne = "", k != null && (Ne = k.replace(mt, "$&/") + "/"), We(it, $, Ne, "", function($t) {
      return $t;
    })) : it != null && (dn(it) && (it = fn(it, Ne + (!it.key || St && St.key === it.key ? "" : ("" + it.key).replace(mt, "$&/") + "/") + k)), $.push(it)), 1;
    if (St = 0, Qe = Qe === "" ? "." : Qe + ":", je(k)) for (var ht = 0; ht < k.length; ht++) {
      ct = k[ht];
      var wt = Qe + an(ct, ht);
      St += We(ct, $, Ne, wt, it);
    }
    else if (wt = te(k), typeof wt == "function") for (k = wt.call(k), ht = 0; !(ct = k.next()).done; ) ct = ct.value, wt = Qe + an(ct, ht++), St += We(ct, $, Ne, wt, it);
    else if (ct === "object") throw $ = String(k), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return St;
  }
  function ot(k, $, Ne) {
    if (k == null) return k;
    var Qe = [], it = 0;
    return We(k, Qe, "", "", function(ct) {
      return $.call(Ne, ct, it++);
    }), Qe;
  }
  function kt(k) {
    if (k._status === -1) {
      var $ = k._result;
      $ = $(), $.then(function(Ne) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Ne);
      }, function(Ne) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Ne);
      }), k._status === -1 && (k._status = 0, k._result = $);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var st = { current: null }, B = { transition: null }, ge = { ReactCurrentDispatcher: st, ReactCurrentBatchConfig: B, ReactCurrentOwner: Ce };
  function oe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Rt.Children = { map: ot, forEach: function(k, $, Ne) {
    ot(k, function() {
      $.apply(this, arguments);
    }, Ne);
  }, count: function(k) {
    var $ = 0;
    return ot(k, function() {
      $++;
    }), $;
  }, toArray: function(k) {
    return ot(k, function($) {
      return $;
    }) || [];
  }, only: function(k) {
    if (!dn(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Rt.Component = tt, Rt.Fragment = _, Rt.Profiler = Ze, Rt.PureComponent = en, Rt.StrictMode = de, Rt.Suspense = ze, Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, Rt.act = oe, Rt.cloneElement = function(k, $, Ne) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Qe = ee({}, k.props), it = k.key, ct = k.ref, St = k._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (ct = $.ref, St = Ce.current), $.key !== void 0 && (it = "" + $.key), k.type && k.type.defaultProps) var ht = k.type.defaultProps;
      for (wt in $) Tt.call($, wt) && !vt.hasOwnProperty(wt) && (Qe[wt] = $[wt] === void 0 && ht !== void 0 ? ht[wt] : $[wt]);
    }
    var wt = arguments.length - 2;
    if (wt === 1) Qe.children = Ne;
    else if (1 < wt) {
      ht = Array(wt);
      for (var $t = 0; $t < wt; $t++) ht[$t] = arguments[$t + 2];
      Qe.children = ht;
    }
    return { $$typeof: j, type: k.type, key: it, ref: ct, props: Qe, _owner: St };
  }, Rt.createContext = function(k) {
    return k = { $$typeof: Me, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: Ye, _context: k }, k.Consumer = k;
  }, Rt.createElement = qe, Rt.createFactory = function(k) {
    var $ = qe.bind(null, k);
    return $.type = k, $;
  }, Rt.createRef = function() {
    return { current: null };
  }, Rt.forwardRef = function(k) {
    return { $$typeof: S, render: k };
  }, Rt.isValidElement = dn, Rt.lazy = function(k) {
    return { $$typeof: ae, _payload: { _status: -1, _result: k }, _init: kt };
  }, Rt.memo = function(k, $) {
    return { $$typeof: xe, type: k, compare: $ === void 0 ? null : $ };
  }, Rt.startTransition = function(k) {
    var $ = B.transition;
    B.transition = {};
    try {
      k();
    } finally {
      B.transition = $;
    }
  }, Rt.unstable_act = oe, Rt.useCallback = function(k, $) {
    return st.current.useCallback(k, $);
  }, Rt.useContext = function(k) {
    return st.current.useContext(k);
  }, Rt.useDebugValue = function() {
  }, Rt.useDeferredValue = function(k) {
    return st.current.useDeferredValue(k);
  }, Rt.useEffect = function(k, $) {
    return st.current.useEffect(k, $);
  }, Rt.useId = function() {
    return st.current.useId();
  }, Rt.useImperativeHandle = function(k, $, Ne) {
    return st.current.useImperativeHandle(k, $, Ne);
  }, Rt.useInsertionEffect = function(k, $) {
    return st.current.useInsertionEffect(k, $);
  }, Rt.useLayoutEffect = function(k, $) {
    return st.current.useLayoutEffect(k, $);
  }, Rt.useMemo = function(k, $) {
    return st.current.useMemo(k, $);
  }, Rt.useReducer = function(k, $, Ne) {
    return st.current.useReducer(k, $, Ne);
  }, Rt.useRef = function(k) {
    return st.current.useRef(k);
  }, Rt.useState = function(k) {
    return st.current.useState(k);
  }, Rt.useSyncExternalStore = function(k, $, Ne) {
    return st.current.useSyncExternalStore(k, $, Ne);
  }, Rt.useTransition = function() {
    return st.current.useTransition();
  }, Rt.version = "18.3.1", Rt;
}
var Zp = { exports: {} };
Zp.exports;
var eR;
function rk() {
  return eR || (eR = 1, function(j, I) {
    var _ = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    _.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var de = "18.3.1", Ze = Symbol.for("react.element"), Ye = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), xe = Symbol.for("react.provider"), ae = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), tt = Symbol.for("react.offscreen"), _n = Symbol.iterator, en = "@@iterator";
      function Xe(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = _n && h[_n] || h[en];
        return typeof C == "function" ? C : null;
      }
      var je = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Tt = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, vt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, qe = {}, fn = null;
      function dn(h) {
        fn = h;
      }
      qe.setExtraStackFrame = function(h) {
        fn = h;
      }, qe.getCurrentStack = null, qe.getStackAddendum = function() {
        var h = "";
        fn && (h += fn);
        var C = qe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var jt = !1, mt = !1, an = !1, We = !1, ot = !1, kt = {
        ReactCurrentDispatcher: je,
        ReactCurrentBatchConfig: Tt,
        ReactCurrentOwner: vt
      };
      kt.ReactDebugCurrentFrame = qe, kt.ReactCurrentActQueue = Ce;
      function st(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          ge("warn", h, M);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          ge("error", h, M);
        }
      }
      function ge(h, C, M) {
        {
          var F = kt.ReactDebugCurrentFrame, Z = F.getStackAddendum();
          Z !== "" && (C += "%s", M = M.concat([Z]));
          var Re = M.map(function(he) {
            return String(he);
          });
          Re.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Re);
        }
      }
      var oe = {};
      function k(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", Z = F + "." + C;
          if (oe[Z])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), oe[Z] = !0;
        }
      }
      var $ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, M) {
          k(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, M, F) {
          k(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, M, F) {
          k(h, "setState");
        }
      }, Ne = Object.assign, Qe = {};
      Object.freeze(Qe);
      function it(h, C, M) {
        this.props = h, this.context = C, this.refs = Qe, this.updater = M || $;
      }
      it.prototype.isReactComponent = {}, it.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, it.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ct = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, St = function(h, C) {
          Object.defineProperty(it.prototype, h, {
            get: function() {
              st("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ht in ct)
          ct.hasOwnProperty(ht) && St(ht, ct[ht]);
      }
      function wt() {
      }
      wt.prototype = it.prototype;
      function $t(h, C, M) {
        this.props = h, this.context = C, this.refs = Qe, this.updater = M || $;
      }
      var Kn = $t.prototype = new wt();
      Kn.constructor = $t, Ne(Kn, it.prototype), Kn.isPureReactComponent = !0;
      function Hr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var dr = Array.isArray;
      function Cn(h) {
        return dr(h);
      }
      function Zn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Vn(h) {
        try {
          return kn(h), !1;
        } catch {
          return !0;
        }
      }
      function kn(h) {
        return "" + h;
      }
      function Mn(h) {
        if (Vn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zn(h)), kn(h);
      }
      function Sr(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? M + "(" + Z + ")" : M;
      }
      function pr(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Me:
            return "Fragment";
          case Ye:
            return "Portal";
          case ze:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case Te:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ae:
              var C = h;
              return pr(C) + ".Consumer";
            case xe:
              var M = h;
              return pr(M._context) + ".Provider";
            case Ue:
              return Sr(h, h.render, "ForwardRef");
            case ee:
              var F = h.displayName || null;
              return F !== null ? F : Pn(h.type) || "Memo";
            case ne: {
              var Z = h, Re = Z._payload, he = Z._init;
              try {
                return Pn(he(Re));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var aa = Object.prototype.hasOwnProperty, ia = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, vr, la, Jn;
      Jn = {};
      function Er(h) {
        if (aa.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function pn(h) {
        if (aa.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function ua(h, C) {
        var M = function() {
          vr || (vr = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function oa(h, C) {
        var M = function() {
          la || (la = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function sa(h) {
        if (typeof h.ref == "string" && vt.current && h.__self && vt.current.stateNode !== h.__self) {
          var C = Pn(vt.current.type);
          Jn[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Jn[C] = !0);
        }
      }
      var ie = function(h, C, M, F, Z, Re, he) {
        var Ge = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ze,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: he,
          // Record the component responsible for creating this element.
          _owner: Re
        };
        return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ge, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ge, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
      };
      function Le(h, C, M) {
        var F, Z = {}, Re = null, he = null, Ge = null, pt = null;
        if (C != null) {
          Er(C) && (he = C.ref, sa(C)), pn(C) && (Mn(C.key), Re = "" + C.key), Ge = C.__self === void 0 ? null : C.__self, pt = C.__source === void 0 ? null : C.__source;
          for (F in C)
            aa.call(C, F) && !ia.hasOwnProperty(F) && (Z[F] = C[F]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1)
          Z.children = M;
        else if (Pt > 1) {
          for (var Yt = Array(Pt), Wt = 0; Wt < Pt; Wt++)
            Yt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Yt), Z.children = Yt;
        }
        if (h && h.defaultProps) {
          var Qt = h.defaultProps;
          for (F in Qt)
            Z[F] === void 0 && (Z[F] = Qt[F]);
        }
        if (Re || he) {
          var un = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Re && ua(Z, un), he && oa(Z, un);
        }
        return ie(h, Re, he, Ge, pt, vt.current, Z);
      }
      function ft(h, C) {
        var M = ie(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function Ft(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, Z = Ne({}, h.props), Re = h.key, he = h.ref, Ge = h._self, pt = h._source, Pt = h._owner;
        if (C != null) {
          Er(C) && (he = C.ref, Pt = vt.current), pn(C) && (Mn(C.key), Re = "" + C.key);
          var Yt;
          h.type && h.type.defaultProps && (Yt = h.type.defaultProps);
          for (F in C)
            aa.call(C, F) && !ia.hasOwnProperty(F) && (C[F] === void 0 && Yt !== void 0 ? Z[F] = Yt[F] : Z[F] = C[F]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          Z.children = M;
        else if (Wt > 1) {
          for (var Qt = Array(Wt), un = 0; un < Wt; un++)
            Qt[un] = arguments[un + 2];
          Z.children = Qt;
        }
        return ie(h.type, Re, he, Ge, pt, Pt, Z);
      }
      function Mt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ze;
      }
      var Dn = ".", mn = ":";
      function hr(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(Z) {
          return M[Z];
        });
        return "$" + F;
      }
      var It = !1, Yn = /\/+/g;
      function Ht(h) {
        return h.replace(Yn, "$&/");
      }
      function tn(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Mn(h.key), hr("" + h.key)) : C.toString(36);
      }
      function Xa(h, C, M, F, Z) {
        var Re = typeof h;
        (Re === "undefined" || Re === "boolean") && (h = null);
        var he = !1;
        if (h === null)
          he = !0;
        else
          switch (Re) {
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ze:
                case Ye:
                  he = !0;
              }
          }
        if (he) {
          var Ge = h, pt = Z(Ge), Pt = F === "" ? Dn + tn(Ge, 0) : F;
          if (Cn(pt)) {
            var Yt = "";
            Pt != null && (Yt = Ht(Pt) + "/"), Xa(pt, C, Yt, "", function(Pf) {
              return Pf;
            });
          } else pt != null && (Mt(pt) && (pt.key && (!Ge || Ge.key !== pt.key) && Mn(pt.key), pt = ft(
            pt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (pt.key && (!Ge || Ge.key !== pt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ht("" + pt.key) + "/"
            ) : "") + Pt
          )), C.push(pt));
          return 1;
        }
        var Wt, Qt, un = 0, Dt = F === "" ? Dn : F + mn;
        if (Cn(h))
          for (var xl = 0; xl < h.length; xl++)
            Wt = h[xl], Qt = Dt + tn(Wt, xl), un += Xa(Wt, C, M, Qt, Z);
        else {
          var eo = Xe(h);
          if (typeof eo == "function") {
            var ls = h;
            eo === ls.entries && (It || st("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var us = eo.call(ls), Bi, os = 0; !(Bi = us.next()).done; )
              Wt = Bi.value, Qt = Dt + tn(Wt, os++), un += Xa(Wt, C, M, Qt, Z);
          } else if (Re === "object") {
            var ss = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (ss === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : ss) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return un;
      }
      function ka(h, C, M) {
        if (h == null)
          return h;
        var F = [], Z = 0;
        return Xa(h, F, "", "", function(Re) {
          return C.call(M, Re, Z++);
        }), F;
      }
      function ml(h) {
        var C = 0;
        return ka(h, function() {
          C++;
        }), C;
      }
      function ru(h, C, M) {
        ka(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function au(h) {
        return ka(h, function(C) {
          return C;
        }) || [];
      }
      function yl(h) {
        if (!Mt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function qa(h) {
        var C = {
          $$typeof: ae,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: xe,
          _context: C
        };
        var M = !1, F = !1, Z = !1;
        {
          var Re = {
            $$typeof: ae,
            _context: C
          };
          Object.defineProperties(Re, {
            Provider: {
              get: function() {
                return F || (F = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(he) {
                C.Provider = he;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(he) {
                C._currentValue = he;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(he) {
                C._currentValue2 = he;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(he) {
                C._threadCount = he;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(he) {
                Z || (st("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", he), Z = !0);
              }
            }
          }), C.Consumer = Re;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Ka = -1, Da = 0, zi = 1, Cr = 2;
      function Vr(h) {
        if (h._status === Ka) {
          var C = h._result, M = C();
          if (M.then(function(Re) {
            if (h._status === Da || h._status === Ka) {
              var he = h;
              he._status = zi, he._result = Re;
            }
          }, function(Re) {
            if (h._status === Da || h._status === Ka) {
              var he = h;
              he._status = Cr, he._result = Re;
            }
          }), h._status === Ka) {
            var F = h;
            F._status = Da, F._result = M;
          }
        }
        if (h._status === zi) {
          var Z = h._result;
          return Z === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function ca(h) {
        var C = {
          // We use these fields to store the result.
          _status: Ka,
          _result: h
        }, M = {
          $$typeof: ne,
          _payload: C,
          _init: Vr
        };
        {
          var F, Z;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Re) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Re, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(Re) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = Re, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Ui(h) {
        h != null && h.$$typeof === ee ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ue,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(F) {
              M = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var gl;
      gl = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Me || h === ze || ot || h === S || h === te || h === Te || We || h === tt || jt || mt || an || typeof h == "object" && h !== null && (h.$$typeof === ne || h.$$typeof === ee || h.$$typeof === xe || h.$$typeof === ae || h.$$typeof === Ue || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === gl || h.getModuleId !== void 0));
      }
      function Q(h, C) {
        R(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ee,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(Z) {
              F = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return M;
      }
      function X() {
        var h = je.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Fe(h) {
        var C = X();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function yt(h) {
        var C = X();
        return C.useState(h);
      }
      function xt(h, C, M) {
        var F = X();
        return F.useReducer(h, C, M);
      }
      function Be(h) {
        var C = X();
        return C.useRef(h);
      }
      function dt(h, C) {
        var M = X();
        return M.useEffect(h, C);
      }
      function zn(h, C) {
        var M = X();
        return M.useInsertionEffect(h, C);
      }
      function qt(h, C) {
        var M = X();
        return M.useLayoutEffect(h, C);
      }
      function vn(h, C) {
        var M = X();
        return M.useCallback(h, C);
      }
      function mr(h, C) {
        var M = X();
        return M.useMemo(h, C);
      }
      function Vt(h, C, M) {
        var F = X();
        return F.useImperativeHandle(h, C, M);
      }
      function Oa(h, C) {
        {
          var M = X();
          return M.useDebugValue(h, C);
        }
      }
      function Un() {
        var h = X();
        return h.useTransition();
      }
      function Pr(h) {
        var C = X();
        return C.useDeferredValue(h);
      }
      function lt() {
        var h = X();
        return h.useId();
      }
      function Ai(h, C, M) {
        var F = X();
        return F.useSyncExternalStore(h, C, M);
      }
      var ji = 0, Sl, Br, qo, Rr, Ko, Zo, Jo;
      function iu() {
      }
      iu.__reactDisabledLog = !0;
      function Qu() {
        {
          if (ji === 0) {
            Sl = console.log, Br = console.info, qo = console.warn, Rr = console.error, Ko = console.group, Zo = console.groupCollapsed, Jo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: iu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ji++;
        }
      }
      function Fi() {
        {
          if (ji--, ji === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ne({}, h, {
                value: Sl
              }),
              info: Ne({}, h, {
                value: Br
              }),
              warn: Ne({}, h, {
                value: qo
              }),
              error: Ne({}, h, {
                value: Rr
              }),
              group: Ne({}, h, {
                value: Ko
              }),
              groupCollapsed: Ne({}, h, {
                value: Zo
              }),
              groupEnd: Ne({}, h, {
                value: Jo
              })
            });
          }
          ji < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = kt.ReactCurrentDispatcher, La;
      function El(h, C, M) {
        {
          if (La === void 0)
            try {
              throw Error();
            } catch (Z) {
              var F = Z.stack.trim().match(/\n( *(at )?)/);
              La = F && F[1] || "";
            }
          return `
` + La + h;
        }
      }
      var pi = !1, lu;
      {
        var uu = typeof WeakMap == "function" ? WeakMap : Map;
        lu = new uu();
      }
      function Cl(h, C) {
        if (!h || pi)
          return "";
        {
          var M = lu.get(h);
          if (M !== void 0)
            return M;
        }
        var F;
        pi = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Re;
        Re = di.current, di.current = null, Qu();
        try {
          if (C) {
            var he = function() {
              throw Error();
            };
            if (Object.defineProperty(he.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(he, []);
              } catch (Dt) {
                F = Dt;
              }
              Reflect.construct(h, [], he);
            } else {
              try {
                he.call();
              } catch (Dt) {
                F = Dt;
              }
              h.call(he.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Dt) {
              F = Dt;
            }
            h();
          }
        } catch (Dt) {
          if (Dt && F && typeof Dt.stack == "string") {
            for (var Ge = Dt.stack.split(`
`), pt = F.stack.split(`
`), Pt = Ge.length - 1, Yt = pt.length - 1; Pt >= 1 && Yt >= 0 && Ge[Pt] !== pt[Yt]; )
              Yt--;
            for (; Pt >= 1 && Yt >= 0; Pt--, Yt--)
              if (Ge[Pt] !== pt[Yt]) {
                if (Pt !== 1 || Yt !== 1)
                  do
                    if (Pt--, Yt--, Yt < 0 || Ge[Pt] !== pt[Yt]) {
                      var Wt = `
` + Ge[Pt].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && lu.set(h, Wt), Wt;
                    }
                  while (Pt >= 1 && Yt >= 0);
                break;
              }
          }
        } finally {
          pi = !1, di.current = Re, Fi(), Error.prepareStackTrace = Z;
        }
        var Qt = h ? h.displayName || h.name : "", un = Qt ? El(Qt) : "";
        return typeof h == "function" && lu.set(h, un), un;
      }
      function es(h, C, M) {
        return Cl(h, !1);
      }
      function ts(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Et(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Cl(h, ts(h));
        if (typeof h == "string")
          return El(h);
        switch (h) {
          case te:
            return El("Suspense");
          case Te:
            return El("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ue:
              return es(h.render);
            case ee:
              return Et(h.type, C, M);
            case ne: {
              var F = h, Z = F._payload, Re = F._init;
              try {
                return Et(Re(Z), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var ns = {}, Gu = kt.ReactDebugCurrentFrame;
      function Rl(h) {
        if (h) {
          var C = h._owner, M = Et(h.type, h._source, C ? C.type : null);
          Gu.setExtraStackFrame(M);
        } else
          Gu.setExtraStackFrame(null);
      }
      function rs(h, C, M, F, Z) {
        {
          var Re = Function.call.bind(aa);
          for (var he in h)
            if (Re(h, he)) {
              var Ge = void 0;
              try {
                if (typeof h[he] != "function") {
                  var pt = Error((F || "React class") + ": " + M + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Ge = h[he](C, he, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pt) {
                Ge = Pt;
              }
              Ge && !(Ge instanceof Error) && (Rl(Z), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, he, typeof Ge), Rl(null)), Ge instanceof Error && !(Ge.message in ns) && (ns[Ge.message] = !0, Rl(Z), B("Failed %s type: %s", M, Ge.message), Rl(null));
            }
        }
      }
      function Ct(h) {
        if (h) {
          var C = h._owner, M = Et(h.type, h._source, C ? C.type : null);
          dn(M);
        } else
          dn(null);
      }
      var Xu;
      Xu = !1;
      function ou() {
        if (vt.current) {
          var h = Pn(vt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Je(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Za(h) {
        return h != null ? Je(h.__source) : "";
      }
      var yn = {};
      function $r(h) {
        var C = ou();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Na(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = $r(C);
          if (!yn[M]) {
            yn[M] = !0;
            var F = "";
            h && h._owner && h._owner !== vt.current && (F = " It was passed a child from " + Pn(h._owner.type) + "."), Ct(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), Ct(null);
          }
        }
      }
      function Tl(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var M = 0; M < h.length; M++) {
              var F = h[M];
              Mt(F) && Na(F, C);
            }
          else if (Mt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = Xe(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var Re = Z.call(h), he; !(he = Re.next()).done; )
                Mt(he.value) && Na(he.value, C);
          }
        }
      }
      function ln(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ue || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ee))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Pn(C);
            rs(M, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Xu) {
            Xu = !0;
            var Z = Pn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function gn(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              Ct(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Ct(null);
              break;
            }
          }
          h.ref !== null && (Ct(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), Ct(null));
        }
      }
      function as(h, C, M) {
        var F = R(h);
        if (!F) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Re = Za(C);
          Re ? Z += Re : Z += ou();
          var he;
          h === null ? he = "null" : Cn(h) ? he = "array" : h !== void 0 && h.$$typeof === Ze ? (he = "<" + (Pn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : he = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, Z);
        }
        var Ge = Le.apply(this, arguments);
        if (Ge == null)
          return Ge;
        if (F)
          for (var pt = 2; pt < arguments.length; pt++)
            Tl(arguments[pt], h);
        return h === Me ? gn(Ge) : ln(Ge), Ge;
      }
      var er = !1;
      function Ir(h) {
        var C = as.bind(null, h);
        return C.type = h, er || (er = !0, st("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return st("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, M) {
        for (var F = Ft.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          Tl(arguments[Z], F.type);
        return ln(F), F;
      }
      function qu(h, C) {
        var M = Tt.transition;
        Tt.transition = {};
        var F = Tt.transition;
        Tt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Tt.transition = M, M === null && F._updatedFibers) {
            var Z = F._updatedFibers.size;
            Z > 10 && st("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var su = !1, cu = null;
      function wl(h) {
        if (cu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = j && j[C];
            cu = M.call(j, "timers").setImmediate;
          } catch {
            cu = function(Z) {
              su === !1 && (su = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Re = new MessageChannel();
              Re.port1.onmessage = Z, Re.port2.postMessage(void 0);
            };
          }
        return cu(h);
      }
      var Ma = 0, Hi = !1;
      function fu(h) {
        {
          var C = Ma;
          Ma++, Ce.current === null && (Ce.current = []);
          var M = Ce.isBatchingLegacy, F;
          try {
            if (Ce.isBatchingLegacy = !0, F = h(), !M && Ce.didScheduleLegacyUpdate) {
              var Z = Ce.current;
              Z !== null && (Ce.didScheduleLegacyUpdate = !1, Pi(Z));
            }
          } catch (Qt) {
            throw Vi(C), Qt;
          } finally {
            Ce.isBatchingLegacy = M;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Re = F, he = !1, Ge = {
              then: function(Qt, un) {
                he = !0, Re.then(function(Dt) {
                  Vi(C), Ma === 0 ? Ku(Dt, Qt, un) : Qt(Dt);
                }, function(Dt) {
                  Vi(C), un(Dt);
                });
              }
            };
            return !Hi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              he || (Hi = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ge;
          } else {
            var pt = F;
            if (Vi(C), Ma === 0) {
              var Pt = Ce.current;
              Pt !== null && (Pi(Pt), Ce.current = null);
              var Yt = {
                then: function(Qt, un) {
                  Ce.current === null ? (Ce.current = [], Ku(pt, Qt, un)) : Qt(pt);
                }
              };
              return Yt;
            } else {
              var Wt = {
                then: function(Qt, un) {
                  Qt(pt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function Vi(h) {
        h !== Ma - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = h;
      }
      function Ku(h, C, M) {
        {
          var F = Ce.current;
          if (F !== null)
            try {
              Pi(F), wl(function() {
                F.length === 0 ? (Ce.current = null, C(h)) : Ku(h, C, M);
              });
            } catch (Z) {
              M(Z);
            }
          else
            C(h);
        }
      }
      var vi = !1;
      function Pi(h) {
        if (!vi) {
          vi = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            vi = !1;
          }
        }
      }
      var Zu = as, is = Ja, ei = Ir, Ju = {
        map: ka,
        forEach: ru,
        count: ml,
        toArray: au,
        only: yl
      };
      I.Children = Ju, I.Component = it, I.Fragment = Me, I.Profiler = ze, I.PureComponent = $t, I.StrictMode = S, I.Suspense = te, I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, I.act = fu, I.cloneElement = is, I.createContext = qa, I.createElement = Zu, I.createFactory = ei, I.createRef = Hr, I.forwardRef = Ui, I.isValidElement = Mt, I.lazy = ca, I.memo = Q, I.startTransition = qu, I.unstable_act = fu, I.useCallback = vn, I.useContext = Fe, I.useDebugValue = Oa, I.useDeferredValue = Pr, I.useEffect = dt, I.useId = lt, I.useImperativeHandle = Vt, I.useInsertionEffect = zn, I.useLayoutEffect = qt, I.useMemo = mr, I.useReducer = xt, I.useRef = Be, I.useState = yt, I.useSyncExternalStore = Ai, I.useTransition = Un, I.version = de, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var ak = {};
ak.NODE_ENV === "production" ? pS.exports = nk() : pS.exports = rk();
var Pe = pS.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function ik() {
  if (tR) return qp;
  tR = 1;
  var j = Pe, I = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), de = Object.prototype.hasOwnProperty, Ze = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(S, ze, xe) {
    var ae, Ue = {}, te = null, Te = null;
    xe !== void 0 && (te = "" + xe), ze.key !== void 0 && (te = "" + ze.key), ze.ref !== void 0 && (Te = ze.ref);
    for (ae in ze) de.call(ze, ae) && !Ye.hasOwnProperty(ae) && (Ue[ae] = ze[ae]);
    if (S && S.defaultProps) for (ae in ze = S.defaultProps, ze) Ue[ae] === void 0 && (Ue[ae] = ze[ae]);
    return { $$typeof: I, type: S, key: te, ref: Te, props: Ue, _owner: Ze.current };
  }
  return qp.Fragment = _, qp.jsx = Me, qp.jsxs = Me, qp;
}
var Kp = {}, nR;
function lk() {
  if (nR) return Kp;
  nR = 1;
  var j = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return j.NODE_ENV !== "production" && function() {
    var I = Pe, _ = Symbol.for("react.element"), de = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), Me = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), ze = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), ne = Symbol.iterator, tt = "@@iterator";
    function _n(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = ne && R[ne] || R[tt];
      return typeof Q == "function" ? Q : null;
    }
    var en = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Xe(R) {
      {
        for (var Q = arguments.length, X = new Array(Q > 1 ? Q - 1 : 0), Fe = 1; Fe < Q; Fe++)
          X[Fe - 1] = arguments[Fe];
        je("error", R, X);
      }
    }
    function je(R, Q, X) {
      {
        var Fe = en.ReactDebugCurrentFrame, yt = Fe.getStackAddendum();
        yt !== "" && (Q += "%s", X = X.concat([yt]));
        var xt = X.map(function(Be) {
          return String(Be);
        });
        xt.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, xt);
      }
    }
    var Tt = !1, Ce = !1, vt = !1, qe = !1, fn = !1, dn;
    dn = Symbol.for("react.module.reference");
    function jt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ze || R === Me || fn || R === Ye || R === ae || R === Ue || qe || R === ee || Tt || Ce || vt || typeof R == "object" && R !== null && (R.$$typeof === Te || R.$$typeof === te || R.$$typeof === S || R.$$typeof === ze || R.$$typeof === xe || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === dn || R.getModuleId !== void 0));
    }
    function mt(R, Q, X) {
      var Fe = R.displayName;
      if (Fe)
        return Fe;
      var yt = Q.displayName || Q.name || "";
      return yt !== "" ? X + "(" + yt + ")" : X;
    }
    function an(R) {
      return R.displayName || "Context";
    }
    function We(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && Xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ze:
          return "Fragment";
        case de:
          return "Portal";
        case Me:
          return "Profiler";
        case Ye:
          return "StrictMode";
        case ae:
          return "Suspense";
        case Ue:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ze:
            var Q = R;
            return an(Q) + ".Consumer";
          case S:
            var X = R;
            return an(X._context) + ".Provider";
          case xe:
            return mt(R, R.render, "ForwardRef");
          case te:
            var Fe = R.displayName || null;
            return Fe !== null ? Fe : We(R.type) || "Memo";
          case Te: {
            var yt = R, xt = yt._payload, Be = yt._init;
            try {
              return We(Be(xt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ot = Object.assign, kt = 0, st, B, ge, oe, k, $, Ne;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function it() {
      {
        if (kt === 0) {
          st = console.log, B = console.info, ge = console.warn, oe = console.error, k = console.group, $ = console.groupCollapsed, Ne = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        kt++;
      }
    }
    function ct() {
      {
        if (kt--, kt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, R, {
              value: st
            }),
            info: ot({}, R, {
              value: B
            }),
            warn: ot({}, R, {
              value: ge
            }),
            error: ot({}, R, {
              value: oe
            }),
            group: ot({}, R, {
              value: k
            }),
            groupCollapsed: ot({}, R, {
              value: $
            }),
            groupEnd: ot({}, R, {
              value: Ne
            })
          });
        }
        kt < 0 && Xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var St = en.ReactCurrentDispatcher, ht;
    function wt(R, Q, X) {
      {
        if (ht === void 0)
          try {
            throw Error();
          } catch (yt) {
            var Fe = yt.stack.trim().match(/\n( *(at )?)/);
            ht = Fe && Fe[1] || "";
          }
        return `
` + ht + R;
      }
    }
    var $t = !1, Kn;
    {
      var Hr = typeof WeakMap == "function" ? WeakMap : Map;
      Kn = new Hr();
    }
    function dr(R, Q) {
      if (!R || $t)
        return "";
      {
        var X = Kn.get(R);
        if (X !== void 0)
          return X;
      }
      var Fe;
      $t = !0;
      var yt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xt;
      xt = St.current, St.current = null, it();
      try {
        if (Q) {
          var Be = function() {
            throw Error();
          };
          if (Object.defineProperty(Be.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Be, []);
            } catch (Un) {
              Fe = Un;
            }
            Reflect.construct(R, [], Be);
          } else {
            try {
              Be.call();
            } catch (Un) {
              Fe = Un;
            }
            R.call(Be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Un) {
            Fe = Un;
          }
          R();
        }
      } catch (Un) {
        if (Un && Fe && typeof Un.stack == "string") {
          for (var dt = Un.stack.split(`
`), zn = Fe.stack.split(`
`), qt = dt.length - 1, vn = zn.length - 1; qt >= 1 && vn >= 0 && dt[qt] !== zn[vn]; )
            vn--;
          for (; qt >= 1 && vn >= 0; qt--, vn--)
            if (dt[qt] !== zn[vn]) {
              if (qt !== 1 || vn !== 1)
                do
                  if (qt--, vn--, vn < 0 || dt[qt] !== zn[vn]) {
                    var mr = `
` + dt[qt].replace(" at new ", " at ");
                    return R.displayName && mr.includes("<anonymous>") && (mr = mr.replace("<anonymous>", R.displayName)), typeof R == "function" && Kn.set(R, mr), mr;
                  }
                while (qt >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        $t = !1, St.current = xt, ct(), Error.prepareStackTrace = yt;
      }
      var Vt = R ? R.displayName || R.name : "", Oa = Vt ? wt(Vt) : "";
      return typeof R == "function" && Kn.set(R, Oa), Oa;
    }
    function Cn(R, Q, X) {
      return dr(R, !1);
    }
    function Zn(R) {
      var Q = R.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Vn(R, Q, X) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return dr(R, Zn(R));
      if (typeof R == "string")
        return wt(R);
      switch (R) {
        case ae:
          return wt("Suspense");
        case Ue:
          return wt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case xe:
            return Cn(R.render);
          case te:
            return Vn(R.type, Q, X);
          case Te: {
            var Fe = R, yt = Fe._payload, xt = Fe._init;
            try {
              return Vn(xt(yt), Q, X);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, Mn = {}, Sr = en.ReactDebugCurrentFrame;
    function pr(R) {
      if (R) {
        var Q = R._owner, X = Vn(R.type, R._source, Q ? Q.type : null);
        Sr.setExtraStackFrame(X);
      } else
        Sr.setExtraStackFrame(null);
    }
    function Pn(R, Q, X, Fe, yt) {
      {
        var xt = Function.call.bind(kn);
        for (var Be in R)
          if (xt(R, Be)) {
            var dt = void 0;
            try {
              if (typeof R[Be] != "function") {
                var zn = Error((Fe || "React class") + ": " + X + " type `" + Be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zn.name = "Invariant Violation", zn;
              }
              dt = R[Be](Q, Be, Fe, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qt) {
              dt = qt;
            }
            dt && !(dt instanceof Error) && (pr(yt), Xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", X, Be, typeof dt), pr(null)), dt instanceof Error && !(dt.message in Mn) && (Mn[dt.message] = !0, pr(yt), Xe("Failed %s type: %s", X, dt.message), pr(null));
          }
      }
    }
    var aa = Array.isArray;
    function ia(R) {
      return aa(R);
    }
    function vr(R) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, X = Q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return X;
      }
    }
    function la(R) {
      try {
        return Jn(R), !1;
      } catch {
        return !0;
      }
    }
    function Jn(R) {
      return "" + R;
    }
    function Er(R) {
      if (la(R))
        return Xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(R)), Jn(R);
    }
    var pn = en.ReactCurrentOwner, ua = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oa, sa, ie;
    ie = {};
    function Le(R) {
      if (kn.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ft(R) {
      if (kn.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, Q) {
      if (typeof R.ref == "string" && pn.current && Q && pn.current.stateNode !== Q) {
        var X = We(pn.current.type);
        ie[X] || (Xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', We(pn.current.type), R.ref), ie[X] = !0);
      }
    }
    function Mt(R, Q) {
      {
        var X = function() {
          oa || (oa = !0, Xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        X.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function Dn(R, Q) {
      {
        var X = function() {
          sa || (sa = !0, Xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        X.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var mn = function(R, Q, X, Fe, yt, xt, Be) {
      var dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: X,
        props: Be,
        // Record the component responsible for creating this element.
        _owner: xt
      };
      return dt._store = {}, Object.defineProperty(dt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(dt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.defineProperty(dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: yt
      }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    };
    function hr(R, Q, X, Fe, yt) {
      {
        var xt, Be = {}, dt = null, zn = null;
        X !== void 0 && (Er(X), dt = "" + X), ft(Q) && (Er(Q.key), dt = "" + Q.key), Le(Q) && (zn = Q.ref, Ft(Q, yt));
        for (xt in Q)
          kn.call(Q, xt) && !ua.hasOwnProperty(xt) && (Be[xt] = Q[xt]);
        if (R && R.defaultProps) {
          var qt = R.defaultProps;
          for (xt in qt)
            Be[xt] === void 0 && (Be[xt] = qt[xt]);
        }
        if (dt || zn) {
          var vn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          dt && Mt(Be, vn), zn && Dn(Be, vn);
        }
        return mn(R, dt, zn, yt, Fe, pn.current, Be);
      }
    }
    var It = en.ReactCurrentOwner, Yn = en.ReactDebugCurrentFrame;
    function Ht(R) {
      if (R) {
        var Q = R._owner, X = Vn(R.type, R._source, Q ? Q.type : null);
        Yn.setExtraStackFrame(X);
      } else
        Yn.setExtraStackFrame(null);
    }
    var tn;
    tn = !1;
    function Xa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === _;
    }
    function ka() {
      {
        if (It.current) {
          var R = We(It.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ml(R) {
      return "";
    }
    var ru = {};
    function au(R) {
      {
        var Q = ka();
        if (!Q) {
          var X = typeof R == "string" ? R : R.displayName || R.name;
          X && (Q = `

Check the top-level render call using <` + X + ">.");
        }
        return Q;
      }
    }
    function yl(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var X = au(Q);
        if (ru[X])
          return;
        ru[X] = !0;
        var Fe = "";
        R && R._owner && R._owner !== It.current && (Fe = " It was passed a child from " + We(R._owner.type) + "."), Ht(R), Xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, Fe), Ht(null);
      }
    }
    function qa(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (ia(R))
          for (var X = 0; X < R.length; X++) {
            var Fe = R[X];
            Xa(Fe) && yl(Fe, Q);
          }
        else if (Xa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var yt = _n(R);
          if (typeof yt == "function" && yt !== R.entries)
            for (var xt = yt.call(R), Be; !(Be = xt.next()).done; )
              Xa(Be.value) && yl(Be.value, Q);
        }
      }
    }
    function Ka(R) {
      {
        var Q = R.type;
        if (Q == null || typeof Q == "string")
          return;
        var X;
        if (typeof Q == "function")
          X = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === xe || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === te))
          X = Q.propTypes;
        else
          return;
        if (X) {
          var Fe = We(Q);
          Pn(X, R.props, "prop", Fe, R);
        } else if (Q.PropTypes !== void 0 && !tn) {
          tn = !0;
          var yt = We(Q);
          Xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", yt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && Xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(R) {
      {
        for (var Q = Object.keys(R.props), X = 0; X < Q.length; X++) {
          var Fe = Q[X];
          if (Fe !== "children" && Fe !== "key") {
            Ht(R), Xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), Ht(null);
            break;
          }
        }
        R.ref !== null && (Ht(R), Xe("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    var zi = {};
    function Cr(R, Q, X, Fe, yt, xt) {
      {
        var Be = jt(R);
        if (!Be) {
          var dt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zn = ml();
          zn ? dt += zn : dt += ka();
          var qt;
          R === null ? qt = "null" : ia(R) ? qt = "array" : R !== void 0 && R.$$typeof === _ ? (qt = "<" + (We(R.type) || "Unknown") + " />", dt = " Did you accidentally export a JSX literal instead of a component?") : qt = typeof R, Xe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qt, dt);
        }
        var vn = hr(R, Q, X, yt, xt);
        if (vn == null)
          return vn;
        if (Be) {
          var mr = Q.children;
          if (mr !== void 0)
            if (Fe)
              if (ia(mr)) {
                for (var Vt = 0; Vt < mr.length; Vt++)
                  qa(mr[Vt], R);
                Object.freeze && Object.freeze(mr);
              } else
                Xe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qa(mr, R);
        }
        if (kn.call(Q, "key")) {
          var Oa = We(R), Un = Object.keys(Q).filter(function(Ai) {
            return Ai !== "key";
          }), Pr = Un.length > 0 ? "{key: someKey, " + Un.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!zi[Oa + Pr]) {
            var lt = Un.length > 0 ? "{" + Un.join(": ..., ") + ": ...}" : "{}";
            Xe(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pr, Oa, lt, Oa), zi[Oa + Pr] = !0;
          }
        }
        return R === Ze ? Da(vn) : Ka(vn), vn;
      }
    }
    function Vr(R, Q, X) {
      return Cr(R, Q, X, !0);
    }
    function ca(R, Q, X) {
      return Cr(R, Q, X, !1);
    }
    var Ui = ca, gl = Vr;
    Kp.Fragment = Ze, Kp.jsx = Ui, Kp.jsxs = gl;
  }(), Kp;
}
var uk = {};
uk.NODE_ENV === "production" ? dS.exports = ik() : dS.exports = lk();
var ce = dS.exports, vS = { exports: {} }, Qa = {}, jm = { exports: {} }, cS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rR;
function ok() {
  return rR || (rR = 1, function(j) {
    function I(B, ge) {
      var oe = B.length;
      B.push(ge);
      e: for (; 0 < oe; ) {
        var k = oe - 1 >>> 1, $ = B[k];
        if (0 < Ze($, ge)) B[k] = ge, B[oe] = $, oe = k;
        else break e;
      }
    }
    function _(B) {
      return B.length === 0 ? null : B[0];
    }
    function de(B) {
      if (B.length === 0) return null;
      var ge = B[0], oe = B.pop();
      if (oe !== ge) {
        B[0] = oe;
        e: for (var k = 0, $ = B.length, Ne = $ >>> 1; k < Ne; ) {
          var Qe = 2 * (k + 1) - 1, it = B[Qe], ct = Qe + 1, St = B[ct];
          if (0 > Ze(it, oe)) ct < $ && 0 > Ze(St, it) ? (B[k] = St, B[ct] = oe, k = ct) : (B[k] = it, B[Qe] = oe, k = Qe);
          else if (ct < $ && 0 > Ze(St, oe)) B[k] = St, B[ct] = oe, k = ct;
          else break e;
        }
      }
      return ge;
    }
    function Ze(B, ge) {
      var oe = B.sortIndex - ge.sortIndex;
      return oe !== 0 ? oe : B.id - ge.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ye = performance;
      j.unstable_now = function() {
        return Ye.now();
      };
    } else {
      var Me = Date, S = Me.now();
      j.unstable_now = function() {
        return Me.now() - S;
      };
    }
    var ze = [], xe = [], ae = 1, Ue = null, te = 3, Te = !1, ee = !1, ne = !1, tt = typeof setTimeout == "function" ? setTimeout : null, _n = typeof clearTimeout == "function" ? clearTimeout : null, en = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Xe(B) {
      for (var ge = _(xe); ge !== null; ) {
        if (ge.callback === null) de(xe);
        else if (ge.startTime <= B) de(xe), ge.sortIndex = ge.expirationTime, I(ze, ge);
        else break;
        ge = _(xe);
      }
    }
    function je(B) {
      if (ne = !1, Xe(B), !ee) if (_(ze) !== null) ee = !0, kt(Tt);
      else {
        var ge = _(xe);
        ge !== null && st(je, ge.startTime - B);
      }
    }
    function Tt(B, ge) {
      ee = !1, ne && (ne = !1, _n(qe), qe = -1), Te = !0;
      var oe = te;
      try {
        for (Xe(ge), Ue = _(ze); Ue !== null && (!(Ue.expirationTime > ge) || B && !jt()); ) {
          var k = Ue.callback;
          if (typeof k == "function") {
            Ue.callback = null, te = Ue.priorityLevel;
            var $ = k(Ue.expirationTime <= ge);
            ge = j.unstable_now(), typeof $ == "function" ? Ue.callback = $ : Ue === _(ze) && de(ze), Xe(ge);
          } else de(ze);
          Ue = _(ze);
        }
        if (Ue !== null) var Ne = !0;
        else {
          var Qe = _(xe);
          Qe !== null && st(je, Qe.startTime - ge), Ne = !1;
        }
        return Ne;
      } finally {
        Ue = null, te = oe, Te = !1;
      }
    }
    var Ce = !1, vt = null, qe = -1, fn = 5, dn = -1;
    function jt() {
      return !(j.unstable_now() - dn < fn);
    }
    function mt() {
      if (vt !== null) {
        var B = j.unstable_now();
        dn = B;
        var ge = !0;
        try {
          ge = vt(!0, B);
        } finally {
          ge ? an() : (Ce = !1, vt = null);
        }
      } else Ce = !1;
    }
    var an;
    if (typeof en == "function") an = function() {
      en(mt);
    };
    else if (typeof MessageChannel < "u") {
      var We = new MessageChannel(), ot = We.port2;
      We.port1.onmessage = mt, an = function() {
        ot.postMessage(null);
      };
    } else an = function() {
      tt(mt, 0);
    };
    function kt(B) {
      vt = B, Ce || (Ce = !0, an());
    }
    function st(B, ge) {
      qe = tt(function() {
        B(j.unstable_now());
      }, ge);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, j.unstable_continueExecution = function() {
      ee || Te || (ee = !0, kt(Tt));
    }, j.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : fn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, j.unstable_getFirstCallbackNode = function() {
      return _(ze);
    }, j.unstable_next = function(B) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var ge = 3;
          break;
        default:
          ge = te;
      }
      var oe = te;
      te = ge;
      try {
        return B();
      } finally {
        te = oe;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function(B, ge) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var oe = te;
      te = B;
      try {
        return ge();
      } finally {
        te = oe;
      }
    }, j.unstable_scheduleCallback = function(B, ge, oe) {
      var k = j.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? k + oe : k) : oe = k, B) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = oe + $, B = { id: ae++, callback: ge, priorityLevel: B, startTime: oe, expirationTime: $, sortIndex: -1 }, oe > k ? (B.sortIndex = oe, I(xe, B), _(ze) === null && B === _(xe) && (ne ? (_n(qe), qe = -1) : ne = !0, st(je, oe - k))) : (B.sortIndex = $, I(ze, B), ee || Te || (ee = !0, kt(Tt))), B;
    }, j.unstable_shouldYield = jt, j.unstable_wrapCallback = function(B) {
      var ge = te;
      return function() {
        var oe = te;
        te = ge;
        try {
          return B.apply(this, arguments);
        } finally {
          te = oe;
        }
      };
    };
  }(cS)), cS;
}
var fS = {}, aR;
function sk() {
  return aR || (aR = 1, function(j) {
    var I = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    I.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var _ = !1, de = !1, Ze = 5;
      function Ye(ie, Le) {
        var ft = ie.length;
        ie.push(Le), ze(ie, Le, ft);
      }
      function Me(ie) {
        return ie.length === 0 ? null : ie[0];
      }
      function S(ie) {
        if (ie.length === 0)
          return null;
        var Le = ie[0], ft = ie.pop();
        return ft !== Le && (ie[0] = ft, xe(ie, ft, 0)), Le;
      }
      function ze(ie, Le, ft) {
        for (var Ft = ft; Ft > 0; ) {
          var Mt = Ft - 1 >>> 1, Dn = ie[Mt];
          if (ae(Dn, Le) > 0)
            ie[Mt] = Le, ie[Ft] = Dn, Ft = Mt;
          else
            return;
        }
      }
      function xe(ie, Le, ft) {
        for (var Ft = ft, Mt = ie.length, Dn = Mt >>> 1; Ft < Dn; ) {
          var mn = (Ft + 1) * 2 - 1, hr = ie[mn], It = mn + 1, Yn = ie[It];
          if (ae(hr, Le) < 0)
            It < Mt && ae(Yn, hr) < 0 ? (ie[Ft] = Yn, ie[It] = Le, Ft = It) : (ie[Ft] = hr, ie[mn] = Le, Ft = mn);
          else if (It < Mt && ae(Yn, Le) < 0)
            ie[Ft] = Yn, ie[It] = Le, Ft = It;
          else
            return;
        }
      }
      function ae(ie, Le) {
        var ft = ie.sortIndex - Le.sortIndex;
        return ft !== 0 ? ft : ie.id - Le.id;
      }
      var Ue = 1, te = 2, Te = 3, ee = 4, ne = 5;
      function tt(ie, Le) {
      }
      var _n = typeof performance == "object" && typeof performance.now == "function";
      if (_n) {
        var en = performance;
        j.unstable_now = function() {
          return en.now();
        };
      } else {
        var Xe = Date, je = Xe.now();
        j.unstable_now = function() {
          return Xe.now() - je;
        };
      }
      var Tt = 1073741823, Ce = -1, vt = 250, qe = 5e3, fn = 1e4, dn = Tt, jt = [], mt = [], an = 1, We = null, ot = Te, kt = !1, st = !1, B = !1, ge = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function $(ie) {
        for (var Le = Me(mt); Le !== null; ) {
          if (Le.callback === null)
            S(mt);
          else if (Le.startTime <= ie)
            S(mt), Le.sortIndex = Le.expirationTime, Ye(jt, Le);
          else
            return;
          Le = Me(mt);
        }
      }
      function Ne(ie) {
        if (B = !1, $(ie), !st)
          if (Me(jt) !== null)
            st = !0, Er(Qe);
          else {
            var Le = Me(mt);
            Le !== null && pn(Ne, Le.startTime - ie);
          }
      }
      function Qe(ie, Le) {
        st = !1, B && (B = !1, ua()), kt = !0;
        var ft = ot;
        try {
          var Ft;
          if (!de) return it(ie, Le);
        } finally {
          We = null, ot = ft, kt = !1;
        }
      }
      function it(ie, Le) {
        var ft = Le;
        for ($(ft), We = Me(jt); We !== null && !_ && !(We.expirationTime > ft && (!ie || pr())); ) {
          var Ft = We.callback;
          if (typeof Ft == "function") {
            We.callback = null, ot = We.priorityLevel;
            var Mt = We.expirationTime <= ft, Dn = Ft(Mt);
            ft = j.unstable_now(), typeof Dn == "function" ? We.callback = Dn : We === Me(jt) && S(jt), $(ft);
          } else
            S(jt);
          We = Me(jt);
        }
        if (We !== null)
          return !0;
        var mn = Me(mt);
        return mn !== null && pn(Ne, mn.startTime - ft), !1;
      }
      function ct(ie, Le) {
        switch (ie) {
          case Ue:
          case te:
          case Te:
          case ee:
          case ne:
            break;
          default:
            ie = Te;
        }
        var ft = ot;
        ot = ie;
        try {
          return Le();
        } finally {
          ot = ft;
        }
      }
      function St(ie) {
        var Le;
        switch (ot) {
          case Ue:
          case te:
          case Te:
            Le = Te;
            break;
          default:
            Le = ot;
            break;
        }
        var ft = ot;
        ot = Le;
        try {
          return ie();
        } finally {
          ot = ft;
        }
      }
      function ht(ie) {
        var Le = ot;
        return function() {
          var ft = ot;
          ot = Le;
          try {
            return ie.apply(this, arguments);
          } finally {
            ot = ft;
          }
        };
      }
      function wt(ie, Le, ft) {
        var Ft = j.unstable_now(), Mt;
        if (typeof ft == "object" && ft !== null) {
          var Dn = ft.delay;
          typeof Dn == "number" && Dn > 0 ? Mt = Ft + Dn : Mt = Ft;
        } else
          Mt = Ft;
        var mn;
        switch (ie) {
          case Ue:
            mn = Ce;
            break;
          case te:
            mn = vt;
            break;
          case ne:
            mn = dn;
            break;
          case ee:
            mn = fn;
            break;
          case Te:
          default:
            mn = qe;
            break;
        }
        var hr = Mt + mn, It = {
          id: an++,
          callback: Le,
          priorityLevel: ie,
          startTime: Mt,
          expirationTime: hr,
          sortIndex: -1
        };
        return Mt > Ft ? (It.sortIndex = Mt, Ye(mt, It), Me(jt) === null && It === Me(mt) && (B ? ua() : B = !0, pn(Ne, Mt - Ft))) : (It.sortIndex = hr, Ye(jt, It), !st && !kt && (st = !0, Er(Qe))), It;
      }
      function $t() {
      }
      function Kn() {
        !st && !kt && (st = !0, Er(Qe));
      }
      function Hr() {
        return Me(jt);
      }
      function dr(ie) {
        ie.callback = null;
      }
      function Cn() {
        return ot;
      }
      var Zn = !1, Vn = null, kn = -1, Mn = Ze, Sr = -1;
      function pr() {
        var ie = j.unstable_now() - Sr;
        return !(ie < Mn);
      }
      function Pn() {
      }
      function aa(ie) {
        if (ie < 0 || ie > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ie > 0 ? Mn = Math.floor(1e3 / ie) : Mn = Ze;
      }
      var ia = function() {
        if (Vn !== null) {
          var ie = j.unstable_now();
          Sr = ie;
          var Le = !0, ft = !0;
          try {
            ft = Vn(Le, ie);
          } finally {
            ft ? vr() : (Zn = !1, Vn = null);
          }
        } else
          Zn = !1;
      }, vr;
      if (typeof k == "function")
        vr = function() {
          k(ia);
        };
      else if (typeof MessageChannel < "u") {
        var la = new MessageChannel(), Jn = la.port2;
        la.port1.onmessage = ia, vr = function() {
          Jn.postMessage(null);
        };
      } else
        vr = function() {
          ge(ia, 0);
        };
      function Er(ie) {
        Vn = ie, Zn || (Zn = !0, vr());
      }
      function pn(ie, Le) {
        kn = ge(function() {
          ie(j.unstable_now());
        }, Le);
      }
      function ua() {
        oe(kn), kn = -1;
      }
      var oa = Pn, sa = null;
      j.unstable_IdlePriority = ne, j.unstable_ImmediatePriority = Ue, j.unstable_LowPriority = ee, j.unstable_NormalPriority = Te, j.unstable_Profiling = sa, j.unstable_UserBlockingPriority = te, j.unstable_cancelCallback = dr, j.unstable_continueExecution = Kn, j.unstable_forceFrameRate = aa, j.unstable_getCurrentPriorityLevel = Cn, j.unstable_getFirstCallbackNode = Hr, j.unstable_next = St, j.unstable_pauseExecution = $t, j.unstable_requestPaint = oa, j.unstable_runWithPriority = ct, j.unstable_scheduleCallback = wt, j.unstable_shouldYield = pr, j.unstable_wrapCallback = ht, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fS)), fS;
}
var iR;
function sR() {
  if (iR) return jm.exports;
  iR = 1;
  var j = {};
  return j.NODE_ENV === "production" ? jm.exports = ok() : jm.exports = sk(), jm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function ck() {
  if (lR) return Qa;
  lR = 1;
  var j = Pe, I = sR();
  function _(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var de = /* @__PURE__ */ new Set(), Ze = {};
  function Ye(n, r) {
    Me(n, r), Me(n + "Capture", r);
  }
  function Me(n, r) {
    for (Ze[n] = r, n = 0; n < r.length; n++) de.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ze = Object.prototype.hasOwnProperty, xe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ae = {}, Ue = {};
  function te(n) {
    return ze.call(Ue, n) ? !0 : ze.call(ae, n) ? !1 : xe.test(n) ? Ue[n] = !0 : (ae[n] = !0, !1);
  }
  function Te(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ee(n, r, l, o) {
    if (r === null || typeof r > "u" || Te(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ne(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var tt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    tt[n] = new ne(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    tt[r] = new ne(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    tt[n] = new ne(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    tt[n] = new ne(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    tt[n] = new ne(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    tt[n] = new ne(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    tt[n] = new ne(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    tt[n] = new ne(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    tt[n] = new ne(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var _n = /[\-:]([a-z])/g;
  function en(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      _n,
      en
    );
    tt[r] = new ne(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(_n, en);
    tt[r] = new ne(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(_n, en);
    tt[r] = new ne(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    tt[n] = new ne(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), tt.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    tt[n] = new ne(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Xe(n, r, l, o) {
    var c = tt.hasOwnProperty(r) ? tt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ee(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var je = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Tt = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), vt = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), fn = Symbol.for("react.profiler"), dn = Symbol.for("react.provider"), jt = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), an = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), st = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function ge(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oe = Object.assign, k;
  function $(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var Ne = !1;
  function Qe(n, r) {
    if (!n || Ne) return "";
    Ne = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Ne = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function it(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ct(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case vt:
        return "Fragment";
      case Ce:
        return "Portal";
      case fn:
        return "Profiler";
      case qe:
        return "StrictMode";
      case an:
        return "Suspense";
      case We:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case jt:
        return (n.displayName || "Context") + ".Consumer";
      case dn:
        return (n._context.displayName || "Context") + ".Provider";
      case mt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ot:
        return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
      case kt:
        r = n._payload, n = n._init;
        try {
          return ct(n(r));
        } catch {
        }
    }
    return null;
  }
  function St(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ct(r);
      case 8:
        return r === qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ht(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function wt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $t(n) {
    var r = wt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Kn(n) {
    n._valueTracker || (n._valueTracker = $t(n));
  }
  function Hr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = wt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function dr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Cn(n, r) {
    var l = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Zn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ht(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && Xe(n, "checked", r, !1);
  }
  function kn(n, r) {
    Vn(n, r);
    var l = ht(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Sr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Sr(n, r.type, ht(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Mn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Sr(n, r, l) {
    (r !== "number" || dr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var pr = Array.isArray;
  function Pn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ht(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function aa(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(_(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ia(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(_(92));
        if (pr(l)) {
          if (1 < l.length) throw Error(_(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ht(l) };
  }
  function vr(n, r) {
    var l = ht(r.value), o = ht(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function la(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Jn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Er(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Jn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var pn, ua = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (pn = pn || document.createElement("div"), pn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = pn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function oa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var sa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ie = ["Webkit", "ms", "Moz", "O"];
  Object.keys(sa).forEach(function(n) {
    ie.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), sa[r] = sa[n];
    });
  });
  function Le(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || sa.hasOwnProperty(n) && sa[n] ? ("" + r).trim() : r + "px";
  }
  function ft(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Le(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Ft = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Mt(n, r) {
    if (r) {
      if (Ft[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(_(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(_(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(_(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(_(62));
    }
  }
  function Dn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mn = null;
  function hr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var It = null, Yn = null, Ht = null;
  function tn(n) {
    if (n = mi(n)) {
      if (typeof It != "function") throw Error(_(280));
      var r = n.stateNode;
      r && (r = _c(r), It(n.stateNode, n.type, r));
    }
  }
  function Xa(n) {
    Yn ? Ht ? Ht.push(n) : Ht = [n] : Yn = n;
  }
  function ka() {
    if (Yn) {
      var n = Yn, r = Ht;
      if (Ht = Yn = null, tn(n), r) for (n = 0; n < r.length; n++) tn(r[n]);
    }
  }
  function ml(n, r) {
    return n(r);
  }
  function ru() {
  }
  var au = !1;
  function yl(n, r, l) {
    if (au) return n(r, l);
    au = !0;
    try {
      return ml(n, r, l);
    } finally {
      au = !1, (Yn !== null || Ht !== null) && (ru(), ka());
    }
  }
  function qa(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = _c(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(_(231, r, typeof l));
    return l;
  }
  var Ka = !1;
  if (S) try {
    var Da = {};
    Object.defineProperty(Da, "passive", { get: function() {
      Ka = !0;
    } }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
  } catch {
    Ka = !1;
  }
  function zi(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (G) {
      this.onError(G);
    }
  }
  var Cr = !1, Vr = null, ca = !1, Ui = null, gl = { onError: function(n) {
    Cr = !0, Vr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Cr = !1, Vr = null, zi.apply(gl, arguments);
  }
  function Q(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Cr) {
      if (Cr) {
        var U = Vr;
        Cr = !1, Vr = null;
      } else throw Error(_(198));
      ca || (ca = !0, Ui = U);
    }
  }
  function X(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Fe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function yt(n) {
    if (X(n) !== n) throw Error(_(188));
  }
  function xt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = X(n), r === null) throw Error(_(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return yt(c), n;
          if (d === o) return yt(c), r;
          d = d.sibling;
        }
        throw Error(_(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(_(189));
        }
      }
      if (l.alternate !== o) throw Error(_(190));
    }
    if (l.tag !== 3) throw Error(_(188));
    return l.stateNode.current === l ? n : r;
  }
  function Be(n) {
    return n = xt(n), n !== null ? dt(n) : null;
  }
  function dt(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = dt(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var zn = I.unstable_scheduleCallback, qt = I.unstable_cancelCallback, vn = I.unstable_shouldYield, mr = I.unstable_requestPaint, Vt = I.unstable_now, Oa = I.unstable_getCurrentPriorityLevel, Un = I.unstable_ImmediatePriority, Pr = I.unstable_UserBlockingPriority, lt = I.unstable_NormalPriority, Ai = I.unstable_LowPriority, ji = I.unstable_IdlePriority, Sl = null, Br = null;
  function qo(n) {
    if (Br && typeof Br.onCommitFiberRoot == "function") try {
      Br.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Rr = Math.clz32 ? Math.clz32 : Jo, Ko = Math.log, Zo = Math.LN2;
  function Jo(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ko(n) / Zo | 0) | 0;
  }
  var iu = 64, Qu = 4194304;
  function Fi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function di(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Fi(E) : (d &= m, d !== 0 && (o = Fi(d)));
    } else m = l & ~c, m !== 0 ? o = Fi(m) : d !== 0 && (o = Fi(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Rr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function La(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function El(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Rr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = La(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function pi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var n = iu;
    return iu <<= 1, !(iu & 4194240) && (iu = 64), n;
  }
  function uu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Rr(r), n[r] = l;
  }
  function es(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Rr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function ts(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Rr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Et = 0;
  function ns(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Gu, Rl, rs, Ct, Xu, ou = !1, Je = [], Za = null, yn = null, $r = null, Na = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map(), ln = [], gn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function as(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Za = null;
        break;
      case "dragenter":
      case "dragleave":
        yn = null;
        break;
      case "mouseover":
      case "mouseout":
        $r = null;
        break;
      case "pointerover":
      case "pointerout":
        Na.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tl.delete(r.pointerId);
    }
  }
  function er(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = mi(r), r !== null && Rl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ir(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Za = er(Za, n, r, l, o, c), !0;
      case "dragenter":
        return yn = er(yn, n, r, l, o, c), !0;
      case "mouseover":
        return $r = er($r, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Na.set(d, er(Na.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tl.set(d, er(Tl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ja(n) {
    var r = Xi(n.target);
    if (r !== null) {
      var l = X(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Fe(l), r !== null) {
            n.blockedOn = r, Xu(n.priority, function() {
              rs(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function qu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Zu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        mn = o, l.target.dispatchEvent(o), mn = null;
      } else return r = mi(l), r !== null && Rl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function su(n, r, l) {
    qu(n) && l.delete(r);
  }
  function cu() {
    ou = !1, Za !== null && qu(Za) && (Za = null), yn !== null && qu(yn) && (yn = null), $r !== null && qu($r) && ($r = null), Na.forEach(su), Tl.forEach(su);
  }
  function wl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ou || (ou = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, cu)));
  }
  function Ma(n) {
    function r(c) {
      return wl(c, n);
    }
    if (0 < Je.length) {
      wl(Je[0], n);
      for (var l = 1; l < Je.length; l++) {
        var o = Je[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Za !== null && wl(Za, n), yn !== null && wl(yn, n), $r !== null && wl($r, n), Na.forEach(r), Tl.forEach(r), l = 0; l < ln.length; l++) o = ln[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ln.length && (l = ln[0], l.blockedOn === null); ) Ja(l), l.blockedOn === null && ln.shift();
  }
  var Hi = je.ReactCurrentBatchConfig, fu = !0;
  function Vi(n, r, l, o) {
    var c = Et, d = Hi.transition;
    Hi.transition = null;
    try {
      Et = 1, vi(n, r, l, o);
    } finally {
      Et = c, Hi.transition = d;
    }
  }
  function Ku(n, r, l, o) {
    var c = Et, d = Hi.transition;
    Hi.transition = null;
    try {
      Et = 4, vi(n, r, l, o);
    } finally {
      Et = c, Hi.transition = d;
    }
  }
  function vi(n, r, l, o) {
    if (fu) {
      var c = Zu(n, r, l, o);
      if (c === null) Jf(n, r, o, Pi, l), as(n, o);
      else if (Ir(c, n, r, l, o)) o.stopPropagation();
      else if (as(n, o), r & 4 && -1 < gn.indexOf(n)) {
        for (; c !== null; ) {
          var d = mi(c);
          if (d !== null && Gu(d), d = Zu(n, r, l, o), d === null && Jf(n, r, o, Pi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Jf(n, r, o, null, l);
    }
  }
  var Pi = null;
  function Zu(n, r, l, o) {
    if (Pi = null, n = hr(o), n = Xi(n), n !== null) if (r = X(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Fe(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Pi = n, null;
  }
  function is(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Oa()) {
          case Un:
            return 1;
          case Pr:
            return 4;
          case lt:
          case Ai:
            return 16;
          case ji:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, Ju = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Ju, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function Z() {
    return !1;
  }
  function Re(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : Z, this.isPropagationStopped = Z, this;
    }
    return oe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var he = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ge = Re(he), pt = oe({}, he, { view: 0, detail: 0 }), Pt = Re(pt), Yt, Wt, Qt, un = oe({}, pt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? (Yt = n.screenX - Qt.screenX, Wt = n.screenY - Qt.screenY) : Wt = Yt = 0, Qt = n), Yt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Dt = Re(un), xl = oe({}, un, { dataTransfer: 0 }), eo = Re(xl), ls = oe({}, pt, { relatedTarget: 0 }), us = Re(ls), Bi = oe({}, he, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), os = Re(Bi), ss = oe({}, he, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Pf = Re(ss), Hm = oe({}, he, { data: 0 }), Jp = Re(Hm), ev = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Bf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, tv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function nv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = tv[n]) ? !!r[n] : !1;
  }
  function yc() {
    return nv;
  }
  var Vm = oe({}, pt, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Bf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yc, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $i = Re(Vm), Pm = oe({}, un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gc = Re(Pm), $f = oe({}, pt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yc }), If = Re($f), Bm = oe({}, he, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sc = Re(Bm), rv = oe({}, un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yr = Re(rv), Ii = [9, 13, 27, 32], Rn = S && "CompositionEvent" in window, fa = null;
  S && "documentMode" in document && (fa = document.documentMode);
  var Yf = S && "TextEvent" in window && !fa, cs = S && (!Rn || fa && 8 < fa && 11 >= fa), av = " ", to = !1;
  function iv(n, r) {
    switch (n) {
      case "keyup":
        return Ii.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var bl = !1;
  function $m(n, r) {
    switch (n) {
      case "compositionend":
        return lv(r);
      case "keypress":
        return r.which !== 32 ? null : (to = !0, av);
      case "textInput":
        return n = r.data, n === av && to ? null : n;
      default:
        return null;
    }
  }
  function Im(n, r) {
    if (bl) return n === "compositionend" || !Rn && iv(n, r) ? (n = C(), h = Ju = ei = null, bl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return cs && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Ym = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Wf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ym[n.type] : r === "textarea";
  }
  function uv(n, r, l, o) {
    Xa(o), r = xc(r, "onChange"), 0 < r.length && (l = new Ge("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var fs = null, ds = null;
  function ov(n) {
    wv(n, 0);
  }
  function Yi(n) {
    var r = io(n);
    if (Hr(r)) return n;
  }
  function Qf(n, r) {
    if (n === "change") return r;
  }
  var Gf = !1;
  if (S) {
    var Ec;
    if (S) {
      var Xf = "oninput" in document;
      if (!Xf) {
        var sv = document.createElement("div");
        sv.setAttribute("oninput", "return;"), Xf = typeof sv.oninput == "function";
      }
      Ec = Xf;
    } else Ec = !1;
    Gf = Ec && (!document.documentMode || 9 < document.documentMode);
  }
  function cv() {
    fs && (fs.detachEvent("onpropertychange", fv), ds = fs = null);
  }
  function fv(n) {
    if (n.propertyName === "value" && Yi(ds)) {
      var r = [];
      uv(r, ds, n, hr(n)), yl(ov, r);
    }
  }
  function Wm(n, r, l) {
    n === "focusin" ? (cv(), fs = r, ds = l, fs.attachEvent("onpropertychange", fv)) : n === "focusout" && cv();
  }
  function Qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Yi(ds);
  }
  function Gm(n, r) {
    if (n === "click") return Yi(r);
  }
  function Xm(n, r) {
    if (n === "input" || n === "change") return Yi(r);
  }
  function dv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : dv;
  function no(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ze.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function pv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function vv(n, r) {
    var l = pv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = pv(l);
    }
  }
  function hv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? hv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function mv() {
    for (var n = window, r = dr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = dr(n.document);
    }
    return r;
  }
  function ps(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function du(n) {
    var r = mv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && hv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ps(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = vv(l, d);
          var m = vv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Cc = S && "documentMode" in document && 11 >= document.documentMode, pu = null, _l = null, vs = null, qf = !1;
  function yv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    qf || pu == null || pu !== dr(o) || (o = pu, "selectionStart" in o && ps(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), vs && no(vs, o) || (vs = o, o = xc(_l, "onSelect"), 0 < o.length && (r = new Ge("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = pu)));
  }
  function Rc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ro = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, Tc = {}, gv = {};
  S && (gv = document.createElement("div").style, "AnimationEvent" in window || (delete ro.animationend.animation, delete ro.animationiteration.animation, delete ro.animationstart.animation), "TransitionEvent" in window || delete ro.transitionend.transition);
  function hs(n) {
    if (Tc[n]) return Tc[n];
    if (!ro[n]) return n;
    var r = ro[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in gv) return Tc[n] = r[l];
    return n;
  }
  var yr = hs("animationend"), Kf = hs("animationiteration"), Sv = hs("animationstart"), Ev = hs("transitionend"), Cv = /* @__PURE__ */ new Map(), Rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function kl(n, r) {
    Cv.set(n, r), Ye(r, [n]);
  }
  for (var wc = 0; wc < Rv.length; wc++) {
    var ms = Rv[wc], ys = ms.toLowerCase(), qm = ms[0].toUpperCase() + ms.slice(1);
    kl(ys, "on" + qm);
  }
  kl(yr, "onAnimationEnd"), kl(Kf, "onAnimationIteration"), kl(Sv, "onAnimationStart"), kl("dblclick", "onDoubleClick"), kl("focusin", "onFocus"), kl("focusout", "onBlur"), kl(Ev, "onTransitionEnd"), Me("onMouseEnter", ["mouseout", "mouseover"]), Me("onMouseLeave", ["mouseout", "mouseover"]), Me("onPointerEnter", ["pointerout", "pointerover"]), Me("onPointerLeave", ["pointerout", "pointerover"]), Ye("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ye("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ye("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ye("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ye("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ye("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Km = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));
  function Tv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Q(o, r, void 0, n), n.currentTarget = null;
  }
  function wv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Tv(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Tv(c, E, U), d = T;
        }
      }
    }
    if (ca) throw n = Ui, ca = !1, Ui = null, n;
  }
  function Kt(n, r) {
    var l = r[ud];
    l === void 0 && (l = r[ud] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Zf(r, n, 2, !1), l.add(o));
  }
  function gs(n, r, l) {
    var o = 0;
    r && (o |= 4), Zf(l, n, o, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function hi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, de.forEach(function(l) {
        l !== "selectionchange" && (Km.has(l) || gs(l, !1, n), gs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, gs("selectionchange", !1, r));
    }
  }
  function Zf(n, r, l, o) {
    switch (is(r)) {
      case 1:
        var c = Vi;
        break;
      case 4:
        c = Ku;
        break;
      default:
        c = vi;
    }
    l = c.bind(null, r, l, n), c = void 0, !Ka || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Jf(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = Xi(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    yl(function() {
      var U = d, G = hr(l), q = [];
      e: {
        var W = Cv.get(n);
        if (W !== void 0) {
          var pe = Ge, Se = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              pe = $i;
              break;
            case "focusin":
              Se = "focus", pe = us;
              break;
            case "focusout":
              Se = "blur", pe = us;
              break;
            case "beforeblur":
            case "afterblur":
              pe = us;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = Dt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = eo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = If;
              break;
            case yr:
            case Kf:
            case Sv:
              pe = os;
              break;
            case Ev:
              pe = Sc;
              break;
            case "scroll":
              pe = Pt;
              break;
            case "wheel":
              pe = Yr;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = Pf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = gc;
          }
          var we = (r & 4) !== 0, Ln = !we && n === "scroll", D = we ? W !== null ? W + "Capture" : null : W;
          we = [];
          for (var x = U, N; x !== null; ) {
            N = x;
            var J = N.stateNode;
            if (N.tag === 5 && J !== null && (N = J, D !== null && (J = qa(x, D), J != null && we.push(ao(x, J, N)))), Ln) break;
            x = x.return;
          }
          0 < we.length && (W = new pe(W, Se, null, l, G), q.push({ event: W, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", W && l !== mn && (Se = l.relatedTarget || l.fromElement) && (Xi(Se) || Se[ni])) break e;
          if ((pe || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, pe ? (Se = l.relatedTarget || l.toElement, pe = U, Se = Se ? Xi(Se) : null, Se !== null && (Ln = X(Se), Se !== Ln || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (pe = null, Se = U), pe !== Se)) {
            if (we = Dt, J = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (we = gc, J = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Ln = pe == null ? W : io(pe), N = Se == null ? W : io(Se), W = new we(J, x + "leave", pe, l, G), W.target = Ln, W.relatedTarget = N, J = null, Xi(G) === U && (we = new we(D, x + "enter", Se, l, G), we.target = N, we.relatedTarget = Ln, J = we), Ln = J, pe && Se) t: {
              for (we = pe, D = Se, x = 0, N = we; N; N = vu(N)) x++;
              for (N = 0, J = D; J; J = vu(J)) N++;
              for (; 0 < x - N; ) we = vu(we), x--;
              for (; 0 < N - x; ) D = vu(D), N--;
              for (; x--; ) {
                if (we === D || D !== null && we === D.alternate) break t;
                we = vu(we), D = vu(D);
              }
              we = null;
            }
            else we = null;
            pe !== null && ed(q, W, pe, we, !1), Se !== null && Ln !== null && ed(q, Ln, Se, we, !0);
          }
        }
        e: {
          if (W = U ? io(U) : window, pe = W.nodeName && W.nodeName.toLowerCase(), pe === "select" || pe === "input" && W.type === "file") var _e = Qf;
          else if (Wf(W)) if (Gf) _e = Xm;
          else {
            _e = Qm;
            var $e = Wm;
          }
          else (pe = W.nodeName) && pe.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (_e = Gm);
          if (_e && (_e = _e(n, U))) {
            uv(q, _e, l, G);
            break e;
          }
          $e && $e(n, W, U), n === "focusout" && ($e = W._wrapperState) && $e.controlled && W.type === "number" && Sr(W, "number", W.value);
        }
        switch ($e = U ? io(U) : window, n) {
          case "focusin":
            (Wf($e) || $e.contentEditable === "true") && (pu = $e, _l = U, vs = null);
            break;
          case "focusout":
            vs = _l = pu = null;
            break;
          case "mousedown":
            qf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qf = !1, yv(q, l, G);
            break;
          case "selectionchange":
            if (Cc) break;
          case "keydown":
          case "keyup":
            yv(q, l, G);
        }
        var Ie;
        if (Rn) e: {
          switch (n) {
            case "compositionstart":
              var De = "onCompositionStart";
              break e;
            case "compositionend":
              De = "onCompositionEnd";
              break e;
            case "compositionupdate":
              De = "onCompositionUpdate";
              break e;
          }
          De = void 0;
        }
        else bl ? iv(n, l) && (De = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (De = "onCompositionStart");
        De && (cs && l.locale !== "ko" && (bl || De !== "onCompositionStart" ? De === "onCompositionEnd" && bl && (Ie = C()) : (ei = G, Ju = "value" in ei ? ei.value : ei.textContent, bl = !0)), $e = xc(U, De), 0 < $e.length && (De = new Jp(De, n, null, l, G), q.push({ event: De, listeners: $e }), Ie ? De.data = Ie : (Ie = lv(l), Ie !== null && (De.data = Ie)))), (Ie = Yf ? $m(n, l) : Im(n, l)) && (U = xc(U, "onBeforeInput"), 0 < U.length && (G = new Jp("onBeforeInput", "beforeinput", null, l, G), q.push({ event: G, listeners: U }), G.data = Ie));
      }
      wv(q, r);
    });
  }
  function ao(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function xc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = qa(n, l), d != null && o.unshift(ao(n, d, c)), d = qa(n, r), d != null && o.push(ao(n, d, c))), n = n.return;
    }
    return o;
  }
  function vu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ed(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = qa(l, d), T != null && m.unshift(ao(l, T, E))) : c || (T = qa(l, d), T != null && m.push(ao(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var xv = /\r\n?/g, td = /\u0000|\uFFFD/g;
  function bv(n) {
    return (typeof n == "string" ? n : "" + n).replace(xv, `
`).replace(td, "");
  }
  function Ss(n, r, l) {
    if (r = bv(r), bv(n) !== r && l) throw Error(_(425));
  }
  function bc() {
  }
  var nd = null, rd = null;
  function hu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Es = typeof setTimeout == "function" ? setTimeout : void 0, Cs = typeof clearTimeout == "function" ? clearTimeout : void 0, ad = typeof Promise == "function" ? Promise : void 0, _v = typeof queueMicrotask == "function" ? queueMicrotask : typeof ad < "u" ? function(n) {
    return ad.resolve(null).then(n).catch(id);
  } : Es;
  function id(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ld(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ma(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ma(r);
  }
  function da(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Rs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Gi = Math.random().toString(36).slice(2), za = "__reactFiber$" + Gi, Ts = "__reactProps$" + Gi, ni = "__reactContainer$" + Gi, ud = "__reactEvents$" + Gi, Zm = "__reactListeners$" + Gi, Jm = "__reactHandles$" + Gi;
  function Xi(n) {
    var r = n[za];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ni] || l[za]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Rs(n); n !== null; ) {
          if (l = n[za]) return l;
          n = Rs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function mi(n) {
    return n = n[za] || n[ni], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function io(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(_(33));
  }
  function _c(n) {
    return n[Ts] || null;
  }
  var He = [], ri = -1;
  function Zt(n) {
    return { current: n };
  }
  function be(n) {
    0 > ri || (n.current = He[ri], He[ri] = null, ri--);
  }
  function zt(n, r) {
    ri++, He[ri] = n.current, n.current = r;
  }
  var Ua = {}, Wn = Zt(Ua), nt = Zt(!1), Tr = Ua;
  function pa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ua;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function An(n) {
    return n = n.childContextTypes, n != null;
  }
  function Wr() {
    be(nt), be(Wn);
  }
  function yi(n, r, l) {
    if (Wn.current !== Ua) throw Error(_(168));
    zt(Wn, r), zt(nt, l);
  }
  function Dl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(_(108, St(n) || "Unknown", c));
    return oe({}, l, o);
  }
  function mu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ua, Tr = Wn.current, zt(Wn, n), zt(nt, nt.current), !0;
  }
  function kv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(_(169));
    l ? (n = Dl(n, r, Tr), o.__reactInternalMemoizedMergedChildContext = n, be(nt), be(Wn), zt(Wn, n)) : be(nt), zt(nt, l);
  }
  var qi = null, Ol = !1, tr = !1;
  function kc(n) {
    qi === null ? qi = [n] : qi.push(n);
  }
  function Dv(n) {
    Ol = !0, kc(n);
  }
  function gi() {
    if (!tr && qi !== null) {
      tr = !0;
      var n = 0, r = Et;
      try {
        var l = qi;
        for (Et = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        qi = null, Ol = !1;
      } catch (c) {
        throw qi !== null && (qi = qi.slice(n + 1)), zn(Un, gi), c;
      } finally {
        Et = r, tr = !1;
      }
    }
    return null;
  }
  var Aa = [], Ll = 0, ja = null, yu = 0, Qr = [], Gr = 0, ai = null, Xr = 1, nr = "";
  function gu(n, r) {
    Aa[Ll++] = yu, Aa[Ll++] = ja, ja = n, yu = r;
  }
  function Nl(n, r, l) {
    Qr[Gr++] = Xr, Qr[Gr++] = nr, Qr[Gr++] = ai, ai = n;
    var o = Xr;
    n = nr;
    var c = 32 - Rr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Rr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Xr = 1 << 32 - Rr(r) + c | l << c | o, nr = d + n;
    } else Xr = 1 << d | l << c | o, nr = n;
  }
  function Dc(n) {
    n.return !== null && (gu(n, 1), Nl(n, 1, 0));
  }
  function Oc(n) {
    for (; n === ja; ) ja = Aa[--Ll], Aa[Ll] = null, yu = Aa[--Ll], Aa[Ll] = null;
    for (; n === ai; ) ai = Qr[--Gr], Qr[Gr] = null, nr = Qr[--Gr], Qr[Gr] = null, Xr = Qr[--Gr], Qr[Gr] = null;
  }
  var va = null, ha = null, on = !1, Fa = null;
  function od(n, r) {
    var l = Ra(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function sd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, va = n, ha = da(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, va = n, ha = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ai !== null ? { id: Xr, overflow: nr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ra(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, va = n, ha = null, !0) : !1;
      default:
        return !1;
    }
  }
  function cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Lc(n) {
    if (on) {
      var r = ha;
      if (r) {
        var l = r;
        if (!sd(n, r)) {
          if (cd(n)) throw Error(_(418));
          r = da(l.nextSibling);
          var o = va;
          r && sd(n, r) ? od(o, l) : (n.flags = n.flags & -4097 | 2, on = !1, va = n);
        }
      } else {
        if (cd(n)) throw Error(_(418));
        n.flags = n.flags & -4097 | 2, on = !1, va = n;
      }
    }
  }
  function fd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    va = n;
  }
  function Nc(n) {
    if (n !== va) return !1;
    if (!on) return fd(n), on = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !hu(n.type, n.memoizedProps)), r && (r = ha)) {
      if (cd(n)) throw Ov(), Error(_(418));
      for (; r; ) od(n, r), r = da(r.nextSibling);
    }
    if (fd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(_(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ha = da(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ha = null;
      }
    } else ha = va ? da(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ov() {
    for (var n = ha; n; ) n = da(n.nextSibling);
  }
  function lo() {
    ha = va = null, on = !1;
  }
  function jn(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var ey = je.ReactCurrentBatchConfig;
  function Ml(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(_(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(_(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(_(284));
      if (!l._owner) throw Error(_(290, n));
    }
    return n;
  }
  function uo(n, r) {
    throw n = Object.prototype.toString.call(r), Error(_(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zl(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Lv(n) {
    function r(D, x) {
      if (n) {
        var N = D.deletions;
        N === null ? (D.deletions = [x], D.flags |= 16) : N.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Yl(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, N) {
      return D.index = N, n ? (N = D.alternate, N !== null ? (N = N.index, N < x ? (D.flags |= 2, x) : N) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, N, J) {
      return x === null || x.tag !== 6 ? (x = Yd(N, D.mode, J), x.return = D, x) : (x = c(x, N), x.return = D, x);
    }
    function T(D, x, N, J) {
      var _e = N.type;
      return _e === vt ? G(D, x, N.props.children, J, N.key) : x !== null && (x.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === kt && zl(_e) === x.type) ? (J = c(x, N.props), J.ref = Ml(D, x, N), J.return = D, J) : (J = rf(N.type, N.key, N.props, null, D.mode, J), J.ref = Ml(D, x, N), J.return = D, J);
    }
    function U(D, x, N, J) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = lf(N, D.mode, J), x.return = D, x) : (x = c(x, N.children || []), x.return = D, x);
    }
    function G(D, x, N, J, _e) {
      return x === null || x.tag !== 7 ? (x = Mu(N, D.mode, J, _e), x.return = D, x) : (x = c(x, N), x.return = D, x);
    }
    function q(D, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Yd("" + x, D.mode, N), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Tt:
            return N = rf(x.type, x.key, x.props, null, D.mode, N), N.ref = Ml(D, null, x), N.return = D, N;
          case Ce:
            return x = lf(x, D.mode, N), x.return = D, x;
          case kt:
            var J = x._init;
            return q(D, J(x._payload), N);
        }
        if (pr(x) || ge(x)) return x = Mu(x, D.mode, N, null), x.return = D, x;
        uo(D, x);
      }
      return null;
    }
    function W(D, x, N, J) {
      var _e = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return _e !== null ? null : E(D, x, "" + N, J);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Tt:
            return N.key === _e ? T(D, x, N, J) : null;
          case Ce:
            return N.key === _e ? U(D, x, N, J) : null;
          case kt:
            return _e = N._init, W(
              D,
              x,
              _e(N._payload),
              J
            );
        }
        if (pr(N) || ge(N)) return _e !== null ? null : G(D, x, N, J, null);
        uo(D, N);
      }
      return null;
    }
    function pe(D, x, N, J, _e) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return D = D.get(N) || null, E(x, D, "" + J, _e);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case Tt:
            return D = D.get(J.key === null ? N : J.key) || null, T(x, D, J, _e);
          case Ce:
            return D = D.get(J.key === null ? N : J.key) || null, U(x, D, J, _e);
          case kt:
            var $e = J._init;
            return pe(D, x, N, $e(J._payload), _e);
        }
        if (pr(J) || ge(J)) return D = D.get(N) || null, G(x, D, J, _e, null);
        uo(x, J);
      }
      return null;
    }
    function Se(D, x, N, J) {
      for (var _e = null, $e = null, Ie = x, De = x = 0, bn = null; Ie !== null && De < N.length; De++) {
        Ie.index > De ? (bn = Ie, Ie = null) : bn = Ie.sibling;
        var Nt = W(D, Ie, N[De], J);
        if (Nt === null) {
          Ie === null && (Ie = bn);
          break;
        }
        n && Ie && Nt.alternate === null && r(D, Ie), x = d(Nt, x, De), $e === null ? _e = Nt : $e.sibling = Nt, $e = Nt, Ie = bn;
      }
      if (De === N.length) return l(D, Ie), on && gu(D, De), _e;
      if (Ie === null) {
        for (; De < N.length; De++) Ie = q(D, N[De], J), Ie !== null && (x = d(Ie, x, De), $e === null ? _e = Ie : $e.sibling = Ie, $e = Ie);
        return on && gu(D, De), _e;
      }
      for (Ie = o(D, Ie); De < N.length; De++) bn = pe(Ie, D, De, N[De], J), bn !== null && (n && bn.alternate !== null && Ie.delete(bn.key === null ? De : bn.key), x = d(bn, x, De), $e === null ? _e = bn : $e.sibling = bn, $e = bn);
      return n && Ie.forEach(function(Wl) {
        return r(D, Wl);
      }), on && gu(D, De), _e;
    }
    function we(D, x, N, J) {
      var _e = ge(N);
      if (typeof _e != "function") throw Error(_(150));
      if (N = _e.call(N), N == null) throw Error(_(151));
      for (var $e = _e = null, Ie = x, De = x = 0, bn = null, Nt = N.next(); Ie !== null && !Nt.done; De++, Nt = N.next()) {
        Ie.index > De ? (bn = Ie, Ie = null) : bn = Ie.sibling;
        var Wl = W(D, Ie, Nt.value, J);
        if (Wl === null) {
          Ie === null && (Ie = bn);
          break;
        }
        n && Ie && Wl.alternate === null && r(D, Ie), x = d(Wl, x, De), $e === null ? _e = Wl : $e.sibling = Wl, $e = Wl, Ie = bn;
      }
      if (Nt.done) return l(
        D,
        Ie
      ), on && gu(D, De), _e;
      if (Ie === null) {
        for (; !Nt.done; De++, Nt = N.next()) Nt = q(D, Nt.value, J), Nt !== null && (x = d(Nt, x, De), $e === null ? _e = Nt : $e.sibling = Nt, $e = Nt);
        return on && gu(D, De), _e;
      }
      for (Ie = o(D, Ie); !Nt.done; De++, Nt = N.next()) Nt = pe(Ie, D, De, Nt.value, J), Nt !== null && (n && Nt.alternate !== null && Ie.delete(Nt.key === null ? De : Nt.key), x = d(Nt, x, De), $e === null ? _e = Nt : $e.sibling = Nt, $e = Nt);
      return n && Ie.forEach(function(lh) {
        return r(D, lh);
      }), on && gu(D, De), _e;
    }
    function Ln(D, x, N, J) {
      if (typeof N == "object" && N !== null && N.type === vt && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Tt:
            e: {
              for (var _e = N.key, $e = x; $e !== null; ) {
                if ($e.key === _e) {
                  if (_e = N.type, _e === vt) {
                    if ($e.tag === 7) {
                      l(D, $e.sibling), x = c($e, N.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if ($e.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === kt && zl(_e) === $e.type) {
                    l(D, $e.sibling), x = c($e, N.props), x.ref = Ml(D, $e, N), x.return = D, D = x;
                    break e;
                  }
                  l(D, $e);
                  break;
                } else r(D, $e);
                $e = $e.sibling;
              }
              N.type === vt ? (x = Mu(N.props.children, D.mode, J, N.key), x.return = D, D = x) : (J = rf(N.type, N.key, N.props, null, D.mode, J), J.ref = Ml(D, x, N), J.return = D, D = J);
            }
            return m(D);
          case Ce:
            e: {
              for ($e = N.key; x !== null; ) {
                if (x.key === $e) if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                  l(D, x.sibling), x = c(x, N.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = lf(N, D.mode, J), x.return = D, D = x;
            }
            return m(D);
          case kt:
            return $e = N._init, Ln(D, x, $e(N._payload), J);
        }
        if (pr(N)) return Se(D, x, N, J);
        if (ge(N)) return we(D, x, N, J);
        uo(D, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, N), x.return = D, D = x) : (l(D, x), x = Yd(N, D.mode, J), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Ln;
  }
  var Ul = Lv(!0), Nv = Lv(!1), Mc = Zt(null), Ki = null, On = null, ue = null;
  function Ha() {
    ue = On = Ki = null;
  }
  function ma(n) {
    var r = Mc.current;
    be(Mc), n._currentValue = r;
  }
  function dd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function oo(n, r) {
    Ki = n, ue = On = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (wr = !0), n.firstContext = null);
  }
  function Va(n) {
    var r = n._currentValue;
    if (ue !== n) if (n = { context: n, memoizedValue: r, next: null }, On === null) {
      if (Ki === null) throw Error(_(308));
      On = n, Ki.dependencies = { lanes: 0, firstContext: n };
    } else On = On.next = n;
    return r;
  }
  var Su = null;
  function pd(n) {
    Su === null ? Su = [n] : Su.push(n);
  }
  function Bn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, pd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Zi(n, o);
  }
  function Zi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Al = !1;
  function vd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ya(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ga(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Lt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Zi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, pd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Zi(n, l);
  }
  function zc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ts(n, l);
    }
  }
  function Mv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Uc(n, r, l, o) {
    var c = n.updateQueue;
    Al = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = U : E.next = U, G.lastBaseUpdate = T));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, G = U = T = null, E = d;
      do {
        var W = E.lane, pe = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: pe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Se = n, we = E;
            switch (W = r, pe = l, we.tag) {
              case 1:
                if (Se = we.payload, typeof Se == "function") {
                  q = Se.call(pe, q, W);
                  break e;
                }
                q = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = we.payload, W = typeof Se == "function" ? Se.call(pe, q, W) : Se, W == null) break e;
                q = oe({}, q, W);
                break e;
              case 2:
                Al = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else pe = { eventTime: pe, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (U = G = pe, T = q) : G = G.next = pe, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (T = q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      bu |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function zv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(_(191, c));
        c.call(o);
      }
    }
  }
  var ws = {}, Si = Zt(ws), so = Zt(ws), co = Zt(ws);
  function Eu(n) {
    if (n === ws) throw Error(_(174));
    return n;
  }
  function md(n, r) {
    switch (zt(co, r), zt(so, n), zt(Si, ws), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Er(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Er(r, n);
    }
    be(Si), zt(Si, r);
  }
  function fo() {
    be(Si), be(so), be(co);
  }
  function Uv(n) {
    Eu(co.current);
    var r = Eu(Si.current), l = Er(r, n.type);
    r !== l && (zt(so, n), zt(Si, l));
  }
  function yd(n) {
    so.current === n && (be(Si), be(so));
  }
  var Sn = Zt(0);
  function xs(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var gd = [];
  function Ac() {
    for (var n = 0; n < gd.length; n++) gd[n]._workInProgressVersionPrimary = null;
    gd.length = 0;
  }
  var jc = je.ReactCurrentDispatcher, Sd = je.ReactCurrentBatchConfig, Ji = 0, le = null, Ae = null, et = null, sn = !1, qr = !1, po = 0, ty = 0;
  function gr() {
    throw Error(_(321));
  }
  function Ed(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function bs(n, r, l, o, c, d) {
    if (Ji = d, le = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, jc.current = n === null || n.memoizedState === null ? Sa : ny, n = l(o, c), qr) {
      d = 0;
      do {
        if (qr = !1, po = 0, 25 <= d) throw Error(_(301));
        d += 1, et = Ae = null, r.updateQueue = null, jc.current = nn, n = l(o, c);
      } while (qr);
    }
    if (jc.current = Ci, r = Ae !== null && Ae.next !== null, Ji = 0, et = Ae = le = null, sn = !1, r) throw Error(_(300));
    return n;
  }
  function Y() {
    var n = po !== 0;
    return po = 0, n;
  }
  function Jt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return et === null ? le.memoizedState = et = n : et = et.next = n, et;
  }
  function ke() {
    if (Ae === null) {
      var n = le.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ae.next;
    var r = et === null ? le.memoizedState : et.next;
    if (r !== null) et = r, Ae = n;
    else {
      if (n === null) throw Error(_(310));
      Ae = n, n = { memoizedState: Ae.memoizedState, baseState: Ae.baseState, baseQueue: Ae.baseQueue, queue: Ae.queue, next: null }, et === null ? le.memoizedState = et = n : et = et.next = n;
    }
    return et;
  }
  function Ei(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ii(n) {
    var r = ke(), l = r.queue;
    if (l === null) throw Error(_(311));
    l.lastRenderedReducer = n;
    var o = Ae, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var G = U.lane;
        if ((Ji & G) === G) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var q = {
            lane: G,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = q, m = o) : T = T.next = q, le.lanes |= G, bu |= G;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (wr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, le.lanes |= d, bu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function el(n) {
    var r = ke(), l = r.queue;
    if (l === null) throw Error(_(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (wr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function li() {
  }
  function vo(n, r) {
    var l = le, o = ke(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, wr = !0), o = o.queue, _s(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || et !== null && et.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, ho.bind(null, l, o, c, r), void 0, null), Tn === null) throw Error(_(349));
      Ji & 30 || Cu(l, r, c);
    }
    return c;
  }
  function Cu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = le.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, le.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function ho(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Vc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      Hc(r) && Vc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Vc(n) {
    var r = Zi(n, 1);
    r !== null && Pa(r, n, 1, -1);
  }
  function Pc(n) {
    var r = Jt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ei, lastRenderedState: n }, r.queue = n, n = n.dispatch = Av.bind(null, le, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = le.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, le.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return ke().memoizedState;
  }
  function mo(n, r, l, o) {
    var c = Jt();
    le.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function yo(n, r, l, o) {
    var c = ke();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ae !== null) {
      var m = Ae.memoizedState;
      if (d = m.destroy, o !== null && Ed(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    le.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function $c(n, r) {
    return mo(8390656, 8, n, r);
  }
  function _s(n, r) {
    return yo(2048, 8, n, r);
  }
  function Ic(n, r) {
    return yo(4, 2, n, r);
  }
  function Yc(n, r) {
    return yo(4, 4, n, r);
  }
  function Wc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Qc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(4, 4, Wc.bind(null, r, n), l);
  }
  function ks() {
  }
  function Ds(n, r) {
    var l = ke();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ed(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Tu(n, r) {
    var l = ke();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ed(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Gc(n, r, l) {
    return Ji & 21 ? (ti(l, r) || (l = lu(), le.lanes |= l, bu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, wr = !0), n.memoizedState = l);
  }
  function Cd(n, r) {
    var l = Et;
    Et = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Sd.transition;
    Sd.transition = {};
    try {
      n(!1), r();
    } finally {
      Et = l, Sd.transition = o;
    }
  }
  function Xc() {
    return ke().memoizedState;
  }
  function Rd(n, r, l) {
    var o = oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, go(n)) Td(r, l);
    else if (l = Bn(n, r, l, o), l !== null) {
      var c = Xn();
      Pa(l, n, o, c), So(l, r, o);
    }
  }
  function Av(n, r, l) {
    var o = oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (go(n)) Td(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, pd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Bn(n, r, c, o), l !== null && (c = Xn(), Pa(l, n, o, c), So(l, r, o));
    }
  }
  function go(n) {
    var r = n.alternate;
    return n === le || r !== null && r === le;
  }
  function Td(n, r) {
    qr = sn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function So(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ts(n, l);
    }
  }
  var Ci = { readContext: Va, useCallback: gr, useContext: gr, useEffect: gr, useImperativeHandle: gr, useInsertionEffect: gr, useLayoutEffect: gr, useMemo: gr, useReducer: gr, useRef: gr, useState: gr, useDebugValue: gr, useDeferredValue: gr, useTransition: gr, useMutableSource: gr, useSyncExternalStore: gr, useId: gr, unstable_isNewReconciler: !1 }, Sa = { readContext: Va, useCallback: function(n, r) {
    return Jt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Va, useEffect: $c, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mo(
      4194308,
      4,
      Wc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return mo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return mo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Jt();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Jt();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Rd.bind(null, le, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Jt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: ks, useDeferredValue: function(n) {
    return Jt().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = Cd.bind(null, n[1]), Jt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = le, c = Jt();
    if (on) {
      if (l === void 0) throw Error(_(407));
      l = l();
    } else {
      if (l = r(), Tn === null) throw Error(_(349));
      Ji & 30 || Cu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, $c(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, ho.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Jt(), r = Tn.identifierPrefix;
    if (on) {
      var l = nr, o = Xr;
      l = (o & ~(1 << 32 - Rr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = po++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ty++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ny = {
    readContext: Va,
    useCallback: Ds,
    useContext: Va,
    useEffect: _s,
    useImperativeHandle: Qc,
    useInsertionEffect: Ic,
    useLayoutEffect: Yc,
    useMemo: Tu,
    useReducer: ii,
    useRef: Bc,
    useState: function() {
      return ii(Ei);
    },
    useDebugValue: ks,
    useDeferredValue: function(n) {
      var r = ke();
      return Gc(r, Ae.memoizedState, n);
    },
    useTransition: function() {
      var n = ii(Ei)[0], r = ke().memoizedState;
      return [n, r];
    },
    useMutableSource: li,
    useSyncExternalStore: vo,
    useId: Xc,
    unstable_isNewReconciler: !1
  }, nn = { readContext: Va, useCallback: Ds, useContext: Va, useEffect: _s, useImperativeHandle: Qc, useInsertionEffect: Ic, useLayoutEffect: Yc, useMemo: Tu, useReducer: el, useRef: Bc, useState: function() {
    return el(Ei);
  }, useDebugValue: ks, useDeferredValue: function(n) {
    var r = ke();
    return Ae === null ? r.memoizedState = n : Gc(r, Ae.memoizedState, n);
  }, useTransition: function() {
    var n = el(Ei)[0], r = ke().memoizedState;
    return [n, r];
  }, useMutableSource: li, useSyncExternalStore: vo, useId: Xc, unstable_isNewReconciler: !1 };
  function Kr(n, r) {
    if (n && n.defaultProps) {
      r = oe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Eo(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : oe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var jl = { isMounted: function(n) {
    return (n = n._reactInternals) ? X(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Xn(), c = oi(n), d = ya(o, c);
    d.payload = r, l != null && (d.callback = l), r = ga(n, d, c), r !== null && (Pa(r, n, c, o), zc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Xn(), c = oi(n), d = ya(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = ga(n, d, c), r !== null && (Pa(r, n, c, o), zc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Xn(), o = oi(n), c = ya(l, o);
    c.tag = 2, r != null && (c.callback = r), r = ga(n, c, o), r !== null && (Pa(r, n, o, l), zc(r, n, o));
  } };
  function Os(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !no(l, o) || !no(c, d) : !0;
  }
  function jv(n, r, l) {
    var o = !1, c = Ua, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Va(d) : (c = An(r) ? Tr : Wn.current, o = r.contextTypes, d = (o = o != null) ? pa(n, c) : Ua), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = jl, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Fv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && jl.enqueueReplaceState(r, r.state, null);
  }
  function wd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, vd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Va(d) : (d = An(r) ? Tr : Wn.current, c.context = pa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Eo(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && jl.enqueueReplaceState(c, c.state, null), Uc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Co(n, r) {
    try {
      var l = "", o = r;
      do
        l += it(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ls(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function xd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var bd = typeof WeakMap == "function" ? WeakMap : Map;
  function _d(n, r, l) {
    l = ya(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      tf || (tf = !0, Vd = o), xd(n, r);
    }, l;
  }
  function Hv(n, r, l) {
    l = ya(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        xd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      xd(n, r), typeof o != "function" && (Pl === null ? Pl = /* @__PURE__ */ new Set([this]) : Pl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Vv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new bd();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = fy.bind(null, n, r, l), r.then(n, n));
  }
  function Ns(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Pv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ya(-1, 1), r.tag = 2, ga(l, r, 1))), l.lanes |= 1), n);
  }
  var Bv = je.ReactCurrentOwner, wr = !1;
  function xr(n, r, l, o) {
    r.child = n === null ? Nv(r, null, l, o) : Ul(r, n.child, l, o);
  }
  function Fl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return oo(r, c), o = bs(n, r, l, o, d, c), l = Y(), n !== null && !wr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ri(n, r, c)) : (on && l && Dc(r), r.flags |= 1, xr(n, r, o, c), r.child);
  }
  function Ro(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Id(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Hl(n, r, d, o, c)) : (n = rf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : no, l(m, o) && n.ref === r.ref) return Ri(n, r, c);
    }
    return r.flags |= 1, n = Yl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (no(d, o) && n.ref === r.ref) if (wr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (wr = !0);
      else return r.lanes = n.lanes, Ri(n, r, c);
    }
    return Vl(n, r, l, o, c);
  }
  function qc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, zt(xu, Dr), Dr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, zt(xu, Dr), Dr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, zt(xu, Dr), Dr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, zt(xu, Dr), Dr |= o;
    return xr(n, r, c, l), r.child;
  }
  function Zr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Vl(n, r, l, o, c) {
    var d = An(l) ? Tr : Wn.current;
    return d = pa(r, d), oo(r, c), l = bs(n, r, l, o, d, c), o = Y(), n !== null && !wr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ri(n, r, c)) : (on && o && Dc(r), r.flags |= 1, xr(n, r, l, c), r.child);
  }
  function ut(n, r, l, o, c) {
    if (An(l)) {
      var d = !0;
      mu(r);
    } else d = !1;
    if (oo(r, c), r.stateNode === null) Us(n, r), jv(r, l, o), wd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Va(U) : (U = An(l) ? Tr : Wn.current, U = pa(r, U));
      var G = l.getDerivedStateFromProps, q = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Fv(r, m, o, U), Al = !1;
      var W = r.memoizedState;
      m.state = W, Uc(r, o, m, c), T = r.memoizedState, E !== o || W !== T || nt.current || Al ? (typeof G == "function" && (Eo(r, l, G, o), T = r.memoizedState), (E = Al || Os(r, l, E, o, W, T, U)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, hd(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : Kr(r.type, E), m.props = U, q = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Va(T) : (T = An(l) ? Tr : Wn.current, T = pa(r, T));
      var pe = l.getDerivedStateFromProps;
      (G = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || W !== T) && Fv(r, m, o, T), Al = !1, W = r.memoizedState, m.state = W, Uc(r, o, m, c);
      var Se = r.memoizedState;
      E !== q || W !== Se || nt.current || Al ? (typeof pe == "function" && (Eo(r, l, pe, o), Se = r.memoizedState), (U = Al || Os(r, l, U, o, W, Se, T) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Se, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Se, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Se), m.props = o, m.state = Se, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return To(n, r, l, o, d, c);
  }
  function To(n, r, l, o, c, d) {
    Zr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && kv(r, l, !1), Ri(n, r, d);
    o = r.stateNode, Bv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ul(r, n.child, null, d), r.child = Ul(r, null, E, d)) : xr(n, r, E, d), r.memoizedState = o.state, c && kv(r, l, !0), r.child;
  }
  function kd(n) {
    var r = n.stateNode;
    r.pendingContext ? yi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && yi(n, r.context, !1), md(n, r.containerInfo);
  }
  function ry(n, r, l, o, c) {
    return lo(), jn(c), r.flags |= 256, xr(n, r, l, o), r.child;
  }
  var Dd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ms(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function wo(n, r, l) {
    var o = r.pendingProps, c = Sn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), zt(Sn, c & 1), n === null)
      return Lc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = af(m, o, 0, null), n = Mu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ms(l), r.memoizedState = Dd, n) : Od(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return ay(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Yl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Yl(E, d) : (d = Mu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ms(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Dd, o;
    }
    return d = n.child, n = d.sibling, o = Yl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Od(n, r) {
    return r = af({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function zs(n, r, l, o) {
    return o !== null && jn(o), Ul(r, n.child, null, l), n = Od(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ay(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ls(Error(_(422))), zs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = af({ mode: "visible", children: o.children }, c, 0, null), d = Mu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ul(r, n.child, null, m), r.child.memoizedState = Ms(m), r.memoizedState = Dd, d);
    if (!(r.mode & 1)) return zs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(_(419)), o = Ls(d, o, void 0), zs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, wr || E) {
      if (o = Tn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Zi(n, c), Pa(o, n, c, -1));
      }
      return Bd(), o = Ls(Error(_(421))), zs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = dy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ha = da(c.nextSibling), va = r, on = !0, Fa = null, n !== null && (Qr[Gr++] = Xr, Qr[Gr++] = nr, Qr[Gr++] = ai, Xr = n.id, nr = n.overflow, ai = r), r = Od(r, o.children), r.flags |= 4096, r);
  }
  function Kc(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), dd(n.return, r, l);
  }
  function Ld(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Nd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (xr(n, r, o.children, l), o = Sn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Kc(n, l, r);
        else if (n.tag === 19) Kc(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (zt(Sn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && xs(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ld(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && xs(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Ld(r, !0, l, null, d);
        break;
      case "together":
        Ld(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Us(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ri(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), bu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(_(153));
    if (r.child !== null) {
      for (n = r.child, l = Yl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Yl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ea(n, r, l) {
    switch (r.tag) {
      case 3:
        kd(r), lo();
        break;
      case 5:
        Uv(r);
        break;
      case 1:
        An(r.type) && mu(r);
        break;
      case 4:
        md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        zt(Mc, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (zt(Sn, Sn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? wo(n, r, l) : (zt(Sn, Sn.current & 1), n = Ri(n, r, l), n !== null ? n.sibling : null);
        zt(Sn, Sn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Nd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), zt(Sn, Sn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, qc(n, r, l);
    }
    return Ri(n, r, l);
  }
  var Ti, ui, As, xo;
  Ti = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ui = function() {
  }, As = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Eu(Si.current);
      var d = null;
      switch (l) {
        case "input":
          c = Cn(n, c), o = Cn(n, o), d = [];
          break;
        case "select":
          c = oe({}, c, { value: void 0 }), o = oe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = aa(n, c), o = aa(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = bc);
      }
      Mt(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Ze.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Ze.hasOwnProperty(U) ? (T != null && U === "onScroll" && Kt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, xo = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function br(n, r) {
    if (!on) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Ot(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function iy(n, r, l) {
    var o = r.pendingProps;
    switch (Oc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(r), null;
      case 1:
        return An(r.type) && Wr(), Ot(r), null;
      case 3:
        return o = r.stateNode, fo(), be(nt), be(Wn), Ac(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Nc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (Du(Fa), Fa = null))), ui(n, r), Ot(r), null;
      case 5:
        yd(r);
        var c = Eu(co.current);
        if (l = r.type, n !== null && r.stateNode != null) As(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(_(166));
            return Ot(r), null;
          }
          if (n = Eu(Si.current), Nc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[za] = r, o[Ts] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Kt("cancel", o), Kt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Wi.length; c++) Kt(Wi[c], o);
                break;
              case "source":
                Kt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  o
                ), Kt("load", o);
                break;
              case "details":
                Kt("toggle", o);
                break;
              case "input":
                Zn(o, d), Kt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Kt("invalid", o);
                break;
              case "textarea":
                ia(o, d), Kt("invalid", o);
            }
            Mt(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ss(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ss(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ze.hasOwnProperty(m) && E != null && m === "onScroll" && Kt("scroll", o);
            }
            switch (l) {
              case "input":
                Kn(o), Mn(o, d, !0);
                break;
              case "textarea":
                Kn(o), la(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = bc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Jn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[za] = r, n[Ts] = o, Ti(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Dn(l, o), l) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Wi.length; c++) Kt(Wi[c], n);
                  c = o;
                  break;
                case "source":
                  Kt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), c = o;
                  break;
                case "details":
                  Kt("toggle", n), c = o;
                  break;
                case "input":
                  Zn(n, o), c = Cn(n, o), Kt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = oe({}, o, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  ia(n, o), c = aa(n, o), Kt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Mt(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? ft(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ua(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && oa(n, T) : typeof T == "number" && oa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ze.hasOwnProperty(d) ? T != null && d === "onScroll" && Kt("scroll", n) : T != null && Xe(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Kn(n), Mn(n, o, !1);
                  break;
                case "textarea":
                  Kn(n), la(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ht(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pn(n, !!o.multiple, d, !1) : o.defaultValue != null && Pn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = bc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Ot(r), null;
      case 6:
        if (n && r.stateNode != null) xo(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(_(166));
          if (l = Eu(co.current), Eu(Si.current), Nc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[za] = r, (d = o.nodeValue !== l) && (n = va, n !== null)) switch (n.tag) {
              case 3:
                Ss(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ss(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[za] = r, r.stateNode = o;
        }
        return Ot(r), null;
      case 13:
        if (be(Sn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (on && ha !== null && r.mode & 1 && !(r.flags & 128)) Ov(), lo(), r.flags |= 98560, d = !1;
          else if (d = Nc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(_(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(_(317));
              d[za] = r;
            } else lo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Ot(r), d = !1;
          } else Fa !== null && (Du(Fa), Fa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Sn.current & 1 ? $n === 0 && ($n = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), Ot(r), null);
      case 4:
        return fo(), ui(n, r), n === null && hi(r.stateNode.containerInfo), Ot(r), null;
      case 10:
        return ma(r.type._context), Ot(r), null;
      case 17:
        return An(r.type) && Wr(), Ot(r), null;
      case 19:
        if (be(Sn), d = r.memoizedState, d === null) return Ot(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) br(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = xs(n), m !== null) {
              for (r.flags |= 128, br(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return zt(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Vt() > _u && (r.flags |= 128, o = !0, br(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = xs(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), br(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !on) return Ot(r), null;
          } else 2 * Vt() - d.renderingStartTime > _u && l !== 1073741824 && (r.flags |= 128, o = !0, br(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Vt(), r.sibling = null, l = Sn.current, zt(Sn, o ? l & 1 | 2 : l & 1), r) : (Ot(r), null);
      case 22:
      case 23:
        return Do(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Dr & 1073741824 && (Ot(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Ot(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, r.tag));
  }
  function ly(n, r) {
    switch (Oc(r), r.tag) {
      case 1:
        return An(r.type) && Wr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return fo(), be(nt), be(Wn), Ac(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return yd(r), null;
      case 13:
        if (be(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(_(340));
          lo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return be(Sn), null;
      case 4:
        return fo(), null;
      case 10:
        return ma(r.type._context), null;
      case 22:
      case 23:
        return Do(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zc = !1, Qn = !1, $v = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function wu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      xn(n, r, o);
    }
    else l.current = null;
  }
  function Md(n, r, l) {
    try {
      l();
    } catch (o) {
      xn(n, r, o);
    }
  }
  var Iv = !1;
  function zd(n, r) {
    if (nd = fu, n = mv(), ps(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, G = 0, q = n, W = null;
          t: for (; ; ) {
            for (var pe; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (T = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (pe = q.firstChild) !== null; )
              W = q, q = pe;
            for (; ; ) {
              if (q === n) break t;
              if (W === l && ++U === c && (E = m), W === d && ++G === o && (T = m), (pe = q.nextSibling) !== null) break;
              q = W, W = q.parentNode;
            }
            q = pe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (rd = { focusedElem: n, selectionRange: l }, fu = !1, me = r; me !== null; ) if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, me = n;
    else for (; me !== null; ) {
      r = me;
      try {
        var Se = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Se !== null) {
              var we = Se.memoizedProps, Ln = Se.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? we : Kr(r.type, we), Ln);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(_(163));
        }
      } catch (J) {
        xn(r, r.return, J);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, me = n;
        break;
      }
      me = r.return;
    }
    return Se = Iv, Iv = !1, Se;
  }
  function js(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Md(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Fs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ud(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ad(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ad(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[za], delete r[Ts], delete r[ud], delete r[Zm], delete r[Jm])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Yv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function jd(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Yv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Fd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = bc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Fd(n, r, l), n = n.sibling; n !== null; ) Fd(n, r, l), n = n.sibling;
  }
  function Hs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Hs(n, r, l), n = n.sibling; n !== null; ) Hs(n, r, l), n = n.sibling;
  }
  var Fn = null, Gn = !1;
  function _r(n, r, l) {
    for (l = l.child; l !== null; ) tl(n, r, l), l = l.sibling;
  }
  function tl(n, r, l) {
    if (Br && typeof Br.onCommitFiberUnmount == "function") try {
      Br.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Qn || wu(l, r);
      case 6:
        var o = Fn, c = Gn;
        Fn = null, _r(n, r, l), Fn = o, Gn = c, Fn !== null && (Gn ? (n = Fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Fn.removeChild(l.stateNode));
        break;
      case 18:
        Fn !== null && (Gn ? (n = Fn, l = l.stateNode, n.nodeType === 8 ? ld(n.parentNode, l) : n.nodeType === 1 && ld(n, l), Ma(n)) : ld(Fn, l.stateNode));
        break;
      case 4:
        o = Fn, c = Gn, Fn = l.stateNode.containerInfo, Gn = !0, _r(n, r, l), Fn = o, Gn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Md(l, r, m), c = c.next;
          } while (c !== o);
        }
        _r(n, r, l);
        break;
      case 1:
        if (!Qn && (wu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          xn(l, r, E);
        }
        _r(n, r, l);
        break;
      case 21:
        _r(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Qn = (o = Qn) || l.memoizedState !== null, _r(n, r, l), Qn = o) : _r(n, r, l);
        break;
      default:
        _r(n, r, l);
    }
  }
  function bo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new $v()), r.forEach(function(o) {
        var c = $d.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function kr(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              Fn = E.stateNode, Gn = !1;
              break e;
            case 3:
              Fn = E.stateNode.containerInfo, Gn = !0;
              break e;
            case 4:
              Fn = E.stateNode.containerInfo, Gn = !0;
              break e;
          }
          E = E.return;
        }
        if (Fn === null) throw Error(_(160));
        tl(d, m, c), Fn = null, Gn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        xn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) nl(r, n), r = r.sibling;
  }
  function nl(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (kr(r, n), wi(n), o & 4) {
          try {
            js(3, n, n.return), Fs(3, n);
          } catch (we) {
            xn(n, n.return, we);
          }
          try {
            js(5, n, n.return);
          } catch (we) {
            xn(n, n.return, we);
          }
        }
        break;
      case 1:
        kr(r, n), wi(n), o & 512 && l !== null && wu(l, l.return);
        break;
      case 5:
        if (kr(r, n), wi(n), o & 512 && l !== null && wu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            oa(c, "");
          } catch (we) {
            xn(n, n.return, we);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), Dn(E, m);
            var U = Dn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var G = T[m], q = T[m + 1];
              G === "style" ? ft(c, q) : G === "dangerouslySetInnerHTML" ? ua(c, q) : G === "children" ? oa(c, q) : Xe(c, G, q, U);
            }
            switch (E) {
              case "input":
                kn(c, d);
                break;
              case "textarea":
                vr(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var pe = d.value;
                pe != null ? Pn(c, !!d.multiple, pe, !1) : W !== !!d.multiple && (d.defaultValue != null ? Pn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[Ts] = d;
          } catch (we) {
            xn(n, n.return, we);
          }
        }
        break;
      case 6:
        if (kr(r, n), wi(n), o & 4) {
          if (n.stateNode === null) throw Error(_(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            xn(n, n.return, we);
          }
        }
        break;
      case 3:
        if (kr(r, n), wi(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ma(r.containerInfo);
        } catch (we) {
          xn(n, n.return, we);
        }
        break;
      case 4:
        kr(r, n), wi(n);
        break;
      case 13:
        kr(r, n), wi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || ($s = Vt())), o & 4 && bo(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Qn = (U = Qn) || G, kr(r, n), Qn = U) : kr(r, n), wi(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !G && n.mode & 1) for (me = n, G = n.child; G !== null; ) {
            for (q = me = G; me !== null; ) {
              switch (W = me, pe = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, W, W.return);
                  break;
                case 1:
                  wu(W, W.return);
                  var Se = W.stateNode;
                  if (typeof Se.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, Se.props = r.memoizedProps, Se.state = r.memoizedState, Se.componentWillUnmount();
                    } catch (we) {
                      xn(o, l, we);
                    }
                  }
                  break;
                case 5:
                  wu(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    _o(q);
                    continue;
                  }
              }
              pe !== null ? (pe.return = W, me = pe) : _o(q);
            }
            G = G.sibling;
          }
          e: for (G = null, q = n; ; ) {
            if (q.tag === 5) {
              if (G === null) {
                G = q;
                try {
                  c = q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Le("display", m));
                } catch (we) {
                  xn(n, n.return, we);
                }
              }
            } else if (q.tag === 6) {
              if (G === null) try {
                q.stateNode.nodeValue = U ? "" : q.memoizedProps;
              } catch (we) {
                xn(n, n.return, we);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              G === q && (G = null), q = q.return;
            }
            G === q && (G = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        kr(r, n), wi(n), o & 4 && bo(n);
        break;
      case 21:
        break;
      default:
        kr(
          r,
          n
        ), wi(n);
    }
  }
  function wi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Yv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(_(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (oa(c, ""), o.flags &= -33);
            var d = jd(n);
            Hs(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = jd(n);
            Fd(n, E, m);
            break;
          default:
            throw Error(_(161));
        }
      } catch (T) {
        xn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function uy(n, r, l) {
    me = n, Wv(n);
  }
  function Wv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Zc;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Qn;
          E = Zc;
          var U = Qn;
          if (Zc = m, (Qn = T) && !U) for (me = c; me !== null; ) m = me, T = m.child, m.tag === 22 && m.memoizedState !== null ? Qv(c) : T !== null ? (T.return = m, me = T) : Qv(c);
          for (; d !== null; ) me = d, Wv(d), d = d.sibling;
          me = c, Zc = E, Qn = U;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; me !== null; ) {
      var r = me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Qn || Fs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Qn) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : Kr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && zv(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                zv(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var G = U.memoizedState;
                  if (G !== null) {
                    var q = G.dehydrated;
                    q !== null && Ma(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
          Qn || r.flags & 512 && Ud(r);
        } catch (W) {
          xn(r, r.return, W);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function _o(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Qv(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Fs(4, r);
            } catch (T) {
              xn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                xn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Ud(r);
            } catch (T) {
              xn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ud(r);
            } catch (T) {
              xn(r, m, T);
            }
        }
      } catch (T) {
        xn(r, r.return, T);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var Gv = Math.ceil, Jc = je.ReactCurrentDispatcher, ko = je.ReactCurrentOwner, Ca = je.ReactCurrentBatchConfig, Lt = 0, Tn = null, hn = null, wn = 0, Dr = 0, xu = Zt(0), $n = 0, Vs = null, bu = 0, ef = 0, Ps = 0, Bs = null, rr = null, $s = 0, _u = 1 / 0, rl = null, tf = !1, Vd = null, Pl = null, Bl = !1, xi = null, $l = 0, Is = 0, Pd = null, Ys = -1, Ws = 0;
  function Xn() {
    return Lt & 6 ? Vt() : Ys !== -1 ? Ys : Ys = Vt();
  }
  function oi(n) {
    return n.mode & 1 ? Lt & 2 && wn !== 0 ? wn & -wn : ey.transition !== null ? (Ws === 0 && (Ws = lu()), Ws) : (n = Et, n !== 0 || (n = window.event, n = n === void 0 ? 16 : is(n.type)), n) : 1;
  }
  function Pa(n, r, l, o) {
    if (50 < Is) throw Is = 0, Pd = null, Error(_(185));
    Cl(n, l, o), (!(Lt & 2) || n !== Tn) && (n === Tn && (!(Lt & 2) && (ef |= l), $n === 4 && bi(n, wn)), rn(n, o), l === 1 && Lt === 0 && !(r.mode & 1) && (_u = Vt() + 500, Ol && gi()));
  }
  function rn(n, r) {
    var l = n.callbackNode;
    El(n, r);
    var o = di(n, n === Tn ? wn : 0);
    if (o === 0) l !== null && qt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && qt(l), r === 1) n.tag === 0 ? Dv(nf.bind(null, n)) : kc(nf.bind(null, n)), _v(function() {
        !(Lt & 6) && gi();
      }), l = null;
      else {
        switch (ns(o)) {
          case 1:
            l = Un;
            break;
          case 4:
            l = Pr;
            break;
          case 16:
            l = lt;
            break;
          case 536870912:
            l = ji;
            break;
          default:
            l = lt;
        }
        l = rh(l, ku.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ku(n, r) {
    if (Ys = -1, Ws = 0, Lt & 6) throw Error(_(327));
    var l = n.callbackNode;
    if (Lo() && n.callbackNode !== l) return null;
    var o = di(n, n === Tn ? wn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Oo(n, o);
    else {
      r = o;
      var c = Lt;
      Lt |= 2;
      var d = qv();
      (Tn !== n || wn !== r) && (rl = null, _u = Vt() + 500, Il(n, r));
      do
        try {
          cy();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (!0);
      Ha(), Jc.current = d, Lt = c, hn !== null ? r = 0 : (Tn = null, wn = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = pi(n), c !== 0 && (o = c, r = Qs(n, c))), r === 1) throw l = Vs, Il(n, 0), bi(n, o), rn(n, Vt()), l;
      if (r === 6) bi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !oy(c) && (r = Oo(n, o), r === 2 && (d = pi(n), d !== 0 && (o = d, r = Qs(n, d))), r === 1)) throw l = Vs, Il(n, 0), bi(n, o), rn(n, Vt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            Nu(n, rr, rl);
            break;
          case 3:
            if (bi(n, o), (o & 130023424) === o && (r = $s + 500 - Vt(), 10 < r)) {
              if (di(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Xn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Es(Nu.bind(null, n, rr, rl), r);
              break;
            }
            Nu(n, rr, rl);
            break;
          case 4:
            if (bi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Rr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Vt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Gv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Es(Nu.bind(null, n, rr, rl), o);
              break;
            }
            Nu(n, rr, rl);
            break;
          case 5:
            Nu(n, rr, rl);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return rn(n, Vt()), n.callbackNode === l ? ku.bind(null, n) : null;
  }
  function Qs(n, r) {
    var l = Bs;
    return n.current.memoizedState.isDehydrated && (Il(n, r).flags |= 256), n = Oo(n, r), n !== 2 && (r = rr, rr = l, r !== null && Du(r)), n;
  }
  function Du(n) {
    rr === null ? rr = n : rr.push.apply(rr, n);
  }
  function oy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function bi(n, r) {
    for (r &= ~Ps, r &= ~ef, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Rr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function nf(n) {
    if (Lt & 6) throw Error(_(327));
    Lo();
    var r = di(n, 0);
    if (!(r & 1)) return rn(n, Vt()), null;
    var l = Oo(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = pi(n);
      o !== 0 && (r = o, l = Qs(n, o));
    }
    if (l === 1) throw l = Vs, Il(n, 0), bi(n, r), rn(n, Vt()), l;
    if (l === 6) throw Error(_(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, rr, rl), rn(n, Vt()), null;
  }
  function Ou(n, r) {
    var l = Lt;
    Lt |= 1;
    try {
      return n(r);
    } finally {
      Lt = l, Lt === 0 && (_u = Vt() + 500, Ol && gi());
    }
  }
  function Lu(n) {
    xi !== null && xi.tag === 0 && !(Lt & 6) && Lo();
    var r = Lt;
    Lt |= 1;
    var l = Ca.transition, o = Et;
    try {
      if (Ca.transition = null, Et = 1, n) return n();
    } finally {
      Et = o, Ca.transition = l, Lt = r, !(Lt & 6) && gi();
    }
  }
  function Do() {
    Dr = xu.current, be(xu);
  }
  function Il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Cs(l)), hn !== null) for (l = hn.return; l !== null; ) {
      var o = l;
      switch (Oc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Wr();
          break;
        case 3:
          fo(), be(nt), be(Wn), Ac();
          break;
        case 5:
          yd(o);
          break;
        case 4:
          fo();
          break;
        case 13:
          be(Sn);
          break;
        case 19:
          be(Sn);
          break;
        case 10:
          ma(o.type._context);
          break;
        case 22:
        case 23:
          Do();
      }
      l = l.return;
    }
    if (Tn = n, hn = n = Yl(n.current, null), wn = Dr = r, $n = 0, Vs = null, Ps = ef = bu = 0, rr = Bs = null, Su !== null) {
      for (r = 0; r < Su.length; r++) if (l = Su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Su = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = hn;
      try {
        if (Ha(), jc.current = Ci, sn) {
          for (var o = le.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          sn = !1;
        }
        if (Ji = 0, et = Ae = le = null, qr = !1, po = 0, ko.current = null, l === null || l.return === null) {
          $n = 1, Vs = r, hn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = wn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, G = E, q = G.tag;
            if (!(G.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var pe = Ns(m);
            if (pe !== null) {
              pe.flags &= -257, Pv(pe, m, E, d, r), pe.mode & 1 && Vv(d, U, r), r = pe, T = U;
              var Se = r.updateQueue;
              if (Se === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(T), r.updateQueue = we;
              } else Se.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Vv(d, U, r), Bd();
                break e;
              }
              T = Error(_(426));
            }
          } else if (on && E.mode & 1) {
            var Ln = Ns(m);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), Pv(Ln, m, E, d, r), jn(Co(T, E));
              break e;
            }
          }
          d = T = Co(T, E), $n !== 4 && ($n = 2), Bs === null ? Bs = [d] : Bs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = _d(d, T, r);
                Mv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Pl === null || !Pl.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = Hv(d, E, r);
                  Mv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Zv(l);
      } catch (_e) {
        r = _e, hn === l && l !== null && (hn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qv() {
    var n = Jc.current;
    return Jc.current = Ci, n === null ? Ci : n;
  }
  function Bd() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), Tn === null || !(bu & 268435455) && !(ef & 268435455) || bi(Tn, wn);
  }
  function Oo(n, r) {
    var l = Lt;
    Lt |= 2;
    var o = qv();
    (Tn !== n || wn !== r) && (rl = null, Il(n, r));
    do
      try {
        sy();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (!0);
    if (Ha(), Lt = l, Jc.current = o, hn !== null) throw Error(_(261));
    return Tn = null, wn = 0, $n;
  }
  function sy() {
    for (; hn !== null; ) Kv(hn);
  }
  function cy() {
    for (; hn !== null && !vn(); ) Kv(hn);
  }
  function Kv(n) {
    var r = nh(n.alternate, n, Dr);
    n.memoizedProps = n.pendingProps, r === null ? Zv(n) : hn = r, ko.current = null;
  }
  function Zv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ly(l, r), l !== null) {
          l.flags &= 32767, hn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $n = 6, hn = null;
          return;
        }
      } else if (l = iy(l, r, Dr), l !== null) {
        hn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        hn = r;
        return;
      }
      hn = r = n;
    } while (r !== null);
    $n === 0 && ($n = 5);
  }
  function Nu(n, r, l) {
    var o = Et, c = Ca.transition;
    try {
      Ca.transition = null, Et = 1, Jv(n, r, l, o);
    } finally {
      Ca.transition = c, Et = o;
    }
    return null;
  }
  function Jv(n, r, l, o) {
    do
      Lo();
    while (xi !== null);
    if (Lt & 6) throw Error(_(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(_(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (es(n, d), n === Tn && (hn = Tn = null, wn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Bl || (Bl = !0, rh(lt, function() {
      return Lo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ca.transition, Ca.transition = null;
      var m = Et;
      Et = 1;
      var E = Lt;
      Lt |= 4, ko.current = null, zd(n, l), nl(l, n), du(rd), fu = !!nd, rd = nd = null, n.current = l, uy(l), mr(), Lt = E, Et = m, Ca.transition = d;
    } else n.current = l;
    if (Bl && (Bl = !1, xi = n, $l = c), d = n.pendingLanes, d === 0 && (Pl = null), qo(l.stateNode), rn(n, Vt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (tf) throw tf = !1, n = Vd, Vd = null, n;
    return $l & 1 && n.tag !== 0 && Lo(), d = n.pendingLanes, d & 1 ? n === Pd ? Is++ : (Is = 0, Pd = n) : Is = 0, gi(), null;
  }
  function Lo() {
    if (xi !== null) {
      var n = ns($l), r = Ca.transition, l = Et;
      try {
        if (Ca.transition = null, Et = 16 > n ? 16 : n, xi === null) var o = !1;
        else {
          if (n = xi, xi = null, $l = 0, Lt & 6) throw Error(_(331));
          var c = Lt;
          for (Lt |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (me = U; me !== null; ) {
                    var G = me;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, G, d);
                    }
                    var q = G.child;
                    if (q !== null) q.return = G, me = q;
                    else for (; me !== null; ) {
                      G = me;
                      var W = G.sibling, pe = G.return;
                      if (Ad(G), G === U) {
                        me = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = pe, me = W;
                        break;
                      }
                      me = pe;
                    }
                  }
                }
                var Se = d.alternate;
                if (Se !== null) {
                  var we = Se.child;
                  if (we !== null) {
                    Se.child = null;
                    do {
                      var Ln = we.sibling;
                      we.sibling = null, we = Ln;
                    } while (we !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, me = m;
            else e: for (; me !== null; ) {
              if (d = me, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  js(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, me = D;
                break e;
              }
              me = d.return;
            }
          }
          var x = n.current;
          for (me = x; me !== null; ) {
            m = me;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, me = N;
            else e: for (m = x; me !== null; ) {
              if (E = me, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fs(9, E);
                }
              } catch (_e) {
                xn(E, E.return, _e);
              }
              if (E === m) {
                me = null;
                break e;
              }
              var J = E.sibling;
              if (J !== null) {
                J.return = E.return, me = J;
                break e;
              }
              me = E.return;
            }
          }
          if (Lt = c, gi(), Br && typeof Br.onPostCommitFiberRoot == "function") try {
            Br.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Et = l, Ca.transition = r;
      }
    }
    return !1;
  }
  function eh(n, r, l) {
    r = Co(l, r), r = _d(n, r, 1), n = ga(n, r, 1), r = Xn(), n !== null && (Cl(n, 1, r), rn(n, r));
  }
  function xn(n, r, l) {
    if (n.tag === 3) eh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        eh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pl === null || !Pl.has(o))) {
          n = Co(l, n), n = Hv(r, n, 1), r = ga(r, n, 1), n = Xn(), r !== null && (Cl(r, 1, n), rn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function fy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Xn(), n.pingedLanes |= n.suspendedLanes & l, Tn === n && (wn & l) === l && ($n === 4 || $n === 3 && (wn & 130023424) === wn && 500 > Vt() - $s ? Il(n, 0) : Ps |= l), rn(n, r);
  }
  function th(n, r) {
    r === 0 && (n.mode & 1 ? (r = Qu, Qu <<= 1, !(Qu & 130023424) && (Qu = 4194304)) : r = 1);
    var l = Xn();
    n = Zi(n, r), n !== null && (Cl(n, r, l), rn(n, l));
  }
  function dy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), th(n, l);
  }
  function $d(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(_(314));
    }
    o !== null && o.delete(r), th(n, l);
  }
  var nh;
  nh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || nt.current) wr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return wr = !1, Ea(n, r, l);
      wr = !!(n.flags & 131072);
    }
    else wr = !1, on && r.flags & 1048576 && Nl(r, yu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Us(n, r), n = r.pendingProps;
        var c = pa(r, Wn.current);
        oo(r, l), c = bs(null, r, o, n, c, l);
        var d = Y();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, An(o) ? (d = !0, mu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, vd(r), c.updater = jl, r.stateNode = c, c._reactInternals = r, wd(r, o, n, l), r = To(null, r, o, !0, d, l)) : (r.tag = 0, on && d && Dc(r), xr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Us(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = vy(o), n = Kr(o, n), c) {
            case 0:
              r = Vl(null, r, o, n, l);
              break e;
            case 1:
              r = ut(null, r, o, n, l);
              break e;
            case 11:
              r = Fl(null, r, o, n, l);
              break e;
            case 14:
              r = Ro(null, r, o, Kr(o.type, n), l);
              break e;
          }
          throw Error(_(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), Vl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), ut(n, r, o, c, l);
      case 3:
        e: {
          if (kd(r), n === null) throw Error(_(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, hd(n, r), Uc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Co(Error(_(423)), r), r = ry(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Co(Error(_(424)), r), r = ry(n, r, o, l, c);
            break e;
          } else for (ha = da(r.stateNode.containerInfo.firstChild), va = r, on = !0, Fa = null, l = Nv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (lo(), o === c) {
              r = Ri(n, r, l);
              break e;
            }
            xr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Uv(r), n === null && Lc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, hu(o, c) ? m = null : d !== null && hu(o, d) && (r.flags |= 32), Zr(n, r), xr(n, r, m, l), r.child;
      case 6:
        return n === null && Lc(r), null;
      case 13:
        return wo(n, r, l);
      case 4:
        return md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ul(r, null, o, l) : xr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), Fl(n, r, o, c, l);
      case 7:
        return xr(n, r, r.pendingProps, l), r.child;
      case 8:
        return xr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return xr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, zt(Mc, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !nt.current) {
              r = Ri(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = ya(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var G = U.pending;
                      G === null ? T.next = T : (T.next = G.next, G.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), dd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(_(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), dd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          xr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, oo(r, l), c = Va(c), o = o(c), r.flags |= 1, xr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Kr(o, r.pendingProps), c = Kr(o.type, c), Ro(n, r, o, c, l);
      case 15:
        return Hl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), Us(n, r), r.tag = 1, An(o) ? (n = !0, mu(r)) : n = !1, oo(r, l), jv(r, o, c), wd(r, o, c, l), To(null, r, o, !0, n, l);
      case 19:
        return Nd(n, r, l);
      case 22:
        return qc(n, r, l);
    }
    throw Error(_(156, r.tag));
  };
  function rh(n, r) {
    return zn(n, r);
  }
  function py(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ra(n, r, l, o) {
    return new py(n, r, l, o);
  }
  function Id(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function vy(n) {
    if (typeof n == "function") return Id(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === mt) return 11;
      if (n === ot) return 14;
    }
    return 2;
  }
  function Yl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ra(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function rf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Id(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case vt:
        return Mu(l.children, c, d, r);
      case qe:
        m = 8, c |= 8;
        break;
      case fn:
        return n = Ra(12, l, r, c | 2), n.elementType = fn, n.lanes = d, n;
      case an:
        return n = Ra(13, l, r, c), n.elementType = an, n.lanes = d, n;
      case We:
        return n = Ra(19, l, r, c), n.elementType = We, n.lanes = d, n;
      case st:
        return af(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case dn:
            m = 10;
            break e;
          case jt:
            m = 9;
            break e;
          case mt:
            m = 11;
            break e;
          case ot:
            m = 14;
            break e;
          case kt:
            m = 16, o = null;
            break e;
        }
        throw Error(_(130, n == null ? n : typeof n, ""));
    }
    return r = Ra(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Mu(n, r, l, o) {
    return n = Ra(7, n, o, r), n.lanes = l, n;
  }
  function af(n, r, l, o) {
    return n = Ra(22, n, o, r), n.elementType = st, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Yd(n, r, l) {
    return n = Ra(6, n, null, r), n.lanes = l, n;
  }
  function lf(n, r, l) {
    return r = Ra(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Wd(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function zu(n, r, l, o, c, d, m, E, T) {
    return n = new Wd(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ra(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vd(d), n;
  }
  function hy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Qd(n) {
    if (!n) return Ua;
    n = n._reactInternals;
    e: {
      if (X(n) !== n || n.tag !== 1) throw Error(_(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (An(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(_(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (An(l)) return Dl(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = zu(l, o, !0, n, c, d, m, E, T), n.context = Qd(null), l = n.current, o = Xn(), c = oi(l), d = ya(o, c), d.callback = r ?? null, ga(l, d, c), n.current.lanes = c, Cl(n, c, o), rn(n, o), n;
  }
  function Gs(n, r, l, o) {
    var c = r.current, d = Xn(), m = oi(c);
    return l = Qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ya(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ga(c, r, m), n !== null && (Pa(n, c, m, d), zc(n, c, m)), m;
  }
  function uf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Xd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function qd(n, r) {
    Xd(n, r), (n = n.alternate) && Xd(n, r);
  }
  function my() {
    return null;
  }
  var ah = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function of(n) {
    this._internalRoot = n;
  }
  Xs.prototype.render = of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(_(409));
    Gs(n, r, null, null);
  }, Xs.prototype.unmount = of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        Gs(null, n, null, null);
      }), r[ni] = null;
    }
  };
  function Xs(n) {
    this._internalRoot = n;
  }
  Xs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ct();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ln.length && r !== 0 && r < ln[l].priority; l++) ;
      ln.splice(l, 0, n), l === 0 && Ja(n);
    }
  };
  function sf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function al(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ih() {
  }
  function yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = uf(m);
          d.call(U);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", ih);
      return n._reactRootContainer = m, n[ni] = m.current, hi(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = uf(T);
        E.call(U);
      };
    }
    var T = zu(n, 0, !1, null, null, !1, !1, "", ih);
    return n._reactRootContainer = T, n[ni] = T.current, hi(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      Gs(r, T, l, o);
    }), T;
  }
  function cf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = uf(m);
          E.call(T);
        };
      }
      Gs(r, m, n, c);
    } else m = yy(l, r, n, c, o);
    return uf(m);
  }
  Gu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Fi(r.pendingLanes);
          l !== 0 && (ts(r, l | 1), rn(r, Vt()), !(Lt & 6) && (_u = Vt() + 500, gi()));
        }
        break;
      case 13:
        Lu(function() {
          var o = Zi(n, 1);
          if (o !== null) {
            var c = Xn();
            Pa(o, n, 1, c);
          }
        }), qd(n, 1);
    }
  }, Rl = function(n) {
    if (n.tag === 13) {
      var r = Zi(n, 134217728);
      if (r !== null) {
        var l = Xn();
        Pa(r, n, 134217728, l);
      }
      qd(n, 134217728);
    }
  }, rs = function(n) {
    if (n.tag === 13) {
      var r = oi(n), l = Zi(n, r);
      if (l !== null) {
        var o = Xn();
        Pa(l, n, r, o);
      }
      qd(n, r);
    }
  }, Ct = function() {
    return Et;
  }, Xu = function(n, r) {
    var l = Et;
    try {
      return Et = n, r();
    } finally {
      Et = l;
    }
  }, It = function(n, r, l) {
    switch (r) {
      case "input":
        if (kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = _c(o);
              if (!c) throw Error(_(90));
              Hr(o), kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        vr(n, l);
        break;
      case "select":
        r = l.value, r != null && Pn(n, !!l.multiple, r, !1);
    }
  }, ml = Ou, ru = Lu;
  var gy = { usingClientEntryPoint: !1, Events: [mi, io, _c, Xa, ka, Ou] }, qs = { findFiberByHostInstance: Xi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: qs.bundleType, version: qs.version, rendererPackageName: qs.rendererPackageName, rendererConfig: qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Be(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: qs.findFiberByHostInstance || my, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber) try {
      Sl = Ks.inject(Sy), Br = Ks;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sf(r)) throw Error(_(200));
    return hy(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!sf(n)) throw Error(_(299));
    var l = !1, o = "", c = ah;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = zu(n, 1, !1, null, null, l, !1, o, c), n[ni] = r.current, hi(n.nodeType === 8 ? n.parentNode : n), new of(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(_(188)) : (n = Object.keys(n).join(","), Error(_(268, n)));
    return n = Be(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Lu(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!al(r)) throw Error(_(200));
    return cf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!sf(n)) throw Error(_(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = ah;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[ni] = r.current, hi(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Xs(r);
  }, Qa.render = function(n, r, l) {
    if (!al(r)) throw Error(_(200));
    return cf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!al(n)) throw Error(_(40));
    return n._reactRootContainer ? (Lu(function() {
      cf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ni] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = Ou, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!al(l)) throw Error(_(200));
    if (n == null || n._reactInternals === void 0) throw Error(_(38));
    return cf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ga = {}, uR;
function fk() {
  if (uR) return Ga;
  uR = 1;
  var j = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return j.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var I = Pe, _ = sR(), de = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ze = !1;
    function Ye(e) {
      Ze = e;
    }
    function Me(e) {
      if (!Ze) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ze("warn", e, a);
      }
    }
    function S(e) {
      if (!Ze) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ze("error", e, a);
      }
    }
    function ze(e, t, a) {
      {
        var i = de.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var xe = 0, ae = 1, Ue = 2, te = 3, Te = 4, ee = 5, ne = 6, tt = 7, _n = 8, en = 9, Xe = 10, je = 11, Tt = 12, Ce = 13, vt = 14, qe = 15, fn = 16, dn = 17, jt = 18, mt = 19, an = 21, We = 22, ot = 23, kt = 24, st = 25, B = !0, ge = !1, oe = !1, k = !1, $ = !1, Ne = !0, Qe = !1, it = !0, ct = !0, St = !0, ht = !0, wt = /* @__PURE__ */ new Set(), $t = {}, Kn = {};
    function Hr(e, t) {
      dr(e, t), dr(e + "Capture", t);
    }
    function dr(e, t) {
      $t[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), $t[e] = t;
      {
        var a = e.toLowerCase();
        Kn[a] = e, e === "onDoubleClick" && (Kn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        wt.add(t[i]);
    }
    var Cn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Zn = Object.prototype.hasOwnProperty;
    function Vn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function kn(e) {
      try {
        return Mn(e), !1;
      } catch {
        return !0;
      }
    }
    function Mn(e) {
      return "" + e;
    }
    function Sr(e, t) {
      if (kn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), Mn(e);
    }
    function pr(e) {
      if (kn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), Mn(e);
    }
    function Pn(e, t) {
      if (kn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), Mn(e);
    }
    function aa(e, t) {
      if (kn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), Mn(e);
    }
    function ia(e) {
      if (kn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), Mn(e);
    }
    function vr(e) {
      if (kn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Vn(e)), Mn(e);
    }
    var la = 0, Jn = 1, Er = 2, pn = 3, ua = 4, oa = 5, sa = 6, ie = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Le = ie + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ft = new RegExp("^[" + ie + "][" + Le + "]*$"), Ft = {}, Mt = {};
    function Dn(e) {
      return Zn.call(Mt, e) ? !0 : Zn.call(Ft, e) ? !1 : ft.test(e) ? (Mt[e] = !0, !0) : (Ft[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function mn(e, t, a) {
      return t !== null ? t.type === la : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function hr(e, t, a, i) {
      if (a !== null && a.type === la)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function It(e, t, a, i) {
      if (t === null || typeof t > "u" || hr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case pn:
            return !t;
          case ua:
            return t === !1;
          case oa:
            return isNaN(t);
          case sa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Yn(e) {
      return tn.hasOwnProperty(e) ? tn[e] : null;
    }
    function Ht(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Er || t === pn || t === ua, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var tn = {}, Xa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Xa.forEach(function(e) {
      tn[e] = new Ht(
        e,
        la,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      tn[t] = new Ht(
        t,
        Jn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      tn[e] = new Ht(
        e,
        Er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      tn[e] = new Ht(
        e,
        Er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      tn[e] = new Ht(
        e,
        pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      tn[e] = new Ht(
        e,
        pn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      tn[e] = new Ht(
        e,
        ua,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      tn[e] = new Ht(
        e,
        sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      tn[e] = new Ht(
        e,
        oa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, ml = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, ml);
      tn[t] = new Ht(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, ml);
      tn[t] = new Ht(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, ml);
      tn[t] = new Ht(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      tn[e] = new Ht(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ru = "xlinkHref";
    tn[ru] = new Ht(
      "xlinkHref",
      Jn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      tn[e] = new Ht(
        e,
        Jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var au = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, yl = !1;
    function qa(e) {
      !yl && au.test(e) && (yl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ka(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Sr(a, t), i.sanitizeURL && qa("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ua) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : It(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (It(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === pn)
            return a;
          f = e.getAttribute(s);
        }
        return It(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Da(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Sr(a, t), u === "" + a ? a : u;
      }
    }
    function zi(e, t, a, i) {
      var u = Yn(t);
      if (!mn(t, u, i)) {
        if (It(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Sr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === pn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === pn || b === ua && a === !0 ? w = "" : (Sr(a, y), w = "" + a, u.sanitizeURL && qa(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Cr = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), ca = Symbol.for("react.fragment"), Ui = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Q = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), yt = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), dt = Symbol.for("react.scope"), zn = Symbol.for("react.debug_trace_mode"), qt = Symbol.for("react.offscreen"), vn = Symbol.for("react.legacy_hidden"), mr = Symbol.for("react.cache"), Vt = Symbol.for("react.tracing_marker"), Oa = Symbol.iterator, Un = "@@iterator";
    function Pr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Oa && e[Oa] || e[Un];
      return typeof t == "function" ? t : null;
    }
    var lt = Object.assign, Ai = 0, ji, Sl, Br, qo, Rr, Ko, Zo;
    function Jo() {
    }
    Jo.__reactDisabledLog = !0;
    function iu() {
      {
        if (Ai === 0) {
          ji = console.log, Sl = console.info, Br = console.warn, qo = console.error, Rr = console.group, Ko = console.groupCollapsed, Zo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Jo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ai++;
      }
    }
    function Qu() {
      {
        if (Ai--, Ai === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, e, {
              value: ji
            }),
            info: lt({}, e, {
              value: Sl
            }),
            warn: lt({}, e, {
              value: Br
            }),
            error: lt({}, e, {
              value: qo
            }),
            group: lt({}, e, {
              value: Rr
            }),
            groupCollapsed: lt({}, e, {
              value: Ko
            }),
            groupEnd: lt({}, e, {
              value: Zo
            })
          });
        }
        Ai < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fi = de.ReactCurrentDispatcher, di;
    function La(e, t, a) {
      {
        if (di === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            di = i && i[1] || "";
          }
        return `
` + di + e;
      }
    }
    var El = !1, pi;
    {
      var lu = typeof WeakMap == "function" ? WeakMap : Map;
      pi = new lu();
    }
    function uu(e, t) {
      if (!e || El)
        return "";
      {
        var a = pi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      El = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Fi.current, Fi.current = null, iu();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && pi.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        El = !1, Fi.current = s, Qu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", z = w ? La(w) : "";
      return typeof e == "function" && pi.set(e, z), z;
    }
    function Cl(e, t, a) {
      return uu(e, !0);
    }
    function es(e, t, a) {
      return uu(e, !1);
    }
    function ts(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Et(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uu(e, ts(e));
      if (typeof e == "string")
        return La(e);
      switch (e) {
        case Fe:
          return La("Suspense");
        case yt:
          return La("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case X:
            return es(e.render);
          case xt:
            return Et(e.type, t, a);
          case Be: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Et(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ns(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ee:
          return La(e.type);
        case fn:
          return La("Lazy");
        case Ce:
          return La("Suspense");
        case mt:
          return La("SuspenseList");
        case xe:
        case Ue:
        case qe:
          return es(e.type);
        case je:
          return es(e.type.render);
        case ae:
          return Cl(e.type);
        default:
          return "";
      }
    }
    function Gu(e) {
      try {
        var t = "", a = e;
        do
          t += ns(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Rl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function rs(e) {
      return e.displayName || "Context";
    }
    function Ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ca:
          return "Fragment";
        case Vr:
          return "Portal";
        case gl:
          return "Profiler";
        case Ui:
          return "StrictMode";
        case Fe:
          return "Suspense";
        case yt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            var t = e;
            return rs(t) + ".Consumer";
          case R:
            var a = e;
            return rs(a._context) + ".Provider";
          case X:
            return Rl(e, e.render, "ForwardRef");
          case xt:
            var i = e.displayName || null;
            return i !== null ? i : Ct(e.type) || "Memo";
          case Be: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ct(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Xu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ou(e) {
      return e.displayName || "Context";
    }
    function Je(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case en:
          var i = a;
          return ou(i) + ".Consumer";
        case Xe:
          var u = a;
          return ou(u._context) + ".Provider";
        case jt:
          return "DehydratedFragment";
        case je:
          return Xu(a, a.render, "ForwardRef");
        case tt:
          return "Fragment";
        case ee:
          return a;
        case Te:
          return "Portal";
        case te:
          return "Root";
        case ne:
          return "Text";
        case fn:
          return Ct(a);
        case _n:
          return a === Ui ? "StrictMode" : "Mode";
        case We:
          return "Offscreen";
        case Tt:
          return "Profiler";
        case an:
          return "Scope";
        case Ce:
          return "Suspense";
        case mt:
          return "SuspenseList";
        case st:
          return "TracingMarker";
        case ae:
        case xe:
        case dn:
        case Ue:
        case vt:
        case qe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Za = de.ReactDebugCurrentFrame, yn = null, $r = !1;
    function Na() {
      {
        if (yn === null)
          return null;
        var e = yn._debugOwner;
        if (e !== null && typeof e < "u")
          return Je(e);
      }
      return null;
    }
    function Tl() {
      return yn === null ? "" : Gu(yn);
    }
    function ln() {
      Za.getCurrentStack = null, yn = null, $r = !1;
    }
    function gn(e) {
      Za.getCurrentStack = e === null ? null : Tl, yn = e, $r = !1;
    }
    function as() {
      return yn;
    }
    function er(e) {
      $r = e;
    }
    function Ir(e) {
      return "" + e;
    }
    function Ja(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return vr(e), e;
        default:
          return "";
      }
    }
    var qu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function su(e, t) {
      qu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function cu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function wl(e) {
      return e._valueTracker;
    }
    function Ma(e) {
      e._valueTracker = null;
    }
    function Hi(e) {
      var t = "";
      return e && (cu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function fu(e) {
      var t = cu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      vr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            vr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            vr(p), i = "" + p;
          },
          stopTracking: function() {
            Ma(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Vi(e) {
      wl(e) || (e._valueTracker = fu(e));
    }
    function Ku(e) {
      if (!e)
        return !1;
      var t = wl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Hi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function vi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Pi = !1, Zu = !1, is = !1, ei = !1;
    function Ju(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      su("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), Zu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Pi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), Pi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ja(t.value != null ? t.value : i),
        controlled: Ju(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && zi(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Ju(t);
        !a._wrapperState.controlled && i && !ei && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ei = !0), a._wrapperState.controlled && !i && !is && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), is = !0);
      }
      M(e, t);
      var u = Ja(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Ir(u)) : a.value !== Ir(u) && (a.value = Ir(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ge(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ge(a, t.type, Ja(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Ir(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Re(e, t) {
      var a = e;
      F(a, t), he(a, t);
    }
    function he(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Sr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Th(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ku(f), F(f, p);
          }
        }
      }
    }
    function Ge(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || vi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ir(e._wrapperState.initialValue) : e.defaultValue !== Ir(a) && (e.defaultValue = Ir(a)));
    }
    var pt = !1, Pt = !1, Yt = !1;
    function Wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? I.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pt || (Pt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Yt || (Yt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !pt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pt = !0);
    }
    function Qt(e, t) {
      t.value != null && e.setAttribute("value", Ir(Ja(t.value)));
    }
    var un = Array.isArray;
    function Dt(e) {
      return un(e);
    }
    var xl;
    xl = !1;
    function eo() {
      var e = Na();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ls = ["value", "defaultValue"];
    function us(e) {
      {
        su("select", e);
        for (var t = 0; t < ls.length; t++) {
          var a = ls[t];
          if (e[a] != null) {
            var i = Dt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, eo()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, eo());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Ir(Ja(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function os(e, t) {
      return lt({}, t, {
        value: void 0
      });
    }
    function ss(e, t) {
      var a = e;
      us(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !xl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), xl = !0);
    }
    function Pf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Hm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Jp(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var ev = !1;
    function Bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ir(a._wrapperState.initialValue)
      });
      return i;
    }
    function tv(e, t) {
      var a = e;
      su("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ev && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component"), ev = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Dt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ja(i)
      };
    }
    function nv(e, t) {
      var a = e, i = Ja(t.value), u = Ja(t.defaultValue);
      if (i != null) {
        var s = Ir(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Ir(u));
    }
    function yc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Vm(e, t) {
      nv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", Pm = "http://www.w3.org/1998/Math/MathML", gc = "http://www.w3.org/2000/svg";
    function $f(e) {
      switch (e) {
        case "svg":
          return gc;
        case "math":
          return Pm;
        default:
          return $i;
      }
    }
    function If(e, t) {
      return e == null || e === $i ? $f(t) : e === gc && t === "foreignObject" ? $i : e;
    }
    var Bm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Sc, rv = Bm(function(e, t) {
      if (e.namespaceURI === gc && !("innerHTML" in e)) {
        Sc = Sc || document.createElement("div"), Sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yr = 1, Ii = 3, Rn = 8, fa = 9, Yf = 11, cs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, av = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, to = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(to).forEach(function(e) {
      lv.forEach(function(t) {
        to[iv(t, e)] = to[e];
      });
    });
    function bl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(to.hasOwnProperty(e) && to[e]) ? t + "px" : (aa(t, e), ("" + t).trim());
    }
    var $m = /([A-Z])/g, Im = /^ms-/;
    function Ym(e) {
      return e.replace($m, "-$1").toLowerCase().replace(Im, "-ms-");
    }
    var Wf = function() {
    };
    {
      var uv = /^(?:webkit|moz|o)[A-Z]/, fs = /^-ms-/, ds = /-(.)/g, ov = /;\s*$/, Yi = {}, Qf = {}, Gf = !1, Ec = !1, Xf = function(e) {
        return e.replace(ds, function(t, a) {
          return a.toUpperCase();
        });
      }, sv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xf(e.replace(fs, "ms-"))
        ));
      }, cv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fv = function(e, t) {
        Qf.hasOwnProperty(t) && Qf[t] || (Qf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ov, "")));
      }, Wm = function(e, t) {
        Gf || (Gf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Qm = function(e, t) {
        Ec || (Ec = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Wf = function(e, t) {
        e.indexOf("-") > -1 ? sv(e) : uv.test(e) ? cv(e) : ov.test(t) && fv(e, t), typeof t == "number" && (isNaN(t) ? Wm(e, t) : isFinite(t) || Qm(e, t));
      };
    }
    var Gm = Wf;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ym(i)) + ":", t += bl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function dv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Gm(i, t[i]);
          var s = bl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ti(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function no(e) {
      var t = {};
      for (var a in e)
        for (var i = av[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function pv(e, t) {
      {
        if (!t)
          return;
        var a = no(e), i = no(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ti(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var vv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, hv = lt({
      menuitem: !0
    }, vv), mv = "__html";
    function ps(e, t) {
      if (t) {
        if (hv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(mv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function du(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Cc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, pu = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, _l = {}, vs = new RegExp("^(aria)-[" + Le + "]*$"), qf = new RegExp("^(aria)[A-Z][" + Le + "]*$");
    function yv(e, t) {
      {
        if (Zn.call(_l, t) && _l[t])
          return !0;
        if (qf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = pu.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _l[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), _l[t] = !0, !0;
        }
        if (vs.test(t)) {
          var u = t.toLowerCase(), s = pu.hasOwnProperty(u) ? u : null;
          if (s == null)
            return _l[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), _l[t] = !0, !0;
        }
      }
      return !0;
    }
    function Rc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = yv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ro(e, t) {
      du(e, t) || Rc(e, t);
    }
    var Tc = !1;
    function gv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Tc && (Tc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hs = function() {
    };
    {
      var yr = {}, Kf = /^on./, Sv = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + Le + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + Le + "]*$");
      hs = function(e, t, a, i) {
        if (Zn.call(yr, t) && yr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), yr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), yr[t] = !0, !0;
          if (Kf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), yr[t] = !0, !0;
        } else if (Kf.test(t))
          return Sv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), yr[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), yr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), yr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), yr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), yr[t] = !0, !0;
        var v = Yn(t), y = v !== null && v.type === la;
        if (Cc.hasOwnProperty(u)) {
          var g = Cc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), yr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), yr[t] = !0, !0;
        return typeof a == "boolean" && hr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), yr[t] = !0, !0) : y ? !0 : hr(t, a, v, !1) ? (yr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), yr[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = hs(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function kl(e, t, a) {
      du(e, t) || Rv(e, t, a);
    }
    var wc = 1, ms = 2, ys = 4, qm = wc | ms | ys, Wi = null;
    function Km(e) {
      Wi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Wi = e;
    }
    function Tv() {
      Wi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Wi = null;
    }
    function wv(e) {
      return e === Wi;
    }
    function Kt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var gs = null, Qi = null, hi = null;
    function Zf(e) {
      var t = zo(e);
      if (t) {
        if (typeof gs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Th(a);
          gs(t.stateNode, t.type, i);
        }
      }
    }
    function Jf(e) {
      gs = e;
    }
    function ao(e) {
      Qi ? hi ? hi.push(e) : hi = [e] : Qi = e;
    }
    function xc() {
      return Qi !== null || hi !== null;
    }
    function vu() {
      if (Qi) {
        var e = Qi, t = hi;
        if (Qi = null, hi = null, Zf(e), t)
          for (var a = 0; a < t.length; a++)
            Zf(t[a]);
      }
    }
    var ed = function(e, t) {
      return e(t);
    }, xv = function() {
    }, td = !1;
    function bv() {
      var e = xc();
      e && (xv(), vu());
    }
    function Ss(e, t, a) {
      if (td)
        return e(t, a);
      td = !0;
      try {
        return ed(e, t, a);
      } finally {
        td = !1, bv();
      }
    }
    function bc(e, t, a) {
      ed = e, xv = a;
    }
    function nd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function rd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && nd(t));
        default:
          return !1;
      }
    }
    function hu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Th(a);
      if (i === null)
        return null;
      var u = i[t];
      if (rd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Es = !1;
    if (Cn)
      try {
        var Cs = {};
        Object.defineProperty(Cs, "passive", {
          get: function() {
            Es = !0;
          }
        }), window.addEventListener("test", Cs, Cs), window.removeEventListener("test", Cs, Cs);
      } catch {
        Es = !1;
      }
    function ad(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var _v = ad;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var id = document.createElement("react");
      _v = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          id.removeEventListener(V, Ve, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Ve() {
          b = !0, H(), a.apply(i, se), w = !1;
        }
        var Oe, _t = !1, gt = !1;
        function O(L) {
          if (Oe = L.error, _t = !0, Oe === null && L.colno === 0 && L.lineno === 0 && (gt = !0), L.defaultPrevented && Oe != null && typeof Oe == "object")
            try {
              Oe._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), id.addEventListener(V, Ve, !1), g.initEvent(V, !1, !1), id.dispatchEvent(g), A && Object.defineProperty(window, "event", A), b && w && (_t ? gt && (Oe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Oe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Oe)), window.removeEventListener("error", O), !b)
          return H(), ad.apply(this, arguments);
      };
    }
    var ld = _v, da = !1, Rs = null, Gi = !1, za = null, Ts = {
      onError: function(e) {
        da = !0, Rs = e;
      }
    };
    function ni(e, t, a, i, u, s, f, p, v) {
      da = !1, Rs = null, ld.apply(Ts, arguments);
    }
    function ud(e, t, a, i, u, s, f, p, v) {
      if (ni.apply(this, arguments), da) {
        var y = Xi();
        Gi || (Gi = !0, za = y);
      }
    }
    function Zm() {
      if (Gi) {
        var e = za;
        throw Gi = !1, za = null, e;
      }
    }
    function Jm() {
      return da;
    }
    function Xi() {
      if (da) {
        var e = Rs;
        return da = !1, Rs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mi(e) {
      return e._reactInternals;
    }
    function io(e) {
      return e._reactInternals !== void 0;
    }
    function _c(e, t) {
      e._reactInternals = t;
    }
    var He = (
      /*                      */
      0
    ), ri = (
      /*                */
      1
    ), Zt = (
      /*                    */
      2
    ), be = (
      /*                       */
      4
    ), zt = (
      /*                */
      16
    ), Ua = (
      /*                 */
      32
    ), Wn = (
      /*                     */
      64
    ), nt = (
      /*                   */
      128
    ), Tr = (
      /*            */
      256
    ), pa = (
      /*                          */
      512
    ), An = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), yi = (
      /*                    */
      4096
    ), Dl = (
      /*                   */
      8192
    ), mu = (
      /*             */
      16384
    ), kv = Wr | be | Wn | pa | An | mu, qi = (
      /*               */
      32767
    ), Ol = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), kc = (
      /* */
      131072
    ), Dv = (
      /*                       */
      1048576
    ), gi = (
      /*                    */
      2097152
    ), Aa = (
      /*                 */
      4194304
    ), Ll = (
      /*                */
      8388608
    ), ja = (
      /*               */
      16777216
    ), yu = (
      /*              */
      33554432
    ), Qr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      be | An | 0
    ), Gr = Zt | be | zt | Ua | pa | yi | Dl, ai = be | Wn | pa | Dl, Xr = Wr | zt, nr = Aa | Ll | gi, gu = de.ReactCurrentOwner;
    function Nl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Zt | yi)) !== He && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Dc(e) {
      if (e.tag === Ce) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Oc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function va(e) {
      return Nl(e) === e;
    }
    function ha(e) {
      {
        var t = gu.current;
        if (t !== null && t.tag === ae) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Je(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = mi(e);
      return u ? Nl(u) === u : !1;
    }
    function on(e) {
      if (Nl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Fa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Nl(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return on(s), e;
            if (v === u)
              return on(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function od(e) {
      var t = Fa(e);
      return t !== null ? sd(t) : null;
    }
    function sd(e) {
      if (e.tag === ee || e.tag === ne)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = sd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function cd(e) {
      var t = Fa(e);
      return t !== null ? Lc(t) : null;
    }
    function Lc(e) {
      if (e.tag === ee || e.tag === ne)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Te) {
          var a = Lc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var fd = _.unstable_scheduleCallback, Nc = _.unstable_cancelCallback, Ov = _.unstable_shouldYield, lo = _.unstable_requestPaint, jn = _.unstable_now, ey = _.unstable_getCurrentPriorityLevel, Ml = _.unstable_ImmediatePriority, uo = _.unstable_UserBlockingPriority, zl = _.unstable_NormalPriority, Lv = _.unstable_LowPriority, Ul = _.unstable_IdlePriority, Nv = _.unstable_yieldValue, Mc = _.unstable_setDisableYieldValue, Ki = null, On = null, ue = null, Ha = !1, ma = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function dd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ct && (e = lt({}, e, {
          getLaneLabelMap: Al,
          injectProfilingHooks: Zi
        })), Ki = t.inject(e), On = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function oo(e, t) {
      if (On && typeof On.onScheduleFiberRoot == "function")
        try {
          On.onScheduleFiberRoot(Ki, e, t);
        } catch (a) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Va(e, t) {
      if (On && typeof On.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & nt) === nt;
          if (St) {
            var i;
            switch (t) {
              case Ea:
                i = Ml;
                break;
              case Ti:
                i = uo;
                break;
              case ui:
                i = zl;
                break;
              case As:
                i = Ul;
                break;
              default:
                i = zl;
                break;
            }
            On.onCommitFiberRoot(Ki, e, i, a);
          }
        } catch (u) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Su(e) {
      if (On && typeof On.onPostCommitFiberRoot == "function")
        try {
          On.onPostCommitFiberRoot(Ki, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function pd(e) {
      if (On && typeof On.onCommitFiberUnmount == "function")
        try {
          On.onCommitFiberUnmount(Ki, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Bn(e) {
      if (typeof Nv == "function" && (Mc(e), Ye(e)), On && typeof On.setStrictMode == "function")
        try {
          On.setStrictMode(Ki, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Zi(e) {
      ue = e;
    }
    function Al() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < bs; a++) {
          var i = ny(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function vd(e) {
      ue !== null && typeof ue.markCommitStarted == "function" && ue.markCommitStarted(e);
    }
    function hd() {
      ue !== null && typeof ue.markCommitStopped == "function" && ue.markCommitStopped();
    }
    function ya(e) {
      ue !== null && typeof ue.markComponentRenderStarted == "function" && ue.markComponentRenderStarted(e);
    }
    function ga() {
      ue !== null && typeof ue.markComponentRenderStopped == "function" && ue.markComponentRenderStopped();
    }
    function zc(e) {
      ue !== null && typeof ue.markComponentPassiveEffectMountStarted == "function" && ue.markComponentPassiveEffectMountStarted(e);
    }
    function Mv() {
      ue !== null && typeof ue.markComponentPassiveEffectMountStopped == "function" && ue.markComponentPassiveEffectMountStopped();
    }
    function Uc(e) {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStarted == "function" && ue.markComponentPassiveEffectUnmountStarted(e);
    }
    function zv() {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStopped == "function" && ue.markComponentPassiveEffectUnmountStopped();
    }
    function ws(e) {
      ue !== null && typeof ue.markComponentLayoutEffectMountStarted == "function" && ue.markComponentLayoutEffectMountStarted(e);
    }
    function Si() {
      ue !== null && typeof ue.markComponentLayoutEffectMountStopped == "function" && ue.markComponentLayoutEffectMountStopped();
    }
    function so(e) {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStarted == "function" && ue.markComponentLayoutEffectUnmountStarted(e);
    }
    function co() {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStopped == "function" && ue.markComponentLayoutEffectUnmountStopped();
    }
    function Eu(e, t, a) {
      ue !== null && typeof ue.markComponentErrored == "function" && ue.markComponentErrored(e, t, a);
    }
    function md(e, t, a) {
      ue !== null && typeof ue.markComponentSuspended == "function" && ue.markComponentSuspended(e, t, a);
    }
    function fo(e) {
      ue !== null && typeof ue.markLayoutEffectsStarted == "function" && ue.markLayoutEffectsStarted(e);
    }
    function Uv() {
      ue !== null && typeof ue.markLayoutEffectsStopped == "function" && ue.markLayoutEffectsStopped();
    }
    function yd(e) {
      ue !== null && typeof ue.markPassiveEffectsStarted == "function" && ue.markPassiveEffectsStarted(e);
    }
    function Sn() {
      ue !== null && typeof ue.markPassiveEffectsStopped == "function" && ue.markPassiveEffectsStopped();
    }
    function xs(e) {
      ue !== null && typeof ue.markRenderStarted == "function" && ue.markRenderStarted(e);
    }
    function gd() {
      ue !== null && typeof ue.markRenderYielded == "function" && ue.markRenderYielded();
    }
    function Ac() {
      ue !== null && typeof ue.markRenderStopped == "function" && ue.markRenderStopped();
    }
    function jc(e) {
      ue !== null && typeof ue.markRenderScheduled == "function" && ue.markRenderScheduled(e);
    }
    function Sd(e, t) {
      ue !== null && typeof ue.markForceUpdateScheduled == "function" && ue.markForceUpdateScheduled(e, t);
    }
    function Ji(e, t) {
      ue !== null && typeof ue.markStateUpdateScheduled == "function" && ue.markStateUpdateScheduled(e, t);
    }
    var le = (
      /*                         */
      0
    ), Ae = (
      /*                 */
      1
    ), et = (
      /*                    */
      2
    ), sn = (
      /*               */
      8
    ), qr = (
      /*              */
      16
    ), po = Math.clz32 ? Math.clz32 : Ed, ty = Math.log, gr = Math.LN2;
    function Ed(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ty(t) / gr | 0) | 0;
    }
    var bs = 31, Y = (
      /*                        */
      0
    ), Jt = (
      /*                          */
      0
    ), ke = (
      /*                        */
      1
    ), Ei = (
      /*    */
      2
    ), ii = (
      /*             */
      4
    ), el = (
      /*            */
      8
    ), li = (
      /*                     */
      16
    ), vo = (
      /*                */
      32
    ), Cu = (
      /*                       */
      4194240
    ), ho = (
      /*                        */
      64
    ), Fc = (
      /*                        */
      128
    ), Hc = (
      /*                        */
      256
    ), Vc = (
      /*                        */
      512
    ), Pc = (
      /*                        */
      1024
    ), Ru = (
      /*                        */
      2048
    ), Bc = (
      /*                        */
      4096
    ), mo = (
      /*                        */
      8192
    ), yo = (
      /*                        */
      16384
    ), $c = (
      /*                       */
      32768
    ), _s = (
      /*                       */
      65536
    ), Ic = (
      /*                       */
      131072
    ), Yc = (
      /*                       */
      262144
    ), Wc = (
      /*                       */
      524288
    ), Qc = (
      /*                       */
      1048576
    ), ks = (
      /*                       */
      2097152
    ), Ds = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), Gc = (
      /*                             */
      8388608
    ), Cd = (
      /*                             */
      16777216
    ), Xc = (
      /*                             */
      33554432
    ), Rd = (
      /*                             */
      67108864
    ), Av = Tu, go = (
      /*          */
      134217728
    ), Td = (
      /*                          */
      268435455
    ), So = (
      /*               */
      268435456
    ), Ci = (
      /*                        */
      536870912
    ), Sa = (
      /*                   */
      1073741824
    );
    function ny(e) {
      {
        if (e & ke)
          return "Sync";
        if (e & Ei)
          return "InputContinuousHydration";
        if (e & ii)
          return "InputContinuous";
        if (e & el)
          return "DefaultHydration";
        if (e & li)
          return "Default";
        if (e & vo)
          return "TransitionHydration";
        if (e & Cu)
          return "Transition";
        if (e & Ds)
          return "Retry";
        if (e & go)
          return "SelectiveHydration";
        if (e & So)
          return "IdleHydration";
        if (e & Ci)
          return "Idle";
        if (e & Sa)
          return "Offscreen";
      }
    }
    var nn = -1, Kr = ho, Eo = Tu;
    function jl(e) {
      switch (Fl(e)) {
        case ke:
          return ke;
        case Ei:
          return Ei;
        case ii:
          return ii;
        case el:
          return el;
        case li:
          return li;
        case vo:
          return vo;
        case ho:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case $c:
        case _s:
        case Ic:
        case Yc:
        case Wc:
        case Qc:
        case ks:
          return e & Cu;
        case Tu:
        case Gc:
        case Cd:
        case Xc:
        case Rd:
          return e & Ds;
        case go:
          return go;
        case So:
          return So;
        case Ci:
          return Ci;
        case Sa:
          return Sa;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Os(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & Td;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = jl(p);
        else {
          var v = f & s;
          v !== Y && (i = jl(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = jl(y) : s !== Y && (i = jl(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = Fl(i), b = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === li && (b & Cu) !== Y
        )
          return t;
      }
      (i & ii) !== Y && (i |= a & li);
      var w = e.entangledLanes;
      if (w !== Y)
        for (var z = e.entanglements, A = i & w; A > 0; ) {
          var H = Hl(A), se = 1 << H;
          i |= z[H], A &= ~se;
        }
      return i;
    }
    function jv(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var u = Hl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Fv(e, t) {
      switch (e) {
        case ke:
        case Ei:
        case ii:
          return t + 250;
        case el:
        case li:
        case vo:
        case ho:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case $c:
        case _s:
        case Ic:
        case Yc:
        case Wc:
        case Qc:
        case ks:
          return t + 5e3;
        case Tu:
        case Gc:
        case Cd:
        case Xc:
        case Rd:
          return nn;
        case go:
        case So:
        case Ci:
        case Sa:
          return nn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function wd(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p, y = s[p];
        y === nn ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Fv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Co(e) {
      return jl(e.pendingLanes);
    }
    function Ls(e) {
      var t = e.pendingLanes & ~Sa;
      return t !== Y ? t : t & Sa ? Sa : Y;
    }
    function xd(e) {
      return (e & ke) !== Y;
    }
    function bd(e) {
      return (e & Td) !== Y;
    }
    function _d(e) {
      return (e & Ds) === e;
    }
    function Hv(e) {
      var t = ke | ii | li;
      return (e & t) === Y;
    }
    function Vv(e) {
      return (e & Cu) === e;
    }
    function Ns(e, t) {
      var a = Ei | ii | el | li;
      return (t & a) !== Y;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Bv(e) {
      return (e & Cu) !== Y;
    }
    function wr() {
      var e = Kr;
      return Kr <<= 1, (Kr & Cu) === Y && (Kr = ho), e;
    }
    function xr() {
      var e = Eo;
      return Eo <<= 1, (Eo & Ds) === Y && (Eo = Tu), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function Ro(e) {
      return Fl(e);
    }
    function Hl(e) {
      return 31 - po(e);
    }
    function qc(e) {
      return Hl(e);
    }
    function Zr(e, t) {
      return (e & t) !== Y;
    }
    function Vl(e, t) {
      return (e & t) === t;
    }
    function ut(e, t) {
      return e | t;
    }
    function To(e, t) {
      return e & ~t;
    }
    function kd(e, t) {
      return e & t;
    }
    function ry(e) {
      return e;
    }
    function Dd(e, t) {
      return e !== Jt && e < t ? e : t;
    }
    function Ms(e) {
      for (var t = [], a = 0; a < bs; a++)
        t.push(e);
      return t;
    }
    function wo(e, t, a) {
      e.pendingLanes |= t, t !== Ci && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = qc(t);
      i[u] = a;
    }
    function Od(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Hl(i), s = 1 << u;
        a[u] = nn, i &= ~s;
      }
    }
    function zs(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ay(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p;
        i[p] = Y, u[p] = nn, s[p] = nn, f &= ~v;
      }
    }
    function Kc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Hl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ld(e, t) {
      var a = Fl(t), i;
      switch (a) {
        case ii:
          i = Ei;
          break;
        case li:
          i = el;
          break;
        case ho:
        case Fc:
        case Hc:
        case Vc:
        case Pc:
        case Ru:
        case Bc:
        case mo:
        case yo:
        case $c:
        case _s:
        case Ic:
        case Yc:
        case Wc:
        case Qc:
        case ks:
        case Tu:
        case Gc:
        case Cd:
        case Xc:
        case Rd:
          i = vo;
          break;
        case Ci:
          i = So;
          break;
        default:
          i = Jt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Jt ? Jt : i;
    }
    function Nd(e, t, a) {
      if (ma)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = qc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Us(e, t) {
      if (ma)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = qc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ri(e, t) {
      return null;
    }
    var Ea = ke, Ti = ii, ui = li, As = Ci, xo = Jt;
    function br() {
      return xo;
    }
    function Ot(e) {
      xo = e;
    }
    function iy(e, t) {
      var a = xo;
      try {
        return xo = e, t();
      } finally {
        xo = a;
      }
    }
    function ly(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Zc(e, t) {
      return e > t ? e : t;
    }
    function Qn(e, t) {
      return e !== 0 && e < t;
    }
    function $v(e) {
      var t = Fl(e);
      return Qn(Ea, t) ? Qn(Ti, t) ? bd(t) ? ui : As : Ti : Ea;
    }
    function me(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var wu;
    function Md(e) {
      wu = e;
    }
    function Iv(e) {
      wu(e);
    }
    var zd;
    function js(e) {
      zd = e;
    }
    var Fs;
    function Ud(e) {
      Fs = e;
    }
    var Ad;
    function Yv(e) {
      Ad = e;
    }
    var jd;
    function Fd(e) {
      jd = e;
    }
    var Hs = !1, Fn = [], Gn = null, _r = null, tl = null, bo = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), nl = [], wi = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function uy(e) {
      return wi.indexOf(e) > -1;
    }
    function Wv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Hd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Gn = null;
          break;
        case "dragenter":
        case "dragleave":
          _r = null;
          break;
        case "mouseover":
        case "mouseout":
          tl = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          kr.delete(i);
          break;
        }
      }
    }
    function _o(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Wv(t, a, i, u, s);
        if (t !== null) {
          var p = zo(t);
          p !== null && zd(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Qv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Gn = _o(Gn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _r = _o(_r, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return tl = _o(tl, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bo.set(y, _o(bo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return kr.set(b, _o(kr.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Gv(e) {
      var t = ec(e.target);
      if (t !== null) {
        var a = Nl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var u = Dc(a);
            if (u !== null) {
              e.blockedOn = u, jd(e.priority, function() {
                Fs(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (me(s)) {
              e.blockedOn = Oc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Jc(e) {
      for (var t = Ad(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < nl.length && Qn(t, nl[i].priority); i++)
        ;
      nl.splice(i, 0, a), i === 0 && Gv(a);
    }
    function ko(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = $s(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Km(s), u.target.dispatchEvent(s), Tv();
        } else {
          var f = zo(i);
          return f !== null && zd(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ca(e, t, a) {
      ko(e) && a.delete(t);
    }
    function Lt() {
      Hs = !1, Gn !== null && ko(Gn) && (Gn = null), _r !== null && ko(_r) && (_r = null), tl !== null && ko(tl) && (tl = null), bo.forEach(Ca), kr.forEach(Ca);
    }
    function Tn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Hs || (Hs = !0, _.unstable_scheduleCallback(_.unstable_NormalPriority, Lt)));
    }
    function hn(e) {
      if (Fn.length > 0) {
        Tn(Fn[0], e);
        for (var t = 1; t < Fn.length; t++) {
          var a = Fn[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Gn !== null && Tn(Gn, e), _r !== null && Tn(_r, e), tl !== null && Tn(tl, e);
      var i = function(p) {
        return Tn(p, e);
      };
      bo.forEach(i), kr.forEach(i);
      for (var u = 0; u < nl.length; u++) {
        var s = nl[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; nl.length > 0; ) {
        var f = nl[0];
        if (f.blockedOn !== null)
          break;
        Gv(f), f.blockedOn === null && nl.shift();
      }
    }
    var wn = de.ReactCurrentBatchConfig, Dr = !0;
    function xu(e) {
      Dr = !!e;
    }
    function $n() {
      return Dr;
    }
    function Vs(e, t, a) {
      var i = _u(t), u;
      switch (i) {
        case Ea:
          u = bu;
          break;
        case Ti:
          u = ef;
          break;
        case ui:
        default:
          u = Ps;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function bu(e, t, a, i) {
      var u = br(), s = wn.transition;
      wn.transition = null;
      try {
        Ot(Ea), Ps(e, t, a, i);
      } finally {
        Ot(u), wn.transition = s;
      }
    }
    function ef(e, t, a, i) {
      var u = br(), s = wn.transition;
      wn.transition = null;
      try {
        Ot(Ti), Ps(e, t, a, i);
      } finally {
        Ot(u), wn.transition = s;
      }
    }
    function Ps(e, t, a, i) {
      Dr && Bs(e, t, a, i);
    }
    function Bs(e, t, a, i) {
      var u = $s(e, t, a, i);
      if (u === null) {
        by(e, t, i, rr, a), Hd(e, i);
        return;
      }
      if (Qv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Hd(e, i), t & ys && uy(e)) {
        for (; u !== null; ) {
          var s = zo(u);
          s !== null && Iv(s);
          var f = $s(e, t, a, i);
          if (f === null && by(e, t, i, rr, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var rr = null;
    function $s(e, t, a, i) {
      rr = null;
      var u = Kt(i), s = ec(u);
      if (s !== null) {
        var f = Nl(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ce) {
            var v = Dc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (me(y))
              return Oc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return rr = s, null;
    }
    function _u(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ea;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ti;
        case "message": {
          var t = ey();
          switch (t) {
            case Ml:
              return Ea;
            case uo:
              return Ti;
            case zl:
            case Lv:
              return ui;
            case Ul:
              return As;
            default:
              return ui;
          }
        }
        default:
          return ui;
      }
    }
    function rl(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function tf(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Pl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Bl = null, xi = null, $l = null;
    function Is(e) {
      return Bl = e, xi = Ws(), !0;
    }
    function Pd() {
      Bl = null, xi = null, $l = null;
    }
    function Ys() {
      if ($l)
        return $l;
      var e, t = xi, a = t.length, i, u = Ws(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return $l = u.slice(e, p), $l;
    }
    function Ws() {
      return "value" in Bl ? Bl.value : Bl.textContent;
    }
    function Xn(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function oi() {
      return !0;
    }
    function Pa() {
      return !1;
    }
    function rn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = oi : this.isDefaultPrevented = Pa, this.isPropagationStopped = Pa, this;
      }
      return lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = oi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = oi);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: oi
      }), t;
    }
    var ku = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Qs = rn(ku), Du = lt({}, ku, {
      view: 0,
      detail: 0
    }), oy = rn(Du), bi, nf, Ou;
    function Lu(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (bi = e.screenX - Ou.screenX, nf = e.screenY - Ou.screenY) : (bi = 0, nf = 0), Ou = e);
    }
    var Do = lt({}, Du, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $d,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Lu(e), bi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : nf;
      }
    }), Il = rn(Do), Xv = lt({}, Do, {
      dataTransfer: 0
    }), qv = rn(Xv), Bd = lt({}, Du, {
      relatedTarget: 0
    }), Oo = rn(Bd), sy = lt({}, ku, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cy = rn(sy), Kv = lt({}, ku, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zv = rn(Kv), Nu = lt({}, ku, {
      data: 0
    }), Jv = rn(Nu), Lo = Jv, eh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, xn = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function fy(e) {
      if (e.key) {
        var t = eh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Xn(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? xn[e.keyCode] || "Unidentified" : "";
    }
    var th = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function dy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = th[e];
      return i ? !!a[i] : !1;
    }
    function $d(e) {
      return dy;
    }
    var nh = lt({}, Du, {
      key: fy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $d,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Xn(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Xn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), rh = rn(nh), py = lt({}, Do, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Ra = rn(py), Id = lt({}, Du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $d
    }), vy = rn(Id), Yl = lt({}, ku, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), rf = rn(Yl), Mu = lt({}, Do, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), af = rn(Mu), Yd = [9, 13, 27, 32], lf = 229, Wd = Cn && "CompositionEvent" in window, zu = null;
    Cn && "documentMode" in document && (zu = document.documentMode);
    var hy = Cn && "TextEvent" in window && !zu, Qd = Cn && (!Wd || zu && zu > 8 && zu <= 11), Gd = 32, Gs = String.fromCharCode(Gd);
    function uf() {
      Hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Xd = !1;
    function qd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function my(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ah(e, t) {
      return e === "keydown" && t.keyCode === lf;
    }
    function of(e, t) {
      switch (e) {
        case "keyup":
          return Yd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== lf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Xs(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function sf(e) {
      return e.locale === "ko";
    }
    var al = !1;
    function ih(e, t, a, i, u) {
      var s, f;
      if (Wd ? s = my(t) : al ? of(t, i) && (s = "onCompositionEnd") : ah(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Qd && !sf(i) && (!al && s === "onCompositionStart" ? al = Is(u) : s === "onCompositionEnd" && al && (f = Ys()));
      var p = ch(a, s);
      if (p.length > 0) {
        var v = new Jv(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Xs(i);
          y !== null && (v.data = y);
        }
      }
    }
    function yy(e, t) {
      switch (e) {
        case "compositionend":
          return Xs(t);
        case "keypress":
          var a = t.which;
          return a !== Gd ? null : (Xd = !0, Gs);
        case "textInput":
          var i = t.data;
          return i === Gs && Xd ? null : i;
        default:
          return null;
      }
    }
    function cf(e, t) {
      if (al) {
        if (e === "compositionend" || !Wd && of(e, t)) {
          var a = Ys();
          return Pd(), al = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!qd(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Qd && !sf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function gy(e, t, a, i, u) {
      var s;
      if (hy ? s = yy(t, i) : s = cf(t, i), !s)
        return null;
      var f = ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Lo("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function qs(e, t, a, i, u, s, f) {
      ih(e, t, a, i, u), gy(e, t, a, i, u);
    }
    var Sy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ks(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function n(e) {
      if (!Cn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function r() {
      Hr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function l(e, t, a, i) {
      ao(i);
      var u = ch(t, "onChange");
      if (u.length > 0) {
        var s = new Qs("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var o = null, c = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      l(t, c, e, Kt(e)), Ss(E, t);
    }
    function E(e) {
      OS(e, 0);
    }
    function T(e) {
      var t = mf(e);
      if (Ku(t))
        return e;
    }
    function U(e, t) {
      if (e === "change")
        return t;
    }
    var G = !1;
    Cn && (G = n("input") && (!document.documentMode || document.documentMode > 9));
    function q(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", pe);
    }
    function W() {
      o && (o.detachEvent("onpropertychange", pe), o = null, c = null);
    }
    function pe(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function Se(e, t, a) {
      e === "focusin" ? (W(), q(t, a)) : e === "focusout" && W();
    }
    function we(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return T(c);
    }
    function Ln(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function D(e, t) {
      if (e === "click")
        return T(t);
    }
    function x(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function N(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ge(e, "number", e.value);
    }
    function J(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window, v, y;
      if (d(p) ? v = U : Ks(p) ? G ? v = x : (v = we, y = Se) : Ln(p) && (v = D), v) {
        var g = v(t, a);
        if (g) {
          l(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && N(p);
    }
    function _e() {
      dr("onMouseEnter", ["mouseout", "mouseover"]), dr("onMouseLeave", ["mouseout", "mouseover"]), dr("onPointerEnter", ["pointerout", "pointerover"]), dr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function $e(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !wv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (ec(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, z;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (w = a, z = A ? ec(A) : null, z !== null) {
            var H = Nl(z);
            (z !== H || z.tag !== ee && z.tag !== ne) && (z = null);
          }
        } else
          w = null, z = a;
        if (w !== z) {
          var se = Il, Ve = "onMouseLeave", Oe = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = Ra, Ve = "onPointerLeave", Oe = "onPointerEnter", _t = "pointer");
          var gt = w == null ? g : mf(w), O = z == null ? g : mf(z), V = new se(Ve, _t + "leave", w, i, u);
          V.target = gt, V.relatedTarget = O;
          var L = null, K = ec(u);
          if (K === a) {
            var ye = new se(Oe, _t + "enter", z, i, u);
            ye.target = O, ye.relatedTarget = gt, L = ye;
          }
          zR(e, V, L, w, z);
        }
      }
    }
    function Ie(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var De = typeof Object.is == "function" ? Object.is : Ie;
    function bn(e, t) {
      if (De(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Zn.call(t, s) || !De(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Nt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Wl(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function lh(e, t) {
      for (var a = Nt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Nt(Wl(a));
      }
    }
    function pR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return vR(e, u, s, f, p);
    }
    function vR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Ii) && (f = s + a), g === i && (u === 0 || g.nodeType === Ii) && (p = s + u), g.nodeType === Ii && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          b = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function hR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = lh(e, f), g = lh(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function gS(e) {
      return e && e.nodeType === Ii;
    }
    function SS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : gS(e) ? !1 : gS(t) ? SS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function mR(e) {
      return e && e.ownerDocument && SS(e.ownerDocument.documentElement, e);
    }
    function yR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function ES() {
      for (var e = window, t = vi(); t instanceof e.HTMLIFrameElement; ) {
        if (yR(t))
          e = t.contentWindow;
        else
          return t;
        t = vi(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function gR() {
      var e = ES();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? ER(e) : null
      };
    }
    function SR(e) {
      var t = ES(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && mR(a)) {
        i !== null && Ey(a) && CR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Yr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function ER(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = pR(e), t || {
        start: 0,
        end: 0
      };
    }
    function CR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : hR(e, t);
    }
    var RR = Cn && "documentMode" in document && document.documentMode <= 11;
    function TR() {
      Hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ff = null, Cy = null, Kd = null, Ry = !1;
    function wR(e) {
      if ("selectionStart" in e && Ey(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function xR(e) {
      return e.window === e ? e.document : e.nodeType === fa ? e : e.ownerDocument;
    }
    function CS(e, t, a) {
      var i = xR(a);
      if (!(Ry || ff == null || ff !== vi(i))) {
        var u = wR(ff);
        if (!Kd || !bn(Kd, u)) {
          Kd = u;
          var s = ch(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Qs("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = ff;
          }
        }
      }
    }
    function bR(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window;
      switch (t) {
        case "focusin":
          (Ks(p) || p.contentEditable === "true") && (ff = p, Cy = a, Kd = null);
          break;
        case "focusout":
          ff = null, Cy = null, Kd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, CS(e, i, u);
          break;
        case "selectionchange":
          if (RR)
            break;
        case "keydown":
        case "keyup":
          CS(e, i, u);
      }
    }
    function uh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var df = {
      animationend: uh("Animation", "AnimationEnd"),
      animationiteration: uh("Animation", "AnimationIteration"),
      animationstart: uh("Animation", "AnimationStart"),
      transitionend: uh("Transition", "TransitionEnd")
    }, Ty = {}, RS = {};
    Cn && (RS = document.createElement("div").style, "AnimationEvent" in window || (delete df.animationend.animation, delete df.animationiteration.animation, delete df.animationstart.animation), "TransitionEvent" in window || delete df.transitionend.transition);
    function oh(e) {
      if (Ty[e])
        return Ty[e];
      if (!df[e])
        return e;
      var t = df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in RS)
          return Ty[e] = t[a];
      return e;
    }
    var TS = oh("animationend"), wS = oh("animationiteration"), xS = oh("animationstart"), bS = oh("transitionend"), _S = /* @__PURE__ */ new Map(), kS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function No(e, t) {
      _S.set(e, t), Hr(t, [e]);
    }
    function _R() {
      for (var e = 0; e < kS.length; e++) {
        var t = kS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        No(a, "on" + i);
      }
      No(TS, "onAnimationEnd"), No(wS, "onAnimationIteration"), No(xS, "onAnimationStart"), No("dblclick", "onDoubleClick"), No("focusin", "onFocus"), No("focusout", "onBlur"), No(bS, "onTransitionEnd");
    }
    function kR(e, t, a, i, u, s, f) {
      var p = _S.get(t);
      if (p !== void 0) {
        var v = Qs, y = t;
        switch (t) {
          case "keypress":
            if (Xn(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = rh;
            break;
          case "focusin":
            y = "focus", v = Oo;
            break;
          case "focusout":
            y = "blur", v = Oo;
            break;
          case "beforeblur":
          case "afterblur":
            v = Oo;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Il;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = vy;
            break;
          case TS:
          case wS:
          case xS:
            v = cy;
            break;
          case bS:
            v = rf;
            break;
          case "scroll":
            v = oy;
            break;
          case "wheel":
            v = af;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ra;
            break;
        }
        var g = (s & ys) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = NR(a, p, i.type, g, b);
          if (w.length > 0) {
            var z = new v(p, y, null, i, u);
            e.push({
              event: z,
              listeners: w
            });
          }
        }
      }
    }
    _R(), _e(), r(), TR(), uf();
    function DR(e, t, a, i, u, s, f) {
      kR(e, t, a, i, u, s);
      var p = (s & qm) === 0;
      p && ($e(e, t, a, i, u), J(e, t, a, i, u), bR(e, t, a, i, u), qs(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function DS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ud(i, t, void 0, e), e.currentTarget = null;
    }
    function OR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          DS(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, z = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          DS(e, z, w), i = b;
        }
    }
    function OS(e, t) {
      for (var a = (t & ys) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        OR(s, f, a);
      }
      Zm();
    }
    function LR(e, t, a, i, u) {
      var s = Kt(a), f = [];
      DR(f, e, i, a, s, t), OS(f, t);
    }
    function En(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = uw(t), u = UR(e);
      i.has(u) || (LS(t, e, ms, a), i.add(u));
    }
    function xy(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ys), LS(a, e, i, t);
    }
    var sh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[sh]) {
        e[sh] = !0, wt.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === fa ? e : e.ownerDocument;
        t !== null && (t[sh] || (t[sh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function LS(e, t, a, i, u) {
      var s = Vs(e, t, a), f = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : tf(e, t, s) : f !== void 0 ? Pl(e, t, s, f) : rl(e, t, s);
    }
    function NS(e, t) {
      return e === t || e.nodeType === Rn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & wc) && !(t & ms)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === te || v === Te) {
              var y = p.stateNode.containerInfo;
              if (NS(y, f))
                break;
              if (v === Te)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === te || b === Te) {
                    var w = g.stateNode.containerInfo;
                    if (NS(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = ec(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === ee || A === ne) {
                  p = s = z;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Ss(function() {
        return LR(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function NR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, z = b.tag;
        if (z === ee && w !== null && (g = w, p !== null)) {
          var A = hu(y, p);
          A != null && v.push(ep(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ch(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ee && f !== null) {
          var v = f, y = hu(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = hu(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function pf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ee);
      return e || null;
    }
    function MR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = pf(s))
        u++;
      for (var f = 0, p = i; p; p = pf(p))
        f++;
      for (; u - f > 0; )
        a = pf(a), u--;
      for (; f - u > 0; )
        i = pf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = pf(a), i = pf(i);
      }
      return null;
    }
    function MS(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ee && g !== null) {
          var w = g;
          if (u) {
            var z = hu(p, s);
            z != null && f.unshift(ep(p, z, w));
          } else if (!u) {
            var A = hu(p, s);
            A != null && f.push(ep(p, A, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function zR(e, t, a, i, u) {
      var s = i && u ? MR(i, u) : null;
      i !== null && MS(e, t, i, s, !1), u !== null && a !== null && MS(e, a, u, s, !0);
    }
    function UR(e, t) {
      return e + "__bubble";
    }
    var Ba = !1, tp = "dangerouslySetInnerHTML", fh = "suppressContentEditableWarning", Mo = "suppressHydrationWarning", zS = "autoFocus", Zs = "children", Js = "style", dh = "__html", _y, ph, np, US, vh, AS, jS;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ph = function(e, t) {
      ro(e, t), gv(e, t), kl(e, t, {
        registrationNameDependencies: $t,
        possibleRegistrationNames: Kn
      });
    }, AS = Cn && !document.documentMode, np = function(e, t, a) {
      if (!Ba) {
        var i = hh(a), u = hh(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, US = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, vh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, jS = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var AR = /\r\n?/g, jR = /\u0000|\uFFFD/g;
    function hh(e) {
      ia(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(AR, `
`).replace(jR, "");
    }
    function mh(e, t, a, i) {
      var u = hh(t), s = hh(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function FS(e) {
      return e.nodeType === fa ? e : e.ownerDocument;
    }
    function FR() {
    }
    function yh(e) {
      e.onclick = FR;
    }
    function HR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Js)
            f && Object.freeze(f), dv(t, f);
          else if (s === tp) {
            var p = f ? f[dh] : void 0;
            p != null && rv(t, p);
          } else if (s === Zs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && cs(t, f);
            } else typeof f == "number" && cs(t, "" + f);
          else s === fh || s === Mo || s === zS || ($t.hasOwnProperty(s) ? f != null && (typeof f != "function" && vh(s, f), s === "onScroll" && En("scroll", t)) : f != null && zi(t, s, f, u));
        }
    }
    function VR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Js ? dv(e, f) : s === tp ? rv(e, f) : s === Zs ? cs(e, f) : zi(e, s, f, i);
      }
    }
    function PR(e, t, a, i) {
      var u, s = FS(a), f, p = i;
      if (p === $i && (p = $f(e)), p === $i) {
        if (u = du(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Zn.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function BR(e, t) {
      return FS(t).createTextNode(e);
    }
    function $R(e, t, a, i) {
      var u = du(t, a);
      ph(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            En(Zd[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), En("invalid", e);
          break;
        case "option":
          Wt(e, a), s = a;
          break;
        case "select":
          ss(e, a), s = os(e, a), En("invalid", e);
          break;
        case "textarea":
          tv(e, a), s = Bf(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ps(t, s), HR(t, e, i, s, u), t) {
        case "input":
          Vi(e), Z(e, a, !1);
          break;
        case "textarea":
          Vi(e), yc(e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          Pf(e, a);
          break;
        default:
          typeof s.onClick == "function" && yh(e);
          break;
      }
    }
    function IR(e, t, a, i, u) {
      ph(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = os(e, a), p = os(e, i), s = [];
          break;
        case "textarea":
          f = Bf(e, a), p = Bf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && yh(e);
          break;
      }
      ps(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Js) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Zs || v === fh || v === Mo || v === zS || ($t.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === z || w == null && z == null))
          if (v === Js)
            if (w && Object.freeze(w), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && z[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === tp) {
            var A = w ? w[dh] : void 0, H = z ? z[dh] : void 0;
            A != null && H !== A && (s = s || []).push(v, A);
          } else v === Zs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === fh || v === Mo || ($t.hasOwnProperty(v) ? (w != null && (typeof w != "function" && vh(v, w), v === "onScroll" && En("scroll", e)), !s && z !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (pv(g, p[Js]), (s = s || []).push(Js, g)), s;
    }
    function YR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = du(a, i), f = du(a, u);
      switch (VR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          Hm(e, u);
          break;
      }
    }
    function WR(e) {
      {
        var t = e.toLowerCase();
        return Cc.hasOwnProperty(t) && Cc[t] || null;
      }
    }
    function QR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = du(t, a), ph(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            En(Zd[y], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          C(e, a), En("invalid", e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          ss(e, a), En("invalid", e);
          break;
        case "textarea":
          tv(e, a), En("invalid", e);
          break;
      }
      ps(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var z = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var H = a[A];
          if (A === Zs)
            typeof H == "string" ? e.textContent !== H && (a[Mo] !== !0 && mh(e.textContent, H, s, f), z = [Zs, H]) : typeof H == "number" && e.textContent !== "" + H && (a[Mo] !== !0 && mh(e.textContent, H, s, f), z = [Zs, "" + H]);
          else if ($t.hasOwnProperty(A))
            H != null && (typeof H != "function" && vh(A, H), A === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Ve = p && Qe ? null : Yn(A);
            if (a[Mo] !== !0) {
              if (!(A === fh || A === Mo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === tp) {
                  var Oe = e.innerHTML, _t = H ? H[dh] : void 0;
                  if (_t != null) {
                    var gt = jS(e, _t);
                    gt !== Oe && np(A, Oe, gt);
                  }
                } else if (A === Js) {
                  if (v.delete(A), AS) {
                    var O = Xm(H);
                    se = e.getAttribute("style"), O !== se && np(A, se, O);
                  }
                } else if (p && !Qe)
                  v.delete(A.toLowerCase()), se = Da(e, A, H), H !== se && np(A, se, H);
                else if (!mn(A, Ve, p) && !It(A, H, Ve, p)) {
                  var V = !1;
                  if (Ve !== null)
                    v.delete(Ve.attributeName), se = Ka(e, A, H, Ve);
                  else {
                    var L = i;
                    if (L === $i && (L = $f(t)), L === $i)
                      v.delete(A.toLowerCase());
                    else {
                      var K = WR(A);
                      K !== null && K !== A && (V = !0, v.delete(K)), v.delete(A);
                    }
                    se = Da(e, A, H);
                  }
                  var ye = Qe;
                  !ye && H !== se && !V && np(A, se, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Mo] !== !0 && US(v), t) {
        case "input":
          Vi(e), Z(e, a, !0);
          break;
        case "textarea":
          Vi(e), yc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && yh(e);
          break;
      }
      return z;
    }
    function GR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function XR(e, t, a) {
      switch (t) {
        case "input":
          Re(e, a);
          return;
        case "textarea":
          Vm(e, a);
          return;
        case "select":
          Jp(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var qR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], HS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], KR = HS.concat(["button"]), ZR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], VS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = lt({}, e || VS), i = {
          tag: t
        };
        return HS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), KR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), qR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var JR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return ZR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, eT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, PS = {};
      rp = function(e, t, a) {
        a = a || VS;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = JR(e, u) ? null : i, f = s ? null : eT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!PS[y]) {
            PS[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var gh = "suppressHydrationWarning", Sh = "$", Eh = "/$", ip = "$?", lp = "$!", tT = "style", Ny = null, My = null;
    function nT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case fa:
        case Yf: {
          t = i === fa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : If(null, "");
          break;
        }
        default: {
          var s = i === Rn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = If(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function rT(e, t, a) {
      {
        var i = e, u = If(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Pk(e) {
      return e;
    }
    function aT(e) {
      Ny = $n(), My = gR();
      var t = null;
      return xu(!1), t;
    }
    function iT(e) {
      SR(My), xu(Ny), Ny = null, My = null;
    }
    function lT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = PR(e, t, a, s);
      return sp(u, y), Py(y, t), y;
    }
    function uT(e, t) {
      e.appendChild(t);
    }
    function oT(e, t, a, i, u) {
      switch ($R(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function sT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return IR(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function cT(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = BR(e, t);
      return sp(i, s), s;
    }
    function fT() {
      var e = window.event;
      return e === void 0 ? ui : _u(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, dT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, BS = typeof Promise == "function" ? Promise : void 0, pT = typeof queueMicrotask == "function" ? queueMicrotask : typeof BS < "u" ? function(e) {
      return BS.resolve(null).then(e).catch(vT);
    } : Uy;
    function vT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function hT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function mT(e, t, a, i, u, s) {
      YR(e, t, a, i, u), Py(e, u);
    }
    function $S(e) {
      cs(e, "");
    }
    function yT(e, t, a) {
      e.nodeValue = a;
    }
    function gT(e, t) {
      e.appendChild(t);
    }
    function ST(e, t) {
      var a;
      e.nodeType === Rn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && yh(a);
    }
    function ET(e, t, a) {
      e.insertBefore(t, a);
    }
    function CT(e, t, a) {
      e.nodeType === Rn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function RT(e, t) {
      e.removeChild(t);
    }
    function TT(e, t) {
      e.nodeType === Rn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Rn) {
          var s = u.data;
          if (s === Eh)
            if (i === 0) {
              e.removeChild(u), hn(t);
              return;
            } else
              i--;
          else (s === Sh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      hn(t);
    }
    function wT(e, t) {
      e.nodeType === Rn ? jy(e.parentNode, t) : e.nodeType === Yr && jy(e, t), hn(e);
    }
    function xT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function bT(e) {
      e.nodeValue = "";
    }
    function _T(e, t) {
      e = e;
      var a = t[tT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = bl("display", i);
    }
    function kT(e, t) {
      e.nodeValue = t;
    }
    function DT(e) {
      e.nodeType === Yr ? e.textContent = "" : e.nodeType === fa && e.documentElement && e.removeChild(e.documentElement);
    }
    function OT(e, t, a) {
      return e.nodeType !== Yr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function LT(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function NT(e) {
      return e.nodeType !== Rn ? null : e;
    }
    function IS(e) {
      return e.data === ip;
    }
    function Fy(e) {
      return e.data === lp;
    }
    function MT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function zT(e, t) {
      e._reactRetry = t;
    }
    function Ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yr || t === Ii)
          break;
        if (t === Rn) {
          var a = e.data;
          if (a === Sh || a === lp || a === ip)
            break;
          if (a === Eh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return Ch(e.nextSibling);
    }
    function UT(e) {
      return Ch(e.firstChild);
    }
    function AT(e) {
      return Ch(e.firstChild);
    }
    function jT(e) {
      return Ch(e.nextSibling);
    }
    function FT(e, t, a, i, u, s, f) {
      sp(s, e), Py(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Ae) !== le;
      return QR(e, t, a, p, i, y, f);
    }
    function HT(e, t, a, i) {
      return sp(a, e), a.mode & Ae, GR(e, t);
    }
    function VT(e, t) {
      sp(t, e);
    }
    function PT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Rn) {
          var i = t.data;
          if (i === Eh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === Sh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function YS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Rn) {
          var i = t.data;
          if (i === Sh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === Eh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function BT(e) {
      hn(e);
    }
    function $T(e) {
      hn(e);
    }
    function IT(e) {
      return e !== "head" && e !== "body";
    }
    function YT(e, t, a, i) {
      var u = !0;
      mh(t.nodeValue, a, i, u);
    }
    function WT(e, t, a, i, u, s) {
      if (t[gh] !== !0) {
        var f = !0;
        mh(i.nodeValue, u, s, f);
      }
    }
    function QT(e, t) {
      t.nodeType === Yr ? ky(e, t) : t.nodeType === Rn || Dy(e, t);
    }
    function GT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yr ? ky(a, t) : t.nodeType === Rn || Dy(a, t));
      }
    }
    function XT(e, t, a, i, u) {
      (u || t[gh] !== !0) && (i.nodeType === Yr ? ky(a, i) : i.nodeType === Rn || Dy(a, i));
    }
    function qT(e, t, a) {
      Oy(e, t);
    }
    function KT(e, t) {
      Ly(e, t);
    }
    function ZT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function JT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function ew(e, t, a, i, u, s) {
      (s || t[gh] !== !0) && Oy(a, i);
    }
    function tw(e, t, a, i, u) {
      (u || t[gh] !== !0) && Ly(a, i);
    }
    function nw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function rw(e) {
      Jd(e);
    }
    var vf = Math.random().toString(36).slice(2), hf = "__reactFiber$" + vf, Hy = "__reactProps$" + vf, op = "__reactContainer$" + vf, Vy = "__reactEvents$" + vf, aw = "__reactListeners$" + vf, iw = "__reactHandles$" + vf;
    function lw(e) {
      delete e[hf], delete e[Hy], delete e[Vy], delete e[aw], delete e[iw];
    }
    function sp(e, t) {
      t[hf] = e;
    }
    function Rh(e, t) {
      t[op] = e;
    }
    function WS(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function ec(e) {
      var t = e[hf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[hf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = YS(e); u !== null; ) {
              var s = u[hf];
              if (s)
                return s;
              u = YS(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zo(e) {
      var t = e[hf] || e[op];
      return t && (t.tag === ee || t.tag === ne || t.tag === Ce || t.tag === te) ? t : null;
    }
    function mf(e) {
      if (e.tag === ee || e.tag === ne)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Th(e) {
      return e[Hy] || null;
    }
    function Py(e, t) {
      e[Hy] = t;
    }
    function uw(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var QS = {}, GS = de.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, a = Et(e.type, e._source, t ? t.type : null);
        GS.setExtraStackFrame(a);
      } else
        GS.setExtraStackFrame(null);
    }
    function il(e, t, a, i, u) {
      {
        var s = Function.call.bind(Zn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (wh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), wh(null)), p instanceof Error && !(p.message in QS) && (QS[p.message] = !0, wh(u), S("Failed %s type: %s", a, p.message), wh(null));
          }
      }
    }
    var By = [], xh;
    xh = [];
    var Uu = -1;
    function Uo(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== xh[Uu] && S("Unexpected Fiber popped."), e.current = By[Uu], By[Uu] = null, xh[Uu] = null, Uu--;
    }
    function ea(e, t, a) {
      Uu++, By[Uu] = e.current, xh[Uu] = a, e.current = t;
    }
    var $y;
    $y = {};
    var si = {};
    Object.freeze(si);
    var Au = Uo(si), Ql = Uo(!1), Iy = si;
    function yf(e, t, a) {
      return a && Gl(t) ? Iy : Au.current;
    }
    function XS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function gf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Je(e) || "Unknown";
          il(i, s, "context", p);
        }
        return u && XS(e, t, s), s;
      }
    }
    function bh() {
      return Ql.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function _h(e) {
      Jr(Ql, e), Jr(Au, e);
    }
    function Yy(e) {
      Jr(Ql, e), Jr(Au, e);
    }
    function qS(e, t, a) {
      {
        if (Au.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ea(Au, t, e), ea(Ql, a, e);
      }
    }
    function KS(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Je(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Je(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Je(e) || "Unknown";
          il(u, f, "child context", v);
        }
        return lt({}, a, f);
      }
    }
    function kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return Iy = Au.current, ea(Au, a, e), ea(Ql, Ql.current, e), !0;
      }
    }
    function ZS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = KS(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, Jr(Ql, e), Jr(Au, e), ea(Au, u, e), ea(Ql, a, e);
        } else
          Jr(Ql, e), ea(Ql, a, e);
      }
    }
    function ow(e) {
      {
        if (!va(e) || e.tag !== ae)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case ae: {
              var a = t.type;
              if (Gl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ao = 0, Dh = 1, ju = null, Wy = !1, Qy = !1;
    function JS(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function sw(e) {
      Wy = !0, JS(e);
    }
    function eE() {
      Wy && jo();
    }
    function jo() {
      if (!Qy && ju !== null) {
        Qy = !0;
        var e = 0, t = br();
        try {
          var a = !0, i = ju;
          for (Ot(Ea); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, Wy = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), fd(Ml, jo), s;
        } finally {
          Ot(t), Qy = !1;
        }
      }
      return null;
    }
    var Sf = [], Ef = 0, Oh = null, Lh = 0, _i = [], ki = 0, tc = null, Fu = 1, Hu = "";
    function cw(e) {
      return rc(), (e.flags & Dv) !== He;
    }
    function fw(e) {
      return rc(), Lh;
    }
    function dw() {
      var e = Hu, t = Fu, a = t & ~pw(t);
      return a.toString(32) + e;
    }
    function nc(e, t) {
      rc(), Sf[Ef++] = Lh, Sf[Ef++] = Oh, Oh = e, Lh = t;
    }
    function tE(e, t, a) {
      rc(), _i[ki++] = Fu, _i[ki++] = Hu, _i[ki++] = tc, tc = e;
      var i = Fu, u = Hu, s = Nh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Nh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, z = s - y, A = Nh(t) + z, H = p << z, se = H | w, Ve = b + u;
        Fu = 1 << A | se, Hu = Ve;
      } else {
        var Oe = p << s, _t = Oe | f, gt = u;
        Fu = 1 << v | _t, Hu = gt;
      }
    }
    function Gy(e) {
      rc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        nc(e, a), tE(e, a, i);
      }
    }
    function Nh(e) {
      return 32 - po(e);
    }
    function pw(e) {
      return 1 << Nh(e) - 1;
    }
    function Xy(e) {
      for (; e === Oh; )
        Oh = Sf[--Ef], Sf[Ef] = null, Lh = Sf[--Ef], Sf[Ef] = null;
      for (; e === tc; )
        tc = _i[--ki], _i[ki] = null, Hu = _i[--ki], _i[ki] = null, Fu = _i[--ki], _i[ki] = null;
    }
    function vw() {
      return rc(), tc !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function hw(e, t) {
      rc(), _i[ki++] = Fu, _i[ki++] = Hu, _i[ki++] = tc, Fu = t.id, Hu = t.overflow, tc = e;
    }
    function rc() {
      Lr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Or = null, Di = null, ll = !1, ac = !1, Fo = null;
    function mw() {
      ll && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function nE() {
      ac = !0;
    }
    function yw() {
      return ac;
    }
    function gw(e) {
      var t = e.stateNode.containerInfo;
      return Di = AT(t), Or = e, ll = !0, Fo = null, ac = !1, !0;
    }
    function Sw(e, t, a) {
      return Di = jT(t), Or = e, ll = !0, Fo = null, ac = !1, a !== null && hw(e, a), !0;
    }
    function rE(e, t) {
      switch (e.tag) {
        case te: {
          QT(e.stateNode.containerInfo, t);
          break;
        }
        case ee: {
          var a = (e.mode & Ae) !== le;
          XT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && GT(i.dehydrated, t);
          break;
        }
      }
    }
    function aE(e, t) {
      rE(e, t);
      var a = T_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= zt) : i.push(a);
    }
    function qy(e, t) {
      {
        if (ac)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ee:
                var i = t.type;
                t.pendingProps, qT(a, i);
                break;
              case ne:
                var u = t.pendingProps;
                KT(a, u);
                break;
            }
            break;
          }
          case ee: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ee: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Ae) !== le;
                ew(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case ne: {
                var b = t.pendingProps, w = (e.mode & Ae) !== le;
                tw(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case ee:
                var H = t.type;
                t.pendingProps, ZT(A, H);
                break;
              case ne:
                var se = t.pendingProps;
                JT(A, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function iE(e, t) {
      t.flags = t.flags & ~yi | Zt, qy(e, t);
    }
    function lE(e, t) {
      switch (e.tag) {
        case ee: {
          var a = e.type;
          e.pendingProps;
          var i = OT(t, a);
          return i !== null ? (e.stateNode = i, Or = e, Di = UT(i), !0) : !1;
        }
        case ne: {
          var u = e.pendingProps, s = LT(t, u);
          return s !== null ? (e.stateNode = s, Or = e, Di = null, !0) : !1;
        }
        case Ce: {
          var f = NT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: vw(),
              retryLane: Sa
            };
            e.memoizedState = p;
            var v = w_(f);
            return v.return = e, e.child = v, Or = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & Ae) !== le && (e.flags & nt) === He;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (ll) {
        var t = Di;
        if (!t) {
          Ky(e) && (qy(Or, e), Zy()), iE(Or, e), ll = !1, Or = e;
          return;
        }
        var a = t;
        if (!lE(e, t)) {
          Ky(e) && (qy(Or, e), Zy()), t = up(a);
          var i = Or;
          if (!t || !lE(e, t)) {
            iE(Or, e), ll = !1, Or = e;
            return;
          }
          aE(i, a);
        }
      }
    }
    function Ew(e, t, a) {
      var i = e.stateNode, u = !ac, s = FT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Cw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = HT(t, a, e);
      if (i) {
        var u = Or;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ae) !== le;
              YT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ee: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Ae) !== le;
              WT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Rw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      VT(a, e);
    }
    function Tw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return PT(a);
    }
    function uE(e) {
      for (var t = e.return; t !== null && t.tag !== ee && t.tag !== te && t.tag !== Ce; )
        t = t.return;
      Or = t;
    }
    function Mh(e) {
      if (e !== Or)
        return !1;
      if (!ll)
        return uE(e), ll = !0, !1;
      if (e.tag !== te && (e.tag !== ee || IT(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (Ky(e))
            oE(e), Zy();
          else
            for (; t; )
              aE(e, t), t = up(t);
      }
      return uE(e), e.tag === Ce ? Di = Tw(e) : Di = Or ? up(e.stateNode) : null, !0;
    }
    function ww() {
      return ll && Di !== null;
    }
    function oE(e) {
      for (var t = Di; t; )
        rE(e, t), t = up(t);
    }
    function Cf() {
      Or = null, Di = null, ll = !1, ac = !1;
    }
    function sE() {
      Fo !== null && (nC(Fo), Fo = null);
    }
    function Lr() {
      return ll;
    }
    function eg(e) {
      Fo === null ? Fo = [e] : Fo.push(e);
    }
    var xw = de.ReactCurrentBatchConfig, bw = null;
    function _w() {
      return xw.transition;
    }
    var ul = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var kw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & sn && (t = a), a = a.return;
        return t;
      }, ic = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], lc = /* @__PURE__ */ new Set();
      ul.recordUnsafeLifecycleWarnings = function(e, t) {
        lc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & sn && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & sn && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & sn && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, ul.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Je(w) || "Component"), lc.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Je(w) || "Component"), lc.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Je(w) || "Component"), lc.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Je(w) || "Component"), lc.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Je(w) || "Component"), lc.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Je(w) || "Component"), lc.add(w.type);
        }), mp = []), t.size > 0) {
          var f = ic(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ic(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = ic(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = ic(e);
          Me(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = ic(a);
          Me(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = ic(u);
          Me(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var zh = /* @__PURE__ */ new Map(), cE = /* @__PURE__ */ new Set();
      ul.recordLegacyContextWarning = function(e, t) {
        var a = kw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!cE.has(e.type)) {
          var i = zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], zh.set(a, i)), i.push(e));
        }
      }, ul.flushLegacyContextWarning = function() {
        zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Je(s) || "Component"), cE.add(s.type);
            });
            var u = ic(i);
            try {
              gn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              ln();
            }
          }
        });
      }, ul.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], zh = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, fE = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, fE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Je(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Dw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & sn || it) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ae) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Dw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Je(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ae)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Pn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Uh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ah(e) {
      {
        var t = Je(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function dE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function pE(e) {
      function t(O, V) {
        if (e) {
          var L = O.deletions;
          L === null ? (O.deletions = [V], O.flags |= zt) : L.push(V);
        }
      }
      function a(O, V) {
        if (!e)
          return null;
        for (var L = V; L !== null; )
          t(O, L), L = L.sibling;
        return null;
      }
      function i(O, V) {
        for (var L = /* @__PURE__ */ new Map(), K = V; K !== null; )
          K.key !== null ? L.set(K.key, K) : L.set(K.index, K), K = K.sibling;
        return L;
      }
      function u(O, V) {
        var L = hc(O, V);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, V, L) {
        if (O.index = L, !e)
          return O.flags |= Dv, V;
        var K = O.alternate;
        if (K !== null) {
          var ye = K.index;
          return ye < V ? (O.flags |= Zt, V) : ye;
        } else
          return O.flags |= Zt, V;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Zt), O;
      }
      function p(O, V, L, K) {
        if (V === null || V.tag !== ne) {
          var ye = eS(L, O.mode, K);
          return ye.return = O, ye;
        } else {
          var fe = u(V, L);
          return fe.return = O, fe;
        }
      }
      function v(O, V, L, K) {
        var ye = L.type;
        if (ye === ca)
          return g(O, V, L.props.children, K, L.key);
        if (V !== null && (V.elementType === ye || // Keep this check inline so it only runs on the false path:
        gC(V, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Be && dE(ye) === V.type)) {
          var fe = u(V, L.props);
          return fe.ref = yp(O, V, L), fe.return = O, fe._debugSource = L._source, fe._debugOwner = L._owner, fe;
        }
        var Ke = J0(L, O.mode, K);
        return Ke.ref = yp(O, V, L), Ke.return = O, Ke;
      }
      function y(O, V, L, K) {
        if (V === null || V.tag !== Te || V.stateNode.containerInfo !== L.containerInfo || V.stateNode.implementation !== L.implementation) {
          var ye = tS(L, O.mode, K);
          return ye.return = O, ye;
        } else {
          var fe = u(V, L.children || []);
          return fe.return = O, fe;
        }
      }
      function g(O, V, L, K, ye) {
        if (V === null || V.tag !== tt) {
          var fe = Xo(L, O.mode, K, ye);
          return fe.return = O, fe;
        } else {
          var Ke = u(V, L);
          return Ke.return = O, Ke;
        }
      }
      function b(O, V, L) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var K = eS("" + V, O.mode, L);
          return K.return = O, K;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Cr: {
              var ye = J0(V, O.mode, L);
              return ye.ref = yp(O, null, V), ye.return = O, ye;
            }
            case Vr: {
              var fe = tS(V, O.mode, L);
              return fe.return = O, fe;
            }
            case Be: {
              var Ke = V._payload, at = V._init;
              return b(O, at(Ke), L);
            }
          }
          if (Dt(V) || Pr(V)) {
            var Xt = Xo(V, O.mode, L, null);
            return Xt.return = O, Xt;
          }
          Uh(O, V);
        }
        return typeof V == "function" && Ah(O), null;
      }
      function w(O, V, L, K) {
        var ye = V !== null ? V.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return ye !== null ? null : p(O, V, "" + L, K);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Cr:
              return L.key === ye ? v(O, V, L, K) : null;
            case Vr:
              return L.key === ye ? y(O, V, L, K) : null;
            case Be: {
              var fe = L._payload, Ke = L._init;
              return w(O, V, Ke(fe), K);
            }
          }
          if (Dt(L) || Pr(L))
            return ye !== null ? null : g(O, V, L, K, null);
          Uh(O, L);
        }
        return typeof L == "function" && Ah(O), null;
      }
      function z(O, V, L, K, ye) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var fe = O.get(L) || null;
          return p(V, fe, "" + K, ye);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Cr: {
              var Ke = O.get(K.key === null ? L : K.key) || null;
              return v(V, Ke, K, ye);
            }
            case Vr: {
              var at = O.get(K.key === null ? L : K.key) || null;
              return y(V, at, K, ye);
            }
            case Be:
              var Xt = K._payload, Ut = K._init;
              return z(O, V, L, Ut(Xt), ye);
          }
          if (Dt(K) || Pr(K)) {
            var In = O.get(L) || null;
            return g(V, In, K, ye, null);
          }
          Uh(V, K);
        }
        return typeof K == "function" && Ah(V), null;
      }
      function A(O, V, L) {
        {
          if (typeof O != "object" || O === null)
            return V;
          switch (O.$$typeof) {
            case Cr:
            case Vr:
              fE(O, L);
              var K = O.key;
              if (typeof K != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(K);
                break;
              }
              if (!V.has(K)) {
                V.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Be:
              var ye = O._payload, fe = O._init;
              A(fe(ye), V, L);
              break;
          }
        }
        return V;
      }
      function H(O, V, L, K) {
        for (var ye = null, fe = 0; fe < L.length; fe++) {
          var Ke = L[fe];
          ye = A(Ke, ye, O);
        }
        for (var at = null, Xt = null, Ut = V, In = 0, At = 0, Hn = null; Ut !== null && At < L.length; At++) {
          Ut.index > At ? (Hn = Ut, Ut = null) : Hn = Ut.sibling;
          var na = w(O, Ut, L[At], K);
          if (na === null) {
            Ut === null && (Ut = Hn);
            break;
          }
          e && Ut && na.alternate === null && t(O, Ut), In = s(na, In, At), Xt === null ? at = na : Xt.sibling = na, Xt = na, Ut = Hn;
        }
        if (At === L.length) {
          if (a(O, Ut), Lr()) {
            var Fr = At;
            nc(O, Fr);
          }
          return at;
        }
        if (Ut === null) {
          for (; At < L.length; At++) {
            var fi = b(O, L[At], K);
            fi !== null && (In = s(fi, In, At), Xt === null ? at = fi : Xt.sibling = fi, Xt = fi);
          }
          if (Lr()) {
            var ba = At;
            nc(O, ba);
          }
          return at;
        }
        for (var _a = i(O, Ut); At < L.length; At++) {
          var ra = z(_a, O, At, L[At], K);
          ra !== null && (e && ra.alternate !== null && _a.delete(ra.key === null ? At : ra.key), In = s(ra, In, At), Xt === null ? at = ra : Xt.sibling = ra, Xt = ra);
        }
        if (e && _a.forEach(function(Vf) {
          return t(O, Vf);
        }), Lr()) {
          var Wu = At;
          nc(O, Wu);
        }
        return at;
      }
      function se(O, V, L, K) {
        var ye = Pr(L);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), L.entries === ye && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var fe = ye.call(L);
          if (fe)
            for (var Ke = null, at = fe.next(); !at.done; at = fe.next()) {
              var Xt = at.value;
              Ke = A(Xt, Ke, O);
            }
        }
        var Ut = ye.call(L);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, At = null, Hn = V, na = 0, Fr = 0, fi = null, ba = Ut.next(); Hn !== null && !ba.done; Fr++, ba = Ut.next()) {
          Hn.index > Fr ? (fi = Hn, Hn = null) : fi = Hn.sibling;
          var _a = w(O, Hn, ba.value, K);
          if (_a === null) {
            Hn === null && (Hn = fi);
            break;
          }
          e && Hn && _a.alternate === null && t(O, Hn), na = s(_a, na, Fr), At === null ? In = _a : At.sibling = _a, At = _a, Hn = fi;
        }
        if (ba.done) {
          if (a(O, Hn), Lr()) {
            var ra = Fr;
            nc(O, ra);
          }
          return In;
        }
        if (Hn === null) {
          for (; !ba.done; Fr++, ba = Ut.next()) {
            var Wu = b(O, ba.value, K);
            Wu !== null && (na = s(Wu, na, Fr), At === null ? In = Wu : At.sibling = Wu, At = Wu);
          }
          if (Lr()) {
            var Vf = Fr;
            nc(O, Vf);
          }
          return In;
        }
        for (var Xp = i(O, Hn); !ba.done; Fr++, ba = Ut.next()) {
          var nu = z(Xp, O, Fr, ba.value, K);
          nu !== null && (e && nu.alternate !== null && Xp.delete(nu.key === null ? Fr : nu.key), na = s(nu, na, Fr), At === null ? In = nu : At.sibling = nu, At = nu);
        }
        if (e && Xp.forEach(function(tk) {
          return t(O, tk);
        }), Lr()) {
          var ek = Fr;
          nc(O, ek);
        }
        return In;
      }
      function Ve(O, V, L, K) {
        if (V !== null && V.tag === ne) {
          a(O, V.sibling);
          var ye = u(V, L);
          return ye.return = O, ye;
        }
        a(O, V);
        var fe = eS(L, O.mode, K);
        return fe.return = O, fe;
      }
      function Oe(O, V, L, K) {
        for (var ye = L.key, fe = V; fe !== null; ) {
          if (fe.key === ye) {
            var Ke = L.type;
            if (Ke === ca) {
              if (fe.tag === tt) {
                a(O, fe.sibling);
                var at = u(fe, L.props.children);
                return at.return = O, at._debugSource = L._source, at._debugOwner = L._owner, at;
              }
            } else if (fe.elementType === Ke || // Keep this check inline so it only runs on the false path:
            gC(fe, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ke == "object" && Ke !== null && Ke.$$typeof === Be && dE(Ke) === fe.type) {
              a(O, fe.sibling);
              var Xt = u(fe, L.props);
              return Xt.ref = yp(O, fe, L), Xt.return = O, Xt._debugSource = L._source, Xt._debugOwner = L._owner, Xt;
            }
            a(O, fe);
            break;
          } else
            t(O, fe);
          fe = fe.sibling;
        }
        if (L.type === ca) {
          var Ut = Xo(L.props.children, O.mode, K, L.key);
          return Ut.return = O, Ut;
        } else {
          var In = J0(L, O.mode, K);
          return In.ref = yp(O, V, L), In.return = O, In;
        }
      }
      function _t(O, V, L, K) {
        for (var ye = L.key, fe = V; fe !== null; ) {
          if (fe.key === ye)
            if (fe.tag === Te && fe.stateNode.containerInfo === L.containerInfo && fe.stateNode.implementation === L.implementation) {
              a(O, fe.sibling);
              var Ke = u(fe, L.children || []);
              return Ke.return = O, Ke;
            } else {
              a(O, fe);
              break;
            }
          else
            t(O, fe);
          fe = fe.sibling;
        }
        var at = tS(L, O.mode, K);
        return at.return = O, at;
      }
      function gt(O, V, L, K) {
        var ye = typeof L == "object" && L !== null && L.type === ca && L.key === null;
        if (ye && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Cr:
              return f(Oe(O, V, L, K));
            case Vr:
              return f(_t(O, V, L, K));
            case Be:
              var fe = L._payload, Ke = L._init;
              return gt(O, V, Ke(fe), K);
          }
          if (Dt(L))
            return H(O, V, L, K);
          if (Pr(L))
            return se(O, V, L, K);
          Uh(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Ve(O, V, "" + L, K)) : (typeof L == "function" && Ah(O), a(O, V));
      }
      return gt;
    }
    var Rf = pE(!0), vE = pE(!1);
    function Ow(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = hc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = hc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Lw(e, t) {
      for (var a = e.child; a !== null; )
        g_(a, t), a = a.sibling;
    }
    var lg = Uo(null), ug;
    ug = {};
    var jh = null, Tf = null, og = null, Fh = !1;
    function Hh() {
      jh = null, Tf = null, og = null, Fh = !1;
    }
    function hE() {
      Fh = !0;
    }
    function mE() {
      Fh = !1;
    }
    function yE(e, t, a) {
      ea(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      Jr(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Vl(i.childLanes, t) ? u !== null && !Vl(u.childLanes, t) && (u.childLanes = ut(u.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), u !== null && (u.childLanes = ut(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nw(e, t, a) {
      Mw(e, t, a);
    }
    function Mw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ae) {
                var p = Ro(a), v = Vu(nn, p);
                v.tag = Ph;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = ut(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = ut(w.lanes, a)), cg(i.return, a, e), s.lanes = ut(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Xe)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === jt) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = ut(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = ut(A.lanes, a)), cg(z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function wf(e, t) {
      jh = e, Tf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zr(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function qn(e) {
      Fh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Tf === null) {
          if (jh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Tf = a, jh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Tf = Tf.next = a;
      }
      return t;
    }
    var uc = null;
    function fg(e) {
      uc === null ? uc = [e] : uc.push(e);
    }
    function zw() {
      if (uc !== null) {
        for (var e = 0; e < uc.length; e++) {
          var t = uc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        uc = null;
      }
    }
    function gE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function Uw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Aw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function $a(e, t) {
      return Vh(e, t);
    }
    var jw = Vh;
    function Vh(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (Zt | yi)) !== He && vC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ut(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (u.flags & (Zt | yi)) !== He && vC(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var SE = 0, EE = 1, Ph = 2, dg = 3, Bh = !1, pg, $h;
    pg = !1, $h = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function CE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Vu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: SE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ho(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if ($h === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), Ub()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, jw(e, a);
      } else
        return Aw(e, u, t, a);
    }
    function Ih(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Bv(a)) {
          var s = u.lanes;
          s = kd(s, e.pendingLanes);
          var f = ut(s, a);
          u.lanes = f, Kc(e, f);
        }
      }
    }
    function hg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Fw(e, t, a, i, u, s) {
      switch (a.tag) {
        case EE: {
          var f = a.payload;
          if (typeof f == "function") {
            hE();
            var p = f.call(s, i, u);
            {
              if (e.mode & sn) {
                Bn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Bn(!1);
                }
              }
              mE();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~tr | nt;
        case SE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            hE(), y = v.call(s, i, u);
            {
              if (e.mode & sn) {
                Bn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Bn(!1);
                }
              }
              mE();
            }
          } else
            y = v;
          return y == null ? i : lt({}, i, y);
        }
        case Ph:
          return Bh = !0, i;
      }
      return i;
    }
    function Yh(e, t, a, i) {
      var u = e.updateQueue;
      Bh = !1, $h = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = u.baseState, A = Y, H = null, se = null, Ve = null, Oe = s;
        do {
          var _t = Oe.lane, gt = Oe.eventTime;
          if (Vl(i, _t)) {
            if (Ve !== null) {
              var V = {
                eventTime: gt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                tag: Oe.tag,
                payload: Oe.payload,
                callback: Oe.callback,
                next: null
              };
              Ve = Ve.next = V;
            }
            z = Fw(e, u, Oe, z, t, a);
            var L = Oe.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            Oe.lane !== Jt) {
              e.flags |= Wn;
              var K = u.effects;
              K === null ? u.effects = [Oe] : K.push(Oe);
            }
          } else {
            var O = {
              eventTime: gt,
              lane: _t,
              tag: Oe.tag,
              payload: Oe.payload,
              callback: Oe.callback,
              next: null
            };
            Ve === null ? (se = Ve = O, H = z) : Ve = Ve.next = O, A = ut(A, _t);
          }
          if (Oe = Oe.next, Oe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, fe = ye.next;
            ye.next = null, Oe = fe, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        Ve === null && (H = z), u.baseState = H, u.firstBaseUpdate = se, u.lastBaseUpdate = Ve;
        var Ke = u.shared.interleaved;
        if (Ke !== null) {
          var at = Ke;
          do
            A = ut(A, at.lane), at = at.next;
          while (at !== Ke);
        } else s === null && (u.shared.lanes = Y);
        Ip(A), e.lanes = A, e.memoizedState = z;
      }
      $h = null;
    }
    function Hw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function RE() {
      Bh = !1;
    }
    function Wh() {
      return Bh;
    }
    function TE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Hw(f, a));
        }
    }
    var gp = {}, Vo = Uo(gp), Sp = Uo(gp), Qh = Uo(gp);
    function Gh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = Gh(Qh.current);
      return e;
    }
    function mg(e, t) {
      ea(Qh, t, e), ea(Sp, e, e), ea(Vo, gp, e);
      var a = nT(t);
      Jr(Vo, e), ea(Vo, a, e);
    }
    function xf(e) {
      Jr(Vo, e), Jr(Sp, e), Jr(Qh, e);
    }
    function yg() {
      var e = Gh(Vo.current);
      return e;
    }
    function xE(e) {
      Gh(Qh.current);
      var t = Gh(Vo.current), a = rT(t, e.type);
      t !== a && (ea(Sp, e, e), ea(Vo, a, e));
    }
    function gg(e) {
      Sp.current === e && (Jr(Vo, e), Jr(Sp, e));
    }
    var Vw = 0, bE = 1, _E = 1, Ep = 2, ol = Uo(Vw);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function bf(e) {
      return e & bE;
    }
    function Eg(e, t) {
      return e & bE | t;
    }
    function Pw(e, t) {
      return e | t;
    }
    function Po(e, t) {
      ea(ol, t, e);
    }
    function _f(e) {
      Jr(ol, e);
    }
    function Bw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Xh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || IS(i) || Fy(i))
              return t;
          }
        } else if (t.tag === mt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & nt) !== He;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), ar = (
      /* */
      1
    ), Xl = (
      /*  */
      2
    ), ir = (
      /*    */
      4
    ), Nr = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function $w(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = de.ReactCurrentDispatcher, Cp = de.ReactCurrentBatchConfig, Tg, kf;
    Tg = /* @__PURE__ */ new Set();
    var oc = Y, Gt = null, lr = null, ur = null, qh = !1, Rp = !1, Tp = 0, Iw = 0, Yw = 25, P = null, Oi = null, Bo = -1, wg = !1;
    function Bt() {
      {
        var e = P;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function re() {
      {
        var e = P;
        Oi !== null && (Bo++, Oi[Bo] !== e && Ww(e));
      }
    }
    function Df(e) {
      e != null && !Dt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Ww(e) {
      {
        var t = Je(Gt);
        if (!Tg.has(t) && (Tg.add(t), Oi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Bo; u++) {
            for (var s = Oi[u], f = u === Bo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ta() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function xg(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!De(e[a], t[a]))
          return !1;
      return !0;
    }
    function Of(e, t, a, i, u, s) {
      oc = s, Gt = t, Oi = e !== null ? e._debugHookTypes : null, Bo = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? ve.current = XE : Oi !== null ? ve.current = GE : ve.current = QE;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Yw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, lr = null, ur = null, t.updateQueue = null, Bo = -1, ve.current = qE, f = a(i, u);
        } while (Rp);
      }
      ve.current = sm, t._debugHookTypes = Oi;
      var v = lr !== null && lr.next !== null;
      if (oc = Y, Gt = null, lr = null, ur = null, P = null, Oi = null, Bo = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ae) !== le && S("Internal React error: Expected static flag was missing. Please notify the React team."), qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Lf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function kE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qr) !== le ? t.flags &= ~(yu | ja | Wr | be) : t.flags &= ~(Wr | be), e.lanes = To(e.lanes, a);
    }
    function DE() {
      if (ve.current = sm, qh) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qh = !1;
      }
      oc = Y, Gt = null, lr = null, ur = null, Oi = null, Bo = -1, P = null, BE = !1, Rp = !1, Tp = 0;
    }
    function ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ur === null ? Gt.memoizedState = ur = e : ur = ur.next = e, ur;
    }
    function Li() {
      var e;
      if (lr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = lr.next;
      var a;
      if (ur === null ? a = Gt.memoizedState : a = ur.next, a !== null)
        ur = a, a = ur.next, lr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        lr = e;
        var i = {
          memoizedState: lr.memoizedState,
          baseState: lr.baseState,
          baseQueue: lr.baseQueue,
          queue: lr.queue,
          next: null
        };
        ur === null ? Gt.memoizedState = ur = i : ur = ur.next = i;
      }
      return ur;
    }
    function OE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = qw.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = Li(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = lr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, z = null, A = null, H = g;
        do {
          var se = H.lane;
          if (Vl(oc, se)) {
            if (A !== null) {
              var Oe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              A = A.next = Oe;
            }
            if (H.hasEagerState)
              b = H.eagerState;
            else {
              var _t = H.action;
              b = e(b, _t);
            }
          } else {
            var Ve = {
              lane: se,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            A === null ? (z = A = Ve, w = b) : A = A.next = Ve, Gt.lanes = ut(Gt.lanes, se), Ip(se);
          }
          H = H.next;
        } while (H !== null && H !== g);
        A === null ? w = b : A.next = z, De(b, i.memoizedState) || Np(), i.memoizedState = b, i.baseState = w, i.baseQueue = A, u.lastRenderedState = b;
      }
      var gt = u.interleaved;
      if (gt !== null) {
        var O = gt;
        do {
          var V = O.lane;
          Gt.lanes = ut(Gt.lanes, V), Ip(V), O = O.next;
        } while (O !== gt);
      } else f === null && (u.lanes = Y);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Dg(e, t, a) {
      var i = Li(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        De(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Bk(e, t, a) {
    }
    function $k(e, t, a) {
    }
    function Og(e, t, a) {
      var i = Gt, u = ql(), s, f = Lr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), kf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), kf = !0);
      } else {
        if (s = t(), !kf) {
          var p = t();
          De(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
        }
        var v = km();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(v, oc) || LE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, tm(ME.bind(null, i, y, e), [e]), i.flags |= Wr, wp(ar | Nr, NE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Kh(e, t, a) {
      var i = Gt, u = Li(), s = t();
      if (!kf) {
        var f = t();
        De(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
      }
      var p = u.memoizedState, v = !De(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (bp(ME.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      ur !== null && ur.memoizedState.tag & ar) {
        i.flags |= Wr, wp(ar | Nr, NE.bind(null, i, y, s, t), void 0, null);
        var g = km();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(g, oc) || LE(i, t, s);
      }
      return s;
    }
    function LE(e, t, a) {
      e.flags |= mu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = OE(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function NE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zE(t) && UE(e);
    }
    function ME(e, t, a) {
      var i = function() {
        zE(t) && UE(e);
      };
      return a(i);
    }
    function zE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !De(a, i);
      } catch {
        return !0;
      }
    }
    function UE(e) {
      var t = $a(e, ke);
      t !== null && fr(t, e, ke, nn);
    }
    function Zh(e) {
      var t = ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Kw.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(bg);
    }
    function Ng(e) {
      return Dg(bg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = OE(), Gt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Mg(e) {
      var t = ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Jh(e) {
      var t = Li();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = ql(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = wp(ar | t, a, void 0, s);
    }
    function em(e, t, a, i) {
      var u = Li(), s = i === void 0 ? null : i, f = void 0;
      if (lr !== null) {
        var p = lr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (xg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = wp(ar | t, a, f, s);
    }
    function tm(e, t) {
      return (Gt.mode & qr) !== le ? xp(yu | Wr | Ll, Nr, e, t) : xp(Wr | Ll, Nr, e, t);
    }
    function bp(e, t) {
      return em(Wr, Nr, e, t);
    }
    function zg(e, t) {
      return xp(be, Xl, e, t);
    }
    function nm(e, t) {
      return em(be, Xl, e, t);
    }
    function Ug(e, t) {
      var a = be;
      return a |= Aa, (Gt.mode & qr) !== le && (a |= ja), xp(a, ir, e, t);
    }
    function rm(e, t) {
      return em(be, ir, e, t);
    }
    function AE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = be;
      return u |= Aa, (Gt.mode & qr) !== le && (u |= ja), xp(u, ir, AE.bind(null, t, e), i);
    }
    function am(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return em(be, ir, AE.bind(null, t, e), i);
    }
    function Qw(e, t) {
    }
    var im = Qw;
    function jg(e, t) {
      var a = ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function lm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function um(e, t) {
      var a = Li(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = ql();
      return t.memoizedState = e, e;
    }
    function jE(e) {
      var t = Li(), a = lr, i = a.memoizedState;
      return HE(t, i, e);
    }
    function FE(e) {
      var t = Li();
      if (lr === null)
        return t.memoizedState = e, e;
      var a = lr.memoizedState;
      return HE(t, a, e);
    }
    function HE(e, t, a) {
      var i = !Hv(oc);
      if (i) {
        if (!De(a, t)) {
          var u = wr();
          Gt.lanes = ut(Gt.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Gw(e, t, a) {
      var i = br();
      Ot(ly(i, Ti)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Ot(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Me("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = Zh(!1), t = e[0], a = e[1], i = Gw.bind(null, a), u = ql();
      return u.memoizedState = i, [t, i];
    }
    function VE() {
      var e = Lg(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    function PE() {
      var e = Ng(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    var BE = !1;
    function Xw() {
      return BE;
    }
    function Pg() {
      var e = ql(), t = km(), a = t.identifierPrefix, i;
      if (Lr()) {
        var u = dw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Iw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function om() {
      var e = Li(), t = e.memoizedState;
      return t;
    }
    function qw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        IE(t, u);
      else {
        var s = gE(e, t, u, i);
        if (s !== null) {
          var f = xa();
          fr(s, e, i, f), YE(s, t, i);
        }
      }
      WE(e, i);
    }
    function Kw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        IE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ve.current, ve.current = sl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, De(y, v)) {
                Uw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ve.current = p;
            }
          }
        }
        var g = gE(e, t, u, i);
        if (g !== null) {
          var b = xa();
          fr(g, e, i, b), YE(g, t, i);
        }
      }
      WE(e, i);
    }
    function $E(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function IE(e, t) {
      Rp = qh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (Bv(a)) {
        var i = t.lanes;
        i = kd(i, e.pendingLanes);
        var u = ut(i, a);
        t.lanes = u, Kc(e, u);
      }
    }
    function WE(e, t, a) {
      Ji(e, t);
    }
    var sm = {
      readContext: qn,
      useCallback: ta,
      useContext: ta,
      useEffect: ta,
      useImperativeHandle: ta,
      useInsertionEffect: ta,
      useLayoutEffect: ta,
      useMemo: ta,
      useReducer: ta,
      useRef: ta,
      useState: ta,
      useDebugValue: ta,
      useDeferredValue: ta,
      useTransition: ta,
      useMutableSource: ta,
      useSyncExternalStore: ta,
      useId: ta,
      unstable_isNewReconciler: ge
    }, QE = null, GE = null, XE = null, qE = null, Kl = null, sl = null, cm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, rt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      QE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Bt(), Df(t), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Bt(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Bt(), Df(t), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Bt(), Df(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Bt(), Df(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Bt(), Df(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Bt(), Df(t);
          var a = ve.current;
          ve.current = Kl;
          try {
            return Fg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Bt();
          var i = ve.current;
          ve.current = Kl;
          try {
            return _g(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Bt(), Mg(e);
        },
        useState: function(e) {
          P = "useState", Bt();
          var t = ve.current;
          ve.current = Kl;
          try {
            return Zh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Bt(), Hg(e);
        },
        useTransition: function() {
          return P = "useTransition", Bt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Bt(), Og(e, t, a);
        },
        useId: function() {
          return P = "useId", Bt(), Pg();
        },
        unstable_isNewReconciler: ge
      }, GE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), Ug(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = ve.current;
          ve.current = Kl;
          try {
            return Fg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = ve.current;
          ve.current = Kl;
          try {
            return _g(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), Mg(e);
        },
        useState: function(e) {
          P = "useState", re();
          var t = ve.current;
          ve.current = Kl;
          try {
            return Zh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), Hg(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Og(e, t, a);
        },
        useId: function() {
          return P = "useId", re(), Pg();
        },
        unstable_isNewReconciler: ge
      }, XE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), rm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = ve.current;
          ve.current = sl;
          try {
            return um(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = ve.current;
          ve.current = sl;
          try {
            return kg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), Jh();
        },
        useState: function(e) {
          P = "useState", re();
          var t = ve.current;
          ve.current = sl;
          try {
            return Lg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), im();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), jE(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), VE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Kh(e, t);
        },
        useId: function() {
          return P = "useId", re(), om();
        },
        unstable_isNewReconciler: ge
      }, qE = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", re(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", re(), rm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", re();
          var a = ve.current;
          ve.current = cm;
          try {
            return um(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", re();
          var i = ve.current;
          ve.current = cm;
          try {
            return Dg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", re(), Jh();
        },
        useState: function(e) {
          P = "useState", re();
          var t = ve.current;
          ve.current = cm;
          try {
            return Ng(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", re(), im();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", re(), FE(e);
        },
        useTransition: function() {
          return P = "useTransition", re(), PE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", re(), Kh(e, t);
        },
        useId: function() {
          return P = "useId", re(), om();
        },
        unstable_isNewReconciler: ge
      }, Kl = {
        readContext: function(e) {
          return Bg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", rt(), Bt(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", rt(), Bt(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", rt(), Bt(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", rt(), Bt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", rt(), Bt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", rt(), Bt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", rt(), Bt();
          var a = ve.current;
          ve.current = Kl;
          try {
            return Fg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", rt(), Bt();
          var i = ve.current;
          ve.current = Kl;
          try {
            return _g(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", rt(), Bt(), Mg(e);
        },
        useState: function(e) {
          P = "useState", rt(), Bt();
          var t = ve.current;
          ve.current = Kl;
          try {
            return Zh(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", rt(), Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", rt(), Bt(), Hg(e);
        },
        useTransition: function() {
          return P = "useTransition", rt(), Bt(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", rt(), Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", rt(), Bt(), Og(e, t, a);
        },
        useId: function() {
          return P = "useId", rt(), Bt(), Pg();
        },
        unstable_isNewReconciler: ge
      }, sl = {
        readContext: function(e) {
          return Bg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", rt(), re(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", rt(), re(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", rt(), re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", rt(), re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", rt(), re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", rt(), re(), rm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", rt(), re();
          var a = ve.current;
          ve.current = sl;
          try {
            return um(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", rt(), re();
          var i = ve.current;
          ve.current = sl;
          try {
            return kg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", rt(), re(), Jh();
        },
        useState: function(e) {
          P = "useState", rt(), re();
          var t = ve.current;
          ve.current = sl;
          try {
            return Lg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", rt(), re(), im();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", rt(), re(), jE(e);
        },
        useTransition: function() {
          return P = "useTransition", rt(), re(), VE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", rt(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", rt(), re(), Kh(e, t);
        },
        useId: function() {
          return P = "useId", rt(), re(), om();
        },
        unstable_isNewReconciler: ge
      }, cm = {
        readContext: function(e) {
          return Bg(), qn(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", rt(), re(), lm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", rt(), re(), qn(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", rt(), re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", rt(), re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", rt(), re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", rt(), re(), rm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", rt(), re();
          var a = ve.current;
          ve.current = sl;
          try {
            return um(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", rt(), re();
          var i = ve.current;
          ve.current = sl;
          try {
            return Dg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", rt(), re(), Jh();
        },
        useState: function(e) {
          P = "useState", rt(), re();
          var t = ve.current;
          ve.current = sl;
          try {
            return Ng(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", rt(), re(), im();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", rt(), re(), FE(e);
        },
        useTransition: function() {
          return P = "useTransition", rt(), re(), PE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", rt(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", rt(), re(), Kh(e, t);
        },
        useId: function() {
          return P = "useId", rt(), re(), om();
        },
        unstable_isNewReconciler: ge
      };
    }
    var $o = _.unstable_now, KE = 0, fm = -1, _p = -1, dm = -1, $g = !1, pm = !1;
    function ZE() {
      return $g;
    }
    function Zw() {
      pm = !0;
    }
    function Jw() {
      $g = !1, pm = !1;
    }
    function ex() {
      $g = pm, pm = !1;
    }
    function JE() {
      return KE;
    }
    function e1() {
      KE = $o();
    }
    function Ig(e) {
      _p = $o(), e.actualStartTime < 0 && (e.actualStartTime = $o());
    }
    function t1(e) {
      _p = -1;
    }
    function vm(e, t) {
      if (_p >= 0) {
        var a = $o() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Zl(e) {
      if (fm >= 0) {
        var t = $o() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Tt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Yg(e) {
      if (dm >= 0) {
        var t = $o() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Tt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Jl() {
      fm = $o();
    }
    function Wg() {
      dm = $o();
    }
    function Qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cl(e, t) {
      if (e && e.defaultProps) {
        var a = lt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, Xg, qg, Kg, Zg, Jg, n1, hm, e0, t0, n0, kp;
    {
      Xg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), e0 = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), t0 = /* @__PURE__ */ new Set(), n0 = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var r1 = /* @__PURE__ */ new Set();
      hm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          r1.has(a) || (r1.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, n1 = function(e, t) {
        if (t === void 0) {
          var a = Ct(e) || "Component";
          Jg.has(a) || (Jg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function r0(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & sn) {
          Bn(!0);
          try {
            s = a(i, u);
          } finally {
            Bn(!1);
          }
        }
        n1(t, s);
      }
      var f = s == null ? u : lt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var a0 = {
      isMounted: ha,
      enqueueSetState: function(e, t, a) {
        var i = mi(e), u = xa(), s = Qo(i), f = Vu(u, s);
        f.payload = t, a != null && (hm(a, "setState"), f.callback = a);
        var p = Ho(i, f, s);
        p !== null && (fr(p, i, s, u), Ih(p, i, s)), Ji(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = mi(e), u = xa(), s = Qo(i), f = Vu(u, s);
        f.tag = EE, f.payload = t, a != null && (hm(a, "replaceState"), f.callback = a);
        var p = Ho(i, f, s);
        p !== null && (fr(p, i, s, u), Ih(p, i, s)), Ji(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = mi(e), i = xa(), u = Qo(a), s = Vu(i, u);
        s.tag = Ph, t != null && (hm(t, "forceUpdate"), s.callback = t);
        var f = Ho(a, s, u);
        f !== null && (fr(f, a, u, i), Ih(f, a, u)), Sd(a, u);
      }
    };
    function a1(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & sn) {
            Bn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Bn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ct(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !bn(a, i) || !bn(u, s) : !0;
    }
    function tx(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ct(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & sn) === le && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & sn) === le && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !t0.has(t) && (t0.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ct(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Dt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function i1(e, t) {
      t.updater = a0, e.stateNode = t, _c(t, e), t._reactInternalInstance = Gg;
    }
    function l1(e, t, a) {
      var i = !1, u = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Q && f._context === void 0
        );
        if (!p && !n0.has(t)) {
          n0.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ct(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = qn(f);
      else {
        u = yf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? gf(e, u) : si;
      }
      var g = new t(a, s);
      if (e.mode & sn) {
        Bn(!0);
        try {
          g = new t(a, s);
        } finally {
          Bn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      i1(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = Ct(t) || "Component";
          qg.has(w) || (qg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), z !== null || A !== null || H !== null) {
            var se = Ct(t) || "Component", Ve = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(se) || (Zg.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Ve, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && XS(e, u, s), g;
    }
    function nx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Je(e) || "Component"), a0.enqueueReplaceState(t, t.state, null));
    }
    function u1(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Je(e) || "Component";
          Xg.has(s) || (Xg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        a0.enqueueReplaceState(t, t.state, null);
      }
    }
    function i0(e, t, a, i) {
      tx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = qn(s);
      else {
        var f = yf(e, t, !0);
        u.context = gf(e, f);
      }
      {
        if (u.state === a) {
          var p = Ct(t) || "Component";
          e0.has(p) || (e0.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & sn && ul.recordLegacyContextWarning(e, u), ul.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (r0(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (nx(e, u), Yh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = be;
        y |= Aa, (e.mode & qr) !== le && (y |= ja), e.flags |= y;
      }
    }
    function rx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = qn(p);
      else {
        var y = yf(e, t, !0);
        v = gf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && u1(e, u, a, v), RE();
      var w = e.memoizedState, z = u.state = w;
      if (Yh(e, a, u, i), z = e.memoizedState, s === a && w === z && !bh() && !Wh()) {
        if (typeof u.componentDidMount == "function") {
          var A = be;
          A |= Aa, (e.mode & qr) !== le && (A |= ja), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (r0(e, t, g, a), z = e.memoizedState);
      var H = Wh() || a1(e, t, s, a, w, z, v);
      if (H) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = be;
          se |= Aa, (e.mode & qr) !== le && (se |= ja), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ve = be;
          Ve |= Aa, (e.mode & qr) !== le && (Ve |= ja), e.flags |= Ve;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, H;
    }
    function ax(e, t, a, i, u) {
      var s = t.stateNode;
      CE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : cl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = si;
      if (typeof g == "object" && g !== null)
        b = qn(g);
      else {
        var w = yf(t, a, !0);
        b = gf(t, w);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && u1(t, s, i, b), RE();
      var H = t.memoizedState, se = s.state = H;
      if (Yh(t, i, s, u), se = t.memoizedState, f === v && H === se && !bh() && !Wh() && !oe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= be), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= An), !1;
      typeof z == "function" && (r0(t, a, z, i), se = t.memoizedState);
      var Ve = Wh() || a1(t, a, p, i, H, se, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      oe;
      return Ve ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, b)), typeof s.componentDidUpdate == "function" && (t.flags |= be), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= An)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= be), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= An), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = b, Ve;
    }
    function sc(e, t) {
      return {
        value: e,
        source: t,
        stack: Gu(t),
        digest: null
      };
    }
    function l0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ix(e, t) {
      return !0;
    }
    function u0(e, t) {
      try {
        var a = ix(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ae)
            return;
          console.error(i);
        }
        var p = u ? Je(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Je(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var lx = typeof WeakMap == "function" ? WeakMap : Map;
    function o1(e, t, a) {
      var i = Vu(nn, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Zb(u), u0(e, t);
      }, i;
    }
    function o0(e, t, a) {
      var i = Vu(nn, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          SC(e), u0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        SC(e), u0(e, t), typeof u != "function" && qb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Zr(e.lanes, ke) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Je(e) || "Unknown"));
      }), i;
    }
    function s1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new lx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Jb.bind(null, e, t, a);
        ma && Yp(e, a), t.then(s, s);
      }
    }
    function ux(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ox(e, t) {
      var a = e.tag;
      if ((e.mode & Ae) === le && (a === xe || a === je || a === qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function c1(e) {
      var t = e;
      do {
        if (t.tag === Ce && Bw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function f1(e, t, a, i, u) {
      if ((e.mode & Ae) === le) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= nt, a.flags |= kc, a.flags &= ~(kv | Ol), a.tag === ae) {
            var s = a.alternate;
            if (s === null)
              a.tag = dn;
            else {
              var f = Vu(nn, ke);
              f.tag = Ph, Ho(a, f, ke);
            }
          }
          a.lanes = ut(a.lanes, ke);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = u, e;
    }
    function sx(e, t, a, i, u) {
      if (a.flags |= Ol, ma && Yp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ox(a), Lr() && a.mode & Ae && nE();
        var f = c1(t);
        if (f !== null) {
          f.flags &= ~Tr, f1(f, t, a, e, u), f.mode & Ae && s1(e, s, u), ux(f, e, s);
          return;
        } else {
          if (!xd(u)) {
            s1(e, s, u), P0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Lr() && a.mode & Ae) {
        nE();
        var v = c1(t);
        if (v !== null) {
          (v.flags & tr) === He && (v.flags |= Tr), f1(v, t, a, e, u), eg(sc(i, a));
          return;
        }
      }
      i = sc(i, a), Bb(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= tr;
            var b = Ro(u);
            y.lanes = ut(y.lanes, b);
            var w = o1(y, g, b);
            hg(y, w);
            return;
          }
          case ae:
            var z = i, A = y.type, H = y.stateNode;
            if ((y.flags & nt) === He && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !cC(H))) {
              y.flags |= tr;
              var se = Ro(u);
              y.lanes = ut(y.lanes, se);
              var Ve = o0(y, z, se);
              hg(y, Ve);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function cx() {
      return null;
    }
    var Dp = de.ReactCurrentOwner, fl = !1, s0, Op, c0, f0, d0, cc, p0, mm, Lp;
    s0 = {}, Op = {}, c0 = {}, f0 = {}, d0 = {}, cc = !1, p0 = {}, mm = {}, Lp = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = vE(t, null, a, i) : t.child = Rf(t, e.child, a, i);
    }
    function fx(e, t, a, i) {
      t.child = Rf(t, e.child, null, i), t.child = Rf(t, null, a, i);
    }
    function d1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      wf(t, u), ya(t);
      {
        if (Dp.current = t, er(!0), v = Of(e, t, f, i, p, u), y = Lf(), t.mode & sn) {
          Bn(!0);
          try {
            v = Of(e, t, f, i, p, u), y = Lf();
          } finally {
            Bn(!1);
          }
        }
        er(!1);
      }
      return ga(), e !== null && !fl ? (kE(e, t, u), Pu(e, t, u)) : (Lr() && y && Gy(t), t.flags |= ri, Ta(e, t, v, u), t.child);
    }
    function p1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (m_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Hf(s), t.tag = qe, t.type = f, m0(t, s), v1(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && il(
            p,
            i,
            // Resolved props
            "prop",
            Ct(s)
          ), a.defaultProps !== void 0) {
            var v = Ct(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = Z0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && il(
          b,
          i,
          // Resolved props
          "prop",
          Ct(g)
        );
      }
      var w = e.child, z = R0(e, u);
      if (!z) {
        var A = w.memoizedProps, H = a.compare;
        if (H = H !== null ? H : bn, H(A, i) && e.ref === t.ref)
          return Pu(e, t, u);
      }
      t.flags |= ri;
      var se = hc(w, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function v1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Be) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && il(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ct(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (bn(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = g, R0(e, u))
            (e.flags & kc) !== He && (fl = !0);
          else return t.lanes = e.lanes, Pu(e, t, u);
      }
      return v0(e, t, a, i, u);
    }
    function h1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || k)
        if ((t.mode & Ae) === le) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Dm(t, a);
        } else if (Zr(a, Sa)) {
          var b = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Dm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = ut(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Sa;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Dm(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = ut(s.baseLanes, a), t.memoizedState = null) : z = a, Dm(t, z);
      }
      return Ta(e, t, u, a), t.child;
    }
    function dx(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function px(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function vx(e, t, a) {
      {
        t.flags |= be;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ta(e, t, s, a), t.child;
    }
    function m1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= pa, t.flags |= gi);
    }
    function v0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f;
      {
        var p = yf(t, a, !0);
        f = gf(t, p);
      }
      var v, y;
      wf(t, u), ya(t);
      {
        if (Dp.current = t, er(!0), v = Of(e, t, a, i, f, u), y = Lf(), t.mode & sn) {
          Bn(!0);
          try {
            v = Of(e, t, a, i, f, u), y = Lf();
          } finally {
            Bn(!1);
          }
        }
        er(!1);
      }
      return ga(), e !== null && !fl ? (kE(e, t, u), Pu(e, t, u)) : (Lr() && y && Gy(t), t.flags |= ri, Ta(e, t, v, u), t.child);
    }
    function y1(e, t, a, i, u) {
      {
        switch (L_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= nt, t.flags |= tr;
            var y = new Error("Simulated error coming from DevTools"), g = Ro(u);
            t.lanes = ut(t.lanes, g);
            var b = o0(t, sc(y, t), g);
            hg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && il(
            w,
            i,
            // Resolved props
            "prop",
            Ct(a)
          );
        }
      }
      var z;
      Gl(a) ? (z = !0, kh(t)) : z = !1, wf(t, u);
      var A = t.stateNode, H;
      A === null ? (gm(e, t), l1(t, a, i), i0(t, a, i, u), H = !0) : e === null ? H = rx(t, a, i, u) : H = ax(e, t, a, i, u);
      var se = h0(e, t, a, H, z, u);
      {
        var Ve = t.stateNode;
        H && Ve.props !== i && (cc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Je(t) || "a component"), cc = !0);
      }
      return se;
    }
    function h0(e, t, a, i, u, s) {
      m1(e, t);
      var f = (t.flags & nt) !== He;
      if (!i && !f)
        return u && ZS(t, a, !1), Pu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, t1();
      else {
        ya(t);
        {
          if (er(!0), v = p.render(), t.mode & sn) {
            Bn(!0);
            try {
              p.render();
            } finally {
              Bn(!1);
            }
          }
          er(!1);
        }
        ga();
      }
      return t.flags |= ri, e !== null && f ? fx(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && ZS(t, a, !0), t.child;
    }
    function g1(e) {
      var t = e.stateNode;
      t.pendingContext ? qS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qS(e, t.context, !1), mg(e, t.containerInfo);
    }
    function hx(e, t, a) {
      if (g1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      CE(e, t), Yh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Tr) {
          var g = sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return S1(e, t, p, a, g);
        } else if (p !== s) {
          var b = sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return S1(e, t, p, a, b);
        } else {
          gw(t);
          var w = vE(t, null, p, a);
          t.child = w;
          for (var z = w; z; )
            z.flags = z.flags & ~Zt | yi, z = z.sibling;
        }
      } else {
        if (Cf(), p === s)
          return Pu(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function S1(e, t, a, i, u) {
      return Cf(), eg(u), t.flags |= Tr, Ta(e, t, a, i), t.child;
    }
    function mx(e, t, a) {
      xE(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= Ua), m1(e, t), Ta(e, t, f, a), t.child;
    }
    function yx(e, t) {
      return e === null && Jy(t), null;
    }
    function gx(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = y_(v), g = cl(v, u), b;
      switch (y) {
        case xe:
          return m0(t, v), t.type = v = Hf(v), b = v0(null, t, v, g, i), b;
        case ae:
          return t.type = v = W0(v), b = y1(null, t, v, g, i), b;
        case je:
          return t.type = v = Q0(v), b = d1(null, t, v, g, i), b;
        case vt: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && il(
              w,
              g,
              // Resolved for outer only
              "prop",
              Ct(v)
            );
          }
          return b = p1(
            null,
            t,
            v,
            cl(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Be && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function Sx(e, t, a, i, u) {
      gm(e, t), t.tag = ae;
      var s;
      return Gl(a) ? (s = !0, kh(t)) : s = !1, wf(t, u), l1(t, a, i), i0(t, a, i, u), h0(null, t, a, !0, s, u);
    }
    function Ex(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s;
      {
        var f = yf(t, a, !1);
        s = gf(t, f);
      }
      wf(t, i);
      var p, v;
      ya(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Ct(a) || "Unknown";
          s0[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), s0[y] = !0);
        }
        t.mode & sn && ul.recordLegacyContextWarning(t, null), er(!0), Dp.current = t, p = Of(null, t, a, u, s, i), v = Lf(), er(!1);
      }
      if (ga(), t.flags |= ri, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Ct(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = Ct(a) || "Unknown";
          Op[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Op[b] = !0);
        }
        t.tag = ae, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Gl(a) ? (w = !0, kh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), i1(t, p), i0(t, a, u, i), h0(null, t, a, !0, w, i);
      } else {
        if (t.tag = xe, t.mode & sn) {
          Bn(!0);
          try {
            p = Of(null, t, a, u, s, i), v = Lf();
          } finally {
            Bn(!1);
          }
        }
        return Lr() && v && Gy(t), Ta(null, t, p, i), m0(t, a), t.child;
      }
    }
    function m0(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Na();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), d0[u] || (d0[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Ct(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Ct(t) || "Unknown";
          f0[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), f0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Ct(t) || "Unknown";
          c0[v] || (S("%s: Function components do not support contextType.", v), c0[v] = !0);
        }
      }
    }
    var y0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Jt
    };
    function g0(e) {
      return {
        baseLanes: e,
        cachePool: cx(),
        transitions: null
      };
    }
    function Cx(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Rx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Ep);
    }
    function Tx(e, t) {
      return To(e.childLanes, t);
    }
    function E1(e, t, a) {
      var i = t.pendingProps;
      N_(t) && (t.flags |= nt);
      var u = ol.current, s = !1, f = (t.flags & nt) !== He;
      if (f || Rx(u, e) ? (s = !0, t.flags &= ~nt) : (e === null || e.memoizedState !== null) && (u = Pw(u, _E)), u = bf(u), Po(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return kx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = wx(t, y, g, a), w = t.child;
          return w.memoizedState = g0(a), t.memoizedState = y0, b;
        } else
          return S0(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return Dx(e, t, f, i, A, z, a);
        }
        if (s) {
          var H = i.fallback, se = i.children, Ve = bx(e, t, se, H, a), Oe = t.child, _t = e.child.memoizedState;
          return Oe.memoizedState = _t === null ? g0(a) : Cx(_t, a), Oe.childLanes = Tx(e, a), t.memoizedState = y0, Ve;
        } else {
          var gt = i.children, O = xx(e, t, gt, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function S0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = E0(u, i);
      return s.return = e, e.child = s, s;
    }
    function wx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ae) === le && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & et && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Xo(a, u, i, null)) : (p = E0(f, u), v = Xo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function E0(e, t, a) {
      return CC(e, t, Y, null);
    }
    function C1(e, t) {
      return hc(e, t);
    }
    function xx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = C1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ae) === le && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= zt) : p.push(s);
      }
      return t.child = f, f;
    }
    function bx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ae) === le && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & et && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = C1(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var b;
      return p !== null ? b = hc(p, i) : (b = Xo(i, s, u, null), b.flags |= Zt), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function ym(e, t, a, i) {
      i !== null && eg(i), Rf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = S0(t, s);
      return f.flags |= Zt, t.memoizedState = null, f;
    }
    function _x(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = E0(f, s), v = Xo(i, s, u, null);
      return v.flags |= Zt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ae) !== le && Rf(t, e.child, null, u), v;
    }
    function kx(e, t, a) {
      return (e.mode & Ae) === le ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ke) : Fy(t) ? e.lanes = el : e.lanes = Sa, null;
    }
    function Dx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Tr) {
          t.flags &= ~Tr;
          var O = l0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ym(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= nt, null;
          var V = i.children, L = i.fallback, K = _x(e, t, V, L, f), ye = t.child;
          return ye.memoizedState = g0(f), t.memoizedState = y0, K;
        }
      else {
        if (mw(), (t.mode & Ae) === le)
          return ym(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = MT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = l0(b, p, y);
          return ym(e, t, f, w);
        }
        var z = Zr(f, e.childLanes);
        if (fl || z) {
          var A = km();
          if (A !== null) {
            var H = Ld(A, f);
            if (H !== Jt && H !== s.retryLane) {
              s.retryLane = H;
              var se = nn;
              $a(e, H), fr(A, e, H, se);
            }
          }
          P0();
          var Ve = l0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ym(e, t, f, Ve);
        } else if (IS(u)) {
          t.flags |= nt, t.child = e.child;
          var Oe = e_.bind(null, e);
          return zT(u, Oe), null;
        } else {
          Sw(t, u, s.treeContext);
          var _t = i.children, gt = S0(t, _t);
          return gt.flags |= yi, gt;
        }
      }
    }
    function R1(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), cg(e.return, t, a);
    }
    function Ox(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
          var u = i.memoizedState;
          u !== null && R1(i, a, e);
        } else if (i.tag === mt)
          R1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Lx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Xh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Nx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !p0[e])
        if (p0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Mx(e, t) {
      e !== void 0 && !mm[e] && (e !== "collapsed" && e !== "hidden" ? (mm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (mm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function T1(e, t) {
      {
        var a = Dt(e), i = !a && typeof Pr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function zx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Dt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!T1(e[a], a))
              return;
        } else {
          var i = Pr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!T1(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function C0(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function w1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Nx(u), Mx(s, u), zx(f, u), Ta(e, t, f, a);
      var p = ol.current, v = Sg(p, Ep);
      if (v)
        p = Eg(p, Ep), t.flags |= nt;
      else {
        var y = e !== null && (e.flags & nt) !== He;
        y && Ox(t, t.child, a), p = bf(p);
      }
      if (Po(t, p), (t.mode & Ae) === le)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Lx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), C0(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var A = z.alternate;
              if (A !== null && Xh(A) === null) {
                t.child = z;
                break;
              }
              var H = z.sibling;
              z.sibling = w, w = z, z = H;
            }
            C0(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            C0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ux(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Rf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var x1 = !1;
    function Ax(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || x1 || (x1 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && il(v, s, "prop", "Context.Provider");
      }
      if (yE(t, u, p), f !== null) {
        var y = f.value;
        if (De(y, p)) {
          if (f.children === s.children && !bh())
            return Pu(e, t, a);
        } else
          Nw(t, u, a);
      }
      var g = s.children;
      return Ta(e, t, g, a), t.child;
    }
    var b1 = !1;
    function jx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (b1 || (b1 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), wf(t, a);
      var f = qn(i);
      ya(t);
      var p;
      return Dp.current = t, er(!0), p = s(f), er(!1), ga(), t.flags |= ri, Ta(e, t, p, a), t.child;
    }
    function Np() {
      fl = !0;
    }
    function gm(e, t) {
      (t.mode & Ae) === le && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
    }
    function Pu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), t1(), Ip(t.lanes), Zr(a, t.childLanes) ? (Ow(e, t), t.child) : null;
    }
    function Fx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= zt) : s.push(e), a.flags |= Zt, a;
      }
    }
    function R0(e, t) {
      var a = e.lanes;
      return !!Zr(a, t);
    }
    function Hx(e, t, a) {
      switch (t.tag) {
        case te:
          g1(t), t.stateNode, Cf();
          break;
        case ee:
          xE(t);
          break;
        case ae: {
          var i = t.type;
          Gl(i) && kh(t);
          break;
        }
        case Te:
          mg(t, t.stateNode.containerInfo);
          break;
        case Xe: {
          var u = t.memoizedProps.value, s = t.type._context;
          yE(t, s, u);
          break;
        }
        case Tt:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= be);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Po(t, bf(ol.current)), t.flags |= nt, null;
            var y = t.child, g = y.childLanes;
            if (Zr(a, g))
              return E1(e, t, a);
            Po(t, bf(ol.current));
            var b = Pu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Po(t, bf(ol.current));
          break;
        }
        case mt: {
          var w = (e.flags & nt) !== He, z = Zr(a, t.childLanes);
          if (w) {
            if (z)
              return w1(e, t, a);
            t.flags |= nt;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Po(t, ol.current), z)
            break;
          return null;
        }
        case We:
        case ot:
          return t.lanes = Y, h1(e, t, a);
      }
      return Pu(e, t, a);
    }
    function _1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Fx(e, t, Z0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = R0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & nt) === He)
            return fl = !1, Hx(e, t, a);
          (e.flags & kc) !== He ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, Lr() && cw(t)) {
        var f = t.index, p = fw();
        tE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Ue:
          return Ex(e, t, t.type, a);
        case fn: {
          var v = t.elementType;
          return gx(e, t, v, a);
        }
        case xe: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : cl(y, g);
          return v0(e, t, y, b, a);
        }
        case ae: {
          var w = t.type, z = t.pendingProps, A = t.elementType === w ? z : cl(w, z);
          return y1(e, t, w, A, a);
        }
        case te:
          return hx(e, t, a);
        case ee:
          return mx(e, t, a);
        case ne:
          return yx(e, t);
        case Ce:
          return E1(e, t, a);
        case Te:
          return Ux(e, t, a);
        case je: {
          var H = t.type, se = t.pendingProps, Ve = t.elementType === H ? se : cl(H, se);
          return d1(e, t, H, Ve, a);
        }
        case tt:
          return dx(e, t, a);
        case _n:
          return px(e, t, a);
        case Tt:
          return vx(e, t, a);
        case Xe:
          return Ax(e, t, a);
        case en:
          return jx(e, t, a);
        case vt: {
          var Oe = t.type, _t = t.pendingProps, gt = cl(Oe, _t);
          if (t.type !== t.elementType) {
            var O = Oe.propTypes;
            O && il(
              O,
              gt,
              // Resolved for outer only
              "prop",
              Ct(Oe)
            );
          }
          return gt = cl(Oe.type, gt), p1(e, t, Oe, gt, a);
        }
        case qe:
          return v1(e, t, t.type, t.pendingProps, a);
        case dn: {
          var V = t.type, L = t.pendingProps, K = t.elementType === V ? L : cl(V, L);
          return Sx(e, t, V, K, a);
        }
        case mt:
          return w1(e, t, a);
        case an:
          break;
        case We:
          return h1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nf(e) {
      e.flags |= be;
    }
    function k1(e) {
      e.flags |= pa, e.flags |= gi;
    }
    var D1, T0, O1, L1;
    D1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ee || u.tag === ne)
          uT(e, u.stateNode);
        else if (u.tag !== Te) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, T0 = function(e, t) {
    }, O1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = sT(f, a, s, i, u, p);
        t.updateQueue = v, v && Nf(t);
      }
    }, L1 = function(e, t, a, i) {
      a !== i && Nf(t);
    };
    function Mp(e, t) {
      if (!Lr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Mr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = He;
      if (t) {
        if ((e.mode & et) !== le) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = ut(a, ut(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = ut(a, ut(g.lanes, g.childLanes)), i |= g.subtreeFlags & nr, i |= g.flags & nr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & et) !== le) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ut(a, ut(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = ut(a, ut(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Vx(e, t, a) {
      if (ww() && (t.mode & Ae) !== le && (t.flags & nt) === He)
        return oE(t), Cf(), t.flags |= Tr | Ol | tr, !1;
      var i = Mh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Rw(t), Mr(t), (t.mode & et) !== le) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Cf(), (t.flags & nt) === He && (t.memoizedState = null), t.flags |= be, Mr(t), (t.mode & et) !== le) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return sE(), !0;
    }
    function N1(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case Ue:
        case fn:
        case qe:
        case xe:
        case je:
        case tt:
        case _n:
        case Tt:
        case en:
        case vt:
          return Mr(t), null;
        case ae: {
          var u = t.type;
          return Gl(u) && _h(t), Mr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (xf(t), Yy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Mh(t);
            if (f)
              Nf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tr) !== He) && (t.flags |= An, sE());
            }
          }
          return T0(e, t), Mr(t), null;
        }
        case ee: {
          gg(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            O1(e, t, y, i, v), e.ref !== t.ref && k1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Mr(t), null;
            }
            var g = yg(), b = Mh(t);
            if (b)
              Ew(t, v, g) && Nf(t);
            else {
              var w = lT(y, i, v, g, t);
              D1(w, t, !1, !1), t.stateNode = w, oT(w, y, i, v) && Nf(t);
            }
            t.ref !== null && k1(t);
          }
          return Mr(t), null;
        }
        case ne: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            L1(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = wE(), se = yg(), Ve = Mh(t);
            Ve ? Cw(t) && Nf(t) : t.stateNode = cT(z, H, se, t);
          }
          return Mr(t), null;
        }
        case Ce: {
          _f(t);
          var Oe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = Vx(e, t, Oe);
            if (!_t)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & nt) !== He)
            return t.lanes = a, (t.mode & et) !== le && Qg(t), t;
          var gt = Oe !== null, O = e !== null && e.memoizedState !== null;
          if (gt !== O && gt) {
            var V = t.child;
            if (V.flags |= Dl, (t.mode & Ae) !== le) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !$);
              L || Sg(ol.current, _E) ? Pb() : P0();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= be), Mr(t), (t.mode & et) !== le && gt) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case Te:
          return xf(t), T0(e, t), e === null && rw(t.stateNode.containerInfo), Mr(t), null;
        case Xe:
          var fe = t.type._context;
          return sg(fe, t), Mr(t), null;
        case dn: {
          var Ke = t.type;
          return Gl(Ke) && _h(t), Mr(t), null;
        }
        case mt: {
          _f(t);
          var at = t.memoizedState;
          if (at === null)
            return Mr(t), null;
          var Xt = (t.flags & nt) !== He, Ut = at.rendering;
          if (Ut === null)
            if (Xt)
              Mp(at, !1);
            else {
              var In = $b() && (e === null || (e.flags & nt) === He);
              if (!In)
                for (var At = t.child; At !== null; ) {
                  var Hn = Xh(At);
                  if (Hn !== null) {
                    Xt = !0, t.flags |= nt, Mp(at, !1);
                    var na = Hn.updateQueue;
                    return na !== null && (t.updateQueue = na, t.flags |= be), t.subtreeFlags = He, Lw(t, a), Po(t, Eg(ol.current, Ep)), t.child;
                  }
                  At = At.sibling;
                }
              at.tail !== null && jn() > J1() && (t.flags |= nt, Xt = !0, Mp(at, !1), t.lanes = Av);
            }
          else {
            if (!Xt) {
              var Fr = Xh(Ut);
              if (Fr !== null) {
                t.flags |= nt, Xt = !0;
                var fi = Fr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= be), Mp(at, !0), at.tail === null && at.tailMode === "hidden" && !Ut.alternate && !Lr())
                  return Mr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              jn() * 2 - at.renderingStartTime > J1() && a !== Sa && (t.flags |= nt, Xt = !0, Mp(at, !1), t.lanes = Av);
            }
            if (at.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var ba = at.last;
              ba !== null ? ba.sibling = Ut : t.child = Ut, at.last = Ut;
            }
          }
          if (at.tail !== null) {
            var _a = at.tail;
            at.rendering = _a, at.tail = _a.sibling, at.renderingStartTime = jn(), _a.sibling = null;
            var ra = ol.current;
            return Xt ? ra = Eg(ra, Ep) : ra = bf(ra), Po(t, ra), _a;
          }
          return Mr(t), null;
        }
        case an:
          break;
        case We:
        case ot: {
          V0(t);
          var Wu = t.memoizedState, Vf = Wu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, nu = Xp !== null;
            nu !== Vf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !k && (t.flags |= Dl);
          }
          return !Vf || (t.mode & Ae) === le ? Mr(t) : Zr(tu, Sa) && (Mr(t), t.subtreeFlags & (Zt | be) && (t.flags |= Dl)), null;
        }
        case kt:
          return null;
        case st:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Px(e, t, a) {
      switch (Xy(t), t.tag) {
        case ae: {
          var i = t.type;
          Gl(i) && _h(t);
          var u = t.flags;
          return u & tr ? (t.flags = u & ~tr | nt, (t.mode & et) !== le && Qg(t), t) : null;
        }
        case te: {
          t.stateNode, xf(t), Yy(t), Rg();
          var s = t.flags;
          return (s & tr) !== He && (s & nt) === He ? (t.flags = s & ~tr | nt, t) : null;
        }
        case ee:
          return gg(t), null;
        case Ce: {
          _f(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Cf();
          }
          var p = t.flags;
          return p & tr ? (t.flags = p & ~tr | nt, (t.mode & et) !== le && Qg(t), t) : null;
        }
        case mt:
          return _f(t), null;
        case Te:
          return xf(t), null;
        case Xe:
          var v = t.type._context;
          return sg(v, t), null;
        case We:
        case ot:
          return V0(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function M1(e, t, a) {
      switch (Xy(t), t.tag) {
        case ae: {
          var i = t.type.childContextTypes;
          i != null && _h(t);
          break;
        }
        case te: {
          t.stateNode, xf(t), Yy(t), Rg();
          break;
        }
        case ee: {
          gg(t);
          break;
        }
        case Te:
          xf(t);
          break;
        case Ce:
          _f(t);
          break;
        case mt:
          _f(t);
          break;
        case Xe:
          var u = t.type._context;
          sg(u, t);
          break;
        case We:
        case ot:
          V0(t);
          break;
      }
    }
    var z1 = null;
    z1 = /* @__PURE__ */ new Set();
    var Sm = !1, zr = !1, Bx = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Mf = null, zf = null;
    function $x(e) {
      ni(null, function() {
        throw e;
      }), Xi();
    }
    var Ix = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & et)
        try {
          Jl(), t.componentWillUnmount();
        } finally {
          Zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function U1(e, t) {
      try {
        Io(ir, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function w0(e, t, a) {
      try {
        Ix(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function Yx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function A1(e, t) {
      try {
        F1(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Uf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (St && ht && e.mode & et)
              try {
                Jl(), i = a(null);
              } finally {
                Zl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          a.current = null;
    }
    function Em(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var j1 = !1;
    function Wx(e, t) {
      aT(e.containerInfo), Ee = t, Qx();
      var a = j1;
      return j1 = !1, a;
    }
    function Qx() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & Qr) !== He && t !== null ? (t.return = e, Ee = t) : Gx();
      }
    }
    function Gx() {
      for (; Ee !== null; ) {
        var e = Ee;
        gn(e);
        try {
          Xx(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Xx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & An) !== He) {
        switch (gn(e), e.tag) {
          case xe:
          case je:
          case qe:
            break;
          case ae: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !cc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : cl(e.type, i), u);
              {
                var p = z1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Je(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              DT(v.containerInfo);
            }
            break;
          }
          case ee:
          case ne:
          case Te:
          case dn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        ln();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== Ia ? Uc(t) : (e & ir) !== Ia && so(t), (e & Xl) !== Ia && Wp(!0), Em(t, a, p), (e & Xl) !== Ia && Wp(!1), (e & Nr) !== Ia ? zv() : (e & ir) !== Ia && co());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Io(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Nr) !== Ia ? zc(t) : (e & ir) !== Ia && ws(t);
            var f = s.create;
            (e & Xl) !== Ia && Wp(!0), s.destroy = f(), (e & Xl) !== Ia && Wp(!1), (e & Nr) !== Ia ? Mv() : (e & ir) !== Ia && Si();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ir) !== He ? v = "useLayoutEffect" : (s.tag & Xl) !== He ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function qx(e, t) {
      if ((t.flags & be) !== He)
        switch (t.tag) {
          case Tt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = JE(), p = t.alternate === null ? "mount" : "update";
            ZE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Tt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Kx(e, t, a, i) {
      if ((a.flags & ai) !== He)
        switch (a.tag) {
          case xe:
          case je:
          case qe: {
            if (!zr)
              if (a.mode & et)
                try {
                  Jl(), Io(ir | ar, a);
                } finally {
                  Zl(a);
                }
              else
                Io(ir | ar, a);
            break;
          }
          case ae: {
            var u = a.stateNode;
            if (a.flags & be && !zr)
              if (t === null)
                if (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), a.mode & et)
                  try {
                    Jl(), u.componentDidMount();
                  } finally {
                    Zl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : cl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), a.mode & et)
                  try {
                    Jl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Zl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !cc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), TE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ee:
                    y = a.child.stateNode;
                    break;
                  case ae:
                    y = a.child.stateNode;
                    break;
                }
              TE(a, v, y);
            }
            break;
          }
          case ee: {
            var g = a.stateNode;
            if (t === null && a.flags & be) {
              var b = a.type, w = a.memoizedProps;
              hT(g, b, w);
            }
            break;
          }
          case ne:
            break;
          case Te:
            break;
          case Tt: {
            {
              var z = a.memoizedProps, A = z.onCommit, H = z.onRender, se = a.stateNode.effectDuration, Ve = JE(), Oe = t === null ? "mount" : "update";
              ZE() && (Oe = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, Oe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ve);
              {
                typeof A == "function" && A(a.memoizedProps.id, Oe, se, Ve), Gb(a);
                var _t = a.return;
                e: for (; _t !== null; ) {
                  switch (_t.tag) {
                    case te:
                      var gt = _t.stateNode;
                      gt.effectDuration += se;
                      break e;
                    case Tt:
                      var O = _t.stateNode;
                      O.effectDuration += se;
                      break e;
                  }
                  _t = _t.return;
                }
              }
            }
            break;
          }
          case Ce: {
            ib(e, a);
            break;
          }
          case mt:
          case dn:
          case an:
          case We:
          case ot:
          case st:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      zr || a.flags & pa && F1(a);
    }
    function Zx(e) {
      switch (e.tag) {
        case xe:
        case je:
        case qe: {
          if (e.mode & et)
            try {
              Jl(), U1(e, e.return);
            } finally {
              Zl(e);
            }
          else
            U1(e, e.return);
          break;
        }
        case ae: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Yx(e, e.return, t), A1(e, e.return);
          break;
        }
        case ee: {
          A1(e, e.return);
          break;
        }
      }
    }
    function Jx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ee) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? xT(u) : _T(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === ne) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? bT(s) : kT(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === We || i.tag === ot) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function F1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ee:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & et)
            try {
              Jl(), u = t(i);
            } finally {
              Zl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Je(e)), t.current = i;
      }
    }
    function eb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function H1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, H1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ee) {
          var a = e.stateNode;
          a !== null && lw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function tb(e) {
      for (var t = e.return; t !== null; ) {
        if (V1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function V1(e) {
      return e.tag === ee || e.tag === te || e.tag === Te;
    }
    function P1(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || V1(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ee && t.tag !== ne && t.tag !== jt; ) {
          if (t.flags & Zt || t.child === null || t.tag === Te)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Zt))
          return t.stateNode;
      }
    }
    function nb(e) {
      var t = tb(e);
      switch (t.tag) {
        case ee: {
          var a = t.stateNode;
          t.flags & Ua && ($S(a), t.flags &= ~Ua);
          var i = P1(e);
          b0(e, i, a);
          break;
        }
        case te:
        case Te: {
          var u = t.stateNode.containerInfo, s = P1(e);
          x0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function x0(e, t, a) {
      var i = e.tag, u = i === ee || i === ne;
      if (u) {
        var s = e.stateNode;
        t ? CT(a, s, t) : ST(a, s);
      } else if (i !== Te) {
        var f = e.child;
        if (f !== null) {
          x0(f, t, a);
          for (var p = f.sibling; p !== null; )
            x0(p, t, a), p = p.sibling;
        }
      }
    }
    function b0(e, t, a) {
      var i = e.tag, u = i === ee || i === ne;
      if (u) {
        var s = e.stateNode;
        t ? ET(a, s, t) : gT(a, s);
      } else if (i !== Te) {
        var f = e.child;
        if (f !== null) {
          b0(f, t, a);
          for (var p = f.sibling; p !== null; )
            b0(p, t, a), p = p.sibling;
        }
      }
    }
    var Ur = null, pl = !1;
    function rb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ee: {
              Ur = i.stateNode, pl = !1;
              break e;
            }
            case te: {
              Ur = i.stateNode.containerInfo, pl = !0;
              break e;
            }
            case Te: {
              Ur = i.stateNode.containerInfo, pl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        B1(e, t, a), Ur = null, pl = !1;
      }
      eb(a);
    }
    function Yo(e, t, a) {
      for (var i = a.child; i !== null; )
        B1(e, t, i), i = i.sibling;
    }
    function B1(e, t, a) {
      switch (pd(a), a.tag) {
        case ee:
          zr || Uf(a, t);
        case ne: {
          {
            var i = Ur, u = pl;
            Ur = null, Yo(e, t, a), Ur = i, pl = u, Ur !== null && (pl ? TT(Ur, a.stateNode) : RT(Ur, a.stateNode));
          }
          return;
        }
        case jt: {
          Ur !== null && (pl ? wT(Ur, a.stateNode) : jy(Ur, a.stateNode));
          return;
        }
        case Te: {
          {
            var s = Ur, f = pl;
            Ur = a.stateNode.containerInfo, pl = !0, Yo(e, t, a), Ur = s, pl = f;
          }
          return;
        }
        case xe:
        case je:
        case vt:
        case qe: {
          if (!zr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, z = b.tag;
                  w !== void 0 && ((z & Xl) !== Ia ? Em(a, t, w) : (z & ir) !== Ia && (so(a), a.mode & et ? (Jl(), Em(a, t, w), Zl(a)) : Em(a, t, w), co())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Yo(e, t, a);
          return;
        }
        case ae: {
          if (!zr) {
            Uf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && w0(a, t, A);
          }
          Yo(e, t, a);
          return;
        }
        case an: {
          Yo(e, t, a);
          return;
        }
        case We: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ae
          ) {
            var H = zr;
            zr = H || a.memoizedState !== null, Yo(e, t, a), zr = H;
          } else
            Yo(e, t, a);
          break;
        }
        default: {
          Yo(e, t, a);
          return;
        }
      }
    }
    function ab(e) {
      e.memoizedState;
    }
    function ib(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && $T(s);
          }
        }
      }
    }
    function $1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Bx()), t.forEach(function(i) {
          var u = t_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ma)
              if (Mf !== null && zf !== null)
                Yp(zf, Mf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function lb(e, t, a) {
      Mf = a, zf = e, gn(t), I1(t, e), gn(t), Mf = null, zf = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            rb(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = as();
      if (t.subtreeFlags & Gr)
        for (var p = t.child; p !== null; )
          gn(p), I1(p, e), p = p.sibling;
      gn(f);
    }
    function I1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case xe:
        case je:
        case vt:
        case qe: {
          if (vl(t, e), eu(e), u & be) {
            try {
              dl(Xl | ar, e, e.return), Io(Xl | ar, e);
            } catch (Ke) {
              cn(e, e.return, Ke);
            }
            if (e.mode & et) {
              try {
                Jl(), dl(ir | ar, e, e.return);
              } catch (Ke) {
                cn(e, e.return, Ke);
              }
              Zl(e);
            } else
              try {
                dl(ir | ar, e, e.return);
              } catch (Ke) {
                cn(e, e.return, Ke);
              }
          }
          return;
        }
        case ae: {
          vl(t, e), eu(e), u & pa && i !== null && Uf(i, i.return);
          return;
        }
        case ee: {
          vl(t, e), eu(e), u & pa && i !== null && Uf(i, i.return);
          {
            if (e.flags & Ua) {
              var s = e.stateNode;
              try {
                $S(s);
              } catch (Ke) {
                cn(e, e.return, Ke);
              }
            }
            if (u & be) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    mT(f, g, y, v, p, e);
                  } catch (Ke) {
                    cn(e, e.return, Ke);
                  }
              }
            }
          }
          return;
        }
        case ne: {
          if (vl(t, e), eu(e), u & be) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, z = i !== null ? i.memoizedProps : w;
            try {
              yT(b, z, w);
            } catch (Ke) {
              cn(e, e.return, Ke);
            }
          }
          return;
        }
        case te: {
          if (vl(t, e), eu(e), u & be && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                BT(t.containerInfo);
              } catch (Ke) {
                cn(e, e.return, Ke);
              }
          }
          return;
        }
        case Te: {
          vl(t, e), eu(e);
          return;
        }
        case Ce: {
          vl(t, e), eu(e);
          var H = e.child;
          if (H.flags & Dl) {
            var se = H.stateNode, Ve = H.memoizedState, Oe = Ve !== null;
            if (se.isHidden = Oe, Oe) {
              var _t = H.alternate !== null && H.alternate.memoizedState !== null;
              _t || Vb();
            }
          }
          if (u & be) {
            try {
              ab(e);
            } catch (Ke) {
              cn(e, e.return, Ke);
            }
            $1(e);
          }
          return;
        }
        case We: {
          var gt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ae
          ) {
            var O = zr;
            zr = O || gt, vl(t, e), zr = O;
          } else
            vl(t, e);
          if (eu(e), u & Dl) {
            var V = e.stateNode, L = e.memoizedState, K = L !== null, ye = e;
            if (V.isHidden = K, K && !gt && (ye.mode & Ae) !== le) {
              Ee = ye;
              for (var fe = ye.child; fe !== null; )
                Ee = fe, ob(fe), fe = fe.sibling;
            }
            Jx(ye, K);
          }
          return;
        }
        case mt: {
          vl(t, e), eu(e), u & be && $1(e);
          return;
        }
        case an:
          return;
        default: {
          vl(t, e), eu(e);
          return;
        }
      }
    }
    function eu(e) {
      var t = e.flags;
      if (t & Zt) {
        try {
          nb(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~Zt;
      }
      t & yi && (e.flags &= ~yi);
    }
    function ub(e, t, a) {
      Mf = a, zf = t, Ee = e, Y1(e, t, a), Mf = null, zf = null;
    }
    function Y1(e, t, a) {
      for (var i = (e.mode & Ae) !== le; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === We && i) {
          var f = u.memoizedState !== null, p = f || Sm;
          if (p) {
            _0(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || zr, b = Sm, w = zr;
            Sm = p, zr = g, zr && !w && (Ee = u, sb(u));
            for (var z = s; z !== null; )
              Ee = z, Y1(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            Ee = u, Sm = b, zr = w, _0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ai) !== He && s !== null ? (s.return = u, Ee = s) : _0(e, t, a);
      }
    }
    function _0(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & ai) !== He) {
          var u = i.alternate;
          gn(i);
          try {
            Kx(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          ln();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function ob(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case xe:
          case je:
          case vt:
          case qe: {
            if (t.mode & et)
              try {
                Jl(), dl(ir, t, t.return);
              } finally {
                Zl(t);
              }
            else
              dl(ir, t, t.return);
            break;
          }
          case ae: {
            Uf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && w0(t, t.return, i);
            break;
          }
          case ee: {
            Uf(t, t.return);
            break;
          }
          case We: {
            var u = t.memoizedState !== null;
            if (u) {
              W1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : W1(e);
      }
    }
    function W1(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function sb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === We) {
          var i = t.memoizedState !== null;
          if (i) {
            Q1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : Q1(e);
      }
    }
    function Q1(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        gn(t);
        try {
          Zx(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (ln(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function cb(e, t, a, i) {
      Ee = t, fb(t, e, a, i);
    }
    function fb(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & Xr) !== He && s !== null ? (s.return = u, Ee = s) : db(e, t, a, i);
      }
    }
    function db(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & Wr) !== He) {
          gn(u);
          try {
            pb(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          ln();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function pb(e, t, a, i) {
      switch (t.tag) {
        case xe:
        case je:
        case qe: {
          if (t.mode & et) {
            Wg();
            try {
              Io(Nr | ar, t);
            } finally {
              Yg(t);
            }
          } else
            Io(Nr | ar, t);
          break;
        }
      }
    }
    function vb(e) {
      Ee = e, hb();
    }
    function hb() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & zt) !== He) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, gb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & Xr) !== He && t !== null ? (t.return = e, Ee = t) : mb();
      }
    }
    function mb() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & Wr) !== He && (gn(e), yb(e), ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function yb(e) {
      switch (e.tag) {
        case xe:
        case je:
        case qe: {
          e.mode & et ? (Wg(), dl(Nr | ar, e, e.return), Yg(e)) : dl(Nr | ar, e, e.return);
          break;
        }
      }
    }
    function gb(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        gn(a), Eb(a, t), ln();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : Sb(e);
      }
    }
    function Sb(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (H1(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function Eb(e, t) {
      switch (e.tag) {
        case xe:
        case je:
        case qe: {
          e.mode & et ? (Wg(), dl(Nr, e, t), Yg(e)) : dl(Nr, e, t);
          break;
        }
      }
    }
    function Cb(e) {
      switch (e.tag) {
        case xe:
        case je:
        case qe: {
          try {
            Io(ir | ar, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ae: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case xe:
        case je:
        case qe: {
          try {
            Io(Nr | ar, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Tb(e) {
      switch (e.tag) {
        case xe:
        case je:
        case qe: {
          try {
            dl(ir | ar, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ae: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && w0(e, e.return, t);
          break;
        }
      }
    }
    function wb(e) {
      switch (e.tag) {
        case xe:
        case je:
        case qe:
          try {
            dl(Nr | ar, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var xb = [];
    function bb() {
      xb.forEach(function(e) {
        return e();
      });
    }
    var _b = de.ReactCurrentActQueue;
    function kb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function G1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && _b.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Db = Math.ceil, k0 = de.ReactCurrentDispatcher, D0 = de.ReactCurrentOwner, Ar = de.ReactCurrentBatchConfig, hl = de.ReactCurrentActQueue, or = (
      /*             */
      0
    ), X1 = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), Bu = 0, Up = 1, fc = 2, Cm = 3, Ap = 4, q1 = 5, O0 = 6, bt = or, wa = null, Nn = null, sr = Y, tu = Y, L0 = Uo(Y), cr = Bu, jp = null, Rm = Y, Fp = Y, Tm = Y, Hp = null, Ya = null, N0 = 0, K1 = 500, Z1 = 1 / 0, Ob = 500, $u = null;
    function Vp() {
      Z1 = jn() + Ob;
    }
    function J1() {
      return Z1;
    }
    var wm = !1, M0 = null, Af = null, dc = !1, Wo = null, Pp = Y, z0 = [], U0 = null, Lb = 50, Bp = 0, A0 = null, j0 = !1, xm = !1, Nb = 50, jf = 0, bm = null, $p = nn, _m = Y, eC = !1;
    function km() {
      return wa;
    }
    function xa() {
      return (bt & (jr | Ni)) !== or ? jn() : ($p !== nn || ($p = jn()), $p);
    }
    function Qo(e) {
      var t = e.mode;
      if ((t & Ae) === le)
        return ke;
      if ((bt & jr) !== or && sr !== Y)
        return Ro(sr);
      var a = _w() !== bw;
      if (a) {
        if (Ar.transition !== null) {
          var i = Ar.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return _m === Jt && (_m = wr()), _m;
      }
      var u = br();
      if (u !== Jt)
        return u;
      var s = fT();
      return s;
    }
    function Mb(e) {
      var t = e.mode;
      return (t & Ae) === le ? ke : xr();
    }
    function fr(e, t, a, i) {
      r_(), eC && S("useInsertionEffect must not schedule updates."), j0 && (xm = !0), wo(e, a, i), (bt & jr) !== Y && e === wa ? l_(t) : (ma && Nd(e, t, a), u_(t), e === wa && ((bt & jr) === or && (Fp = ut(Fp, a)), cr === Ap && Go(e, sr)), Wa(e, i), a === ke && bt === or && (t.mode & Ae) === le && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && (Vp(), eE()));
    }
    function zb(e, t, a) {
      var i = e.current;
      i.lanes = t, wo(e, t, a), Wa(e, a);
    }
    function Ub(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (bt & jr) !== or
      );
    }
    function Wa(e, t) {
      var a = e.callbackNode;
      wd(e, t);
      var i = Os(e, e === wa ? sr : Y);
      if (i === Y) {
        a !== null && mC(a), e.callbackNode = null, e.callbackPriority = Jt;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== I0)) {
        a == null && s !== ke && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && mC(a);
      var f;
      if (u === ke)
        e.tag === Ao ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), sw(rC.bind(null, e))) : JS(rC.bind(null, e)), hl.current !== null ? hl.current.push(jo) : pT(function() {
          (bt & (jr | Ni)) === or && jo();
        }), f = null;
      else {
        var p;
        switch ($v(i)) {
          case Ea:
            p = Ml;
            break;
          case Ti:
            p = uo;
            break;
          case ui:
            p = zl;
            break;
          case As:
            p = Ul;
            break;
          default:
            p = zl;
            break;
        }
        f = Y0(p, tC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function tC(e, t) {
      if (Jw(), $p = nn, _m = Y, (bt & (jr | Ni)) !== or)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Os(e, e === wa ? sr : Y);
      if (u === Y)
        return null;
      var s = !Ns(e, u) && !Pv(e, u) && !t, f = s ? Yb(e, u) : Om(e, u);
      if (f !== Bu) {
        if (f === fc) {
          var p = Ls(e);
          p !== Y && (u = p, f = F0(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw pc(e, Y), Go(e, u), Wa(e, jn()), v;
        }
        if (f === O0)
          Go(e, u);
        else {
          var y = !Ns(e, u), g = e.current.alternate;
          if (y && !jb(g)) {
            if (f = Om(e, u), f === fc) {
              var b = Ls(e);
              b !== Y && (u = b, f = F0(e, b));
            }
            if (f === Up) {
              var w = jp;
              throw pc(e, Y), Go(e, u), Wa(e, jn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ab(e, f, u);
        }
      }
      return Wa(e, jn()), e.callbackNode === a ? tC.bind(null, e) : null;
    }
    function F0(e, t) {
      var a = Hp;
      if (me(e)) {
        var i = pc(e, t);
        i.flags |= Tr, nw(e.containerInfo);
      }
      var u = Om(e, t);
      if (u !== fc) {
        var s = Ya;
        Ya = a, s !== null && nC(s);
      }
      return u;
    }
    function nC(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Ab(e, t, a) {
      switch (t) {
        case Bu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case fc: {
          vc(e, Ya, $u);
          break;
        }
        case Cm: {
          if (Go(e, a), _d(a) && // do not delay if we're inside an act() scope
          !yC()) {
            var i = N0 + K1 - jn();
            if (i > 10) {
              var u = Os(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Vl(s, a)) {
                xa(), zs(e, s);
                break;
              }
              e.timeoutHandle = Uy(vc.bind(null, e, Ya, $u), i);
              break;
            }
          }
          vc(e, Ya, $u);
          break;
        }
        case Ap: {
          if (Go(e, a), Vv(a))
            break;
          if (!yC()) {
            var f = jv(e, a), p = f, v = jn() - p, y = n_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(vc.bind(null, e, Ya, $u), y);
              break;
            }
          }
          vc(e, Ya, $u);
          break;
        }
        case q1: {
          vc(e, Ya, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function jb(e) {
      for (var t = e; ; ) {
        if (t.flags & mu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!De(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Go(e, t) {
      t = To(t, Tm), t = To(t, Fp), Od(e, t);
    }
    function rC(e) {
      if (ex(), (bt & (jr | Ni)) !== or)
        throw new Error("Should not already be working.");
      Yu();
      var t = Os(e, Y);
      if (!Zr(t, ke))
        return Wa(e, jn()), null;
      var a = Om(e, t);
      if (e.tag !== Ao && a === fc) {
        var i = Ls(e);
        i !== Y && (t = i, a = F0(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw pc(e, Y), Go(e, t), Wa(e, jn()), u;
      }
      if (a === O0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, vc(e, Ya, $u), Wa(e, jn()), null;
    }
    function Fb(e, t) {
      t !== Y && (Kc(e, ut(t, ke)), Wa(e, jn()), (bt & (jr | Ni)) === or && (Vp(), jo()));
    }
    function H0(e, t) {
      var a = bt;
      bt |= X1;
      try {
        return e(t);
      } finally {
        bt = a, bt === or && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && (Vp(), eE());
      }
    }
    function Hb(e, t, a, i, u) {
      var s = br(), f = Ar.transition;
      try {
        return Ar.transition = null, Ot(Ea), e(t, a, i, u);
      } finally {
        Ot(s), Ar.transition = f, bt === or && Vp();
      }
    }
    function Iu(e) {
      Wo !== null && Wo.tag === Ao && (bt & (jr | Ni)) === or && Yu();
      var t = bt;
      bt |= X1;
      var a = Ar.transition, i = br();
      try {
        return Ar.transition = null, Ot(Ea), e ? e() : void 0;
      } finally {
        Ot(i), Ar.transition = a, bt = t, (bt & (jr | Ni)) === or && jo();
      }
    }
    function aC() {
      return (bt & (jr | Ni)) !== or;
    }
    function Dm(e, t) {
      ea(L0, tu, e), tu = ut(tu, t);
    }
    function V0(e) {
      tu = L0.current, Jr(L0, e);
    }
    function pc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, dT(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var u = i.alternate;
          M1(u, i), i = i.return;
        }
      wa = e;
      var s = hc(e.current, null);
      return Nn = s, sr = tu = t, cr = Bu, jp = null, Rm = Y, Fp = Y, Tm = Y, Hp = null, Ya = null, zw(), ul.discardPendingWarnings(), s;
    }
    function iC(e, t) {
      do {
        var a = Nn;
        try {
          if (Hh(), DE(), ln(), D0.current = null, a === null || a.return === null) {
            cr = Up, jp = t, Nn = null;
            return;
          }
          if (St && a.mode & et && vm(a, !0), ct)
            if (ga(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              md(a, i, sr);
            } else
              Eu(a, t, sr);
          sx(e, a.return, a, t, sr), sC(a);
        } catch (u) {
          t = u, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function lC() {
      var e = k0.current;
      return k0.current = sm, e === null ? sm : e;
    }
    function uC(e) {
      k0.current = e;
    }
    function Vb() {
      N0 = jn();
    }
    function Ip(e) {
      Rm = ut(e, Rm);
    }
    function Pb() {
      cr === Bu && (cr = Cm);
    }
    function P0() {
      (cr === Bu || cr === Cm || cr === fc) && (cr = Ap), wa !== null && (bd(Rm) || bd(Fp)) && Go(wa, sr);
    }
    function Bb(e) {
      cr !== Ap && (cr = fc), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function $b() {
      return cr === Bu;
    }
    function Om(e, t) {
      var a = bt;
      bt |= jr;
      var i = lC();
      if (wa !== e || sr !== t) {
        if (ma) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, sr), u.clear()), Us(e, t);
        }
        $u = Ri(), pc(e, t);
      }
      xs(t);
      do
        try {
          Ib();
          break;
        } catch (s) {
          iC(e, s);
        }
      while (!0);
      if (Hh(), bt = a, uC(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ac(), wa = null, sr = Y, cr;
    }
    function Ib() {
      for (; Nn !== null; )
        oC(Nn);
    }
    function Yb(e, t) {
      var a = bt;
      bt |= jr;
      var i = lC();
      if (wa !== e || sr !== t) {
        if (ma) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, sr), u.clear()), Us(e, t);
        }
        $u = Ri(), Vp(), pc(e, t);
      }
      xs(t);
      do
        try {
          Wb();
          break;
        } catch (s) {
          iC(e, s);
        }
      while (!0);
      return Hh(), uC(i), bt = a, Nn !== null ? (gd(), Bu) : (Ac(), wa = null, sr = Y, cr);
    }
    function Wb() {
      for (; Nn !== null && !Ov(); )
        oC(Nn);
    }
    function oC(e) {
      var t = e.alternate;
      gn(e);
      var a;
      (e.mode & et) !== le ? (Ig(e), a = B0(t, e, tu), vm(e, !0)) : a = B0(t, e, tu), ln(), e.memoizedProps = e.pendingProps, a === null ? sC(e) : Nn = a, D0.current = null;
    }
    function sC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ol) === He) {
          gn(t);
          var u = void 0;
          if ((t.mode & et) === le ? u = N1(a, t, tu) : (Ig(t), u = N1(a, t, tu), vm(t, !1)), ln(), u !== null) {
            Nn = u;
            return;
          }
        } else {
          var s = Px(a, t);
          if (s !== null) {
            s.flags &= qi, Nn = s;
            return;
          }
          if ((t.mode & et) !== le) {
            vm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ol, i.subtreeFlags = He, i.deletions = null;
          else {
            cr = O0, Nn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Nn = v;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      cr === Bu && (cr = q1);
    }
    function vc(e, t, a) {
      var i = br(), u = Ar.transition;
      try {
        Ar.transition = null, Ot(Ea), Qb(e, t, a, i);
      } finally {
        Ar.transition = u, Ot(i);
      }
      return null;
    }
    function Qb(e, t, a, i) {
      do
        Yu();
      while (Wo !== null);
      if (a_(), (bt & (jr | Ni)) !== or)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (vd(s), u === null)
        return hd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Jt;
      var f = ut(u.lanes, u.childLanes);
      ay(e, f), e === wa && (wa = null, Nn = null, sr = Y), ((u.subtreeFlags & Xr) !== He || (u.flags & Xr) !== He) && (dc || (dc = !0, U0 = a, Y0(zl, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Gr | ai | Xr)) !== He, v = (u.flags & (Qr | Gr | ai | Xr)) !== He;
      if (p || v) {
        var y = Ar.transition;
        Ar.transition = null;
        var g = br();
        Ot(Ea);
        var b = bt;
        bt |= Ni, D0.current = null, Wx(e, u), e1(), lb(e, u, s), iT(e.containerInfo), e.current = u, fo(s), ub(u, e, s), Uv(), lo(), bt = b, Ot(g), Ar.transition = y;
      } else
        e.current = u, e1();
      var w = dc;
      if (dc ? (dc = !1, Wo = e, Pp = s) : (jf = 0, bm = null), f = e.pendingLanes, f === Y && (Af = null), w || pC(e.current, !1), Va(u.stateNode, i), ma && e.memoizedUpdaters.clear(), bb(), Wa(e, jn()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var H = t[A], se = H.stack, Ve = H.digest;
          z(H.value, {
            componentStack: se,
            digest: Ve
          });
        }
      if (wm) {
        wm = !1;
        var Oe = M0;
        throw M0 = null, Oe;
      }
      return Zr(Pp, ke) && e.tag !== Ao && Yu(), f = e.pendingLanes, Zr(f, ke) ? (Zw(), e === A0 ? Bp++ : (Bp = 0, A0 = e)) : Bp = 0, jo(), hd(), null;
    }
    function Yu() {
      if (Wo !== null) {
        var e = $v(Pp), t = Zc(ui, e), a = Ar.transition, i = br();
        try {
          return Ar.transition = null, Ot(t), Xb();
        } finally {
          Ot(i), Ar.transition = a;
        }
      }
      return !1;
    }
    function Gb(e) {
      z0.push(e), dc || (dc = !0, Y0(zl, function() {
        return Yu(), null;
      }));
    }
    function Xb() {
      if (Wo === null)
        return !1;
      var e = U0;
      U0 = null;
      var t = Wo, a = Pp;
      if (Wo = null, Pp = Y, (bt & (jr | Ni)) !== or)
        throw new Error("Cannot flush passive effects while already rendering.");
      j0 = !0, xm = !1, yd(a);
      var i = bt;
      bt |= Ni, vb(t.current), cb(t, t.current, a, e);
      {
        var u = z0;
        z0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          qx(t, f);
        }
      }
      Sn(), pC(t.current, !0), bt = i, jo(), xm ? t === bm ? jf++ : (jf = 0, bm = t) : jf = 0, j0 = !1, xm = !1, Su(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cC(e) {
      return Af !== null && Af.has(e);
    }
    function qb(e) {
      Af === null ? Af = /* @__PURE__ */ new Set([e]) : Af.add(e);
    }
    function Kb(e) {
      wm || (wm = !0, M0 = e);
    }
    var Zb = Kb;
    function fC(e, t, a) {
      var i = sc(a, t), u = o1(e, i, ke), s = Ho(e, u, ke), f = xa();
      s !== null && (wo(s, ke, f), Wa(s, f));
    }
    function cn(e, t, a) {
      if ($x(a), Wp(!1), e.tag === te) {
        fC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          fC(i, e, a);
          return;
        } else if (i.tag === ae) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !cC(s)) {
            var f = sc(a, e), p = o0(i, f, ke), v = Ho(i, p, ke), y = xa();
            v !== null && (wo(v, ke, y), Wa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Jb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = xa();
      zs(e, a), o_(e), wa === e && Vl(sr, a) && (cr === Ap || cr === Cm && _d(sr) && jn() - N0 < K1 ? pc(e, Y) : Tm = ut(Tm, a)), Wa(e, u);
    }
    function dC(e, t) {
      t === Jt && (t = Mb(e));
      var a = xa(), i = $a(e, t);
      i !== null && (wo(i, t, a), Wa(i, a));
    }
    function e_(e) {
      var t = e.memoizedState, a = Jt;
      t !== null && (a = t.retryLane), dC(e, a);
    }
    function t_(e, t) {
      var a = Jt, i;
      switch (e.tag) {
        case Ce:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case mt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), dC(e, a);
    }
    function n_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Db(e / 1960) * 1960;
    }
    function r_() {
      if (Bp > Lb)
        throw Bp = 0, A0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      jf > Nb && (jf = 0, bm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function a_() {
      ul.flushLegacyContextWarning(), ul.flushPendingUnsafeLifecycleWarnings();
    }
    function pC(e, t) {
      gn(e), Lm(e, ja, Tb), t && Lm(e, yu, wb), Lm(e, ja, Cb), t && Lm(e, yu, Rb), ln();
    }
    function Lm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== He ? i = i.child : ((i.flags & t) !== He && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Nm = null;
    function vC(e) {
      {
        if ((bt & jr) !== or || !(e.mode & Ae))
          return;
        var t = e.tag;
        if (t !== Ue && t !== te && t !== ae && t !== xe && t !== je && t !== vt && t !== qe)
          return;
        var a = Je(e) || "ReactComponent";
        if (Nm !== null) {
          if (Nm.has(a))
            return;
          Nm.add(a);
        } else
          Nm = /* @__PURE__ */ new Set([a]);
        var i = yn;
        try {
          gn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? gn(e) : ln();
        }
      }
    }
    var B0;
    {
      var i_ = null;
      B0 = function(e, t, a) {
        var i = RC(i_, t);
        try {
          return _1(e, t, a);
        } catch (s) {
          if (yw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Hh(), DE(), M1(e, t), RC(t, i), t.mode & et && Ig(t), ni(null, _1, null, e, t, a), Jm()) {
            var u = Xi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var hC = !1, $0;
    $0 = /* @__PURE__ */ new Set();
    function l_(e) {
      if ($r && !Xw())
        switch (e.tag) {
          case xe:
          case je:
          case qe: {
            var t = Nn && Je(Nn) || "Unknown", a = t;
            if (!$0.has(a)) {
              $0.add(a);
              var i = Je(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ae: {
            hC || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hC = !0);
            break;
          }
        }
    }
    function Yp(e, t) {
      if (ma) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Nd(e, i, t);
        });
      }
    }
    var I0 = {};
    function Y0(e, t) {
      {
        var a = hl.current;
        return a !== null ? (a.push(t), I0) : fd(e, t);
      }
    }
    function mC(e) {
      if (e !== I0)
        return Nc(e);
    }
    function yC() {
      return hl.current !== null;
    }
    function u_(e) {
      {
        if (e.mode & Ae) {
          if (!G1())
            return;
        } else if (!kb() || bt !== or || e.tag !== xe && e.tag !== je && e.tag !== qe)
          return;
        if (hl.current === null) {
          var t = yn;
          try {
            gn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Je(e));
          } finally {
            t ? gn(e) : ln();
          }
        }
      }
    }
    function o_(e) {
      e.tag !== Ao && G1() && hl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      eC = e;
    }
    var Mi = null, Ff = null, s_ = function(e) {
      Mi = e;
    };
    function Hf(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function W0(e) {
      return Hf(e);
    }
    function Q0(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Hf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: X,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function gC(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ae: {
            typeof i == "function" && (u = !0);
            break;
          }
          case xe: {
            (typeof i == "function" || s === Be) && (u = !0);
            break;
          }
          case je: {
            (s === X || s === Be) && (u = !0);
            break;
          }
          case vt:
          case qe: {
            (s === xt || s === Be) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Mi(a);
          if (f !== void 0 && f === Mi(i))
            return !0;
        }
        return !1;
      }
    }
    function SC(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        Ff === null && (Ff = /* @__PURE__ */ new WeakSet()), Ff.add(e);
      }
    }
    var c_ = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          G0(e.current, i, a);
        });
      }
    }, f_ = function(e, t) {
      {
        if (e.context !== si)
          return;
        Yu(), Iu(function() {
          Qp(t, e, null, null);
        });
      }
    };
    function G0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case xe:
          case qe:
          case ae:
            v = p;
            break;
          case je:
            v = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Mi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === ae ? g = !0 : y = !0));
        }
        if (Ff !== null && (Ff.has(e) || i !== null && Ff.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = $a(e, ke);
          w !== null && fr(w, e, ke, nn);
        }
        u !== null && !g && G0(u, t, a), s !== null && G0(s, t, a);
      }
    }
    var d_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return X0(e.current, i, a), a;
      }
    };
    function X0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case xe:
          case qe:
          case ae:
            p = f;
            break;
          case je:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? p_(e, a) : i !== null && X0(i, t, a), u !== null && X0(u, t, a);
      }
    }
    function p_(e, t) {
      {
        var a = v_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ee:
              t.add(i.stateNode);
              return;
            case Te:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function v_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ee)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var q0;
    {
      q0 = !1;
      try {
        var EC = Object.preventExtensions({});
      } catch {
        q0 = !0;
      }
    }
    function h_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = He, this.subtreeFlags = He, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !q0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new h_(e, t, a, i);
    };
    function K0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function m_(e) {
      return typeof e == "function" && !K0(e) && e.defaultProps === void 0;
    }
    function y_(e) {
      if (typeof e == "function")
        return K0(e) ? ae : xe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === X)
          return je;
        if (t === xt)
          return vt;
      }
      return Ue;
    }
    function hc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = He, a.subtreeFlags = He, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ue:
        case xe:
        case qe:
          a.type = Hf(e.type);
          break;
        case ae:
          a.type = W0(e.type);
          break;
        case je:
          a.type = Q0(e.type);
          break;
      }
      return a;
    }
    function g_(e, t) {
      e.flags &= nr | Zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = He, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = He, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function S_(e, t, a) {
      var i;
      return e === Dh ? (i = Ae, t === !0 && (i |= sn, i |= qr)) : i = le, ma && (i |= et), ci(te, null, null, i);
    }
    function Z0(e, t, a, i, u, s) {
      var f = Ue, p = e;
      if (typeof e == "function")
        K0(e) ? (f = ae, p = W0(p)) : p = Hf(p);
      else if (typeof e == "string")
        f = ee;
      else
        e: switch (e) {
          case ca:
            return Xo(a.children, u, s, t);
          case Ui:
            f = _n, u |= sn, (u & Ae) !== le && (u |= qr);
            break;
          case gl:
            return E_(a, u, s, t);
          case Fe:
            return C_(a, u, s, t);
          case yt:
            return R_(a, u, s, t);
          case qt:
            return CC(a, u, s, t);
          case vn:
          case dt:
          case mr:
          case Vt:
          case zn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = Xe;
                  break e;
                case Q:
                  f = en;
                  break e;
                case X:
                  f = je, p = Q0(p);
                  break e;
                case xt:
                  f = vt;
                  break e;
                case Be:
                  f = fn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Je(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ci(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function J0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = Z0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Xo(e, t, a, i) {
      var u = ci(tt, e, i, t);
      return u.lanes = a, u;
    }
    function E_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ci(Tt, e, i, t | et);
      return u.elementType = gl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function C_(e, t, a, i) {
      var u = ci(Ce, e, i, t);
      return u.elementType = Fe, u.lanes = a, u;
    }
    function R_(e, t, a, i) {
      var u = ci(mt, e, i, t);
      return u.elementType = yt, u.lanes = a, u;
    }
    function CC(e, t, a, i) {
      var u = ci(We, e, i, t);
      u.elementType = qt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function eS(e, t, a) {
      var i = ci(ne, e, null, t);
      return i.lanes = a, i;
    }
    function T_() {
      var e = ci(ee, null, null, le);
      return e.elementType = "DELETED", e;
    }
    function w_(e) {
      var t = ci(jt, null, null, le);
      return t.stateNode = e, t;
    }
    function tS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ci(Te, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function RC(e, t) {
      return e === null && (e = ci(Ue, null, null, le)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function x_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Jt, this.eventTimes = Ms(Y), this.expirationTimes = Ms(nn), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Ms(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < bs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Dh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ao:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function TC(e, t, a, i, u, s, f, p, v, y) {
      var g = new x_(e, t, a, p, v), b = S_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return vg(b), g;
    }
    var nS = "18.3.1";
    function b_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return pr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Vr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var rS, aS;
    rS = !1, aS = {};
    function wC(e) {
      if (!e)
        return si;
      var t = mi(e), a = ow(t);
      if (t.tag === ae) {
        var i = t.type;
        if (Gl(i))
          return KS(t, i, a);
      }
      return a;
    }
    function __(e, t) {
      {
        var a = mi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = od(a);
        if (u === null)
          return null;
        if (u.mode & sn) {
          var s = Je(a) || "Component";
          if (!aS[s]) {
            aS[s] = !0;
            var f = yn;
            try {
              gn(u), a.mode & sn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? gn(f) : ln();
            }
          }
        }
        return u.stateNode;
      }
    }
    function xC(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return TC(e, t, v, y, a, i, u, s, f);
    }
    function bC(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = TC(a, i, g, e, u, s, f, p, v);
      b.context = wC(null);
      var w = b.current, z = xa(), A = Qo(w), H = Vu(z, A);
      return H.callback = t ?? null, Ho(w, H, A), zb(b, A, z), b;
    }
    function Qp(e, t, a, i) {
      oo(t, e);
      var u = t.current, s = xa(), f = Qo(u);
      jc(f);
      var p = wC(a);
      t.context === null ? t.context = p : t.pendingContext = p, $r && yn !== null && !rS && (rS = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Je(yn) || "Unknown"));
      var v = Vu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ho(u, v, f);
      return y !== null && (fr(y, u, f, s), Ih(y, u, f)), f;
    }
    function Mm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ee:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function k_(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (me(t)) {
            var a = Co(t);
            Fb(t, a);
          }
          break;
        }
        case Ce: {
          Iu(function() {
            var u = $a(e, ke);
            if (u !== null) {
              var s = xa();
              fr(u, e, ke, s);
            }
          });
          var i = ke;
          iS(e, i);
          break;
        }
      }
    }
    function _C(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Dd(a.retryLane, t));
    }
    function iS(e, t) {
      _C(e, t);
      var a = e.alternate;
      a && _C(a, t);
    }
    function D_(e) {
      if (e.tag === Ce) {
        var t = go, a = $a(e, t);
        if (a !== null) {
          var i = xa();
          fr(a, e, t, i);
        }
        iS(e, t);
      }
    }
    function O_(e) {
      if (e.tag === Ce) {
        var t = Qo(e), a = $a(e, t);
        if (a !== null) {
          var i = xa();
          fr(a, e, t, i);
        }
        iS(e, t);
      }
    }
    function kC(e) {
      var t = cd(e);
      return t === null ? null : t.stateNode;
    }
    var DC = function(e) {
      return null;
    };
    function L_(e) {
      return DC(e);
    }
    var OC = function(e) {
      return !1;
    };
    function N_(e) {
      return OC(e);
    }
    var LC = null, NC = null, MC = null, zC = null, UC = null, AC = null, jC = null, FC = null, HC = null;
    {
      var VC = function(e, t, a) {
        var i = t[a], u = Dt(e) ? e.slice() : lt({}, e);
        return a + 1 === t.length ? (Dt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = VC(e[i], t, a + 1), u);
      }, PC = function(e, t) {
        return VC(e, t, 0);
      }, BC = function(e, t, a, i) {
        var u = t[i], s = Dt(e) ? e.slice() : lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Dt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = BC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $C = function(e, t, a) {
        if (t.length !== a.length) {
          Me("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Me("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BC(e, t, a, 0);
      }, IC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Dt(e) ? e.slice() : lt({}, e);
        return s[u] = IC(e[u], t, a + 1, i), s;
      }, YC = function(e, t, a) {
        return IC(e, t, 0, a);
      }, lS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LC = function(e, t, a, i) {
        var u = lS(e, t);
        if (u !== null) {
          var s = YC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = $a(e, ke);
          f !== null && fr(f, e, ke, nn);
        }
      }, NC = function(e, t, a) {
        var i = lS(e, t);
        if (i !== null) {
          var u = PC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = lt({}, e.memoizedProps);
          var s = $a(e, ke);
          s !== null && fr(s, e, ke, nn);
        }
      }, MC = function(e, t, a, i) {
        var u = lS(e, t);
        if (u !== null) {
          var s = $C(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = $a(e, ke);
          f !== null && fr(f, e, ke, nn);
        }
      }, zC = function(e, t, a) {
        e.pendingProps = YC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, ke);
        i !== null && fr(i, e, ke, nn);
      }, UC = function(e, t) {
        e.pendingProps = PC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, ke);
        a !== null && fr(a, e, ke, nn);
      }, AC = function(e, t, a) {
        e.pendingProps = $C(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, ke);
        i !== null && fr(i, e, ke, nn);
      }, jC = function(e) {
        var t = $a(e, ke);
        t !== null && fr(t, e, ke, nn);
      }, FC = function(e) {
        DC = e;
      }, HC = function(e) {
        OC = e;
      };
    }
    function M_(e) {
      var t = od(e);
      return t === null ? null : t.stateNode;
    }
    function z_(e) {
      return null;
    }
    function U_() {
      return yn;
    }
    function A_(e) {
      var t = e.findFiberByHostInstance, a = de.ReactCurrentDispatcher;
      return dd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: LC,
        overrideHookStateDeletePath: NC,
        overrideHookStateRenamePath: MC,
        overrideProps: zC,
        overridePropsDeletePath: UC,
        overridePropsRenamePath: AC,
        setErrorHandler: FC,
        setSuspenseHandler: HC,
        scheduleUpdate: jC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: M_,
        findFiberByHostInstance: t || z_,
        // React Refresh
        findHostInstancesForRefresh: d_,
        scheduleRefresh: c_,
        scheduleRoot: f_,
        setRefreshHandler: s_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: U_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: nS
      });
    }
    var WC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function uS(e) {
      this._internalRoot = e;
    }
    zm.prototype.render = uS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Um(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Rn) {
          var i = kC(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qp(e, t, null, null);
    }, zm.prototype.unmount = uS.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Qp(null, e, null, null);
        }), WS(t);
      }
    };
    function j_(e, t) {
      if (!Um(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      QC(e);
      var a = !1, i = !1, u = "", s = WC;
      t != null && (t.hydrate ? Me("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Cr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = xC(e, Dh, null, a, i, u, s);
      Rh(f.current, e);
      var p = e.nodeType === Rn ? e.parentNode : e;
      return Jd(p), new uS(f);
    }
    function zm(e) {
      this._internalRoot = e;
    }
    function F_(e) {
      e && Jc(e);
    }
    zm.prototype.unstable_scheduleHydration = F_;
    function H_(e, t, a) {
      if (!Um(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      QC(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = WC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = bC(t, null, e, Dh, i, s, f, p, v);
      if (Rh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          $w(y, b);
        }
      return new zm(y);
    }
    function Um(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === fa || e.nodeType === Yf || !Ne));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === fa || e.nodeType === Yf || e.nodeType === Rn && e.nodeValue === " react-mount-point-unstable "));
    }
    function QC(e) {
      e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var V_ = de.ReactCurrentOwner, GC;
    GC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Rn) {
        var t = kC(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = oS(e), u = !!(i && zo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function oS(e) {
      return e ? e.nodeType === fa ? e.documentElement : e.firstChild : null;
    }
    function XC() {
    }
    function P_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Mm(f);
            s.call(w);
          };
        }
        var f = bC(
          t,
          i,
          e,
          Ao,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          XC
        );
        e._reactRootContainer = f, Rh(f.current, e);
        var p = e.nodeType === Rn ? e.parentNode : e;
        return Jd(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Mm(g);
            y.call(w);
          };
        }
        var g = xC(
          e,
          Ao,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          XC
        );
        e._reactRootContainer = g, Rh(g.current, e);
        var b = e.nodeType === Rn ? e.parentNode : e;
        return Jd(b), Iu(function() {
          Qp(t, g, a, i);
        }), g;
      }
    }
    function B_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Am(e, t, a, i, u) {
      GC(a), B_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = P_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Mm(f);
            p.call(v);
          };
        }
        Qp(t, f, e, u);
      }
      return Mm(f);
    }
    var qC = !1;
    function $_(e) {
      {
        qC || (qC = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = V_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yr ? e : __(e, "findDOMNode");
    }
    function I_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Am(null, e, t, !0, a);
    }
    function Y_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Am(null, e, t, !1, a);
    }
    function W_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !io(e))
        throw new Error("parentComponent must be a valid React Component");
      return Am(e, t, a, !1, i);
    }
    var KC = !1;
    function Q_(e) {
      if (KC || (KC = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = oS(e), i = a && !zo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Am(null, null, e, !1, function() {
            e._reactRootContainer = null, WS(e);
          });
        }), !0;
      } else {
        {
          var u = oS(e), s = !!(u && zo(u)), f = e.nodeType === Yr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Md(k_), js(D_), Ud(O_), Yv(br), Fd(iy), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Jf(XR), bc(H0, Hb, Iu);
    function G_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Um(t))
        throw new Error("Target container is not a DOM element.");
      return b_(e, t, null, a);
    }
    function X_(e, t, a, i) {
      return W_(e, t, a, i);
    }
    var sS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [zo, mf, Th, ao, vu, H0]
    };
    function q_(e, t) {
      return sS.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), j_(e, t);
    }
    function K_(e, t, a) {
      return sS.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), H_(e, t, a);
    }
    function Z_(e) {
      return aC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var J_ = A_({
      findFiberByHostInstance: ec,
      bundleType: 1,
      version: nS,
      rendererPackageName: "react-dom"
    });
    if (!J_ && Cn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var ZC = window.location.protocol;
      /^(https?|file):$/.test(ZC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (ZC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sS, Ga.createPortal = G_, Ga.createRoot = q_, Ga.findDOMNode = $_, Ga.flushSync = Z_, Ga.hydrate = I_, Ga.hydrateRoot = K_, Ga.render = Y_, Ga.unmountComponentAtNode = Q_, Ga.unstable_batchedUpdates = H0, Ga.unstable_renderSubtreeIntoContainer = X_, Ga.version = nS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ga;
}
var cR = {};
function fR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (cR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fR);
    } catch (j) {
      console.error(j);
    }
  }
}
cR.NODE_ENV === "production" ? (fR(), vS.exports = ck()) : vS.exports = fk();
var dk = vS.exports, hS, pk = {}, Fm = dk;
if (pk.NODE_ENV === "production")
  hS = Fm.createRoot, Fm.hydrateRoot;
else {
  var oR = Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hS = function(j, I) {
    oR.usingClientEntryPoint = !0;
    try {
      return Fm.createRoot(j, I);
    } finally {
      oR.usingClientEntryPoint = !1;
    }
  };
}
function vk({
  title: j,
  titleId: I,
  ..._
}, de) {
  return /* @__PURE__ */ Pe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: de,
    "aria-labelledby": I
  }, _), j ? /* @__PURE__ */ Pe.createElement("title", {
    id: I
  }, j) : null, /* @__PURE__ */ Pe.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
  }));
}
const hk = /* @__PURE__ */ Pe.forwardRef(vk);
function mk({
  title: j,
  titleId: I,
  ..._
}, de) {
  return /* @__PURE__ */ Pe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: de,
    "aria-labelledby": I
  }, _), j ? /* @__PURE__ */ Pe.createElement("title", {
    id: I
  }, j) : null, /* @__PURE__ */ Pe.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const yk = /* @__PURE__ */ Pe.forwardRef(mk);
function gk({
  title: j,
  titleId: I,
  ..._
}, de) {
  return /* @__PURE__ */ Pe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: de,
    "aria-labelledby": I
  }, _), j ? /* @__PURE__ */ Pe.createElement("title", {
    id: I
  }, j) : null, /* @__PURE__ */ Pe.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const Sk = /* @__PURE__ */ Pe.forwardRef(gk);
var mc = /* @__PURE__ */ ((j) => (j.Review = "Review", j.Idea = "Idea", j.Issue = "Issue", j))(mc || {});
function Ek({
  title: j,
  titleId: I,
  ..._
}, de) {
  return /* @__PURE__ */ Pe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: de,
    "aria-labelledby": I
  }, _), j ? /* @__PURE__ */ Pe.createElement("title", {
    id: I
  }, j) : null, /* @__PURE__ */ Pe.createElement("path", {
    fillRule: "evenodd",
    d: "M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Ck = /* @__PURE__ */ Pe.forwardRef(Ek);
function Rk({
  title: j,
  titleId: I,
  ..._
}, de) {
  return /* @__PURE__ */ Pe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: de,
    "aria-labelledby": I
  }, _), j ? /* @__PURE__ */ Pe.createElement("title", {
    id: I
  }, j) : null, /* @__PURE__ */ Pe.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Tk = /* @__PURE__ */ Pe.forwardRef(Rk);
function wk({
  title: j,
  titleId: I,
  ..._
}, de) {
  return /* @__PURE__ */ Pe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: de,
    "aria-labelledby": I
  }, _), j ? /* @__PURE__ */ Pe.createElement("title", {
    id: I
  }, j) : null, /* @__PURE__ */ Pe.createElement("path", {
    d: "M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"
  }), /* @__PURE__ */ Pe.createElement("path", {
    fillRule: "evenodd",
    d: "M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z",
    clipRule: "evenodd"
  }));
}
const xk = /* @__PURE__ */ Pe.forwardRef(wk);
function bk({
  title: j,
  titleId: I,
  ..._
}, de) {
  return /* @__PURE__ */ Pe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: de,
    "aria-labelledby": I
  }, _), j ? /* @__PURE__ */ Pe.createElement("title", {
    id: I
  }, j) : null, /* @__PURE__ */ Pe.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const dR = /* @__PURE__ */ Pe.forwardRef(bk), _k = ({
  totalStars: j = 5,
  onRatingChange: I,
  setRating: _,
  rating: de,
  showRating: Ze = !0,
  size: Ye = 32
}) => {
  const Me = (S) => {
    _ && _(S), I && I(S);
  };
  return /* @__PURE__ */ ce.jsxs("div", { className: "fr-flex fr-items-center fr-justify-between fr-w-full", children: [
    /* @__PURE__ */ ce.jsx("div", { className: "fr-flex fr-items-center fr-gap-1", children: Array.from({ length: j }, (S, ze) => /* @__PURE__ */ ce.jsx(
      "button",
      {
        className: "fr-cursor-pointer",
        onClick: () => Me(ze + 1),
        children: ze < de ? /* @__PURE__ */ ce.jsx(
          dR,
          {
            className: "fr-text-yellow-500",
            style: { width: `${Ye}px`, height: `${Ye}px` }
          }
        ) : /* @__PURE__ */ ce.jsx(
          yk,
          {
            className: "fr-text-gray-300",
            style: { width: `${Ye}px`, height: `${Ye}px` }
          }
        )
      },
      ze
    )) }),
    Ze && /* @__PURE__ */ ce.jsxs("p", { className: "fr-text-sm fr-text-gray-500", children: [
      de,
      "/",
      j
    ] })
  ] });
}, mS = ({ onSubmit: j, loading: I, useEmail: _, onToggleEmail: de, enableEmail: Ze }) => {
  const [Ye, Me] = Pe.useState("");
  return /* @__PURE__ */ ce.jsxs("div", { className: "fr-flex fr-flex-col fr-w-full fr-gap-2", children: [
    Ze && /* @__PURE__ */ ce.jsxs("label", { className: "fr-flex fr-items-center fr-justify-between fr-cursor-pointer", style: {
      opacity: _ ? 1 : 0.5
    }, children: [
      /* @__PURE__ */ ce.jsx("span", { className: "fr-text-sm", children: "Submit using email" }),
      /* @__PURE__ */ ce.jsx(
        "input",
        {
          type: "checkbox",
          className: "!fr-toggle !fr-toggle-sm",
          style: {
            opacity: _ ? 1 : 0.5
          },
          checked: _,
          onChange: (S) => de(S.target.checked)
        }
      )
    ] }),
    _ ? /* @__PURE__ */ ce.jsxs("div", { className: "fr-flex fr-w-full fr-gap-2", children: [
      /* @__PURE__ */ ce.jsx(
        "input",
        {
          type: "email",
          placeholder: "Enter your email",
          className: "fr-flex-1 fr-h-[32px] sm:fr-h-[36px] fr-p-2 fr-text-sm fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg",
          value: Ye,
          onChange: (S) => Me(S.target.value)
        }
      ),
      /* @__PURE__ */ ce.jsx(
        "button",
        {
          className: "fr-w-[80px] fr-h-[32px] sm:fr-h-[36px] fr-rounded-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300 fr-text-sm",
          onClick: () => j == null ? void 0 : j(Ye),
          disabled: I || !Ye,
          children: I ? "..." : "Submit"
        }
      )
    ] }) : /* @__PURE__ */ ce.jsx(
      "button",
      {
        className: "fr-w-[180px] fr-h-[32px] sm:fr-h-[36px] fr-rounded-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300 fr-mx-auto fr-text-sm sm:fr-text-base",
        onClick: () => j == null ? void 0 : j(),
        disabled: I,
        children: I ? "Submitting..." : "Submit review"
      }
    )
  ] });
}, yS = "https://www.feedback-evolution.com/api", kk = `${yS}/project/reviews`, Dk = `${yS}/project/ideas`, Ok = `${yS}/project/issues`, Lk = ({ onSubmit: j, projectId: I, user: _ }) => {
  const [de, Ze] = Pe.useState(""), [Ye, Me] = Pe.useState(0), [S, ze] = Pe.useState(!1), [xe, ae] = Pe.useState(!1), Ue = (ee) => {
    Ze(ee.target.value);
  }, te = de.length > 0 && Ye > 0, Te = async (ee) => {
    ze(!0);
    const ne = {
      body: de,
      rating: Ye,
      user: _ || ee ? {
        email: ee || (_ == null ? void 0 : _.email),
        name: _ == null ? void 0 : _.name
      } : void 0
    };
    (await fetch(`${kk}/${I}`, {
      method: "POST",
      body: JSON.stringify({ reviewData: ne })
    })).ok && (ze(!1), j());
  };
  return /* @__PURE__ */ ce.jsxs("div", { className: "fr-flex fr-flex-col fr-items-center fr-gap-1 fr-w-full fr-h-full fr-justify-between", children: [
    /* @__PURE__ */ ce.jsx("h2", { className: "fr-text-md fr-font-bold", children: "Tell us what you think" }),
    /* @__PURE__ */ ce.jsx("div", { className: "fr-form-control fr-w-full", children: /* @__PURE__ */ ce.jsx(
      "textarea",
      {
        autoFocus: !0,
        className: "fr-inline-flex fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-h-20 fr-p-2 fr-text-sm fr-w-full",
        placeholder: "We'd love to hear your thoughts! Leave us a review.",
        value: de,
        onChange: Ue
      }
    ) }),
    /* @__PURE__ */ ce.jsx(_k, { setRating: Me, rating: Ye }),
    /* @__PURE__ */ ce.jsx(
      mS,
      {
        onSubmit: te ? Te : void 0,
        loading: S,
        enableEmail: !_,
        useEmail: xe,
        onToggleEmail: ae
      }
    )
  ] });
}, Nk = [
  {
    icon: /* @__PURE__ */ ce.jsx(dR, { className: "fr-size-10 fr-text-yellow-400" }),
    type: mc.Review,
    subtitle: "Share what you think about the project"
  },
  {
    icon: /* @__PURE__ */ ce.jsx(xk, { className: "fr-size-10 fr-text-yellow-400" }),
    type: mc.Idea,
    subtitle: "Share how we can improve"
  },
  {
    icon: /* @__PURE__ */ ce.jsx(Tk, { className: "fr-size-10 fr-text-yellow-400" }),
    type: mc.Issue,
    subtitle: "Report a bug or issue"
  }
], Mk = ({ setFeedbackType: j }) => {
  const [I, _] = Pe.useState("");
  return /* @__PURE__ */ ce.jsxs(ce.Fragment, { children: [
    /* @__PURE__ */ ce.jsx("div", { className: "fr-text-center mb-4", children: /* @__PURE__ */ ce.jsx("p", { className: "fr-text-lg sm:fr-text-xl fr-font-bold fr-text-brandDarkBlue", children: "What's on your mind?" }) }),
    /* @__PURE__ */ ce.jsx("div", { className: "fr-flex fr-justify-between fr-gap-2 sm:fr-gap-6 fr-mt-5 fr-w-full", children: Nk.map(({ type: de, subtitle: Ze, icon: Ye }, Me) => /* @__PURE__ */ ce.jsxs(
      "button",
      {
        className: "fr-flex fr-flex-col fr-items-center fr-justify-center fr-h-28 fr-w-full fr-rounded-lg fr-border fr-border-gray-200 hover:fr-bg-brandLightHover fr-transition fr-bg-brandLight fr-text-brandDarkBlue fr-cursor-pointer",
        onMouseEnter: () => _(Ze),
        onMouseLeave: () => _(""),
        onClick: () => j(de),
        children: [
          Ye,
          /* @__PURE__ */ ce.jsx("span", { className: "fr-text-sm sm:fr-text-lg fr-font-medium", children: de })
        ]
      },
      Me
    )) }),
    /* @__PURE__ */ ce.jsx("p", { className: "fr-text-xs sm:fr-text-sm fr-text-center fr-mt-4 fr-text-brandDarkBlue", children: I || "Select an option to provide feedback" })
  ] });
}, zk = ({ onSubmit: j, projectId: I, user: _ }) => {
  const [de, Ze] = Pe.useState(""), [Ye, Me] = Pe.useState(""), [S, ze] = Pe.useState(!1), [xe, ae] = Pe.useState(!1), Ue = (ne) => {
    Ze(ne.target.value);
  }, te = (ne) => {
    Me(ne.target.value);
  }, Te = de.length > 0 && Ye, ee = async (ne) => {
    ze(!0);
    const tt = {
      body: de,
      category: Ye,
      user: _ || ne ? {
        email: ne || (_ == null ? void 0 : _.email),
        name: _ == null ? void 0 : _.name
      } : void 0
    };
    await fetch(`${Dk}/${I}`, {
      method: "POST",
      body: JSON.stringify({ ideaData: tt })
    }), ze(!1), j();
  };
  return /* @__PURE__ */ ce.jsxs("div", { className: "fr-flex fr-flex-col fr-items-center fr-gap-1 fr-w-full fr-h-full fr-justify-between", children: [
    /* @__PURE__ */ ce.jsx("h2", { className: "fr-text-md fr-font-bold", children: "Share your idea" }),
    /* @__PURE__ */ ce.jsx("div", { className: "fr-form-control fr-w-full", children: /* @__PURE__ */ ce.jsx(
      "textarea",
      {
        autoFocus: !0,
        className: "fr-inline-flex fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-h-20 fr-p-2 fr-text-sm fr-w-full",
        placeholder: "Got a great idea? Let us know how we can make things better!",
        value: de,
        onChange: Ue
      }
    ) }),
    /* @__PURE__ */ ce.jsx("div", { className: "fr-form-control fr-w-full", children: /* @__PURE__ */ ce.jsxs(
      "select",
      {
        className: "fr-inline-flex fr-h-[36px] fr-p-2 fr-text-sm fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-w-full",
        value: Ye,
        onChange: te,
        children: [
          /* @__PURE__ */ ce.jsx("option", { value: "", disabled: !0, children: "Select a category" }),
          /* @__PURE__ */ ce.jsx("option", { value: "Feature", children: "Feature" }),
          /* @__PURE__ */ ce.jsx("option", { value: "Improvement", children: "Improvement" }),
          /* @__PURE__ */ ce.jsx("option", { value: "UI", children: "UI/UX" }),
          /* @__PURE__ */ ce.jsx("option", { value: "Other", children: "Other" })
        ]
      }
    ) }),
    /* @__PURE__ */ ce.jsx(
      mS,
      {
        onSubmit: Te ? ee : void 0,
        loading: S,
        enableEmail: !_,
        useEmail: xe,
        onToggleEmail: ae
      }
    )
  ] });
}, Uk = ({ onSubmit: j, projectId: I, user: _ }) => {
  const [de, Ze] = Pe.useState(""), [Ye, Me] = Pe.useState(""), [S, ze] = Pe.useState(!1), [xe, ae] = Pe.useState(!1), Ue = (ne) => {
    Ze(ne.target.value);
  }, te = (ne) => {
    Me(ne.target.value);
  }, Te = de.length > 0 && Ye, ee = async (ne) => {
    ze(!0);
    const tt = {
      body: de,
      severity: Ye,
      user: _ || ne ? {
        email: ne || (_ == null ? void 0 : _.email),
        name: _ == null ? void 0 : _.name
      } : void 0,
      page: window.location.href,
      device: navigator.userAgent
    };
    await fetch(`${Ok}/${I}`, {
      method: "POST",
      body: JSON.stringify({ issueData: tt })
    }), ze(!1), j();
  };
  return /* @__PURE__ */ ce.jsxs("div", { className: "fr-flex fr-flex-col fr-items-center fr-gap-1 fr-w-full fr-h-full fr-justify-between", children: [
    /* @__PURE__ */ ce.jsx("h2", { className: "fr-text-md fr-font-bold", children: "Report an issue" }),
    /* @__PURE__ */ ce.jsx("div", { className: "fr-form-control fr-w-full", children: /* @__PURE__ */ ce.jsx(
      "textarea",
      {
        autoFocus: !0,
        className: "fr-inline-flex fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-h-20 fr-p-2 fr-text-sm fr-w-full",
        placeholder: "Describe the problem you encountered. We'll work on fixing it!",
        value: de,
        onChange: Ue
      }
    ) }),
    /* @__PURE__ */ ce.jsx("div", { className: "fr-form-control fr-w-full", children: /* @__PURE__ */ ce.jsxs(
      "select",
      {
        className: "fr-inline-flex fr-h-[36px] fr-p-2 fr-text-sm fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg fr-w-full",
        value: Ye,
        onChange: te,
        children: [
          /* @__PURE__ */ ce.jsx("option", { value: "", disabled: !0, children: "Select severity" }),
          /* @__PURE__ */ ce.jsx("option", { value: "Critical", children: "Critical" }),
          /* @__PURE__ */ ce.jsx("option", { value: "Medium", children: "Medium" }),
          /* @__PURE__ */ ce.jsx("option", { value: "Low", children: "low" })
        ]
      }
    ) }),
    /* @__PURE__ */ ce.jsx(
      mS,
      {
        onSubmit: Te ? ee : void 0,
        loading: S,
        enableEmail: !_,
        useEmail: xe,
        onToggleEmail: ae
      }
    )
  ] });
}, Ak = ({
  feedbackType: j,
  projectId: I,
  user: _,
  setFeedbackType: de,
  onSubmit: Ze
}) => {
  switch (j) {
    case mc.Review:
      return /* @__PURE__ */ ce.jsx(Lk, { onSubmit: Ze, projectId: I, user: _ });
    case mc.Idea:
      return /* @__PURE__ */ ce.jsx(zk, { onSubmit: Ze, projectId: I, user: _ });
    case mc.Issue:
      return /* @__PURE__ */ ce.jsx(Uk, { onSubmit: Ze, projectId: I, user: _ });
    default:
      return /* @__PURE__ */ ce.jsx(Mk, { setFeedbackType: de });
  }
}, jk = ({
  onSubmitMoreFeedback: j
}) => /* @__PURE__ */ ce.jsxs("div", { className: "fr-flex fr-flex-col fr-items-center fr-justify-center fr-w-full fr-gap-4 fr-h-full", children: [
  /* @__PURE__ */ ce.jsx(Ck, { className: "fr-text-green-500 fr-size-10 " }),
  /* @__PURE__ */ ce.jsx("p", { className: "fr-text-xl fr-font-bold fr-text-center", children: "Thank you! We received your feedback." }),
  /* @__PURE__ */ ce.jsx(
    "button",
    {
      className: "fr-w-[180px] fr-h-[40px] fr-rounded-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300",
      onClick: j,
      children: "Submit more feedback"
    }
  )
] }), Fk = ({
  triggerComponent: j,
  open: I = !1,
  closable: _ = !0,
  projectId: de,
  user: Ze
}) => {
  const [Ye, Me] = Pe.useState(I), [S, ze] = Pe.useState(
    void 0
  ), [xe, ae] = Pe.useState(!1), [Ue, te] = Pe.useState({}), Te = Pe.useRef(null), ee = Pe.useRef(null);
  Pe.useEffect(() => {
    if (Ye && j && Te.current && ee.current) {
      const Xe = Te.current.getBoundingClientRect(), je = ee.current.offsetWidth, Tt = ee.current.offsetHeight, Ce = window.innerWidth, vt = window.innerHeight, qe = Xe.left + Xe.width / 2, fn = Ce - Xe.right + Xe.width / 2, dn = vt - Xe.bottom;
      let jt = {}, mt = "";
      qe >= je / 2 && fn >= je / 2 ? jt = { left: "50%", right: "auto" } : fn < je / 2 ? jt = { right: `-${Ce - Xe.right}px`, left: "auto" } : jt = { left: `-${Xe.left}px`, right: "auto" }, mt = dn >= Tt ? "100%" : `-${Tt}px`, te({
        ...jt,
        top: mt
      });
    }
  }, [Ye, j]);
  const ne = () => {
    Me(!Ye);
  }, tt = j && Pe.cloneElement(j || null, {
    onClick: ne
  }), _n = () => {
    ze(void 0), Me(!1);
  }, en = () => {
    ae(!0), ze(void 0);
  };
  return /* @__PURE__ */ ce.jsxs("div", { style: { position: j ? "relative" : "static", width: j ? "fit-content" : "100%" }, children: [
    tt && /* @__PURE__ */ ce.jsx("div", { ref: Te, children: tt }),
    /* @__PURE__ */ ce.jsx(
      "div",
      {
        ref: ee,
        style: {
          position: j ? "absolute" : "static",
          zIndex: tt ? 999 : 0,
          minWidth: "320px",
          maxWidth: "384px",
          margin: "0 auto",
          ...Ue,
          transform: Ue.left === "50%" ? "translateX(-50%)" : "none"
        },
        className: "fr",
        children: Ye && /* @__PURE__ */ ce.jsxs(
          "div",
          {
            className: "fr-relative fr-p-5 fr-bg-brandWhite fr-shadow-lg fr-rounded-lg fr-w-full sm:fr-w-96 fr-h-64 fr-text-brandDarkBlue fr-mt-2 fr-flex fr-flex-col fr-items-center fr-justify-start",
            children: [
              S && /* @__PURE__ */ ce.jsx(
                "button",
                {
                  onClick: () => ze(void 0),
                  className: "fr-absolute fr-top-2 fr-left-2 hover:fr-text-gray-700 fr-text-brandDarkBlue fr-cursor-pointer",
                  children: /* @__PURE__ */ ce.jsx(hk, { className: "fr-size-6" })
                }
              ),
              _ && /* @__PURE__ */ ce.jsx(
                "button",
                {
                  onClick: _n,
                  className: "fr-absolute fr-top-2 fr-right-2 hover:fr-text-gray-700 fr-text-brandDarkBlue fr-cursor-pointer",
                  children: /* @__PURE__ */ ce.jsx(Sk, { className: "fr-size-6" })
                }
              ),
              xe ? /* @__PURE__ */ ce.jsx(
                jk,
                {
                  onSubmitMoreFeedback: () => ae(!1)
                }
              ) : /* @__PURE__ */ ce.jsx(
                Ak,
                {
                  feedbackType: S,
                  setFeedbackType: ze,
                  onSubmit: en,
                  projectId: de,
                  user: Ze
                }
              ),
              /* @__PURE__ */ ce.jsx("p", { className: "fr-text-[8px] fr-absolute fr-bottom-1 fr-left-1/2 fr-transform -fr-translate-x-1/2 fr-text-center fr-text-brandDarkBlue fr-opacity-40 fr-mt-2", children: "by Feedback Evolution" })
            ]
          }
        )
      }
    )
  ] });
};
function Hk({ projectId: j }) {
  return console.log("here"), /* @__PURE__ */ ce.jsx(Fk, { projectId: j, open: !0 });
}
const Vk = document.querySelectorAll(".feedback-evolution-widget");
Vk.forEach((j) => {
  hS(j).render(
    /* @__PURE__ */ ce.jsx(Pe.StrictMode, { children: /* @__PURE__ */ ce.jsx(Hk, { projectId: j.dataset.projectId }) })
  );
});
