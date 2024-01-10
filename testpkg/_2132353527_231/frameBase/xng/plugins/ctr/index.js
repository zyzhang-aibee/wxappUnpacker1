function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
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
}(), o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../common/others/CTR")), i = -1, r = function() {
    function r(t) {
        e(this, r), this.options = t;
    }
    return n(r, [ {
        key: "applyPage",
        value: function(e) {
            e.options.CTR && (e.plugin("onLoad", this.onLoad), e.plugin("onPageScroll", this.onPageScroll), 
            e.plugin("onUnload", this.onUnload));
        }
    }, {
        key: "applyComponent",
        value: function(e) {
            e.options.CTR && e.plugin("ready", this.ready);
        }
    }, {
        key: "onLoad",
        value: function() {
            i++, this.__CTR__ = new o.default({
                id: this.CTR_ID || i,
                page: this
            }), this.refreshCTR = this.__CTR__.refresh.bind(this.__CTR__), this.setCTRScrollTop = this.__CTR__.setCTRScrollTop.bind(this.__CTR__);
        }
    }, {
        key: "onPageScroll",
        value: function(e) {
            var t = e.scrollTop;
            this.__CTR__.checkScrollExpose(t);
        }
    }, {
        key: "onUnload",
        value: function() {
            this.__CTR__ && (this.__CTR__ = null);
        }
    }, {
        key: "ready",
        value: function() {
            var e = this;
            this.data.noCTR || t().__CTR__ && wx.createSelectorQuery().in(this).select("#CTR").boundingClientRect(function(n) {
                if (n) {
                    var o = t().__CTR__;
                    if (o) {
                        var i = {
                            top: n.top + o.scrollTop,
                            height: n.height,
                            detail: e.getCTRItemDetail()
                        };
                        o.pushItem(i);
                    }
                }
            }).exec();
        }
    } ]), r;
}();

exports.default = r;