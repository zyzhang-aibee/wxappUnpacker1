function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i;
    }
    return Array.from(t);
}

var i = function() {
    function t(t, e) {
        var i = [], a = !0, o = !1, n = void 0;
        try {
            for (var s, r = t[Symbol.iterator](); !(a = (s = r.next()).done) && (i.push(s.value), 
            !e || i.length !== e); a = !0) ;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            o = !0, n = t;
        } finally {
            try {
                !a && r.return && r.return();
            } finally {
                if (o) throw n;
            }
        }
        return i;
    }
    return function(e, i) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), a = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
}, o = require("../../common/others/businessUtils"), n = t(require("../../common/actions/entities/dynamics")), s = t(require("../../common/const/common")), r = require("./redDotController"), l = t(require("../../common/others/msgManager")), u = require("../../common/others/utils"), d = require("../../common/const/index"), c = t(require("../../common/utils/play/articleActionUtils")), m = t(require("../../common/actions/produce")), h = require("../../frameBase/Component/MoreActionSheet/actionsData"), f = t(require("./components/menu/config")), x = t(require("../../common/actions/play")), g = t(require("../../common/actions/me")), T = t(require("../../common/others/discover/pushStat")), p = require("../../common/others/discover/utils"), b = t(require("../../common/components/album-success-tip/checkAlbumStatus")), A = wx.xngGlobal.store.dispatch;

