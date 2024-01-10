var a = require("../../../../../../common/others/discover/utils"), i = require("../../../../../../common/const/common"), t = require("../../../../../../common/const/index");

Component({
    properties: {
        album: Object
    },
    data: {
        ALBUM_TYPE_BAN: i.ALBUM_TYPE_BAN
    },
    methods: {
        handlePlay: function() {
            var e = this.data.album, o = e.a_profile_id, m = e.ban, d = e.album_user.mid, r = e.album_type, n = e.album_id, l = this.data.album.tpl_id;
            m !== i.ALBUM_TYPE_BAN.RED ? (l === i.TPL_TYPE.RANDOM && (l = this.data.album.stpl_id), 
            (0, a.goDynamicSharePage)({
                dynamicId: o,
                dynamicMid: d,
                tplId: l,
                isArticle: r === t.ALBUM_TYPE.ARTICLE ? 1 : "",
                albumId: n
            })) : wx.showToast({
                title: "该影集涉嫌违规, 暂时无法播放",
                icon: "none"
            });
        },
        goProfilePage: function(i) {
            var t = i.target.dataset.mid, e = void 0 === t ? this.data.album.user.mid : t;
            (0, a.goProfilePage)({
                mid: e
            });
        }
    }
});