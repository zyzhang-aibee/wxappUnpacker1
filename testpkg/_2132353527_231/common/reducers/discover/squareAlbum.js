function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
}, r = e(require("../../../frameBase/utils/array-union/index")), a = e(require("../../const/actionType"));

exports.default = function() {
    var e = arguments.length < 0 || void 0 === arguments[0] ? {
        hasNext: !0,
        isFetching: !1,
        nextScore: -1,
        list: []
    } : arguments[0], s = arguments[1];
    switch (s.type) {
      case a.default.FETCH_SQUARE + "_REQ":
        return t({}, e, {
            isFetching: !0
        });

      case a.default.FETCH_SQUARE + "_SUC":
        return t({}, e, {
            isFetching: !1,
            hasNext: s.response.data.next_score > 0,
            nextScore: s.response.data.next_score,
            dataType: s.response.data.type,
            list: (0, r.default)(e.list, s.response.data.list)
        });

      case a.default.FETCH_SQUARE + "_FAI":
        return t({}, e, {
            isFetching: !1
        });

      default:
        return e;
    }
};