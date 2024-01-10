function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var s = arguments[r];
        for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
    }
    return e;
}, s = e(require("../../../frameBase/library/seamless-immutable/index")), t = e(require("../../const/actionType")), a = e(require("../../../frameBase/utils/array-union/index")), c = e(require("../../../common/const/common")), u = {
    hotSearchWords: [],
    searchUser: {
        niceUserList: [],
        hasNext: !0,
        isFetching: !0,
        hasFetched: !1
    },
    searchAlbum: {
        niceAlbumIdList: [],
        isFetching: !0,
        hasNext: !0,
        hasFetched: !1
    }
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.default)(u), n = arguments[1];
    switch (n.type) {
      case t.default.DISCOVER_SEARCH_ALBUM + "_REQ":
        return e.merge({
            searchAlbum: r({}, e.searchAlbum, {
                isFetching: !0
            })
        });

      case t.default.DISCOVER_SEARCH_ALBUM + "_SUC":
        return e.merge({
            searchAlbum: {
                isFetching: !1,
                niceAlbumIdList: (0, a.default)(e.searchAlbum.niceAlbumIdList, n.response.result),
                hasNext: n.response.result.length >= c.default.DISCOVER_SEARCH_LIMIT,
                hasFetched: !0
            }
        });

      case t.default.DISCOVER_SEARCH_ALBUM + "_FAI":
        return e.merge({
            searchAlbum: r({}, e.searchAlbum, {
                isFetching: !1,
                hasNext: !1
            })
        });

      case t.default.DISCOVER_SEARCH_All_RESET:
        var h = u.searchUser, i = u.searchAlbum;
        return e.merge({
            searchUser: r({}, h),
            searchAlbum: r({}, i)
        });

      case t.default.FETCH_HOT_WORDS + "_SUC":
        return e.merge({
            hotSearchWords: n.response.data.words
        });

      case t.default.DISCOVER_SEARCH_USER + "_REQ":
        return e.merge({
            searchUser: r({}, e.searchUser, {
                isFetching: !0
            })
        });

      case t.default.DISCOVER_SEARCH_USER + "_SUC":
        return e.merge({
            searchUser: {
                isFetching: !1,
                niceUserList: (0, a.default)(e.searchUser.niceUserList, n.response.data.list),
                hasNext: n.response.data.list.length >= c.default.SEARCH_USER_LIMIT,
                hasFetched: !0
            }
        });

      case t.default.DISCOVER_SEARCH_USER + "_FAI":
        return e.merge({
            searchUser: r({}, e.searchUser, {
                isFetching: !1,
                hasNext: !1
            })
        });

      default:
        return e;
    }
};