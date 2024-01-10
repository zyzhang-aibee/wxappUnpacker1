Component({
    properties: {
        tags: {
            type: Array,
            observer: function() {
                var t = this;
                this.state && setTimeout(function() {
                    t.scrollToCenter(t.data.tag);
                });
            }
        },
        tag: Object
    },
    data: {
        top: 64,
        scrollLeft: 0
    },
    attached: function() {
        var t = wx.xngGlobal.sysInfo, e = t.navigationHeight, a = t.rpxRatio;
        this.setData({
            top: e + Math.floor(112 / a)
        }), this.state = {
            scrollLeft: 0
        };
    },
    methods: {
        handleScroll: function(t) {
            var e = t.detail.scrollLeft;
            this.state.scrollLeft = e;
        },
        scrollToCenter: function(t) {
            var e = this, a = this.data.tags.findIndex(function(e) {
                return e.id === t.id;
            });
            wx.createSelectorQuery().in(this).select(".tag-" + a).boundingClientRect(function(t) {
                if (t) {
                    var a = t.width, i = t.left + e.state.scrollLeft + a / 2 - wx.xngGlobal.sysInfo.windowWidth / 2;
                    e.setData({
                        scrollLeft: i
                    });
                }
            }).exec();
        },
        checkTag: function(t) {
            var e = this.data.tag, a = t.target.dataset.tag;
            a.id !== e.id && (this.scrollToCenter(a), this.triggerEvent("checkTag", {
                tag: a
            }));
        }
    }
});