module.exports = function(r, t, e) {
    if ("function" == typeof Array.prototype.findIndex) return r.findIndex(t, e);
    if ("function" != typeof t) throw new TypeError("predicate must be a function");
    var n = Object(r), f = n.length;
    if (0 === f) return -1;
    for (var o = 0; o < f; o++) if (t.call(e, n[o], o, n)) return o;
    return -1;
};