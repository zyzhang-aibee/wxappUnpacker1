function t(t, r) {
    return t.set(r[0], r[1]), t;
}

function r(t, r) {
    return t.add(r), t;
}

function n(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);

      case 1:
        return t.call(r, n[0]);

      case 2:
        return t.call(r, n[0], n[1]);

      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
}

function e(t, r) {
    for (var n = -1, e = t ? t.length : 0; ++n < e && !1 !== r(t[n], n, t); ) ;
    return t;
}

function o(t, r) {
    for (var n = -1, e = r.length, o = t.length; ++n < e; ) t[o + n] = r[n];
    return t;
}

function u(t, r, n, e) {
    var o = -1, u = t ? t.length : 0;
    for (e && u && (n = t[++o]); ++o < u; ) n = r(n, t[o], o, t);
    return n;
}

function c(t, r) {
    for (var n = -1, e = Array(t); ++n < t; ) e[n] = r(n);
    return e;
}

function i(t, r) {
    return null == t ? void 0 : t[r];
}

function a(t) {
    var r = !1;
    if (null != t && "function" != typeof t.toString) try {
        r = !!(t + "");
    } catch (t) {}
    return r;
}

function f(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(t, e) {
        n[++r] = [ e, t ];
    }), n;
}

function s(t, r) {
    return function(n) {
        return t(r(n));
    };
}

function l(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(t) {
        n[++r] = t;
    }), n;
}

function p(t) {
    var r = -1, n = t ? t.length : 0;
    for (this.clear(); ++r < n; ) {
        var e = t[r];
        this.set(e[0], e[1]);
    }
}

function d(t) {
    var r = -1, n = t ? t.length : 0;
    for (this.clear(); ++r < n; ) {
        var e = t[r];
        this.set(e[0], e[1]);
    }
}

function v(t) {
    var r = -1, n = t ? t.length : 0;
    for (this.clear(); ++r < n; ) {
        var e = t[r];
        this.set(e[0], e[1]);
    }
}

function y(t) {
    this.__data__ = new d(t);
}

function h(t, r) {
    var n = Dr(t) || rt(t) ? c(t.length, String) : [], e = n.length, o = !!e;
    for (var u in t) !r && !ir.call(t, u) || o && ("length" == u || H(u, e)) || n.push(u);
    return n;
}

function _(t, r, n) {
    (void 0 === n || tt(t[r], n)) && ("number" != typeof r || void 0 !== n || r in t) || (t[r] = n);
}

function b(t, r, n) {
    var e = t[r];
    ir.call(t, r) && tt(e, n) && (void 0 !== n || r in t) || (t[r] = n);
}

function g(t, r) {
    for (var n = t.length; n--; ) if (tt(t[n][0], r)) return n;
    return -1;
}

function j(t, r) {
    return t && z(r, st(r), t);
}

function m(t, r, n, o, u, c, i) {
    var f;
    if (o && (f = c ? o(t, u, c, i) : o(t)), void 0 !== f) return f;
    if (!ct(t)) return t;
    var s = Dr(t);
    if (s) {
        if (f = G(t), !r) return R(t, f);
    } else {
        var l = Tr(t), p = l == gt || l == jt;
        if (Rr(t)) return I(t, r);
        if (l == Ot || l == ht || p && !c) {
            if (a(t)) return c ? t : {};
            if (f = N(p ? {} : t), !r) return C(t, j(f, t));
        } else {
            if (!Nt[l]) return c ? t : {};
            f = q(t, l, m, r);
        }
    }
    i || (i = new y());
    var d = i.get(t);
    if (d) return d;
    if (i.set(t, f), !s) var v = n ? L(t) : st(t);
    return e(v || t, function(e, u) {
        v && (e = t[u = e]), b(f, u, m(e, r, n, o, u, t, i));
    }), f;
}

function w(t) {
    return ct(t) ? yr(t) : {};
}

function O(t, r, n) {
    var e = r(t);
    return Dr(t) ? e : o(e, n(t));
}

function A(t) {
    return !(!ct(t) || Q(t)) && (ot(t) || a(t) ? sr : Vt).test(Z(t));
}

function x(t) {
    if (!X(t)) return jr(t);
    var r = [];
    for (var n in Object(t)) ir.call(t, n) && "constructor" != n && r.push(n);
    return r;
}

function S(t) {
    if (!ct(t)) return Y(t);
    var r = X(t), n = [];
    for (var e in t) ("constructor" != e || !r && ir.call(t, e)) && n.push(e);
    return n;
}

