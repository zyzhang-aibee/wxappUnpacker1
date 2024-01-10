function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), a = e(require("../../const/actionType")), u = (0, 
t.default)({});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, t = arguments[1];
    switch (t.type) {
      case a.default.FETCH_THUMBNAILS + "_SUC":
        return e.merge(r({}, t.response.data.qid, t.response.data.frame_urls));

      default:
        return e;
    }
};