var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../common/actions/discover")), e = require("../../../../common/const/index"), i = require("../../../../common/others/discover/utils"), n = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e.default = t, e;
}(require("../../../../common/others/discover/helper")), r = require("../tab-bar/config");

wx.xng.Component({
    properties: {
        curTabName: String
    },
    data: {
        TOPIC_NAMES: r.TOPIC_NAMES,
        refreshing: !1
    },
    attached: function() {
        this.tryFetchData();
    },
    methods: {
        mapStateToData: function(t) {
            var e = t.discover.niceAlbum;
            return {
                dynamics: t.entities_.dynamics,
                niceAlbum: e
            };
        },
        onPullDownRefresh: function() {
            var t = this;
            this.setData({
                refreshing: !0
            }), setTimeout(function() {
                t.setData({
                    refreshing: !1
                });
            }, 1e3);
        },
        tryFetchData: function() {
            this.shouldFetch() && this.fetchData();
        },
        shouldFetch: function() {
            return 0 === this.data.niceAlbum.groupIds.length;
        },
        fetchData: function() {
            if (!this.data.niceAlbum.groupIds.length) {
                var e = n.getSwiperBannerWH(wx.xngGlobal.sysInfo.windowWidth);
                t.default.acFetchDiscover({
                    bannerQS: {
                        width: 3 * e.width,
                        height: 3 * e.height
                    },
                    limit: 5
                });
            }
        },
        loadMore: function() {
            var e = this.data.niceAlbum;
            !e.isFetching && e.hasNext && t.default.acFetchDiscover({
                startTime: e.lastGroupTime
            });
        },
        onAlbumTap: function(t) {
            var n = t.detail.item, r = n.ty, a = n.album_type, o = n.profile, c = n.profile_id, s = n.mid, u = n.id, d = n.tpl, h = n.tpl_id, l = a === e.ALBUM_TYPE.ARTICLE ? 1 : "";
            2 !== r && (0, i.goDynamicSharePage)({
                dynamicId: o ? o.id : c,
                dynamicMid: o ? o.mid : s,
                tplId: o ? d.id : h,
                isArticle: l,
                albumId: u
            });
        }
    }
});