function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.default)({
        _DEF_: u.default.dataMapper.mapAlbumData({}, {}, {})
    }), a = arguments[1];
    return (0, t.discoverAlbums)(e, a);
};

var r = e(require("../../frameBase/library/seamless-immutable/index")), t = require("./discover/index"), u = e(require("../utils/index"));