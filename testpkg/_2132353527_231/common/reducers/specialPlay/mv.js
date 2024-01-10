function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
}, a = e(require("../../../frameBase/library/seamless-immutable/index")), r = e(require("../../const/actionType")), s = function(e) {
    for (var t = [ e[0] ], a = 1; a < e.length; a++) {
        for (var r = !1, s = 0; s < t.length; s++) if (e[a].id === t[s].id) {
            r = !0;
            break;
        }
        r || t.push(e[a]);
    }
    return t.length > 100 && (t = t.slice(0, 100)), t;
}, i = {
    musicList: [],
    musicTabList: [],
    entitiesMusicList: {},
    searchVal: "",
    mvData: {
        photoList: [],
        arr_cover: {},
        music: {},
        backUrl: "",
        title: "",
        album_id: ""
    },
    reservedMVData: {},
    hasChange: !1
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.default)(i), u = arguments[1];
    switch (u.type) {
      case r.default.MV_FETCH_MUSIC + "_SUC":
        return e.merge({
            musicList: u.response.list,
            musicTabList: u.response.tag_list,
            entitiesMusicList: u.response.entities.mvMusic
        });

      case r.default.ADD_MV_PHOTO:
        var o = s(e.mvData.photoList.concat(u.photoList));
        return e.merge({
            mvData: t({}, e.mvData, {
                photoList: o
            })
        });

      case r.default.SET_MV_COVER:
        return e.merge({
            mvData: t({}, e.mvData, {
                arr_cover: u.arr_cover
            })
        });

      case r.default.SET_MV_MUSIC:
        return e.merge({
            mvData: t({}, e.mvData, {
                music: u.music
            })
        });

      case r.default.REMOVE_MV_PHOTO:
        var n = e.mvData.photoList.filter(function(e) {
            return e.id !== u.photoId;
        });
        return e.merge({
            mvData: t({}, e.mvData, {
                photoList: n
            })
        });

      case r.default.CHANGE_MV_PHOTO_ORDER:
        var m = [].concat(e.mvData.photoList);
        if (u.order > 0 && u.order < m.length) {
            var c = u.order - 1, l = m[c];
            m[c] = m[c + 1], m[c + 1] = l;
        }
        return e.merge({
            mvData: t({}, e.mvData, {
                photoList: m
            })
        });

      case r.default.REMOVE_MORE_MV_PHOTO:
        var v = e.mvData.photoList.filter(function(e) {
            return u.photoIds.indexOf(e.id) < 0;
        });
        return e.merge({
            mvData: t({}, e.mvData, {
                photoList: v
            })
        });

      case r.default.GET_BIG_PHOTO + "_SUC":
        var d = u.response.data.list[0].url;
        return e.merge({
            mvData: t({}, e.mvData, {
                backUrl: d
            })
        });

      case r.default.CLEAR_ALL_MV_PHOTO:
        return e.merge({
            mvData: i.mvData
        });

      case r.default.CHANGE_MV_TITLE:
        return e.merge({
            mvData: t({}, e.mvData, {
                title: u.title ? u.title : "一首好听的歌曲送给您"
            })
        });

      case r.default.REEDIT_MV + "_SUC":
        return u.isReedit ? e.merge({
            mvData: {
                photoList: u.response.data.ids,
                arr_cover: u.response.data.cover,
                music: t({}, e.music, {
                    musicId: u.response.data.music[0].id
                }),
                backUrl: "",
                title: u.response.data.title,
                album_id: u.response.data.album_id,
                profile_id: u.response.data.profile_id
            }
        }) : e;

      case r.default.SET_MV_MUSIC_SEARCH_VAL:
        return e.merge({
            searchVal: u.val
        });

      case r.default.MV_BACK_UP:
        return e.merge({
            mvData: i.mvData,
            reservedMVData: t({}, e.mvData)
        });

      case r.default.RESTORE_MV_BACK_UP:
        return e.merge({
            mvData: t({}, e.reservedMVData),
            reservedMVData: i.mvData
        });

      case r.default.CHANGE_MV_DATA_IN_DYNAMIC:
        return e.merge(t({}, e, {
            hasChange: u.hasChange
        }));

      default:
        return e;
    }
};