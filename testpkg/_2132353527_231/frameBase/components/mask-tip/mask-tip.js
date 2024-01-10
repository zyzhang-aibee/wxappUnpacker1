Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        maskTipData: {
            type: Object,
            value: {
                text: ""
            },
            observer: "handleShowToolTip"
        }
    },
    data: {
        text: "",
        show: !1
    },
    methods: {
        handleShowToolTip: function(t) {
            var e = this;
            if (t && Object.keys(t).length) {
                var o = t.text, i = t.componentClass, a = t.id;
                this.setData({
                    text: o,
                    show: !0
                });
                var n = wx.createSelectorQuery(), s = "";
                s = i ? "." + i + ">>>#" + a : "#" + a, n.select(s).boundingClientRect(), n.exec(function(t) {
                    t[0] && wx.getSystemInfo({
                        success: function(o) {
                            e.initBgIntro({
                                windowWidth: o.windowWidth,
                                windowHeight: o.windowHeight,
                                top: t[0].top,
                                bottom: t[0].bottom,
                                left: t[0].left,
                                right: t[0].right,
                                width: t[0].width
                            });
                        }
                    });
                });
            } else this.setData({
                show: !1
            });
        },
        initBgIntro: function(t) {
            var e = {
                left: t.left,
                bottom: t.bottom,
                width: t.width
            }, o = e.bottom, i = e.left + e.width / 2, a = i - 40, n = t.bottom + 60, s = i, r = n;
            this.drawQuadraticLine(a, n, s, r, i, o);
        },
        drawQuadraticLine: function(t, e, o, i, a, n) {
            var s = this.data.bezierLine;
            s.setLineWidth(3), s.setStrokeStyle("#ffffff"), s.beginPath(), s.moveTo(t, e), s.quadraticCurveTo(o, i, a, n), 
            s.stroke(), s.restore(), s.beginPath(), s.moveTo(a, n + 1), s.lineTo(a - 7, n + 9), 
            s.stroke(), s.restore(), s.beginPath(), s.moveTo(a, n + 1), s.lineTo(a + 7, n + 9), 
            s.stroke(), s.restore(), s.draw();
        },
        onTapMaskButton: function() {
            var t = this.data.maskTipData.onConfirm;
            this.setData({
                show: !1
            }), t && t();
        }
    },
    ready: function() {
        var t = wx.createCanvasContext("canvas", this);
        this.setData({
            bezierLine: t
        });
    }
});