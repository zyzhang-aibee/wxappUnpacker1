function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a(e, a) {
    var i = {};
    for (var t in e) a.indexOf(t) >= 0 || Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t]);
    return i;
}

function i(e) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=";
    if (!e) return "";
    var t = [];
    return Object.keys(e).forEach(function(a) {
        A.call(e, a) && e[a] && t.push("" + a + i + e[a]);
    }), t.join(a);
}

function t(e) {
    return "/pages/discover/discoverIndexPage/discoverIndexPage?" + i(e);
}

function o(e) {
    return "/pages/profile/profilePage/profilePage?" + i(e);
}

function n(e) {
    var t = e.complete, o = a(e, [ "complete" ]);
    wx.navigateTo({
        url: "/pages/community/dynamicSharePage/dynamicSharePage?" + i(o),
        complete: t
    });
}

function l(e, a) {
    var i = e.title, o = wx.xngGlobal.xu.user ? wx.xngGlobal.xu.user.nick : "", n = y.default.pushId, l = y.default.detailUV, d = y.default.cycles;
    i && "小年糕影集" !== i && "我的小年糕" !== i || a.isArticle || (i = o + "推荐您一个非常棒的视频，快看看！");
    var r = e.tpl_id === _.default.TPL_TYPE.RANDOM ? e.stpl_id : e.tpl_id, s = {
        dynamicId: e.profile_id || e.id,
        dynamicMid: e.user.mid,
        mid: wx.xngGlobal.xu.mid,
        aid: e.album_id,
        st: Date.now(),
        tplId: r,
        albumId: e.album_id
    };
    return (a.isAuthor || 0 === a.isAuthor) && (s.isAuthor = a.isAuthor), a.isMV && (s.isMV = a.isMV), 
    a.isFunVideo && (s.isFunVideo = a.isFunVideo), a.isArticle && (s.isArticle = a.isArticle), 
    a.isSpliceVideo && (s.isSpliceVideo = a.isSpliceVideo), n && n === e.id && Object.assign(s, {
        pushId: n,
        detailUV: l,
        cycles: d + 1
    }), a.topic && Object.assign(s, {
        topicId: a.topic.id,
        tagId: a.topic.tag_id
    }), {
        title: i,
        path: t(s)
    };
}

