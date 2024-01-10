function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("../../../frameBase/library/redux/index"), u = e(require("./common")), o = e(require("./bless")), t = e(require("./region"));

exports.default = (0, r.combineReducers)({
    common: u.default,
    bless: o.default,
    region: t.default
});