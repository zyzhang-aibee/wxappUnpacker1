var e = {
    hidden: !1,
    onCancel: "onActionSheetCancel",
    buttons: [ {
        name: "屏蔽留言",
        onTap: "onBanCommentTap",
        default: !0
    }, {
        name: "加入黑名单",
        onTap: "onAddToBlackList",
        default: !0
    } ]
}, n = {
    hidden: !1,
    onCancel: "onActionSheetCancel",
    buttons: [ {
        name: "屏蔽留言",
        onTap: "onBanCommentTap",
        default: !0
    }, {
        name: "移出黑名单",
        onTap: "onRemoveBlackList",
        default: !0
    } ]
}, a = {
    hidden: !1,
    onCancel: "onActionSheetCancel",
    buttons: [ {
        name: "删除留言",
        onTap: "onReaderDeleteComment",
        default: !0
    }, {
        name: "在个人主页显示",
        onTap: "handleDisplayProComment",
        default: !0
    } ]
}, o = {
    hidden: !1,
    onCancel: "onActionSheetCancel",
    buttons: [ {
        name: "删除留言",
        onTap: "onReaderDeleteComment",
        default: !0
    }, {
        name: "在个人主页隐藏",
        onTap: "handleDisableProComment",
        default: !0
    } ]
};

module.exports = {
    actionSheetBanAdd: e,
    actionSheetBanRemove: n,
    actionSheetShowBanComment: a,
    actionSheetHideBanComment: o
};