function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}

function s(e) {
    if (Array.isArray(e)) {
        for (var t = 0, s = Array(e.length); t < e.length; t++) s[t] = e[t];
        return s;
    }
    return Array.from(e);
}

function a(e, t) {
    var s = e.indexOf(t);
    return s > -1 && e.splice(s, 1), e;
}

function u(e, t) {
    var s = void 0;
    return t.forEach(function(t) {
        (s = e.indexOf(t)) > -1 && e.splice(s, 1);
    }), e;
}

function r(e, t) {
    return (e.slice() || []).filter(function(e) {
        return e.mid !== t;
    });
}

function d(e, t) {
    var s = e.slice() || [];
    return s.unshift(t), s;
}

function l(e, t) {
    var s = (0, S.default)(e, function(e) {
        return e === t.id;
    });
    return -1 !== s ? e.splice(s, 1, t.id) : e.unshift(t.id), e;
}

function n(e, t) {
    for (var s in e) e[s] = e[s].filter(function(e) {
        return e !== Number(t);
    });
    return e;
}

function i(e, t) {
    return t.forEach(function(t) {
        e = n(e, t);
    }), console.log(e), e;
}

function c(e, t) {
    var s = [];
    return (s = s.concat(e))[(0, S.default)(s, function(e) {
        return e.msg_id === t;
    })].read = 1, s;
}

function o(e, t) {
    var s = [];
    s = s.concat(e);
    var a = (0, S.default)(s, function(e) {
        return e.msg_id === t;
    });
    return s.splice(a, 1), s;
}