function d(e, a) {
    a.music ? s.default.acSaveAlbumMusic({
        albumId: e,
        tplId: a.id
    }) : (w.default.acSetAlbumTpl(a.id), w.default.acSetAlbumMusics([]), w.default.acSetSameTplWithoutMusic()), 
    wx.navigateTo({
        url: "/pages/produce/editAlbumPage/editAlbumPage?for=sameModel&frommakesame=1"
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fetchComment = exports.handleMakeAlbum = exports.handleMakeSameMV = exports.handleMoreAction = void 0;

var r = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var i = arguments[a];
        for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    }
    return e;
};

exports.stringifyParams = i, exports.goFavorPage = function(e) {
    wx.navigateTo({
        url: "/pages/community/favorPage/favorPage?" + i(e)
    });
}, exports.getDynamicSharePath = t, exports.goAlbumSharePage = function(e) {
    wx.navigateTo({
        url: "/pages/play/albumPlayPage/albumPlayPage?" + i(e)
    });
}, exports.goAlbumPlayPage = function(e) {
    e.dynamicId && u.default.acUpdatePlayCount(e.dynamicId), wx.navigateTo({
        url: "/pages/community/playPage/playPage?" + i(e)
    });
}, exports.goAlbumPage = function(e) {
    wx.navigateTo({
        url: "/pages/play/albumPlayPage/albumPlayPage?" + i(e)
    });
}, exports.getProfilePagePath = o, exports.goProfilePage = function(e) {
    wx.navigateTo({
        url: o(e)
    });
}, exports.goMessagePage = function(e) {
    wx.navigateTo({
        url: "/pages/me/messagePage/messagePage?" + i(e)
    });
}, exports.goSingleDynamicPage = function(e) {
    wx.navigateTo({
        url: "/pages/community/singleDynamicPage/singleDynamicPage?" + i(e)
    });
}, exports.goWeakFriendPage = function() {
    wx.navigateTo({
        url: "/pages/community/weakFriendPage/weakFriendPage"
    });
}, exports.goDynamicSharePage = n, exports.goPublishPage = function(e) {
    wx.navigateTo({
        url: "/pages/community/publishPage/publishPage?" + i(e)
    });
}, exports.goRegionPage = function(e) {
    wx.navigateTo({
        url: "/pages/community/regionPage/regionPage?" + i(e)
    });
}, exports.goMakeAlbum = function(e) {
    wx.navigateTo({
        url: "/pages/produce/editAlbumPage/editAlbumPage?" + i(e)
    });
}, exports.goSendBlessPage = function(e) {
    wx.navigateTo({
        url: "/pages/specialPlay/sendBlessingVideo/videoTypeChoosePage/videoTypeChoosePage?" + i(e)
    });
}, exports.goCommonTplPage = function(e) {
    wx.navigateTo({
        url: "/pages/produce/recommendTplABPage/recommendTplABPage?" + i(e)
    });
}, exports.goAnuualPage = function() {
    wx.navigateTo({
        url: "/pages/community/anuualSummaryPage/anuualSummaryPage"
    });
}, exports.followUser = function(e) {
    var a = e.mid, i = e.toast, t = void 0 === i || i, o = s.default.acFollowUser({
        mid: a
    }).then(function() {
        p.default.follow();
    });
    t && o.then(function() {
        wx.showToast({
            title: "关注成功",
            icon: "none"
        });
    }).catch(function() {
        wx.showToast({
            title: "关注失败，请稍后重试！",
            icon: "none"
        });
    });
}, exports.unfollowUser = function(e) {
    var a = e.mid, i = e.toast, t = void 0 === i || i, o = s.default.acUnfollowUser({
        mid: a
    });
    t && o.then(function() {
        wx.showToast({
            title: "取关成功",
            icon: "none"
        });
    }).catch(function() {
        wx.showToast({
            title: "取关失败，请稍后重试！",
            icon: "none"
        });
    });
}, exports.favorDynamic = function(e) {
    var a = e.dynamic;
    return a.favor.has_favor ? u.default.acUnLikeDynamic({
        dynamicId: a.profile_id || a.id,
        mid: a.user.mid,
        tpl_id: a.tpl_id,
        stpl_id: a.stpl_id
    }) : (p.default.favorDynamic({
        did: a.id
    }), wx.vibrateShort(), u.default.acLikeDynamic({
        dynamicId: a.profile_id || a.id,
        mid: a.user.mid
    }));
}, exports.favorComment = function(e) {
    var a = e.dynamic, i = e.comment, t = {
        id: a.id,
        mid: a.user.mid,
        cid: i.id
    };
    i.favor.has_favor ? s.default.acCancelLikeComment(t) : (s.default.acLikeComment(t), 
    p.default.favorComment({
        did: a.id
    }));
}, exports.favoriteDynamic = function(e) {
    var a = e.dynamic;
    a.favoriteId ? u.default.acDeleteDynamicFavorites({
        favoriteId: a.favoriteId,
        dynamicId: a.id
    }).then(function() {
        wx.showToast({
            title: "取消收藏成功",
            icon: "none"
        });
    }) : u.default.acAddDynamicFavorites({
        id: a.album_id,
        dynamicId: a.id,
        albumType: a.album_type
    }).then(function() {
        (0, h.setControllerData)({
            hasNewCollect: !0
        }), wx.showToast({
            title: "收藏成功，在“我-收藏”查看",
            icon: "none"
        }), p.default.favorite({
            did: a.id
        });
    });
}, exports.showShareActionSheet = function(e) {
    var a = e.dynamic;
    void 0 !== a.favoriteId ? P.show({
        dynamic: a
    }) : u.default.acGetDynamicIsFavorites({
        id: a.album_id,
        dynamicId: a.id,
        albumType: a.album_type
    }).then(function(e) {
        P.show({
            dynamic: r({}, a, {
                favoriteId: e.data._id
            })
        });
    });
}, exports.shareDynamic = function(e) {
    var a = "/pages/discover/discoverIndexPage/discoverIndexPage", i = void 0, o = void 0;
    if ("button" === e.from) {
        var n = e.target.dataset.dynamic, d = e.isArticle, r = e.shareButtonPath, c = e.shareFrom, m = e.topic, g = y.default.pushId, P = y.default.detailUV, h = y.default.cycles, w = n.tpl_id === _.default.TPL_TYPE.RANDOM ? n.stpl_id : n.tpl_id, b = v.default.tplTypeJudge(n.tpl_id) === _.default.TPL_TYPE.STYLE.MV ? 1 : 0, S = v.default.isBlessVideo(n.tpl_id) ? 1 : 0, E = n.user.mid === wx.xngGlobal.xu.mid ? 1 : 0, A = n.album_type === x.ALBUM_TYPE.SPLICE_VIDEOS ? 1 : 0, I = {
            dynamicId: n.profile_id || n.id,
            dynamicMid: n.user.mid,
            mid: wx.xngGlobal.xu.mid,
            st: Date.now(),
            tplId: w,
            isAuthor: E,
            isMV: b,
            isFunVideo: S,
            isSpliceVideo: A,
            isArticle: d
        };
        switch (m && Object.assign(I, {
            topicId: m.id,
            tagId: m.tag_id
        }), g && g === n.id && Object.assign(I, {
            pushId: g,
            detailUV: P,
            cycles: h + 1
        }), a = t(I), n.type) {
          case x.FEED_TYPE.ARTICLE:
          case x.FEED_TYPE.ALBUM:
            i = n.url;
            var M = l(n, {
                isAuthor: E,
                isMV: b,
                isFunVideo: S,
                isArticle: d,
                isSpliceVideo: A,
                pushId: g,
                detailUV: P,
                cycles: h,
                topic: m
            });
            a = M.path, o = M.title;
            var L = n.user.nick;
            if ((v.default.tplTypeJudge(n.tpl_id) === _.default.TPL_TYPE.STYLE.MV || v.default.isBlessVideo(n.tpl_id) || d || n.album_type === x.ALBUM_TYPE.SPLICE_VIDEOS) && wx.reportAnalytics("xwf_share_api", {
                mid: wx.xngGlobal.xu.mid,
                midmod2: wx.xngGlobal.xu.mid % 2,
                midmod10: wx.xngGlobal.xu.mid % 10,
                midmod20: wx.xngGlobal.xu.mid % 20,
                ismv: v.default.tplTypeJudge(n.tpl_id) === _.default.TPL_TYPE.STYLE.MV ? 1 : 0,
                isfunvideo: v.default.isBlessVideo(n.tpl_id) ? 1 : 0,
                isauthor: wx.xngGlobal.xu.mid === n.user.mid ? 1 : 0,
                tplid: n.tpl_id,
                isarticle: d ? "1" : "0",
                issplicevideo: n.album_type === x.ALBUM_TYPE.SPLICE_VIDEOS ? "1" : "0"
            }), v.default.isBlessVideo(n.tpl_id)) {
                var V = v.default.getShareMessage(n.tpl_id, L);
                o = V.title ? V.title : o, i = V.url ? V.url : i;
            }
            c && "dynamicShare" === c && (a += "&shareFrom=dynamicShare"), n.cover_watermark && (i = n.cover_watermark), 
            r && wx.xngGlobal.abTest.dynamic_share_card_add_views && (i = r);
            break;

          case x.FEED_TYPE.PURE_TEXT:
            o = n.user.nick + "分享一段有意思的文字给您", i = "";
            break;

          case x.FEED_TYPE.ALBUM_COMMENT:
            o = n.user.nick + "发现了一个有意思的动态", i = n.url;
            break;

          default:
            o = "小年糕发现", i = "https://static2.xiaoniangao.cn/mini_app/img/discover/square_banner.jpg";
        }
        n.type !== x.FEED_TYPE.ALBUM && n.type !== x.FEED_TYPE.ARTICLE || s.default.acLogShare({
            dynamic: n
        }), p.default.share({
            did: n.profile_id || n.id
        }), f.default.share({
            id: n.profile_id || n.id,
            mid: n.user.mid
        }), u.default.acUpdateShareCount(n.profile_id || n.id), T.default.globalShare({
            tpl_id: n.tpl_id,
            album_type: n.album_type,
            isAuthor: E
        });
    }
    return console.warn(o, a, i), {
        title: o,
        path: a,
        imageUrl: i
    };
}, exports.shareGroup = function(e) {
    var a = e.dynamic;
    if (wx.canIUse && wx.canIUse("button.open-type.contact")) {
        var i = a.tpl_id;
        i === _.default.TPL_TYPE.RANDOM && (i = a.stpl_id), setTimeout(function() {
            g.default.favoriteUtil(a.lid, "share", i);
        }, 500);
    } else wx.showToast({
        title: "当前版本不支持该功能，请您升级微信后使用!",
        icon: "none"
    });
};

var s = e(require("../../actions/discover")), u = e(require("../../actions/entities/dynamics")), c = e(require("../../actions/me")), m = e(require("../../actions/specialPlay")), p = e(require("../dynamicActionLog")), f = e(require("../dynamicUVLog")), g = e(require("../followShareUtil")), x = require("../../const/index"), P = function(e) {
    if (e && e.__esModule) return e;
    var a = {};
    if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (a[i] = e[i]);
    return a.default = e, a;
}(require("../../../pages/discover/components/common/shareActionSheet/utils")), _ = e(require("../../../common/const/common")), h = require("../../../mainPages/me/redDotController"), y = e(require("./pushStat")), v = e(require("../../../mainPages/common/specialPlay")), T = e(require("../../../mainPages/common/wxApiDataStatistics")), w = e(require("../../../mainPages/produce/actions/produce")), b = e(require("../../../common/control/produce")), S = e(require("../../../mainPages/common/spliceVideoUtils")), E = e(require("../../../common/others/wxStat")), A = Object.hasOwnProperty, I = (exports.handleMoreAction = function(e, a) {
    wx.showActionSheet({
        itemList: a ? [ "删除" ] : [ "投诉" ],
        itemColor: "#f43531",
        success: function() {
            a ? wx.showModal({
                title: "确认删除该动态吗？",
                success: function(a) {
                    a.confirm && u.default.acUnPublishDynamic(e.id);
                }
            }) : (wx.showToast({
                title: "已收到投诉，我们会尽快审核",
                icon: "none"
            }), u.default.acComplaintDynamic({
                dynamicId: e.id,
                dynamicMid: e.user.mid
            }));
        },
        fail: function(e) {
            console.log(e.errMsg);
        }
    });
}, exports.handleMakeSameMV = function(e) {
    wx.chooseImage({
        sizeType: [ "original", "compressed" ],
        sourceType: [ "album" ],
        success: function(a) {
            b.default.uploadFile({
                type: "photo",
                qsSize: "128x128",
                filePaths: a.tempFilePaths,
                complete: function(a) {
                    var i = {};
                    i.ids = a.map(function(e) {
                        return r({}, e, {
                            type: 1
                        });
                    }), wx.xngGlobal.dispatch(c.default.acClearPhotoList());
                    var t = e.music_info.name.replace(".mp3", "");
                    t.indexOf(" - ") >= 0 && (t = t.split(" - ")[1]), i.ids.length ? (m.default.acAddMVPhoto(i.ids), 
                    m.default.acSetMVMusic({
                        musicId: e.music_info.qid,
                        musicSrc: e.music_info.m_url,
                        musicName: t
                    }), wx.navigateTo({
                        url: "/pages/specialPlay/mv/mvEditPage/mvEditPage"
                    })) : wx.showToast({
                        title: "提交失败，请重新尝试或联系客服",
                        icon: "none"
                    });
                }
            });
        }
    });
});

exports.handleMakeAlbum = function(e) {
    var a = e.tpl_type, i = e.tpl_id, t = e.stpl_id, o = e.album_id, l = e.ban, s = e.user, p = e.id, f = e.album_type;
    if (!wx.xngGlobal.getBan("make_same", l)) {
        var g = i === _.default.TPL_TYPE.RANDOM ? t : i;
        if (a && i !== _.default.TPL_TYPE.SPECIAL_PLAY_MV) {
            E.default.report("click_dynamic_share_fv_make", {
                tplid: i,
                authormid: s.mid
            }), E.default.report("xwf_blessvideo_commit", {
                tpl_id: i,
                ismakesame: 1
            });
            var P = wx.xngGlobal.store.getState().entities.miniTpl, h = {
                music: [],
                producer: wx.xngGlobal.xu.user ? wx.xngGlobal.xu.user.nick : "",
                title: P[i].title,
                tpl_id: P[i].id,
                arr_cover: {},
                ids: []
            };
            v.default.tplTypeJudge(i) !== _.default.TPL_TYPE.STYLE.SEND_BLESS_FRONT_VIDEO && v.default.tplTypeJudge(i) !== _.default.TPL_TYPE.STYLE.SEND_BLESS_H5_VIDEO || (h.front_render = 1), 
            0 === P[i].img_num ? u.default.acCommitDynamic(r({}, h, {
                reset_draft: !1
            })).then(function(e) {
                e.data.status = 2, wx.xngGlobal.dispatch(c.default.acReloadUserInfo()), v.default.tplTypeJudge(i) === _.default.TPL_TYPE.STYLE.SEND_BLESS_FRONT_VIDEO || v.default.tplTypeJudge(i) === _.default.TPL_TYPE.STYLE.SEND_BLESS_H5_VIDEO ? n({
                    dynamicId: e.data.profile_id,
                    dynamicMid: wx.xngGlobal.xu.mid,
                    tplId: i
                }) : wx.navigateTo({
                    url: "/pages/specialPlay/common/waitingFinishPage/waitingFinishPage?lid=" + e.data.lid
                });
            }).catch(function() {
                wx.showToast({
                    title: "提交失败，请重新尝试或联系客服",
                    icon: "none"
                });
            }) : wx.navigateTo({
                url: "/pages/specialPlay/sendBlessingVideo/videoTypeChoosePage/videoTypeChoosePage?tplId=" + P[i].id
            });
        } else if (a && i === _.default.TPL_TYPE.SPECIAL_PLAY_MV) {
            E.default.report("click_dynamic_share_mvmake");
            var y = o || p;
            m.default.acClearAllMVPhoto(), wx.xngGlobal.abTest.mv_make_same_photo && e.music_info.qid ? I(e) : wx.navigateTo({
                url: "/pages/specialPlay/mv/musicPage/musicPage?from=makeSame&albumId=" + y
            });
        }
        if (f !== x.ALBUM_TYPE.SPLICE_VIDEOS) {
            if (!a) {
                var T = wx.xngGlobal.store.getState(), A = T.produce.edit.draft.photos, M = T.entities.tpl, L = M[g].img_num, V = A.length, D = wx.xngGlobal.abTest.show_make_same, k = void 0 === D ? {} : D;
                if (V > L) return wx.showToast({
                    title: "您已经上传了" + V + "张照片，此模板最多支持" + L + "张照片，请选择其他模板或删除" + (V - L) + "张照片试试",
                    duration: 5e3,
                    icon: "none"
                }), void (wx.xng.getCurrentPage().makeSameTaped = !1);
                if (w.default.acSetAlbumTpl(g), V) d(o, M[g]); else {
                    if (k.add_photo) return void d(o, M[g]);
                    b.default.uploadPhotos({
                        count: 9,
                        complete: function() {
                            b.default.pushAlbumDraft(), d(o, M[g]);
                        }
                    });
                }
            }
        } else S.default.goSpliceVideoPage();
    }
}, exports.fetchComment = function(e) {
    var a = e.dynamic, i = e.dynamicComment, t = a.id, o = a.user.mid, n = i.lastTime, l = i.isFetching, d = {
        id: t,
        mid: o
    };
    n && !l && (n < 0 ? d.refresh = !0 : d.lastTime = n, s.default.acFetchComment(d));
};