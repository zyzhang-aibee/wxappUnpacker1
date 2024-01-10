var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../common/const/common"));

Component({
    properties: {
        video_url: {
            type: String,
            value: ""
        },
        width: {
            type: String,
            value: "0"
        },
        height: {
            type: String,
            value: "0"
        },
        unit: {
            type: String,
            value: "px"
        },
        dynamic_height: {
            type: String,
            value: ""
        },
        fullSize: {
            type: Boolean,
            value: !1
        },
        showSwiper: {
            type: Boolean,
            value: !1
        },
        pause: {
            type: Boolean,
            value: !1,
            observer: "handlePause"
        },
        header_url: {
            type: String,
            value: ""
        },
        user_name: {
            type: String,
            value: ""
        },
        tpl_id: {
            type: Number,
            value: -1
        },
        hasVideoPlayEvent: {
            type: Boolean,
            value: !1
        },
        video_control: {
            type: Boolean,
            value: !0
        },
        need_loop: {
            type: Boolean,
            value: !0
        },
        hasVideoEndEvent: {
            type: Boolean,
            value: !1
        },
        videoControl: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        header_url: "",
        headerWidth: 10,
        headerHeight: 10,
        onPlay: !1,
        videoContainerSize: "width:0px;height:0px;",
        videoSize: "width:100%;height:100%;",
        isiOS: !1,
        hasPendant: !1,
        pendant_url: "",
        avatarPosition: "leftTop",
        fontColor: ""
    },
    attached: function() {
        var e = void 0;
        e = this.data.dynamic_height ? "width:" + this.data.width + this.data.unit + ";height:" + this.data.dynamic_height + ";" : "width:" + this.data.width + this.data.unit + ";height:" + this.data.height + this.data.unit + ";", 
        this.data.fullSize && (e = "width:100%;height:100%;"), this.data.tpl_id === t.default.TPL_TYPE.VIDEO_TPL_ID[10] && this.setData({
            hasPendant: !0,
            pendant_url: "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/funVideo/pendant/ChristmasHat.png"
        }), this.data.tpl_id !== t.default.TPL_TYPE.VIDEO_TPL_ID[18] && this.data.tpl_id !== t.default.TPL_TYPE.VIDEO_TPL_ID[23] || this.setData({
            avatarPosition: "middle"
        }), this.data.tpl_id === t.default.TPL_TYPE.VIDEO_TPL_ID[22] ? this.setData({
            fontColor: "#222222"
        }) : this.data.tpl_id === t.default.TPL_TYPE.VIDEO_TPL_ID[23] && this.setData({
            fontColor: "#FF69B4"
        }), this.setData({
            videoContainerSize: e,
            isiOS: wx.xngGlobal.sysInfo.system.indexOf("iOS") > -1
        });
    },
    ready: function() {
        var t = this;
        this.videoContext = wx.createVideoContext("frenderVideo", this);
        var e = {}, i = void 0, a = void 0;
        setTimeout(function() {
            wx.createSelectorQuery().in(t).select(".frender-video-container").boundingClientRect(function(n) {
                var o = void 0;
                (e = n) && e.height && e.width ? e.height / e.width >= 1.5 ? o = "width:" + (a = e.width) + "px;height:" + (i = 1.5 * a) + "px;" : (i = e.height, 
                o = "width:" + (a = i / 1.5) + "px;height:" + i + "px;") : o = "width:100%;height:100%;", 
                t.setData({
                    videoSize: o
                });
            }).exec();
        }, 300);
    },
    methods: {
        onVideoPlay: function() {
            var t = this;
            this.setData({
                onPlay: !0
            }), this.data.pause && setTimeout(function() {
                t.pause();
            }, 500), this.data.hasVideoPlayEvent && this.triggerEvent("onvideoplay");
        },
        onVideoEnd: function() {
            this.data.hasVideoEndEvent && this.triggerEvent("onvideoend");
        },
        play: function() {
            this.videoContext.play();
        },
        pause: function() {
            this.videoContext && this.videoContext.pause();
        },
        handlePause: function(t) {
            t ? this.pause() : this.play();
        }
    }
});