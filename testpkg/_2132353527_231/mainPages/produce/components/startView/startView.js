function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var a = e(require("../../../common/tplSort")), r = e(require("../../../../mainPages/produce/actions/produce"));

wx.xng.Component({
    properties: {
        startData: {
            type: Object,
            value: {
                recommendTpl: [],
                playingTplIdx: -1
            },
            observer: "handleStart"
        },
        authorizeData: {
            type: Object,
            value: {
                hidden: !0
            }
        }
    },
    data: {
        isBigFontScheme: wx.xngGlobal.isBigFontScheme || !1,
        authorizeData: {
            hidden: !0
        },
        isNewPageB: wx.xngGlobal.abTest.produce_page ? "b" === wx.xngGlobal.abTest.produce_page.plan : ""
    },
    externalClasses: [ "start-view" ],
    ready: function() {
        var e = wx.xngGlobal.abTest, t = e.produce_page, r = e.produce_tpl_sort, o = void 0 === r ? "" : r, n = e.tpl_sort, l = void 0 === n ? "" : n, p = (0, 
        a.default)(o || l), d = o && o.more_img || "";
        this.setData({
            isNewPageB: t ? "b" === t.plan : "",
            tplSortList: p,
            produce_tpl_sort: o,
            tpl_sort: l,
            more_img: d
        });
    },
    methods: {
        handleStart: function(e) {
            var a = [].concat(t(e.recommendTpl));
            a.shift(), this.setData({
                recommendTpl: a,
                hasDraftPhoto: e.hasDraftPhoto,
                playingTplIdx: e.playingTplIdx
            });
        },
        onAddPhotosTap: function() {
            this.triggerEvent("onaddphotostap");
        },
        onTplTap: function(e) {
            var t = e.detail.tplIndex;
            this.triggerEvent("tpltap", {
                tplIndex: t
            });
        },
        goTplPage: function(e) {
            var t = e.currentTarget.dataset.sortIndex;
            r.default.acSetTplSortIndex(t), wx.navigateTo({
                url: "/pages/produce/recommendTplABPage/recommendTplABPage"
            });
        },
        goAllTplPage: function() {
            wx.redirectTo({
                url: "/pages/produce/recommendAllTplPage/recommendAllTplPage?from=produce"
            });
        }
    }
}, {
    bigFont: !0
});