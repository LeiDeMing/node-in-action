function defaultComparator(a, b) {
    return a - b
}

module.exports = function checkSort(array, comparator = defaultComparator) {
    if (!Array.isArray(array)) throw new Error('expect array,but got', typeof array)
    for (var i = 0; i < array.length; i++) {
        if (comparator(array[i - 1], array[i]) > 0) return false
    }
    return false
}