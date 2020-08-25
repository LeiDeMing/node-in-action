module.exports = function (arr = [], val) {
    var len = arr.length;
    var i;
    for (i = 0; i < len; i++) {
        if (Object.is(arr[i], val))
            return true
    }
    return false
}