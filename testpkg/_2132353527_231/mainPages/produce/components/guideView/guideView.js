Component({
    properties: {
        guideData: {
            type: Object,
            value: {},
            observer: "handleGuideData"
        }
    },
    data: {
        tooltip: null
    },
    externalClasses: [ "guide-view" ],
    multipleSlots: !0,
    methods: {
        handleGuideData: function(t) {
            var e = this;
            if (t) {
                var i = t.tooltip, o = void 0 === i ? null : i;
                setTimeout(function() {
                    e.setData({
                        tooltip: o
                    });
                }, 300);
            }
        },
        preventScroll: function() {}
    }
});