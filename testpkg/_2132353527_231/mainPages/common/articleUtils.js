var e = require("../../common/control/produce"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../common/actions/article"));

module.exports = {
    uploadPhotoGoEditPage: function() {
        var o = this, i = [];
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(s) {
                o.isUploading = !0, (0, e.uploadFile)({
                    type: "photo",
                    qsSize: "128x128",
                    filePaths: s.tempFilePaths,
                    success: function(e) {
                        i.push({
                            id: e.id
                        }), t.default.acSetInsertIndex({
                            insertIndex: i.length,
                            isInsert: !0
                        });
                    },
                    complete: function() {
                        i.length && t.default.acAddArticlePhotos(0, i), wx.navigateTo({
                            url: "/pages/specialPlay/article/editArticlePage/editArticlePage"
                        });
                    }
                });
            }
        });
    }
};