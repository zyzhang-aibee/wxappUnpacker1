function o() {
    if (d) return d;
    var o = wx.getStorageSync("ab/feed_ad") || {}, t = o.lastShowTime, e = void 0 === t ? 0 : t, n = o.lastCloseTime, a = void 0 === n ? 0 : n, i = o.todayShowCount, r = void 0 === i ? 0 : i, s = o.todayClickCount, u = void 0 === s ? 0 : s, l = o.showCount, f = void 0 === l ? 0 : l, c = o.clickCount;
    return d = {
        lastShowTime: e,
        lastCloseTime: a,
        todayShowCount: r,
        todayClickCount: u,
        showCount: f,
        clickCount: void 0 === c ? 0 : c
    };
}

function t() {
    var o = "none", t = null;
    return wx.xngGlobal.abTest.feed_ad ? (o = "wx-ad", t = wx.xngGlobal.abTest.feed_ad) : wx.xngGlobal.abTest.feed_custom_ad && (o = "custom-ad", 
    t = wx.xngGlobal.abTest.feed_custom_ad), wx.xngGlobal.sysInfo.system.includes("iOS") && t && t.disableOnIOS && (o = "none"), 
    {
        adType: o,
        adConfig: t
    };
}

function e(t) {
    var e = 0, n = o(), a = 864e5 * (t.closeDays || 3);
    if (!n.lastCloseTime || Date.now() - n.lastCloseTime > a) {
        e = void 0 === t.showCount || -1 === t.showCount ? Number.MAX_SAFE_INTEGER : t.showCount - n.showCount;
        var d = void 0;
        d = void 0 === t.showCountOneday || -1 === t.showCountOneday ? Number.MAX_SAFE_INTEGER : t.showCountOneday - n.todayShowCount, 
        e = Math.min(e, d);
    } else e = 0;
    return console.info("[ad] todayRestShowTimes", e === Number.MAX_SAFE_INTEGER ? "infinity" : e), 
    e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = Object.assign || function(o) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
    }
    return o;
}, a = function(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}(require("../../../../frameBase/utils/moment")), d = void 0;

exports.default = {
    getStatus: o,
    setStatus: function(o) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        d = n({}, d, o), t && getApp().setFeedAdStat(d), wx.setStorage({
            key: "ab/feed_ad",
            data: d
        });
    },
    getAdTypeAndConfig: t,
    getRestShowTimes: e,
    shouldShow: function() {
        var n = t().adConfig;
        if (!n) return !1;
        if (e(n) <= 0) return !1;
        var d = n.userCdaysScope, i = (d = void 0 === d ? {
            start: 0,
            end: Number.MAX_SAFE_INTEGER
        } : d).start, r = void 0 === i ? 0 : i, s = d.end, u = void 0 === s ? Number.MAX_SAFE_INTEGER : s, l = wx.xngGlobal.xu.user, f = l && l.ct ? (0, 
        a.default)(l.ct) : (0, a.default)(), c = Math.floor(((0, a.default)() - f) / 864e5);
        if (console.info("[ad] userCdaysScope:", "{ start:", r, "end:", u === Number.MAX_SAFE_INTEGER ? "infinity" : u, "}", "cdays", c), 
        c > u || c < r) return !1;
        if (!n.probabilityAlgorithm) return !0;
        var w = n.X, v = void 0 === w ? 9 : w, C = n.Y, h = void 0 === C ? 10 : C, y = n.N, S = void 0 === y ? 1 : y, m = n.S, b = void 0 === m ? 0 : m, _ = o(), g = _.todayShowCount, T = _.showCount, x = _.clickCount;
        if (console.info("[ad] todayShowCount:", g, "showCount:", T, "clickCount:", x), 
        console.info("[ad] X:", v, "Y: ", h, "N:", S, "S:", b), b > 0 && T < b) return !0;
        var E = Math.pow(x + 1, S) / (T + 1 + v), A = 1 / ((g + 1) * h);
        E = Math.max(Math.min(1, E), A);
        var p = Math.random();
        return console.info("[ad] probability:", E, "lowerBoundary:", A, "random:", p), 
        p < E;
    }
};