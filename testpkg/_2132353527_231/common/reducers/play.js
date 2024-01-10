function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return e.map(function(e, s) {
        return e.cid === t && a(e, s), e;
    });
}

function a(e, a) {
    return t(e.slice(), a, function(e) {
        var t = e.showReply;
        e.showReply = !t;
    });
}

function s(e, t, a) {
    var s = e.slice();
    return a.cid = t, s.unshift(a), s;
}

function l(e, a) {
    return t(e.slice(), a, function(e) {
        e.r = null;
    });
}

function i(e, a, s) {
    return t(e.slice(), a, function(e) {
        "favor" === s ? e.favor.has_favor ? (e.favor.has_favor = 0, e.favor.total--) : (e.favor.has_favor = 1, 
        e.favor.total++) : "favor-reply" === s ? e.r.favor.r_has_favor ? (e.r.favor.r_has_favor = 0, 
        e.r.favor.total--) : (e.r.favor.r_has_favor = 1, e.r.favor.total++) : "favor-xng" === s && (e.x.favor.x_has_favor ? (e.x.favor.x_has_favor = 0, 
        e.x.favor.total--) : (e.x.favor.x_has_favor = 1, e.x.favor.total++));
    });
}

function r(e, t, a, s) {
    var l = e.slice();
    return t.cid = s.cid, t.user = s.user, t.is_display_in_profile = a ? 1 : 0, l.unshift(t), 
    l;
}

function u(e, t) {
    for (var a = e.slice(), s = 0; s < a.length; s++) a[s].cid === t && a.splice(s, 1);
    return a;
}

function n(e, t, a) {
    for (var s = e.slice(), l = 0; l < s.length; l++) if (s[l].cid === t) {
        s[l].is_display_in_profile = a;
        break;
    }
    return s;
}

function d(e, t) {
    for (var a = e.slice() || [], s = 0; s < a.length; s++) if (a[s].cid === t) {
        a[s].user.is_black = !a[s].user.is_black;
        break;
    }
    return a;
}

function f(e, t) {
    return e.map(function(e) {
        if (e.mid === t) {
            var a = (0, o.default)({}, e);
            return a.is_follow > 0 ? a.is_follow = 0 : a.is_follow = 1, a;
        }
        return e;
    });
}

function _(e, t) {
    var a = (0, T.default)(e, function(e) {
        return e.mid === t;
    });
    return -1 === a ? e : (e[a].is_follow ? e[a].is_follow = 0 : e[a].is_follow = 1, 
    e);
}

Object.assign;

var c = e(require("../../frameBase/utils/array-union/index")), o = e(require("../../frameBase/utils/object-assign/index")), E = e(require("../const/actionType")), F = e(require("../../common/const/common")), C = require("../../frameBase/library/redux/index"), T = e(require("../../frameBase/utils/array-find-index/index"));

