function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("../../../frameBase/library/redux/index"), u = e(require("./edit/index")), t = e(require("./albumOptions")), d = e(require("./chargeBill")), i = e(require("./draftHistory")), l = e(require("./modifyTpl")), o = e(require("./photosDisabled")), a = e(require("./photosNewAdded")), s = e(require("./produceOptions")), f = e(require("./recommendTpl")), p = e(require("./stickers")), m = e(require("./tmpCover")), q = e(require("./ui")), n = e(require("./videoThumbs")), c = e(require("./sameModel")), b = e(require("./tplOptions"));

exports.default = (0, r.combineReducers)({
    edit: u.default,
    albumOptions: t.default,
    chargeBill: d.default,
    draftHistory: i.default,
    modifyTpl: l.default,
    photosDisabled: o.default,
    photosNewAdded: a.default,
    produceOptions: s.default,
    recommendTpl: f.default,
    stickers: p.default,
    tmpCover: m.default,
    ui: q.default,
    videoThumbs: n.default,
    sameModel: c.default,
    tplOptions: b.default
});