function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a(e) {
    var a = e.dynamic_id, t = e.profile_id;
    wx.showModal({
        title: "确认删除该动态吗？",
        success: function(e) {
            e.confirm && S.default.acUnPublishDynamic(t || a);
        }
    });
}

function t(e) {
    var a = e.dynamic_id, t = e.user.mid, i = e.profile_id;
    L("已收到投诉，我们会尽快审核"), S.default.acComplaintDynamic({
        dynamicId: i || a,
        dynamicMid: t
    });
}

function i(e) {
    var a = this, t = e.ban, i = e.tpl_type, o = e.tpl_id, n = e.album_id, l = e.dynamic_id, d = e.album_type, u = e.profile_id;
    wx.xngGlobal.getBan("get_album_info", t) || (wx.showToast({
        title: "请求中...",
        icon: "loading",
        mask: !0,
        duration: 1e4
    }), S.default.acGetDynamicTplMusic({
        id: n,
        dynamicId: u || l
    }).then(function(e) {
        wx.hideToast();
        var t = e.data;
        if (t.music_info) {
            var n = t.music_info.map(function(e) {
                return e.name;
            }).join("\n"), l = t.tpl_info.tpl_title;
            1 === i && o !== C.default.TPL_TYPE.SPECIAL_PLAY_MV && (n = ""), d === k.ALBUM_TYPE.SPLICE_VIDEOS && (n = "", 
            l = "视频剪辑"), setTimeout(function() {
                wx.xng.showModal({
                    title: "影集详情",
                    content: {
                        "音乐": n,
                        "模板": l
                    },
                    closable: !0,
                    maskClosable: !0
                }), a.handleVideoPause && a.handleVideoPause();
            }, 300);
        } else L("没有找到数据");
    }).catch(function(e) {
        L(e.msg || "网络不好，请退出后重试");
    }));
}

function o(e) {
    var a = e.ban, t = e.album_id, i = e.favoriteId, o = e.dynamic_id, n = e.profile_id;
    wx.xngGlobal.getBan("favorites", a) || (i ? S.default.acDeleteDynamicFavorites({
        favoriteId: i,
        dynamicId: n || o
    }).then(function() {
        L("取消收藏成功");
    }) : S.default.acAddDynamicFavorites({
        id: t,
        dynamicId: n || o
    }).then(function() {
        (0, F.setControllerData)({
            hasNewCollect: !0
        }), L("收藏成功\n在“我-收藏”查看"), I.default.favorite({
            did: n || o
        });
    }));
}

function n(e) {
    var a = e.ban, t = e.album_type, i = e.canMakeSame;
    wx.xngGlobal.getBan("make_same", a) || !i && t !== k.ALBUM_TYPE.SPLICE_VIDEOS || (t === k.ALBUM_TYPE.SPLICE_VIDEOS ? q.default.goSpliceVideoPage() : (0, 
    R.handleMakeAlbum)(e));
}

function l(e, a) {
    var t = e.tpl_id, i = e.ban, o = e.s, n = e.status;
    if (!wx.xngGlobal.getBan("modify_album", i)) {
        var l = y();
        t !== C.default.TPL_TYPE.SPECIAL_PLAY_MV && U.default.isSpliceVideos(e) || (o != C.default.ALBUM_TYPE_STATUS.FEATURED ? U.default.isAlbumStatusNotSuccess(n) || (t !== C.default.TPL_TYPE.SPECIAL_PLAY_MV ? l[t] && l[t].disable ? A() : d(e) : u(e, "modifyMV", a)) : L("佳作受保护，若要修改请联系客服"));
    }
}

function d(e) {
    wx.xngGlobal.store.dispatch(v.default.acSwitchEditDraft(C.default.DRAFT_TYPE.MODIFY));
    wx.showToast({
        title: "请求中...",
        icon: "loading",
        mask: !0,
        duration: 1e4
    }), wx.xngGlobal.store.dispatch(v.default.acModifyAlbum({
        token: wx.xngGlobal.token,
        albumId: e.album_id,
        success: function(e) {
            if (wx.hideToast(), e.has_del_imgs) return wx.showModal({
                content: "影集中有照片被删除，不能修改该影集了，您可以使用复制重做",
                showCancel: !1
            }), void wx.xngGlobal.store.dispatch(v.default.acSwitchEditDraft(C.default.DRAFT_TYPE.MAIN));
            G.default.pushAlbumDraft(wx.xngGlobal.token, wx.xngGlobal.store), wx.navigateTo({
                url: "/pages/produce/editAlbumPage/modifyAlbumPage/modifyAlbumPage"
            });
        },
        fail: function(e) {
            wx.hideToast(), wx.xngGlobal.store.dispatch(v.default.acSwitchEditDraft(C.default.DRAFT_TYPE.MAIN)), 
            L(e);
        }
    }));
}

