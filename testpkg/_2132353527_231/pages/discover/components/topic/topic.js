function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
}, i = t(require("../../../../common/actions/topic/common")), a = t(require("../../../../common/actions/topic/region")), n = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e.default = t, e;
}(require("../../../../common/others/discover/helper")), o = require("../tab-bar/config"), s = t(require("../pull-down-refresh/utils"));

wx.xng.Component({
    properties: {
        curTabName: String,
        topic: Object,
        isSwiperAb: Boolean
    },
    data: {
        refreshing: !1,
        feed: {
            isFetching: !1,
            hasNext: !0
        },
        feedList: [],
        publishable: !1
    },
    attached: function() {
        this.state = {
            feed: {
                isFetching: !1,
                hasNext: !0
            }
        };
        var t = this.data.topic, e = void 0 === t ? {} : t;
        e && e.publishable && this.setData({
            publishable: !0
        }), this.tryFetchData();
    },
    detached: function() {
        this.tryClearData();
    },
    methods: {
        mapStateToData: function(t) {
            var e = t.topic.common.feeds, i = t.entities_.dynamics, a = this.data.topic, o = e[a.id] || {
                isFetching: !1,
                hasNext: !0
            }, s = {
                isFetching: o.isFetching,
                hasNext: o.hasNext
            };
            if (this.state) {
                var r = this.state.feed;
                s.isFetching === r.isFetching && s.hasNext === r.hasNext ? s = r : this.state.feed = s;
            }
            return {
                topic: a,
                feedList: n.getTopicAlbumList(this.data.curTabName, e, a.id, i),
                feed: s
            };
        },
        onPullDownRefresh: function() {
            var t = this;
            this.setData({
                refreshing: !0
            }), wx.xng.showNavigationBarLoading(), this.fetchData(!0).then(function() {
                t.setData({
                    refreshing: !1
                }), wx.xng.hideNavigationBarLoading(), t.hideRegionChoice();
            });
        },
        shouldFetch: function() {
            return !this.data.feedList.length;
        },
        fetchData: function(t) {
            var n = this.data.topic, s = {
                topicId: n.id,
                refresh: t
            };
            return n.name === o.TOPIC_NAMES.REGION ? a.default.acFetchFeed(e({}, s, {
                tagId: n.tag_id
            })) : i.default.acFetchFeed(s);
        },
        tryFetchData: function() {
            var t = this;
            this.shouldFetch() && this.fetchData().then(function() {
                t.hideRegionChoice();
            });
        },
        loadMore: function() {
            var t = this.data.feed;
            !t.isFetching && t.hasNext && this.fetchData();
        },
        tryClearData: function() {
            var t = this.data, e = t.topic;
            t.feedList.length >= 20 && (i.default.acClearTopicFeed(e.id), s.default.setScrollTopCache(e.name, 0));
        },
        goRecommend: function() {
            this.triggerEvent("switchtab", {
                name: "recommend"
            });
        },
        hideRegionChoice: function() {
            var t = this;
            this.data.topic.name === o.TOPIC_NAMES.REGION && setTimeout(function() {
                t.selectComponent("#pull-down-refresh").scrollTo({
                    scrollTop: 40
                });
            }, 300);
        }
    }
});