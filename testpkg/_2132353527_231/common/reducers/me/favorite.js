function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), r = e(require("../../const/index")), i = e(require("../../const/actionTypes/entities/dynamics")), a = e(require("../../../frameBase/utils/array-union/index")), n = (0, 
t.default)({
    list: [],
    lastTime: -1,
    isFetching: !1,
    total: 0
}), s = function(e, t) {
    var r = e.indexOf(t);
    if (-1 !== r) {
        var i = [].concat(e);
        return i.splice(r, 1), i;
    }
    return e;
}, u = function(e, t) {
    var r = e;
    return t.forEach(function(e) {
        r = s(r, e);
    }), r;
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n, t = arguments[1], l = t.type, _ = t.response;
    switch (l) {
      case i.default.FETCH_DYNAMIC_FAVORITES_LIST + "_REQ":
        return e.merge({
            isFetching: !0
        });

      case i.default.FETCH_DYNAMIC_FAVORITES_LIST + "_SUC":
        return e.merge({
            list: (0, a.default)(e.list, _.result),
            lastTime: _.result.length >= r.default.FETCH_LIMIT.FAVORITE_LIST ? _.next_t : 0,
            total: _.total,
            isFetching: !1
        });

      case i.default.FETCH_DYNAMIC_FAVORITES_LIST + "_FAI":
        return e.merge({
            isFetching: !0
        });

      case i.default.ADD_DYNAMIC_FAVORITES + "_SUC":
        return n;

      case i.default.DELETE_DYNAMIC_FAVORITES + "_SUC":
        return e.merge({
            list: s(e.list, t.dynamicId)
        });

      case i.default.DELETE_DYNAMIC_FAVORITES_LIST + "_SUC":
        return e.merge({
            list: u(e.list, t.dynamicIds)
        });

      default:
        return e;
    }
};