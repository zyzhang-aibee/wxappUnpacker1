function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function r(e, r, n, a) {
    var i = r.mid, s = e[i] || {};
    return Object.assign({}, e, t({}, i, d({}, s, t({}, n, d({}, s[n], {
        isFetching: a
    })))));
}

function n(e, r, n) {
    var a = r.mid, i = r.response, s = i.result, u = i.entities, c = i.nextT, l = e[a], o = d({}, e, t({}, a, d({}, l, t({}, n, d({}, l[n], {
        list: l[n].list ? (0, f.default)(l[n].list, s) : s,
        isFetching: !1,
        hasNext: s.length >= _.default.FETCH_PROFILE_LIST_LIMIT,
        nextT: c
    })))));
    return "dynamics" === n ? o.dynamicEntities = d({}, e.dynamicEntities, u[n]) : "products" === n && (o.productEntities = d({}, e.productEntities, u[n])), 
    o;
}

function a(e, r, n) {
    if (!e[r]) return e;
    var a = d({}, e[r]);
    return a[n].has_favor ? (a[n].has_favor = 0, a[n].total--) : (a[n].has_favor = 1, 
    a[n].total++), d({}, e, t({}, r, a));
}

function i(e) {
    var r = wx.xngGlobal.xu.mid, n = e[r] || {};
    return Object.assign({}, e, t({}, r, d({}, n, {
        dynamics: d({}, n.dynamics, {
            list: [],
            hasNext: !0,
            isFetching: !1,
            nextT: null
        }),
        products: d({}, n.dynamics, {
            list: [],
            hasNext: !0,
            isFetching: !1,
            nextT: null
        })
    })));
}

function s(e, r) {
    var n = wx.xngGlobal.xu.mid, a = e[n];
    if (!a) return e;
    var i = a.dynamics, s = a.products, u = i.list.filter(function(e) {
        return e !== r;
    }), c = s && Array.isArray(s.list) ? s.list.filter(function(e) {
        return e !== r;
    }) : [];
    return Object.assign({}, e, t({}, n, d({}, a, {
        dynamics: d({}, a.dynamics, {
            list: u
        }),
        products: d({}, a.products, {
            list: c
        })
    })));
}

function u(e, t, r) {
    e && (/万$/.test(e[t]) || (e[t] = +e[t] + r));
}

function c(e, r, n) {
    var a, i = wx.xngGlobal.xu.mid, s = e[r] || {}, c = e[i] || {}, l = d({}, s.userInfo), o = d({}, c.userInfo);
    return n ? (u(o, "follow", 1), u(l, "follower", 1), l.is_follow = 1) : (u(o, "follow", -1), 
    u(l, "follower", -1), l.is_follow = 0), d({}, e, (a = {}, t(a, r, d({}, e[r], {
        userInfo: l
    })), t(a, i, d({}, e[i], {
        userInfo: o
    })), a));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
}, l = e(require("../const/actionType")), o = e(require("../const/actionTypes/entities/dynamics")), _ = e(require("../const/common")), f = e(require("../../frameBase/utils/array-union/index")), E = {
    dynamicEntities: {},
    productEntities: {}
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E, u = arguments[1];
    switch (u.type) {
      case l.default.FETCH_PROFILE_DYNAMICS + "_REQ":
        return r(e, u, "dynamics", !0);

      case l.default.FETCH_PROFILE_DYNAMICS + "_SUC":
        return n(e, u, "dynamics");

      case l.default.FETCH_PROFILE_DYNAMICS + "_FAI":
        return r(e, u, "dynamics", !1);

      case l.default.FETCH_PROFILE_PRODUCTS + "_REQ":
        return r(e, u, "products", !0);

      case l.default.FETCH_PROFILE_PRODUCTS + "_SUC":
        return n(e, u, "products");

      case l.default.FETCH_PROFILE_PRODUCTS + "_FAI":
        return r(e, u, "products", !1);

      case l.default.FAVOR_COMMENT + "_SUC":
      case l.default.UN_FAVOR_COMMENT + "_SUC":
        var _ = u.dynamicId, f = e.dynamicEntities;
        return d({}, e, {
            dynamicEntities: a(f, _, "comment_favor")
        });

      case l.default.ADD_FAVOR + "_SUC":
      case l.default.MINUS_FAVOR + "_SUC":
        var C = u.id, I = e.dynamicEntities, O = e.productEntities;
        return d({}, e, {
            dynamicEntities: a(I, C, "favor"),
            productEntities: a(O, C, "favor")
        });

      case o.default.LIKE_DYNAMIC + "_SUC":
      case o.default.UNLIKE_DYNAMIC + "_SUC":
        var S = u.dynamicId, m = e.dynamicEntities, U = e.productEntities;
        return d({}, e, {
            dynamicEntities: a(m, S, "favor"),
            productEntities: a(U, S, "favor")
        });

      case o.default.PUBLISH_DYNAMIC + "_SUC":
      case o.default.DELETE_DYNAMIC + "_SUC":
      case o.default.RESTORE_DYNAMIC + "_SUC":
      case o.default.CHANGE_DYNAMIC_COVER + "_SUC":
      case o.default.COMMIT_DYNAMIC + "_SUC":
      case o.default.UPDATE_DYNAMIC + "_SUC":
      case l.default.RESTORE_ARTICLE + "_SUC":
        return i(e);

      case o.default.ADD_DYNAMIC_COMMENT + "_SUC":
        return u.is_into_profile ? i(e) : e;

      case o.default.UN_PUBLISH_DYNAMIC + "_SUC":
      case l.default.DISABLE_PROFILE_COMMENT + "_SUC":
      case l.default.DEL_SELF_COMMENT + "_SUC":
        return s(e, u.dynamicId);

      case l.default.FETCH_PROFILE + "_SUC":
        var y = u.mid, F = u.response, T = e[y];
        return d({}, e, t({}, y, d({}, T, {
            userInfo: F.user
        })));

      case l.default.DESTROY_PROFILE:
        var M = u.mid, p = d({}, e);
        return delete p[M], d({}, p);

      case l.default.FOLLOW_USER + "_SUC":
        return c(e, u.mid, !0);

      case l.default.UNFOLLOW_USER + "_SUC":
        return c(e, u.mid, !1);

      default:
        return e;
    }
};