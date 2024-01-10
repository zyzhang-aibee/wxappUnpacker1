Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    return function(e) {
        return function(t) {
            var n = t.LOG;
            return void 0 === n ? e(t) : ("function" == typeof n && n(t), e(t));
        };
    };
};