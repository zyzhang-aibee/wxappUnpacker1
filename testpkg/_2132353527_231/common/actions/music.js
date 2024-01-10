function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../schemas/schemas")), a = e(require("../const/actionType")), u = require("../../frameBase/library/normalizr/normalizr.min"), c = e(require("../../frameBase/utils/object-assign/index")), i = require("../../common/const/common"), n = function(e, t) {
    var a = [];
    return e.length && (a = e.map(function(e) {
        var a = e;
        return a.type = t, a;
    })), a;
};

module.exports = {
    acSetMusicUread: function(e) {
        return {
            type: a.default.SET_MUSIC_UNREAD,
            newNum: e
        };
    },
    acSwitchChoice: function(e) {
        return {
            type: a.default.SWITCH_SELECT,
            choice: e
        };
    },
    acFetchMusicList: function(e, i, r, s) {
        return {
            API: {
                type: a.default.FETCH_MUSIC_LIST,
                endpoint: "/music/list",
                param: {
                    limit: i,
                    offset: r
                },
                normalizeFunc: function(e) {
                    var a = e.data.list.slice() || [];
                    return a = n(a, 2), (0, c.default)({}, {
                        bottleUnread: e.data.plp_unread
                    }, (0, u.normalize)(a, t.default.MusicListSchemas.MUSIC_LIST));
                },
                success: s
            }
        };
    },
    acResetMusicList: function() {
        return {
            type: a.default.RESET_MY_MUSIC
        };
    },
    acSelectSingleMusic: function(e) {
        return {
            type: a.default.MUSIC_SINGLE_SELECT_CLICK,
            musicId: e
        };
    },
    acSelectMultiMusic: function(e) {
        return {
            type: a.default.MUSIC_MULTI_SELECT_CLICK,
            musicId: e
        };
    },
    acSetMusicPlaying: function(e) {
        return {
            type: a.default.SET_MUSIC_PLAYING,
            isPlaying: e
        };
    },
    acSetMusicProgress: function(e) {
        return {
            type: a.default.SET_MUSIC_PLAYING_PROGRESS,
            progress: e
        };
    },
    acRenameMusic: function(e, t, u, c) {
        return {
            API: {
                type: a.default.RENAME_MUSIC,
                endpoint: "/music/rename",
                param: {
                    name: u,
                    id: t
                },
                success: c
            },
            musicId: t,
            musicName: u
        };
    },
    acDeleteMusic: function(e, t, u) {
        return {
            API: {
                type: a.default.DELETE_MUSIC,
                endpoint: "/music/del",
                param: {
                    ids: t instanceof Array ? t : [ t ]
                },
                success: u
            },
            deleteMusicId: t
        };
    },
    acSetSearchState: function(e, t) {
        return {
            type: a.default.SET_SEARCH_STATE,
            isBottonActive: e,
            resetSea: t
        };
    },
    acSearchAllMusic: function(e, t, u, c, n) {
        return {
            API: {
                type: a.default.SEARCH_ALL_MUSIC,
                endpoint: "/plp/searchall",
                param: {
                    txt: u,
                    offset: c,
                    limit: n || i.SEARCH_MUSIC_LIMIT
                }
            },
            musicName: u,
            isPageMode: t
        };
    },
    acShowHotMusic: function(e) {
        return {
            type: a.default.SHOW_HOT_MUSIC,
            isHotActive: e
        };
    },
    acFetchHotMusic: function() {
        return {
            API: {
                type: a.default.FETCH_HOT_MUSIC,
                endpoint: "/plp/hot"
            }
        };
    },
    acMusicTagNav: function(e, t, u, c, n) {
        return {
            API: {
                type: a.default.MUSIC_NAV_TAG,
                endpoint: "/plp/navigate",
                param: {
                    tag: u,
                    offset: c,
                    limit: n || i.SEARCH_MUSIC_LIMIT
                }
            },
            isPageMode: t,
            musicNavTag: u
        };
    },
    acSetNotWishStatus: function(e) {
        return {
            type: a.default.SET_NOT_WISH_STATUS,
            isNotWishActive: e
        };
    },
    acSelectGiftMuisc: function(e) {
        return {
            type: a.default.SELECT_GIFT_MUSIC,
            musicId: e
        };
    },
    acUpdateMusicIdListSelected: function(e) {
        return {
            type: a.default.UPDATE_MUSICS_SELECTED,
            musics: e
        };
    },
    acFetchAlbumMusicId: function(e, t, u) {
        return {
            API: {
                type: a.default.CHANGE_ALBUM_MUSIC,
                endpoint: "/music/get_music_id",
                param: {
                    a_id: t
                },
                success: u
            },
            albumId: t
        };
    },
    acClcBottleIdSaved: function() {
        return {
            type: a.default.CLC_BOTTLE_ID_SAVED
        };
    },
    acPcUploadAuthorize: function(e) {
        return {
            API: {
                type: a.default.PC_UPLOAD_AUTHORIZE,
                endpoint: "/qrcode/authorize",
                param: {
                    qrcode: e.authCode
                },
                success: e.success,
                fail: e.fail
            }
        };
    },
    acPcUploadLoginConfirm: function(e) {
        return {
            API: {
                type: a.default.PC_UPLOAD_LOGIN_CONFIRM,
                endpoint: "/qrcode/confirm",
                param: {
                    qrcode: e.authCode
                },
                success: e.success,
                fail: e.fail
            }
        };
    },
    acSetPCMusicUpdEnd: function(e) {
        return {
            type: a.default.SET_PC_MUSIC_UPD_END,
            isPCUpFinished: e
        };
    },
    acFetchRecommendMusicList: function(e, i) {
        return {
            API: {
                type: a.default.FETCH_RECOMMEND_MUSIC_LIST,
                endpoint: "/album/get_musics_by_tpl_id",
                param: {
                    tpl_id: e
                },
                normalizeFunc: function(e) {
                    var a = e.data.list.slice() || [];
                    return a = n(a, 1), (0, c.default)({}, {
                        bottleUnread: e.data.plp_unread
                    }, (0, u.normalize)(a, t.default.MusicListSchemas.MUSIC_LIST));
                },
                success: i
            },
            tplId: e
        };
    },
    acClearSelectedMusic: function() {
        return {
            type: a.default.CLEAR_SELECTED_MUSIC
        };
    },
    acSetMusicTabBar: function(e) {
        return {
            type: a.default.SET_MUSIC_TAB_BAR,
            currentIndex: e
        };
    },
    acClearPlayState: function() {
        return {
            type: a.default.CLEAR_MUSIC_PLAY_STATE
        };
    },
    acSaveMarkMusicTime: function(e) {
        return {
            API: {
                type: a.default.SAVE_MUSIC_MARK,
                endpoint: "/music/mark",
                param: {
                    id: e.musicId,
                    beginMark: e.beginMark ? parseFloat(e.beginMark).toFixed(7) : 0,
                    endMark: e.endMark ? parseFloat(e.endMark).toFixed(7) : 0
                },
                success: e.success
            },
            musicId: e.musicId,
            beginMark: e.beginMark,
            endMark: e.endMark,
            showCutBar: e.showCutBar
        };
    },
    acShowMusicPlayBar: function(e, t) {
        return {
            type: a.default.SHOW_MUSIC_PLAY_BAR,
            musicId: e,
            progress: t
        };
    },
    acClosePlayBar: function() {
        return {
            type: a.default.CLOSE_MUSIC_PLAY_BAR
        };
    },
    acShowMusicCutBar: function(e, t) {
        return {
            type: a.default.SHOW_MUSIC_CUT_BAR,
            musicId: e,
            progress: t
        };
    },
    acCloseMusicCutBar: function() {
        return {
            type: a.default.CLOSE_MUSIC_CUT_BAR
        };
    },
    acApplyShareMusic: function(e) {
        return {
            API: {
                type: a.default.APPLY_SHARE_MUSIC,
                endpoint: "/music/applyshare",
                param: {
                    ids: e.ids
                },
                success: e.success,
                fail: e.fail
            }
        };
    },
    acFetchShareMusic: function(e) {
        return {
            API: {
                type: a.default.FETCH_SHARE_MUSIC,
                endpoint: "/music/sharepage_for_mini",
                param: {
                    fpage: 101,
                    id: e.musicId
                },
                success: e.success,
                fail: e.fail
            }
        };
    },
    acAcceptMusic: function(e) {
        return {
            API: {
                type: a.default.ACCEPT_MUSIC,
                endpoint: "/music/share_accept_v2",
                param: {
                    id: e.musicId
                },
                success: e.success
            }
        };
    }
};