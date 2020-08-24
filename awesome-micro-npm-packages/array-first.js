const isNumber = require('./is-number')

module.exports = function arrayFirst(arr, num) {
    if (!Array.isArray(arr)) throw new Error((''))
    if (arr.length === 0)
        return null
    var first = arr.slice(0, isNumber(num) ? +num : 1)
    if (+num === 1 || num === null)
        return first[0]
    return first
}