function u(e, a, t) {
    var i = function(i) {
        if (wx.hideToast(), i.data.has_del_imgs && "reedit" !== a) wx.showModal({
            content: "影集中有照片被删除，不能修改该影集了，您可以使用复制重做",
            showCancel: !1
        }); else {
            var o = "/pages/specialPlay/mv/mvEditPage/mvEditPage?for=" + a + "&albumId=" + e.album_id;
            t && (o += "&changeFrom=" + t), wx.navigateTo({
                url: o
            });
        }
    }, o = function(e) {
        wx.hideToast(), wx.showToast({
            title: e.message,
            icon: "none"
        });
    };
    wx.showToast({
        title: "请求中...",
        icon: "loading",
        mask: !0,
        duration: 1e4
    }), M.default.acReeditMV({
        albumId: e.album_id
    }, !1).then(function(e) {
        i(e);
    }).catch(function(e) {
        o(e);
    });
}

function s(e, a) {
    var t = e.tpl_id, i = e.album_id, o = e.status, n = e.s, l = e.ban, d = e.profile_id;
    if (!wx.xngGlobal.getBan("modify_music", l)) {
        var u = y();
        if ((V.default.tplTypeJudge(t) === C.default.TPL_TYPE.STYLE.MV && wx.xngGlobal.abTest.mv_render || !U.default.isAlbumStatusNotSuccess(o)) && (t === C.default.TPL_TYPE.SPECIAL_PLAY_MV || !U.default.isSpliceVideos(e))) if (n !== C.default.ALBUM_TYPE_STATUS.FEATURED) if (u[t] && u[t].disable && t !== C.default.TPL_TYPE.SPECIAL_PLAY_MV) A(); else if (!u[t] || u[t].music) if (t === C.default.TPL_TYPE.SPECIAL_PLAY_MV) {
            var s = "/pages/specialPlay/mv/musicPage/musicPage?from=changeMusic&albumId=" + i + "&dynamicId=" + d;
            a && (s += "&changeFrom=" + a), wx.navigateTo({
                url: s
            });
        } else wx.navigateTo({
            url: "/pages/music/musicPage/musicPage?from=change&albumId=" + i + "&tplId=" + t + "&dynamicId=" + d
        }); else L("该模板不支持修改音乐"); else L("佳作受保护，若要修改请联系客服");
    }
}

function r(e) {
    var a = e.status, t = e.s, i = e.album_id, o = e.tpl_id, n = e.ban, l = e.dynamic_id, d = e.profile_id;
    wx.xngGlobal.getBan("modify_tpl", n) || U.default.isSpliceVideos(e) || U.default.isAlbumStatusNotSuccess(a) || (t !== C.default.ALBUM_TYPE_STATUS.FEATURED ? wx.navigateTo({
        url: "/pages/produce/modifyTplPage/modifyTplPage?from=out&albumId=" + i + "&tplId=" + o + "&dynamicId=" + (d || l)
    }) : L("佳作受保护，若要修改请联系客服"));
}

function c(e) {
    var a = e.tpl_id, t = e.album_id, i = e.tpl_type, o = e.ban, n = e.dynamic_id, l = e.profile_id;
    wx.xngGlobal.getBan("modify_cover", o) || (1 !== i || a === C.default.TPL_TYPE.SPECIAL_PLAY_MV ? wx.navigateTo({
        url: "/pages/produce/albumCoverPage/albumCoverPage?from=out&albumId=" + t + "&dynamicId=" + (l || n)
    }) : L("该影集不支持该功能"));
}

function m(e) {
    var a = e.tpl_id, t = e.album_id, i = e.ban, o = e.dynamic_id, n = e.profile_id;
    wx.xngGlobal.getBan("modify_title", i) || a !== C.default.TPL_TYPE.SPECIAL_PLAY_MV && U.default.isSpliceVideos(e) || wx.navigateTo({
        url: "/pages/play/editTextPage/editTextPage?for=title&from=out&albumId=" + t + "&dynamicId=" + (n || o)
    });
}

function f(e) {
    var a = e.ban, t = e.tpl_id, i = e.album_id, o = e.dynamic_id, n = e.profile_id;
    wx.xngGlobal.getBan("modify_story", a) || t !== C.default.TPL_TYPE.SPECIAL_PLAY_MV && U.default.isSpliceVideos(e) || wx.navigateTo({
        url: "/pages/play/editTextPage/editTextPage?for=story&from=out&albumId=" + i + "&dynamicId=" + (n || o)
    });
}

