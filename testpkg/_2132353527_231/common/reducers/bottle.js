function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    var s = (0, d.default)({}, e);
    return s.has_music = t, s;
}

function s(e, t, s, i) {
    var a = e.slice(), n = (0, d.default)({}, i, {
        txt: t,
        ct: Date.now(),
        mid: s,
        floor: a.length + 1
    });
    return a.unshift(n), a;
}

function i(e, t) {
    var s = e.slice();
    return s.splice(s.indexOf(t), 1), s;
}

var a = e(require("../../common/const/common")), n = e(require("../const/actionType")), u = e(require("../../frameBase/utils/array-union/index")), r = require("../../frameBase/library/redux/index"), d = e(require("../../frameBase/utils/object-assign/index")), c = (0, 
r.combineReducers)({
    detail: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            hasFetched: !1,
            fetchFinished: !1,
            topic: {},
            music: {},
            comments: [],
            isPlaying: !1,
            isLoading: !1
        } : arguments[0], i = arguments[1];
        switch (i.type) {
          case n.default.FETCH_BOTTLE_DETAIL + "_REQ":
            return (0, d.default)({}, e, {
                isFetching: !0
            });

          case n.default.FETCH_BOTTLE_DETAIL + "_SUC":
            return (0, d.default)({}, e, {
                isFetching: !1,
                hasFetched: !0,
                fetchFinished: !i.response.data.comment.length,
                hasNext: i.response.data.comment.length >= a.default.BOTTLE_DETAIL_LIMIT,
                topic: i.response.data.topic ? i.response.data.topic : e.topic,
                music: i.response.data.music ? i.response.data.music : e.music,
                comments: (0, u.default)(e.comments, i.response.data.comment)
            });

          case n.default.SET_LOADING_BOTTLE_MUSIC:
            return (0, d.default)({}, e, {
                isLoading: i.isLoading
            });

          case n.default.SET_PLAY_BOTTLE_MUSIC:
            return (0, d.default)({}, e, {
                isPlaying: i.isPlaying
            });

          case n.default.DESTROY_BOTTLE_DETAIL:
            return (0, d.default)({}, e, {
                music: {},
                comments: [],
                isPlaying: !1,
                hasFetched: !1
            });

          case n.default.SAVE_MUSIC + "_SUC":
            return (0, d.default)({}, e, {
                music: t(e.music, 1)
            });

          case n.default.SAVE_MUSIC + "_FAI":
            return (0, d.default)({}, e, {
                music: t(e.music, 0)
            });

          case n.default.BOTTLE_COMMENT + "_SUC":
            return (0, d.default)({}, e, {
                comments: s(e.comments, i.txt, i.userMid, i.response.data)
            });

          default:
            return e;
        }
    },
    myBottle: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            fetchFinished: !1,
            myBottleIdList: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case n.default.MY_BOTTLE + "_REQ":
            return (0, d.default)({}, e, {
                isFetching: !0
            });

          case n.default.MY_BOTTLE + "_SUC":
            return (0, d.default)({}, e, {
                isFetching: !1,
                hasNext: t.response.result.length >= a.default.WISH_BOTTLE_LIMIT,
                fetchFinished: !t.response.result.length,
                myBottleIdList: (0, u.default)(e.myBottleIdList, t.response.result)
            });

          case n.default.DEL_MY_BOTTLE + "_SUC":
            return (0, d.default)({}, e, {
                myBottleIdList: i(e.myBottleIdList, t.id)
            });

          default:
            return e;
        }
    },
    wishBottle: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            fetchFinished: !1,
            wishBottleList: [],
            satisfied: 0
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case n.default.WISH_BOTTLE + "_REQ":
            return (0, d.default)({}, e, {
                isFetching: !0
            });

          case n.default.WISH_BOTTLE + "_SUC":
            return (0, d.default)({}, e, {
                isFetching: !1,
                hasNext: t.response.data.list.length >= a.default.WISH_BOTTLE_LIMIT,
                fetchFinished: !t.response.data.list.length,
                wishBottleList: (0, u.default)(e.wishBottleList, t.response.data.list),
                satisfied: t.response.data.satisfied
            });

          case n.default.GIFT_WISH_MUSIC + "_REQ":
            return (0, d.default)({}, e, {
                fetchFinished: !1,
                wishBottleList: []
            });

          default:
            return e;
        }
    }
});

module.exports = c;