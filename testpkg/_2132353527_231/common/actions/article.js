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
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
};

exports.acAddArticlePhotos = function(t, e) {
    return {
        type: n.default.ADD_PHOTOS_OF_ARTICLE,
        index: t,
        photos: e
    };
}, exports.acAddArticleText = function(t, e) {
    return {
        type: n.default.ADD_TEXT_OF_ARTICLE,
        index: t,
        txt: e
    };
}, exports.acDeleteSection = function(t) {
    return {
        type: n.default.DELETE_SECTION_OF_ARTICLE,
        index: t
    };
}, exports.acDeletePhoto = function(t) {
    return {
        type: n.default.DELETE_ARTICLE_PHOTO_BY_ID,
        photoId: t
    };
}, exports.acSetInsertIndex = function(t) {
    var e = t.insertIndex, r = t.isInsert, a = t.reset;
    return {
        type: n.default.SET_INSERT_INDEX,
        insertIndex: e,
        isInsert: r,
        reset: a
    };
}, exports.acUpdateArticleSection = function(t, e) {
    return {
        type: n.default.UPDATE_SECTION_OF_ARTICLE,
        index: t,
        section: e
    };
}, exports.acMoveArticleSection = function(t, e) {
    return {
        type: n.default.MOVE_SECTION_OF_ARTICLE,
        index: t,
        direction: e
    };
}, exports.acSetArticleTitle = function(t) {
    return {
        type: n.default.SET_TITLE_OF_ARTICLE,
        title: t
    };
}, exports.acSetArticleCover = function(t) {
    return {
        type: n.default.SET_COVER_OF_ARTICLE,
        photo: t
    };
}, exports.acSetArticleMusic = function(t) {
    return {
        type: n.default.SET_MUSIC_OF_ARTICLE,
        music: t
    };
}, exports.acClearArticleMusic = function() {
    return {
        type: n.default.CLEAR_MUSIC_OF_ARTICLE
    };
}, exports.acSetArticleData = function(t) {
    return {
        type: n.default.SET_ARTICLE_DATA,
        data: t
    };
}, exports.acClearArticleData = function() {
    return {
        type: n.default.CLEAR_ARTICLE_DATA
    };
}, exports.acSetEditType = function(t) {
    return {
        type: n.default.SET_EDIT_TYPE,
        editType: t
    };
}, exports.acCommitArticle = function(t, r) {
    return {
        API: {
            type: n.default.COMMIT_ARTICLE,
            endpoint: "/graphic/do_graphic",
            param: e({}, t)
        },
        data: r
    };
}, exports.acCommitModifyArticle = function(t, r) {
    return {
        API: {
            type: n.default.COMMIT_MODIFY_ARTICLE,
            endpoint: "/graphic/modify_graphic",
            param: e({}, t)
        },
        data: r
    };
}, exports.acPushArticleDraft = function(t) {
    return {
        API: {
            type: n.default.PUSH_ARTICLE_DRAFT,
            endpoint: "/draft/graphic_save_draft",
            param: {
                data: t,
                type: 3
            }
        }
    };
}, exports.acFetchArticleDraft = function() {
    return {
        API: {
            type: n.default.FETCH_ARTICLE_DRAFT,
            endpoint: "/draft/graphic_fetch_draft",
            param: {
                qs: i.default.getImgQS({
                    size: a.COVER_SIZE.FULL_PAGE_SIZE,
                    noCrop: !0
                }),
                type: 3
            }
        }
    };
}, exports.acRestoreArticle = function(t) {
    var e = t.albumId, r = t.profile_id;
    return {
        API: {
            type: n.default.RESTORE_ARTICLE,
            endpoint: "/graphic/restore",
            param: {
                ids: e instanceof Array ? e : [ "" + e ]
            }
        },
        dynamicId: r
    };
};

var r = require("../../frameBase/library/redux/index"), n = t(require("../const/actionType")), a = require("../const/index"), i = t(require("../utils/index"));

exports.default = (0, r.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);