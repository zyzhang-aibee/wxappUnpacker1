function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = a(require("../../../config/config")), t = a(require("../../../common/actions/play")), i = require("../../../common/others/discover/utils");

Component({
    properties: {
        albumPosterData: {
            type: Object,
            value: {},
            observer: "handlePosterData"
        }
    },
    data: {
        showContainer: !1,
        width: 800,
        height: 1e3,
        images: [],
        posterImage: ""
    },
    ready: function() {},
    methods: {
        handlePosterData: function(a) {
            var e = this;
            if (a && a.album && a.album.url) {
                this.setData({
                    showContainer: !0
                }), wx.showLoading({
                    title: "生成海报中"
                });
                var o = {
                    i: a.album.id.toString(36),
                    m: a.album.mid.toString(36),
                    s: (wx.xngGlobal.xu.mid % 20).toString(36)
                }, n = (0, i.stringifyParams)(o, "K", "D");
                if (console.log(n), n.length > 32) return wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "参数过长，海报功能暂时无法使用，请联系客服。",
                    showCancel: !1
                }), void this.closePoster();
                if (!wx.canIUse("getFileSystemManager")) return wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。",
                    showCancel: !1
                }), void this.closePoster();
                wx.xngGlobal.dispatch(t.default.acFetchQrCode({
                    scene: n
                })).then(function(t) {
                    var i = wx.arrayBufferToBase64(t), o = wx.env.USER_DATA_PATH + "/qr" + a.album.id + ".png", n = i.replace(/^data:image\/\w+;base64,/, "");
                    wx.getFileSystemManager().writeFile({
                        filePath: o,
                        data: n,
                        encoding: "base64",
                        success: function() {
                            e.qrPath = o, e.loadDefaultImage(a);
                        }
                    });
                }).catch(function() {
                    wx.showToast({
                        title: "网络卡顿，请稍后重试。",
                        icon: "none"
                    }), e.closePoster();
                });
            } else this.setData({
                showContainer: !1
            });
        },
        loadDefaultImage: function(a) {
            var t = [ a.album.url, e.default.resourceDomain + "/img/specialPlay/mv/friendCircleGuide.png", e.default.resourceDomain + "/img/specialPlay/sharePic/shareButton2.png", e.default.resourceDomain + "/img/specialPlay/mv/opa50to0.png" ];
            this.setData({
                showCanvas: !0,
                images: t
            });
        },
        canvasDraw: function(a) {
            var e = a.detail, t = e.canvas, i = e.images;
            this.drawPics(t, i), this.drawTitle(t), this.drawNick(t);
        },
        onContainerTouchMove: function() {},
        drawNick: function(a) {
            a.maxX = 790, a.x = 510, a.y = 780, a.lineSpacing = 20, a.drawText("@" + this.data.albumPosterData.album.nick, {
                fontSize: 40,
                fontWeight: "bold",
                fontColor: "#ffffff",
                wrap: !1,
                textRightAligh: !0
            });
        },
        drawTitle: function(a) {
            a.maxX = 780, a.x = 50, a.y = 80, a.lineSpacing = 20, a.drawText(this.data.albumPosterData.album.title, {
                fontSize: 60,
                fontWeight: "bold",
                align: "center",
                fontColor: "#ffffff",
                wrap: !0,
                maxLine: 3
            });
        },
        drawPics: function(a, e) {
            a.fillStyle = "rgb(255, 255, 255)", a.fillRect(0, 0, 800, 1e3), a.drawImage(e[0].path, 0, 0, 800, 800), 
            a.drawImage(e[3].path, 0, 0, 800, 280), a.drawImage(e[2].path, 300, 300, 200, 200), 
            a.drawImage(this.qrPath, 600, 820, 160, 160), a.drawImage(e[1].path, 92, 868, 416, 64);
        },
        canvasSuccess: function(a) {
            var e = this;
            wx.hideLoading();
            var t = a.detail.tempFilePath;
            wx.saveImageToPhotosAlbum({
                filePath: t,
                success: function() {
                    e.setData({
                        posterImage: t
                    });
                },
                fail: function() {
                    wx.showToast({
                        title: "保存失败",
                        icon: "none"
                    }), e.closePoster();
                }
            });
        },
        closePoster: function() {
            this.setData({
                showCanvas: !1,
                showContainer: !1,
                albumPosterData: {},
                posterImage: ""
            });
        }
    }
});