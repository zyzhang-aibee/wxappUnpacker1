function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acGetAbtestConfig = function() {
    return {
        API: {
            type: n.default.FETCH_ABTEST,
            endpoint: "/account/get_abtest_config",
            param: {
                app: 1,
                type: 1,
                version: t.default.codeVer
            }
        }
    };
}, exports.acGetBanConfig = function() {
    return {
        API: {
            type: n.default.FETCH_LIMIT_STANDARD,
            endpoint: "/config/get_ban_handle"
        }
    };
};

var t = e(require("../../../../config/config")), n = e(require("../../../../common/const/actionType")), o = require("../../../../frameBase/library/redux/index");

exports.default = (0, o.bindActionCreators)(module.exports, wx.xngGlobal.dispatch);