var f = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = arguments[t];
        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    }
    return e;
}, _ = require("../../common/const/common"), h = e(_), E = e(require("../const/actionType")), I = e(require("../../frameBase/utils/lodash.merge/index")), L = e(require("../../frameBase/utils/array-union/index")), T = e(require("../../frameBase/utils/object-assign/index")), S = e(require("../../frameBase/utils/array-find-index/index")), C = require("../../frameBase/library/redux/index"), m = e(require("./me/favorite")), p = e(require("../const/actionTypes/entities/dynamics")), O = e(require("../../frameBase/library/seamless-immutable/index")), g = (0, 
C.combineReducers)({
    userinfo: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            fetchingSuccess: !1,
            needFetch: !0,
            mid: ""
        } : arguments[0], t = arguments[1], s = e.albums + 1;
        switch (t.type) {
          case E.default.USERINFO + "_REQ":
            return (0, I.default)({}, e, {
                isFetching: !0
            });

          case E.default.USERINFO + "_SUC":
            return (0, I.default)({}, e, {
                isFetching: !1,
                fetchingSuccess: !0,
                needFetch: !1
            }, t.response.data);

          case E.default.USERINFO + "_FAI":
            return (0, I.default)({}, e, {
                fetchFailed: !0
            });

          case E.default.RESTORE_ARTICLE + "_SUC":
          case p.default.DELETE_DYNAMIC + "_SUC":
          case p.default.WIPE_DYNAMIC + "_SUC":
          case p.default.RESTORE_DYNAMIC + "_SUC":
          case E.default.DELETE_MUSIC + "_SUC":
          case E.default.SAVE_MUSIC + "_SUC":
          case E.default.USER_COINS + "_SUC":
          case E.default.WX_PAY_ORDER + "_SUC":
          case E.default.SUB_USER + "_SUC":
          case E.default.UNSUB_USER + "_SUC":
          case E.default.RESTORE_PHOTO + "_SUC":
          case p.default.DELETE_DYNAMIC_FAVORITES_LIST + "_SUC":
          case E.default.RELOAD_USER_INFO:
            return (0, I.default)({}, e, {
                needFetch: !0
            });

          case p.default.ADD_DYNAMIC_FAVORITES + "_SUC":
            var a = e.fav_num, u = void 0 === a ? 0 : a;
            return (0, I.default)({}, e, {
                fav_num: u + 1
            });

          case p.default.DELETE_DYNAMIC_FAVORITES + "_SUC":
            var r = e.fav_num, d = void 0 === r ? 0 : r;
            return (0, I.default)({}, e, {
                fav_num: d - 1
            });

          case p.default.COMMIT_DYNAMIC + "_SUC":
            return (0, I.default)({}, e, {
                needFetch: !0,
                albums: s
            });

          case E.default.UPLOAD_PHOTO_SUC:
            return void 0 !== e.left_photos ? (0, I.default)({}, e, {
                needFetch: !0,
                left_photos: e.left_photos + 1,
                photos: e.photos ? 1 : e.photos + 1
            }) : e;

          case E.default.PHOTO_DELETE + "_SUC":
            return void 0 !== e.left_photos ? (0, I.default)({}, e, {
                needFetch: !0,
                left_photos: e.left_photos - 1
            }) : e;

          case E.default.PHOTOS_DELETE + "_SUC":
            return void 0 !== e.left_photos ? (0, I.default)({}, e, {
                needFetch: !0,
                left_photos: e.left_photos - t.photoIds.length
            }) : e;

          case E.default.FOLLOW_USER + "_SUC":
            return (0, I.default)({}, e, {
                follow: String(Number(e.follow) + 1)
            });

          case E.default.UNFOLLOW_USER + "_SUC":
            return (0, I.default)({}, e, {
                follow: String(Number(e.follow) - 1)
            });

          default:
            return e;
        }
    },
    albumList: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            albumIdList: [],
            freshAlbumList: !1,
            showPublicFollowGudie: !1
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.ALBUM_TO_LIST:
            return (0, I.default)({}, e, {
                albumIdList: l(e.albumIdList, t.album)
            });

          case E.default.ALBUMLIST + "_REQ":
            return (0, I.default)({}, e, {
                isFetching: !0,
                freshAlbumList: !1
            });

          case E.default.ALBUMLIST + "_SUC":
            return t.isChecked && e.albumIdList.length ? t.response.result[0] !== e.albumIdList[0] || t.response.result.length > e.albumIdList.length ? (0, 
            I.default)({}, e, {
                isFetching: !1,
                albumIdList: t.response.result,
                hasNext: t.response.result.length >= h.default.FETCH_ALBUM_LIST_LIMIT,
                createTime: 0,
                freshAlbumList: !1
            }) : (0, I.default)({}, e, {
                isFetching: !1,
                hasNext: t.response.result.length >= h.default.FETCH_ALBUM_LIST_LIMIT
            }) : (0, I.default)({}, e, {
                isFetching: !1,
                albumIdList: (0, L.default)(e.albumIdList, t.response.result),
                hasNext: t.response.result.length >= h.default.FETCH_ALBUM_LIST_LIMIT,
                createTime: 0,
                freshAlbumList: !1
            });

          case E.default.ALBUMLIST + "_FAI":
            return (0, I.default)({}, e, {
                fetchingFailed: !0,
                freshAlbumList: !1
            });

          case p.default.DELETE_DYNAMIC + "_SUC":
            return (0, I.default)({}, e, {
                albumIdList: a(e.albumIdList, t.dynamicId)
            });

          case E.default.RESTORE_ARTICLE + "_SUC":
          case p.default.RESTORE_DYNAMIC + "_SUC":
            return (0, T.default)({}, e, {
                isFetching: !1,
                hasNext: !0,
                albumIdList: [],
                freshAlbumList: !1
            });

          case E.default.CLEAR_ALBUM_LIST:
            return {
                freshAlbumList: !0,
                albumIdList: [],
                isFetching: !1,
                hasNext: !0
            };

          case E.default.SHOW_PUBLIC_FOLLOW_GUIDE:
            return (0, I.default)({}, e, {
                showPublicFollowGudie: !0
            });

          case E.default.HIDE_PUBLIC_FOLLOW_GUIDE:
            return (0, I.default)({}, e, {
                showPublicFollowGudie: !1
            });

          case p.default.PUBLISH_DYNAMIC + "_SUC":
            var s = e.albumIdList.indexOf(t.dynamicId);
            if (-1 === s || t.dynamicId === t.response.data.id) return e;
            var u = [].concat(e.albumIdList);
            return u.splice(s, 1, t.response.data.id), (0, I.default)({}, e, {
                albumIdList: u
            });

          case p.default.COMMIT_DYNAMIC + "_SUC":
            return (0, I.default)({}, e, {
                hasNext: !0
            });

          default:
            return e;
        }
    },
    photoList: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            photoIds: [],
            albumPhotoIds: {},
            showPhotoDynamicIds: [],
            browseIndex: -1,
            selectedIds: [],
            isSpreadToolBar: !1
        } : arguments[0], s = arguments[1], a = void 0, u = -1, r = void 0, d = void 0;
        switch (s.type) {
          case E.default.RESTORE_PHOTO + "_SUC":
          case E.default.CLEAR_PHOTO_LIST:
          case E.default.UPLOAD_PHOTO_SUC:
            return {
                isFetching: !1,
                hasNext: !0,
                photoIds: [],
                selectedIds: [],
                albumPhotoIds: {},
                showPhotoDynamicIds: []
            };

          case E.default.FETCH_PHOTO_LIST + "_REQ":
            return (0, I.default)({}, e, {
                isFetching: !0
            });

          case E.default.FETCH_PHOTO_LIST + "_SUC":
            return (0, I.default)({}, e, {
                isFetching: !1,
                photoIds: (0, L.default)(e.photoIds, s.response.result),
                hasNext: s.response.result.length >= s.limit,
                lastDateTime: ""
            });

          case E.default.FETCH_PHOTO_LIST + "_FAI":
            return (0, I.default)({}, e, {
                isFetching: !1,
                expired: !1
            });

          case E.default.PHOTO_DELETE + "_SUC":
            return (0, T.default)({}, e, {
                albumPhotoIds: n(e.albumPhotoIds, s.photoId),
                photoIds: e.photoIds.filter(function(e) {
                    return e !== s.photoId;
                })
            });

          case E.default.PHOTOS_DELETE + "_SUC":
            return (0, T.default)({}, e, {
                photoIds: e.photoIds.filter(function(e) {
                    return s.photoIds.indexOf(e) < 0;
                }),
                selectedIds: [],
                albumPhotoIds: i(e.albumPhotoIds, s.photoIds),
                isSpreadToolBar: !1
            });

          case E.default.SET_PHOTO_BROWSE_INDEX:
            return (0, I.default)({}, e, {
                browseIndex: s.browseIndex
            });

          case E.default.SELECT_PHOTO_IN_LIST:
            return (a = [].concat(e.selectedIds)).push(s.photoId), (0, T.default)({}, e, {
                selectedIds: a
            });

          case E.default.CANCEL_SELECT_PHOTO_IN_LIST:
            for (var l = 0, c = (a = [].concat(e.selectedIds)).length; l < c; l++) if (a[l] === s.photoId) {
                u = l;
                break;
            }
            return u < 0 ? e : (a.splice(u, 1), (0, T.default)({}, e, {
                selectedIds: a
            }));

          case E.default.CLEAR_SELECTED_PHOTO:
            return (0, T.default)({}, e, {
                selectedIds: []
            });

          case E.default.GET_ALBUM_PHOTOS + "_SUC":
          case E.default.GET_ARTICLE_PHOTOS + "_SUC":
            return (0, T.default)({}, e, {
                albumPhotoIds: f({}, e.albumPhotoIds, t({}, s.albumId, s.response.result))
            });

          case E.default.GET_ALBUM_PHOTOS + "_FAI":
            return (0, T.default)({}, e, {
                albumPhotoIds: f({}, e.albumPhotoIds, t({}, s.albumId, []))
            });

          case E.default.SWITCH_PHOTO_LIST_TOOL_BAR:
            return (0, T.default)({}, e, {
                isSpreadToolBar: !e.isSpreadToolBar
            });

          case E.default.CHANGE_SHOW_PHOTO_DYNAMIC_ID:
            return r = e.showPhotoDynamicIds.indexOf(s.dynamicId), d = [].concat(e.showPhotoDynamicIds), 
            -1 === r ? d.push(s.dynamicId) : d.splice(r, 1), (0, T.default)({}, e, {
                showPhotoDynamicIds: d
            });

          default:
            return e;
        }
    },
    albumRecentlyDeleted: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            ids: [],
            hasNext: !0,
            isFetching: !1
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.CLAER_ALBUM_RECENTLY_DELETED:
            return {
                ids: [],
                hasNext: !0,
                isFetching: !1
            };

          case E.default.ALBUM_RECENTLY_DELETED + "_REQ":
            return (0, I.default)({}, e, {
                isFetching: !0
            });

          case E.default.ALBUM_RECENTLY_DELETED + "_SUC":
            return (0, I.default)({}, e, {
                isFetching: !1,
                ids: (0, L.default)(e.ids, t.response.result),
                hasNext: t.response.result.length >= h.default.FETCH_ALBUM_LIST_LIMIT
            });

          case E.default.ALBUM_RECENTLY_DELETED + "_FAI":
            return (0, I.default)({}, e, {
                fetchingFailed: !0
            });

          case p.default.WIPE_DYNAMIC + "_SUC":
            return (0, I.default)({}, e, {
                ids: a(e.ids, t.dynamicId)
            });

          case E.default.RESTORE_ARTICLE + "_SUC":
          case p.default.RESTORE_DYNAMIC + "_SUC":
            return (0, I.default)({}, e, {
                ids: a(e.ids, t.dynamicId)
            });

          case p.default.DELETE_DYNAMIC + "_SUC":
            return {
                ids: [],
                hasNext: !0,
                isFetching: !1
            };

          default:
            return e;
        }
    },
    photoRecentlyDeleted: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            startTime: -1,
            photoRecentlyDeletedIdList: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.PHOTO_RECENTLY_DELETED + "_REQ":
            return (0, I.default)({}, e, {
                isFetching: !0
            });

          case E.default.PHOTO_RECENTLY_DELETED + "_SUC":
            return (0, I.default)({}, e, {
                isFetching: !1,
                photoRecentlyDeletedIdList: (0, L.default)(e.photoRecentlyDeletedIdList, t.response.result),
                startTime: t.response.result.length >= h.default.FETCH_PHOTO_RECENTLY_DELETED_LIMIT ? t.response.startTime : 0
            });

          case E.default.PHOTO_RECENTLY_DELETED + "_FAI":
            return (0, I.default)({}, e, {
                isFetching: !1
            });

          case E.default.WIPE_PHOTO + "_SUC":
          case E.default.RESTORE_PHOTO + "_SUC":
            return (0, I.default)({}, e, {
                photoRecentlyDeletedIdList: u(e.photoRecentlyDeletedIdList, t.photoIds)
            });

          case E.default.PHOTO_DELETE + "_SUC":
          case E.default.PHOTOS_DELETE + "_SUC":
            return {
                isFetching: !1,
                startTime: -1,
                photoRecentlyDeletedIdList: []
            };

          default:
            return e;
        }
    },
    photosForBrowser: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            imageLoadState: 0,
            photoIdList: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.PHOTO_LISTARRAY + "_REQ":
            return (0, I.default)({}, e, {
                imageLoadState: 0,
                isFetching: !0
            });

          case E.default.PHOTO_LISTARRAY + "_SUC":
            return (0, I.default)({}, e, {
                imageLoadState: 1,
                isFetching: !1,
                photoIdList: (0, L.default)(e.photoIdList, t.response.result)
            });

          case E.default.PHOTO_LISTARRAY + "_FAI":
            return (0, I.default)({}, e, {
                imageLoadState: -1,
                isFetching: !1
            });

          case E.default.PHOTO_DELETE + "_SUC":
            return (0, I.default)({}, e, {
                photoIdList: a(e.photoIdList, t.photoId)
            });

          case E.default.PHOTOS_DELETE + "_SUC":
            return (0, I.default)({}, e, {
                photoIdList: u(e.photoIdList, t.photoIds)
            });

          default:
            return e;
        }
    },
    donation: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            rankList: [],
            userSelf: {}
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.DONATION_RANK + "_SUC":
            return (0, I.default)({}, e, {
                rankList: t.response.data.list,
                userSelf: t.response.data.self
            });

          default:
            return e;
        }
    },
    userCoins: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            needFetch: !0,
            coins: "",
            coinsExTable: []
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.USER_COINS + "_REQ":
            return (0, T.default)({}, e, {
                isFetching: !0
            });

          case E.default.USER_COINS + "_SUC":
            return (0, T.default)({}, e, {
                isFetching: !1,
                needFetch: !1,
                coins: t.response.data.coins,
                coinsExTable: t.response.data.coins_ex_table
            });

          case E.default.USER_COINS + "_FAI":
            return (0, T.default)({}, e, {
                isFetching: !1
            });

          default:
            return e;
        }
    },
    systemMessageList: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            startTime: -1,
            noticeNum: 0,
            messageList: []
        } : arguments[0], t = arguments[1], s = [];
        switch (t.type) {
          case E.default.GET_NOTICE_NUM + "_SUC":
            return (0, T.default)({}, e, {
                noticeNum: t.response.data.num
            });

          case E.default.SET_NOTICE_READ + "_SUC":
            return (0, T.default)({}, e, {
                noticeNum: 0
            });

          case E.default.FETCH_SYSTEM_MESSAGE + "_REQ":
            return (0, T.default)({}, e, {
                messageList: t.isClear ? [] : e.messageList,
                isFetching: !0,
                startTime: -1
            });

          case E.default.FETCH_SYSTEM_MESSAGE + "_SUC":
            return s = t.isClear ? t.response.data.list : (0, L.default)(e.messageList, t.response.data.list), 
            (0, T.default)({}, e, {
                isFetching: !1,
                messageList: s,
                startTime: e.messageList.length >= _.FETCH_NOTICE_LIMIT ? t.response.data.next_t : 0
            });

          case E.default.FETCH_SYSTEM_MESSAGE + "_FAI":
            return (0, T.default)({}, e, {
                isFetching: !1
            });

          case E.default.SET_ONE_MESSAGE_READ + "_SUC":
            return console.error(t.msgId), (0, T.default)({}, e, {
                messageList: c(e.messageList, t.msgId)
            });

          case E.default.DELETE_MESSAGE + "_SUC":
            return (0, T.default)({}, e, {
                messageList: o(e.messageList, t.msgId)
            });

          default:
            return e;
        }
    },
    blackLists: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            isFetching: !1,
            hasNext: !0,
            list: [],
            needFetch: !1,
            start_t: null,
            blackNum: 0
        } : arguments[0], t = arguments[1], s = [];
        switch (t.type) {
          case E.default.FETCH_BLACK_LIST + "_REQ":
            return (0, T.default)({}, e, {
                isFetching: !0
            });

          case E.default.FETCH_BLACK_LIST + "_SUC":
            return s = t.startTime >= 0 ? (0, L.default)(e.list, t.response.data.black_list) : (0, 
            L.default)([], t.response.data.black_list), (0, T.default)({}, e, {
                isFetching: !1,
                list: s,
                hasNext: t.response.data.black_list.length >= h.default.FETCH_BLACK_LIST_LIMIT,
                start_t: t.response.data.ret_next_t,
                needFetch: !1
            });

          case E.default.FETCH_BLACK_LIST + "_FAI":
            return (0, T.default)({}, e, {
                isFetching: !1
            });

          case E.default.REMOVE_BLACK_LIST + "_SUC":
            return (0, T.default)({}, e, {
                list: r(e.list, t.blackMid),
                blackNum: e.blackNum - 1
            });

          case E.default.GET_NOTICE_NUM + "_SUC":
            return (0, T.default)({}, e, {
                blackNum: t.response.data.black_list_count
            });

          case E.default.RELOAD_BLACK_LIST:
            return (0, T.default)({}, e, {
                needFetch: !0
            });

          case E.default.ADD_BLACK_LIST + "_SUC":
            return (0, T.default)({}, e, {
                list: d(e.list, t.blackUser),
                blackNum: e.blackNum + 1
            });

          default:
            return e;
        }
    },
    profileSetting: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            push_disabled: !1,
            push_confirm: 1,
            dy_user: !1
        } : arguments[0], t = arguments[1];
        switch (t.type) {
          case E.default.GET_PROFILE + "_SUC":
            return (0, T.default)({}, e, t.response.data, {
                push_confirm: t.response.data.push_confirm ? t.response.data.push_confirm : 0
            }, {
                dy_user: t.response.data.dy_user || !1
            });

          case E.default.SET_PUSH_DISABLED + "_SUC":
            return (0, T.default)({}, e, {
                push_disabled: t.push_disabled
            });

          case E.default.SET_PUSH_CONFIRM + "_SUC":
            return (0, T.default)({}, e, {
                push_disabled: 1 === t.push_confirm,
                push_confirm: t.push_confirm
            });

          default:
            return e;
        }
    },
    favorite: m.default,
    productsList: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, O.default)({
            isFetching: !1,
            hasNext: !0,
            idsList: [],
            shouldRefresh: !1
        }), t = arguments[1];
        switch (t.type) {
          case E.default.FETCH_PRODUCT_IN_PROFILE + "_REQ":
            return e.merge({
                isFetching: !0
            });

          case E.default.FETCH_PRODUCT_IN_PROFILE + "_SUC":
            return -1 === t.starTime && e.idsList.length ? t.response.result[0] !== e.idsList[0] || t.response.result.length > e.idsList.length ? e.merge({
                isFetching: !1,
                idsList: t.response.result,
                nextT: t.response.nextT,
                hasNext: t.response.result.length >= t.limit,
                shouldRefresh: !1
            }) : e.merge({
                isFetching: !1,
                hasNext: t.response.result.length >= t.limit
            }) : e.merge({
                isFetching: !1,
                idsList: -1 === t.starTime ? t.response.result : e.idsList.concat(t.starTime === e.nextT ? t.response.result : []),
                nextT: t.response.nextT,
                shouldRefresh: !1,
                hasNext: t.response.result.length >= t.limit
            });

          case E.default.FETCH_PRODUCT_IN_PROFILE + "_FAI":
            return e.merge({
                isFetching: !1
            });

          case E.default.ALBUM_TO_LIST:
            return e.merge({
                idsList: l([].concat(s(e.idsList)), t.album)
            });

          case p.default.DELETE_DYNAMIC + "_SUC":
            return e.merge({
                idsList: e.idsList.filter(function(e) {
                    return e !== t.dynamicId;
                })
            });

          case E.default.RESTORE_ARTICLE + "_SUC":
          case p.default.RESTORE_DYNAMIC + "_SUC":
            return e.merge({
                isFetching: !1,
                hasNext: !0,
                idsList: [],
                freshAlbumList: !1
            });

          case E.default.CLEAR_ALBUM_LIST:
            return e.merge({
                freshAlbumList: !0,
                idsList: [],
                isFetching: !1,
                hasNext: !0
            });

          case p.default.PUBLISH_DYNAMIC + "_SUC":
            var a = e.idsList.indexOf(t.dynamicId);
            if (-1 === a || t.dynamicId === t.response.data.id) return e;
            var u = [].concat(e.idsList);
            return u.splice(a, 1, t.response.data.id), e.merge({
                idsList: u
            });

          case p.default.COMMIT_DYNAMIC + "_SUC":
            return e.merge({
                hasNext: !0
            });

          default:
            return e;
        }
    }
});

module.exports = g;