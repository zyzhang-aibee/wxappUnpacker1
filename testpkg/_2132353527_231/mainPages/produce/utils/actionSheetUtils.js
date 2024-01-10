function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function o(t) {
    p.default.photoToDraft({
        photo: t
    }) && t.du >= 3e4 && setTimeout(function() {
        wx.navigateTo({
            url: "/pages/produce/videoInterceptPage/videoInterceptPage?photoId=" + t.id
        });
    }, 1e3);
}

function e() {
    p.default.uploadVideo({
        success: o
    });
}

function n() {
    c.default.acSetAlbumTpl(r.TPL_TYPE.RANDOM), e();
}

function a() {
    wx.xng.showModal({
        title: "您当前选择的模板不支持视频，选用《随机模板》并继续添加视频？",
        btns: [ {
            text: "取消",
            type: "primary"
        }, {
            text: "继续",
            type: "primary",
            onTap: n
        } ]
    });
}

function i() {
    wx.navigateTo({
        url: "/pages/me/photoListPage/photoListPage?for=select"
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uploadPhoto = exports.alertUploadVideoData = exports.showUploadActionSheet = void 0;

var p = t(require("../../../common/control/produce")), c = t(require("../../../common/actions/produce")), r = require("../../../common/const/common"), u = (exports.showUploadActionSheet = function(t) {
    var o = [ {
        icon: "https://static2.xiaoniangao.cn/web/inner/img/produce/add_photo.png",
        title: "上传照片",
        tip: "从手机上传新照片（最多100张）",
        onTap: u
    }, {
        icon: "https://static2.xiaoniangao.cn/web/inner/img/produce/add_video.png",
        title: "上传视频",
        tip: "支持30秒小于25M的视频片段",
        onTap: t ? e : a
    }, {
        icon: "https://static2.xiaoniangao.cn/web/inner/img/produce/my_photo.png",
        title: "已上传",
        tip: "从小年糕相册选择已上传照片",
        onTap: i
    } ];
    wx.xng.showActionSheet({
        actions: o
    });
}, exports.alertUploadVideoData = {
    title: "您当前选择的模板不支持视频，选用《随机模板》并继续添加视频？",
    btnArray: [ {
        text: "取消",
        active: !0
    }, {
        text: "继续",
        active: !0,
        onItemTap: "handleChangTplAndUpload"
    } ]
}, exports.uploadPhoto = function() {
    p.default.uploadPhotos({
        count: 9,
        complete: function() {
            p.default.pushAlbumDraft();
        }
    });
});