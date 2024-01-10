function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.draftDiffDefaultState = void 0;

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
}, r = e(require("../../../../frameBase/library/seamless-immutable/index")), a = e(require("../../../../frameBase/utils/array-find-index/index")), s = e(require("../../../../frameBase/utils/lodash.unionby/index")), o = e(require("../../../const/actionType")), u = e(require("../../../const/actionTypes/entities/dynamics")), d = require("../../../../common/others/utils"), i = require("../../../../common/const/common"), n = exports.draftDiffDefaultState = (0, 
r.default)({
    hasChange: !1
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n, r = arguments[1], l = arguments[2], c = arguments[3], _ = r.type, h = c.ver, f = {}, p = void 0, T = void 0, m = [], g = {}, v = {};
    switch (_) {
      case o.default.PUSH_ALBUM_DRAFT + "_SUC":
        return e.asynSubtitles ? e.merge({
            hasChange: !0,
            ver: h,
            subtitles: e.asynSubtitles
        }) : n;

      case o.default.SET_ALBUM_TITLE:
        return e.title !== r.title ? e.merge({
            hasChange: !0,
            ver: h,
            title: r.title
        }) : e;

      case o.default.SET_ALBUM_PRODUCER:
        return e.producer !== r.producer ? e.merge({
            hasChange: !0,
            ver: h,
            producer: r.producer
        }) : e;

      case o.default.SET_ALBUM_HIDE_PRODUCER:
        return e.hideProducer !== r.hideProducer ? e.merge({
            hasChange: !0,
            ver: h,
            hideProducer: r.hideProducer
        }) : e;

      case o.default.SET_ALBUM_STORY:
        return e.story !== r.story ? e.merge({
            hasChange: !0,
            ver: h,
            story: r.story
        }) : e;

      case o.default.SET_ALBUM_COVER:
        return e.cover && e.cover.id === r.cover.id ? e : e.merge({
            hasChange: !0,
            ver: h,
            cover: r.cover
        });

      case o.default.SET_SUBTITLES_COLOR:
        return e.fcor !== r.fcor ? e.merge({
            hasChange: !0,
            ver: h,
            fcor: r.fcor
        }) : e;

      case o.default.SET_TPL_MODEL:
        return e.model !== r.model ? e.merge({
            hasChange: !0,
            ver: h,
            model: r.model
        }) : e;

      case o.default.SET_ALBUM_TPL:
        return r.tplId !== e.tpl_id ? e.merge({
            hasChange: !0,
            ver: h,
            tpl_id: r.tplId,
            model: 0
        }) : e;

      case o.default.SET_ALBUM_MUSICS:
        return e.merge({
            hasChange: !0,
            ver: h,
            music: r.musics
        });

      case o.default.REMOVE_ALBUM_PHOTO:
      case o.default.REMOVE_ALBUM_PHOTOS:
      case o.default.REMOVE_ALBUM_PHOTOS_ALL:
        return l.photos.forEach(function(e) {
            v[e.id] = e.decorate;
        }), e.merge({
            hasChange: !0,
            ver: h,
            photos: l.photos.slice(),
            videoNum: l.videoNum,
            decorations: v,
            cover: {
                id: 0
            }
        });

      case o.default.ADD_ALBUM_PHOTO:
      case o.default.INSERT_ALBUM_PHOTO:
      case o.default.UPDATE_DRAFT_VIDEO:
        return e.merge({
            hasChange: !0,
            ver: h,
            photos: l.photos.slice(),
            videoNum: l.videoNum
        });

      case o.default.MOVE_UP_ALBUM_PHOTO:
      case o.default.MOVE_DOWN_ALBUM_PHOTO:
        return e.merge({
            hasChange: !0,
            ver: h,
            photos: l.photos.slice()
        });

      case o.default.RECOVER_DRAFT_HISTORY:
        return e.merge(t({
            hasChange: !0,
            ver: h
        }, l));

      case o.default.SET_ALBUM_PHOTO_SUBTITLE:
        return (p = e.subtitles ? (0, a.default)(e.subtitles, function(e) {
            return e.id === r.photoId;
        }) : -1) >= 0 && e.subtitles[p].txt === r.text ? e : (m = e.subtitles ? [].concat(e.subtitles) : [], 
        p >= 0 && m.splice(p, 1), m.push({
            id: r.photoId,
            txt: r.text
        }), e.merge({
            hasChange: !0,
            ver: h,
            subtitles: m
        }));

      case o.default.REEDIT_ALBUM + "_SUC":
        return f = r.response.data, f.subtitles = f.ids.map(function(e) {
            return {
                id: e.id,
                txt: e.txt || ""
            };
        }), T = 0, f.photos = f.ids.map(function(e) {
            return 6 === e.ty && (T += 1), v[e.id] = e.decorate, t({}, e, {
                txt: void 0
            });
        }), f.videoNum = T, f.decorations = v, f.ids = void 0, e.merge(t({
            hasChange: !0,
            ver: h
        }, f));

      case o.default.FETCH_PHOTO_SUBTITLE + "_SUC":
        return r.response.ret && r.response.data && r.response.data.list && r.response.data.list.length ? (c.isPushing ? f.asynSubtitles = [].concat(r.response.data.list) : f.subtitles = (0, 
        s.default)(f.subtitles, r.response.data.list, "id"), e.merge(t({
            hasChange: !0,
            ver: h
        }, f))) : e;

      case o.default.SAVE_STICKER_INFO:
        return l.photos.forEach(function(e) {
            v[e.id] = e.decorate;
        }), v[l.photos[r.currentIndex].id] = r.decoration, e.merge({
            hasChange: !0,
            ver: h,
            decorations: v
        });

      case o.default.FETCH_ALBUM_DRAFT + "_SUC":
      case u.default.COMMIT_DYNAMIC + "_SUC":
        return (0, d.tplTypeJudge)(r.response.data.tpl_id || 0) === i.TPL_TYPE.STYLE.NORMAL ? n : e;

      case o.default.SAVE_ALBUM_MUSIC + "_SUC":
        var E = r.response.data.list;
        return g = {
            hasChange: !0,
            ver: h,
            tpl_id: r.tpl_id
        }, E.length && (g.music = E), e.merge(t({}, g));

      default:
        return e;
    }
};