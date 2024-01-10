function a() {
    var a = getCurrentPages();
    return a[a.length - 1];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (a[o] = r[o]);
    }
    return a;
};

exports.setNavigationBarTitle = function(t) {
    var r = t.title, o = a();
    o && o.setData({
        "customNavigationBarData.title": r
    });
}, exports.showNavigationBarLoading = function() {
    var t = a();
    t && t.setData({
        "customNavigationBarData.loading": !0
    });
}, exports.hideNavigationBarLoading = function() {
    var t = a();
    t && t.setData({
        "customNavigationBarData.loading": !1
    });
}, exports.showDialog = function(a) {
    var r = a.confirmType, o = void 0;
    switch (void 0 === r ? "primary" : r) {
      case "danger":
        o = "#F43531";
        break;

      case "primary":
        o = "#51C4D4";
    }
    wx.showModal(t({}, a, {
        confirmColor: o
    }));
};