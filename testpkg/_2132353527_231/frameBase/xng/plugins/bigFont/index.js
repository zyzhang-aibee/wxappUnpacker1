function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
    };
}(), n = require("../../../../common/const/common"), o = function() {
    function o(e) {
        t(this, o), this.options = e;
    }
    return e(o, [ {
        key: "applyComponent",
        value: function(t) {
            t.options.bigFont && t.plugin("mapStateToData", this.mapStateToData);
        }
    }, {
        key: "mapStateToData",
        value: function() {
            var t = wx.xngGlobal.store.getState().global.isBigFontScheme;
            this.setData({
                isBigFontScheme: t,
                fontSizeScale: t ? n.FONT_SIZE_SCALE : 1
            });
        }
    } ]), o;
}();

exports.default = o;