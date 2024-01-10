var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../common/actions/global"));

module.exports = {
    setFontSize: function(o) {
        e.default.acSetFontSize(o), wx.xngGlobal.isBigFontScheme = o, wx.setStorageSync("font_scheme", o), 
        wx.xngGlobal.xu.logger && wx.xngGlobal.xu.logger.logTraffic("largeFont", {
            topic: o ? "in" : "out"
        });
    }
};