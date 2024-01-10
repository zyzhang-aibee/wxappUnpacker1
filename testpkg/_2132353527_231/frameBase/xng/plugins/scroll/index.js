function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function o(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, o) {
        for (var t = 0; t < o.length; t++) {
            var n = o[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(o, t, n) {
        return t && e(o.prototype, t), n && e(o, n), o;
    };
}(), n = e(require("../../../utils/debounce/index")), l = e(require("../../../utils/throttle")), r = function() {
    function e(t) {
        o(this, e), this.options = t;
    }
    return t(e, [ {
        key: "applyPage",
        value: function(e) {
            var o = e.page, t = e.options;
            if (e.plugin("onShow", this.onShow), t.pageScrollThrottle && (o.onPageScroll = (0, 
            l.default)(o.onPageScroll, t.pageScrollThrottle)), o.onPageScrollEnd) {
                var r = o.onPageScroll, a = (0, n.default)(o.onPageScrollEnd, 100);
                o.onPageScroll = function() {
                    for (var e = arguments.length, o = Array(e), t = 0; t < e; t++) o[t] = arguments[t];
                    r && r.apply(this, o), a.apply(this, o);
                };
            }
        }
    }, {
        key: "onShow",
        value: function() {
            this.__state__.scrollToTop && (wx.pageScrollTo && wx.pageScrollTo({
                scrollTop: 0
            }), this.__state__.scrollToTop = !1);
        }
    } ]), e;
}();

exports.default = r;