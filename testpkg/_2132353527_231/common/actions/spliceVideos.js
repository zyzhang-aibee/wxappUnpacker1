Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acAddVideo = function(e) {
    return {
        type: t.default.ADD_VIDEO_FOR_SPLICE,
        video: e
    };
}, exports.acMoveVideo = function(e, r) {
    return {
        type: t.default.MOVE_VIDEO_FOR_SPLICE,
        index: e,
        direction: r
    };
}, exports.acDeleteVideo = function(e) {
    return {
        type: t.default.DELETE_VIDEO_FOR_SPLICE,
        index: e
    };
}, exports.updateSpliceVideo = function(e) {
    return {
        type: t.default.UPDATE_SPLICE_VIDEO,
        video: e
    };
}, exports.acSetSpliceVideosTitle = function(e) {
    return {
        type: t.default.SET_SPLICE_VIDEOS_TITLE,
        title: e
    };
};

var e = require("../../frameBase/library/redux/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../const/actionType"));

exports.default = (0, e.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);