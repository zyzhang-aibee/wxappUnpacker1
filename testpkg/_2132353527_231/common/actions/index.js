var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../const/actionType"));

module.exports = {
    resetErrorMessage: function() {
        return {
            type: e.default.RESET_ERROR_MESSAGE
        };
    },
    acWxFetchSession: function(t, a, i) {
        return {
            API: {
                type: e.default.WX_FETCH_SESSION,
                endpoint: "/auth/wx_miniapp_code",
                param: {
                    code: t
                },
                success: a,
                fail: i
            },
            NO_AUTH: 1
        };
    },
    acWxMpLogin: function(t, a, i, n, u, r, s, c) {
        return {
            API: {
                type: e.default.WX_LOGIN,
                endpoint: "/auth/wx_miniapp_login",
                param: {
                    proj: "ma",
                    h_scene: t,
                    mini_session: a,
                    raw_data: i,
                    signature: n,
                    encrypted_data: u,
                    iv: r
                },
                success: s,
                fail: c
            },
            NO_AUTH: 1
        };
    },
    acMpLogin: function(t, a, i, n) {
        return {
            API: {
                type: e.default.LOGIN,
                endpoint: "/auth/wx_miniapp_login_without_auth",
                param: {
                    h_scene: t,
                    mini_session: a
                },
                success: i,
                fail: n
            },
            NO_AUTH: 1
        };
    },
    acWxPayOrder: function(t) {
        return {
            API: {
                type: e.default.WX_PAY_ORDER,
                endpoint: "/pay/wx_unified_order",
                param: {
                    total_fee: 100 * t.wxPaySum,
                    trade_type: "JSAPI",
                    body: t.desc,
                    pay_type: t.payType,
                    pay_src: 2
                },
                success: t.success,
                fail: t.fail
            }
        };
    },
    acReeditAlbum: function(t, a, i, n) {
        return {
            API: {
                type: e.default.REEDIT_ALBUM,
                endpoint: "/album/reedit",
                param: {
                    id: a,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!128x128r/crop/128x128/interlace/1/format/jpg/quality/50"
                },
                success: i,
                fail: n
            }
        };
    },
    acModifyAlbum: function(t) {
        return {
            API: {
                type: e.default.REEDIT_ALBUM,
                endpoint: "/album/reedit",
                param: {
                    id: t.albumId,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!128x128r/crop/128x128/interlace/1/format/jpg/quality/50",
                    is_del_modify_draft: 1
                },
                success: t.success,
                fail: t.fail
            }
        };
    },
    acReEditCompareDraft: function(t, a, i, n) {
        return {
            API: {
                type: e.default.REEDIT_COMPARE_DRAFT,
                endpoint: "/album/compare_draft",
                param: {
                    album_id: "" + a
                },
                success: i,
                fail: n
            },
            albumId: a
        };
    },
    acSwitchEditDraft: function(t) {
        return {
            type: e.default.SWITCH_EDIT_DRAFT,
            draftType: t
        };
    },
    acCompareModifiedAlbumDraft: function(t) {
        return {
            API: {
                type: e.default.REEDIT_COMPARE_DRAFT,
                endpoint: "/draft/is_hint_override_draft",
                param: {
                    album_id: "" + t.albumId
                },
                success: t.success
            }
        };
    },
    acSetPagePath: function(t) {
        return {
            type: e.default.SET_PAGE_PATH,
            path: t
        };
    },
    acSendFormIds: function(t) {
        return {
            API: {
                type: e.default.SEND_FORM_ID,
                endpoint: "/album/set_form_id",
                param: {
                    arr_form_id: t.ids
                },
                success: t.success
            }
        };
    },
    acGetGeneral: function(t) {
        return {
            API: {
                type: e.default.GET_GENERAL,
                endpoint: "/config/get_general",
                success: t.success,
                fail: t.fail
            }
        };
    },
    acGetProfile: function(t) {
        return {
            API: {
                type: e.default.GET_PROFILE,
                endpoint: "/account/get_profile",
                success: t.success,
                fail: t.fail
            }
        };
    },
    acSetPushDisabled: function(t) {
        return {
            API: {
                type: e.default.SET_PUSH_DISABLED,
                endpoint: "/account/set_push_disabled",
                param: {
                    push_disabled: t.push_disabled
                },
                success: t.success,
                fail: t.fail
            },
            push_disabled: t.push_disabled
        };
    },
    acSetPushConfirm: function(t) {
        return {
            API: {
                type: e.default.SET_PUSH_CONFIRM,
                endpoint: "/account/set_push_confirm",
                param: {
                    push_confirm: t.push_confirm,
                    album_id: t.album_id
                },
                success: t.success,
                fail: t.fail
            },
            push_confirm: t.push_confirm
        };
    },
    acFollowGzh: function(t) {
        return {
            API: {
                type: e.default.FETCH_FOLLOW_GZH,
                endpoint: "/cusmsg/send_one_miniapp_msg_for_sub",
                success: t.success,
                fail: t.fail
            }
        };
    },
    acGetAlbumDetail: function(t) {
        return {
            API: {
                type: e.default.GET_ALBUM_DRAFT_DETAIL,
                endpoint: "/album/reedit",
                param: {
                    id: t.albumId,
                    is_return_all_info: !0,
                    qs: "imageMogr2/gravity/center/rotate/$/thumbnail/!128x128r/crop/128x128/interlace/1/format/jpg/quality/50"
                }
            }
        };
    }
};