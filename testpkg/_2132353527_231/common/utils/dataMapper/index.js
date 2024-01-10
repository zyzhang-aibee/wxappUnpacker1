function e(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
}, r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../underscore")), a = function(e) {
    if (!r.default.isString(e)) return [];
    var t = void 0, a = void 0;
    return e && (t = e.replace(/(\u2028|)/g, ""), a = /[\n]|[\r][\n]/.test(t) ? t.split("\n") : [ t ]), 
    a;
}, l = function() {
    var l, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return {
        id: d.id,
        lid: d.lid,
        title: d.title,
        views: d.views,
        d: d.d,
        ban: d.ban,
        theme: 200532 === d.tpl_id || 200532 === d.stpl_id ? 100 : 0,
        story: {
            text: d.story,
            slice: a(d.story),
            unfold: !1,
            overflow: !1,
            xngSay: d.recomm
        },
        time: {
            ct: d.ct
        },
        publishStatus: d.s,
        cover: t({}, i.cover, (l = {
            id: d.cover,
            isVert: d.w / d.h <= 1
        }, e(l, "vp@" + n.coverSize, Math.floor(2 * d.w * 100 / (3 * d.h))), e(l, "url@" + n.coverSize, d.url), 
        e(l, "banUrl", d.ban_url), l)),
        video: {
            vid: d.vid,
            url: r.default.isString(d.v_url) ? d.v_url.replace("http:", "https:") : "",
            cdn: d.cdn,
            poster: d.url,
            isUnread: d.is_unread,
            status: d.status,
            pushTime: d.lnt
        },
        tpl: {
            id: d.tpl_id,
            sid: d.stpl_id,
            type: d.tpl_type
        },
        profile: {
            id: d.profile_id,
            mid: d.mid
        }
    };
}, i = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
    return {
        has_favor: t && t.favor ? t.favor.has_favor : r.default.deepObjectVal(e, [ "favor", "has_favor" ]),
        total: t && t.total ? t.favor.total : r.default.deepObjectVal(t, [ "favors_count" ]) || r.default.deepObjectVal(e, [ "favor", "total" ]) || 0
    };
}, d = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
    return {
        mid: r.default.deepObjectVal(t, [ "mid" ]) || r.default.deepObjectVal(e, [ "mid" ]),
        nick: r.default.deepObjectVal(t, [ "nick" ]) || r.default.deepObjectVal(e, [ "nick" ]),
        name: r.default.deepObjectVal(t, [ "producer" ]) || r.default.deepObjectVal(e, [ "producer" ]),
        hurl: r.default.deepObjectVal(t, [ "hurl" ]) || r.default.deepObjectVal(e, [ "hurl" ]),
        isHide: t ? t.hide_u : e.hide_u
    };
};

module.exports = {
    mapAlbumData: l,
    albumMapper: function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = {};
        return t ? (Object.keys(t).forEach(function(i) {
            a[i] = l(e[i], t[i], r);
        }), a) : a;
    },
    albumFavorMapper: function(e, t) {
        var r = {};
        return Object.keys(t).forEach(function(a) {
            r[a] = i(e[a], t[a]);
        }), r;
    },
    albumUserMapper: function(e, t, r) {
        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return t.mid ? d(e[t.mid], t, a) : null;
    }
};