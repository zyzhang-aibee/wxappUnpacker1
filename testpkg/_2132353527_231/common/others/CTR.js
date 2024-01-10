function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, i, o) {
        return i && e(t.prototype, i), o && e(t, o), t;
    };
}(), i = function() {
    function i(t) {
        var o = this, s = t.id, n = t.page;
        e(this, i), this.id = s, this.page = n, this.items = [], this.exposed = {}, this.scrollTop = 0, 
        wx.getSystemInfo({
            success: function(e) {
                o.viewPortHeight = e.windowHeight;
            }
        });
    }
    return t(i, [ {
        key: "setViewPortHeight",
        value: function(e) {
            this.viewPortHeight = e;
        }
    }, {
        key: "setCTRScrollTop",
        value: function(e) {
            this.scrollTop = e;
        }
    }, {
        key: "pushItem",
        value: function(e) {
            this.checkExpose(e) || this.items.push(e);
        }
    }, {
        key: "checkExpose",
        value: function(e) {
            return !!this.exposed[e.detail.id] || this.viewPortHeight + this.scrollTop >= e.top + e.height / 2 && (this.page.onCTRExpose(e.detail), 
            this.exposed[e.detail.id] = 1, !0);
        }
    }, {
        key: "checkScrollExpose",
        value: function(e) {
            var t = this;
            this.scrollTop = e;
            var i = this.viewPortHeight + e, o = [];
            this.items.forEach(function(e) {
                i >= e.top + e.height / 2 ? (t.page.onCTRExpose(e.detail), t.exposed[e.detail.id] = 1) : o.push(e);
            }), this.items = o;
        }
    }, {
        key: "refresh",
        value: function() {
            (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (this.exposed = {}), 
            this.items = [], this.scrollTop = 0;
        }
    } ]), i;
}();

exports.default = i;