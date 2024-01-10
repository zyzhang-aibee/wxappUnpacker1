function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("../../../../../../common/actions/discover")), t = require("../../../../../../common/const/index"), n = require("../../../../../../common/others/discover/utils"), i = e(require("../../../../../../common/const/common"));

Component({
    properties: {
        topic: Object,
        dynamic: Object
    },
    data: {
        showShareRedDot: !0,
        ALBUM_TYPE: t.ALBUM_TYPE,
        needAuthFavor: !1,
        needAuthComment: !1,
        needAuthShare: !1
    },
    attached: function() {
        var e = wx.xngGlobal.abTest.user_authorization, a = void 0 === e ? {} : e, t = a.feed_favor, n = a.feed_comment, i = a.feed_share;
        this.setData({
            needAuthFavor: !!t,
            needAuthComment: !!n,
            needAuthShare: !!i
        });
    },
    methods: {
        goProfilePage: function() {
            this.triggerEvent("goProfilePage");
        },
        goDynamicSharePage: function() {
            var e = this.data.dynamic, o = e.id, d = e.user.mid, r = e.album_type, m = e.album_id, c = this.data.dynamic.tpl_id;
            c === i.default.TPL_TYPE.RANDOM && (c = this.data.dynamic.stpl_id), a.default.acLogPlayUV({
                did: o,
                mid: d,
                type: t.DYNAMIC_PLAY_UV_TYPE.FEED
            }), (0, n.goDynamicSharePage)({
                dynamicId: o,
                dynamicMid: d,
                tplId: c,
                isComment: !0,
                isArticle: r === t.ALBUM_TYPE.ARTICLE ? 1 : "",
                albumId: m
            });
        },
        handleFavor: function() {
            var e = this.data.dynamic;
            wx.xngGlobal.getBan("favor_album", e.ban) || (0, n.favorDynamic)({
                dynamic: e
            });
        },
        handleCollect: function() {
            var e = this.data.dynamic;
            wx.xngGlobal.getBan("favorites", e.ban) || (0, n.favoriteDynamic)({
                dynamic: e
            });
        }
    }
});