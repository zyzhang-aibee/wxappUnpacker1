function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    }
    return t;
}, a = t(require("../schemas/me")), n = t(require("../schemas/dynamics")), r = t(require("../const/actionType")), i = t(require("../../mainPages/common/specialPlay")), o = t(require("../../frameBase/utils/object-assign/index")), u = require("../../frameBase/library/normalizr/normalizr.min"), c = t(require("../../common/const/common"));

module.exports = {
    fetchUserinfo: function(t, e) {
        return {
            API: {
                type: r.default.USERINFO,
                endpoint: "/account/userinfo",
                param: {
                    h_qs: "imageMogr2/gravity/center/rotate/0/thumbnail/!200x200r/crop/200x200/interlace/1/format/jpg/quality/50"
                },
                success: t,
                fail: e
            }
        };
    },
    fetchAlbumList: function(t, e) {
        return {
            API: {
                type: r.default.ALBUMLIST,
                endpoint: "/album/list",
                param: {
                    limit: e,
                    start_t: t,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!400x400r/crop/400x400/interlace/1/format/jpg",
                    share_width: 625,
                    share_height: 500
                },
                normalizeFunc: function(t) {
                    var e = t.data.list.map(function(t) {
                        return i.default.tplTypeJudge(t.tpl_id) !== c.default.TPL_TYPE.STYLE.SEND_BLESS_FRONT_VIDEO && i.default.tplTypeJudge(t.tpl_id) !== c.default.TPL_TYPE.STYLE.SEND_BLESS_H5_VIDEO || (t.url = t.url.slice(0, t.url.indexOf("?"))), 
                        void 0 === t.ban ? Object.assign(t, {
                            ban: 0
                        }) : t;
                    });
                    return (0, u.normalize)(e, n.default.profileIdSchema);
                }
            },
            isChecked: -1 === t
        };
    },
    fetchProductList: function(t, a) {
        return {
            API: {
                type: r.default.FETCH_PRODUCT_IN_PROFILE,
                endpoint: "/album/list",
                param: {
                    limit: a,
                    start_t: t,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!400x400r/crop/400x400/interlace/1/format/jpg",
                    share_width: 625,
                    share_height: 500
                },
                normalizeFunc: function(t) {
                    var a = t.data.list.map(function(t) {
                        return void 0 === t.ban ? Object.assign(t, {
                            ban: 0
                        }) : t;
                    });
                    return e({}, (0, u.normalize)(a, n.default.profileIdSchema), {
                        nextT: t.data.next_t
                    });
                }
            },
            starTime: t,
            limit: a
        };
    },
    acFetchAlbumStory: function(t, e, a) {
        return {
            API: {
                type: r.default.FETCH_ALBUM_STORY,
                endpoint: "/album/get_story",
                param: {
                    album_id: t
                },
                success: e,
                fail: a
            }
        };
    },
    fetchAlbumRecentlyDeleted: function(t, e) {
        return {
            API: {
                type: r.default.ALBUM_RECENTLY_DELETED,
                endpoint: "/album/recycle",
                param: {
                    limit: e,
                    start_t: t,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!180x140r/crop/180x140/interlace/1/format/jpg"
                },
                normalizeFunc: function(t) {
                    return (0, u.normalize)(t.data.list, n.default.profileIdSchema);
                }
            }
        };
    },
    fetchPhotoRecentlyDeleted: function(t) {
        return {
            API: {
                type: r.default.PHOTO_RECENTLY_DELETED,
                endpoint: "/photo/list_recycle",
                param: {
                    is_need_video: !0,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!180x180r/crop/180x180/interlace/1/format/jpg",
                    start_t: t.startTime,
                    limit: t.limit
                },
                normalizeFunc: function(t) {
                    return (0, o.default)({}, (0, u.normalize)(t.data.list, a.default.PhotoRecentlyDeletedSchemas.PHOTO_RECENTLY_DELETED_LIST_ARRAY), {
                        startTime: t.data.next_t
                    });
                },
                success: t.success,
                fail: t.fail
            }
        };
    },
    acWipePhoto: function(t) {
        return {
            API: {
                type: r.default.WIPE_PHOTO,
                endpoint: "/photo/complete_del",
                param: {
                    ids: t.photoIds
                },
                success: t.success,
                fail: t.fail
            },
            photoIds: t.photoIds
        };
    },
    acRestorePhoto: function(t) {
        return {
            API: {
                type: r.default.RESTORE_PHOTO,
                endpoint: "/photo/restore",
                param: {
                    ids: t.photoIds
                },
                success: t.success,
                fail: t.fail
            },
            photoIds: t.photoIds
        };
    },
    acFetchPhotoList: function(t, e) {
        return {
            API: {
                type: r.default.FETCH_PHOTO_LIST,
                endpoint: "/photo/list",
                param: {
                    limit: e,
                    start_t: t,
                    req_local_id: 1,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!180x180r/crop/180x180/interlace/1/format/jpg"
                },
                normalizeFunc: function(t) {
                    return (0, u.normalize)(t.data.list, a.default.PhotoSchema.PHOTO_ARRAY);
                }
            },
            limit: e,
            CHECK_PHOTO: !0
        };
    },
    acClearPhotoList: function() {
        return {
            type: r.default.CLEAR_PHOTO_LIST
        };
    },
    acClearAlbumList: function() {
        return {
            type: r.default.CLEAR_ALBUM_LIST
        };
    },
    showPublicFollowGuide: function() {
        return {
            type: r.default.SHOW_PUBLIC_FOLLOW_GUIDE
        };
    },
    hidePublicFollowGuide: function() {
        return {
            type: r.default.HIDE_PUBLIC_FOLLOW_GUIDE
        };
    },
    acClearAlbumRecentlyDeleted: function() {
        return {
            type: r.default.CLAER_ALBUM_RECENTLY_DELETED
        };
    },
    fetchPhotosForBrowser: function(t, n, i) {
        return {
            API: {
                type: r.default.PHOTO_LISTARRAY,
                endpoint: "/photo/listarray",
                param: {
                    qs: "imageMogr2/gravity/center/quality/75/rotate/$/thumbnail/!375x667r/interlace/1/format/jpg",
                    ids: t
                },
                normalizeFunc: function(t) {
                    var n = t.data.list.map(function(t) {
                        return e({}, t, {
                            tmpRotate: 0
                        });
                    });
                    return (0, u.normalize)(n, a.default.PhotoBrowserSchemas.PHOTO_BROWSER_LIST_ARRAY);
                },
                success: n,
                fail: i
            }
        };
    },
    acSetPhotoBrowseIndex: function(t) {
        return {
            type: r.default.SET_PHOTO_BROWSE_INDEX,
            browseIndex: t
        };
    },
    requestRotatePhoto: function(t) {
        return {
            API: {
                type: r.default.PHOTO_ROTATE,
                endpoint: "/photo/rotate",
                param: {
                    rotate_count: 1,
                    id: "" + t
                }
            },
            photoId: t
        };
    },
    requestDeletePhoto: function(t) {
        return {
            API: {
                type: r.default.PHOTO_DELETE,
                endpoint: "/photo/del",
                param: {
                    ids: [ "" + t.id ]
                }
            },
            photoId: t.id,
            photo: t
        };
    },
    acRequestDeletePhotos: function(t) {
        return {
            API: {
                type: r.default.PHOTOS_DELETE,
                endpoint: "/photo/del",
                param: {
                    ids: t.photoIds
                },
                success: t.success,
                fail: t.fail
            },
            photoIds: t.photoIds
        };
    },
    acGetSubtitle: function(t) {
        return {
            API: {
                type: r.default.PHOTO_SUBTITLE,
                endpoint: "/photo/getsubtitlev2",
                param: {
                    ids: t
                },
                normalizeFunc: function(t) {
                    return (0, u.normalize)(t.data.list, a.default.PhotoSubtitleSchemas.PHOTO_SUBTITLE_LIST);
                }
            }
        };
    },
    acDonationRank: function(t) {
        return {
            API: {
                type: r.default.DONATION_RANK,
                endpoint: "/pay/pay_rank_list",
                param: {
                    h_qs: "imageMogr2/gravity/center/rotate/0/thumbnail/!200x200r/crop/200x200/interlace/1/format/jpg/quality/50",
                    top_n: 10,
                    delta: t.delta
                },
                success: t.success,
                fail: t.fail
            }
        };
    },
    fetchUserCoins: function(t, e) {
        return {
            API: {
                type: r.default.USER_COINS,
                endpoint: "/account/user_coin",
                success: t,
                fail: e
            }
        };
    },
    fetchCoverUrl: function(t) {
        return {
            API: {
                type: r.default.FETCH_COVER_URL,
                endpoint: "/photo/get_cover",
                param: {
                    qs: "imageMogr2/gravity/center/quality/75/rotate/$/thumbnail/!375x667r/interlace/1/format/jpg",
                    album_id: t
                }
            },
            albumId: t
        };
    },
    acReloadUserInfo: function() {
        return {
            type: r.default.RELOAD_USER_INFO
        };
    },
    acGetNoticeNum: function() {
        return {
            API: {
                type: r.default.GET_NOTICE_NUM,
                endpoint: "/sysmsg/get_notice_num"
            }
        };
    },
    acSetNoticeRead: function() {
        return {
            API: {
                type: r.default.SET_NOTICE_READ,
                endpoint: "/sysmsg/set_notice_read"
            }
        };
    },
    acFetchSystemMessage: function(t) {
        return {
            API: {
                type: r.default.FETCH_SYSTEM_MESSAGE,
                endpoint: "/sysmsg/get_all_msg",
                param: {
                    start_t: t.startTime,
                    limit: t.limit
                }
            },
            isClear: t.isClear
        };
    },
    acSetOneMessageRead: function(t) {
        return {
            API: {
                type: r.default.SET_ONE_MESSAGE_READ,
                endpoint: "/sysmsg/set_one_msg_read",
                param: {
                    msg_id: t.msgId
                }
            },
            msgId: t.msgId
        };
    },
    acDeleteMessage: function(t) {
        return {
            API: {
                type: r.default.DELETE_MESSAGE,
                endpoint: "/sysmsg/del_one_msg",
                param: {
                    msg_id: t.msgId
                }
            },
            msgId: t.msgId
        };
    },
    acFetchBlackList: function(t) {
        return {
            API: {
                type: r.default.FETCH_BLACK_LIST,
                endpoint: "/comment/black_list",
                param: {
                    start_t: t.startTime,
                    limit: t.limit,
                    h_qs: "imageMogr2/gravity/center/rotate/0/thumbnail/!80x80r/crop/80x80/interlace/1/format/jpg/quality/50"
                }
            },
            startTime: t.startTime
        };
    },
    acRemoveBlackList: function(t) {
        return {
            API: {
                type: r.default.REMOVE_BLACK_LIST,
                endpoint: "/comment/unset_blacklist",
                param: {
                    black_mid: t.blackMid
                },
                success: t.success,
                fail: t.fail
            },
            blackMid: t.blackMid,
            cid: t.cid
        };
    },
    acAddToBlackList: function(t) {
        return {
            API: {
                type: r.default.ADD_BLACK_LIST,
                endpoint: "/comment/set_blacklist",
                param: {
                    black_mid: t.blackUser.mid
                },
                success: t.success,
                fail: t.fail
            },
            blackUser: t.blackUser,
            cid: t.cid
        };
    },
    acGetDownloadLid: function(t) {
        return {
            API: {
                type: r.default.GET_DOWNLOAD_LID,
                endpoint: "/album/get_download_album_lid",
                success: t.success,
                fail: t.fail
            }
        };
    },
    acGetAlbumDetail: function(t) {
        return {
            API: {
                type: r.default.GET_ALBUM_DETAIL,
                endpoint: "/album/open",
                param: {
                    lid: t.lid,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!216x290r/interlace/1/format/jpg",
                    s_qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!100x100r/crop/100x100/interlace/1/format/jpg"
                },
                normalizeFunc: function(t) {
                    return (0, u.normalize)([ t.data ], n.default.profileIdSchema);
                },
                success: t.success,
                fail: t.fail
            }
        };
    },
    acAuthorizeDownloadAlbum: function(t) {
        return {
            API: {
                type: r.default.AUTHORIZE_DOWNLOAD_ALBUM,
                endpoint: "/qrcode/authorize_download_album",
                param: {
                    album_id: t.albumId,
                    qrcode: t.qrcode
                },
                success: t.success,
                fail: t.fail
            }
        };
    },
    acAlbumToList: function(t) {
        return {
            type: r.default.ALBUM_TO_LIST,
            album: t
        };
    },
    acIsMeetSendCondition: function() {
        return {
            API: {
                type: r.default.IS_MEET_SEND_CONDITION,
                endpoint: "/account/is_meet_send_condition"
            }
        };
    },
    acIsMeetRewardCondition: function() {
        return {
            API: {
                type: r.default.IS_MEET_REWARD_CONDITION,
                endpoint: "/account/is_meet_reward_condition"
            }
        };
    },
    acSendTaskFinish: function(t) {
        return {
            API: {
                type: r.default.SEND_TASK_FINISH,
                endpoint: "/account/send_task_finish",
                param: {
                    done: t.done,
                    type: t.type
                }
            }
        };
    },
    acSelectPhoto: function(t) {
        return {
            type: r.default.SELECT_PHOTO_IN_LIST,
            photoId: t
        };
    },
    acCancelSelectPhoto: function(t) {
        return {
            type: r.default.CANCEL_SELECT_PHOTO_IN_LIST,
            photoId: t
        };
    },
    acClearSelectedPhoto: function() {
        return {
            type: r.default.CLEAR_SELECTED_PHOTO
        };
    },
    acFetchProfDynamics: function(t) {
        var a = t.mid, i = t.startTime, o = t.success, l = t.fail;
        return {
            API: {
                type: r.default.FETCH_PROFILE_DYNAMICS,
                endpoint: "/profile/list",
                param: {
                    visited_mid: a,
                    start_t: i,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!400x400r/crop/400x400/interlace/1/format/jpg",
                    h_qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!120x120r/crop/120x120/interlace/1/format/jpg",
                    limit: c.default.FETCH_PROFILE_LIST_LIMIT
                },
                normalizeFunc: function(t) {
                    var a = t.data, r = a.next_t, i = a.list.map(function(t) {
                        return t.p = 1, t;
                    });
                    return e({
                        nextT: r
                    }, (0, u.normalize)(i, n.default.idSchema));
                },
                success: o,
                fail: l
            },
            mid: a
        };
    },
    acFetchProfProducts: function(t) {
        var a = t.mid, i = t.startTime, o = t.success, l = t.fail;
        return {
            API: {
                type: r.default.FETCH_PROFILE_PRODUCTS,
                endpoint: "/profile/list_album",
                param: {
                    visited_mid: a,
                    start_t: i,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!690x388r/crop/690x388/interlace/1/format/jpg",
                    h_qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!120x120r/crop/120x120/interlace/1/format/jpg",
                    limit: c.default.FETCH_PROFILE_LIST_LIMIT
                },
                normalizeFunc: function(t) {
                    var a = t.data, r = a.next_t, i = a.list.map(function(t) {
                        return t.p = 1, t;
                    });
                    return e({
                        nextT: r
                    }, (0, u.normalize)(i, n.default.idSchema));
                },
                success: o,
                fail: l
            },
            mid: a
        };
    },
    acFetchAlbumStatus: function(t) {
        return {
            API: {
                type: r.default.FETCH_ALBUM_STATUS,
                endpoint: "/album/status_batch",
                param: {
                    ids: t
                },
                normalizeFunc: function(t) {
                    return (0, u.normalize)(t.data.list, a.default.AlbumListSchemas.ALBUM_LIST_ARRAY);
                }
            }
        };
    }
};