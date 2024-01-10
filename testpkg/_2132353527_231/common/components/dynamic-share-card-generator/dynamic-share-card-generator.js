Component({
    properties: {
        dynamic: {
            type: Object,
            observer: "observeDynamic"
        }
    },
    data: {
        width: 250,
        height: 200,
        coverUrl: ""
    },
    methods: {
        observeDynamic: function(e) {
            if (e) {
                var t = e.cover_watermark, a = void 0 === t ? "" : t;
                this.setData({
                    coverUrl: a
                });
            }
        },
        drawCover: function(e, t) {
            var a = this.data, r = a.width, i = a.height;
            e.save(), e.drawImage(t, 0, 0, r, i), e.restore();
        },
        drawViews: function(e) {
            var t = this.data, a = t.height, r = t.dynamic.views, i = (r >= 1e5 ? "100000+" : r) + "人看过";
            e.setFontSize(12);
            var s = e.measureText(i).width + 8, o = a - 20 - 2;
            e.save(), e.globalAlpha = .5, e.fillStyle = "#000000", e.rect(2, o, s, 20, 3), e.fill(), 
            e.restore(), e.x = 6, e.y = o + 20 - 2 - 4, e.drawText(i, {
                fontSize: 12,
                fontColor: "#ffffff"
            });
        },
        canvasDraw: function(e) {
            var t = e.detail, a = t.canvas, r = t.images;
            this.drawCover(a, r[0].path), this.drawViews(a);
        },
        canvasSuccess: function(e) {
            this.triggerEvent("success", e.detail);
        }
    }
});