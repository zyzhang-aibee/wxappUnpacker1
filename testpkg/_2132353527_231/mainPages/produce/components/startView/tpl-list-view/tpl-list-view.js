function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../actions/produce")), i = e(require("../../../../../common/others/wxStat")), o = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t.default = e, t;
}(require("../../../utils/actionSheetUtils"));

Component({
    properties: {
        tplList: {
            type: Array,
            value: []
        },
        playingTplIdx: {
            type: Number,
            value: -1,
            observer: "handlePlayingTplIdx"
        },
        hasDraftPhoto: {
            type: Boolean,
            value: !1
        },
        isNewUser: {
            type: Boolean,
            value: !1
        },
        tplNums: {
            type: Number,
            value: 0,
            observer: "handleTplNums"
        }
    },
    data: {
        isVideoFullScreen: !1,
        isVideoHide: !1
    },
    externalClasses: [ "tpl-list-view" ],
    methods: {
        handleTplNums: function(e) {
            var t = this;
            e < 1 || setTimeout(function() {
                for (var i = 1; i < e; i++) t.interserctionObserver = t.createIntersectionObserver({
                    thresholds: [ 1 ],
                    initialRatio: 0
                }).relativeToViewport().observe("#tpl-" + i, t.reportTplExpose);
            }, 500);
        },
        reportTplExpose: function(e) {
            1 === e.intersectionRatio && i.default.report("recommend_tpl_expose", {
                tplid: e.dataset.tplid
            });
        },
        handlePlayingTplIdx: function(e) {
            e < 0 || (this.videoCtx = wx.createVideoContext("video-" + e, this));
        },
        onTplTap: function(e) {
            var t = e.currentTarget.dataset, o = t.tplIndex, l = t.tplid;
            this.data.playingTplIdx !== o ? (this.triggerEvent("tpltap", {
                tplIndex: o
            }), i.default.report("recommend_tpl_video_play", {
                tplid: l
            })) : this.isPlaying ? this.videoCtx && this.videoCtx.pause() : this.videoCtx && this.videoCtx.play();
        },
        goMakeAlbum: function(e) {
            var i = e.target.dataset, l = i.tplId, a = i.tplIndex, r = this.data, n = r.hasDraftPhoto, s = r.tplList, d = wx.xngGlobal.store.getState().produce.edit.draft.photos.length, p = this.data.tplList[a].img_num;
            if (d > p) wx.showToast({
                title: "您已经上传了" + d + "张照片，此模板最多支持" + p + "张照片，请选择其他模板或删除" + (d - p) + "张照片试试",
                duration: 5e3,
                icon: "none"
            }); else {
                if (this.curTplId = l, t.default.acSetAlbumTpl(l), t.default.acSetAlbumMusics([]), 
                t.default.acSetRecommendTpl(), n) return wx.xngGlobal.needShowSameModelAlert = !0, 
                void wx.navigateTo({
                    url: "/pages/produce/editAlbumPage/editAlbumPage?hasDraft=1&for=sameModel&fromtpl=1"
                });
                var u = getCurrentPages(), c = u[u.length - 1];
                c.route.indexOf("producePage") < 0 || (c.hasClickAdd = !1, c.fromtpl = !0, this.data.isNewUser ? o.uploadPhoto() : (this.changeVideoVisible(!1), 
                o.showUploadActionSheet(s[a].video)));
            }
        },
        changeVideoVisible: function(e) {
            this.setData({
                isVideoHide: !e
            });
        },
        handleVideoPlay: function() {
            this.isPlaying = !0;
        },
        handleVideoPause: function() {
            this.isPlaying = !1;
        },
        gotoAllTplTap: function() {
            wx.redirectTo({
                url: "/pages/produce/recommendAllTplPage/recommendAllTplPage?from=produce"
            });
        },
        onFullScreenChange: function(e) {
            var t = e.detail.fullScreen;
            this.setData({
                isVideoFullScreen: t
            });
        }
    }
});