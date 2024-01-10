Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./actions/serverConfig"));

wx.xngGlobal.abTest = wx.getStorageSync("ab-test") || {};

var t = e.default.acGetAbtestConfig().then(function(e) {
    var t = e.data.filter(function(e) {
        return e.name;
    });
    wx.xngGlobal.abTest = {}, t.forEach(function(e) {
        wx.xngGlobal.abTest[e.name] = e.options || {};
    }), wx.setStorage({
        key: "ab-test",
        data: wx.xngGlobal.abTest
    });
});

exports.default = t;