function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.favors = exports.discoverAlbums = void 0;

var r = e(require("../../../frameBase/library/seamless-immutable/index")), t = e(require("../../utils/index")), a = e(require("../../const/index")), u = e(require("../../const/actionType"));

exports.discoverAlbums = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.default)({}), s = arguments[1];
    switch (s.type) {
      case u.default.FETCH_DISCOVER + "_SUC":
        return e.merge(t.default.dataMapper.albumMapper(e, s.response.entities.niceAlbums, {
            coverSize: a.default.COVER_SIZE.DISCOVER_SIZE
        }));

      case u.default.FETCH_FEED + "_SUC":
        return e.merge(t.default.dataMapper.albumMapper(e, s.response.entities.dynamicFeed, {
            coverSize: a.default.COVER_SIZE.FEED_SIZE
        }));

      default:
        return e;
    }
}, exports.favors = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.default)({}), a = arguments[1];
    switch (a.type) {
      case u.default.FETCH_DISCOVER + "_SUC":
        return e.merge(t.default.dataMapper.albumFavorMapper(e, a.response.entities.niceAlbums));

      default:
        return e;
    }
};