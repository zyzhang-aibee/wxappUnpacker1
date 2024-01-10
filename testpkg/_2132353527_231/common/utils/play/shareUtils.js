var e = require("../../const/index"), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../actions/entities/dynamics")), n = require("../../../config/config.js"), o = require("../../others/utils.js"), t = require("../../const/common.js");

module.exports = {
    handleShareBtn: function(i, t, r) {
        var s = [], a = wx.xng.getCurrentPage();
        return o.versionCompatible(wx.getSetting, function() {
            s.push({
                title: "分享给好友或微信群",
                openType: "share",
                icon: n.resourceDomain + "/img/tools/shareFriend_noback.png"
            });
        }, function() {}), t && t.hide_sensitive && t.hide_sensitive.enabled && t.hide_sensitive.switch_off && t.hide_sensitive.code_ver === n.codeVer || i.album_type !== e.ALBUM_TYPE.ARTICLE && s.push({
            title: "获取网页链接",
            tip: "点击右下“可能发送的小程序”",
            openType: "contact",
            onTap: a.onShareGroup,
            icon: n.resourceDomain + "/img/tools/link_green.png"
        }), s.push({
            title: i.favoriteId ? "取消收藏" : "收藏影集",
            tip: "收藏的影集会放入“我-收藏”中",
            onTap: a.onXNGFavoriteTap,
            icon: i.favoriteId ? n.resourceDomain + "/img/play/tool/favorited.png" : n.resourceDomain + "/img/play/tool/favorite.png"
        }), i.album_type !== e.ALBUM_TYPE.ARTICLE && r && s.push({
            title: "保存/下载影集",
            onTap: a.onDownLoadTap,
            icon: n.resourceDomain + "/img/tools/download.png"
        }), s;
    },
    confirmContribute: function(n) {
        wx.showToast({
            title: "发表中...",
            icon: "loading",
            mask: !0,
            duration: 1e4
        });
        var o = n.title.length > 10 ? n.title.substring(0, 10) + "..." : n.title;
        i.default.acPublishDynamic({
            id: n.id,
            dynamicId: n.profile_id,
            type: n.album_type === e.ALBUM_TYPE.ARTICLE ? e.FEED_TYPE.ARTICLE : e.FEED_TYPE.ALBUM
        }).then(function() {
            wx.showToast({
                title: "《" + o + "》发表成功",
                icon: "none"
            });
        }).catch(function(e) {
            wx.showToast({
                title: e,
                icon: "none"
            });
        });
    },
    isAlbumCannotContribute: function(e) {
        return (e.p === t.ALBUM_PUBLISH_TYPE_STATUS.PUBLISH || e.s === t.ALBUM_TYPE_STATUS.FEATURED) && (wx.showToast({
            title: "该影集已经发表",
            icon: "none"
        }), !0);
    }
};