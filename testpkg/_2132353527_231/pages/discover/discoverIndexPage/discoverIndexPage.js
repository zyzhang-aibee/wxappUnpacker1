function i(i) {
    return i && i.__esModule ? i : {
        default: i
    };
}

function e(i) {
    return void 0 === i ? i : +i;
}

var t = Object.assign || function(i) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a]);
    }
    return i;
}, a = i(require("../../../common/others/dynamicActionLog")), n = i(require("../../../common/others/dynamicUVLog")), o = require("../../../common/const/index"), s = require("../../../common/others/discover/utils"), d = function(i) {
    if (i && i.__esModule) return i;
    var e = {};
    if (null != i) for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    return e.default = i, e;
}(require("../../../common/others/discover/helper")), r = i(require("../../../config/config")), c = require("../../../mainPages/me/redDotController"), l = i(require("../../../common/others/msgManager")), m = i(require("../../../common/others/utils")), u = i(require("../../../common/others/discover/pushStat")), h = i(require("../../../common/const/common")), f = require("../../../frameBase/Component/MoreActionSheet/actionsData"), g = require("../components/tab-bar/config"), p = i(require("../components/pull-down-refresh/utils")), y = i(require("../../../common/actions/entities/dynamics")), x = i(require("../../../common/actions/me"));

