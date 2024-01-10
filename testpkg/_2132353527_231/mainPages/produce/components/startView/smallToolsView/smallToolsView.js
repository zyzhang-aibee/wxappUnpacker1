function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var i = e(require("../../../../../common/actions/article")), a = e(require("../../../../../config/config")), t = e(require("../../../../common/spliceVideoUtils")), o = e(require("../../../../common/articleUtils")), l = e(require("../../../../../frameBase/utils/mta/mta_analysis"));

Component({
    properties: {},
    data: {
        smallTools: [ {
            picSrc: a.default.resourceDomain + "/img/produce/new_miniVideo.png",
            title: "送祝福",
            type: "miniVideo",
            isNew: !1
        }, {
            picSrc: a.default.resourceDomain + "/img/produce/new_mvIcon.png",
            title: "做MV",
            type: "musicVideo",
            isNew: !1
        }, {
            picSrc: a.default.resourceDomain + "/img/produce/new_videoMosaic.png",
            title: "视频剪辑",
            type: "videoMosaic",
            isNew: !1
        }, {
            picSrc: a.default.resourceDomain + "/img/produce/article.png",
            title: "做图文",
            type: "article",
            isNew: !1
        } ],
        isNewPageB: wx.xngGlobal.abTest.produce_page ? "b" === wx.xngGlobal.abTest.produce_page.plan : "",
        isTplSort: wx.xngGlobal.abTest.produce_tpl_sort || wx.xngGlobal.abTest.tpl_sort || ""
    },
    ready: function() {
        var e = wx.xngGlobal.abTest.show_make_article, i = e ? e.show_make_article : "", a = wx.xngGlobal.abTest, t = a.produce_page, o = a.produce_tpl_sort, l = void 0 === o ? "" : o, c = a.tpl_sort, s = void 0 === c ? "" : c;
        this.setData({
            isShowMakeArticle: i,
            isNewPageB: t ? "b" === t.plan : "",
            isTplSort: l || s
        });
    },
    methods: {
        onToolClick: function(e) {
            switch (e.currentTarget.dataset.type) {
              case "videoMosaic":
                this.onVideoMosaicClick();
                break;

              case "miniVideo":
                this.onMiniVideoClick();
                break;

              case "musicVideo":
                this.onMusicVideoClick();
                break;

              case "article":
                this.onArticleClick();
            }
        },
        onVideoMosaicClick: function() {
            t.default.goSpliceVideoPage();
        },
        onMiniVideoClick: function() {
            wx.reportAnalytics("test_produce_bless_enter_tap_api", {}), l.default.Event.stat("produce_bless_enter_tap", {}), 
            wx.navigateTo({
                url: "/pages/specialPlay/sendBlessingVideo/videoTypeChoosePage/videoTypeChoosePage"
            });
        },
        onMusicVideoClick: function() {
            wx.navigateTo({
                url: "/pages/specialPlay/mv/musicPage/musicPage"
            });
        },
        onArticleClick: function() {
            var e = wx.xngGlobal.abTest.article_abtest, a = void 0 === e ? {} : e, t = wx.xngGlobal.store.getState().specialPlay.article.currentEdit;
            i.default.acSetEditType("edit"), t.sections.length < 1 ? (wx.showLoading({
                title: "加载中",
                mask: !0
            }), i.default.acFetchArticleDraft().then(function(e) {
                wx.hideLoading(), e.data.sections.length ? (i.default.acSetArticleData(e.data), 
                wx.navigateTo({
                    url: "/pages/specialPlay/article/editArticlePage/editArticlePage"
                })) : a.add_photo ? o.default.uploadPhotoGoEditPage() : wx.navigateTo({
                    url: "/pages/specialPlay/article/editArticlePage/editArticlePage"
                });
            }).catch(function() {
                wx.hideLoading(), a.add_photo ? o.default.uploadPhotoGoEditPage() : wx.navigateTo({
                    url: "/pages/specialPlay/article/editArticlePage/editArticlePage"
                });
            })) : wx.navigateTo({
                url: "/pages/specialPlay/article/editArticlePage/editArticlePage"
            });
        }
    }
});