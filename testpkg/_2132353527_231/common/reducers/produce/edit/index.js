function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
}, r = t(require("../../../../frameBase/library/seamless-immutable/index")), a = t(require("../../../const/actionType")), f = t(require("../../../../common/const/common")), d = require("./draft"), i = t(d), u = require("./draftDiff"), o = t(u), l = require("./draftState"), n = t(l), c = (0, 
r.default)({
    editSwitched: {},
    draftType: f.default.DRAFT_TYPE.MAIN,
    draft: d.draftDefaultState,
    draftDiff: u.draftDiffDefaultState,
    draftState: l.draftStateDefaultState
});

exports.default = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c, r = arguments[1], f = r.type, d = (0, 
    i.default)(t.draft, r), u = (0, n.default)(t.draftState, r), l = {
        draft: d,
        draftState: u,
        draftDiff: (0, o.default)(t.draftDiff, r, d, u)
    }, s = void 0;
    switch (f) {
      case a.default.SWITCH_EDIT_DRAFT:
        return t.draftType === r.draftType ? t : (void 0 === (s = e({}, t.editSwitched)).draft && (s = function() {
            var t = (0, i.default)(void 0, r), e = (0, n.default)(void 0, r);
            return {
                draft: t,
                draftState: e,
                draftDiff: (0, o.default)(void 0, r, t, e)
            };
        }()), t.merge(e({}, s, {
            editSwitched: l,
            draftType: r.draftType
        })));

      default:
        return t.merge(e({}, l));
    }
};