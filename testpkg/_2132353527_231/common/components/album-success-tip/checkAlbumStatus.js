function t(t) {
    var e = wx.xng.getCurrentPage(), n = e.__albumSucTip__, r = e.data.dynamic, a = wx.xngGlobal, u = a.sysInfo.windowWidth, o = a.abTest.author_dynamic_page, i = void 0 === o ? "" : o, l = "pages/community/dynamicSharePage/dynamicSharePage" === e.route;
    i && (l && r.album_id === t.albumId ? (e.fetchData(), e.state.scrollTop > u / 750 * 400 - 30 && n && n.show(t)) : n && n.show(t));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, e) {
        var n = [], r = !0, a = !1, u = void 0;
        try {
            for (var o, i = t[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), 
            !e || n.length !== e); r = !0) ;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            a = !0, u = t;
        } finally {
            try {
                !r && i.return && i.return();
            } finally {
                if (a) throw u;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

exports.default = function() {
    var u = wx.xngGlobal.store.getState().albumStatus.checkList;
    if (u.length && !a) {
        var o = u.map(function(t) {
            return t.albumId;
        }).filter(function(t) {
            return t;
        });
        a = !0, n.default.acFetchAlbumStatus(o).then(function(o) {
            var i = o.entities.albumList, l = o.result, c = [], s = [];
            if (a = !1, l.forEach(function(t) {
                var e = i[t].status;
                e === r.ALBUM_STATUS.SUCCESS ? (s.push(t), c.push(t)) : e === r.ALBUM_STATUS.FAIL && c.push(t);
            }), s.length) {
                var f = s[s.length - 1], m = u.filter(function(t) {
                    return t.albumId === f;
                }), h = e(m, 1)[0];
                h && h.isNewAlbum && t(h);
            }
            c.length && n.default.acDeleteCheckAlbums(c);
        }).catch(function(t) {
            console.log(t), a = !1;
        });
    }
};

var n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../common/actions/albumStatus")), r = require("../../../common/const/common"), a = !1;