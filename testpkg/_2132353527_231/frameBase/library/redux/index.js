var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define([ "exports" ], n) : n(t.Redux = t.Redux || {});
}(void 0, function(t) {
    function n(e) {
        var t = h.call(e, g), n = e[g];
        try {
            e[g] = void 0;
            var r = !0;
        } catch (e) {}
        var o = m.call(e);
        return r && (t ? e[g] = n : delete e[g]), o;
    }
    function r(e) {
        return j.call(e);
    }
    function o(e) {
        return null == e ? void 0 === e ? O : w : x && x in Object(e) ? n(e) : r(e);
    }
    function i(t) {
        return null != t && "object" == (void 0 === t ? "undefined" : e(t));
    }
    function u(e) {
        if (!i(e) || o(e) != I) return !1;
        var t = E(e);
        if (null === t) return !0;
        var n = A.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && N.call(n) == R;
    }
    function c(t, n, r) {
        function o() {
            y === p && (y = p.slice());
        }
        function i() {
            return s;
        }
        function f(e) {
            if ("function" != typeof e) throw Error("Expected listener to be a function.");
            var t = !0;
            return o(), y.push(e), function() {
                if (t) {
                    t = !1, o();
                    var n = y.indexOf(e);
                    y.splice(n, 1);
                }
            };
        }
        function a(e) {
            if (!u(e)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (b) throw Error("Reducers may not dispatch actions.");
            try {
                b = !0, s = l(s, e);
            } finally {
                b = !1;
            }
            for (var t = p = y, n = 0; t.length > n; n++) (0, t[n])();
            return e;
        }
        var d;
        if ("function" == typeof n && void 0 === r && (r = n, n = void 0), void 0 !== r) {
            if ("function" != typeof r) throw Error("Expected the enhancer to be a function.");
            return r(c)(t, n);
        }
        if ("function" != typeof t) throw Error("Expected the reducer to be a function.");
        var l = t, s = n, p = [], y = p, b = !1;
        return a({
            type: k.INIT
        }), d = {
            dispatch: a,
            subscribe: f,
            getState: i,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw Error("Expected the nextReducer to be a function.");
                l = e, a({
                    type: k.INIT
                });
            }
        }, d[P] = function() {
            var t, n = f;
            return t = {
                subscribe: function(t) {
                    function r() {
                        t.next && t.next(i());
                    }
                    if ("object" != (void 0 === t ? "undefined" : e(t))) throw new TypeError("Expected the observer to be an object.");
                    return r(), {
                        unsubscribe: n(r)
                    };
                }
            }, t[P] = function() {
                return this;
            }, t;
        }, d;
    }
    function f(e, t) {
        var n = t && t.type;
        return "Given action " + (n && '"' + n + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }
    function a(e) {
        Object.keys(e).forEach(function(t) {
            var n = e[t];
            if (void 0 === n(void 0, {
                type: k.INIT
            })) throw Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === n(void 0, {
                type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
            })) throw Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + k.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
        });
    }
    function d(e, t) {
        return function() {
            return t(e.apply(void 0, arguments));
        };
    }
    function l() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
        return 0 === t.length ? function(e) {
            return e;
        } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments));
            };
        });
    }
    var s, p = "object" == ("undefined" == typeof global ? "undefined" : e(global)) && global && global.Object === Object && global, y = "object" == ("undefined" == typeof self ? "undefined" : e(self)) && self && self.Object === Object && self, b = (p || y || Function("return this")()).Symbol, v = Object.prototype, h = v.hasOwnProperty, m = v.toString, g = b ? b.toStringTag : void 0, j = Object.prototype.toString, w = "[object Null]", O = "[object Undefined]", x = b ? b.toStringTag : void 0, E = function(e, t) {
        return function(n) {
            return e(t(n));
        };
    }(Object.getPrototypeOf, Object), I = "[object Object]", S = Function.prototype, T = Object.prototype, N = S.toString, A = T.hasOwnProperty, R = N.call(Object), P = function(e) {
        var t, n = (s = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), 
        n.observable = t) : t = "@@observable", t;
    }(), k = {
        INIT: "@@redux/INIT"
    }, C = Object.assign || function(e) {
        for (var t = 1; arguments.length > t; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    t.createStore = c, t.combineReducers = function(e) {
        for (var t = Object.keys(e), n = {}, r = 0; t.length > r; r++) {
            var o = t[r];
            "function" == typeof e[o] && (n[o] = e[o]);
        }
        var i = Object.keys(n), u = void 0;
        try {
            a(n);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            u = e;
        }
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, c = 0; i.length > c; c++) {
                var a = i[c], d = n[a], l = e[a], s = d(l, t);
                if (void 0 === s) {
                    var p = f(a, t);
                    throw Error(p);
                }
                o[a] = s, r = r || s !== l;
            }
            return r ? o : e;
        };
    }, t.bindActionCreators = function(t, n) {
        if ("function" == typeof t) return d(t, n);
        if ("object" != (void 0 === t ? "undefined" : e(t)) || null === t) throw Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : void 0 === t ? "undefined" : e(t)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var r = Object.keys(t), o = {}, i = 0; r.length > i; i++) {
            var u = r[i], c = t[u];
            "function" == typeof c && (o[u] = d(c, n));
        }
        return o;
    }, t.applyMiddleware = function() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
        return function(e) {
            return function(n, r, o) {
                var i = e(n, r, o), u = i.dispatch, c = [], f = {
                    getState: i.getState,
                    dispatch: function(e) {
                        return u(e);
                    }
                };
                return c = t.map(function(e) {
                    return e(f);
                }), u = l.apply(void 0, c)(i.dispatch), C({}, i, {
                    dispatch: u
                });
            };
        };
    }, t.compose = l, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});