function e(e) {
    var t = new Date(e), r = t.getFullYear(), u = t.getMonth() + 1, a = t.getDate(), n = t.getHours(), o = t.getMinutes();
    return {
        YY: r || "0000",
        MM: u < 10 ? "0" + u : u,
        DD: a < 10 ? "0" + a : a,
        hh: n < 10 ? "0" + n : n,
        mm: o < 10 ? "0" + o : o
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    format: function(t, r) {
        for (var u = r || "YY-MM-DD hh:mm", a = e(t), n = [ "YY", "MM", "DD", "hh", "mm" ], o = 0; o < 5; o++) {
            var M = n[o];
            u = u.replace(M, a[M]);
        }
        return u;
    }
};