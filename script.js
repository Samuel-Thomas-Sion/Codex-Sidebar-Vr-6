(function () {
  const L = document.createElement("link").relList;
  if (L && L.supports && L.supports("modulepreload")) return;
  for (const H of document.querySelectorAll('link[rel="modulepreload"]')) v(H);
  new MutationObserver((H) => {
    for (const ll of H)
      if (ll.type === "childList")
        for (const pl of ll.addedNodes)
          pl.tagName === "LINK" && pl.rel === "modulepreload" && v(pl);
  }).observe(document, { childList: !0, subtree: !0 });
  function w(H) {
    const ll = {};
    return (
      H.integrity && (ll.integrity = H.integrity),
      H.referrerPolicy && (ll.referrerPolicy = H.referrerPolicy),
      H.crossOrigin === "use-credentials"
        ? (ll.credentials = "include")
        : H.crossOrigin === "anonymous"
          ? (ll.credentials = "omit")
          : (ll.credentials = "same-origin"),
      ll
    );
  }
  function v(H) {
    if (H.ep) return;
    H.ep = !0;
    const ll = w(H);
    fetch(H.href, ll);
  }
})();
var yf = { exports: {} },
  Bu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr;
function am() {
  if (Tr) return Bu;
  Tr = 1;
  var A = Symbol.for("react.transitional.element"),
    L = Symbol.for("react.fragment");
  function w(v, H, ll) {
    var pl = null;
    if (
      (ll !== void 0 && (pl = "" + ll),
      H.key !== void 0 && (pl = "" + H.key),
      "key" in H)
    ) {
      ll = {};
      for (var Ul in H) Ul !== "key" && (ll[Ul] = H[Ul]);
    } else ll = H;
    return (
      (H = ll.ref),
      { $$typeof: A, type: v, key: pl, ref: H !== void 0 ? H : null, props: ll }
    );
  }
  return ((Bu.Fragment = L), (Bu.jsx = w), (Bu.jsxs = w), Bu);
}
var xr;
function em() {
  return (xr || ((xr = 1), (yf.exports = am())), yf.exports);
}
var s = em(),
  gf = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Er;
function um() {
  if (Er) return Z;
  Er = 1;
  var A = Symbol.for("react.transitional.element"),
    L = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    ll = Symbol.for("react.consumer"),
    pl = Symbol.for("react.context"),
    Ul = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    tl = Symbol.for("react.lazy"),
    q = Symbol.for("react.activity"),
    vl = Symbol.iterator;
  function Gl(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (vl && o[vl]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var Xl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Bl = Object.assign,
    Et = {};
  function $l(o, x, _) {
    ((this.props = o),
      (this.context = x),
      (this.refs = Et),
      (this.updater = _ || Xl));
  }
  (($l.prototype.isReactComponent = {}),
    ($l.prototype.setState = function (o, x) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, x, "setState");
    }),
    ($l.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function rt() {}
  rt.prototype = $l.prototype;
  function Cl(o, x, _) {
    ((this.props = o),
      (this.context = x),
      (this.refs = Et),
      (this.updater = _ || Xl));
  }
  var Fl = (Cl.prototype = new rt());
  ((Fl.constructor = Cl), Bl(Fl, $l.prototype), (Fl.isPureReactComponent = !0));
  var ht = Array.isArray;
  function Ql() {}
  var W = { H: null, A: null, T: null, S: null },
    Zl = Object.prototype.hasOwnProperty;
  function At(o, x, _) {
    var O = _.ref;
    return {
      $$typeof: A,
      type: o,
      key: x,
      ref: O !== void 0 ? O : null,
      props: _,
    };
  }
  function Wt(o, x) {
    return At(o.type, x, o.props);
  }
  function mt(o) {
    return typeof o == "object" && o !== null && o.$$typeof === A;
  }
  function Il(o) {
    var x = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (_) {
        return x[_];
      })
    );
  }
  var Nt = /\/+/g;
  function Yt(o, x) {
    return typeof o == "object" && o !== null && o.key != null
      ? Il("" + o.key)
      : x.toString(36);
  }
  function ut(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Ql, Ql)
            : ((o.status = "pending"),
              o.then(
                function (x) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = x));
                },
                function (x) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = x));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function S(o, x, _, O, g) {
    var N = typeof o;
    (N === "undefined" || N === "boolean") && (o = null);
    var D = !1;
    if (o === null) D = !0;
    else
      switch (N) {
        case "bigint":
        case "string":
        case "number":
          D = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case A:
            case L:
              D = !0;
              break;
            case tl:
              return ((D = o._init), S(D(o._payload), x, _, O, g));
          }
      }
    if (D)
      return (
        (g = g(o)),
        (D = O === "" ? "." + Yt(o, 0) : O),
        ht(g)
          ? ((_ = ""),
            D != null && (_ = D.replace(Nt, "$&/") + "/"),
            S(g, x, _, "", function (bl) {
              return bl;
            }))
          : g != null &&
            (mt(g) &&
              (g = Wt(
                g,
                _ +
                  (g.key == null || (o && o.key === g.key)
                    ? ""
                    : ("" + g.key).replace(Nt, "$&/") + "/") +
                  D,
              )),
            x.push(g)),
        1
      );
    D = 0;
    var J = O === "" ? "." : O + ":";
    if (ht(o))
      for (var X = 0; X < o.length; X++)
        ((O = o[X]), (N = J + Yt(O, X)), (D += S(O, x, _, N, g)));
    else if (((X = Gl(o)), typeof X == "function"))
      for (o = X.call(o), X = 0; !(O = o.next()).done; )
        ((O = O.value), (N = J + Yt(O, X++)), (D += S(O, x, _, N, g)));
    else if (N === "object") {
      if (typeof o.then == "function") return S(ut(o), x, _, O, g);
      throw (
        (x = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (x === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : x) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return D;
  }
  function M(o, x, _) {
    if (o == null) return o;
    var O = [],
      g = 0;
    return (
      S(o, O, "", "", function (N) {
        return x.call(_, N, g++);
      }),
      O
    );
  }
  function G(o) {
    if (o._status === -1) {
      var x = o._result;
      ((x = x()),
        x.then(
          function (_) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = _));
          },
          function (_) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = _));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = x)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var nl =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var x = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(x)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    il = {
      map: M,
      forEach: function (o, x, _) {
        M(
          o,
          function () {
            x.apply(this, arguments);
          },
          _,
        );
      },
      count: function (o) {
        var x = 0;
        return (
          M(o, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (o) {
        return (
          M(o, function (x) {
            return x;
          }) || []
        );
      },
      only: function (o) {
        if (!mt(o))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return o;
      },
    };
  return (
    (Z.Activity = q),
    (Z.Children = il),
    (Z.Component = $l),
    (Z.Fragment = w),
    (Z.Profiler = H),
    (Z.PureComponent = Cl),
    (Z.StrictMode = v),
    (Z.Suspense = C),
    (Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (Z.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return W.H.useMemoCache(o);
      },
    }),
    (Z.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (Z.cacheSignal = function () {
      return null;
    }),
    (Z.cloneElement = function (o, x, _) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + ".",
        );
      var O = Bl({}, o.props),
        g = o.key;
      if (x != null)
        for (N in (x.key !== void 0 && (g = "" + x.key), x))
          !Zl.call(x, N) ||
            N === "key" ||
            N === "__self" ||
            N === "__source" ||
            (N === "ref" && x.ref === void 0) ||
            (O[N] = x[N]);
      var N = arguments.length - 2;
      if (N === 1) O.children = _;
      else if (1 < N) {
        for (var D = Array(N), J = 0; J < N; J++) D[J] = arguments[J + 2];
        O.children = D;
      }
      return At(o.type, g, O);
    }),
    (Z.createContext = function (o) {
      return (
        (o = {
          $$typeof: pl,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: ll, _context: o }),
        o
      );
    }),
    (Z.createElement = function (o, x, _) {
      var O,
        g = {},
        N = null;
      if (x != null)
        for (O in (x.key !== void 0 && (N = "" + x.key), x))
          Zl.call(x, O) &&
            O !== "key" &&
            O !== "__self" &&
            O !== "__source" &&
            (g[O] = x[O]);
      var D = arguments.length - 2;
      if (D === 1) g.children = _;
      else if (1 < D) {
        for (var J = Array(D), X = 0; X < D; X++) J[X] = arguments[X + 2];
        g.children = J;
      }
      if (o && o.defaultProps)
        for (O in ((D = o.defaultProps), D)) g[O] === void 0 && (g[O] = D[O]);
      return At(o, N, g);
    }),
    (Z.createRef = function () {
      return { current: null };
    }),
    (Z.forwardRef = function (o) {
      return { $$typeof: Ul, render: o };
    }),
    (Z.isValidElement = mt),
    (Z.lazy = function (o) {
      return { $$typeof: tl, _payload: { _status: -1, _result: o }, _init: G };
    }),
    (Z.memo = function (o, x) {
      return { $$typeof: E, type: o, compare: x === void 0 ? null : x };
    }),
    (Z.startTransition = function (o) {
      var x = W.T,
        _ = {};
      W.T = _;
      try {
        var O = o(),
          g = W.S;
        (g !== null && g(_, O),
          typeof O == "object" &&
            O !== null &&
            typeof O.then == "function" &&
            O.then(Ql, nl));
      } catch (N) {
        nl(N);
      } finally {
        (x !== null && _.types !== null && (x.types = _.types), (W.T = x));
      }
    }),
    (Z.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (Z.use = function (o) {
      return W.H.use(o);
    }),
    (Z.useActionState = function (o, x, _) {
      return W.H.useActionState(o, x, _);
    }),
    (Z.useCallback = function (o, x) {
      return W.H.useCallback(o, x);
    }),
    (Z.useContext = function (o) {
      return W.H.useContext(o);
    }),
    (Z.useDebugValue = function () {}),
    (Z.useDeferredValue = function (o, x) {
      return W.H.useDeferredValue(o, x);
    }),
    (Z.useEffect = function (o, x) {
      return W.H.useEffect(o, x);
    }),
    (Z.useEffectEvent = function (o) {
      return W.H.useEffectEvent(o);
    }),
    (Z.useId = function () {
      return W.H.useId();
    }),
    (Z.useImperativeHandle = function (o, x, _) {
      return W.H.useImperativeHandle(o, x, _);
    }),
    (Z.useInsertionEffect = function (o, x) {
      return W.H.useInsertionEffect(o, x);
    }),
    (Z.useLayoutEffect = function (o, x) {
      return W.H.useLayoutEffect(o, x);
    }),
    (Z.useMemo = function (o, x) {
      return W.H.useMemo(o, x);
    }),
    (Z.useOptimistic = function (o, x) {
      return W.H.useOptimistic(o, x);
    }),
    (Z.useReducer = function (o, x, _) {
      return W.H.useReducer(o, x, _);
    }),
    (Z.useRef = function (o) {
      return W.H.useRef(o);
    }),
    (Z.useState = function (o) {
      return W.H.useState(o);
    }),
    (Z.useSyncExternalStore = function (o, x, _) {
      return W.H.useSyncExternalStore(o, x, _);
    }),
    (Z.useTransition = function () {
      return W.H.useTransition();
    }),
    (Z.version = "19.2.6"),
    Z
  );
}
var Ar;
function xf() {
  return (Ar || ((Ar = 1), (gf.exports = um())), gf.exports);
}
var ml = xf(),
  bf = { exports: {} },
  qu = {},
  Sf = { exports: {} },
  pf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr;
function nm() {
  return (
    Nr ||
      ((Nr = 1),
      (function (A) {
        function L(S, M) {
          var G = S.length;
          S.push(M);
          l: for (; 0 < G; ) {
            var nl = (G - 1) >>> 1,
              il = S[nl];
            if (0 < H(il, M)) ((S[nl] = M), (S[G] = il), (G = nl));
            else break l;
          }
        }
        function w(S) {
          return S.length === 0 ? null : S[0];
        }
        function v(S) {
          if (S.length === 0) return null;
          var M = S[0],
            G = S.pop();
          if (G !== M) {
            S[0] = G;
            l: for (var nl = 0, il = S.length, o = il >>> 1; nl < o; ) {
              var x = 2 * (nl + 1) - 1,
                _ = S[x],
                O = x + 1,
                g = S[O];
              if (0 > H(_, G))
                O < il && 0 > H(g, _)
                  ? ((S[nl] = g), (S[O] = G), (nl = O))
                  : ((S[nl] = _), (S[x] = G), (nl = x));
              else if (O < il && 0 > H(g, G))
                ((S[nl] = g), (S[O] = G), (nl = O));
              else break l;
            }
          }
          return M;
        }
        function H(S, M) {
          var G = S.sortIndex - M.sortIndex;
          return G !== 0 ? G : S.id - M.id;
        }
        if (
          ((A.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var ll = performance;
          A.unstable_now = function () {
            return ll.now();
          };
        } else {
          var pl = Date,
            Ul = pl.now();
          A.unstable_now = function () {
            return pl.now() - Ul;
          };
        }
        var C = [],
          E = [],
          tl = 1,
          q = null,
          vl = 3,
          Gl = !1,
          Xl = !1,
          Bl = !1,
          Et = !1,
          $l = typeof setTimeout == "function" ? setTimeout : null,
          rt = typeof clearTimeout == "function" ? clearTimeout : null,
          Cl = typeof setImmediate < "u" ? setImmediate : null;
        function Fl(S) {
          for (var M = w(E); M !== null; ) {
            if (M.callback === null) v(E);
            else if (M.startTime <= S)
              (v(E), (M.sortIndex = M.expirationTime), L(C, M));
            else break;
            M = w(E);
          }
        }
        function ht(S) {
          if (((Bl = !1), Fl(S), !Xl))
            if (w(C) !== null) ((Xl = !0), Ql || ((Ql = !0), Il()));
            else {
              var M = w(E);
              M !== null && ut(ht, M.startTime - S);
            }
        }
        var Ql = !1,
          W = -1,
          Zl = 5,
          At = -1;
        function Wt() {
          return Et ? !0 : !(A.unstable_now() - At < Zl);
        }
        function mt() {
          if (((Et = !1), Ql)) {
            var S = A.unstable_now();
            At = S;
            var M = !0;
            try {
              l: {
                ((Xl = !1), Bl && ((Bl = !1), rt(W), (W = -1)), (Gl = !0));
                var G = vl;
                try {
                  t: {
                    for (
                      Fl(S), q = w(C);
                      q !== null && !(q.expirationTime > S && Wt());
                    ) {
                      var nl = q.callback;
                      if (typeof nl == "function") {
                        ((q.callback = null), (vl = q.priorityLevel));
                        var il = nl(q.expirationTime <= S);
                        if (((S = A.unstable_now()), typeof il == "function")) {
                          ((q.callback = il), Fl(S), (M = !0));
                          break t;
                        }
                        (q === w(C) && v(C), Fl(S));
                      } else v(C);
                      q = w(C);
                    }
                    if (q !== null) M = !0;
                    else {
                      var o = w(E);
                      (o !== null && ut(ht, o.startTime - S), (M = !1));
                    }
                  }
                  break l;
                } finally {
                  ((q = null), (vl = G), (Gl = !1));
                }
                M = void 0;
              }
            } finally {
              M ? Il() : (Ql = !1);
            }
          }
        }
        var Il;
        if (typeof Cl == "function")
          Il = function () {
            Cl(mt);
          };
        else if (typeof MessageChannel < "u") {
          var Nt = new MessageChannel(),
            Yt = Nt.port2;
          ((Nt.port1.onmessage = mt),
            (Il = function () {
              Yt.postMessage(null);
            }));
        } else
          Il = function () {
            $l(mt, 0);
          };
        function ut(S, M) {
          W = $l(function () {
            S(A.unstable_now());
          }, M);
        }
        ((A.unstable_IdlePriority = 5),
          (A.unstable_ImmediatePriority = 1),
          (A.unstable_LowPriority = 4),
          (A.unstable_NormalPriority = 3),
          (A.unstable_Profiling = null),
          (A.unstable_UserBlockingPriority = 2),
          (A.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (A.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Zl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (A.unstable_getCurrentPriorityLevel = function () {
            return vl;
          }),
          (A.unstable_next = function (S) {
            switch (vl) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = vl;
            }
            var G = vl;
            vl = M;
            try {
              return S();
            } finally {
              vl = G;
            }
          }),
          (A.unstable_requestPaint = function () {
            Et = !0;
          }),
          (A.unstable_runWithPriority = function (S, M) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var G = vl;
            vl = S;
            try {
              return M();
            } finally {
              vl = G;
            }
          }),
          (A.unstable_scheduleCallback = function (S, M, G) {
            var nl = A.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? nl + G : nl))
                : (G = nl),
              S)
            ) {
              case 1:
                var il = -1;
                break;
              case 2:
                il = 250;
                break;
              case 5:
                il = 1073741823;
                break;
              case 4:
                il = 1e4;
                break;
              default:
                il = 5e3;
            }
            return (
              (il = G + il),
              (S = {
                id: tl++,
                callback: M,
                priorityLevel: S,
                startTime: G,
                expirationTime: il,
                sortIndex: -1,
              }),
              G > nl
                ? ((S.sortIndex = G),
                  L(E, S),
                  w(C) === null &&
                    S === w(E) &&
                    (Bl ? (rt(W), (W = -1)) : (Bl = !0), ut(ht, G - nl)))
                : ((S.sortIndex = il),
                  L(C, S),
                  Xl || Gl || ((Xl = !0), Ql || ((Ql = !0), Il()))),
              S
            );
          }),
          (A.unstable_shouldYield = Wt),
          (A.unstable_wrapCallback = function (S) {
            var M = vl;
            return function () {
              var G = vl;
              vl = M;
              try {
                return S.apply(this, arguments);
              } finally {
                vl = G;
              }
            };
          }));
      })(pf)),
    pf
  );
}
var Mr;
function im() {
  return (Mr || ((Mr = 1), (Sf.exports = nm())), Sf.exports);
}
var zf = { exports: {} },
  lt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r;
