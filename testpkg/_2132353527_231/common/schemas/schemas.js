var i = require("../../frameBase/library/normalizr/normalizr.min.js"), t = i.Schema, e = i.arrayOf, A = new t("niceAlbums", {
    idAttribute: "id"
}), r = new t("niceAlbumGroups", {
    idAttribute: "dl_t"
});

r.define({
    albums: e(A)
});

var d = new t("musicEntity", {
    idAttribute: "id"
}), s = new t("tpl", {
    idAttribute: "id"
}), m = new t("miniTpl", {
    idAttribute: "id"
}), u = new t("myBottle", {
    idAttribute: "id"
}), n = new t("squareAlbum", {
    idAttribute: "id"
}), _ = new t("profileAlbums", {
    idAttribute: "id"
}), R = new t("draftHistories", {
    idAttribute: "id"
}), a = new t("contributeAlbums", {
    idAttribute: "id"
}), b = new t("stickerList", {
    idAttribute: "sticker_id"
}), c = new t("mvMusic", {
    idAttribute: "qid"
}), S = new t("dynamics", {
    idAttribute: "id"
}), l = new t("weakFriends", {
    idAttribute: "mid"
}), w = new t("comments", {
    idAttribute: "id"
}), M = new t("favorUsers", {
    idAttribute: "mid"
}), E = new t("messages", {
    idAttribute: "msg_id"
}), I = new t("favorites", {
    idAttribute: "_id"
});

module.exports = {
    Schemas: {
        NICE_ALBUM: A,
        NICE_ALBUM_GROUP: r,
        NICE_ALBUM_GROUP_ARRAY: e(r),
        SQUARE_ALBUM_ARRAY: e(n),
        CONTRIBUTE_ALBUM_ARRAY: e(a),
        DYNAMIC_FEED_ARRAY: e(S),
        WEAK_FRIEND_ARRAY: e(l),
        COMMENT_ARRAY: e(w),
        DYNAMIC_FAVOR_ARRAY: e(M),
        MESSAGE_ARRAY: e(E),
        FAVORITE_ARRAY: e(I)
    },
    MusicListSchemas: {
        MUSIC_LIST: e(d)
    },
    TplSchemas: {
        TPL: e(s)
    },
    miniTplSchemas: {
        MINI_TPL: e(m)
    },
    bottleSchema: {
        MY_BOTTLE: e(u)
    },
    profileSchema: {
        ALBUMS: e(_)
    },
    DraftHistorySchema: e(R),
    StickerSchema: {
        STICKER_LIST_ARRAY: e(b),
        STICKER_LIST: b
    },
    mvMusicSchemas: {
        MV_MUSIC: e(c)
    }
};