function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e) {
    if (Array.isArray(e)) {
        for (var r = 0, s = Array(e.length); r < e.length; r++) s[r] = e[r];
        return s;
    }
    return Array.from(e);
}

function s(e, r, s) {
    return r in e ? Object.defineProperty(e, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = s, e;
}

function i(e, r, s) {
    var i = t.default.asMutable(e[s].ids), n = i.indexOf(r);
    return -1 !== n && i.splice(n, 1), i;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), n = e(require("../../const/actionType")), d = e(require("../../const/actionTypes/entities/dynamics")), c = require("../../const/index"), a = {
    discoverFollow: {
        ids: [],
        isFetching: !1,
        lastTime: -1,
        hasNext: !0
    },
    discoverRecommend: {
        ids: [],
        isFetching: !1,
        hasNext: !0
    },
    shareRecommend: [ {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    }, {
        ids: [],
        isFetching: !1,
        hasNext: !0
    } ],
    curComment: null
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, t.default)(a), o = arguments[1];
    switch (o.type) {
      case n.default.FETCH_FEED + "_REQ":
        return e.merge({
            discoverFollow: e.discoverFollow.merge({
                isFetching: !0
            })
        });

      case n.default.FETCH_FEED + "_SUC":
        var m = o.response, l = m.result, g = m.lastTime;
        return e.merge({
            discoverFollow: e.discoverFollow.merge({
                ids: e.discoverFollow.ids.concat(l),
                isFetching: !1,
                hasNext: !!g,
                lastTime: g
            })
        });

      case n.default.FETCH_FEED + "_FAI":
        return e.merge({
            discoverFollow: e.discoverFollow.merge({
                isFetching: !1
            })
        });

      case n.default.FETCH_FEED_RECOMMEND + "_REQ":
        var u = o.listName, F = o.pageIndex, h = e[u];
        return "shareRecommend" === u ? h[F] ? e.merge(s({}, u, h.set(F, h[F].merge({
            isFetching: !0
        })))) : (wx.xngGlobal.xu.logger.logAll("recommendMerge", {
            pageIndex: F,
            listState: JSON.stringify(h)
        }), e) : e.merge(s({}, u, h.merge({
            isFetching: !0
        })));

      case n.default.FETCH_FEED_RECOMMEND + "_SUC":
        var E = o.listName, v = o.pageIndex, _ = o.refresh, f = o.response.result, N = e.merge({}), R = N[E];
        return N = "shareRecommend" === E ? N.merge(s({}, E, R.set(v, R[v].merge({
            ids: _ ? f : R[v].ids.concat(f),
            isFetching: !1
        })))) : N.merge(s({}, E, R.merge({
            ids: _ ? f : R.ids.concat(f),
            isFetching: !1
        })));

      case n.default.FETCH_FEED_RECOMMEND + "_FAI":
        var C = o.listName, x = o.pageIndex, M = e[C];
        return "shareRecommend" === C ? e.merge(s({}, C, M.set(x, M[x].merge({
            isFetching: !1
        })))) : e.merge(s({}, C, M.merge({
            isFetching: !1
        })));

      case n.default.CLEAR_FEED_RECOMMEND:
        var D = o.listName, T = o.pageIndex, p = e[D];
        return "shareRecommend" === D ? e.merge(s({}, D, p.set(T, p[T].merge({
            ids: [],
            isFetching: !1,
            hasNext: !0
        })))) : e.merge(s({}, D, p.merge({
            ids: [],
            isFetching: !1,
            hasNext: !0
        })));

      case n.default.INSERT_TO_DISCOVER_RECOMMEND:
        var I = o.dynamic;
        return !I.p || I.d || I.disabled || I.ban ? e : e.merge({
            discoverRecommend: e.discoverRecommend.merge({
                ids: [ I.id ].concat(r(e.discoverRecommend.ids.filter(function(e) {
                    return e !== I.id;
                })))
            })
        });

      case d.default.UN_PUBLISH_DYNAMIC + "_REQ":
        var w = o.dynamicId;
        return e.merge({
            discoverFollow: e.discoverFollow.merge({
                ids: i(e, w, "discoverFollow")
            }),
            discoverRecommend: e.discoverRecommend.merge({
                ids: i(e, w, "discoverRecommend")
            })
        });

      case n.default.CLEAR_FEED:
        return e.merge({
            discoverFollow: e.discoverFollow.merge({
                ids: [],
                isFetching: !1,
                hasNext: !0
            })
        });

      case d.default.FETCH_SINGLE_DYNAMIC + "_SUC":
        var y = o.response.entities.dynamics[o.response.result[0]], A = o.insertToDiscoverRecommend, O = e.merge({}), b = y.p && !y.d && !y.disabled && !y.ban;
        return A && y.type === c.FEED_TYPE.ALBUM && b && (O = O.merge({
            discoverRecommend: O.discoverRecommend.merge({
                ids: [ y.id ].concat(r(O.discoverRecommend.ids.filter(function(e) {
                    return e !== y.id;
                })))
            })
        })), O;

      case n.default.SET_CUR_DYNAMIC_COMMENT:
        var S = o.comment;
        return e.merge({
            curComment: S
        });

      case n.default.CLEAR_CUR_DYNAMIC_COMMENT:
        return e.merge({
            curComment: null
        });

      case n.default.DEL_RECOMMEND_ITEM:
        return e.merge({
            discoverRecommend: e.discoverRecommend.merge({
                ids: [].concat(r(e.discoverRecommend.ids.filter(function(e) {
                    return e !== o.did;
                })))
            })
        });

      case d.default.PUBLISH_DYNAMIC + "_SUC":
        return e.merge({
            discoverFollow: {
                ids: [],
                isFetching: !1,
                lastTime: -1,
                hasNext: !0
            }
        });

      default:
        return e;
    }
};