function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = e(require("../../../frameBase/library/seamless-immutable/index")), t = e(require("../../../frameBase/utils/array-union/index")), s = e(require("../../const/index")), i = e(require("../../const/actionType")), a = {
    mids: [],
    favorUserEntities: {},
    offset: 0,
    more: !0,
    isFetching: !1
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.default)(a), n = arguments[1];
    switch (n.type) {
      case i.default.FETCH_DYNAMIC_FAVOR_USER + "_REQ":
        return e.merge({
            isFetching: !0
        });

      case i.default.FETCH_DYNAMIC_FAVOR_USER + "_SUC":
        var u = n.response, f = u.result, o = u.entities.favorUsers, l = void 0 === o ? {} : o, _ = f.length < s.default.FETCH_LIMIT.DISCOVER_DYNAMIC_FAVOR ? 0 : 1;
        return e.merge({
            mids: (0, t.default)(e.mids, f),
            favorUserEntities: e.favorUserEntities.merge(l),
            offset: e.offset + f.length,
            isFetching: !1,
            more: _
        });

      case i.default.FETCH_DYNAMIC_FAVOR_USER + "_FAI":
        return e.merge({
            isFetching: !1,
            more: !1
        });

      case i.default.CLEAR_DYNAMIC_FAVOR_USER:
        return e.replace(a);

      default:
        return e;
    }
};