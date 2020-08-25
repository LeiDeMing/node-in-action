module.exports = function dedupe(arr, hasher) {
    hasher = hasher || JSON.stringify

    const clone = []
    const lookup = {}

    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i]
        let hashed = hasher(elem)

        if (!lookup[hashed]) {
            clone.push(elem)
            lookup[hashed] = true
        }
    }
    return 
}