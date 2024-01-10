var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../adUtils"));

Component({
    properties: {
        index: Number,
        type: String
    },
    data: {
        show: !1
    },
    attached: function() {
        var e = t.default.shouldShow();
        e && this.setData({
            show: e
        });
    },
    methods: {}
});