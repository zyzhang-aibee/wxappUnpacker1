function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e() {
    var t = wx.xng.getCurrentPage();
    return t ? t.data.curTabName : "";
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    }
    return t;
}, a = t(require("../../../../common/others/moment")), r = t(require("../../../../common/others/wxStat")), n = t(require("./adUtils"));

exports.default = {
    report: function(t, u) {
        var l = wx.xngGlobal.xu.user && wx.xngGlobal.xu.user.ct || 0, c = wx.xngGlobal.abTest.feed_ad || wx.xngGlobal.abTest.feed_custom_ad, s = n.default.getStatus(), d = {
            cdate: l ? a.default.format(l, "YYMMDD") : 0,
            n1: s.showCount,
            m1: s.clickCount,
            lastclosedate: s.lastCloseTime ? a.default.format(s.lastCloseTime, "YYMMDD") : 0,
            todayshowcount: s.todayShowCount,
            todayClickCount: s.todayClickCount,
            showcount: s.showCount,
            clickcount: s.clickCount,
            feedadctr: Math.round(1e3 * s.clickCount / (s.showCount + 1)),
            tab: e()
        };
        c.banner && (d.banner = c.banner), d = o({}, d, u), r.default.report(t, d);
    }
};