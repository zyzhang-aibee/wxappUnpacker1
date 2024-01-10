var t = require("../../../common/utils"), e = {
    produce: {
        name: "produce",
        text: "如何制作影集",
        onItemTap: "onGuideVideoTap"
    },
    switchFontSize: {
        name: "switchFontSize",
        text: "",
        onItemTap: "onBigFontSwitchTap"
    },
    addMorePhotos: {
        name: "addMorePhotos",
        text: "添加更多照片",
        onItemTap: "onGuideAddTap"
    },
    sortPhotos: {
        name: "sortPhotos",
        text: "如何排序",
        onItemTap: "onGuideMoveTap"
    },
    deletePhoto: {
        name: "deletePhoto",
        text: "如何删除",
        onItemTap: "onGuideDelTap"
    },
    selectMusic: {
        name: "selectMusic",
        text: "选择音乐",
        onItemTap: "onGuideSelectMusic"
    },
    addSubtitle: {
        name: "addSubtitle",
        text: "添加字幕",
        onItemTap: "onGuideAddSubtitle"
    }
};

wx.xng.Component({
    properties: {
        currentPage: {
            type: Number,
            value: -2,
            observer: "handleHelper"
        },
        authorizeData: {
            type: Object,
            value: {
                hidden: !0
            },
            observer: "handleAuthorizeData"
        },
        showBigFontTip: {
            type: Boolean,
            value: !1,
            observer: "handleShowBigFontTip"
        }
    },
    data: {
        isActive: !1,
        helperList: [],
        isShowGuideVideo: !1,
        isHelpHighlight: !1,
        authorizeData: {
            hidden: !0
        },
        helpBarTop: wx.xngGlobal.sysInfo.statusBarHeight || 20,
        rightSpace: 100,
        helpMenuTop: wx.xngGlobal.sysInfo.navigationHeight + 6,
        navigationTitleBarHeight: wx.xngGlobal.sysInfo.navigationTitleBarHeight || 44,
        navigationHeight: wx.xngGlobal.sysInfo.navigationHeight
    },
    externalClasses: [ "helper-view" ],
    ready: function() {
        this.guideThrottle(), this.handleShowBigFontTip(this.data.showBigFontTip);
    },
    methods: {
        onPageShow: function() {
            this.guideThrottle();
        },
        onPageHide: function() {
            this.clearTimer(), this.onMaskTap();
        },
        onPageUnload: function() {
            this.clearTimer();
        },
        handleHelper: function(t) {
            var i = [], o = [ "produce" ];
            switch (t) {
              case -1:
                break;

              case 0:
                o.push("addMorePhotos", "sortPhotos", "deletePhoto");
                break;

              case 1:
                o.push("selectMusic");
                break;

              case 2:
                o.push("addSubtitle");
            }
            o.push("switchFontSize"), o.forEach(function(t) {
                i.push(e[t]);
            }), this.setData({
                helperList: i
            });
        },
        handleAuthorizeData: function(t) {
            this.setData({
                authorizeData: t
            });
        },
        handleShowBigFontTip: function(t) {
            var e = getCurrentPages(), i = e[e.length - 1];
            i.data.startData && i.data.startData.playingTplIdx > 0 || t && (this.setData({
                isHelpHighlight: !0
            }), wx.xng.showTooltip({
                context: this,
                id: "helper-sign-icon",
                position: "bottom",
                text: "有新功能啦！可以在这里设置大字体哦"
            }));
        },
        guideThrottle: function() {
            var t = this;
            this.clearTimer(), wx.xng.hideTooltip(), this.setData({
                isHelpHighlight: !1
            }), this.guideTimer = setTimeout(function() {
                var e = getCurrentPages(), i = e[e.length - 1];
                if (i) {
                    var o = i.data.startData && i.data.startData.playingTplIdx > 0;
                    t.data.isActive || t.data.isShowGuideVideo || o || (wx.xng.showTooltip({
                        context: t,
                        id: "helper-sign-icon",
                        position: "bottom",
                        text: "需要帮助点击这里"
                    }), t.setData({
                        isHelpHighlight: !0
                    }));
                }
            }, 3e4);
        },
        clearTimer: function() {
            this.guideTimer && (clearTimeout(this.guideTimer), this.guideTimer = null);
        },
        onHelpTap: function() {
            if (this.data.isActive) this.setData({
                isActive: !1,
                isHelpHighlight: !1
            }); else {
                var t = getCurrentPages();
                t[t.length - 1].setData({
                    "startData.playingTplIdx": -1
                }), wx.xng.hideTooltip(), this.setData({
                    isActive: !0,
                    isHelpHighlight: !0,
                    isShowGuideVideo: !1
                });
            }
        },
        onMaskTap: function() {
            wx.xng.hideTooltip(), this.setData({
                isActive: !1,
                isShowGuideVideo: !1,
                isHelpHighlight: !1
            }), this.data.showBigFontTip && wx.setStorageSync("hasShownBigFontTip", !0);
        },
        onGuideVideoTap: function() {
            this.setData({
                isActive: !1,
                isShowGuideVideo: !0
            });
        },
        onGuideAddTap: function() {
            this.setData({
                isActive: !1
            });
            var t = {
                tooltip: {
                    componentClass: "grid-view",
                    id: "addPhotoBtn",
                    position: "bottom",
                    text: "可继续添加照片，一次9张，最多100张。部分模板仅支持9张，或9张以下哦~"
                },
                isScrollDown: !0
            };
            this.triggerEvent("showtooltip", t);
        },
        onGuideMoveTap: function() {
            this.setData({
                isActive: !1
            });
            var t = {
                tooltip: {
                    componentClass: "grid-view",
                    id: "p01",
                    position: "bottom",
                    text: "点击照片进入编辑模式，可以快速调整照片顺序。"
                },
                isScrollUp: !0
            };
            this.triggerEvent("showtooltip", t);
        },
        onGuideDelTap: function() {
            this.setData({
                isActive: !1
            });
            var t = {
                tooltip: {
                    componentClass: "grid-view",
                    id: "removePhotoBtn",
                    position: "bottom",
                    text: "进入删除界面。勾选要删除的照片点击“移除”即可。“清空重做”可清空草稿里的照片。"
                },
                isScrollDown: !0
            };
            this.triggerEvent("showtooltip", t);
        },
        onGuideSelectMusic: function() {
            this.setData({
                isActive: !1
            });
            var t = {
                tooltip: {
                    componentClass: "tpl-view",
                    id: "selected-music",
                    position: "bottom",
                    text: "这里选择更换音乐"
                },
                isScrollUp: !0
            };
            this.triggerEvent("showtooltip", t);
        },
        onGuideAddSubtitle: function() {
            this.setData({
                isActive: !1
            });
            var t = {
                tooltip: {
                    componentClass: "subtitle-view",
                    id: "subtitle-input1",
                    position: "bottom",
                    text: "这里输入字幕"
                },
                isScrollUp: !0
            };
            this.triggerEvent("showtooltip", t);
        },
        onBigFontSwitchTap: function() {
            this.setData({
                isActive: !1
            }), (0, t.setFontSize)(!wx.xngGlobal.isBigFontScheme);
        },
        onNavBarLeftTap: function() {
            getCurrentPages().length > 1 ? wx.navigateBack() : wx.switchTab({
                url: "/mainPages/produce/producePage"
            });
        },
        onHistoryTap: function() {
            wx.navigateTo({
                url: "/pages/produce/draftHistoryPage/draftHistoryPage?from=producePage"
            });
        }
    }
}, {
    bigFont: !0
});