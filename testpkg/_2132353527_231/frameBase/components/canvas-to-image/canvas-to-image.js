var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./CHAR_WIDTH"));

Component({
    properties: {
        width: Number,
        height: Number,
        images: Array
    },
    data: {},
    ready: function() {
        var t = this;
        this.canvas = wx.createCanvasContext("canvas", this), void 0 === this.canvas.state && (this.canvas.state = {
            fontSize: 15,
            fontColor: "#000"
        }), this.canvas.scaleRatio = 1, this.canvas.setFontBold = this.setFontBold, this.canvas.measureText || (this.canvas.measureText = this.measureText), 
        this.canvas.moveToNextLine = this.moveToNextLine, this.canvas.drawText = this.drawText, 
        Object.defineProperty(this.canvas, "fillStyle", {
            set: function(t) {
                this.setFillStyle ? this.setFillStyle(t) : this.fillStyle = t;
            }
        }), Object.defineProperty(this.canvas, "globalAlpha", {
            set: function(t) {
                this.setGlobalAlpha ? this.setGlobalAlpha(t) : this.globalAlpha = t;
            }
        });
        var e = this.canvas.rect;
        this.canvas.rect = function() {
            for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
            s[4] ? t.rect.apply(t.canvas, s) : e.apply(t.canvas, s);
        };
        var i = this.data.images;
        i.some(function(t) {
            return !t && (console.error("components/canvas-to-image", "invalid image: " + t), 
            !0);
        }) || (i.length ? Promise.all(i.map(function(e) {
            return t.downloadImage(e.replace("http:", "https:"));
        })).then(function(e) {
            t.images = e, t.draw();
        }) : this.draw());
    },
    methods: {
        downloadImage: function(t) {
            return new Promise(function(e, i) {
                wx.getImageInfo({
                    src: t,
                    success: function(t) {
                        e(t);
                    },
                    fail: i
                });
            });
        },
        measureText: function(e) {
            e = "" + e;
            for (var i = 0, s = 0; s < e.length; s++) {
                var a = e[s];
                if ("-" === a) i += t.default.HYPHEN * this.scaleRatio; else if ("." === a) i += t.default.DOT * this.scaleRatio; else if (":" === a) i += t.default.COLON * this.scaleRatio; else if ("1" === a) i += t.default.NUMBER * this.scaleRatio; else if ("i" === a) i += t.default.CHINESE * this.scaleRatio; else {
                    var n = a.charCodeAt(0);
                    i += n >= 48 && n <= 57 ? t.default.NUMBER * this.scaleRatio : t.default.CHINESE * this.scaleRatio;
                }
            }
            return {
                width: i
            };
        },
        setFontBold: function() {
            this.measureText && (this.font = "normal bold " + this.state.fontSize + "px/" + this.state.fontSize + "px Helvetica Neue,Helvetica,Arial,sans-serif");
        },
        moveToNextLine: function() {
            this.y += this.lineHeight || this.state.fontSize, this.y += this.lineSpacing || 0;
        },
        drawText: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e && e.fontSize && Object.assign(e, {
                fontSize: e.fontSize
            });
            var i = {
                fontSize: e.fontSize || this.state.fontSize * this.scaleRatio,
                fontColor: e.fontColor || this.state.fontColor,
                fontWeight: e.fontWeight || "normal",
                align: e.align || "left",
                wrap: e.wrap || !1,
                maxLine: e.maxLine || 2,
                textRightAligh: e.textRightAligh || !1
            };
            if (this.save(), this.setFontSize(i.fontSize), this.setFillStyle(i.fontColor), this.setTextAlign(i.align), 
            "bold" === i.fontWeight && this.setFontBold(), t = "" + t, i.textRightAligh) {
                for (var s = this.maxX - i.fontSize / 2, a = 0; a < t.length; a++) {
                    var n = t[a];
                    s -= this.measureText(n).width;
                }
                return this.fillText(t, s, this.y), this.x += this.measureText(t).width, void this.restore();
            }
            if (i.wrap) for (var h = 1, o = this.x, l = 0; l < t.length; l++) {
                var r = t[l], c = this.measureText(r).width;
                if (h < i.maxLine) o + c > this.maxX && (o = this.x, this.moveToNextLine(), h += 1), 
                this.fillText(r, o, this.y), o += c; else {
                    var f = this.measureText("...").width;
                    if (o + c + this.measureText("》").width > this.maxX) {
                        this.fillText("...", o, this.y), o += f;
                        break;
                    }
                    this.fillText(r, o, this.y), o += c;
                }
            } else this.fillText(t, this.x, this.y), this.x += this.measureText(t).width;
            this.restore();
        },
        rect: function(t, e, i, s, a) {
            this.moveTo(t + a, e), this.lineTo(t + i - a, e), this.bezierCurveTo(t + i, e, t + i, e, t + i, e + a), 
            this.lineTo(t + i, e + s - a), this.bezierCurveTo(t + i, e + s, t + i, e + s, t + i - a, e + s), 
            this.lineTo(t + a, e + s), this.bezierCurveTo(t, e + s, t, e + s, t, e + s - a), 
            this.lineTo(t, e + a), this.bezierCurveTo(t, e, t, e, t + a, e);
        },
        draw: function() {
            var t = this;
            this.triggerEvent("draw", {
                canvas: this.canvas,
                images: this.images
            }), this.canvas.draw(!1, function() {
                setTimeout(function() {
                    t.toImage();
                }, 500);
            });
        },
        toImage: function() {
            var t = this, e = this.data, i = {
                x: 0,
                y: 0,
                width: e.width,
                height: e.height,
                canvasId: "canvas",
                quality: 1,
                success: function(e) {
                    t.triggerEvent("success", e);
                }
            };
            wx.canvasToTempFilePath(i, this);
        }
    }
});