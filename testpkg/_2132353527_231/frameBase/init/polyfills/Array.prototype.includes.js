Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function(r, t) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var e = Object(this), n = e.length >>> 0;
        if (0 === n) return !1;
        for (var i = 0 | t, o = Math.max(i >= 0 ? i : n - Math.abs(i), 0); o < n; ) {
            if (e[o] === r) return !0;
            o++;
        }
        return !1;
    }
});