function n(n, e) {
    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(n) {
    return "onPageScroll" === n ? n : "onPage" + n.slice(2);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
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
}(require("./createSubscription")), r = [ "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onPageScroll", "onTabItemTap" ], i = function() {
    function i(e) {
        n(this, i), this.options = e;
    }
    return t(i, [ {
        key: "applyPage",
        value: function(n) {
            var e = n.page;
            e.onPageScroll || (e.onPageScroll = function() {}), e.onReachBottom || (e.onReachBottom = function() {}), 
            n.plugin("onLoad", this.onLoad);
        }
    }, {
        key: "applyComponent",
        value: function(n) {
            n.plugin("attached", this.attached), n.plugin("detached", this.detached);
        }
    }, {
        key: "onLoad",
        value: function() {
            var n = this;
            r.forEach(function(e) {
                var t = n[e];
                if ("onLoad" === e) {
                    if (n.__component_listeners__) {
                        var o = n.__component_listeners__[e];
                        o && o.notify(n.options);
                    }
                } else n[e] = function() {
                    for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    if (t && t.apply(this, o), this.__component_listeners__) {
                        var i = this.__component_listeners__[e];
                        i && i.notify.apply(i, o);
                    }
                };
            });
        }
    }, {
        key: "attached",
        value: function() {
            var n = this, t = [], i = function(n, e) {
                var t = getCurrentPages(), r = t[t.length - 1];
                return r.__component_listeners__ || (r.__component_listeners__ = {}), r.__component_listeners__[n] || (r.__component_listeners__[n] = (0, 
                o.default)()), r.__component_listeners__[n].subscribe(e);
            };
            r.forEach(function(o) {
                var r = e(o);
                "function" == typeof n[r] && t.push(i(o, n[r].bind(n)));
            }), t.length > 0 && (this.__component_listeners_unsubscribes__ = t);
        }
    }, {
        key: "detached",
        value: function() {
            var n = this.__component_listeners_unsubscribes__;
            n && n.forEach(function(n) {
                return n();
            }), this.__component_listeners_unsubscribes__ = null;
        }
    } ]), i;
}();

exports.default = i;