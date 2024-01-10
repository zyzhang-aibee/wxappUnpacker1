function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var n = require("../../../../../../common/const/index"), e = a(require("../../../../../../mainPages/common/specialPlay")), t = require("../../../../../../common/const/common"), o = require("../../../../../../common/others/discover/utils"), i = a(require("../../dynamicCommentInput/utils")), m = a(require("../../../../../discover/components/common/customer-service-entry/utils"));

Component({
    properties: {
        dynamic: {
            type: Object,
            value: {},
            observer: "handleDynamic"
        },
        page: String
    },
    data: {
        FEED_TYPE: n.FEED_TYPE,
        animationData: {},
        ALBUM_TYPE: n.ALBUM_TYPE,
        needAuthFavor: !1,
        needAuthComment: !1,
        needAuthShare: !1
    },
    attached: function() {
        this.favorReqDone = !0;
        var a = wx.createAnimation({
            duration: 300,
            timingFunction: "ease-out"
        });
        this.animation = a;
        var n = wx.xngGlobal.abTest.user_authorization, e = void 0 === n ? {} : n, t = e.detail_favor, o = e.detail_comment, i = e.detail_share;
        this.setData({
            animationData: a.export(),
            needAuthFavor: !!t,
            needAuthComment: !!o,
            needAuthShare: !!i
        });
    },
    methods: {
        handleDynamic: function(a) {
            a && a.ban && this.setData({
                viewCountBan: wx.xngGlobal.getBan("view_count", a.ban),
                favorCountBan: wx.xngGlobal.getBan("favor_count", a.ban),
                commentListBan: wx.xngGlobal.getBan("comment_list", a.ban),
                shareBan: wx.xngGlobal.getBan("share", a.ban)
            });
        },
        goFavorPage: function() {
            var a = this.data.dynamic, n = a.id, e = a.user.mid;
            wx.xngGlobal.getBan("favor_count", this.data.dynamic.ban) || (0, o.goFavorPage)({
                dynamicId: n,
                dynamicMid: e
            });
        },
        handleFavor: function() {
            var a = this, n = this.data.dynamic;
            wx.xngGlobal.getBan("favor_album", n.ban) || this.favorReqDone && (this.favorReqDone = !1, 
            (0, o.favorDynamic)({
                dynamic: n
            }).then(function() {
                a.favorReqDone = !0;
            }));
        },
        handleComment: function() {
            var a = this.data.dynamic;
            wx.xngGlobal.getBan("comment", a.ban) || i.default.comment(a);
        },
        handleShowCommentList: function() {
            var a = getCurrentPages();
            a[a.length - 1].handleCommentListShow(this.data.dynamic);
        },
        handleShare: function() {
            var a = this.data.dynamic;
            wx.xngGlobal.getBan("share", a.ban) ? m.default.showEntry() : e.default.tplTypeJudge(a.tpl_id) === t.TPL_TYPE.STYLE.MV && wx.reportAnalytics("xwf_mv_play_share_click", {
                mid: wx.xngGlobal.xu.mid,
                midmod2: wx.xngGlobal.xu.mid % 2,
                midmod10: wx.xngGlobal.xu.mid % 10,
                midmod20: wx.xngGlobal.xu.mid % 20,
                isauthor: a.user.mid === wx.xngGlobal.xu.mid ? 1 : 0,
                sharebutton: "interaction"
            });
        }
    }
});