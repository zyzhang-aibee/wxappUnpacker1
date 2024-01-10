var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../common/const/common")), t = require("../../common/const/statusNType"), i = {
    getDaysByDateString: function(a, t) {
        var i = Date.parse(a.replace("/-/g", "/"));
        return (Date.parse(t.replace("/-/g", "/")) - i) / 864e5;
    },
    getShareMessage: function(t, i) {
        var e = {
            title: "",
            url: ""
        }, l = new Date(), s = l.getFullYear(), P = l.getMonth() + 1, n = l.getDate();
        if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[3] || t === a.default.TPL_TYPE.VIDEO_TPL_ID[20]) e.title = i + "送给你的祝福，快点开看看吧", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/jinliShare" + Math.floor(4 * Math.random() + 1) + ".jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[2] || t === a.default.TPL_TYPE.VIDEO_TPL_ID[22]) e.title = i + "送给你的祝福，点开迎接好运吧！", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/tuweiShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[4] || t === a.default.TPL_TYPE.VIDEO_TPL_ID[21]) e.title = i + "祝你晚上好，辛苦了一天点开欣赏一下吧！", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/goodNightShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[0]) e.title = i + "祝你生日快乐，有几位神秘嘉宾想对你说…"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[5] || t === a.default.TPL_TYPE.VIDEO_TPL_ID[19]) e.title = i + "送给你的早上好，太精彩了！", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/goodMor2Share4.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[6]) e.title = "感恩！有你们真好......", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/ganenShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[7]) e.title = "小雪快来了，一些祝福送给您", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/xiaoxueShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[8] || t === a.default.TPL_TYPE.VIDEO_TPL_ID[11]) e.title = i + "送给你的早上好，太精彩了！点开看看吧！", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/goodMor3Share.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[9]) e.title = "冬至到，送温暖，这个为你制作的音乐贺卡，一定要看看哦！", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/dongzhiShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[10]) e.title = "圣诞快乐！温暖和好运带给你，点开看看吧！", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/ChristmasShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[12]) e.title = i + "送给你的元旦祝福，今年特别流行，快点开看看吧！", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/yuandanShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[13]) e.title = i + "送给你的小寒祝福，祝你身体健康，点开看看吧！", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/xiaohanShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[14]) {
            e.title = i + "送给你的六个大寒祝福，希望健康与你常相伴！";
            var _ = parseInt(3 * Math.random(), 10) + 1;
            e.url = 1 === _ ? "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/dahanFlowerShare.jpg" : 2 === _ ? "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/dahanXuejinShare.jpg" : "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/dahanMeinvShare.jpg";
        } else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[15]) {
            var T = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/1/28"), p = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/2/4"), r = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/2/5"), E = "";
            T > 0 ? E = "还有" + T + "天就到小年了，" : 0 === T ? E = "今天是小年，" : p > 0 ? E = "还有" + p + "天就到除夕了，" : 0 === p ? E = "今天是除夕，" : 0 === r && (E = "今天是春节，"), 
            e.title = "" + E + i + "送你一首《甜蜜蜜》，祝你早上好，天天开心！", e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/tianmimi.jpg";
        } else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[16]) {
            var c = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/2/4"), g = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/2/5"), u = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/2/14"), L = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/2/19"), h = "";
            c > 0 ? h = "还有" + c + "天就到除夕了，" : 0 === c ? h = "今天是除夕，" : 0 === g ? h = "今天是春节，" : u > 0 ? h = "还有" + u + "天就到情人节了，" : 0 === u ? h = "今天是情人节，" : L > 0 ? h = "还有" + L + "天就到元宵节了，" : 0 === L && (h = "今天是元宵节，"), 
            e.title = "" + h + i + "送你的节日祝福，快快领取吧", e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/chunjiesongzhufuShare.png";
        } else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[17]) e.title = "新春快乐，" + i + "送您的新春五福卡，快快点击领取吧", 
        e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/fukaShare.jpg"; else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[18]) {
            var D = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/2/19");
            e.title = D > 0 ? "还有" + D + "天就到元宵节了，" + i + "提前祝您佳节快乐，快收下这份祝福吧！" : 0 === D ? "今天是元宵节，" + i + "祝您佳节快乐，快收下这份祝福吧！" : i + "祝您佳节快乐，快收下这份祝福吧！", 
            e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/yuanxiaoShare.jpg";
        } else if (t === a.default.TPL_TYPE.VIDEO_TPL_ID[23]) {
            var o = this.getDaysByDateString(s + "/" + P + "/" + n, "2019/3/8");
            e.title = o > 0 ? "还有" + o + "天就是三八妇女节，" + i + "送给你美美的祝福！点开看看吧" : 0 === o ? "今天是三八妇女节，" + i + "送给你美美的祝福！点开看看吧" : i + "祝您佳节快乐，快收下这份祝福吧！", 
            e.url = "https://static2.xiaoniangao.cn/mini_app/img/specialPlay/sharePic/38womenShare.jpg";
        }
        return e;
    },
    tplTypeJudge: function(t) {
        if ("0" == (t += "")) return a.default.TPL_TYPE.STYLE.SPLICE_VIDEOS;
        switch (t.slice(0, 3)) {
          case "400":
            return "5" === t.charAt(3) ? a.default.TPL_TYPE.STYLE.SEND_BLESS_FRONT_VIDEO : "6" === t.charAt(3) ? a.default.TPL_TYPE.STYLE.SEND_BLESS_H5_VIDEO : a.default.TPL_TYPE.STYLE.SEND_BLESS_NORMAL_VIDEO;

          case "500":
            return a.default.TPL_TYPE.STYLE.MV;

          default:
            return a.default.TPL_TYPE.STYLE.NORMAL;
        }
    },
    isBlessVideo: function(t) {
        return this.tplTypeJudge(t) === a.default.TPL_TYPE.STYLE.SEND_BLESS_FRONT_VIDEO || this.tplTypeJudge(t) === a.default.TPL_TYPE.STYLE.SEND_BLESS_H5_VIDEO || this.tplTypeJudge(t) === a.default.TPL_TYPE.STYLE.SEND_BLESS_NORMAL_VIDEO;
    },
    albumTypeJudge: function(i) {
        var e = i.tpl_id, l = i.album_type;
        return this.isBlessVideo(e) ? a.default.ALBUM_TYPE.SEND_BLESS_VIDEO : this.tplTypeJudge(e) === a.default.TPL_TYPE.STYLE.MV ? a.default.ALBUM_TYPE.MV : l === t.ALBUM_TYPE.ARTICLE ? a.default.ALBUM_TYPE.ARTICLE : l === t.ALBUM_TYPE.SPLICE_VIDEOS ? a.default.ALBUM_TYPE.SPLICE_VIDEOS : a.default.ALBUM_TYPE.NORMAL;
    }
};

module.exports = i;