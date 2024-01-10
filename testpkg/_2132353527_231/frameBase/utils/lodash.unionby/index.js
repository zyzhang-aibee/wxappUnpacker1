function t(t, n, r) {
    switch (r.length) {
      case 0:
        return t.call(n);

      case 1:
        return t.call(n, r[0]);

      case 2:
        return t.call(n, r[0], r[1]);

      case 3:
        return t.call(n, r[0], r[1], r[2]);
    }
    return t.apply(n, r);
}

function n(t, n) {
    return !!(t ? t.length : 0) && i(t, n, 0) > -1;
}

function r(t, n, r) {
    for (var e = -1, o = t ? t.length : 0; ++e < o; ) if (r(n, t[e])) return !0;
    return !1;
}

function e(t, n) {
    for (var r = -1, e = n.length, o = t.length; ++r < e; ) t[o + r] = n[r];
    return t;
}

function o(t, n) {
    for (var r = -1, e = t ? t.length : 0; ++r < e; ) if (n(t[r], r, t)) return !0;
    return !1;
}

function u(t, n, r, e) {
    for (var o = t.length, u = r + (e ? 1 : -1); e ? u-- : ++u < o; ) if (n(t[u], u, t)) return u;
    return -1;
}

function i(t, n, r) {
    if (n !== n) return u(t, a, r);
    for (var e = r - 1, o = t.length; ++e < o; ) if (t[e] === n) return e;
    return -1;
}

function a(t) {
    return t !== t;
}

function c(t) {
    return function(n) {
        return null == n ? void 0 : n[t];
    };
}

function f(t, n) {
    for (var r = -1, e = Array(t); ++r < t; ) e[r] = n(r);
    return e;
}

function l(t, n) {
    return t.has(n);
}

function s(t, n) {
    return null == t ? void 0 : t[n];
}

function p(t) {
    var n = !1;
    if (null != t && "function" != typeof t.toString) try {
        n = !!(t + "");
    } catch (t) {}
    return n;
}

function h(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(t, e) {
        r[++n] = [ e, t ];
    }), r;
}

function v(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(t) {
        r[++n] = t;
    }), r;
}

function d(t) {
    var n = -1, r = t ? t.length : 0;
    for (this.clear(); ++n < r; ) {
        var e = t[n];
        this.set(e[0], e[1]);
    }
}

function _(t) {
    var n = -1, r = t ? t.length : 0;
    for (this.clear(); ++n < r; ) {
        var e = t[n];
        this.set(e[0], e[1]);
    }
}

function y(t) {
    var n = -1, r = t ? t.length : 0;
    for (this.clear(); ++n < r; ) {
        var e = t[n];
        this.set(e[0], e[1]);
    }
}

function b(t) {
    var n = -1, r = t ? t.length : 0;
    for (this.__data__ = new y(); ++n < r; ) this.add(t[n]);
}

function g(t) {
    this.__data__ = new _(t);
}

function j(t, n) {
    var r = Wn(t) || et(t) ? f(t.length, String) : [], e = r.length, o = !!e;
    for (var u in t) !n && !sn.call(t, u) || o && ("length" == u || N(u, e)) || r.push(u);
    return r;
}

function m(t, n) {
    for (var r = t.length; r--; ) if (rt(t[r][0], n)) return r;
    return -1;
}

function w(t, n, r, o, u) {
    var i = -1, a = t.length;
    for (r || (r = G), u || (u = []); ++i < a; ) {
        var c = t[i];
        n > 0 && r(c) ? n > 1 ? w(c, n - 1, r, o, u) : e(u, c) : o || (u[u.length] = c);
    }
    return u;
}

function A(t, n) {
    for (var r = 0, e = (n = q(n, t) ? [ n ] : U(n)).length; null != t && r < e; ) t = t[Y(n[r++])];
    return r && r == e ? t : void 0;
}

function O(t, n) {
    return null != t && n in Object(t);
}

function S(t, n, r, e, o) {
    return t === n || (null == t || null == n || !ct(t) && !ft(n) ? t !== t && n !== n : k(t, n, S, r, e, o));
}

