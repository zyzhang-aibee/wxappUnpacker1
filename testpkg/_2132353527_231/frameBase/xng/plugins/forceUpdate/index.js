function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), n = function() {
    function n(t) {
        e(this, n), this.options = t;
    }
    return t(n, [ {
        key: "applyPage",
        value: function(e) {
            var t = e.page;
            t.forceUpdate ? console.warn("are you want to shadow xng.Page` forceUpdate?") : t.forceUpdate = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).success;
                this.setData(this.mapStateToData(wx.xngGlobal.store.getState()), e);
            }, e.plugin("onShow", this.onShow);
        }
    }, {
        key: "onShow",
        value: function() {
            this.forceUpdate();
        }
    } ]), n;
}();

exports.default = n;