function p(e) {
    var a = e.s, t = e.p, i = e.album_id, o = e.ban, n = e.dynamic_id, l = e.album_type, d = e.profile_id, u = e.id;
    if (a !== C.default.ALBUM_TYPE_STATUS.FEATURED) if (t === C.default.ALBUM_PUBLISH_TYPE_STATUS.PUBLISH) {
        if (wx.xngGlobal.getBan("un_publish", o)) return;
        S.default.acUnPublishDynamic(d || n || u).then(function() {
            L(D.default.MSG_ALBUM_PRIVATE);
        });
    } else {
        if (wx.xngGlobal.getBan("publish", o)) return;
        S.default.acPublishDynamic({
            id: i,
            dynamicId: d || n || u,
            type: l === k.ALBUM_TYPE.ARTICLE ? O.FEED_TYPE.ARTICLE : O.FEED_TYPE.ALBUM
        }).then(function(e) {
            L(D.default.MSG_ALBUM_PUBLIC);
            var a = wx.xng.getCurrentPage();
            a.options = a.options || {}, a.options.dynamicId = e.data.id;
        });
    } else L("佳作受保护，若要修改请联系客服");
}

function _(e) {
    var a = e.ban, t = e.album_id, i = e.lid, o = e.hide_u, n = e.dynamic_id, l = e.profile_id;
    wx.xngGlobal.getBan("anonymous", a) || S.default.acChangeShowDynamicAuthor({
        lid: i,
        id: t,
        dynamicId: l || n,
        isHide: o ? 0 : 1
    });
}

function g(e) {
    var a = e.status, t = e.size, i = e.v_url, o = e.album_id, n = e.lid, l = e.title, d = e.tpl_id, u = e.ban, s = V.default.tplTypeJudge(d) === C.default.TPL_TYPE.STYLE.MV ? 1 : 0;
    if (B.default.report("album_download_tap", {
        ismv: s
    }), V.default.isBlessVideo(d) || s && wx.xngGlobal.abTest.mv_render) wx.showToast({
        title: "该影集暂不支持下载",
        icon: "none",
        duration: 3e3
    }); else if (!wx.xngGlobal.getBan("download", u) && !U.default.isAlbumStatusNotSuccess(a)) if (a !== C.default.ALBUM_STATUS.FAIL) {
        var r = "true";
        t && (r = t / 1024 / 1024 >= C.default.ALBUM_NAV_DOWNLOAD_LIMIT ? "true" : "");
        var c = encodeURIComponent(i);
        wx.navigateTo({
            url: "/pages/downLoad/downLoadPage/downLoadPage?id=" + o + "&isBig=" + r + "&url=" + c + "&lid=" + n + "&title=" + l
        });
    } else L("影集没有制作成功，请修改影集或者联系客服");
}

function x(e) {
    var a = this, t = e.status, i = e.s, o = e.tpl_id, n = e.album_id;
    (V.default.tplTypeJudge(o) === C.default.TPL_TYPE.STYLE.MV && wx.xngGlobal.abTest.mv_render || !U.default.isAlbumStatusNotSuccess(t)) && U.default.isAlbumCanDelete(i) && wx.xng.showDialog({
        content: D.default.MSG_SURE_ALBUM_DELETE,
        confirmType: "danger",
        success: function(e) {
            e.confirm && a.onDeleteAlbum(n);
        }
    });
}

function T(e) {
    var a = e.tpl_id, t = e.album_id, i = e.ban;
    if (!wx.xngGlobal.getBan("reedit", i)) {
        var o = y();
        if (a === C.default.TPL_TYPE.SPECIAL_PLAY_MV || !U.default.isSpliceVideos(e)) if (a !== C.default.TPL_TYPE.SPECIAL_PLAY_MV) if (o[a].disable) A(); else {
            wx.xngGlobal.dispatch(v.default.acReeditAlbum("token", t, function() {
                wx.navigateTo({
                    url: "/pages/produce/editAlbumPage/editAlbumPage"
                });
            }, function(e) {
                L(e);
            }));
        } else u(e, "reedit");
    }
}

function b(e) {
    var a = e.ban, t = e.lid, i = e.tpl_id;
    if (V.default.tplTypeJudge(i) === C.default.TPL_TYPE.STYLE.MV && wx.xngGlobal.abTest.mv_render) L("该影集暂不支持"); else if (!wx.xngGlobal.getBan("get_album_url", a)) {
        var o = Y.default.domain + "/share/album.html?lid=" + t + "&detailUV=" + C.default.PLAY_UV_TYPE.ME_ALBUM_LIST_URL;
        setTimeout(function() {
            wx.xng.showModal({
                title: "影集网址",
                content: o,
                closable: !1,
                btns: [ {
                    text: "复制影集网址",
                    type: "primary",
                    onTap: function() {
                        P(o);
                    }
                } ]
            });
        }, 350);
    }
}

function P(e) {
    wx.setClipboardData({
        data: e,
        fail: function() {
            wx.showToast("复制失败，请重试");
        }
    });
}

