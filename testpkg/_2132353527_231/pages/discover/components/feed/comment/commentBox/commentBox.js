var t = require("../../../../../../common/others/discover/utils"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../dynamicCommentInput/utils"));

Component({
    properties: {
        dynamic: Object,
        comment: Object,
        canFavor: {
            type: Object,
            value: !0
        },
        withSeparator: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    attached: function() {
        var t = wx.xngGlobal.xu;
        this.setData({
            xu: t
        });
    },
    methods: {
        goProfilePage: function(e) {
            var a = e.target.dataset.mid;
            a || (a = this.data.comment.user.mid), (0, t.goProfilePage)({
                mid: a
            });
        },
        handleFavor: function() {
            var e = this.data, a = e.dynamic, n = e.comment;
            (0, t.favorComment)({
                dynamic: a,
                comment: n
            });
        },
        handleReply: function() {
            var t = this.data, a = t.dynamic, n = t.comment;
            e.default.reply(n, a);
        }
    }
});