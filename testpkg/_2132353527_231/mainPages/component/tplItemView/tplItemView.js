function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../common/actions/produce")), a = require("../../../common/const/common"), o = t(require("../../../common/const/message")), i = require("../../common/constDataUtils");

Component({
    properties: {
        tplItemData: {
            type: Object,
            value: {
                tpl: {}
            },
            observer: "handleTplItem"
        },
        tplIndex: Number,
        isTplSearch: {
            type: Boolean,
            value: !1
        },
        isModifyTpl: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        tplItem: {}
    },
    methods: {
        handleTplItem: function(t) {
            this.setData({
                tplItem: t
            });
        },
        onPlayTplTap: function() {
            var t = this.data.tplItem;
            if (t.id !== a.TPL_TYPE.RANDOM) if (t.isGray) wx.xng.showModal(i.alertChooseTplData); else {
                var e = encodeURIComponent(t.v_url), o = this.data.isModifyTpl ? "modify" : "tpl";
                wx.navigateTo({
                    url: "/pages/xngVideoPage/xngVideoPage?from=" + o + "&v_url=" + e + "&tpl_id=" + t.id + "\n          &has_subtitle=" + t.has_subtitle + "&for=" + (this.data.isTplSearch ? "tplSearch" : "")
                });
            }
        },
        onChooseTap: function() {
            var t = wx.xngGlobal.store.getState().produce, i = t.edit.draft, l = i.photos, s = i.tpl_id, n = t.modifyTpl, d = this.data.tplItem, p = d.id, T = d.img_num, f = this.data.isModifyTpl ? n.photosLength : l.length, r = this.data.isModifyTpl ? n.tpl_id : s;
            T && f > T ? wx.showToast({
                icon: "none",
                title: "您已经上传了" + f + "张照片，此模板最多支持" + T + "张照片，请选择其他模板或删除" + (f - T) + "张照片试试"
            }) : r !== p && (p === a.TPL_TYPE.CLASSIC || p === a.TPL_TYPE.CLASSIC_HORIZONTAL || p === a.TPL_TYPE.PIP && r !== a.TPL_TYPE.CLASSIC && r !== a.TPL_TYPE.CLASSIC_HORIZONTAL || (this.data.isModifyTpl ? e.default.acModifyTplFontColor("ffffff") : e.default.acSetSubtitlesColor("ffffff")), 
            this.data.isModifyTpl ? e.default.acModifyTplId(p) : e.default.acSetAlbumTpl(p), 
            this.data.isTplSearch && setTimeout(function() {
                var t = getCurrentPages(), e = t[t.length - 2];
                wx.navigateBack({
                    success: function() {
                        d.has_subtitle || setTimeout(function() {
                            e.showToast(o.default.MSG_NOT_SHOW_SUBTITLES);
                        }, 500);
                    }
                });
            }, 300));
        }
    }
});