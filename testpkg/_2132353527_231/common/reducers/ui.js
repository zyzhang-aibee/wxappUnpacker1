function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = e(require("../const/actionType")), t = e(require("../../frameBase/utils/object-assign/index")), u = (0, 
require("../../frameBase/library/redux/index").combineReducers)({
    scrollTop: function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], u = arguments[1], i = null;
        switch (u.type) {
          case r.default.SET_SCROLL_TOP:
            return i = (0, t.default)(e), i[u.key] = u.scrollTop, i;

          default:
            return e;
        }
    }
});

module.exports = u;