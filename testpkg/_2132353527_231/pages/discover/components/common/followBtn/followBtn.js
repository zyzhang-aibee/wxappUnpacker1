var o = require("../../../../../common/others/discover/utils");

Component({
    properties: {
        mid: Number,
        isFollowed: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        handleFollow: function() {
            var e = this.data, l = {
                mid: e.mid
            };
            e.isFollowed ? (0, o.unfollowUser)(l) : (0, o.followUser)(l);
        }
    }
});