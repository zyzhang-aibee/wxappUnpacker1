var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../common/others/utils"));

Component({
    properties: {
        authorizeData: {
            type: Object,
            value: {
                hidden: !0
            },
            observer: "handleAuthorizeData"
        }
    },
    data: {
        authorizeData: {
            hidden: !0
        }
    },
    methods: {
        handleAuthorizeData: function(e) {
            this.setData({
                authorizeData: e
            });
        },
        onPermissionTap: function(t) {
            e.default.onPermissionTap(t);
        }
    }
});