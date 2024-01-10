function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../../frameBase/library/seamless-immutable/index")), r = e(require("../../../const/actionType")), i = (0, 
t.default)({
    editType: "",
    insertIndex: 0,
    insertPhotoNum: 0
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i, t = arguments[1], n = e.insertPhotoNum;
    switch (t.type) {
      case r.default.SET_EDIT_TYPE:
        return e.merge({
            editType: t.editType
        });

      case r.default.SET_INSERT_INDEX:
        var s = t.insertIndex, u = void 0 === s ? 0 : s, d = t.isInsert, a = void 0;
        return a = t.reset ? 0 : d ? n + 1 : n - 1, e.merge({
            insertIndex: u,
            insertPhotoNum: a
        });

      default:
        return e;
    }
};