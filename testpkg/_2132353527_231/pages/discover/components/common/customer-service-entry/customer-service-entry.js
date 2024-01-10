var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../../common/others/wxStat"));

Component({
    properties: {},
    data: {
        show: !1,
        night: !1
    },
    attached: function() {
        var t = this;
        wx.xng.getCurrentPage().__contact__ = {
            show: function() {
                t.setData({
                    show: !0,
                    night: t.judgeIsNight()
                });
            }
        };
    },
    methods: {
        onShow: function() {
            this.triggerEvent("onShow");
        },
        onHide: function() {
            var t = this;
            this.setData({
                show: !1
            }, function() {
                t.triggerEvent("onHide");
            });
        },
        onContactTap: function() {
            this.onHide(), t.default.report("click_contact_custom_service_btn");
        },
        judgeIsNight: function() {
            var t = new Date().getHours();
            return t >= 0 && t < 8;
        }
    }
});