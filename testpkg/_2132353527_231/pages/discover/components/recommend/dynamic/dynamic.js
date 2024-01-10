function i(i) {
    return i && i.__esModule ? i : {
        default: i
    };
}

var t = i(require("../../../../../common/actions/discover")), a = require("../../../../../common/const/index"), d = require("../../../../../common/others/discover/utils"), e = i(require("../../../../../common/const/common"));

wx.xng.Component({
    properties: {
        dynamic: Object,
        topic: Object
    },
    data: {},
    methods: {
        getCTRItemDetail: function() {
            return {
                id: this.data.dynamic.id
            };
        },
        goProfilePage: function() {
            var i = this.data.dynamic, t = i.hide_u, a = i.user, e = a.mid, o = a.nick;
            !t && 1e4 !== e && o && (0, d.goProfilePage)({
                mid: e
            });
        },
        goDynamicSharePage: function() {
            var i = this.data.dynamic, o = i.id, c = i.user.mid, n = i.album_type, m = i.album_id, r = this.data.topic, s = this.data.dynamic.tpl_id;
            s === e.default.TPL_TYPE.RANDOM && (s = this.data.dynamic.stpl_id), t.default.acLogPlayUV({
                did: o,
                mid: c,
                type: a.DYNAMIC_PLAY_UV_TYPE.FEED
            });
            var u = {
                dynamicId: o,
                dynamicMid: c,
                tplId: s,
                isArticle: n === a.ALBUM_TYPE.ARTICLE ? 1 : "",
                albumId: m,
                topicId: r && r.id,
                tagId: r && r.tag_id
            };
            (0, d.goDynamicSharePage)(u);
        }
    }
}, {
    CTR: {}
});