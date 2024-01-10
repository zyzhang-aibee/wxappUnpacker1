function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function r(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
}, n = e(require("../../../frameBase/library/seamless-immutable/index")), a = e(require("../../const/actionType")), s = e(require("../../const/actionTypes/entities/dynamics")), m = {
    detailIds: [],
    commentEntities: {},
    lastTime: -1,
    isFetching: !1
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, n.default)(m), o = arguments[1];
    switch (o.type) {
      case a.default.FETCH_FEED + "_SUC":
      case a.default.FETCH_FEED_RECOMMEND + "_SUC":
      case a.default.FETCH_TOPIC_FEED + "_SUC":
      case a.default.FETCH_BLESS_TOPIC_FEED + "_SUC":
        var c = o.response.entities.comments, d = void 0 === c ? {} : c;
        return e.merge({
            commentEntities: i({}, e.commentEntities, d)
        });

      case a.default.FETCH_DYNAMIC_COMMENT + "_REQ":
        return e.merge({
            isFetching: !0
        });

      case a.default.FETCH_DYNAMIC_COMMENT + "_SUC":
        var l = o.refresh, u = o.response, E = u.result, _ = u.entities.comments, C = void 0 === _ ? {} : _, f = u.lastTime;
        return e.merge({
            detailIds: l ? E : e.detailIds.concat(E),
            commentEntities: e.commentEntities.merge(C),
            lastTime: f,
            isFetching: !1
        });

      case a.default.FETCH_DYNAMIC_COMMENT + "_FAI":
        return e.merge({
            isFetching: !1
        });

      case a.default.CLEAR_DYNAMIC_COMMENT:
        return e.merge({
            detailIds: [],
            lastTime: -1
        });

      case a.default.LIKE_DYNAMIC_COMMENT + "_REQ":
        var M = e.commentEntities[o.cid], g = M.merge({
            favor: {
                total: M.favor.total + 1,
                has_favor: 1
            }
        });
        return e.merge({
            commentEntities: e.commentEntities.merge(r({}, g.id, g))
        });

      case a.default.CANCEL_LIKE_DYNAMIC_COMMENT + "_REQ":
        var v = e.commentEntities[o.cid], T = v.merge({
            favor: {
                total: v.favor.total - 1,
                has_favor: 0
            }
        });
        return e.merge({
            commentEntities: e.commentEntities.merge(r({}, T.id, T))
        });

      case s.default.ADD_DYNAMIC_COMMENT + "_SUC":
        var I = o.response.data.profile_cid, N = {
            id: I,
            txt: o.txt,
            user: o.user,
            favor: {
                total: 0,
                has_favor: 0
            },
            ct: Date.now()
        };
        o.repliedComment && Object.assign(N, {
            to_user: o.repliedComment.user,
            to_txt: o.repliedComment.txt
        });
        var O = e.merge({
            commentEntities: e.commentEntities.merge(r({}, I, N))
        });
        return o.isCommentList && (O = O.merge({
            detailIds: [ I ].concat(t(e.detailIds))
        })), O;

      case s.default.REMOVE_DYNAMIC_COMMENT + "_SUC":
        var p = o.cid, A = e.detailIds.indexOf(p), D = e.detailIds.asMutable();
        D.splice(A, 1);
        var F = (0, n.default)(D);
        return e.merge({
            detailIds: F
        });

      case s.default.FETCH_SINGLE_DYNAMIC + "_SUC":
        var h = o.response.entities.commentEntities || {};
        return e.merge({
            commentEntities: e.commentEntities.merge(h)
        });

      case a.default.SET_CUR_DYNAMIC_COMMENT:
        var y = o.comment;
        return e.commentEntities[y.id] ? e : e.merge({
            commentEntities: e.commentEntities.merge(r({}, y.id, y))
        });

      default:
        return e;
    }
};