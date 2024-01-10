var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = require("../../../config/config.js").xngEnv;

!function() {
    function r(n) {
        function i(e) {
            var t = Object.getPrototypeOf(e);
            return t ? Object.create(t) : {};
        }
        function o(e, t, r) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: r
            });
        }
        function s(e, t) {
            o(e, t, function() {
                throw new l("The " + t + " method cannot be invoked on an Immutable data structure.");
            });
        }
        function a(e) {
            o(e, K, !0);
        }
        function u(t) {
            return "object" !== (void 0 === t ? "undefined" : e(t)) || (null === t || Boolean(Object.getOwnPropertyDescriptor(t, K)));
        }
        function c(e, t) {
            return e === t || e !== e && t !== t;
        }
        function f(t) {
            return !(null === t || "object" !== (void 0 === t ? "undefined" : e(t)) || Array.isArray(t) || t instanceof Date);
        }
        function l(e) {
            this.name = "MyError", this.message = e, this.stack = new Error().stack;
        }
        function p(e, r) {
            if (a(e), "online" !== t) {
                for (var n in r) r.hasOwnProperty(n) && s(e, r[n]);
                Object.freeze(e);
            }
            return e;
        }
        function h(e, t) {
            var r = e[t];
            o(e, t, function() {
                return z(r.apply(e, arguments));
            });
        }
        function d(e, t, r) {
            var n = r && r.deep;
            if (e in this && (n && this[e] !== t && f(t) && f(this[e]) && (t = z.merge(this[e], t, {
                deep: !0,
                mode: "replace"
            })), c(this[e], t))) return this;
            var i = O.call(this);
            return i[e] = z(t), v(i);
        }
        function y(t, r, n) {
            var i = t[0];
            if (1 === t.length) return d.call(this, i, r, n);
            var o, s = t.slice(1), a = this[i];
            if ("object" === (void 0 === a ? "undefined" : e(a)) && null !== a) o = z.setIn(a, s, r); else {
                var u = s[0];
                o = "" !== u && isFinite(u) ? y.call(Z, s, r) : D.call(ee, s, r);
            }
            if (i in this && a === o) return this;
            var c = O.call(this);
            return c[i] = o, v(c);
        }
        function v(e) {
            for (var t in W) W.hasOwnProperty(t) && h(e, W[t]);
            G.use_static || (o(e, "flatMap", g), o(e, "asObject", j), o(e, "asMutable", O), 
            o(e, "set", d), o(e, "setIn", y), o(e, "update", S), o(e, "updateIn", E), o(e, "getIn", k));
            for (var r = 0, n = e.length; r < n; r++) e[r] = z(e[r]);
            return p(e, V);
        }
        function b(e) {
            return G.use_static || o(e, "asMutable", m), p(e, X);
        }
        function m() {
            return new Date(this.getTime());
        }
        function g(e) {
            if (0 === arguments.length) return this;
            var t, r = [], n = this.length;
            for (t = 0; t < n; t++) {
                var i = e(this[t], t, this);
                Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
            }
            return v(r);
        }
        function w(e) {
            if (void 0 === e && 0 === arguments.length) return this;
            if ("function" != typeof e) {
                var t = Array.isArray(e) ? e.slice() : Array.prototype.slice.call(arguments);
                t.forEach(function(e, t, r) {
                    "number" == typeof e && (r[t] = e.toString());
                }), e = function(e, r) {
                    return -1 !== t.indexOf(r);
                };
            }
            var r = i(this);
            for (var n in this) this.hasOwnProperty(n) && !1 === e(this[n], n) && (r[n] = this[n]);
            return x(r);
        }
        function O(e) {
            var t, r, n = [];
            if (e && e.deep) for (t = 0, r = this.length; t < r; t++) n.push(I(this[t])); else for (t = 0, 
            r = this.length; t < r; t++) n.push(this[t]);
            return n;
        }
        function j(e) {
            "function" != typeof e && (e = function(e) {
                return e;
            });
            var t, r = {}, n = this.length;
            for (t = 0; t < n; t++) {
                var i = e(this[t], t, this), o = i[0], s = i[1];
                r[o] = s;
            }
            return x(r);
        }
        function I(t) {
            return !t || "object" !== (void 0 === t ? "undefined" : e(t)) || !Object.getOwnPropertyDescriptor(t, K) || t instanceof Date ? t : z.asMutable(t, {
                deep: !0
            });
        }
        function A(e, t) {
            for (var r in e) Object.getOwnPropertyDescriptor(e, r) && (t[r] = e[r]);
            return t;
        }
        function P(t, r) {
            function n(e, t, n) {
                var s = z(t[n]), a = p && p(e[n], s, r), l = e[n];
                if (void 0 !== o || void 0 !== a || !e.hasOwnProperty(n) || !c(s, l)) {
                    var h;
                    c(l, h = a || (u && f(l) && f(s) ? z.merge(l, s, r) : s)) && e.hasOwnProperty(n) || (void 0 === o && (o = A(e, i(e))), 
                    o[n] = h);
                }
            }
            if (0 === arguments.length) return this;
            if (null === t || "object" !== (void 0 === t ? "undefined" : e(t))) throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + JSON.stringify(t));
            var o, s, a = Array.isArray(t), u = r && r.deep, l = r && r.mode || "merge", p = r && r.merger;
            if (a) for (var h = 0, d = t.length; h < d; h++) {
                var y = t[h];
                for (s in y) y.hasOwnProperty(s) && n(void 0 !== o ? o : this, y, s);
            } else {
                for (s in t) Object.getOwnPropertyDescriptor(t, s) && n(this, t, s);
                "replace" === l && function(e, t) {
                    for (var r in e) t.hasOwnProperty(r) || (void 0 === o && (o = A(e, i(e))), delete o[r]);
                }(this, t);
            }
            return void 0 === o ? this : x(o);
        }
        function T(t, r) {
            var n = r && r.deep;
            if (0 === arguments.length) return this;
            if (null === t || "object" !== (void 0 === t ? "undefined" : e(t))) throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + JSON.stringify(t));
            return z.merge(this, t, {
                deep: n,
                mode: "replace"
            });
        }
        function D(t, r, n) {
            if (!Array.isArray(t) || 0 === t.length) throw new TypeError('The first argument to Immutable#setIn must be an array containing at least one "key" string.');
            var o = t[0];
            if (1 === t.length) return M.call(this, o, r, n);
            var s, a = t.slice(1), u = this[o];
            if (s = this.hasOwnProperty(o) && "object" === (void 0 === u ? "undefined" : e(u)) && null !== u ? z.setIn(u, a, r) : D.call(ee, a, r), 
            this.hasOwnProperty(o) && u === s) return this;
            var c = A(this, i(this));
            return c[o] = s, x(c);
        }
        function M(e, t, r) {
            var n = r && r.deep;
            if (this.hasOwnProperty(e) && (n && this[e] !== t && f(t) && f(this[e]) && (t = z.merge(this[e], t, {
                deep: !0,
                mode: "replace"
            })), c(this[e], t))) return this;
            var o = A(this, i(this));
            return o[e] = z(t), x(o);
        }
        function S(e, t) {
            var r = Array.prototype.slice.call(arguments, 2), n = this[e];
            return z.set(this, e, t.apply(n, [ n ].concat(r)));
        }
        function _(e, t) {
            for (var r = 0, n = t.length; null != e && r < n; r++) e = e[t[r]];
            return r && r == n ? e : void 0;
        }
        function E(e, t) {
            var r = Array.prototype.slice.call(arguments, 2), n = _(this, e);
            return z.setIn(this, e, t.apply(n, [ n ].concat(r)));
        }
        function k(e, t) {
            var r = _(this, e);
            return void 0 === r ? t : r;
        }
        function C(e) {
            var t, r = i(this);
            if (e && e.deep) for (t in this) this.hasOwnProperty(t) && (r[t] = I(this[t])); else for (t in this) this.hasOwnProperty(t) && (r[t] = this[t]);
            return r;
        }
        function U() {
            return {};
        }
        function x(e) {
            return G.use_static || (o(e, "merge", P), o(e, "replace", T), o(e, "without", w), 
            o(e, "asMutable", C), o(e, "set", M), o(e, "setIn", D), o(e, "update", S), o(e, "updateIn", E), 
            o(e, "getIn", k)), p(e, L);
        }
        function F(t) {
            return "object" === (void 0 === t ? "undefined" : e(t)) && null !== t && (t.$$typeof === q || t.$$typeof === R);
        }
        function B(e) {
            return "undefined" != typeof File && e instanceof File;
        }
        function $(e) {
            return "undefined" != typeof Blob && e instanceof Blob;
        }
        function H(t) {
            return "object" === (void 0 === t ? "undefined" : e(t)) && "function" == typeof t.then;
        }
        function Y(e) {
            return e instanceof Error;
        }
        function z(e, r, n) {
            if (u(e) || F(e) || B(e) || $(e) || Y(e)) return e;
            if (H(e)) return e.then(z);
            if (Array.isArray(e)) return v(e.slice());
            if (e instanceof Date) return b(new Date(e.getTime()));
            var i = r && r.prototype, o = (i && i !== Object.prototype ? function() {
                return Object.create(i);
            } : U)();
            if ("online" !== t) {
                if (null == n && (n = 64), n <= 0) throw new l("Attempt to construct Immutable from a deeply nested object was detected. Have you tried to wrap an object with circular references (e.g. React element)? See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");
                n -= 1;
            }
            for (var s in e) Object.getOwnPropertyDescriptor(e, s) && (o[s] = z(e[s], void 0, n));
            return x(o);
        }
        function J(e) {
            return function() {
                var t = [].slice.call(arguments), r = t.shift();
                return e.apply(r, t);
            };
        }
        function N(e, t) {
            return function() {
                var r = [].slice.call(arguments), n = r.shift();
                return Array.isArray(n) ? t.apply(n, r) : e.apply(n, r);
            };
        }
        var R = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element"), q = 60103, G = {
            use_static: !1
        };
        (function(t) {
            return "object" === (void 0 === t ? "undefined" : e(t)) && !Array.isArray(t) && null !== t;
        })(n) && void 0 !== n.use_static && (G.use_static = Boolean(n.use_static));
        var K = "__immutable_invariants_hold", L = [ "setPrototypeOf" ], Q = [ "keys" ], V = L.concat([ "push", "pop", "sort", "splice", "shift", "unshift", "reverse" ]), W = Q.concat([ "map", "filter", "slice", "concat", "reduce", "reduceRight" ]), X = L.concat([ "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear" ]);
        l.prototype = new Error(), l.prototype.constructor = Error;
        var Z = z([]), ee = z({});
        return z.from = z, z.isImmutable = u, z.ImmutableError = l, z.merge = J(P), z.replace = J(T), 
        z.without = J(w), z.asMutable = function(e, t, r) {
            return function() {
                var n = [].slice.call(arguments), i = n.shift();
                return Array.isArray(i) ? t.apply(i, n) : i instanceof Date ? r.apply(i, n) : e.apply(i, n);
            };
        }(C, O, m), z.set = N(M, d), z.setIn = N(D, y), z.update = J(S), z.updateIn = J(E), 
        z.getIn = J(k), z.flatMap = J(g), z.asObject = J(j), G.use_static || (z.static = r({
            use_static: !0
        })), Object.freeze(z), z;
    }
    var n = r();
    "function" == typeof define && define.amd ? define(function() {
        return n;
    }) : "object" === ("undefined" == typeof module ? "undefined" : e(module)) ? module.exports = n : "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) ? exports.Immutable = n : "object" === ("undefined" == typeof window ? "undefined" : e(window)) ? window.Immutable = n : "object" === ("undefined" == typeof global ? "undefined" : e(global)) && (global.Immutable = n);
}();