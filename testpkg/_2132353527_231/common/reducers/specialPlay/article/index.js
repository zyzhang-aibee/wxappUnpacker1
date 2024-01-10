function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("../../../../frameBase/library/redux/index"), t = e(require("./currentEdit")), u = e(require("./editOptions"));

exports.default = (0, r.combineReducers)({
    currentEdit: t.default,
    editOptions: u.default
});