var a = require("../../../../../../common/others/discover/utils"), e = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../../../../common/const/common")), t = require("../../../../../../common/const/index");

Component({
    properties: {
        album: {
            type: Object,
            value: {},
            observer: "handleAlbum"
        },
        withoutAlbum: Boolean
    },
    data: {
        albumStoryBan: !1
    },
    methods: {
        handleAlbum: function(a) {
            a && a.ban && this.setData({
                albumStoryBan: wx.xngGlobal.getBan("album_story", a.ban)
            });
        },
        handlePlay: function() {
            var o = this.data.album, l = o.id, n = o.user, i = o.tpl_id, u = o.album_type, m = o.album_id, d = o.profile_id, r = i === e.default.TPL_TYPE.RANDOM ? this.data.album.stpl_id : i;
            (0, a.goDynamicSharePage)({
                dynamicId: d || l,
                dynamicMid: n.mid,
                tplId: r,
                isArticle: u === t.ALBUM_TYPE.ARTICLE ? 1 : "",
                albumId: m
            });
        }
    }
});