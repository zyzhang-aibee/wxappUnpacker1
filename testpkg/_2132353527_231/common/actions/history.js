function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../schemas/schemas")), r = e(require("../const/actionType")), a = e(require("../../frameBase/utils/object-assign/index")), i = require("../../frameBase/library/normalizr/normalizr.min");

module.exports = {
    acFetchHistoryOutList: function(e) {
        var n = e.offset, o = e.success, s = e.fail;
        return {
            API: {
                type: r.default.FETCH_HISTORY_OUT_LIST,
                endpoint: "/hisrec/list_first",
                param: {
                    offset: n,
                    is_need_video: !0,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!128x128r/crop/128x128/interlace/1/format/jpg/quality/50"
                },
                normalizeFunc: function(e) {
                    return (0, a.default)({}, (0, i.normalize)(e.data.list, t.default.DraftHistorySchema), {
                        more: e.data.more,
                        offset: e.data.offset
                    });
                },
                success: o,
                fail: s
            }
        };
    },
    acFetchHistoryInList: function(e) {
        var n = e.id, o = e.offset;
        return {
            API: {
                type: r.default.FETCH_HISTORY_IN_LIST,
                endpoint: "/hisrec/list_sub",
                param: {
                    id: n,
                    offset: o,
                    is_need_video: !0,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!128x128r/crop/128x128/interlace/1/format/jpg/quality/50"
                },
                normalizeFunc: function(e) {
                    return (0, a.default)({}, (0, i.normalize)(e.data.list, t.default.DraftHistorySchema), {
                        more: e.data.more,
                        offset: e.data.offset
                    });
                }
            },
            id: n
        };
    },
    acCleanFetchHistory: function() {
        return {
            type: r.default.CLEAN_HISTORY_DRAFT
        };
    },
    acChangeMoreBtn: function(e) {
        return {
            type: r.default.CHANGE_MORE_BTN,
            id: e
        };
    },
    acRecoverDraftHistory: function(e) {
        return {
            type: r.default.RECOVER_DRAFT_HISTORY,
            draft: e
        };
    }
};