var o = require("../../../common/others/utils");

Component({
    properties: {
        show: Boolean
    },
    data: {},
    methods: {
        onPermissionTap: function(e) {
            (0, o.onPermissionTap)(e);
        }
    }
});