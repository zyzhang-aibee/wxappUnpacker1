var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};

if ("function" != typeof Promise) throw new TypeError("A global Promise is required");

if ("function" != typeof Promise.prototype.finally) {
    var t = function(t, n) {
        if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t) throw new TypeError("Assertion failed: Type(O) is not Object");
        var e = t.constructor;
        if (void 0 === e) return n;
        if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) && "function" != typeof e) throw new TypeError("O.constructor is not an Object");
        var r = "function" == typeof Symbol && "symbol" === o(Symbol.species) ? e[Symbol.species] : void 0;
        if (null == r) return n;
        if ("function" == typeof r && r.prototype) return r;
        throw new TypeError("no constructor found");
    }, n = {
        finally: function(n) {
            var e = this;
            if ("object" !== (void 0 === e ? "undefined" : o(e)) || null === e) throw new TypeError('"this" value is not an Object');
            var r = t(e, Promise);
            return "function" != typeof n ? Promise.prototype.then.call(e, n, n) : Promise.prototype.then.call(e, function(o) {
                return new r(function(o) {
                    return o(n());
                }).then(function() {
                    return o;
                });
            }, function(o) {
                return new r(function(o) {
                    return o(n());
                }).then(function() {
                    throw o;
                });
            });
        }
    };
    Object.defineProperty(Promise.prototype, "finally", {
        configurable: !0,
        writable: !0,
        value: n.finally
    });
}