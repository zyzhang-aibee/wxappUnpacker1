function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../../../common/others/moment")), a = t(require("../adStat")), o = t(require("../adUtils"));

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
        show: !1,
        cdate: 0,
        lastclosedate: 0
    },
    attached: function() {
        var t = wx.xngGlobal.xu.user ? wx.xngGlobal.xu.user.ct : 0, a = t ? e.default.format(t, "YYMMDD") : 0, s = o.default.getStatus(), d = s.lastCloseTime ? e.default.format(s.lastCloseTime, "YYMMDD") : 0;
        this.setData({
            cdate: a,
            lastclosedate: d
        });
    },
    methods: {
        onAdLoad: function() {
            this.setData({
                show: !0
            }), a.default.report("feed_ad_success", {
                type: 0,
                n: this.data.screenIndex,
                m: this.data.index
            });
            var t = o.default.getStatus();
            o.default.setStatus({
                showCount: t.showCount + 1,
                todayShowCount: t.todayShowCount + 1,
                lastShowTime: Date.now()
            });
        },
        onAdError: function(t) {
            var e = t.detail, o = e.errCode, s = e.errMsg;
            a.default.report("feed_ad_fail", {
                type: 0,
                errcode: o,
                errmsg: s,
                n: this.data.screenIndex,
                m: this.data.index
            });
        },
        onTap: function() {
            var t = o.default.getStatus();
            o.default.setStatus({
                clickCount: t.clickCount + 1,
                todayClickCount: t.todayClickCount + 1
            });
        }
    }
});