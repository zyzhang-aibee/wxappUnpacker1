function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("../../common/const/common")), l = e(require("./specialPlay")), t = e(require("../../common/others/wxStat")), i = {
    globalShare: function(e) {
        var i = e.tpl_id, u = e.isAuthor;
        void 0 === i && (i = -1);
        var r = 0, s = 0, d = "0", o = "0", _ = "";
        switch (l.default.albumTypeJudge(e)) {
          case a.default.ALBUM_TYPE.SEND_BLESS_VIDEO:
            s = 1, _ = "送祝福";
            break;

          case a.default.ALBUM_TYPE.MV:
            r = 1, _ = "MV";
            break;

          case a.default.ALBUM_TYPE.ARTICLE:
            d = "1", _ = "图文";
            break;

          case a.default.ALBUM_TYPE.SPLICE_VIDEOS:
            o = "1", _ = "视频剪辑";
            break;

          default:
            _ = "普通影集";
        }
        var E = getCurrentPages(), m = E[E.length - 1].route;
        m = m.slice(m.lastIndexOf("/") + 1), d && t.default.report("xwf_article_global_share", {
            isauthor: u,
            tplid: i,
            sharepage: m
        }), t.default.report("global_share", {
            ismv: r,
            isfunvideo: s,
            isauthor: u,
            tplid: i,
            isarticle: d,
            issplicevideo: o,
            albumtype: _,
            sharepage: m || ""
        }), console.log({
            mid: wx.xngGlobal.xu.mid,
            midmod2: wx.xngGlobal.xu.mid % 2,
            midmod10: wx.xngGlobal.xu.mid % 10,
            midmod20: wx.xngGlobal.xu.mid % 20,
            ismv: r,
            isfunvideo: s,
            isauthor: u,
            tplid: i,
            isarticle: d,
            issplicevideo: o,
            albumtype: _,
            sharepage: m || ""
        });
    },
    isBlessVideo: function(e) {
        return this.tplTypeJudge(e) === a.default.TPL_TYPE.STYLE.SEND_BLESS_FRONT_VIDEO || this.tplTypeJudge(e) === a.default.TPL_TYPE.STYLE.SEND_BLESS_H5_VIDEO || this.tplTypeJudge(e) === a.default.TPL_TYPE.STYLE.SEND_BLESS_NORMAL_VIDEO;
    }
};

module.exports = i;