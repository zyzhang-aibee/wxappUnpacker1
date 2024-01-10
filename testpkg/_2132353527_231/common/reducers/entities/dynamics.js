function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a(e, a, r) {
    return a in e ? Object.defineProperty(e, a, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = r, e;
}

function r(e, r) {
    var d = e[r];
    if (!d) return e;
    var t = void 0, n = d.favor, i = n.has_favor, m = n.total;
    return t = i ? d.merge({
        favor: {
            total: m - 1,
            has_favor: 0
        }
    }) : d.merge({
        favor: {
            total: m + 1,
            has_favor: 1
        }
    }), e.merge(a({}, r, t));
}

function d(e, r) {
    var d = e[r];
    if (!d) return e;
    var t = void 0, n = d.comment_favor, i = n.has_favor, m = n.total;
    return t = i ? d.merge({
        comment_favor: {
            total: m - 1,
            has_favor: 0
        }
    }) : d.merge({
        comment_favor: {
            total: m + 1,
            has_favor: 1
        }
    }), e.merge(a({}, r, t));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var r = arguments[a];
        for (var d in r) Object.prototype.hasOwnProperty.call(r, d) && (e[d] = r[d]);
    }
    return e;
}, n = e(require("../../../frameBase/library/seamless-immutable/index")), i = e(require("../../const/actionType")), m = e(require("../../const/actionTypes/entities/dynamics")), c = (0, 
n.default)({});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c, n = arguments[1], s = n.type;
    if (n.response && n.response.entities && n.response.entities.dynamics) {
        var _ = t({}, e), u = t({}, n.response.entities.dynamics);
        for (var o in u) _[o] ? _[o] = t({}, _[o], u[o]) : _[o] = t({}, u[o]);
        return e.merge(t({}, _));
    }
    switch (s) {
      case m.default.RENAME_DYNAMIC + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            title: n.title
        })));

      case m.default.UPDATE_DYNAMIC_STORY + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            story: n.story
        })));

      case m.default.CHANGE_DYNAMIC_COVER + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            url: n.cover.imgUrl,
            cover: n.cover.id
        })));

      case m.default.DELETE_DYNAMIC + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            d: 1
        })));

      case m.default.RESTORE_DYNAMIC + "_SUC":
      case i.default.RESTORE_ARTICLE + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            d: 0
        })));

      case m.default.WIPE_DYNAMIC + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            d: 2
        })));

      case m.default.PUBLISH_DYNAMIC + "_SUC":
        var I;
        return e.merge((I = {}, a(I, n.dynamicId, e[n.dynamicId].merge(t({
            p: 1,
            s: 1
        }, n.data, {
            profile_id: n.response.data.id
        }))), a(I, n.response.data.id, e[n.dynamicId].merge(t({
            p: 1,
            s: 1
        }, n.data, {
            profile_id: n.response.data.id
        }))), I));

      case m.default.UN_PUBLISH_DYNAMIC + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            p: 0,
            s: 0
        })));

      case m.default.CHANGE_SHOW_DYNAMIC_AUTHOR + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            hide_u: n.isHide
        })));

      case m.default.ADD_DYNAMIC_FAVORITES + "_SUC":
      case m.default.GET_DYNAMIC_IS_FAVORITES + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            favoriteId: n.response.data._id
        })));

      case m.default.DELETE_DYNAMIC_FAVORITES + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            favoriteId: 0
        })));

      case m.default.DELETE_DYNAMIC_FAVORITES_LIST + "_SUC":
        var f = e;
        return n.dynamicIds.forEach(function(r) {
            f = e.merge(a({}, r, e[r].merge({
                favoriteId: 0
            })));
        }), f;

      case m.default.LIKE_DYNAMIC + "_REQ":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            favor: {
                has_favor: 1,
                total: e[n.dynamicId].favor.total + 1
            }
        })));

      case m.default.UNLIKE_DYNAMIC + "_REQ":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            favor: {
                has_favor: 0,
                total: e[n.dynamicId].favor.total - 1
            }
        })));

      case m.default.REMOVE_DYNAMIC_COMMENT + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            commentIds: e[n.dynamicId].commentIds.filter(function(e) {
                return e !== n.cid;
            }),
            comment_count: e[n.dynamicId].comment_count - 1
        })));

      case m.default.GET_DYNAMIC_TPL_MUSIC + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            albumDetail: n.response.data
        })));

      case m.default.UPDATE_SHARE_COUNT:
        return e[n.dynamicId].hasShare ? e : e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            share: (e[n.dynamicId].share || 0) + 1,
            hasShare: 1
        })));

      case m.default.UPDATE_PLAY_COUNT:
        return e[n.dynamicId].hasPlay ? e : e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            views: (e[n.dynamicId].views || 0) + 1,
            hasPlay: 1
        })));

      case m.default.COMPLAINT_DYNAMIC + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            isComplainted: !0
        })));

      case m.default.MODIFY_DYNAMIC + "_SUC":
      case m.default.UPDATE_DYNAMIC + "_SUC":
        return e.merge(a({}, n.dynamicId, e[n.dynamicId].merge(t({}, n.response.data, {
            album_id: n.response.data.id,
            albumDetail: void 0
        }))));

      case m.default.ADD_DYNAMIC_COMMENT + "_SUC":
        var l = e[n.dynamicId].commentIds || [];
        return l = [ n.response.data.profile_cid ].concat(l), e.merge(a({}, n.dynamicId, e[n.dynamicId].merge({
            commentIds: l,
            comment_count: e[n.dynamicId].comment_count + 1
        })));

      case i.default.COMMIT_ARTICLE + "_SUC":
        var y = n.response.data.profile_id;
        return e.merge(a({}, y, t({}, n.data, {
            profile_id: y
        })));

      case i.default.COMMIT_MODIFY_ARTICLE + "_SUC":
        return e.merge(a({}, n.data.dynamicId, t({}, e[n.data.dynamicId], n.data)));

      case i.default.ADD_FAVOR + "_SUC":
      case i.default.MINUS_FAVOR + "_SUC":
        var C = n.id;
        return r(e, C);

      case i.default.FAVOR_COMMENT + "_REQ":
      case i.default.UN_FAVOR_COMMENT + "_REQ":
        var g = n.dynamicId;
        return d(e, g);

      case i.default.FETCH_ALBUM_STATUS + "_SUC":
        var v = void 0, A = void 0, E = n.response, S = E.result, M = E.entities.albumList, U = Object.values(t({}, e)).filter(function(e) {
            return S.indexOf(e.album_id) >= 0 || S.indexOf(e.id) >= 0;
        });
        return U.length ? (U.forEach(function(e) {
            A = e.album_id || e.id, v = e.profile_id || e.id;
        }), e.merge(a({}, v, t({}, e[v], {
            status: M[A].status
        })))) : e;

      case i.default.FETCH_IF_CAN_MAKE_SAME + "_SUC":
        var D = n.dynamicId, T = n.response;
        return e.merge(a({}, D, t({}, e[D], {
            canMakeSame: T.data.can_same
        })));

      default:
        return e;
    }
};