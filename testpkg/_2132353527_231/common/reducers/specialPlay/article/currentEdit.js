function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
}, n = e(require("../../../../frameBase/library/seamless-immutable/index")), c = e(require("../../../const/actionType")), i = require("../../../const/index"), s = (0, 
n.default)({
    sections: [],
    title: "",
    cover: "",
    music: []
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s, a = arguments[1], o = void 0, u = void 0, _ = void 0, d = void 0, T = void 0, l = void 0;
    switch (a.type) {
      case c.default.ADD_PHOTOS_OF_ARTICLE:
        var E = [].concat(e.sections), f = a.photos.map(function(e) {
            return r({}, e, {
                type: i.ARTICLE_SECTION_TYPE.PHOTO
            });
        });
        return E.splice.apply(E, [ a.index, 0 ].concat(t(f))), e.merge({
            sections: E
        });

      case c.default.ADD_TEXT_OF_ARTICLE:
        var C = [].concat(e.sections), I = {
            txt: a.txt,
            type: i.ARTICLE_SECTION_TYPE.PURE_TEXT
        };
        return C.splice(a.index, 0, I), e.merge({
            sections: C
        });

      case c.default.DELETE_SECTION_OF_ARTICLE:
        return o = [].concat(e.sections), (T = e.cover) && o[a.index].id === T.id && (T = ""), 
        o.splice(a.index, 1), o.length < 1 ? s : e.merge({
            sections: o,
            cover: T
        });

      case c.default.DELETE_ARTICLE_PHOTO_BY_ID:
        var A = e.sections, O = e.cover, v = a.photoId, p = (A = [].concat(e.sections)).findIndex(function(e) {
            return e.id === v;
        });
        return p < 0 ? e : (A.splice(p, 1), O && v === O.id && (O = ""), A.length < 1 ? s : e.merge({
            sections: A,
            cover: O
        }));

      case c.default.UPDATE_SECTION_OF_ARTICLE:
        return o = [].concat(e.sections), d = r({}, o[a.index], a.section), o.splice(a.index, 1, d), 
        e.merge({
            sections: o
        });

      case c.default.MOVE_SECTION_OF_ARTICLE:
        return o = [].concat(e.sections), u = "up" === a.direction ? a.index - 1 : a.index, 
        _ = o[u], o[u] = o[u + 1], o[u + 1] = _, e.merge({
            sections: o
        });

      case c.default.SET_TITLE_OF_ARTICLE:
        return e.merge({
            title: a.title
        });

      case c.default.SET_COVER_OF_ARTICLE:
        return e.merge({
            cover: a.photo
        });

      case c.default.SET_MUSIC_OF_ARTICLE:
        return e.merge({
            music: a.music
        });

      case c.default.CLEAR_MUSIC_OF_ARTICLE:
        return e.merge({
            music: []
        });

      case c.default.SET_ARTICLE_DATA:
        return l = a.data, (0, n.default)(l);

      case c.default.CLEAR_ARTICLE_DATA:
      case c.default.COMMIT_ARTICLE + "_SUC":
      case c.default.COMMIT_MODIFY_ARTICLE + "_SUC":
        return s;

      default:
        return e;
    }
};