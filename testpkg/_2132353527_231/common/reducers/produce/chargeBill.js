function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s = e(require("../../../frameBase/library/seamless-immutable/index")), n = e(require("../../const/actionType")), a = (0, 
s.default)({
    userCoins: "",
    tplCoins: "",
    blanceCoins: "",
    coinsExTable: []
});

exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a, s = arguments[1];
    switch (s.type) {
      case n.default.COINS_BILL + "_SUC":
        return e.merge({
            userCoins: s.response.data.user_coins,
            tplCoins: s.response.data.tpl_coins,
            blanceCoins: s.response.data.balance_coins,
            coinsExTable: s.response.data.coins_ex_table
        });

      default:
        return e;
    }
};