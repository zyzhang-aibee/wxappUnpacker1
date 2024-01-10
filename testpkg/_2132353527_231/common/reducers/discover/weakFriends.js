function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e, r, i) {
    return r in e ? Object.defineProperty(e, r, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = i, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = e(require("../../../frameBase/library/seamless-immutable/index")), s = e(require("../../../frameBase/utils/array-union/index")), t = e(require("../../const/actionType")), d = {
    mids: [],
    friendEntities: {},
    followedFriends: {},
    isFetching: !1,
    isFirstFetch: !0
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.default)(d), l = arguments[1];
    switch (l.type) {
      case t.default.FETCH_WEAK_FRIEND + "_REQ":
        return e.merge({
            isFetching: !0
        });

      case t.default.FETCH_WEAK_FRIEND + "_SUC":
        var n = l.response, o = n.result, a = n.entities.weakFriends, f = void 0 === a ? {} : a;
        return l.refresh ? e.replace({
            mids: o,
            friendEntities: f,
            followedFriends: e.followedFriends,
            isFetching: !1,
            isFirstFetch: !1
        }) : e.merge({
            mids: (0, s.default)(e.mids, o),
            friendEntities: e.friendEntities.merge(f),
            isFetching: !1,
            isFirstFetch: !1
        });

      case t.default.FETCH_WEAK_FRIEND + "_FAI":
        return e.merge({
            isFetching: !1
        });

      case t.default.FETCH_FEED + "_SUC":
      case t.default.FETCH_FEED_RECOMMEND + "_SUC":
      case t.default.FETCH_DYNAMIC_FAVOR_USER + "_SUC":
        var u = l.response.followedFriends;
        return e.merge({
            followedFriends: e.followedFriends.merge(u)
        });

      case t.default.FOLLOW_USER + "_SUC":
        var F = l.mid;
        return e.merge({
            followedFriends: e.followedFriends.merge(r({}, F, 1))
        });

      case t.default.UNFOLLOW_USER + "_SUC":
        var _ = l.mid;
        return e.merge({
            followedFriends: e.followedFriends.without(_)
        });

      case t.default.SUB_USER + "_SUC":
        var c = l.visitedMid;
        return e.merge({
            followedFriends: e.followedFriends.merge(r({}, c, 1))
        });

      case t.default.UNSUB_USER + "_SUC":
        var E = l.visitedMid;
        return e.merge({
            followedFriends: e.followedFriends.without(E)
        });

      case t.default.FETCH_FOLLOW_FANS_LIST + "_SUC":
        var m = {};
        return l.response.data.list.forEach(function(e) {
            e.is_follow && (m[e.mid] = e.is_follow);
        }), e.merge({
            followedFriends: e.followedFriends.merge(m)
        });

      case t.default.FETCH_PROFILE + "_SUC":
        var w = l.mid, g = l.response.user.is_follow;
        return e.merge({
            followedFriends: e.followedFriends.merge(r({}, w, g || 0))
        });

      default:
        return e;
    }
};