var If = Object.defineProperty;
var jf = (e, t, n) =>
  t in e
    ? If(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var G = (e, t, n) => jf(e, typeof t != 'symbol' ? t + '' : t, n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Za = { exports: {} },
  fo = {},
  Ja = { exports: {} },
  P = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for('react.element'),
  Ff = Symbol.for('react.portal'),
  Bf = Symbol.for('react.fragment'),
  Uf = Symbol.for('react.strict_mode'),
  Hf = Symbol.for('react.profiler'),
  $f = Symbol.for('react.provider'),
  Vf = Symbol.for('react.context'),
  Wf = Symbol.for('react.forward_ref'),
  Kf = Symbol.for('react.suspense'),
  Qf = Symbol.for('react.memo'),
  Yf = Symbol.for('react.lazy'),
  Cs = Symbol.iterator;
function Xf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Cs && e[Cs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var qa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ba = Object.assign,
  ec = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || qa);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function tc() {}
tc.prototype = Qn.prototype;
function du(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || qa);
}
var fu = (du.prototype = new tc());
fu.constructor = du;
ba(fu, Qn.prototype);
fu.isPureReactComponent = !0;
var Ns = Array.isArray,
  nc = Object.prototype.hasOwnProperty,
  pu = { current: null },
  rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      nc.call(t, r) && !rc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: pu.current,
  };
}
function Gf(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Qr;
}
function Zf(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Rs = /\/+/g;
function Io(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Zf('' + e.key)
    : t.toString(36);
}
function Cl(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Qr:
          case Ff:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Io(i, 0) : r),
      Ns(l)
        ? ((n = ''),
          e != null && (n = e.replace(Rs, '$&/') + '/'),
          Cl(l, t, n, '', function (a) {
            return a;
          }))
        : l != null &&
          (hu(l) &&
            (l = Gf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Rs, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Ns(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Io(o, u);
      i += Cl(o, t, n, s, l);
    }
  else if (((s = Xf(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Io(o, u++)), (i += Cl(o, t, n, s, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function il(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Cl(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Jf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var we = { current: null },
  Nl = { transition: null },
  qf = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Nl,
    ReactCurrentOwner: pu,
  };
function oc() {
  throw Error('act(...) is not supported in production builds of React.');
}
P.Children = {
  map: il,
  forEach: function (e, t, n) {
    il(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      il(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      il(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
P.Component = Qn;
P.Fragment = Bf;
P.Profiler = Hf;
P.PureComponent = du;
P.StrictMode = Uf;
P.Suspense = Kf;
P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qf;
P.act = oc;
P.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = ba({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = pu.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      nc.call(t, s) &&
        !rc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Qr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
P.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $f, _context: e }),
    (e.Consumer = e)
  );
};
P.createElement = lc;
P.createFactory = function (e) {
  var t = lc.bind(null, e);
  return (t.type = e), t;
};
P.createRef = function () {
  return { current: null };
};
P.forwardRef = function (e) {
  return { $$typeof: Wf, render: e };
};
P.isValidElement = hu;
P.lazy = function (e) {
  return { $$typeof: Yf, _payload: { _status: -1, _result: e }, _init: Jf };
};
P.memo = function (e, t) {
  return { $$typeof: Qf, type: e, compare: t === void 0 ? null : t };
};
P.startTransition = function (e) {
  var t = Nl.transition;
  Nl.transition = {};
  try {
    e();
  } finally {
    Nl.transition = t;
  }
};
P.unstable_act = oc;
P.useCallback = function (e, t) {
  return we.current.useCallback(e, t);
};
P.useContext = function (e) {
  return we.current.useContext(e);
};
P.useDebugValue = function () {};
P.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e);
};
P.useEffect = function (e, t) {
  return we.current.useEffect(e, t);
};
P.useId = function () {
  return we.current.useId();
};
P.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
P.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t);
};
P.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t);
};
P.useMemo = function (e, t) {
  return we.current.useMemo(e, t);
};
P.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n);
};
P.useRef = function (e) {
  return we.current.useRef(e);
};
P.useState = function (e) {
  return we.current.useState(e);
};
P.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
P.useTransition = function () {
  return we.current.useTransition();
};
P.version = '18.3.1';
Ja.exports = P;
var m = Ja.exports;
const Ue = Af(m);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bf = m,
  ep = Symbol.for('react.element'),
  tp = Symbol.for('react.fragment'),
  np = Object.prototype.hasOwnProperty,
  rp = bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) np.call(t, r) && !lp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: ep,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: rp.current,
  };
}
fo.Fragment = tp;
fo.jsx = ic;
fo.jsxs = ic;
Za.exports = fo;
var j = Za.exports,
  uc = { exports: {} },
  Ie = {},
  sc = { exports: {} },
  ac = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, M) {
    var z = R.length;
    R.push(M);
    e: for (; 0 < z; ) {
      var V = (z - 1) >>> 1,
        F = R[V];
      if (0 < l(F, M)) (R[V] = M), (R[z] = F), (z = V);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var M = R[0],
      z = R.pop();
    if (z !== M) {
      R[0] = z;
      e: for (var V = 0, F = R.length, Xe = F >>> 1; V < Xe; ) {
        var Ae = 2 * (V + 1) - 1,
          hn = R[Ae],
          b = Ae + 1,
          Yt = R[b];
        if (0 > l(hn, z))
          b < F && 0 > l(Yt, hn)
            ? ((R[V] = Yt), (R[b] = z), (V = b))
            : ((R[V] = hn), (R[Ae] = z), (V = Ae));
        else if (b < F && 0 > l(Yt, z)) (R[V] = Yt), (R[b] = z), (V = b);
        else break e;
      }
    }
    return M;
  }
  function l(R, M) {
    var z = R.sortIndex - M.sortIndex;
    return z !== 0 ? z : R.id - M.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    v = 3,
    g = !1,
    S = !1,
    y = !1,
    _ = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(R) {
    for (var M = n(a); M !== null; ) {
      if (M.callback === null) r(a);
      else if (M.startTime <= R)
        r(a), (M.sortIndex = M.expirationTime), t(s, M);
      else break;
      M = n(a);
    }
  }
  function w(R) {
    if (((y = !1), f(R), !S))
      if (n(s) !== null) (S = !0), pn(k);
      else {
        var M = n(a);
        M !== null && De(w, M.startTime - R);
      }
  }
  function k(R, M) {
    (S = !1), y && ((y = !1), d(C), (C = -1)), (g = !0);
    var z = v;
    try {
      for (
        f(M), p = n(s);
        p !== null && (!(p.expirationTime > M) || (R && !I()));

      ) {
        var V = p.callback;
        if (typeof V == 'function') {
          (p.callback = null), (v = p.priorityLevel);
          var F = V(p.expirationTime <= M);
          (M = e.unstable_now()),
            typeof F == 'function' ? (p.callback = F) : p === n(s) && r(s),
            f(M);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var Xe = !0;
      else {
        var Ae = n(a);
        Ae !== null && De(w, Ae.startTime - M), (Xe = !1);
      }
      return Xe;
    } finally {
      (p = null), (v = z), (g = !1);
    }
  }
  var N = !1,
    E = null,
    C = -1,
    T = 5,
    L = -1;
  function I() {
    return !(e.unstable_now() - L < T);
  }
  function ve() {
    if (E !== null) {
      var R = e.unstable_now();
      L = R;
      var M = !0;
      try {
        M = E(!0, R);
      } finally {
        M ? ge() : ((N = !1), (E = null));
      }
    } else N = !1;
  }
  var ge;
  if (typeof c == 'function')
    ge = function () {
      c(ve);
    };
  else if (typeof MessageChannel < 'u') {
    var Ye = new MessageChannel(),
      el = Ye.port2;
    (Ye.port1.onmessage = ve),
      (ge = function () {
        el.postMessage(null);
      });
  } else
    ge = function () {
      _(ve, 0);
    };
  function pn(R) {
    (E = R), N || ((N = !0), ge());
  }
  function De(R, M) {
    C = _(function () {
      R(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || g || ((S = !0), pn(k));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (R) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = v;
      }
      var z = v;
      v = M;
      try {
        return R();
      } finally {
        v = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, M) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var z = v;
      v = R;
      try {
        return M();
      } finally {
        v = z;
      }
    }),
    (e.unstable_scheduleCallback = function (R, M, z) {
      var V = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? V + z : V))
          : (z = V),
        R)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = z + F),
        (R = {
          id: h++,
          callback: M,
          priorityLevel: R,
          startTime: z,
          expirationTime: F,
          sortIndex: -1,
        }),
        z > V
          ? ((R.sortIndex = z),
            t(a, R),
            n(s) === null &&
              R === n(a) &&
              (y ? (d(C), (C = -1)) : (y = !0), De(w, z - V)))
          : ((R.sortIndex = F), t(s, R), S || g || ((S = !0), pn(k))),
        R
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (R) {
      var M = v;
      return function () {
        var z = v;
        v = M;
        try {
          return R.apply(this, arguments);
        } finally {
          v = z;
        }
      };
    });
})(ac);
sc.exports = ac;
var op = sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = m,
  Oe = op;
