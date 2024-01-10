function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = (0, 
    n.normalize)(e.data.list, d.default.idSchema), i = {}, s = {};
    return e.data.list.forEach(function(e) {
        var u = a.entities.dynamics[e.id];
        if (e.comments) {
            var c = (0, n.normalize)(e.comments, o.Schemas.COMMENT_ARRAY);
            i = r({}, i, c.entities.comments), u.commentIds = c.result, delete u.comments;
        }
        t ? s[u.user.mid] = 1 : u.is_follow && (s[u.user.mid] = u.is_follow);
    }), a.entities.comments = i, a.followedFriends = s, a.lastTime = e.data.next_t, 
    a;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acGetDynamicId = exports.acLogShare = exports.acLogView = exports.acCountShare = exports.acLogPlayUV = exports.acUnfollowUser = exports.acFollowUser = void 0;

var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
};

exports.acLog = function(e) {
    return {
        type: u.default.LOG,
        LOG: e
    };
}, exports.acFetchDiscover = function(e) {
    var t = e.startTime, a = void 0 === t ? -1 : t, i = e.limit, o = void 0 === i ? c.FETCH_LIMIT.DISCOVER_FEATURED : i, l = e.bannerQS, m = {
        qs: s.default.getImgQS({
            size: c.COVER_SIZE.DISCOVER_SIZE
        }),
        start_t: a,
        limit: o
    };
    return l && (m.quality_qs = s.default.getImgQS({
        width: l.width,
        height: l.height
    })), {
        API: {
            type: u.default.FETCH_DISCOVER,
            endpoint: "/album/featured",
            param: m,
            normalizeFunc: function(e) {
                var t = {}, a = [];
                return e.data.list.forEach(function(e) {
                    var i = (0, n.normalize)(e.albums, d.default.profileIdSchema);
                    t = r({}, t, i.entities.dynamics), a.push({
                        dl_t: e.dl_t,
                        ids: i.result
                    });
                }), l ? {
                    qualityFeatures: e.data.quality_features,
                    entities: {
                        dynamics: t
                    },
                    result: a
                } : {
                    entities: {
                        dynamics: t
                    },
                    result: a
                };
            }
        }
    };
}, exports.normalizeFeedData = t, exports.acFetchFeed = function(e) {
    var r = e.startTime, a = void 0 === r ? -1 : r, i = e.limit, n = void 0 === i ? c.FETCH_LIMIT.DISCOVER_FEED : i, o = e.refresh, l = e.success;
    return {
        API: {
            type: u.default.FETCH_FEED,
            endpoint: "/album/get_user_trends",
            param: {
                qs: s.default.getImgQS({
                    size: c.COVER_SIZE.FEED_SIZE
                }),
                h_qs: s.default.getImgQS({
                    size: c.COVER_SIZE.HEAD_SIZE
                }),
                start_t: a,
                limit: n,
                share_width: 625,
                share_height: 500
            },
            success: l,
            normalizeFunc: function(e) {
                return t(e, !0);
            }
        },
        refresh: o
    };
}, exports.acClearFeed = function() {
    return {
        type: u.default.CLEAR_FEED
    };
}, exports.acFetchRecommend = function(e) {
    var r = e.topicId, a = e.tagId, i = e.refresh, n = e.success, o = e.listName, d = void 0 === o ? "discoverRecommend" : o, m = e.pageIndex, _ = {
        rec_ab_config: wx.xngGlobal.abTest.backend_recommend_algorithm,
        log_params: {
            page: (0, l.getPage)(),
            common: (0, l.getCommonFields)()
        },
        qs: s.default.getImgQS({
            size: c.COVER_SIZE.FEED_SIZE
        }),
        h_qs: s.default.getImgQS({
            size: c.COVER_SIZE.HEAD_SIZE
        }),
        share_width: 625,
        share_height: 500
    };
    return r && Object.assign(_, {
        topic_id: r
    }), a && Object.assign(_, {
        tag_id: a
    }), {
        API: {
            type: u.default.FETCH_FEED_RECOMMEND,
            endpoint: "/trends/get_recommend_trends",
            param: _,
            success: n,
            normalizeFunc: function(e) {
                return t(e);
            }
        },
        refresh: i,
        listName: d,
        pageIndex: m
    };
}, exports.acClearRecommend = function(e) {
    var t = e.listName, r = e.pageIndex;
    return {
        type: u.default.CLEAR_FEED_RECOMMEND,
        listName: t,
        pageIndex: r
    };
}, exports.acInsertToDiscoverRecommend = function(e) {
    var t = e.dynamic;
    return {
        type: u.default.INSERT_TO_DISCOVER_RECOMMEND,
        dynamic: t
    };
}, exports.acFetchWeakFriend = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.limit, r = void 0 === t ? c.FETCH_LIMIT.DISCOVER_WEAK_FRIEND : t, a = e.refresh;
    return {
        API: {
            type: u.default.FETCH_WEAK_FRIEND,
            endpoint: "/account/get_weak_friends",
            param: {
                limit: r,
                h_qs: s.default.getImgQS({
                    size: c.COVER_SIZE.BIG_HEAD_SIZE
                })
            },
            normalizeFunc: function(e) {
                return (0, n.normalize)(e.data.list, o.Schemas.WEAK_FRIEND_ARRAY);
            }
        },
        refresh: a
    };
}, exports.acFetchComment = function(e) {
    var t = e.mid, a = e.id, i = e.lastTime, l = e.refresh, d = e.limit, m = void 0 === d ? c.FETCH_LIMIT.DISCOVER_COMMENT : d;
    return {
        API: {
            type: u.default.FETCH_DYNAMIC_COMMENT,
            endpoint: "/profile/list_profile_comment",
            param: {
                id: a,
                profile_mid: t,
                start_t: i,
                limit: m,
                h_qs: s.default.getImgQS({
                    size: c.COVER_SIZE.HEAD_SIZE
                })
            },
            normalizeFunc: function(e) {
                return r({}, (0, n.normalize)(e.data.list, o.Schemas.COMMENT_ARRAY), {
                    lastTime: e.data.next_t
                });
            }
        },
        refresh: l
    };
}, exports.acClearComment = function() {
    return {
        type: u.default.CLEAR_DYNAMIC_COMMENT
    };
}, exports.acLikeComment = function(e) {
    var t = e.mid, r = e.id, a = e.cid;
    return {
        API: {
            type: u.default.LIKE_DYNAMIC_COMMENT,
            endpoint: "/profile/set_profile_comment_favor",
            param: {
                id: r,
                profile_mid: t,
                profile_cid: a
            }
        },
        cid: a
    };
}, exports.acCancelLikeComment = function(e) {
    var t = e.mid, r = e.id, a = e.cid;
    return {
        API: {
            type: u.default.CANCEL_LIKE_DYNAMIC_COMMENT,
            endpoint: "/profile/unset_profile_comment_favor",
            param: {
                id: r,
                profile_mid: t,
                profile_cid: a
            }
        },
        cid: a
    };
}, exports.acFetchDynamicFavor = function(e) {
    var t = e.id, a = e.mid, i = e.offset, l = void 0 === i ? 0 : i, d = e.limit, m = void 0 === d ? c.FETCH_LIMIT.DISCOVER_DYNAMIC_FAVOR : d;
    return {
        API: {
            type: u.default.FETCH_DYNAMIC_FAVOR_USER,
            endpoint: "/profile/get_favor_list",
            param: {
                id: t,
                profile_mid: a,
                offset: l,
                limit: m,
                h_qs: s.default.getImgQS({
                    size: c.COVER_SIZE.HEAD_SIZE
                })
            },
            normalizeFunc: function(e) {
                var t = {};
                return e.data.list.forEach(function(e) {
                    e.is_follow && (t[e.mid] = e.is_follow);
                }), r({}, (0, n.normalize)(e.data.list, o.Schemas.DYNAMIC_FAVOR_ARRAY), {
                    followedFriends: t
                });
            }
        }
    };
}, exports.acClearDynamicFavor = function() {
    return {
        type: u.default.CLEAR_DYNAMIC_FAVOR_USER
    };
}, exports.acFetchMessage = function(e) {
    var t = e.lastTime, a = void 0 === t ? -1 : t, i = e.limit, l = void 0 === i ? c.FETCH_LIMIT.DISCOVER_FEED_MSG : i, d = e.unreadFetchLimit;
    return {
        API: {
            type: u.default.FETCH_DYNAMIC_MESSAGE,
            endpoint: "/sysmsg/get_feed_msg",
            param: {
                start_t: a,
                limit: l,
                qs: s.default.getImgQS({
                    size: c.COVER_SIZE.HEAD_SIZE
                })
            },
            normalizeFunc: function(e) {
                var t = e.data.next_t, a = l < c.FETCH_LIMIT.DISCOVER_FEED_MSG, i = e.data.list.length < c.FETCH_LIMIT.DISCOVER_FEED_MSG;
                return !a && i && (t = 0), r({}, (0, n.normalize)(e.data.list, o.Schemas.MESSAGE_ARRAY), {
                    lastTime: t
                });
            }
        },
        unreadFetchLimit: d
    };
}, exports.acClearUnreadMessage = function() {
    return {
        API: {
            type: u.default.CLEAR_UNREAD_DYNAMIC_MESSAGE,
            endpoint: "/sysmsg/set_notice_read",
            param: {
                is_feed: !0
            }
        }
    };
}, exports.acSeeEarlierMsg = function() {
    return {
        type: u.default.SEE_EARLIER_DYNAMIC_MESSAGE
    };
}, exports.acResetMessage = function() {
    return {
        type: u.default.RESET_DYNAMIC_MESSAGE
    };
}, exports.acFetchIfCanMakeSame = function(e) {
    var t = e.albumId, r = e.tplId, a = e.dynamicId;
    return {
        API: {
            type: u.default.FETCH_IF_CAN_MAKE_SAME,
            endpoint: "/music/can_do_same_album",
            param: {
                album_id: t,
                tpl_id: r
            }
        },
        dynamicId: a
    };
}, exports.acSaveAlbumMusic = function(e) {
    var t = e.albumId, r = e.tplId;
    return {
        API: {
            type: u.default.SAVE_ALBUM_MUSIC,
            endpoint: "/music/can_do_same_album",
            param: {
                album_id: t,
                tpl_id: r,
                save: 1
            }
        },
        tpl_id: r
    };
}, exports.acSetCurComment = function(e) {
    return {
        type: u.default.SET_CUR_DYNAMIC_COMMENT,
        comment: e
    };
}, exports.acClearCurComment = function() {
    return {
        type: u.default.CLEAR_CUR_DYNAMIC_COMMENT
    };
};

