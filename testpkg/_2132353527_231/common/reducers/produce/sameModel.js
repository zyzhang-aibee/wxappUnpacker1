function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), r = e(require("../../const/actionType")), a = (0, 
t.default)({
    isNoMusic: !1,
    isShow: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a, t = arguments[1];
    switch (t.type) {
      case r.default.SAVE_ALBUM_MUSIC + "_REQ":
        return wx.xngGlobal.needShowSameModelAlert = !0, e.merge({
            isShow: !0
        });

      case r.default.SAVE_ALBUM_MUSIC + "_SUC":
        var s = t.response.data.list;
        return e.merge({
            isNoMusic: !s.length
        });

      case r.default.HIDE_SAME_MODEL_VIEW:
      case r.default.SET_ALBUM_TPL:
      case r.default.SET_ALBUM_MUSICS:
        return a;

      case r.default.SET_RECOMMEND_TPL:
        return e.merge({
            isShow: !0,
            isNoMusic: !0
        });

      case r.default.SET_TPL_WITHOUT_MUSIC:
        return wx.xngGlobal.needShowSameModelAlert = !0, e.merge({
            isShow: !0,
            isNoMusic: !0
        });

      default:
        return e;
    }
};