var t = .5;

Component({
    properties: {
        visable: Boolean,
        isMaskTransparent: Boolean,
        addonBefore: String,
        maskVisable: Boolean,
        isShowForward: Boolean
    },
    data: {
        input: "",
        inputNum: 0,
        autoFocus: !0,
        showMask: !1,
        focus: !1,
        isForward: !1,
        cursorSpacing: 184 * t
    },
    attached: function() {
        t = wx.xngGlobal.sysInfo.screenWidth / 750, this.setData({
            cursorSpacing: 184 * t
        });
    },
    methods: {
        focus: function() {
            this.setData({
                focus: !0
            });
        },
        blur: function() {
            this.setData({
                focus: !1
            });
        },
        hideMask: function() {
            this.setData({
                showMask: !1
            }), this.triggerEvent("onMaskHide");
        },
        handleFocus: function() {
            this.setData({
                showMask: !0
            });
        },
        handleChange: function(t) {
            var a = t.detail.value;
            this.setData({
                input: a,
                inputNum: a.trim().length
            });
        },
        handleLineChange: function(a) {
            var s = (184 - 48 * (a.detail.lineCount > 1 ? 1 : 0)) * t;
            this.setData({
                cursorSpacing: s
            });
        },
        handleSubmit: function() {
            var t = this, a = this.data.input;
            (a = a.trim()).length && this.triggerEvent("onSubmit", {
                value: a,
                isForward: this.data.isForward,
                success: function() {
                    t.setData({
                        input: "",
                        inputNum: 0,
                        isForward: !1
                    }), t.triggerEvent("removeAddonBefore");
                }
            });
        },
        handleCancel: function() {
            var t = this.data.maskVisable;
            this.triggerEvent("removeAddonBefore"), t && this.triggerEvent("onMaskHide");
        },
        handleIsForward: function() {
            this.setData({
                isForward: !this.data.isForward
            });
        }
    }
});