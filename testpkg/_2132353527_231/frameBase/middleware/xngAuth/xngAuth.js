var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("./login")), e = [], r = !1, t = void 0, o = function() {
    for (;e.length; ) {
        var n = e.shift();
        t(n);
    }
    r = !1;
}, u = function() {
    r || (r = !0, (0, n.default)({
        success: o,
        fail: function() {
            r = !1;
        }
    }));
};

module.exports = function() {
    return function(n) {
        return function(r) {
            t = n;
            var o = r.API;
            return r.promise = new Promise(function(n, e) {
                r.resolve = n, r.reject = e;
            }), wx.xngGlobal.token || !o || r.NO_AUTH ? n(r) : (e.push(r), u(), r.promise);
        };
    };
};