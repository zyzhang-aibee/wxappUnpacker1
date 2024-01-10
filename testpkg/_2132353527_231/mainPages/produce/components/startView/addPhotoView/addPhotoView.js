Component({
    properties: {
        isNewUser: {
            type: Boolean,
            value: !1,
            observer: "handleIsNewUser"
        },
        authorizeData: {
            type: Object,
            value: {
                hidden: !0
            },
            observer: "handleAuthorizeData"
        },
        hasDraftPhoto: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isNewUser: !1,
        top: 64
    },
    externalClasses: [ "add-photo-view" ],
    methods: {
        handleIsNewUser: function(e) {
            this.setData({
                isNewUser: e
            }), e && this.setData({
                guideData: {
                    type: "highlight",
                    tooltip: {
                        id: "newUserAddPhoto",
                        componentClass: "start-view",
                        position: "bottom",
                        text: "点按钮，随便传几张照片试试效果喽~",
                        clickToHide: !1
                    }
                }
            });
        },
        handleAuthorizeData: function(e) {
            var t = wx.xngGlobal.sysInfo.navigationHeight;
            this.setData({
                top: e.hidden ? t : t + 64
            });
        },
        onAddPhotosTap: function() {
            this.triggerEvent("onaddphotostap");
        },
        onHideGuideTap: function() {
            this.setData({
                isHideGuide: !0
            });
        }
    }
});