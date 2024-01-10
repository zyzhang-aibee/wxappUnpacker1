var n = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("../../../common/actions/index")), o = [];

Component({
    properties: {},
    data: {},
    pageLifetimes: {
        hide: function() {
            this.onSendFormId();
        }
    },
    methods: {
        handleCollectFormId: function(n) {
            var o = n.detail.formId;
            this.onFormIdTap(o);
        },
        onFormIdTap: function(n) {
            o.push(n), o.length >= 20 && this.onSendFormId();
        },
        onSendFormId: function() {
            0 !== o.length && (wx.xngGlobal.dispatch(n.default.acSendFormIds({
                ids: o
            })), o = []);
        }
    }
});