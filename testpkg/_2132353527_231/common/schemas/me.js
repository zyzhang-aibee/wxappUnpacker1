var e = require("../../frameBase/library/normalizr/normalizr.min.js"), t = e.Schema, i = e.arrayOf, r = new t("albumRecentlyDeletedList", {
    idAttribute: "aid"
}), L = new t("photoRecentlyDeletedList", {
    idAttribute: "id"
}), o = new t("albumList", {
    idAttribute: "id"
}), T = new t("photoListForBrowser", {
    idAttribute: "id"
}), _ = new t("photos", {
    idAttribute: "id"
}), E = new t("photoSubtitle", {
    idAttribute: "id"
}), a = new t("dynamics"), s = new t("products");

module.exports = {
    AlbumRecentlyDeletedSchemas: {
        ALBUM_RECENTLY_DELETED_LIST: r,
        ALBUM_RECENTLY_DELETED_LIST_ARRAY: i(r)
    },
    PhotoRecentlyDeletedSchemas: {
        PHOTO_RECENTLY_DELETED_LIST: L,
        PHOTO_RECENTLY_DELETED_LIST_ARRAY: i(L)
    },
    AlbumListSchemas: {
        ALBUM_LIST_ARRAY: i(o)
    },
    PhotoSchema: {
        PHOTO: _,
        PHOTO_ARRAY: i(_)
    },
    PhotoBrowserSchemas: {
        PHOTO_BROWSER_LIST: T,
        PHOTO_BROWSER_LIST_ARRAY: i(T)
    },
    PhotoSubtitleSchemas: {
        PHOTO_SUBTITLE_LIST: i(E)
    },
    dynamicListSchema: i(a),
    productListSchema: i(s)
};