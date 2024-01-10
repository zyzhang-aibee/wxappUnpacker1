Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = {
    result: function(r, t) {
        var e = r[t];
        return this.isFunction(e) ? e() : e;
    },
    some: function(r, t) {
        for (var e = 0; e < r.length; e++) if (t(r[e])) return !0;
        return !1;
    },
    deepObjectVal: function(r, t) {
        return t.reduce(function(r, t) {
            return r && void 0 !== r[t] ? r[t] : null;
        }, r);
    }
};

[ "Arguments", "Function", "Array", "String", "Number", "Date", "RegExp", "Error" ].forEach(function(t) {
    r["is" + t] = function(r) {
        return Object.prototype.toString.call(r) === "[object " + t + "]";
    };
}), exports.default = r;