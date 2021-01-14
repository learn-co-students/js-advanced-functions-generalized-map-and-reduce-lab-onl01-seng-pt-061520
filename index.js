function map(array, fn) {
    let r = []
    for (let i = 0; i < array.length; i++) {
        r.push(fn(array[i]));
    }
    return r
}

function reduce(array, fn, start) {
    let result = (!!start) ? start : array[0];
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
        result = fn(array[i], result)
    }
    return result
}