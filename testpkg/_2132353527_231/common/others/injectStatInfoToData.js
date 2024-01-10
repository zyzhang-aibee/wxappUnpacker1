function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
};

exports.default = function(e) {
    var n = wx.xngGlobal.scene;
    wx.xng.firstPageFromColdStart ? n = wx.xngGlobal.scene : wx.xng.firstPageFromHotStart && (n = wx.xngGlobal.hotScene), 
    wx.xng.firstPageFromColdStart = !1, wx.xng.firstPageFromHotStart = !1, Object.assign(e.data, {
        xu: wx.xngGlobal.xu,
        __EXTRA__: r({
            wxVer: wx.xngGlobal.sysInfo.version,
            codeVer: t.default.codeVer
        }, (0, o.default)(wx.xngGlobal.xu.mid), {
            scene: n
        })
    });
};

var t = e(require("../../config/config")), o = e(require("../../config/midModLog"));