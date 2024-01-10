function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a(e, a) {
    var o = a.context, t = a.data;
    return s.default[e].bind(o, t);
}

function o(e) {
    var o = e.data, t = o.tpl_type, n = o.tpl_id, r = o.ban, l = o.album_type, i = o.favoriteId, s = o.status, c = o.s, m = o.p, y = o.hide_u, T = o.canMakeSame, x = wx.xngGlobal.getBan("modify_album", r) ? "_gray" : "", f = wx.xngGlobal.getBan("modify_music", r) ? "_gray" : "", b = wx.xngGlobal.getBan("modify_tpl", r) ? "_gray" : "", A = wx.xngGlobal.getBan("modify_cover", r) ? "_gray" : "", L = wx.xngGlobal.getBan("modify_title", r) ? "_gray" : "", S = wx.xngGlobal.getBan("modify_story", r) ? "_gray" : "", P = wx.xngGlobal.getBan("reedit", r) ? "_gray" : "", D = wx.xngGlobal.getBan("download", r) ? "_gray" : "", E = wx.xngGlobal.getBan("make_same", r) || !T && l !== u.ALBUM_TYPE.SPLICE_VIDEOS ? "_gray" : "", w = t ? "制作同款" : "我要制作", h = "", B = wx.xngGlobal.getBan("anonymous", r) ? "_gray" : "_hide", v = "隐藏身份", G = wx.xngGlobal.getBan("publish", r) ? "_gray" : "_public", M = "发表影集", U = "actionSheetPublishBtn", C = wx.xngGlobal.getBan("favorites", r) ? "_gray" : "_no", Y = "收藏", I = wx.xngGlobal.getBan("get_album_url", r) ? "_gray" : "", k = wx.xngGlobal.getBan("get_album_info", r) ? "_gray" : "";
    "_gray" !== C && i && (C = "_yes", Y = "已收藏"), l !== u.ALBUM_TYPE.ARTICLE && s != _.default.ALBUM_STATUS.SUCCESS && s != _.default.ALBUM_STATUS.FAIL && (x = "_gray", 
    f = "_gray", b = "_gray", h = "_gray"), l !== u.ALBUM_TYPE.ARTICLE && s != _.default.ALBUM_STATUS.SUCCESS && (D = "_gray"), 
    (m === _.default.ALBUM_PUBLISH_TYPE_STATUS.PUBLISH || c === _.default.ALBUM_TYPE_STATUS.FEATURED) && (G = wx.xngGlobal.getBan("un_publish", r) ? "_gray" : "_private", 
    M = "撤销发表", U = ""), "_gray" !== B && y && (B = "_show", v = "显示身份"), 1 === t && n !== _.default.TPL_TYPE.SPECIAL_PLAY_MV ? (x = "_gray", 
    f = "_gray", b = "_gray", A = "_gray", L = "_gray", S = "_gray", P = "_gray", D = "_gray") : 1 === t && n === _.default.TPL_TYPE.SPECIAL_PLAY_MV && (b = "_gray"), 
    n === _.default.TPL_TYPE.SPLICE_VIDEOS && (x = "_gray", f = "_gray", b = "_gray", 
    S = "_gray", L = "_gray", P = "_gray");
    var R = (0, g.default)({}, wx.xngGlobal.store.getState().entities.tpl, wx.xngGlobal.store.getState().entities.miniTpl);
    return l !== u.ALBUM_TYPE.ARTICLE && n && R[n] && R[n].disable && n !== _.default.TPL_TYPE.SPECIAL_PLAY_MV && (x = "_gray", 
    f = "_gray", P = "_gray"), l === u.ALBUM_TYPE.ARTICLE && (b = "_gray", S = "_gray", 
    f = "_gray", D = "_gray", I = "_gray", P = "_gray"), d.default.tplTypeJudge(n) === _.default.TPL_TYPE.STYLE.MV && wx.xngGlobal.abTest.mv_render && (D = "_gray", 
    I = "_gray", x = "", f = "", h = ""), R[n] && !R[n].music && (f = "_gray"), {
        modifyActions: [ {
            icon: p.default.resourceDomain + "/img/play/tool/modify_album" + x + ".png",
            text: "修改影集",
            onTap: a("onModifyAlbum", e)
        }, {
            icon: p.default.resourceDomain + "/img/play/tool/change_music" + f + ".png",
            text: "修改音乐",
            onTap: a("onChangeMusic", e)
        }, {
            icon: p.default.resourceDomain + "/img/play/tool/change_tpl" + b + ".png",
            text: "修改模板",
            onTap: a("onChangeTpl", e)
        }, {
            icon: p.default.resourceDomain + "/img/play/tool/change_cover" + A + ".png",
            text: "修改封面",
            onTap: a("onChangeCover", e)
        }, {
            icon: p.default.resourceDomain + "/img/play/tool/modify_title" + L + ".png",
            text: "修改标题",
            onTap: a("onChangeTitleTap", e)
        }, {
            icon: p.default.resourceDomain + "/img/play/tool/modify_story" + S + ".png",
            text: "修改故事",
            onTap: a("onChangeStoryTop", e)
        }, {
            icon: p.default.resourceDomain + "/img/play/tool/del" + h + ".png",
            text: "删除",
            onTap: a("onDeleteAlbumTap", e)
        } ],
        otherActions: {
            publish: {
                id: U,
                icon: p.default.resourceDomain + "/img/play/tool/to_profile" + G + ".png",
                text: M,
                onTap: a("onChangeContributeTap", e)
            },
            anonymous: {
                icon: p.default.resourceDomain + "/img/play/tool/identity" + B + ".png",
                text: v,
                onTap: a("onAnonymousUserTap", e)
            },
            download: {
                icon: p.default.resourceDomain + "/img/play/tool/download" + D + ".png",
                text: "保存/下载",
                onTap: a("onDownLoadTap", e)
            },
            reedit: {
                icon: p.default.resourceDomain + "/img/play/tool/reedit" + P + ".png",
                text: "复制重做",
                onTap: a("onReeditAlbum", e)
            },
            collect: {
                icon: p.default.resourceDomain + "/img/discover/collect" + C + ".png",
                text: Y,
                onTap: a("onfavoriteDynamic", e)
            },
            albumUrl: {
                icon: p.default.resourceDomain + "/img/play/tool/album_url" + I + ".png",
                text: "影集网址",
                onTap: a("onViewAlbumUrl", e)
            },
            details: {
                icon: p.default.resourceDomain + "/img/play/tool/details" + k + ".png",
                text: "影集详情",
                onTap: a("onAlbumDetailsTap", e)
            },
            makeSame: {
                icon: p.default.resourceDomain + "/img/discover/make_same" + E + ".png",
                text: w,
                onTap: a("onMakeAlbum", e),
                id: "actionsheet-make-same"
            },
            delDynamic: {
                icon: p.default.resourceDomain + "/img/play/tool/del_dynamic.png",
                text: "删除动态",
                onTap: a("onDeleteDynamicTap", e)
            },
            report: {
                icon: p.default.resourceDomain + "/img/discover/report.png",
                text: "举报",
                onTap: a("onReport", e)
            },
            poster: {
                icon: p.default.resourceDomain + "/img/specialPlay/mv/friendCircle.png",
                text: "生成海报",
                tip: "生成海报，分享给他人！",
                onTap: a("onFriendCirclePosterTap", e)
            }
        }
    };
}

