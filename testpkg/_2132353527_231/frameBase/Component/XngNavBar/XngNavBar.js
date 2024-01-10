Component({
    properties: {
        xngNavBarData: {
            type: Object,
            value: void 0,
            observer: "handleXngNavBar"
        }
    },
    data: {
        navBar: {
            theme: "",
            hideLine: !0,
            left: {
                src: "",
                type: "",
                text: "",
                tap: ""
            },
            mid: {
                text: "",
                smallText: ""
            },
            right: {
                needFormId: !1,
                src: "",
                type: "",
                text: "",
                redText: "",
                grayText: "",
                tap: ""
            }
        }
    },
    methods: {
        handleXngNavBar: function(t) {
            t && this.setData({
                navBar: t,
                totalTopHeight: wx.xngGlobal.navigationHeight
            });
        },
        onNavBarLeftTap: function() {
            this.data.navBar.left && this.data.navBar.left.tap && this.triggerEvent("onxngnavbarlefttap");
        },
        onNavBarRightTap: function() {
            this.data.navBar.right && this.data.navBar.right.tap && !this.data.navBar.right.needFormId && this.triggerEvent("onxngnavbarrighttap");
        },
        onFormIdTap: function(t) {
            this.data.navBar.right && this.data.navBar.right.tap && this.data.navBar.right.needFormId && (console.log(t), 
            this.triggerEvent("onxngnavbarrighttap", t.detail.formId));
        }
    }
});