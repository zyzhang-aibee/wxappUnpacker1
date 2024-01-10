var t = require("../../../../../../common/others/discover/utils"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../../../pages/discover/components/feed/dynamicCommentInput/utils"));

Component({
    properties: {
        dynamic: Object,
        fastEntryVisible: Boolean
    },
    data: {
        needAuthComment: !1
    },
    attached: function() {
        var t = wx.xngGlobal.abTest.user_authorization, e = (void 0 === t ? {} : t).detail_comment;
        this.setData({
            needAuthComment: !!e
        });
    },
    methods: {
        goProfilePage: function(e) {
            var n = e.target.dataset.mid;
            (0, t.goProfilePage)({
                mid: n
            });
        },
        handleReply: function(t) {
            var n = t.currentTarget.dataset.cid, a = this.data.dynamic, o = a.comments.find(function(t) {
                return t.id === n;
            });
            o && e.default.reply(o, a);
        },
        handleShowCommentList: function() {
            var t = getCurrentPages();
            t[t.length - 1].handleCommentListShow(this.data.dynamic);
        },
        handleComment: function() {
            var t = this.data.dynamic;
            wx.xngGlobal.getBan("comment", t.ban) || e.default.comment(t);
        }
    }
});