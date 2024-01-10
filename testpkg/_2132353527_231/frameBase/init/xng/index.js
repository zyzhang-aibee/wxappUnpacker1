function e(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}

function r(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, n = r(require("../../xng/Page")), o = r(require("../../xng/Component")), u = e(require("../../components/xng/utils")), a = e(require("../..//xng/wx")), l = t({
    getCurrentPage: function() {
        var e = getCurrentPages();
        return e[e.length - 1];
    },
    prevPageScrollToTop: function() {
        var e = getCurrentPages();
        e[e.length - 2].__state__.scrollToTop = !0;
    },
    Page: n.default,
    Component: o.default
}, u, a);

wx.xng = l, exports.default = l;