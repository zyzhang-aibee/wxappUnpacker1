Component({
    properties: {
        edittingComment: String
    },
    data: {
        needAuthComment: !1
    },
    attached: function() {
        var t = wx.xngGlobal.abTest.user_authorization, e = void 0 === t ? {} : t;
        this.setData({
            needAuthComment: !!e.detail_comment
        });
    },
    methods: {
        handleEditComment: function() {
            this.triggerEvent("comment");
        },
        handleSubmitComment: function() {
            this.data.edittingComment && this.triggerEvent("submit");
        }
    }
});