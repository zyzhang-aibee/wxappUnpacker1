function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = e(require("./connect/index")), t = e(require("./forceUpdate/index")), n = e(require("./mta/index")), u = e(require("./ctr/index")), d = e(require("./scroll/index")), i = e(require("./stat/index")), a = e(require("./bigFont/index")), l = e(require("./event/index"));

exports.default = [ new n.default(), new i.default(), new r.default(), new d.default(), new t.default(), new u.default(), new a.default(), new l.default() ];