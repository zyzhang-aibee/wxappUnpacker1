Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, l, n) {
    var t = void 0, u = void 0, i = void 0, r = null, a = 0;
    n || (n = {});
    var o = function() {
        a = !1 === n.leading ? 0 : Date.now(), r = null, i = e.apply(t, u), r || (t = u = null);
    };
    return function() {
        var d = Date.now();
        a || !1 !== n.leading || (a = d);
        var v = l - (d - a);
        return t = this, u = arguments, v <= 0 || v > l ? (clearTimeout(r), r = null, a = d, 
        i = e.apply(t, u), r || (t = u = null)) : r || !1 === n.trailing || (r = setTimeout(o, v)), 
        i;
    };
};