var r = require("./arrayUniq.js");

module.exports = function() {
    return r([].concat.apply([], arguments));
};