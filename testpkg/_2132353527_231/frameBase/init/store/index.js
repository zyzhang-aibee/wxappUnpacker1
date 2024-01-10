var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./configureStore")), t = require("../../xng/plugins/connect/index"), a = (0, 
e.default)();

wx.xngGlobal.store = a, wx.xngGlobal.dispatch = a.dispatch;

a.subscribe(function() {
    if ("undefined" != typeof getCurrentPages && null !== getCurrentPages) {
        var e = getCurrentPages(), n = e[e.length - 1];
        if (void 0 !== n && n.mapStateToData) if ("xng" === n._pagetype) {
            var r = n.mapStateToData(a.getState()), g = (n.diffData || t.getChangedData)(r, n.data);
            g && n.setData(g);
        } else n.mapStateToData(a.getState());
    }
}), module.exports = a;