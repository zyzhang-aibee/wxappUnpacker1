function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.favors = exports.discoverAlbums = exports.discover = void 0;

var r = require("../../../frameBase/library/redux/index"), u = e(require("./niceAlbum")), a = e(require("./squareAlbum")), i = e(require("./dynamicFeed")), d = e(require("./dynamicComment")), s = e(require("./weakFriends")), t = e(require("./dynamicFavor")), o = e(require("./dynamicMessage")), l = e(require("./publish")), c = e(require("./search")), m = e(require("./contributeAlbum")), n = require("./atomedData"), f = (0, 
r.combineReducers)({
    niceAlbum: u.default,
    squareAlbum: a.default,
    dynamicFeed: i.default,
    dynamicComment: d.default,
    weakFriends: s.default,
    dynamicFavor: t.default,
    dynamicMessage: o.default,
    publish: l.default,
    search: c.default,
    contributeAlbum: m.default
});

exports.discover = f, exports.discoverAlbums = n.discoverAlbums, exports.favors = n.favors;