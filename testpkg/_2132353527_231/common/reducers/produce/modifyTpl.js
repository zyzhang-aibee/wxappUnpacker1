function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("../../../frameBase/library/seamless-immutable/index")), o = e(require("../../const/actionType")), r = (0, 
t.default)({
    tpl_id: 1e5,
    photosLength: 50,
    fontColor: "ffffff",
    model: 0,
    title: "",
    hasVideo: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r, t = arguments[1];
    switch (t.type) {
      case o.default.GET_ALBUM_DRAFT_DETAIL + "_SUC":
        return e.merge({
            tpl_id: t.response.data.tpl_id,
            photosLength: t.response.data.ids.length + t.response.data.has_del_imgs,
            fontColor: t.response.data.fcor,
            model: t.response.data.model || 0,
            hasVideo: t.response.data.has_video,
            title: t.response.data.title
        });

      case o.default.MODIFY_TPL_ID:
        return t.tplId === e.tpl_id ? e : e.merge({
            tpl_id: t.tplId,
            model: 0
        });

      case o.default.MODIFY_TPL_FONT_COLOR:
        return e.merge({
            fontColor: t.fontColor
        });

      case o.default.MODIFY_TPL_MODEL:
        return e.merge({
            model: t.model
        });

      default:
        return e;
    }
};