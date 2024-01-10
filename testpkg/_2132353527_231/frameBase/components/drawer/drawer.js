Component({
    properties: {
        show: {
            type: Boolean,
            value: !1,
            observer: "onShowChange"
        }
    },
    data: {},
    methods: {
        onShowChange: function(e, o) {
            e && !o && this.triggerEvent("onShow");
        },
        onHide: function() {
            this.triggerEvent("onHide");
        }
    }
});