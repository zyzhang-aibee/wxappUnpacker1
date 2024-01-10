var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../mainPages/produce/actions/produce"));

Component({
    properties: {
        recommendTpl: {
            type: Array,
            value: [],
            observer: "handleRecommendTpl"
        },
        sortName: String,
        showShadow: Boolean,
        showMore: Boolean,
        sortIndex: Number
    },
    data: {
        recommendTplList: [],
        sortName: "",
        showShadow: !1,
        showMore: !1,
        isTplSort: wx.xngGlobal.abTest.produce_tpl_sort || wx.xngGlobal.abTest.tpl_sort || ""
    },
    ready: function() {
        this.setData({
            isTplSort: wx.xngGlobal.abTest.produce_tpl_sort || wx.xngGlobal.abTest.tpl_sort || ""
        });
    },
    methods: {
        handleRecommendTpl: function(e) {
            this.setData({
                recommendTplList: e
            });
        },
        onRecommendItemTap: function(o) {
            var t = Number(o.currentTarget.dataset.index), r = this.data.sortIndex;
            e.default.acSetTplSortIndex(r), wx.navigateTo({
                url: "/pages/produce/recommendTplABPage/recommendTplABPage?index=" + t
            });
        },
        onMoreTap: function() {
            wx.redirectTo({
                url: "/pages/produce/recommendAllTplPage/recommendAllTplPage?from=produce"
            });
        }
    }
});