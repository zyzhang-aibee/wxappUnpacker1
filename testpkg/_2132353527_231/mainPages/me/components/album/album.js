function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("../../../../common/others/me/utils")), e = require("../../../../common/const/index"), o = a(require("../../../../common/const/common"));

Component({
    properties: {
        album: {
            type: Object,
            value: {},
            observer: "handleAlbumInfo"
        },
        isUserSelf: Boolean
    },
    data: {
        ban: {},
        isArticle: !1,
        isNormalAlbum: !1,
        show: !1,
        ALBUM_TYPE_STATUS: o.default.ALBUM_TYPE_STATUS,
        ALBUM_PUBLISH_TYPE_STATUS: o.default.ALBUM_PUBLISH_TYPE_STATUS
    },
    methods: {
        handleAlbumInfo: function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [ a.album_id, t.album_id, a.ban, t.ban, a.status ], l = n[0], u = n[1], i = n[2], s = n[3], r = n[4];
            l && l !== u && this.setData({
                isArticle: a.type === e.FEED_TYPE.ARTICLE,
                isNormalAlbum: a.type === e.FEED_TYPE.ALBUM
            }), r && r !== o.default.ALBUM_STATUS.SUCCESS || this.setData({
                show: !0
            }), i !== s && i && this.setData({
                ban: {
                    view_count: wx.xngGlobal.getBan("view_count", i),
                    favor_count: wx.xngGlobal.getBan("favor_count", i),
                    share: wx.xngGlobal.getBan("share", i)
                }
            });
        },
        onAlbumTap: function() {
            t.default.onAlbumTap(this.data.album);
        },
        onMoreTap: function() {
            var a = this.data.album;
            this.triggerEvent("onAlbumMoreTap", a);
        },
        onFavorTap: function() {
            t.default.onAlbumFavorTap(this.data.album);
        },
        onCommentTap: function() {
            t.default.onAlbumTap(this.data.album, 1);
        }
    }
});