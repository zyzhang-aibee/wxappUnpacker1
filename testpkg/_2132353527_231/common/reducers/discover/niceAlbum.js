function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = e(require("../../../frameBase/library/seamless-immutable/index")), s = e(require("../../../frameBase/utils/array-union/index")), t = e(require("../../utils/index")), u = e(require("../../const/actionType"));

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.default)({
        groupIds: [],
        banners: [],
        lastGroupTime: -1,
        isFetching: !1,
        hasNext: !0
    }), a = arguments[1];
    switch (a.type) {
      case u.default.FETCH_DISCOVER + "_REQ":
        return e.merge({
            isFetching: !0
        });

      case u.default.FETCH_DISCOVER + "_SUC":
        var n = t.default._.deepObjectVal(a.response, [ "qualityFeatures", "albums" ]) || [];
        return e.merge({
            groupIds: (0, s.default)(e.groupIds, a.response.result),
            banners: e.banners.length ? e.banners : n,
            lastGroupTime: a.response.result[a.response.result.length - 1].dl_t - 9e5,
            isFetching: !1,
            hasNext: a.response.result.length >= 4
        });

      case u.default.FETCH_DISCOVER + "_FAI":
        return e.merge({
            isFetching: !1
        });

      default:
        return e;
    }
};