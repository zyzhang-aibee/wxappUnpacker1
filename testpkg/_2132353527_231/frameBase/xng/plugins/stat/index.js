function n(n, e) {
    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
}, t = function() {
    function n(n, e) {
        for (var t = 0; t < e.length; t++) {
            var o = e[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(n, o.key, o);
        }
    }
    return function(e, t, o) {
        return t && n(e.prototype, t), o && n(e, o), e;
    };
}(), o = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../../config/midModLog")), r = function() {
    function r(e) {
        n(this, r), this.options = e;
    }
    return t(r, [ {
        key: "applyPage",
        value: function(n) {
            n.plugin("onLoad", this.onLoad);
        }
    }, {
        key: "onLoad",
        value: function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = wx.xngGlobal.scene;
            wx.xng.firstPageFromColdStart ? t = wx.xngGlobal.scene : wx.xng.firstPageFromHotStart && (t = wx.xngGlobal.hotScene), 
            wx.xng.firstPageFromColdStart = !1, wx.xng.firstPageFromHotStart = !1, Object.assign(this.data, {
                options: n,
                xu: wx.xngGlobal.xu,
                __EXTRA__: e({}, this.data.__EXTRA__, {
                    wxVer: wx.xngGlobal.sysInfo.version
                }, (0, o.default)(wx.xngGlobal.xu.mid), {
                    scene: t
                })
            });
        }
    } ]), r;
}();

exports.default = r;