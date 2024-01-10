Component({
    properties: {
        list: Array,
        weakFriends: Object
    },
    data: {
        list: []
    },
    methods: {
        handleMoreAction: function(t) {
            this.triggerEvent("handleMoreAction", t.detail);
        }
    }
});