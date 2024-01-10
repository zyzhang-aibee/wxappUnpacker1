var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../comment/OpComment")), e = require("../../../../../common/const/index");

Component({
    properties: {
        alwaysShowCommentInput: {
            type: Boolean,
            value: !1
        },
        commentInputMaskVisable: {
            type: Boolean,
            value: !0
        },
        isCommentList: {
            type: Boolean,
            value: !1
        },
        isMaskTransparent: {
            type: Boolean,
            value: !1
        },
        hasOtherCover: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        targetDynamic: null,
        showCommentInput: !1,
        repliedComment: null,
        FEED_TYPE: e.FEED_TYPE
    },
    attached: function() {
        var t = getCurrentPages(), e = t[t.length - 1];
        e.__intendDynamicComment__ = this.handleIntendComment.bind(this), e.__replyDynamicComment__ = this.handleClickComment.bind(this), 
        e.__hideCommentInput__ = this.hideCommentInput.bind(this);
    },
    ready: function() {
        this.commentInputRef = this.selectComponent("#comment-input");
    },
    methods: {
        handleRemoveAddonBefore: function() {
            t.default.removeAddonBefore(this);
        },
        handleSubmitComment: function(e) {
            var n = this, i = e.detail, o = i.value, a = i.isForward, m = e.detail.success;
            if (!o || o.length < 3) wx.showToast({
                title: "留言最少输入3个字哦",
                icon: "none"
            }); else {
                var s = this.data, d = s.targetDynamic, h = s.isCommentList;
                t.default.submitComment(this, {
                    dynamicId: d.id,
                    dynamicMid: d.user.mid,
                    value: o,
                    success: function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        var i = getCurrentPages(), o = i[i.length - 1];
                        o.onCommentSuccess && o.onCommentSuccess(), wx.hideToast(), m && m(e);
                    },
                    fail: function(t, e) {
                        wx.hideToast(), n.setData({
                            showCommentInput: !1
                        }), 100612 === e.ret ? wx.showToast({
                            title: "您已被加入留言黑名单，无法提交留言",
                            icon: "none"
                        }) : wx.showToast({
                            title: t,
                            icon: "none"
                        });
                    },
                    isCommentList: h,
                    isForward: a,
                    album_id: d.album_id
                }), this.setData({
                    showCommentInput: !1
                });
            }
        },
        handleClickComment: function(e, n) {
            var i = this.data.isCommentList;
            this.setData({
                targetDynamic: n
            }), t.default.handleClickComment(this, {
                comment: e,
                dynamicId: n.id,
                dynamicMid: n.user.mid,
                isCommentList: i,
                dyanmicType: n.type
            });
        },
        handleIntendComment: function(t) {
            var e = this;
            this.setData({
                targetDynamic: t
            }), this.setData({
                showCommentInput: !0
            }, function() {
                e.commentInputRef.focus();
            }), this.triggerEvent("onShow");
        },
        hideCommentInput: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.setData({
                showCommentInput: !1,
                repliedComment: null
            }), !this.data.hasOtherCover && this.triggerEvent("onHide", t.detail);
        }
    }
});