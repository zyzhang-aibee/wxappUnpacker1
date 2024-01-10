function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = e(require("../../../frameBase/library/seamless-immutable/index")), a = e(require("../../const/actionType")), t = (0, 
r.default)({
    sortType: [ {
        name: "",
        list: []
    } ],
    curTagIdx: 0,
    searchVal: ""
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t, r = arguments[1];
    switch (r.type) {
      case a.default.FETCH_ALBUM_TPL_GROUP + "_SUC":
        return e.merge({
            sortType: r.response.sort_type
        });

      case a.default.SET_CUR_TPL_TAG_IDX:
        return e.merge({
            curTagIdx: r.idx,
            searchVal: ""
        });

      case a.default.SET_TPL_SEARCH_VAL:
        return e.merge({
            curTagIdx: r.val ? -1 : 0,
            searchVal: r.val
        });

      default:
        return e;
    }
};