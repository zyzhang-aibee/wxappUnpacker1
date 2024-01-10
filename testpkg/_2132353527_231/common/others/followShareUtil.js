var i = require("../actions/index"), l = require("../actions/play"), n = 0, t = null, o = null, s = function() {
    n = 0;
}, c = function(i) {
    n <= 1 ? (n++, setTimeout(i, 200)) : n = 0;
}, e = function i(n) {
    wx.xngGlobal.dispatch(l.acSendMsgForShare({
        lid: t,
        biz: o,
        tpl_id: n,
        success: s,
        fail: c.bind(this, i)
    }));
};

module.exports = {
    followUtil: function l() {
        wx.xngGlobal.dispatch(i.acFollowGzh({
            success: s,
            fail: c.bind(this, l)
        }));
    },
    favoriteUtil: function(i, l, n) {
        t = i, o = l, e(n);
    }
};