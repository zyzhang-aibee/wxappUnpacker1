var e = require("../../../../../common/others/discover/utils");

Component({
    properties: {
        weakFriends: {
            type: Object,
            value: {
                mids: []
            },
            observer: function() {
                var e = this.getData();
                this.setData({
                    groups: e
                });
            }
        }
    },
    data: {
        list: []
    },
    methods: {
        getData: function() {
            var e = this.data.weakFriends.mids;
            if (0 === e.length) return e;
            for (var t = [], r = 1; r <= 2; r++) {
                if (!(e.length > 3 * r)) {
                    for (var a = e.slice(3 * (r - 1), e.length), i = 0, s = 3 - a.length; i < s; i++) a.push("empty");
                    t.push(a);
                    break;
                }
                t.push(e.slice(3 * (r - 1), 3 * r));
            }
            return t;
        },
        goProfilePage: function(t) {
            var r = t.target.dataset.mid;
            (0, e.goProfilePage)({
                mid: r
            });
        },
        goWeakFriendPage: function() {
            (0, e.goWeakFriendPage)();
        }
    }
});