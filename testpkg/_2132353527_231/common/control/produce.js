function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    var t = wx.xngGlobal.store.getState(), o = t.produce, i = o.edit.draft, l = i.photos, r = i.tpl_id, s = i.videoNum, d = o.ui.currentPhotoIndex, f = t.entities.tpl, g = !1, p = f[r];
    return p || wx.xngGlobal.xu.logger.logAll("tplUndefined", {
        tpl_id: r,
        tpllength: f && Object.keys(f).length
    }), a.default.acUploadPhotoSuccess(), l.length >= u.ALBUM_PHOTOS_LIMIT || p && p.img_num && l.length >= p.img_num ? (g || (wx.showToast({
        title: "此模板仅支持" + (p.img_num || 100) + "张照片，多出的照片已保存到已上传照片",
        icon: "none",
        duration: 8e3
    }), g = !0), !1) : 6 === e.photo.ty && 10 === s ? (wx.showToast({
        title: c.MSG_ALBUM_VIDEOS_REACH_LIMIT,
        icon: "none",
        duration: 5e3
    }), !1) : n.findArrayItem(l, function(t) {
        return t && t.id === e.photo.id;
    }) ? (wx.showToast({
        title: c.MSG_ALBUM_RESOURCE_REPEATED,
        icon: "none",
        duration: 5e3
    }), !1) : (e.isInsert ? d < l.length - 1 ? (a.default.acInsertAlbumPhoto(e.photo, d + 1), 
    a.default.acSetCurrentPhotoIndex(d + 1)) : (a.default.acAddAlbumPhoto(e.photo), 
    a.default.acSetCurrentPhotoIndex(d + 1)) : a.default.acAddAlbumPhoto(e.photo), e.addPhotoDraftSuccess && e.addPhotoDraftSuccess(), 
    !0);
}

function o(e) {
    var t = e.type, o = e.filePaths, i = e.qsSize, a = e.success, r = e.complete, n = void 0, u = void 0, c = void 0, f = 0, g = [];
    "photo" === t ? (n = "wxUpldPtoSuc", u = "uploadPhotoFai", c = s.uploadUrl) : "video" === t && (n = "wxUpldVideoSuc", 
    u = "uploadVideoFai", c = s.uploadVideoUrl), wx.xngGlobal && wx.xngGlobal.xu && wx.xngGlobal.xu.changeQA && (c = c + "?test" + wx.xngGlobal.xu.changeQA);
    var p = function(e) {
        var t = e.filePath, a = e.success, r = e.fail, n = e.complete;
        wx.hideLoading(), wx.showLoading({
            title: "上传中(" + (f + 1) + "/" + o.length + ")...",
            mask: !0
        }), wx.uploadFile({
            url: c,
            filePath: t,
            name: "file",
            formData: {
                token: wx.xngGlobal.token,
                uid: wx.xngGlobal.xu.uid || "",
                qs: l.default.getImgQS({
                    size: i || "128x128"
                }),
                src: 11,
                code_ver: s.codeVer,
                proj: "ma"
            },
            success: a,
            fail: r,
            complete: n
        });
    }, x = function(e) {
        if (wx.hideLoading(), e.statusCode >= 500) return wx.showToast({
            title: "上传失败了~请稍后重试或换个文件",
            icon: "none",
            duration: 5e3
        }), void (wx.xngGlobal.xu.logger && wx.xngGlobal.xu.logger.logAll(u, {
            res: JSON.stringify(e)
        }));
        var o = JSON.parse(e.data);
        if (1 !== o.ret || !o.data) return wx.xngGlobal.xu.logger && wx.xngGlobal.xu.logger.logAll(u, {
            res: JSON.stringify(e)
        }), void wx.showToast({
            title: o.msg,
            icon: "none",
            duration: 5e3
        });
        var i = void 0;
        "photo" === t ? i = o.data : "video" === t && (i = o.data.list), wx.xngGlobal.xu.logger && wx.xngGlobal.xu.logger.logMoniter(n, {
            id: i.id
        }), a && a(i), g.push(i);
    }, h = function(e) {
        console.log("uploadfail==", e), wx.xngGlobal.xu.logger && wx.xngGlobal.xu.logger.logMoniter(u, {
            res: JSON.stringify(e),
            type: t
        }), wx.showToast({
            title: "上传失败了~请稍后重试或换个文件",
            icon: "none",
            duration: 5e3
        });
    };
    p({
        filePath: o[f],
        success: x,
        fail: h,
        complete: function e() {
            f < o.length - 1 ? p({
                filePath: o[++f],
                success: x,
                fail: h,
                complete: e
            }) : ("photo" === t && wx.xngGlobal.store.dispatch(d.acClearPhotoList()), wx.xngGlobal.store.dispatch(d.acReloadUserInfo()), 
            r && r(g));
        }
    });
}

