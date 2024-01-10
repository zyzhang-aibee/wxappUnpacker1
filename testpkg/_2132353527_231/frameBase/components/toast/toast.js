var t = require("../xng/utils");

Component({
    properties: {
        title: String,
        icon: {
            type: String,
            value: "success"
        },
        image: {
            type: String
        },
        duration: {
            type: Number,
            value: 1500
        },
        mask: {
            type: Boolean,
            value: !1
        },
        position: {
            type: String,
            value: "mid",
            observer: function(t) {
                var e = "";
                switch (t = t || "mid") {
                  case "mid":
                    e = "bottom: 45%;";
                    break;

                  case "top":
                    e = "bottom: 75%;";
                    break;

                  case "bottom":
                    e = "bottom: 10%";
                    break;

                  default:
                    e = t;
                }
                this.setData({
                    style: e
                });
            }
        }
    },
    data: {
        style: "bottom: 45%;",
        navigationHeight: 64
    },
    attached: function() {
        this.setData({
            navigationHeight: wx.xngGlobal.navigationHeight
        });
    },
    ready: function() {
        var e = this.data.duration;
        e > 0 && setTimeout(function() {
            (0, t.hideToast)();
        }, e);
    },
    methods: {
        onTap: function() {
            (0, t.hideToast)();
        },
        preventScroll: function() {}
    }
});