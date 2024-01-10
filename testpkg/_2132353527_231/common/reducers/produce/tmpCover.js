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
}, r = e(require("../../../frameBase/library/seamless-immutable/index")), a = e(require("../../const/actionType")), s = (0, 
r.default)({
    id: 0,
    imgUrl: "",
    tmpRotate: 0,
    isFirst: !0,
    hasChangeCover: !1,
    isOut: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s, r = arguments[1];
    switch (r.type) {
      case a.default.SET_TMP_ALBUM_COVER:
        return e.merge(t({}, r.cover));

      case a.default.FETCH_COVER_URL + "_SUC":
        return e.merge({
            id: r.response.data.id,
            imgUrl: r.response.data.url,
            isOut: !0,
            tmpRotate: 0
        });

      default:
        return e;
    }
};