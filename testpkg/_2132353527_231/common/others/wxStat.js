Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
    }
    return e;
}, r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/config"));

exports.default = {
    report: function(o, t) {
        var n = wx.xngGlobal.xu.mid, i = wx.xngGlobal.sysInfo.version;
        wx.reportAnalytics(o, e({
            mid: n,
            midmod2: n % 2,
            midmod10: n % 10,
            midmod20: n % 20,
            version: r.default.codeVer,
            wxver: i
        }, t));
    }
};