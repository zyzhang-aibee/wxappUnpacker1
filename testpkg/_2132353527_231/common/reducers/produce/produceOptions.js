function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), r = e(require("../../const/actionType")), a = (0, 
t.default)({
    hasFetchDraft: !1,
    fetchDraftFail: !1,
    isFetchingTpl: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
    switch (arguments[1].type) {
      case r.default.FETCH_ALBUM_DRAFT + "_SUC":
        return e.merge({
            hasFetchDraft: !0
        });

      case r.default.FETCH_ALBUM_DRAFT + "_FAI":
        return e.merge({
            fetchDraftFail: !0
        });

      case r.default.FETCH_ALBUM_DRAFT + "_REQ":
        return e.merge({
            fetchDraftFail: !1
        });

      case r.default.FETCH_ALBUM_TPL_GROUP + "_REQ":
        return e.merge({
            isFetchingTpl: !0
        });

      case r.default.FETCH_ALBUM_TPL_GROUP + "_SUC":
      case r.default.FETCH_ALBUM_TPL_GROUP + "_FAI":
        return e.merge({
            isFetchingTpl: !1
        });

      default:
        return e;
    }
};