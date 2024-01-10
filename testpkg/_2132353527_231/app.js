function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
};

require("./frameBase/init/index");

var n = t(require("./frameBase/utils/mta/mta_analysis")), o = require("./common/control/produce"), a = t(require("./common/actions/me")), r = t(require("./common/actions/index")), l = t(require("./common/actions/produce")), i = t(require("./common/others/moment")), s = t(require("./pages/discover/components/ad/adUtils")), u = t(require("./common/actions/global")), c = t(require("./common/actions/albumStatus"));

App({
    onLaunch: function(t) {
        this.xu = wx.xngGlobal.xu, wx.xngGlobal.scene = t ? t.scene : 0, wx.xngGlobal.referrerInfo = t ? t.referrerInfo : null;
        var e = s.default.getStatus();
        i.default.format(e.lastShowTime, "YY-MM-DD") !== i.default.format(Date.now(), "YY-MM-DD") && (s.default.setStatus({
            todayShowCount: 0,
            todayClickCount: 0
        }, !1), e.todayShowCount = 0, e.todayClickCount = 0), this.setFeedAdStat(e);
        var o = wx.getStorageSync("font_scheme");
        o && (u.default.acSetFontSize(o), wx.xngGlobal.isBigFontScheme = o, wx.xngGlobal.xu.logger.logTraffic("largeFont", {
            topic: "in"
        })), wx.xngGlobal.dispatch(a.default.fetchUserinfo(function(t) {
            t.cdate = t.ct ? i.default.format(t.ct, "YYMMDD") : 0, wx.xngGlobal.xu.user = t, 
            wx.xngGlobal.xu.mid = t.mid;
        })), l.default.acFetchAlbumTplListGroup(), this.timer = setTimeout(function() {
            l.default.acFetchAlbumDraft();
        }, 500);
        var r = +new Date();
        wx.xngGlobal.xu.logger.logMoniter("enter", {
            bt: r
        }), wx.xngGlobal.xu.logger.logMoniter("enterSuc", {
            bt: r,
            tt: 10
        }), wx.xngGlobal.token && wx.xngGlobal.xu.logger.logAll("token", {
            token: wx.xngGlobal.token
        }), wx.onMemoryWarning instanceof Function && wx.onMemoryWarning(function(t) {
            wx.xngGlobal.xu.logger.logAll("onMemoryWarning", {
                res: t ? JSON.stringify(t) : ""
            }), wx.reportAnalytics("app_memory_warning", {
                warninglevel: t ? t.level : 0
            });
        }), n.default.App.init({
            appID: "500495875",
            eventID: "500495924",
            statShareApp: !0
        });
    },
    onShow: function(t) {
        this.options = t, wx.xngGlobal.xu.scene = t ? t.scene : 0, wx.xngGlobal.hotScene = wx.xngGlobal.xu.scene, 
        wx.xngGlobal.dispatch(a.default.acGetNoticeNum()), wx.xngGlobal.dispatch(r.default.acGetGeneral({
            success: function(t) {
                wx.xngGlobal.general = t;
            }
        })), wx.setKeepScreenOn && wx.setKeepScreenOn({
            keepScreenOn: !0
        }), wx.xng.firstPageFromHotStart = !0;
        var e = getCurrentPages(), n = e[e.length - 1];
        n && n.data.__EXTRA__ && this.isReturnFromHome() && (Object.assign(n.data.__EXTRA__, {
            scene: wx.xngGlobal.hotScene
        }), wx.xng.firstPageFromHotStart = !1), this.lastOptions = t;
        var o = wx.xngGlobal.store.getState().albumStatus.checkList, l = o;
        o.length || (l = wx.getStorageSync("making_album_list")).length && c.default.acSetCheckAlbums(l);
    },
    onHide: function() {
        var t = getCurrentPages(), e = t[t.length - 1];
        e && this.lastOptions && (Object.assign(this.lastOptions, {
            path: e.route,
            query: e.options
        }), "pages/community/dynamicSharePage/dynamicSharePage" === e.route && (delete this.lastOptions.query.jump, 
        delete this.lastOptions.query.isComment)), (0, o.pushAlbumDraft)(), (0, o.pushArticleDraft)();
        var n = wx.xngGlobal, a = n.checkStatusTimer, r = n.store;
        a && clearInterval(a);
        var l = r.getState().albumStatus.checkList;
        wx.setStorageSync("making_album_list", l);
    },
    isReturnFromHome: function() {
        if (!this.lastOptions) return !1;
        if (1023 === this.options.scene) return !0;
        if (this.lastOptions.scene !== this.options.scene || this.lastOptions.path !== this.options.path) return !1;
        var t = Object.keys(this.options.query), e = Object.keys(this.lastOptions.query);
        if (t.length !== e.length) return !1;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n] || this.options.query[t[n]] !== this.lastOptions.query[e[n]]) return !1;
        return !0;
    },
    onError: function(t) {
        wx.xngGlobal.xu.logger.logAll("onAppError", {
            errorMsg: t
        });
    },
    onPageNotFound: function(t) {
        wx.xngGlobal.xu.logger.logAll("onPageNotFound", {
            errorMsg: JSON.toString(t)
        }), wx.switchTab({
            url: "/pages/discover/discoverIndexPage/discoverIndexPage"
        });
    },
    setFeedAdStat: function(t) {
        this.feedAdStat = e({}, t, {
            ctr: Math.round(1e3 * t.clickCount / (t.showCount + 1))
        });
    }
});