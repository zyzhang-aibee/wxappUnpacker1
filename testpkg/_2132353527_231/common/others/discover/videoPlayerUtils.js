function e() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    pause: function() {
        var a = e().__videoPlayer__;
        return a && a.pause.apply(a, arguments);
    },
    fakePause: function() {
        var a = e().__videoPlayer__;
        return a && a.fakePause.apply(a, arguments);
    },
    startPlay: function() {
        var a = e().__videoPlayer__;
        return a && a.startPlay.apply(a, arguments);
    },
    isPlaying: function() {
        var a = e().__videoPlayer__;
        return a && a.isPlaying.apply(a, arguments);
    },
    shouldPlay: function() {
        var a = e().__videoPlayer__;
        return a && a.shouldPlay.apply(a, arguments);
    },
    swipeUp: function() {
        var a = e().__videoPlayer__;
        return a && a.swipeUp.apply(a, arguments);
    }
};