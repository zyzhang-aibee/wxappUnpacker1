function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, r) {
    return t = String(t), e && 0 !== e.length && e[t] ? (e[t].tmpRotate = ((e[t].tmpRotate || 0) + r) % 4, 
    e) : e;
}

var r = e(require("../const/actionType")), u = e(require("../../frameBase/utils/lodash.merge/index")), a = e(require("../../frameBase/utils/object-assign/index")), d = require("./discover/index"), l = e(require("./topic/index")), o = e(require("./albums")), s = e(require("./entities/index")), i = e(require("../reducers/specialPlay/index")), n = e(require("../reducers/produce/index")), f = e(require("../reducers/me")), c = e(require("../reducers/music")), p = e(require("../reducers/bottle")), _ = e(require("../reducers/play")), h = e(require("../reducers/ui")), m = e(require("./profiles")), E = require("../../frameBase/library/redux/index"), b = e(require("./global")), S = e(require("./albumStatus")), T = (0, 
E.combineReducers)({
    auth: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments[1];
        switch (t.type) {
          case r.default.WX_LOGIN + "_SUC":
          case r.default.LOGIN + "_SUC":
            return t.response.data ? t.response.data : e;

          default:
            return e;
        }
    },
    entities: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            cloudPhotoList: {},
            photoListForBrowser: {},
            photos: {},
            tpl: {},
            draftHistories: {},
            miniTpl: {}
        } : arguments[0], d = arguments[1];
        if (d.type === r.default.FETCH_MUSIC_LIST + "_SUC") return e;
        if (d.response && d.response.entities) return (0, u.default)({}, e, d.response.entities);
        var l = null;
        switch (d.type) {
          case r.default.CLEAN_HISTORY_DRAFT:
            return (0, u.default)({}, e, {
                draftHistories: {}
            });

          case r.default.PHOTO_ROTATE + "_REQ":
            return (0, u.default)({}, e, {
                photoListForBrowser: t(e.photoListForBrowser, d.photoId, 1),
                photos: t(e.photos, d.photoId, 1)
            });

          case r.default.PHOTO_ROTATE + "_FAI":
            return (0, u.default)({}, e, {
                photoListForBrowser: t(e.photoListForBrowser, d.photoId, 3),
                photos: t(e.photos, d.photoId, 3)
            });

          case r.default.PHOTO_DELETE + "_SUC":
            return l = (0, a.default)({}, e.photos), delete l[d.photoId], (0, a.default)({}, e, {
                photos: l
            });

          case r.default.PHOTOS_DELETE + "_SUC":
            return l = (0, a.default)({}, e.photos), d.photoIds.forEach(function(e) {
                delete l[e];
            }), (0, a.default)({}, e, {
                photos: l
            });

          default:
            return e;
        }
    },
    entities_: s.default,
    wx: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            loginState: r.default.WX_LOGIN_NOT
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case r.default.WX_LOGIN + "_SUC":
          case r.default.LOGIN + "_SUC":
            return (0, a.default)({}, e, (0, a.default)({}, t.response.data));

          default:
            return e;
        }
    },
    discover: d.discover,
    topic: l.default,
    albums: o.default,
    produce: n.default,
    me: f.default,
    music: c.default,
    bottle: p.default,
    play: _.default,
    reeditAlbumState: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            fetchCompareDraftStatus: "",
            compareDraft: {},
            reeditAlbumId: null,
            fetchReeditAlbumStatus: "",
            msg: ""
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case r.default.REEDIT_ALBUM + "_REQ":
          case r.default.REEDIT_ALBUM + "_SUC":
            return (0, a.default)({}, e, {
                fetchReeditAlbumStatus: t.type,
                msg: ""
            });

          case r.default.REEDIT_ALBUM + "_FAI":
            return (0, a.default)({}, e, {
                fetchReeditAlbumStatus: t.type,
                msg: t.response.msg
            });

          case r.default.REEDIT_COMPARE_DRAFT + "_SUC":
            return (0, u.default)({}, e, {
                fetchCompareDraftStatus: "success",
                compareDraft: t.response.data,
                reeditAlbumId: t.albumId
            });

          default:
            return e;
        }
    },
    ui: h.default,
    errorMessage: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], t = arguments[1], u = t.type, a = t.error;
        return u === r.default.RESET_ERROR_MESSAGE ? null : a ? t.error : e;
    },
    path: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], t = arguments[1];
        switch (t.type) {
          case r.default.SET_PAGE_PATH:
            return t.path;

          default:
            return e;
        }
    },
    specialPlay: i.default,
    general: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            banner_produce: {
                url: "",
                tpl_id: 1e5,
                enabled: !1
            },
            icon_tpl: {
                url: "",
                enabled: !1
            },
            icon_produce: {
                url: "",
                enabled: !1
            },
            icon_out_guide: {
                url: "",
                enabled: !1
            },
            banner_out_ad: {
                url: "",
                enabled: !1
            },
            banner_xbd: {
                appid: "",
                enabled: !1,
                jump_url: "",
                url: "",
                extraData: {}
            },
            hide_sensitive: {
                switch_off: !1,
                enabled: !1,
                code_ver: ""
            }
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case r.default.GET_GENERAL + "_SUC":
            return t.response.data ? t.response.data : e;

          default:
            return e;
        }
    },
    profiles: m.default,
    global: b.default,
    albumStatus: S.default
});

module.exports = T;