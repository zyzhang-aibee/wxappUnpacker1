Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var n = [], r = [];
    return {
        clear: function() {
            r = e, n = e;
        },
        notify: function() {
            n = r;
            for (var e = r, t = 0; t < e.length; t++) {
                var i = e[t];
                i.listener && (i = i.listener), i.apply(void 0, arguments);
            }
        },
        get: function() {
            return r;
        },
        subscribe: function(t) {
            var i = !0;
            return r === n && (r = n.slice()), r.push(t), function() {
                i && n !== e && (i = !1, r === n && (r = n.slice()), r.splice(r.indexOf(t), 1));
            };
        }
    };
};

var e = null;