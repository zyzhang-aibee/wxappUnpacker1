function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), r = e(require("../../const/actionType")), s = (0, 
t.default)({
    tplSortList: [],
    sortIndex: 0
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s, t = arguments[1];
    switch (t.type) {
      case r.default.SET_TPL_SORT_LIST:
        return e.merge({
            tplSortList: t.tplSortList
        });

      case r.default.SET_CUR_TPL_SORT_INDEX:
        return e.merge({
            sortIndex: t.sortIndex
        });

      default:
        return e;
    }
};