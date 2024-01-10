function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../../../../common/actions/discover")), i = e(require("../../dynamicCommentInput/utils"));

Component({
    properties: {
        show: {
            type: Boolean,
            value: !1,
            observer: "tryFetchComment"
        },
        dynamic: Object,
        dynamicComment: Object
    },
    data: {},
    methods: {
        handleHide: function() {
            this.triggerEvent("onHide");
        },
        tryFetchComment: function(e) {
            if (e) {
                t.default.acClearComment();
                var i = this.data, m = i.dynamicComment, n = m.detailIds, a = m.lastTime, d = i.dynamic, o = d.id, c = d.user.mid;
                if (n.length && a >= 0) return;
                t.default.acFetchComment({
                    id: o,
                    mid: c,
                    refresh: !0
                });
            }
        },
        loadMoreComment: function() {
            var e = this.data, i = e.dynamicComment, m = e.dynamic;
            m && !i.isFetching && i.lastTime && t.default.acFetchComment({
                id: m.id,
                mid: m.user.mid,
                lastTime: i.lastTime
            });
        },
        handleEditComment: function() {
            var e = this.data.dynamic;
            i.default.comment(e);
        }
    }
});