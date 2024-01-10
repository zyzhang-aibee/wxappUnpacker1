function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = e(require("../../../frameBase/library/seamless-immutable/index")), n = e(require("../../const/index")), a = e(require("../../const/actionType")), i = e(require("../../const/actionTypes/entities/dynamics")), u = (0, 
r.default)({
    list: [],
    lastTime: -1,
    total: 0,
    isFetching: !1
}), s = function(e, t) {
    var r = e.filter(function(e) {
        return (t[e].album_type === n.default.ALBUM_TYPE.ARTICLE || 2 === t[e].status) && !wx.xngGlobal.getBan("publish", t[e].ban);
    }), a = r.filter(function(e) {
        return !t[e].s && !t[e].p;
    }), i = r.filter(function(e) {
        return t[e].s || t[e].p;
    });
    return a.concat(i);
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, r = arguments[1], l = r.type, c = r.response;
    switch (l) {
      case a.default.FETCH_CONTRIBUTE + "_REQ":
        return e.merge({
            isFetching: !0
        });

      case a.default.FETCH_CONTRIBUTE + "_SUC":
        var o = c.entities.dynamics, f = c.result;
        return e.merge({
            list: [].concat(t(e.list), t(s(f, o))),
            lastTime: f.length >= n.default.FETCH_LIMIT.DISCOVER_CONTRIBUTE ? c.next_t : 0,
            total: c.total,
            isFetching: !1
        });

      case a.default.FETCH_CONTRIBUTE + "_FAI":
        return e.merge({
            isFetching: !0
        });

      case i.default.PUBLISH_DYNAMIC + "_SUC":
      case "" + a.default.CLC_CONTRIBUTE:
        return u;

      default:
        return e;
    }
};