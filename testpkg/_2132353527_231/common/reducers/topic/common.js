function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
    return Array.from(e);
}

function t(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, i = e(require("../../../frameBase/library/seamless-immutable/index")), s = e(require("../../const/actionType")), a = {
    topics: [],
    feeds: {}
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.default)(a), u = arguments[1], d = u.response;
    switch (u.type) {
      case s.default.FETCH_TOPICS + "_SUC":
        var f = d.data.list.map(function(e) {
            return n({}, e, {
                title: e.title.replace(/圈$/, "")
            });
        });
        return wx.xngGlobal.abTest.topic_region || (f = f.filter(function(e) {
            return "region" !== e.name;
        })), e.merge({
            topics: f
        });

      case s.default.FETCH_TOPIC_FEED + "_REQ":
        var o = u.topicId, c = e.feeds[o];
        return c = c ? n({}, c, {
            isFetching: !0
        }) : {
            ids: [],
            isFetching: !0,
            hasNext: !0,
            scrollTop: 0
        }, e.merge({
            feeds: e.feeds.merge(t({}, o, c))
        });

      case s.default.FETCH_TOPIC_FEED + "_SUC":
        var g = u.topicId, l = u.tagId, m = u.refresh, p = d.result, _ = e.feeds[g];
        return l && !p.length && m ? e.merge({
            feeds: e.feeds.merge(t({}, g, _.merge({
                ids: p,
                isFetching: !1,
                hasNext: !1
            })))
        }) : p.length ? e.merge({
            feeds: e.feeds.merge(t({}, g, _.merge({
                ids: m ? p : [].concat(r(_.ids), r(p)),
                isFetching: !1,
                hasNext: !0
            })))
        }) : e.merge({
            feeds: e.feeds.merge(t({}, g, _.merge({
                isFetching: !1,
                hasNext: !1
            })))
        });

      case s.default.FETCH_TOPIC_FEED + "_FAI":
        var h = u.topicId, E = e.feeds[h];
        return e.merge({
            feeds: e.feeds.merge(t({}, h, E.merge({
                isFetching: !1
            })))
        });

      case s.default.CLEAR_TOPIC_FEED:
        var v = u.topicId, I = e.feeds;
        return e.merge({
            feeds: I.without(v)
        });

      case s.default.SORT_TOPIC + "_REQ":
        var C = u.topicIds, F = e.topics, T = C.map(function(e) {
            return F.find(function(r) {
                return r.id === e;
            });
        });
        return e.merge({
            topics: T
        });

      case s.default.CHANGE_REGION + "_SUC":
        var O = e.topics, b = u.regionId, y = u.regionTitle, x = O.findIndex(function(e) {
            return "region" === e.name;
        });
        return e.merge({
            topics: O.update(x, function(e) {
                return e.merge({
                    tag_id: b,
                    title: y
                });
            })
        });

      default:
        return e;
    }
};