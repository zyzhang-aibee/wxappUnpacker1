function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var r = arguments[a];
        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
}, r = e(require("../../../frameBase/library/seamless-immutable/index")), t = e(require("../../const/actionType")), s = e(require("../../../mainPages/common/specialPlay")), u = {
    album: {
        status: -1
    },
    has_favor: !1,
    musicList: [],
    selectHisPic: {
        id: ""
    },
    tenSecondsTpl: []
};

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.default)(u), l = arguments[1];
    switch (l.type) {
      case t.default.GET_TEM_SECONDS_TPL + "_SUC":
        var n = [];
        return l.response.data.list.forEach(function(e) {
            1 !== e.disable && (e.sendBlessType = s.default.tplTypeJudge(e.id), n.push(e));
        }), e.merge({
            tenSecondsTpl: n
        });

      case t.default.FETCH_VIDEO_ALBUM + "_SUC":
        var c = {
            album: l.response.data
        };
        return e.merge(c);

      case t.default.FAVOR_VIDEO_DETAIL + "_SUC":
        return e.merge({
            has_favor: l.response.data.has_favor
        });

      case t.default.ADD_VIDEO_FAVOR + "_REQ":
        return e.merge({
            has_favor: 1
        });

      case t.default.MINUS_VIDEO_FAVOR + "_REQ":
        return e.merge({
            has_favor: 0
        });

      case t.default.CHECK_VIDEO_ALBUM_STATUS + "_SUC":
        return e.merge({
            album: a({}, e.album, {
                status: l.response.data.list[0].status
            })
        });

      case "" + t.default.SELECT_VIDEO_PIC:
        return e.merge({
            selectHisPic: l.pic
        });

      case "" + t.default.REMOVE_VIDEO_PIC:
        return e.merge({
            selectHisPic: u.selectHisPic
        });

      default:
        return e;
    }
};