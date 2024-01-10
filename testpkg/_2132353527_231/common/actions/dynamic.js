Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.acFollowUser = function(r) {
    var t = r.mid;
    return {
        API: {
            type: e.FOLLOW_USER,
            endpoint: "/account/sub_user",
            param: {
                visited_mid: t
            }
        },
        mid: t
    };
}, exports.acUnfollowUser = function(r) {
    var t = r.mid;
    return {
        API: {
            type: e.UNFOLLOW_USER,
            endpoint: "/account/unsub_user",
            param: {
                visited_mid: t
            }
        },
        mid: t
    };
}, exports.acLogPlayUV = function(r) {
    var t = r.did, i = r.mid, a = r.type;
    return {
        API: {
            type: e.LOG_PLAY_UV,
            endpoint: "/trends/add_click",
            param: {
                profile_id: t,
                profile_mid: i,
                type: a
            }
        }
    };
}, exports.acLogView = function(t) {
    var i = t.dynamic, a = i.tpl_id, o = i.stpl_id;
    return a === r.TPL_TYPE.RANDOM && (a = o), {
        API: {
            type: e.LOG_VIEW,
            endpoint: "/favor/detail",
            param: {
                id: i.album_id,
                log_params: {
                    proj: "ma",
                    tpl_id: a
                },
                type: i.album_type
            }
        }
    };
}, exports.acLogShare = function(i) {
    var a = i.dynamic, o = a.tpl_id, n = a.stpl_id;
    return o === r.TPL_TYPE.RANDOM && (o = n), {
        API: {
            type: e.LOG_SHARE,
            endpoint: "/album/share_callback",
            param: {
                id: a.album_id,
                res_type: a.album_type === t.ALBUM_TYPE.ARTICLE ? t.SHARE_TYPE.ARTICLE : t.SHARE_TYPE.ALBUM,
                type: 4,
                log_params: {
                    proj: "ma",
                    tpl_id: o
                }
            }
        }
    };
};

var e = function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}(require("../const/actionType")), r = require("../../common/const/common"), t = require("../const/index");