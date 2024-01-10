var e = require("../../../../common/others/utils"), o = require("../../../../common/others/businessUtils"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../common/others/redirectRoute"));

Component({
    properties: {
        userInfo: Object
    },
    data: {
        needAuth: !1
    },
    attached: function() {
        var e = wx.xngGlobal.abTest.user_authorization, o = void 0 === e ? {} : e;
        this.setData({
            needAuth: !!o.me_go_profile
        });
    },
    methods: {
        onProfileEntryTap: function() {
            (0, o.goProfilePage)({
                mid: wx.xngGlobal.xu.mid
            });
        },
        onPermissionTap: function(o) {
            (0, e.onPermissionTap)(o);
        },
        onFollowFansTap: function(e) {
            var o = "/pages/profile/followFansPage/followFansPage?type=" + e.currentTarget.dataset.type + "&mid=" + wx.xngGlobal.xu.mid;
            t.default.push(o), wx.navigateTo({
                url: o
            });
        }
    }
});