Component({
    properties: {
        hasNext: Boolean,
        isFetching: {
            type: Boolean,
            value: !0
        },
        loadingText: {
            type: String,
            value: "加载中..."
        }
    },
    data: {},
    methods: {
        handleTimeOutLoad: function() {
            this.triggerEvent("onTimeOutLoad");
        }
    }
});