wx.xng.Page({
    data: {
        customNavigationBarData: {
            title: "我",
            isShowBack: !1
        },
        curTab: "product",
        ALBUM_TYPE_BAN: s.default.ALBUM_TYPE_BAN,
        noProfileData: !1,
        menuConfig: f.default,
        userinfo: {},
        isiOS: wx.xngGlobal.sysInfo.system.indexOf("iOS") > -1,
        fontSizeAB: wx.xngGlobal.abTest.big_font_size || ""
    },
    nextT: null,
    userNeedFetch: !0,
    hasDraft: !1,
    hasShowProduceToolTip: wx.getStorageSync("produce_tool_tip"),
    mapStateToData: function(t) {
        var e = t.produce, i = t.me, a = i.productsList, o = i.userinfo, n = t.play.profile, r = t.profiles, l = t.global.isBigFontScheme, u = t.albumStatus.checkList;
        this.checkList = u, this.hasDraft = e.edit.draft.photos.length, this.handleShowProduceToolTip(), 
        this.userNeedFetch = n.userNeedFetch;
        var d = void 0, c = void 0, m = !1, h = this.getOpenContents(r, t.entities_.dynamics, a, o), f = h.dynamics, x = h.products;
        "dynamic" === this.data.curTab ? (m = !f.list.length, d = f.hasNext, c = f.isFetching) : (m = !x.list.length, 
        d = x.hasNext, c = x.isFetching);
        var g = n.userInfo || {};
        return {
            dynamics: f,
            products: x,
            hasNext: d,
            isFetching: c,
            noProfileData: m,
            menuConfig: this.processMenuConfig(o),
            userinfo: o,
            profileUser: g,
            fontSizeScale: l ? s.default.FONT_SIZE_SCALE : 1
        };
    },
    onLoad: function(t) {
        wx.showLoading && wx.showLoading({
            title: "加载中",
            mask: !0
        }), (0, u.tplMsgRedirect)(t), "{}" === JSON.stringify(wx.xngGlobal.store.getState().entities.miniTpl) && m.default.acGetTenSecondsTpl(), 
        "share" === t.from && wx.xngGlobal.xu.logger && wx.xngGlobal.xu.logger.logMoniter("fromShare", {
            shareMid: t.mid
        }), t.mid || (t.mid = wx.xngGlobal.xu.mid);
        var e = wx.xngGlobal.abTest.big_font_size, i = void 0 === e ? "" : e;
        this.setData({
            options: t,
            totalTopHeight: wx.xngGlobal.navigationHeight,
            fontSizeAB: i
        });
    },
    onShow: function() {
        wx.hideLoading && wx.hideLoading(), wx.showTabBar && wx.showTabBar(), A(x.default.acDestroyProfile()), 
        this.data.userinfo.needFetch && A(g.default.fetchUserinfo()), this.mapStateToData(wx.xngGlobal.store.getState()), 
        this.loadProfileUserInfo(), this.loadDynamic(), this.loadAlbum(), (0, r.setControllerData)(), 
        l.default.startPollMsg(), this.getUnreadMsgNum(), this.handleShowTip(), wx.xngGlobal.checkStatusTimer = setInterval(b.default, 1e4);
    },
    onHide: function() {
        this.clearTimer(), l.default.endPollMsg();
    },
    onUnload: function() {
        this.clearTimer(), l.default.endPollMsg();
    },
    clearTimer: function() {
        this.timer && (clearTimeout(this.timer), this.timer = null);
    },
    getOpenContents: function(t, e, i, o) {
        var n = this, s = (t[wx.xngGlobal.xu.mid] || {}).dynamics, r = void 0 === s ? {} : s, l = r.list, u = void 0 === l ? [] : l, d = r.isFetching, c = void 0 !== d && d, m = r.hasNext, h = void 0 === m || m, f = r.nextT, x = void 0 === f ? null : f, g = u.map(function(t) {
            return a({}, e[t]);
        }), T = i.idsList, p = void 0 === T ? [] : T, b = i.isFetching, A = void 0 !== b && b, _ = i.hasNext, w = void 0 === _ || _, y = i.nextT, S = void 0 === y ? null : y;
        return {
            dynamics: {
                list: g,
                isFetching: c,
                hasNext: h,
                nextT: x
            },
            products: {
                list: p.map(function(t) {
                    return a({}, n.dataAdapter(e[t], o));
                }),
                isFetching: A,
                hasNext: w,
                nextT: S
            }
        };
    },
    dataAdapter: function(t, e) {
        var i = a({}, t, {
            type: t.album_type === d.ALBUM_TYPE.ARTICLE ? d.FEED_TYPE.ARTICLE : d.FEED_TYPE.ALBUM,
            album_id: t.album_id || t.id,
            album_user: {
                mid: e && e.mid
            },
            a_profile_id: t.profile_id,
            id: t.profile_id
        });
        return i.status === s.default.ALBUM_STATUS.MAKING || i.status === s.default.ALBUM_STATUS.PREPARE ? (i.maskVisible = !0, 
        i.maskTextA = "正在制作中", i.maskTextB = "将在" + (0, u.formatUnixTime)(i.lnt) + "推送") : i.status === s.default.ALBUM_STATUS.WAIT ? (i.maskVisible = !0, 
        i.maskTextA = "正在制作中", i.maskTextB = "将在" + (0, u.formatUnixTime)(i.lnt) + "推送") : i.status === s.default.ALBUM_STATUS.FAIL ? (i.maskVisible = !0, 
        i.maskTextA = "制作失败", i.maskTextB = "建议您复制重做或者删除后重做") : i.status === s.default.ALBUM_STATUS.REDO ? (i.maskVisible = !0, 
        i.maskTextA = "制作超时", i.maskTextB = "正在为您重新制作") : (i.maskVisible = !1, i.maskTextA = "", 
        i.maskTextB = ""), i;
    },
    getUnreadMsgNum: function() {
        var t = [].concat(e(this.data.menuConfig)), i = (0, r.getData)(), a = i.unreadMsgNum, o = i.hasNewCollect;
        t[5].topCount = a, t[1].redDot = o, this.setData({
            menuConfig: t
        });
    },
    handleShowTip: function() {
        9014 !== wx.xngGlobal.xu.scene && 9043 !== wx.xngGlobal.xu.scene || wx.getStorageSync("hasShowAlbumListTip") || (wx.xng.showTooltip({
            componentClass: "menu",
            id: "albumList",
            position: "top",
            text: "影集在这里管理",
            autoHide: !0
        }), wx.setStorageSync("hasShowAlbumListTip", !0));
    },
    onSwitchTab: function(t) {
        var e = t.detail.key;
        this.setData({
            curTab: e
        });
        var i = this.data, a = i.dynamics, o = i.products, n = !1, s = !0;
        "dynamic" === e ? (n = !a.list.length, s = a.hasNext, this.loadDynamic(-1)) : (n = !o.list.length, 
        s = o.hasNext), this.setData({
            noProfileData: n,
            hasNext: s
        });
    },
    onScrollToLower: function() {
        "dynamic" === this.data.curTab ? this.loadDynamic() : this.loadAlbum(!0);
    },
    loadProfileUserInfo: function() {
        this.userNeedFetch && A(x.default.acFetchProfileInfo({
            visitedMid: wx.xngGlobal.xu.mid,
            startTime: this.nextT
        }));
    },
    loadDynamic: function(t) {
        var e = this.data.dynamics, i = e.isFetching, a = e.hasNext, o = e.nextT;
        if (!i && a) {
            var n = wx.xngGlobal.xu.mid;
            A(g.default.acFetchProfDynamics({
                mid: n,
                startTime: t || o
            }));
        }
    },
    loadAlbum: function(t) {
        var e = this.data.products, i = e.isFetching, a = e.hasNext, o = e.nextT, n = -1;
        if (t) {
            if (i || !a) return;
            n = o || -1;
        }
        A(g.default.fetchProductList(n, s.default.FETCH_ALBUM_LIST_LIMIT));
    },
    onAlbumTap: function(t) {
        var e = t.detail.album, a = e.lid, n = e.tpl_id, r = e.stpl_id, l = e.a_profile_id, u = e.mid, c = e.status, m = e.album_type, h = e.album_id, f = n === s.default.TPL_TYPE.RANDOM ? r : n, x = wx.xngGlobal.abTest.author_dynamic_page, g = void 0 === x ? "" : x, T = this.checkList.filter(function(t) {
            return t.albumId === h;
        }), p = i(T, 1)[0];
        c === s.default.ALBUM_STATUS.SUCCESS || !p || g && p.isNewAlbum ? (0, o.goDynamicSharePage)({
            dynamicId: l,
            dynamicMid: u,
            tplId: f,
            isArticle: m === d.ALBUM_TYPE.ARTICLE ? 1 : "",
            albumId: h
        }) : wx.navigateTo({
            url: "/pages/specialPlay/common/waitingFinishPage/waitingFinishPage?lid=" + a
        });
    },
    handleShowProduceToolTip: function() {
        var t = this;
        !this.hasShowProduceToolTip && this.hasDraft && (this.clearTimer(), this.timer = setTimeout(function() {
            wx.xng.showTooltip({
                id: "tabBarLine",
                position: "top",
                text: "您有未完成的影集",
                autoHide: !0
            }), wx.setStorageSync("produce_tool_tip", !0), t.hasShowProduceToolTip = !0, wx.showTabBarRedDot && (wx.showTabBarRedDot({
                index: 1
            }), setTimeout(function() {
                wx.hideTabBarRedDot({
                    index: 1
                });
            }, 3e3));
        }, 3e3));
    },
    processMenuConfig: function(t) {
        var i = [].concat(e(f.default)), a = t.left_albums, o = t.left_musics, n = t.left_photos, s = t.fav_num, r = t.left_graphic;
        return i[0].count = r ? a + r : a, i[1].count = s, i[2].count = n, i[3].count = o, 
        i;
    },
    onShareAppMessage: function(t) {
        if (t[0].target && "dynamic" === t[0].target.dataset.type) {
            var e = a({}, t[0]), i = e.target.dataset.dynamic;
            return i.album_type === d.ALBUM_TYPE.ARTICLE && (e.isArticle = 1), T.default.pushId && i && i.id === T.default.pushId && Object.assign(e, T.default), 
            Object.assign(e.target.dataset.dynamic, {
                user: wx.xngGlobal.xu.user
            }), (0, p.shareDynamic)(e);
        }
        return {
            title: this.data.userinfo.nick + "的个人主页",
            path: (0, o.getProfilePagePath)({
                mid: wx.xngGlobal.xu.mid
            })
        };
    },
    handleMoreAction: function(t) {
        var e = this, i = t.detail, o = t.type, r = "onAlbumMoreTap" === o, l = i.id, u = i.a_profile_id, m = i.album_type, f = i.favoriteId, x = i.album_id, g = i.profile_id;
        if (this._curArticle = a({}, i, {
            profile_id: u,
            p: 1 === i.p ? s.default.ALBUM_PUBLISH_TYPE_STATUS.PUBLISH : s.default.ALBUM_PUBLISH_TYPE_STATUS.NORMAL
        }), m !== d.ALBUM_TYPE.ARTICLE || "onAlbumMoreTap" !== o) {
            var T = [];
            if (void 0 === f) {
                var p = n.default.acGetDynamicIsFavorites({
                    id: x,
                    dynamicId: g || l || u,
                    albumType: m
                }).then(function(t) {
                    return Object.assign(i, {
                        favoriteId: t.data._id
                    });
                });
                T.push(p);
            }
            Promise.all(T).then(function() {
                var t = {
                    context: e,
                    data: a({}, i, {
                        dynamic_id: g || l
                    })
                }, o = r ? (0, h.getWriterActions)(t) : (0, h.getDelDynamicAction)(t);
                wx.xng.showActionSheet(o);
            });
        } else c.default.handleArticleMoreAction({
            dynamic: this._curArticle,
            isAuthor: 1,
            context: this
        });
    },
    onDeleteAlbum: function(t) {
        var e = this, i = this.data.products.list.find(function(e) {
            return e.album_id === t;
        });
        i && n.default.acDeleteDynamic({
            albumType: i.album_type,
            id: i.album_id,
            dynamicId: i.profile_id,
            tpl_id: i.tpl_id,
            stpl_id: i.stpl_id
        }).then(function() {
            wx.showToast({
                title: "删除后30天内可以到【回收站】里恢复",
                icon: "none",
                duration: 5e3
            }), wx.xngGlobal.dispatch(g.default.acClearAlbumRecentlyDeleted()), e.deleteCallBack();
        }).catch(function() {
            wx.showToast({
                title: "删除失败",
                icon: "none"
            });
        });
    },
    deleteCallBack: function() {
        this.loadDynamic(), this.loadAlbum(!0), A(g.default.fetchUserinfo());
    }
});