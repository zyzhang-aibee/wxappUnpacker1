var e = require("../../../../../common/const/index");

wx.xng.Component({
    properties: {
        dynamic: {
            type: Object,
            value: {},
            observer: "handleDynamic"
        },
        followedFriends: Object,
        withoutAlbum: Boolean,
        isSharePage: {
            type: Boolean,
            value: !1
        },
        canMakeSame: {
            type: Boolean,
            value: !1
        },
        page: String,
        isShowMoreBtn: {
            type: Boolean,
            value: !0
        },
        fastCommentEntryVisible: Boolean,
        showModify: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        noCTR: !1,
        commentListBan: !1,
        FEED_TYPE: e.FEED_TYPE
    },
    attached: function() {
        this.data.noCTR = this.data.isSharePage;
    },
    methods: {
        handleDynamic: function(e) {
            e && e.ban && this.setData({
                commentListBan: wx.xngGlobal.getBan("comment_list", e.ban)
            });
        },
        getCTRItemDetail: function() {
            return {
                id: this.data.dynamic.id
            };
        },
        handleMoreAction: function(e) {
            this.triggerEvent("handleMoreAction", e.detail);
        }
    }
}, {
    CTR: {}
});