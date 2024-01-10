function e(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
    return Array.from(e);
}

function r(e) {
    var r = ++c;
    return function() {
        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
        var i = u[r], s = !1;
        if (i) {
            var a = i.params;
            s = n.length === a.length && !a.some(function(e, r) {
                return n[r] !== a[r];
            });
        }
        if (!s) {
            i || (i = {});
            var c = e.apply(void 0, n);
            Object.assign(i, {
                params: n,
                ret: c
            }), u[r] = i;
        }
        return i.ret;
    };
}

function t(e, r) {
    return e && e.commentIds ? e.commentIds.map(function(e) {
        return r[e];
    }) : null;
}

function n(e, r, n) {
    return e && e.length > 0 && r ? e.map(function(e) {
        return r[e] ? n ? i({}, r[e], {
            comments: t(r[e], n.commentEntities)
        }) : r[e] : e;
    }) : [];
}

function o(r, t) {
    var n = s.default.getAdTypeAndConfig(), o = n.adType, i = n.adConfig;
    if ("none" === o) return t;
    var c = i.feeds;
    if (Array.isArray(c)) {
        if (!c.includes(r)) return t;
    } else if ("all" !== c && r !== a.TOPIC_NAMES.RECOMMEND) return t;
    var u = (t = [].concat(e(t))).length, l = i.fetch, d = i.seat, m = 4 * (l || 1);
    if (u) for (var p = d; p < u - 1 + u / m; p += m + 1) t[p] && t[p] !== o && t.splice(p, 0, o);
    return t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getArticleDynamic = exports.getSingleDynamic = exports.getBlessAlbumList = exports.getTopicAlbumList = exports.getShareRecommendList = exports.getDiscoverRecommendList = exports.getDiscoverFollowList = exports.FeedUIMgr = exports.getSwiperBannerWH = void 0;

var i = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
};

exports.mapSingleDynamicComment = t, exports.mapList = n, exports.insertAdToFeed = o;

var s = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../pages/discover/components/ad/adUtils")), a = require("../../../pages/discover/components/tab-bar/config"), c = 0, u = {};

exports.getSwiperBannerWH = function(e) {
    var r = e - 40;
    return {
        width: r,
        height: Math.floor(r / 3 * 2)
    };
}, exports.FeedUIMgr = {
    dynamic: null,
    hasDelFavorite: !1
}, exports.getDiscoverFollowList = r(function(r, t, o) {
    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], s = r.discoverFollow.ids;
    return i && s.length && (s = [].concat(e(s))).splice(5, 0, "weakFriend"), n(s, t, o);
}), exports.getDiscoverRecommendList = r(function(e, r, t) {
    var i = e.discoverRecommend.ids;
    return i = o(a.TOPIC_NAMES.RECOMMEND, i), n(i, r, t);
}), exports.getShareRecommendList = r(function(e, r, t, o) {
    var i = e.shareRecommend;
    return i[o] ? n(i[o].ids, r, t) : [];
}), exports.getTopicAlbumList = r(function(e, r, t, i) {
    return n(o(e, (r[t] || {
        ids: []
    }).ids), i);
}), exports.getBlessAlbumList = r(function(e, r) {
    var t = e.tag, i = e.feed[t.id] || {
        ids: []
    };
    return n(o(a.TOPIC_NAMES.BLESS, i.ids), r);
}), exports.getSingleDynamic = r(function(e, r, n) {
    var o = r[e];
    return o ? i({}, o, {
        comments: t(r[e], n.commentEntities)
    }) : null;
}), exports.getArticleDynamic = r(function(e, r, n) {
    var o = r[e];
    return o ? (o.t || (o.t = o.ct), void 0 === o.hide_u && (o.hide_u = o.producer && o.producer.is_hide ? 1 : 0), 
    i({}, o, {
        comments: t(o, n.commentEntities)
    })) : null;
});