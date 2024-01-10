Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
}, t = {
    unreadMsgNum: 0,
    hasNewCollect: !1
}, r = e({}, t), o = (exports.getData = function() {
    return e({}, r);
}, function() {
    wx.showTabBarRedDot && wx.showTabBarRedDot({
        index: 2
    });
}), n = function() {
    wx.hideTabBarRedDot && wx.hideTabBarRedDot({
        index: 2
    });
};

exports.setControllerData = function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    r = e({}, r, a), Object.keys(t).every(function(e) {
        return r[e] === t[e];
    }) ? n() : o();
};