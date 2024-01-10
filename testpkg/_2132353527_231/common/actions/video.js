function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acFetchAlbum = function(e) {
    var i = e.lid;
    return {
        API: {
            type: t.default.FETCH_VIDEO_ALBUM,
            endpoint: "/album/open",
            param: {
                lid: i,
                qs: r.default.getImgQS({
                    size: a.COVER_SIZE.VIDEO_BCK_SIZE
                }),
                s_qs: r.default.getImgQS({
                    size: a.COVER_SIZE.VIDEO_SM_SIZE
                })
            },
            normalizeFunc: function(e) {
                return (0, n.normalize)([ e.data ], o.default.profileIdSchema);
            }
        }
    };
}, exports.acRequestFavorDetail = function(e) {
    var r = e.albumId, a = e.tpl_id;
    return {
        API: {
            type: t.default.FAVOR_VIDEO_DETAIL,
            endpoint: "/favor/detail",
            param: {
                id: r,
                log_params: {
                    proj: "ma",
                    tpl_id: a
                }
            }
        }
    };
}, exports.acSelectVideoPic = function(e) {
    return {
        type: t.default.SELECT_VIDEO_PIC,
        pic: e
    };
}, exports.acRemoveVideoPhoto = function(e) {
    return {
        type: t.default.REMOVE_VIDEO_PIC,
        pic: e
    };
}, exports.acGetTenSecondsTpl = function() {
    return {
        API: {
            type: t.default.GET_TEM_SECONDS_TPL,
            endpoint: "/tpl/get_ten_seconds_tpl"
        }
    };
};

var t = e(require("../const/actionType")), r = e(require("../utils/index")), a = require("../const/index"), i = require("../../frameBase/library/redux/index"), n = require("../../frameBase/library/normalizr/normalizr.min"), o = e(require("../schemas/dynamics"));

exports.default = (0, i.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);