wx.xng.Page({
    data: {
        curTabName: g.TOPIC_NAMES.RECOMMEND,
        TOPIC_NAMES: g.TOPIC_NAMES,
        FEED_TYPE: o.FEED_TYPE,
        codeVer: r.default.codeVer,
        isCommentList: !1,
        isShowCommentList: !1,
        customNavigationBarData: {
            title: "小年糕+",
            loading: !1,
            isShowBack: !1
        },
        dynamic: null,
        isAuthor: !1,
        commentListBan: !1,
        tplList: [],
        statusBarHeight: wx.xngGlobal.sysInfo.statusBarHeight,
        switchIndex: 1,
        isSwiperAb: !1,
        swiperHight: "calc(100vh - 240rpx)"
    },
    state: {
        mid: wx.xngGlobal.xu.mid
    },
    mapStateToData: function(i) {
        var e = i.discover.dynamicComment, t = i.topic, a = t.common.topics, n = t.bless, o = i.entities_.dynamics;
        this.state.dynamics = o;
        var s = this.data.dynamic, r = {
            dynamic: s = s ? d.getSingleDynamic(s.id, o, e) : s,
            dynamicComment: e,
            commentListBan: wx.xngGlobal.getBan("comment_list", s ? s.ban : ""),
            blessInfo: n.info,
            topics: a
        };
        return wx.xngGlobal.abTest.discover_swiper ? this.data.isSwiperAb || Object.assign(r, {
            isSwiperAb: !0
        }) : this.data.isSwiperAb && Object.assign(r, {
            isSwiperAb: !1
        }), r;
    },
    onLoad: function(i) {
        var o = this;
        wx.showLoading && wx.showLoading({
            title: "加载中"
        }), m.default.tplMsgRedirect(i);
        var d = t({}, i);
        if (i.dynamicId || i.lid) {
            var r = i.dynamicId, c = i.dynamicMid, l = i.mid, f = i.detailUV, p = i.tplId, y = i.isAuthor, b = i.isArticle, w = i.pushId, I = i.cycles, S = i.isSpliceVideo, v = i.lid;
            if (+l !== this.data.xu.mid && n.default.reflux({
                id: +r,
                mid: +c
            }), l) {
                var T = +l, M = T % 2, A = T % 10, D = T % 20, C = "";
                C = m.default.isBlessVideo(p) ? "送祝福" : m.default.tplTypeJudge(p) === h.default.TPL_TYPE.STYLE.MV ? "MV" : b ? "图文" : S ? "视频剪辑" : "普通影集", 
                Object.assign(d, {
                    fmid: T,
                    fmod2: M,
                    fmod10: A,
                    fmod20: D,
                    tplId: p,
                    isAuthor: y ? 1 : 0,
                    isMV: m.default.tplTypeJudge(p) === h.default.TPL_TYPE.STYLE.MV ? 1 : 0,
                    isFunVideo: m.default.isBlessVideo(p) ? 1 : 0,
                    isArticle: b ? "1" : "0",
                    isSpliceVideo: S ? "1" : "0",
                    albumType: C
                });
            }
            w && (Object.assign(u.default, {
                pushId: +w,
                detailUV: f,
                cycles: +I || 0
            }), Object.assign(d, u.default)), v && !r ? wx.xngGlobal.dispatch(x.default.acGetAlbumDetail({
                lid: v
            })).then(function(e) {
                var a = e.entities.dynamics[e.result[0]], n = a.id, s = a.profile_id, d = a.tpl_id, r = a.mid;
                o.onShareRedirect(t({}, i, {
                    albumId: n,
                    dynamicId: s,
                    tplId: d,
                    dynamicMid: r
                }));
            }).catch(function(i) {
                wx.showToast({
                    title: "网络错误，请稍后重试",
                    icon: "none"
                }), console.log(i);
            }) : this.onShareRedirect(i), this.data.curTabName !== g.TOPIC_NAMES.RECOMMEND && this.setData({
                curTabName: g.TOPIC_NAMES.RECOMMEND
            });
        }
        if (i.scene) {
            for (var L = decodeURIComponent(i.scene).split("K"), P = {}, _ = "", E = "", O = 0; O < L.length; O++) _ = L[O].split("D")[0], 
            E = L[O].split("D")[1], P[_] = parseInt(E, 36);
            d.sceneData = P, console.log(P), this.onPosterShare(P);
        }
        if (i.isAnuual && (0, s.goAnuualPage)(), "profile" === i.page) {
            var R = i.mid;
            (0, s.goProfilePage)({
                mid: R,
                from: "share"
            });
        }
        this.initTab(i);
        var q = i.dynamicId, N = i.dynamicMid, B = i.aid, V = i.mid, G = i.st, j = {
            cid: e(q),
            data: {
                aid: e(B),
                cid: e(q),
                cmid: e(N),
                fmid: e(V),
                ftime: e(G),
                scene: wx.xngGlobal.hotScene
            }
        };
        if (wx.xngGlobal.xu.mid) a.default.discoverLoad(j); else var U = setInterval(function() {
            wx.xngGlobal.xu.mid && (clearInterval(U), a.default.discoverLoad(j));
        }, 3e3);
        var F = wx.xngGlobal.sysInfo, H = "calc(100vh - " + (F.navigationHeight + 112 / F.rpxRatio) + "px)";
        this.setData({
            swiperHight: H
        }), this.setData({
            options: d,
            swiperHight: H
        });
    },
    onShow: function() {
        if (d.FeedUIMgr.dynamic) {
            var i = d.FeedUIMgr.dynamic, e = {
                dynamicId: i.id,
                dynamicMid: i.user.mid,
                isArticle: i.album_type === o.ALBUM_TYPE.ARTICLE ? 1 : "",
                albumId: i.album_id,
                topicId: i.topic_id,
                tagId: i.tag_id
            };
            return i.tpl_id && (e.tplId = i.tpl_id), (0, s.goDynamicSharePage)(e), void (d.FeedUIMgr.dynamic = null);
        }
        wx.showTabBar && wx.showTabBar(), (0, c.setControllerData)(), l.default.startPollMsg();
    },
    onReady: function() {
        wx.hideLoading && wx.hideLoading();
    },
    onSwitchTab: function(i) {
        var e = i.detail.name;
        this.refreshCTR(!1), this.setCTRScrollTop(p.default.getScrollTopCache(e)), this.setData({
            curTabName: e,
            switchIndex: this.data.switchIndex + 1
        });
    },
    onHide: function() {
        l.default.endPollMsg();
    },
    onUnload: function() {
        l.default.endPollMsg(), this.data.isShowCommentList && this.handleCommentListHide();
    },
    initTab: function(i) {
        101 == i.entScene && this.setData({
            curTabName: g.TOPIC_NAMES.FOLLOW
        });
    },
    onCTRExpose: function(i) {
        var e = this.state.dynamics[i.id];
        e ? (console.log("dynamic expose", e.title), n.default.expose({
            id: e.id,
            mid: e.user.mid
        }), a.default.expose({
            did: i.id
        })) : console.warn("no exit dynamic", i);
    },
    onShareAppMessage: function(i) {
        var e = t({}, i[0]);
        if ("button" === e.from) {
            var a = e.target.dataset, n = a.dynamic, d = a.topic;
            n.album_type === o.ALBUM_TYPE.ARTICLE && (e.isArticle = 1), d && (e.topic = d), 
            u.default.pushId && n && n.id === u.default.pushId && Object.assign(e, u.default);
        }
        return (0, s.shareDynamic)(e);
    },
    onShareRedirect: function(i) {
        var e = i.dynamicId, t = i.dynamicMid, a = i.tplId, n = i.isArticle, o = i.albumId, d = {
            dynamicId: e,
            dynamicMid: t,
            tplId: a,
            share: "true",
            jump: "true",
            isArticle: n ? "1" : "",
            albumId: o
        };
        wx.xngGlobal.sysInfo.system.indexOf("Android 4.4") > -1 ? y.default.acFetchSingleDynamic({
            dynamicId: e,
            mid: t,
            insertToDiscoverRecommend: !0
        }).finally(function() {
            (0, s.goDynamicSharePage)(d);
        }) : (0, s.goDynamicSharePage)(d);
    },
    onPosterShare: function(i) {
        console.log(i);
        var e = i.i, t = i.m, a = (i.s, {
            dynamicId: e,
            dynamicMid: t,
            jump: "true",
            isArticle: ""
        });
        wx.xngGlobal.sysInfo.system.indexOf("Android 4.4") > -1 ? y.default.acFetchSingleDynamic({
            dynamicId: e,
            mid: t,
            insertToDiscoverRecommend: !0
        }).finally(function() {
            (0, s.goDynamicSharePage)(a);
        }) : (0, s.goDynamicSharePage)(a);
    },
    handleMoreAction: function(i) {
        var e = i.detail, a = e.user.mid === wx.xngGlobal.xu.mid ? 1 : 0, n = {
            context: this,
            data: t({}, e, {
                dynamic_id: e.id
            })
        }, o = a ? (0, f.getDelDynamicAction)(n) : (0, f.getReportAction)(n);
        wx.xng.showActionSheet(o);
    },
    handleCommentListShow: function(i) {
        i && this.setData({
            dynamic: i
        }), this.setData({
            isCommentList: !0,
            isShowCommentList: !0
        });
    },
    handleCommentListHide: function() {
        this.setData({
            isCommentList: !1,
            isShowCommentList: !1
        });
    }
}, {
    CTR: {}
});