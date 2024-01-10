var r = require("../../frameBase/library/normalizr/normalizr.min"), e = new r.Schema("dynamics", {
    idAttribute: "id"
}), i = new r.Schema("dynamics", {
    idAttribute: "profile_id"
});

module.exports = {
    idSchema: (0, r.arrayOf)(e),
    profileIdSchema: (0, r.arrayOf)(i)
};