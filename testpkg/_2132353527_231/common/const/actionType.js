function _(_) {
    if (_ && _.__esModule) return _;
    var E = {};
    if (null != _) for (var T in _) Object.prototype.hasOwnProperty.call(_, T) && (E[T] = _[T]);
    return E.default = _, E;
}

var E = Object.assign || function(_) {
    for (var E = 1; E < arguments.length; E++) {
        var T = arguments[E];
        for (var O in T) Object.prototype.hasOwnProperty.call(T, O) && (_[O] = T[O]);
    }
    return _;
}, T = _(require("./actionTypes/discover/dynamic")), O = _(require("./actionTypes/topic/index")), S = function(_) {
    return "@discover/" + _;
};

module.exports = E({
    WX_FETCH_SESSION: "WX_FETCH_SESSION",
    WX_LOGIN: "WX_LOGIN",
    LOGIN: "LOGIN",
    WX_PAY_ORDER: "WX_PAY_ORDER",
    SEND_FORM_ID: "SEND_FORM_ID",
    GET_GENERAL: "GET_GENERAL",
    FETCH_FOLLOW_GZH: "FETCH_FOLLOW_GZH",
    FETCH_FAVORITE_ALBUM: "FETCH_FAVORITE_ALBUM",
    RESET_ERROR_MESSAGE: "RESET_ERROR_MESSAGE",
    WX_LOGIN_NOT: "WX_LOGIN_NOT",
    SET_PAGE_PATH: "SET_PAGE_PATH",
    LOG: "LOG",
    SET_ENTER_STATUS: "SET_ENTER_STATUS",
    UPLOAD_PHOTO_SUC: "UPLOAD_PHOTO_SUC",
    SET_SCROLL_TOP: "SET_SCROLL_TOP",
    FETCH_DISCOVER: S("FETCH_DISCOVER"),
    FETCH_SQUARE: S("FETCH_SQUARE"),
    FETCH_HOT_WORDS: "FETCH_HOT_WORDS",
    DISCOVER_SEARCH_ALBUM: "DISCOVER_SEARCH_ALBUM",
    DISCOVER_SEARCH_USER: "DISCOVER_SEARCH_USER",
    DISCOVER_SEARCH_All_RESET: "DISCOVER_SEARCH_All_RESET",
    FETCH_CONTRIBUTE: S("FETCH_CONTRIBUTE"),
    CLC_CONTRIBUTE: S("CLC_CONTRIBUTE"),
    RESET_PUBLISH: S("RESET_PUBLISH"),
    SET_PUBLISH_TEXT: S("SET_PUBLISH_TEXT"),
    REMOVE_ALBUM_MATERIAL: S("REMOVE_ALBUM_MATERIAL"),
    ADD_ALBUM_MATERIAL: S("ADD_ALBUM_MATERIAL")
}, T, O, {
    SET_FORM_ID: "SET_FORM_ID",
    GET_BIG_PHOTO: "GET_BIG_PHOTO",
    MV_FETCH_MUSIC: "MV_FETCH_MUSIC",
    ADD_ONE_MV_PHOTO: "ADD_ONE_MV_PHOTO",
    ADD_MV_PHOTO: "ADD_MV_PHOTO",
    SET_MV_COVER: "SET_MV_COVER",
    SET_MV_MUSIC: "SET_MV_MUSIC",
    REMOVE_MV_PHOTO: "REMOVE_MV_PHOTO",
    REMOVE_MORE_MV_PHOTO: "REMOVE_MORE_MV_PHOTO",
    CHANGE_MV_PHOTO_ORDER: "CHANGE_MV_PHOTO_ORDER",
    CLEAR_ALL_MV_PHOTO: "CLEAR_ALL_MV_PHOTO",
    GET_MV_ALBUM_MUSIC: "GET_MV_ALBUM_MUSIC",
    GET_MV_MUSIC_INFO_BY_MUSIC_ID: "GET_MV_MUSIC_INFO_BY_MUSIC_ID",
    CHANGE_MV_TITLE: "CHANGE_MV_TITLE",
    REEDIT_MV: "REEDIT_MV",
    MV_USER_ADVISE: "MV_USER_ADVISE",
    SET_MV_MUSIC_SEARCH_VAL: "SET_MV_MUSIC_SEARCH_VAL",
    SEARCH_ALL_MV_MUSIC: "SEARCH_ALL_MV_MUSIC",
    MV_MUSIC_INC: "MV_MUSIC_INC",
    MV_BACK_UP: "MV_BACK_UP",
    RESTORE_MV_BACK_UP: "RESTORE_MV_BACK_UP",
    CHANGE_MV_DATA_IN_DYNAMIC: "CHANGE_MV_DATA_IN_DYNAMIC",
    FETCH_POSTER_COVER: "FETCH_POSTER_COVER",
    FETCH_SAME_MV_MUSIC_ALBUMS: "FETCH_SAME_MV_MUSIC_ALBUMS",
    ADD_PHOTOS_OF_ARTICLE: "ADD_PHOTOS_OF_ARTICLE",
    ADD_TEXT_OF_ARTICLE: "ADD_TEXT_OF_ARTICLE",
    DELETE_SECTION_OF_ARTICLE: "DELETE_SECTION_OF_ARTICLE",
    UPDATE_SECTION_OF_ARTICLE: "UPDATE_SECTION_OF_ARTICLE",
    MOVE_SECTION_OF_ARTICLE: "MOVE_SECTION_OF_ARTICLE",
    SET_TITLE_OF_ARTICLE: "SET_TITLE_OF_ARTICLE",
    SET_COVER_OF_ARTICLE: "SET_COVER_OF_ARTICLE",
    SET_MUSIC_OF_ARTICLE: "SET_MUSIC_OF_ARTICLE",
    CLEAR_MUSIC_OF_ARTICLE: "CLEAR_MUSIC_OF_ARTICLE",
    CLEAR_ARTICLE_DATA: "CLEAR_ARTICLE_DATA",
    SET_ARTICLE_DATA: "SET_ARTICLE_DATA",
    SET_EDIT_TYPE: "SET_EDIT_TYPE",
    DELETE_ARTICLE_PHOTO_BY_ID: "DELETE_ARTICLE_PHOTO_BY_ID",
    SET_INSERT_INDEX: "SET_INSERT_INDEX",
    COMMIT_ARTICLE: "COMMIT_ARTICLE",
    COMMIT_MODIFY_ARTICLE: "COMMIT_MODIFY_ARTICLE",
    PUSH_ARTICLE_DRAFT: "PUSH_ARTICLE_DRAFT",
    FETCH_ARTICLE_DRAFT: "FETCH_ARTICLE_DRAFT",
    RESTORE_ARTICLE: "RESTORE_ARTICLE",
    FETCH_VIDEO_ALBUM: "FETCH_VIDEO_ALBUM",
    FAVOR_VIDEO_DETAIL: "FAVOR_VIDEO_DETAIL",
    ADD_VIDEO_FAVOR: "ADD_VIDEO_FAVOR",
    MINUS_VIDEO_FAVOR: "MINUS_VIDEO_FAVOR",
    GET_TEM_SECONDS_TPL: "GET_TEM_SECONDS_TPL",
    SELECT_VIDEO_PIC: "SELECT_VIDEO_PIC",
    REMOVE_VIDEO_PIC: "REMOVE_VIDEO_PIC",
    ALBUM_RECENTLY_DELETED: "ALBUM_RECENTLY_DELETED",
    PHOTO_RECENTLY_DELETED: "PHOTO_RECENTLY_DELETED",
    WIPE_PHOTO: "WIPE_PHOTO",
    RESTORE_PHOTO: "RESTORE_PHOTO",
    CLAER_ALBUM_RECENTLY_DELETED: "CLAER_ALBUM_RECENTLY_DELETED",
    USERINFO: "USERINFO",
    USER_COINS: "USER_COINS",
    GET_DOWNLOAD_LID: "GET_DOWNLOAD_LID",
    GET_ALBUM_DETAIL: "GET_ALBUM_DETAIL",
    RELOAD_USER_INFO: "RELOAD_USER_INFO",
    ALBUM_TO_LIST: "ALBUM_TO_LIST",
    IS_MEET_SEND_CONDITION: "IS_MEET_SEND_CONDITION",
    IS_MEET_REWARD_CONDITION: "IS_MEET_REWARD_CONDITION",
    SEND_TASK_FINISH: "SEND_TASK_FINISH",
    FETCH_BLACK_LIST: "FETCH_BLACK_LIST",
    REMOVE_BLACK_LIST: "REMOVE_BLACK_LIST",
    ADD_BLACK_LIST: "ADD_BLACK_LIST",
    RELOAD_BLACK_LIST: "RELOAD_BLACK_LIST",
    ALBUMLIST: "ALBUMLIST",
    FETCH_ALBUM_STORY: "FETCH_ALBUM_STORY",
    REEDIT_COMPARE_DRAFT: "REEDIT_COMPARE_DRAFT",
    CLEAR_ALBUM_LIST: "CLEAR_ALBUM_LIST",
    SHOW_PUBLIC_FOLLOW_GUIDE: "SHOW_PUBLIC_FOLLOW_GUIDE",
    HIDE_PUBLIC_FOLLOW_GUIDE: "HIDE_PUBLIC_FOLLOW_GUIDE",
    CLEAR_PHOTO_LIST: "CLEAR_PHOTO_LIST",
    CHANGE_SHOW_PHOTO_DYNAMIC_ID: "CHANGE_SHOW_PHOTO_DYNAMIC_ID",
    FETCH_PHOTO_LIST: "FETCH_PHOTO_LIST",
    PHOTO_LISTARRAY: "PHOTO_LISTARRAY",
    PHOTO_ROTATE: "PHOTO_ROTATE",
    PHOTO_DELETE: "PHOTO_DELETE",
    PHOTOS_DELETE: "PHOTOS_DELETE",
    PHOTO_SUBTITLE: "PHOTO_SUBTITLE",
    FETCH_COVER_URL: "FETCH_COVER_URL",
    SET_PHOTO_BROWSE_INDEX: "SET_PHOTO_BROWSE_INDEX",
    SELECT_PHOTO_IN_LIST: "SELECT_PHOTO_IN_LIST",
    CANCEL_SELECT_PHOTO_IN_LIST: "CANCEL_SELECT_PHOTO_IN_LIST",
    CLEAR_SELECTED_PHOTO: "CLEAR_SELECTED_PHOTO",
    GET_ALBUM_PHOTOS: "GET_ALBUM_PHOTOS",
    GET_ARTICLE_PHOTOS: "GET_ARTICLE_PHOTOS",
    DONATION_RANK: "DONATION_RANK",
    FETCH_MUSIC_LIST: "FETCH_MUSIC_LIST",
    FETCH_HOT_MUSIC: "FETCH_HOT_MUSIC",
    SEARCH_ALL_MUSIC: "SEARCH_ALL_MUSIC",
    MUSIC_NAV_TAG: "MUSIC_NAV_TAG",
    CHANGE_ALBUM_MUSIC: "CHANGE_ALBUM_MUSIC",
    PC_UPLOAD_AUTHORIZE: "PC_UPLOAD_AUTHORIZE",
    PC_UPLOAD_LOGIN_CONFIRM: "PC_UPLOAD_LOGIN_CONFIRM",
    SAVE_MUSIC_MARK: "SAVE_MUSIC_MARK",
    RENAME_MUSIC: "RENAME_MUSIC",
    DELETE_MUSIC: "DELETE_MUSIC",
    SWITCH_MUSIC_TAB: "SWITCH_MUSIC_TAB",
    SET_MUSIC_UNREAD: "SET_MUSIC_UNREAD",
    SET_PC_MUSIC_UPD_END: "SET_PC_MUSIC_UPD_END",
    SWITCH_SELECT: "SWITCH_SELECT",
    RESET_MY_MUSIC: "RESET_MY_MUSIC",
    MUSIC_SINGLE_SELECT_CLICK: "MUSIC_SINGLE_SELECT_CLICK",
    MUSIC_MULTI_SELECT_CLICK: "MUSIC_MULTI_SELECT_CLICK",
    SET_MUSIC_PLAYING: "SET_MUSIC_PLAYING",
    SET_MUSIC_PLAYING_PROGRESS: "SET_MUSIC_PLAYING_PROGRESS",
    SHOW_MUSIC_PLAY_BAR: "SHOW_MUSIC_PLAY_BAR",
    CLOSE_MUSIC_PLAY_BAR: "CLOSE_MUSIC_PLAY_BAR",
    SHOW_MUSIC_CUT_BAR: "SHOW_MUSIC_CUT_BAR",
    CLOSE_MUSIC_CUT_BAR: "CLOSE_MUSIC_CUT_BAR",
    CLEAR_MUSIC_MARK: "CLEAR_MUSIC_MARK",
    SHOW_HOT_MUSIC: "SHOW_HOT_MUSIC",
    SET_SEARCH_STATE: "SET_SEARCH_STATE",
    SET_NOT_WISH_STATUS: "SET_NOT_WISH_STATUS",
    SELECT_GIFT_MUSIC: "SELECT_GIFT_MUSIC",
    UPDATE_MUSICS_SELECTED: "UPDATE_MUSICS_SELECTED",
    CLC_BOTTLE_ID_SAVED: "CLC_BOTTLE_ID_SAVED",
    FETCH_BOTTLE_DETAIL: "FETCH_BOTTLE_DETAIL",
    SAVE_MUSIC: "SAVE_MUSIC",
    BOTTLE_COMMENT: "BOTTLE_COMMENT",
    MY_BOTTLE: "MY_BOTTLE",
    DEL_MY_BOTTLE: "DEL_MY_BOTTLE",
    WISH_BOTTLE: "WISH_BOTTLE",
    GIFT_WISH_MUSIC: "GIFT_WISH_MUSIC",
    SEEK_WISH_BOTTLE: "SEEK_WISH_BOTTLE",
    SET_LOADING_BOTTLE_MUSIC: "SET_LOADING_BOTTLE_MUSIC",
    SET_PLAY_BOTTLE_MUSIC: "SET_PLAY_BOTTLE_MUSIC",
    DESTROY_BOTTLE_DETAIL: "DESTROY_BOTTLE_DETAIL",
    REMOVE_MY_BOTTLE_DOT: "REMOVE_MY_BOTTLE_DOT",
    APPLY_SHARE_MUSIC: "APPLY_SHARE_MUSIC",
    FETCH_SHARE_MUSIC: "FETCH_SHARE_MUSIC",
    ACCEPT_MUSIC: "ACCEPT_MUSIC",
    PUSH_ALBUM_DRAFT: "PUSH_ALBUM_DRAFT",
    FETCH_ALBUM_DRAFT: "FETCH_ALBUM_DRAFT",
    PUSH_PHOTO_SUBTITLE: "PUSH_PHOTO_SUBTITLE",
    FETCH_ALBUM_TPL_GROUP: "FETCH_ALBUM_TPL_GROUP",
    FETCH_MINI_VIDEO_ALBUM_TPL: "FETCH_MINI_VIDEO_ALBUM_TPL",
    COINS_BILL: "COINS_BILL",
    SET_VIDEO_BEMT: "SET_VIDEO_BEMT",
    GET_TPL_RECOMMEND: "GET_TPL_RECOMMEND",
    FETCH_STICKERS: "FETCH_STICKERS",
    FETCH_THUMBNAILS: "FETCH_THUMBNAILS",
    REEDIT_ALBUM: "REEDIT_ALBUM",
    GET_ALBUM_DRAFT_DETAIL: "GET_ALBUM_DRAFT_DETAIL",
    FETCH_PHOTO_SUBTITLE: "FETCH_PHOTO_SUBTITLE",
    SET_ALBUM_TITLE: "SET_ALBUM_TITLE",
    SET_ALBUM_HIDE_PRODUCER: "SET_ALBUM_HIDE_PRODUCER",
    SET_ALBUM_PRODUCER: "SET_ALBUM_PRODUCER",
    SET_ALBUM_MUSICS: "SET_ALBUM_MUSICS",
    SET_ALBUM_PHOTO_SUBTITLE: "SET_ALBUM_PHOTO_SUBTITLE",
    SET_ALBUM_STORY: "SET_ALBUM_STORY",
    SET_ALBUM_COVER: "SET_ALBUM_COVER",
    SET_TMP_ALBUM_COVER: "SET_TMP_ALBUM_COVER",
    SWITCH_EDIT_DRAFT: "SWITCH_EDIT_DRAFT",
    ADD_ALBUM_PHOTO: "ADD_ALBUM_PHOTO",
    REMOVE_ALBUM_PHOTO: "REMOVE_ALBUM_PHOTO",
    REMOVE_ALBUM_PHOTOS: "REMOVE_ALBUM_PHOTOS",
    REMOVE_ALBUM_PHOTOS_ALL: "REMOVE_ALBUM_PHOTOS_ALL",
    MOVE_UP_ALBUM_PHOTO: "MOVE_UP_ALBUM_PHOTO",
    MOVE_DOWN_ALBUM_PHOTO: "MOVE_DOWN_ALBUM_PHOTO",
    ROTATE_ALBUM_PHOTO: "ROTATE_ALBUM_PHOTO",
    INSERT_ALBUM_PHOTO: "INSERT_ALBUM_PHOTO",
    SET_SUBTITLES_COLOR: "SET_SUBTITLES_COLOR",
    SET_TPL_MODEL: "SET_TPL_MODEL",
    SET_CURRENT_PHOTO_INDEX: "SET_CURRENT_PHOTO_INDEX",
    SET_DISABLE_PHOTOS: "SET_DISABLE_PHOTOS",
    SWITCH_PHOTO_LIST_TOOL_BAR: "SWITCH_PHOTO_LIST_TOOL_BAR",
    SAVE_STICKER_INFO: "SAVE_STICKER_INFO",
    SET_CUR_TPL_TAG_IDX: "SET_CUR_TPL_TAG_IDX",
    SET_TPL_SEARCH_VAL: "SET_TPL_SEARCH_VAL",
    SET_ALBUM_TPL: "SET_ALBUM_TPL",
    SET_RECOMMEND_TPL: "SET_RECOMMEND_TPL",
    UPDATE_DRAFT_VIDEO: "UPDATE_DRAFT_VIDEO",
    HIDE_SAME_MODEL_VIEW: "HIDE_SAME_MODEL_VIEW",
    SET_TPL_SORT_LIST: "SET_TPL_SORT_LIST",
    SET_CUR_TPL_SORT_INDEX: "SET_CUR_TPL_SORT_INDEX",
    SET_TPL_WITHOUT_MUSIC: "SET_TPL_WITHOUT_MUSIC",
    GET_SUB_STATUS: "GET_SUB_STATUS",
    FETCH_ALBUM: "FETCH_ALBUM",
    FAVOR_DETAIL: "FAVOR_DETAIL",
    ADD_FAVOR: "ADD_FAVOR",
    MINUS_FAVOR: "MINUS_FAVOR",
    FETCH_COMMENT: "FETCH_COMMENT",
    FETCH_NICE_COMMENT: "FETCH_NICE_COMMENT",
    FETCH_LATEST_COMMENT: "FETCH_LATEST_COMMENT",
    FAVOR_COMMENT: "FAVOR_COMMENT",
    UN_FAVOR_COMMENT: "UN_FAVOR_COMMENT",
    REPLY_COMMENT: "REPLY_COMMENT",
    DEL_COMMENT_REPLY: "DEL_COMMENT_REPLY",
    FETCH_SELF_COMMENT: "FETCH_SELF_COMMENT",
    ADD_SELF_COMMENT: "ADD_SELF_COMMENT",
    DEL_SELF_COMMENT: "DEL_SELF_COMMENT",
    SET_ALBUM_READ: "SET_ALBUM_READ",
    ALBUM_FEEDBACK: "ALBUM_FEEDBACK",
    SEND_MSG_FOR_SHARE: "SEND_MSG_FOR_SHARE",
    SHARE_CALLBACK: "SHARE_CALLBACK",
    GET_TIME_FRIEND: "GET_TIME_FRIEND",
    SHOW_REPLY_INPUT: "SHOW_REPLY_INPUT",
    DESTROY_COMMENT: "DESTROY_COMMENT",
    DESTROY_SELF_COMMENT: "DESTROY_SELF_COMMENT",
    DISABLE_ALBUM_FAIL_REASON: "DISABLE_ALBUM_FAIL_REASON",
    SUB_USER: "SUB_USER",
    UNSUB_USER: "UNSUB_USER",
    FETCH_PROFILE: "FETCH_PROFILE",
    FETCH_FOLLOW_FANS_LIST: "FETCH_FOLLOW_FANS_LIST",
    DISABLE_PROFILE_COMMENT: "DISABLE_PROFILE_COMMENT",
    DISPLAY_PROFILE_COMMENT: "DISPLAY_PROFILE_COMMENT",
    BAN_COMMENT: "BAN_COMMENT",
    FETCH_RECOMMEND_MUSIC_LIST: "FETCH_RECOMMEND_MUSIC_LIST",
    FETCH_PROFILE_DYNAMICS: "FETCH_PROFILE_DYNAMICS",
    FETCH_PROFILE_PRODUCTS: "FETCH_PROFILE_PRODUCTS",
    PROFILE_COMMENT_ISDISINPRO: "PROFILE_COMMENT_ISDISINPRO",
    FETCH_PRODUCT_IN_PROFILE: "FETCH_PRODUCT_IN_PROFILE",
    DESTROY_PROFILE: "DESTROY_PROFILE",
    DESTROY_FANS: "DESTROY_FANS",
    DESTROY_PLAY_ALBUM: "DESTROY_PLAY_ALBUM",
    PROFILE_SET_MSG_SHOULD_TO_PRO: "PROFILE_SET_MSG_SHOULD_TO_PRO",
    CLEAR_SELECTED_MUSIC: "CLEAR_SELECTED_MUSIC",
    SET_MUSIC_TAB_BAR: "SET_MUSIC_TAB_BAR",
    CLEAR_MUSIC_PLAY_STATE: "CLEAR_MUSIC_PLAY_STATE",
    GET_NOTICE_NUM: "GET_NOTICE_NUM",
    SET_NOTICE_READ: "SET_NOTICE_READ",
    FETCH_SYSTEM_MESSAGE: "FETCH_SYSTEM_MESSAGE",
    SET_ONE_MESSAGE_READ: "SET_ONE_MESSAGE_READ",
    DELETE_MESSAGE: "DELETE_MESSAGE",
    GET_PROFILE: "GET_PROFILE",
    SET_PUSH_DISABLED: "SET_PUSH_DISABLED",
    SET_PUSH_CONFIRM: "SET_PUSH_CONFIRM",
    FETCH_HISTORY_OUT_LIST: "FETCH_HISTORY_OUT_LIST",
    FETCH_HISTORY_IN_LIST: "FETCH_HISTORY_IN_LIST",
    CLEAN_HISTORY_DRAFT: "CLEAN_HISTORY_DRAFT",
    CHANGE_MORE_BTN: "CHANGE_MORE_BTN",
    RECOVER_DRAFT_HISTORY: "RECOVER_DRAFT_HISTORY",
    MODIFY_TPL_ID: "MODIFY_TPL_ID",
    MODIFY_TPL_FONT_COLOR: "MODIFY_TPL_FONT_COLOR",
    MODIFY_TPL_MODEL: "MODIFY_TPL_MODEL",
    AUTHORIZE_DOWNLOAD_ALBUM: "AUTHORIZE_DOWNLOAD_ALBUM",
    FETCH_FAVOR_LIST: "FETCH_FAVOR_LIST",
    DESTROY_FAVOR_LIST: "DESTROY_FAVOR_LIST",
    ADD_VIDEO_FOR_SPLICE: "ADD_VIDEO_FOR_SPLICE",
    MOVE_VIDEO_FOR_SPLICE: "MOVE_VIDEO",
    DELETE_VIDEO_FOR_SPLICE: "DELETE_VIDEO_FOR_SPLICE",
    SET_SPLICE_VIDEOS_TITLE: "SET_SPLICE_VIDEOS_TITLE",
    UPDATE_SPLICE_VIDEO: "UPDATE_SPLICE_VIDEO",
    FETCH_ABTEST: "@abtest/FETCH",
    FETCH_LIMIT_STANDARD: "FETCH_LIMIT_STANDARD",
    DEL_RECOMMEND_ITEM: "DEL_RECOMMEND_ITEM",
    AC_FETCH_QR_CODE: "AC_FETCH_QR_CODE",
    SET_FONT_SIZE: "SET_FONT_SIZE",
    FETCH_ALBUM_STATUS: "FETCH_ALBUM_STATUS",
    SET_CHECK_ALBUMS: "SET_CHECK_ALBUMS",
    ADD_CHECK_ALBUMS: "ADD_CHECK_ALBUMS",
    DELETE_CHECK_ALBUMS: "DELETE_CHECK_ALBUMS",
    CLEAR_CHECK_ALBUM_LIST: "CLEAR_CHECK_ALBUMS"
});