"Set" in global ? "function" == typeof Set.prototype.forEach && function() {
    var t = !1;
    return new Set([ !0 ]).forEach(function(n) {
        t = n;
    }), !0 === t;
}() ? module.exports = function(t) {
    var n = [];
    return new Set(t).forEach(function(t) {
        n.push(t);
    }), n;
} : module.exports = function(t) {
    var n = new Set();
    return t.filter(function(t) {
        return !n.has(t) && (n.add(t), !0);
    });
} : module.exports = function(t) {
    for (var n = [], e = 0; e < t.length; e++) -1 === n.indexOf(t[e]) && n.push(t[e]);
    return n;
};