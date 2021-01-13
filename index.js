// Add your functions here
function map(source, callBack){
    let array = []
    for (let i = 0; i < source.length; i++){
        let element = source[i]
        array.push(callBack(element))
    }
    return array
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
}
