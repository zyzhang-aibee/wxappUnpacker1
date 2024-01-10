function n(n) {
    l = n;
    var e = !1;
    n && (!a && (a = n.success), e = n.hasPermission), !i && (i = wx.xngGlobal.xu.logger), 
    o = +new Date(), wx.login({
        success: function(n) {
            r(n, e);
        },
        fail: function(n) {
            l.fail && l.fail(), i && i.logMoniter("wxLoginFail", {
                bt: o,
                tt: +new Date() - o
            }), s(n);
        }
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.handleTokenExpired = void 0, exports.default = n;

var e = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../common/actions/index")), o = 0, t = 0, i = void 0, a = void 0, l = void 0, x = (exports.handleTokenExpired = function(n) {
    wx.xngGlobal.token = "", wx.xngGlobal.dispatch(n);
}, function(n) {
    var e = n.user;
    wx.xngGlobal.xu.user = e, wx.xngGlobal.token = e.token, wx.xngGlobal.xu.mid = e.mid, 
    i.logAll("token", {
        token: wx.xngGlobal.token
    }), e.token && wx.setStorageSync("xng_mini_app_token", e.token), e.mid && wx.setStorageSync("xng_mini_app_mid", e.mid), 
    a && a();
}), s = function(e) {
    l.fail(), "服务器维护中" !== e && t < 2 && (t += 1, wx.removeStorageSync("xng_mini_app_token"), 
    wx.xngGlobal.token = "", n(l));
}, c = function(n) {
    var o = +new Date();
    wx.getUserInfo({
        success: function(t) {
            i && i.logMoniter("wxGetUserInfoSuc", {
                bt: o,
                tt: +new Date() - o
            }), wx.xngGlobal.xu.userInfo = t.userInfo, wx.xngGlobal.dispatch(e.default.acWxMpLogin(wx.xngGlobal.scene, n.mini_session, t.rawData, t.signature, t.encryptedData, t.iv, x, s));
        },
        fail: function() {
            i && i.logMoniter("wxGetUserInfoFail", {
                bt: o,
                tt: +new Date() - o
            });
        }
    });
}, r = function(n, t) {
    i && i.logMoniter("wxLoginSuc", {
        bt: o,
        tt: +new Date() - o
    });
    wx.xngGlobal.dispatch(e.default.acWxFetchSession(n.code, function(n) {
        t ? c(n) : wx.xngGlobal.dispatch(e.default.acMpLogin(wx.xngGlobal.scene, n.mini_session, x, s));
    }, s));
};