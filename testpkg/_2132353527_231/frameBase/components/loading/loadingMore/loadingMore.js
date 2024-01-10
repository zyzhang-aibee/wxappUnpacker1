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
        },
        noMoreText: {
            type: String,
            value: "— · —"
        }
    },
    data: {},
    methods: {
        reload: function() {
            this.triggerEvent("reload");
        }
    }
});