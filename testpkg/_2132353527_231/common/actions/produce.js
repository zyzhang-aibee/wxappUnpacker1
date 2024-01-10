function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
};

exports.acFetchAlbumDraft = function(t, e, r) {
    var u = "/draft/fetchdraft";
    return t === n.default.DRAFT_TYPE.MODIFY && (u = "/draft/fetch_modify_album_draft"), 
    {
        API: {
            type: o.default.FETCH_ALBUM_DRAFT,
            endpoint: u,
            param: {
                qs: l.default.getImgQS(128, 128)
            },
            success: e,
            fail: r
        }
    };
}, exports.acPushAlbumDraft = function(t, e, r) {
    var u = "/draft/savedraft";
    return r === n.default.DRAFT_TYPE.MODIFY && (u = "/draft/save_modify_album_draft"), 
    {
        API: {
            type: o.default.PUSH_ALBUM_DRAFT,
            endpoint: u,
            param: {
                ver: e,
                data: t
            }
        }
    };
}, exports.acFetchPhotoSubtitle = function(t) {
    return {
        API: {
            type: o.default.FETCH_PHOTO_SUBTITLE,
            endpoint: "/photo/getsubtitlev2",
            param: {
                ids: t
            }
        }
    };
}, exports.acFetchAlbumTplListGroup = function() {
    return {
        API: {
            type: o.default.FETCH_ALBUM_TPL_GROUP,
            endpoint: "/album/tpl_list_v2",
            param: {
                qs: l.default.getImgQS(120, 120),
                b_qs: l.default.getImgQS(900, 900)
            },
            normalizeFunc: function(t) {
                return e({}, (0, u.normalize)(t.data.tpl, r.default.TplSchemas.TPL), {
                    tips: t.data.tips || {},
                    sort_type: t.data.sort_type || {},
                    limit_make: t.data.limit_make || {}
                });
            }
        }
    };
}, exports.acGetTenSecondsTpl = function() {
    return {
        API: {
            type: o.default.FETCH_MINI_VIDEO_ALBUM_TPL,
            endpoint: "/tpl/get_ten_seconds_tpl",
            normalizeFunc: function(t) {
                return e({}, (0, u.normalize)(t.data.list, r.default.miniTplSchemas.MINI_TPL));
            }
        }
    };
}, exports.setVideoBemt = function(t) {
    var e = t.videoId, r = t.bmt, n = t.emt, u = t.musicVol;
    return {
        API: {
            type: o.default.SET_VIDEO_BEMT,
            endpoint: "/video/set_bemt",
            param: {
                id: e,
                bmt: r,
                emt: n,
                music_vol: u
            }
        }
    };
}, exports.acFetchThumbnails = function(t) {
    var e = t.qid, r = t.n_frames, n = t.w_frames, u = t.h_frames;
    return {
        API: {
            type: o.default.FETCH_THUMBNAILS,
            endpoint: "/video/get_frames",
            param: {
                qid: e,
                n_frames: r,
                w_frames: n,
                h_frames: u
            }
        }
    };
}, exports.acGetTplRecommend = function() {
    return {
        API: {
            type: o.default.GET_TPL_RECOMMEND,
            endpoint: "/tpl/recommend"
        }
    };
}, exports.acFetchStickerList = function() {
    return {
        API: {
            type: o.default.FETCH_STICKERS,
            endpoint: "/album/list_sticker",
            normalizeFunc: function(t) {
                return (0, u.normalize)(t.data.list, r.default.StickerSchema.STICKER_LIST_ARRAY);
            }
        }
    };
}, exports.acAddAlbumPhoto = function(t) {
    return {
        CHECK_PHOTO: !0,
        type: o.default.ADD_ALBUM_PHOTO,
        photo: t
    };
}, exports.acInsertAlbumPhoto = function(t, e) {
    return {
        type: o.default.INSERT_ALBUM_PHOTO,
        photo: t,
        index: e
    };
}, exports.acRemoveAlbumPhoto = function(t) {
    return {
        photo: t,
        type: o.default.REMOVE_ALBUM_PHOTO
    };
}, exports.acRemoveAlbumPhotos = function(t) {
    return {
        type: o.default.REMOVE_ALBUM_PHOTOS,
        photoIds: t
    };
}, exports.acRemoveAlbumPhotosAll = function() {
    return {
        type: o.default.REMOVE_ALBUM_PHOTOS_ALL
    };
}, exports.acSetCurrentPhotoIndex = function(t) {
    return {
        type: o.default.SET_CURRENT_PHOTO_INDEX,
        index: t
    };
}, exports.acSetDisablePhotos = function(t) {
    return {
        type: o.default.SET_DISABLE_PHOTOS,
        photoIds: t
    };
}, exports.acSetAlbumTitle = function(t) {
    return {
        type: o.default.SET_ALBUM_TITLE,
        title: t
    };
}, exports.acSetAlbumHideProducer = function(t) {
    return {
        type: o.default.SET_ALBUM_HIDE_PRODUCER,
        hideProducer: t
    };
}, exports.acSetAlbumProducer = function(t) {
    return {
        type: o.default.SET_ALBUM_PRODUCER,
        producer: t
    };
}, exports.acSetAlbumStory = function(t) {
    return {
        type: o.default.SET_ALBUM_STORY,
        story: t
    };
}, exports.acSetAlbumCover = function(t) {
    return {
        type: o.default.SET_ALBUM_COVER,
        cover: t
    };
}, exports.acSetTmpAlbumCover = function(t) {
    return {
        type: o.default.SET_TMP_ALBUM_COVER,
        cover: t
    };
}, exports.acSetAlbumMusics = function(t) {
    return {
        type: o.default.SET_ALBUM_MUSICS,
        musics: t
    };
}, exports.acSetSubtitlesColor = function(t) {
    return {
        type: o.default.SET_SUBTITLES_COLOR,
        fcor: t
    };
}, exports.acSetModel = function(t) {
    return {
        type: o.default.SET_TPL_MODEL,
        model: t
    };
}, exports.acSetCurTplTagIdx = function(t) {
    return {
        type: o.default.SET_CUR_TPL_TAG_IDX,
        idx: t
    };
}, exports.acSetTplSearchVal = function(t) {
    return {
        type: o.default.SET_TPL_SEARCH_VAL,
        val: t
    };
}, exports.acSetAlbumTpl = function(t) {
    return {
        type: o.default.SET_ALBUM_TPL,
        tplId: t
    };
}, exports.acUploadPhotoSuccess = function() {
    return {
        type: o.default.UPLOAD_PHOTO_SUC
    };
}, exports.updateDraftVideo = function(t) {
    return {
        type: o.default.UPDATE_DRAFT_VIDEO,
        photo: t
    };
}, exports.acModifyTplId = function(t) {
    return {
        type: o.default.MODIFY_TPL_ID,
        tplId: t
    };
}, exports.acModifyTplFontColor = function(t) {
    return {
        type: o.default.MODIFY_TPL_FONT_COLOR,
        fontColor: t
    };
}, exports.acModifyTplModel = function(t) {
    return {
        type: o.default.MODIFY_TPL_MODEL,
        model: t
    };
}, exports.acSaveDecorations = function(t, e) {
    return {
        type: o.default.SAVE_STICKER_INFO,
        decoration: t,
        currentIndex: e
    };
}, exports.acSetSameTplWithoutMusic = function() {
    return {
        type: o.default.SET_TPL_WITHOUT_MUSIC
    };
};

var r = t(require("../schemas/schemas")), o = t(require("../const/actionType")), n = t(require("../../common/const/common")), u = require("../../frameBase/library/normalizr/normalizr.min"), a = require("../../frameBase/library/redux/index"), l = t(require("../others/utils"));

exports.default = (0, a.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);