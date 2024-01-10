function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var o = e(require("../../common/actions/spliceVideos")), i = e(require("../../common/control/produce")), s = e(require("../../common/others/wxStat")), a = e(require("../../common/actions/me"));

module.exports = {
    goSpliceVideoPage: function() {
        var e = wx.xngGlobal, t = e.store.getState, l = e.sysInfo.windowWidth, c = e.dispatch;
        if (t().specialPlay.spliceVideos.videos.length > 0) wx.navigateTo({
            url: "/pages/specialPlay/spliceVideosPage/spliceVideosPage"
        }); else {
            var d = l - 64 + "x150";
            i.default.uploadVideo({
                qsSize: d,
                success: function(e) {
                    s.default.report("xwf_splice_videos_upload"), wx.showLoading({
                        title: "加载中",
                        mask: !0
                    }), o.default.acAddVideo(e), c(a.default.acClearPhotoList()), wx.navigateTo({
                        url: "/pages/specialPlay/spliceVideosPage/spliceVideosPage",
                        success: function() {
                            wx.hideLoading();
                        }
                    });
                }
            });
        }
    }
};