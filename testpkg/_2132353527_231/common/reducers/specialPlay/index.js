function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("../../../frameBase/library/redux/index"), i = e(require("./mv")), u = e(require("./blessingVideo")), d = e(require("./spliceVideos")), l = e(require("./article/index"));

exports.default = (0, r.combineReducers)({
    mv: i.default,
    blessingVideo: u.default,
    spliceVideos: d.default,
    article: l.default
});