Component({
    properties: {
        show: Boolean
    },
    data: {
        shouldGuide: !1
    },
    attached: function() {
        var e = this;
        wx.getStorage({
            key: "discover/swiper/hasGuide",
            success: function() {
                e.setData({
                    shouldGuide: !1
                });
            },
            fail: function() {
                e.setData({
                    shouldGuide: !0
                });
            }
        });
    },
    methods: {}
});