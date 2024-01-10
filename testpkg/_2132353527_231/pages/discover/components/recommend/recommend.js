var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
}, t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../common/actions/discover")), o = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t.default = e, t;
}(require("../../../../common/others/discover/helper")), i = require("../tab-bar/config");

wx.xng.Component({
    properties: {
        curTabName: String,
        recommendMark: Object
    },
    data: {
        refreshing: !1,
        TOPIC_NAMES: i.TOPIC_NAMES
    },
    ready: function() {
        var e = wx.xngGlobal.abTest.recommend_topic;
        e && (this.recommendTopicFetch = e.fetch), this.tryFetchData();
    },
    methods: {
        mapStateToData: function(e) {
            var t = e.discover, i = t.dynamicFeed, r = t.dynamicFeed.discoverRecommend, n = t.dynamicComment, c = e.entities_.dynamics;
            return {
                list: o.getDiscoverRecommendList(i, c, n),
                recommend: r
            };
        },
        onPageLoad: function(e) {
            var t = e.topicId, o = e.tagId;
            t && (this.fromTopic = {
                topicId: +t,
                tagId: +o
            });
        },
        onPageShow: function() {
            o.FeedUIMgr.hasDelFavorite && this.updateAlbumList();
        },
        onPullDownRefresh: function() {
            var e = this;
            this.recommendTopicFetch = 0, this.setData({
                refreshing: !0
            }), wx.xng.showNavigationBarLoading(), t.default.acClearRecommend({
                listName: "discoverRecommend"
            }), this.fetchData(!0).then(function() {
                e.setData({
                    refreshing: !1
                }), wx.xng.hideNavigationBarLoading();
            });
        },
        tryFetchData: function() {
            if (this.fromTopic) {
                var e = !this.shouldFetch();
                this.loadFromTopicMore(e);
            } else this.shouldFetch() && this.fetchData();
        },
        shouldFetch: function() {
            return this.data.list.length <= 1;
        },
        fetchData: function(e) {
            return t.default.acFetchRecommend({
                refresh: e,
                listName: "discoverRecommend"
            });
        },
        loadMore: function() {
            var e = this.data.recommend;
            !e.isFetching && e.hasNext && (this.fromTopic && this.recommendTopicFetch > 0 ? this.loadFromTopicMore() : t.default.acFetchRecommend({
                listName: "discoverRecommend"
            }));
        },
        loadFromTopicMore: function() {
            var o = this, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            i && this.scrollToTop(), this.recommendTopicFetch -= 1, t.default.acFetchRecommend(e({}, this.fromTopic, {
                refresh: i
            })).then(function(e) {
                e.result.length < 4 && (o.recommendTopicFetch = 0, o.fetchData());
            });
        },
        scrollToTop: function() {
            this.selectComponent("#pull-down-refresh").scrollTo({
                scrollTop: 0
            });
        },
        updateAlbumList: function() {
            o.FeedUIMgr.hasDelFavorite = !1;
            var e = wx.xngGlobal.store.getState(), t = e.discover, i = t.dynamicFeed, r = t.dynamicComment, n = e.entities_.dynamics;
            this.setData({
                list: o.getDiscoverRecommendList(i, n, r, !0)
            });
        }
    }
});