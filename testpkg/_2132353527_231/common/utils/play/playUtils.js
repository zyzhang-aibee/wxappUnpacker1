var t = require("../../const/index"), e = require("../../others/utils.js"), i = require("../../const/common.js");

module.exports = {
    handleAlbumData: function(t, n) {
        if (t.displayTime = t.ct ? e.formatTimeOfAlbum(t.ct) : "时间: 无", t.updateTime = t.mt ? e.formatTimeOfAlbum(t.mt) : t.displayTime, 
        t.isVert = t.w / t.h <= 1 && !t.ban, t.views > 1e5 && (t.views = "100000+"), t.isVert && (t.midItemWidthPercent = (3 * t.w * 100 / (4 * t.h)).toFixed(2) + "%"), 
        t.status == i.ALBUM_STATUS.SUCCESS || t.isFetching || (t.v_url = ""), t.title || n || (t.title = "我的小年糕"), 
        t.fail_reason && !t.fail_reason.disable) switch (t.fail_reason[0].errno) {
          case -3:
            t.failReason = "照片损坏";
            break;

          case -4:
            t.failReason = "音乐损坏";
            break;

          default:
            t.failReason = "";
        }
        return t;
    },
    handleCommentData: function(t, i, n, s) {
        return t.list.forEach(function(t) {
            t && (t.time = e.formatUnixTime4YMDHM(t.ct), t.opAuth = s && "latest" === n, t.isReaderReply = t.user.mid == i && "latest" === n, 
            t.showReply = t.showReply || !1);
        }), t;
    },
    handleAuthorizeViewData: function(t, e) {
        return t.hidden = "0" != e, t;
    },
    handleNavBarData: function(t, e, i) {
        return t.right.text = i ? "" : e ? "编辑" : "更多", t;
    },
    getMakingText: function(t, e) {
        var n = "", s = 0;
        if (!e) return {
            text: n,
            progress: s
        };
        if (!t.lnt || t.status != i.ALBUM_STATUS.MAKING && t.status != i.ALBUM_STATUS.PREPARE) t.status == i.ALBUM_STATUS.REDO ? (n = "制作超时, 正在重新制作", 
        s = 85) : t.status == i.ALBUM_STATUS.FAIL ? (n = "制作失败，建议复制重做", s = 0) : t.status == i.ALBUM_STATUS.WAIT && (n = "已经做完,等待推送", 
        s = 99); else {
            var a = t.lnt - Date.now(), r = t.lnt - t.ct;
            n = "正在制作中...", s = (s = 100 - Math.floor(100 * a / r)) < 2 ? 0 : s >= 100 ? 98 : 85 + s / 100 * 15;
        }
        return {
            text: n,
            progress: s
        };
    },
    isAlbumStatusNotSuccess: function(t, e) {
        return t != i.ALBUM_STATUS.SUCCESS && t != i.ALBUM_STATUS.FAIL && (!e && wx.showToast({
            title: "影集正在准备中，请稍后再试",
            icon: "none"
        }), !0);
    },
    isAlbumCanDelete: function(t) {
        return t != i.ALBUM_TYPE_STATUS.FEATURED || (wx.showToast({
            title: "佳作不能删除",
            icon: "none"
        }), !1);
    },
    isSpliceVideos: function(e) {
        return (1 === e.tpl_type || e.album_type === t.ALBUM_TYPE.SPLICE_VIDEOS) && (wx.showToast({
            title: "该影集不支持该功能",
            icon: "none"
        }), !0);
    }
};