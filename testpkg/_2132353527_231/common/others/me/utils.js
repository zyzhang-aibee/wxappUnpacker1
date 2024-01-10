function i(i) {
    return i && i.__esModule ? i : {
        default: i
    };
}

function a(i) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = i.tpl_id, n = i.stpl_id, t = i.album_user, e = i.album_id, c = i.a_profile_id, s = i.album_type, d = i.lid, l = i.status;
    r.default.acLogPlayUV({
        did: c,
        mid: t.mid,
        type: T.DYNAMIC_PLAY_UV_TYPE.FEED
    }), s === T.ALBUM_TYPE.ARTICLE || l === p.default.ALBUM_STATUS.SUCCESS ? (0, x.goDynamicSharePage)({
        dynamicId: c,
        dynamicMid: t.mid,
        tplId: o === p.default.TPL_TYPE.RANDOM ? n : o,
        isArticle: s === T.ALBUM_TYPE.ARTICLE ? 1 : "",
        albumId: e,
        isComment: a
    }) : wx.navigateTo({
        url: "/pages/specialPlay/common/waitingFinishPage/waitingFinishPage?lid=" + d
    });
}

function o(i) {
    var a = i.id, o = i.favor.has_favor, n = i.stpl_id, t = i.tpl_id, e = i.album_id, c = i.album_type;
    if (o) wx.xngGlobal.dispatch(f.default.minusFavor({
        id: a,
        albumId: e,
        albumType: c
    })); else {
        var s = t === p.default.TPL_TYPE.RANDOM ? n : t;
        wx.xngGlobal.dispatch(f.default.addFavor({
            id: a,
            albumId: e,
            tplId: s,
            albumType: c
        }));
    }
}

function n(i) {
    wx.xng.showActionSheet({
        actions: [ {
            title: "撤销发表",
            onTap: function() {
                t(i);
            }
        } ]
    });
}

function t(i) {
    2 !== i.s ? wx.showModal({
        content: "确认撤销发表吗？",
        success: function(a) {
            a.confirm && e(i);
        }
    }) : wx.showToast({
        title: "佳作不能撤销发表哦",
        icon: "none"
    });
}

function e(i) {
    wx.showToast({
        title: "撤销中...",
        icon: "loading",
        mask: !0,
        duration: 1e4
    }), m.default.acUnPublishDynamic(i.id).then(function() {
        wx.hideToast();
    }).catch(function(i) {
        wx.showToast({
            title: i,
            icon: "none"
        });
    });
}

function c(i) {
    wx.showActionSheet({
        itemList: [ "删除留言", "在个人主页隐藏" ],
        success: function(a) {
            0 === a.tapIndex ? s(i) : 1 === a.tapIndex && l(i);
        }
    });
}

function s(i) {
    wx.showModal({
        content: "确认删除留言吗？",
        success: function(a) {
            a.confirm && d(i);
        }
    });
}

function d(i) {
    var a = i.id, o = i.album_id, n = i.cid;
    wx.showToast({
        title: "删除中...",
        icon: "loading",
        mask: !0,
        duration: 1e4
    }), wx.xngGlobal.dispatch(f.default.acDelSelfComment({
        dynamicId: a,
        id: o,
        cid: n,
        success: function() {
            wx.hideToast();
        },
        fail: function(i) {
            wx.showToast({
                title: i,
                icon: "none"
            });
        }
    }));
}

function l(i) {
    wx.showToast({
        title: "隐藏中...",
        icon: "loading",
        mask: !0,
        duration: 1e4
    });
    var a = i.id, o = i.album_id, n = i.cid;
    wx.xngGlobal.dispatch(f.default.acDisableProComment({
        dynamicId: a,
        id: o,
        cid: n,
        success: function() {
            wx.hideToast();
        },
        fail: function(i) {
            wx.showToast({
                title: i,
                icon: "none"
            });
        }
    }));
}

function u(i) {
    var a = i.id, o = i.comment_favor, n = {
        tar: "favor",
        id: i.album_id,
        cid: i.cid,
        dynamicId: a
    };
    o.has_favor ? wx.xngGlobal.dispatch(f.default.acUnfavorComment(n)) : wx.xngGlobal.dispatch(f.default.acFavorComment(n));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.onAlbumTap = a, exports.onAlbumFavorTap = o, exports.onCancelPublishTap = n, 
exports.onMoreActionTap = c, exports.onCommentFavorTap = u;

var r = i(require("../../actions/discover")), m = i(require("../../actions/entities/dynamics")), f = i(require("../../actions/play")), p = i(require("../../const/common")), x = require("../businessUtils"), T = require("../../const/index");

exports.default = {
    onAlbumTap: a,
    onCancelPublishTap: n,
    onAlbumFavorTap: o,
    onMoreActionTap: c,
    onCommentFavorTap: u
};