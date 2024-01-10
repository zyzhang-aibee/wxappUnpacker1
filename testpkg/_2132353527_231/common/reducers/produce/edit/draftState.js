function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.draftStateDefaultState = void 0;

var t = e(require("../../../../frameBase/library/seamless-immutable/index")), r = e(require("../../../const/actionType")), s = e(require("../../../const/actionTypes/entities/dynamics")), a = require("../../../../common/const/common"), n = require("../../../../common/others/utils"), u = exports.draftStateDefaultState = (0, 
t.default)({
    ver: -1,
    isFetching: !1,
    needFetch: !0,
    isPushing: !1,
    needPush: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, t = arguments[1];
    switch (t.type) {
      case r.default.FETCH_ALBUM_DRAFT + "_REQ":
        return e.merge({
            isFetching: !0,
            needFetch: !1
        });

      case r.default.FETCH_ALBUM_DRAFT + "_SUC":
        return e.merge({
            ver: t.response.data.ver,
            isFetching: !1
        });

      case r.default.PUSH_ALBUM_DRAFT + "_REQ":
        return e.merge({
            isPushing: !0,
            needPush: !1
        });

      case r.default.PUSH_ALBUM_DRAFT + "_SUC":
        return t.response.data && 1 === t.response.data.ok ? e.merge({
            ver: t.response.data.ver,
            isPushing: !1,
            needPush: !1
        }) : e.merge({
            isPushing: !1,
            needPush: !0
        });

      case r.default.PUSH_ALBUM_DRAFT + "_FAI":
        return e.merge({
            isPushing: !1
        });

      case r.default.REEDIT_ALBUM + "_SUC":
        return e.merge({
            ver: -1 === e.ver ? -1 : e.ver + 1
        });

      case s.default.COMMIT_DYNAMIC + "_SUC":
        return (0, n.tplTypeJudge)(t.response.data.tpl_id || 0) === a.TPL_TYPE.STYLE.NORMAL ? u : e;

      default:
        return e;
    }
};