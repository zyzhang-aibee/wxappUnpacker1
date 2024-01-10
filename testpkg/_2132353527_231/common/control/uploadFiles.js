var e = require("../../config/config.js");

module.exports = function(t, a) {
    var o = [], r = function(e) {
        var t = JSON.parse(e.data);
        o.push(t.data);
    }, i = function() {
        t.length ? n(t.shift()) : a && a(o);
    }, n = function(t) {
        wx.uploadFile({
            url: e.uploadUrl,
            filePath: t,
            name: "file",
            formData: {
                token: wx.xngGlobal.token,
                uid: wx.xngGlobal.xu.uid || "",
                qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!128x128r/crop/128x128/interlace/1/format/jpg/quality/50",
                src: 11,
                code_ver: e.codeVer,
                proj: "ma"
            },
            success: r,
            complete: i
        });
    };
    n(t.shift());
};