function r(r) {
    if (null === r || void 0 === r) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(r);
}

var t = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;

module.exports = function() {
    try {
        if (!Object.assign) return !1;
        var r = new String("abc");
        if (r[5] = "de", "5" === Object.getOwnPropertyNames(r)[0]) return !1;
        for (var t = {}, e = 0; e < 10; e++) t["_" + String.fromCharCode(e)] = e;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(r) {
            return t[r];
        }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(r) {
            n[r] = r;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
    } catch (r) {
        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
        return !1;
    }
}() ? Object.assign : function(n, o) {
    for (var c, a, i = r(n), s = 1; s < arguments.length; s++) {
        c = Object(arguments[s]);
        for (var b in c) t.call(c, b) && (i[b] = c[b]);
        if (Object.getOwnPropertySymbols) {
            a = Object.getOwnPropertySymbols(c);
            for (var f = 0; f < a.length; f++) e.call(c, a[f]) && (i[a[f]] = c[a[f]]);
        }
    }
    return i;
};