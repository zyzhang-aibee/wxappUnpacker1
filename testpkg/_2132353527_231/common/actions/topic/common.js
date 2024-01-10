function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acFetchTopics = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return {
        API: {
            type: r.default.FETCH_TOPICS,
            endpoint: "/topic/get_user_topics",
            param: e
        }
    };
}, exports.acFetchFeed = function(e) {
    var t = e.topicId, c = e.refresh;
    return {
        API: {
            type: r.default.FETCH_TOPIC_FEED,
            endpoint: "/trends/get_recommend_trends",
            param: {
                topic_id: t,
                log_params: {
                    page: (0, i.getPage)(),
                    common: (0, i.getCommonFields)()
                },
                qs: a.default.getImgQS({
                    size: n.COVER_SIZE.FEED_SIZE
                }),
                h_qs: a.default.getImgQS({
                    size: n.COVER_SIZE.HEAD_SIZE
                }),
                share_width: 625,
                share_height: 500
            },
            normalizeFunc: function(e) {
                return (0, o.normalizeFeedData)(e);
            }
        },
        topicId: t,
        refresh: c
    };
}, exports.acClearTopicFeed = function(e) {
    return {
        type: r.default.CLEAR_TOPIC_FEED,
        topicId: e
    };
}, exports.acSortTopic = function(e) {
    return {
        API: {
            type: r.default.SORT_TOPIC,
            endpoint: "/topic/update_user_topics",
            param: {
                topics: e
            }
        },
        topicIds: e
    };
};

var t = require("../../../frameBase/library/redux/index"), r = e(require("../../const/actionType")), o = require("../discover"), i = require("../../others/dynamicActionLog"), n = require("../../const/index"), a = e(require("../../utils/index"));

exports.default = (0, t.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);