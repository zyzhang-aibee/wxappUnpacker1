var e = require("../../../../../common/const/index");

Component({
    properties: {
        topic: Object,
        list: Array,
        hasNext: {
            type: Boolean,
            value: !0
        },
        isFetching: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        FEED_TYPE: e.FEED_TYPE
    },
    methods: {}
});