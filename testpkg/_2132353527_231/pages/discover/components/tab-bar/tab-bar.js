var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../common/actions/topic/common")), e = require("./config"), a = !1;

wx.xng.Component({
    properties: {
        curTab: {
            type: String,
            value: e.TOPIC_NAMES.RECOMMEND,
            observer: "scrollToCenter"
        },
        tabs: {
            type: Array,
            value: [],
            observer: "onTabsChange"
        }
    },
    data: {
        statusBarHeight: 20,
        navigationHeight: 64,
        scrollLeft: 0,
        isShowMore: !1,
        show_search: !1
    },
    attached: function() {
        t.default.acFetchTopics();
        var e = wx.xngGlobal, a = e.sysInfo.statusBarHeight, i = e.navigationHeight;
        this.setData({
            statusBarHeight: a,
            navigationHeight: i,
            show_search: !!wx.xngGlobal.abTest.show_search
        }), this.state = {
            scrollLeft: 0
        }, Object.assign(wx.xng.getCurrentPage(), {
            __tabBar__: {
                switchTab: this.switchTab.bind(this),
                goBlessPage: this.goBlessPage.bind(this)
            }
        });
    },
    methods: {
        onTabsChange: function(t) {
            var e = this, a = this.data.curTab;
            this.setIsShowMore(t), setTimeout(function() {
                e.scrollToCenter(a);
            });
        },
        switchTab: function(t) {
            this.setData({
                curTab: t
            });
        },
        setIsShowMore: function(t) {
            t && t.length && this.setData({
                isShowMore: t.length > 6
            });
        },
        onScroll: function(t) {
            var e = t.detail.scrollLeft;
            this.state.scrollLeft = e;
        },
        scrollToCenter: function(t) {
            var e = this;
            wx.createSelectorQuery().in(this).select("#" + t).boundingClientRect(function(t) {
                if (t) {
                    var a = t.width, i = t.left + e.state.scrollLeft + a / 2 - wx.xngGlobal.sysInfo.windowWidth / 2;
                    e.setData({
                        scrollLeft: i
                    });
                }
            }).exec();
        },
        onTabTap: function(t) {
            var a = this, i = this.data, n = i.curTab, o = i.tabs, s = t.target.dataset.name;
            if (s !== n) if (s === e.TOPIC_NAMES.BLESS) {
                if (!o.find(function(t) {
                    return t.name === e.TOPIC_NAMES.BLESS;
                }).mini) return void this.triggerEvent("switchtab", {
                    name: s
                });
                this.goBlessPage(function() {
                    a.triggerEvent("switchtab", {
                        name: s
                    });
                });
            } else this.triggerEvent("switchtab", {
                name: s
            });
        },
        goBlessPage: function(t) {
            if (!a) {
                a = !0;
                var e = wx.xngGlobal, i = e.sysInfo;
                1037 === e.hotScene && i.system.indexOf("Android") > -1 ? wx.navigateBackMiniProgram({
                    complete: function() {
                        a = !1;
                    }
                }) : wx.navigateToMiniProgram({
                    appId: "wx018f668a2cd22af8",
                    envVersion: "trial",
                    fail: function() {
                        t && t();
                    },
                    complete: function() {
                        a = !1;
                    }
                });
            }
        },
        goManagePage: function() {
            wx.navigateTo({
                url: "/pages/community/topicSortPage/topicSortPage"
            });
        },
        goSearchPage: function() {
            wx.navigateTo({
                url: "/pages/community/discoverSearchPage/discoverSearchPage"
            });
        }
    }
});