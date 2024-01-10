function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acFetchAlbumStatus = function(e) {
    return {
        API: {
            type: r.default.FETCH_ALBUM_STATUS,
            endpoint: "/album/status_batch",
            param: {
                ids: e
            },
            normalizeFunc: function(e) {
                return (0, a.normalize)(e.data.list, u.default.AlbumListSchemas.ALBUM_LIST_ARRAY);
            }
        }
    };
}, exports.acSetCheckAlbums = function(e) {
    return {
        type: r.default.SET_CHECK_ALBUMS,
        albums: e
    };
}, exports.acAddcheckAlbums = function(e) {
    return {
        type: r.default.ADD_CHECK_ALBUMS,
        albums: e
    };
}, exports.acDeleteCheckAlbums = function(e) {
    return {
        type: r.default.DELETE_CHECK_ALBUMS,
        albumIds: e
    };
}, exports.acClearCheckAlbums = function(e) {
    return {
        type: r.default.CLEAR_CHECK_ALBUMS,
        albumIds: e
    };
};

var t = require("../../frameBase/library/redux/index"), r = e(require("../const/actionType")), u = e(require("../schemas/me")), a = require("../../frameBase/library/normalizr/normalizr.min");

exports.default = (0, t.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);