var a = require("./dynamic");

Object.defineProperty(exports, "acFollowUser", {
    enumerable: !0,
    get: function() {
        return a.acFollowUser;
    }
}), Object.defineProperty(exports, "acUnfollowUser", {
    enumerable: !0,
    get: function() {
        return a.acUnfollowUser;
    }
}), Object.defineProperty(exports, "acLogPlayUV", {
    enumerable: !0,
    get: function() {
        return a.acLogPlayUV;
    }
}), Object.defineProperty(exports, "acCountShare", {
    enumerable: !0,
    get: function() {
        return a.acCountShare;
    }
}), Object.defineProperty(exports, "acLogView", {
    enumerable: !0,
    get: function() {
        return a.acLogView;
    }
}), Object.defineProperty(exports, "acLogShare", {
    enumerable: !0,
    get: function() {
        return a.acLogShare;
    }
}), Object.defineProperty(exports, "acGetDynamicId", {
    enumerable: !0,
    get: function() {
        return a.acGetDynamicId;
    }
}), exports.acResetPublish = function() {
    return {
        type: u.default.RESET_PUBLISH
    };
}, exports.acSetPublishText = function(e) {
    return {
        type: u.default.SET_PUBLISH_TEXT,
        value: e
    };
}, exports.acAddAlbumMaterial = function(e) {
    return {
        type: u.default.ADD_ALBUM_MATERIAL,
        data: e
    };
}, exports.acRemoveAlbumMatrial = function(e) {
    return {
        type: u.default.REMOVE_ALBUM_MATERIAL,
        data: e
    };
}, exports.acFetchContributeAlbum = function(e) {
    return {
        API: {
            type: u.default.FETCH_CONTRIBUTE,
            endpoint: "/album/list",
            param: r({}, e, {
                qs: s.default.getImgQS({
                    size: c.COVER_SIZE.FEED_SIZE
                })
            }),
            normalizeFunc: function(e) {
                return r({}, (0, n.normalize)(e.data.list, d.default.profileIdSchema), {
                    total: e.data.total,
                    next_t: e.data.next_t
                });
            }
        }
    };
}, exports.clcContribute = function() {
    return {
        type: u.default.CLC_CONTRIBUTE
    };
}, exports.acFetchHotWords = function() {
    return {
        API: {
            type: u.default.FETCH_HOT_WORDS,
            endpoint: "/search/get_hot_words",
            param: {}
        }
    };
}, exports.acSearchUser = function(e) {
    var t = {
        offset: e.offset,
        limit: e.limit,
        arr_txt: {
            nick: e.txt
        },
        h_qs: s.default.getImgQS({
            size: c.COVER_SIZE.BIG_HEAD_SIZE
        })
    };
    return {
        API: {
            type: u.default.DISCOVER_SEARCH_USER,
            endpoint: "/search/user",
            param: t,
            fail: e.fail
        }
    };
}, exports.acDiscoverSearchAlbum = function(e) {
    var t = e.txt, r = e.offset, a = e.limit, i = e.fail;
    return {
        API: {
            type: u.default.DISCOVER_SEARCH_ALBUM,
            endpoint: "/album/search_featured",
            param: {
                qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!224x166r/crop/224x166/interlace/1/format/jpg",
                txt: t,
                offset: r,
                limit: a
            },
            normalizeFunc: function(e) {
                return (0, n.normalize)(e.data.list, d.default.profileIdSchema);
            },
            fail: i
        }
    };
}, exports.acDiscoverSearchAllReset = function() {
    return {
        type: u.default.DISCOVER_SEARCH_All_RESET
    };
}, exports.acFetchSquareAlbum = function(e) {
    var t = e.starTime, r = e.limit;
    return {
        API: {
            type: u.default.FETCH_SQUARE,
            endpoint: "/album/square_with_sort_album",
            param: {
                start_score: t || -1,
                qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!224x166r/crop/224x166/interlace/1/format/jpg",
                limit: r
            }
        }
    };
}, exports.acDelRecommendItem = function(e) {
    return {
        type: u.default.DEL_RECOMMEND_ITEM,
        did: e
    };
};

var i = require("../../frameBase/library/redux/index"), n = require("../../frameBase/library/normalizr/normalizr.min"), o = require("../schemas/schemas"), s = e(require("../utils/index")), u = e(require("../const/actionType")), c = require("../const/index"), l = require("../others/dynamicActionLog"), d = e(require("../schemas/dynamics"));

exports.default = (0, i.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);