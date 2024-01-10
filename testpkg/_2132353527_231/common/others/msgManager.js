function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = e(require("../../config/config")), r = e(require("../../frameBase/utils/object-assign/index")), t = require("../../mainPages/me/redDotController"), n = null, o = function() {
    var e = wx.xngGlobal, n = e.token, o = e.xu, l = e.xu.uid, i = e.sysInfo.version;
    if (n) {
        var s = {
            token: n,
            uid: l,
            proj: "ma",
            wx_ver: i,
            code_ver: a.default.codeVer,
            is_feed: !0
        }, u = a.default.apiDomain + "/sysmsg/get_notice_num";
        wx.request({
            url: u,
            data: s,
            header: {
                "Content-Type": "application/json",
                uuid: wx.xngGlobal.xu.uid
            },
            method: "POST",
            success: function(e) {
                if (e.data && 1 === e.data.ret) {
                    var a = e.data.data.num;
                    a > 0 && (0, t.setControllerData)({
                        unreadMsgNum: a
                    });
                } else o.logger.logAll("apiError", (0, r.default)({}, {
                    resData: JSON.stringify(e.data || e || {}),
                    api: u
                }));
            },
            fail: function(e) {
                o.logger.logAll("apiError", (0, r.default)({}, {
                    resData: JSON.stringify(e.data || e || {}),
                    api: u
                }));
            }
        });
    }
};

exports.default = {
    startPollMsg: function() {
        o(), n ? console.error("msgManager: message timer already exists") : n = setInterval(function() {
            o();
        }, 4e4);
    },
    endPollMsg: function() {
        n && (clearInterval(n), n = null);
    }
};