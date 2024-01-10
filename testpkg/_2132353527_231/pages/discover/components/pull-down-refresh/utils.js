Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = {};

exports.default = {
    setScrollTopCache: function(t, o) {
        e[t] = o;
    },
    getScrollTopCache: function(t) {
        return e[t] || 0;
    }
};