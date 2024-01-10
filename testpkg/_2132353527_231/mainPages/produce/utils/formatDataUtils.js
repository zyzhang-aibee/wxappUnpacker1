Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
};

exports.getRecommendTpl = function(t, n, o, i) {
    var s = n[r.TPL_TYPE.RANDOM];
    return s ? (s.selectedTplId = i, [ s ].concat(t.list.map(function(r) {
        var t = e({}, r);
        return t.isGray = o && !r.video, t.selectedTplId = i, t;
    })).filter(function(e) {
        return !e || !e.disable;
    })) : [];
}, exports.getTplGroups = function(r, t, n, o) {
    if (!r || !r[0].list.length) return [];
    var i = [];
    return r.forEach(function(r) {
        if (r.is_recommend) {
            var s = {};
            s.name = r.name;
            var a = [];
            r.list.forEach(function(r) {
                var i = e({}, t[r]);
                i.disable || (i.isGray = n && !i.video, i.selectedTplId = o, a.push(i));
            }), s.list = a.slice(0, 3), i.push(s);
        }
    }), i;
};

var r = require("../../../common/const/common");