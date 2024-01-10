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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), s = e(require("../../const/actionType")), n = (0, 
t.default)({
    isFetching: !1,
    offset: "",
    idList: [],
    subIds: {}
}), i = function(e, t, s, n, i) {
    return e[t] || (e = e.merge(r({}, t, {}))), e = e[t].idList ? e.merge(r({}, t, e[t].merge({
        idList: e[t].idList.concat(s)
    }))) : e.merge(r({}, t, e[t].merge({
        idList: s
    }))), e = e.merge(r({}, t, e[t].merge({
        offset: i
    }))), e = e.merge(r({}, t, e[t].merge({
        more: n
    }))), e = e.merge(r({}, t, e[t].merge({
        btnType: n || -1
    })));
}, u = function(e, t) {
    return e.merge(r({}, t, e[t].merge({
        btnType: -e[t].btnType
    })));
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n, r = arguments[1];
    switch (r.type) {
      case s.default.FETCH_HISTORY_OUT_LIST + "_REQ":
        return e.merge({
            isFetching: !0
        });

      case s.default.FETCH_HISTORY_OUT_LIST + "_SUC":
        return e.merge({
            isFetching: !1,
            offset: r.response.offset,
            idList: e.idList.concat(r.response.result)
        });

      case s.default.FETCH_HISTORY_OUT_LIST + "_FAI":
        return e.merge({
            isFetching: !1
        });

      case s.default.FETCH_HISTORY_IN_LIST + "_SUC":
        return e.merge({
            subIds: i(e.subIds, r.id, r.response.result, r.response.more, r.response.offset)
        });

      case s.default.CHANGE_MORE_BTN:
        return e.merge({
            subIds: u(e.subIds, r.id)
        });

      case s.default.CLEAN_HISTORY_DRAFT:
        return n;

      default:
        return e;
    }
};