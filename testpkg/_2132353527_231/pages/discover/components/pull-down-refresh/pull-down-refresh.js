var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./utils"));

Component({
    properties: {
        curTabName: String,
        success: Boolean,
        refreshing: {
            type: Boolean,
            observer: "observeRefreshing"
        }
    },
    data: {
        INDICATOR_HEIGHT: 64,
        translateY: 0,
        indicatorTranslateY: 0,
        transition: !1,
        success: !1
    },
    created: function() {
        this.state = {
            scrollTop: 0,
            enable: !0,
            refreshing: !1,
            startX: 0,
            startY: 0,
            direction: "none"
        };
    },
    attached: function() {
        var s = wx.xngGlobal.sysInfo;
        this.isIos = s.system.includes("iOS"), this.setData({
            scrollTop: t.default.getScrollTopCache(this.data.curTabName)
        });
    },
    methods: {
        observeRefreshing: function(t, s) {
            if (!s && t) this.startRefresh(); else if (s && !t) {
                var e = !!wx.xngGlobal.abTest.discover_swiper;
                this.stopRefresh(e);
                var a = wx.xng.getCurrentPage(), i = a && a.refreshCTR;
                i && i();
            }
        },
        onScroll: function(s) {
            var e = s.detail.scrollTop;
            this.state.scrollTop = e, t.default.setScrollTopCache(this.data.curTabName, e);
            var a = wx.xng.getCurrentPage(), i = a && a.__CTR__;
            i && i.checkScrollExpose(e);
        },
        onScrollToUpper: function() {
            this.isIos || (this.state.scrollTop = 0);
        },
        scrollTo: function(t) {
            var s = t.scrollTop;
            this.setData({
                scrollTop: s
            });
        },
        startRefresh: function() {
            this.setData({
                translateY: 64,
                indicatorTranslateY: 64,
                transition: !0,
                refreshing: !0
            });
        },
        stopRefresh: function() {
            var t = this;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? (this.setData({
                translateY: 60 / wx.xngGlobal.sysInfo.rpxRatio,
                indicatorTranslateY: 60 / wx.xngGlobal.sysInfo.rpxRatio,
                transition: !0,
                refreshing: !1,
                success: !0
            }), setTimeout(function() {
                t.setData({
                    translateY: 0,
                    indicatorTranslateY: 0
                }), setTimeout(function() {
                    t.setData({
                        transition: !1,
                        success: !1
                    });
                }, 500);
            }, 3e3)) : (this.setData({
                translateY: 0,
                indicatorTranslateY: 0,
                transition: !0,
                refreshing: !1
            }), setTimeout(function() {
                t.setData({
                    transition: !1,
                    success: !1
                });
            }, 500)), this.state.direction = "none";
        },
        onTouchStart: function(t) {
            var s = t.touches[0], e = s.clientX, a = s.clientY;
            this.state.startX = e, this.state.startY = a, this.state.lastY = a;
        },
        onTouchMove: function(t) {
            var s = t.touches[0], e = s.clientX, a = s.clientY;
            if (a < this.state.lastY) this.state.lastY = a; else if (this.state.lastY = a, "horizontal" !== this.state.direction && !this.data.refreshing && !this.data.success) {
                var i = e - this.state.startX, r = a - this.state.startY;
                if ("none" === this.state.direction && (Math.abs(i) > Math.abs(r) ? this.state.direction = "horizontal" : this.state.direction = "vertical"), 
                "vertical" === this.state.direction) {
                    var n = .4 * r, o = n > 64 ? 64 : n;
                    this.isIos && (n = 0), this.setData({
                        translateY: n,
                        indicatorTranslateY: o
                    });
                }
            }
        },
        onTouchEnd: function() {
            "vertical" === this.state.direction ? this.data.indicatorTranslateY < 64 ? this.stopRefresh() : this.triggerEvent("onRefresh") : this.state.direction = "none";
        },
        loadMore: function(t) {
            this.triggerEvent("loadMore", t.detail);
        }
    }
});