function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acFetchBless = function() {
    return {
        API: {
            type: r.default.FETCH_BLESS_TOPIC,
            endpoint: "/topic/get_topic",
            param: {}
        }
    };
}, exports.acCheckTag = function(e) {
    var t = e.tag, a = e.scrollTop;
    return {
        type: r.default.CHECK_BLESS_TOPIC_TAG,
        tag: t,
        scrollTop: a
    };
}, exports.acFetchFeed = function(e) {
    var t = e.tagId, s = e.refresh, d = e.isAllTag;
    return {
        API: {
            type: r.default.FETCH_BLESS_TOPIC_FEED,
            endpoint: "/trends/get_recommend_trends",
            param: {
                tag_id: t,
                log_params: {
                    page: (0, a.getPage)(),
                    common: (0, a.getCommonFields)()
                },
                qs: i.default.getImgQS({
                    size: o.COVER_SIZE.FEED_SIZE
                }),
                h_qs: i.default.getImgQS({
                    size: o.COVER_SIZE.HEAD_SIZE
                }),
                share_width: 625,
                share_height: 500
            },
            normalizeFunc: function(e) {
                return (0, n.normalizeFeedData)(e);
            }
        },
        tagId: t,
        refresh: s,
        isAllTag: d
    };
};

var t = require("../../../frameBase/library/redux/index"), r = e(require("../../const/actionType")), a = require("../../others/dynamicActionLog"), o = require("../../const/index"), i = e(require("../../utils/index")), n = require("../discover");

exports.default = (0, t.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);