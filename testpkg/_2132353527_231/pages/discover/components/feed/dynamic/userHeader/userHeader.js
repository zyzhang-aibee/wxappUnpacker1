function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var i = Object.assign || function(e) {
    for (var i = 1; i < arguments.length; i++) {
        var a = arguments[i];
        for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
}, a = require("../../../../../../common/others/discover/utils"), t = require("../../../../../../common/const/index"), o = e(require("../../../../../../mainPages/common/specialPlay")), n = require("../../../../../../common/const/common"), r = require("../../../../../../frameBase/Component/MoreActionSheet/actionsFuc"), s = e(require("../../../../../../common/actions/play"));

Component({
    properties: {
        dynamic: {
            type: Object,
            value: {},
            observer: "handleDynamic"
        },
        followedFriends: {
            type: Object,
            value: {}
        },
        user: {
            type: Object,
            value: {},
            observer: function(e) {
                if (e) {
                    var i = e.mid, a = wx.xngGlobal.xu.mid;
                    if (!a || !i) return;
                    a === i !== this.data.isAuthor && this.setData({
                        isAuthor: a === i
                    });
                }
            }
        },
        canMakeSame: {
            type: Boolean,
            value: !1
        },
        page: String,
        isShowMoreBtn: {
            type: Boolean,
            value: !0
        },
        showModify: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        FEED_TYPE: t.FEED_TYPE,
        isAuthor: !1,
        isAlbumAuthor: !1,
        isBlessVideo: !1,
        makeSameText: "制作同款"
    },
    methods: {
        handleDynamic: function(e) {
            if (e && e.user) {
                var i = wx.xngGlobal.xu.mid, a = e.album_user, n = e.user, r = e.ban, s = a ? a.mid === i : n && n.mid === i, l = o.default.isBlessVideo(e.tpl_id), u = e.tpl_type ? "制作同款" : "我要制作";
                this.setData({
                    makeSameText: u,
                    isBlessVideo: l,
                    isAlbumAuthor: s,
                    isHideUser: wx.xngGlobal.getBan("user", r) || e.type === t.FEED_TYPE.ALBUM && (e.hide_u || 1e4 === n.mid || !n.nick)
                });
            }
        },
        goProfilePage: function() {
            var e = this.data, i = e.dynamic.user.mid;
            e.isHideUser ? wx.showToast({
                title: "该影集作者是匿名用户哦！",
                icon: "none"
            }) : (0, a.goProfilePage)({
                mid: i
            });
        },
        handleMoreAction: function() {
            var e = this.data.dynamic;
            this.triggerEvent("handleMoreAction", e);
        },
        handleMakeAlbum: function() {
            var e = this.data.dynamic;
            (0, a.handleMakeAlbum)(e);
        },
        handleFollow: function() {
            var e = {
                mid: this.data.user.mid
            };
            (0, a.followUser)(e);
        },
        handleModifyAlbum: function() {
            var e = this.data.dynamic;
            !e || void 0 !== e.status && e.tpl_id !== n.TPL_TYPE.SPECIAL_PLAY_MV ? (0, r.onModifyAlbum)(e, "dynamicShare") : wx.xngGlobal.dispatch(s.default.acFetchAlbum({
                lid: e.lid,
                coverAlbumListData: !0
            })).then(function(a) {
                var t = a.entities.dynamics[a.result[0]];
                (0, r.onModifyAlbum)(i({}, t, e), "dynamicShare");
            });
        }
    }
});