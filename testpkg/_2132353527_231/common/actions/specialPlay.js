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
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
};

exports.acGetMVMusic = function() {
    return {
        API: {
            type: a.default.MV_FETCH_MUSIC,
            endpoint: "/album/get_musics_by_tpl_id",
            param: {
                tpl_id: n.default.TPL_TYPE.SPECIAL_PLAY_MV
            },
            normalizeFunc: function(e) {
                return t({}, (0, o.normalize)(e.data.list_tags[999], u.default.mvMusicSchemas.MV_MUSIC), {
                    list: e.data.list_tags,
                    tag_list: e.data.tag_list
                });
            }
        }
    };
}, exports.acAddMVPhoto = function(e) {
    return {
        type: a.default.ADD_MV_PHOTO,
        photoList: e
    };
}, exports.acSetMVCover = function(e) {
    return {
        type: a.default.SET_MV_COVER,
        arr_cover: e
    };
}, exports.acSetMVMusic = function(e) {
    return {
        type: a.default.SET_MV_MUSIC,
        music: e
    };
}, exports.acRemoveMVPhoto = function(e) {
    return {
        type: a.default.REMOVE_MV_PHOTO,
        photoId: e
    };
}, exports.acChangeMVPhotoOrder = function(e) {
    var t = e.order;
    return {
        type: a.default.CHANGE_MV_PHOTO_ORDER,
        order: t
    };
}, exports.acRemoveMoreMVPhoto = function(e) {
    return {
        type: a.default.REMOVE_MORE_MV_PHOTO,
        photoIds: e
    };
}, exports.acGetBigPhoto = function(e) {
    return {
        API: {
            type: a.default.GET_BIG_PHOTO,
            endpoint: "/photo/listarray",
            param: {
                qs: "imageMogr2/gravity/center/quality/75/rotate/$/thumbnail/!375x667r/interlace/1/format/jpg",
                ids: e
            }
        }
    };
}, exports.acClearAllMVPhoto = function() {
    return {
        type: a.default.CLEAR_ALL_MV_PHOTO
    };
}, exports.acGetMVAlbumMusic = function(e) {
    var t = e.albumId, r = e.tplId;
    return {
        API: {
            type: a.default.GET_MV_ALBUM_MUSIC,
            endpoint: "/music/can_do_same_album",
            param: {
                album_id: t,
                tpl_id: r,
                save: 1
            }
        }
    };
}, exports.acFetchAlbumMusicId = function(e) {
    var t = e.albumId;
    return {
        API: {
            type: a.default.GET_MV_MUSIC_INFO_BY_MUSIC_ID,
            endpoint: "/music/get_music_id",
            param: {
                a_id: t
            }
        }
    };
}, exports.acChangeMVTitle = function(e) {
    return {
        type: a.default.CHANGE_MV_TITLE,
        title: e
    };
}, exports.acReeditMV = function(e) {
    var t = e.albumId, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return {
        API: {
            type: a.default.REEDIT_MV,
            endpoint: "/album/reedit",
            param: {
                id: t,
                qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!128x128r/crop/128x128/interlace/1/format/jpg/quality/50",
                is_del_modify_draft: 1
            }
        },
        isReedit: r
    };
}, exports.acAdviseMV = function(e) {
    var t = e.song, r = e.singer, n = e.advise;
    return {
        API: {
            type: a.default.MV_USER_ADVISE,
            endpoint: "/album/mv_feedback",
            param: {
                song: t,
                singer: r,
                advice: n
            }
        }
    };
}, exports.acSetMVMusicSearchVal = function(e) {
    return {
        type: a.default.SET_MV_MUSIC_SEARCH_VAL,
        val: e
    };
}, exports.acSearchAllMusic = function(e, t, r) {
    return {
        API: {
            type: a.default.SEARCH_ALL_MV_MUSIC,
            endpoint: "/plp/searchall",
            param: {
                txt: e,
                offset: t,
                limit: r || n.default.SEARCH_MUSIC_LIMIT
            }
        }
    };
}, exports.acMVMusicInc = function(e) {
    return {
        API: {
            type: a.default.MV_MUSIC_INC,
            endpoint: "/music/mv_music_inc",
            param: {
                qid: e
            }
        }
    };
}, exports.acBackUpMvData = function() {
    return {
        type: a.default.MV_BACK_UP
    };
}, exports.acRestoreBackUpMvData = function() {
    return {
        type: a.default.RESTORE_MV_BACK_UP
    };
}, exports.acChangeMVDataInDynamicShare = function(e) {
    return {
        type: a.default.CHANGE_MV_DATA_IN_DYNAMIC,
        hasChange: e
    };
}, exports.acFetchCoverUrl = function(e) {
    return {
        API: {
            type: a.default.FETCH_POSTER_COVER,
            endpoint: "/photo/get_cover",
            param: {
                qs: i.default.getImgQS({
                    size: _.COVER_SIZE.POST_SIZE
                }),
                album_id: e
            }
        }
    };
}, exports.acFetchSameMVMusicAlbums = function(e) {
    return {
        API: {
            type: a.default.FETCH_SAME_MV_MUSIC_ALBUMS,
            endpoint: "/trends/get_mv_by_musicID",
            param: t({
                qs: i.default.getImgQS({
                    size: _.COVER_SIZE.MV_FEED
                }),
                h_qs: i.default.getImgQS({
                    size: _.COVER_SIZE.HEAD_SIZE
                })
            }, e)
        }
    };
};

var r = require("../../frameBase/library/redux/index"), a = e(require("../const/actionType")), n = e(require("../../common/const/common")), o = require("../../frameBase/library/normalizr/normalizr.min"), u = e(require("../schemas/schemas")), i = e(require("../utils/index")), _ = require("../const/index");

exports.default = (0, r.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);