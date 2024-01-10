var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t, r) {
    "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? r(exports) : "function" == typeof define && define.amd ? define([ "exports" ], r) : r(t.reduxLogger = t.reduxLogger || {});
}(void 0, function(t) {
    function r(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
    }
    function n(e, t) {
        Object.defineProperty(this, "kind", {
            value: e,
            enumerable: !0
        }), t && t.length && Object.defineProperty(this, "path", {
            value: t,
            enumerable: !0
        });
    }
    function o(e, t, r) {
        o.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
            value: t,
            enumerable: !0
        }), Object.defineProperty(this, "rhs", {
            value: r,
            enumerable: !0
        });
    }
    function i(e, t) {
        i.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
            value: t,
            enumerable: !0
        });
    }
    function a(e, t) {
        a.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
            value: t,
            enumerable: !0
        });
    }
    function l(e, t, r) {
        l.super_.call(this, "A", e), Object.defineProperty(this, "index", {
            value: t,
            enumerable: !0
        }), Object.defineProperty(this, "item", {
            value: r,
            enumerable: !0
        });
    }
    function u(e, t, r) {
        var n = e.slice((r || t) + 1 || e.length);
        return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
    }
    function c(e) {
        var t = void 0 === e ? "undefined" : O(e);
        return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
    }
    function f(e, t, r, n, s, d, p) {
        s = s || [], p = p || [];
        var g = s.slice(0);
        if (void 0 !== d) {
            if (n) {
                if ("function" == typeof n && n(g, d)) return;
                if ("object" === (void 0 === n ? "undefined" : O(n))) {
                    if (n.prefilter && n.prefilter(g, d)) return;
                    if (n.normalize) {
                        var h = n.normalize(g, d, e, t);
                        h && (e = h[0], t = h[1]);
                    }
                }
            }
            g.push(d);
        }
        "regexp" === c(e) && "regexp" === c(t) && (e = e.toString(), t = t.toString());
        var v = void 0 === e ? "undefined" : O(e), y = void 0 === t ? "undefined" : O(t), b = "undefined" !== v || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d), m = "undefined" !== y || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d);
        if (!b && m) r(new i(g, t)); else if (!m && b) r(new a(g, e)); else if (c(e) !== c(t)) r(new o(g, e, t)); else if ("date" === c(e) && e - t != 0) r(new o(g, e, t)); else if ("object" === v && null !== e && null !== t) if (p.filter(function(t) {
            return t.lhs === e;
        }).length) e !== t && r(new o(g, e, t)); else {
            if (p.push({
                lhs: e,
                rhs: t
            }), Array.isArray(e)) {
                var x;
                for (e.length, x = 0; x < e.length; x++) x >= t.length ? r(new l(g, x, new a(void 0, e[x]))) : f(e[x], t[x], r, n, g, x, p);
                for (;x < t.length; ) r(new l(g, x, new i(void 0, t[x++])));
            } else {
                var w = Object.keys(e), S = Object.keys(t);
                w.forEach(function(o, i) {
                    var a = S.indexOf(o);
                    a >= 0 ? (f(e[o], t[o], r, n, g, o, p), S = u(S, a)) : f(e[o], void 0, r, n, g, o, p);
                }), S.forEach(function(e) {
                    f(void 0, t[e], r, n, g, e, p);
                });
            }
            p.length = p.length - 1;
        } else e !== t && ("number" === v && isNaN(e) && isNaN(t) || r(new o(g, e, t)));
    }
    function s(e, t, r, n) {
        return n = n || [], f(e, t, function(e) {
            e && n.push(e);
        }, r), n.length ? n : void 0;
    }
    function d(e, t, r) {
        if (r.path && r.path.length) {
            var n, o = e[t], i = r.path.length - 1;
            for (n = 0; n < i; n++) o = o[r.path[n]];
            switch (r.kind) {
              case "A":
                d(o[r.path[n]], r.index, r.item);
                break;

              case "D":
                delete o[r.path[n]];
                break;

              case "E":
              case "N":
                o[r.path[n]] = r.rhs;
            }
        } else switch (r.kind) {
          case "A":
            d(e[t], r.index, r.item);
            break;

          case "D":
            e = u(e, t);
            break;

          case "E":
          case "N":
            e[t] = r.rhs;
        }
        return e;
    }
    function p(e, t, r) {
        if (e && t && r && r.kind) {
            for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i; ) void 0 === n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), 
            n = n[r.path[o]];
            switch (r.kind) {
              case "A":
                d(r.path ? n[r.path[o]] : n, r.index, r.item);
                break;

              case "D":
                delete n[r.path[o]];
                break;

              case "E":
              case "N":
                n[r.path[o]] = r.rhs;
            }
        }
    }
    function g(e, t, r) {
        if (r.path && r.path.length) {
            var n, o = e[t], i = r.path.length - 1;
            for (n = 0; n < i; n++) o = o[r.path[n]];
            switch (r.kind) {
              case "A":
                g(o[r.path[n]], r.index, r.item);
                break;

              case "D":
              case "E":
                o[r.path[n]] = r.lhs;
                break;

              case "N":
                delete o[r.path[n]];
            }
        } else switch (r.kind) {
          case "A":
            g(e[t], r.index, r.item);
            break;

          case "D":
          case "E":
            e[t] = r.lhs;
            break;

          case "N":
            e = u(e, t);
        }
        return e;
    }
    function h(e) {
        return "color: " + C[e].color + "; font-weight: bold";
    }
    function v(e) {
        var t = e.kind, r = e.path, n = e.lhs, o = e.rhs, i = e.index, a = e.item;
        switch (t) {
          case "E":
            return [ r.join("."), n, "→", o ];

          case "N":
            return [ r.join("."), o ];

          case "D":
            return [ r.join(".") ];

          case "A":
            return [ r.join(".") + "[" + i + "]", a ];

          default:
            return [];
        }
    }
    function y(e, t, r, n) {
        var o = s(e, t);
        try {
            n ? r.groupCollapsed("diff") : r.group("diff");
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            r.log("diff");
        }
        o ? o.forEach(function(e) {
            var t = e.kind, n = v(e);
            r.log.apply(r, [ "%c " + C[t].text, h(t) ].concat(N(n)));
        }) : r.log("—— no diff ——");
        try {
            r.groupEnd();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            r.log("—— diff end —— ");
        }
    }
    function b(e, t, r, n) {
        switch (void 0 === e ? "undefined" : O(e)) {
          case "object":
            return "function" == typeof e[n] ? e[n].apply(e, N(r)) : e[n];

          case "function":
            return e(t);

          default:
            return e;
        }
    }
    function m(e) {
        var t = e.timestamp, r = e.duration;
        return function(e, n, o) {
            var i = [ "action" ];
            return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), 
            i.join(" ");
        };
    }
    function x(e, t) {
        var r = t.logger, n = t.actionTransformer, o = t.titleFormatter, i = void 0 === o ? m(t) : o, a = t.collapsed, l = t.colors, u = t.level, c = t.diff, f = void 0 === t.titleFormatter;
        e.forEach(function(o, s) {
            var d = o.started, p = o.startedTime, g = o.action, h = o.prevState, v = o.error, m = o.took, x = o.nextState, w = e[s + 1];
            w && (x = w.prevState, m = w.started - d);
            var S = n(g), j = "function" == typeof a ? a(function() {
                return x;
            }, g, o) : a, k = A(p), E = l.title ? "color: " + l.title(S) + ";" : "", D = [ "color: gray; font-weight: lighter;" ];
            D.push(E), t.timestamp && D.push("color: gray; font-weight: lighter;"), t.duration && D.push("color: gray; font-weight: lighter;");
            var O = i(S, k, m);
            try {
                j ? l.title && f ? r.groupCollapsed.apply(r, [ "%c " + O ].concat(D)) : r.groupCollapsed(O) : l.title && f ? r.group.apply(r, [ "%c " + O ].concat(D)) : r.group(O);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                r.log(O);
            }
            var N = b(u, S, [ h ], "prevState"), P = b(u, S, [ S ], "action"), C = b(u, S, [ v, h ], "error"), F = b(u, S, [ x ], "nextState");
            if (N) if (l.prevState) {
                var L = "color: " + l.prevState(h) + "; font-weight: bold";
                r[N]("%c prev state", L, h);
            } else r[N]("prev state", h);
            if (P) if (l.action) {
                var T = "color: " + l.action(S) + "; font-weight: bold";
                r[P]("%c action    ", T, S);
            } else r[P]("action    ", S);
            if (v && C) if (l.error) {
                var M = "color: " + l.error(v, h) + "; font-weight: bold;";
                r[C]("%c error     ", M, v);
            } else r[C]("error     ", v);
            if (F) if (l.nextState) {
                var _ = "color: " + l.nextState(x) + "; font-weight: bold";
                r[F]("%c next state", _, x);
            } else r[F]("next state", x);
            c && y(h, x, r, j);
            try {
                r.groupEnd();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                r.log("—— log end ——");
            }
        });
    }
    function w() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object.assign({}, F, e), r = t.logger, n = t.stateTransformer, o = t.errorTransformer, i = t.predicate, a = t.logErrors, l = t.diffPredicate;
        if (void 0 === r) return function() {
            return function(e) {
                return function(t) {
                    return e(t);
                };
            };
        };
        if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), 
        function() {
            return function(e) {
                return function(t) {
                    return e(t);
                };
            };
        };
        var u = [];
        return function(e) {
            var r = e.getState;
            return function(e) {
                return function(c) {
                    if ("function" == typeof i && !i(r, c)) return e(c);
                    var f = {};
                    u.push(f), f.started = D.now(), f.startedTime = new Date(), f.prevState = n(r()), 
                    f.action = c;
                    var s = void 0;
                    if (a) try {
                        s = e(c);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        f.error = o(e);
                    } else s = e(c);
                    f.took = D.now() - f.started, f.nextState = n(r());
                    var d = t.diff && "function" == typeof l ? l(r, c) : t.diff;
                    if (x(u, Object.assign({}, t, {
                        diff: d
                    })), u.length = 0, f.error) throw f.error;
                    return s;
                };
            };
        };
    }
    var S, j, k = function(e, t) {
        return new Array(t + 1).join(e);
    }, E = function(e, t) {
        return k("0", t - e.toString().length) + e;
    }, A = function(e) {
        return E(e.getHours(), 2) + ":" + E(e.getMinutes(), 2) + ":" + E(e.getSeconds(), 2) + "." + E(e.getMilliseconds(), 3);
    }, D = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date, O = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
    }, N = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
        }
        return Array.from(e);
    }, P = [];
    S = "object" === ("undefined" == typeof global ? "undefined" : O(global)) && global ? global : "undefined" != typeof window ? window : {}, 
    (j = S.DeepDiff) && P.push(function() {
        void 0 !== j && S.DeepDiff === s && (S.DeepDiff = j, j = void 0);
    }), r(o, n), r(i, n), r(a, n), r(l, n), Object.defineProperties(s, {
        diff: {
            value: s,
            enumerable: !0
        },
        observableDiff: {
            value: f,
            enumerable: !0
        },
        applyDiff: {
            value: function(e, t, r) {
                e && t && f(e, t, function(n) {
                    r && !r(e, t, n) || p(e, t, n);
                });
            },
            enumerable: !0
        },
        applyChange: {
            value: p,
            enumerable: !0
        },
        revertChange: {
            value: function(e, t, r) {
                if (e && t && r && r.kind) {
                    var n, o, i = e;
                    for (o = r.path.length - 1, n = 0; n < o; n++) void 0 === i[r.path[n]] && (i[r.path[n]] = {}), 
                    i = i[r.path[n]];
                    switch (r.kind) {
                      case "A":
                        g(i[r.path[n]], r.index, r.item);
                        break;

                      case "D":
                      case "E":
                        i[r.path[n]] = r.lhs;
                        break;

                      case "N":
                        delete i[r.path[n]];
                    }
                }
            },
            enumerable: !0
        },
        isConflict: {
            value: function() {
                return void 0 !== j;
            },
            enumerable: !0
        },
        noConflict: {
            value: function() {
                return P && (P.forEach(function(e) {
                    e();
                }), P = null), s;
            },
            enumerable: !0
        }
    });
    var C = {
        E: {
            color: "#2196F3",
            text: "CHANGED:"
        },
        N: {
            color: "#4CAF50",
            text: "ADDED:"
        },
        D: {
            color: "#F44336",
            text: "DELETED:"
        },
        A: {
            color: "#2196F3",
            text: "ARRAY:"
        }
    }, F = {
        level: "log",
        logger: console,
        logErrors: !0,
        collapsed: void 0,
        predicate: void 0,
        duration: !1,
        timestamp: !0,
        stateTransformer: function(e) {
            return e;
        },
        actionTransformer: function(e) {
            return e;
        },
        errorTransformer: function(e) {
            return e;
        },
        colors: {
            title: function() {
                return "inherit";
            },
            prevState: function() {
                return "#9E9E9E";
            },
            action: function() {
                return "#03A9F4";
            },
            nextState: function() {
                return "#4CAF50";
            },
            error: function() {
                return "#F20404";
            }
        },
        diff: !1,
        diffPredicate: void 0,
        transformer: void 0
    }, L = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.dispatch, r = e.getState;
        return "function" == typeof t || "function" == typeof r ? w()({
            dispatch: t,
            getState: r
        }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
    };
    t.defaults = F, t.createLogger = w, t.logger = L, t.default = L, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});