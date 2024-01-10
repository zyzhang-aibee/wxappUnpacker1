function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), a = e(require("../../const/index")), r = e(require("../../const/actionType")), u = e(require("../../const/actionTypes/entities/dynamics")), l = {
    text: "",
    material: {
        type: a.default.FEED_TYPE.PURE_TEXT,
        data: {}
    }
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, t.default)(l), i = arguments[1];
    switch (i.type) {
      case u.default.PUBLISH_DYNAMIC + "_REQ":
      case r.default.RESET_PUBLISH:
        return (0, t.default)(l);

      case r.default.SET_PUBLISH_TEXT:
        return e.merge({
            text: i.value
        });

      case r.default.ADD_ALBUM_MATERIAL:
        return e.merge({
            material: {
                type: a.default.FEED_TYPE.ALBUM,
                data: i.data
            }
        });

      case r.default.REMOVE_ALBUM_MATERIAL:
        return e.merge({
            text: "",
            material: l.material
        });

      default:
        return e;
    }
};