module.exports = (0, C.combineReducers)({
    album: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.FETCH_ALBUM + "_REQ":
            return (0, o.default)({}, e, {
                isFetching: !0
            });

          case E.default.FETCH_ALBUM + "_FAI":
            return (0, o.default)({}, e, {
                isFetching: !1
            });

          case E.default.FETCH_ALBUM + "_SUC":
            return (0, o.default)({}, {
                isFetching: !1,
                id: t.response.result[0]
            });

          default:
            return e;
        }
    },
    niceComment: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            pageNum: 1,
            list: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.FETCH_COMMENT + "_REQ":
          case E.default.FETCH_NICE_COMMENT + "_REQ":
            return (0, o.default)({}, e, {
                isFetching: !0
            });

          case E.default.FETCH_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                isFetching: !1,
                hasNext: t.response.data.good.total > t.response.data.good.count,
                list: (0, c.default)(e.list, t.response.data.good.list)
            });

          case E.default.FETCH_NICE_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                isFetching: !1,
                hasNext: t.response.data.list.length < t.response.data.total,
                pageNum: t.response.data.list.length < t.response.data.total ? e.pageNum + 1 : e.pageNum,
                list: (0, c.default)(e.list, t.response.data.list)
            });

          case E.default.FETCH_COMMENT + "_FAI":
            return (0, o.default)({}, e, {
                isFetching: !1
            });

          case E.default.FAVOR_COMMENT + "_REQ":
          case E.default.UN_FAVOR_COMMENT + "_REQ":
            return (0, o.default)({}, e, {
                list: i(e.list, t.cid, t.tar)
            });

          default:
            return e;
        }
    },
    latestComment: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            nextT: null,
            list: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.FETCH_COMMENT + "_REQ":
          case E.default.FETCH_LATEST_COMMENT + "_REQ":
            return (0, o.default)({}, e, {
                isFetching: !0
            });

          case E.default.FETCH_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                isFetching: !1,
                hasNext: !!t.response.data.all.next_t,
                nextT: t.response.data.all.next_t,
                list: (0, c.default)(e.list, t.response.data.all.list)
            });

          case E.default.FETCH_LATEST_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                isFetching: !1,
                hasNext: !!t.response.data.next_t,
                nextT: t.response.data.next_t,
                list: (0, c.default)(e.list, t.response.data.list)
            });

          case E.default.FETCH_COMMENT + "_FAI":
            return (0, o.default)({}, e, {
                isFetching: !1
            });

          case E.default.SHOW_REPLY_INPUT:
            return (0, o.default)({}, e, {
                list: a(e.list, t.cid)
            });

          case E.default.REPLY_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                list: s(e.list, t.response.data.cid, t.msg)
            });

          case E.default.DEL_COMMENT_REPLY + "_SUC":
            return (0, o.default)({}, e, {
                list: l(e.list, t.cid)
            });

          case E.default.FAVOR_COMMENT + "_REQ":
          case E.default.UN_FAVOR_COMMENT + "_REQ":
            return (0, o.default)({}, e, {
                list: i(e.list, t.cid, t.tar)
            });

          case E.default.DESTROY_COMMENT:
            return {
                isFetching: !1,
                hasNext: !0,
                nextT: null,
                list: []
            };

          case E.default.ADD_SELF_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                list: r(e.list, t.msg, t.is_into_profile, t.response.data)
            });

          case E.default.BAN_COMMENT + "_SUC":
          case E.default.DEL_SELF_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                list: u(e.list, t.cid)
            });

          case E.default.DISABLE_PROFILE_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                list: n(e.list, t.cid, 0)
            });

          case E.default.DISPLAY_PROFILE_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                list: n(e.list, t.cid, 1)
            });

          case E.default.REMOVE_BLACK_LIST + "_SUC":
          case E.default.ADD_BLACK_LIST + "_SUC":
            return (0, o.default)({}, e, {
                list: d(e.list, t.cid)
            });

          default:
            return e;
        }
    },
    selfComment: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isDisplayInProfile: !1,
            isFetching: !1,
            hasNext: !0,
            nextT: null,
            list: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.FETCH_SELF_COMMENT + "_REQ":
            return (0, o.default)({}, e, {
                isFetching: !0
            });

          case E.default.FETCH_SELF_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                isFetching: !1,
                hasNext: !!t.response.data.next_t,
                nextT: t.response.data.next_t,
                list: (0, c.default)(e.list, t.response.data.list)
            });

          case E.default.DESTROY_SELF_COMMENT:
            return {
                isDisplayInProfile: !1,
                isFetching: !1,
                hasNext: !0,
                nextT: null,
                list: []
            };

          case E.default.PROFILE_COMMENT_ISDISINPRO + "_SUC":
            return (0, o.default)({}, e, {
                isDisplayInProfile: t.response.data.is_display_in_profile
            });

          case E.default.PROFILE_SET_MSG_SHOULD_TO_PRO:
            return (0, o.default)({}, e, {
                isDisplayInProfile: t.isDisplayInProfile
            });

          case E.default.SHOW_REPLY_INPUT:
            return (0, o.default)({}, e, {
                list: a(e.list, t.cid)
            });

          case E.default.DEL_COMMENT_REPLY + "_SUC":
            return (0, o.default)({}, e, {
                list: l(e.list, t.cid)
            });

          case E.default.FAVOR_COMMENT + "_REQ":
          case E.default.UN_FAVOR_COMMENT + "_REQ":
            return (0, o.default)({}, e, {
                list: i(e.list, t.cid, t.tar)
            });

          case E.default.BAN_COMMENT + "_SUC":
          case E.default.DEL_SELF_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                list: u(e.list, t.cid)
            });

          case E.default.DISABLE_PROFILE_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                list: n(e.list, t.cid, 0)
            });

          case E.default.DISPLAY_PROFILE_COMMENT + "_SUC":
            return (0, o.default)({}, e, {
                list: n(e.list, t.cid, 1)
            });

          default:
            return e;
        }
    },
    profile: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            dynamic: {
                isFetching: !1,
                hasNext: !0,
                needFetch: !0,
                dynamics: []
            },
            album: {
                isFetching: !1,
                hasNext: !0,
                needFetch: !0,
                albums: []
            },
            curAlbum: {},
            user: {},
            userNeedFetch: !0
        } : arguments[0], t = arguments[1], a = (0, o.default)({}, e.dynamic), s = (0, o.default)({}, e.album);
        switch (t.type) {
          case E.default.FETCH_ALBUM + "_SUC":
            return (0, o.default)({}, e, {
                curAlbum: (0, o.default)({}, t.response.data)
            });

          case E.default.FETCH_PROFILE + "_SUC":
            return (0, o.default)({}, e, {
                user: (0, o.default)({}, t.response.user),
                userNeedFetch: !1
            });

          case E.default.FETCH_PROFILE + "_FAI":
            return (0, o.default)({}, e, {});

          case E.default.FETCH_ALBUM_STATUS + "_SUC":
            return t.response.result.length && 2 === t.response.entities.albumList[t.response.result[0]].status ? (a.needFetch = !0, 
            a.dynamics = [], s.needFetch = !0, s.albums = [], (0, o.default)({}, e, {
                dynamic: a
            }, {
                album: s
            })) : e;

          default:
            return e;
        }
    },
    followFans: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            nextTime: null,
            list: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.FETCH_FOLLOW_FANS_LIST + "_REQ":
            return (0, o.default)({}, e, {
                isFetching: !0
            });

          case E.default.FETCH_FOLLOW_FANS_LIST + "_SUC":
          case E.default.GET_TIME_FRIEND + "_SUC":
            return (0, o.default)({}, e, {
                isFetching: !1,
                hasNext: t.response.data.list.length >= F.default.FETCH_FOLLOW_FANS_LIST_LIMIT,
                list: (0, c.default)(e.list, t.response.data.list),
                nextTime: t.response.data.next_t
            });

          case E.default.FETCH_FOLLOW_FANS_LIST + "_FAI":
            return (0, o.default)({}, e, {
                isFetching: !1
            });

          case E.default.SUB_USER + "_SUC":
          case E.default.UNSUB_USER + "_SUC":
            return "list" === t.pg ? (0, o.default)({}, e, {
                list: f(e.list, t.visitedMid)
            }) : e;

          case E.default.DESTROY_PROFILE:
          case E.default.DESTROY_FANS:
            return (0, o.default)({}, e, {
                isFetching: !1,
                hasNext: !0,
                nextTime: null,
                list: []
            });

          default:
            return e;
        }
    },
    favorList: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            list: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.FETCH_FAVOR_LIST + "_REQ":
            return (0, o.default)({}, e, {
                isFetching: !0
            });

          case E.default.FETCH_FAVOR_LIST + "_SUC":
            return (0, o.default)({}, e, {
                isFetching: !1,
                list: t.offset ? e.list.concat(t.response.data.list) : t.response.data.list
            });

          case E.default.FETCH_FAVOR_LIST + "_FAI":
            return (0, o.default)({}, e, {
                isFetching: !1
            });

          case E.default.FETCH_ALBUM + "_SUC":
          case E.default.DESTROY_FAVOR_LIST:
            return (0, o.default)({}, e, {
                list: []
            });

          case E.default.SUB_USER + "_SUC":
          case E.default.UNSUB_USER + "_SUC":
            return (0, o.default)({}, e, {
                list: _(e.list, t.visitedMid)
            });

          default:
            return e;
        }
    }
});