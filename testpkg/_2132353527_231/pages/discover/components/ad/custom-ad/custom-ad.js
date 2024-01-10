function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    }
    return t;
}, a = function() {
    function t(t, e) {
        var a = [], n = !0, r = !1, o = void 0;
        try {
            for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (a.push(i.value), 
            !e || a.length !== e); n = !0) ;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            r = !0, o = t;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (r) throw o;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), n = require("../../../../../common/others/businessUtils"), r = t(require("../../../../../frameBase/utils/moment")), o = t(require("../adUtils")), i = t(require("../adStat"));

Component({
    properties: {
        index: {
            type: Number,
            observer: function(t) {
                var e = Math.ceil(t / 4);
                this.setData({
                    screenIndex: e
                });
            }
        }
    },
    data: {
        width: 690,
        height: 265.65,
        show: !0,
        closeBtnText: "广告",
        banner: "",
        cdate: 0,
        lastclosedate: 0
    },
    attached: function() {
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "ease-out"
        });
        this.animation = t;
        var e = wx.xngGlobal.abTest.feed_custom_ad;
        void 0 !== e.closeBtnText && this.setData({
            closeBtnText: e.closeBtnText
        });
        var a = wx.xngGlobal.xu.user ? wx.xngGlobal.xu.user.ct : 0, n = a ? (0, r.default)(a).format("YYYYMMDD") : 0, s = o.default.getStatus(), d = e.banner;
        if ("string" != typeof d) if (d = Object.keys(d).map(function(t) {
            return d[t];
        }), this.randomIndex = Math.floor(Math.random() * d.length), "string" != typeof (d = d[this.randomIndex])) {
            d = Object.keys(d).map(function(t) {
                return d[t];
            });
            var u = Math.floor(Math.random() * d.length);
            d = d[u], console.info("[ad] banner", d, "random", this.randomIndex + 1, "random2", u + 1);
        } else console.info("[ad] banner", d, "random", this.randomIndex + 1);
        var l = s.lastCloseTime ? (0, r.default)(s.lastCloseTime).format("YYYYMMDD") : 0;
        this.setData({
            cdate: n,
            banner: d,
            lastclosedate: l
        }), i.default.report("feed_ad_success", {
            type: 1,
            n: this.data.screenIndex,
            m: this.data.index,
            banner: this.data.banner
        });
        var c = o.default.getStatus();
        o.default.setStatus({
            showCount: c.showCount + 1,
            todayShowCount: c.todayShowCount + 1,
            lastShowTime: Date.now()
        });
    },
    methods: {
        onClose: function() {
            this.animation.height(0).opacity(0).step(), this.setData({
                show: !1,
                animationData: this.animation.export()
            }), i.default.report("feed_ad_close", {
                type: 1,
                n: this.data.screenIndex,
                m: this.data.index,
                banner: this.data.banner
            }), o.default.setStatus({
                lastCloseTime: Date.now()
            });
        },
        onTap: function() {
            var t = this, r = wx.xngGlobal.abTest.feed_custom_ad;
            if (r.jdcps) {
                var s = {};
                this.data.banner.split("?")[1].split("&").forEach(function(t) {
                    var e = t.split("="), n = a(e, 2), r = n[0], o = n[1];
                    s[r] = o;
                }), (0, n.goAdPage)(s);
            } else if ("miniapp" === r.type) {
                var d = r.miniapp, u = d.path;
                "string" != typeof u && (u = Object.keys(u).map(function(t) {
                    return u[t];
                }), u = u[this.randomIndex], console.error("path", u)), wx.navigateToMiniProgram(e({}, d, {
                    path: u,
                    envVersion: "release",
                    success: function() {
                        i.default.report("feed_ad_redirect", {
                            type: 1,
                            n: t.data.screenIndex,
                            m: t.data.index,
                            redirectok: 1,
                            banner: t.data.banner
                        });
                    },
                    fail: function() {
                        i.default.report("feed_ad_redirect", {
                            type: 1,
                            n: t.data.screenIndex,
                            m: t.data.index,
                            redirectok: 0,
                            banner: t.data.banner
                        });
                    }
                }));
            } else (0, n.goWebViewPage)({
                url: encodeURIComponent(r.webUrl)
            });
            var l = o.default.getStatus();
            o.default.setStatus({
                clickCount: l.clickCount + 1,
                todayClickCount: l.todayClickCount + 1
            });
        }
    }
});