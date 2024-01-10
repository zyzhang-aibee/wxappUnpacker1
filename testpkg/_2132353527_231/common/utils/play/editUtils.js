function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = t(require("../../actions/index")), a = t(require("../../control/produce")), e = t(require("../../const/common"));

module.exports = {
    onModifyAlbum: function(t, i) {
        wx.xngGlobal.store.dispatch(o.default.acSwitchEditDraft(e.default.DRAFT_TYPE.MODIFY));
        wx.showToast({
            title: "请求中...",
            icon: "loading",
            mask: !0,
            duration: 1e4
        }), wx.xngGlobal.store.dispatch(o.default.acModifyAlbum({
            token: wx.xngGlobal.token,
            albumId: i.album_id,
            success: function(t) {
                if (wx.hideToast(), t.has_del_imgs) return wx.xng.showDialog({
                    content: "影集中有照片被删除，不能修改该影集了，您可以使用复制重做",
                    showCancel: !1
                }), void wx.xngGlobal.store.dispatch(o.default.acSwitchEditDraft(e.default.DRAFT_TYPE.MAIN));
                a.default.pushAlbumDraft(), wx.navigateTo({
                    url: "/pages/produce/editAlbumPage/modifyAlbumPage/modifyAlbumPage"
                });
            },
            fail: function(t) {
                wx.hideToast(), wx.xngGlobal.store.dispatch(o.default.acSwitchEditDraft(e.default.DRAFT_TYPE.MAIN)), 
                wx.showToast({
                    title: t,
                    icon: "none"
                });
            }
        }));
    }
};