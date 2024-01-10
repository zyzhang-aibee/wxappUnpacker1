var e = require("../../../../../common/others/discover/utils"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../config/config")), i = require("../../../../../common/const/statusNType");

Component({
    properties: {},
    data: {
        actions: [],
        show: !1
    },
    attached: function() {
        var e = getCurrentPages();
        e[e.length - 1].__showShareActionSheet__ = this.show.bind(this);
    },
    methods: {
        show: function(e) {
            var o = e.dynamic, n = wx.xngGlobal.general, a = {
                id: "sheetShare",
                title: "分享给好友或微信群",
                src: t.default.resourceDomain + "/img/tools/shareFriend_noback.png",
                openType: "share",
                data: o
            }, s = o.front_render || n && n.hide_sensitive && n.hide_sensitive.enabled && n.hide_sensitive.switch_off && n.hide_sensitive.code_ver === t.default.codeVer ? null : {
                id: "sheetWebLink",
                title: "获取网页链接",
                tip: "点击右下“可能发送的小程序”",
                src: t.default.resourceDomain + "/img/tools/link_green.png",
                openType: "contact",
                bindtap: "onShareGroup"
            }, r = {
                id: "sheetCollect",
                title: o.favoriteId ? "取消收藏" : "收藏影集",
                tip: "收藏的影集会放入“我-收藏”中",
                src: o.favoriteId ? t.default.resourceDomain + "/img/play/tool/favorited.png" : t.default.resourceDomain + "/img/play/tool/favorite.png",
                bindtap: "onFavoriteTap"
            }, c = s && o.album_type !== i.ALBUM_TYPE.ARTICLE ? [ a, s, r ] : [ a, r ];
            this.setData({
                actions: c,
                dynamic: o,
                show: !0
            }), this.onShow();
        },
        onShareGroup: function() {
            var t = this.data.dynamic;
            this.onHide(), (0, e.shareGroup)({
                dynamic: t
            });
        },
        onFavoriteTap: function() {
            var t = this.data.dynamic;
            (0, e.favoriteDynamic)({
                dynamic: t
            });
        },
        onSuccess: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("onSuccess"), this.onHide();
        },
        onFail: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("onFail"), this.onHide();
        },
        onShow: function() {
            this.triggerEvent("onShow");
        },
        onHide: function() {
            this.triggerEvent("onHide");
        }
    }
});