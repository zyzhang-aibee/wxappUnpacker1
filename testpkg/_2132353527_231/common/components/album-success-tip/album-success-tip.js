var a = require("../../others/businessUtils");

Component({
    properties: {
        album: {
            type: Object,
            value: null
        }
    },
    data: {
        navigationHeight: wx.xngGlobal.sysInfo.navigationHeight
    },
    attached: function() {
        var a = this;
        wx.xng.getCurrentPage().__albumSucTip__ = {
            show: function(t) {
                a.setData({
                    show: !0,
                    album: t
                }, function() {
                    setTimeout(function() {
                        a.setData({
                            show: !1,
                            album: null
                        });
                    }, 5e3);
                });
            }
        };
    },
    methods: {
        goPlayPage: function() {
            var t = this.data.album;
            if (t) {
                var n = t.dynamicId, e = t.dynamicMid, i = t.tplId, o = t.albumId, l = wx.xngGlobal.sysInfo.windowWidth, s = wx.xng.getCurrentPage();
                "pages/community/dynamicSharePage/dynamicSharePage" === s.route && s.data.dynamic.album_id === o && s.state.scrollTop > l / 750 * 400 - 30 ? wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                }) : (0, a.goDynamicSharePage)({
                    dynamicId: n,
                    dynamicMid: e,
                    tplId: i,
                    albumId: o
                }), this.setData({
                    show: !1,
                    album: null
                });
            }
        },
        onMaskTap: function() {
            this.setData({
                show: !1,
                album: null
            });
        }
    }
});