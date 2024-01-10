var t = require("../xng/utils");

Component({
    properties: {
        actions: Array,
        groups: Array,
        title: String
    },
    data: {
        show: !0
    },
    methods: {
        hide: function() {
            this.setData({
                show: !1
            }), (0, t.hideActionSheet)(), this.onHide();
        },
        onTap: function(t) {
            var n = this.data, e = n.actions, i = n.groups, o = t.currentTarget.dataset, r = o.index, a = o.rowIndex, s = o.colIndex, h = void 0, d = void 0;
            if (void 0 !== (h = e.length ? e[r] : i[a].actions[s]).onTap) {
                var c = wx.xng.getCurrentPage().__xng__.getCallback(h.onTap, "actionSheet");
                d = c && c();
            }
            !1 !== d && this.hide();
        },
        onShow: function() {
            this.triggerEvent("onShow");
        },
        onHide: function() {
            this.triggerEvent("onHide");
        },
        preventScroll: function() {}
    }
});