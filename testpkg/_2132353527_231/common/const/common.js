module.exports = {
    TOKEN_EXPIRE_TIME_MS: 31536e6,
    FETCH_DISCOVER_LIMIT: 20,
    FETCH_CHOICE_LIMIT: 20,
    FETCH_SQUARE_LIMIT: 30,
    DISCOVER_SEARCH_LIMIT: 50,
    SEARCH_USER_LIMIT: 30,
    FETCH_ALBUM_LIST_LIMIT: 10,
    FETCH_DOU_YIN_ALBUM_LIST_LIMIT: 10,
    FETCH_MUSIC_LIST_LIMIT: 40,
    FETCH_PHOTO_LIST_LIMIT: 40,
    FETCH_ALBUM_RECENTLY_DELETED_LIMIT: 10,
    FETCH_PHOTO_RECENTLY_DELETED_LIMIT: 40,
    SUBTITLE_LIMIT: 64,
    ALBUM_PHOTOS_LIMIT: 100,
    SEARCH_MUSIC_LIMIT: 50,
    BOTTLE_DETAIL_LIMIT: 50,
    FETCH_COMMENT_LIMIT: 30,
    FETCH_PROFILE_LIST_LIMIT: 20,
    FETCH_FRIEND_CONTENTS_LIST_LIMIT: 20,
    FETCH_FOLLOW_FANS_LIST_LIMIT: 20,
    FETCH_NOTICE_LIMIT: 20,
    FETCH_BLACK_LIST_LIMIT: 20,
    MUSIC_TAG_NAV_LIMIT: 30,
    FETCH_FAVOR_LIST: 30,
    ALBUM_NAV_DOWNLOAD_LIMIT: 50,
    PROJ_TYPE: {
        IN: 1,
        OUT: 2
    },
    AD_TYPE: {
        BAIDU: 1,
        GOOGLE: 2,
        GDT: 3
    },
    ALBUM_TYPE: {
        NORMAL: 1,
        SEND_BLESS_VIDEO: 2,
        MV: 3,
        SPLICE_VIDEOS: 4,
        ARTICLE: 5
    },
    TPL_TYPE: {
        STYLE: {
            NORMAL: 1,
            SEND_BLESS_NORMAL_VIDEO: 2,
            SEND_BLESS_FRONT_VIDEO: 3,
            SEND_BLESS_H5_VIDEO: 6,
            MV: 4,
            SPLICE_VIDEOS: 5
        },
        RANDOM: 1e5,
        CLASSIC: 100022,
        GEO_WIPE: 100023,
        PIP: 100024,
        CLASSIC_HORIZONTAL: 100032,
        DISTORT: 200311,
        VIDEO_TPL_ID: [ 400100, 400101, 400102, 400105, 400107, 400109, 400108, 400110, 400113, 400500, 400501, 400502, 400503, 400504, 400505, 400600, 400601, 400602, 400506, 400507, 400508, 400509, 400510, 400511 ],
        SPECIAL_PLAY_MV: 500100,
        LOVE_RECT: 201271,
        SPLICE_VIDEOS: 0,
        SPECIAL_PLAY_ARTICLE: {
            DEFAULT: 7e5
        }
    },
    TPL_NO_SUB: [ 200201, 200311, 200361, 200391 ],
    CHANGE_SUB_COLOR: [ 100022, 100032, 100024 ],
    DIALOG_TYPE: {
        OK_CANCEL: 1,
        OK: 2,
        NO_BUTTON: 3
    },
    DRAFT_DIFF: "DRAFT_DIFF",
    DRAFT_TYPE: {
        MAIN: 1,
        MODIFY: 2
    },
    PAY_TYPE: {
        DONATION: 1e5,
        COINS: 100010
    },
    FESTIVAL_LIST: [ {
        id: 12,
        name: "subtitle-newyear",
        start: "0101",
        end: "0103"
    }, {
        id: 13,
        name: "subtitle-lunarnewyear",
        start: "0204",
        end: "0210"
    }, {
        id: 2,
        name: "subtitle-valentine",
        start: "0211",
        end: "0214"
    }, {
        id: 2,
        name: "subtitle-valentine",
        start: "0309",
        end: "0314"
    }, {
        id: 1,
        name: "subtitle-mothers",
        start: "0504",
        end: "0509"
    }, {
        id: 2,
        name: "subtitle-520",
        start: "0515",
        end: "0521"
    }, {
        id: 3,
        name: "subtitle-children",
        start: "0527",
        end: "0602"
    }, {
        id: 5,
        name: "subtitle-father",
        start: "0614",
        end: "0620"
    }, {
        id: 4,
        name: "subtitle-graduate",
        start: "0621",
        end: "0714"
    }, {
        id: 6,
        name: "subtitle-0801",
        start: "0726",
        end: "0803"
    }, {
        id: 2,
        name: "subtitle-77",
        start: "0804",
        end: "0810"
    }, {
        id: 7,
        name: "subtitle-teacher",
        start: "0905",
        end: "0910"
    }, {
        id: 8,
        name: "subtitle-mid-autumn",
        start: "0912",
        end: "0915"
    }, {
        id: 9,
        name: "subtitle-99",
        start: "1005",
        end: "1009"
    }, {
        id: 10,
        name: "subtitle-thanksgiving",
        start: "1120",
        end: "1124"
    }, {
        id: 11,
        name: "subtitle-christmas",
        start: "1220",
        end: "1225"
    }, {
        id: 12,
        name: "subtitle-newyear",
        start: "1226",
        end: "1231"
    } ],
    SUBTITLE_TAB_LIST: [ {
        idx: 1,
        content: "母亲节"
    }, {
        idx: 2,
        content: "情人节"
    }, {
        idx: 3,
        content: "儿童节"
    }, {
        idx: 4,
        content: "毕业季"
    }, {
        idx: 5,
        content: "父亲节"
    }, {
        idx: 6,
        content: "建军节"
    }, {
        idx: 7,
        content: "教师节"
    }, {
        idx: 8,
        content: "中秋节"
    }, {
        idx: 9,
        content: "重阳节"
    }, {
        idx: 10,
        content: "感恩节"
    }, {
        idx: 11,
        content: "圣诞节"
    }, {
        idx: 12,
        content: "元旦"
    }, {
        idx: 13,
        content: "春节"
    } ],
    NEWER_GUIDE_TIME: 1728e5,
    ALBUM_STATUS: {
        MAKING: 1,
        SUCCESS: 2,
        FAIL: 3,
        CANCEL: 4,
        WAIT: 5,
        REDO: 6,
        BANNED: 7,
        PREPARE: 10
    },
    ALBUM_TYPE_STATUS: {
        CONTRIBUTION: 1,
        FEATURED: 2
    },
    ALBUM_PUBLISH_TYPE_STATUS: {
        NORMAL: 0,
        PUBLISH: 1
    },
    ALBUM_TYPE_BAN: {
        RED: 1,
        ORANGE: 2,
        YELLOW: 3
    },
    FOLLOW_RELATION: {
        UN_FOLLOW: 0,
        FOLLOWED: 1,
        FOLLOW_EACH_OTHER: 2
    },
    ACTION_SHEET_TYPE: {
        DEFAULT: void 0,
        SMALL_ICON: 1,
        LARGE_ICON: 2,
        CHECK_BOX: 3
    },
    DOWNLOAD_TYPE: {
        IMAGE: 1,
        VIDEO: 2
    },
    LOADING_TYPE: {
        SUCCESS: 0,
        LOADING: 1,
        FAIL: 2
    },
    CONTRIBUTE_TYPE: {
        NOT: -1,
        NORMAL: 0,
        ING: 1,
        ED: 2
    },
    TPL_COLOR_OPTION: {
        ffffff: {
            color: "ffffff",
            title: "白色"
        },
        "78e748": {
            color: "78e748",
            title: "绿色"
        },
        ffff00: {
            color: "ffff00",
            title: "黄色"
        },
        "943cef": {
            color: "943cef",
            title: "紫色"
        },
        "02e7ce": {
            color: "02e7ce",
            title: "青色"
        },
        f19eff: {
            color: "f19eff",
            title: "粉色"
        },
        ff3a3a: {
            color: "ff3a3a",
            title: "红色"
        },
        "31b4ff": {
            color: "31b4ff",
            title: "蓝色"
        }
    },
    FAIL_TYPE: {
        PHOTO: -3,
        MUSIC: -4
    },
    NAV_BAR_TYPE: {
        DEFAULT: void 0,
        NO_LEFT_TEXT: 1
    },
    PLAY_NAV_LEFT_DISCOVER_SCENE: [ 1007, 1008, 1014, 1043, 1058, 1067, 1068, 1096 ],
    HISTORY_RECORD_TYPE: {
        DEFAULT: 0,
        COMMIT: 1,
        REEDIT_ALBUM: 2,
        CLEAR_ALBUM: 3,
        ADD_PHOTO: 4,
        DELETE_PHOTO: 5,
        MOVE_PHOTO: 6,
        CHANGE_MUSIC: 7,
        CHANGE_SUBTITLE: 8,
        CHANGE_TPL: 9,
        CHANGE_PRODUCER: 10,
        CHANGE_TITLE: 11,
        CHANGE_STORY: 12,
        CHANGE_COVER: 13,
        EDIT_PHOTO: 14,
        MODIFY_ALBUM: 15
    },
    DY_QD: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6
    },
    PLAY_UV_TYPE: {
        DISCOVER_FEED_COMMENT: 101,
        DISCOVER_NICE_ALBUM: 102,
        DISCOVER_NICE_ALBUM_BANNER: 103,
        DISCOVER_SQUARE: 104,
        DISCOVER_SEARCH: 105,
        PRODUCE_SUBMIT: 201,
        PRODUCE_MODIFY: 202,
        PRODUCE_MODIFY_MUSIC: 203,
        PRODUCE_MODIFY_TPL: 204,
        ME_FEED_COMMENT: 301,
        ME_FEED_ALBUM: 302,
        ME_PUBLIC_ALBUM: 303,
        ME_ALBUM_LIST: 304,
        ME_ALBUM_LIST_URL: 305,
        ME_SYSTEM_MESSAGE: 306,
        PROFILE_COMMENT: 401,
        PROFILE_ALBUM: 402,
        PROFILE_PUBLIC_ALBUM: 403,
        WX_OTHER: 500,
        WX_SERVICE_PUSH: 501,
        WX_SUBSCRIBE_PUSH: 502,
        WX_ALBUM_SUC_TPL: 503,
        WX_MINI_APP_CONTACT_MESSAGE: 504,
        WX_SHARE_FRIENDS: 505,
        WX_SHARE_TIME_LINE: 506,
        WX_FAVORITE: 507,
        WX_SHARE_COPY_URL: 508,
        WX_MINI_APP_SHARE_CARD: 509,
        NO_USER_INFO: 1e3
    },
    ARTICLE_PHOTOS_LIMIT: 100,
    FONT_SIZE_SCALE: 1.2,
    NAV_BAR_HEIGHT: 48,
    PROFILE_HEADER_HEIGHT: 154,
    MV_HEADER_HEIGHT: 72.5,
    PHOTO_PAGE_TYPE: {
        ALBUM_PHOTO: 1,
        DAY_PHOTO: 2
    }
};