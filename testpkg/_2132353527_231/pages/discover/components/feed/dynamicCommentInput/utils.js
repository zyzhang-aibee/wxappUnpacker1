Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    comment: function() {
        var e = getCurrentPages(), t = e[e.length - 1];
        t.__intendDynamicComment__.apply(t, arguments);
    },
    reply: function() {
        var e = getCurrentPages(), t = e[e.length - 1];
        t.__replyDynamicComment__.apply(t, arguments);
    },
    hide: function(e) {
        var t = getCurrentPages(), n = t[t.length - 1];
        n.__hideCommentInput__ && n.__hideCommentInput__(e);
    }
};