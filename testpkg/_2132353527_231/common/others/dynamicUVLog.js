function e(e) {
    var n = e.id, i = e.mid, a = e.type;
    try {
        var u = r.default.apiDomain + "/trends/add_view", _ = t({}, (0, o.getApiCommonParams)(), {
            profile_id: n,
            profile_mid: i,
            type: a
        });
        wx.request({
            url: u,
            data: _,
            header: {
                "Content-Type": "application/json",
                uuid: wx.xngGlobal.xu.uid
            },
            method: "POST"
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.error(e);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
}, r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/config")), n = require("../const/dynamic"), o = require("./businessUtils");

exports.default = {
    expose: function(r) {
        e(t({}, r, {
            type: n.DYNAMIC_UV_TYPE.EXPOSE_DYNAMIC
        }));
    },
    view: function(r) {
        e(t({}, r, {
            type: n.DYNAMIC_UV_TYPE.VIEW_SHARE_DYNAMIC
        }));
    },
    share: function(r) {
        e(t({}, r, {
            type: n.DYNAMIC_UV_TYPE.SHARE_DYNAMIC
        }));
    },
    exposeShareRecommend: function(r) {
        e(t({}, r, {
            type: n.DYNAMIC_UV_TYPE.EXPOSE_SHARE_RECOMMEND_DYNAMIC
        }));
    },
    reflux: function(r) {
        e(t({}, r, {
            type: n.DYNAMIC_UV_TYPE.SHARE_REFLUX
        }));
    }
};