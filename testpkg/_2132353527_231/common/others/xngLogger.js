var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/config")), o = function(n) {
    if (!n) return "";
    var o = [];
    return Object.keys(n).forEach(function(t) {
        "object" === e(n[t]) ? o.push(t + "=" + JSON.stringify(n[t])) : o.push(t + "=" + n[t]);
    }), o.join("&");
}, t = function() {
    return "online" === n.default.xngEnv;
}, l = function(e, l) {
    if (t(l.samp)) {
        var r = o(l);
        "xngma" === e && (r = JSON.stringify(l)), wx.request({
            url: n.default.loggerDomain + "/" + e,
            data: r,
            header: {
                "Content-Type": "application/json",
                uuid: wx.xngGlobal.xu.uid
            },
            method: "POST"
        });
    }
}, r = function(e, l) {
    if (t(l.samp)) {
        var r = n.default.apiDomain;
        r += "moniter" === e ? "/monlog" : "traffic" === e ? "/traflog" : "off" === e ? "/offlog" : "/alllog", 
        wx.request({
            url: r,
            data: o(l),
            header: {
                "Content-Type": "application/json",
                uuid: wx.xngGlobal.xu.uid
            },
            method: "POST"
        });
    }
}, u = function(e) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (o.v = 0, o.ac = e, o.proj = "ma", o.uid = wx.xngGlobal.xu.uid, o.codeVer = n.default.codeVer, 
    wx.xngGlobal.xu.mid && (o.mid = wx.xngGlobal.xu.mid), wx.xngGlobal.xu.scene && (o.scene = wx.xngGlobal.xu.scene), 
    "undefined" != typeof getCurrentPages && null !== getCurrentPages) {
        var t = getCurrentPages(), l = t[t.length - 1];
        if (l) {
            var r = l.__route__.split("/");
            o.pg = r && r.length > 1 ? r[r.length - 1] : l.__route__;
        }
    }
    return o;
}, a = function(e) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (o.ac = e, o.proj = "ma", o.codeVer = n.default.codeVer, o.wx_ver = wx.xngGlobal.sysInfo.version, 
    wx.xngGlobal.xu.mid && (o.mid = wx.xngGlobal.xu.mid), wx.xngGlobal.xu.scene && (o.scene = wx.xngGlobal.xu.scene), 
    "undefined" != typeof getCurrentPages && null !== getCurrentPages) {
        var t = getCurrentPages(), l = t[t.length - 1];
        if (l) {
            var r = l.__route__.split("/");
            o.pg = r && r.length > 1 ? r[r.length - 1] : l.__route__;
        }
    }
    return o;
};

module.exports = {
    logMoniter: function(e, n) {
        l("xngma", u(e, n));
    },
    logTraffic: function(e, n) {
        l("xngma", u(e, n));
    },
    logOff: function(e, n) {
        l("offlog", u(e, n)), r("off", u(e, n));
    },
    logAll: function(e, n) {
        l("alllog", a(e, n)), r("all", a(e, n));
    }
};