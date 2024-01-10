function x(x) {
    return x && x.__esModule ? x : {
        default: x
    };
}

var n = Object.assign || function(x) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
}, t = x(require("../../../common/others/xngLogger")), e = x(require("../../../config/config"));

wx.xngGlobal = {}, wx.xngGlobal.token = wx.getStorageSync("xng_mini_app_token"), 
wx.getSystemInfo({
    success: function(x) {
        var t = x.windowWidth, e = x.statusBarHeight, g = e + 6, o = t - 10, a = {
            width: 87,
            height: 32,
            top: g,
            right: o,
            bottom: g + 32,
            left: o - 87
        }, i = a.height + 2 * (a.top - e), r = e + i;
        wx.xngGlobal.sysInfo = n({}, x, {
            navigationHeight: r,
            navigationTitleBarHeight: i,
            menuButtonRect: a,
            rpxRatio: 750 / t
        }), wx.xngGlobal.navigationHeight = r;
    }
}), wx.xngGlobal.xu = {}, wx.xngGlobal.xu.logger = t.default, wx.xngGlobal.xu.mid = wx.getStorageSync("xng_mini_app_mid") || 0, 
wx.xngGlobal.xu.uid = wx.getStorageSync("xng_mini_app_uid"), wx.xngGlobal.xu.uid || (wx.xngGlobal.xu.uid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(x) {
    var n = 16 * Math.random() | 0;
    return ("x" === x ? n : 3 & n | 8).toString(16);
}), wx.setStorageSync("xng_mini_app_uid", wx.xngGlobal.xu.uid)), "test" === e.default.xngEnv && (wx.xngGlobal.xu.changeQA = wx.getStorageSync("changeQA"));