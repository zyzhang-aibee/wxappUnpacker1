var e = require("../../../common/others/utils"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../middleware/xngAuth/login")), o = require("../../../common/actions/me");

wx.xng.Component({
    properties: {
        style: {
            type: String,
            value: ""
        },
        effective: {
            type: Boolean,
            value: !0
        },
        successCallback: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        hasAuth: !1
    },
    attached: function() {
        var e = wx.xngGlobal.store.getState();
        this.setData({
            hasAuth: !!e.me.userinfo.has_auth
        });
    },
    methods: {
        onGotUserInfo: function(t) {
            var o = t.detail.errMsg;
            this.reportRequestAuth(), o && o.indexOf("getUserInfo:ok") >= 0 && (this.reportAuthSuccess(), 
            this.data.successCallback ? this.onPermissionCallback(t) : (this.onAuthed(), (0, 
            e.onPermissionTap)(t)), this.setData({
                hasAuth: !0
            })), o && o.indexOf("getUserInfo:fail auth deny") >= 0 && (this.triggerEvent("onFail"), 
            this.triggerEvent("onComplete"));
        },
        onAuthed: function() {
            this.triggerEvent("onSuccess"), this.triggerEvent("onComplete");
        },
        reportRequestAuth: function() {
            var e = wx.xngGlobal.xu.mid;
            wx.reportAnalytics("popup_userinfo_auth_popup", {
                mid: e,
                midmod2: e % 2,
                midmod10: e % 10,
                midmod20: e % 20
            });
        },
        reportAuthSuccess: function() {
            var e = wx.xngGlobal.xu.mid;
            wx.reportAnalytics("user_info_auth_success", {
                mid: e,
                midmod2: e % 2,
                midmod10: e % 10,
                midmod20: e % 20
            });
        },
        onPermissionCallback: function(e) {
            var n = this;
            e.detail.errMsg && e.detail.errMsg.indexOf("getUserInfo:fail auth deny") < 0 && ((0, 
            t.default)({
                hasPermission: !0
            }), setTimeout(function() {
                wx.xngGlobal.dispatch((0, o.fetchUserinfo)()).then(function(e) {
                    n.triggerEvent("onSuccess", {
                        userInfo: e.data
                    }), n.triggerEvent("onComplete");
                }).catch(function() {
                    console.warn("授权后获取用户信息失败"), n.onAuthed();
                });
            }, 2e3));
        }
    }
});