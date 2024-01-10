Object.values || (Object.values = function(e) {
    if (e !== Object(e)) throw new TypeError("Object.values called on a non-object");
    var t = [];
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(e[r]);
    return t;
});