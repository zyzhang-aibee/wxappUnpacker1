var e = require("../../../../../common/const/index");

Component({
    properties: {
        item: Object
    },
    data: {
        coverSizeKey: "url@" + e.COVER_SIZE.DISCOVER_SIZE,
        ALBUM_TYPE: e.ALBUM_TYPE
    },
    methods: {
        handleItemTap: function() {
            this.triggerEvent("itemTap", {
                item: this.data.item
            });
        }
    }
});