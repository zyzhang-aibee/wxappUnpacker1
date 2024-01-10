function e(e, a) {
    var o = {};
    for (var r in e) a.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
    return o;
}

function a(e) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=";
    if (!e) return "";
    var r = [];
    return Object.keys(e).forEach(function(a) {
        n.call(e, a) && e[a] && r.push("" + a + o + e[a]);
    }), r.join(a);
}

function o(e) {
    return "/pages/profile/profilePage/profilePage?" + a(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getApiCommonParams = function() {
    var e = wx.xngGlobal, a = e.xu, o = e.token, n = e.sysInfo;
    return {
        proj: "ma",
        token: o,
        uid: a.uid,
        wx_ver: n.version,
        code_ver: r.default.codeVer
    };
}, exports.stringifyParams = a, exports.getProfilePagePath = o, exports.goProfilePage = function(e) {
    wx.navigateTo({
        url: o(e)
    });
}, exports.goSingleDynamicPage = function(e) {
    wx.navigateTo({
        url: "/pages/community/singleDynamicPage/singleDynamicPage?" + a(e)
    });
}, exports.goMessagePage = function(e) {
    wx.navigateTo({
        url: "/pages/me/messagePage/messagePage?" + a(e)
    });
}, exports.goDynamicSharePage = function(o) {
    var r = o.complete, n = e(o, [ "complete" ]);
    wx.navigateTo({
        url: "/pages/community/dynamicSharePage/dynamicSharePage?" + a(n),
        complete: r
    });
}, exports.redirectDynamicSharePage = function(o) {
    var r = o.complete, n = e(o, [ "complete" ]);
    wx.redirectTo({
        url: "/pages/community/dynamicSharePage/dynamicSharePage?" + a(n),
        complete: r
    });
}, exports.goAdPage = function(e) {
    wx.navigateTo({
        url: "/pages/ad/adPage/adPage?" + a(e)
    });
}, exports.goWebViewPage = function(e) {
    wx.navigateTo({
        url: "/pages/common/webViewPage/webViewPage?" + a(e)
    });
};

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/config")), n = Object.hasOwnProperty;