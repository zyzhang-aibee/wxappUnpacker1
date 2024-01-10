function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a(e) {
    var a = e.title, t = e.music, i = e.bodys, n = e.cover, o = e.album_id, l = e.profile_id, r = {
        title: a,
        music: t
    };
    r.cover = {
        id: n.img_id || n.id || n
    }, r.sections = i || [], y.default.acSetArticleData(r), y.default.acSetEditType("modify"), 
    wx.navigateTo({
        url: "/pages/specialPlay/article/editArticlePage/editArticlePage?for=modify&albumId=" + o + "&dynamicId=" + l,
        success: function() {
            wx.hideLoading();
        }
    });
}

function t(e) {
    var t = e.dynamic, i = t.bodys, n = t.album_id, o = t.ban, l = t.s;
    wx.xngGlobal.getBan("modify_album", o) ? f("影集正在审核中，如有疑问请咨询客服！") : l != x.default.ALBUM_TYPE_STATUS.FEATURED ? (wx.showLoading({
        title: "加载中",
        mask: !0
    }), i ? a(t) : v.default.acFetchArticleDetail(n).then(function(e) {
        a(p({}, t, e.entities.dynamics[e.result[0]]));
    }).catch(function(e) {
        wx.showToast({
            title: "请求失败，请稍后重试",
            icon: "none"
        }), console.log(e);
    })) : f("佳作受保护，若要修改请联系客服");
}

function i() {
    y.default.acSetEditType("edit");
    var e = getCurrentPages(), a = e[e.length - 1].data.__EXTRA__, t = a.midMod10, i = a.midMod20, n = a.codeVer, o = a.wxVer, l = a.scene;
    wx.reportAnalytics("xwf_article_make_same", {
        mid: wx.xngGlobal.xu.mid,
        midmod10: t,
        midmod20: i,
        codever: n,
        wxver: o,
        scene: l
    }), wx.xngGlobal.store.getState().specialPlay.article.currentEdit.sections.length < 1 ? (wx.showLoading({
        title: "加载中",
        mask: !0
    }), y.default.acFetchArticleDraft().then(function(e) {
        e.data && e.data.sections && y.default.acSetArticleData(e.data), wx.navigateTo({
            url: "/pages/specialPlay/article/editArticlePage/editArticlePage",
            success: function() {
                wx.hideLoading();
            }
        });
    })) : wx.navigateTo({
        url: "/pages/specialPlay/article/editArticlePage/editArticlePage"
    });
}

function n(e) {
    var a = e.dynamic, t = e.isAuthor, i = e.context;
    void 0 === a.favoriteId ? v.default.acGetDynamicIsFavorites({
        id: a.album_id,
        dynamicId: a.profile_id,
        albumType: w.ALBUM_TYPE.ARTICLE
    }).then(function(e) {
        l({
            dynamic: p({}, a, {
                favoriteId: e.data._id
            }),
            context: i,
            isAuthor: t
        });
    }) : l({
        dynamic: a,
        context: i,
        isAuthor: t
    });
}

function o(e) {
    var a = e.ban;
    return {
        modifyBan: wx.xngGlobal.getBan("modify_album", a),
        publishBan: wx.xngGlobal.getBan("publish", a),
        unPublishBan: wx.xngGlobal.getBan("un_publish", a),
        showAuthorBan: wx.xngGlobal.getBan("anonymous", a),
        collectBan: wx.xngGlobal.getBan("favorites", a),
        urlBan: wx.xngGlobal.getBan("get_album_url", a)
    };
}

function l(e) {
    var a = e.dynamic, t = e.context, n = e.isAuthor, l = o(a), u = a.p, f = a.s, p = a.hide_u, y = a.favoriteId, h = l.publishBan, b = l.unPublishBan, T = l.showAuthorBan, A = l.collectBan, w = "", v = "";
    u === x.default.ALBUM_PUBLISH_TYPE_STATUS.PUBLISH || f === x.default.ALBUM_TYPE_STATUS.FEATURED ? (w = b ? "_gray" : "_private", 
    v = "撤销发表") : (w = h ? "_gray" : "_public", v = "发表图文");
    var P = {
        icon: _.default.resourceDomain + "/img/play/tool/to_profile" + w + ".png",
        text: v,
        onTap: r.bind(t, a)
    }, B = "_gray", D = "隐藏身份";
    T || (B = p ? "_show" : "_hide", D = p ? "显示身份" : "隐藏身份");
    var E = {
        icon: _.default.resourceDomain + "/img/play/tool/identity" + B + ".png",
        text: D,
        onTap: c.bind(t, a)
    }, S = {
        icon: _.default.resourceDomain + "/img/play/tool/del.png",
        text: "删除",
        onTap: d.bind(t, a)
    }, U = {
        icon: _.default.resourceDomain + "/img/discover/make_same.png",
        text: "制作同款",
        onTap: i.bind(t, a)
    }, I = "_gray", L = "收藏";
    A || (I = y ? "_yes" : "_no", L = y ? "已收藏" : "收藏");
    var C = {
        icon: _.default.resourceDomain + "/img/discover/collect" + I + ".png",
        text: L,
        onTap: s.bind(t, a)
    }, G = {
        icon: _.default.resourceDomain + "/img/discover/report.png",
        text: "举报",
        onTap: m.bind(t, a)
    }, M = {
        icon: _.default.resourceDomain + "/img/specialPlay/article/font-size-setting.png",
        text: "调整字体",
        onTap: g.bind(t)
    }, R = void 0;
    R = n ? [ P, E, S, C ] : [ U, C, G ], -1 !== wx.xng.getCurrentPage().route.indexOf("dynamicSharePage") && R.push(M);
    var k = [ {
        title: "更多",
        actions: R
    } ];
    wx.xng.showActionSheet({
        groups: k
    }), t._curArticle = a;
}

