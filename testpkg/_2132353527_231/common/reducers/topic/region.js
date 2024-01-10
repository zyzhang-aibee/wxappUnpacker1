function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), r = e(require("../../const/actionType")), a = {
    local: null,
    cities: null
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, t.default)(a), l = arguments[1], u = l.response;
    switch (l.type) {
      case r.default.FETCH_LOCAL_CITY + "_SUC":
        return e.merge({
            local: u.data
        });

      case r.default.FETCH_CITY_LIST + "_SUC":
        return e.merge({
            cities: u.data.list
        });

      default:
        return e;
    }
};