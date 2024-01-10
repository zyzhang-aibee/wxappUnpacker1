wx.xng.Component({
    properties: {
        len: Number
    },
    data: {},
    methods: {
        goRecommend: function() {
            this.triggerEvent("goRecommend");
        }
    }
});