function E(t, r, n, o, u) {
    if (t !== r) {
        if (!Dr(r) && !zr(r)) var c = S(r);
        e(c || r, function(e, i) {
            if (c && (e = r[i = e]), ct(e)) u || (u = new y()), P(t, r, i, n, E, o, u); else {
                var a = o ? o(t[i], e, i + "", t, r, u) : void 0;
                void 0 === a && (a = e), _(t, i, a);
            }
        });
    }
}

function P(t, r, n, e, o, u, c) {
    var i = t[n], a = r[n], f = c.get(a);
    if (f) _(t, n, f); else {
        var s = u ? u(i, a, n + "", t, r, c) : void 0, l = void 0 === s;
        l && (s = a, Dr(a) || zr(a) ? Dr(i) ? s = i : et(i) ? s = R(i) : (l = !1, s = m(a, !0)) : at(a) || rt(a) ? rt(i) ? s = ft(i) : !ct(i) || e && ot(i) ? (l = !1, 
        s = m(a, !0)) : s = i : l = !1), l && (c.set(a, s), o(s, a, e, u, c), c.delete(a)), 
        _(t, n, s);
    }
}

function $(t, r) {
    return r = mr(void 0 === r ? t.length - 1 : r, 0), function() {
        for (var e = arguments, o = -1, u = mr(e.length - r, 0), c = Array(u); ++o < u; ) c[o] = e[r + o];
        o = -1;
        for (var i = Array(r + 1); ++o < r; ) i[o] = e[o];
        return i[r] = c, n(t, this, i);
    };
}

function I(t, r) {
    if (r) return t.slice();
    var n = new t.constructor(t.length);
    return t.copy(n), n;
}

function F(t) {
    var r = new t.constructor(t.byteLength);
    return new dr(r).set(new dr(t)), r;
}

function k(t, r) {
    var n = r ? F(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.byteLength);
}

function B(r, n, e) {
    return u(n ? e(f(r), !0) : f(r), t, new r.constructor());
}

function M(t) {
    var r = new t.constructor(t.source, Lt.exec(t));
    return r.lastIndex = t.lastIndex, r;
}

function U(t, n, e) {
    return u(n ? e(l(t), !0) : l(t), r, new t.constructor());
}

function T(t) {
    return Mr ? Object(Mr.call(t)) : {};
}

function D(t, r) {
    var n = r ? F(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length);
}

function R(t, r) {
    var n = -1, e = t.length;
    for (r || (r = Array(e)); ++n < e; ) r[n] = t[n];
    return r;
}

function z(t, r, n, e) {
    n || (n = {});
    for (var o = -1, u = r.length; ++o < u; ) {
        var c = r[o], i = e ? e(n[c], t[c], c, n, t) : void 0;
        b(n, c, void 0 === i ? t[c] : i);
    }
    return n;
}

function C(t, r) {
    return z(t, Ur(t), r);
}

function L(t) {
    return O(t, st, Ur);
}

function V(t, r) {
    var n = t.__data__;
    return K(r) ? n["string" == typeof r ? "string" : "hash"] : n.map;
}

function W(t, r) {
    var n = i(t, r);
    return A(n) ? n : void 0;
}

function G(t) {
    var r = t.length, n = t.constructor(r);
    return r && "string" == typeof t[0] && ir.call(t, "index") && (n.index = t.index, 
    n.input = t.input), n;
}

function N(t) {
    return "function" != typeof t.constructor || X(t) ? {} : w(vr(t));
}

function q(t, r, n, e) {
    var o = t.constructor;
    switch (r) {
      case $t:
        return F(t);

      case _t:
      case bt:
        return new o(+t);

      case It:
        return k(t, e);

      case Ft:
      case kt:
      case Bt:
      case Mt:
      case Ut:
      case Tt:
      case Dt:
      case Rt:
      case zt:
        return D(t, e);

      case mt:
        return B(t, e, n);

      case wt:
      case St:
        return new o(t);

      case At:
        return M(t);

      case xt:
        return U(t, e, n);

      case Et:
        return T(t);
    }
}

function H(t, r) {
    return !!(r = null == r ? yt : r) && ("number" == typeof t || Wt.test(t)) && t > -1 && t % 1 == 0 && t < r;
}

function J(t, r, n) {
    if (!ct(n)) return !1;
    var e = void 0 === r ? "undefined" : pt(r);
    return !!("number" == e ? nt(n) && H(r, n.length) : "string" == e && r in n) && tt(n[r], t);
}

function K(t) {
    var r = void 0 === t ? "undefined" : pt(t);
    return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t;
}

function Q(t) {
    return !!ur && ur in t;
}

function X(t) {
    var r = t && t.constructor;
    return t === ("function" == typeof r && r.prototype || er);
}

function Y(t) {
    var r = [];
    if (null != t) for (var n in Object(t)) r.push(n);
    return r;
}

function Z(t) {
    if (null != t) {
        try {
            return cr.call(t);
        } catch (t) {}
        try {
            return t + "";
        } catch (t) {}
    }
    return "";
}

