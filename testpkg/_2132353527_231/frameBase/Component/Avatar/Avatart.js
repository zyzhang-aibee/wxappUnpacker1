Component({
    properties: {
        avaData: {
            type: Object,
            value: {
                src: "",
                sideLength: 0,
                mid: "",
                radius: "",
                iconSrc: ""
            },
            observer: "handleAvatarStyle"
        }
    },
    data: {},
    methods: {
        onAvatarTap: function(t) {
            this.triggerEvent("onavatartap", t.detail);
        },
        handleAvatarStyle: function(t) {
            var e = "width: " + t.sideLength + "px; height: " + t.sideLength + "px; ";
            e = t.radius ? e + " border-radius: " + t.radius + "%; " : e + " border-radius: 50%; ";
            var a = "width: " + t.sideLength / 3 + "px; height: " + t.sideLength / 3 + "px;";
            this.setData({
                style: e,
                iconStyle: a
            });
        }
    }
});