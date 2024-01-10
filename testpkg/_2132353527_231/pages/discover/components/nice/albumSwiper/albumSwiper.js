var e = require("../../../../../common/const/index");

Component({
    properties: {
        banners: Array
    },
    data: {
        curBannerIdx: 0
    },
    methods: {
        onSwiperChange: function(e) {
            this.setData({
                curBannerIdx: e.detail.current
            });
        },
        onSwiperItemTap: function() {
            this.triggerEvent("swiperItemTap", {
                item: this.properties.banners[this.data.curBannerIdx],
                detailUV: e.PLAY_UV_TYPE.DISCOVER_NICE_ALBUM_BANNER
            });
        }
    }
});