function x(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var cc = new Set(),
  Dr = {};
function cn(e, t) {
  Bn(e, t), Bn(e + 'Capture', t);
}
function Bn(e, t) {
  for (Dr[e] = t, e = 0; e < t.length; e++) cc.add(t[e]);
}
var mt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  pi = Object.prototype.hasOwnProperty,
  up =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ds = {},
  _s = {};
function sp(e) {
  return pi.call(_s, e)
    ? !0
    : pi.call(Ds, e)
      ? !1
      : up.test(e)
        ? (_s[e] = !0)
        : ((Ds[e] = !0), !1);
}
function ap(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function cp(e, t, n, r) {
  if (t === null || typeof t > 'u' || ap(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ce = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ce[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ce[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ce[e] = new Se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ce[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ce[e] = new Se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ce[e] = new Se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ce[e] = new Se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ce[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vu = /[\-:]([a-z])/g;
function gu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(vu, gu);
    ce[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(vu, gu);
    ce[t] = new Se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(vu, gu);
  ce[t] = new Se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mu(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (cp(t, n, l, r) && (n = null),
    r || l === null
      ? sp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ul = Symbol.for('react.element'),
  Sn = Symbol.for('react.portal'),
  xn = Symbol.for('react.fragment'),
  yu = Symbol.for('react.strict_mode'),
  hi = Symbol.for('react.profiler'),
  dc = Symbol.for('react.provider'),
  fc = Symbol.for('react.context'),
  wu = Symbol.for('react.forward_ref'),
  vi = Symbol.for('react.suspense'),
  gi = Symbol.for('react.suspense_list'),
  Su = Symbol.for('react.memo'),
  Dt = Symbol.for('react.lazy'),
  pc = Symbol.for('react.offscreen'),
  Ls = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ls && e[Ls]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var X = Object.assign,
  jo;
function dr(e) {
  if (jo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jo = (t && t[1]) || '';
    }
  return (
    `
` +
    jo +
    e
  );
}
var Ao = !1;
function Fo(e, t) {
  if (!e || Ao) return '';
  Ao = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Ao = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? dr(e) : '';
}
function dp(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr('Lazy');
    case 13:
      return dr('Suspense');
    case 19:
      return dr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Fo(e.type, !1)), e;
    case 11:
      return (e = Fo(e.type.render, !1)), e;
    case 1:
      return (e = Fo(e.type, !0)), e;
    default:
      return '';
  }
}
function mi(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case xn:
      return 'Fragment';
    case Sn:
      return 'Portal';
    case hi:
      return 'Profiler';
    case yu:
      return 'StrictMode';
    case vi:
      return 'Suspense';
    case gi:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case fc:
        return (e.displayName || 'Context') + '.Consumer';
      case dc:
        return (e._context.displayName || 'Context') + '.Provider';
      case wu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Su:
        return (
          (t = e.displayName || null), t !== null ? t : mi(e.type) || 'Memo'
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return mi(e(t));
        } catch {}
    }
  return null;
}
function fp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return mi(t);
    case 8:
      return t === yu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function hc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function pp(e) {
  var t = hc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function sl(e) {
  e._valueTracker || (e._valueTracker = pp(e));
}
function vc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = hc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Al(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yi(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ms(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function gc(e, t) {
  (t = t.checked), t != null && mu(e, 'checked', t, !1);
}
function wi(e, t) {
  gc(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Si(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Si(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zs(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Si(e, t, n) {
  (t !== 'number' || Al(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var fr = Array.isArray;
function Tn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function xi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ts(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function mc(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ps(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function yc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ki(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? yc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var al,
  wc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        al = al || document.createElement('div'),
          al.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = al.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
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
    strokeWidth: !0,
  },
  hp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(vr).forEach(function (e) {
  hp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vr[t] = vr[e]);
  });
});
function Sc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (vr.hasOwnProperty(e) && vr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function xc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Sc(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var vp = X(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Ei(e, t) {
  if (t) {
    if (vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(x(62));
  }
}
function Ci(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Ni = null;
function xu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ri = null,
  Pn = null,
  On = null;
function Os(e) {
  if ((e = Gr(e))) {
    if (typeof Ri != 'function') throw Error(x(280));
    var t = e.stateNode;
    t && ((t = mo(t)), Ri(e.stateNode, e.type, t));
  }
}
function kc(e) {
  Pn ? (On ? On.push(e) : (On = [e])) : (Pn = e);
}
function Ec() {
  if (Pn) {
    var e = Pn,
      t = On;
    if (((On = Pn = null), Os(e), t)) for (e = 0; e < t.length; e++) Os(t[e]);
  }
}
function Cc(e, t) {
  return e(t);
}
function Nc() {}
var Bo = !1;
function Rc(e, t, n) {
  if (Bo) return e(t, n);
  Bo = !0;
  try {
    return Cc(e, t, n);
  } finally {
    (Bo = !1), (Pn !== null || On !== null) && (Nc(), Ec());
  }
}
function Lr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = mo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(x(231, t, typeof n));
  return n;
}
var Di = !1;
if (mt)
  try {
    var lr = {};
    Object.defineProperty(lr, 'passive', {
      get: function () {
        Di = !0;
      },
    }),
      window.addEventListener('test', lr, lr),
      window.removeEventListener('test', lr, lr);
  } catch {
    Di = !1;
  }
function gp(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var gr = !1,
  Fl = null,
  Bl = !1,
  _i = null,
  mp = {
    onError: function (e) {
      (gr = !0), (Fl = e);
    },
  };
function yp(e, t, n, r, l, o, i, u, s) {
  (gr = !1), (Fl = null), gp.apply(mp, arguments);
}
function wp(e, t, n, r, l, o, i, u, s) {
  if ((yp.apply(this, arguments), gr)) {
    if (gr) {
      var a = Fl;
      (gr = !1), (Fl = null);
    } else throw Error(x(198));
    Bl || ((Bl = !0), (_i = a));
  }
}
function dn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Dc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Is(e) {
  if (dn(e) !== e) throw Error(x(188));
}
function Sp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dn(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Is(l), e;
        if (o === r) return Is(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function _c(e) {
  return (e = Sp(e)), e !== null ? Lc(e) : null;
}
function Lc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mc = Oe.unstable_scheduleCallback,
  js = Oe.unstable_cancelCallback,
  xp = Oe.unstable_shouldYield,
  kp = Oe.unstable_requestPaint,
  J = Oe.unstable_now,
  Ep = Oe.unstable_getCurrentPriorityLevel,
  ku = Oe.unstable_ImmediatePriority,
  zc = Oe.unstable_UserBlockingPriority,
  Ul = Oe.unstable_NormalPriority,
  Cp = Oe.unstable_LowPriority,
  Tc = Oe.unstable_IdlePriority,
  po = null,
  ct = null;
function Np(e) {
  if (ct && typeof ct.onCommitFiberRoot == 'function')
    try {
      ct.onCommitFiberRoot(po, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : _p,
  Rp = Math.log,
  Dp = Math.LN2;
function _p(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rp(e) / Dp) | 0)) | 0;
}
var cl = 64,
  dl = 4194304;
function pr(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = pr(u)) : ((o &= i), o !== 0 && (r = pr(o)));
  } else (i = n & ~l), i !== 0 ? (r = pr(i)) : o !== 0 && (r = pr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Lp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Mp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - nt(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Lp(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Li(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pc() {
  var e = cl;
  return (cl <<= 1), !(cl & 4194240) && (cl = 64), e;
}
function Uo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nt(t)),
    (e[t] = n);
}
function zp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - nt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Eu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var A = 0;
function Oc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ic,
  Cu,
  jc,
  Ac,
  Fc,
  Mi = !1,
  fl = [],
  Ot = null,
  It = null,
  jt = null,
  Mr = new Map(),
  zr = new Map(),
  Mt = [],
  Tp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function As(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ot = null;
      break;
    case 'dragenter':
    case 'dragleave':
      It = null;
      break;
    case 'mouseover':
    case 'mouseout':
      jt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Mr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      zr.delete(t.pointerId);
  }
}
function or(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Gr(t)), t !== null && Cu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Pp(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (Ot = or(Ot, e, t, n, r, l)), !0;
    case 'dragenter':
      return (It = or(It, e, t, n, r, l)), !0;
    case 'mouseover':
      return (jt = or(jt, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return Mr.set(o, or(Mr.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), zr.set(o, or(zr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Bc(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Dc(n)), t !== null)) {
          (e.blockedOn = t),
            Fc(e.priority, function () {
              jc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ni = r), n.target.dispatchEvent(r), (Ni = null);
    } else return (t = Gr(n)), t !== null && Cu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Fs(e, t, n) {
  Rl(e) && n.delete(t);
}
function Op() {
  (Mi = !1),
    Ot !== null && Rl(Ot) && (Ot = null),
    It !== null && Rl(It) && (It = null),
    jt !== null && Rl(jt) && (jt = null),
    Mr.forEach(Fs),
    zr.forEach(Fs);
}
function ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mi ||
      ((Mi = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Op)));
}
function Tr(e) {
  function t(l) {
    return ir(l, e);
  }
  if (0 < fl.length) {
    ir(fl[0], e);
    for (var n = 1; n < fl.length; n++) {
      var r = fl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ot !== null && ir(Ot, e),
      It !== null && ir(It, e),
      jt !== null && ir(jt, e),
      Mr.forEach(t),
      zr.forEach(t),
      n = 0;
    n < Mt.length;
    n++
  )
    (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
    Bc(n), n.blockedOn === null && Mt.shift();
}
var In = kt.ReactCurrentBatchConfig,
  $l = !0;
function Ip(e, t, n, r) {
  var l = A,
    o = In.transition;
  In.transition = null;
  try {
    (A = 1), Nu(e, t, n, r);
  } finally {
    (A = l), (In.transition = o);
  }
}
function jp(e, t, n, r) {
  var l = A,
    o = In.transition;
  In.transition = null;
  try {
    (A = 4), Nu(e, t, n, r);
  } finally {
    (A = l), (In.transition = o);
  }
}
function Nu(e, t, n, r) {
  if ($l) {
    var l = zi(e, t, n, r);
    if (l === null) Zo(e, t, r, Vl, n), As(e, r);
    else if (Pp(l, e, t, n, r)) r.stopPropagation();
    else if ((As(e, r), t & 4 && -1 < Tp.indexOf(e))) {
      for (; l !== null; ) {
        var o = Gr(l);
        if (
          (o !== null && Ic(o),
          (o = zi(e, t, n, r)),
          o === null && Zo(e, t, r, Vl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Zo(e, t, r, null, n);
  }
}
var Vl = null;
function zi(e, t, n, r) {
  if (((Vl = null), (e = xu(r)), (e = bt(e)), e !== null))
    if (((t = dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Dc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vl = e), null;
}
function Uc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Ep()) {
        case ku:
          return 1;
        case zc:
          return 4;
        case Ul:
        case Cp:
          return 16;
        case Tc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  Ru = null,
  Dl = null;
function Hc() {
  if (Dl) return Dl;
  var e,
    t = Ru,
    n = t.length,
    r,
    l = 'value' in Tt ? Tt.value : Tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Dl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _l(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pl() {
  return !0;
}
function Bs() {
  return !1;
}
function je(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pl
        : Bs),
      (this.isPropagationStopped = Bs),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = pl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = pl));
      },
      persist: function () {},
      isPersistent: pl,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Du = je(Yn),
  Xr = X({}, Yn, { view: 0, detail: 0 }),
  Ap = je(Xr),
  Ho,
  $o,
  ur,
  ho = X({}, Xr, {
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
    getModifierState: _u,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ur &&
            (ur && e.type === 'mousemove'
              ? ((Ho = e.screenX - ur.screenX), ($o = e.screenY - ur.screenY))
              : ($o = Ho = 0),
            (ur = e)),
          Ho);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : $o;
    },
  }),
  Us = je(ho),
  Fp = X({}, ho, { dataTransfer: 0 }),
  Bp = je(Fp),
  Up = X({}, Xr, { relatedTarget: 0 }),
  Vo = je(Up),
  Hp = X({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $p = je(Hp),
  Vp = X({}, Yn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wp = je(Vp),
  Kp = X({}, Yn, { data: 0 }),
  Hs = je(Kp),
  Qp = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Yp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Xp = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Gp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xp[e]) ? !!t[e] : !1;
}
function _u() {
  return Gp;
}
var Zp = X({}, Xr, {
    key: function (e) {
      if (e.key) {
        var t = Qp[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = _l(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Yp[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _u,
    charCode: function (e) {
      return e.type === 'keypress' ? _l(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? _l(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Jp = je(Zp),
  qp = X({}, ho, {
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
  $s = je(qp),
  bp = X({}, Xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _u,
  }),
  eh = je(bp),
  th = X({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nh = je(th),
  rh = X({}, ho, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  lh = je(rh),
  oh = [9, 13, 27, 32],
  Lu = mt && 'CompositionEvent' in window,
  mr = null;
mt && 'documentMode' in document && (mr = document.documentMode);
var ih = mt && 'TextEvent' in window && !mr,
  $c = mt && (!Lu || (mr && 8 < mr && 11 >= mr)),
  Vs = ' ',
  Ws = !1;
function Vc(e, t) {
  switch (e) {
    case 'keyup':
      return oh.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Wc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var kn = !1;
function uh(e, t) {
  switch (e) {
    case 'compositionend':
      return Wc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Ws = !0), Vs);
    case 'textInput':
      return (e = t.data), e === Vs && Ws ? null : e;
    default:
      return null;
  }
}
function sh(e, t) {
  if (kn)
    return e === 'compositionend' || (!Lu && Vc(e, t))
      ? ((e = Hc()), (Dl = Ru = Tt = null), (kn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return $c && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var ah = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function Ks(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!ah[e.type] : t === 'textarea';
}
function Kc(e, t, n, r) {
  kc(r),
    (t = Wl(t, 'onChange')),
    0 < t.length &&
      ((n = new Du('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yr = null,
  Pr = null;
function ch(e) {
  nd(e, 0);
}
function vo(e) {
  var t = Nn(e);
  if (vc(t)) return e;
}
function dh(e, t) {
  if (e === 'change') return t;
}
var Qc = !1;
if (mt) {
  var Wo;
  if (mt) {
    var Ko = 'oninput' in document;
    if (!Ko) {
      var Qs = document.createElement('div');
      Qs.setAttribute('oninput', 'return;'),
        (Ko = typeof Qs.oninput == 'function');
    }
    Wo = Ko;
  } else Wo = !1;
  Qc = Wo && (!document.documentMode || 9 < document.documentMode);
}
function Ys() {
  yr && (yr.detachEvent('onpropertychange', Yc), (Pr = yr = null));
}
function Yc(e) {
  if (e.propertyName === 'value' && vo(Pr)) {
    var t = [];
    Kc(t, Pr, e, xu(e)), Rc(ch, t);
  }
}
function fh(e, t, n) {
  e === 'focusin'
    ? (Ys(), (yr = t), (Pr = n), yr.attachEvent('onpropertychange', Yc))
    : e === 'focusout' && Ys();
}
function ph(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return vo(Pr);
}
function hh(e, t) {
  if (e === 'click') return vo(t);
}
function vh(e, t) {
  if (e === 'input' || e === 'change') return vo(t);
}
function gh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == 'function' ? Object.is : gh;
function Or(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!pi.call(t, l) || !lt(e[l], t[l])) return !1;
  }
  return !0;
}
function Xs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gs(e, t) {
  var n = Xs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xs(n);
  }
}
function Xc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Xc(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Gc() {
  for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Al(e.document);
  }
  return t;
}
function Mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function mh(e) {
  var t = Gc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Mu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Gs(n, o));
        var i = Gs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var yh = mt && 'documentMode' in document && 11 >= document.documentMode,
  En = null,
  Ti = null,
  wr = null,
  Pi = !1;
function Zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pi ||
    En == null ||
    En !== Al(r) ||
    ((r = En),
    'selectionStart' in r && Mu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && Or(wr, r)) ||
      ((wr = r),
      (r = Wl(Ti, 'onSelect')),
      0 < r.length &&
        ((t = new Du('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = En))));
}
function hl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Cn = {
    animationend: hl('Animation', 'AnimationEnd'),
    animationiteration: hl('Animation', 'AnimationIteration'),
    animationstart: hl('Animation', 'AnimationStart'),
    transitionend: hl('Transition', 'TransitionEnd'),
  },
  Qo = {},
  Zc = {};
mt &&
  ((Zc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  'TransitionEvent' in window || delete Cn.transitionend.transition);
function go(e) {
  if (Qo[e]) return Qo[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zc) return (Qo[e] = t[n]);
  return e;
}
var Jc = go('animationend'),
  qc = go('animationiteration'),
  bc = go('animationstart'),
  ed = go('transitionend'),
  td = new Map(),
  Js =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Wt(e, t) {
  td.set(e, t), cn(t, [e]);
}
for (var Yo = 0; Yo < Js.length; Yo++) {
  var Xo = Js[Yo],
    wh = Xo.toLowerCase(),
    Sh = Xo[0].toUpperCase() + Xo.slice(1);
  Wt(wh, 'on' + Sh);
}
Wt(Jc, 'onAnimationEnd');
Wt(qc, 'onAnimationIteration');
Wt(bc, 'onAnimationStart');
Wt('dblclick', 'onDoubleClick');
Wt('focusin', 'onFocus');
Wt('focusout', 'onBlur');
Wt(ed, 'onTransitionEnd');
Bn('onMouseEnter', ['mouseout', 'mouseover']);
Bn('onMouseLeave', ['mouseout', 'mouseover']);
Bn('onPointerEnter', ['pointerout', 'pointerover']);
Bn('onPointerLeave', ['pointerout', 'pointerover']);
cn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
cn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
cn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
cn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
cn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
cn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var hr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  xh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(hr));
function qs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), wp(r, t, void 0, e), (e.currentTarget = null);
}
function nd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          qs(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          qs(l, u, a), (o = s);
        }
    }
  }
  if (Bl) throw ((e = _i), (Bl = !1), (_i = null), e);
}
function H(e, t) {
  var n = t[Fi];
  n === void 0 && (n = t[Fi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (rd(t, e, 2, !1), n.add(r));
}
function Go(e, t, n) {
  var r = 0;
  t && (r |= 4), rd(n, e, r, t);
}
var vl = '_reactListening' + Math.random().toString(36).slice(2);
function Ir(e) {
  if (!e[vl]) {
    (e[vl] = !0),
      cc.forEach(function (n) {
        n !== 'selectionchange' && (xh.has(n) || Go(n, !1, e), Go(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vl] || ((t[vl] = !0), Go('selectionchange', !1, t));
  }
}
function rd(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var l = Ip;
      break;
    case 4:
      l = jp;
      break;
    default:
      l = Nu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Di ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Zo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = bt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Rc(function () {
    var a = o,
      h = xu(n),
      p = [];
    e: {
      var v = td.get(e);
      if (v !== void 0) {
        var g = Du,
          S = e;
        switch (e) {
          case 'keypress':
            if (_l(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = Jp;
            break;
          case 'focusin':
            (S = 'focus'), (g = Vo);
            break;
          case 'focusout':
            (S = 'blur'), (g = Vo);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Vo;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Us;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Bp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = eh;
            break;
          case Jc:
          case qc:
          case bc:
            g = $p;
            break;
          case ed:
            g = nh;
            break;
          case 'scroll':
            g = Ap;
            break;
          case 'wheel':
            g = lh;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = Wp;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = $s;
        }
        var y = (t & 4) !== 0,
          _ = !y && e === 'scroll',
          d = y ? (v !== null ? v + 'Capture' : null) : v;
        y = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var w = f.stateNode;
          if (
            (f.tag === 5 &&
              w !== null &&
              ((f = w),
              d !== null && ((w = Lr(c, d)), w != null && y.push(jr(c, w, f)))),
            _)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((v = new g(v, S, null, n, h)), p.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          v &&
            n !== Ni &&
            (S = n.relatedTarget || n.fromElement) &&
            (bt(S) || S[yt]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            h.window === h
              ? h
              : (v = h.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          g
            ? ((S = n.relatedTarget || n.toElement),
              (g = a),
              (S = S ? bt(S) : null),
              S !== null &&
                ((_ = dn(S)), S !== _ || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = a)),
          g !== S)
        ) {
          if (
            ((y = Us),
            (w = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = $s),
              (w = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (_ = g == null ? v : Nn(g)),
            (f = S == null ? v : Nn(S)),
            (v = new y(w, c + 'leave', g, n, h)),
            (v.target = _),
            (v.relatedTarget = f),
            (w = null),
            bt(h) === a &&
              ((y = new y(d, c + 'enter', S, n, h)),
              (y.target = f),
              (y.relatedTarget = _),
              (w = y)),
            (_ = w),
            g && S)
          )
            t: {
              for (y = g, d = S, c = 0, f = y; f; f = wn(f)) c++;
              for (f = 0, w = d; w; w = wn(w)) f++;
              for (; 0 < c - f; ) (y = wn(y)), c--;
              for (; 0 < f - c; ) (d = wn(d)), f--;
              for (; c--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = wn(y)), (d = wn(d));
              }
              y = null;
            }
          else y = null;
          g !== null && bs(p, v, g, y, !1),
            S !== null && _ !== null && bs(p, _, S, y, !0);
        }
      }
      e: {
        if (
          ((v = a ? Nn(a) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && v.type === 'file'))
        )
          var k = dh;
        else if (Ks(v))
          if (Qc) k = vh;
          else {
            k = ph;
            var N = fh;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (k = hh);
        if (k && (k = k(e, a))) {
          Kc(p, k, n, h);
          break e;
        }
        N && N(e, v, a),
          e === 'focusout' &&
            (N = v._wrapperState) &&
            N.controlled &&
            v.type === 'number' &&
            Si(v, 'number', v.value);
      }
      switch (((N = a ? Nn(a) : window), e)) {
        case 'focusin':
          (Ks(N) || N.contentEditable === 'true') &&
            ((En = N), (Ti = a), (wr = null));
          break;
        case 'focusout':
          wr = Ti = En = null;
          break;
        case 'mousedown':
          Pi = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Pi = !1), Zs(p, n, h);
          break;
        case 'selectionchange':
          if (yh) break;
        case 'keydown':
        case 'keyup':
          Zs(p, n, h);
      }
      var E;
      if (Lu)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart';
              break e;
            case 'compositionend':
              C = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              C = 'onCompositionUpdate';
              break e;
          }
          C = void 0;
        }
      else
        kn
          ? Vc(e, n) && (C = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
      C &&
        ($c &&
          n.locale !== 'ko' &&
          (kn || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && kn && (E = Hc())
            : ((Tt = h),
              (Ru = 'value' in Tt ? Tt.value : Tt.textContent),
              (kn = !0))),
        (N = Wl(a, C)),
        0 < N.length &&
          ((C = new Hs(C, e, null, n, h)),
          p.push({ event: C, listeners: N }),
          E ? (C.data = E) : ((E = Wc(n)), E !== null && (C.data = E)))),
        (E = ih ? uh(e, n) : sh(e, n)) &&
          ((a = Wl(a, 'onBeforeInput')),
          0 < a.length &&
            ((h = new Hs('onBeforeInput', 'beforeinput', null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = E)));
    }
    nd(p, t);
  });
}
function jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Lr(e, n)),
      o != null && r.unshift(jr(e, o, l)),
      (o = Lr(e, t)),
      o != null && r.push(jr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function bs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Lr(n, o)), s != null && i.unshift(jr(n, s, u)))
        : l || ((s = Lr(n, o)), s != null && i.push(jr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var kh = /\r\n?/g,
  Eh = /\u0000|\uFFFD/g;
function ea(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      kh,
      `
`
    )
    .replace(Eh, '');
}
function gl(e, t, n) {
  if (((t = ea(t)), ea(e) !== t && n)) throw Error(x(425));
}
function Kl() {}
var Oi = null,
  Ii = null;
function ji(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ai = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ch = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ta = typeof Promise == 'function' ? Promise : void 0,
  Nh =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ta < 'u'
        ? function (e) {
            return ta.resolve(null).then(e).catch(Rh);
          }
        : Ai;
function Rh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Jo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Tr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Tr(t);
}
function At(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function na(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2),
  at = '__reactFiber$' + Xn,
  Ar = '__reactProps$' + Xn,
  yt = '__reactContainer$' + Xn,
  Fi = '__reactEvents$' + Xn,
  Dh = '__reactListeners$' + Xn,
  _h = '__reactHandles$' + Xn;
function bt(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yt] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = na(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = na(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Gr(e) {
  return (
    (e = e[at] || e[yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function mo(e) {
  return e[Ar] || null;
}
var Bi = [],
  Rn = -1;
function Kt(e) {
  return { current: e };
}
function $(e) {
  0 > Rn || ((e.current = Bi[Rn]), (Bi[Rn] = null), Rn--);
}
function U(e, t) {
  Rn++, (Bi[Rn] = e.current), (e.current = t);
}
var Vt = {},
  he = Kt(Vt),
  Ee = Kt(!1),
  ln = Vt;
function Un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ce(e) {
  return (e = e.childContextTypes), e != null;
}
function Ql() {
  $(Ee), $(he);
}
function ra(e, t, n) {
  if (he.current !== Vt) throw Error(x(168));
  U(he, t), U(Ee, n);
}
function ld(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, fp(e) || 'Unknown', l));
  return X({}, n, r);
}
function Yl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (ln = he.current),
    U(he, e),
    U(Ee, Ee.current),
    !0
  );
}
function la(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = ld(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Ee),
      $(he),
      U(he, e))
    : $(Ee),
    U(Ee, n);
}
var pt = null,
  yo = !1,
  qo = !1;
function od(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
function Lh(e) {
  (yo = !0), od(e);
}
function Qt() {
  if (!qo && pt !== null) {
    qo = !0;
    var e = 0,
      t = A;
    try {
      var n = pt;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (pt = null), (yo = !1);
    } catch (l) {
      throw (pt !== null && (pt = pt.slice(e + 1)), Mc(ku, Qt), l);
    } finally {
      (A = t), (qo = !1);
    }
  }
  return null;
}
var Dn = [],
  _n = 0,
  Xl = null,
  Gl = 0,
  He = [],
  $e = 0,
  on = null,
  ht = 1,
  vt = '';
function Zt(e, t) {
  (Dn[_n++] = Gl), (Dn[_n++] = Xl), (Xl = e), (Gl = t);
}
function id(e, t, n) {
  (He[$e++] = ht), (He[$e++] = vt), (He[$e++] = on), (on = e);
  var r = ht;
  e = vt;
  var l = 32 - nt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - nt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (ht = (1 << (32 - nt(t) + l)) | (n << l) | r),
      (vt = o + e);
  } else (ht = (1 << o) | (n << l) | r), (vt = e);
}
function zu(e) {
  e.return !== null && (Zt(e, 1), id(e, 1, 0));
}
function Tu(e) {
  for (; e === Xl; )
    (Xl = Dn[--_n]), (Dn[_n] = null), (Gl = Dn[--_n]), (Dn[_n] = null);
  for (; e === on; )
    (on = He[--$e]),
      (He[$e] = null),
      (vt = He[--$e]),
      (He[$e] = null),
      (ht = He[--$e]),
      (He[$e] = null);
}
var Pe = null,
  Te = null,
  W = !1,
  tt = null;
function ud(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function oa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (Te = At(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (Te = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = on !== null ? { id: ht, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pe = e),
            (Te = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ui(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hi(e) {
  if (W) {
    var t = Te;
    if (t) {
      var n = t;
      if (!oa(e, t)) {
        if (Ui(e)) throw Error(x(418));
        t = At(n.nextSibling);
        var r = Pe;
        t && oa(e, t)
          ? ud(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Pe = e));
      }
    } else {
      if (Ui(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Pe = e);
    }
  }
}
function ia(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function ml(e) {
  if (e !== Pe) return !1;
  if (!W) return ia(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ji(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (Ui(e)) throw (sd(), Error(x(418)));
    for (; t; ) ud(e, t), (t = At(t.nextSibling));
  }
  if ((ia(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Te = At(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = Pe ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function sd() {
  for (var e = Te; e; ) e = At(e.nextSibling);
}
function Hn() {
  (Te = Pe = null), (W = !1);
}
function Pu(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var Mh = kt.ReactCurrentBatchConfig;
function sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function yl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function ua(e) {
  var t = e._init;
  return t(e._payload);
}
function ad(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = Ht(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, f, w) {
    return c === null || c.tag !== 6
      ? ((c = oi(f, d.mode, w)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function s(d, c, f, w) {
    var k = f.type;
    return k === xn
      ? h(d, c, f.props.children, w, f.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == 'object' &&
              k !== null &&
              k.$$typeof === Dt &&
              ua(k) === c.type))
        ? ((w = l(c, f.props)), (w.ref = sr(d, c, f)), (w.return = d), w)
        : ((w = Il(f.type, f.key, f.props, null, d.mode, w)),
          (w.ref = sr(d, c, f)),
          (w.return = d),
          w);
  }
  function a(d, c, f, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = ii(f, d.mode, w)), (c.return = d), c)
      : ((c = l(c, f.children || [])), (c.return = d), c);
  }
  function h(d, c, f, w, k) {
    return c === null || c.tag !== 7
      ? ((c = rn(f, d.mode, w, k)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function p(d, c, f) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = oi('' + c, d.mode, f)), (c.return = d), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case ul:
          return (
            (f = Il(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = sr(d, null, c)),
            (f.return = d),
            f
          );
        case Sn:
          return (c = ii(c, d.mode, f)), (c.return = d), c;
        case Dt:
          var w = c._init;
          return p(d, w(c._payload), f);
      }
      if (fr(c) || rr(c))
        return (c = rn(c, d.mode, f, null)), (c.return = d), c;
      yl(d, c);
    }
    return null;
  }
  function v(d, c, f, w) {
    var k = c !== null ? c.key : null;
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return k !== null ? null : u(d, c, '' + f, w);
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case ul:
          return f.key === k ? s(d, c, f, w) : null;
        case Sn:
          return f.key === k ? a(d, c, f, w) : null;
        case Dt:
          return (k = f._init), v(d, c, k(f._payload), w);
      }
      if (fr(f) || rr(f)) return k !== null ? null : h(d, c, f, w, null);
      yl(d, f);
    }
    return null;
  }
  function g(d, c, f, w, k) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (d = d.get(f) || null), u(c, d, '' + w, k);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case ul:
          return (d = d.get(w.key === null ? f : w.key) || null), s(c, d, w, k);
        case Sn:
          return (d = d.get(w.key === null ? f : w.key) || null), a(c, d, w, k);
        case Dt:
          var N = w._init;
          return g(d, c, f, N(w._payload), k);
      }
      if (fr(w) || rr(w)) return (d = d.get(f) || null), h(c, d, w, k, null);
      yl(c, w);
    }
    return null;
  }
  function S(d, c, f, w) {
    for (
      var k = null, N = null, E = c, C = (c = 0), T = null;
      E !== null && C < f.length;
      C++
    ) {
      E.index > C ? ((T = E), (E = null)) : (T = E.sibling);
      var L = v(d, E, f[C], w);
      if (L === null) {
        E === null && (E = T);
        break;
      }
      e && E && L.alternate === null && t(d, E),
        (c = o(L, c, C)),
        N === null ? (k = L) : (N.sibling = L),
        (N = L),
        (E = T);
    }
    if (C === f.length) return n(d, E), W && Zt(d, C), k;
    if (E === null) {
      for (; C < f.length; C++)
        (E = p(d, f[C], w)),
          E !== null &&
            ((c = o(E, c, C)), N === null ? (k = E) : (N.sibling = E), (N = E));
      return W && Zt(d, C), k;
    }
    for (E = r(d, E); C < f.length; C++)
      (T = g(E, d, C, f[C], w)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? C : T.key),
          (c = o(T, c, C)),
          N === null ? (k = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        E.forEach(function (I) {
          return t(d, I);
        }),
      W && Zt(d, C),
      k
    );
  }
  function y(d, c, f, w) {
    var k = rr(f);
    if (typeof k != 'function') throw Error(x(150));
    if (((f = k.call(f)), f == null)) throw Error(x(151));
    for (
      var N = (k = null), E = c, C = (c = 0), T = null, L = f.next();
      E !== null && !L.done;
      C++, L = f.next()
    ) {
      E.index > C ? ((T = E), (E = null)) : (T = E.sibling);
      var I = v(d, E, L.value, w);
      if (I === null) {
        E === null && (E = T);
        break;
      }
      e && E && I.alternate === null && t(d, E),
        (c = o(I, c, C)),
        N === null ? (k = I) : (N.sibling = I),
        (N = I),
        (E = T);
    }
    if (L.done) return n(d, E), W && Zt(d, C), k;
    if (E === null) {
      for (; !L.done; C++, L = f.next())
        (L = p(d, L.value, w)),
          L !== null &&
            ((c = o(L, c, C)), N === null ? (k = L) : (N.sibling = L), (N = L));
      return W && Zt(d, C), k;
    }
    for (E = r(d, E); !L.done; C++, L = f.next())
      (L = g(E, d, C, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? C : L.key),
          (c = o(L, c, C)),
          N === null ? (k = L) : (N.sibling = L),
          (N = L));
    return (
      e &&
        E.forEach(function (ve) {
          return t(d, ve);
        }),
      W && Zt(d, C),
      k
    );
  }
  function _(d, c, f, w) {
    if (
      (typeof f == 'object' &&
        f !== null &&
        f.type === xn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == 'object' && f !== null)
    ) {
      switch (f.$$typeof) {
        case ul:
          e: {
            for (var k = f.key, N = c; N !== null; ) {
              if (N.key === k) {
                if (((k = f.type), k === xn)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (c = l(N, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === Dt &&
                    ua(k) === N.type)
                ) {
                  n(d, N.sibling),
                    (c = l(N, f.props)),
                    (c.ref = sr(d, N, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            f.type === xn
              ? ((c = rn(f.props.children, d.mode, w, f.key)),
                (c.return = d),
                (d = c))
              : ((w = Il(f.type, f.key, f.props, null, d.mode, w)),
                (w.ref = sr(d, c, f)),
                (w.return = d),
                (d = w));
          }
          return i(d);
        case Sn:
          e: {
            for (N = f.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = ii(f, d.mode, w)), (c.return = d), (d = c);
          }
          return i(d);
        case Dt:
          return (N = f._init), _(d, c, N(f._payload), w);
      }
      if (fr(f)) return S(d, c, f, w);
      if (rr(f)) return y(d, c, f, w);
      yl(d, f);
    }
    return (typeof f == 'string' && f !== '') || typeof f == 'number'
      ? ((f = '' + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = oi(f, d.mode, w)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return _;
}
var $n = ad(!0),
  cd = ad(!1),
  Zl = Kt(null),
  Jl = null,
  Ln = null,
  Ou = null;
function Iu() {
  Ou = Ln = Jl = null;
}
function ju(e) {
  var t = Zl.current;
  $(Zl), (e._currentValue = t);
}
function $i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function jn(e, t) {
  (Jl = e),
    (Ou = Ln = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Ke(e) {
  var t = e._currentValue;
  if (Ou !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ln === null)) {
      if (Jl === null) throw Error(x(308));
      (Ln = e), (Jl.dependencies = { lanes: 0, firstContext: e });
    } else Ln = Ln.next = e;
  return t;
}
var en = null;
function Au(e) {
  en === null ? (en = [e]) : en.push(e);
}
function dd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Au(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    wt(e, r)
  );
}
function wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var _t = !1;
function Fu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      wt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Au(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    wt(e, n)
  );
}
function Ll(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eu(e, n);
  }
}
function sa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ql(e, t, n, r) {
  var l = e.updateQueue;
  _t = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var v = u.lane,
        g = u.eventTime;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            y = u;
          switch (((v = t), (g = n), y.tag)) {
            case 1:
              if (((S = y.payload), typeof S == 'function')) {
                p = S.call(g, p, v);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = y.payload),
                (v = typeof S == 'function' ? S.call(g, p, v) : S),
                v == null)
              )
                break e;
              p = X({}, p, v);
              break e;
            case 2:
              _t = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [u]) : v.push(u));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = g), (s = p)) : (h = h.next = g),
          (i |= v);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (sn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function aa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Zr = {},
  dt = Kt(Zr),
  Fr = Kt(Zr),
  Br = Kt(Zr);
function tn(e) {
  if (e === Zr) throw Error(x(174));
  return e;
}
function Bu(e, t) {
  switch ((U(Br, t), U(Fr, e), U(dt, Zr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ki(t, e));
  }
  $(dt), U(dt, t);
}
function Vn() {
  $(dt), $(Fr), $(Br);
}
function pd(e) {
  tn(Br.current);
  var t = tn(dt.current),
    n = ki(t, e.type);
  t !== n && (U(Fr, e), U(dt, n));
}
function Uu(e) {
  Fr.current === e && ($(dt), $(Fr));
}
var Q = Kt(0);
function bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var bo = [];
function Hu() {
  for (var e = 0; e < bo.length; e++)
    bo[e]._workInProgressVersionPrimary = null;
  bo.length = 0;
}
var Ml = kt.ReactCurrentDispatcher,
  ei = kt.ReactCurrentBatchConfig,
  un = 0,
  Y = null,
  ee = null,
  re = null,
  eo = !1,
  Sr = !1,
  Ur = 0,
  zh = 0;
function de() {
  throw Error(x(321));
}
function $u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Vu(e, t, n, r, l, o) {
  if (
    ((un = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ml.current = e === null || e.memoizedState === null ? Ih : jh),
    (e = n(r, l)),
    Sr)
  ) {
    o = 0;
    do {
      if (((Sr = !1), (Ur = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (re = ee = null),
        (t.updateQueue = null),
        (Ml.current = Ah),
        (e = n(r, l));
    } while (Sr);
  }
  if (
    ((Ml.current = to),
    (t = ee !== null && ee.next !== null),
    (un = 0),
    (re = ee = Y = null),
    (eo = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Wu() {
  var e = Ur !== 0;
  return (Ur = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (Y.memoizedState = re = e) : (re = re.next = e), re;
}
function Qe() {
  if (ee === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? Y.memoizedState : re.next;
  if (t !== null) (re = t), (ee = e);
  else {
    if (e === null) throw Error(x(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      re === null ? (Y.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function Hr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ti(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ee,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if ((un & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          (Y.lanes |= h),
          (sn |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      lt(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Y.lanes |= o), (sn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ni(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    lt(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function hd() {}
function vd(e, t) {
  var n = Y,
    r = Qe(),
    l = t(),
    o = !lt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ke = !0)),
    (r = r.queue),
    Ku(yd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $r(9, md.bind(null, n, r, l, t), void 0, null),
      oe === null)
    )
      throw Error(x(349));
    un & 30 || gd(n, t, l);
  }
  return l;
}
function gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function md(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wd(t) && Sd(e);
}
function yd(e, t, n) {
  return n(function () {
    wd(t) && Sd(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function Sd(e) {
  var t = wt(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function ca(e) {
  var t = st();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Oh.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function $r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xd() {
  return Qe().memoizedState;
}
function zl(e, t, n, r) {
  var l = st();
  (Y.flags |= e),
    (l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r));
}
function wo(e, t, n, r) {
  var l = Qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (((o = i.destroy), r !== null && $u(r, i.deps))) {
      l.memoizedState = $r(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (l.memoizedState = $r(1 | t, n, o, r));
}
function da(e, t) {
  return zl(8390656, 8, e, t);
}
function Ku(e, t) {
  return wo(2048, 8, e, t);
}
function kd(e, t) {
  return wo(4, 2, e, t);
}
function Ed(e, t) {
  return wo(4, 4, e, t);
}
function Cd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Nd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wo(4, 4, Cd.bind(null, t, e), n)
  );
}
function Qu() {}
function Rd(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Dd(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _d(e, t, n) {
  return un & 21
    ? (lt(n, t) || ((n = Pc()), (Y.lanes |= n), (sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function Th(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ei.transition;
  ei.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (ei.transition = r);
  }
}
function Ld() {
  return Qe().memoizedState;
}
function Ph(e, t, n) {
  var r = Ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Md(e))
  )
    zd(t, n);
  else if (((n = dd(e, t, n, r)), n !== null)) {
    var l = ye();
    rt(n, e, r, l), Td(n, t, r);
  }
}
function Oh(e, t, n) {
  var r = Ut(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Md(e)) zd(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), lt(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Au(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = dd(e, t, l, r)),
      n !== null && ((l = ye()), rt(n, e, r, l), Td(n, t, r));
  }
}
function Md(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function zd(e, t) {
  Sr = eo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Td(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eu(e, n);
  }
}
var to = {
    readContext: Ke,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  Ih = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: da,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zl(4194308, 4, Cd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ph.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ca,
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = ca(!1),
        t = e[0];
      return (e = Th.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        l = st();
      if (W) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(x(349));
        un & 30 || gd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        da(yd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $r(9, md.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = oe.identifierPrefix;
      if (W) {
        var n = vt,
          r = ht;
        (n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ur++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = zh++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jh = {
    readContext: Ke,
    useCallback: Rd,
    useContext: Ke,
    useEffect: Ku,
    useImperativeHandle: Nd,
    useInsertionEffect: kd,
    useLayoutEffect: Ed,
    useMemo: Dd,
    useReducer: ti,
    useRef: xd,
    useState: function () {
      return ti(Hr);
    },
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      var t = Qe();
      return _d(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(Hr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: hd,
    useSyncExternalStore: vd,
    useId: Ld,
    unstable_isNewReconciler: !1,
  },
  Ah = {
    readContext: Ke,
    useCallback: Rd,
    useContext: Ke,
    useEffect: Ku,
    useImperativeHandle: Nd,
    useInsertionEffect: kd,
    useLayoutEffect: Ed,
    useMemo: Dd,
    useReducer: ni,
    useRef: xd,
    useState: function () {
      return ni(Hr);
    },
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      var t = Qe();
      return ee === null ? (t.memoizedState = e) : _d(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = ni(Hr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: hd,
    useSyncExternalStore: vd,
    useId: Ld,
    unstable_isNewReconciler: !1,
  };
function be(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var So = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      l = Ut(e),
      o = gt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (rt(t, e, l, r), Ll(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      l = Ut(e),
      o = gt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (rt(t, e, l, r), Ll(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = Ut(e),
      l = gt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ft(e, l, r)),
      t !== null && (rt(t, e, r, n), Ll(t, e, r));
  },
};
function fa(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Or(n, r) || !Or(l, o)
        : !0
  );
}
function Pd(e, t, n) {
  var r = !1,
    l = Vt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Ke(o))
      : ((l = Ce(t) ? ln : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Un(e, l) : Vt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = So),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function pa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && So.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fu(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = Ke(o))
    : ((o = Ce(t) ? ln : he.current), (l.context = Un(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Vi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && So.enqueueReplaceState(l, l.state, null),
      ql(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Wn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += dp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ri(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ki(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Fh = typeof WeakMap == 'function' ? WeakMap : Map;
function Od(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ro || ((ro = !0), (tu = r)), Ki(e, t);
    }),
    n
  );
}
function Id(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ki(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ki(e, t),
          typeof r != 'function' &&
            (Bt === null ? (Bt = new Set([this])) : Bt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function ha(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Fh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = qh.bind(null, e, t, n)), t.then(e, e));
}
function va(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ga(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Bh = kt.ReactCurrentOwner,
  ke = !1;
function me(e, t, n, r) {
  t.child = e === null ? cd(t, null, n, r) : $n(t, e.child, n, r);
}
function ma(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    jn(t, l),
    (r = Vu(e, t, n, r, o, l)),
    (n = Wu()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        St(e, t, l))
      : (W && n && zu(t), (t.flags |= 1), me(e, t, r, l), t.child)
  );
}
function ya(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !es(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), jd(e, t, o, r, l))
      : ((e = Il(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Or), n(i, r) && e.ref === t.ref)
    )
      return St(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ht(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Or(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), St(e, t, l);
  }
  return Qi(e, t, n, r, l);
}
function Ad(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(zn, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(zn, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(zn, Me),
        (Me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(zn, Me),
      (Me |= r);
  return me(e, t, l, n), t.child;
}
function Fd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qi(e, t, n, r, l) {
  var o = Ce(n) ? ln : he.current;
  return (
    (o = Un(t, o)),
    jn(t, l),
    (n = Vu(e, t, n, r, o, l)),
    (r = Wu()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        St(e, t, l))
      : (W && r && zu(t), (t.flags |= 1), me(e, t, n, l), t.child)
  );
}
function wa(e, t, n, r, l) {
  if (Ce(n)) {
    var o = !0;
    Yl(t);
  } else o = !1;
  if ((jn(t, l), t.stateNode === null))
    Tl(e, t), Pd(t, n, r), Wi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Ke(a))
      : ((a = Ce(n) ? ln : he.current), (a = Un(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && pa(t, i, r, a)),
      (_t = !1);
    var v = t.memoizedState;
    (i.state = v),
      ql(t, r, i, l),
      (s = t.memoizedState),
      u !== r || v !== s || Ee.current || _t
        ? (typeof h == 'function' && (Vi(t, n, h, r), (s = t.memoizedState)),
          (u = _t || fa(t, n, u, r, v, s, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      fd(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : be(t.type, u)),
      (i.props = a),
      (p = t.pendingProps),
      (v = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Ke(s))
        : ((s = Ce(n) ? ln : he.current), (s = Un(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== p || v !== s) && pa(t, i, r, s)),
      (_t = !1),
      (v = t.memoizedState),
      (i.state = v),
      ql(t, r, i, l);
    var S = t.memoizedState;
    u !== p || v !== S || Ee.current || _t
      ? (typeof g == 'function' && (Vi(t, n, g, r), (S = t.memoizedState)),
        (a = _t || fa(t, n, a, r, v, S, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yi(e, t, n, r, o, l);
}
function Yi(e, t, n, r, l, o) {
  Fd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && la(t, n, !1), St(e, t, o);
  (r = t.stateNode), (Bh.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = $n(t, e.child, null, o)), (t.child = $n(t, null, u, o)))
      : me(e, t, u, o),
    (t.memoizedState = r.state),
    l && la(t, n, !0),
    t.child
  );
}
function Bd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ra(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ra(e, t.context, !1),
    Bu(e, t.containerInfo);
}
function Sa(e, t, n, r, l) {
  return Hn(), Pu(l), (t.flags |= 256), me(e, t, n, r), t.child;
}
var Xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ud(e, t, n) {
  var r = t.pendingProps,
    l = Q.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(Q, l & 1),
    e === null)
  )
    return (
      Hi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Eo(i, r, 0, null)),
              (e = rn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Gi(n)),
              (t.memoizedState = Xi),
              e)
            : Yu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Uh(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Ht(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ht(u, o)) : ((o = rn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Gi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ht(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Yu(e, t) {
  return (
    (t = Eo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wl(e, t, n, r) {
  return (
    r !== null && Pu(r),
    $n(t, e.child, null, n),
    (e = Yu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Uh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ri(Error(x(422)))), wl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Eo({ mode: 'visible', children: r.children }, l, 0, null)),
          (o = rn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && $n(t, e.child, null, i),
          (t.child.memoizedState = Gi(i)),
          (t.memoizedState = Xi),
          o);
  if (!(t.mode & 1)) return wl(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(x(419))), (r = ri(o, r, void 0)), wl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ke || u)) {
    if (((r = oe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), wt(e, l), rt(r, e, l, -1));
    }
    return bu(), (r = ri(Error(x(421)))), wl(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = bh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Te = At(l.nextSibling)),
      (Pe = t),
      (W = !0),
      (tt = null),
      e !== null &&
        ((He[$e++] = ht),
        (He[$e++] = vt),
        (He[$e++] = on),
        (ht = e.id),
        (vt = e.overflow),
        (on = t)),
      (t = Yu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $i(e.return, t, n);
}
function li(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Hd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((me(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xa(e, n, t);
        else if (e.tag === 19) xa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && bl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          li(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && bl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        li(t, !0, n, null, o);
        break;
      case 'together':
        li(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Hh(e, t, n) {
  switch (t.tag) {
    case 3:
      Bd(t), Hn();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      Ce(t.type) && Yl(t);
      break;
    case 4:
      Bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(Zl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ud(e, t, n)
            : (U(Q, Q.current & 1),
              (e = St(e, t, n)),
              e !== null ? e.sibling : null);
      U(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Hd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ad(e, t, n);
  }
  return St(e, t, n);
}
var $d, Zi, Vd, Wd;
$d = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zi = function () {};
Vd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), tn(dt.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = yi(e, l)), (r = yi(e, r)), (o = []);
        break;
      case 'select':
        (l = X({}, l, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = xi(e, l)), (r = xi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Kl);
    }
    Ei(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === 'style') {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Dr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (o = o || []).push(a, '' + s)
              : a !== 'suppressContentEditableWarning' &&
                a !== 'suppressHydrationWarning' &&
                (Dr.hasOwnProperty(a)
                  ? (s != null && a === 'onScroll' && H('scroll', e),
                    o || u === s || (o = []))
                  : (o = o || []).push(a, s));
    }
    n && (o = o || []).push('style', n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Wd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!W)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $h(e, t, n) {
  var r = t.pendingProps;
  switch ((Tu(t), t.tag)) {
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
      return fe(t), null;
    case 1:
      return Ce(t.type) && Ql(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        $(Ee),
        $(he),
        Hu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ml(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (lu(tt), (tt = null)))),
        Zi(e, t),
        fe(t),
        null
      );
    case 5:
      Uu(t);
      var l = tn(Br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return fe(t), null;
        }
        if (((e = tn(dt.current)), ml(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[at] = t), (r[Ar] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              H('cancel', r), H('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              H('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < hr.length; l++) H(hr[l], r);
              break;
            case 'source':
              H('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              H('error', r), H('load', r);
              break;
            case 'details':
              H('toggle', r);
              break;
            case 'input':
              Ms(r, o), H('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                H('invalid', r);
              break;
            case 'textarea':
              Ts(r, o), H('invalid', r);
          }
          Ei(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      gl(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      gl(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Dr.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  H('scroll', r);
            }
          switch (n) {
            case 'input':
              sl(r), zs(r, o, !0);
              break;
            case 'textarea':
              sl(r), Ps(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Kl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = yc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[at] = t),
            (e[Ar] = r),
            $d(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ci(n, r)), n)) {
              case 'dialog':
                H('cancel', e), H('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                H('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < hr.length; l++) H(hr[l], e);
                l = r;
                break;
              case 'source':
                H('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                H('error', e), H('load', e), (l = r);
                break;
              case 'details':
                H('toggle', e), (l = r);
                break;
              case 'input':
                Ms(e, r), (l = yi(e, r)), H('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = X({}, r, { value: void 0 })),
                  H('invalid', e);
                break;
              case 'textarea':
                Ts(e, r), (l = xi(e, r)), H('invalid', e);
                break;
              default:
                l = r;
            }
            Ei(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? xc(e, s)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && wc(e, s))
                    : o === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && _r(e, s)
                        : typeof s == 'number' && _r(e, '' + s)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (Dr.hasOwnProperty(o)
                          ? s != null && o === 'onScroll' && H('scroll', e)
                          : s != null && mu(e, o, s, i));
              }
            switch (n) {
              case 'input':
                sl(e), zs(e, r, !1);
                break;
              case 'textarea':
                sl(e), Ps(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + $t(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Tn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Tn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Kl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) Wd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(x(166));
        if (((n = tn(Br.current)), tn(dt.current), ml(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (o = r.nodeValue !== n) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                gl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        ($(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Te !== null && t.mode & 1 && !(t.flags & 128))
          sd(), Hn(), (t.flags |= 98560), (o = !1);
        else if (((o = ml(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[at] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (o = !1);
        } else tt !== null && (lu(tt), (tt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ne === 0 && (ne = 3) : bu())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        Vn(), Zi(e, t), e === null && Ir(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return ju(t.type._context), fe(t), null;
    case 17:
      return Ce(t.type) && Ql(), fe(t), null;
    case 19:
      if (($(Q), (o = t.memoizedState), o === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ar(o, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = bl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > Kn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !W)
            )
              return fe(t), null;
          } else
            2 * J() - o.renderingStartTime > Kn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = Q.current),
          U(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        qu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Vh(e, t) {
  switch ((Tu(t), t.tag)) {
    case 1:
      return (
        Ce(t.type) && Ql(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vn(),
        $(Ee),
        $(he),
        Hu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Uu(t), null;
    case 13:
      if (($(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(Q), null;
    case 4:
      return Vn(), null;
    case 10:
      return ju(t.type._context), null;
    case 22:
    case 23:
      return qu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sl = !1,
  pe = !1,
  Wh = typeof WeakSet == 'function' ? WeakSet : Set,
  D = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Ji(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var ka = !1;
function Kh(e, t) {
  if (((Oi = $l), (e = Gc()), Mu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (v = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (v === n && ++a === l && (u = i),
                v === o && ++h === r && (s = i),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = v), (v = p.parentNode);
            }
            p = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ii = { focusedElem: e, selectionRange: n }, $l = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var y = S.memoizedProps,
                    _ = S.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : be(t.type, y),
                      _
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = '')
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (w) {
          Z(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (S = ka), (ka = !1), S;
}
function xr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ji(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function xo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function qi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Kd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[Ar], delete t[Fi], delete t[Dh], delete t[_h])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ea(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Kl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bi(e, t, n), e = e.sibling; e !== null; ) bi(e, t, n), (e = e.sibling);
}
function eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), (e = e.sibling);
}
var se = null,
  et = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Yd(e, t, n), (n = n.sibling);
}
function Yd(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == 'function')
    try {
      ct.onCommitFiberUnmount(po, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || Mn(n, t);
    case 6:
      var r = se,
        l = et;
      (se = null),
        Rt(e, t, n),
        (se = r),
        (et = l),
        se !== null &&
          (et
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (et
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Jo(e.parentNode, n)
              : e.nodeType === 1 && Jo(e, n),
            Tr(e))
          : Jo(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (l = et),
        (se = n.stateNode.containerInfo),
        (et = !0),
        Rt(e, t, n),
        (se = r),
        (et = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ji(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (Mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Z(n, t, u);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), Rt(e, t, n), (pe = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function Ca(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Wh()),
      t.forEach(function (r) {
        var l = ev.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (se = u.stateNode), (et = !1);
              break e;
            case 3:
              (se = u.stateNode.containerInfo), (et = !0);
              break e;
            case 4:
              (se = u.stateNode.containerInfo), (et = !0);
              break e;
          }
          u = u.return;
        }
        if (se === null) throw Error(x(160));
        Yd(o, i, l), (se = null), (et = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Z(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Xd(t, e), (t = t.sibling);
}
function Xd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qe(t, e), ut(e), r & 4)) {
        try {
          xr(3, e, e.return), xo(3, e);
        } catch (y) {
          Z(e, e.return, y);
        }
        try {
          xr(5, e, e.return);
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 1:
      qe(t, e), ut(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (
        (qe(t, e),
        ut(e),
        r & 512 && n !== null && Mn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          _r(l, '');
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && gc(l, o),
              Ci(u, i);
            var a = Ci(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                p = s[i + 1];
              h === 'style'
                ? xc(l, p)
                : h === 'dangerouslySetInnerHTML'
                  ? wc(l, p)
                  : h === 'children'
                    ? _r(l, p)
                    : mu(l, h, p, a);
            }
            switch (u) {
              case 'input':
                wi(l, o);
                break;
              case 'textarea':
                mc(l, o);
                break;
              case 'select':
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Tn(l, !!o.multiple, g, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Tn(l, !!o.multiple, o.defaultValue, !0)
                      : Tn(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Ar] = o;
          } catch (y) {
            Z(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((qe(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (qe(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Tr(t.containerInfo);
        } catch (y) {
          Z(e, e.return, y);
        }
      break;
    case 4:
      qe(t, e), ut(e);
      break;
    case 13:
      qe(t, e),
        ut(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Zu = J())),
        r & 4 && Ca(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (a = pe) || h), qe(t, e), (pe = a)) : qe(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (D = e, h = e.child; h !== null; ) {
            for (p = D = h; D !== null; ) {
              switch (((v = D), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xr(4, v, v.return);
                  break;
                case 1:
                  Mn(v, v.return);
                  var S = v.stateNode;
                  if (typeof S.componentWillUnmount == 'function') {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (y) {
                      Z(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Mn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Ra(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (D = g)) : Ra(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Sc('display', i)));
              } catch (y) {
                Z(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps;
              } catch (y) {
                Z(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      qe(t, e), ut(e), r & 4 && Ca(e);
      break;
    case 21:
      break;
    default:
      qe(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (_r(l, ''), (r.flags &= -33));
          var o = Ea(e);
          eu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ea(e);
          bi(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qh(e, t, n) {
  (D = e), Gd(e);
}
function Gd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Sl;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || pe;
        u = Sl;
        var a = pe;
        if (((Sl = i), (pe = s) && !a))
          for (D = l; D !== null; )
            (i = D),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Da(l)
                : s !== null
                  ? ((s.return = i), (D = s))
                  : Da(l);
        for (; o !== null; ) (D = o), Gd(o), (o = o.sibling);
        (D = l), (Sl = u), (pe = a);
      }
      Na(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (D = o)) : Na(e);
  }
}
function Na(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || xo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && aa(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                aa(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
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
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Tr(p);
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
              throw Error(x(163));
          }
        pe || (t.flags & 512 && qi(t));
      } catch (v) {
        Z(t, t.return, v);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Ra(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Da(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xo(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, l, s);
            }
          }
          var o = t.return;
          try {
            qi(t);
          } catch (s) {
            Z(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qi(t);
          } catch (s) {
            Z(t, i, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
    }
    if (t === e) {
      D = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (D = u);
      break;
    }
    D = t.return;
  }
}
var Yh = Math.ceil,
  no = kt.ReactCurrentDispatcher,
  Xu = kt.ReactCurrentOwner,
  We = kt.ReactCurrentBatchConfig,
  O = 0,
  oe = null,
  q = null,
  ae = 0,
  Me = 0,
  zn = Kt(0),
  ne = 0,
  Vr = null,
  sn = 0,
  ko = 0,
  Gu = 0,
  kr = null,
  xe = null,
  Zu = 0,
  Kn = 1 / 0,
  ft = null,
  ro = !1,
  tu = null,
  Bt = null,
  xl = !1,
  Pt = null,
  lo = 0,
  Er = 0,
  nu = null,
  Pl = -1,
  Ol = 0;
function ye() {
  return O & 6 ? J() : Pl !== -1 ? Pl : (Pl = J());
}
function Ut(e) {
  return e.mode & 1
    ? O & 2 && ae !== 0
      ? ae & -ae
      : Mh.transition !== null
        ? (Ol === 0 && (Ol = Pc()), Ol)
        : ((e = A),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uc(e.type))),
          e)
    : 1;
}
function rt(e, t, n, r) {
  if (50 < Er) throw ((Er = 0), (nu = null), Error(x(185)));
  Yr(e, n, r),
    (!(O & 2) || e !== oe) &&
      (e === oe && (!(O & 2) && (ko |= n), ne === 4 && zt(e, ae)),
      Ne(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((Kn = J() + 500), yo && Qt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Mp(e, t);
  var r = Hl(e, e === oe ? ae : 0);
  if (r === 0)
    n !== null && js(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && js(n), t === 1))
      e.tag === 0 ? Lh(_a.bind(null, e)) : od(_a.bind(null, e)),
        Nh(function () {
          !(O & 6) && Qt();
        }),
        (n = null);
    else {
      switch (Oc(r)) {
        case 1:
          n = ku;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = Ul;
          break;
        case 536870912:
          n = Tc;
          break;
        default:
          n = Ul;
      }
      n = rf(n, Zd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zd(e, t) {
  if (((Pl = -1), (Ol = 0), O & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = Hl(e, e === oe ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = oo(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var o = qd();
    (oe !== e || ae !== t) && ((ft = null), (Kn = J() + 500), nn(e, t));
    do
      try {
        Zh();
        break;
      } catch (u) {
        Jd(e, u);
      }
    while (!0);
    Iu(),
      (no.current = o),
      (O = l),
      q !== null ? (t = 0) : ((oe = null), (ae = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Li(e)), l !== 0 && ((r = l), (t = ru(e, l)))), t === 1)
    )
      throw ((n = Vr), nn(e, 0), zt(e, r), Ne(e, J()), n);
    if (t === 6) zt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Xh(l) &&
          ((t = oo(e, r)),
          t === 2 && ((o = Li(e)), o !== 0 && ((r = o), (t = ru(e, o)))),
          t === 1))
      )
        throw ((n = Vr), nn(e, 0), zt(e, r), Ne(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Jt(e, xe, ft);
          break;
        case 3:
          if (
            (zt(e, r), (r & 130023424) === r && ((t = Zu + 500 - J()), 10 < t))
          ) {
            if (Hl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ai(Jt.bind(null, e, xe, ft), t);
            break;
          }
          Jt(e, xe, ft);
          break;
        case 4:
          if ((zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - nt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Yh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ai(Jt.bind(null, e, xe, ft), r);
            break;
          }
          Jt(e, xe, ft);
          break;
        case 5:
          Jt(e, xe, ft);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Ne(e, J()), e.callbackNode === n ? Zd.bind(null, e) : null;
}
function ru(e, t) {
  var n = kr;
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = oo(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && lu(t)),
    e
  );
}
function lu(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function Xh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!lt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function zt(e, t) {
  for (
    t &= ~Gu,
      t &= ~ko,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function _a(e) {
  if (O & 6) throw Error(x(327));
  An();
  var t = Hl(e, 0);
  if (!(t & 1)) return Ne(e, J()), null;
  var n = oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Li(e);
    r !== 0 && ((t = r), (n = ru(e, r)));
  }
  if (n === 1) throw ((n = Vr), nn(e, 0), zt(e, t), Ne(e, J()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, xe, ft),
    Ne(e, J()),
    null
  );
}
function Ju(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((Kn = J() + 500), yo && Qt());
  }
}
function an(e) {
  Pt !== null && Pt.tag === 0 && !(O & 6) && An();
  var t = O;
  O |= 1;
  var n = We.transition,
    r = A;
  try {
    if (((We.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (We.transition = n), (O = t), !(O & 6) && Qt();
  }
}
function qu() {
  (Me = zn.current), $(zn);
}
function nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ch(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((Tu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ql();
          break;
        case 3:
          Vn(), $(Ee), $(he), Hu();
          break;
        case 5:
          Uu(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          $(Q);
          break;
        case 19:
          $(Q);
          break;
        case 10:
          ju(r.type._context);
          break;
        case 22:
        case 23:
          qu();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (q = e = Ht(e.current, null)),
    (ae = Me = t),
    (ne = 0),
    (Vr = null),
    (Gu = ko = sn = 0),
    (xe = kr = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function Jd(e, t) {
  do {
    var n = q;
    try {
      if ((Iu(), (Ml.current = to), eo)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        eo = !1;
      }
      if (
        ((un = 0),
        (re = ee = Y = null),
        (Sr = !1),
        (Ur = 0),
        (Xu.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Vr = t), (q = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ae),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = va(i);
          if (g !== null) {
            (g.flags &= -257),
              ga(g, i, u, o, t),
              g.mode & 1 && ha(o, a, t),
              (t = g),
              (s = a);
            var S = t.updateQueue;
            if (S === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ha(o, a, t), bu();
              break e;
            }
            s = Error(x(426));
          }
        } else if (W && u.mode & 1) {
          var _ = va(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              ga(_, i, u, o, t),
              Pu(Wn(s, u));
            break e;
          }
        }
        (o = s = Wn(s, u)),
          ne !== 4 && (ne = 2),
          kr === null ? (kr = [o]) : kr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Od(o, s, t);
              sa(o, d);
              break e;
            case 1:
              u = s;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (f !== null &&
                    typeof f.componentDidCatch == 'function' &&
                    (Bt === null || !Bt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Id(o, u, t);
                sa(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ef(n);
    } catch (k) {
      (t = k), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qd() {
  var e = no.current;
  return (no.current = to), e === null ? to : e;
}
function bu() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    oe === null || (!(sn & 268435455) && !(ko & 268435455)) || zt(oe, ae);
}
function oo(e, t) {
  var n = O;
  O |= 2;
  var r = qd();
  (oe !== e || ae !== t) && ((ft = null), nn(e, t));
  do
    try {
      Gh();
      break;
    } catch (l) {
      Jd(e, l);
    }
  while (!0);
  if ((Iu(), (O = n), (no.current = r), q !== null)) throw Error(x(261));
  return (oe = null), (ae = 0), ne;
}
function Gh() {
  for (; q !== null; ) bd(q);
}
function Zh() {
  for (; q !== null && !xp(); ) bd(q);
}
function bd(e) {
  var t = nf(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? ef(e) : (q = t),
    (Xu.current = null);
}
function ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Vh(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (q = null);
        return;
      }
    } else if (((n = $h(n, t, Me)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Jt(e, t, n) {
  var r = A,
    l = We.transition;
  try {
    (We.transition = null), (A = 1), Jh(e, t, n, r);
  } finally {
    (We.transition = l), (A = r);
  }
  return null;
}
function Jh(e, t, n, r) {
  do An();
  while (Pt !== null);
  if (O & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (zp(e, o),
    e === oe && ((q = oe = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xl ||
      ((xl = !0),
      rf(Ul, function () {
        return An(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = We.transition), (We.transition = null);
    var i = A;
    A = 1;
    var u = O;
    (O |= 4),
      (Xu.current = null),
      Kh(e, n),
      Xd(n, e),
      mh(Ii),
      ($l = !!Oi),
      (Ii = Oi = null),
      (e.current = n),
      Qh(n),
      kp(),
      (O = u),
      (A = i),
      (We.transition = o);
  } else e.current = n;
  if (
    (xl && ((xl = !1), (Pt = e), (lo = l)),
    (o = e.pendingLanes),
    o === 0 && (Bt = null),
    Np(n.stateNode),
    Ne(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ro) throw ((ro = !1), (e = tu), (tu = null), e);
  return (
    lo & 1 && e.tag !== 0 && An(),
    (o = e.pendingLanes),
    o & 1 ? (e === nu ? Er++ : ((Er = 0), (nu = e))) : (Er = 0),
    Qt(),
    null
  );
}
function An() {
  if (Pt !== null) {
    var e = Oc(lo),
      t = We.transition,
      n = A;
    try {
      if (((We.transition = null), (A = 16 > e ? 16 : e), Pt === null))
        var r = !1;
      else {
        if (((e = Pt), (Pt = null), (lo = 0), O & 6)) throw Error(x(331));
        var l = O;
        for (O |= 4, D = e.current; D !== null; ) {
          var o = D,
            i = o.child;
          if (D.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (D = a; D !== null; ) {
                  var h = D;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xr(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (D = p);
                  else
                    for (; D !== null; ) {
                      h = D;
                      var v = h.sibling,
                        g = h.return;
                      if ((Kd(h), h === a)) {
                        D = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (D = v);
                        break;
                      }
                      D = g;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var y = S.child;
                if (y !== null) {
                  S.child = null;
                  do {
                    var _ = y.sibling;
                    (y.sibling = null), (y = _);
                  } while (y !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (D = i);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (D = d);
                break e;
              }
              D = o.return;
            }
        }
        var c = e.current;
        for (D = c; D !== null; ) {
          i = D;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (D = f);
          else
            e: for (i = c; D !== null; ) {
              if (((u = D), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xo(9, u);
                  }
                } catch (k) {
                  Z(u, u.return, k);
                }
              if (u === i) {
                D = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (D = w);
                break e;
              }
              D = u.return;
            }
        }
        if (
          ((O = l), Qt(), ct && typeof ct.onPostCommitFiberRoot == 'function')
        )
          try {
            ct.onPostCommitFiberRoot(po, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (We.transition = t);
    }
  }
  return !1;
}
function La(e, t, n) {
  (t = Wn(n, t)),
    (t = Od(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = ye()),
    e !== null && (Yr(e, 1, t), Ne(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) La(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        La(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Bt === null || !Bt.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = Id(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = ye()),
            t !== null && (Yr(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ae & n) === n &&
      (ne === 4 || (ne === 3 && (ae & 130023424) === ae && 500 > J() - Zu)
        ? nn(e, 0)
        : (Gu |= n)),
    Ne(e, t);
}
function tf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = dl), (dl <<= 1), !(dl & 130023424) && (dl = 4194304))
      : (t = 1));
  var n = ye();
  (e = wt(e, t)), e !== null && (Yr(e, t, n), Ne(e, n));
}
function bh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), tf(e, n);
}
function ev(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Hh(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), W && t.flags & 1048576 && id(t, Gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tl(e, t), (e = t.pendingProps);
      var l = Un(t, he.current);
      jn(t, n), (l = Vu(null, t, r, e, l, n));
      var o = Wu();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ce(r) ? ((o = !0), Yl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Fu(t),
            (l.updater = So),
            (t.stateNode = l),
            (l._reactInternals = t),
            Wi(t, r, e, n),
            (t = Yi(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && zu(t), me(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = nv(r)),
          (e = be(r, e)),
          l)
        ) {
          case 0:
            t = Qi(null, t, r, e, n);
            break e;
          case 1:
            t = wa(null, t, r, e, n);
            break e;
          case 11:
            t = ma(null, t, r, e, n);
            break e;
          case 14:
            t = ya(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        Qi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        wa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Bd(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          fd(e, t),
          ql(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Wn(Error(x(423)), t)), (t = Sa(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Wn(Error(x(424)), t)), (t = Sa(e, t, r, n, l));
            break e;
          } else
            for (
              Te = At(t.stateNode.containerInfo.firstChild),
                Pe = t,
                W = !0,
                tt = null,
                n = cd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === l)) {
            t = St(e, t, n);
            break e;
          }
          me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pd(t),
        e === null && Hi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ji(r, l) ? (i = null) : o !== null && ji(r, o) && (t.flags |= 32),
        Fd(e, t),
        me(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Hi(t), null;
    case 13:
      return Ud(e, t, n);
    case 4:
      return (
        Bu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        ma(e, t, r, l, n)
      );
    case 7:
      return me(e, t, t.pendingProps, n), t.child;
    case 8:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          U(Zl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (lt(o.value, i)) {
            if (o.children === l.children && !Ee.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = gt(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      $i(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(x(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  $i(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        me(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        jn(t, n),
        (l = Ke(l)),
        (r = r(l)),
        (t.flags |= 1),
        me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = be(r, t.pendingProps)),
        (l = be(r.type, l)),
        ya(e, t, r, l, n)
      );
    case 15:
      return jd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        Tl(e, t),
        (t.tag = 1),
        Ce(r) ? ((e = !0), Yl(t)) : (e = !1),
        jn(t, n),
        Pd(t, r, l),
        Wi(t, r, l, n),
        Yi(null, t, r, !0, e, n)
      );
    case 19:
      return Hd(e, t, n);
    case 22:
      return Ad(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function rf(e, t) {
  return Mc(e, t);
}
function tv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ve(e, t, n, r) {
  return new tv(e, t, n, r);
}
function es(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function nv(e) {
  if (typeof e == 'function') return es(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wu)) return 11;
    if (e === Su) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Il(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) es(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case xn:
        return rn(n.children, l, o, t);
      case yu:
        (i = 8), (l |= 8);
        break;
      case hi:
        return (
          (e = Ve(12, n, t, l | 2)), (e.elementType = hi), (e.lanes = o), e
        );
      case vi:
        return (e = Ve(13, n, t, l)), (e.elementType = vi), (e.lanes = o), e;
      case gi:
        return (e = Ve(19, n, t, l)), (e.elementType = gi), (e.lanes = o), e;
      case pc:
        return Eo(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case dc:
              i = 10;
              break e;
            case fc:
              i = 9;
              break e;
            case wu:
              i = 11;
              break e;
            case Su:
              i = 14;
              break e;
            case Dt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ve(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function rn(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Eo(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = pc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oi(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function ii(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function rv(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Uo(0)),
    (this.expirationTimes = Uo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Uo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ts(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new rv(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ve(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fu(o),
    e
  );
}
function lv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function lf(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ce(n)) return ld(e, n, t);
  }
  return t;
}
function of(e, t, n, r, l, o, i, u, s) {
  return (
    (e = ts(n, r, !0, e, l, o, i, u, s)),
    (e.context = lf(null)),
    (n = e.current),
    (r = ye()),
    (l = Ut(n)),
    (o = gt(r, l)),
    (o.callback = t ?? null),
    Ft(n, o, l),
    (e.current.lanes = l),
    Yr(e, l, r),
    Ne(e, r),
    e
  );
}
function Co(e, t, n, r) {
  var l = t.current,
    o = ye(),
    i = Ut(l);
  return (
    (n = lf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(l, t, i)),
    e !== null && (rt(e, l, i, o), Ll(e, l, i)),
    i
  );
}
function io(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ma(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ns(e, t) {
  Ma(e, t), (e = e.alternate) && Ma(e, t);
}
function ov() {
  return null;
}
var uf =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function rs(e) {
  this._internalRoot = e;
}
No.prototype.render = rs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Co(e, t, null, null);
};
No.prototype.unmount = rs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function () {
      Co(null, e, null, null);
    }),
      (t[yt] = null);
  }
};
function No(e) {
  this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ac();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
    Mt.splice(n, 0, e), n === 0 && Bc(e);
  }
};
function ls(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function za() {}
function iv(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var a = io(i);
        o.call(a);
      };
    }
    var i = of(t, r, e, 0, null, !1, !1, '', za);
    return (
      (e._reactRootContainer = i),
      (e[yt] = i.current),
      Ir(e.nodeType === 8 ? e.parentNode : e),
      an(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = io(s);
      u.call(a);
    };
  }
  var s = ts(e, 0, !1, null, null, !1, !1, '', za);
  return (
    (e._reactRootContainer = s),
    (e[yt] = s.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    an(function () {
      Co(t, s, n, r);
    }),
    s
  );
}
function Do(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = io(i);
        u.call(s);
      };
    }
    Co(t, i, e, l);
  } else i = iv(n, t, e, l, r);
  return io(i);
}
Ic = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 &&
          (Eu(t, n | 1), Ne(t, J()), !(O & 6) && ((Kn = J() + 500), Qt()));
      }
      break;
    case 13:
      an(function () {
        var r = wt(e, 1);
        if (r !== null) {
          var l = ye();
          rt(r, e, 1, l);
        }
      }),
        ns(e, 1);
  }
};
Cu = function (e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = ye();
      rt(t, e, 134217728, n);
    }
    ns(e, 134217728);
  }
};
jc = function (e) {
  if (e.tag === 13) {
    var t = Ut(e),
      n = wt(e, t);
    if (n !== null) {
      var r = ye();
      rt(n, e, t, r);
    }
    ns(e, t);
  }
};
Ac = function () {
  return A;
};
Fc = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
Ri = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((wi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = mo(r);
            if (!l) throw Error(x(90));
            vc(r), wi(r, l);
          }
        }
      }
      break;
    case 'textarea':
      mc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Tn(e, !!n.multiple, t, !1);
  }
};
Cc = Ju;
Nc = an;
var uv = { usingClientEntryPoint: !1, Events: [Gr, Nn, mo, kc, Ec, Ju] },
  cr = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  sv = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _c(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || ov,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kl.isDisabled && kl.supportsFiber)
    try {
      (po = kl.inject(sv)), (ct = kl);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uv;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ls(t)) throw Error(x(200));
  return lv(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!ls(e)) throw Error(x(299));
  var n = !1,
    r = '',
    l = uf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ts(e, 1, !1, null, null, n, !1, r, l)),
    (e[yt] = t.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    new rs(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(x(188))
      : ((e = Object.keys(e).join(',')), Error(x(268, e)));
  return (e = _c(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return an(e);
};
Ie.hydrate = function (e, t, n) {
  if (!Ro(t)) throw Error(x(200));
  return Do(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!ls(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = uf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = of(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[yt] = t.current),
    Ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new No(t);
};
Ie.render = function (e, t, n) {
  if (!Ro(t)) throw Error(x(200));
  return Do(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Ro(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (an(function () {
        Do(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[yt] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = Ju;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ro(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Do(e, t, n, !1, r);
};
Ie.version = '18.3.1-next-f1338f8080-20240426';
function sf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf);
    } catch (e) {
      console.error(e);
    }
}
sf(), (uc.exports = Ie);
var qt = uc.exports,
  af,
  Ta = qt;
(af = Ta.createRoot), Ta.hydrateRoot;
class Gn {
  constructor(t, n) {
    (this.x = t), (this.y = n);
  }
  clone() {
    return new Gn(this.x, this.y);
  }
  isEqual(t) {
    return this.x === t.x && this.y === t.y;
  }
}
const ou = { WIDTH: 8, HEIGHT: 8 };
var ue = [];
for (var ui = 0; ui < 256; ++ui) ue.push((ui + 256).toString(16).slice(1));
function av(e, t = 0) {
  return (
    ue[e[t + 0]] +
    ue[e[t + 1]] +
    ue[e[t + 2]] +
    ue[e[t + 3]] +
    '-' +
    ue[e[t + 4]] +
    ue[e[t + 5]] +
    '-' +
    ue[e[t + 6]] +
    ue[e[t + 7]] +
    '-' +
    ue[e[t + 8]] +
    ue[e[t + 9]] +
    '-' +
    ue[e[t + 10]] +
    ue[e[t + 11]] +
    ue[e[t + 12]] +
    ue[e[t + 13]] +
    ue[e[t + 14]] +
    ue[e[t + 15]]
  ).toLowerCase();
}
var El,
  cv = new Uint8Array(16);
function dv() {
  if (
    !El &&
    ((El =
      typeof crypto < 'u' &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !El)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    );
  return El(cv);
}
var fv =
  typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Pa = { randomUUID: fv };
function fn(e, t, n) {
  if (Pa.randomUUID && !t && !e) return Pa.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || dv)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), av(r);
}
class pv {
  constructor({ position: t, piece: n }) {
    G(this, 'id', fn());
    G(this, 'position');
    G(this, 'piece');
    (this.position = t), (this.piece = n);
  }
}
class hv {
  constructor(t) {
    this.grid = t;
  }
}
class Oa {
  constructor({ color: t }) {
    G(this, 'id', fn());
    G(this, 'type', ze.BISHOP);
    G(this, 'color');
    this.color = t;
  }
  canMove({ chessBoard: t, currentSquare: n, objectiveSquare: r }) {
    let l = r.position.x - n.position.x,
      o = r.position.y - n.position.y;
    if (Math.abs(l) !== Math.abs(o)) return !1;
    (l = l === 0 ? 0 : l / Math.abs(l)), (o = o === 0 ? 0 : o / Math.abs(o));
    const i = new Gn(n.position.x + l, n.position.y + o);
    for (; os(t, i); ) {
      const u = t.grid[i.y][i.x];
      if (r.position.isEqual(i)) return !0;
      if (u.piece) return !1;
      (i.x += l), (i.y += o);
    }
    return !1;
  }
}
class Ia {
  constructor({ color: t }) {
    G(this, 'id', fn());
    G(this, 'type', ze.KING);
    G(this, 'color');
    this.color = t;
  }
  canMove({ currentSquare: t, objectiveSquare: n }) {
    const r = n.position.x - t.position.x,
      l = n.position.y - t.position.y;
    return (
      !(r === 0 && l === 0) &&
      0 <= Math.abs(r) &&
      Math.abs(r) <= 1 &&
      0 <= Math.abs(l) &&
      Math.abs(l) <= 1
    );
  }
}
class ja {
  constructor({ color: t }) {
    G(this, 'id', fn());
    G(this, 'type', ze.KNIGHT);
    G(this, 'color');
    this.color = t;
  }
  canMove({ currentSquare: t, objectiveSquare: n }) {
    const r = n.position.x - t.position.x,
      l = n.position.y - t.position.y;
    return (
      (Math.abs(r) === 2 && Math.abs(l) === 1) ||
      (Math.abs(r) === 1 && Math.abs(l) === 2)
    );
  }
}
class Aa {
  constructor({ color: t }) {
    G(this, 'id', fn());
    G(this, 'type', ze.PAWN);
    G(this, 'color');
    this.color = t;
  }
  canMove({
    chessPiece: t,
    chessBoard: n,
    currentSquare: r,
    objectiveSquare: l,
  }) {
    const o = l.position.x - r.position.x,
      i = l.position.y - r.position.y;
    if (o !== 0) return !1;
    const u =
        t.color === K.BLACK
          ? r.position.y === n.grid.length - 2
          : r.position.y === 1,
      s = t.color === K.BLACK ? -2 : 1,
      a = t.color === K.BLACK ? -1 : 2,
      h = t.color === K.BLACK ? -1 : 1;
    return (
      (u &&
        s <= i &&
        i <= a &&
        !n.grid[r.position.y + h][r.position.x].piece) ||
      (!u && i === h)
    );
  }
}
class Fa {
  constructor({ color: t }) {
    G(this, 'id', fn());
    G(this, 'type', ze.QUEEN);
    G(this, 'color');
    this.color = t;
  }
  canMove({ chessBoard: t, currentSquare: n, objectiveSquare: r }) {
    let l = r.position.x - n.position.x,
      o = r.position.y - n.position.y;
    const i = !((l === 0 && o === 0) || (l !== 0 && o !== 0)),
      u = Math.abs(l) === Math.abs(o);
    if (!i && !u) return !1;
    (l = l === 0 ? 0 : l / Math.abs(l)), (o = o === 0 ? 0 : o / Math.abs(o));
    const s = new Gn(n.position.x + l, n.position.y + o);
    for (; os(t, s); ) {
      const a = t.grid[s.y][s.x];
      if (r.position.isEqual(s)) return !0;
      if (a.piece) return !1;
      (s.x += l), (s.y += o);
    }
    return !1;
  }
}
class Ba {
  constructor({ color: t }) {
    G(this, 'id', fn());
    G(this, 'type', ze.ROOK);
    G(this, 'color');
    this.color = t;
  }
  canMove({ chessBoard: t, currentSquare: n, objectiveSquare: r }) {
    let l = r.position.x - n.position.x,
      o = r.position.y - n.position.y;
    if ((l === 0 && o === 0) || (l !== 0 && o !== 0)) return !1;
    (l = l === 0 ? 0 : l / Math.abs(l)), (o = o === 0 ? 0 : o / Math.abs(o));
    const i = new Gn(n.position.x + l, n.position.y + o);
    for (; os(t, i); ) {
      const u = t.grid[i.y][i.x];
      if (r.position.isEqual(i)) return !0;
      if (u.piece) return !1;
      (i.x += l), (i.y += o);
    }
    return !1;
  }
}
var ze = ((e) => (
    (e.PAWN = 'Pawn'),
    (e.ROOK = 'Row'),
    (e.KNIGHT = 'Knight'),
    (e.BISHOP = 'Bishop'),
    (e.QUEEN = 'Queen'),
    (e.KING = 'King'),
    e
  ))(ze || {}),
  K = ((e) => ((e.WHITE = 'White'), (e.BLACK = 'Black'), e))(K || {});
const vv = () => {
    const e = [];
    for (let t = 0; t < ou.HEIGHT; t++) {
      const n = [];
      for (let r = 0; r < ou.WIDTH; r++) {
        const l = new Gn(r, t),
          o = gv(l);
        n.push(new pv({ position: l, piece: o }));
      }
      e.push(n);
    }
    return new hv(e);
  },
  gv = (e) => {
    const { WIDTH: t, HEIGHT: n } = ou;
    let r;
    const l = e.y === 0,
      o = e.y === 1,
      i = e.y === n - 1,
      u = e.y === n - 2;
    return (
      l
        ? e.x === 0 || e.x === t - 1
          ? (r = new Ba({ color: K.WHITE }))
          : e.x === 1 || e.x === t - 2
            ? (r = new ja({ color: K.WHITE }))
            : e.x === 2 || e.x === t - 3
              ? (r = new Oa({ color: K.WHITE }))
              : e.x === 3
                ? (r = new Fa({ color: K.WHITE }))
                : e.x === 4 && (r = new Ia({ color: K.WHITE }))
        : o
          ? (r = new Aa({ color: K.WHITE }))
          : i
            ? e.x === 0 || e.x === t - 1
              ? (r = new Ba({ color: K.BLACK }))
              : e.x === 1 || e.x === t - 2
                ? (r = new ja({ color: K.BLACK }))
                : e.x === 2 || e.x === t - 3
                  ? (r = new Oa({ color: K.BLACK }))
                  : e.x === 3
                    ? (r = new Fa({ color: K.BLACK }))
                    : e.x === 4 && (r = new Ia({ color: K.BLACK }))
            : u && (r = new Aa({ color: K.BLACK })),
      r
    );
  },
  mv = (e) => {
    const { chessBoardGrid: t, shouldInvert: n } = e,
      r = t.map((l) => l.map((o) => o));
    if (n)
      for (let l = 0; l < r.length; l++)
        for (let o = 0; o < r[l].length; o++) {
          const i = r.length - 1 - l,
            u = r[l].length - 1 - o;
          r[l][o] = t[i][u];
        }
    return r;
  },
  yv = (e, t) => {
    const { grid: n } = e;
    for (let r = 0; r < n.length; r++)
      for (let l = 0; l < n[r].length; l++) {
        const { piece: o } = n[r][l];
        if (o && o.id === t) return o;
      }
  },
  wv = (e, t) => {
    const { grid: n } = e;
    for (let r = 0; r < n.length; r++)
      for (let l = 0; l < n[r].length; l++)
        if (n[r][l].id === t) return n[r][l];
  },
  Sv = (e, t) => {
    var r;
    const { grid: n } = e;
    for (let l = 0; l < n.length; l++)
      for (let o = 0; o < n[l].length; o++)
        if (((r = n[l][o].piece) == null ? void 0 : r.id) === t) return n[l][o];
  },
  os = (e, t) =>
    0 <= t.x && t.x < e.grid.length && 0 <= t.y && t.y < e.grid[0].length,
  xv = () => {
    const [e, t] = m.useState(vv()),
      n = m.useCallback((l) => t(l), []),
      r = m.useCallback((l) => {
        t((o) => {
          const i = l(o);
          return (
            (o.grid = o.grid.map((u) =>
              u.map((s) => {
                const a = i.find(([p]) => p === s.id);
                if (!a) return s;
                const [, h] = a;
                return typeof h == 'function' ? h(s) : h;
              })
            )),
            { ...o }
          );
        });
      }, []);
    return m.useMemo(
      () => ({
        chessBoard: e,
        updateChessBoard: n,
        updateChessBoardSquares: r,
      }),
      [e, n, r]
    );
  },
  kv = ({
    chessPiece: e,
    chessBoard: t,
    currentPosition: n,
    objectivePosition: r,
  }) => {
    const l = t.grid[n.y][n.x];
    if (l.piece !== e) return !1;
    const o = t.grid[r.y][r.x],
      i = { chessBoard: t, currentSquare: l, objectiveSquare: o };
    return e.canMove({ ...i, chessPiece: e });
  },
  Ev = () => {
    const { chessBoard: e, updateChessBoardSquares: t } = xv(),
      n = m.useCallback(
        (r, l) => {
          t((o) => {
            const i = yv(o, r),
              u = Sv(o, r),
              s = wv(o, l);
            return !i || !u || !s || s.piece
              ? []
              : kv({
                    chessPiece: i,
                    chessBoard: o,
                    currentPosition: u.position,
                    objectivePosition: s.position,
                  })
                ? [
                    [u.id, (a) => ({ ...a, piece: void 0 })],
                    [s.id, (a) => ({ ...a, piece: i })],
                  ]
                : [];
          });
        },
        [t]
      );
    return m.useMemo(
      () => ({ chessBoard: e, handleChessBoardSquareOnDrop: n }),
      [e, n]
    );
  },
  _o =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u';
function Zn(e) {
  const t = Object.prototype.toString.call(e);
  return t === '[object Window]' || t === '[object global]';
}
function is(e) {
  return 'nodeType' in e;
}
function Re(e) {
  var t, n;
  return e
    ? Zn(e)
      ? e
      : is(e) &&
          (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null
        ? t
        : window
    : window;
}
function us(e) {
  const { Document: t } = Re(e);
  return e instanceof t;
}
function Jr(e) {
  return Zn(e) ? !1 : e instanceof Re(e).HTMLElement;
}
function cf(e) {
  return e instanceof Re(e).SVGElement;
}
function Jn(e) {
  return e
    ? Zn(e)
      ? e.document
      : is(e)
        ? us(e)
          ? e
          : Jr(e) || cf(e)
            ? e.ownerDocument
            : document
        : document
    : document;
}
const xt = _o ? m.useLayoutEffect : m.useEffect;
function ss(e) {
  const t = m.useRef(e);
  return (
    xt(() => {
      t.current = e;
    }),
    m.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
        r[l] = arguments[l];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function Cv() {
  const e = m.useRef(null),
    t = m.useCallback((r, l) => {
      e.current = setInterval(r, l);
    }, []),
    n = m.useCallback(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []);
  return [t, n];
}
function Wr(e, t) {
  t === void 0 && (t = [e]);
  const n = m.useRef(e);
  return (
    xt(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function qr(e, t) {
  const n = m.useRef();
  return m.useMemo(() => {
    const r = e(n.current);
    return (n.current = r), r;
  }, [...t]);
}
function uo(e) {
  const t = ss(e),
    n = m.useRef(null),
    r = m.useCallback((l) => {
      l !== n.current && (t == null || t(l, n.current)), (n.current = l);
    }, []);
  return [n, r];
}
function iu(e) {
  const t = m.useRef();
  return (
    m.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
let si = {};
function Lo(e, t) {
  return m.useMemo(() => {
    if (t) return t;
    const n = si[e] == null ? 0 : si[e] + 1;
    return (si[e] = n), e + '-' + n;
  }, [e, t]);
}
function df(e) {
  return function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1;
      l < n;
      l++
    )
      r[l - 1] = arguments[l];
    return r.reduce(
      (o, i) => {
        const u = Object.entries(i);
        for (const [s, a] of u) {
          const h = o[s];
          h != null && (o[s] = h + e * a);
        }
        return o;
      },
      { ...t }
    );
  };
}
const Fn = df(1),
  so = df(-1);
function Nv(e) {
  return 'clientX' in e && 'clientY' in e;
}
function ff(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = Re(e.target);
  return t && e instanceof t;
}
function Rv(e) {
  if (!e) return !1;
  const { TouchEvent: t } = Re(e.target);
  return t && e instanceof t;
}
function uu(e) {
  if (Rv(e)) {
    if (e.touches && e.touches.length) {
      const { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      const { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return Nv(e) ? { x: e.clientX, y: e.clientY } : null;
}
const Ua =
  'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function Dv(e) {
  return e.matches(Ua) ? e : e.querySelector(Ua);
}
const _v = { display: 'none' };
function Lv(e) {
  let { id: t, value: n } = e;
  return Ue.createElement('div', { id: t, style: _v }, n);
}
function Mv(e) {
  let { id: t, announcement: n, ariaLiveType: r = 'assertive' } = e;
  const l = {
    position: 'fixed',
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    whiteSpace: 'nowrap',
  };
  return Ue.createElement(
    'div',
    { id: t, style: l, role: 'status', 'aria-live': r, 'aria-atomic': !0 },
    n
  );
}
function zv() {
  const [e, t] = m.useState('');
  return {
    announce: m.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e,
  };
}
const pf = m.createContext(null);
function Tv(e) {
  const t = m.useContext(pf);
  m.useEffect(() => {
    if (!t)
      throw new Error(
        'useDndMonitor must be used within a children of <DndContext>'
      );
    return t(e);
  }, [e, t]);
}
function Pv() {
  const [e] = m.useState(() => new Set()),
    t = m.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [
    m.useCallback(
      (r) => {
        let { type: l, event: o } = r;
        e.forEach((i) => {
          var u;
          return (u = i[l]) == null ? void 0 : u.call(i, o);
        });
      },
      [e]
    ),
    t,
  ];
}
const Ov = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
  },
  Iv = {
    onDragStart(e) {
      let { active: t } = e;
      return 'Picked up draggable item ' + t.id + '.';
    },
    onDragOver(e) {
      let { active: t, over: n } = e;
      return n
        ? 'Draggable item ' +
            t.id +
            ' was moved over droppable area ' +
            n.id +
            '.'
        : 'Draggable item ' + t.id + ' is no longer over a droppable area.';
    },
    onDragEnd(e) {
      let { active: t, over: n } = e;
      return n
        ? 'Draggable item ' + t.id + ' was dropped over droppable area ' + n.id
        : 'Draggable item ' + t.id + ' was dropped.';
    },
    onDragCancel(e) {
      let { active: t } = e;
      return 'Dragging was cancelled. Draggable item ' + t.id + ' was dropped.';
    },
  };
function jv(e) {
  let {
    announcements: t = Iv,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: l = Ov,
  } = e;
  const { announce: o, announcement: i } = zv(),
    u = Lo('DndLiveRegion'),
    [s, a] = m.useState(!1);
  if (
    (m.useEffect(() => {
      a(!0);
    }, []),
    Tv(
      m.useMemo(
        () => ({
          onDragStart(p) {
            let { active: v } = p;
            o(t.onDragStart({ active: v }));
          },
          onDragMove(p) {
            let { active: v, over: g } = p;
            t.onDragMove && o(t.onDragMove({ active: v, over: g }));
          },
          onDragOver(p) {
            let { active: v, over: g } = p;
            o(t.onDragOver({ active: v, over: g }));
          },
          onDragEnd(p) {
            let { active: v, over: g } = p;
            o(t.onDragEnd({ active: v, over: g }));
          },
          onDragCancel(p) {
            let { active: v, over: g } = p;
            o(t.onDragCancel({ active: v, over: g }));
          },
        }),
        [o, t]
      )
    ),
    !s)
  )
    return null;
  const h = Ue.createElement(
    Ue.Fragment,
    null,
    Ue.createElement(Lv, { id: r, value: l.draggable }),
    Ue.createElement(Mv, { id: u, announcement: i })
  );
  return n ? qt.createPortal(h, n) : h;
}
var te;
(function (e) {
  (e.DragStart = 'dragStart'),
    (e.DragMove = 'dragMove'),
    (e.DragEnd = 'dragEnd'),
    (e.DragCancel = 'dragCancel'),
    (e.DragOver = 'dragOver'),
    (e.RegisterDroppable = 'registerDroppable'),
    (e.SetDroppableDisabled = 'setDroppableDisabled'),
    (e.UnregisterDroppable = 'unregisterDroppable');
})(te || (te = {}));
function ao() {}
const ot = Object.freeze({ x: 0, y: 0 });
function Av(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return r - n;
}
function Fv(e, t) {
  if (!e || e.length === 0) return null;
  const [n] = e;
  return n[t];
}
function Bv(e, t) {
  const n = Math.max(t.top, e.top),
    r = Math.max(t.left, e.left),
    l = Math.min(t.left + t.width, e.left + e.width),
    o = Math.min(t.top + t.height, e.top + e.height),
    i = l - r,
    u = o - n;
  if (r < l && n < o) {
    const s = t.width * t.height,
      a = e.width * e.height,
      h = i * u,
      p = h / (s + a - h);
    return Number(p.toFixed(4));
  }
  return 0;
}
const Uv = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const l = [];
  for (const o of r) {
    const { id: i } = o,
      u = n.get(i);
    if (u) {
      const s = Bv(u, t);
      s > 0 && l.push({ id: i, data: { droppableContainer: o, value: s } });
    }
  }
  return l.sort(Av);
};
function Hv(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1,
  };
}
function hf(e, t) {
  return e && t ? { x: e.left - t.left, y: e.top - t.top } : ot;
}
function $v(e) {
  return function (n) {
    for (
      var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), o = 1;
      o < r;
      o++
    )
      l[o - 1] = arguments[o];
    return l.reduce(
      (i, u) => ({
        ...i,
        top: i.top + e * u.y,
        bottom: i.bottom + e * u.y,
        left: i.left + e * u.x,
        right: i.right + e * u.x,
      }),
      { ...n }
    );
  };
}
const Vv = $v(1);
function Wv(e) {
  if (e.startsWith('matrix3d(')) {
    const t = e.slice(9, -1).split(/, /);
    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
  } else if (e.startsWith('matrix(')) {
    const t = e.slice(7, -1).split(/, /);
    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
  }
  return null;
}
function Kv(e, t, n) {
  const r = Wv(t);
  if (!r) return e;
  const { scaleX: l, scaleY: o, x: i, y: u } = r,
    s = e.left - i - (1 - l) * parseFloat(n),
    a = e.top - u - (1 - o) * parseFloat(n.slice(n.indexOf(' ') + 1)),
    h = l ? e.width / l : e.width,
    p = o ? e.height / o : e.height;
  return { width: h, height: p, top: a, right: s + h, bottom: a + p, left: s };
}
const Qv = { ignoreTransform: !1 };
function br(e, t) {
  t === void 0 && (t = Qv);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const { transform: a, transformOrigin: h } = Re(e).getComputedStyle(e);
    a && (n = Kv(n, a, h));
  }
  const { top: r, left: l, width: o, height: i, bottom: u, right: s } = n;
  return { top: r, left: l, width: o, height: i, bottom: u, right: s };
}
function Ha(e) {
  return br(e, { ignoreTransform: !0 });
}
function Yv(e) {
  const t = e.innerWidth,
    n = e.innerHeight;
  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function Xv(e, t) {
  return (
    t === void 0 && (t = Re(e).getComputedStyle(e)), t.position === 'fixed'
  );
}
function Gv(e, t) {
  t === void 0 && (t = Re(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ['overflow', 'overflowX', 'overflowY'].some((l) => {
    const o = t[l];
    return typeof o == 'string' ? n.test(o) : !1;
  });
}
function as(e, t) {
  const n = [];
  function r(l) {
    if ((t != null && n.length >= t) || !l) return n;
    if (us(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!Jr(l) || cf(l) || n.includes(l)) return n;
    const o = Re(e).getComputedStyle(l);
    return l !== e && Gv(l, o) && n.push(l), Xv(l, o) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function vf(e) {
  const [t] = as(e, 1);
  return t ?? null;
}
function ai(e) {
  return !_o || !e
    ? null
    : Zn(e)
      ? e
      : is(e)
        ? us(e) || e === Jn(e).scrollingElement
          ? window
          : Jr(e)
            ? e
            : null
        : null;
}
function gf(e) {
  return Zn(e) ? e.scrollX : e.scrollLeft;
}
function mf(e) {
  return Zn(e) ? e.scrollY : e.scrollTop;
}
function su(e) {
  return { x: gf(e), y: mf(e) };
}
var le;
(function (e) {
  (e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward');
})(le || (le = {}));
function yf(e) {
  return !_o || !e ? !1 : e === document.scrollingElement;
}
function wf(e) {
  const t = { x: 0, y: 0 },
    n = yf(e)
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: e.clientHeight, width: e.clientWidth },
    r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
    l = e.scrollTop <= t.y,
    o = e.scrollLeft <= t.x,
    i = e.scrollTop >= r.y,
    u = e.scrollLeft >= r.x;
  return {
    isTop: l,
    isLeft: o,
    isBottom: i,
    isRight: u,
    maxScroll: r,
    minScroll: t,
  };
}
const Zv = { x: 0.2, y: 0.2 };
function Jv(e, t, n, r, l) {
  let { top: o, left: i, right: u, bottom: s } = n;
  r === void 0 && (r = 10), l === void 0 && (l = Zv);
  const { isTop: a, isBottom: h, isLeft: p, isRight: v } = wf(e),
    g = { x: 0, y: 0 },
    S = { x: 0, y: 0 },
    y = { height: t.height * l.y, width: t.width * l.x };
  return (
    !a && o <= t.top + y.height
      ? ((g.y = le.Backward),
        (S.y = r * Math.abs((t.top + y.height - o) / y.height)))
      : !h &&
        s >= t.bottom - y.height &&
        ((g.y = le.Forward),
        (S.y = r * Math.abs((t.bottom - y.height - s) / y.height))),
    !v && u >= t.right - y.width
      ? ((g.x = le.Forward),
        (S.x = r * Math.abs((t.right - y.width - u) / y.width)))
      : !p &&
        i <= t.left + y.width &&
        ((g.x = le.Backward),
        (S.x = r * Math.abs((t.left + y.width - i) / y.width))),
    { direction: g, speed: S }
  );
}
function qv(e) {
  if (e === document.scrollingElement) {
    const { innerWidth: o, innerHeight: i } = window;
    return { top: 0, left: 0, right: o, bottom: i, width: o, height: i };
  }
  const { top: t, left: n, right: r, bottom: l } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: l,
    width: e.clientWidth,
    height: e.clientHeight,
  };
}
function Sf(e) {
  return e.reduce((t, n) => Fn(t, su(n)), ot);
}
function bv(e) {
  return e.reduce((t, n) => t + gf(n), 0);
}
function e0(e) {
  return e.reduce((t, n) => t + mf(n), 0);
}
function t0(e, t) {
  if ((t === void 0 && (t = br), !e)) return;
  const { top: n, left: r, bottom: l, right: o } = t(e);
  vf(e) &&
    (l <= 0 || o <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
    e.scrollIntoView({ block: 'center', inline: 'center' });
}
const n0 = [
  ['x', ['left', 'right'], bv],
  ['y', ['top', 'bottom'], e0],
];
class cs {
  constructor(t, n) {
    (this.rect = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.right = void 0),
      (this.left = void 0);
    const r = as(n),
      l = Sf(r);
    (this.rect = { ...t }), (this.width = t.width), (this.height = t.height);
    for (const [o, i, u] of n0)
      for (const s of i)
        Object.defineProperty(this, s, {
          get: () => {
            const a = u(r),
              h = l[o] - a;
            return this.rect[s] + h;
          },
          enumerable: !0,
        });
    Object.defineProperty(this, 'rect', { enumerable: !1 });
  }
}
class Cr {
  constructor(t) {
    (this.target = void 0),
      (this.listeners = []),
      (this.removeAll = () => {
        this.listeners.forEach((n) => {
          var r;
          return (r = this.target) == null
            ? void 0
            : r.removeEventListener(...n);
        });
      }),
      (this.target = t);
  }
  add(t, n, r) {
    var l;
    (l = this.target) == null || l.addEventListener(t, n, r),
      this.listeners.push([t, n, r]);
  }
}
function r0(e) {
  const { EventTarget: t } = Re(e);
  return e instanceof t ? e : Jn(e);
}
function ci(e, t) {
  const n = Math.abs(e.x),
    r = Math.abs(e.y);
  return typeof t == 'number'
    ? Math.sqrt(n ** 2 + r ** 2) > t
    : 'x' in t && 'y' in t
      ? n > t.x && r > t.y
      : 'x' in t
        ? n > t.x
        : 'y' in t
          ? r > t.y
          : !1;
}
var Be;
(function (e) {
  (e.Click = 'click'),
    (e.DragStart = 'dragstart'),
    (e.Keydown = 'keydown'),
    (e.ContextMenu = 'contextmenu'),
    (e.Resize = 'resize'),
    (e.SelectionChange = 'selectionchange'),
    (e.VisibilityChange = 'visibilitychange');
})(Be || (Be = {}));
function $a(e) {
  e.preventDefault();
}
function l0(e) {
  e.stopPropagation();
}
var B;
(function (e) {
  (e.Space = 'Space'),
    (e.Down = 'ArrowDown'),
    (e.Right = 'ArrowRight'),
    (e.Left = 'ArrowLeft'),
    (e.Up = 'ArrowUp'),
    (e.Esc = 'Escape'),
    (e.Enter = 'Enter');
})(B || (B = {}));
const xf = {
    start: [B.Space, B.Enter],
    cancel: [B.Esc],
    end: [B.Space, B.Enter],
  },
  o0 = (e, t) => {
    let { currentCoordinates: n } = t;
    switch (e.code) {
      case B.Right:
        return { ...n, x: n.x + 25 };
      case B.Left:
        return { ...n, x: n.x - 25 };
      case B.Down:
        return { ...n, y: n.y + 25 };
      case B.Up:
        return { ...n, y: n.y - 25 };
    }
  };
class kf {
  constructor(t) {
    (this.props = void 0),
      (this.autoScrollEnabled = !1),
      (this.referenceCoordinates = void 0),
      (this.listeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t);
    const {
      event: { target: n },
    } = t;
    (this.props = t),
      (this.listeners = new Cr(Jn(n))),
      (this.windowListeners = new Cr(Re(n))),
      (this.handleKeyDown = this.handleKeyDown.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      this.attach();
  }
  attach() {
    this.handleStart(),
      this.windowListeners.add(Be.Resize, this.handleCancel),
      this.windowListeners.add(Be.VisibilityChange, this.handleCancel),
      setTimeout(() => this.listeners.add(Be.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const { activeNode: t, onStart: n } = this.props,
      r = t.node.current;
    r && t0(r), n(ot);
  }
  handleKeyDown(t) {
    if (ff(t)) {
      const { active: n, context: r, options: l } = this.props,
        {
          keyboardCodes: o = xf,
          coordinateGetter: i = o0,
          scrollBehavior: u = 'smooth',
        } = l,
        { code: s } = t;
      if (o.end.includes(s)) {
        this.handleEnd(t);
        return;
      }
      if (o.cancel.includes(s)) {
        this.handleCancel(t);
        return;
      }
      const { collisionRect: a } = r.current,
        h = a ? { x: a.left, y: a.top } : ot;
      this.referenceCoordinates || (this.referenceCoordinates = h);
      const p = i(t, { active: n, context: r.current, currentCoordinates: h });
      if (p) {
        const v = so(p, h),
          g = { x: 0, y: 0 },
          { scrollableAncestors: S } = r.current;
        for (const y of S) {
          const _ = t.code,
            {
              isTop: d,
              isRight: c,
              isLeft: f,
              isBottom: w,
              maxScroll: k,
              minScroll: N,
            } = wf(y),
            E = qv(y),
            C = {
              x: Math.min(
                _ === B.Right ? E.right - E.width / 2 : E.right,
                Math.max(_ === B.Right ? E.left : E.left + E.width / 2, p.x)
              ),
              y: Math.min(
                _ === B.Down ? E.bottom - E.height / 2 : E.bottom,
                Math.max(_ === B.Down ? E.top : E.top + E.height / 2, p.y)
              ),
            },
            T = (_ === B.Right && !c) || (_ === B.Left && !f),
            L = (_ === B.Down && !w) || (_ === B.Up && !d);
          if (T && C.x !== p.x) {
            const I = y.scrollLeft + v.x,
              ve = (_ === B.Right && I <= k.x) || (_ === B.Left && I >= N.x);
            if (ve && !v.y) {
              y.scrollTo({ left: I, behavior: u });
              return;
            }
            ve
              ? (g.x = y.scrollLeft - I)
              : (g.x = _ === B.Right ? y.scrollLeft - k.x : y.scrollLeft - N.x),
              g.x && y.scrollBy({ left: -g.x, behavior: u });
            break;
          } else if (L && C.y !== p.y) {
            const I = y.scrollTop + v.y,
              ve = (_ === B.Down && I <= k.y) || (_ === B.Up && I >= N.y);
            if (ve && !v.x) {
              y.scrollTo({ top: I, behavior: u });
              return;
            }
            ve
              ? (g.y = y.scrollTop - I)
              : (g.y = _ === B.Down ? y.scrollTop - k.y : y.scrollTop - N.y),
              g.y && y.scrollBy({ top: -g.y, behavior: u });
            break;
          }
        }
        this.handleMove(t, Fn(so(p, this.referenceCoordinates), g));
      }
    }
  }
  handleMove(t, n) {
    const { onMove: r } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const { onEnd: n } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const { onCancel: n } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
kf.activators = [
  {
    eventName: 'onKeyDown',
    handler: (e, t, n) => {
      let { keyboardCodes: r = xf, onActivation: l } = t,
        { active: o } = n;
      const { code: i } = e.nativeEvent;
      if (r.start.includes(i)) {
        const u = o.activatorNode.current;
        return u && e.target !== u
          ? !1
          : (e.preventDefault(), l == null || l({ event: e.nativeEvent }), !0);
      }
      return !1;
    },
  },
];
function Va(e) {
  return !!(e && 'distance' in e);
}
function Wa(e) {
  return !!(e && 'delay' in e);
}
class ds {
  constructor(t, n, r) {
    var l;
    r === void 0 && (r = r0(t.event.target)),
      (this.props = void 0),
      (this.events = void 0),
      (this.autoScrollEnabled = !0),
      (this.document = void 0),
      (this.activated = !1),
      (this.initialCoordinates = void 0),
      (this.timeoutId = null),
      (this.listeners = void 0),
      (this.documentListeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t),
      (this.events = n);
    const { event: o } = t,
      { target: i } = o;
    (this.props = t),
      (this.events = n),
      (this.document = Jn(i)),
      (this.documentListeners = new Cr(this.document)),
      (this.listeners = new Cr(r)),
      (this.windowListeners = new Cr(Re(i))),
      (this.initialCoordinates = (l = uu(o)) != null ? l : ot),
      (this.handleStart = this.handleStart.bind(this)),
      (this.handleMove = this.handleMove.bind(this)),
      (this.handleEnd = this.handleEnd.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      (this.handleKeydown = this.handleKeydown.bind(this)),
      (this.removeTextSelection = this.removeTextSelection.bind(this)),
      this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: { activationConstraint: n, bypassActivationConstraint: r },
      },
    } = this;
    if (
      (this.listeners.add(t.move.name, this.handleMove, { passive: !1 }),
      this.listeners.add(t.end.name, this.handleEnd),
      this.windowListeners.add(Be.Resize, this.handleCancel),
      this.windowListeners.add(Be.DragStart, $a),
      this.windowListeners.add(Be.VisibilityChange, this.handleCancel),
      this.windowListeners.add(Be.ContextMenu, $a),
      this.documentListeners.add(Be.Keydown, this.handleKeydown),
      n)
    ) {
      if (
        r != null &&
        r({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options,
        })
      )
        return this.handleStart();
      if (Wa(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
      if (Va(n)) return;
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(),
      this.windowListeners.removeAll(),
      setTimeout(this.documentListeners.removeAll, 50),
      this.timeoutId !== null &&
        (clearTimeout(this.timeoutId), (this.timeoutId = null));
  }
  handleStart() {
    const { initialCoordinates: t } = this,
      { onStart: n } = this.props;
    t &&
      ((this.activated = !0),
      this.documentListeners.add(Be.Click, l0, { capture: !0 }),
      this.removeTextSelection(),
      this.documentListeners.add(Be.SelectionChange, this.removeTextSelection),
      n(t));
  }
  handleMove(t) {
    var n;
    const { activated: r, initialCoordinates: l, props: o } = this,
      {
        onMove: i,
        options: { activationConstraint: u },
      } = o;
    if (!l) return;
    const s = (n = uu(t)) != null ? n : ot,
      a = so(l, s);
    if (!r && u) {
      if (Va(u)) {
        if (u.tolerance != null && ci(a, u.tolerance))
          return this.handleCancel();
        if (ci(a, u.distance)) return this.handleStart();
      }
      return Wa(u) && ci(a, u.tolerance) ? this.handleCancel() : void 0;
    }
    t.cancelable && t.preventDefault(), i(s);
  }
  handleEnd() {
    const { onEnd: t } = this.props;
    this.detach(), t();
  }
  handleCancel() {
    const { onCancel: t } = this.props;
    this.detach(), t();
  }
  handleKeydown(t) {
    t.code === B.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const i0 = { move: { name: 'pointermove' }, end: { name: 'pointerup' } };
class Ef extends ds {
  constructor(t) {
    const { event: n } = t,
      r = Jn(n.target);
    super(t, i0, r);
  }
}
Ef.activators = [
  {
    eventName: 'onPointerDown',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return !n.isPrimary || n.button !== 0
        ? !1
        : (r == null || r({ event: n }), !0);
    },
  },
];
const u0 = { move: { name: 'mousemove' }, end: { name: 'mouseup' } };
var au;
(function (e) {
  e[(e.RightClick = 2)] = 'RightClick';
})(au || (au = {}));
class s0 extends ds {
  constructor(t) {
    super(t, u0, Jn(t.event.target));
  }
}
s0.activators = [
  {
    eventName: 'onMouseDown',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return n.button === au.RightClick
        ? !1
        : (r == null || r({ event: n }), !0);
    },
  },
];
const di = { move: { name: 'touchmove' }, end: { name: 'touchend' } };
class a0 extends ds {
  constructor(t) {
    super(t, di);
  }
  static setup() {
    return (
      window.addEventListener(di.move.name, t, { capture: !1, passive: !1 }),
      function () {
        window.removeEventListener(di.move.name, t);
      }
    );
    function t() {}
  }
}
a0.activators = [
  {
    eventName: 'onTouchStart',
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      const { touches: l } = n;
      return l.length > 1 ? !1 : (r == null || r({ event: n }), !0);
    },
  },
];
var Nr;
(function (e) {
  (e[(e.Pointer = 0)] = 'Pointer'),
    (e[(e.DraggableRect = 1)] = 'DraggableRect');
})(Nr || (Nr = {}));
var co;
(function (e) {
  (e[(e.TreeOrder = 0)] = 'TreeOrder'),
    (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder');
})(co || (co = {}));
function c0(e) {
  let {
    acceleration: t,
    activator: n = Nr.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: o,
    interval: i = 5,
    order: u = co.TreeOrder,
    pointerCoordinates: s,
    scrollableAncestors: a,
    scrollableAncestorRects: h,
    delta: p,
    threshold: v,
  } = e;
  const g = f0({ delta: p, disabled: !o }),
    [S, y] = Cv(),
    _ = m.useRef({ x: 0, y: 0 }),
    d = m.useRef({ x: 0, y: 0 }),
    c = m.useMemo(() => {
      switch (n) {
        case Nr.Pointer:
          return s ? { top: s.y, bottom: s.y, left: s.x, right: s.x } : null;
        case Nr.DraggableRect:
          return l;
      }
    }, [n, l, s]),
    f = m.useRef(null),
    w = m.useCallback(() => {
      const N = f.current;
      if (!N) return;
      const E = _.current.x * d.current.x,
        C = _.current.y * d.current.y;
      N.scrollBy(E, C);
    }, []),
    k = m.useMemo(() => (u === co.TreeOrder ? [...a].reverse() : a), [u, a]);
  m.useEffect(() => {
    if (!o || !a.length || !c) {
      y();
      return;
    }
    for (const N of k) {
      if ((r == null ? void 0 : r(N)) === !1) continue;
      const E = a.indexOf(N),
        C = h[E];
      if (!C) continue;
      const { direction: T, speed: L } = Jv(N, C, c, t, v);
      for (const I of ['x', 'y']) g[I][T[I]] || ((L[I] = 0), (T[I] = 0));
      if (L.x > 0 || L.y > 0) {
        y(), (f.current = N), S(w, i), (_.current = L), (d.current = T);
        return;
      }
    }
    (_.current = { x: 0, y: 0 }), (d.current = { x: 0, y: 0 }), y();
  }, [
    t,
    w,
    r,
    y,
    o,
    i,
    JSON.stringify(c),
    JSON.stringify(g),
    S,
    a,
    k,
    h,
    JSON.stringify(v),
  ]);
}
const d0 = {
  x: { [le.Backward]: !1, [le.Forward]: !1 },
  y: { [le.Backward]: !1, [le.Forward]: !1 },
};
function f0(e) {
  let { delta: t, disabled: n } = e;
  const r = iu(t);
  return qr(
    (l) => {
      if (n || !r || !l) return d0;
      const o = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
      return {
        x: {
          [le.Backward]: l.x[le.Backward] || o.x === -1,
          [le.Forward]: l.x[le.Forward] || o.x === 1,
        },
        y: {
          [le.Backward]: l.y[le.Backward] || o.y === -1,
          [le.Forward]: l.y[le.Forward] || o.y === 1,
        },
      };
    },
    [n, t, r]
  );
}
function p0(e, t) {
  const n = t !== null ? e.get(t) : void 0,
    r = n ? n.node.current : null;
  return qr(
    (l) => {
      var o;
      return t === null ? null : (o = r ?? l) != null ? o : null;
    },
    [r, t]
  );
}
function h0(e, t) {
  return m.useMemo(
    () =>
      e.reduce((n, r) => {
        const { sensor: l } = r,
          o = l.activators.map((i) => ({
            eventName: i.eventName,
            handler: t(i.handler, r),
          }));
        return [...n, ...o];
      }, []),
    [e, t]
  );
}
var Kr;
(function (e) {
  (e[(e.Always = 0)] = 'Always'),
    (e[(e.BeforeDragging = 1)] = 'BeforeDragging'),
    (e[(e.WhileDragging = 2)] = 'WhileDragging');
})(Kr || (Kr = {}));
var cu;
(function (e) {
  e.Optimized = 'optimized';
})(cu || (cu = {}));
const Ka = new Map();
function v0(e, t) {
  let { dragging: n, dependencies: r, config: l } = t;
  const [o, i] = m.useState(null),
    { frequency: u, measure: s, strategy: a } = l,
    h = m.useRef(e),
    p = _(),
    v = Wr(p),
    g = m.useCallback(
      function (d) {
        d === void 0 && (d = []),
          !v.current &&
            i((c) =>
              c === null ? d : c.concat(d.filter((f) => !c.includes(f)))
            );
      },
      [v]
    ),
    S = m.useRef(null),
    y = qr(
      (d) => {
        if (p && !n) return Ka;
        if (!d || d === Ka || h.current !== e || o != null) {
          const c = new Map();
          for (let f of e) {
            if (!f) continue;
            if (o && o.length > 0 && !o.includes(f.id) && f.rect.current) {
              c.set(f.id, f.rect.current);
              continue;
            }
            const w = f.node.current,
              k = w ? new cs(s(w), w) : null;
            (f.rect.current = k), k && c.set(f.id, k);
          }
          return c;
        }
        return d;
      },
      [e, o, n, p, s]
    );
  return (
    m.useEffect(() => {
      h.current = e;
    }, [e]),
    m.useEffect(() => {
      p || g();
    }, [n, p]),
    m.useEffect(() => {
      o && o.length > 0 && i(null);
    }, [JSON.stringify(o)]),
    m.useEffect(() => {
      p ||
        typeof u != 'number' ||
        S.current !== null ||
        (S.current = setTimeout(() => {
          g(), (S.current = null);
        }, u));
    }, [u, p, g, ...r]),
    {
      droppableRects: y,
      measureDroppableContainers: g,
      measuringScheduled: o != null,
    }
  );
  function _() {
    switch (a) {
      case Kr.Always:
        return !1;
      case Kr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Cf(e, t) {
  return qr(
    (n) => (e ? n || (typeof t == 'function' ? t(e) : e) : null),
    [t, e]
  );
}
function g0(e, t) {
  return Cf(e, t);
}
function m0(e) {
  let { callback: t, disabled: n } = e;
  const r = ss(t),
    l = m.useMemo(() => {
      if (n || typeof window > 'u' || typeof window.MutationObserver > 'u')
        return;
      const { MutationObserver: o } = window;
      return new o(r);
    }, [r, n]);
  return m.useEffect(() => () => (l == null ? void 0 : l.disconnect()), [l]), l;
}
function Mo(e) {
  let { callback: t, disabled: n } = e;
  const r = ss(t),
    l = m.useMemo(() => {
      if (n || typeof window > 'u' || typeof window.ResizeObserver > 'u')
        return;
      const { ResizeObserver: o } = window;
      return new o(r);
    }, [n]);
  return m.useEffect(() => () => (l == null ? void 0 : l.disconnect()), [l]), l;
}
function y0(e) {
  return new cs(br(e), e);
}
function Qa(e, t, n) {
  t === void 0 && (t = y0);
  const [r, l] = m.useReducer(u, null),
    o = m0({
      callback(s) {
        if (e)
          for (const a of s) {
            const { type: h, target: p } = a;
            if (
              h === 'childList' &&
              p instanceof HTMLElement &&
              p.contains(e)
            ) {
              l();
              break;
            }
          }
      },
    }),
    i = Mo({ callback: l });
  return (
    xt(() => {
      l(),
        e
          ? (i == null || i.observe(e),
            o == null ||
              o.observe(document.body, { childList: !0, subtree: !0 }))
          : (i == null || i.disconnect(), o == null || o.disconnect());
    }, [e]),
    r
  );
  function u(s) {
    if (!e) return null;
    if (e.isConnected === !1) {
      var a;
      return (a = s ?? n) != null ? a : null;
    }
    const h = t(e);
    return JSON.stringify(s) === JSON.stringify(h) ? s : h;
  }
}
function w0(e) {
  const t = Cf(e);
  return hf(e, t);
}
const Ya = [];
function S0(e) {
  const t = m.useRef(e),
    n = qr(
      (r) =>
        e
          ? r &&
            r !== Ya &&
            e &&
            t.current &&
            e.parentNode === t.current.parentNode
            ? r
            : as(e)
          : Ya,
      [e]
    );
  return (
    m.useEffect(() => {
      t.current = e;
    }, [e]),
    n
  );
}
function x0(e) {
  const [t, n] = m.useState(null),
    r = m.useRef(e),
    l = m.useCallback((o) => {
      const i = ai(o.target);
      i && n((u) => (u ? (u.set(i, su(i)), new Map(u)) : null));
    }, []);
  return (
    m.useEffect(() => {
      const o = r.current;
      if (e !== o) {
        i(o);
        const u = e
          .map((s) => {
            const a = ai(s);
            return a
              ? (a.addEventListener('scroll', l, { passive: !0 }), [a, su(a)])
              : null;
          })
          .filter((s) => s != null);
        n(u.length ? new Map(u) : null), (r.current = e);
      }
      return () => {
        i(e), i(o);
      };
      function i(u) {
        u.forEach((s) => {
          const a = ai(s);
          a == null || a.removeEventListener('scroll', l);
        });
      }
    }, [l, e]),
    m.useMemo(
      () =>
        e.length
          ? t
            ? Array.from(t.values()).reduce((o, i) => Fn(o, i), ot)
            : Sf(e)
          : ot,
      [e, t]
    )
  );
}
function Xa(e, t) {
  t === void 0 && (t = []);
  const n = m.useRef(null);
  return (
    m.useEffect(() => {
      n.current = null;
    }, t),
    m.useEffect(() => {
      const r = e !== ot;
      r && !n.current && (n.current = e), !r && n.current && (n.current = null);
    }, [e]),
    n.current ? so(e, n.current) : ot
  );
}
function k0(e) {
  m.useEffect(
    () => {
      if (!_o) return;
      const t = e.map((n) => {
        let { sensor: r } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t) n == null || n();
      };
    },
    e.map((t) => {
      let { sensor: n } = t;
      return n;
    })
  );
}
function E0(e, t) {
  return m.useMemo(
    () =>
      e.reduce((n, r) => {
        let { eventName: l, handler: o } = r;
        return (
          (n[l] = (i) => {
            o(i, t);
          }),
          n
        );
      }, {}),
    [e, t]
  );
}
function Nf(e) {
  return m.useMemo(() => (e ? Yv(e) : null), [e]);
}
const fi = [];
function C0(e, t) {
  t === void 0 && (t = br);
  const [n] = e,
    r = Nf(n ? Re(n) : null),
    [l, o] = m.useReducer(u, fi),
    i = Mo({ callback: o });
  return (
    e.length > 0 && l === fi && o(),
    xt(() => {
      e.length
        ? e.forEach((s) => (i == null ? void 0 : i.observe(s)))
        : (i == null || i.disconnect(), o());
    }, [e]),
    l
  );
  function u() {
    return e.length ? e.map((s) => (yf(s) ? r : new cs(t(s), s))) : fi;
  }
}
function N0(e) {
  if (!e) return null;
  if (e.children.length > 1) return e;
  const t = e.children[0];
  return Jr(t) ? t : e;
}
function R0(e) {
  let { measure: t } = e;
  const [n, r] = m.useState(null),
    l = m.useCallback(
      (a) => {
        for (const { target: h } of a)
          if (Jr(h)) {
            r((p) => {
              const v = t(h);
              return p ? { ...p, width: v.width, height: v.height } : v;
            });
            break;
          }
      },
      [t]
    ),
    o = Mo({ callback: l }),
    i = m.useCallback(
      (a) => {
        const h = N0(a);
        o == null || o.disconnect(),
          h && (o == null || o.observe(h)),
          r(h ? t(h) : null);
      },
      [t, o]
    ),
    [u, s] = uo(i);
  return m.useMemo(() => ({ nodeRef: u, rect: n, setRef: s }), [n, u, s]);
}
const D0 = [
    { sensor: Ef, options: {} },
    { sensor: kf, options: {} },
  ],
  _0 = { current: {} },
  jl = {
    draggable: { measure: Ha },
    droppable: {
      measure: Ha,
      strategy: Kr.WhileDragging,
      frequency: cu.Optimized,
    },
    dragOverlay: { measure: br },
  };
class Rr extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let { disabled: n } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null
      ? n
      : void 0;
  }
}
const L0 = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map(),
    droppableRects: new Map(),
    droppableContainers: new Rr(),
    over: null,
    dragOverlay: { nodeRef: { current: null }, rect: null, setRef: ao },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: jl,
    measureDroppableContainers: ao,
    windowRect: null,
    measuringScheduled: !1,
  },
  M0 = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: { draggable: '' },
    dispatch: ao,
    draggableNodes: new Map(),
    over: null,
    measureDroppableContainers: ao,
  },
  zo = m.createContext(M0),
  z0 = m.createContext(L0);
function T0() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new Rr() },
  };
}
function P0(e, t) {
  switch (t.type) {
    case te.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active,
        },
      };
    case te.DragMove:
      return e.draggable.active
        ? {
            ...e,
            draggable: {
              ...e.draggable,
              translate: {
                x: t.coordinates.x - e.draggable.initialCoordinates.x,
                y: t.coordinates.y - e.draggable.initialCoordinates.y,
              },
            },
          }
        : e;
    case te.DragEnd:
    case te.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case te.RegisterDroppable: {
      const { element: n } = t,
        { id: r } = n,
        l = new Rr(e.droppable.containers);
      return (
        l.set(r, n), { ...e, droppable: { ...e.droppable, containers: l } }
      );
    }
    case te.SetDroppableDisabled: {
      const { id: n, key: r, disabled: l } = t,
        o = e.droppable.containers.get(n);
      if (!o || r !== o.key) return e;
      const i = new Rr(e.droppable.containers);
      return (
        i.set(n, { ...o, disabled: l }),
        { ...e, droppable: { ...e.droppable, containers: i } }
      );
    }
    case te.UnregisterDroppable: {
      const { id: n, key: r } = t,
        l = e.droppable.containers.get(n);
      if (!l || r !== l.key) return e;
      const o = new Rr(e.droppable.containers);
      return (
        o.delete(n), { ...e, droppable: { ...e.droppable, containers: o } }
      );
    }
    default:
      return e;
  }
}
function O0(e) {
  let { disabled: t } = e;
  const { active: n, activatorEvent: r, draggableNodes: l } = m.useContext(zo),
    o = iu(r),
    i = iu(n == null ? void 0 : n.id);
  return (
    m.useEffect(() => {
      if (!t && !r && o && i != null) {
        if (!ff(o) || document.activeElement === o.target) return;
        const u = l.get(i);
        if (!u) return;
        const { activatorNode: s, node: a } = u;
        if (!s.current && !a.current) return;
        requestAnimationFrame(() => {
          for (const h of [s.current, a.current]) {
            if (!h) continue;
            const p = Dv(h);
            if (p) {
              p.focus();
              break;
            }
          }
        });
      }
    }, [r, t, l, i, o]),
    null
  );
}
function I0(e, t) {
  let { transform: n, ...r } = t;
  return e != null && e.length
    ? e.reduce((l, o) => o({ transform: l, ...r }), n)
    : n;
}
function j0(e) {
  return m.useMemo(
    () => ({
      draggable: { ...jl.draggable, ...(e == null ? void 0 : e.draggable) },
      droppable: { ...jl.droppable, ...(e == null ? void 0 : e.droppable) },
      dragOverlay: {
        ...jl.dragOverlay,
        ...(e == null ? void 0 : e.dragOverlay),
      },
    }),
    [
      e == null ? void 0 : e.draggable,
      e == null ? void 0 : e.droppable,
      e == null ? void 0 : e.dragOverlay,
    ]
  );
}
function A0(e) {
  let { activeNode: t, measure: n, initialRect: r, config: l = !0 } = e;
  const o = m.useRef(!1),
    { x: i, y: u } = typeof l == 'boolean' ? { x: l, y: l } : l;
  xt(() => {
    if ((!i && !u) || !t) {
      o.current = !1;
      return;
    }
    if (o.current || !r) return;
    const a = t == null ? void 0 : t.node.current;
    if (!a || a.isConnected === !1) return;
    const h = n(a),
      p = hf(h, r);
    if (
      (i || (p.x = 0),
      u || (p.y = 0),
      (o.current = !0),
      Math.abs(p.x) > 0 || Math.abs(p.y) > 0)
    ) {
      const v = vf(a);
      v && v.scrollBy({ top: p.y, left: p.x });
    }
  }, [t, i, u, r, n]);
}
const Rf = m.createContext({ ...ot, scaleX: 1, scaleY: 1 });
var Lt;
(function (e) {
  (e[(e.Uninitialized = 0)] = 'Uninitialized'),
    (e[(e.Initializing = 1)] = 'Initializing'),
    (e[(e.Initialized = 2)] = 'Initialized');
})(Lt || (Lt = {}));
const F0 = m.memo(function (t) {
    var n, r, l, o;
    let {
      id: i,
      accessibility: u,
      autoScroll: s = !0,
      children: a,
      sensors: h = D0,
      collisionDetection: p = Uv,
      measuring: v,
      modifiers: g,
      ...S
    } = t;
    const y = m.useReducer(P0, void 0, T0),
      [_, d] = y,
      [c, f] = Pv(),
      [w, k] = m.useState(Lt.Uninitialized),
      N = w === Lt.Initialized,
      {
        draggable: { active: E, nodes: C, translate: T },
        droppable: { containers: L },
      } = _,
      I = E ? C.get(E) : null,
      ve = m.useRef({ initial: null, translated: null }),
      ge = m.useMemo(() => {
        var ie;
        return E != null
          ? {
              id: E,
              data: (ie = I == null ? void 0 : I.data) != null ? ie : _0,
              rect: ve,
            }
          : null;
      }, [E, I]),
      Ye = m.useRef(null),
      [el, pn] = m.useState(null),
      [De, R] = m.useState(null),
      M = Wr(S, Object.values(S)),
      z = Lo('DndDescribedBy', i),
      V = m.useMemo(() => L.getEnabled(), [L]),
      F = j0(v),
      {
        droppableRects: Xe,
        measureDroppableContainers: Ae,
        measuringScheduled: hn,
      } = v0(V, { dragging: N, dependencies: [T.x, T.y], config: F.droppable }),
      b = p0(C, E),
      Yt = m.useMemo(() => (De ? uu(De) : null), [De]),
      fs = Of(),
      ps = g0(b, F.draggable.measure);
    A0({
      activeNode: E ? C.get(E) : null,
      config: fs.layoutShiftCompensation,
      initialRect: ps,
      measure: F.draggable.measure,
    });
    const Ge = Qa(b, F.draggable.measure, ps),
      To = Qa(b ? b.parentElement : null),
      Xt = m.useRef({
        activatorEvent: null,
        active: null,
        activeNode: b,
        collisionRect: null,
        collisions: null,
        droppableRects: Xe,
        draggableNodes: C,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: L,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      hs = L.getNodeFor((n = Xt.current.over) == null ? void 0 : n.id),
      Gt = R0({ measure: F.dragOverlay.measure }),
      tl = (r = Gt.nodeRef.current) != null ? r : b,
      vn = N ? ((l = Gt.rect) != null ? l : Ge) : null,
      vs = !!(Gt.nodeRef.current && Gt.rect),
      gs = w0(vs ? null : Ge),
      Po = Nf(tl ? Re(tl) : null),
      Et = S0(N ? (hs ?? b) : null),
      nl = C0(Et),
      rl = I0(g, {
        transform: { x: T.x - gs.x, y: T.y - gs.y, scaleX: 1, scaleY: 1 },
        activatorEvent: De,
        active: ge,
        activeNodeRect: Ge,
        containerNodeRect: To,
        draggingNodeRect: vn,
        over: Xt.current.over,
        overlayNodeRect: Gt.rect,
        scrollableAncestors: Et,
        scrollableAncestorRects: nl,
        windowRect: Po,
      }),
      ms = Yt ? Fn(Yt, T) : null,
      ys = x0(Et),
      Df = Xa(ys),
      _f = Xa(ys, [Ge]),
      gn = Fn(rl, Df),
      mn = vn ? Vv(vn, rl) : null,
      qn =
        ge && mn
          ? p({
              active: ge,
              collisionRect: mn,
              droppableRects: Xe,
              droppableContainers: V,
              pointerCoordinates: ms,
            })
          : null,
      ws = Fv(qn, 'id'),
      [Ct, Ss] = m.useState(null),
      Lf = vs ? rl : Fn(rl, _f),
      Mf = Hv(Lf, (o = Ct == null ? void 0 : Ct.rect) != null ? o : null, Ge),
      xs = m.useCallback(
        (ie, _e) => {
          let { sensor: Le, options: Nt } = _e;
          if (Ye.current == null) return;
          const Fe = C.get(Ye.current);
          if (!Fe) return;
          const Ze = ie.nativeEvent,
            it = new Le({
              active: Ye.current,
              activeNode: Fe,
              event: Ze,
              options: Nt,
              context: Xt,
              onStart(Je) {
                const bn = Ye.current;
                if (bn == null) return;
                const er = C.get(bn);
                if (!er) return;
                const { onDragStart: ll } = M.current,
                  ol = { active: { id: bn, data: er.data, rect: ve } };
                qt.unstable_batchedUpdates(() => {
                  ll == null || ll(ol),
                    k(Lt.Initializing),
                    d({
                      type: te.DragStart,
                      initialCoordinates: Je,
                      active: bn,
                    }),
                    c({ type: 'onDragStart', event: ol });
                });
              },
              onMove(Je) {
                d({ type: te.DragMove, coordinates: Je });
              },
              onEnd: yn(te.DragEnd),
              onCancel: yn(te.DragCancel),
            });
          qt.unstable_batchedUpdates(() => {
            pn(it), R(ie.nativeEvent);
          });
          function yn(Je) {
            return async function () {
              const {
                active: er,
                collisions: ll,
                over: ol,
                scrollAdjustedTranslate: Es,
              } = Xt.current;
              let tr = null;
              if (er && Es) {
                const { cancelDrop: nr } = M.current;
                (tr = {
                  activatorEvent: Ze,
                  active: er,
                  collisions: ll,
                  delta: Es,
                  over: ol,
                }),
                  Je === te.DragEnd &&
                    typeof nr == 'function' &&
                    (await Promise.resolve(nr(tr))) &&
                    (Je = te.DragCancel);
              }
              (Ye.current = null),
                qt.unstable_batchedUpdates(() => {
                  d({ type: Je }),
                    k(Lt.Uninitialized),
                    Ss(null),
                    pn(null),
                    R(null);
                  const nr = Je === te.DragEnd ? 'onDragEnd' : 'onDragCancel';
                  if (tr) {
                    const Oo = M.current[nr];
                    Oo == null || Oo(tr), c({ type: nr, event: tr });
                  }
                });
            };
          }
        },
        [C]
      ),
      zf = m.useCallback(
        (ie, _e) => (Le, Nt) => {
          const Fe = Le.nativeEvent,
            Ze = C.get(Nt);
          if (Ye.current !== null || !Ze || Fe.dndKit || Fe.defaultPrevented)
            return;
          const it = { active: Ze };
          ie(Le, _e.options, it) === !0 &&
            ((Fe.dndKit = { capturedBy: _e.sensor }),
            (Ye.current = Nt),
            xs(Le, _e));
        },
        [C, xs]
      ),
      ks = h0(h, zf);
    k0(h),
      xt(() => {
        Ge && w === Lt.Initializing && k(Lt.Initialized);
      }, [Ge, w]),
      m.useEffect(() => {
        const { onDragMove: ie } = M.current,
          {
            active: _e,
            activatorEvent: Le,
            collisions: Nt,
            over: Fe,
          } = Xt.current;
        if (!_e || !Le) return;
        const Ze = {
          active: _e,
          activatorEvent: Le,
          collisions: Nt,
          delta: { x: gn.x, y: gn.y },
          over: Fe,
        };
        qt.unstable_batchedUpdates(() => {
          ie == null || ie(Ze), c({ type: 'onDragMove', event: Ze });
        });
      }, [gn.x, gn.y]),
      m.useEffect(() => {
        const {
          active: ie,
          activatorEvent: _e,
          collisions: Le,
          droppableContainers: Nt,
          scrollAdjustedTranslate: Fe,
        } = Xt.current;
        if (!ie || Ye.current == null || !_e || !Fe) return;
        const { onDragOver: Ze } = M.current,
          it = Nt.get(ws),
          yn =
            it && it.rect.current
              ? {
                  id: it.id,
                  rect: it.rect.current,
                  data: it.data,
                  disabled: it.disabled,
                }
              : null,
          Je = {
            active: ie,
            activatorEvent: _e,
            collisions: Le,
            delta: { x: Fe.x, y: Fe.y },
            over: yn,
          };
        qt.unstable_batchedUpdates(() => {
          Ss(yn), Ze == null || Ze(Je), c({ type: 'onDragOver', event: Je });
        });
      }, [ws]),
      xt(() => {
        (Xt.current = {
          activatorEvent: De,
          active: ge,
          activeNode: b,
          collisionRect: mn,
          collisions: qn,
          droppableRects: Xe,
          draggableNodes: C,
          draggingNode: tl,
          draggingNodeRect: vn,
          droppableContainers: L,
          over: Ct,
          scrollableAncestors: Et,
          scrollAdjustedTranslate: gn,
        }),
          (ve.current = { initial: vn, translated: mn });
      }, [ge, b, qn, mn, C, tl, vn, Xe, L, Ct, Et, gn]),
      c0({
        ...fs,
        delta: T,
        draggingRect: mn,
        pointerCoordinates: ms,
        scrollableAncestors: Et,
        scrollableAncestorRects: nl,
      });
    const Tf = m.useMemo(
        () => ({
          active: ge,
          activeNode: b,
          activeNodeRect: Ge,
          activatorEvent: De,
          collisions: qn,
          containerNodeRect: To,
          dragOverlay: Gt,
          draggableNodes: C,
          droppableContainers: L,
          droppableRects: Xe,
          over: Ct,
          measureDroppableContainers: Ae,
          scrollableAncestors: Et,
          scrollableAncestorRects: nl,
          measuringConfiguration: F,
          measuringScheduled: hn,
          windowRect: Po,
        }),
        [ge, b, Ge, De, qn, To, Gt, C, L, Xe, Ct, Ae, Et, nl, F, hn, Po]
      ),
      Pf = m.useMemo(
        () => ({
          activatorEvent: De,
          activators: ks,
          active: ge,
          activeNodeRect: Ge,
          ariaDescribedById: { draggable: z },
          dispatch: d,
          draggableNodes: C,
          over: Ct,
          measureDroppableContainers: Ae,
        }),
        [De, ks, ge, Ge, d, z, C, Ct, Ae]
      );
    return Ue.createElement(
      pf.Provider,
      { value: f },
      Ue.createElement(
        zo.Provider,
        { value: Pf },
        Ue.createElement(
          z0.Provider,
          { value: Tf },
          Ue.createElement(Rf.Provider, { value: Mf }, a)
        ),
        Ue.createElement(O0, {
          disabled: (u == null ? void 0 : u.restoreFocus) === !1,
        })
      ),
      Ue.createElement(jv, { ...u, hiddenTextDescribedById: z })
    );
    function Of() {
      const ie = (el == null ? void 0 : el.autoScrollEnabled) === !1,
        _e = typeof s == 'object' ? s.enabled === !1 : s === !1,
        Le = N && !ie && !_e;
      return typeof s == 'object' ? { ...s, enabled: Le } : { enabled: Le };
    }
  }),
  B0 = m.createContext(null),
  Ga = 'button',
  U0 = 'Droppable';
function H0(e) {
  let { id: t, data: n, disabled: r = !1, attributes: l } = e;
  const o = Lo(U0),
    {
      activators: i,
      activatorEvent: u,
      active: s,
      activeNodeRect: a,
      ariaDescribedById: h,
      draggableNodes: p,
      over: v,
    } = m.useContext(zo),
    {
      role: g = Ga,
      roleDescription: S = 'draggable',
      tabIndex: y = 0,
    } = l ?? {},
    _ = (s == null ? void 0 : s.id) === t,
    d = m.useContext(_ ? Rf : B0),
    [c, f] = uo(),
    [w, k] = uo(),
    N = E0(i, t),
    E = Wr(n);
  xt(
    () => (
      p.set(t, { id: t, key: o, node: c, activatorNode: w, data: E }),
      () => {
        const T = p.get(t);
        T && T.key === o && p.delete(t);
      }
    ),
    [p, t]
  );
  const C = m.useMemo(
    () => ({
      role: g,
      tabIndex: y,
      'aria-disabled': r,
      'aria-pressed': _ && g === Ga ? !0 : void 0,
      'aria-roledescription': S,
      'aria-describedby': h.draggable,
    }),
    [r, g, y, _, S, h.draggable]
  );
  return {
    active: s,
    activatorEvent: u,
    activeNodeRect: a,
    attributes: C,
    isDragging: _,
    listeners: r ? void 0 : N,
    node: c,
    over: v,
    setNodeRef: f,
    setActivatorNodeRef: k,
    transform: d,
  };
}
const $0 = 'Droppable',
  V0 = { timeout: 25 };
function W0(e) {
  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: l } = e;
  const o = Lo($0),
    {
      active: i,
      dispatch: u,
      over: s,
      measureDroppableContainers: a,
    } = m.useContext(zo),
    h = m.useRef({ disabled: n }),
    p = m.useRef(!1),
    v = m.useRef(null),
    g = m.useRef(null),
    { disabled: S, updateMeasurementsFor: y, timeout: _ } = { ...V0, ...l },
    d = Wr(y ?? r),
    c = m.useCallback(() => {
      if (!p.current) {
        p.current = !0;
        return;
      }
      g.current != null && clearTimeout(g.current),
        (g.current = setTimeout(() => {
          a(Array.isArray(d.current) ? d.current : [d.current]),
            (g.current = null);
        }, _));
    }, [_]),
    f = Mo({ callback: c, disabled: S || !i }),
    w = m.useCallback(
      (C, T) => {
        f && (T && (f.unobserve(T), (p.current = !1)), C && f.observe(C));
      },
      [f]
    ),
    [k, N] = uo(w),
    E = Wr(t);
  return (
    m.useEffect(() => {
      !f ||
        !k.current ||
        (f.disconnect(), (p.current = !1), f.observe(k.current));
    }, [k, f]),
    xt(
      () => (
        u({
          type: te.RegisterDroppable,
          element: { id: r, key: o, disabled: n, node: k, rect: v, data: E },
        }),
        () => u({ type: te.UnregisterDroppable, key: o, id: r })
      ),
      [r]
    ),
    m.useEffect(() => {
      n !== h.current.disabled &&
        (u({ type: te.SetDroppableDisabled, id: r, key: o, disabled: n }),
        (h.current.disabled = n));
    }, [r, o, n, u]),
    {
      active: i,
      rect: v,
      isOver: (s == null ? void 0 : s.id) === r,
      node: k,
      over: s,
      setNodeRef: N,
    }
  );
}
const K0 = ({ color: e }) =>
    j.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '-50 0 448 512',
      fill: e,
      children: j.jsx('path', {
        d: 'M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512H297.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z',
      }),
    }),
  Q0 = ({ color: e }) =>
    j.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 448 512',
      fill: e,
      children: j.jsx('path', {
        d: 'M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z',
      }),
    }),
  Y0 = ({ color: e }) =>
    j.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 448 512',
      fill: e,
      children: j.jsx('path', {
        d: 'M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z',
      }),
    }),
  X0 = ({ color: e }) =>
    j.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '-50 0 448 512',
      fill: e,
      children: j.jsx('path', {
        d: 'M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z',
      }),
    }),
  G0 = ({ color: e }) =>
    j.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 512 512',
      fill: e,
      children: j.jsx('path', {
        d: 'M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400H384 343.6 168.4 128 112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224l0 0 0 0h0zM112 432H400l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z',
      }),
    }),
  Z0 = ({ color: e }) =>
    j.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 448 512',
      fill: e,
      children: j.jsx('path', {
        d: 'M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80L96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z',
      }),
    }),
  J0 = ({ color: e, chessBoardSquare: t }) => {
    const { isOver: n, setNodeRef: r } = W0({ id: t.id }),
      l = n ? 'white' : e === K.WHITE ? 'primary' : 'secondary';
    return j.jsx('div', {
      className: `bg-${l} w-20 h-20 flex items-center justify-center`,
      ref: r,
      children: t.piece && j.jsx(q0, { chessPiece: t.piece }),
    });
  };
function q0({ chessPiece: e }) {
  const {
      attributes: t,
      listeners: n,
      setNodeRef: r,
      transform: l,
    } = H0({ id: e.id }),
    o = l ? { transform: `translate3d(${l.x}px, ${l.y}px, 0)` } : void 0,
    i = (e == null ? void 0 : e.color) === K.WHITE ? 'white' : 'black';
  return j.jsx('div', {
    className:
      'w-12 h-12 flex items-center justify-center select-none cursor-grab',
    ref: r,
    style: o,
    ...n,
    ...t,
    children:
      e.type === ze.PAWN
        ? j.jsx(X0, { color: i })
        : e.type === ze.ROOK
          ? j.jsx(Z0, { color: i })
          : e.type === ze.KNIGHT
            ? j.jsx(Y0, { color: i })
            : e.type === ze.QUEEN
              ? j.jsx(G0, { color: i })
              : e.type === ze.BISHOP
                ? j.jsx(K0, { color: i })
                : e.type === ze.KING
                  ? j.jsx(Q0, { color: i })
                  : null,
  });
}
const b0 = ({ currentPlayerColor: e }) => {
  const { chessBoard: t, handleChessBoardSquareOnDrop: n } = Ev(),
    r = m.useMemo(
      () => mv({ chessBoardGrid: t.grid, shouldInvert: e === K.WHITE }),
      [t, e]
    );
  return j.jsx(F0, {
    onDragEnd: ({ active: l, over: o }) =>
      n(l.id, (o == null ? void 0 : o.id) || ''),
    children: r.map((l, o) =>
      j.jsx(
        'div',
        {
          className:
            'flex w-fit mx-auto bg-primary bg-secondary bg-white bg-black text-white text-black',
          children: l.map((i, u) =>
            j.jsx(
              J0,
              {
                color: o % 2 === u % 2 ? K.WHITE : K.BLACK,
                chessBoardSquare: i,
              },
              u
            )
          ),
        },
        o
      )
    ),
  });
};
function eg() {
  return j.jsxs(j.Fragment, {
    children: [
      j.jsx('h1', {
        className: 'text-4xl text-accent font-bold my-8 text-center',
        children: 'Chess | saacostam',
      }),
      j.jsx(b0, { currentPlayerColor: K.WHITE }),
    ],
  });
}
af(document.getElementById('root')).render(
  j.jsx(m.StrictMode, { children: j.jsx(eg, {}) })
);