function tt(t, r) {
    return t === r || t !== t && r !== r;
}

function rt(t) {
    return et(t) && ir.call(t, "callee") && (!hr.call(t, "callee") || fr.call(t) == ht);
}

function nt(t) {
    return null != t && ut(t.length) && !ot(t);
}

function et(t) {
    return it(t) && nt(t);
}

function ot(t) {
    var r = ct(t) ? fr.call(t) : "";
    return r == gt || r == jt;
}

function ut(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= yt;
}

function ct(t) {
    var r = void 0 === t ? "undefined" : pt(t);
    return !!t && ("object" == r || "function" == r);
}

function it(t) {
    return !!t && "object" == (void 0 === t ? "undefined" : pt(t));
}

function at(t) {
    if (!it(t) || fr.call(t) != Ot || a(t)) return !1;
    var r = vr(t);
    if (null === r) return !0;
    var n = ir.call(r, "constructor") && r.constructor;
    return "function" == typeof n && n instanceof n && cr.call(n) == ar;
}

function ft(t) {
    return z(t, lt(t));
}

function st(t) {
    return nt(t) ? h(t) : x(t);
}

function lt(t) {
    return nt(t) ? h(t, !0) : S(t);
}

var pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, dt = 200, vt = "__lodash_hash_undefined__", yt = 9007199254740991, ht = "[object Arguments]", _t = "[object Boolean]", bt = "[object Date]", gt = "[object Function]", jt = "[object GeneratorFunction]", mt = "[object Map]", wt = "[object Number]", Ot = "[object Object]", At = "[object RegExp]", xt = "[object Set]", St = "[object String]", Et = "[object Symbol]", Pt = "[object WeakMap]", $t = "[object ArrayBuffer]", It = "[object DataView]", Ft = "[object Float32Array]", kt = "[object Float64Array]", Bt = "[object Int8Array]", Mt = "[object Int16Array]", Ut = "[object Int32Array]", Tt = "[object Uint8Array]", Dt = "[object Uint8ClampedArray]", Rt = "[object Uint16Array]", zt = "[object Uint32Array]", Ct = /[\\^$.*+?()[\]{}|]/g, Lt = /\w*$/, Vt = /^\[object .+?Constructor\]$/, Wt = /^(?:0|[1-9]\d*)$/, Gt = {};

Gt[Ft] = Gt[kt] = Gt[Bt] = Gt[Mt] = Gt[Ut] = Gt[Tt] = Gt[Dt] = Gt[Rt] = Gt[zt] = !0, 
Gt[ht] = Gt["[object Array]"] = Gt[$t] = Gt[_t] = Gt[It] = Gt[bt] = Gt["[object Error]"] = Gt[gt] = Gt[mt] = Gt[wt] = Gt[Ot] = Gt[At] = Gt[xt] = Gt[St] = Gt[Pt] = !1;

var Nt = {};

Nt[ht] = Nt["[object Array]"] = Nt[$t] = Nt[It] = Nt[_t] = Nt[bt] = Nt[Ft] = Nt[kt] = Nt[Bt] = Nt[Mt] = Nt[Ut] = Nt[mt] = Nt[wt] = Nt[Ot] = Nt[At] = Nt[xt] = Nt[St] = Nt[Et] = Nt[Tt] = Nt[Dt] = Nt[Rt] = Nt[zt] = !0, 
Nt["[object Error]"] = Nt[gt] = Nt[Pt] = !1;

