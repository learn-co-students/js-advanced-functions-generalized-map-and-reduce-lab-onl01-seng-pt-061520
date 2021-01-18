function map(array, func) {
    const x = []
  
    for (const i in array) {
      x.push(func(array[i]))
    }
  
    return x
}
  
function reduce(array, func, starting) {
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
  
    for(; i < array.length; i++) {
      r = func(array[i], r)
    }
  
    return r
}