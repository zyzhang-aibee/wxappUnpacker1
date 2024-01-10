function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s = e(require("../../../frameBase/library/seamless-immutable/index")), t = e(require("../../../frameBase/utils/array-union/index")), r = e(require("../../const/actionType")), i = {
    msgIds: [],
    earlierMsgIds: [],
    msgEntities: {},
    isFetching: !1,
    lastTime: -1,
    seeingEarlier: !1
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.default)(i), a = arguments[1];
    switch (a.type) {
      case r.default.FETCH_DYNAMIC_MESSAGE + "_REQ":
        return e.merge({
            isFetching: !0
        });

      case r.default.FETCH_DYNAMIC_MESSAGE + "_SUC":
        var n = a.response, u = n.result, l = n.entities.messages, d = void 0 === l ? {} : l, g = n.lastTime, E = a.unreadFetchLimit, m = e.msgEntities.merge(d);
        return e.msgIds.length < E ? e.merge({
            msgIds: (0, t.default)(e.msgIds, u),
            msgEntities: m,
            lastTime: g,
            isFetching: !1
        }) : e.merge({
            earlierMsgIds: (0, t.default)(e.earlierMsgIds, u),
            msgEntities: m,
            lastTime: g,
            isFetching: !1
        });

      case r.default.FETCH_DYNAMIC_MESSAGE + "_FAI":
        return e.merge({
            isFetching: !1
        });

      case r.default.SEE_EARLIER_DYNAMIC_MESSAGE:
        return e.merge({
            seeingEarlier: !0
        });

      case r.default.RESET_DYNAMIC_MESSAGE:
        return (0, s.default)(i);

      default:
        return e;
    }
};