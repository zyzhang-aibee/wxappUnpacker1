function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acFetchFeed = function(e) {
    var t = e.topicId, d = e.tagId, c = e.refresh;
    return {
        API: {
            type: r.default.FETCH_TOPIC_FEED,
            endpoint: "/trends/get_recommend_trends",
            param: {
                topic_id: t,
                tag_id: d,
                log_params: {
                    page: (0, i.getPage)(),
                    common: (0, i.getCommonFields)()
                },
                qs: n.default.getImgQS({
                    size: o.COVER_SIZE.FEED_SIZE
                }),
                h_qs: n.default.getImgQS({
                    size: o.COVER_SIZE.HEAD_SIZE
                }),
                share_width: 625,
                share_height: 500
            },
            normalizeFunc: function(e) {
                return (0, a.normalizeFeedData)(e);
            }
        },
        tagId: d,
        topicId: t,
        refresh: c
    };
}, exports.acChangeRegion = function(e) {
    var t = e.regionId, i = e.regionTitle;
    return {
        API: {
            type: r.default.CHANGE_REGION,
            endpoint: "/topic/update_user_region",
            param: {
                region: t
            }
        },
        regionId: t,
        regionTitle: i
    };
}, exports.acFetchLocalCity = function(e) {
    var t = e.topicId;
    return {
        API: {
            type: r.default.FETCH_LOCAL_CITY,
            endpoint: "/topic/get_tag_by_ip",
            param: {
                topic_id: t
            }
        },
        topicId: t
    };
}, exports.acFetchCityList = function(e) {
    var t = e.topicId;
    return {
        API: {
            type: r.default.FETCH_CITY_LIST,
            endpoint: "/topic/get_group_rank_tags_by_title",
            param: {
                topic_id: t
            }
        },
        topicId: t
    };
};

var t = require("../../../frameBase/library/redux/index"), r = e(require("../../const/actionType")), i = require("../../../common/others/dynamicActionLog"), o = require("../../const/index"), n = e(require("../../utils/index")), a = require("../discover");

exports.default = (0, t.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);