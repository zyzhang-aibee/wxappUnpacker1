function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), r = e(require("../../const/actionType")), u = (0, 
t.default)([]);

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, a = arguments[1];
    switch (a.type) {
      case r.default.SET_DISABLE_PHOTOS:
        return (0, t.default)(a.photoIds);

      default:
        return e;
    }
};