function r(e) {
    var a = e.ban, t = e.s, i = e.p, n = e.album_id, o = e.profile_id;
    if (t !== x.default.ALBUM_TYPE_STATUS.FEATURED) if (i === x.default.ALBUM_PUBLISH_TYPE_STATUS.PUBLISH) {
        if (wx.xngGlobal.getBan("un_publish", a)) return;
        v.default.acUnPublishDynamic(o).then(function() {
            f(h.default.MSG_ARTICLE_PRIVATE);
        });
    } else {
        if (wx.xngGlobal.getBan("publish", a)) return;
        v.default.acPublishDynamic({
            id: n,
            dynamicId: o,
            type: P.FEED_TYPE.ARTICLE
        }).then(function(e) {
            f(h.default.MSG_ARTICLE_PUBLIC);
            var a = wx.xng.getCurrentPage();
            a.options = a.options || {}, a.options.dynamicId = e.data.id;
        });
    } else f("佳作受保护，若要修改请联系客服");
}

function c(e) {
    var a = e.album_id, t = e.hide_u, i = e.ban, n = e.profile_id, o = e.album_type;
    wx.xngGlobal.getBan("anonymous", i) || v.default.acChangeShowDynamicAuthor({
        id: a,
        albumType: o,
        dynamicId: n,
        isHide: !t
    });
}

function d(e) {
    e.s !== x.default.ALBUM_TYPE_STATUS.FEATURED ? wx.showModal({
        title: "",
        content: h.default.MSG_SURE_ARTICLE_DELETE,
        confirmColor: "#f43531",
        success: function(a) {
            a.confirm && u(e);
        }
    }) : f("佳作不能删除");
}

function u(e) {
    e && v.default.acDeleteDynamic({
        albumType: e.album_type,
        id: e.album_id,
        dynamicId: e.profile_id,
        tpl_id: e.tpl_id,
        stpl_id: e.stpl_id
    }).then(function() {
        wx.showToast({
            title: "删除后30天内可以到【回收站】里恢复",
            icon: "none",
            duration: 5e3
        }), wx.xngGlobal.dispatch(A.default.acClearAlbumRecentlyDeleted());
        var e = getCurrentPages(), a = e[e.length - 1];
        a.deleteCallBack && a.deleteCallBack();
    }).catch(function() {
        wx.showToast({
            title: "删除失败",
            icon: "none"
        });
    });
}

function s(e) {
    var a = e.ban, t = e.album_id, i = e.favoriteId, n = e.profile_id, o = e.album_type;
    wx.xngGlobal.getBan("favorites", a) || (i ? v.default.acDeleteDynamicFavorites({
        favoriteId: i,
        dynamicId: n
    }).then(function() {
        f("取消收藏成功");
    }) : v.default.acAddDynamicFavorites({
        id: t,
        dynamicId: n,
        albumType: o
    }).then(function() {
        (0, b.setControllerData)({
            hasNewCollect: !0
        }), f("收藏成功\n在“我-收藏”查看"), T.default.favorite({
            did: n
        });
    }));
}

function m(e) {
    f("已收到投诉，我们会尽快审核"), v.default.acComplaintDynamic({
        dynamicId: e.profile_id,
        dynamicMid: e.user.mid
    });
}

function f(e) {
    wx.showToast({
        title: e,
        icon: "none"
    });
}

function g() {
    this.triggerEvent("showfontpanel");
}

var p = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
}, _ = e(require("../../../config/config")), y = e(require("../../actions/article")), x = e(require("../../const/common")), h = e(require("../../const/message")), b = require("../../../mainPages/me/redDotController"), T = e(require("../../others/dynamicActionLog")), A = e(require("../../actions/me")), w = require("../../const/statusNType"), v = e(require("../../actions/entities/dynamics")), P = require("../../const/index"), B = {
    modify: {
        name: "modify",
        text: "修改编辑",
        imgUrl: _.default.resourceDomain + "/img/specialPlay/article/article-modify.png"
    },
    more: {
        name: "more",
        text: "更多",
        imgUrl: _.default.resourceDomain + "/img/specialPlay/article/article-more.png"
    },
    makeSame: {
        name: "makeSame",
        text: "做图文",
        imgUrl: _.default.resourceDomain + "/img/specialPlay/article/article-make-same.png"
    },
    share: {
        name: "share",
        isShare: !0,
        text: "分享",
        imgUrl: _.default.resourceDomain + "/img/specialPlay/article/wechat.png"
    }
}, D = {
    modify: t,
    more: n,
    makeSame: i
};

module.exports = {
    btns: B,
    btnTapHandlers: D,
    handleArticleMoreAction: n,
    modifyArticle: t,
    onChangeContributeTap: r
};