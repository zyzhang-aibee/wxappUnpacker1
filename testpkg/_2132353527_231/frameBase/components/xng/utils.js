function o() {
    var o = getCurrentPages();
    return o[o.length - 1];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.showActionSheet = function(_) {
    o().__xng__.showActionSheet(_);
}, exports.hideActionSheet = function(_) {
    o().__xng__.hideActionSheet(_);
}, exports.showModal = function(_) {
    o().__xng__.showModal(_);
}, exports.hideModal = function(_) {
    o().__xng__.hideModal(_);
}, exports.showToast = function(_) {
    o().__xng__.showToast(_);
}, exports.hideToast = function(_) {
    o().__xng__.hideToast(_);
}, exports.showTooltip = function(_) {
    var t = o();
    if (t.__xng__) {
        var n = _.context;
        t.__xng__.toolTipIn = n || null, t.__xng__.showTooltip(_);
    }
}, exports.hideTooltip = function(_) {
    var t = o();
    t.__xng__ && (t.__xng__.toolTipIn = null, t.__xng__.hideTooltip(_));
};