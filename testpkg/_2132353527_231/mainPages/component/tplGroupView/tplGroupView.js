Component({
    properties: {
        tplGroupData: {
            type: Object,
            value: {
                recommendTpl: [],
                tplGroups: []
            },
            observer: "handleTplGroup"
        },
        isModifyTpl: {
            type: Boolean,
            value: !1
        },
        headerText: {
            type: Object,
            value: {
                left: "为您推荐：",
                right: "更多"
            }
        }
    },
    data: {
        recommendTpl: [],
        tplGroups: []
    },
    methods: {
        handleTplGroup: function(e) {
            e && this.setData({
                recommendTpl: e.recommendTpl,
                tplGroups: e.tplGroups
            });
        },
        onAllTplTap: function() {
            wx.navigateTo({
                url: "/pages/produce/tplSearchPage/tplSearchPage?from=" + (this.data.isModifyTpl ? "modify" : "")
            });
        }
    }
});