function cm() {
  if (_r) return lt;
  _r = 1;
  var A = xf();
  function L(C) {
    var E = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var tl = 2; tl < arguments.length; tl++)
        E += "&args[]=" + encodeURIComponent(arguments[tl]);
    }
    return (
      "Minified React error #" +
      C +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function w() {}
  var v = {
      d: {
        f: w,
        r: function () {
          throw Error(L(522));
        },
        D: w,
        C: w,
        L: w,
        m: w,
        X: w,
        S: w,
        M: w,
      },
      p: 0,
      findDOMNode: null,
    },
    H = Symbol.for("react.portal");
  function ll(C, E, tl) {
    var q =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: H,
      key: q == null ? null : "" + q,
      children: C,
      containerInfo: E,
      implementation: tl,
    };
  }
  var pl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ul(C, E) {
    if (C === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
    (lt.createPortal = function (C, E) {
      var tl =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(L(299));
      return ll(C, E, null, tl);
    }),
    (lt.flushSync = function (C) {
      var E = pl.T,
        tl = v.p;
      try {
        if (((pl.T = null), (v.p = 2), C)) return C();
      } finally {
        ((pl.T = E), (v.p = tl), v.d.f());
      }
    }),
    (lt.preconnect = function (C, E) {
      typeof C == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        v.d.C(C, E));
    }),
    (lt.prefetchDNS = function (C) {
      typeof C == "string" && v.d.D(C);
    }),
    (lt.preinit = function (C, E) {
      if (typeof C == "string" && E && typeof E.as == "string") {
        var tl = E.as,
          q = Ul(tl, E.crossOrigin),
          vl = typeof E.integrity == "string" ? E.integrity : void 0,
          Gl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        tl === "style"
          ? v.d.S(C, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: q,
              integrity: vl,
              fetchPriority: Gl,
            })
          : tl === "script" &&
            v.d.X(C, {
              crossOrigin: q,
              integrity: vl,
              fetchPriority: Gl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (lt.preinitModule = function (C, E) {
      if (typeof C == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var tl = Ul(E.as, E.crossOrigin);
            v.d.M(C, {
              crossOrigin: tl,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && v.d.M(C);
    }),
    (lt.preload = function (C, E) {
      if (
        typeof C == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var tl = E.as,
          q = Ul(tl, E.crossOrigin);
        v.d.L(C, tl, {
          crossOrigin: q,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (lt.preloadModule = function (C, E) {
      if (typeof C == "string")
        if (E) {
          var tl = Ul(E.as, E.crossOrigin);
          v.d.m(C, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: tl,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else v.d.m(C);
    }),
    (lt.requestFormReset = function (C) {
      v.d.r(C);
    }),
    (lt.unstable_batchedUpdates = function (C, E) {
      return C(E);
    }),
    (lt.useFormState = function (C, E, tl) {
      return pl.H.useFormState(C, E, tl);
    }),
    (lt.useFormStatus = function () {
      return pl.H.useHostTransitionStatus();
    }),
    (lt.version = "19.2.6"),
    lt
  );
}
var jr;
function fm() {
  if (jr) return zf.exports;
  jr = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (L) {
        console.error(L);
      }
  }
  return (A(), (zf.exports = cm()), zf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Or;
function sm() {
  if (Or) return qu;
  Or = 1;
  var A = im(),
    L = xf(),
    w = fm();
  function v(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function H(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function ll(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function pl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ul(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function C(l) {
    if (ll(l) !== l) throw Error(v(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = ll(l)), t === null)) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (C(u), l);
          if (n === e) return (C(u), t);
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(v(189));
        }
      }
      if (a.alternate !== e) throw Error(v(190));
    }
    if (a.tag !== 3) throw Error(v(188));
    return a.stateNode.current === a ? l : t;
  }
  function tl(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = tl(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign,
    vl = Symbol.for("react.element"),
    Gl = Symbol.for("react.transitional.element"),
    Xl = Symbol.for("react.portal"),
    Bl = Symbol.for("react.fragment"),
    Et = Symbol.for("react.strict_mode"),
    $l = Symbol.for("react.profiler"),
    rt = Symbol.for("react.consumer"),
    Cl = Symbol.for("react.context"),
    Fl = Symbol.for("react.forward_ref"),
    ht = Symbol.for("react.suspense"),
    Ql = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    Zl = Symbol.for("react.lazy"),
    At = Symbol.for("react.activity"),
    Wt = Symbol.for("react.memo_cache_sentinel"),
    mt = Symbol.iterator;
  function Il(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (mt && l[mt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Nt = Symbol.for("react.client.reference");
  function Yt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Nt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Et:
        return "StrictMode";
      case ht:
        return "Suspense";
      case Ql:
        return "SuspenseList";
      case At:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Xl:
          return "Portal";
        case Cl:
          return l.displayName || "Context";
        case rt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Fl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case W:
          return (
            (t = l.displayName || null),
            t !== null ? t : Yt(l.type) || "Memo"
          );
        case Zl:
          ((t = l._payload), (l = l._init));
          try {
            return Yt(l(t));
          } catch {}
      }
    return null;
  }
  var ut = Array.isArray,
    S = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    nl = [],
    il = -1;
  function o(l) {
    return { current: l };
  }
  function x(l) {
    0 > il || ((l.current = nl[il]), (nl[il] = null), il--);
  }
  function _(l, t) {
    (il++, (nl[il] = l.current), (l.current = t));
  }
  var O = o(null),
    g = o(null),
    N = o(null),
    D = o(null);
  function J(l, t) {
    switch ((_(N, t), _(g, l), _(O, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ko(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Ko(t)), (l = Jo(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (x(O), _(O, l));
  }
  function X() {
    (x(O), x(g), x(N));
  }
  function bl(l) {
    l.memoizedState !== null && _(D, l);
    var t = O.current,
      a = Jo(t, l.type);
    t !== a && (_(g, l), _(O, a));
  }
  function Ll(l) {
    (g.current === l && (x(O), x(g)),
      D.current === l && (x(D), (Uu._currentValue = G)));
  }
  var tt, Mt;
  function Q(l) {
    if (tt === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((tt = (t && t[1]) || ""),
          (Mt =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      tt +
      l +
      Mt
    );
  }
  var B = !1;
  function xl(l, t) {
    if (!l || B) return "";
    B = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (b) {
                  var y = b;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (b) {
                  y = b;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                y = b;
              }
              (T = l()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (b) {
            if (b && y && typeof b.stack == "string") return [b.stack, y.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          m = c.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");
        )
          e++;
        for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === m.length)
          for (
            e = f.length - 1, u = m.length - 1;
            1 <= e && 0 <= u && f[e] !== m[u];
          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== m[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== m[u])) {
                  var p =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", l.displayName)),
                    p
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((B = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? Q(a) : "";
  }
  function El(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Q(l.type);
      case 16:
        return Q("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Q("Suspense Fallback")
          : Q("Suspense");
      case 19:
        return Q("SuspenseList");
      case 0:
      case 15:
        return xl(l.type, !1);
      case 11:
        return xl(l.type.render, !1);
      case 1:
        return xl(l.type, !0);
      case 31:
        return Q("Activity");
      default:
        return "";
    }
  }
  function Pl(l) {
    try {
      var t = "",
        a = null;
      do ((t += El(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Ml = Object.prototype.hasOwnProperty,
    cl = A.unstable_scheduleCallback,
    Vl = A.unstable_cancelCallback,
    at = A.unstable_shouldYield,
    Ya = A.unstable_requestPaint,
    Rl = A.unstable_now,
    Gt = A.unstable_getCurrentPriorityLevel,
    Ga = A.unstable_ImmediatePriority,
    Le = A.unstable_UserBlockingPriority,
    Gu = A.unstable_NormalPriority,
    qr = A.unstable_LowPriority,
    Ef = A.unstable_IdlePriority,
    Yr = A.log,
    Gr = A.unstable_setDisableYieldValue,
    Ve = null,
    vt = null;
  function ha(l) {
    if (
      (typeof Yr == "function" && Gr(l),
      vt && typeof vt.setStrictMode == "function")
    )
      try {
        vt.setStrictMode(Ve, l);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : Zr,
    Xr = Math.log,
    Qr = Math.LN2;
  function Zr(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Xr(l) / Qr) | 0)) | 0);
  }
  var Xu = 256,
    Qu = 262144,
    Zu = 4194304;
  function Xa(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Lu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (u = Xa(e))
            : ((i &= c),
              i !== 0
                ? (u = Xa(i))
                : a || ((a = c & ~l), a !== 0 && (u = Xa(a)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = Xa(c))
            : i !== 0
              ? (u = Xa(i))
              : a || ((a = e & ~l), a !== 0 && (u = Xa(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Ke(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Lr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Af() {
    var l = Zu;
    return ((Zu <<= 1), (Zu & 62914560) === 0 && (Zu = 4194304), l);
  }
  function ei(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Je(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Vr(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      f = l.expirationTimes,
      m = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var p = 31 - yt(a),
        T = 1 << p;
      ((c[p] = 0), (f[p] = -1));
      var y = m[p];
      if (y !== null)
        for (m[p] = null, p = 0; p < y.length; p++) {
          var b = y[p];
          b !== null && (b.lane &= -536870913);
        }
      a &= ~T;
    }
    (e !== 0 && Nf(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function Nf(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - yt(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function Mf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - yt(a),
        u = 1 << e;
      ((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
    }
  }
  function _f(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : ui(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function ui(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ni(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function jf() {
    var l = M.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : vr(l.type));
  }
  function Of(l, t) {
    var a = M.p;
    try {
      return ((M.p = l), t());
    } finally {
      M.p = a;
    }
  }
  var ma = Math.random().toString(36).slice(2),
    Kl = "__reactFiber$" + ma,
    nt = "__reactProps$" + ma,
    ue = "__reactContainer$" + ma,
    ii = "__reactEvents$" + ma,
    Kr = "__reactListeners$" + ma,
    Jr = "__reactHandles$" + ma,
    Df = "__reactResources$" + ma,
    we = "__reactMarker$" + ma;
  function ci(l) {
    (delete l[Kl], delete l[nt], delete l[ii], delete l[Kr], delete l[Jr]);
  }
  function ne(l) {
    var t = l[Kl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[ue] || a[Kl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Po(l); l !== null; ) {
            if ((a = l[Kl])) return a;
            l = Po(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function ie(l) {
    if ((l = l[Kl] || l[ue])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function We(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function ce(l) {
    var t = l[Df];
    return (
      t ||
        (t = l[Df] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ql(l) {
    l[we] = !0;
  }
  var Uf = new Set(),
    Cf = {};
  function Qa(l, t) {
    (fe(l, t), fe(l + "Capture", t));
  }
  function fe(l, t) {
    for (Cf[l] = t, l = 0; l < t.length; l++) Uf.add(t[l]);
  }
  var wr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Rf = {},
    Hf = {};
  function Wr(l) {
    return Ml.call(Hf, l)
      ? !0
      : Ml.call(Rf, l)
        ? !1
        : wr.test(l)
          ? (Hf[l] = !0)
          : ((Rf[l] = !0), !1);
  }
  function Vu(l, t, a) {
    if (Wr(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ku(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function kt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function _t(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Bf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function kr(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((a = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function fi(l) {
    if (!l._valueTracker) {
      var t = Bf(l) ? "checked" : "value";
      l._valueTracker = kr(l, t, "" + l[t]);
    }
  }
  function qf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = Bf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Ju(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var $r = /[\n"\\]/g;
  function jt(l) {
    return l.replace($r, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function si(l, t, a, e, u, n, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + _t(t))
          : l.value !== "" + _t(t) && (l.value = "" + _t(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? di(l, i, _t(t))
        : a != null
          ? di(l, i, _t(a))
          : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + _t(c))
        : l.removeAttribute("name"));
  }
  function Yf(l, t, a, e, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        fi(l);
        return;
      }
      ((a = a != null ? "" + _t(a) : ""),
        (t = t != null ? "" + _t(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = c ? l.checked : !!e),
      (l.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      fi(l));
  }
  function di(l, t, a) {
    (t === "number" && Ju(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function se(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        ((u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + _t(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          ((l[u].selected = !0), e && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gf(l, t, a) {
    if (
      t != null &&
      ((t = "" + _t(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + _t(a) : "";
  }
  function Xf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(v(92));
        if (ut(e)) {
          if (1 < e.length) throw Error(v(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = _t(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e),
      fi(l));
  }
  function de(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Fr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Qf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || Fr.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Zf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(v(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t)
        ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && Qf(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && Qf(l, n, t[n]);
  }
  function oi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Ir = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Pr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wu(l) {
    return Pr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function $t() {}
  var ri = null;
  function hi(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var oe = null,
    re = null;
  function Lf(l) {
    var t = ie(l);
    if (t && (l = t.stateNode)) {
      var a = l[nt] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (si(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + jt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[nt] || null;
                if (!u) throw Error(v(90));
                si(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((e = a[t]), e.form === l.form && qf(e));
          }
          break l;
        case "textarea":
          Gf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && se(l, !!a.multiple, t, !1));
      }
    }
  }
  var mi = !1;
  function Vf(l, t, a) {
    if (mi) return l(t, a);
    mi = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((mi = !1),
        (oe !== null || re !== null) &&
          (Hn(), oe && ((t = oe), (l = re), (re = oe = null), Lf(t), l)))
      )
        for (t = 0; t < l.length; t++) Lf(l[t]);
    }
  }
  function ke(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[nt] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
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
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(v(231, t, typeof a));
    return a;
  }
  var Ft = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    vi = !1;
  if (Ft)
    try {
      var $e = {};
      (Object.defineProperty($e, "passive", {
        get: function () {
          vi = !0;
        },
      }),
        window.addEventListener("test", $e, $e),
        window.removeEventListener("test", $e, $e));
    } catch {
      vi = !1;
    }
  var va = null,
    yi = null,
    Wu = null;
  function Kf() {
    if (Wu) return Wu;
    var l,
      t = yi,
      a = t.length,
      e,
      u = "value" in va ? va.value : va.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
    return (Wu = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function ku(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function $u() {
    return !0;
  }
  function Jf() {
    return !1;
  }
  function it(l) {
    function t(a, e, u, n, i) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? $u
          : Jf),
        (this.isPropagationStopped = Jf),
        this
      );
    }
    return (
      q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = $u));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = $u));
        },
        persist: function () {},
        isPersistent: $u,
      }),
      t
    );
  }
  var Za = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fu = it(Za),
    Fe = q({}, Za, { view: 0, detail: 0 }),
    l0 = it(Fe),
    gi,
    bi,
    Ie,
    Iu = q({}, Fe, {
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
      getModifierState: pi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ie &&
              (Ie && l.type === "mousemove"
                ? ((gi = l.screenX - Ie.screenX), (bi = l.screenY - Ie.screenY))
                : (bi = gi = 0),
              (Ie = l)),
            gi);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : bi;
      },
    }),
    wf = it(Iu),
    t0 = q({}, Iu, { dataTransfer: 0 }),
    a0 = it(t0),
    e0 = q({}, Fe, { relatedTarget: 0 }),
    Si = it(e0),
    u0 = q({}, Za, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n0 = it(u0),
    i0 = q({}, Za, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    c0 = it(i0),
    f0 = q({}, Za, { data: 0 }),
    Wf = it(f0),
    s0 = {
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
      MozPrintableKey: "Unidentified",
    },
    d0 = {
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
      224: "Meta",
    },
    o0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function r0(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = o0[l])
        ? !!t[l]
        : !1;
  }
  function pi() {
    return r0;
  }
  var h0 = q({}, Fe, {
      key: function (l) {
        if (l.key) {
          var t = s0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = ku(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? d0[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pi,
      charCode: function (l) {
        return l.type === "keypress" ? ku(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? ku(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    m0 = it(h0),
    v0 = q({}, Iu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kf = it(v0),
    y0 = q({}, Fe, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pi,
    }),
    g0 = it(y0),
    b0 = q({}, Za, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    S0 = it(b0),
    p0 = q({}, Iu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    z0 = it(p0),
    T0 = q({}, Za, { newState: 0, oldState: 0 }),
    x0 = it(T0),
    E0 = [9, 13, 27, 32],
    zi = Ft && "CompositionEvent" in window,
    Pe = null;
  Ft && "documentMode" in document && (Pe = document.documentMode);
  var A0 = Ft && "TextEvent" in window && !Pe,
    $f = Ft && (!zi || (Pe && 8 < Pe && 11 >= Pe)),
    Ff = " ",
    If = !1;
  function Pf(l, t) {
    switch (l) {
      case "keyup":
        return E0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ls(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var he = !1;
  function N0(l, t) {
    switch (l) {
      case "compositionend":
        return ls(t);
      case "keypress":
        return t.which !== 32 ? null : ((If = !0), Ff);
      case "textInput":
        return ((l = t.data), l === Ff && If ? null : l);
      default:
        return null;
    }
  }
  function M0(l, t) {
    if (he)
      return l === "compositionend" || (!zi && Pf(l, t))
        ? ((l = Kf()), (Wu = yi = va = null), (he = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $f && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _0 = {
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
    week: !0,
  };
  function ts(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!_0[l.type] : t === "textarea";
  }
  function as(l, t, a, e) {
    (oe ? (re ? re.push(e) : (re = [e])) : (oe = e),
      (t = Zn(t, "onChange")),
      0 < t.length &&
        ((a = new Fu("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t })));
  }
  var lu = null,
    tu = null;
  function j0(l) {
    Go(l, 0);
  }
  function Pu(l) {
    var t = We(l);
    if (qf(t)) return l;
  }
  function es(l, t) {
    if (l === "change") return t;
  }
  var us = !1;
  if (Ft) {
    var Ti;
    if (Ft) {
      var xi = "oninput" in document;
      if (!xi) {
        var ns = document.createElement("div");
        (ns.setAttribute("oninput", "return;"),
          (xi = typeof ns.oninput == "function"));
      }
      Ti = xi;
    } else Ti = !1;
    us = Ti && (!document.documentMode || 9 < document.documentMode);
  }
  function is() {
    lu && (lu.detachEvent("onpropertychange", cs), (tu = lu = null));
  }
  function cs(l) {
    if (l.propertyName === "value" && Pu(tu)) {
      var t = [];
      (as(t, tu, l, hi(l)), Vf(j0, t));
    }
  }
  function O0(l, t, a) {
    l === "focusin"
      ? (is(), (lu = t), (tu = a), lu.attachEvent("onpropertychange", cs))
      : l === "focusout" && is();
  }
  function D0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Pu(tu);
  }
  function U0(l, t) {
    if (l === "click") return Pu(t);
  }
  function C0(l, t) {
    if (l === "input" || l === "change") return Pu(t);
  }
  function R0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var gt = typeof Object.is == "function" ? Object.is : R0;
  function au(l, t) {
    if (gt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Ml.call(t, u) || !gt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function fs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ss(l, t) {
    var a = fs(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = fs(a);
    }
  }
  function ds(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ds(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function os(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ju(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ju(l.document);
    }
    return t;
  }
  function Ei(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var H0 = Ft && "documentMode" in document && 11 >= document.documentMode,
    me = null,
    Ai = null,
    eu = null,
    Ni = !1;
  function rs(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ni ||
      me == null ||
      me !== Ju(e) ||
      ((e = me),
      "selectionStart" in e && Ei(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (eu && au(eu, e)) ||
        ((eu = e),
        (e = Zn(Ai, "onSelect")),
        0 < e.length &&
          ((t = new Fu("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = me))));
  }
  function La(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var ve = {
      animationend: La("Animation", "AnimationEnd"),
      animationiteration: La("Animation", "AnimationIteration"),
      animationstart: La("Animation", "AnimationStart"),
      transitionrun: La("Transition", "TransitionRun"),
      transitionstart: La("Transition", "TransitionStart"),
      transitioncancel: La("Transition", "TransitionCancel"),
      transitionend: La("Transition", "TransitionEnd"),
    },
    Mi = {},
    hs = {};
  Ft &&
    ((hs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ve.animationend.animation,
      delete ve.animationiteration.animation,
      delete ve.animationstart.animation),
    "TransitionEvent" in window || delete ve.transitionend.transition);
  function Va(l) {
    if (Mi[l]) return Mi[l];
    if (!ve[l]) return l;
    var t = ve[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in hs) return (Mi[l] = t[a]);
    return l;
  }
  var ms = Va("animationend"),
    vs = Va("animationiteration"),
    ys = Va("animationstart"),
    B0 = Va("transitionrun"),
    q0 = Va("transitionstart"),
    Y0 = Va("transitioncancel"),
    gs = Va("transitionend"),
    bs = new Map(),
    _i =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  _i.push("scrollEnd");
  function Xt(l, t) {
    (bs.set(l, t), Qa(t, [l]));
  }
  var ln =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    Ot = [],
    ye = 0,
    ji = 0;
  function tn() {
    for (var l = ye, t = (ji = ye = 0); t < l; ) {
      var a = Ot[t];
      Ot[t++] = null;
      var e = Ot[t];
      Ot[t++] = null;
      var u = Ot[t];
      Ot[t++] = null;
      var n = Ot[t];
      if (((Ot[t++] = null), e !== null && u !== null)) {
        var i = e.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (e.pending = u));
      }
      n !== 0 && Ss(a, u, n);
    }
  }
  function an(l, t, a, e) {
    ((Ot[ye++] = l),
      (Ot[ye++] = t),
      (Ot[ye++] = a),
      (Ot[ye++] = e),
      (ji |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function Oi(l, t, a, e) {
    return (an(l, t, a, e), en(l));
  }
  function Ka(l, t) {
    return (an(l, null, null, t), en(l));
  }
  function Ss(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - yt(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function en(l) {
    if (50 < Au) throw ((Au = 0), (Gc = null), Error(v(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ge = {};
  function G0(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function bt(l, t, a, e) {
    return new G0(l, t, a, e);
  }
  function Di(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function It(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = bt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function ps(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function un(l, t, a, e, u, n) {
    var i = 0;
    if (((e = l), typeof l == "function")) Di(l) && (i = 1);
    else if (typeof l == "string")
      i = Vh(l, a, O.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case At:
          return (
            (l = bt(31, a, t, u)),
            (l.elementType = At),
            (l.lanes = n),
            l
          );
        case Bl:
          return Ja(a.children, u, n, t);
        case Et:
          ((i = 8), (u |= 24));
          break;
        case $l:
          return (
            (l = bt(12, a, t, u | 2)),
            (l.elementType = $l),
            (l.lanes = n),
            l
          );
        case ht:
          return (
            (l = bt(13, a, t, u)),
            (l.elementType = ht),
            (l.lanes = n),
            l
          );
        case Ql:
          return (
            (l = bt(19, a, t, u)),
            (l.elementType = Ql),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Cl:
                i = 10;
                break l;
              case rt:
                i = 9;
                break l;
              case Fl:
                i = 11;
                break l;
              case W:
                i = 14;
                break l;
              case Zl:
                ((i = 16), (e = null));
                break l;
            }
          ((i = 29),
            (a = Error(v(130, l === null ? "null" : typeof l, ""))),
            (e = null));
      }
    return (
      (t = bt(i, a, t, u)),
      (t.elementType = l),
      (t.type = e),
      (t.lanes = n),
      t
    );
  }
  function Ja(l, t, a, e) {
    return ((l = bt(7, l, e, t)), (l.lanes = a), l);
  }
  function Ui(l, t, a) {
    return ((l = bt(6, l, null, t)), (l.lanes = a), l);
  }
  function zs(l) {
    var t = bt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Ci(l, t, a) {
    return (
      (t = bt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Ts = new WeakMap();
  function Dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = Ts.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Pl(t) }), Ts.set(l, t), t);
    }
    return { value: l, source: t, stack: Pl(t) };
  }
  var be = [],
    Se = 0,
    nn = null,
    uu = 0,
    Ut = [],
    Ct = 0,
    ya = null,
    Vt = 1,
    Kt = "";
  function Pt(l, t) {
    ((be[Se++] = uu), (be[Se++] = nn), (nn = l), (uu = t));
  }
  function xs(l, t, a) {
    ((Ut[Ct++] = Vt), (Ut[Ct++] = Kt), (Ut[Ct++] = ya), (ya = l));
    var e = Vt;
    l = Kt;
    var u = 32 - yt(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - yt(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (Vt = (1 << (32 - yt(t) + u)) | (a << u) | e),
        (Kt = n + l));
    } else ((Vt = (1 << n) | (a << u) | e), (Kt = l));
  }
  function Ri(l) {
    l.return !== null && (Pt(l, 1), xs(l, 1, 0));
  }
  function Hi(l) {
    for (; l === nn; )
      ((nn = be[--Se]), (be[Se] = null), (uu = be[--Se]), (be[Se] = null));
    for (; l === ya; )
      ((ya = Ut[--Ct]),
        (Ut[Ct] = null),
        (Kt = Ut[--Ct]),
        (Ut[Ct] = null),
        (Vt = Ut[--Ct]),
        (Ut[Ct] = null));
  }
  function Es(l, t) {
    ((Ut[Ct++] = Vt),
      (Ut[Ct++] = Kt),
      (Ut[Ct++] = ya),
      (Vt = t.id),
      (Kt = t.overflow),
      (ya = l));
  }
  var Jl = null,
    yl = null,
    P = !1,
    ga = null,
    Rt = !1,
    Bi = Error(v(519));
  function ba(l) {
    var t = Error(
      v(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (nu(Dt(t, l)), Bi);
  }
  function As(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Kl] = l), (t[nt] = e), a)) {
      case "dialog":
        ($("cancel", t), $("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mu.length; a++) $(Mu[a], t);
        break;
      case "source":
        $("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ($("error", t), $("load", t));
        break;
      case "details":
        $("toggle", t);
        break;
      case "input":
        ($("invalid", t),
          Yf(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ));
        break;
      case "select":
        $("invalid", t);
        break;
      case "textarea":
        ($("invalid", t), Xf(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Lo(t.textContent, a)
        ? (e.popover != null && ($("beforetoggle", t), $("toggle", t)),
          e.onScroll != null && $("scroll", t),
          e.onScrollEnd != null && $("scrollend", t),
          e.onClick != null && (t.onclick = $t),
          (t = !0))
        : (t = !1),
      t || ba(l, !0));
  }
  function Ns(l) {
    for (Jl = l.return; Jl; )
      switch (Jl.tag) {
        case 5:
        case 31:
        case 13:
          Rt = !1;
          return;
        case 27:
        case 3:
          Rt = !0;
          return;
        default:
          Jl = Jl.return;
      }
  }
  function pe(l) {
    if (l !== Jl) return !1;
    if (!P) return (Ns(l), (P = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || lf(l.type, l.memoizedProps))),
        (a = !a)),
      a && yl && ba(l),
      Ns(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      yl = Io(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      yl = Io(l);
    } else
      t === 27
        ? ((t = yl), Ua(l.type) ? ((l = nf), (nf = null), (yl = l)) : (yl = t))
        : (yl = Jl ? Bt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function wa() {
    ((yl = Jl = null), (P = !1));
  }
  function qi() {
    var l = ga;
    return (
      l !== null &&
        (dt === null ? (dt = l) : dt.push.apply(dt, l), (ga = null)),
      l
    );
  }
  function nu(l) {
    ga === null ? (ga = [l]) : ga.push(l);
  }
  var Yi = o(null),
    Wa = null,
    la = null;
  function Sa(l, t, a) {
    (_(Yi, t._currentValue), (t._currentValue = a));
  }
  function ta(l) {
    ((l._currentValue = Yi.current), x(Yi));
  }
  function Gi(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Xi(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              ((n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                Gi(n.return, a, l),
                e || (i = null));
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(v(341));
        ((i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          Gi(i, a, l),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ze(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(v(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          gt(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === D.current) {
        if (((i = u.alternate), i === null)) throw Error(v(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(Uu) : (l = [Uu]));
      }
      u = u.return;
    }
    (l !== null && Xi(t, l, a, e), (t.flags |= 262144));
  }
  function cn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!gt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function ka(l) {
    ((Wa = l),
      (la = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function wl(l) {
    return Ms(Wa, l);
  }
  function fn(l, t) {
    return (Wa === null && ka(l), Ms(l, t));
  }
  function Ms(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), la === null)) {
      if (l === null) throw Error(v(308));
      ((la = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else la = la.next = t;
    return a;
  }
  var X0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Q0 = A.unstable_scheduleCallback,
    Z0 = A.unstable_NormalPriority,
    _l = {
      $$typeof: Cl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Qi() {
    return { controller: new X0(), data: new Map(), refCount: 0 };
  }
  function iu(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Q0(Z0, function () {
          l.controller.abort();
        }));
  }
  var cu = null,
    Zi = 0,
    Te = 0,
    xe = null;
  function L0(l, t) {
    if (cu === null) {
      var a = (cu = []);
      ((Zi = 0),
        (Te = Kc()),
        (xe = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (Zi++, t.then(_s, _s), t);
  }
  function _s() {
    if (--Zi === 0 && cu !== null) {
      xe !== null && (xe.status = "fulfilled");
      var l = cu;
      ((cu = null), (Te = 0), (xe = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function V0(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var js = S.S;
  S.S = function (l, t) {
    ((ho = Rl()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        L0(l, t),
      js !== null && js(l, t));
  };
  var $a = o(null);
  function Li() {
    var l = $a.current;
    return l !== null ? l : hl.pooledCache;
  }
  function sn(l, t) {
    t === null ? _($a, $a.current) : _($a, t.pool);
  }
  function Os() {
    var l = Li();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var Ee = Error(v(460)),
    Vi = Error(v(474)),
    dn = Error(v(542)),
    on = { then: function () {} };
  function Ds(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Us(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then($t, $t), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Rs(l), l);
      default:
        if (typeof t.status == "string") t.then($t, $t);
        else {
          if (((l = hl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(v(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Rs(l), l);
        }
        throw ((Ia = t), Ee);
    }
  }
  function Fa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ia = a), Ee)
        : a;
    }
  }
  var Ia = null;
  function Cs() {
    if (Ia === null) throw Error(v(459));
    var l = Ia;
    return ((Ia = null), l);
  }
  function Rs(l) {
    if (l === Ee || l === dn) throw Error(v(483));
  }
  var Ae = null,
    fu = 0;
  function rn(l) {
    var t = fu;
    return ((fu += 1), Ae === null && (Ae = []), Us(Ae, l, t));
  }
  function su(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function hn(l, t) {
    throw t.$$typeof === vl
      ? Error(v(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          v(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Hs(l) {
    function t(r, d) {
      if (l) {
        var h = r.deletions;
        h === null ? ((r.deletions = [d]), (r.flags |= 16)) : h.push(d);
      }
    }
    function a(r, d) {
      if (!l) return null;
      for (; d !== null; ) (t(r, d), (d = d.sibling));
      return null;
    }
    function e(r) {
      for (var d = new Map(); r !== null; )
        (r.key !== null ? d.set(r.key, r) : d.set(r.index, r), (r = r.sibling));
      return d;
    }
    function u(r, d) {
      return ((r = It(r, d)), (r.index = 0), (r.sibling = null), r);
    }
    function n(r, d, h) {
      return (
        (r.index = h),
        l
          ? ((h = r.alternate),
            h !== null
              ? ((h = h.index), h < d ? ((r.flags |= 67108866), d) : h)
              : ((r.flags |= 67108866), d))
          : ((r.flags |= 1048576), d)
      );
    }
    function i(r) {
      return (l && r.alternate === null && (r.flags |= 67108866), r);
    }
    function c(r, d, h, z) {
      return d === null || d.tag !== 6
        ? ((d = Ui(h, r.mode, z)), (d.return = r), d)
        : ((d = u(d, h)), (d.return = r), d);
    }
    function f(r, d, h, z) {
      var R = h.type;
      return R === Bl
        ? p(r, d, h.props.children, z, h.key)
        : d !== null &&
            (d.elementType === R ||
              (typeof R == "object" &&
                R !== null &&
                R.$$typeof === Zl &&
                Fa(R) === d.type))
          ? ((d = u(d, h.props)), su(d, h), (d.return = r), d)
          : ((d = un(h.type, h.key, h.props, null, r.mode, z)),
            su(d, h),
            (d.return = r),
            d);
    }
    function m(r, d, h, z) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== h.containerInfo ||
        d.stateNode.implementation !== h.implementation
        ? ((d = Ci(h, r.mode, z)), (d.return = r), d)
        : ((d = u(d, h.children || [])), (d.return = r), d);
    }
    function p(r, d, h, z, R) {
      return d === null || d.tag !== 7
        ? ((d = Ja(h, r.mode, z, R)), (d.return = r), d)
        : ((d = u(d, h)), (d.return = r), d);
    }
    function T(r, d, h) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = Ui("" + d, r.mode, h)), (d.return = r), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Gl:
            return (
              (h = un(d.type, d.key, d.props, null, r.mode, h)),
              su(h, d),
              (h.return = r),
              h
            );
          case Xl:
            return ((d = Ci(d, r.mode, h)), (d.return = r), d);
          case Zl:
            return ((d = Fa(d)), T(r, d, h));
        }
        if (ut(d) || Il(d))
          return ((d = Ja(d, r.mode, h, null)), (d.return = r), d);
        if (typeof d.then == "function") return T(r, rn(d), h);
        if (d.$$typeof === Cl) return T(r, fn(r, d), h);
        hn(r, d);
      }
      return null;
    }
    function y(r, d, h, z) {
      var R = d !== null ? d.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return R !== null ? null : c(r, d, "" + h, z);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Gl:
            return h.key === R ? f(r, d, h, z) : null;
          case Xl:
            return h.key === R ? m(r, d, h, z) : null;
          case Zl:
            return ((h = Fa(h)), y(r, d, h, z));
        }
        if (ut(h) || Il(h)) return R !== null ? null : p(r, d, h, z, null);
        if (typeof h.then == "function") return y(r, d, rn(h), z);
        if (h.$$typeof === Cl) return y(r, d, fn(r, h), z);
        hn(r, h);
      }
      return null;
    }
    function b(r, d, h, z, R) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ((r = r.get(h) || null), c(d, r, "" + z, R));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Gl:
            return (
              (r = r.get(z.key === null ? h : z.key) || null),
              f(d, r, z, R)
            );
          case Xl:
            return (
              (r = r.get(z.key === null ? h : z.key) || null),
              m(d, r, z, R)
            );
          case Zl:
            return ((z = Fa(z)), b(r, d, h, z, R));
        }
        if (ut(z) || Il(z))
          return ((r = r.get(h) || null), p(d, r, z, R, null));
        if (typeof z.then == "function") return b(r, d, h, rn(z), R);
        if (z.$$typeof === Cl) return b(r, d, h, fn(d, z), R);
        hn(d, z);
      }
      return null;
    }
    function j(r, d, h, z) {
      for (
        var R = null, al = null, U = d, K = (d = 0), I = null;
        U !== null && K < h.length;
        K++
      ) {
        U.index > K ? ((I = U), (U = null)) : (I = U.sibling);
        var el = y(r, U, h[K], z);
        if (el === null) {
          U === null && (U = I);
          break;
        }
        (l && U && el.alternate === null && t(r, U),
          (d = n(el, d, K)),
          al === null ? (R = el) : (al.sibling = el),
          (al = el),
          (U = I));
      }
      if (K === h.length) return (a(r, U), P && Pt(r, K), R);
      if (U === null) {
        for (; K < h.length; K++)
          ((U = T(r, h[K], z)),
            U !== null &&
              ((d = n(U, d, K)),
              al === null ? (R = U) : (al.sibling = U),
              (al = U)));
        return (P && Pt(r, K), R);
      }
      for (U = e(U); K < h.length; K++)
        ((I = b(U, r, K, h[K], z)),
          I !== null &&
            (l && I.alternate !== null && U.delete(I.key === null ? K : I.key),
            (d = n(I, d, K)),
            al === null ? (R = I) : (al.sibling = I),
            (al = I)));
      return (
        l &&
          U.forEach(function (qa) {
            return t(r, qa);
          }),
        P && Pt(r, K),
        R
      );
    }
    function Y(r, d, h, z) {
      if (h == null) throw Error(v(151));
      for (
        var R = null, al = null, U = d, K = (d = 0), I = null, el = h.next();
        U !== null && !el.done;
        K++, el = h.next()
      ) {
        U.index > K ? ((I = U), (U = null)) : (I = U.sibling);
        var qa = y(r, U, el.value, z);
        if (qa === null) {
          U === null && (U = I);
          break;
        }
        (l && U && qa.alternate === null && t(r, U),
          (d = n(qa, d, K)),
          al === null ? (R = qa) : (al.sibling = qa),
          (al = qa),
          (U = I));
      }
      if (el.done) return (a(r, U), P && Pt(r, K), R);
      if (U === null) {
        for (; !el.done; K++, el = h.next())
          ((el = T(r, el.value, z)),
            el !== null &&
              ((d = n(el, d, K)),
              al === null ? (R = el) : (al.sibling = el),
              (al = el)));
        return (P && Pt(r, K), R);
      }
      for (U = e(U); !el.done; K++, el = h.next())
        ((el = b(U, r, K, el.value, z)),
          el !== null &&
            (l &&
              el.alternate !== null &&
              U.delete(el.key === null ? K : el.key),
            (d = n(el, d, K)),
            al === null ? (R = el) : (al.sibling = el),
            (al = el)));
      return (
        l &&
          U.forEach(function (tm) {
            return t(r, tm);
          }),
        P && Pt(r, K),
        R
      );
    }
    function rl(r, d, h, z) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === Bl &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case Gl:
            l: {
              for (var R = h.key; d !== null; ) {
                if (d.key === R) {
                  if (((R = h.type), R === Bl)) {
                    if (d.tag === 7) {
                      (a(r, d.sibling),
                        (z = u(d, h.props.children)),
                        (z.return = r),
                        (r = z));
                      break l;
                    }
                  } else if (
                    d.elementType === R ||
                    (typeof R == "object" &&
                      R !== null &&
                      R.$$typeof === Zl &&
                      Fa(R) === d.type)
                  ) {
                    (a(r, d.sibling),
                      (z = u(d, h.props)),
                      su(z, h),
                      (z.return = r),
                      (r = z));
                    break l;
                  }
                  a(r, d);
                  break;
                } else t(r, d);
                d = d.sibling;
              }
              h.type === Bl
                ? ((z = Ja(h.props.children, r.mode, z, h.key)),
                  (z.return = r),
                  (r = z))
                : ((z = un(h.type, h.key, h.props, null, r.mode, z)),
                  su(z, h),
                  (z.return = r),
                  (r = z));
            }
            return i(r);
          case Xl:
            l: {
              for (R = h.key; d !== null; ) {
                if (d.key === R)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === h.containerInfo &&
                    d.stateNode.implementation === h.implementation
                  ) {
                    (a(r, d.sibling),
                      (z = u(d, h.children || [])),
                      (z.return = r),
                      (r = z));
                    break l;
                  } else {
                    a(r, d);
                    break;
                  }
                else t(r, d);
                d = d.sibling;
              }
              ((z = Ci(h, r.mode, z)), (z.return = r), (r = z));
            }
            return i(r);
          case Zl:
            return ((h = Fa(h)), rl(r, d, h, z));
        }
        if (ut(h)) return j(r, d, h, z);
        if (Il(h)) {
          if (((R = Il(h)), typeof R != "function")) throw Error(v(150));
          return ((h = R.call(h)), Y(r, d, h, z));
        }
        if (typeof h.then == "function") return rl(r, d, rn(h), z);
        if (h.$$typeof === Cl) return rl(r, d, fn(r, h), z);
        hn(r, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          d !== null && d.tag === 6
            ? (a(r, d.sibling), (z = u(d, h)), (z.return = r), (r = z))
            : (a(r, d), (z = Ui(h, r.mode, z)), (z.return = r), (r = z)),
          i(r))
        : a(r, d);
    }
    return function (r, d, h, z) {
      try {
        fu = 0;
        var R = rl(r, d, h, z);
        return ((Ae = null), R);
      } catch (U) {
        if (U === Ee || U === dn) throw U;
        var al = bt(29, U, null, r.mode);
        return ((al.lanes = z), (al.return = r), al);
      } finally {
      }
    };
  }
  var Pa = Hs(!0),
    Bs = Hs(!1),
    pa = !1;
  function Ki(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ji(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function za(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ta(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (ul & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = en(l)),
        Ss(l, null, a),
        t
      );
    }
    return (an(l, e, t, a), en(l));
  }
  function du(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), Mf(l, a));
    }
  }
  function wi(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Wi = !1;
  function ou() {
    if (Wi) {
      var l = xe;
      if (l !== null) throw l;
    }
  }
  function ru(l, t, a, e) {
    Wi = !1;
    var u = l.updateQueue;
    pa = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        m = f.next;
      ((f.next = null), i === null ? (n = m) : (i.next = m), (i = f));
      var p = l.alternate;
      p !== null &&
        ((p = p.updateQueue),
        (c = p.lastBaseUpdate),
        c !== i &&
          (c === null ? (p.firstBaseUpdate = m) : (c.next = m),
          (p.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var T = u.baseState;
      ((i = 0), (p = m = f = null), (c = n));
      do {
        var y = c.lane & -536870913,
          b = y !== c.lane;
        if (b ? (F & y) === y : (e & y) === y) {
          (y !== 0 && y === Te && (Wi = !0),
            p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var j = l,
              Y = c;
            y = t;
            var rl = a;
            switch (Y.tag) {
              case 1:
                if (((j = Y.payload), typeof j == "function")) {
                  T = j.call(rl, T, y);
                  break l;
                }
                T = j;
                break l;
              case 3:
                j.flags = (j.flags & -65537) | 128;
              case 0:
                if (
                  ((j = Y.payload),
                  (y = typeof j == "function" ? j.call(rl, T, y) : j),
                  y == null)
                )
                  break l;
                T = q({}, T, y);
                break l;
              case 2:
                pa = !0;
            }
          }
          ((y = c.callback),
            y !== null &&
              ((l.flags |= 64),
              b && (l.flags |= 8192),
              (b = u.callbacks),
              b === null ? (u.callbacks = [y]) : b.push(y)));
        } else
          ((b = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            p === null ? ((m = p = b), (f = T)) : (p = p.next = b),
            (i |= y));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((b = c),
            (c = b.next),
            (b.next = null),
            (u.lastBaseUpdate = b),
            (u.shared.pending = null));
        }
      } while (!0);
      (p === null && (f = T),
        (u.baseState = f),
        (u.firstBaseUpdate = m),
        (u.lastBaseUpdate = p),
        n === null && (u.shared.lanes = 0),
        (Ma |= i),
        (l.lanes = i),
        (l.memoizedState = T));
    }
  }
  function qs(l, t) {
    if (typeof l != "function") throw Error(v(191, l));
    l.call(t);
  }
  function Ys(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) qs(a[l], t);
  }
  var Ne = o(null),
    mn = o(0);
  function Gs(l, t) {
    ((l = da), _(mn, l), _(Ne, t), (da = l | t.baseLanes));
  }
  function ki() {
    (_(mn, da), _(Ne, Ne.current));
  }
  function $i() {
    ((da = mn.current), x(Ne), x(mn));
  }
  var St = o(null),
    Ht = null;
  function xa(l) {
    var t = l.alternate;
    (_(Al, Al.current & 1),
      _(St, l),
      Ht === null &&
        (t === null || Ne.current !== null || t.memoizedState !== null) &&
        (Ht = l));
  }
  function Fi(l) {
    (_(Al, Al.current), _(St, l), Ht === null && (Ht = l));
  }
  function Xs(l) {
    l.tag === 22
      ? (_(Al, Al.current), _(St, l), Ht === null && (Ht = l))
      : Ea();
  }
  function Ea() {
    (_(Al, Al.current), _(St, St.current));
  }
  function pt(l) {
    (x(St), Ht === l && (Ht = null), x(Al));
  }
  var Al = o(0);
  function vn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || ef(a) || uf(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var aa = 0,
    V = null,
    dl = null,
    jl = null,
    yn = !1,
    Me = !1,
    le = !1,
    gn = 0,
    hu = 0,
    _e = null,
    K0 = 0;
  function zl() {
    throw Error(v(321));
  }
  function Ii(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!gt(l[a], t[a])) return !1;
    return !0;
  }
  function Pi(l, t, a, e, u, n) {
    return (
      (aa = n),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? xd : mc),
      (le = !1),
      (n = a(e, u)),
      (le = !1),
      Me && (n = Zs(t, a, e, u)),
      Qs(l),
      n
    );
  }
  function Qs(l) {
    S.H = yu;
    var t = dl !== null && dl.next !== null;
    if (((aa = 0), (jl = dl = V = null), (yn = !1), (hu = 0), (_e = null), t))
      throw Error(v(300));
    l === null ||
      Ol ||
      ((l = l.dependencies), l !== null && cn(l) && (Ol = !0));
  }
  function Zs(l, t, a, e) {
    V = l;
    var u = 0;
    do {
      if ((Me && (_e = null), (hu = 0), (Me = !1), 25 <= u))
        throw Error(v(301));
      if (((u += 1), (jl = dl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((S.H = Ed), (n = t(a, e)));
    } while (Me);
    return n;
  }
  function J0() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? mu(t) : t),
      (l = l.useState()[0]),
      (dl !== null ? dl.memoizedState : null) !== l && (V.flags |= 1024),
      t
    );
  }
  function lc() {
    var l = gn !== 0;
    return ((gn = 0), l);
  }
  function tc(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function ac(l) {
    if (yn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      yn = !1;
    }
    ((aa = 0), (jl = dl = V = null), (Me = !1), (hu = gn = 0), (_e = null));
  }
  function et() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (jl === null ? (V.memoizedState = jl = l) : (jl = jl.next = l), jl);
  }
  function Nl() {
    if (dl === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = dl.next;
    var t = jl === null ? V.memoizedState : jl.next;
    if (t !== null) ((jl = t), (dl = l));
    else {
      if (l === null)
        throw V.alternate === null ? Error(v(467)) : Error(v(310));
      ((dl = l),
        (l = {
          memoizedState: dl.memoizedState,
          baseState: dl.baseState,
          baseQueue: dl.baseQueue,
          queue: dl.queue,
          next: null,
        }),
        jl === null ? (V.memoizedState = jl = l) : (jl = jl.next = l));
    }
    return jl;
  }
  function bn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mu(l) {
    var t = hu;
    return (
      (hu += 1),
      _e === null && (_e = []),
      (l = Us(_e, l, t)),
      (t = V),
      (jl === null ? t.memoizedState : jl.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? xd : mc)),
      l
    );
  }
  function Sn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return mu(l);
      if (l.$$typeof === Cl) return wl(l);
    }
    throw Error(v(438, String(l)));
  }
  function ec(l) {
    var t = null,
      a = V.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = V.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = bn()), (V.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Wt;
    return (t.index++, a);
  }
  function ea(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function pn(l) {
    var t = Nl();
    return uc(t, dl, l);
  }
  function uc(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(v(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (e.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        f = null,
        m = t,
        p = !1;
      do {
        var T = m.lane & -536870913;
        if (T !== m.lane ? (F & T) === T : (aa & T) === T) {
          var y = m.revertLane;
          if (y === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              T === Te && (p = !0));
          else if ((aa & y) === y) {
            ((m = m.next), y === Te && (p = !0));
            continue;
          } else
            ((T = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              f === null ? ((c = f = T), (i = n)) : (f = f.next = T),
              (V.lanes |= y),
              (Ma |= y));
          ((T = m.action),
            le && a(n, T),
            (n = m.hasEagerState ? m.eagerState : a(n, T)));
        } else
          ((y = {
            lane: T,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            f === null ? ((c = f = y), (i = n)) : (f = f.next = y),
            (V.lanes |= T),
            (Ma |= T));
        m = m.next;
      } while (m !== null && m !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !gt(n, l.memoizedState) && ((Ol = !0), p && ((a = xe), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = f),
        (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function nc(l) {
    var t = Nl(),
      a = t.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (gt(n, t.memoizedState) || (Ol = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function Ls(l, t, a) {
    var e = V,
      u = Nl(),
      n = P;
    if (n) {
      if (a === void 0) throw Error(v(407));
      a = a();
    } else a = t();
    var i = !gt((dl || u).memoizedState, a);
    if (
      (i && ((u.memoizedState = a), (Ol = !0)),
      (u = u.queue),
      fc(Js.bind(null, e, u, l), [l]),
      u.getSnapshot !== t || i || (jl !== null && jl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        je(9, { destroy: void 0 }, Ks.bind(null, e, u, a, t), null),
        hl === null)
      )
        throw Error(v(349));
      n || (aa & 127) !== 0 || Vs(e, t, a);
    }
    return a;
  }
  function Vs(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = V.updateQueue),
      t === null
        ? ((t = bn()), (V.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Ks(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), ws(t) && Ws(l));
  }
  function Js(l, t, a) {
    return a(function () {
      ws(t) && Ws(l);
    });
  }
  function ws(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !gt(l, a);
    } catch {
      return !0;
    }
  }
  function Ws(l) {
    var t = Ka(l, 2);
    t !== null && ot(t, l, 2);
  }
  function ic(l) {
    var t = et();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), le)) {
        ha(!0);
        try {
          a();
        } finally {
          ha(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ea,
        lastRenderedState: l,
      }),
      t
    );
  }
  function ks(l, t, a, e) {
    return ((l.baseState = a), uc(l, dl, typeof e == "function" ? e : ea));
  }
  function w0(l, t, a, e, u) {
    if (xn(l)) throw Error(v(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (S.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), $s(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function $s(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = S.T,
        i = {};
      S.T = i;
      try {
        var c = a(u, e),
          f = S.S;
        (f !== null && f(i, c), Fs(l, t, c));
      } catch (m) {
        cc(l, t, m);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (S.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Fs(l, t, n));
      } catch (m) {
        cc(l, t, m);
      }
  }
  function Fs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            Is(l, t, e);
          },
          function (e) {
            return cc(l, t, e);
          },
        )
      : Is(l, t, a);
  }
  function Is(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Ps(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), $s(l, a))));
  }
  function cc(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), Ps(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function Ps(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ld(l, t) {
    return t;
  }
  function td(l, t) {
    if (P) {
      var a = hl.formState;
      if (a !== null) {
        l: {
          var e = V;
          if (P) {
            if (yl) {
              t: {
                for (var u = yl, n = Rt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = Bt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((yl = Bt(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            ba(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = et()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ld,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = pd.bind(null, V, e)),
      (e.dispatch = a),
      (e = ic(!1)),
      (n = hc.bind(null, V, !1, e.queue)),
      (e = et()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = w0.bind(null, V, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function ad(l) {
    var t = Nl();
    return ed(t, dl, l);
  }
  function ed(l, t, a) {
    if (
      ((t = uc(l, t, ld)[0]),
      (l = pn(ea)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = mu(t);
      } catch (i) {
        throw i === Ee ? dn : i;
      }
    else e = t;
    t = Nl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((V.flags |= 2048),
        je(9, { destroy: void 0 }, W0.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function W0(l, t) {
    l.action = t;
  }
  function ud(l) {
    var t = Nl(),
      a = dl;
    if (a !== null) return ed(t, a, l);
    (Nl(), (t = t.memoizedState), (a = Nl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function je(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = bn()), (V.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function nd() {
    return Nl().memoizedState;
  }
  function zn(l, t, a, e) {
    var u = et();
    ((V.flags |= l),
      (u.memoizedState = je(
        1 | t,
        { destroy: void 0 },
        a,
        e === void 0 ? null : e,
      )));
  }
  function Tn(l, t, a, e) {
    var u = Nl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    dl !== null && e !== null && Ii(e, dl.memoizedState.deps)
      ? (u.memoizedState = je(t, n, a, e))
      : ((V.flags |= l), (u.memoizedState = je(1 | t, n, a, e)));
  }
  function id(l, t) {
    zn(8390656, 8, l, t);
  }
  function fc(l, t) {
    Tn(2048, 8, l, t);
  }
  function k0(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null) ((t = bn()), (V.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function cd(l) {
    var t = Nl().memoizedState;
    return (
      k0({ ref: t, nextImpl: l }),
      function () {
        if ((ul & 2) !== 0) throw Error(v(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function fd(l, t) {
    return Tn(4, 2, l, t);
  }
  function sd(l, t) {
    return Tn(4, 4, l, t);
  }
  function dd(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function od(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), Tn(4, 4, dd.bind(null, t, l), a));
  }
  function sc() {}
  function rd(l, t) {
    var a = Nl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Ii(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function hd(l, t) {
    var a = Nl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Ii(t, e[1])) return e[0];
    if (((e = l()), le)) {
      ha(!0);
      try {
        l();
      } finally {
        ha(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function dc(l, t, a) {
    return a === void 0 || ((aa & 1073741824) !== 0 && (F & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = vo()), (V.lanes |= l), (Ma |= l), a);
  }
  function md(l, t, a, e) {
    return gt(a, t)
      ? a
      : Ne.current !== null
        ? ((l = dc(l, a, e)), gt(l, t) || (Ol = !0), l)
        : (aa & 42) === 0 || ((aa & 1073741824) !== 0 && (F & 261930) === 0)
          ? ((Ol = !0), (l.memoizedState = a))
          : ((l = vo()), (V.lanes |= l), (Ma |= l), t);
  }
  function vd(l, t, a, e, u) {
    var n = M.p;
    M.p = n !== 0 && 8 > n ? n : 8;
    var i = S.T,
      c = {};
    ((S.T = c), hc(l, !1, t, a));
    try {
      var f = u(),
        m = S.S;
      if (
        (m !== null && m(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var p = V0(f, e);
        vu(l, t, p, xt(l));
      } else vu(l, t, e, xt(l));
    } catch (T) {
      vu(l, t, { then: function () {}, status: "rejected", reason: T }, xt());
    } finally {
      ((M.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (S.T = i));
    }
  }
  function $0() {}
  function oc(l, t, a, e) {
    if (l.tag !== 5) throw Error(v(476));
    var u = yd(l).queue;
    vd(
      l,
      u,
      t,
      G,
      a === null
        ? $0
        : function () {
            return (gd(l), a(e));
          },
    );
  }
  function yd(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ea,
        lastRenderedState: G,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ea,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function gd(l) {
    var t = yd(l);
    (t.next === null && (t = l.alternate.memoizedState),
      vu(l, t.next.queue, {}, xt()));
  }
  function rc() {
    return wl(Uu);
  }
  function bd() {
    return Nl().memoizedState;
  }
  function Sd() {
    return Nl().memoizedState;
  }
  function F0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = xt();
          l = za(a);
          var e = Ta(t, l, a);
          (e !== null && (ot(e, t, a), du(e, t, a)),
            (t = { cache: Qi() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function I0(l, t, a) {
    var e = xt();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      xn(l)
        ? zd(t, a)
        : ((a = Oi(l, t, a, e)), a !== null && (ot(a, l, e), Td(a, t, e))));
  }
  function pd(l, t, a) {
    var e = xt();
    vu(l, t, a, e);
  }
  function vu(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (xn(l)) zd(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, a);
          if (((u.hasEagerState = !0), (u.eagerState = c), gt(c, i)))
            return (an(l, t, u, 0), hl === null && tn(), !1);
        } catch {
        } finally {
        }
      if (((a = Oi(l, t, u, e)), a !== null))
        return (ot(a, l, e), Td(a, t, e), !0);
    }
    return !1;
  }
  function hc(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Kc(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      xn(l))
    ) {
      if (t) throw Error(v(479));
    } else ((t = Oi(l, a, e, 2)), t !== null && ot(t, l, 2));
  }
  function xn(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function zd(l, t) {
    Me = yn = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function Td(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), Mf(l, a));
    }
  }
  var yu = {
    readContext: wl,
    use: Sn,
    useCallback: zl,
    useContext: zl,
    useEffect: zl,
    useImperativeHandle: zl,
    useLayoutEffect: zl,
    useInsertionEffect: zl,
    useMemo: zl,
    useReducer: zl,
    useRef: zl,
    useState: zl,
    useDebugValue: zl,
    useDeferredValue: zl,
    useTransition: zl,
    useSyncExternalStore: zl,
    useId: zl,
    useHostTransitionStatus: zl,
    useFormState: zl,
    useActionState: zl,
    useOptimistic: zl,
    useMemoCache: zl,
    useCacheRefresh: zl,
  };
  yu.useEffectEvent = zl;
  var xd = {
      readContext: wl,
      use: Sn,
      useCallback: function (l, t) {
        return ((et().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: wl,
      useEffect: id,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          zn(4194308, 4, dd.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return zn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        zn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = et();
        t = t === void 0 ? null : t;
        var e = l();
        if (le) {
          ha(!0);
          try {
            l();
          } finally {
            ha(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = et();
        if (a !== void 0) {
          var u = a(t);
          if (le) {
            ha(!0);
            try {
              a(t);
            } finally {
              ha(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = I0.bind(null, V, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = et();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = ic(l);
        var t = l.queue,
          a = pd.bind(null, V, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: sc,
      useDeferredValue: function (l, t) {
        var a = et();
        return dc(a, l, t);
      },
      useTransition: function () {
        var l = ic(!1);
        return (
          (l = vd.bind(null, V, l.queue, !0, !1)),
          (et().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = V,
          u = et();
        if (P) {
          if (a === void 0) throw Error(v(407));
          a = a();
        } else {
          if (((a = t()), hl === null)) throw Error(v(349));
          (F & 127) !== 0 || Vs(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          id(Js.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          je(9, { destroy: void 0 }, Ks.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = et(),
          t = hl.identifierPrefix;
        if (P) {
          var a = Kt,
            e = Vt;
          ((a = (e & ~(1 << (32 - yt(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = gn++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = K0++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: rc,
      useFormState: td,
      useActionState: td,
      useOptimistic: function (l) {
        var t = et();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = hc.bind(null, V, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: ec,
      useCacheRefresh: function () {
        return (et().memoizedState = F0.bind(null, V));
      },
      useEffectEvent: function (l) {
        var t = et(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((ul & 2) !== 0) throw Error(v(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    mc = {
      readContext: wl,
      use: Sn,
      useCallback: rd,
      useContext: wl,
      useEffect: fc,
      useImperativeHandle: od,
      useInsertionEffect: fd,
      useLayoutEffect: sd,
      useMemo: hd,
      useReducer: pn,
      useRef: nd,
      useState: function () {
        return pn(ea);
      },
      useDebugValue: sc,
      useDeferredValue: function (l, t) {
        var a = Nl();
        return md(a, dl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = pn(ea)[0],
          t = Nl().memoizedState;
        return [typeof l == "boolean" ? l : mu(l), t];
      },
      useSyncExternalStore: Ls,
      useId: bd,
      useHostTransitionStatus: rc,
      useFormState: ad,
      useActionState: ad,
      useOptimistic: function (l, t) {
        var a = Nl();
        return ks(a, dl, l, t);
      },
      useMemoCache: ec,
      useCacheRefresh: Sd,
    };
  mc.useEffectEvent = cd;
  var Ed = {
    readContext: wl,
    use: Sn,
    useCallback: rd,
    useContext: wl,
    useEffect: fc,
    useImperativeHandle: od,
    useInsertionEffect: fd,
    useLayoutEffect: sd,
    useMemo: hd,
    useReducer: nc,
    useRef: nd,
    useState: function () {
      return nc(ea);
    },
    useDebugValue: sc,
    useDeferredValue: function (l, t) {
      var a = Nl();
      return dl === null ? dc(a, l, t) : md(a, dl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = nc(ea)[0],
        t = Nl().memoizedState;
      return [typeof l == "boolean" ? l : mu(l), t];
    },
    useSyncExternalStore: Ls,
    useId: bd,
    useHostTransitionStatus: rc,
    useFormState: ud,
    useActionState: ud,
    useOptimistic: function (l, t) {
      var a = Nl();
      return dl !== null
        ? ks(a, dl, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: ec,
    useCacheRefresh: Sd,
  };
  Ed.useEffectEvent = cd;
  function vc(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : q({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var yc = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = xt(),
        u = za(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = Ta(l, u, e)),
        t !== null && (ot(t, l, e), du(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = xt(),
        u = za(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = Ta(l, u, e)),
        t !== null && (ot(t, l, e), du(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = xt(),
        e = za(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = Ta(l, e, a)),
        t !== null && (ot(t, l, a), du(t, l, a)));
    },
  };
  function Ad(l, t, a, e, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !au(a, e) || !au(u, n)
          : !0
    );
  }
  function Nd(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && yc.enqueueReplaceState(t, t.state, null));
  }
  function te(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = q({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function Md(l) {
    ln(l);
  }
  function _d(l) {
    console.error(l);
  }
  function jd(l) {
    ln(l);
  }
  function En(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Od(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function gc(l, t, a) {
    return (
      (a = za(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        En(l, t);
      }),
      a
    );
  }
  function Dd(l) {
    return ((l = za(l)), (l.tag = 3), l);
  }
  function Ud(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          Od(t, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (Od(t, a, e),
          typeof u != "function" &&
            (_a === null ? (_a = new Set([this])) : _a.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function P0(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ze(t, a, u, !0),
        (a = St.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Ht === null ? Bn() : a.alternate === null && Tl === 0 && (Tl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === on
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  Zc(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === on
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  Zc(l, e, u)),
              !1
            );
        }
        throw Error(v(435, a.tag));
      }
      return (Zc(l, e, u), Bn(), !1);
    }
    if (P)
      return (
        (t = St.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== Bi && ((l = Error(v(422), { cause: e })), nu(Dt(l, a))))
          : (e !== Bi && ((t = Error(v(423), { cause: e })), nu(Dt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = Dt(e, a)),
            (u = gc(l.stateNode, e, u)),
            wi(l, u),
            Tl !== 4 && (Tl = 2)),
        !1
      );
    var n = Error(v(520), { cause: e });
    if (
      ((n = Dt(n, a)),
      Eu === null ? (Eu = [n]) : Eu.push(n),
      Tl !== 4 && (Tl = 2),
      t === null)
    )
      return !0;
    ((e = Dt(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = gc(a.stateNode, e, l)),
            wi(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (_a === null || !_a.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = Dd(u)),
              Ud(u, l, a, e),
              wi(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var bc = Error(v(461)),
    Ol = !1;
  function Wl(l, t, a, e) {
    t.child = l === null ? Bs(t, null, a, e) : Pa(t, l.child, a, e);
  }
  function Cd(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      ka(t),
      (e = Pi(l, t, a, i, n, u)),
      (c = lc()),
      l !== null && !Ol
        ? (tc(l, t, u), ua(l, t, u))
        : (P && c && Ri(t), (t.flags |= 1), Wl(l, t, e, u), t.child)
    );
  }
  function Rd(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Di(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Hd(l, t, n, e, u))
        : ((l = un(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Nc(l, u))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : au), a(i, e) && l.ref === t.ref)
      )
        return ua(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = It(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Hd(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (au(n, e) && l.ref === t.ref)
        if (((Ol = !1), (t.pendingProps = e = n), Nc(l, u)))
          (l.flags & 131072) !== 0 && (Ol = !0);
        else return ((t.lanes = l.lanes), ua(l, t, u));
    }
    return Sc(l, t, a, e, u);
  }
  function Bd(l, t, a, e) {
    var u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, u = 0; e !== null; )
            ((u = u | e.lanes | e.childLanes), (e = e.sibling));
          e = u & ~n;
        } else ((e = 0), (t.child = null));
        return qd(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && sn(t, n !== null ? n.cachePool : null),
          n !== null ? Gs(t, n) : ki(),
          Xs(t));
      else
        return (
          (e = t.lanes = 536870912),
          qd(l, t, n !== null ? n.baseLanes | a : a, a, e)
        );
    } else
      n !== null
        ? (sn(t, n.cachePool), Gs(t, n), Ea(), (t.memoizedState = null))
        : (l !== null && sn(t, null), ki(), Ea());
    return (Wl(l, t, u, a), t.child);
  }
  function gu(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function qd(l, t, a, e, u) {
    var n = Li();
    return (
      (n = n === null ? null : { parent: _l._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && sn(t, null),
      ki(),
      Xs(t),
      l !== null && ze(l, t, e, !0),
      (t.childLanes = u),
      null
    );
  }
  function An(l, t) {
    return (
      (t = Mn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Yd(l, t, a) {
    return (
      Pa(t, l.child, null, a),
      (l = An(t, t.pendingProps)),
      (l.flags |= 2),
      pt(t),
      (t.memoizedState = null),
      l
    );
  }
  function lh(l, t, a) {
    var e = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (P) {
        if (e.mode === "hidden")
          return ((l = An(t, e)), (t.lanes = 536870912), gu(null, l));
        if (
          (Fi(t),
          (l = yl)
            ? ((l = Fo(l, Rt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ya !== null ? { id: Vt, overflow: Kt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = zs(l)),
                (a.return = t),
                (t.child = a),
                (Jl = t),
                (yl = null)))
            : (l = null),
          l === null)
        )
          throw ba(t);
        return ((t.lanes = 536870912), null);
      }
      return An(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Fi(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = Yd(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(v(558));
      else if (
        (Ol || ze(l, t, a, !1), (u = (a & l.childLanes) !== 0), Ol || u)
      ) {
        if (
          ((e = hl),
          e !== null && ((i = _f(e, a)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), Ka(l, i), ot(e, l, i), bc);
        (Bn(), (t = Yd(l, t, a)));
      } else
        ((l = n.treeContext),
          (yl = Bt(i.nextSibling)),
          (Jl = t),
          (P = !0),
          (ga = null),
          (Rt = !1),
          l !== null && Es(t, l),
          (t = An(t, e)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = It(l.child, { mode: e.mode, children: e.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Nn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(v(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Sc(l, t, a, e, u) {
    return (
      ka(t),
      (a = Pi(l, t, a, e, void 0, u)),
      (e = lc()),
      l !== null && !Ol
        ? (tc(l, t, u), ua(l, t, u))
        : (P && e && Ri(t), (t.flags |= 1), Wl(l, t, a, u), t.child)
    );
  }
  function Gd(l, t, a, e, u, n) {
    return (
      ka(t),
      (t.updateQueue = null),
      (a = Zs(t, e, a, u)),
      Qs(l),
      (e = lc()),
      l !== null && !Ol
        ? (tc(l, t, n), ua(l, t, n))
        : (P && e && Ri(t), (t.flags |= 1), Wl(l, t, a, n), t.child)
    );
  }
  function Xd(l, t, a, e, u) {
    if ((ka(t), t.stateNode === null)) {
      var n = ge,
        i = a.contextType;
      (typeof i == "object" && i !== null && (n = wl(i)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = yc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Ki(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? wl(i) : ge),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (vc(t, a, i, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && yc.enqueueReplaceState(n, n.state, null),
          ru(t, e, n, u),
          ou(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = te(a, c);
      n.props = f;
      var m = n.context,
        p = a.contextType;
      ((i = ge), typeof p == "object" && p !== null && (i = wl(p)));
      var T = a.getDerivedStateFromProps;
      ((p =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        p ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || m !== i) && Nd(t, n, e, i)),
        (pa = !1));
      var y = t.memoizedState;
      ((n.state = y),
        ru(t, e, n, u),
        ou(),
        (m = t.memoizedState),
        c || y !== m || pa
          ? (typeof T == "function" && (vc(t, a, T, e), (m = t.memoizedState)),
            (f = pa || Ad(t, a, f, e, y, m, i))
              ? (p ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = m)),
            (n.props = e),
            (n.state = m),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1)));
    } else {
      ((n = t.stateNode),
        Ji(l, t),
        (i = t.memoizedProps),
        (p = te(a, i)),
        (n.props = p),
        (T = t.pendingProps),
        (y = n.context),
        (m = a.contextType),
        (f = ge),
        typeof m == "object" && m !== null && (f = wl(m)),
        (c = a.getDerivedStateFromProps),
        (m =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== T || y !== f) && Nd(t, n, e, f)),
        (pa = !1),
        (y = t.memoizedState),
        (n.state = y),
        ru(t, e, n, u),
        ou());
      var b = t.memoizedState;
      i !== T ||
      y !== b ||
      pa ||
      (l !== null && l.dependencies !== null && cn(l.dependencies))
        ? (typeof c == "function" && (vc(t, a, c, e), (b = t.memoizedState)),
          (p =
            pa ||
            Ad(t, a, p, e, y, b, f) ||
            (l !== null && l.dependencies !== null && cn(l.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, b, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, b, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = b)),
          (n.props = e),
          (n.state = b),
          (n.context = f),
          (e = p))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      Nn(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = Pa(t, l.child, null, u)),
              (t.child = Pa(t, null, a, u)))
            : Wl(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = ua(l, t, u)),
      l
    );
  }
  function Qd(l, t, a, e) {
    return (wa(), (t.flags |= 256), Wl(l, t, a, e), t.child);
  }
  var pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function zc(l) {
    return { baseLanes: l, cachePool: Os() };
  }
  function Tc(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= Tt), l);
  }
  function Zd(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Al.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (P) {
        if (
          (u ? xa(t) : Ea(),
          (l = yl)
            ? ((l = Fo(l, Rt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ya !== null ? { id: Vt, overflow: Kt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = zs(l)),
                (a.return = t),
                (t.child = a),
                (Jl = t),
                (yl = null)))
            : (l = null),
          l === null)
        )
          throw ba(t);
        return (uf(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = e.children;
      return (
        (e = e.fallback),
        u
          ? (Ea(),
            (u = t.mode),
            (c = Mn({ mode: "hidden", children: c }, u)),
            (e = Ja(e, u, a, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = zc(a)),
            (e.childLanes = Tc(l, i, a)),
            (t.memoizedState = pc),
            gu(null, e))
          : (xa(t), xc(t, c))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (xa(t), (t.flags &= -257), (t = Ec(l, t, a)))
          : t.memoizedState !== null
            ? (Ea(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (Ea(),
              (c = e.fallback),
              (u = t.mode),
              (e = Mn({ mode: "visible", children: e.children }, u)),
              (c = Ja(c, u, a, null)),
              (c.flags |= 2),
              (e.return = t),
              (c.return = t),
              (e.sibling = c),
              (t.child = e),
              Pa(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = zc(a)),
              (e.childLanes = Tc(l, i, a)),
              (t.memoizedState = pc),
              (t = gu(null, e)));
      else if ((xa(t), uf(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var m = i.dgst;
        ((i = m),
          (e = Error(v(419))),
          (e.stack = ""),
          (e.digest = i),
          nu({ value: e, source: null, stack: null }),
          (t = Ec(l, t, a)));
      } else if (
        (Ol || ze(l, t, a, !1), (i = (a & l.childLanes) !== 0), Ol || i)
      ) {
        if (
          ((i = hl),
          i !== null && ((e = _f(i, a)), e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), Ka(l, e), ot(i, l, e), bc);
        (ef(c) || Bn(), (t = Ec(l, t, a)));
      } else
        ef(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (yl = Bt(c.nextSibling)),
            (Jl = t),
            (P = !0),
            (ga = null),
            (Rt = !1),
            l !== null && Es(t, l),
            (t = xc(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Ea(),
        (c = e.fallback),
        (u = t.mode),
        (f = l.child),
        (m = f.sibling),
        (e = It(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        m !== null ? (c = It(m, c)) : ((c = Ja(c, u, a, null)), (c.flags |= 2)),
        (c.return = t),
        (e.return = t),
        (e.sibling = c),
        (t.child = e),
        gu(null, e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = zc(a))
          : ((u = c.cachePool),
            u !== null
              ? ((f = _l._currentValue),
                (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = Os()),
            (c = { baseLanes: c.baseLanes | a, cachePool: u })),
        (e.memoizedState = c),
        (e.childLanes = Tc(l, i, a)),
        (t.memoizedState = pc),
        gu(l.child, e))
      : (xa(t),
        (a = l.child),
        (l = a.sibling),
        (a = It(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function xc(l, t) {
    return (
      (t = Mn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Mn(l, t) {
    return ((l = bt(22, l, null, t)), (l.lanes = 0), l);
  }
  function Ec(l, t, a) {
    return (
      Pa(t, l.child, null, a),
      (l = xc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Ld(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), Gi(l.return, t, a));
  }
  function Ac(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = e),
        (i.tail = a),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function Vd(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var i = Al.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      _(Al, i),
      Wl(l, t, e, a),
      (e = P ? uu : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Ld(l, a, t);
        else if (l.tag === 19) Ld(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((l = a.alternate),
            l !== null && vn(l) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          Ac(t, !1, u, a, n, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && vn(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = a), (a = u), (u = l));
        }
        Ac(t, !0, a, null, n, e);
        break;
      case "together":
        Ac(t, !1, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ua(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (Ma |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ze(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(v(153));
    if (t.child !== null) {
      for (
        l = t.child, a = It(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = It(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Nc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && cn(l)));
  }
  function th(l, t, a) {
    switch (t.tag) {
      case 3:
        (J(t, t.stateNode.containerInfo),
          Sa(t, _l, l.memoizedState.cache),
          wa());
        break;
      case 27:
      case 5:
        bl(t);
        break;
      case 4:
        J(t, t.stateNode.containerInfo);
        break;
      case 10:
        Sa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Fi(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (xa(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Zd(l, t, a)
              : (xa(t), (l = ua(l, t, a)), l !== null ? l.sibling : null);
        xa(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (ze(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return Vd(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          _(Al, Al.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Bd(l, t, a, t.pendingProps));
      case 24:
        Sa(t, _l, l.memoizedState.cache);
    }
    return ua(l, t, a);
  }
  function Kd(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Ol = !0;
      else {
        if (!Nc(l, a) && (t.flags & 128) === 0) return ((Ol = !1), th(l, t, a));
        Ol = (l.flags & 131072) !== 0;
      }
    else ((Ol = !1), P && (t.flags & 1048576) !== 0 && xs(t, uu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (((l = Fa(t.elementType)), (t.type = l), typeof l == "function"))
            Di(l)
              ? ((e = te(l, e)), (t.tag = 1), (t = Xd(null, t, l, e, a)))
              : ((t.tag = 0), (t = Sc(null, t, l, e, a)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Fl) {
                ((t.tag = 11), (t = Cd(null, t, l, e, a)));
                break l;
              } else if (u === W) {
                ((t.tag = 14), (t = Rd(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = Yt(l) || l), Error(v(306, t, "")));
          }
        }
        return t;
      case 0:
        return Sc(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = te(e, t.pendingProps)), Xd(l, t, e, u, a));
      case 3:
        l: {
          if ((J(t, t.stateNode.containerInfo), l === null))
            throw Error(v(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Ji(l, t), ru(t, e, null, a));
          var i = t.memoizedState;
          if (
            ((e = i.cache),
            Sa(t, _l, e),
            e !== n.cache && Xi(t, [_l], a, !0),
            ou(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Qd(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = Dt(Error(v(424)), t)), nu(u), (t = Qd(l, t, e, a)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                yl = Bt(l.firstChild),
                  Jl = t,
                  P = !0,
                  ga = null,
                  Rt = !0,
                  a = Bs(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((wa(), e === u)) {
              t = ua(l, t, a);
              break l;
            }
            Wl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Nn(l, t),
          l === null
            ? (a = er(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : P ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = Ln(N.current).createElement(a)),
                (e[Kl] = t),
                (e[nt] = l),
                kl(e, a, l),
                ql(e),
                (t.stateNode = e))
            : (t.memoizedState = er(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          bl(t),
          l === null &&
            P &&
            ((e = t.stateNode = lr(t.type, t.pendingProps, N.current)),
            (Jl = t),
            (Rt = !0),
            (u = yl),
            Ua(t.type) ? ((nf = u), (yl = Bt(e.firstChild))) : (yl = u)),
          Wl(l, t, t.pendingProps.children, a),
          Nn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((u = e = yl) &&
              ((e = Dh(e, t.type, t.pendingProps, Rt)),
              e !== null
                ? ((t.stateNode = e),
                  (Jl = t),
                  (yl = Bt(e.firstChild)),
                  (Rt = !1),
                  (u = !0))
                : (u = !1)),
            u || ba(t)),
          bl(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (e = n.children),
          lf(u, n) ? (e = null) : i !== null && lf(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Pi(l, t, J0, null, null, a)), (Uu._currentValue = u)),
          Nn(l, t),
          Wl(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = a = yl) &&
              ((a = Uh(a, t.pendingProps, Rt)),
              a !== null
                ? ((t.stateNode = a), (Jl = t), (yl = null), (l = !0))
                : (l = !1)),
            l || ba(t)),
          null
        );
      case 13:
        return Zd(l, t, a);
      case 4:
        return (
          J(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = Pa(t, null, e, a)) : Wl(l, t, e, a),
          t.child
        );
      case 11:
        return Cd(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Wl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Wl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Wl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (e = t.pendingProps),
          Sa(t, t.type, e.value),
          Wl(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          ka(t),
          (u = wl(u)),
          (e = e(u)),
          (t.flags |= 1),
          Wl(l, t, e, a),
          t.child
        );
      case 14:
        return Rd(l, t, t.type, t.pendingProps, a);
      case 15:
        return Hd(l, t, t.type, t.pendingProps, a);
      case 19:
        return Vd(l, t, a);
      case 31:
        return lh(l, t, a);
      case 22:
        return Bd(l, t, a, t.pendingProps);
      case 24:
        return (
          ka(t),
          (e = wl(_l)),
          l === null
            ? ((u = Li()),
              u === null &&
                ((u = hl),
                (n = Qi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              Ki(t),
              Sa(t, _l, u))
            : ((l.lanes & a) !== 0 && (Ji(l, t), ru(t, null, null, a), ou()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Sa(t, _l, e))
                : ((e = n.cache),
                  Sa(t, _l, e),
                  e !== u.cache && Xi(t, [_l], a, !0))),
          Wl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  function na(l) {
    l.flags |= 4;
  }
  function Mc(l, t, a, e, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (So()) l.flags |= 8192;
        else throw ((Ia = on), Vi);
    } else l.flags &= -16777217;
  }
  function Jd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !fr(t)))
      if (So()) l.flags |= 8192;
      else throw ((Ia = on), Vi);
  }
  function _n(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Af() : 536870912), (l.lanes |= t), (Ce |= t)));
  }
  function bu(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function gl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function ah(l, t, a) {
    var e = t.pendingProps;
    switch ((Hi(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (gl(t), null);
      case 1:
        return (gl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          ta(_l),
          X(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (pe(t)
              ? na(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), qi())),
          gl(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (na(t),
              n !== null ? (gl(t), Jd(t, n)) : (gl(t), Mc(t, u, null, e, a)))
            : n
              ? n !== l.memoizedState
                ? (na(t), gl(t), Jd(t, n))
                : (gl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== e && na(t),
                gl(t),
                Mc(t, u, l, e, a)),
          null
        );
      case 27:
        if (
          (Ll(t),
          (a = N.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== e && na(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(v(166));
            return (gl(t), null);
          }
          ((l = O.current),
            pe(t) ? As(t) : ((l = lr(u, e, a)), (t.stateNode = l), na(t)));
        }
        return (gl(t), null);
      case 5:
        if ((Ll(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && na(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(v(166));
            return (gl(t), null);
          }
          if (((n = O.current), pe(t))) As(t);
          else {
            var i = Ln(N.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof e.is == "string"
                        ? i.createElement("select", { is: e.is })
                        : i.createElement("select")),
                      e.multiple
                        ? (n.multiple = !0)
                        : e.size && (n.size = e.size));
                    break;
                  default:
                    n =
                      typeof e.is == "string"
                        ? i.createElement(u, { is: e.is })
                        : i.createElement(u);
                }
            }
            ((n[Kl] = t), (n[nt] = e));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((kl(n, u, e), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && na(t);
          }
        }
        return (
          gl(t),
          Mc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && na(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(v(166));
          if (((l = N.current), pe(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = Jl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((l[Kl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Lo(l.nodeValue, a)
              )),
              l || ba(t, !0));
          } else
            ((l = Ln(l).createTextNode(e)), (l[Kl] = t), (t.stateNode = l));
        }
        return (gl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = pe(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(v(557));
              l[Kl] = t;
            } else
              (wa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (gl(t), (l = !1));
          } else
            ((a = qi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (pt(t), t) : (pt(t), null);
          if ((t.flags & 128) !== 0) throw Error(v(558));
        }
        return (gl(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = pe(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(v(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(v(317));
              u[Kl] = t;
            } else
              (wa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (gl(t), (u = !1));
          } else
            ((u = qi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (pt(t), t) : (pt(t), null);
        }
        return (
          pt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = e !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((e = t.child),
                (u = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (u = e.alternate.memoizedState.cachePool.pool),
                (n = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (n = e.memoizedState.cachePool.pool),
                n !== u && (e.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              _n(t, t.updateQueue),
              gl(t),
              null)
        );
      case 4:
        return (X(), l === null && kc(t.stateNode.containerInfo), gl(t), null);
      case 10:
        return (ta(t.type), gl(t), null);
      case 19:
        if ((x(Al), (e = t.memoizedState), e === null)) return (gl(t), null);
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) bu(e, !1);
          else {
            if (Tl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = vn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      bu(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      _n(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (ps(a, l), (a = a.sibling));
                  return (
                    _(Al, (Al.current & 1) | 2),
                    P && Pt(t, e.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            e.tail !== null &&
              Rl() > Cn &&
              ((t.flags |= 128), (u = !0), bu(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = vn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                _n(t, l),
                bu(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !P)
              )
                return (gl(t), null);
            } else
              2 * Rl() - e.renderingStartTime > Cn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), bu(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = Rl()),
            (l.sibling = null),
            (a = Al.current),
            _(Al, u ? (a & 1) | 2 : a & 1),
            P && Pt(t, e.treeForkCount),
            l)
          : (gl(t), null);
      case 22:
      case 23:
        return (
          pt(t),
          $i(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : gl(t),
          (a = t.updateQueue),
          a !== null && _n(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && x($a),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          ta(_l),
          gl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function eh(l, t) {
    switch ((Hi(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          ta(_l),
          X(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ll(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((pt(t), t.alternate === null)) throw Error(v(340));
          wa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (pt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(v(340));
          wa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (x(Al), null);
      case 4:
        return (X(), null);
      case 10:
        return (ta(t.type), null);
      case 22:
      case 23:
        return (
          pt(t),
          $i(),
          l !== null && x($a),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (ta(_l), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wd(l, t) {
    switch ((Hi(t), t.tag)) {
      case 3:
        (ta(_l), X());
        break;
      case 26:
      case 27:
      case 5:
        Ll(t);
        break;
      case 4:
        X();
        break;
      case 31:
        t.memoizedState !== null && pt(t);
        break;
      case 13:
        pt(t);
        break;
      case 19:
        x(Al);
        break;
      case 10:
        ta(t.type);
        break;
      case 22:
      case 23:
        (pt(t), $i(), l !== null && x($a));
        break;
      case 24:
        ta(_l);
    }
  }
  function Su(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              i = a.inst;
            ((e = n()), (i.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      sl(t, t.return, c);
    }
  }
  function Aa(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = t));
              var f = a,
                m = c;
              try {
                m();
              } catch (p) {
                sl(u, f, p);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (p) {
      sl(t, t.return, p);
    }
  }
  function Wd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Ys(t, a);
      } catch (e) {
        sl(l, l.return, e);
      }
    }
  }
  function kd(l, t, a) {
    ((a.props = te(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      sl(l, t, e);
    }
  }
  function pu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      sl(l, t, u);
    }
  }
  function Jt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          sl(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          sl(l, t, u);
        }
      else a.current = null;
  }
  function $d(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function _c(l, t, a) {
    try {
      var e = l.stateNode;
      (Ah(e, l.type, a, t), (e[nt] = t));
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function Fd(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Ua(l.type)) ||
      l.tag === 4
    );
  }
  function jc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Fd(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Ua(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Oc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = $t)));
    else if (
      e !== 4 &&
      (e === 27 && Ua(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Oc(l, t, a), l = l.sibling; l !== null; )
        (Oc(l, t, a), (l = l.sibling));
  }
  function jn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      e !== 4 &&
      (e === 27 && Ua(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (jn(l, t, a), l = l.sibling; l !== null; )
        (jn(l, t, a), (l = l.sibling));
  }
  function Id(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (kl(t, e, a), (t[Kl] = l), (t[nt] = a));
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  var ia = !1,
    Dl = !1,
    Dc = !1,
    Pd = typeof WeakSet == "function" ? WeakSet : Set,
    Yl = null;
  function uh(l, t) {
    if (((l = l.containerInfo), (Ic = $n), (l = os(l)), Ei(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              m = 0,
              p = 0,
              T = l,
              y = null;
            t: for (;;) {
              for (
                var b;
                T !== a || (u !== 0 && T.nodeType !== 3) || (c = i + u),
                  T !== n || (e !== 0 && T.nodeType !== 3) || (f = i + e),
                  T.nodeType === 3 && (i += T.nodeValue.length),
                  (b = T.firstChild) !== null;
              )
                ((y = T), (T = b));
              for (;;) {
                if (T === l) break t;
                if (
                  (y === a && ++m === u && (c = i),
                  y === n && ++p === e && (f = i),
                  (b = T.nextSibling) !== null)
                )
                  break;
                ((T = y), (y = T.parentNode));
              }
              T = b;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Pc = { focusedElem: l, selectionRange: a }, $n = !1, Yl = t;
      Yl !== null;
    )
      if (
        ((t = Yl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Yl = l));
      else
        for (; Yl !== null; ) {
          switch (((t = Yl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((u = l[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var j = te(a.type, u);
                  ((l = e.getSnapshotBeforeUpdate(j, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (Y) {
                  sl(a, a.return, Y);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  af(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      af(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(v(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Yl = l));
            break;
          }
          Yl = t.return;
        }
  }
  function lo(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (fa(l, a), e & 4 && Su(5, a));
        break;
      case 1:
        if ((fa(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              sl(a, a.return, i);
            }
          else {
            var u = te(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              sl(a, a.return, i);
            }
          }
        (e & 64 && Wd(a), e & 512 && pu(a, a.return));
        break;
      case 3:
        if ((fa(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Ys(l, t);
          } catch (i) {
            sl(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Id(a);
      case 26:
      case 5:
        (fa(l, a), t === null && e & 4 && $d(a), e & 512 && pu(a, a.return));
        break;
      case 12:
        fa(l, a);
        break;
      case 31:
        (fa(l, a), e & 4 && eo(l, a));
        break;
      case 13:
        (fa(l, a),
          e & 4 && uo(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = hh.bind(null, a)), Ch(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || ia), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || Dl), (u = ia));
          var n = Dl;
          ((ia = e),
            (Dl = t) && !n ? sa(l, a, (a.subtreeFlags & 8772) !== 0) : fa(l, a),
            (ia = u),
            (Dl = n));
        }
        break;
      case 30:
        break;
      default:
        fa(l, a);
    }
  }
  function to(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), to(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && ci(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var Sl = null,
    ct = !1;
  function ca(l, t, a) {
    for (a = a.child; a !== null; ) (ao(l, t, a), (a = a.sibling));
  }
  function ao(l, t, a) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(Ve, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Dl || Jt(a, t),
          ca(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Dl || Jt(a, t);
        var e = Sl,
          u = ct;
        (Ua(a.type) && ((Sl = a.stateNode), (ct = !1)),
          ca(l, t, a),
          ju(a.stateNode),
          (Sl = e),
          (ct = u));
        break;
      case 5:
        Dl || Jt(a, t);
      case 6:
        if (
          ((e = Sl),
          (u = ct),
          (Sl = null),
          ca(l, t, a),
          (Sl = e),
          (ct = u),
          Sl !== null)
        )
          if (ct)
            try {
              (Sl.nodeType === 9
                ? Sl.body
                : Sl.nodeName === "HTML"
                  ? Sl.ownerDocument.body
                  : Sl
              ).removeChild(a.stateNode);
            } catch (n) {
              sl(a, t, n);
            }
          else
            try {
              Sl.removeChild(a.stateNode);
            } catch (n) {
              sl(a, t, n);
            }
        break;
      case 18:
        Sl !== null &&
          (ct
            ? ((l = Sl),
              ko(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Qe(l))
            : ko(Sl, a.stateNode));
        break;
      case 4:
        ((e = Sl),
          (u = ct),
          (Sl = a.stateNode.containerInfo),
          (ct = !0),
          ca(l, t, a),
          (Sl = e),
          (ct = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Aa(2, a, t), Dl || Aa(4, a, t), ca(l, t, a));
        break;
      case 1:
        (Dl ||
          (Jt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && kd(a, t, e)),
          ca(l, t, a));
        break;
      case 21:
        ca(l, t, a);
        break;
      case 22:
        ((Dl = (e = Dl) || a.memoizedState !== null), ca(l, t, a), (Dl = e));
        break;
      default:
        ca(l, t, a);
    }
  }
  function eo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Qe(l);
      } catch (a) {
        sl(t, t.return, a);
      }
    }
  }
  function uo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Qe(l);
      } catch (a) {
        sl(t, t.return, a);
      }
  }
  function nh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new Pd()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Pd()),
          t
        );
      default:
        throw Error(v(435, l.tag));
    }
  }
  function On(l, t) {
    var a = nh(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = mh.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function ft(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Ua(c.type)) {
                ((Sl = c.stateNode), (ct = !1));
                break l;
              }
              break;
            case 5:
              ((Sl = c.stateNode), (ct = !1));
              break l;
            case 3:
            case 4:
              ((Sl = c.stateNode.containerInfo), (ct = !0));
              break l;
          }
          c = c.return;
        }
        if (Sl === null) throw Error(v(160));
        (ao(n, i, u),
          (Sl = null),
          (ct = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (no(t, l), (t = t.sibling));
  }
  var Qt = null;
  function no(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ft(t, l),
          st(l),
          e & 4 && (Aa(3, l, l.return), Su(3, l), Aa(5, l, l.return)));
        break;
      case 1:
        (ft(t, l),
          st(l),
          e & 512 && (Dl || a === null || Jt(a, a.return)),
          e & 64 &&
            ia &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = Qt;
        if (
          (ft(t, l),
          st(l),
          e & 512 && (Dl || a === null || Jt(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[we] ||
                          n[Kl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        kl(n, e, a),
                        (n[Kl] = l),
                        ql(n),
                        (e = n));
                      break l;
                    case "link":
                      var i = ir("link", "href", u).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        kl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = ir("meta", "content", u).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        kl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(v(468, e));
                  }
                  ((n[Kl] = l), ql(n), (e = n));
                }
                l.stateNode = e;
              } else cr(u, l.type, l.stateNode);
            else l.stateNode = nr(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? cr(u, l.type, l.stateNode)
                  : nr(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                _c(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ft(t, l),
          st(l),
          e & 512 && (Dl || a === null || Jt(a, a.return)),
          a !== null && e & 4 && _c(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (ft(t, l),
          st(l),
          e & 512 && (Dl || a === null || Jt(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            de(u, "");
          } catch (j) {
            sl(l, l.return, j);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), _c(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (Dc = !0));
        break;
      case 6:
        if ((ft(t, l), st(l), e & 4)) {
          if (l.stateNode === null) throw Error(v(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (j) {
            sl(l, l.return, j);
          }
        }
        break;
      case 3:
        if (
          ((Jn = null),
          (u = Qt),
          (Qt = Vn(t.containerInfo)),
          ft(t, l),
          (Qt = u),
          st(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Qe(t.containerInfo);
          } catch (j) {
            sl(l, l.return, j);
          }
        Dc && ((Dc = !1), io(l));
        break;
      case 4:
        ((e = Qt),
          (Qt = Vn(l.stateNode.containerInfo)),
          ft(t, l),
          st(l),
          (Qt = e));
        break;
      case 12:
        (ft(t, l), st(l));
        break;
      case 31:
        (ft(t, l),
          st(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), On(l, e))));
        break;
      case 13:
        (ft(t, l),
          st(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Un = Rl()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), On(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          m = ia,
          p = Dl;
        if (
          ((ia = m || u),
          (Dl = p || f),
          ft(t, l),
          (Dl = p),
          (ia = m),
          st(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || f || ia || Dl || ae(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = f.stateNode;
                    var T = f.memoizedProps.style,
                      y =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    c.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (j) {
                  sl(f, f.return, j);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (j) {
                  sl(f, f.return, j);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var b = f.stateNode;
                  u ? $o(b, !0) : $o(f.stateNode, !1);
                } catch (j) {
                  sl(f, f.return, j);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), On(l, a))));
        break;
      case 19:
        (ft(t, l),
          st(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), On(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ft(t, l), st(l));
    }
  }
  function st(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Fd(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(v(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = jc(l);
            jn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (de(i, ""), (a.flags &= -33));
            var c = jc(l);
            jn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              m = jc(l);
            Oc(l, m, f);
            break;
          default:
            throw Error(v(161));
        }
      } catch (p) {
        sl(l, l.return, p);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function io(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (io(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function fa(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (lo(l, t.alternate, t), (t = t.sibling));
  }
  function ae(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Aa(4, t, t.return), ae(t));
          break;
        case 1:
          Jt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && kd(t, t.return, a),
            ae(t));
          break;
        case 27:
          ju(t.stateNode);
        case 26:
        case 5:
          (Jt(t, t.return), ae(t));
          break;
        case 22:
          t.memoizedState === null && ae(t);
          break;
        case 30:
          ae(t);
          break;
        default:
          ae(t);
      }
      l = l.sibling;
    }
  }
  function sa(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (sa(u, n, a), Su(4, n));
          break;
        case 1:
          if (
            (sa(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (m) {
              sl(e, e.return, m);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  qs(f[u], c);
            } catch (m) {
              sl(e, e.return, m);
            }
          }
          (a && i & 64 && Wd(n), pu(n, n.return));
          break;
        case 27:
          Id(n);
        case 26:
        case 5:
          (sa(u, n, a), a && e === null && i & 4 && $d(n), pu(n, n.return));
          break;
        case 12:
          sa(u, n, a);
          break;
        case 31:
          (sa(u, n, a), a && i & 4 && eo(u, n));
          break;
        case 13:
          (sa(u, n, a), a && i & 4 && uo(u, n));
          break;
        case 22:
          (n.memoizedState === null && sa(u, n, a), pu(n, n.return));
          break;
        case 30:
          break;
        default:
          sa(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Uc(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && iu(a)));
  }
  function Cc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && iu(l)));
  }
  function Zt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (co(l, t, a, e), (t = t.sibling));
  }
  function co(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Zt(l, t, a, e), u & 2048 && Su(9, t));
        break;
      case 1:
        Zt(l, t, a, e);
        break;
      case 3:
        (Zt(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && iu(l))));
        break;
      case 12:
        if (u & 2048) {
          (Zt(l, t, a, e), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            sl(t, t.return, f);
          }
        } else Zt(l, t, a, e);
        break;
      case 31:
        Zt(l, t, a, e);
        break;
      case 13:
        Zt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Zt(l, t, a, e)
              : zu(l, t)
            : n._visibility & 2
              ? Zt(l, t, a, e)
              : ((n._visibility |= 2),
                Oe(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Uc(i, t));
        break;
      case 24:
        (Zt(l, t, a, e), u & 2048 && Cc(t.alternate, t));
        break;
      default:
        Zt(l, t, a, e);
    }
  }
  function Oe(l, t, a, e, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        c = a,
        f = e,
        m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Oe(n, i, c, f, u), Su(8, i));
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          (i.memoizedState !== null
            ? p._visibility & 2
              ? Oe(n, i, c, f, u)
              : zu(n, i)
            : ((p._visibility |= 2), Oe(n, i, c, f, u)),
            u && m & 2048 && Uc(i.alternate, i));
          break;
        case 24:
          (Oe(n, i, c, f, u), u && m & 2048 && Cc(i.alternate, i));
          break;
        default:
          Oe(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function zu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (zu(a, e), u & 2048 && Uc(e.alternate, e));
            break;
          case 24:
            (zu(a, e), u & 2048 && Cc(e.alternate, e));
            break;
          default:
            zu(a, e);
        }
        t = t.sibling;
      }
  }
  var Tu = 8192;
  function De(l, t, a) {
    if (l.subtreeFlags & Tu)
      for (l = l.child; l !== null; ) (fo(l, t, a), (l = l.sibling));
  }
  function fo(l, t, a) {
    switch (l.tag) {
      case 26:
        (De(l, t, a),
          l.flags & Tu &&
            l.memoizedState !== null &&
            Kh(a, Qt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        De(l, t, a);
        break;
      case 3:
      case 4:
        var e = Qt;
        ((Qt = Vn(l.stateNode.containerInfo)), De(l, t, a), (Qt = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Tu), (Tu = 16777216), De(l, t, a), (Tu = e))
            : De(l, t, a));
        break;
      default:
        De(l, t, a);
    }
  }
  function so(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function xu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Yl = e), ro(e, l));
        }
      so(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (oo(l), (l = l.sibling));
  }
  function oo(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (xu(l), l.flags & 2048 && Aa(9, l, l.return));
        break;
      case 3:
        xu(l);
        break;
      case 12:
        xu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Dn(l))
          : xu(l);
        break;
      default:
        xu(l);
    }
  }
  function Dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Yl = e), ro(e, l));
        }
      so(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Aa(8, t, t.return), Dn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Dn(t)));
          break;
        default:
          Dn(t);
      }
      l = l.sibling;
    }
  }
  function ro(l, t) {
    for (; Yl !== null; ) {
      var a = Yl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          iu(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (Yl = e));
      else
        l: for (a = l; Yl !== null; ) {
          e = Yl;
          var u = e.sibling,
            n = e.return;
          if ((to(e), e === a)) {
            Yl = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (Yl = u));
            break l;
          }
          Yl = n;
        }
    }
  }
  var ih = {
      getCacheForType: function (l) {
        var t = wl(_l),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return wl(_l).controller.signal;
      },
    },
    ch = typeof WeakMap == "function" ? WeakMap : Map,
    ul = 0,
    hl = null,
    k = null,
    F = 0,
    fl = 0,
    zt = null,
    Na = !1,
    Ue = !1,
    Rc = !1,
    da = 0,
    Tl = 0,
    Ma = 0,
    ee = 0,
    Hc = 0,
    Tt = 0,
    Ce = 0,
    Eu = null,
    dt = null,
    Bc = !1,
    Un = 0,
    ho = 0,
    Cn = 1 / 0,
    Rn = null,
    _a = null,
    Hl = 0,
    ja = null,
    Re = null,
    oa = 0,
    qc = 0,
    Yc = null,
    mo = null,
    Au = 0,
    Gc = null;
  function xt() {
    return (ul & 2) !== 0 && F !== 0 ? F & -F : S.T !== null ? Kc() : jf();
  }
  function vo() {
    if (Tt === 0)
      if ((F & 536870912) === 0 || P) {
        var l = Qu;
        ((Qu <<= 1), (Qu & 3932160) === 0 && (Qu = 262144), (Tt = l));
      } else Tt = 536870912;
    return ((l = St.current), l !== null && (l.flags |= 32), Tt);
  }
  function ot(l, t, a) {
    (((l === hl && (fl === 2 || fl === 9)) || l.cancelPendingCommit !== null) &&
      (He(l, 0), Oa(l, F, Tt, !1)),
      Je(l, a),
      ((ul & 2) === 0 || l !== hl) &&
        (l === hl &&
          ((ul & 2) === 0 && (ee |= a), Tl === 4 && Oa(l, F, Tt, !1)),
        wt(l)));
  }
  function yo(l, t, a) {
    if ((ul & 6) !== 0) throw Error(v(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Ke(l, t),
      u = e ? dh(l, t) : Qc(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        Ue && !e && Oa(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !fh(a))) {
          ((u = Qc(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = Eu;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (He(c, i).flags |= 256), (i = Qc(c, i, !1)), i !== 2)) {
                if (Rc && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (ee |= n), (u = 4));
                  break l;
                }
                ((n = dt),
                  (dt = u),
                  n !== null &&
                    (dt === null ? (dt = n) : dt.push.apply(dt, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (He(l, 0), Oa(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Oa(e, t, Tt, !Na);
              break l;
            case 2:
              dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((t & 62914560) === t && ((u = Un + 300 - Rl()), 10 < u)) {
            if ((Oa(e, t, Tt, !Na), Lu(e, 0, !0) !== 0)) break l;
            ((oa = t),
              (e.timeoutHandle = wo(
                go.bind(
                  null,
                  e,
                  a,
                  dt,
                  Rn,
                  Bc,
                  t,
                  Tt,
                  ee,
                  Ce,
                  Na,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          go(e, a, dt, Rn, Bc, t, Tt, ee, Ce, Na, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    wt(l);
  }
  function go(l, t, a, e, u, n, i, c, f, m, p, T, y, b) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      T & 8192 || (T & 16785408) === 16785408)
    ) {
      ((T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: $t,
      }),
        fo(t, n, T));
      var j =
        (n & 62914560) === n ? Un - Rl() : (n & 4194048) === n ? ho - Rl() : 0;
      if (((j = Jh(T, j)), j !== null)) {
        ((oa = n),
          (l.cancelPendingCommit = j(
            Ao.bind(null, l, t, n, a, e, u, i, c, f, p, T, null, y, b),
          )),
          Oa(l, n, i, !m));
        return;
      }
    }
    Ao(l, t, n, a, e, u, i, c, f);
  }
  function fh(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!gt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Oa(l, t, a, e) {
    ((t &= ~Hc),
      (t &= ~ee),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - yt(u),
        i = 1 << n;
      ((e[n] = -1), (u &= ~i));
    }
    a !== 0 && Nf(l, a, t);
  }
  function Hn() {
    return (ul & 6) === 0 ? (Nu(0), !1) : !0;
  }
  function Xc() {
    if (k !== null) {
      if (fl === 0) var l = k.return;
      else ((l = k), (la = Wa = null), ac(l), (Ae = null), (fu = 0), (l = k));
      for (; l !== null; ) (wd(l.alternate, l), (l = l.return));
      k = null;
    }
  }
  function He(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), _h(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (oa = 0),
      Xc(),
      (hl = l),
      (k = a = It(l.current, null)),
      (F = t),
      (fl = 0),
      (zt = null),
      (Na = !1),
      (Ue = Ke(l, t)),
      (Rc = !1),
      (Ce = Tt = Hc = ee = Ma = Tl = 0),
      (dt = Eu = null),
      (Bc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - yt(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((da = t), tn(), a);
  }
  function bo(l, t) {
    ((V = null),
      (S.H = yu),
      t === Ee || t === dn
        ? ((t = Cs()), (fl = 3))
        : t === Vi
          ? ((t = Cs()), (fl = 4))
          : (fl =
              t === bc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (zt = t),
      k === null && ((Tl = 1), En(l, Dt(t, l.current))));
  }
  function So() {
    var l = St.current;
    return l === null
      ? !0
      : (F & 4194048) === F
        ? Ht === null
        : (F & 62914560) === F || (F & 536870912) !== 0
          ? l === Ht
          : !1;
  }
  function po() {
    var l = S.H;
    return ((S.H = yu), l === null ? yu : l);
  }
  function zo() {
    var l = S.A;
    return ((S.A = ih), l);
  }
  function Bn() {
    ((Tl = 4),
      Na || ((F & 4194048) !== F && St.current !== null) || (Ue = !0),
      ((Ma & 134217727) === 0 && (ee & 134217727) === 0) ||
        hl === null ||
        Oa(hl, F, Tt, !1));
  }
  function Qc(l, t, a) {
    var e = ul;
    ul |= 2;
    var u = po(),
      n = zo();
    ((hl !== l || F !== t) && ((Rn = null), He(l, t)), (t = !1));
    var i = Tl;
    l: do
      try {
        if (fl !== 0 && k !== null) {
          var c = k,
            f = zt;
          switch (fl) {
            case 8:
              (Xc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var m = fl;
              if (((fl = 0), (zt = null), Be(l, c, f, m), a && Ue)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((m = fl), (fl = 0), (zt = null), Be(l, c, f, m));
          }
        }
        (sh(), (i = Tl));
        break;
      } catch (p) {
        bo(l, p);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (la = Wa = null),
      (ul = e),
      (S.H = u),
      (S.A = n),
      k === null && ((hl = null), (F = 0), tn()),
      i
    );
  }
  function sh() {
    for (; k !== null; ) To(k);
  }
  function dh(l, t) {
    var a = ul;
    ul |= 2;
    var e = po(),
      u = zo();
    hl !== l || F !== t
      ? ((Rn = null), (Cn = Rl() + 500), He(l, t))
      : (Ue = Ke(l, t));
    l: do
      try {
        if (fl !== 0 && k !== null) {
          t = k;
          var n = zt;
          t: switch (fl) {
            case 1:
              ((fl = 0), (zt = null), Be(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Ds(n)) {
                ((fl = 0), (zt = null), xo(t));
                break;
              }
              ((t = function () {
                ((fl !== 2 && fl !== 9) || hl !== l || (fl = 7), wt(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              Ds(n)
                ? ((fl = 0), (zt = null), xo(t))
                : ((fl = 0), (zt = null), Be(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (k.tag) {
                case 26:
                  i = k.memoizedState;
                case 5:
                case 27:
                  var c = k;
                  if (i ? fr(i) : c.stateNode.complete) {
                    ((fl = 0), (zt = null));
                    var f = c.sibling;
                    if (f !== null) k = f;
                    else {
                      var m = c.return;
                      m !== null ? ((k = m), qn(m)) : (k = null);
                    }
                    break t;
                  }
              }
              ((fl = 0), (zt = null), Be(l, t, n, 5));
              break;
            case 6:
              ((fl = 0), (zt = null), Be(l, t, n, 6));
              break;
            case 8:
              (Xc(), (Tl = 6));
              break l;
            default:
              throw Error(v(462));
          }
        }
        oh();
        break;
      } catch (p) {
        bo(l, p);
      }
    while (!0);
    return (
      (la = Wa = null),
      (S.H = e),
      (S.A = u),
      (ul = a),
      k !== null ? 0 : ((hl = null), (F = 0), tn(), Tl)
    );
  }
  function oh() {
    for (; k !== null && !at(); ) To(k);
  }
  function To(l) {
    var t = Kd(l.alternate, l, da);
    ((l.memoizedProps = l.pendingProps), t === null ? qn(l) : (k = t));
  }
  function xo(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Gd(a, t, t.pendingProps, t.type, void 0, F);
        break;
      case 11:
        t = Gd(a, t, t.pendingProps, t.type.render, t.ref, F);
        break;
      case 5:
        ac(t);
      default:
        (wd(a, t), (t = k = ps(t, da)), (t = Kd(a, t, da)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? qn(l) : (k = t));
  }
  function Be(l, t, a, e) {
    ((la = Wa = null), ac(t), (Ae = null), (fu = 0));
    var u = t.return;
    try {
      if (P0(l, u, t, a, F)) {
        ((Tl = 1), En(l, Dt(a, l.current)), (k = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((k = u), n);
      ((Tl = 1), En(l, Dt(a, l.current)), (k = null));
      return;
    }
    t.flags & 32768
      ? (P || e === 1
          ? (l = !0)
          : Ue || (F & 536870912) !== 0
            ? (l = !1)
            : ((Na = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = St.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        Eo(t, l))
      : qn(t);
  }
  function qn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Eo(t, Na);
        return;
      }
      l = t.return;
      var a = ah(t.alternate, t, da);
      if (a !== null) {
        k = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        k = t;
        return;
      }
      k = t = l;
    } while (t !== null);
    Tl === 0 && (Tl = 5);
  }
  function Eo(l, t) {
    do {
      var a = eh(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (k = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        k = l;
        return;
      }
      k = l = a;
    } while (l !== null);
    ((Tl = 6), (k = null));
  }
  function Ao(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do Yn();
    while (Hl !== 0);
    if ((ul & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= ji),
        Vr(l, a, n, i, c, f),
        l === hl && ((k = hl = null), (F = 0)),
        (Re = t),
        (ja = l),
        (oa = a),
        (qc = n),
        (Yc = u),
        (mo = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            vh(Gu, function () {
              return (Oo(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = S.T), (S.T = null), (u = M.p), (M.p = 2), (i = ul), (ul |= 4));
        try {
          uh(l, t, a);
        } finally {
          ((ul = i), (M.p = u), (S.T = e));
        }
      }
      ((Hl = 1), No(), Mo(), _o());
    }
  }
  function No() {
    if (Hl === 1) {
      Hl = 0;
      var l = ja,
        t = Re,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = S.T), (S.T = null));
        var e = M.p;
        M.p = 2;
        var u = ul;
        ul |= 4;
        try {
          no(t, l);
          var n = Pc,
            i = os(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            ds(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && Ei(c)) {
              var m = f.start,
                p = f.end;
              if ((p === void 0 && (p = m), "selectionStart" in c))
                ((c.selectionStart = m),
                  (c.selectionEnd = Math.min(p, c.value.length)));
              else {
                var T = c.ownerDocument || document,
                  y = (T && T.defaultView) || window;
                if (y.getSelection) {
                  var b = y.getSelection(),
                    j = c.textContent.length,
                    Y = Math.min(f.start, j),
                    rl = f.end === void 0 ? Y : Math.min(f.end, j);
                  !b.extend && Y > rl && ((i = rl), (rl = Y), (Y = i));
                  var r = ss(c, Y),
                    d = ss(c, rl);
                  if (
                    r &&
                    d &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== r.node ||
                      b.anchorOffset !== r.offset ||
                      b.focusNode !== d.node ||
                      b.focusOffset !== d.offset)
                  ) {
                    var h = T.createRange();
                    (h.setStart(r.node, r.offset),
                      b.removeAllRanges(),
                      Y > rl
                        ? (b.addRange(h), b.extend(d.node, d.offset))
                        : (h.setEnd(d.node, d.offset), b.addRange(h)));
                  }
                }
              }
            }
            for (T = [], b = c; (b = b.parentNode); )
              b.nodeType === 1 &&
                T.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < T.length;
              c++
            ) {
              var z = T[c];
              ((z.element.scrollLeft = z.left), (z.element.scrollTop = z.top));
            }
          }
          (($n = !!Ic), (Pc = Ic = null));
        } finally {
          ((ul = u), (M.p = e), (S.T = a));
        }
      }
      ((l.current = t), (Hl = 2));
    }
  }
  function Mo() {
    if (Hl === 2) {
      Hl = 0;
      var l = ja,
        t = Re,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = S.T), (S.T = null));
        var e = M.p;
        M.p = 2;
        var u = ul;
        ul |= 4;
        try {
          lo(l, t.alternate, t);
        } finally {
          ((ul = u), (M.p = e), (S.T = a));
        }
      }
      Hl = 3;
    }
  }
  function _o() {
    if (Hl === 4 || Hl === 3) {
      ((Hl = 0), Ya());
      var l = ja,
        t = Re,
        a = oa,
        e = mo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Hl = 5)
        : ((Hl = 0), (Re = ja = null), jo(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (_a = null),
        ni(a),
        (t = t.stateNode),
        vt && typeof vt.onCommitFiberRoot == "function")
      )
        try {
          vt.onCommitFiberRoot(Ve, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = S.T), (u = M.p), (M.p = 2), (S.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((S.T = t), (M.p = u));
        }
      }
      ((oa & 3) !== 0 && Yn(),
        wt(l),
        (u = l.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? l === Gc
            ? Au++
            : ((Au = 0), (Gc = l))
          : (Au = 0),
        Nu(0));
    }
  }
  function jo(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), iu(t)));
  }
  function Yn() {
    return (No(), Mo(), _o(), Oo());
  }
  function Oo() {
    if (Hl !== 5) return !1;
    var l = ja,
      t = qc;
    qc = 0;
    var a = ni(oa),
      e = S.T,
      u = M.p;
    try {
      ((M.p = 32 > a ? 32 : a), (S.T = null), (a = Yc), (Yc = null));
      var n = ja,
        i = oa;
      if (((Hl = 0), (Re = ja = null), (oa = 0), (ul & 6) !== 0))
        throw Error(v(331));
      var c = ul;
      if (
        ((ul |= 4),
        oo(n.current),
        co(n, n.current, i, a),
        (ul = c),
        Nu(0, !1),
        vt && typeof vt.onPostCommitFiberRoot == "function")
      )
        try {
          vt.onPostCommitFiberRoot(Ve, n);
        } catch {}
      return !0;
    } finally {
      ((M.p = u), (S.T = e), jo(l, t));
    }
  }
  function Do(l, t, a) {
    ((t = Dt(a, t)),
      (t = gc(l.stateNode, t, 2)),
      (l = Ta(l, t, 2)),
      l !== null && (Je(l, 2), wt(l)));
  }
  function sl(l, t, a) {
    if (l.tag === 3) Do(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Do(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (_a === null || !_a.has(e)))
          ) {
            ((l = Dt(a, l)),
              (a = Dd(2)),
              (e = Ta(t, a, 2)),
              e !== null && (Ud(a, e, t, l), Je(e, 2), wt(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new ch();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) ||
      ((Rc = !0), u.add(a), (l = rh.bind(null, l, t, a)), t.then(l, l));
  }
  function rh(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      hl === l &&
        (F & a) === a &&
        (Tl === 4 || (Tl === 3 && (F & 62914560) === F && 300 > Rl() - Un)
          ? (ul & 2) === 0 && He(l, 0)
          : (Hc |= a),
        Ce === F && (Ce = 0)),
      wt(l));
  }
  function Uo(l, t) {
    (t === 0 && (t = Af()), (l = Ka(l, t)), l !== null && (Je(l, t), wt(l)));
  }
  function hh(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Uo(l, a));
  }
  function mh(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    (e !== null && e.delete(t), Uo(l, a));
  }
  function vh(l, t) {
    return cl(l, t);
  }
  var Gn = null,
    qe = null,
    Lc = !1,
    Xn = !1,
    Vc = !1,
    Da = 0;
  function wt(l) {
    (l !== qe &&
      l.next === null &&
      (qe === null ? (Gn = qe = l) : (qe = qe.next = l)),
      (Xn = !0),
      Lc || ((Lc = !0), gh()));
  }
  function Nu(l, t) {
    if (!Vc && Xn) {
      Vc = !0;
      do
        for (var a = !1, e = Gn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes,
                c = e.pingedLanes;
              ((n = (1 << (31 - yt(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), Bo(e, n));
          } else
            ((n = F),
              (n = Lu(
                e,
                e === hl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Ke(e, n) || ((a = !0), Bo(e, n)));
          e = e.next;
        }
      while (a);
      Vc = !1;
    }
  }
  function yh() {
    Co();
  }
  function Co() {
    Xn = Lc = !1;
    var l = 0;
    Da !== 0 && Mh() && (l = Da);
    for (var t = Rl(), a = null, e = Gn; e !== null; ) {
      var u = e.next,
        n = Ro(e, t);
      (n === 0
        ? ((e.next = null),
          a === null ? (Gn = u) : (a.next = u),
          u === null && (qe = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (Xn = !0)),
        (e = u));
    }
    ((Hl !== 0 && Hl !== 5) || Nu(l), Da !== 0 && (Da = 0));
  }
  function Ro(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - yt(n),
        c = 1 << i,
        f = u[i];
      (f === -1
        ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Lr(c, t))
        : f <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = hl),
      (a = F),
      (a = Lu(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (fl === 2 || fl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Vl(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ke(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && Vl(e), ni(a))) {
        case 2:
        case 8:
          a = Le;
          break;
        case 32:
          a = Gu;
          break;
        case 268435456:
          a = Ef;
          break;
        default:
          a = Gu;
      }
      return (
        (e = Ho.bind(null, l)),
        (a = cl(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && Vl(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Ho(l, t) {
    if (Hl !== 0 && Hl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (Yn() && l.callbackNode !== a) return null;
    var e = F;
    return (
      (e = Lu(
        l,
        l === hl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (yo(l, e, t),
          Ro(l, Rl()),
          l.callbackNode != null && l.callbackNode === a
            ? Ho.bind(null, l)
            : null)
    );
  }
  function Bo(l, t) {
    if (Yn()) return null;
    yo(l, t, !0);
  }
  function gh() {
    jh(function () {
      (ul & 6) !== 0 ? cl(Ga, yh) : Co();
    });
  }
  function Kc() {
    if (Da === 0) {
      var l = Te;
      (l === 0 && ((l = Xu), (Xu <<= 1), (Xu & 261888) === 0 && (Xu = 256)),
        (Da = l));
    }
    return Da;
  }
  function qo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : wu("" + l);
  }
  function Yo(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function bh(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = qo((u[nt] || null).action),
        i = e.submitter;
      i &&
        ((t = (t = i[nt] || null)
          ? qo(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Fu("action", "action", null, e, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (Da !== 0) {
                  var f = i ? Yo(u, i) : new FormData(u);
                  oc(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? Yo(u, i) : new FormData(u)),
                  oc(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Jc = 0; Jc < _i.length; Jc++) {
    var wc = _i[Jc],
      Sh = wc.toLowerCase(),
      ph = wc[0].toUpperCase() + wc.slice(1);
    Xt(Sh, "on" + ph);
  }
  (Xt(ms, "onAnimationEnd"),
    Xt(vs, "onAnimationIteration"),
    Xt(ys, "onAnimationStart"),
    Xt("dblclick", "onDoubleClick"),
    Xt("focusin", "onFocus"),
    Xt("focusout", "onBlur"),
    Xt(B0, "onTransitionRun"),
    Xt(q0, "onTransitionStart"),
    Xt(Y0, "onTransitionCancel"),
    Xt(gs, "onTransitionEnd"),
    fe("onMouseEnter", ["mouseout", "mouseover"]),
    fe("onMouseLeave", ["mouseout", "mouseover"]),
    fe("onPointerEnter", ["pointerout", "pointerover"]),
    fe("onPointerLeave", ["pointerout", "pointerover"]),
    Qa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Qa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Qa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Qa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Qa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Mu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    zh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Mu),
    );
  function Go(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              m = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break l;
            ((n = c), (u.currentTarget = m));
            try {
              n(u);
            } catch (p) {
              ln(p);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (m = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = m));
            try {
              n(u);
            } catch (p) {
              ln(p);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function $(l, t) {
    var a = t[ii];
    a === void 0 && (a = t[ii] = new Set());
    var e = l + "__bubble";
    a.has(e) || (Xo(t, l, 2, !1), a.add(e));
  }
  function Wc(l, t, a) {
    var e = 0;
    (t && (e |= 4), Xo(a, l, e, t));
  }
  var Qn = "_reactListening" + Math.random().toString(36).slice(2);
  function kc(l) {
    if (!l[Qn]) {
      ((l[Qn] = !0),
        Uf.forEach(function (a) {
          a !== "selectionchange" && (zh.has(a) || Wc(a, !1, l), Wc(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Qn] || ((t[Qn] = !0), Wc("selectionchange", !1, t));
    }
  }
  function Xo(l, t, a, e) {
    switch (vr(t)) {
      case 2:
        var u = kh;
        break;
      case 8:
        u = $h;
        break;
      default:
        u = of;
    }
    ((a = u.bind(null, t, a, l)),
      (u = void 0),
      !vi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1));
  }
  function $c(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = ne(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    Vf(function () {
      var m = n,
        p = hi(a),
        T = [];
      l: {
        var y = bs.get(l);
        if (y !== void 0) {
          var b = Fu,
            j = l;
          switch (l) {
            case "keypress":
              if (ku(a) === 0) break l;
            case "keydown":
            case "keyup":
              b = m0;
              break;
            case "focusin":
              ((j = "focus"), (b = Si));
              break;
            case "focusout":
              ((j = "blur"), (b = Si));
              break;
            case "beforeblur":
            case "afterblur":
              b = Si;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = a0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = g0;
              break;
            case ms:
            case vs:
            case ys:
              b = n0;
              break;
            case gs:
              b = S0;
              break;
            case "scroll":
            case "scrollend":
              b = l0;
              break;
            case "wheel":
              b = z0;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = c0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = kf;
              break;
            case "toggle":
            case "beforetoggle":
              b = x0;
          }
          var Y = (t & 4) !== 0,
            rl = !Y && (l === "scroll" || l === "scrollend"),
            r = Y ? (y !== null ? y + "Capture" : null) : y;
          Y = [];
          for (var d = m, h; d !== null; ) {
            var z = d;
            if (
              ((h = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                h === null ||
                r === null ||
                ((z = ke(d, r)), z != null && Y.push(_u(d, z, h))),
              rl)
            )
              break;
            d = d.return;
          }
          0 < Y.length &&
            ((y = new b(y, j, null, a, p)), T.push({ event: y, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (b = l === "mouseout" || l === "pointerout"),
            y &&
              a !== ri &&
              (j = a.relatedTarget || a.fromElement) &&
              (ne(j) || j[ue]))
          )
            break l;
          if (
            (b || y) &&
            ((y =
              p.window === p
                ? p
                : (y = p.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            b
              ? ((j = a.relatedTarget || a.toElement),
                (b = m),
                (j = j ? ne(j) : null),
                j !== null &&
                  ((rl = ll(j)),
                  (Y = j.tag),
                  j !== rl || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (j = null))
              : ((b = null), (j = m)),
            b !== j)
          ) {
            if (
              ((Y = wf),
              (z = "onMouseLeave"),
              (r = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Y = kf),
                (z = "onPointerLeave"),
                (r = "onPointerEnter"),
                (d = "pointer")),
              (rl = b == null ? y : We(b)),
              (h = j == null ? y : We(j)),
              (y = new Y(z, d + "leave", b, a, p)),
              (y.target = rl),
              (y.relatedTarget = h),
              (z = null),
              ne(p) === m &&
                ((Y = new Y(r, d + "enter", j, a, p)),
                (Y.target = h),
                (Y.relatedTarget = rl),
                (z = Y)),
              (rl = z),
              b && j)
            )
              t: {
                for (Y = Th, r = b, d = j, h = 0, z = r; z; z = Y(z)) h++;
                z = 0;
                for (var R = d; R; R = Y(R)) z++;
                for (; 0 < h - z; ) ((r = Y(r)), h--);
                for (; 0 < z - h; ) ((d = Y(d)), z--);
                for (; h--; ) {
                  if (r === d || (d !== null && r === d.alternate)) {
                    Y = r;
                    break t;
                  }
                  ((r = Y(r)), (d = Y(d)));
                }
                Y = null;
              }
            else Y = null;
            (b !== null && Qo(T, y, b, Y, !1),
              j !== null && rl !== null && Qo(T, rl, j, Y, !0));
          }
        }
        l: {
          if (
            ((y = m ? We(m) : window),
            (b = y.nodeName && y.nodeName.toLowerCase()),
            b === "select" || (b === "input" && y.type === "file"))
          )
            var al = es;
          else if (ts(y))
            if (us) al = C0;
            else {
              al = D0;
              var U = O0;
            }
          else
            ((b = y.nodeName),
              !b ||
              b.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? m && oi(m.elementType) && (al = es)
                : (al = U0));
          if (al && (al = al(l, m))) {
            as(T, al, a, p);
            break l;
          }
          (U && U(l, y, m),
            l === "focusout" &&
              m &&
              y.type === "number" &&
              m.memoizedProps.value != null &&
              di(y, "number", y.value));
        }
        switch (((U = m ? We(m) : window), l)) {
          case "focusin":
            (ts(U) || U.contentEditable === "true") &&
              ((me = U), (Ai = m), (eu = null));
            break;
          case "focusout":
            eu = Ai = me = null;
            break;
          case "mousedown":
            Ni = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ni = !1), rs(T, a, p));
            break;
          case "selectionchange":
            if (H0) break;
          case "keydown":
          case "keyup":
            rs(T, a, p);
        }
        var K;
        if (zi)
          l: {
            switch (l) {
              case "compositionstart":
                var I = "onCompositionStart";
                break l;
              case "compositionend":
                I = "onCompositionEnd";
                break l;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break l;
            }
            I = void 0;
          }
        else
          he
            ? Pf(l, a) && (I = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (I = "onCompositionStart");
        (I &&
          ($f &&
            a.locale !== "ko" &&
            (he || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && he && (K = Kf())
              : ((va = p),
                (yi = "value" in va ? va.value : va.textContent),
                (he = !0))),
          (U = Zn(m, I)),
          0 < U.length &&
            ((I = new Wf(I, l, null, a, p)),
            T.push({ event: I, listeners: U }),
            K ? (I.data = K) : ((K = ls(a)), K !== null && (I.data = K)))),
          (K = A0 ? N0(l, a) : M0(l, a)) &&
            ((I = Zn(m, "onBeforeInput")),
            0 < I.length &&
              ((U = new Wf("onBeforeInput", "beforeinput", null, a, p)),
              T.push({ event: U, listeners: I }),
              (U.data = K))),
          bh(T, l, m, a, p));
      }
      Go(T, t);
    });
  }
  function _u(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Zn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = ke(l, a)),
          u != null && e.unshift(_u(l, u, n)),
          (u = ke(l, t)),
          u != null && e.push(_u(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function Th(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Qo(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a,
        f = c.alternate,
        m = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        m === null ||
        ((f = m),
        u
          ? ((m = ke(a, n)), m != null && i.unshift(_u(a, m, f)))
          : u || ((m = ke(a, n)), m != null && i.push(_u(a, m, f)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var xh = /\r\n?/g,
    Eh = /\u0000|\uFFFD/g;
  function Zo(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        xh,
        `
`,
      )
      .replace(Eh, "");
  }
  function Lo(l, t) {
    return ((t = Zo(t)), Zo(l) === t);
  }
  function ol(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || de(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            de(l, "" + e);
        break;
      case "className":
        Ku(l, "class", e);
        break;
      case "tabIndex":
        Ku(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ku(l, a, e);
        break;
      case "style":
        Zf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Ku(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((e = wu("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && ol(l, t, "name", u.name, u, null),
                ol(l, t, "formEncType", u.formEncType, u, null),
                ol(l, t, "formMethod", u.formMethod, u, null),
                ol(l, t, "formTarget", u.formTarget, u, null))
              : (ol(l, t, "encType", u.encType, u, null),
                ol(l, t, "method", u.method, u, null),
                ol(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = wu("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = $t);
        break;
      case "onScroll":
        e != null && $("scroll", l);
        break;
      case "onScrollEnd":
        e != null && $("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(v(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = wu("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        ($("beforetoggle", l), $("toggle", l), Vu(l, "popover", e));
        break;
      case "xlinkActuate":
        kt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        kt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        kt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        kt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        kt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        kt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        kt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        kt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        kt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Vu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Ir.get(a) || a), Vu(l, a, e));
    }
  }
  function Fc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Zf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(v(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? de(l, e)
          : (typeof e == "number" || typeof e == "bigint") && de(l, "" + e);
        break;
      case "onScroll":
        e != null && $("scroll", l);
        break;
      case "onScrollEnd":
        e != null && $("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = $t);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Cf.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[nt] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u));
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
                ? l.setAttribute(a, "")
                : Vu(l, a, e);
          }
    }
  }
  function kl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ($("error", l), $("load", l));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, t));
                default:
                  ol(l, t, n, i, a, null);
              }
          }
        (u && ol(l, t, "srcSet", a.srcSet, a, null),
          e && ol(l, t, "src", a.src, a, null));
        return;
      case "input":
        $("invalid", l);
        var c = (n = i = u = null),
          f = null,
          m = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var p = a[e];
            if (p != null)
              switch (e) {
                case "name":
                  u = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  f = p;
                  break;
                case "defaultChecked":
                  m = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  c = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null) throw Error(v(137, t));
                  break;
                default:
                  ol(l, t, e, p, a, null);
              }
          }
        Yf(l, n, c, f, m, i, u, !1);
        return;
      case "select":
        ($("invalid", l), (e = i = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                ol(l, t, u, c, a, null);
            }
        ((t = n),
          (a = i),
          (l.multiple = !!e),
          t != null ? se(l, !!e, t, !1) : a != null && se(l, !!e, a, !0));
        return;
      case "textarea":
        ($("invalid", l), (n = u = e = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(v(91));
                break;
              default:
                ol(l, t, i, c, a, null);
            }
        Xf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && ((e = a[f]), e != null))
            switch (f) {
              case "selected":
                l.selected =
                  e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                ol(l, t, f, e, a, null);
            }
        return;
      case "dialog":
        ($("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l));
        break;
      case "iframe":
      case "object":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Mu.length; e++) $(Mu[e], l);
        break;
      case "image":
        ($("error", l), $("load", l));
        break;
      case "details":
        $("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ($("error", l), $("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in a)
          if (a.hasOwnProperty(m) && ((e = a[m]), e != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                ol(l, t, m, e, a, null);
            }
        return;
      default:
        if (oi(t)) {
          for (p in a)
            a.hasOwnProperty(p) &&
              ((e = a[p]), e !== void 0 && Fc(l, t, p, e, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((e = a[c]), e != null && ol(l, t, c, e, a, null));
  }
  function Ah(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          m = null,
          p = null;
        for (b in a) {
          var T = a[b];
          if (a.hasOwnProperty(b) && T != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = T;
              default:
                e.hasOwnProperty(b) || ol(l, t, b, null, e, T);
            }
        }
        for (var y in e) {
          var b = e[y];
          if (((T = a[y]), e.hasOwnProperty(y) && (b != null || T != null)))
            switch (y) {
              case "type":
                n = b;
                break;
              case "name":
                u = b;
                break;
              case "checked":
                m = b;
                break;
              case "defaultChecked":
                p = b;
                break;
              case "value":
                i = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(v(137, t));
                break;
              default:
                b !== T && ol(l, t, y, b, e, T);
            }
        }
        si(l, i, c, f, m, p, n, u);
        return;
      case "select":
        b = i = c = y = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                b = f;
              default:
                e.hasOwnProperty(n) || ol(l, t, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = a[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && ol(l, t, u, n, e, f);
            }
        ((t = c),
          (a = i),
          (e = b),
          y != null
            ? se(l, !!a, y, !1)
            : !!e != !!a &&
              (t != null ? se(l, !!a, t, !0) : se(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        b = y = null;
        for (c in a)
          if (
            ((u = a[c]),
            a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ol(l, t, c, null, e, u);
            }
        for (i in e)
          if (
            ((u = e[i]),
            (n = a[i]),
            e.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                b = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(v(91));
                break;
              default:
                u !== n && ol(l, t, i, u, e, n);
            }
        Gf(l, y, b);
        return;
      case "option":
        for (var j in a)
          if (
            ((y = a[j]),
            a.hasOwnProperty(j) && y != null && !e.hasOwnProperty(j))
          )
            switch (j) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ol(l, t, j, null, e, y);
            }
        for (f in e)
          if (
            ((y = e[f]),
            (b = a[f]),
            e.hasOwnProperty(f) && y !== b && (y != null || b != null))
          )
            switch (f) {
              case "selected":
                l.selected =
                  y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                ol(l, t, f, y, e, b);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in a)
          ((y = a[Y]),
            a.hasOwnProperty(Y) &&
              y != null &&
              !e.hasOwnProperty(Y) &&
              ol(l, t, Y, null, e, y));
        for (m in e)
          if (
            ((y = e[m]),
            (b = a[m]),
            e.hasOwnProperty(m) && y !== b && (y != null || b != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(v(137, t));
                break;
              default:
                ol(l, t, m, y, e, b);
            }
        return;
      default:
        if (oi(t)) {
          for (var rl in a)
            ((y = a[rl]),
              a.hasOwnProperty(rl) &&
                y !== void 0 &&
                !e.hasOwnProperty(rl) &&
                Fc(l, t, rl, void 0, e, y));
          for (p in e)
            ((y = e[p]),
              (b = a[p]),
              !e.hasOwnProperty(p) ||
                y === b ||
                (y === void 0 && b === void 0) ||
                Fc(l, t, p, y, e, b));
          return;
        }
    }
    for (var r in a)
      ((y = a[r]),
        a.hasOwnProperty(r) &&
          y != null &&
          !e.hasOwnProperty(r) &&
          ol(l, t, r, null, e, y));
    for (T in e)
      ((y = e[T]),
        (b = a[T]),
        !e.hasOwnProperty(T) ||
          y === b ||
          (y == null && b == null) ||
          ol(l, t, T, y, e, b));
  }
  function Vo(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Nh() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var u = a[e],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Vo(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e],
              m = f.startTime;
            if (m > c) break;
            var p = f.transferSize,
              T = f.initiatorType;
            p &&
              Vo(T) &&
              ((f = f.responseEnd), (i += p * (f < c ? 1 : (c - m) / (f - m))));
          }
          if ((--e, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Ic = null,
    Pc = null;
  function Ln(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ko(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function lf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tf = null;
  function Mh() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === tf
        ? !1
        : ((tf = l), !0)
      : ((tf = null), !1);
  }
  var wo = typeof setTimeout == "function" ? setTimeout : void 0,
    _h = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wo = typeof Promise == "function" ? Promise : void 0,
    jh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wo < "u"
          ? function (l) {
              return Wo.resolve(null).then(l).catch(Oh);
            }
          : wo;
  function Oh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Ua(l) {
    return l === "head";
  }
  function ko(l, t) {
    var a = t,
      e = 0;
    do {
      var u = a.nextSibling;
      if ((l.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (l.removeChild(u), Qe(t));
            return;
          }
          e--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          e++;
        else if (a === "html") ju(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), ju(a));
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[we] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = i));
          }
        } else a === "body" && ju(l.ownerDocument.body);
      a = u;
    } while (a);
    Qe(t);
  }
  function $o(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = e;
    } while (a);
  }
  function af(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (af(a), ci(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Dh(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[we])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Bt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Uh(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Bt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Fo(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Bt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function ef(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function uf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Ch(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function Bt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var nf = null;
  function Io(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Bt(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Po(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function lr(l, t, a) {
    switch (((t = Ln(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(v(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(v(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function ju(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    ci(l);
  }
  var qt = new Map(),
    tr = new Set();
  function Vn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var ra = M.d;
  M.d = { f: Rh, r: Hh, D: Bh, C: qh, L: Yh, m: Gh, X: Qh, S: Xh, M: Zh };
  function Rh() {
    var l = ra.f(),
      t = Hn();
    return l || t;
  }
  function Hh(l) {
    var t = ie(l);
    t !== null && t.tag === 5 && t.type === "form" ? gd(t) : ra.r(l);
  }
  var Ye = typeof document > "u" ? null : document;
  function ar(l, t, a) {
    var e = Ye;
    if (e && typeof t == "string" && t) {
      var u = jt(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        tr.has(u) ||
          (tr.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            kl(t, "link", l),
            ql(t),
            e.head.appendChild(t))));
    }
  }
  function Bh(l) {
    (ra.D(l), ar("dns-prefetch", l, null));
  }
  function qh(l, t) {
    (ra.C(l, t), ar("preconnect", l, t));
  }
  function Yh(l, t, a) {
    ra.L(l, t, a);
    var e = Ye;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + jt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + jt(a.imageSizes) + '"]'))
        : (u += '[href="' + jt(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Ge(l);
          break;
        case "script":
          n = Xe(l);
      }
      qt.has(n) ||
        ((l = q(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        qt.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(Ou(n))) ||
          (t === "script" && e.querySelector(Du(n))) ||
          ((t = e.createElement("link")),
          kl(t, "link", l),
          ql(t),
          e.head.appendChild(t)));
    }
  }
  function Gh(l, t) {
    ra.m(l, t);
    var a = Ye;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + jt(e) + '"][href="' + jt(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Xe(l);
      }
      if (
        !qt.has(n) &&
        ((l = q({ rel: "modulepreload", href: l }, t)),
        qt.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Du(n))) return;
        }
        ((e = a.createElement("link")),
          kl(e, "link", l),
          ql(e),
          a.head.appendChild(e));
      }
    }
  }
  function Xh(l, t, a) {
    ra.S(l, t, a);
    var e = Ye;
    if (e && l) {
      var u = ce(e).hoistableStyles,
        n = Ge(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(Ou(n)))) c.loading = 5;
        else {
          ((l = q({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = qt.get(n)) && cf(l, a));
          var f = (i = e.createElement("link"));
          (ql(f),
            kl(f, "link", l),
            (f._p = new Promise(function (m, p) {
              ((f.onload = m), (f.onerror = p));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Kn(i, t, e));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function Qh(l, t) {
    ra.X(l, t);
    var a = Ye;
    if (a && l) {
      var e = ce(a).hoistableScripts,
        u = Xe(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(Du(u))),
        n ||
          ((l = q({ src: l, async: !0 }, t)),
          (t = qt.get(u)) && ff(l, t),
          (n = a.createElement("script")),
          ql(n),
          kl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Zh(l, t) {
    ra.M(l, t);
    var a = Ye;
    if (a && l) {
      var e = ce(a).hoistableScripts,
        u = Xe(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(Du(u))),
        n ||
          ((l = q({ src: l, async: !0, type: "module" }, t)),
          (t = qt.get(u)) && ff(l, t),
          (n = a.createElement("script")),
          ql(n),
          kl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function er(l, t, a, e) {
    var u = (u = N.current) ? Vn(u) : null;
    if (!u) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Ge(a.href)),
            (a = ce(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Ge(a.href);
          var n = ce(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(Ou(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              qt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                qt.set(l, a),
                n || Lh(u, l, a, i.state))),
            t && e === null)
          )
            throw Error(v(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(v(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Xe(a)),
              (a = ce(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(v(444, l));
    }
  }
  function Ge(l) {
    return 'href="' + jt(l) + '"';
  }
  function Ou(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ur(l) {
    return q({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Lh(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        kl(t, "link", a),
        ql(t),
        l.head.appendChild(t));
  }
  function Xe(l) {
    return '[src="' + jt(l) + '"]';
  }
  function Du(l) {
    return "script[async]" + l;
  }
  function nr(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + jt(a.href) + '"]');
          if (e) return ((t.instance = e), ql(e), e);
          var u = q({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            ql(e),
            kl(e, "style", u),
            Kn(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = Ge(a.href);
          var n = l.querySelector(Ou(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), ql(n), n);
          ((e = ur(a)),
            (u = qt.get(u)) && cf(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            ql(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            kl(n, "link", e),
            (t.state.loading |= 4),
            Kn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Xe(a.src)),
            (u = l.querySelector(Du(n)))
              ? ((t.instance = u), ql(u), u)
              : ((e = a),
                (u = qt.get(n)) && ((e = q({}, a)), ff(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                ql(u),
                kl(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(v(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), Kn(e, a.precedence, l));
    return t.instance;
  }
  function Kn(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function cf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function ff(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Jn = null;
  function ir(l, t, a) {
    if (Jn === null) {
      var e = new Map(),
        u = (Jn = new Map());
      u.set(a, e);
    } else ((u = Jn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[we] ||
          n[Kl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function cr(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Vh(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Kh(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Ge(e.href),
          n = t.querySelector(Ou(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = wn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            ql(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (e = ur(e)),
          (u = qt.get(u)) && cf(e, u),
          (n = n.createElement("link")),
          ql(n));
        var i = n;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          kl(n, "link", e),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = wn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var sf = 0;
  function Jh(l, t) {
    return (
      l.stylesheets && l.count === 0 && kn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((l.stylesheets && kn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && sf === 0 && (sf = 62500 * Nh());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && kn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > sf ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(e), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function wn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) kn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Wn = null;
  function kn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Wn = new Map()),
        t.forEach(wh, l),
        (Wn = null),
        wn.call(l)));
  }
  function wh(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Wn.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Wn.set(l, a));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (e = i));
        }
        e && a.set(null, e);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = a.get(i) || e),
        n === e && a.set(null, u),
        a.set(i, u),
        this.count++,
        (e = wn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Uu = {
    $$typeof: Cl,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function Wh(l, t, a, e, u, n, i, c, f) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ei(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ei(0)),
      (this.hiddenUpdates = ei(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function sr(l, t, a, e, u, n, i, c, f, m, p, T) {
    return (
      (l = new Wh(l, t, a, i, f, m, p, T, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = bt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Qi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      Ki(n),
      l
    );
  }
  function dr(l) {
    return l ? ((l = ge), l) : ge;
  }
  function or(l, t, a, e, u, n) {
    ((u = dr(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = za(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = Ta(l, e, t)),
      a !== null && (ot(a, l, t), du(a, l, t)));
  }
  function rr(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function df(l, t) {
    (rr(l, t), (l = l.alternate) && rr(l, t));
  }
  function hr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ka(l, 67108864);
      (t !== null && ot(t, l, 67108864), df(l, 67108864));
    }
  }
  function mr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = xt();
      t = ui(t);
      var a = Ka(l, t);
      (a !== null && ot(a, l, t), df(l, t));
    }
  }
  var $n = !0;
  function kh(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = M.p;
    try {
      ((M.p = 2), of(l, t, a, e));
    } finally {
      ((M.p = n), (S.T = u));
    }
  }
  function $h(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = M.p;
    try {
      ((M.p = 8), of(l, t, a, e));
    } finally {
      ((M.p = n), (S.T = u));
    }
  }
  function of(l, t, a, e) {
    if ($n) {
      var u = rf(e);
      if (u === null) ($c(l, t, e, Fn, a), yr(l, e));
      else if (Ih(u, l, t, a, e)) e.stopPropagation();
      else if ((yr(l, e), t & 4 && -1 < Fh.indexOf(l))) {
        for (; u !== null; ) {
          var n = ie(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Xa(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - yt(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (wt(n), (ul & 6) === 0 && ((Cn = Rl() + 500), Nu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = Ka(n, 2)), c !== null && ot(c, n, 2), Hn(), df(n, 2));
            }
          if (((n = rf(e)), n === null && $c(l, t, e, Fn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else $c(l, t, e, null, a);
    }
  }
  function rf(l) {
    return ((l = hi(l)), hf(l));
  }
  var Fn = null;
  function hf(l) {
    if (((Fn = null), (l = ne(l)), l !== null)) {
      var t = ll(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = pl(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = Ul(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Fn = l), null);
  }
  function vr(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Gt()) {
          case Ga:
            return 2;
          case Le:
            return 8;
          case Gu:
          case qr:
            return 32;
          case Ef:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mf = !1,
    Ca = null,
    Ra = null,
    Ha = null,
    Cu = new Map(),
    Ru = new Map(),
    Ba = [],
    Fh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function yr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ca = null;
        break;
      case "dragenter":
      case "dragleave":
        Ra = null;
        break;
      case "mouseover":
      case "mouseout":
        Ha = null;
        break;
      case "pointerover":
      case "pointerout":
        Cu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ru.delete(t.pointerId);
    }
  }
  function Hu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = ie(t)), t !== null && hr(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function Ih(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((Ca = Hu(Ca, l, t, a, e, u)), !0);
      case "dragenter":
        return ((Ra = Hu(Ra, l, t, a, e, u)), !0);
      case "mouseover":
        return ((Ha = Hu(Ha, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (Cu.set(n, Hu(Cu.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          Ru.set(n, Hu(Ru.get(n) || null, l, t, a, e, u)),
          !0
        );
    }
    return !1;
  }
  function gr(l) {
    var t = ne(l.target);
    if (t !== null) {
      var a = ll(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = pl(a)), t !== null)) {
            ((l.blockedOn = t),
              Of(l.priority, function () {
                mr(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = Ul(a)), t !== null)) {
            ((l.blockedOn = t),
              Of(l.priority, function () {
                mr(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function In(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = rf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((ri = e), a.target.dispatchEvent(e), (ri = null));
      } else return ((t = ie(a)), t !== null && hr(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function br(l, t, a) {
    In(l) && a.delete(t);
  }
  function Ph() {
    ((mf = !1),
      Ca !== null && In(Ca) && (Ca = null),
      Ra !== null && In(Ra) && (Ra = null),
      Ha !== null && In(Ha) && (Ha = null),
      Cu.forEach(br),
      Ru.forEach(br));
  }
  function Pn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      mf ||
        ((mf = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, Ph)));
  }
  var li = null;
  function Sr(l) {
    li !== l &&
      ((li = l),
      A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
        li === l && (li = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (hf(e || a) === null) continue;
            break;
          }
          var n = ie(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            oc(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function Qe(l) {
    function t(f) {
      return Pn(f, l);
    }
    (Ca !== null && Pn(Ca, l),
      Ra !== null && Pn(Ra, l),
      Ha !== null && Pn(Ha, l),
      Cu.forEach(t),
      Ru.forEach(t));
    for (var a = 0; a < Ba.length; a++) {
      var e = Ba[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Ba.length && ((a = Ba[0]), a.blockedOn === null); )
      (gr(a), a.blockedOn === null && Ba.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          i = u[nt] || null;
        if (typeof n == "function") i || Sr(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[nt] || null))) c = i.formAction;
            else if (hf(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
            Sr(a));
        }
      }
  }
  function pr() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function vf(l) {
    this._internalRoot = l;
  }
  ((ti.prototype.render = vf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(v(409));
      var a = t.current,
        e = xt();
      or(a, e, l, t, null, null);
    }),
    (ti.prototype.unmount = vf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (or(l.current, 2, null, l, null, null), Hn(), (t[ue] = null));
        }
      }));
  function ti(l) {
    this._internalRoot = l;
  }
  ti.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = jf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ba.length && t !== 0 && t < Ba[a].priority; a++);
      (Ba.splice(a, 0, l), a === 0 && gr(l));
    }
  };
  var zr = L.version;
  if (zr !== "19.2.6") throw Error(v(527, zr, "19.2.6"));
  M.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(v(188))
        : ((l = Object.keys(l).join(",")), Error(v(268, l)));
    return (
      (l = E(t)),
      (l = l !== null ? tl(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var lm = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.6",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ai.isDisabled && ai.supportsFiber)
      try {
        ((Ve = ai.inject(lm)), (vt = ai));
      } catch {}
  }
  return (
    (qu.createRoot = function (l, t) {
      if (!H(l)) throw Error(v(299));
      var a = !1,
        e = "",
        u = Md,
        n = _d,
        i = jd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = sr(l, 1, !1, null, null, a, e, null, u, n, i, pr)),
        (l[ue] = t.current),
        kc(l),
        new vf(t)
      );
    }),
    (qu.hydrateRoot = function (l, t, a) {
      if (!H(l)) throw Error(v(299));
      var e = !1,
        u = "",
        n = Md,
        i = _d,
        c = jd,
        f = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.formState !== void 0 && (f = a.formState)),
        (t = sr(l, 1, !0, t, a ?? null, e, u, f, n, i, c, pr)),
        (t.context = dr(null)),
        (a = t.current),
        (e = xt()),
        (e = ui(e)),
        (u = za(e)),
        (u.callback = null),
        Ta(a, u, e),
        (a = e),
        (t.current.lanes = a),
        Je(t, a),
        wt(t),
        (l[ue] = t.current),
        kc(l),
        new ti(t)
      );
    }),
    (qu.version = "19.2.6"),
    qu
  );
}
var Dr;
function dm() {
  if (Dr) return bf.exports;
  Dr = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (L) {
        console.error(L);
      }
  }
  return (A(), (bf.exports = sm()), bf.exports);
}
var om = dm();
function rm({ onInitialize: A }) {
  const [L, w] = ml.useState(!1),
    v = (e) => {
      (w(!0),
        setTimeout(() => {
          A();
        }, 2200));
    };
  return s.jsxs("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "#02050b",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
      zIndex: 9999,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "20px"
    },
    children: [
      s.jsx("div", { className: "ember ember-1" }),
      s.jsx("div", { className: "ember ember-2" }),
      s.jsx("div", { className: "ember ember-3" }),
      s.jsx("div", { className: "ember ember-4" }),
      s.jsx("div", { className: "ember ember-5" }),
      s.jsx("div", { className: "ember ember-6" }),
      s.jsx("div", { className: "ember ember-7" }),
      s.jsx("div", { className: "ember ember-8" }),
      s.jsx("div", { className: "ember ember-9" }),
      s.jsx("div", { className: "ember ember-10" }),
      s.jsx("div", { className: "ember ember-11" }),
      s.jsx("div", { className: "ember ember-12" }),
      s.jsx("div", { className: "ember ember-13" }),
      s.jsx("div", { className: "ember ember-14" }),
      s.jsxs("div", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background: "linear-gradient(135deg, #05111d, #0b2136)",
          borderRight: "1px solid rgba(0,191,255,0.18)",
          transition: "1.5s cubic-bezier(.77,0,.18,1)",
          transform: L ? "translateX(-100%)" : "translateX(0)",
          overflow: "hidden",
          zIndex: 10,
        },
        children: [
          s.jsx("div", {
            style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(0,191,255,0.15) 1px, transparent 1px), linear-gradient(0deg, rgba(0,191,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.6,
              animation: "gridPulsate 4s ease-in-out infinite, technoPulse 8s infinite alternate"
            }
          }),
          s.jsx("div", {
            style: {
              position: "absolute",
              inset: 0,
              background:
                "repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(0,191,255,0.05) 18px, rgba(0,191,255,0.05) 20px)",
            },
          }),
          s.jsx("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, transparent, rgba(0,191,255,0.08), transparent)",
              opacity: 0.6,
            },
          }),
        ],
      }),
      s.jsxs("div", {
        style: {
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "linear-gradient(225deg, #05111d, #0b2136)",
          borderLeft: "1px solid rgba(0,191,255,0.18)",
          transition: "1.5s cubic-bezier(.77,0,.18,1)",
          transform: L ? "translateX(100%)" : "translateX(0)",
          overflow: "hidden",
          zIndex: 10,
        },
        children: [
          s.jsx("div", {
            style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(0,191,255,0.15) 1px, transparent 1px), linear-gradient(0deg, rgba(0,191,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.6,
              animation: "gridPulsate 4s ease-in-out infinite, technoPulse 8s infinite alternate-reverse"
            }
          }),
          s.jsx("div", {
            style: {
              position: "absolute",
              inset: 0,
              background:
                "repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(0,191,255,0.05) 18px, rgba(0,191,255,0.05) 20px)",
            },
          }),
          s.jsx("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, transparent, rgba(0,191,255,0.08), transparent)",
              opacity: 0.6,
            },
          }),
        ],
      }),
      s.jsxs("div", {
        style: {
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: L ? "translate(-50%, 40vh) scale(35)" : "translate(-50%, 0) scale(1)",
          zIndex: 15,
          textAlign: "center",
          transition: "transform 1.8s cubic-bezier(0.85, 0, 0.15, 1), opacity 1.5s ease 0.3s",
          opacity: L ? 0 : 1,
          pointerEvents: L ? "none" : "auto",
        },
        children: [
          s.jsx("div", {
            style: {
              fontSize: "46px",
              fontWeight: "bold",
              letterSpacing: "8px",
              marginBottom: "26px",
              color: "#8feaff",
              textShadow:
                "0 0 18px rgba(0,191,255,0.7), 0 0 60px rgba(0,191,255,0.25)",
            },
            children: "CODEX SYSTEM",
          }),
          s.jsx("div", {
            style: {
              width: "360px",
              height: "10px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "999px",
              overflow: "hidden",
              margin: "0 auto 24px",
              border: "1px solid rgba(0,191,255,0.16)",
            },
            children: s.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, #00bfff, #8feaff, #00bfff)",
                boxShadow: "0 0 22px rgba(0,191,255,0.45)",
              },
            }),
          }),
          s.jsxs("div", {
            style: {
              fontSize: "10px",
              fontFamily: "monospace",
              color: "rgba(0,191,255,0.7)",
              marginBottom: "12px",
              textAlign: "center"
            },
            children: [
              s.jsx("div", { children: "NODE: ONLINE // SECURE CONNECTION ESTABLISHED" }),
              s.jsx("div", { children: `DECRYPTING // 0x${Math.random().toString(16).substring(2, 10).toUpperCase()}...` })
            ]
          }),
          s.jsx("div", {
            style: {
              fontSize: "13px",
              letterSpacing: "4px",
              color: "#8bb6d1",
              marginBottom: "36px",
            },
            children: "INITIALIZATION COMPLETE",
          }),
          s.jsx("button", {
            style: {
              background: "linear-gradient(135deg, rgba(0,191,255,0.7), rgba(0,102,255,0.5))",
              border: "1px solid rgba(0,191,255,0.8)",
              padding: "20px 40px",
              borderRadius: "18px",
              fontSize: "16px",
              fontWeight: "900",
              color: "#fff",
              cursor: "pointer",
              letterSpacing: "4px",
              boxShadow: "0 0 30px rgba(0,191,255,0.3), inset 0 0 20px rgba(0,191,255,0.2)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
              position: "relative",
              overflow: "hidden"
            },
            onMouseOver: (H) => {
              H.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
              H.currentTarget.style.boxShadow = "0 0 60px rgba(0,191,255,0.6), inset 0 0 30px rgba(0,191,255,0.4)";
              H.currentTarget.style.background = "linear-gradient(135deg, rgba(0,191,255,0.9), rgba(0,102,255,0.7))";
              H.currentTarget.style.border = "1px solid #7df7ff";
            },
            onMouseOut: (H) => {
              H.currentTarget.style.transform = "scale(1) translateY(0)";
              H.currentTarget.style.boxShadow = "0 0 30px rgba(0,191,255,0.3), inset 0 0 20px rgba(0,191,255,0.2)";
              H.currentTarget.style.background = "linear-gradient(135deg, rgba(0,191,255,0.7), rgba(0,102,255,0.5))";
              H.currentTarget.style.border = "1px solid rgba(0,191,255,0.8)";
            },
            onMouseDown: (H) => {
              H.currentTarget.style.transform = "scale(0.95) translateY(2px)";
              H.currentTarget.style.boxShadow = "0 0 20px rgba(0,191,255,0.8), inset 0 0 40px rgba(0,191,255,0.6)";
            },
            onMouseUp: (H) => {
              H.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
              H.currentTarget.style.boxShadow = "0 0 60px rgba(0,191,255,0.6), inset 0 0 30px rgba(0,191,255,0.4)";
            },
            onClick: v,
            children: "INITIALIZE SYSTEM",
          }),
        ],
      }),
      s.jsxs("div", {
        style: {
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: L ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(3)",
          opacity: L ? 1 : 0,
          transition: "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease",
          transitionDelay: L ? "1s" : "0s",
          padding: "50px",
          pointerEvents: "none",
          color: "#dff4ff",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          whiteSpace: "nowrap"
        },
        children: [
          s.jsxs("div", {
            style: {
              fontSize: "12px",
              fontFamily: "monospace",
              color: "rgba(0,191,255,0.7)",
              marginBottom: "16px",
              opacity: 0.8,
              letterSpacing: "1px"
            },
            children: ["AUTH_KEY: VALID // ID: ", Math.random().toString(16).substring(2, 10).toUpperCase()]
          }),
          s.jsxs("div", {
            style: {
              fontSize: "58px",
              fontWeight: "bold",
              letterSpacing: "6px",
              lineHeight: 0.95,
              marginBottom: "24px",
              color: "#9cefff",
              textShadow:
                "0 0 20px rgba(0,191,255,0.7), 0 0 60px rgba(0,191,255,0.24)",
              textAlign: "center",
            },
            children: ["ACCESS", s.jsx("br", {}), "GRANTED"],
          }),
          s.jsx("div", {
            style: {
              width: "240px",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #00bfff, transparent)",
              marginBottom: "30px",
              boxShadow: "0 0 15px #00bfff",
              animation: "gridPulsate 2s infinite"
            },
          }),
          s.jsx("div", {
            style: {
              fontSize: "14px",
              letterSpacing: "4px",
              color: "#8bb6d1",
            },
            children: "WELCOME TO COMMAND CORE",
          }),
        ],
      }),
    ],
  });
}
const Tf = "the-codex",
  Yu = "https://www.chess.com/club/the-codex/join?utm_campaign=club_invite_link&utm_source=chesscom&utm_medium=copy",
  Ur = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  Lt = {
    memberFallback: 1337,
    infernoChampion: "Inferno Champion",
    trialsChampion: "Trial Winner",
    command: [
      {
        role: "Founder",
        user: "codex_s1",
        badge: "Founder",
        profileUser: "Codex_S1",
      },
      { role: "CEO", user: "codex_vs", badge: "CEO", profileUser: "Codex_Vs" },
      {
        role: "Club Blogger",
        user: "sweetdevil095",
        profileUser: "Sweet_Devil095",
        badge: "Blogger",
      },
    ],
    commandCore: [
      {
        title: "📜 Rule Book",
        url: "https://www.chess.com/clubs/forum/view/club-rulebook-2",
      },
      {
        title: "📢 Announcements",
        url: "https://www.chess.com/club/protectors-of-the-codex/announcements",
      },
      {
        title: "⚔️ Events Hub",
        url: "https://www.chess.com/clubs/events/protectors-of-the-codex",
      },
      {
        title: "💬 Club Chat",
        url: "https://www.chess.com/clubs/forum/view/chatty-chat-chat",
      },
      {
        title: "🎖️ Hall of Fame",
        url: "https://www.chess.com/clubs/forum/view/hall-of-fame-201",
      },
      { title: "⭐ Rate Club", url: "https://strawpoll.com/w4nWWPoXWnA" },
      { title: "📊 2025 Wrapped", url: "https://www.chesssigma.com/wrapped" },
      { title: "🎥 Free Game Reviews", url: "https://chess.day/" },
    ],
    partners: [
      {
        name: "Checkmate Theory",
        tag: "CT",
        url: "https://www.chess.com/club/checkmate-theory",
      },
      {
        name: "Gukesh Fan Base",
        tag: "GF",
        url: "https://www.chess.com/club/gukesh-fanbase",
      },
      {
        name: "Rate Climbers Friends",
        tag: "RC",
        url: "https://www.chess.com/club/rating-climbers-friends",
      },
    ],
    titled: [
      {
        title: "IM",
        user: "KHVICHA_SUPTASHVILLI",
        rating: "International Master",
      },
      { title: "FM", user: "TRIMITZIOSP7", rating: "FIDE Master" },
    ],
    fallbackMembers: [
      {
        username: "API reconnecting",
        best: "N/A",
        joined: "waiting for club members endpoint",
      },
      {
        username: "Latest recruits load automatically",
        best: "N/A",
        joined: "from Chess.com joined timestamps",
      },
      {
        username: "No blank modules",
        best: "N/A",
        joined: "fallback display active",
      },
    ],
    fallbackLive: [
      {
        title: "Inferno Blitz Arena",
        status: "LIVE",
        countdown: "Live now",
        url: "",
      },
      {
        title: "Codex Rapid Ops",
        status: "LIVE",
        countdown: "Live now",
        url: "",
      },
    ],
    fallbackUpcoming: [
      {
        title: "Weekly Codex Trials",
        status: "UPCOMING",
        countdown: "Next cycle",
        url: "",
      },
      {
        title: "Elite Tactical Match",
        status: "UPCOMING",
        countdown: "Awaiting launch",
        url: "",
      },
    ],
  };
async function Ze(A, L = 6500) {
  const w = new AbortController(),
    v = setTimeout(() => w.abort(), L);
  try {
    const H = await fetch(A, { cache: "no-store", signal: w.signal });
    if (!H.ok) throw new Error(`HTTP ${H.status}`);
    return await H.json();
  } finally {
    clearTimeout(v);
  }
}
function Cr(A) {
  return (
    String(A || "CD")
      .replace(/[_-]+/g, " ")
      .split(" ")
      .map((L) => L.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "CD"
  );
}
function hm(A) {
  return `https://www.chess.com/member/${encodeURIComponent(A || "")}`;
}
function Rr(A) {
  return Number(A || 0).toLocaleString();
}
function Hr(A) {
  if (!A) return "Awaiting launch";
  const L = A * 1e3 - Date.now();
  if (L <= 0) return "Launching now";
  const w = Math.floor(L / 864e5),
    v = Math.floor((L % 864e5) / 36e5),
    H = Math.floor((L % 36e5) / 6e4);
  return w > 0 ? `${w}d ${v}h` : v > 0 ? `${v}h ${H}m` : `${Math.max(1, H)}m`;
}
function Br(A) {
  if (!A) return "";
  const L = A.match(/\/match(?:es)?\/(\d+)/);
  return L ? `https://www.chess.com/club/matches/${L[1]}` : A;
}
function mm(A) {
  return typeof A != "number" || isNaN(A) || A === 0
    ? String(A || "recently")
    : new Date(A * 1e3).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}

function formatTime(s) {
  if (isNaN(s) || !isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ":" + (sec < 10 ? "0" : "") + sec;
}

function YouTubeMusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = ml.useState(0);
  const [isPlaying, setIsPlaying] = ml.useState(!1);
  const [volume, setVolume] = ml.useState(60);
  const [isMuted, setIsMuted] = ml.useState(!1);
  const [repeatMode, setRepeatMode] = ml.useState("ALL");
  const [currentTime, setCurrentTime] = ml.useState(0);
  const [duration, setDuration] = ml.useState(0);
  const [searchQuery, setSearchQuery] = ml.useState("");

  const playerRef = ml.useRef(null);
  const wrapperRef = ml.useRef(null);
  const timerRef = ml.useRef(null);

  const [playlist, setPlaylist] = ml.useState([
    { title: "Imagine Dragons - Believer", id: "igulXNL1Kz0" },
    { title: "Imagine Dragons - Thunder", id: "GtEvysh1654" },
    { title: "Imagine Dragons - Demons", id: "MA0aCUxItYA" },
    { title: "Imagine Dragons - Radioactive", id: "vJao1u2uBqY" },
    { title: "Imagine Dragons - Whatever It Takes", id: "UsuF4jJ4sgA" },
    { title: "Imagine Dragons - It’s Time", id: "NASqUELHjPE" },
    { title: "Imagine Dragons - On Top of the World", id: "cxmMD5OvYRQ" },
    { title: "Imagine Dragons - Next to Me", id: "axS6L0NX7VE" },
    { title: "Imagine Dragons - Natural", id: "V5M2WZiAy6k" },
    { title: "Imagine Dragons - Shots", id: "N-awc3YAncM" },
    { title: "Alan Walker - Faded", id: "qdpXxGPqW-Y" },
    { title: "Alan Walker - Sing Me to Sleep", id: "K7UGaydx7NI" },
    { title: "Alan Walker - Alone", id: "bPs0xFd4skY" },
    { title: "Alan Walker - Darkside", id: "sdAOoB5ML0Q" },
    { title: "Alan Walker - The Spectre", id: "qHDJSRlNhVs" },
    { title: "Alan Walker - All Falls Down", id: "KJZsy_8Lyws" },
    { title: "Alan Walker & K-391 - Ignite", id: "zrwTYozyzYA" },
    { title: "Alan Walker - Diamond Heart", id: "c9R9VsK54ZQ" },
    { title: "Alan Walker - Tired", id: "YnaEoCY_vzc" },
    { title: "Alan Walker - On My Way", id: "fm-nXA-K0Dg" },
    { title: "Alan Walker & Ava Max - Alone, Pt. II", id: "GPvBmcoriNo" },
    { title: "Alan Walker - Heading Home", id: "HFuVhJySO2o" },
    { title: "Alan Walker - Believers", id: "LClEtrHvxfo" },
    { title: "Alan Walker - Lost Control", id: "-Ed-GNq2EyU" },
    { title: "Alan Walker - Play", id: "yDk7k06-E4w" },
    { title: "Alan Walker, K-391 & Emelie Hollow - Lily", id: "ox4tmEV6-QU" },
    { title: "Alan Walker, K-391 & Boy In Space - Paradise", id: "TG_0_OdkwN0" },
    { title: "Alan Walker & Sofia Carson - Different World", id: "6ow6MueyJOQ" },
    { title: "K-391, Alan Walker & Ahrix - End of Time", id: "CaZXdZGZfb0" },
    { title: "Alan Walker - Live Fast", id: "eABUCA8BmTg" },
    { title: "American Authors - Best Day of My Life", id: "vJ9KFEJVISo" },
    { title: "American Authors - Go Big or Go Home", id: "iZzFmnx4QmA" },
    { title: "X Ambassadors - Renegades", id: "8j741TUIET0" },
    { title: "The Script - Superheroes", id: "xP3LUSHj2J0" },
    { title: "Coldplay - Adventure of a Lifetime", id: "y6y8bfyUWOw" },
    { title: "Coldplay - A Sky Full of Stars", id: "VPRjCeoBqrI" },
    { title: "OneRepublic - Love Runs Out", id: "KkVID7tMUbE" },
    { title: "OneRepublic - Counting Stars", id: "mgT0N3tMP74" },
    { title: "Bastille - Pompeii", id: "cvQ2LF3hyuY" },
    { title: "Fall Out Boy - My Songs Know What You Did in the Dark", id: "i0oSTgq7Bvc" },
    { title: "Top of the World", id: "sjLRh-QPM9c" },
    { title: "Wolves", id: "s2uLELuQvjw" },
    { title: "Who I Am", id: "PFs7egR2iDE" },
    { title: "Only One King", id: "3BFuQicL2WI" },
    { title: "Money Run Low", id: "facc6KUJYcM" },
    { title: "Legends Are Made", id: "i2hL_NuodtU" },
    { title: "Life Force", id: "bkjchS0PTl0" },
    { title: "Montage Rugada", id: "Hd5nXTyaXZg" },
    { title: "Born For This", id: "aJ5IzGBnWAc" },
    { title: "Glory", id: "i3ucSSVJTL4" },
    { title: "Stronger", id: "cNld-AHw-Wg" },
    { title: "Rise", id: "fB8TyLTD7EE" },
    { title: "The Phoenix", id: "5JqY-6q-RNA" },
    { title: "Warriors", id: "wPQEeBAXou0" },
    { title: "The Resistance", id: "SKnRdQiH3-k" },
    { title: "Hall Of Fame", id: "3Kxf2dHlDpQ" },
    { title: "Montagem Xonada", id: "JjPtDl6EJ3o" },
    { title: "No Batidao", id: "GXioir-fujY" },
    { title: "Papa Roach – Born for Greatness", id: "WFZVaycG-7I" },
    { title: "Linkin Park – Battle Symphony", id: "D7ab595h0AU" },
    { title: "Coldplay – Viva la Vida", id: "y4zdDXPYo0I" },
    { title: "Twenty One Pilots – Heathens", id: "zq2pagG8_ok" },
    { title: "Muse – Uprising", id: "itUJUs95LqU" },
    { title: "Fall Out Boy – Immortals", id: "UmyGVS5krMs" },
    { title: "Skillet – Feel Invincible", id: "J4JisubEvSI" },
    { title: "AWOLNATION – Run (Wake Up)", id: "NQPDm-GdmAs" },
    { title: "OneRepublic – I Lived", id: "KINfQbfZwik" },
    { title: "Macklemore & Ryan Lewis – Can’t Hold Us", id: "qWMNO8gq_cg" },
    { title: "Macklemore – Glorious (ft. Skylar Grey)", id: "GTyEsIMefzc" },
    { title: "Rachel Platten – Fight Song", id: "-a1qTzh16hY" },
    { title: "Welshly Arms – Legendary", id: "4yTB3Cu8W0g" },
    { title: "Demi Lovato – Skyscraper", id: "QiTJ0658WvE" },
    { title: "Beyoncé – Halo", id: "pCSL48AI_Ms" },
    { title: "Queen – We Will Rock You", id: "y3Ca3c6J9N4" },
    { title: "Queen – We Are the Champions", id: "d5GkgVhFeZY" },
    { title: "AC/DC – Thunderstruck", id: "skwZ5MQ7CfE" },
    { title: "Smash Mouth – I’m a Believer", id: "bWqmc8qxEps" },
    { title: "U2 – Elevation", id: "19KstSgU-c0" },
    { title: "U2 – Beautiful Day", id: "hJ_burYdegk" },
    { title: "Avenged Sevenfold – Carry On", id: "rXNlFiMaPMA" },
    { title: "P!nk – Just Like Fire", id: "k0ZmztU-X2I" },
    { title: "Train – Drive By", id: "maklLfjCO90" },
    { title: "Flo Rida – Good Feeling", id: "EO6ZFcBd3hg" },
    { title: "Pitbull – Give Me Everything (ft. Ne-Yo)", id: "3MqUW5txLjs" },
    { title: "The Chainsmokers & Coldplay – Something Just Like This", id: "fZUfdnmtg4Y" },
    { title: "Ellie Goulding – Burn", id: "VRcQsgjo7ZQ" },
    { title: "Justin Timberlake – Can’t Stop The Feeling!", id: "0Ui-QzihJGo" },
    { title: "Bruno Mars – Just The Way You Are", id: "u7XjPmN-tHw" },
    { title: "Rachel Platten – Stand By You", id: "-urmcz2RSwI" },
    { title: "Imagine Dragons – I Bet My Life", id: "KKgwLVqJbho" },
    { title: "Imagine Dragons – Warriors", id: "wPQEeBAXou0" },
    { title: "The Script – Hall of Fame (ft. Will.I.Am)", id: "dtgoDXEOxTM" },
    { title: "Shinedown – Get Up", id: "2hbqY9kQ6ho" },
    { title: "Nickelback – Burn It to the Ground", id: "ZHuogY04SbI" },
    { title: "Eminem – Not Afraid (Clean Version)", id: "_uuXpXSZYMk" },
    { title: "OneRepublic – All the Right Moves", id: "eYYcQYXMkKU" },
    { title: "Coldplay – Paradise", id: "ymMvDs15htc" },
    { title: "Thirty Seconds to Mars – Kings and Queens", id: "VSiTrGCAbt8" },
    { title: "Avicii – Wake Me Up", id: "5y_KJAg8bHI" },
    { title: "Kygo – Firestone (ft. Conrad Sewell)", id: "XUUjliDBAmk" },
    { title: "Zedd – The Middle (ft. Maren Morris)", id: "Lj6Y6JCu-l4" },
    { title: "David Guetta – Titanium (ft. Sia)", id: "Xn_kp8OZtc8" },
    { title: "Sia – Unstoppable", id: "oS07d8Gr4tw" },
    { title: "Maroon 5 – Maps", id: "Y7ix6RITXM0" },
    { title: "OneRepublic – Good Life", id: "-Bo4oWK22bk" },
    { title: "Phillip Phillips – Home", id: "jevGL7i1BVQ" },
    { title: "Rachel Platten – Fight Song", id: "XbxNtPiCBK8" },
    { title: "Sara Bareilles – Brave", id: "4Ny_LX3byp8" },
    { title: "Kelly Clarkson – Stronger (What Doesn’t Kill You)", id: "RjZzySx7TmM" },
    { title: "Katy Perry – Rise", id: "2cvB35A3pRU" },
    { title: "Walk The Moon – Shut Up and Dance", id: "0CGH3zm2R7c" },
    { title: "Coldplay – Viva La Vida", id: "y4zdDXPYo0I" },
    { title: "Queen – Don’t Stop Me Now", id: "MHi9mKq0slA" },
    { title: "Macklemore & Ryan Lewis – Can’t Hold Us (ft. Ray Dalton)", id: "xHRkHXjZcg0" },
    { title: "Imagine Dragons – Monster", id: "SWdJdGYfYPw" },
    { title: "Bastille – World Gone Mad", id: "I6IaW8MiuRo" },
    { title: "OneRepublic – Seasons", id: "Ymts4ldfPws" },
    { title: "Journey - Don't Stop Believin'", id: "1k8craCGpgs" },
    { title: "Survivor - Eye of the Tiger", id: "btPJPFnesV4" },
    { title: "Bon Jovi - It's My Life", id: "vx2u5uUu3DE" },
    { title: "Van Halen - Jump", id: "SwYN7mTi6HM" },
    { title: "Swedish House Mafia ft. John Martin - Don't You Worry Child", id: "1y6smkh6c-0" },
    { title: "Maroon 5 ft. Christina Aguilera - Moves Like Jagger", id: "iEPTlhBmwRg" },
    { title: "Journey - Any Way You Want It", id: "atxUuldUcfI" },
    { title: "Aerosmith - Dream On", id: "89dGC8de0CA" },
    { title: "Michael Jackson - Man in the Mirror", id: "PivWY9wn5ps" },
    { title: "Katy Perry - Firework", id: "QGJuMBdaqIw" }
  ]);

  const filteredPlaylist = playlist.map((song, index) => ({ ...song, index })).filter(song => song.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const stateRef = ml.useRef({ currentSongIndex, repeatMode, isPlaying });
  ml.useEffect(() => {
    stateRef.current = { currentSongIndex, repeatMode, isPlaying };
  }, [currentSongIndex, repeatMode, isPlaying]);

  ml.useEffect(() => {
    if (!wrapperRef.current) return;
    const el = document.createElement("div");
    wrapperRef.current.appendChild(el);

    const initPlayer = () => {
      playerRef.current = new window.YT.Player(el, {
        height: "100%",
        width: "100%",
        videoId: playlist[stateRef.current.currentSongIndex].id,
        host: 'https://www.youtube.com',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          enablejsapi: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            if (stateRef.current.isPlaying) event.target.playVideo();
            else event.target.pauseVideo();
            event.target.setVolume(parseInt(window.localStorage.getItem('musicVolume'), 10) || 60);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
               setIsPlaying(!0);
               setDuration(event.target.getDuration());
            } else if (event.data === window.YT.PlayerState.PAUSED) {
               setIsPlaying(!1);
            } else if (event.data === window.YT.PlayerState.ENDED) {
               const { currentSongIndex, repeatMode } = stateRef.current;
               let nextIndex = currentSongIndex;
               if (repeatMode === "ALL") {
                 nextIndex = (currentSongIndex + 1) % playlist.length;
               } else if (repeatMode === "ONE") {
                 // stay on same index
               }
               setCurrentSongIndex(nextIndex);
               playerRef.current.loadVideoById(playlist[nextIndex].id);
            }
          },
          onError: (event) => {
             console.error("YouTube Player Error:", event.data);
             const { currentSongIndex, repeatMode } = stateRef.current;
             let nextIndex = (currentSongIndex + 1) % playlist.length;
             setCurrentSongIndex(nextIndex);
          }
        }
      });
    };

    if (!window.YT && !document.getElementById("youtube-api-script")) {
      const tag = document.createElement("script");
      tag.id = "youtube-api-script";
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    } else if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const old = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
         if (old) old();
         initPlayer();
      };
    }
    
    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  ml.useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById({ videoId: playlist[currentSongIndex].id });
      if (stateRef.current.isPlaying) {
         setTimeout(() => {
            if (playerRef.current && playerRef.current.playVideo) {
               playerRef.current.playVideo();
            }
         }, 100);
      }
    }
  }, [currentSongIndex]);

  ml.useEffect(() => {
    timerRef.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime && isPlaying) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);


  ml.useEffect(() => {
    if (playerRef.current && playerRef.current.setVolume) {
      playerRef.current.setVolume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted]);
  
  const togglePlay = () => {
     if (playerRef.current && playerRef.current.playVideo) {
         if (isPlaying) {
             playerRef.current.pauseVideo();
         } else {
             playerRef.current.playVideo();
         }
     }
  };

  const shufflePlaylist = () => {
    const currentSong = playlist[currentSongIndex];
    const newPlaylist = [...playlist];
    for (let i = newPlaylist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newPlaylist[i], newPlaylist[j]] = [newPlaylist[j], newPlaylist[i]];
    }
    const newIndex = newPlaylist.findIndex(song => song.id === currentSong.id);
    setPlaylist(newPlaylist);
    setCurrentSongIndex(newIndex !== -1 ? newIndex : 0);
  };
  
  const skipForward = () => {
    let nextIndex = currentSongIndex;
    if (repeatMode === "ALL") {
      nextIndex = (currentSongIndex + 1) % playlist.length;
    } else {
      nextIndex = Math.min(currentSongIndex + 1, playlist.length - 1);
    }
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const skipBackward = () => {
    let prevIndex = currentSongIndex;
    if (repeatMode === "ALL") {
      prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    } else {
       prevIndex = Math.max(currentSongIndex - 1, 0);
    }
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleVolumeChange = (e) => {
     const rect = e.currentTarget.getBoundingClientRect();
     const val = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
     setVolume(val * 100);
     setIsMuted(!1);
     window.localStorage.setItem('musicVolume', val * 100);
  };
  
  const handleProgressChange = (e) => {
     if (playerRef.current && playerRef.current.seekTo && duration > 0) {
       const rect = e.currentTarget.getBoundingClientRect();
       const val = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
       playerRef.current.seekTo(val * duration, !0);
       setCurrentTime(val * duration);
     }
  };

  const toggleRepeatMode = () => {
     setRepeatMode(prev => prev === "ALL" ? "ONE" : "ALL");
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  return s.jsxs("div", {
    className: "p-5",
    style: { background: "transparent", width: "100%", height: "100%", minHeight: "450px", display: "flex", flexDirection: "column" },
    children: [
        s.jsxs("div", {
            style: { 
              background: "linear-gradient(180deg, rgba(25,18,15,0.7), rgba(10,5,3,0.85))",
              borderRadius: "18px",
              padding: "18px",
              border: "1.5px solid rgba(255,176,120,0.25)",
              boxShadow: "0 0 24px rgba(0,0,0,.5), inset 0 0 12px rgba(255,255,255,.05)",
              marginBottom: "20px",
              position: "relative",
              overflow: "hidden"
            },
            children: [
               s.jsx("div", { ref: wrapperRef, style: { width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", marginBottom: "16px", background: "#000", pointerEvents: "auto", position: "relative", zIndex: 1 } }),
               s.jsxs("div", {
                   style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", position: "relative", zIndex: 1 },
                   children: [
                       s.jsx("button", {
                           onClick: shufflePlaylist,
                           style: { width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.15s ease", marginRight: "4px" },
                           onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.2)",
                           onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.1)",
                           children: "🔀"
                       }),
                       s.jsx("button", {
                           onClick: skipBackward,
                           style: { width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.15s ease" },
                           onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.2)",
                           onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.1)",
                           children: "⏮"
                       }),
                       s.jsx("button", {
                           onClick: togglePlay,
                           style: { width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(145deg,#ffb37a,#ff8a70)", border: "none", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(255,176,120,0.5)", color: "#fff", transition: "transform 0.15s ease", overflow: "hidden", position: "relative" },
                           onMouseDown: e => e.currentTarget.style.transform = "scale(0.95)",
                           onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
                           onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
                           children: [
                               s.jsx("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", background: isPlaying ? "transparent" : "rgba(0,0,0,0.4)" }, children: !isPlaying && "▶" })
                           ]
                       }),
                       s.jsx("button", {
                           onClick: skipForward,
                           style: { width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.15s ease" },
                           onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.2)",
                           onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.1)",
                           children: "⏭"
                       }),
                       s.jsxs("div", {
                           onClick: handleProgressChange,
                           style: { flex: 1, height: "12px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px", position: "relative", cursor: "pointer" },
                           children: [
                               s.jsxs("div", {
                                   style: { height: "100%", width: `${progressPercent}%`, background: "linear-gradient(90deg, #ffb37a, #ff8a70)", borderRadius: "10px", position: "relative", transition: "width 0.1s linear" },
                                   children: [
                                       s.jsx("div", { style: { position: "absolute", right: "-8px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", borderRadius: "50%", background: "#fff", boxShadow: "0 0 10px rgba(255,176,120,.8)" } })
                                   ]
                               })
                           ]
                       }),
                       s.jsx("button", {
                           onClick: toggleRepeatMode,
                           style: { width: "36px", height: "36px", borderRadius: "50%", background: repeatMode === "ONE" ? "rgba(255,176,120,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${repeatMode === "ONE" ? "rgba(255,176,120,0.5)" : "rgba(255,255,255,0.1)"}`, cursor: "pointer", fontSize: "15px", color: repeatMode === "ONE" ? "#ffb37a" : "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" },
                           children: "🔁"
                       }),
                       s.jsx("div", {
                           style: { minWidth: "90px", fontSize: "14px", fontWeight: "600", color: "rgba(255,255,255,0.8)", textAlign: "right", fontVariantNumeric: "tabular-nums" },
                           children: `${formatTime(currentTime)} / ${formatTime(duration)}`
                       })
                   ]
               }),
               s.jsxs("div", {
                   style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", position: "relative", zIndex: 1 },
                   children: [
                       s.jsx("span", { onClick: toggleMute, style: { fontSize: "16px", cursor: "pointer", color: isMuted || volume === 0 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.9)" }, children: isMuted || volume === 0 ? "🔇" : "🔊" }),
                       s.jsxs("div", {
                           onClick: handleVolumeChange,
                           style: { position: "relative", width: "120px", height: "8px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", cursor: "pointer" },
                           children: [
                               s.jsx("div", { style: { position: "absolute", height: "100%", width: `${isMuted ? 0 : volume}%`, background: "linear-gradient(90deg, #7b4dff, #d1b3ff)", borderRadius: "8px" } }),
                               s.jsx("div", { style: { position: "absolute", top: "-4px", left: `calc(${isMuted ? 0 : volume}% - 4px)`, width: "8px", height: "16px", background: "#fff", borderRadius: "4px", boxShadow: "0 0 6px rgba(180,140,255,0.6)" } })
                           ]
                       })
                   ]
               })
            ]
        }),
        s.jsxs("div", {
            style: { position: "relative", marginBottom: "16px" },
            children: [
               s.jsx("input", {
                   type: "text",
                   placeholder: "Search tracks...",
                   value: searchQuery,
                   onChange: (e) => setSearchQuery(e.target.value),
                   style: {
                       width: "100%",
                       padding: "10px 16px 10px 38px",
                       background: "rgba(0,0,0,0.3)",
                       border: "1px solid rgba(255,255,255,0.1)",
                       borderRadius: "12px",
                       color: "#fff",
                       fontSize: "14px",
                       outline: "none",
                       fontFamily: "var(--font-sans)",
                       transition: "border-color 0.2s"
                   },
                   onFocus: (e) => e.target.style.borderColor = "rgba(255,176,120,0.5)",
                   onBlur: (e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"
               }),
               s.jsx("span", { style: { position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)", fontSize: "14px" }, children: "🔍" })
            ]
        }),
        s.jsx("div", {
            style: { display: "flex", flexDirection: "column", gap: "6px", overflowY: "auto", flex: 1, paddingRight: "4px" },
            className: "scroll-zone",
            children: filteredPlaylist.length > 0 ? filteredPlaylist.map((song) => s.jsxs("div", {
                key: song.id,
                onClick: () => {
                    if (currentSongIndex === song.index) {
                        togglePlay();
                        return;
                    }
                    setCurrentSongIndex(song.index);
                    setIsPlaying(!0);
                },
                style: {
                    padding: "12px 16px",
                    cursor: "pointer",
                    borderRadius: "12px",
                    background: currentSongIndex === song.index ? "rgba(255, 176, 120, 0.15)" : "rgba(255,255,255,0.02)",
                    border: currentSongIndex === song.index ? "1px solid rgba(255,176,120,0.3)" : "1px solid transparent",
                    color: currentSongIndex === song.index ? "#ffffff" : "rgba(255,255,255,0.7)",
                    fontWeight: currentSongIndex === song.index ? "600" : "400",
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    transition: "all 0.2s ease"
                },
                onMouseOver: (e) => {
                    if (currentSongIndex !== song.index) {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    }
                },
                onMouseOut: (e) => {
                    if (currentSongIndex !== song.index) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }
                },
                children: [
                    s.jsx("div", { 
                        style: { 
                            width: "28px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center",
                            background: currentSongIndex === song.index ? "linear-gradient(145deg, #ffb37a, #ff8a70)" : "rgba(255,255,255,0.1)",
                            color: currentSongIndex === song.index ? "#000" : "rgba(255,255,255,0.5)",
                            fontSize: "10px", fontWeight: "bold"
                        }, 
                        children: currentSongIndex === song.index && isPlaying ? "🎶" : `${song.index + 1}` 
                    }),
                    s.jsxs("div", { 
                        style: { flex: 1, display: "flex", flexDirection: "column" }, 
                        children: [
                           s.jsx("span", { children: song.title }),
                           s.jsx("span", { style: { fontSize: "11px", color: currentSongIndex === song.index ? "rgba(255,176,120,0.8)" : "rgba(255,255,255,0.3)" }, children: "Codex Audio Library" })
                        ]
                    }),
                    currentSongIndex === song.index && isPlaying ? s.jsx("div", { style: { display: "flex", gap: "3px", height: "14px", alignItems: "flex-end" }, children: [1,2,3].map(i => s.jsx("div", { key: i, style: { width: "3px", background: "#ffb37a", animation: `eqBounce 0.${5 + i}s infinite alternate` } })) }) : null
                ]
            })) : s.jsx("div", { style: { padding: "20px", textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "14px" }, children: "No tracks found." })
        }),
        s.jsxs("div", {
            style: { display: "none" },
            children: [
                
            ]
        })
    ]
  });
}

const quotes = [
  { text: "Tactics flow from a superior position.", author: "Bobby Fischer" },
  { text: "When you see a good move, look for a better one.", author: "Emanuel Lasker" },
  { text: "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.", author: "Sun Tzu" },
  { text: "A strong memory, concentration, imagination, and a strong will is required to become a great chess player.", author: "Bobby Fischer" },
  { text: "Every chess master was once a beginner.", author: "Irving Chernev" },
  { text: "Chess is the struggle against the error.", author: "Johannes Zukertort" },
  { text: "In life, as in chess, forethought wins.", author: "Charles Buxton" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "The harder you work, the luckier you get.", author: "Gary Player" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Great leaders are almost always great simplifiers.", author: "Colin Powell" },
  { text: "Persistence can change failure into extraordinary achievement.", author: "Marv Levy" },
  { text: "Patience and persistence are the magical providers of success.", author: "Anonymous" },
  { text: "The blunders are all there on the board, waiting to be made.", author: "Savielly Tartakower" },
  { text: "Chess, like love, like music, has the power to make men happy.", author: "Siegbert Tarrasch" },
  { text: "Play the opening like a book, the middle game like a magician, and the endgame like a machine.", author: "Rudolf Spielmann" },
  { text: "I have failed many times. And that's why I am a success.", author: "Michael Jordan" },
  { text: "You may have to fight a battle more than once to win it.", author: "Margaret Thatcher" },
  { text: "A leader is one who knows the way, goes the way, and shows the way.", author: "John C. Maxwell" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
  { text: "Chess holds its master in its own bonds, shackling the mind and brain so that the inner freedom of the very strongest must suffer.", author: "Albert Einstein" },
  { text: "There is no remorse like the remorse of chess.", author: "H.G. Wells" },
  { text: "Methodical thinking is of more use in chess than inspiration.", author: "C.J.S. Purdy" },
  { text: "Daring ideas are like chessmen moved forward; they may be beaten, but they may start a winning game.", author: "Johann Wolfgang von Goethe" },
  { text: "Chess is life in miniature. Chess is a struggle, chess is battles.", author: "Garry Kasparov" },
  { text: "I am my own worst enemy when I am losing.", author: "Anonymous" },
  { text: "Continuous effort - not strength or intelligence - is the key to unlocking our potential.", author: "Winston Churchill" },
  { text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.", author: "Bruce Lee" },
  { text: "An ounce of practice is worth more than tons of preaching.", author: "Mahatma Gandhi" },
  { text: "Leadership is the capacity to translate vision into reality.", author: "Warren Bennis" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "He who has a why to live for can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.", author: "Benjamin Franklin" },
  { text: "Never give in except to convictions of honor and good sense.", author: "Winston Churchill" },
  { text: "Difficulties break some men but make others.", author: "Nelson Mandela" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
  { text: "Plans are nothing; planning is everything.", author: "Dwight D. Eisenhower" },
  { text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln" },
  { text: "To be prepared is half the victory.", author: "Miguel de Cervantes" },
  { text: "Only those who will risk going too far can possibly find out how far one can go.", author: "T.S. Eliot" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix" },
];

function DataMatrix() {
  const canvasRef = ml.useRef(null);

  ml.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height, columns;
    const fontSize = 14;
    let drops = [];

    const initCanvas = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.ceil(width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = (height + Math.random() * 200) / fontSize;
      }
    };

    initCanvas();
    const observer = new ResizeObserver(initCanvas);
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 5, 13, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#19e6ff';
      ctx.font = fontSize + 'px Orbitron, monospace';
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        const text = Math.floor(Math.random() * 10).toString();
        const x = i * fontSize + fontSize / 2;
        const y = drops[i] * fontSize;

        let renderX = x;
        if (Math.random() > 0.98) {
           renderX += (Math.random() > 0.5 ? 1 : -1) * fontSize;
        }

        ctx.fillText(text, renderX, y);
        drops[i]--;

        if (drops[i] * fontSize < 0 && Math.random() > 0.95) {
          drops[i] = (height + Math.random() * 200) / fontSize;
        }
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return s.jsx("canvas", {
    ref: canvasRef,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.35,
      pointerEvents: "none",
      zIndex: 0
    }
  });
}

function QuoteOfTheDay() {
  const [quoteIndex, setQuoteIndex] = ml.useState(() => Math.floor(Math.random() * quotes.length));
  const [fading, setFading] = ml.useState(false);

  const newQuote = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setQuoteIndex(Math.floor(Math.random() * quotes.length));
      setFading(false);
    }, 400);
  };

  const currentQuote = quotes[quoteIndex];

  return s.jsxs("section", {
    className: "module",
    children: [
      s.jsxs("div", {
        className: "section-head",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", { className: "kicker", children: "Inspiration Module" }),
              s.jsx("h2", { className: "module-title", children: "Quote of the Day" })
            ]
          }),
          s.jsx("span", { className: "badge purple", children: "Intel" })
        ]
      }),
      s.jsxs("div", {
        style: {
          padding: "20px",
          background: "linear-gradient(135deg, rgba(7, 19, 35, 0.9), rgba(3, 7, 18, 0.9))",
          border: "1px solid rgba(25, 230, 255, 0.3)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          position: "relative",
          overflow: "hidden"
        },
        children: [
          s.jsxs("div", {
            style: {
              opacity: fading ? 0 : 1,
              transition: "opacity 0.4s ease-in-out",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            },
            children: [
              s.jsx("div", {
                style: {
                  color: "#19e6ff",
                  fontSize: "32px",
                  lineHeight: "1",
                  fontFamily: "serif",
                  opacity: 0.6,
                  textShadow: "0 0 10px #19e6ff4d"
                },
                children: "“"
              }),
              s.jsx("div", {
                style: {
                  color: "#e2e8f0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                  fontStyle: "italic",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                },
                children: currentQuote.text
              }),
              s.jsx("div", {
                style: {
                  color: "#19e6ff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textAlign: "right",
                  marginTop: "8px"
                },
                children: `— ${currentQuote.author}`
              })
            ]
          }),
          s.jsx("button", {
            onClick: newQuote, className: "btn purple",
            style: {
              alignSelf: "flex-end",
              marginTop: "8px",
              padding: "8px 16px"
            },
            children: "NEW QUOTE"
          })
        ]
      })
    ]
  });
}

const milestones = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

function MemberRoadmap({ currentMembers }) {
  const members = typeof currentMembers === "number" && !isNaN(currentMembers) 
    ? currentMembers 
    : parseInt((String(currentMembers) || "0").replace(/,/g, ""), 10) || 0;

  return s.jsxs("section", {
    className: "module",
    children: [
      s.jsxs("div", {
        className: "section-head",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", { className: "kicker", children: "Expansion Module" }),
              s.jsx("h2", { className: "module-title", children: "Member Roadmap" })
            ]
          }),
          s.jsx("span", { className: "badge purple", children: "Goals" })
        ]
      }),
      s.jsx("div", {
        className: "scroll-zone",
        style: {
          background: "linear-gradient(135deg, rgba(7, 19, 35, 0.9), rgba(3, 7, 18, 0.9))",
          border: "1px solid rgba(25, 230, 255, 0.3)",
          borderRadius: "12px",
          padding: "24px 20px 32px 20px",
          display: "block",
          position: "relative"
        },
        children: s.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            minHeight: "max-content",
            padding: "10px 0"
          },
          children: [
            s.jsx("div", {
              style: {
                position: "absolute",
                top: "20px",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                background: "rgba(25, 230, 255, 0.15)",
                zIndex: 1
              }
            }),
            s.jsx("div", {
              style: {
                position: "absolute",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                background: "#19e6ff",
                boxShadow: "0 0 10px #19e6ff",
                zIndex: 1,
                height: (() => {
                  if (members >= milestones[milestones.length - 1]) return "calc(100% - 40px)";
                  let activeIdx = milestones.findIndex(m => members < m);
                  if (activeIdx === 0) return "0%";
                  const prev = milestones[activeIdx - 1];
                  const next = milestones[activeIdx];
                  const progress = Math.max(0, (members - prev) / (next - prev));
                  const fraction = (activeIdx - 1 + progress) / (milestones.length - 1);
                  return `calc(${fraction * 100}% - ${fraction * 40}px)`;
                })(),
                transition: "height 1s ease-out"
              }
            }),
            ...milestones.map((ms, idx) => {
              const isCompleted = members >= ms;
              const isCurrent = !isCompleted && (idx === 0 || members >= milestones[idx - 1]);
              const color = isCompleted ? "#19e6ff" : isCurrent ? "#7df7ff" : "rgba(25, 230, 255, 0.15)";
              const shadow = isCompleted ? "0 0 10px #19e6ff" : isCurrent ? "0 0 20px #7df7ff, 0 0 10px #19e6ff" : "none";
              const size = isCurrent ? "14px" : "10px";

              return s.jsxs("div", {
                style: {
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: idx === milestones.length - 1 ? "0" : "40px",
                  width: "100%"
                },
                key: ms,
                children: [
                  s.jsx("div", {
                    style: {
                      width: size,
                      height: size,
                      borderRadius: "50%",
                      background: isCurrent ? "#fff" : color,
                      boxShadow: shadow,
                      transition: "all 0.3s ease",
                      border: isCompleted ? "none" : isCurrent ? "2px solid #7df7ff" : "2px solid rgba(25, 230, 255, 0.3)",
                      flexShrink: 0
                    }
                  }),
                  s.jsx("div", {
                    style: {
                      position: "absolute",
                      left: "calc(50% + 20px)",
                      color: isCompleted || isCurrent ? "#e2e8f0" : "rgba(255,255,255,0.4)",
                      fontSize: "13px",
                      fontWeight: isCurrent ? "bold" : "normal",
                      fontFamily: "Orbitron, sans-serif"
                    },
                    children: ms
                  })
                ]
              });
            })
          ]
        })
      })
    ]
  });
}

function TopOperativesLeaderboard() {
  const [leaderboard, setLeaderboard] = ml.useState([]);
  const [loading, setLoading] = ml.useState(true);

  ml.useEffect(() => {
    let active = true;
    async function fetchTopOps() {
      try {
        const cached = localStorage.getItem("codex_top_ops");
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 1000 * 60 * 60 * 24) {
            setLeaderboard(data);
            setLoading(false);
            return;
          }
        }
        const memRes = await fetch(`https://api.chess.com/pub/club/${Tf}/members`);
        if (!memRes.ok) return;
        const membersData = await memRes.json();
        const allUsers = [...(membersData.weekly || []), ...(membersData.monthly || []), ...(membersData.all_time || [])].map(u => u.username);
        
        const uniqueUsers = [...new Set(allUsers)];
        
        const results = [];
        for (let i = 0; i < uniqueUsers.length; i += 10) {
          if (!active) return;
          const chunk = uniqueUsers.slice(i, i + 10);
          const chunkRes = await Promise.all(chunk.map(async (user) => {
            try {
              const res = await fetch(`https://api.chess.com/pub/player/${user.toLowerCase()}/stats`);
              if (!res.ok) return null;
              const data = await res.json();
              const rapid = data.chess_rapid?.last?.rating || 0;
              return { username: user, rating: rapid || "N/A" };
            } catch (e) {
              return null;
            }
          }));
          results.push(...chunkRes.filter(Boolean));
        }
        
        const sorted = results.filter(r => r.rating !== "N/A").sort((a, b) => b.rating - a.rating);
        const top4 = sorted.slice(0, 4);
        if (active) {
          setLeaderboard(top4);
          setLoading(false);
          localStorage.setItem("codex_top_ops", JSON.stringify({ data: top4, timestamp: Date.now() }));
        }
      } catch (e) {
        if (active) setLoading(false);
      }
    }
    fetchTopOps();
    return () => { active = false; };
  }, []);

  return s.jsxs("section", {
    className: "module",
    children: [
      s.jsxs("div", {
        className: "section-head",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", { className: "kicker", children: "Elite Module" }),
              s.jsx("h2", { className: "module-title", children: "Top Operatives Leaderboard" })
            ]
          }),
          s.jsx("span", { className: "badge green", children: "Top 4" })
        ]
      }),
      s.jsx("div", {
        className: "card-list",
        children: loading 
          ? s.jsx("div", { className: "micro text-center py-4 text-slate-400 border border-slate-800/40 rounded-xl bg-slate-950/20", children: "Fetching operative intel..." })
          : leaderboard.map((op, i) => s.jsxs("div", {
              className: "member-card",
              children: [
                s.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "12px" },
                  children: [
                    s.jsx("div", {
                      style: { 
                        color: i === 0 ? "#FFD700" : i === 1 ? "#C0C0C0" : i === 2 ? "#CD7F32" : "#8bb6d1",
                        fontWeight: "bold",
                        width: "24px",
                        textAlign: "center",
                        fontFamily: "Orbitron, sans-serif"
                      },
                      children: `#${i + 1}`
                    }),
                    s.jsx("div", {
                      className: "avatar",
                      children: Cr(op.username),
                    }),
                    s.jsx("a", { 
                      className: "name", 
                      href: `https://www.chess.com/member/${op.username}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { textDecoration: "none" },
                      children: op.username 
                    })
                  ]
                }),
                s.jsxs("div", { 
                  className: "badge blue", 
                  style: { display: "flex", alignItems: "center", gap: "4px" },
                  children: [
                    s.jsx("span", { style: { fontSize: "10px", opacity: 0.7 }, children: "Rapid Rating" }),
                    op.rating 
                  ] 
                })
              ]
            }, op.username))
      })
    ]
  });
}

function PuzzleOfTheDay() {
  return s.jsxs("section", {
    className: "module",
    children: [
      s.jsxs("div", {
        className: "section-head",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", { className: "kicker", children: "Training Module" }),
              s.jsx("h2", { className: "module-title", children: "Puzzle of the Day" })
            ]
          }),
          s.jsx("span", { className: "badge green", children: "Tactics" })
        ]
      }),
      s.jsx("div", {
        style: {
          background: "linear-gradient(135deg, rgba(7, 19, 35, 0.9), rgba(3, 7, 18, 0.9))",
          border: "1px solid rgba(25, 230, 255, 0.3)",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden"
        },
        children: s.jsx("iframe", {
          src: "https://lichess.org/training/frame?theme=brown&bg=dark",
          style: { width: "100%", maxWidth: "400px", aspectRatio: "10/11" },
          allowTransparency: "true",
          frameBorder: "0"
        })
      })
    ]
  });
}

function vm() {
  const [A, L] = ml.useState("00:00:00"),
    [w, v] = ml.useState("00:00:00"),
    [H, ll] = ml.useState("1,337"),
    [pl, Ul] = ml.useState("Pulling Chess.com club telemetry..."),
    [C, E] = ml.useState("Syncing"),
    [tl, q] = ml.useState(!0),
    [vl, Gl] = ml.useState(Lt.fallbackMembers),
    [Xl, Bl] = ml.useState([]),
    [Et, $l] = ml.useState([]),
    [rt, Cl] = ml.useState([]),
    [Fl, ht] = ml.useState(""),
    [Ql, W] = ml.useState(1),
    [Zl, At] = ml.useState(1),
    [Wt, mt] = ml.useState(""),
    [Il, Nt] = ml.useState("Deploy this link to recruit new operatives."),
    S = ml.useRef(null);
  const [currentUid, setCurrentUid] = ml.useState(null);
  (ml.useRef(null),
    ml.useEffect(() => {
      if (!window.firebaseDb) return;
      if (window.firebaseAuth) {
        window.firebaseOnAuthStateChanged(window.firebaseAuth, function(user) {
          if (user) setCurrentUid(user.uid);
        });
      }
      const un = window.firebaseOnSnapshot(window.firebaseCollection(window.firebaseDb, 'birthdays'), (snap) => {
        const bd = [];
        snap.forEach(d => bd.push(d.data()));
        bd.sort((N, D) => N.month - D.month || N.day - D.day);
        Cl(bd);
      });
      return () => { if (un) un(); };
    }, []),
    ml.useEffect(() => {
      const g = () => {
        const D = new Date(),
          J = new Date(D.getTime() + D.getTimezoneOffset() * 6e4),
          X = new Date(J.getTime() + 5.5 * 36e5),
          bl = (Ll) =>
            [
              String(Ll.getHours()).padStart(2, "0"),
              String(Ll.getMinutes()).padStart(2, "0"),
              String(Ll.getSeconds()).padStart(2, "0"),
            ].join(":");
        const u = document.getElementById("utcClock");
        if(u) u.innerText = bl(J);
        const i = document.getElementById("istClock");
        if(i) i.innerText = bl(X);
      };
      g();
      const N = setInterval(g, 1e3);
      return () => clearInterval(N);
    }, []));
  const G = (g) => {
      const N = S.current;
      if (!N) return;
      if (N._af) return;
      N._af = requestAnimationFrame(() => {
        const J = Math.max(0, Math.min(100, (g.clientX / window.innerWidth) * 100)),
          X = Math.max(0, Math.min(100, (g.clientY / window.innerHeight) * 100));
        N.style.setProperty("--mx", `${J}%`);
        N.style.setProperty("--my", `${X}%`);
        N._af = null;
      });
    },
    nl = () => {
      const g = S.current;
      g &&
        (g.style.setProperty("--mx", "50%"),
        g.style.setProperty("--my", "18%"));
    };
  ml.useEffect(() => {
      async function g() {
        try {
          const N = Ze(`https://api.chess.com/pub/club/${Tf}`),
            D = Ze(`https://api.chess.com/pub/club/${Tf}/members`, 7500),
            J = await Promise.allSettled([N, D]),
            X = J[0].status === "fulfilled" ? J[0].value : {};
          let bl = J[1].status === "fulfilled" ? J[1].value : {},
            Ll = J[1].status === "fulfilled" && !(bl != null && bl.error);
          const tt = {};
          ["weekly", "monthly", "all_time"].forEach((Ml) => {
            Array.isArray(bl[Ml]) &&
              bl[Ml].forEach((cl) => {
                const Vl = cl == null ? void 0 : cl.username,
                  at = Vl == null ? void 0 : Vl.toLowerCase(),
                  Ya = Number(
                    (cl == null ? void 0 : cl.joined) ||
                      (cl == null ? void 0 : cl.joined_at) ||
                      (cl == null ? void 0 : cl.club_joined) ||
                      0,
                  );
                at &&
                  (!tt[at] || Ya > tt[at].joined) &&
                  (tt[at] = { username: Vl, joined: Ya });
              });
          });
          const Mt = Object.keys(tt)
              .map((Ml) => tt[Ml])
              .sort((Ml, cl) => cl.joined - Ml.joined),
            Q =
              X.members_count ||
              X.member_count ||
              Mt.length ||
              Lt.memberFallback;
          if ((ll(Rr(Q)), q(!1), Mt.length === 0)) {
            (Ul(
              Ll
                ? "Club count synced; members empty."
                : "Club count synced; reconnecting...",
            ),
              E(Ll ? "No joins" : "Partial"),
              Gl(Lt.fallbackMembers));
            return;
          }
          const xl = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          (Ul(`Latest club joins synced at ${xl}`), E("Synced"));
          const cached = localStorage.getItem("codex_newest_ops");
          if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < 1000 * 60 * 60 * 24) {
              Gl(data);
              return;
            }
          }
          const El = Mt.slice(0, 3),
            Pl = await Promise.all(
              El.map(async (Ml) => {
                const cl = {
                  username: Ml.username,
                  joined: Ml.joined,
                  avatar: "",
                  best: "N/A",
                };
                try {
                  const Vl = await Ze(
                    `https://api.chess.com/pub/player/${encodeURIComponent(Ml.username)}`,
                    5e3,
                  );
                  cl.avatar = (Vl == null ? void 0 : Vl.avatar) || "";
                } catch {}
                try {
                  const Vl = await Ze(
                    `https://api.chess.com/pub/player/${encodeURIComponent(Ml.username)}/stats`,
                    5e3,
                  );
                  let at = 0;
                  ([
                    ["chess_rapid", "last", "rating"],
                    ["chess_blitz", "last", "rating"],
                    ["chess_bullet", "last", "rating"],
                    ["chess_daily", "last", "rating"],
                    ["tactics", "highest", "rating"],
                    ["puzzle_rush", "best", "score"],
                  ].forEach((Rl) => {
                    let Gt = Vl;
                    (Rl.forEach((Ga) => {
                      Gt = Gt && Gt[Ga];
                    }),
                      typeof Gt == "number" && Gt > at && (at = Gt));
                  }),
                    (cl.best = at > 0 ? String(at) : "N/A"));
                } catch {}
                return cl;
              }),
            );
          Gl(Pl);
          localStorage.setItem("codex_newest_ops", JSON.stringify({ data: Pl, timestamp: Date.now() }));
        } catch {
          (ll(Rr(Lt.memberFallback)),
            q(!1),
            Ul("Fallback mesh active until API reconnects."),
            E("Fallback"),
            Gl(Lt.fallbackMembers));
        }
      }
      g();
    }, []),
    ml.useEffect(() => {
      async function g() {
        try {
          const N = await Ze(`https://api.chess.com/pub/club/${Tf}/matches`),
            D = (N.in_progress || []).slice(0, 2),
            J = (N.registered || []).slice(0, 2),
            X = async (Q, B) => {
              const xl =
                typeof Q == "string"
                  ? Q
                  : (Q == null ? void 0 : Q.url) ||
                    (Q == null ? void 0 : Q["@id"]);
              try {
                const El = xl ? await Ze(`${xl}`, 5e3) : Q,
                  Pl = (El == null ? void 0 : El.url) || Br(xl) || "";
                return {
                  title:
                    (El == null ? void 0 : El.name) ||
                    (El == null ? void 0 : El.title) ||
                    (Q == null ? void 0 : Q.name) ||
                    (B ? "Codex Live Arena" : "Codex Upcoming Tactical"),
                  status: B ? "LIVE" : "UPCOMING",
                  countdown: B
                    ? "Live now"
                    : Hr(
                        (El == null ? void 0 : El.start_time) ||
                          (Q == null ? void 0 : Q.start_time),
                      ),
                  url: Pl,
                };
              } catch {
                return {
                  title:
                    (Q == null ? void 0 : Q.name) ||
                    (B ? "Codex Live Arena" : "Codex Upcoming Tactical"),
                  status: B ? "LIVE" : "UPCOMING",
                  countdown: B
                    ? "Live now"
                    : Hr(Q == null ? void 0 : Q.start_time),
                  url: Br(xl) || "",
                };
              }
            },
            bl = await Promise.all(D.map((Q) => X(Q, !0))),
            Ll = await Promise.all(J.map((Q) => X(Q, !1))),
            tt = bl.filter(
              (Q) => Q.url && Q.url.trim().length > 0 && Q.url !== Yu,
            ),
            Mt = Ll.filter(
              (Q) => Q.url && Q.url.trim().length > 0 && Q.url !== Yu,
            );
          (Bl(tt.length > 0 ? tt : bl), $l(Mt.length > 0 ? Mt : Ll));
        } catch {
          (Bl([]), $l([]));
        }
      }
      g();
    }, []);
  const il = async () => {
      if (!Fl.trim()) return;
      
      const saveData = (uid) => {
        const idStr = Date.now().toString();
        const newBd = {
          id: idStr,
          userId: uid,
          user: Fl.trim(),
          day: Number(Ql),
          month: Number(Zl),
          note: Wt.trim(),
        };
        window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, 'birthdays', idStr), newBd).then(() => {
          ht(""); mt("");
        });
      };

      if (!currentUid) {
        try {
          const result = await window.signInAnonymously(window.firebaseAuth);
          const newUid = result.user.uid;
          setCurrentUid(newUid);
          saveData(newUid);
        } catch (error) {
          console.error("Auth error", error);
        }
      } else {
        saveData(currentUid);
      }
    },
    o = (g) => {
      window.firebaseDeleteDoc(window.firebaseDoc(window.firebaseDb, 'birthdays', String(g)));
    },
    x = () => {
      const fallbackCopy = () => {
        try {
          const t = document.createElement("textarea");
          t.value = Yu;
          t.style.position = "fixed";
          t.style.opacity = "0";
          document.body.appendChild(t);
          t.select();
          document.execCommand("copy");
          document.body.removeChild(t);
          Nt("Invite link copied to command clipboard.");
          setTimeout(() => Nt("Deploy this link to recruit new operatives."), 4e3);
        } catch (err) {
          Nt("Clipboard disabled. Copy link manually.");
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(Yu).then(() => {
          Nt("Invite link copied to command clipboard.");
          setTimeout(() => Nt("Deploy this link to recruit new operatives."), 4e3);
        }).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }
    },
    [_, O] = ml.useState(!1);
  return s.jsxs(s.Fragment, {
    children: [
      !_ && s.jsx(rm, { onInitialize: () => O(!0) }),
      s.jsx("div", {
        className:
          "w-full flex justify-center bg-[#030712] select-none",
        children: s.jsxs("div", {
          className: "codex-shell",
          id: "codexApp",
          ref: S,
          onPointerMove: G,
          onPointerLeave: nl,
          children: [
            s.jsxs("section", {
              className: "module hero",
              children: [
                s.jsx(DataMatrix, {}),
                s.jsxs("div", {
                  className: "hero-clock",
                  children: [
                    s.jsxs("div", {
                      className: "clock-card",
                      children: [
                        s.jsx("span", {
                          className: "timezone",
                          children: "UTC",
                        }),
                        s.jsx("span", {
                          className: "value",
                          id: "utcClock",
                          dangerouslySetInnerHTML: { __html: "00:00:00" }
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "clock-card",
                      children: [
                        s.jsx("span", {
                          className: "timezone",
                          children: "IST",
                        }),
                        s.jsx("span", {
                          className: "value",
                          id: "istClock",
                          dangerouslySetInnerHTML: { __html: "00:00:00" }
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "hero-content",
                  children: [
                    s.jsx("div", {
                      className: "hero-mark",
                      children: s.jsx("span", { children: "♛" }),
                    }),
                    s.jsx("div", {
                      className: "kicker",
                      children: "Futuristic Chess Command Center",
                    }),
                    s.jsx("h1", { children: "THE CODEX" }),
                    s.jsx("p", {
                      children:
                        "Elite operators. Tactical trials. Inferno discipline. Enter the underground command system built for serious chess warfare.",
                    }),
                    s.jsxs("div", {
                      className: "hero-row",
                      children: [
                        s.jsx("a", {
                          className: "btn purple", href: "https://docs.google.com/forms/d/e/1FAIpQLSfxu0EflVD-NL5dhbpETAbwsJnKEb_3bUwpYvBejHQe2XH-tA/viewform",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "Join Command",
                        }),
                        s.jsx("span", {
                          className: "chip",
                          children: "Live Ops",
                        }),
                        s.jsx("span", {
                          className: "chip",
                          children: "Trial Ready",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(QuoteOfTheDay, {}),
            s.jsxs("section", {
              className: "module",
              children: [
                s.jsxs("div", {
                  className: "section-head",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("div", {
                          className: "kicker",
                          children: "Member Count Module",
                        }),
                        s.jsx("h2", {
                          className: "module-title",
                          children: "Operative Network",
                        }),
                      ],
                    }),
                    s.jsx("span", {
                      className: "status-dot",
                      id: "memberSync",
                      children: C,
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "stat-card",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("div", {
                          className: `big-number ${tl ? "loading" : ""}`,
                          id: "memberCount",
                          children: H,
                        }),
                        s.jsx("div", {
                          className: "micro",
                          id: "memberMeta",
                          children: pl,
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "ring",
                      children: s.jsx("span", {}),
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(MemberRoadmap, { currentMembers: H }),
            s.jsxs("section", {
              className: "module",
              children: [
                s.jsxs("div", {
                  className: "section-head",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("div", {
                          className: "kicker",
                          children: "Newest Members Module",
                        }),
                        s.jsx("h2", {
                          className: "module-title",
                          children: "Fresh Recruits",
                        }),
                      ],
                    }),
                    s.jsx("span", {
                      className: "badge yellow",
                      children: "Top 3",
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "card-list",
                  id: "newestMembers",
                  children: vl.map((g, N) => {
                    const D = Cr(g.username);
                    return s.jsxs(
                      "div",
                      {
                        className: "member-card",
                        children: [
                          g.avatar
                            ? s.jsx("div", {
                                className: "avatar",
                                children: s.jsx("img", {
                                  alt: g.username,
                                  src: g.avatar,
                                }),
                              })
                            : s.jsx("div", {
                                className: "avatar",
                                children: D,
                              }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("div", {
                                className: "name",
                                children: g.username,
                              }),
                              s.jsxs("div", {
                                className: "meta",
                                children: [
                                  g.best !== "N/A"
                                    ? `Best rating: ${g.best}`
                                    : "Timestamp pending",
                                  g.joined ? ` - Joined ${mm(g.joined)}` : "",
                                ],
                              }),
                            ],
                          }),
                          s.jsx("span", {
                            className: "badge pink",
                            children: "New",
                          }),
                        ],
                      },
                      N,
                    );
                  }),
                }),
              ],
            }),
            s.jsxs("section", {
              className: "module",
              children: [
                s.jsxs("div", {
                  className: "section-head",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("div", {
                          className: "kicker",
                          children: "Birthday Module",
                        }),
                        s.jsx("h2", {
                          className: "module-title",
                          children: "Birthday Registry",
                        }),
                      ],
                    }),
                    s.jsx("span", { className: "badge", children: "Local" }),
                  ],
                }),
                s.jsxs("div", {
                  className: "form-grid",
                  children: [
                    s.jsx("input", {
                      className: "input",
                      id: "birthdayUser",
                      placeholder: "Username",
                      maxLength: 32,
                      value: Fl,
                      onChange: (g) => ht(g.target.value),
                    }),
                    s.jsxs("div", {
                      className: "two-col",
                      children: [
                        s.jsx("select", {
                          className: "select",
                          id: "birthdayDay",
                          value: Ql,
                          onChange: (g) => W(Number(g.target.value)),
                          children: Array.from(
                            { length: 31 },
                            (g, N) => N + 1,
                          ).map((g) =>
                            s.jsx("option", { value: g, children: g }, g),
                          ),
                        }),
                        s.jsx("select", {
                          className: "select",
                          id: "birthdayMonth",
                          value: Zl,
                          onChange: (g) => At(Number(g.target.value)),
                          children: Ur.map((g, N) =>
                            s.jsx("option", { value: N + 1, children: g }, N),
                          ),
                        }),
                      ],
                    }),
                    s.jsx("textarea", {
                      className: "textarea",
                      id: "birthdayNote",
                      placeholder: "Optional custom note",
                      maxLength: 90,
                      value: Wt,
                      onChange: (g) => mt(g.target.value),
                    }),
                    s.jsx("button", {
                      className: "btn green", id: "saveBirthday",
                      type: "button",
                      onClick: il,
                      children: "Save Birthday",
                    }),
                    s.jsx("div", {
                      className: "card-list scroll-zone mt-1",
                      id: "birthdayList",
                      children:
                        rt.length === 0
                          ? s.jsxs("div", {
                              className: "birthday-item",
                              children: [
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("div", {
                                      className: "name",
                                      children: "No birthdays tracked yet",
                                    }),
                                    s.jsx("div", {
                                      className: "meta",
                                      children:
                                        "Add an operative above to activate the registry.",
                                    }),
                                  ],
                                }),
                                s.jsx("span", {
                                  className: "badge green",
                                  children: "Ready",
                                }),
                              ],
                            })
                          : rt.map((g) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "birthday-item",
                                  children: [
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("div", {
                                          className: "name",
                                          children: g.user,
                                        }),
                                        s.jsxs("div", {
                                          className: "meta",
                                          children: [
                                            Ur[g.month - 1],
                                            " ",
                                            g.day,
                                            g.note ? ` - ${g.note}` : "",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (g.userId === currentUid && currentUid) ? s.jsx("button", {
                                      className: "icon-btn",
                                      style: { width: "28px", height: "28px" },
                                      onClick: () => o(g.id),
                                      type: "button",
                                      children: "x",
                                    }) : null,
                                  ],
                                },
                                g.id,
                              ),
                            ),
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(PuzzleOfTheDay, {}),
            s.jsxs("section", {
              className: "module",
              children: [
                s.jsxs("div", {
                  className: "section-head",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("div", {
                          className: "kicker",
                          children: "Events Module",
                        }),
                        s.jsx("h2", {
                          className: "module-title",
                          children: "Live Events",
                        }),
                      ],
                    }),
                    s.jsx("span", { className: "badge yellow", children: "API" }),
                  ],
                }),
                s.jsx("div", {
                  className: "card-list font-sans",
                  id: "liveEvents",
                  children:
                    Xl.length === 0
                      ? s.jsx("div", {
                          className:
                            "micro text-center py-4 text-slate-400 border border-slate-800/40 rounded-xl bg-slate-950/20",
                          children:
                            "⚡ Standing by // No live tactical matches detected with external urls.",
                        })
                      : Xl.map((g, N) =>
                          s.jsxs(
                            "div",
                            {
                              className: "event-card",
                              children: [
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("div", {
                                      className: "event-status",
                                      children: g.status,
                                    }),
                                    s.jsx("div", {
                                      className: "name",
                                      children: g.title,
                                    }),
                                    s.jsx("div", {
                                      className: "meta",
                                      children: g.countdown,
                                    }),
                                  ],
                                }),
                                s.jsx("a", {
                                  className: "btn purple", href: g.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "Open Live",
                                }),
                              ],
                            },
                            N,
                          ),
                        ),
                }),
                s.jsx("div", {
                  className: "section-head",
                  style: { marginTop: "12px" },
                  children: s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "kicker",
                        children: "Mission Queue",
                      }),
                      s.jsx("h2", {
                        className: "module-title",
                        children: "Upcoming Events",
                      }),
                    ],
                  }),
                }),
                s.jsx("div", {
                  className: "card-list font-sans",
                  id: "upcomingEvents",
                  children:
                    Et.length === 0
                      ? s.jsx("div", {
                          className:
                            "micro text-center py-4 text-slate-400 border border-slate-800/40 rounded-xl bg-slate-950/20",
                          children:
                            "⚡ Secure link pipeline check // No custom event links registered.",
                        })
                      : Et.map((g, N) =>
                          s.jsxs(
                            "div",
                            {
                              className: "event-card",
                              children: [
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("div", {
                                      className: "event-status upcoming",
                                      children: g.status,
                                    }),
                                    s.jsx("div", {
                                      className: "name",
                                      children: g.title,
                                    }),
                                    s.jsx("div", {
                                      className: "meta",
                                      children: g.countdown,
                                    }),
                                  ],
                                }),
                                s.jsx("a", {
                                  className: "btn purple", href: g.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "View Event",
                                }),
                              ],
                            },
                            N,
                          ),
                        ),
                }),
              ],
            }),
            s.jsxs("section", {
              className: "module",
              children: [
                s.jsx("div", {
                  className: "section-head",
                  children: s.jsxs("div", {
                    children: [
                      s.jsx("h2", {
                        className:
                          "text-[14px] font-bold text-slate-100 font-mono tracking-wider",
                        children: "🔗 COMMAND CORE",
                      }),
                      s.jsx("p", {
                        className: "small-text mt-1 font-sans",
                        children: "Navigation Grid ↓",
                      }),
                    ],
                  }),
                }),
                s.jsx("div", {
                  className: "command-core scroll-zone",
                  id: "commandCore",
                  children: Lt.commandCore.map((g, N) =>
                    s.jsx(
                      "a",
                      {
                        href: g.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: g.url.includes("protectors-of-the-codex")
                          ? "gold-link"
                          : "",
                        children: s.jsx("span", { children: g.title }),
                      },
                      N,
                    ),
                  ),
                }),
              ],
            }),
            s.jsxs("section", {
              className: "module flex flex-col gap-3",
              id: "musicModule",
              style: { padding: 0, overflow: "hidden" },
              children: [
                s.jsx(YouTubeMusicPlayer, {}),
              ],
            }),
            s.jsx(TopOperativesLeaderboard, {}),
            s.jsxs("section", {
              className: "module",
              children: [
                s.jsxs("div", {
                  className: "section-head",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("div", {
                          className: "kicker",
                          children: "Titled Operatives Module",
                        }),
                        s.jsx("h2", {
                          className: "module-title",
                          children: "Titled Operatives",
                        }),
                      ],
                    }),
                    s.jsx("span", {
                      className: "badge purple",
                      children: "Elite",
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "x-scroll scroll-zone",
                  id: "titledOperatives",
                  children: Lt.titled.map((g, N) =>
                    s.jsxs(
                      "div",
                      {
                        className: "title-card flex shrink-0",
                        children: [
                          s.jsx("div", {
                            className: "avatar",
                            children: g.title,
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("div", {
                                className: "badge blue",
                                style: { padding: "2px 4px", fontSize: "8px" },
                                children: g.title,
                              }),
                              s.jsx("div", {
                                className: "name mt-1",
                                children: g.user,
                              }),
                              s.jsx("div", {
                                className: "meta",
                                children: g.rating,
                              }),
                            ],
                          }),
                        ],
                      },
                      N,
                    ),
                  ),
                }),
              ],
            }),
            s.jsx("div", {
              className: "divider",
              children: s.jsx("div", { className: "scan-line" }),
            }),
            s.jsxs("section", {
              className: "module",
              children: [
                s.jsxs("div", {
                  className: "section-head",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("div", {
                          className: "kicker",
                          children: "Command Centre Module",
                        }),
                        s.jsx("h2", {
                          className: "module-title",
                          children: "Admin Command",
                        }),
                      ],
                    }),
                    s.jsx("span", {
                      className: "badge green",
                      children: "Staff",
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "x-scroll scroll-zone",
                  id: "commandCentre",
                  children: Lt.command.map((g, N) =>
                    s.jsxs(
                      "a",
                      {
                        className: "role-card flex shrink-0",
                        href: hm(g.profileUser || g.user),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          s.jsx("div", {
                            className: "avatar",
                            children: Cr(g.user),
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("div", {
                                className: "badge blue",
                                style: { padding: "2px 4px", fontSize: "8px" },
                                children: g.badge,
                              }),
                              s.jsx("div", {
                                className: "name mt-0.5",
                                children: g.user,
                              }),
                              s.jsx("div", {
                                className: "meta",
                                children: g.role,
                              }),
                            ],
                          }),
                        ],
                      },
                      N,
                    ),
                  ),
                }),
              ],
            }),
            s.jsxs("section", {
              className: "module",
              children: [
                s.jsxs("div", {
                  className: "section-head",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("div", {
                          className: "kicker",
                          children: "Invite Operative Module",
                        }),
                        s.jsx("h2", {
                          className: "module-title",
                          children: "Recruitment Link",
                        }),
                      ],
                    }),
                    s.jsx("span", { className: "badge", children: "Copy" }),
                  ],
                }),
                s.jsxs("div", {
                  className: "invite-box",
                  children: [
                    s.jsx("div", {
                      className: "invite-link",
                      id: "inviteLink",
                      children: Yu,
                    }),
                    s.jsx("button", {
                      className: "btn green", id: "copyInvite",
                      type: "button",
                      onClick: x,
                      children: "Copy",
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "micro",
                  id: "copyStatus",
                  style: { marginTop: "8px" },
                  children: Il,
                }),
              ],
            }),
            s.jsxs("footer", {
              className: "footer",
              children: [
                s.jsx("div", { className: "footer-line" }),
                s.jsx("div", {
                  style: {
                    color: "#a0aec0",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    textAlign: "center",
                    marginBottom: "8px",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase"
                  },
                  children: "sidebar version 5.0.0"
                }),
                s.jsxs("div", {
                  className: "footer-content",
                  children: [
                    s.jsx("span", {
                      className: "footer-logo",
                      style: {
                        color: "var(--cyan)",
                        textShadow: "0 0 10px var(--cyan)",
                      },
                      children: "⎈",
                    }),
                    s.jsxs("span", {
                      className: "footer-title",
                      style: {
                        background: "linear-gradient(90deg, #FF0080 0%, #7928CA 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "2px",
                        fontSize: "14px",
                        fontWeight: "900",
                        textShadow: "0 0 20px rgba(255, 0, 128, 0.5)",
                        textTransform: "uppercase",
                        margin: "0 10px"
                      },
                      children: [
                         "UI Systems by ",
                         s.jsx("span", {style:{color:"#fff", WebkitTextFillColor:"#fff"}, children: "codex_S1"}),
                         "."
                      ],
                    }),
                    s.jsx("span", {
                      className: "footer-status",
                      children: "ONLINE // HUD VERIFIED",
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "footer-sub",
                  children:
                    "CLUB PORTAL SYSTEM v4.95 // LIVE OPERATION NODES SECURED",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
om.createRoot(document.getElementById("root")).render(
  s.jsx(ml.StrictMode, { children: s.jsx(vm, {}) }),
);


// 3D Tilt Effect
document.addEventListener('mousemove', (e) => {
  const card = e.target.closest('.module, .clock-card, .stat-card, .member-card, .champion, .role-card, .partner-card, .title-card');
  if (!card) return;
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  card.style.transform = 'perspective(900px) rotateY(' + (x * 12) + 'deg) rotateX(' + (-y * 12) + 'deg) translateZ(8px)';
  card.style.transition = 'box-shadow 0.3s, border-color 1.2s, transform 0.1s ease-out';
  card.style.transformStyle = 'preserve-3d';
  
  if (!card.dataset.tiltInit) {
    card.dataset.tiltInit = 'true';
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
      card.style.transition = 'box-shadow 0.3s, border-color 1.2s, transform 0.3s ease-out';
    });
  }
});
