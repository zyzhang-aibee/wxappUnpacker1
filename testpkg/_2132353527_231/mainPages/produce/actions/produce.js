Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acFetchAlbumTplListGroup = exports.acFetchAlbumDraft = void 0;

var e = require("../../../common/actions/produce");

Object.defineProperty(exports, "acFetchAlbumDraft", {
    enumerable: !0,
    get: function() {
        return e.acFetchAlbumDraft;
    }
}), Object.defineProperty(exports, "acFetchAlbumTplListGroup", {
    enumerable: !0,
    get: function() {
        return e.acFetchAlbumTplListGroup;
    }
}), exports.acGetTplRecommend = function() {
    return {
        API: {
            type: r.default.GET_TPL_RECOMMEND,
            endpoint: "/tpl/recommend"
        }
    };
}, exports.acSetAlbumTpl = function(e) {
    return {
        type: r.default.SET_ALBUM_TPL,
        tplId: e
    };
}, exports.acSetRecommendTpl = function() {
    return {
        type: r.default.SET_RECOMMEND_TPL
    };
}, exports.acSetAlbumMusics = function(e) {
    return {
        type: r.default.SET_ALBUM_MUSICS,
        musics: e
    };
}, exports.acSetTplSortList = function(e) {
    return {
        type: r.default.SET_TPL_SORT_LIST,
        tplSortList: e
    };
}, exports.acSetTplSortIndex = function(e) {
    return {
        type: r.default.SET_CUR_TPL_SORT_INDEX,
        sortIndex: e
    };
}, exports.acSetSameTplWithoutMusic = function() {
    return {
        type: r.default.SET_TPL_WITHOUT_MUSIC
    };
}, exports.acHideSameModelView = function() {
    return {
        type: r.default.HIDE_SAME_MODEL_VIEW
    };
};

var t = require("../../../frameBase/library/redux/index"), r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../common/const/actionType"));

exports.default = (0, t.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);