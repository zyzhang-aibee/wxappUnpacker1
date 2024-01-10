var e = require("../../../../../common/const/index");

Component({
    properties: {
        album: Object,
        showNiceAlbumFlag: {
            type: Boolean,
            value: !1
        },
        maxHeight: {
            type: Number,
            value: 0
        }
    },
    data: {
        NICE_ALBUM_FLAG: 2,
        ALBUM_TYPE: e.ALBUM_TYPE
    },
    attached: function() {
        var e = wx.xngGlobal.sysInfo.screenWidth, t = this.data.maxHeight, o = void 0, a = void 0, i = void 0;
        t ? (o = t, a = 9 * (i = t) / 16) : (o = e / 1.5, a = Math.floor((e - 20) / 1.75), 
        i = Math.floor(16 * a / 9)), this.setData({
            BIG_PIC_HORI_HEIGHT: o,
            VERT_PIC_MAX_HEIGHT: i,
            BIG_PIC_VERT_WIDTH: a
        });
    },
    methods: {
        handleClickCover: function() {
            this.triggerEvent("onCoverClick");
        }
    }
});