var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var i = arguments[a];
        for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
    }
    return t;
};

Component({
    properties: {
        customNavigationBarData: {
            type: Object,
            value: {
                title: "",
                theme: "",
                loading: !1,
                isShowBack: !0,
                onBackTap: ""
            },
            observer: "normalizeData"
        },
        isCoverView: {
            type: Boolean,
            value: !1
        },
        customTitle: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isShow: !0,
        title: "",
        theme: "",
        loading: !1,
        isShowBack: !0
    },
    attached: function() {
        var a = this;
        wx.xngGlobal.sysInfo ? this.layout(wx.xngGlobal.sysInfo) : (wx.getSystemInfo({
            success: function(i) {
                a.layout(t({}, i, {
                    navigationHeight: i.statusBarHeight + 44,
                    navigationTitleBarHeight: 44,
                    menuButtonRect: {
                        width: 87,
                        height: 32,
                        right: i.windowWidth - 10,
                        left: i.windowWidth - 10 - i.statusBarHeight
                    }
                }));
            }
        }), wx.xngGlobal.xu.logger.logAll("firstScreenNoSysInfo"));
    },
    methods: {
        normalizeData: function(t) {
            if (t) {
                var a = t.title, i = t.theme, e = t.loading, o = t.isShowBack;
                void 0 === o && (o = !0), this.setData({
                    title: a || "",
                    theme: i || "",
                    loading: e || !1,
                    isShowBack: o
                });
            }
        },
        compareVersion: function(t, a) {
            t = t.split("."), a = a.split(".");
            for (var i = Math.max(t.length, a.length); t.length < i; ) t.push("0");
            for (;a.length < i; ) a.push("0");
            for (var e = 0; e < i; e++) {
                var o = parseInt(t[e], 10), n = parseInt(a[e], 10);
                if (o > n) return 1;
                if (o < n) return -1;
            }
            return 0;
        },
        onBackTap: function() {
            var t = (this.data.customNavigationBarData || {}).onBackTap;
            t ? t() : getCurrentPages().length > 1 ? wx.navigateBack() : wx.switchTab({
                url: "/mainPages/produce/producePage"
            });
        },
        layout: function(t) {
            var a = t.version, i = t.windowWidth, e = t.statusBarHeight, o = t.navigationTitleBarHeight, n = t.navigationHeight, r = t.menuButtonRect;
            if (this.compareVersion(a, "6.6.0") < 0 && this.data.isShow) return this.setData({
                isShow: !1
            }), wx.xngGlobal.navigationHeight = 0, void (t.navigationHeight = 0);
            var s = (this.data.customNavigationBarData || {}).isShowBack;
            void 0 === s && (s = !0), this.setData({
                isShowBack: s,
                navigationHeight: n,
                statusBarHeight: e,
                navigationTitleBarHeight: o,
                menuButtonWidth: r.width + 2 * (i - r.right)
            });
        }
    }
});