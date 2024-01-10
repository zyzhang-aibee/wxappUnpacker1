Component({
    properties: {
        fontSize: {
            type: Number,
            value: 14
        },
        lineHeight: {
            type: Number,
            value: 1.4,
            observer: function(e) {
                String(e).indexOf(".") > -1 && this.setData({
                    lineHeight: e * this.data.fontSize
                });
            }
        },
        numberOfLines: {
            type: Number,
            value: 5
        },
        hideZK: {
            type: Boolean,
            value: !1
        },
        album: Object,
        content: String
    },
    data: {
        folded: !0,
        measureDone: !1
    },
    attached: function() {
        var e = this.data, t = e.lineHeight, a = e.numberOfLines;
        this.data.maxHeight = t * a;
    },
    ready: function() {
        var e = this, t = this.data.numberOfLines;
        wx.createSelectorQuery().in(this).select(".content").boundingClientRect(function(a) {
            if (a) {
                var n = a.height - e.data.maxHeight;
                (n < 0 || Math.abs(n) < t) && e.setData({
                    folded: !1
                });
            } else e.setData({
                folded: !1
            });
            e.setData({
                measureDone: !0
            });
        }).exec();
    },
    methods: {
        handleShowAll: function() {
            this.setData({
                folded: !1
            });
        }
    }
});