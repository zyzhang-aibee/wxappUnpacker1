function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), r = e(require("../../const/actionType")), n = (0, 
t.default)({
    currentPhotoIndex: null
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n, t = arguments[1];
    switch (t.type) {
      case r.default.SET_CURRENT_PHOTO_INDEX:
        return e.merge({
            currentPhotoIndex: t.index
        });

      case r.default.MOVE_UP_ALBUM_PHOTO:
        return e.merge({
            currentPhotoIndex: t.photoIndex - 1
        });

      case r.default.MOVE_DOWN_ALBUM_PHOTO:
        return e.merge({
            currentPhotoIndex: t.photoIndex + 1
        });

      default:
        return e;
    }
};