function w(e) {
    var a = e.tpl_id, t = e.front_render, i = e.ban;
    wx.xngGlobal.getBan("share", i) || (V.default.tplTypeJudge(a) === C.default.TPL_TYPE.STYLE.MV && (wx.xngGlobal.abTest.mv_render || t) || V.default.isBlessVideo(a) ? L("该影集暂不支持") : (0, 
    R.shareGroup)({
        dynamic: e
    }));
}

function h(e) {
    var a = this, t = getCurrentPages(), i = t[t.length - 1], o = {};
    if (e.album_id) {
        i.route.indexOf("dynamicSharePage") >= 0 ? (o.id = e.profile_id, o.mid = e.user.mid, 
        o.title = e.title, o.nick = e.user.nick, o.url = e.url) : i.route.indexOf("meIndexPage") >= 0 ? (o.id = e.profile_id, 
        o.mid = wx.xngGlobal.xu.mid, o.title = e.title, o.nick = wx.xngGlobal.xu.user.nick, 
        o.url = e.url) : i.route.indexOf("albumListPage") >= 0 && (o.id = e.profile_id, 
        o.mid = wx.xngGlobal.xu.mid, o.title = e.title, o.nick = wx.xngGlobal.xu.user.nick, 
        o.url = e.url), console.log(o), B.default.report("friend_circle_poster_save", {});
        var n = function() {
            console.log(a.data.albumPosterData), a.setData({
                albumPosterData: {
                    album: o
                }
            });
        };
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.writePhotosAlbum"] ? n() : void 0 === e.authSetting["scope.writePhotosAlbum"] ? wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        n();
                    },
                    fail: function() {
                        wx.xng.showToast({
                            title: "您未授权，将不能保存图片",
                            duration: 1500
                        });
                    }
                }) : wx.openSetting({
                    success: function(e) {
                        e.authSetting["scope.writePhotosAlbum"] ? n() : wx.xng.showToast({
                            title: "您未授权，将不能保存图片",
                            duration: 1500
                        });
                    }
                });
            }
        });
    } else wx.showToast({
        title: "数据尚未加载完成",
        icon: "none"
    });
}

function A() {
    wx.showToast({
        title: "模板已下线，请选择其他模板",
        icon: "none"
    });
}

function y() {
    var e = wx.xngGlobal.store.getState().entities, a = e.tpl, t = e.miniTpl;
    return E({}, a, t);
}

function L(e) {
    wx.showToast({
        title: e,
        icon: "none"
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var E = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
};

exports.onDeleteDynamicTap = a, exports.onReport = t, exports.onAlbumDetailsTap = i, 
exports.onfavoriteDynamic = o, exports.onMakeAlbum = n, exports.onModifyAlbum = l, 
exports.ModifyAlbum = d, exports.onModifyMVAlbum = u, exports.onChangeMusic = s, 
exports.onChangeTpl = r, exports.onChangeCover = c, exports.onChangeTitleTap = m, 
exports.onChangeStoryTop = f, exports.onChangeContributeTap = p, exports.onAnonymousUserTap = _, 
exports.onDownLoadTap = g, exports.onDeleteAlbumTap = x, exports.onReeditAlbum = T, 
exports.onViewAlbumUrl = b, exports.handleSetClipboardData = P, exports.onShareGroup = w, 
exports.onFriendCirclePosterTap = h, exports.whenTplDisabled = A, exports.getTplList = y, 
exports.showToast = L;

var v = e(require("../../../common/actions/index")), S = e(require("../../../common/actions/entities/dynamics")), M = e(require("../../../common/actions/specialPlay")), I = e(require("../../../common/others/dynamicActionLog")), D = e(require("../../../common/const/message")), C = e(require("../../../common/const/common")), Y = e(require("../../../config/config")), U = e(require("../../../common/utils/play/playUtils")), G = e(require("../../../common/control/produce")), V = e(require("../../../common/others/utils")), B = e(require("../../../common/others/wxStat")), k = require("../../../common/const/statusNType"), R = require("../../../common/others/discover/utils"), F = require("../../../mainPages/me/redDotController"), q = e(require("../../../mainPages/common/spliceVideoUtils")), O = require("../../../common/const/index");

exports.default = {
    onModifyAlbum: l,
    onChangeMusic: s,
    onChangeTpl: r,
    onChangeCover: c,
    onChangeTitleTap: m,
    onChangeStoryTop: f,
    onChangeContributeTap: p,
    onAnonymousUserTap: _,
    onDownLoadTap: g,
    onDeleteAlbumTap: x,
    onDeleteDynamicTap: a,
    onReeditAlbum: T,
    onViewAlbumUrl: b,
    onAlbumDetailsTap: i,
    onShareGroup: w,
    handleSetClipboardData: P,
    onMakeAlbum: n,
    onfavoriteDynamic: o,
    onReport: t,
    onFriendCirclePosterTap: h
};