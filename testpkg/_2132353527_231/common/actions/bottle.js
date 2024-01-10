var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../const/actionType")), e = require("../schemas/schemas"), i = require("../../frameBase/library/normalizr/normalizr.min"), a = {
    acFetchBottleDetail: function(e) {
        var i = e.mid, a = e.musicId, n = e.offset, s = e.limit, u = e.success, c = e.fail;
        return {
            API: {
                type: t.default.FETCH_BOTTLE_DETAIL,
                endpoint: "/plp/viewtopic_wish",
                param: {
                    dialog_mid: i,
                    id: a,
                    offset: n,
                    limit: s
                },
                success: u,
                fail: c
            }
        };
    },
    acSaveMusic: function(e) {
        var i = e.id, a = e.music, n = e.success, s = e.fail;
        return {
            API: {
                type: t.default.SAVE_MUSIC,
                endpoint: "/plp/savemusic",
                param: {
                    id: i,
                    music_qid: a.qid,
                    music_name: a.name
                },
                success: n,
                fail: s
            }
        };
    },
    acCommentBottle: function(e) {
        var i = e.mid, a = e.musicId, n = e.txt;
        return {
            API: {
                type: t.default.BOTTLE_COMMENT,
                endpoint: "/plp/comment_wish",
                param: {
                    txt: n,
                    id: a,
                    dialog_mid: i
                }
            },
            txt: n,
            userMid: i
        };
    },
    acFetchMyBottle: function(a) {
        var n = a.offset, s = a.limit;
        return {
            API: {
                type: t.default.MY_BOTTLE,
                endpoint: "/plp/list_wish",
                param: {
                    offset: n,
                    limit: s
                },
                normalizeFunc: function(t) {
                    return (0, i.normalize)(t.data.list, e.bottleSchema.MY_BOTTLE);
                }
            }
        };
    },
    acDelMyBottle: function(e) {
        return {
            API: {
                type: t.default.DEL_MY_BOTTLE,
                endpoint: "/plp/hide",
                param: {
                    id: e
                }
            },
            id: e
        };
    },
    acFetchWishBottle: function(e) {
        var i = e.offset, a = e.limit;
        return {
            API: {
                type: t.default.WISH_BOTTLE,
                endpoint: "/plp/list_wish_new",
                param: {
                    offset: i,
                    limit: a
                }
            }
        };
    },
    acGiftWishMusic: function(e) {
        var i = e.music, a = e.txt, n = e.bottleId, s = e.success, u = e.fail;
        return {
            API: {
                type: t.default.GIFT_WISH_MUSIC,
                endpoint: "/plp/gift_wish_music",
                param: {
                    txt: a,
                    id: n,
                    music_qid: i.qid,
                    music_id: i.id,
                    music_name: i.name
                },
                success: s,
                fail: u
            }
        };
    },
    acSeekWishBottle: function(e) {
        var i = e.song, a = e.singer, n = e.txt, s = e.success, u = e.fail;
        return {
            API: {
                type: t.default.SEEK_WISH_BOTTLE,
                endpoint: "/plp/add_wish",
                param: {
                    song: i,
                    singer: a,
                    txt: n
                },
                success: s,
                fail: u
            }
        };
    },
    acSetLoadingBottleMusic: function(e) {
        return {
            type: t.default.SET_LOADING_BOTTLE_MUSIC,
            isLoading: e
        };
    },
    acSetPlayBottleMusic: function(e) {
        return {
            type: t.default.SET_PLAY_BOTTLE_MUSIC,
            isPlaying: e
        };
    },
    acDestroyBottleDetail: function() {
        return {
            type: t.default.DESTROY_BOTTLE_DETAIL
        };
    },
    acRemoveMyBottleDot: function(e) {
        return {
            type: t.default.REMOVE_MY_BOTTLE_DOT,
            bottleId: e
        };
    }
};

module.exports = a;