function k(t, n, r, e, o, u) {
    var i = Wn(t), a = Wn(n), c = kt, f = kt;
    i || (c = (c = Un(t)) == St ? It : c), a || (f = (f = Un(n)) == St ? It : f);
    var l = c == It && !p(t), s = f == It && !p(n), h = c == f;
    if (h && !l) return u || (u = new g()), i || Bn(t) ? z(t, n, r, e, o, u) : L(t, n, c, r, e, o, u);
    if (!(o & wt)) {
        var v = l && sn.call(t, "__wrapped__"), d = s && sn.call(n, "__wrapped__");
        if (v || d) {
            var _ = v ? t.value() : t, y = d ? n.value() : n;
            return u || (u = new g()), r(_, y, e, o, u);
        }
    }
    return !!h && (u || (u = new g()), W(t, n, r, e, o, u));
}

function x(t, n, r, e) {
    var o = r.length, u = o, i = !e;
    if (null == t) return !u;
    for (t = Object(t); o--; ) {
        var a = r[o];
        if (i && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1;
    }
    for (;++o < u; ) {
        var c = (a = r[o])[0], f = t[c], l = a[1];
        if (i && a[2]) {
            if (void 0 === f && !(c in t)) return !1;
        } else {
            var s = new g();
            if (e) var p = e(f, l, c, t, n, s);
            if (!(void 0 === p ? S(l, f, e, mt | wt, s) : p)) return !1;
        }
    }
    return !0;
}

function $(t) {
    return !(!ct(t) || J(t)) && (it(t) || p(t) ? hn : Ht).test(Z(t));
}

function E(t) {
    return "function" == typeof t ? t : null == t ? dt : "object" == (void 0 === t ? "undefined" : yt(t)) ? Wn(t) ? P(t[0], t[1]) : F(t) : _t(t);
}

function M(t) {
    if (!K(t)) return gn(t);
    var n = [];
    for (var r in Object(t)) sn.call(t, r) && "constructor" != r && n.push(r);
    return n;
}

function F(t) {
    var n = D(t);
    return 1 == n.length && n[0][2] ? X(n[0][0], n[0][1]) : function(r) {
        return r === t || x(r, t, n);
    };
}

function P(t, n) {
    return q(t) && Q(n) ? X(Y(t), n) : function(r) {
        var e = pt(r, t);
        return void 0 === e && e === n ? ht(r, t) : S(n, e, void 0, mt | wt);
    };
}

function C(t) {
    return function(n) {
        return A(n, t);
    };
}

function I(t) {
    if ("string" == typeof t) return t;
    if (lt(t)) return In ? In.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -At ? "-0" : n;
}

function T(t, e, o) {
    var u = -1, i = n, a = t.length, c = !0, f = [], s = f;
    if (o) c = !1, i = r; else if (a >= bt) {
        var p = e ? null : Tn(t);
        if (p) return v(p);
        c = !1, i = l, s = new b();
    } else s = e ? [] : f;
    t: for (;++u < a; ) {
        var h = t[u], d = e ? e(h) : h;
        if (h = o || 0 !== h ? h : 0, c && d === d) {
            for (var _ = s.length; _--; ) if (s[_] === d) continue t;
            e && s.push(d), f.push(h);
        } else i(s, d, o) || (s !== f && s.push(d), f.push(h));
    }
    return f;
}

function U(t) {
    return Wn(t) ? t : zn(t);
}

function z(t, n, r, e, u, i) {
    var a = u & wt, c = t.length, f = n.length;
    if (c != f && !(a && f > c)) return !1;
    var l = i.get(t);
    if (l && i.get(n)) return l == n;
    var s = -1, p = !0, h = u & mt ? new b() : void 0;
    for (i.set(t, n), i.set(n, t); ++s < c; ) {
        var v = t[s], d = n[s];
        if (e) var _ = a ? e(d, v, s, n, t, i) : e(v, d, s, t, n, i);
        if (void 0 !== _) {
            if (_) continue;
            p = !1;
            break;
        }
        if (h) {
            if (!o(n, function(t, n) {
                if (!h.has(n) && (v === t || r(v, t, e, u, i))) return h.add(n);
            })) {
                p = !1;
                break;
            }
        } else if (v !== d && !r(v, d, e, u, i)) {
            p = !1;
            break;
        }
    }
    return i.delete(t), i.delete(n), p;
}

function L(t, n, r, e, o, u, i) {
    switch (r) {
      case Bt:
        if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) return !1;
        t = t.buffer, n = n.buffer;

      case Wt:
        return !(t.byteLength != n.byteLength || !e(new dn(t), new dn(n)));

      case xt:
      case $t:
      case Ct:
        return rt(+t, +n);

      case Et:
        return t.name == n.name && t.message == n.message;

      case Tt:
      case zt:
        return t == n + "";

      case Pt:
        var a = h;

      case Ut:
        var c = u & wt;
        if (a || (a = v), t.size != n.size && !c) return !1;
        var f = i.get(t);
        if (f) return f == n;
        u |= mt, i.set(t, n);
        var l = z(a(t), a(n), e, o, u, i);
        return i.delete(t), l;

      case Lt:
        if (Cn) return Cn.call(t) == Cn.call(n);
    }
    return !1;
}

