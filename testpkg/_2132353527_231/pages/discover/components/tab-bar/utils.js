Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    switchTab: function() {
        var e = wx.xng.getCurrentPage().__tabBar__;
        return e && e.switchTab.apply(e, arguments);
    },
    goBlessPage: function() {
        var e = wx.xng.getCurrentPage().__tabBar__;
        return e && e.goBlessPage.apply(e, arguments);
    }
};