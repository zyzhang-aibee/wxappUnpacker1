function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.draftDefaultState = void 0;

var o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
}, r = e(require("../../../../frameBase/library/seamless-immutable/index")), d = e(require("../../../../frameBase/utils/array-find-index/index")), u = e(require("../../../../frameBase/utils/lodash.unionby/index")), s = e(require("../../../const/actionType")), n = e(require("../../../const/actionTypes/entities/dynamics")), a = require("../../../../common/const/common"), i = require("../../../../common/others/utils"), c = exports.draftDefaultState = (0, 
r.default)({
    photos: [],
    subtitles: [],
    fcor: "",
    decorations: {},
    title: "小年糕影集",
    story: "",
    producer: "",
    hideProducer: !1,
    music: [],
    tpl_id: a.TPL_TYPE.RANDOM,
    model: 0,
    videoNum: 0,
    cover: {
        id: 0
    },
    ver: 0
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c, r = arguments[1], p = r.type, l = {}, h = e.videoNum || 0, f = {}, _ = {}, m = {}, T = void 0, O = void 0, v = void 0, E = {};
    switch (p) {
      case s.default.FETCH_ALBUM_DRAFT + "_SUC":
      case s.default.RECOVER_DRAFT_HISTORY:
        return r.draft && (r.response = {}, r.response.data = r.draft), _ = r.response.data, 
        _.photos = _.photos || [], _.photos = _.photos.map(function(e) {
            return e.ty && 6 === e.ty && (h += 1), _.decorations ? o({}, e, {
                decorate: _.decorations[e.id] || []
            }) : e;
        }), _.videoNum = h, _.producer || (_.producer = wx.xngGlobal.xu.user ? wx.xngGlobal.xu.user.nick : ""), 
        e.merge(o({}, _));

      case s.default.PUSH_ALBUM_DRAFT + "_SUC":
        return r.response.data && 1 === r.response.data.ok ? e.merge({
            ver: r.response.data.ver
        }) : e;

      case s.default.ADD_ALBUM_PHOTO:
        return l = [].concat(e.photos), r.photo && 6 === r.photo.ty && (h += 1), l.push(r.photo), 
        e.merge({
            photos: l,
            videoNum: h
        });

      case s.default.INSERT_ALBUM_PHOTO:
        return l = [].concat(e.photos), r.photo && 6 === r.photo.ty && (h += 1), l.splice(r.index, 0, r.photo), 
        e.merge({
            photos: l,
            videoNum: h
        });

      case s.default.REMOVE_ALBUM_PHOTO:
        return m = e.cover, e.cover.id === r.photo.id && (m = {
            id: 0
        }), l = e.photos.filter(function(e) {
            return e.id !== r.photo.id;
        }), r.photo && 6 === r.photo.ty && (h -= 1), v = o({}, e.decorations, t({}, r.photo.id, [])), 
        e.merge({
            photos: l,
            cover: m,
            videoNum: h,
            decorations: v
        });

      case s.default.PHOTO_DELETE + "_SUC":
        return m = e.cover, e.cover.id === r.photoId && (m = {
            id: 0
        }), l = e.photos.filter(function(e) {
            return e.id === r.photoId && 6 === e.ty && (h -= 1), e.id !== r.photoId;
        }), e.merge({
            photos: l,
            cover: m,
            videoNum: h
        });

      case s.default.PHOTOS_DELETE + "_SUC":
        return m = e.cover, r.photoIds.indexOf(e.cover.id) > -1 && (m = {
            id: 0
        }), l = e.photos.filter(function(e) {
            var t = r.photoIds.indexOf(e.id);
            return t > -1 && 6 === e.ty && (h -= 1), t < 0;
        }), e.merge({
            photos: l,
            cover: m,
            videoNum: h
        });

      case s.default.REMOVE_ALBUM_PHOTOS:
        return m = e.cover, l = e.photos.filter(function(t) {
            var o = r.photoIds.indexOf(t.id) < 0;
            return o || 6 !== t.ty || (h -= 1), t.id === e.cover.id && (m = {
                id: 0
            }), o;
        }), e.merge({
            photos: l,
            cover: m,
            videoNum: h
        });

      case s.default.REMOVE_ALBUM_PHOTOS_ALL:
        return e.merge({
            photos: [],
            videoNum: 0,
            cover: {
                id: 0
            }
        });

      case s.default.MOVE_UP_ALBUM_PHOTO:
        return l = [].concat(e.photos), r.photoIndex > 0 && r.photoIndex < l.length ? (f = l[r.photoIndex], 
        l[r.photoIndex] = l[r.photoIndex - 1], l[r.photoIndex - 1] = f, e.merge({
            photos: l
        })) : e;

      case s.default.MOVE_DOWN_ALBUM_PHOTO:
        return l = [].concat(e.photos), r.photoIndex >= 0 && r.photoIndex < l.length - 1 ? (f = l[r.photoIndex], 
        l[r.photoIndex] = l[r.photoIndex + 1], l[r.photoIndex + 1] = f, e.merge({
            photos: l
        })) : e;

      case s.default.SET_ALBUM_TITLE:
        return e.title === r.title ? e : e.merge({
            title: r.title
        });

      case s.default.SET_ALBUM_HIDE_PRODUCER:
        return e.hideProducer === r.hideProducer ? e : e.merge({
            hideProducer: r.hideProducer
        });

      case s.default.SET_ALBUM_PRODUCER:
        return e.producer === r.producer ? e : e.merge({
            producer: r.producer
        });

      case s.default.SET_SUBTITLES_COLOR:
        return e.fcor === r.fcor ? e : e.merge({
            fcor: r.fcor
        });

      case s.default.SET_TPL_MODEL:
        return e.model === r.model ? e : e.merge({
            model: r.model
        });

      case s.default.SET_ALBUM_TPL:
        return r.tplId === e.tpl_id ? e : e.merge({
            tpl_id: r.tplId,
            model: 0
        });

      case s.default.SET_ALBUM_STORY:
        return e.merge({
            story: r.story
        });

      case s.default.SET_ALBUM_COVER:
        return e.merge({
            cover: r.cover
        });

      case s.default.SET_ALBUM_PHOTO_SUBTITLE:
        return (T = (0, d.default)(e.subtitles, function(e) {
            return e.id === r.photoId;
        })) >= 0 && e.subtitles[T].txt === r.text ? e : (O = [].concat(e.subtitles), T >= 0 && O.splice(T, 1), 
        O.push({
            id: r.photoId,
            txt: r.text
        }), e.merge({
            subtitles: O
        }));

      case s.default.SET_ALBUM_MUSICS:
        return e.merge({
            music: r.musics.filter(function(e) {
                return e;
            })
        });

      case s.default.REEDIT_ALBUM + "_SUC":
        return _ = o({}, r.response.data), _.subtitles = _.ids.map(function(e) {
            return {
                id: e.id,
                txt: e.txt || ""
            };
        }), h = 0, _.photos = _.ids.map(function(e) {
            return 6 === e.ty && (h += 1), o({}, e, {
                txt: void 0
            });
        }), _.videoNum = h, _.ids = void 0, _.tpl_id || (_.tpl_id = a.TPL_TYPE.RANDOM), 
        e.ver ? _.ver = e.ver : _.ver = 1, e.merge(o({}, _));

      case s.default.FETCH_PHOTO_SUBTITLE + "_SUC":
        if (r.response.ret && r.response.data && r.response.data.list && r.response.data.list.length) {
            var g = (0, u.default)(e.subtitles, r.response.data.list, "id");
            return e.merge({
                subtitles: g
            });
        }
        return e;

      case s.default.PHOTO_ROTATE + "_REQ":
        return (T = (0, d.default)(e.photos, function(e) {
            return e.id === r.photoId;
        })) >= 0 ? (l = [].concat(e.photos), l[T] = l[T].merge({
            tmpRotate: ((l[T].tmpRotate || 0) + 1) % 4
        }), e.merge({
            photos: l
        })) : e;

      case s.default.PHOTO_ROTATE + "_FAI":
        return (T = (0, d.default)(e.photos, function(e) {
            return e.id === r.photoId;
        })) >= 0 ? (l = [].concat(e.photos), l[T] = l[T].merge({
            tmpRotate: ((l[T].tmpRotate || 0) + 3) % 4
        }), e.merge({
            photos: l
        })) : e;

      case s.default.UPDATE_DRAFT_VIDEO:
        return l = [].concat(e.photos), T = (0, d.default)(e.photos, function(e) {
            return e.id === r.photo.id;
        }), l[T] = r.photo, e.merge({
            photos: l
        });

      case s.default.SAVE_STICKER_INFO:
        return l = e.photos.map(function(e, t) {
            return r.currentIndex === t ? o({}, e, {
                decorate: r.decoration
            }) : e;
        }), e.merge({
            photos: l
        });

      case n.default.COMMIT_DYNAMIC + "_SUC":
        return (0, i.tplTypeJudge)(r.response.data.tpl_id || 0) === a.TPL_TYPE.STYLE.NORMAL ? c : e;

      case s.default.SAVE_ALBUM_MUSIC + "_SUC":
        var I = r.response.data.list;
        return E = {
            tpl_id: r.tpl_id
        }, I.length && (E.music = I), e.merge(o({}, E));

      default:
        return e;
    }
};