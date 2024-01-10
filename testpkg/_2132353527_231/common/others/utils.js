function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
}, n = e(require("../../frameBase/middleware/xngAuth/login")), o = require("../actions/me"), r = e(require("../../common/const/common")), i = {
    queryToJson: function(e) {
        for (var t = (e = e || location.search || location.hash).substr(e.lastIndexOf("?") + 1).split("&"), n = t.length, o = {}, r = 0, i = void 0, a = void 0, s = void 0, u = void 0; r < n; r++) t[r] && (i = (u = t[r].split("="))[0], 
        a = u[1], void 0 === (s = o[i]) ? o[i] = a : s instanceof Array ? s.push(a) : o[i] = [ s, a ]);
        return o;
    },
    getImgQS: function(e, t) {
        return "imageMogr2/gravity/center/rotate/$/thumbnail/!" + e + "x" + t + "r/crop/" + e + "x" + t + "/interlace/1/format/jpg";
    },
    formatUnixTime: function(e) {
        var t = void 0, n = void 0, o = void 0, r = void 0, i = void 0, a = void 0;
        return t = new Date(e), n = t.getFullYear(), o = t.getMonth() + 1, r = t.getDate(), 
        i = t.getHours(), a = t.getMinutes(), n + "年" + o + "月" + r + "日 " + i + ":" + (a < 10 ? "0" + a : a);
    },
    getMusicPlayerTime: function(e) {
        var t = void 0, n = void 0;
        return t = Math.floor(e / 60), n = Math.floor(e % 60), (t < 10 ? "0" + t : t) + " : " + (n < 10 ? "0" + n : n);
    },
    formatUnixTime2YMD: function(e) {
        var t = void 0, n = void 0, o = void 0, r = void 0;
        return t = new Date(e), n = t.getFullYear(), o = t.getMonth() + 1, r = t.getDate(), 
        n + "年" + o + "月" + r + "日";
    },
    getBeforeTime: function(e) {
        if (e) {
            var t = +new Date() - e, n = Math.floor(t / 31536e6);
            return n > 0 ? n + "年前" : (n = Math.floor(t / 864e5)) > 0 ? n + "天前" : (n = Math.floor(t / 36e5)) > 0 ? n + "小时前" : (n = Math.floor(t / 6e4)) > 0 ? n + "分钟前" : "刚刚";
        }
        return "未知";
    },
    formatTimeOfAlbum: function(e) {
        var t = void 0, n = void 0, o = void 0, r = void 0;
        return t = new Date(e), n = t.getFullYear(), o = t.getMonth() + 1, r = t.getDate(), 
        n + "." + (o < 10 ? "0" + o : o) + "." + (r < 10 ? "0" + r : r);
    },
    formatUnixTime4YMDHM: function(e) {
        var t = void 0, n = void 0, o = void 0, r = void 0, i = void 0, a = void 0;
        return n = (t = new Date(e)).getFullYear(), o = t.getMonth() + 1, r = t.getDate(), 
        i = t.getHours(), a = t.getMinutes(), new Date().getFullYear() > n ? n + "年" + o + "月" + r + "日 " + i + ":" + (a < 10 ? "0" + a : a) : o + "月" + r + "日 " + i + ":" + (a < 10 ? "0" + a : a);
    },
    checkAlbumTitleAvailable: function(e) {
        var t = e.trim();
        return t ? !(countCharNum(t) > 128) || "长度不能超过64个字！" : "影集标题必须要填哦！";
    },
    checkMusicNameAvailable: function(e) {
        var t = e.trim();
        return t ? !(countCharNum(t) > 52) || "长度不能超过26个字！" : "音乐名称必须要填哦！";
    },
    checkEmail: function(e) {
        return !!/^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e.trim()) || (e.trim().length ? "请输入正确格式的邮箱" : "请输入邮箱");
    },
    countCharNum: function(e) {
        for (var t = 0, n = e.length, o = -1, r = 0; r < n; r++) t += (o = e.charCodeAt(r)) >= 0 && o <= 128 ? 1 : 2;
        return t;
    },
    getByteLength: function(e) {
        return String(e).replace(/[^\x00-\xff]/g, "ci").length;
    },
    subByte: function(e, t, n) {
        return e = String(e), n = n || "", t < 0 || getByteLength(e) <= t ? e + n : (e = e.substr(0, t).replace(/([^\x00-\xff])/g, "$1 ").substr(0, t).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1")) + n;
    },
    getScreenSize: function() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    filterEmoji: function(e) {
        if (!e || "string" != typeof e) return "";
        var t = /\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g;
        return {
            illegal: t.test(e),
            txt: e.replace(t, "")
        };
    },
    textLength: function(e) {
        for (var t = 0, n = e.length, o = -1, r = 0; r < n; r++) t += (o = e.charCodeAt(r)) >= 0 && o <= 128 ? 1 : 2;
        return t;
    },
    subText: function(e, t) {
        for (var n = 0, o = -1, r = 0; r < e.length; r++) {
            if (o = e.charCodeAt(r), (n += o >= 0 && o <= 128 ? 1 : 2) == t) return e.substring(0, r + 1);
            if (n > t) return e.substring(0, r);
        }
        return e;
    },
    getSliderPosition: function(e, t, n, o) {
        var r = 100 * t / o, i = 100 * n / o;
        return n ? e > i ? i : e < r ? r : e : e >= 100 ? 98 : e < r ? r : e;
    },
    isValidIpv4Addr: function(e) {
        return /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(e);
    },
    findArrayItem: function(e, t, n) {
        if ("function" == typeof Array.prototype.find) return e.find(t, n);
        n = n || this;
        var o = e.length, r = void 0;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (r = 0; r < o; r++) if (t.call(n, e[r], r, e)) return e[r];
    },
    formartHLKeyWordsByEM: function(e) {
        var t = /(<em>.*?<\/em>)/g;
        return e.split(t).map(function(e) {
            return t.test(e) ? {
                text: e.replace(/(<em>|<\/em>)/g, ""),
                type: "highLi"
            } : {
                text: e,
                type: "normal"
            };
        });
    },
    versionCompatible: function(e, t, n) {
        e ? t && t() : n ? n() : wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请将微信升级到最新版本。",
            showCancel: !1,
            confirmText: "朕知道了"
        });
    },
    onPermissionTap: function(e) {
        console.log(e.detail.errMsg), e.detail.errMsg.indexOf("getUserInfo:fail auth deny") < 0 && ((0, 
        n.default)({
            hasPermission: !0
        }), setTimeout(function() {
            wx.xngGlobal.dispatch((0, o.fetchUserinfo)());
        }, 2e3));
    },
    downFail: function(e) {
        wx.hideLoading();
        var t = this, n = e.errMsg;
        n.indexOf("fail cancel") >= 0 ? wx.showToast({
            title: "您取消了操作",
            icon: "none"
        }) : n.indexOf("fail auth deny") >= 0 || n.indexOf("fail:auth denied") >= 0 || n.indexOf("fail authorize") >= 0 ? (wx.showToast({
            title: "您没有授权,请授权后重试",
            icon: "none"
        }), t.onSetSetting({})) : wx.showToast({
            title: n,
            icon: "none"
        });
    },
    onSaveVideo: function(e, t, n, o) {
        var r = this;
        1 === e ? wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function() {
                n && n(t);
            },
            fail: function(e) {
                r.downFail(e), o && o(e);
            }
        }) : 2 === e && wx.saveVideoToPhotosAlbum({
            filePath: t,
            success: function() {
                n && n(t);
            },
            fail: function(e) {
                r.downFail(e), o && o(e);
            }
        });
    },
    onDownloadFile: function(e, t, n) {
        var o = this;
        wx.downloadFile({
            url: e.replace(/http:/, "https:"),
            success: function(e) {
                o.onSaveVideo(t, e.tempFilePath, n);
            },
            fail: function(e) {
                o.downFail(e);
            }
        });
    },
    permissionSuc: function(e, t) {
        e.authSetting["scope.userInfo"] ? t.userInfo && t.userInfo() : t.noUserInfo && t.noUserInfo(), 
        e.authSetting["scope.userLocation"] ? t.userLocation && t.userLocation() : t.noUserLocation && t.noUserLocation(), 
        e.authSetting["scope.address"] ? t.address && t.address() : t.noAddress && t.noAddress(), 
        e.authSetting["scope.record"] ? t.record && t.record() : t.noRecord && t.noRecord(), 
        e.authSetting["scope.writePhotosAlbum"] ? t.writePhotosAlbum && t.writePhotosAlbum() : t.noWritePhotosAlbum && t.noWritePhotosAlbum();
    },
    getSetting: function(e) {
        var t = this;
        wx.getSetting({
            success: function(n) {
                t.permissionSuc(n, e);
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    },
    onApplySetting: function(e) {
        switch (e.scope) {
          case "scope.userInfo":
            wx.authorize({
                scope: "scope.userInfo",
                success: function(t) {
                    e.userInfo && e.userInfo();
                },
                fail: function(e) {
                    console.log(e.errMsg);
                }
            });
            break;

          case "scope.userLocation":
            wx.authorize({
                scope: "scope.userLocation",
                success: function(t) {
                    e.userLocation && e.userLocation();
                },
                fail: function(e) {
                    console.log(e.errMsg);
                }
            });
            break;

          case "scope.address":
            wx.authorize({
                scope: "scope.address",
                success: function(t) {
                    e.address && e.address();
                },
                fail: function(e) {
                    console.log(e.errMsg);
                }
            });
            break;

          case "scope.record":
            wx.authorize({
                scope: "scope.record",
                success: function(t) {
                    e.record && e.record();
                },
                fail: function(e) {
                    console.log(e.errMsg);
                }
            });
            break;

          case "scope.writePhotosAlbum":
            wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function(t) {
                    e.writePhotosAlbum && e.writePhotosAlbum();
                },
                fail: function(e) {
                    console.log(e.errMsg);
                }
            });
        }
    },
    onSetSetting: function(e) {
        var t = this;
        wx.openSetting({
            success: function(n) {
                t.permissionSuc(n, e);
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    },
    shortCodeToMediaid: function(e) {
        for (var t = 0, n = 0; n < e.length; n++) t = 64 * t + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(e.charAt(n));
        return t;
    },
    compareVersion: function(e, t) {
        e = e.split("."), t = t.split(".");
        for (var n = Math.max(e.length, t.length); e.length < n; ) e.push("0");
        for (;t.length < n; ) t.push("0");
        for (var o = 0; o < n; o++) {
            var r = parseInt(e[o]), i = parseInt(t[o]);
            if (r > i) return 1;
            if (r < i) return -1;
        }
        return 0;
    },
    generateUUID: function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16);
        });
    },
    setNavBarTitleOnScroll: function(e, n) {
        if (e) {
            var o = e.hasChangeTitle, r = e.defaultTitle, i = e.defaultTheme, a = e.isTransparent, s = e.scrollHeight, u = e.title, c = e.data.customNavigationBarData;
            n > s && !o ? (wx.setNavigationBarTitle({
                title: u
            }), e.setData({
                customNavigationBarData: t({}, c, {
                    title: u,
                    theme: i || ""
                })
            }), e.hasChangeTitle = !0) : n <= s && o && (wx.setNavigationBarTitle({
                title: r || ""
            }), e.setData({
                customNavigationBarData: t({}, c, {
                    title: r || "",
                    theme: a ? "transparent" : i || ""
                })
            }), e.hasChangeTitle = !1);
        }
    },
    tplMsgRedirect: function(e, t) {
        var n = e.tplMsgGoTo;
        if (n) {
            var o = decodeURIComponent(n);
            wx.navigateTo({
                url: o,
                success: function() {
                    t && t();
                }
            });
        }
    },
    stringifyParams: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=";
        if (!e) return "";
        var o = [];
        return Object.keys(e).forEach(function(t) {
            hasOwnProperty.call(e, t) && e[t] && o.push("" + t + n + e[t]);
        }), o.join(t);
    },
    tplTypeJudge: function(e) {
        if ((e += "") === String(r.default.TPL_TYPE.SPLICE_VIDEOS)) return r.default.TPL_TYPE.STYLE.SPLICE_VIDEOS;
        switch (e.slice(0, 3)) {
          case "400":
            return "5" === e.charAt(3) ? r.default.TPL_TYPE.STYLE.SEND_BLESS_FRONT_VIDEO : "6" === e.charAt(3) ? r.default.TPL_TYPE.STYLE.SEND_BLESS_H5_VIDEO : r.default.TPL_TYPE.STYLE.SEND_BLESS_NORMAL_VIDEO;

          case "500":
            return r.default.TPL_TYPE.STYLE.MV;

          default:
            return r.default.TPL_TYPE.STYLE.NORMAL;
        }
    },
    isBlessVideo: function(e) {
        return this.tplTypeJudge(e) === r.default.TPL_TYPE.STYLE.SEND_BLESS_FRONT_VIDEO || this.tplTypeJudge(e) === r.default.TPL_TYPE.STYLE.SEND_BLESS_H5_VIDEO || this.tplTypeJudge(e) === r.default.TPL_TYPE.STYLE.SEND_BLESS_NORMAL_VIDEO;
    },
    getDaysByDateString: function(e, t) {
        var n = Date.parse(e.replace("/-/g", "/"));
        return (Date.parse(t.replace("/-/g", "/")) - n) / 864e5;
    }
};

module.exports = i;