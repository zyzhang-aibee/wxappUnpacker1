function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
    }
    return a;
}, e = a(require("../../../../common/actions/play")), n = require("../../../../common/const/statusNType"), o = a(require("../../../../common/const/common")), i = wx.xngGlobal.store.dispatch;

Component({
    properties: {
        dynamic: {
            type: Object,
            value: {},
            observer: "handleDynamic"
        },
        userinfo: Object
    },
    data: {
        viewCountBan: !1,
        favorCountBan: !1,
        isComment: !1
    },
    methods: {
        handleDynamic: function(a) {
            this.setData({
                isComment: a.type === n.FEED_TYPE.ALBUM_COMMENT
            }), a && a.ban && this.setData({
                viewCountBan: wx.xngGlobal.getBan("view_count", a.ban),
                make_same: wx.xngGlobal.getBan("favor_count", a.ban)
            });
        },
        onAlbumTap: function(a) {
            var e = t({}, a.currentTarget.dataset, a.target.dataset);
            this.triggerEvent("onAlbumTap", e);
        },
        onMoreTap: function() {
            var a = this.data.dynamic;
            this.triggerEvent("onDynamicMoreTap", a);
        },
        onFavorTap: function(a) {
            var t = this.data, n = t.isComment, r = t.dynamic, d = r.id, m = r.album_id, u = r.cid, c = r.album_type, s = r.tpl_id, l = r.stpl_id, v = r.profile_id, f = r.favor.has_favor;
            if (n) i(f ? e.default.acUnfavorComment({
                tar: "favor",
                id: m,
                cid: u,
                dynamicId: v || d
            }) : e.default.acFavorComment({
                tar: "favor",
                id: m,
                cid: u,
                dynamicId: v || d
            })); else if (f) i(e.default.minusFavor({
                id: v || d,
                albumId: m,
                albumType: c
            })); else {
                var p = s === o.default.TPL_TYPE.RANDOM ? l : s;
                i(e.default.addFavor({
                    id: v || d,
                    albumId: m,
                    tplId: p,
                    albumType: c
                }));
            }
        }
    }
});