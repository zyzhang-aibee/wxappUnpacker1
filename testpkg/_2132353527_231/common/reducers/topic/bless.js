function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function t(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
    return Array.from(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
}, i = e(require("../../../frameBase/library/seamless-immutable/index")), n = e(require("../../const/actionType")), l = require("../../const/topic/bless"), d = {
    info: null,
    tag: {},
    feed: {}
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.default)(d), s = arguments[1], f = s.response;
    switch (s.type) {
      case n.default.FETCH_BLESS_TOPIC + "_SUC":
        var g = f.data, o = a({}, g), u = o.tag_list;
        delete o.tag_list;
        var c = [ {
            id: l.ALL_TAG_ID,
            title: "全部"
        } ].concat(t(u)), _ = a({}, o, {
            tags: c
        }), T = e.tag;
        return -1 === u.findIndex(function(e) {
            return e.id === T.id;
        }) && (T = _.tags[0]), e.merge({
            info: _,
            tag: T
        });

      case n.default.CHECK_BLESS_TOPIC_TAG:
        var m = s.tag, E = s.scrollTop, p = e.tag, v = e.feed[p.id];
        return v ? e.merge({
            tag: m,
            feed: e.feed.merge(r({}, p.id, v.merge({
                scrollTop: E
            })))
        }) : (wx.xngGlobal.xu.logger.logAll("topicMerge", {
            oldId: p.id,
            feed: JSON.stringify(e.feed)
        }), e);

      case n.default.FETCH_BLESS_TOPIC_FEED + "_REQ":
        var A = s.isAllTag ? l.ALL_TAG_ID : s.tagId, I = e.feed[A];
        return I = I ? a({}, I, {
            isFetching: !0
        }) : {
            ids: [],
            isFetching: !0,
            hasNext: !0,
            scrollTop: 0
        }, e.merge({
            feed: e.feed.merge(r({}, A, I))
        });

      case n.default.FETCH_BLESS_TOPIC_FEED + "_SUC":
        var C = s.refresh, S = s.isAllTag ? l.ALL_TAG_ID : s.tagId, h = f.result, y = e.feed[S];
        return e.merge({
            feed: e.feed.merge(r({}, S, y.merge({
                ids: C ? h : [].concat(t(y.ids), t(h)),
                isFetching: !1
            })))
        });

      case n.default.FETCH_BLESS_TOPIC_FEED + "_FAI":
        var F = s.tagId, b = e.feed[F];
        return e.merge({
            feed: e.feed.merge(r({}, F, b.merge({
                isFetching: !1
            })))
        });

      default:
        return e;
    }
};