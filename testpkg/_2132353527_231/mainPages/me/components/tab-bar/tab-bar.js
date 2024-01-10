Component({
    properties: {
        activeKey: String,
        userInfo: Object
    },
    data: {
        tabs: [ {
            key: "product",
            text: "作品"
        }, {
            key: "dynamic",
            text: "动态"
        } ]
    },
    methods: {
        onTabTap: function(t) {
            var e = t.currentTarget.dataset.key;
            this.triggerEvent("onChange", {
                key: e
            });
        }
    }
});