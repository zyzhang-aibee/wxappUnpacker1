function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = Object.assign || function(e) {
    for (var i = 1; i < arguments.length; i++) {
        var t = arguments[i];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
};

exports.acPublishDynamic = function(e) {
    var a = e.material, d = void 0 === a ? {} : a, n = {};
    return d.data && (n = i({}, n = {
        favor: {
            total: 0,
            has_favor: 0
        },
        p: 1,
        share: 0,
        commentIds: [],
        comment_count: 0
    }, {
        type: d.type,
        t: Date.now(),
        msg: "",
        user: wx.xngGlobal.xu.user,
        album_id: d.data.albumId
    }, d.data)), {
        API: {
            type: t.default.PUBLISH_DYNAMIC,
            endpoint: "/profile/new_trends",
            param: {
                type: e.type,
                obj: {
                    album_id: e.id,
                    graphic_id: e.id
                }
            }
        },
        dynamicId: e.dynamicId,
        data: n
    };
}, exports.acUnPublishDynamic = function(e) {
    return {
        API: {
            type: t.default.UN_PUBLISH_DYNAMIC,
            endpoint: "/profile/delete_trends",
            param: {
                id: e
            }
        },
        dynamicId: e
    };
}, exports.acLikeDynamic = function(e) {
    return {
        API: {
            type: t.default.LIKE_DYNAMIC,
            endpoint: "/profile/set_profile_favor",
            param: {
                id: e.dynamicId,
                profile_mid: e.mid,
                log_params: {
                    proj: "ma",
                    tpl_id: e.stpl_id || e.tpl_id
                }
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acUnLikeDynamic = function(e) {
    return {
        API: {
            type: t.default.UNLIKE_DYNAMIC,
            endpoint: "/profile/unset_profile_favor",
            param: {
                id: e.dynamicId,
                profile_mid: e.mid
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acDeleteDynamic = function(e) {
    return {
        API: {
            type: t.default.DELETE_DYNAMIC,
            endpoint: e.albumType === d.ALBUM_TYPE.ARTICLE ? "/graphic/del_graphic" : "/album/del",
            param: {
                ids: [ "" + e.id ],
                log_params: {
                    proj: "ma",
                    tpl_id: e.stpl_id || e.tpl_id
                }
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acAddDynamicComment = function(e) {
    return {
        API: {
            type: t.default.ADD_DYNAMIC_COMMENT,
            endpoint: "/profile/add_profile_comment",
            param: {
                id: e.dynamicId,
                profile_mid: e.mid,
                to_profile_cid: e.repliedComment ? e.repliedComment.id : void 0,
                txt: e.txt,
                is_into_profile: e.is_into_profile
            }
        },
        dynamicId: e.dynamicId,
        txt: e.txt,
        user: e.user,
        repliedComment: e.repliedComment,
        isCommentList: e.isCommentList,
        is_into_profile: e.is_into_profile
    };
}, exports.acRemoveDynamicComment = function(e) {
    return {
        API: {
            type: t.default.REMOVE_DYNAMIC_COMMENT,
            endpoint: "/profile/delete_profile_comment",
            param: {
                id: e.dynamicId,
                profile_mid: e.mid,
                profile_cid: e.cid
            },
            normalizeFunc: function(e) {
                return e.data;
            }
        },
        dynamicId: e.dynamicId,
        cid: e.cid
    };
}, exports.acFetchSingleDynamic = function(e) {
    return {
        API: {
            type: t.default.FETCH_SINGLE_DYNAMIC,
            endpoint: "/profile/get_profile_by_id",
            param: {
                profile_id: e.dynamicId,
                profile_mid: e.mid,
                qs: o.default.getImgQS({
                    size: d.COVER_SIZE.POST_SIZE
                }),
                h_qs: o.default.getImgQS({
                    size: d.COVER_SIZE.HEAD_SIZE
                }),
                share_width: 625,
                share_height: 500
            },
            normalizeFunc: function(i) {
                var t = i.data;
                delete t.p, t.commentIds = (0, m.normalize)(t.comments || [], r.Schemas.COMMENT_ARRAY).result;
                var a = (0, m.normalize)(t.comments || [], r.Schemas.COMMENT_ARRAY).entities.comments, d = (0, 
                m.normalize)([ t ], n.default.idSchema);
                return d.entities.commentEntities = a, d.entities.dynamics[e.dynamicId] = d.entities.dynamics[d.result[0]], 
                d;
            }
        },
        insertToDiscoverRecommend: e.insertToDiscoverRecommend
    };
}, exports.acFetchArticleDetail = function(e) {
    return {
        API: {
            type: t.default.FETCH_ARTICLE_DETAIL,
            endpoint: "/graphic/get_graphic",
            param: {
                id: e,
                qs: o.default.getImgQS({
                    size: d.COVER_SIZE.FULL_PAGE_SIZE,
                    noCrop: !0
                })
            },
            normalizeFunc: function(e) {
                return (0, m.normalize)([ e.data ], n.default.profileIdSchema);
            }
        }
    };
}, exports.acUpdateShareCount = function(e) {
    return {
        type: t.default.UPDATE_SHARE_COUNT,
        dynamicId: e
    };
}, exports.acUpdatePlayCount = function(e) {
    return {
        type: t.default.UPDATE_PLAY_COUNT,
        dynamicId: e
    };
}, exports.acComplaintDynamic = function(e) {
    return {
        API: {
            type: t.default.COMPLAINT_DYNAMIC,
            endpoint: "/trends/complaint",
            param: {
                profile_id: e.dynamicId,
                profile_mid: e.dynamicMid
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acGetDynamicIsFavorites = function(e) {
    return {
        API: {
            type: t.default.GET_DYNAMIC_IS_FAVORITES,
            endpoint: "/favorites/is_favorites",
            param: {
                type: e.albumType === d.ALBUM_TYPE.ARTICLE ? d.FAVORITE_TYPE.ARTICLE : d.FAVORITE_TYPE.ALBUM,
                id: e.id
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acChangeShowDynamicAuthor = function(e) {
    var i = "/album/display_outer_user", a = {
        id: e.id,
        lid: e.lid
    };
    return e.albumType === d.ALBUM_TYPE.ARTICLE ? (i = "/graphic/modify_graphic", a = {
        id: e.id,
        hideproducer: e.isHide
    }) : e.isHide && (i = "/album/hide_outer_user"), {
        API: {
            type: t.default.CHANGE_SHOW_DYNAMIC_AUTHOR,
            endpoint: i,
            param: a
        },
        dynamicId: e.dynamicId,
        isHide: e.isHide
    };
}, exports.acAddDynamicFavorites = function(e) {
    return {
        API: {
            type: t.default.ADD_DYNAMIC_FAVORITES,
            endpoint: "/favorites/favorites",
            param: {
                type: e.albumType === d.ALBUM_TYPE.ARTICLE ? d.FAVORITE_TYPE.ARTICLE : d.FAVORITE_TYPE.ALBUM,
                id: e.id
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acDeleteDynamicFavorites = function(e) {
    return {
        API: {
            type: t.default.DELETE_DYNAMIC_FAVORITES,
            endpoint: "/favorites/unfavorites",
            param: {
                _id: e.favoriteId
            }
        },
        favoriteId: e.favoriteId,
        dynamicId: e.dynamicId
    };
}, exports.acDeleteDynamicFavoritesList = function(e) {
    return {
        API: {
            type: t.default.DELETE_DYNAMIC_FAVORITES_LIST,
            endpoint: "/favorites/unfavorites",
            param: {
                ids: e.favoriteIds
            }
        },
        favoriteIds: e.favoriteIds,
        dynamicIds: e.dynamicIds
    };
}, exports.acFetchDynamicFavoritesList = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.startTime, r = void 0 === a ? -1 : a, c = e.limit, p = void 0 === c ? d.FETCH_LIMIT.FAVORITE_LIST : c;
    return {
        API: {
            type: t.default.FETCH_DYNAMIC_FAVORITES_LIST,
            endpoint: "/favorites/favorites_list",
            param: {
                qs: o.default.getImgQS({
                    size: d.COVER_SIZE.FAVORITE_SIZE
                }),
                start_t: r,
                limit: p
            },
            normalizeFunc: function(e) {
                return i({}, (0, m.normalize)(e.data.list, n.default.profileIdSchema), {
                    next_t: e.data.next_t,
                    total: e.data.total
                });
            }
        }
    };
}, exports.acRenameDynamic = function(e) {
    return {
        API: {
            type: t.default.RENAME_DYNAMIC,
            endpoint: "/album/update_title",
            param: {
                id: e.id,
                title: e.title
            }
        },
        title: e.title,
        dynamicId: e.dynamicId
    };
}, exports.acUpdateDynamicStory = function(e) {
    return {
        API: {
            type: t.default.UPDATE_DYNAMIC_STORY,
            endpoint: "/album/update_story",
            param: {
                album_id: e.id,
                story: e.story
            }
        },
        story: e.story,
        dynamicId: e.dynamicId
    };
}, exports.acChangeDynamicCover = function(e) {
    return {
        API: {
            type: t.default.CHANGE_DYNAMIC_COVER,
            endpoint: "/album/update_cover",
            param: {
                id: e.id,
                img_id: e.cover.id
            }
        },
        dynamicId: e.dynamicId,
        cover: e.cover
    };
}, exports.acRestoreDynamic = function(e) {
    return {
        API: {
            type: t.default.RESTORE_DYNAMIC,
            endpoint: "/album/restore",
            param: {
                ids: [ e.id ]
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acWipeDynamic = function(e) {
    var i = "/album/complete_del";
    return e.albumType === d.ALBUM_TYPE.ARTICLE && (i = "/graphic/complete_del"), {
        API: {
            type: t.default.WIPE_DYNAMIC,
            endpoint: i,
            param: {
                ids: [ e.id ]
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acCommitDynamic = function(e) {
    return {
        API: {
            type: t.default.COMMIT_DYNAMIC,
            endpoint: "/album/wxjsgen",
            param: i({}, e, {
                qs: o.default.getImgQS({
                    size: d.COVER_SIZE.COMMIT_SIZE
                })
            })
        }
    };
}, exports.acModifyDynamic = function(e) {
    return {
        API: {
            type: t.default.MODIFY_DYNAMIC,
            endpoint: "/album/modify_wxjsgen",
            param: i({}, e.data)
        },
        dynamicId: e.dynamicId
    };
}, exports.acUpdateDynamic = function(e) {
    return {
        API: {
            type: t.default.UPDATE_DYNAMIC,
            endpoint: "/album/modify_wxjsgen_v2",
            param: {
                form_id: e.formId,
                album_id: e.id,
                music: e.musicIds,
                tpl_id: e.tplId,
                fcor: e.fcor,
                model: e.model
            }
        },
        dynamicId: e.dynamicId
    };
}, exports.acGetDynamicTplMusic = function(e) {
    return {
        API: {
            type: t.default.GET_DYNAMIC_TPL_MUSIC,
            endpoint: "/album/get_album_detail_info",
            param: {
                album_id: e.id
            }
        },
        dynamicId: e.dynamicId
    };
};

var t = e(require("../../const/actionTypes/entities/dynamics")), a = require("../../../frameBase/library/redux/index"), d = require("../../const/index"), n = e(require("../../schemas/dynamics")), r = require("../../schemas/schemas"), o = e(require("../../utils/index")), m = require("../../../frameBase/library/normalizr/normalizr.min");

exports.default = (0, a.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);