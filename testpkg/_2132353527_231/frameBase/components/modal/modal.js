var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
}, e = require("../xng/utils");

Component({
    properties: {
        title: String,
        content: {
            type: null,
            observer: "processContent"
        },
        closable: {
            type: Boolean,
            value: !1
        },
        maskClosable: {
            type: Boolean,
            value: !1
        },
        btns: {
            type: Array,
            observer: function(e) {
                1 === e.length && "right" === e[0].align && (e = [ {}, e[0] ]), this.setData({
                    actions: e.map(function(e) {
                        return t({
                            type: "default"
                        }, e);
                    })
                });
            }
        }
    },
    data: {
        show: !1,
        actions: [],
        contentKeys: null
    },
    methods: {
        processContent: function(t) {
            "[object Object]" === Object.prototype.toString.call(t) && this.setData({
                contentKeys: Object.keys(t)
            });
        },
        handleClose: function() {
            (0, e.hideModal)();
        },
        onBtnTap: function(t) {
            var e = this.data.actions[t.currentTarget.dataset.index], n = void 0;
            void 0 !== e.onTap && (n = wx.xng.getCurrentPage().__xng__.getCallback(e.onTap, "modal")()), 
            !1 !== n && this.handleClose();
        },
        preventScroll: function() {}
    }
});