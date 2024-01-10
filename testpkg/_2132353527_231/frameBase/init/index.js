require("./polyfills/index"), require("./xngGlobal/index");

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./store/index"));

require("./serverConfig/index"), require("./xng/index"), module.exports = e.default;