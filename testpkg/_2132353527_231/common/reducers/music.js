function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    var t = [].concat(e);
    return t.length ? (t.splice(1), t) : t;
}

function s(e, t) {
    var s = [].concat(e);
    return s.pop(), s.push(t), s;
}

function u(e, t) {
    var s = [].concat(e), u = s.indexOf(t);
    return u > -1 ? (s.splice(u, 1), s) : (s.push(t), s);
}

function a(e, t, s) {
    var u = (0, f.default)({}, e);
    return u[t].name = s, u;
}

function i(e, t, s, u) {
    var a = (0, f.default)({}, e);
    return a[t].bmt = s, a[t].emt = u, a;
}

function r(e) {
    var t = e.slice() || [];
    return t.length ? t = t.map(function(e) {
        return e.id;
    }) : t;
}

function c(e, t, s) {
    var u = t.slice();
    if (!s) return u;
    var a = e.slice();
    return (0, l.default)(a, u);
}

var d = e(require("../const/actionType")), n = e(require("../const/actionTypes/entities/dynamics")), l = e(require("../../frameBase/utils/array-union/index")), f = e(require("../../frameBase/utils/object-assign/index")), _ = e(require("../../common/const/common")), S = (0, 
require("../../frameBase/library/redux/index").combineReducers)({
    myMusic: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            fetchSuc: !1,
            fetchFinished: !1,
            bottleUnread: 0,
            musicEntity: {},
            myMusicIdList: [],
            tplRecommendMusics: {},
            selectedMusicList: [],
            switchChoice: 0,
            musicSelectedIdList: [],
            shareId: null,
            isShareMusicGuideActive: !1,
            musicUnread: 0,
            bottleMusicIdSaved: null,
            giftMusicId: "",
            tplId: "",
            currentTab: 0,
            playingMusic: null,
            showCutBar: !1,
            showPlayBar: !1
        } : arguments[0], c = arguments[1], S = null, o = null, C = null;
        switch (c.type) {
          case d.default.SWITCH_SELECT:
            return (0, f.default)({}, e, {
                switchChoice: c.choice,
                musicSelectedIdList: t(e.musicSelectedIdList)
            });

          case d.default.FETCH_MUSIC_LIST + "_REQ":
            return (0, f.default)({}, e, {
                isFetching: !0
            });

          case d.default.FETCH_MUSIC_LIST + "_SUC":
            return (0, f.default)({}, e, {
                isFetching: !1,
                hasNext: c.response.result.length >= _.default.FETCH_MUSIC_LIST_LIMIT,
                fetchSuc: !0,
                fetchFinished: !c.response.result.length,
                bottleUnread: c.response.bottleUnread,
                musicEntity: (0, f.default)({}, e.musicEntity, c.response.entities.musicEntity),
                myMusicIdList: (0, l.default)(e.myMusicIdList, c.response.result)
            });

          case d.default.FETCH_MUSIC_LIST + "_FAI":
            return (0, f.default)({}, e, {
                isFetching: !1,
                fetchFailed: !0
            });

          case d.default.UPDATE_MUSICS_SELECTED:
            return (0, f.default)({}, e, {
                switchChoice: c.musics.length > 1 ? 1 : 0,
                musicSelectedIdList: c.musics
            });

          case d.default.MUSIC_SINGLE_SELECT_CLICK:
            return (0, f.default)({}, e, {
                musicSelectedIdList: s(e.musicSelectedIdList, c.musicId)
            });

          case d.default.MUSIC_MULTI_SELECT_CLICK:
            return (0, f.default)({}, e, {
                musicSelectedIdList: u(e.musicSelectedIdList, c.musicId)
            });

          case d.default.RENAME_MUSIC + "_SUC":
            return (0, f.default)({}, e, {
                musicEntity: a(e.musicEntity, c.musicId, c.musicName)
            });

          case d.default.DELETE_MUSIC + "_SUC":
            return S = e.myMusicIdList.slice() || [], o = e.musicSelectedIdList.slice() || [], 
            S = S.filter(function(e) {
                return c.deleteMusicId.indexOf(e) < 0;
            }), o = o.filter(function(e) {
                return c.deleteMusicId.indexOf(e) < 0;
            }), (0, f.default)({}, e, {
                myMusicIdList: S,
                musicSelectedIdList: o
            });

          case d.default.CHANGE_ALBUM_MUSIC + "_SUC":
            return (0, f.default)({}, e, {
                musicSelectedIdList: r(c.response.data.list || []),
                selectedMusicList: r(c.response.data.list || []),
                switchChoice: c.response.data.list.length > 1 ? 1 : 0,
                changeMusicAlbumId: c.albumId
            });

          case n.default.UPDATE_DYNAMIC + "_SUC":
            return (0, f.default)({}, e, {
                changeMusicAlbumId: ""
            });

          case d.default.RESET_MY_MUSIC:
          case d.default.SET_PC_MUSIC_UPD_END:
            return (0, f.default)({}, e, {
                fetchSuc: !1,
                fetchFinished: !1,
                myMusicIdList: []
            });

          case d.default.SET_MUSIC_UNREAD:
            return (0, f.default)({}, e, {
                musicUnread: c.newNum
            });

          case d.default.SAVE_MUSIC + "_SUC":
            return (0, f.default)({}, e, {
                bottleMusicIdSaved: c.response.data.music.id
            });

          case d.default.CLC_BOTTLE_ID_SAVED:
            return (0, f.default)({}, e, {
                bottleMusicIdSaved: null
            });

          case d.default.SELECT_GIFT_MUSIC:
            return (0, f.default)({}, e, {
                giftMusicId: c.musicId
            });

          case d.default.FETCH_RECOMMEND_MUSIC_LIST + "_SUC":
            return C = {}, C[c.tplId] = c.response.result, (0, f.default)({}, e, {
                musicEntity: (0, f.default)({}, e.musicEntity, c.response.entities.musicEntity),
                tplRecommendMusics: (0, f.default)({}, e.tplRecommendMusics, C)
            });

          case d.default.CLEAR_SELECTED_MUSIC:
            return (0, f.default)({}, e, {
                musicSelectedIdList: []
            });

          case d.default.SET_MUSIC_TAB_BAR:
            return 0 === c.currentIndex && e.musicUnread > 0 ? (0, f.default)({}, e, {
                currentTab: c.currentIndex,
                musicUnread: 0
            }) : (0, f.default)({}, e, {
                currentTab: c.currentIndex
            });

          case d.default.SHOW_MUSIC_PLAY_BAR:
            return (0, f.default)({}, e, {
                playingMusic: c.musicId,
                showPlayBar: !0
            });

          case d.default.CLOSE_MUSIC_PLAY_BAR:
            return (0, f.default)({}, e, {
                showPlayBar: !1
            });

          case d.default.SHOW_MUSIC_CUT_BAR:
            return (0, f.default)({}, e, {
                playingMusic: c.musicId,
                showCutBar: !0
            });

          case d.default.CLEAR_MUSIC_PLAY_STATE:
            return (0, f.default)({}, e, {
                playingMusic: null
            });

          case d.default.SAVE_MUSIC_MARK + "_SUC":
            return (0, f.default)({}, e, {
                musicEntity: i(e.musicEntity, c.musicId, c.beginMark, c.endMark),
                showCutBar: c.showCutBar
            });

          case d.default.CLOSE_MUSIC_CUT_BAR:
            return (0, f.default)({}, e, {
                showCutBar: !1
            });

          case d.default.APPLY_SHARE_MUSIC + "_SUC":
            return (0, f.default)({}, e, {
                shareId: c.response.data.id
            });

          default:
            return e;
        }
    },
    playMusic: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isPlaying: !1,
            progress: 0
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case d.default.SET_MUSIC_PLAYING:
            return (0, f.default)({}, e, {
                isPlaying: t.isPlaying
            });

          case d.default.SET_MUSIC_PLAYING_PROGRESS:
            return (0, f.default)({}, e, {
                progress: t.progress
            });

          case d.default.SHOW_MUSIC_PLAY_BAR:
          case d.default.SHOW_MUSIC_CUT_BAR:
            return (0, f.default)({}, e, {
                progress: 0 === t.progress ? 0 : e.progress
            });

          case d.default.CLEAR_MUSIC_PLAY_STATE:
            return (0, f.default)({}, e, {
                isPlaying: !1,
                progress: 0
            });

          default:
            return e;
        }
    },
    searchMusic: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isHotActive: !0,
            hotMusic: [],
            maxAllowSave: 0,
            isBottonActive: !1,
            isFetching: !1,
            hasNext: !1,
            searchResult: [],
            resultLen: 0,
            resultMode: "",
            musicName: "",
            musicNavTag: "",
            isNotWishActive: !1
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case d.default.SHOW_HOT_MUSIC:
            return (0, f.default)({}, e, {
                isHotActive: t.isHotActive,
                resultMode: ""
            });

          case d.default.FETCH_HOT_MUSIC + "_REQ":
            return (0, f.default)({}, e, {
                hasNext: !0
            });

          case d.default.FETCH_HOT_MUSIC + "_SUC":
            return (0, f.default)({}, e, {
                hotMusic: t.response.data.list,
                maxAllowSave: t.response.data.max_allow_save,
                hasNext: !1
            });

          case d.default.SET_SEARCH_STATE:
            return t.resetSea ? (0, f.default)({}, e, {
                isBottonActive: t.isBottonActive,
                isHotActive: !0,
                resultMode: "",
                musicName: ""
            }) : (0, f.default)({}, e, {
                isBottonActive: t.isBottonActive
            });

          case d.default.SEARCH_ALL_MUSIC + "_REQ":
            return (0, f.default)({}, e, {
                isFetching: !0
            });

          case d.default.SEARCH_ALL_MUSIC + "_SUC":
            return (0, f.default)({}, e, {
                resultMode: "search",
                musicName: t.musicName,
                isFetching: !1,
                hasNext: t.response.data.list.length >= _.default.SEARCH_MUSIC_LIMIT,
                searchResult: c(e.searchResult, t.response.data.list, t.isPageMode),
                resultLen: t.response.data.total
            });

          case d.default.MUSIC_NAV_TAG + "_REQ":
            return (0, f.default)({}, e, {
                isFetching: !0
            });

          case d.default.MUSIC_NAV_TAG + "_SUC":
            return (0, f.default)({}, e, {
                resultMode: "tag",
                musicNavTag: t.musicNavTag,
                isFetching: !1,
                hasNext: t.response.data.list.length >= _.default.MUSIC_TAG_NAV_LIMIT,
                searchResult: c(e.searchResult, t.response.data.list, t.isPageMode),
                resultLen: t.response.data.total
            });

          case d.default.SET_NOT_WISH_STATUS:
            return (0, f.default)({}, e, {
                isNotWishActive: t.isNotWishActive
            });

          default:
            return e;
        }
    },
    upMusic: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isPCUpFinished: !1
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case d.default.SET_PC_MUSIC_UPD_END:
            return (0, f.default)({}, e, {
                isPCUpFinished: t.isPCUpFinished
            });

          default:
            return e;
        }
    },
    shareMusic: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            music: {},
            sharer: {},
            isSelf: !1
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case d.default.FETCH_SHARE_MUSIC + "_REQ":
            return e;

          case d.default.FETCH_SHARE_MUSIC + "_SUC":
            return (0, f.default)({}, e, {
                music: t.response.data.list[0],
                sharer: {
                    mid: t.response.data.sharer_mid,
                    hurl: t.response.data.sharer_hurl,
                    nick: t.response.data.sharer_nick
                },
                isSelf: t.response.data.sharer_mid === t.response.data.mid
            });

          case d.default.ACCEPT_MUSIC + "_SUC":
            return (0, f.default)({}, e, {
                music: {
                    has_the_music: 1
                }
            });

          default:
            return e;
        }
    }
});

module.exports = S;