var qt = "object" == ("undefined" == typeof global ? "undefined" : pt(global)) && global && global.Object === Object && global, Ht = "object" == ("undefined" == typeof self ? "undefined" : pt(self)) && self && self.Object === Object && self, Jt = qt || Ht || Function("return this")(), Kt = "object" == ("undefined" == typeof exports ? "undefined" : pt(exports)) && exports && !exports.nodeType && exports, Qt = Kt && "object" == ("undefined" == typeof module ? "undefined" : pt(module)) && module && !module.nodeType && module, Xt = Qt && Qt.exports === Kt, Yt = Xt && qt.process, Zt = function() {
    try {
        return Yt && Yt.binding("util");
    } catch (t) {}
}(), tr = Zt && Zt.isTypedArray, rr = Array.prototype, nr = Function.prototype, er = Object.prototype, or = Jt["__core-js_shared__"], ur = function() {
    var t = /[^.]+$/.exec(or && or.keys && or.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
}(), cr = nr.toString, ir = er.hasOwnProperty, ar = cr.call(Object), fr = er.toString, sr = RegExp("^" + cr.call(ir).replace(Ct, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), lr = Xt ? Jt.Buffer : void 0, pr = Jt.Symbol, dr = Jt.Uint8Array, vr = s(Object.getPrototypeOf, Object), yr = Object.create, hr = er.propertyIsEnumerable, _r = rr.splice, br = Object.getOwnPropertySymbols, gr = lr ? lr.isBuffer : void 0, jr = s(Object.keys, Object), mr = Math.max, wr = W(Jt, "DataView"), Or = W(Jt, "Map"), Ar = W(Jt, "Promise"), xr = W(Jt, "Set"), Sr = W(Jt, "WeakMap"), Er = W(Object, "create"), Pr = Z(wr), $r = Z(Or), Ir = Z(Ar), Fr = Z(xr), kr = Z(Sr), Br = pr ? pr.prototype : void 0, Mr = Br ? Br.valueOf : void 0;

p.prototype.clear = function() {
    this.__data__ = Er ? Er(null) : {};
}, p.prototype.delete = function(t) {
    return this.has(t) && delete this.__data__[t];
}, p.prototype.get = function(t) {
    var r = this.__data__;
    if (Er) {
        var n = r[t];
        return n === vt ? void 0 : n;
    }
    return ir.call(r, t) ? r[t] : void 0;
}, p.prototype.has = function(t) {
    var r = this.__data__;
    return Er ? void 0 !== r[t] : ir.call(r, t);
}, p.prototype.set = function(t, r) {
    return this.__data__[t] = Er && void 0 === r ? vt : r, this;
}, d.prototype.clear = function() {
    this.__data__ = [];
}, d.prototype.delete = function(t) {
    var r = this.__data__, n = g(r, t);
    return !(n < 0 || (n == r.length - 1 ? r.pop() : _r.call(r, n, 1), 0));
}, d.prototype.get = function(t) {
    var r = this.__data__, n = g(r, t);
    return n < 0 ? void 0 : r[n][1];
}, d.prototype.has = function(t) {
    return g(this.__data__, t) > -1;
}, d.prototype.set = function(t, r) {
    var n = this.__data__, e = g(n, t);
    return e < 0 ? n.push([ t, r ]) : n[e][1] = r, this;
}, v.prototype.clear = function() {
    this.__data__ = {
        hash: new p(),
        map: new (Or || d)(),
        string: new p()
    };
}, v.prototype.delete = function(t) {
    return V(this, t).delete(t);
}, v.prototype.get = function(t) {
    return V(this, t).get(t);
}, v.prototype.has = function(t) {
    return V(this, t).has(t);
}, v.prototype.set = function(t, r) {
    return V(this, t).set(t, r), this;
}, y.prototype.clear = function() {
    this.__data__ = new d();
}, y.prototype.delete = function(t) {
    return this.__data__.delete(t);
}, y.prototype.get = function(t) {
    return this.__data__.get(t);
}, y.prototype.has = function(t) {
    return this.__data__.has(t);
}, y.prototype.set = function(t, r) {
    var n = this.__data__;
    if (n instanceof d) {
        var e = n.__data__;
        if (!Or || e.length < dt - 1) return e.push([ t, r ]), this;
        n = this.__data__ = new v(e);
    }
    return n.set(t, r), this;
};

var Ur = br ? s(br, Object) : function() {
    return [];
}, Tr = function(t) {
    return fr.call(t);
};

(wr && Tr(new wr(new ArrayBuffer(1))) != It || Or && Tr(new Or()) != mt || Ar && "[object Promise]" != Tr(Ar.resolve()) || xr && Tr(new xr()) != xt || Sr && Tr(new Sr()) != Pt) && (Tr = function(t) {
    var r = fr.call(t), n = r == Ot ? t.constructor : void 0, e = n ? Z(n) : void 0;
    if (e) switch (e) {
      case Pr:
        return It;

      case $r:
        return mt;

      case Ir:
        return "[object Promise]";

      case Fr:
        return xt;

      case kr:
        return Pt;
    }
    return r;
});

var Dr = Array.isArray, Rr = gr || function() {
    return !1;
}, zr = tr ? function(t) {
    return function(r) {
        return t(r);
    };
}(tr) : function(t) {
    return it(t) && ut(t.length) && !!Gt[fr.call(t)];
}, Cr = function(t) {
    return $(function(r, n) {
        var e = -1, o = n.length, u = o > 1 ? n[o - 1] : void 0, c = o > 2 ? n[2] : void 0;
        for (u = t.length > 3 && "function" == typeof u ? (o--, u) : void 0, c && J(n[0], n[1], c) && (u = o < 3 ? void 0 : u, 
        o = 1), r = Object(r); ++e < o; ) {
            var i = n[e];
            i && t(r, i, e, u);
        }
        return r;
    });
}(function(t, r, n) {
    E(t, r, n);
});

module.exports = Cr;