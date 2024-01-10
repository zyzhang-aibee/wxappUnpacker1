Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acSetFontSize = function(e) {
    return {
        type: t.default.SET_FONT_SIZE,
        isBigFont: e
    };
};

var e = require("../../frameBase/library/redux/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../const/actionType"));

exports.default = (0, e.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);