var i = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
}, l = e(require("../utils/index")), a = e(require("../actions/produce")), r = e(require("../actions/article")), n = require("../others/utils.js"), s = require("../../config/config.js"), u = require("../const/common.js"), c = require("../const/message.js"), d = require("../actions/me.js");

module.exports = {
    pushAlbumDraft: function() {
        var e = wx.xngGlobal.store.getState(), t = e.produce.edit.draftDiff, o = e.produce.edit.draftState;
        console.log(o), o.isPushing || t && t.hasChange && (t.merge({
            hasChange: !1
        }), a.default.acPushAlbumDraft(t, o.ver, e.produce.edit.draftType));
    },
    pushArticleDraft: function() {
        var e = wx.xngGlobal.store.getState().specialPlay.article, t = e.currentEdit;
        "modify" === e.editOptions.editType || t.sections && t.sections.length < 1 || r.default.acPushArticleDraft(t);
    },
    photoToDraft: t,
    uploadPhotos: function(e) {
        wx.chooseImage({
            count: e.count,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(i) {
                o({
                    type: "photo",
                    qsSize: "128x128",
                    filePaths: i.tempFilePaths,
                    success: function(o) {
                        1 !== e.count || e.isInsert ? t({
                            photo: o,
                            addPhotoDraftSuccess: e.addPhotoDraftSuccess,
                            isInsert: e.isInsert
                        }) : a.default.acSetTmpAlbumCover({
                            id: o.id,
                            imgUrl: o.url,
                            tmpRotate: o.tmpRotate || 0,
                            isFirst: !1,
                            hasChangeCover: !0,
                            isOut: !1
                        });
                    },
                    complete: e.complete
                });
            }
        });
    },
    uploadVideo: function(e) {
        wx.chooseVideo({
            sourceType: [ "album" ],
            success: function(t) {
                wx.getFileInfo({
                    filePath: t.tempFilePath,
                    success: function(l) {
                        if (l.size > 26214400) {
                            var a = (l.size / 1024 / 1024).toFixed(1);
                            wx.xng.showModal({
                                title: "上传失败",
                                content: "抱歉~您上传的视频有" + a + "M，超出了系统限制。麻烦您重新上传小于25M的视频文件。",
                                btns: [ {
                                    text: "知道了",
                                    type: "primary",
                                    align: "right"
                                } ]
                            });
                        } else o(i({}, e, {
                            type: "video",
                            filePaths: [ t.tempFilePath ]
                        }));
                    }
                });
            },
            fail: function(e) {
                console.log("fail: ", e);
            }
        });
    },
    draftToProduceData: function(e, t) {
        var o = wx.xngGlobal.store.getState().entities.tpl[e.tpl_id], i = "";
        if (o && o.colors.length) {
            for (var l = 0; l < o.colors.length; l++) if (e.fcor === o.colors[l].color_value) {
                i = e.fcor;
                break;
            }
            i || (i = o.colors[0].color_value);
        }
        var a = e.photos.map(function(t) {
            var o = n.findArrayItem(e.subtitles, function(e) {
                return e.id === t.id;
            }), i = {
                txt: o && o.txt ? o.txt : "",
                id: t.id,
                type: t.mediaId ? 2 : 1,
                decorate: t.decorate || []
            };
            return 6 === t.ty && (i.file_ty = 6, i.music_vol = t.music_vol, 0 === i.music_vol || i.music_vol || (i.music_vol = .7), 
            i.bmt = t.bmt ? t.bmt : 0, i.emt = t.emt ? t.emt : 0), i;
        });
        return {
            title: e.title || "小年糕影集",
            hideProducer: e.hideProducer,
            producer: e.producer,
            ffam: e.ffam,
            fcor: i,
            model: e.model,
            album_id: e.album_id,
            ids: a,
            story: e.story,
            music: e.music ? e.music.map(function(e) {
                return {
                    id: e.id,
                    type: e.type ? e.type : 2
                };
            }) : [],
            music_type: 1,
            tpl_id: e.tpl_id,
            form_id: t,
            arr_cover: e.cover && e.cover.id && 0 !== e.cover.id ? {
                img_id: e.cover.id
            } : {
                img_id: a[0].id
            }
        };
    },
    uploadFile: o
};