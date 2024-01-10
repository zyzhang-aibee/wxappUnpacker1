var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
};

Component({
    properties: {
        componentClass: String,
        elementId: String,
        text: String,
        duration: {
            type: Number,
            value: 3e3
        },
        position: {
            type: String,
            value: "top"
        },
        autoHide: {
            type: Boolean,
            value: !1
        },
        clickToHide: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        show: !1,
        key: "left",
        type: "",
        midLine: 0,
        rightValue: 0,
        style: ""
    },
    attached: function() {
        var e = this, o = this.data, i = o.componentClass, n = o.elementId, a = wx.xng.getCurrentPage().__xng__.toolTipIn, r = wx.createSelectorQuery(), l = void 0;
        a ? (r = r.in(a), l = "#" + n) : l = i ? "." + i + ">>>#" + n : "#" + n, r.select(l).boundingClientRect(), 
        r.exec(function(o) {
            o[0] && wx.getSystemInfo({
                success: function(i) {
                    e.createToolTip(t({}, i, o[0]));
                }
            });
        });
    },
    methods: {
        createToolTip: function(t) {
            var e = this.data, o = e.duration, i = e.autoHide, n = e.position, a = t.windowWidth, r = t.windowHeight, l = t.left, s = t.top, p = t.right, c = t.bottom, u = "", d = "left", h = (p + l) / 2, g = h, f = "", x = 0;
            switch (h < 100 && (g = 100, f = "left"), h > a / 2 && (d = "right", g = a - h), 
            h > a - 100 && (g = 100, f = "right", x = a - h), n) {
              case "top":
                u = "bottom:" + (r - s + 14) + "px;" + d + ":" + g + "px";
                break;

              default:
                u = "top:" + (c + 12) + "px;" + d + ":" + g + "px";
            }
            this.setData({
                show: !0,
                key: d,
                type: f,
                midLine: h,
                rightValue: x,
                style: u
            }), i && setTimeout(function() {
                wx.xng.hideTooltip();
            }, o);
        },
        onTap: function() {
            this.data.clickToHide && wx.xng.hideTooltip();
        }
    }
});