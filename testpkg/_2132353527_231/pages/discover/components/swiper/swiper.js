function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../tab-bar/config"), a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../tab-bar/utils")), i = !1;

Component({
    properties: {
        curTabName: {
            type: String,
            observer: "observeCurTabName"
        },
        tabs: Array
    },
    data: {
        TOPIC_NAMES: e.TOPIC_NAMES,
        current: 1,
        swiperHight: "calc(100vh - 240rpx)",
        loadedTab: t({}, e.TOPIC_NAMES.RECOMMEND, !0),
        showGuide: !1
    },
    attached: function() {
        var t = wx.xngGlobal.sysInfo, e = "calc(100vh - " + (t.navigationHeight + 112 / t.rpxRatio) + "px)";
        this.setData({
            swiperHight: e
        }), wx.xngGlobal.abTest.discover_swiper.showGuide && this.setData({
            showGuide: !0
        });
    },
    methods: {
        observeCurTabName: function(e) {
            var a = this.data.tabs;
            if (a.length) {
                var i = a.findIndex(function(t) {
                    return t.name === e;
                });
                i !== this.data.current && this.setData(t({
                    current: i
                }, "loadedTab." + e, !0));
            }
        },
        onSwitchTab: function(t) {
            this.triggerEvent("switchtab", t.detail);
        },
        handleChange: function(t) {
            var r = this, n = this.data.tabs, s = t.detail, o = s.current;
            if ("touch" === s.source) {
                var u = n[o];
                a.default.switchTab(u.name), u.name === e.TOPIC_NAMES.BLESS && a.default.goBlessPage(), 
                i || wx.setStorage({
                    key: "discover/swiper/hasGuide",
                    data: 1,
                    success: function() {
                        r.setData({
                            showGuide: !1
                        }), i = !0;
                    }
                });
            }
        },
        handleAnimationFinish: function(t) {
            var e = this.data.tabs, a = t.detail, i = a.current;
            if ("touch" === a.source) {
                var r = e[i];
                this.triggerEvent("switchtab", {
                    name: r.name
                });
            }
        },
        handleMoreAction: function(t) {
            this.triggerEvent("handleMoreAction", t.detail);
        }
    }
});