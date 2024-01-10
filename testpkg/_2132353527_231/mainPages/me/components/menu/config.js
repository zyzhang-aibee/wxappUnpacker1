Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../../../config/config"), o = [ {
    id: "albumList",
    title: "影集",
    icon: e.resourceDomain + "/img/me/my_album.png",
    count: 0,
    topCount: 0,
    url: "../../pages/me/albumListPage/albumListPage",
    hidden: !1
}, {
    title: "收藏",
    icon: e.resourceDomain + "/img/me/my_favorite.png",
    count: 0,
    topCount: 0,
    url: "../../pages/me/favoriteListPage/favoriteListPage",
    hidden: !1
}, {
    title: "照片",
    icon: e.resourceDomain + "/img/me/my_photo.png",
    count: 0,
    topCount: 0,
    url: "../../pages/me/photoListPage/photoListPage?for=manage",
    hidden: !1
}, {
    title: "音乐",
    icon: e.resourceDomain + "/img/me/my_music.png",
    count: 0,
    topCount: 0,
    url: "../../pages/music/musicPage/musicPage?from=home",
    hidden: !1
}, {
    title: "打赏",
    icon: e.resourceDomain + "/img/me/my_donation.png",
    count: 0,
    topCount: 0,
    url: "../../pages/me/donationPage/donationPage",
    hidden: !1
}, {
    title: "消息",
    icon: e.resourceDomain + "/img/me/my_message.png",
    count: 0,
    topCount: 0,
    url: "../../pages/me/messagePage/messagePage",
    hidden: !1
}, {
    title: "客服",
    name: "contact",
    icon: e.resourceDomain + "/img/me/my_contact.png",
    count: 0,
    topCount: 0,
    url: "",
    hidden: !1
}, {
    title: "更多",
    icon: e.resourceDomain + "/img/me/my_more.png",
    count: 0,
    topCount: 0,
    url: "../../pages/me/morePage/morePage",
    hidden: !1
} ];

exports.default = o;