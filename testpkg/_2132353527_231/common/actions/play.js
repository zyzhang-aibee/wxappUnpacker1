function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    var a = {};
    for (var i in e) t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (a[i] = e[i]);
    return a;
}

var a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, i = e(require("../others/utils")), n = e(require("../../common/const/common")), r = e(require("../const/actionType")), u = e(require("../../frameBase/utils/object-assign/index")), d = require("../const/index"), c = require("../../frameBase/library/normalizr/normalizr.min"), o = e(require("../schemas/dynamics"));

module.exports = {
    acFetchAlbum: function(e) {
        var t = {
            lid: e.lid,
            qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!400x400r/crop/400x400/interlace/1/format/jpg",
            s_qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!100x100r/crop/100x100/interlace/1/format/jpg",
            share_width: 625,
            share_height: 500
        };
        return i.default.isValidIpv4Addr(e.clientIp) && (t.ip = e.clientIp), {
            API: {
                type: r.default.FETCH_ALBUM,
                endpoint: "/album/open",
                param: t,
                success: e.success,
                fail: e.fail,
                normalizeFunc: function(e) {
                    return (0, c.normalize)([ e.data ], o.default.profileIdSchema);
                }
            }
        };
    },
    requestFavorDetail: function(e, t, a) {
        return {
            API: {
                type: r.default.FAVOR_DETAIL,
                endpoint: "/favor/detail",
                param: {
                    id: t,
                    log_params: {
                        proj: "ma",
                        tpl_id: a
                    }
                }
            }
        };
    },
    addFavor: function(e) {
        var t = e.albumId, a = e.tplId, i = e.id, n = e.albumType;
        return {
            API: {
                type: r.default.ADD_FAVOR,
                endpoint: "/favor/fav_album",
                param: {
                    id: t,
                    log_params: {
                        proj: "ma",
                        tpl_id: a
                    },
                    type: n === d.ALBUM_TYPE.ARTICLE ? d.ALBUM_TYPE.ARTICLE : ""
                }
            },
            aid: t,
            id: i
        };
    },
    minusFavor: function(e) {
        var t = e.albumId, a = e.id, i = e.albumType;
        return {
            API: {
                type: r.default.MINUS_FAVOR,
                endpoint: "/favor/unfav_album",
                param: {
                    id: t,
                    type: i === d.ALBUM_TYPE.ARTICLE ? d.ALBUM_TYPE.ARTICLE : ""
                }
            },
            aid: t,
            id: a
        };
    },
    acFetchComment: function(e, t) {
        return {
            API: {
                type: r.default.FETCH_COMMENT,
                endpoint: "/album/comment_list_v2",
                param: {
                    id: t
                },
                normalizeFunc: function(e) {
                    var t = e.data, i = t.good, n = t.all, r = i.list.map(function(e) {
                        return e.cid = e.id, delete e.id, e;
                    }), u = n.list.map(function(e) {
                        return e.cid = e.id, delete e.id, e;
                    });
                    return a({}, e, {
                        data: a({}, e.data, {
                            good: a({}, i, {
                                list: r
                            }),
                            all: a({}, n, {
                                list: u
                            })
                        })
                    });
                }
            }
        };
    },
    acFetchLatestComment: function(e) {
        return {
            API: {
                type: r.default.FETCH_LATEST_COMMENT,
                endpoint: "/album/all_comment_list_v2",
                param: {
                    id: e.id,
                    count: e.count,
                    next_t: e.nextT
                },
                normalizeFunc: function(e) {
                    var t = e.data.list.map(function(e) {
                        return e.cid = e.id, delete e.id, e;
                    });
                    return a({}, e, {
                        data: a({}, e.data, {
                            list: t
                        })
                    });
                }
            }
        };
    },
    acFetchNiceComment: function(e) {
        return {
            API: {
                type: r.default.FETCH_NICE_COMMENT,
                endpoint: "/album/good_comment_list",
                param: {
                    id: e.id,
                    count: e.count,
                    page_num: e.pageNum
                }
            }
        };
    },
    acDestroyComment: function() {
        return {
            type: r.default.DESTROY_COMMENT
        };
    },
    acShowReplyInput: function(e) {
        return {
            type: r.default.SHOW_REPLY_INPUT,
            cid: e
        };
    },
    acReplyComment: function(e) {
        return {
            API: {
                type: r.default.REPLY_COMMENT,
                endpoint: "/album/reply_comment_v2",
                param: {
                    id: e.id,
                    txt: e.txt,
                    cid: e.cid
                },
                success: e.success,
                fail: e.fail
            },
            cid: e.cid,
            msg: e.msg
        };
    },
    acDelCommentReply: function(e) {
        return {
            API: {
                type: r.default.DEL_COMMENT_REPLY,
                endpoint: "/album/del_comment_reply",
                param: {
                    id: e.id,
                    cid: e.cid
                },
                success: e.success,
                fail: e.fail
            },
            cid: e.cid
        };
    },
    acFavorComment: function(e) {
        var t = e.dynamicId, a = e.tar, i = e.id, n = e.cid, u = e.success, d = e.fail, c = void 0;
        return "favor" === a ? c = "/favor/fav_album_comment" : "favor-reply" === a ? c = "/favor/fav_album_comment_reply" : "favor-xng" === a && (c = "/favor/fav_album_comment_reply_by_xng"), 
        {
            API: {
                type: r.default.FAVOR_COMMENT,
                endpoint: c,
                param: {
                    id: i,
                    cid: n
                },
                success: u,
                fail: d
            },
            cid: n,
            tar: a,
            aid: i,
            dynamicId: t
        };
    },
    acUnfavorComment: function(e) {
        var t = e.dynamicId, a = e.tar, i = e.id, n = e.cid, u = e.success, d = e.fail, c = void 0;
        return "favor" === a ? c = "/favor/unfav_album_comment" : "favor-reply" === a ? c = "/favor/unfav_album_comment_reply" : "favor-xng" === a && (c = "/favor/unfav_album_comment_reply_by_xng"), 
        {
            API: {
                type: r.default.UN_FAVOR_COMMENT,
                endpoint: c,
                param: {
                    id: i,
                    cid: n
                },
                success: u,
                fail: d
            },
            cid: n,
            tar: a,
            aid: i,
            dynamicId: t
        };
    },
    acFetchSelfComment: function(e) {
        return {
            API: {
                type: r.default.FETCH_SELF_COMMENT,
                endpoint: "/album/self_comment_list",
                param: {
                    id: e.id,
                    next_t: e.nextT,
                    count: e.count
                },
                success: e.success,
                fail: e.fail
            }
        };
    },
    acDetorySelfComment: function() {
        return {
            type: r.default.DESTROY_SELF_COMMENT
        };
    },
    acAddSelfComment: function(e) {
        return {
            API: {
                type: r.default.ADD_SELF_COMMENT,
                endpoint: "/album/add_comment_v2",
                param: {
                    id: e.album.id,
                    txt: e.msg.txt,
                    is_into_profile: e.is_into_profile
                },
                success: e.success,
                fail: e.fail
            },
            msg: e.msg,
            album: e.album,
            is_into_profile: e.is_into_profile
        };
    },
    acDelSelfComment: function(e) {
        var t = e.id, a = e.cid, i = e.dynamicId, n = e.success, u = e.fail;
        return {
            API: {
                type: r.default.DEL_SELF_COMMENT,
                endpoint: "/album/del_comment",
                param: {
                    id: t,
                    cid: a
                },
                success: n,
                fail: u
            },
            cid: a,
            aid: t,
            dynamicId: i
        };
    },
    acFetchProfileInfo: function(e) {
        var t = e.visitedMid, a = e.startTime;
        return {
            API: {
                type: r.default.FETCH_PROFILE,
                endpoint: "/account/profile",
                param: {
                    visited_mid: t,
                    start_t: a,
                    qs: i.default.getImgQS(140, 140),
                    h_qs: i.default.getImgQS(160, 160),
                    limit: n.default.FETCH_PROFILE_LIST_LIMIT
                },
                normalizeFunc: function(e) {
                    return (0, u.default)({}, {
                        user: e.data.user
                    });
                }
            },
            mid: t
        };
    },
    acGetSubStatus: function(e) {
        return {
            API: {
                type: r.default.GET_SUB_STATUS,
                endpoint: "/account/get_sub_status",
                param: {
                    visited_mid: e.visitedMid
                }
            }
        };
    },
    acSubUser: function(e) {
        return {
            API: {
                type: r.default.SUB_USER,
                endpoint: "/account/sub_user",
                param: {
                    visited_mid: e.visitedMid
                },
                success: e.success,
                fail: e.fail
            },
            visitedMid: e.visitedMid,
            pg: e.pg
        };
    },
    acUnSubUser: function(e) {
        return {
            API: {
                type: r.default.UNSUB_USER,
                endpoint: "/account/unsub_user",
                param: {
                    visited_mid: e.visitedMid
                },
                success: e.success,
                fail: e.fail
            },
            visitedMid: e.visitedMid,
            pg: e.pg
        };
    },
    acFetchFollowFansList: function(e) {
        var t = 1;
        return "follow" === e.type ? t = 1 : "fans" === e.type && (t = 2), {
            API: {
                type: r.default.FETCH_FOLLOW_FANS_LIST,
                endpoint: "/account/get_sub_or_fans_list",
                param: {
                    visited_mid: e.visitedMid,
                    start_t: e.startTime,
                    limit: n.default.FETCH_FOLLOW_FANS_LIST_LIMIT,
                    h_qs: i.default.getImgQS(84, 84),
                    type: t
                }
            }
        };
    },
    acDestroyProfile: function() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).mid;
        return {
            type: r.default.DESTROY_PROFILE,
            mid: e
        };
    },
    acDestroyFans: function() {
        return {
            type: r.default.DESTROY_FANS
        };
    },
    acDisableProComment: function(e) {
        var t = e.dynamicId, a = e.id, i = e.cid, n = e.success, u = e.fail;
        return {
            API: {
                type: r.default.DISABLE_PROFILE_COMMENT,
                endpoint: "/album/disable_profile_comment",
                param: {
                    id: a,
                    cid: i
                },
                success: n,
                fail: u
            },
            cid: i,
            aid: a,
            dynamicId: t
        };
    },
    acDisplayProComment: function(e) {
        return {
            API: {
                type: r.default.DISPLAY_PROFILE_COMMENT,
                endpoint: "/album/display_profile_comment",
                param: {
                    id: e.id,
                    cid: e.cid
                },
                success: e.success,
                fail: e.fail
            },
            cid: e.cid
        };
    },
    acBanComment: function(e) {
        return {
            API: {
                type: r.default.BAN_COMMENT,
                endpoint: "/album/ban_comment",
                param: {
                    id: e.id,
                    cid: e.cid
                },
                success: e.success,
                fail: e.fail
            },
            cid: e.cid,
            id: e.id
        };
    },
    acMsgShouldToPro: function(e) {
        return {
            API: {
                type: r.default.PROFILE_COMMENT_ISDISINPRO,
                endpoint: "/album/is_comment_display_in_profile",
                success: e.success,
                fail: e.fail
            }
        };
    },
    acSetMsgShouldToPro: function(e) {
        return {
            type: r.default.PROFILE_SET_MSG_SHOULD_TO_PRO,
            isDisplayInProfile: e
        };
    },
    acDestroyAlbum: function() {
        return {
            type: r.default.DESTROY_PLAY_ALBUM
        };
    },
    acSetAlbumRead: function(e) {
        return {
            API: {
                type: r.default.SET_ALBUM_READ,
                endpoint: "/album/set_album_read",
                param: {
                    album_id: e.albumId
                },
                success: e.success,
                fail: e.fail
            }
        };
    },
    acAlbumFeedBack: function(e) {
        return {
            API: {
                type: r.default.ALBUM_FEEDBACK,
                endpoint: "/album/album_feedback",
                param: {
                    album_id: e.albumId,
                    type: e.type,
                    msg: e.msg || ""
                }
            }
        };
    },
    acSendMsgForShare: function(e) {
        var t = e.lid, a = e.biz, i = e.tpl_id, n = e.success, u = e.fail, d = {
            biz: a
        };
        return t && (d.lid = t), i && (d.log_params = {
            proj: "ma",
            tpl_id: i
        }), {
            API: {
                type: r.default.SEND_MSG_FOR_SHARE,
                endpoint: "/album/send_one_miniapp_msg_for_share",
                param: d,
                success: n,
                fail: u
            }
        };
    },
    shareAlbumCb: function(e) {
        var t = e.album_id, a = e.album_type, i = e.tpl_id;
        return {
            API: {
                type: r.default.SHARE_CALLBACK,
                endpoint: "/album/share_callback",
                param: {
                    id: t,
                    res_type: a === d.ALBUM_TYPE.ARTICLE ? d.SHARE_TYPE.ARTICLE : d.SHARE_TYPE.ALBUM,
                    type: 4,
                    log_params: {
                        proj: "ma",
                        tpl_id: i
                    }
                }
            }
        };
    },
    disableAlbumFailReason: function(e) {
        return {
            API: {
                type: r.default.DISABLE_ALBUM_FAIL_REASON,
                endpoint: "/album/disable_album_fail_reason",
                param: {
                    album_id: "" + e.albumId
                },
                success: e.success
            }
        };
    },
    acGetTimeFriend: function() {
        return {
            API: {
                type: r.default.GET_TIME_FRIEND,
                endpoint: "/account/get_may_know_user"
            }
        };
    },
    acFetchFavorList: function(e) {
        var t = e.albumId, a = e.offset, i = e.limit;
        return {
            API: {
                type: r.default.FETCH_FAVOR_LIST,
                endpoint: "/favor/get_fav_album_list",
                param: {
                    id: t,
                    offset: a,
                    limit: i,
                    h_qs: "imageMogr2/gravity/center/rotate/0/thumbnail/!80x80r/crop/80x80/interlace/1/format/jpg/quality/50"
                }
            },
            offset: a
        };
    },
    acDestroyFavorList: function() {
        return {
            type: r.default.DESTROY_FAVOR_LIST
        };
    },
    acFetchQrCode: function(e) {
        var i = e.scene, n = t(e, [ "scene" ]);
        return console.log(n), {
            API: {
                type: r.default.AC_FETCH_QR_CODE,
                endpoint: "/Qrcode/get_poster_qrcode",
                param: a({
                    scene: i
                }, n)
            },
            responseType: "arraybuffer"
        };
    }
};