var t = {
    _stack: [],
    _getStackLength: function() {
        return this._stack.length;
    },
    _getStackTop: function() {
        var t = this._getStackLength();
        return t ? this._stack[t - 1] : null;
    },
    clear: function() {
        this._stack = [];
    },
    push: function(t) {
        this._stack.push(t);
    },
    pop: function() {
        return this._stack.pop();
    },
    go: function(t) {
        this.push(t), wx.redirectTo({
            url: t
        });
    },
    back: function(t) {
        this.pop();
        var c = this._getStackTop();
        c ? wx.redirectTo({
            url: c
        }) : wx.navigateBack();
    }
};

module.exports = t;