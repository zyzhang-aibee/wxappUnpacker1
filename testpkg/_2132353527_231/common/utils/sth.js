Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var t = e.width, r = e.height, o = e.size, a = e.noCrop, i = void 0 !== a && a, n = o || Math.round(t) + "x" + Math.round(r);
    return "imageMogr2/gravity/center/rotate/$/thumbnail/!" + n + "r" + (i ? "" : "/crop/" + n) + "/interlace/1/format/jpg";
};