function t(e) {
    var o = e.data, t = o.ban, n = o.tpl_id, r = o.front_render, l = wx.xngGlobal.abTest.web_link_more_sheet || {};
    if (l) {
        var i = l.in_red, g = void 0 === i ? "web_link_share_friend_red" : i, u = l.in_gray, s = void 0 === u ? "web_link_share_friend_gray" : u, c = l.text, m = d.default.tplTypeJudge(n) === _.default.TPL_TYPE.STYLE.MV && (!!wx.xngGlobal.abTest.mv_render || r), y = wx.xngGlobal.getBan("share", t) || m || d.default.isBlessVideo(n);
        return {
            icon: p.default.resourceDomain + "/img/discover/" + (y ? s : g) + ".png",
            text: c || "分享朋友圈",
            id: "sheetWebLink",
            tip: y ? "" : "点击右下“可能发送的小程序”",
            openType: y ? "" : "contact",
            onTap: a("onShareGroup", e)
        };
    }
    return null;
}

function n(e) {
    var a = e.data, n = a.tpl_id, r = a.front_render, l = a.canMakeSame, i = a.album_type, g = o(e), p = t(e), s = g.otherActions, c = s.makeSame, m = s.collect, y = s.details, T = s.report, x = s.poster, f = [];
    return (l || i === u.ALBUM_TYPE.SPLICE_VIDEOS) && f.push(c), f = f.concat(m, y, T), 
    wx.xngGlobal.abTest.share_poster && d.default.tplTypeJudge(n) === _.default.TPL_TYPE.STYLE.MV && (wx.xngGlobal.abTest.mv_render || r) ? f.splice(3, 0, x) : p && f.splice(3, 0, p), 
    {
        groups: [ {
            title: "其他",
            actions: f
        } ]
    };
}

function r(e) {
    var a = e.data, n = a.tpl_id, r = a.front_render, l = o(e), i = l.modifyActions, g = l.otherActions, u = g.publish, p = g.anonymous, s = g.download, c = g.reedit, m = g.collect, y = g.albumUrl, T = g.details, x = g.poster, f = [ u, p, s, c, m, y, T ];
    if (wx.xngGlobal.abTest.share_poster && d.default.tplTypeJudge(n) === _.default.TPL_TYPE.STYLE.MV && (wx.xngGlobal.abTest.mv_render || r)) f.splice(3, 0, x); else {
        var b = t(e);
        b && f.splice(3, 0, b);
    }
    return {
        groups: [ {
            title: "修改",
            actions: i,
            tip: "修改后，阅读点赞依然保留"
        }, {
            title: "其他",
            actions: f
        } ]
    };
}

function l(e) {
    return {
        groups: [ {
            title: "更多",
            actions: [ {
                icon: p.default.resourceDomain + "/img/discover/report.png",
                text: "举报",
                onTap: a("onReport", e)
            } ]
        } ]
    };
}

function i(e) {
    return {
        groups: [ {
            title: "更多",
            actions: [ {
                icon: p.default.resourceDomain + "/img/play/tool/del_dynamic.png",
                text: "删除动态",
                onTap: a("onDeleteDynamicTap", e)
            } ]
        } ]
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getReaderActions = n, exports.getWriterActions = r, exports.getReportAction = l, 
exports.getDelDynamicAction = i;

var g = e(require("../../../frameBase/utils/object-assign/index")), _ = e(require("../../../common/const/common")), u = require("../../../common/const/index"), p = e(require("../../../config/config")), d = e(require("../../../common/others/utils")), s = e(require("./actionsFuc"));

exports.default = {
    getWriterActions: r,
    getReaderActions: n,
    getReportAction: l,
    getDelDynamicAction: i
};