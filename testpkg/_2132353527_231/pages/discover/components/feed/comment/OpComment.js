function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = e(require("../../../../../common/actions/entities/dynamics")), i = e(require("../../../../../common/others/dynamicActionLog")), t = {
    handleRemoveComment: function(e, i) {
        var t = i.comment, m = i.dynamicId, o = i.dynamicMid;
        n.default.acRemoveDynamicComment({
            dynamicId: m,
            mid: o,
            cid: t.id
        });
    },
    handleClickComment: function(e, n) {
        var i = this, t = n.comment, m = n.dynamicId, o = n.dynamicMid, d = wx.xngGlobal.xu;
        t.user.mid === d.mid ? wx.showActionSheet({
            itemList: [ "删除" ],
            itemColor: "#f43531",
            success: function(n) {
                0 === n.tapIndex && i.handleRemoveComment(e, {
                    comment: t,
                    dynamicId: m,
                    dynamicMid: o
                });
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        }) : e.setData({
            repliedComment: t,
            showCommentInput: !0
        }, function() {
            e.commentInputRef.focus();
        });
    },
    submitComment: function(e, t) {
        var m = t.value, o = t.dynamicId, d = t.dynamicMid, a = t.success, c = t.fail, u = t.isForward, s = t.isCommentList, r = wx.xngGlobal.xu, l = e.data.repliedComment;
        l ? i.default.reply({
            did: o,
            data: {
                reviewid: l.id
            }
        }) : i.default.comment({
            did: o,
            data: {
                forward: +u
            }
        }), wx.showToast({
            title: "正在提交...",
            icon: "loading",
            mask: !0,
            duration: 1e4
        }), n.default.acAddDynamicComment({
            dynamicId: o,
            mid: d,
            txt: m,
            is_into_profile: u,
            user: {
                mid: r.mid,
                nick: r.user ? r.user.nick : "",
                hurl: r.user ? r.user.hurl : ""
            },
            repliedComment: l,
            isCommentList: s
        }).then(function() {
            a();
        }).catch(function() {
            c();
        }), e.commentInputRef.hideMask();
    },
    removeAddonBefore: function(e) {
        e.setData({
            repliedComment: null
        });
    }
};

exports.default = t;