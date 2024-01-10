Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./dynamics")), r = require("../../../frameBase/library/redux/index");

exports.default = (0, r.combineReducers)({
    dynamics: e.default
});