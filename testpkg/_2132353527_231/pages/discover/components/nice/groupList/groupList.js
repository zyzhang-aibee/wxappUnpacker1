Component({
    properties: {
        groupIds: Array,
        albums: Object
    },
    data: {},
    ready: function() {},
    methods: {
        onAlbumItemTap: function(t) {
            this.triggerEvent("albumTap", {
                item: t.detail.item
            });
        }
    }
});