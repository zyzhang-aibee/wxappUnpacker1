Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).sort_list;
    if (!e) return [];
    var r = wx.xngGlobal.store.getState().entities.tpl;
    return e instanceof Array || (e = Object.values(e)), e.forEach(function(t) {
        var e = t.tpl_list, a = [];
        e instanceof Array || (e = Object.values(e)), e.forEach(function(t) {
            r[t] && !r[t].disable && a.push(r[t]);
        }), t.tpl = a;
    }), t.default.acSetTplSortList(e), e;
};

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../produce/actions/produce"));