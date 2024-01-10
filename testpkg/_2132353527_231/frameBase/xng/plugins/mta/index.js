function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(n, t, o) {
        return t && e(n.prototype, t), o && e(n, o), n;
    };
}(), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../..//utils/mta/mta_analysis")), o = function() {
    function o(n) {
        e(this, o), this.options = n;
    }
    return n(o, [ {
        key: "applyPage",
        value: function(e) {
            e.plugin("onLoad", this.onLoad);
        }
    }, {
        key: "onLoad",
        value: function() {
            t.default.Page.init();
        }
    } ]), o;
}();

exports.default = o;