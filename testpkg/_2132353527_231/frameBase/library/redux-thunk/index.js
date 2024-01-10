var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "object" == ("undefined" == typeof module ? "undefined" : e(module)) ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) ? exports.ReduxThunk = n() : t.ReduxThunk = n();
}(void 0, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0);
    }([ function(e, t, n) {
        e.exports = n(1);
    }, function(e, t) {
        function n(e) {
            return function(t) {
                var n = t.dispatch, o = t.getState;
                return function(t) {
                    return function(r) {
                        return "function" == typeof r ? r(n, o, e) : t(r);
                    };
                };
            };
        }
        t.__esModule = !0;
        var o = n();
        o.withExtraArgument = n, t.default = o;
    } ]);
});