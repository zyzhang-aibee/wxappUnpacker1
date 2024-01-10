var t = require("../../../../../common/others/discover/utils"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../../frameBase/utils/mta/mta_analysis"));

Component({
    properties: {
        listName: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: "发影集"
        }
    },
    methods: {
        goPublish: function() {
            wx.reportAnalytics("test_publish_btn_tap_api", {}), e.default.Event.stat("publish_btn_tap", {});
            var a = this.data.listName;
            a ? (0, t.goPublishPage)({
                listName: a
            }) : (0, t.goPublishPage)();
        }
    }
});