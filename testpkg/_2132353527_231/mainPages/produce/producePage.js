function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
}, a = t(require("./actions/produce")), i = require("./utils/formatDataUtils"), o = require("../../mainPages/me/redDotController"), s = t(require("../../common/others/msgManager")), l = require("../../common/others/utils"), n = require("../../common/const/common"), r = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e.default = t, e;
}(require("./utils/actionSheetUtils"));

wx.xng.Page({
    data: {
        isBigFontScheme: wx.xngGlobal.isBigFontScheme || !1,
        currentPage: -1,
        authorizeData: {
            hidden: !0
        },
        customNavigationBarData: {
            title: "",
            isShowBack: !1
        },
        showScrollTip: !1
    },
    selectedTpl: {},
    scrollTop: 0,
    mapStateToData: function(t) {
        var o = this, s = t.produce, l = s.produceOptions, r = s.edit.draft, h = s.recommendTpl, d = t.entities.tpl;
        this.tplEntity = d, this.recommendTpl = h, this.isFetchingTpl = l.isFetchingTpl;
        var p = r.videoNum > 0, c = (0, i.getRecommendTpl)(h, d, p, r.tpl_id);
        this.recommendTplList = c.map(function(t, a) {
            var i = parseInt((a - 1) / 2, 10), s = wx.xngGlobal.sysInfo.screenWidth / 750 * 500 + (o.isNewPageB ? 58 : 49);
            return e({}, t, {
                top: s * i
            });
        }), r.tpl_id === n.TPL_TYPE.SPECIAL_PLAY_MV && a.default.acSetAlbumTpl(n.TPL_TYPE.RANDOM), 
        this.selectedTpl = d[r.tpl_id];
        var u = (t.me.userinfo ? (t.me.userinfo.albums || 0) + (t.me.userinfo.graphic || 0) : -1) + 0 === 0, g = {
            hidden: 1 === t.me.userinfo.has_auth
        }, T = wx.getStorageSync("hasShownBigFontTip");
        return r.photos.length && this.isActive && (this.hasClickAdd || this.fromtpl) && (this.hasClickAdd = !1, 
        this.fromtpl = !1, this.goToEditAlbumPage()), {
            hasFetchDraft: l.hasFetchDraft,
            fetchDraftFail: l.fetchDraftFail,
            hasDraftPhoto: r.photos.length,
            totalTopHeight: wx.xngGlobal.navigationHeight || 0,
            startData: {
                recommendTpl: c,
                hasDraftPhoto: r.photos.length,
                isNewUser: u,
                playingTplIdx: -1
            },
            authorizeData: g,
            showBigFontTip: void 0 !== t.me.userinfo.albums && !u && !T
        };
    },
    onLoad: function(t) {
        var e = wx.xngGlobal.abTest, a = e.produce_page, i = e.produce_add_button;
        this.isNewPageB = a ? "b" === a.plan : "";
        var o = i && i.height || 200, s = wx.xngGlobal, n = s.navigationHeight, r = s.sysInfo.screenWidth;
        this.tplViewTop = n + o + (r - 90) / 4 + 66 + 15 + 32, wx.showLoading && wx.showLoading({
            title: "加载中",
            mask: !0
        }), this.isActive = !0, (0, l.tplMsgRedirect)(t);
    },
    onReady: function() {
        wx.hideLoading && wx.hideLoading();
        var t = wx.getStorageSync("last_time_scrolled_produce_page");
        this.isNewPageB && Date.now() - t > 24e4 && this.setData({
            showScrollTip: !0
        });
    },
    onShow: function() {
        this.recommendTpl.list.length || a.default.acGetTplRecommend(), this.isFetchingTpl || this.tplEntity[n.TPL_TYPE.RANDOM] || a.default.acFetchAlbumTplListGroup(), 
        s.default.startPollMsg(), (0, o.setControllerData)();
    },
    onHide: function() {
        s.default.endPollMsg(), this.setData({
            "startData.playingTplIdx": -1
        });
    },
    onUnload: function() {
        s.default.endPollMsg();
    },
    onAddPhotosTap: function() {
        this.hasClickAdd = !0, this.fromtpl = !1, a.default.acHideSameModelView(), this.data.hasDraftPhoto ? this.goToEditAlbumPage() : this.data.startData.isNewUser || wx.xngGlobal.abTest.add_button ? r.uploadPhoto() : r.showUploadActionSheet(this.selectedTpl.video);
    },
    goToEditAlbumPage: function() {
        wx.redirectTo({
            url: "/pages/produce/editAlbumPage/editAlbumPage?hasDraft=0&" + (this.fromtpl ? "fromtpl=1" : "")
        });
    },
    onPageTap: function() {
        var t = this.selectComponent(".helper-view");
        t && t.guideThrottle(), this.data.showBigFontTip && wx.setStorageSync("hasShownBigFontTip", !0);
    },
    onFetchTap: function() {
        a.default.acFetchAlbumDraft();
    },
    onPageScroll: function(t) {
        var e = this, a = t.scrollTop;
        this.scrollTop = a, a > 0 && setTimeout(function() {
            e.hideScrollTip();
        }, 500);
        var i = this.data.startData.playingTplIdx;
        if (!(i < 0)) {
            var o = wx.xngGlobal.navigationHeight, s = this.recommendTplList[i].top;
            a + o > this.tplViewTop + s + (this.data.authorizeData.hidden ? 0 : 64) - 20 && this.setData({
                "startData.playingTplIdx": -1
            });
        }
    },
    onTplTap: function(t) {
        var e = this;
        this.hideScrollTip();
        var a = t.detail.tplIndex, i = this.recommendTplList, o = this.scrollTop, s = wx.xngGlobal.navigationHeight, l = i[a].top;
        o + s < this.tplViewTop + l + (this.data.authorizeData.hidden ? 0 : 64) - 20 ? this.setData({
            "startData.playingTplIdx": a
        }) : (wx.pageScrollTo({
            scrollTop: this.tplViewTop + (this.data.authorizeData.hidden ? 0 : 64) + l - s - 20,
            duration: 0
        }), setTimeout(function() {
            e.setData({
                "startData.playingTplIdx": a
            });
        }, 100));
    },
    onActionSheetShow: function() {
        this.setData({
            "startData.playingTplIdx": -1
        });
    },
    hideScrollTip: function() {
        this.data.showScrollTip && (this.setData({
            showScrollTip: !1
        }), wx.setStorageSync("last_time_scrolled_produce_page", Date.now()));
    },
    onShareAppMessage: function() {}
});