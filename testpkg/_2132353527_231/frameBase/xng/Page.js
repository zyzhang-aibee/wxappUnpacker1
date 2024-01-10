Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(t) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    t._pagetype = "xng", t.__state__ = Object.create(null);
    var n = Object.create(null), r = {
        page: t,
        options: a,
        plugin: function(e, t) {
            n[e] ? n[e].push(t) : n[e] = [ t ];
        }
    };
    e.default.forEach(function(e) {
        e.applyPage && e.applyPage(r);
    }), Object.keys(n).forEach(function(e) {
        var a = n[e], r = t[e];
        t[e] = function() {
            for (var e = this, t = arguments.length, n = Array(t), u = 0; u < t; u++) n[u] = arguments[u];
            a.forEach(function(t) {
                t.apply(e, n);
            }), r && r.apply(this, n);
        };
    }), Page(t);
};

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./plugins/index"));