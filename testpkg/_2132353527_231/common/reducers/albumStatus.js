function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
    return Array.from(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../frameBase/library/seamless-immutable/index")), a = e(require("../const/actionType")), u = (0, 
t.default)({
    checkList: []
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, t = arguments[1], n = e.checkList;
    switch (t.type) {
      case a.default.SET_CHECK_ALBUMS:
        return e.merge({
            checkList: t.albums
        });

      case a.default.ADD_CHECK_ALBUMS:
        return e.merge({
            checkList: n.concat.apply(n, r(t.albums))
        });

      case a.default.DELETE_CHECK_ALBUMS:
        var c = n.filter(function(e) {
            return t.albumIds.indexOf(e.albumId) < 0;
        });
        return e.merge({
            checkList: c
        });

      case a.default.CLEAR_CHECK_ALBUMS:
        return u;

      default:
        return e;
    }
};