function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), u = e(require("../../const/actionType")), a = (0, 
t.default)([]);

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a, r = arguments[1], l = null;
    switch (r.type) {
      case u.default.ADD_ALBUM_PHOTO:
      case u.default.INSERT_ALBUM_PHOTO:
        return !r.photo.localId && e.indexOf(r.photo.id) < 0 ? ((l = [].concat(e)).push(r.photo.id), 
        (0, t.default)(l)) : e;

      default:
        return e;
    }
};