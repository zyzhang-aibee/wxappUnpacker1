function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = require("../xngAuth/login"), t = e(require("../../../config/config")), n = e(require("../../utils/object-assign/index")), o = function(e) {
    var n = wx.xngGlobal.xu, o = wx.xngGlobal.xu.changeQA, a = e.method || "POST", i = e.normalizeFunc, s = e.promise, u = e.resolve, p = e.reject, c = e.endpoint.indexOf("http") > -1 ? e.endpoint : t.default.apiDomain + e.endpoint;
    o && (c = c + "?test=" + o);
    var l = e.param;
    l.uid = n.uid, l.proj = "ma", l.wx_ver = wx.xngGlobal.sysInfo.version, l.code_ver = t.default.codeVer;
    try {
        wx.request({
            url: c,
            data: l,
            header: {
                "Content-Type": "application/json",
                uuid: wx.xngGlobal.xu.uid
            },
            method: a,
            responseType: "arraybuffer" === e.action.responseType ? "arraybuffer" : "text",
            success: function(t) {
                if ("arraybuffer" !== e.action.responseType || "image/jpeg" !== t.header["Content-Type"]) if ("arraybuffer" !== e.action.responseType) {
                    if (t.data && 1 === t.data.ret) u(i ? i(t.data) : t.data); else if (p(t.data), n.logger.logAll("apiError", {
                        resData: JSON.stringify(t.data || t || {}),
                        api: c
                    }), 100201 !== t.data.ret || e.action.NO_AUTH || (0, r.handleTokenExpired)(e.action), 
                    "服务器维护中" === t.data.msg) {
                        var o = getCurrentPages(), a = o[o.length - 1];
                        if (!a || "pages/common/stopService/stopService" !== a.route) var s = setTimeout(function() {
                            wx.redirectTo({
                                url: "/pages/common/stopService/stopService"
                            }), s && clearTimeout(s);
                        }, 500);
                    }
                } else p(); else u(t.data);
            },
            fail: function(e) {
                p(e), n.logger.logAll("apiError", {
                    resData: JSON.stringify(e.data || e || {}),
                    api: c
                });
            }
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        n.logger.logAll("apiError", e);
    }
    return s;
};

module.exports = function() {
    return function(e) {
        return function(r) {
            function t(e) {
                var t = (0, n.default)({}, r, e);
                return delete t.API, t;
            }
            var a = r.API, i = r.promise, s = r.resolve, u = r.reject;
            if (void 0 === a) return e(r);
            var p = a.type, c = a.endpoint, l = a.param, d = void 0 === l ? {} : l, f = a.method, g = a.normalizeFunc, m = a.success, x = a.fail;
            if (a && !r.NO_AUTH && wx.xngGlobal.token && (d.token = wx.xngGlobal.token), "string" != typeof c) throw new Error("Specify a string endpoint.");
            if ("string" != typeof p) throw new Error("Specify a string type.");
            var y = p + "_SUC", v = p + "_FAI";
            return e(t({
                type: p + "_REQ"
            })), o({
                endpoint: c,
                param: d,
                method: f,
                normalizeFunc: g,
                promise: i,
                resolve: s,
                reject: u,
                action: r
            }).then(function(r) {
                return e(t({
                    type: y,
                    response: r
                })), m && m(r.data || r), r;
            }).catch(function(r) {
                console.error(r);
                var n = r.msg || r.message || "网络错误，请稍后再试";
                return e(t({
                    type: v,
                    msg: n,
                    response: r
                })), x && x(n, r), Promise.reject(new Error(n));
            });
        };
    };
};