function W(t, n, r, e, o, u) {
    var i = o & wt, a = vt(t), c = a.length;
    if (c != vt(n).length && !i) return !1;
    for (var f = c; f--; ) {
        var l = a[f];
        if (!(i ? l in n : sn.call(n, l))) return !1;
    }
    var s = u.get(t);
    if (s && u.get(n)) return s == n;
    var p = !0;
    u.set(t, n), u.set(n, t);
    for (var h = i; ++f < c; ) {
        var v = t[l = a[f]], d = n[l];
        if (e) var _ = i ? e(d, v, l, n, t, u) : e(v, d, l, t, n, u);
        if (!(void 0 === _ ? v === d || r(v, d, e, o, u) : _)) {
            p = !1;
            break;
        }
        h || (h = "constructor" == l);
    }
    if (p && !h) {
        var y = t.constructor, b = n.constructor;
        y != b && "constructor" in t && "constructor" in n && !("function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b) && (p = !1);
    }
    return u.delete(t), u.delete(n), p;
}

function B(t, n) {
    var r = t.__data__;
    return H(n) ? r["string" == typeof n ? "string" : "hash"] : r.map;
}

function D(t) {
    for (var n = vt(t), r = n.length; r--; ) {
        var e = n[r], o = t[e];
        n[r] = [ e, o, Q(o) ];
    }
    return n;
}

function R(t, n) {
    var r = s(t, n);
    return $(r) ? r : void 0;
}

function V(t, n, r) {
    for (var e, o = -1, u = (n = q(n, t) ? [ n ] : U(n)).length; ++o < u; ) {
        var i = Y(n[o]);
        if (!(e = null != t && r(t, i))) break;
        t = t[i];
    }
    return e || !!(u = t ? t.length : 0) && at(u) && N(i, u) && (Wn(t) || et(t));
}

function G(t) {
    return Wn(t) || et(t) || !!(bn && t && t[bn]);
}

function N(t, n) {
    return !!(n = null == n ? Ot : n) && ("number" == typeof t || Jt.test(t)) && t > -1 && t % 1 == 0 && t < n;
}

function q(t, n) {
    if (Wn(t)) return !1;
    var r = void 0 === t ? "undefined" : yt(t);
    return !("number" != r && "symbol" != r && "boolean" != r && null != t && !lt(t)) || (Rt.test(t) || !Dt.test(t) || null != n && t in Object(n));
}

function H(t) {
    var n = void 0 === t ? "undefined" : yt(t);
    return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t;
}

function J(t) {
    return !!fn && fn in t;
}

function K(t) {
    var n = t && t.constructor;
    return t === ("function" == typeof n && n.prototype || an);
}

function Q(t) {
    return t === t && !ct(t);
}

function X(t, n) {
    return function(r) {
        return null != r && (r[t] === n && (void 0 !== n || t in Object(r)));
    };
}

function Y(t) {
    if ("string" == typeof t || lt(t)) return t;
    var n = t + "";
    return "0" == n && 1 / t == -At ? "-0" : n;
}

function Z(t) {
    if (null != t) {
        try {
            return ln.call(t);
        } catch (t) {}
        try {
            return t + "";
        } catch (t) {}
    }
    return "";
}

function tt(t) {
    var n = t ? t.length : 0;
    return n ? t[n - 1] : void 0;
}

function nt(t, n) {
    if ("function" != typeof t || n && "function" != typeof n) throw new TypeError(gt);
    var r = function r() {
        var e = arguments, o = n ? n.apply(this, e) : e[0], u = r.cache;
        if (u.has(o)) return u.get(o);
        var i = t.apply(this, e);
        return r.cache = u.set(o, i), i;
    };
    return r.cache = new (nt.Cache || y)(), r;
}

function rt(t, n) {
    return t === n || t !== t && n !== n;
}

function et(t) {
    return ut(t) && sn.call(t, "callee") && (!_n.call(t, "callee") || pn.call(t) == St);
}

function ot(t) {
    return null != t && at(t.length) && !it(t);
}

function ut(t) {
    return ft(t) && ot(t);
}

function it(t) {
    var n = ct(t) ? pn.call(t) : "";
    return n == Mt || n == Ft;
}

function at(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Ot;
}

function ct(t) {
    var n = void 0 === t ? "undefined" : yt(t);
    return !!t && ("object" == n || "function" == n);
}

function ft(t) {
    return !!t && "object" == (void 0 === t ? "undefined" : yt(t));
}

function lt(t) {
    return "symbol" == (void 0 === t ? "undefined" : yt(t)) || ft(t) && pn.call(t) == Lt;
}

function st(t) {
    return null == t ? "" : I(t);
}

function pt(t, n, r) {
    var e = null == t ? void 0 : A(t, n);
    return void 0 === e ? r : e;
}

function ht(t, n) {
    return null != t && V(t, n, O);
}

function vt(t) {
    return ot(t) ? j(t) : M(t);
}

function dt(t) {
    return t;
}

function _t(t) {
    return q(t) ? c(Y(t)) : C(t);
}

var yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, bt = 200, gt = "Expected a function", jt = "__lodash_hash_undefined__", mt = 1, wt = 2, At = 1 / 0, Ot = 9007199254740991, St = "[object Arguments]", kt = "[object Array]", xt = "[object Boolean]", $t = "[object Date]", Et = "[object Error]", Mt = "[object Function]", Ft = "[object GeneratorFunction]", Pt = "[object Map]", Ct = "[object Number]", It = "[object Object]", Tt = "[object RegExp]", Ut = "[object Set]", zt = "[object String]", Lt = "[object Symbol]", Wt = "[object ArrayBuffer]", Bt = "[object DataView]", Dt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rt = /^\w*$/, Vt = /^\./, Gt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nt = /[\\^$.*+?()[\]{}|]/g, qt = /\\(\\)?/g, Ht = /^\[object .+?Constructor\]$/, Jt = /^(?:0|[1-9]\d*)$/, Kt = {};

Kt["[object Float32Array]"] = Kt["[object Float64Array]"] = Kt["[object Int8Array]"] = Kt["[object Int16Array]"] = Kt["[object Int32Array]"] = Kt["[object Uint8Array]"] = Kt["[object Uint8ClampedArray]"] = Kt["[object Uint16Array]"] = Kt["[object Uint32Array]"] = !0, 
Kt[St] = Kt[kt] = Kt[Wt] = Kt[xt] = Kt[Bt] = Kt[$t] = Kt[Et] = Kt[Mt] = Kt[Pt] = Kt[Ct] = Kt[It] = Kt[Tt] = Kt[Ut] = Kt[zt] = Kt["[object WeakMap]"] = !1;

var Qt = "object" == ("undefined" == typeof global ? "undefined" : yt(global)) && global && global.Object === Object && global, Xt = "object" == ("undefined" == typeof self ? "undefined" : yt(self)) && self && self.Object === Object && self, Yt = Qt || Xt || Function("return this")(), Zt = "object" == ("undefined" == typeof exports ? "undefined" : yt(exports)) && exports && !exports.nodeType && exports, tn = Zt && "object" == ("undefined" == typeof module ? "undefined" : yt(module)) && module && !module.nodeType && module, nn = tn && tn.exports === Zt && Qt.process, rn = function() {
    try {
        return nn && nn.binding("util");
    } catch (t) {}
}(), en = rn && rn.isTypedArray, on = Array.prototype, un = Function.prototype, an = Object.prototype, cn = Yt["__core-js_shared__"], fn = function() {
    var t = /[^.]+$/.exec(cn && cn.keys && cn.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
}(), ln = un.toString, sn = an.hasOwnProperty, pn = an.toString, hn = RegExp("^" + ln.call(sn).replace(Nt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), vn = Yt.Symbol, dn = Yt.Uint8Array, _n = an.propertyIsEnumerable, yn = on.splice, bn = vn ? vn.isConcatSpreadable : void 0, gn = function(t, n) {
    return function(r) {
        return t(n(r));
    };
}(Object.keys, Object), jn = Math.max, mn = R(Yt, "DataView"), wn = R(Yt, "Map"), An = R(Yt, "Promise"), On = R(Yt, "Set"), Sn = R(Yt, "WeakMap"), kn = R(Object, "create"), xn = Z(mn), $n = Z(wn), En = Z(An), Mn = Z(On), Fn = Z(Sn), Pn = vn ? vn.prototype : void 0, Cn = Pn ? Pn.valueOf : void 0, In = Pn ? Pn.toString : void 0;

d.prototype.clear = function() {
    this.__data__ = kn ? kn(null) : {};
}, d.prototype.delete = function(t) {
    return this.has(t) && delete this.__data__[t];
}, d.prototype.get = function(t) {
    var n = this.__data__;
    if (kn) {
        var r = n[t];
        return r === jt ? void 0 : r;
    }
    return sn.call(n, t) ? n[t] : void 0;
}, d.prototype.has = function(t) {
    var n = this.__data__;
    return kn ? void 0 !== n[t] : sn.call(n, t);
}, d.prototype.set = function(t, n) {
    return this.__data__[t] = kn && void 0 === n ? jt : n, this;
}, _.prototype.clear = function() {
    this.__data__ = [];
}, _.prototype.delete = function(t) {
    var n = this.__data__, r = m(n, t);
    return !(r < 0 || (r == n.length - 1 ? n.pop() : yn.call(n, r, 1), 0));
}, _.prototype.get = function(t) {
    var n = this.__data__, r = m(n, t);
    return r < 0 ? void 0 : n[r][1];
}, _.prototype.has = function(t) {
    return m(this.__data__, t) > -1;
}, _.prototype.set = function(t, n) {
    var r = this.__data__, e = m(r, t);
    return e < 0 ? r.push([ t, n ]) : r[e][1] = n, this;
}, y.prototype.clear = function() {
    this.__data__ = {
        hash: new d(),
        map: new (wn || _)(),
        string: new d()
    };
}, y.prototype.delete = function(t) {
    return B(this, t).delete(t);
}, y.prototype.get = function(t) {
    return B(this, t).get(t);
}, y.prototype.has = function(t) {
    return B(this, t).has(t);
}, y.prototype.set = function(t, n) {
    return B(this, t).set(t, n), this;
}, b.prototype.add = b.prototype.push = function(t) {
    return this.__data__.set(t, jt), this;
}, b.prototype.has = function(t) {
    return this.__data__.has(t);
}, g.prototype.clear = function() {
    this.__data__ = new _();
}, g.prototype.delete = function(t) {
    return this.__data__.delete(t);
}, g.prototype.get = function(t) {
    return this.__data__.get(t);
}, g.prototype.has = function(t) {
    return this.__data__.has(t);
}, g.prototype.set = function(t, n) {
    var r = this.__data__;
    if (r instanceof _) {
        var e = r.__data__;
        if (!wn || e.length < bt - 1) return e.push([ t, n ]), this;
        r = this.__data__ = new y(e);
    }
    return r.set(t, n), this;
};

var Tn = On && 1 / v(new On([ , -0 ]))[1] == At ? function(t) {
    return new On(t);
} : function() {}, Un = function(t) {
    return pn.call(t);
};

(mn && Un(new mn(new ArrayBuffer(1))) != Bt || wn && Un(new wn()) != Pt || An && "[object Promise]" != Un(An.resolve()) || On && Un(new On()) != Ut || Sn && "[object WeakMap]" != Un(new Sn())) && (Un = function(t) {
    var n = pn.call(t), r = n == It ? t.constructor : void 0, e = r ? Z(r) : void 0;
    if (e) switch (e) {
      case xn:
        return Bt;

      case $n:
        return Pt;

      case En:
        return "[object Promise]";

      case Mn:
        return Ut;

      case Fn:
        return "[object WeakMap]";
    }
    return n;
});

var zn = nt(function(t) {
    t = st(t);
    var n = [];
    return Vt.test(t) && n.push(""), t.replace(Gt, function(t, r, e, o) {
        n.push(e ? o.replace(qt, "$1") : r || t);
    }), n;
}), Ln = function(n, r) {
    return r = jn(void 0 === r ? n.length - 1 : r, 0), function() {
        for (var e = arguments, o = -1, u = jn(e.length - r, 0), i = Array(u); ++o < u; ) i[o] = e[r + o];
        o = -1;
        for (var a = Array(r + 1); ++o < r; ) a[o] = e[o];
        return a[r] = i, t(n, this, a);
    };
}(function(t) {
    var n = tt(t);
    return ut(n) && (n = void 0), T(w(t, 1, ut, !0), E(n));
});

nt.Cache = y;

var Wn = Array.isArray, Bn = en ? function(t) {
    return function(n) {
        return t(n);
    };
}(en) : function(t) {
    return ft(t) && at(t.length) && !!Kt[pn.call(t)];
};

module.exports = Ln;