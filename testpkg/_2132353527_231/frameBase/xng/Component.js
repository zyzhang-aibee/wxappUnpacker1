Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = Object.create(null), n = {
        component: e,
        options: a,
        plugin: function(t, e) {
            o[t] ? o[t].push(e) : o[t] = [ e ];
        }
    };
    t.default.forEach(function(t) {
        t.applyComponent && t.applyComponent(n);
    }), Object.keys(o).forEach(function(t) {
        var a = o[t], n = "mapStateToData" === t ? e.methods.mapStateToData : e[t], p = function() {
            for (var t = this, e = arguments.length, o = Array(e), p = 0; p < e; p++) o[p] = arguments[p];
            a.forEach(function(e) {
                e.apply(t, o);
            }), n && n.apply(this, o);
        };
        "mapStateToData" === t ? e.methods.mapStateToData = p : e[t] = p;
    }), Component(e);
};

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./plugins/index"));