Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./actions/serverConfig")), t = wx.getStorageSync("ban");

wx.xngGlobal.getBan = function(e, n) {
    return !(!t || !t[e]) && (!!n && t[e]["level_" + n].is_handle);
}, wx.xngGlobal.getBanValue = function(e, n) {
    return n ? t[e]["level_" + n].value : "";
};

var n = e.default.acGetBanConfig().then(function(e) {
    t = e.data, wx.setStorage({
        key: "ban",
        data: t
    });
});

exports.default = n;