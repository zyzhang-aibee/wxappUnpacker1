var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../common/actions/discover")), t = require("../tab-bar/config"), a = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("../../../../common/others/discover/helper"));

wx.xng.Component({
    properties: {
        curTabName: String
    },
    data: {
        refreshing: !1,
        TOPIC_NAMES: t.TOPIC_NAMES
    },
    attached: function() {
        this.tryFetchData();
    },
    methods: {
        mapStateToData: function(e) {
            var t = e.discover, i = t.dynamicFeed, n = t.dynamicFeed.discoverFollow, o = t.dynamicComment, r = t.weakFriends, s = e.auth, c = e.entities_.dynamics;
            return {
                list: a.getDiscoverFollowList(i, c, o, !0),
                follow: n,
                weakFriends: r,
                auth: s
            };
        },
        onPageShow: function() {
            a.FeedUIMgr.hasDelFavorite && this.updateAlbumList(), 0 === this.data.follow.ids.length && this.loadMore();
        },
        onPullDownRefresh: function() {
            var t = this;
            this.setData({
                refreshing: !0
            }), wx.xng.showNavigationBarLoading(), e.default.acClearFeed(), this.fetchData(!0, function() {
                t.setData({
                    refreshing: !1
                }), wx.xng.hideNavigationBarLoading();
            });
        },
        tryFetchData: function() {
            this.shouldFetch() && this.fetchData();
        },
        loadMore: function() {
            var t = this.data.follow;
            !t.isFetching && t.hasNext && e.default.acFetchFeed({
                startTime: t.lastTime
            });
        },
        shouldFetch: function() {
            return !this.data.list.length;
        },
        fetchData: function(t, a) {
            var i = this.data, n = i.follow, o = i.weakFriends;
            e.default.acFetchFeed({
                startTime: t ? -1 : n.lastTime,
                refresh: t,
                success: function() {
                    a && a();
                }
            }), o.mids.length && !t || e.default.acFetchWeakFriend({
                refresh: t
            });
        },
        goRecommend: function() {
            this.triggerEvent("switchtab", {
                name: t.TOPIC_NAMES.RECOMMEND
            });
        },
        handleMoreAction: function(e) {
            this.triggerEvent("handleMoreAction", e.detail);
        },
        updateAlbumList: function() {
            a.FeedUIMgr.hasDelFavorite = !1;
            var e = wx.xngGlobal.store.getState(), t = e.discover, i = t.dynamicFeed, n = t.dynamicComment, o = e.entities_.dynamics;
            this.setData({
                list: a.getDiscoverFollowList(i, o, n, !0)
            });
        }
    }
});