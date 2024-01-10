var t = Object.assign || function(t) {
    for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    }
    return t;
};

Component({
    properties: {},
    data: {
        actionSheet: {
            show: !1,
            options: null
        },
        modal: {
            show: !1,
            options: null
        },
        toast: {
            show: !1,
            options: null
        },
        tooltip: {
            show: !1,
            options: null
        }
    },
    attached: function() {
        var o = this;
        this.callbacks = {
            actionSheet: {},
            modal: {}
        }, this.callbackId = -1;
        var a = getCurrentPages(), n = a[a.length - 1];
        Object.assign(n, {
            __xng__: {
                getCallback: function(t, a) {
                    return o.callbacks[a][t];
                },
                showActionSheet: function(t) {
                    var a = t.actions, n = t.groups;
                    a ? o.recordCallbacks(a, "actionSheet") : n.forEach(function(t) {
                        o.recordCallbacks(t.actions, "actionSheet");
                    }), o.setData({
                        actionSheet: {
                            show: !0,
                            options: t
                        }
                    }, function() {
                        o.triggerEvent("onActionSheetShow");
                    });
                },
                hideActionSheet: function() {
                    o.setData({
                        actionSheet: {
                            show: !1,
                            options: null
                        }
                    }, function() {
                        o.callbacks = t({}, o.callbacks, {
                            actionSheet: {}
                        }), o.triggerEvent("onActionSheetHide");
                    });
                },
                showModal: function(t) {
                    var a = t.btns || [];
                    o.recordCallbacks(a, "modal"), o.setData({
                        modal: {
                            show: !0,
                            options: t
                        }
                    }, function() {
                        o.triggerEvent("onModalShow");
                    });
                },
                hideModal: function() {
                    o.setData({
                        modal: {
                            show: !1,
                            options: null
                        }
                    }, function() {
                        o.callbacks = t({}, o.callbacks, {
                            modal: {}
                        }), o.triggerEvent("onModalHide");
                    });
                },
                showToast: function(t) {
                    o.setData({
                        toast: {
                            show: !0,
                            options: t
                        }
                    });
                },
                hideToast: function() {
                    o.setData({
                        toast: {
                            show: !1,
                            options: null
                        }
                    });
                },
                showTooltip: function(t) {
                    var a = o.data.tooltip, n = a.show, s = a.options;
                    if (n) {
                        var i = s.id, e = s.text;
                        i === t.id && e === t.text || o.setData({
                            tooltip: {
                                show: !1,
                                options: null
                            }
                        }, function() {
                            o.setData({
                                tooltip: {
                                    show: !0,
                                    options: t
                                }
                            });
                        });
                    } else o.setData({
                        tooltip: {
                            show: !0,
                            options: t
                        }
                    });
                },
                hideTooltip: function() {
                    o.setData({
                        tooltip: {
                            show: !1,
                            options: null
                        }
                    });
                }
            }
        });
    },
    methods: {
        recordCallbacks: function(t, o) {
            var a = this;
            t.forEach(function(t) {
                t.onTap && (a.callbackId += 1, a.callbacks[o][a.callbackId] = t.onTap, Object.assign(t, {
                    onTap: a.callbackId
                }));
            });
        }
    }
});