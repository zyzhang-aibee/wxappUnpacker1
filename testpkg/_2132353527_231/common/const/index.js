function E(E) {
    return E && E.__esModule ? E : {
        default: E
    };
}

var _ = E(require("./coverSize")), T = E(require("./fetchLimit")), Y = require("./statusNType"), e = require("./common");

module.exports = {
    PLAY_UV_TYPE: e.PLAY_UV_TYPE,
    COVER_SIZE: _.default,
    FETCH_LIMIT: T.default,
    FEED_TYPE: Y.FEED_TYPE,
    MSG_TYPE: Y.MSG_TYPE,
    DYNAMIC_PLAY_UV_TYPE: Y.DYNAMIC_PLAY_UV_TYPE,
    ALBUM_TYPE: Y.ALBUM_TYPE,
    ARTICLE_SECTION_TYPE: Y.ARTICLE_SECTION_TYPE,
    FAVORITE_TYPE: Y.FAVORITE_TYPE,
    SHARE_TYPE: Y.SHARE_TYPE
};