Component({
    properties: {
        showTip: {
            type: Boolean,
            value: !0
        },
        isFullscreen: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        showFullscreenTip: !0
    },
    ready: function() {
        var e = this;
        setTimeout(function() {
            e.setData({
                showFullscreenTip: !1
            });
        }, 4e3);
    },
    methods: {
        changeVideoFullscreen: function() {
            this.triggerEvent("fullscreenvideo");
        }
    }
});