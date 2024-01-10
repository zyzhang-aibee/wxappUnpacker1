var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../common/actions/topic/bless")), e = require("../../../../common/const/topic/bless"), i = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e.default = t, e;
}(require("../../../../common/others/discover/helper")), a = require("../tab-bar/config"), s = {
    ids: [],
    isFetching: !1,
    hasNext: !0
}, o = [];

wx.xng.Component({
    properties: {
        curTabName: String,
        isSwiperAb: Boolean,
        topic: Object
    },
    data: {
        TOPIC_NAMES: a.TOPIC_NAMES,
        info: {},
        tags: [],
        tag: {},
        feed: {},
        feedList: [],
        loading: !0,
        refreshing: !1,
        publishable: !1
    },
    created: function() {
        this.state = {
            tag: {},
            firstShow: !0,
            scrollTop: 0,
            topics: []
        };
    },
    attached: function() {
        this.data.info || t.default.acFetchBless();
        var e = this.state.topics.find(function(t) {
            return t.name === a.TOPIC_NAMES.BLESS;
        });
        e && e.publishable && this.setData({
            publishable: !0
        });
    },
    methods: {
        mapStateToData: function(t, e) {
            var a = this, r = t.topic, n = r.common.topics, c = r.bless, l = t.entities_.dynamics;
            this.state.bless = c, this.state.topics = n;
            var h = c.feed, f = c.info, d = c.tag, u = h[d.id] || s, g = this.state.tag;
            return e || d.id !== g.id && (this.state.tag = d, u.ids.length ? (this.refreshCTR(!1), 
            this.setCTRScrollTop(u.scrollTop), setTimeout(function() {
                wx.pageScrollTo({
                    scrollTop: u.scrollTop,
                    duration: 0
                });
            })) : setTimeout(function() {
                a.fetchFeed({
                    tagId: d.id,
                    refresh: !0
                });
            })), {
                info: f,
                tags: f ? f.tags : o,
                tag: d,
                feed: u,
                feedList: i.getBlessAlbumList(c, l),
                loading: !f
            };
        },
        onPageScroll: function(t) {
            var e = t.scrollTop;
            this.state.scrollTop = e;
        },
        onPullDownRefresh: function() {
            var e = this;
            this.setData({
                refreshing: !0
            }), wx.xng.showNavigationBarLoading(), t.default.acFetchBless().then(function() {
                e.refreshCTR(!1), e.fetchFeed({
                    refresh: !0
                }).then(function() {
                    e.setData({
                        refreshing: !1
                    }), wx.xng.hideNavigationBarLoading();
                });
            });
        },
        refreshCTR: function() {
            var t = wx.xng.getCurrentPage();
            t.refreshCTR.apply(t, arguments);
        },
        setCTRScrollTop: function() {
            var t = wx.xng.getCurrentPage();
            t.setCTRScrollTop.apply(t, arguments);
        },
        fetchFeed: function() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                refresh: !1,
                tagId: this.data.tag.id
            }, a = i.refresh, s = void 0 !== a && a, o = i.tagId, r = void 0 === o ? this.data.tag.id : o, n = 0, c = r === e.ALL_TAG_ID;
            return function e() {
                return n += 1, t.default.acFetchFeed({
                    tagId: c ? 7 : r,
                    refresh: s,
                    isAllTag: c
                }).then(function(t) {
                    n < 3 && 0 === t.result.length && e();
                });
            }();
        },
        loadMore: function() {
            var t = this.data.feed;
            t && !t.isFetching && t.hasNext && this.fetchFeed();
        },
        checkTag: function(e) {
            var i = this.state.scrollTop, a = e.detail.tag;
            t.default.acCheckTag({
                tag: {
                    id: a.id,
                    title: a.title
                },
                scrollTop: i
            });
        }
    }
});