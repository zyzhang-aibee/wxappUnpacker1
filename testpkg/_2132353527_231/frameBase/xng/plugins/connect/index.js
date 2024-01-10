function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a) {
    if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function");
}

function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return this.mapStateToData ? this.mapStateToData(wx.xngGlobal.store.getState(), t) : null;
}

function n(t) {
    var a = o(e.call(t), t.data);
    a && t.setData(a);
}

function o(t, a) {
    if (!t) return null;
    var e = null;
    return Object.keys(t).forEach(function(n) {
        t[n] !== a[n] && (e || (e = {}), e[n] = t[n]);
    }), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
}, i = function() {
    function t(t, a) {
        for (var e = 0; e < a.length; e++) {
            var n = a[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(a, e, n) {
        return e && t(a.prototype, e), n && t(a, n), a;
    };
}();

exports.getChangedData = o;

var u = t(require("../../../../config/midModLog")), l = t(require("../../../../config/config")), s = t(require("../event/createSubscription")), c = function() {
    function t(e) {
        a(this, t), this.options = e;
    }
    return i(t, [ {
        key: "applyPage",
        value: function(t) {
            var a = t.page;
            t.options;
            a.data = r({}, a.data, e.call(a, !0), {
                xu: {
                    mid: wx.xngGlobal.xu.mid,
                    user: wx.xngGlobal.user
                },
                __EXTRA__: r({
                    codeVer: l.default.codeVer
                }, (0, u.default)(wx.xngGlobal.xu.mid))
            }), t.plugin("onLoad", this.onLoad);
        }
    }, {
        key: "applyComponent",
        value: function(t) {
            t.plugin("attached", this.attached), t.plugin("detached", this.detached);
        }
    }, {
        key: "onLoad",
        value: function() {
            var t = this.mapStateToData;
            this.mapStateToData = function() {
                for (var a = arguments.length, e = Array(a), n = 0; n < a; n++) e[n] = arguments[n];
                var o = wx.xng.getCurrentPage(), r = o.__mapStateToComponentDatas__;
                return o.__mapStateToComponentDatas__ && r.get().forEach(function(t) {
                    var a = t.component, n = t.listener;
                    a.setData(n.apply(a, e));
                }), t ? t.apply(this, e) : null;
            }, this.mapStateToData && n(this);
        }
    }, {
        key: "attached",
        value: function() {
            if (this.mapStateToData) {
                var t = wx.xng.getCurrentPage();
                t.__mapStateToComponentDatas__ || (t.__mapStateToComponentDatas__ = (0, s.default)());
                var a = t.__mapStateToComponentDatas__.subscribe({
                    component: this,
                    listener: this.mapStateToData
                });
                this.__mapStateToData_unsubscribe__ = a, n(this);
            }
        }
    }, {
        key: "detached",
        value: function() {
            var t = this.__mapStateToData_unsubscribe__;
            t && t(), this.__mapStateToData_unsubscribe__ = null;
        }
    } ]), t;
}();

exports.default = c;