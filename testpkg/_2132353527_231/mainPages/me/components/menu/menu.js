var t = require("../../redDotController"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../frameBase/utils/mta/mta_analysis"));

Component({
    properties: {
        config: Array
    },
    data: {},
    methods: {
        onItemTap: function(a) {
            var r = a.currentTarget.dataset, l = r.url, o = r.index, n = Number(o);
            0 === n && (wx.reportAnalytics("test_me_album_list_tap_api", {}), e.default.Event.stat("me_album_list_tap", {})), 
            wx.xngGlobal.xu.logger && wx.xngGlobal.xu.logger.logTraffic("click", {
                topic: n + 1
            }), 1 === n && (0, t.setControllerData)({
                hasNewCollect: !1
            }), wx.navigateTo({
                url: l
            });
        }
    }
});