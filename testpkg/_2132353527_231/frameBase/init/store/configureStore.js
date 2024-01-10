function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = e(require("../../library/redux-thunk/index")), i = require("../../library/redux-logger/index"), u = e(require("../../../common/reducers/index")), d = require("../../middleware/index"), a = require("../../library/redux/index"), t = e(require("../../../config/config"));

module.exports = function(e) {
    var n = (0, i.createLogger)({
        duration: !0,
        diff: !1
    });
    return t.default.reduxLog ? (0, a.createStore)(u.default, e, (0, a.applyMiddleware)(r.default, d.xngAuth, d.api, d.actionLog, n)) : (0, 
    a.createStore)(u.default, e, (0, a.applyMiddleware)(r.default, d.xngAuth, d.api, d.actionLog));
};