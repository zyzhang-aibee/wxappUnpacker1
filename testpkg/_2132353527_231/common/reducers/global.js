function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../frameBase/library/seamless-immutable/index")), r = e(require("../const/actionType")), i = (0, 
t.default)({
    isBigFontScheme: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i, t = arguments[1];
    switch (t.type) {
      case r.default.SET_FONT_SIZE:
        return e.merge({
            isBigFontScheme: t.isBigFont
        });

      default:
        return e;
    }
};