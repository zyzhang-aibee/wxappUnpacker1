function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
}, r = e(require("../../../frameBase/library/seamless-immutable/index")), i = e(require("../../const/actionType")), a = e(require("../../const/actionTypes/entities/dynamics")), o = (0, 
r.default)({
    videos: [],
    title: ""
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o, r = arguments[1], d = void 0, s = void 0, n = void 0;
    switch (r.type) {
      case i.default.ADD_VIDEO_FOR_SPLICE:
        return (d = [].concat(e.videos)).push(r.video), e.merge({
            videos: d
        });

      case i.default.MOVE_VIDEO_FOR_SPLICE:
        return d = [].concat(e.videos), s = "up" === r.direction ? r.index - 1 : r.index, 
        n = e.videos[s], d[s] = d[s + 1], d[s + 1] = n, e.merge({
            videos: d
        });

      case i.default.DELETE_VIDEO_FOR_SPLICE:
        return (d = [].concat(e.videos)).splice(r.index, 1), e.merge({
            videos: d
        });

      case i.default.SET_SPLICE_VIDEOS_TITLE:
        return e.merge({
            title: r.title
        });

      case i.default.UPDATE_SPLICE_VIDEO:
        d = [].concat(e.videos);
        for (var u = 0; u < d.length; u++) if (d[u].id === r.video.id) {
            d[u] = t({}, r.video);
            break;
        }
        return e.merge({
            videos: d
        });

      case a.default.COMMIT_DYNAMIC + "_SUC":
        return 1 === r.response.data.album_type ? o : e;

      default:
        return e;
    }
};