var t = require("../../../../common/others/discover/utils");

Component({
    properties: {
        topic: {
            type: Object,
            value: {},
            observer: "getCity"
        }
    },
    data: {
        city: "",
        topicId: null
    },
    methods: {
        getCity: function(t) {
            t && this.setData({
                topicId: t.id,
                city: t.title
            });
        },
        onRegionChoice: function() {
            var i = this.data, e = i.city, o = i.topicId;
            (0, t.goRegionPage)({
                city: e,
                topicId: o
            });
        }
    }
});