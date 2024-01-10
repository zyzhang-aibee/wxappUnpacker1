function e() {
    var e = getCurrentPages(), a = e[e.length - 1];
    if (!a) return "";
    switch (a.route) {
      case "pages/discover/discoverIndexPage/discoverIndexPage":
        var o = a.data.curTabName;
        return o === n.TOPIC_NAMES.RECOMMEND ? "discover_rec" : "discover_" + o;

      case "pages/community/dynamicSharePage/dynamicSharePage":
        return "dynamic_detail";

      case "pages/community/playPage/playPage":
        return "dynamic_play";

      case "pages/xngVideoPage/xngVideoPage":
        return "xng_video";

      case "pages/play/albumPlayPage/albumPlayPage":
        return "album_detail";

      case "pages/me/albumListPage/albumListPage":
        return "my_album";

      case "pages/profile/profilePage/profilePage":
        return "profile";

      case "pages/profile/followFansPage/followFansPage":
        return "follow_fan";

      case "pages/community/weakFriendPage/weakFriendPage":
        return "weak_friends";

      default:
        return "";
    }
}

function a() {
    var e = wx.xngGlobal.sysInfo, a = e.model.split("<")[0];
    return {
        os: e.system,
        device: a,
        weixinver: e.version,
        srcver: e.SDKVersion
    };
}

function o() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    try {
        var n = t.default.apiDomain + "/callback/log";
        o.did && (o.cid = o.did, delete o.did);
        var i = {
            log_para: r({
                time: Date.now(),
                src: "ma",
                mid: wx.xngGlobal.xu.mid || void 0,
                common: a(),
                page: e()
            }, o)
        };
        wx.request({
            url: n,
            data: i,
            header: {
                "Content-Type": "application/json",
                uuid: wx.xngGlobal.xu.uid
            },
            method: "POST"
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.log(e);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var o = arguments[a];
        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
};

exports.getPage = e, exports.getCommonFields = a;

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/config")), n = require("../../pages/discover/components/tab-bar/config");

exports.default = {
    action: o,
    discoverLoad: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "load",
            type: "index"
        }, e));
    },
    expose: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "show",
            type: "post"
        }, e));
    },
    view: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "view",
            type: "post"
        }, e));
    },
    play: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "play",
            type: "video"
        }, e));
    },
    favorDynamic: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "like",
            type: "post"
        }, e));
    },
    favorComment: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "like",
            type: "review"
        }, e));
    },
    share: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "share",
            type: "post"
        }, e));
    },
    favorite: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "fav",
            type: "post"
        }, e));
    },
    comment: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "review",
            type: "post"
        }, e));
    },
    reply: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(r({
            ac: "reply",
            type: "review"
        }, e));
    },
    follow: function() {
        o({
            ac: "follow",
            type: "user"
        });
    }
};