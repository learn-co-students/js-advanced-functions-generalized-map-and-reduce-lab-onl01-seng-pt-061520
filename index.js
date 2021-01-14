// Add your functions here
function map (sourceArray, functionOne){
    let r = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        r.push(functionOne(sourceArray[i]))
    }
    return r
}

function reduce (sourceArray, functionOne, startingValue){
    let result = (!!startingValue) ? startingValue : sourceArray[0]
    let i = (!!startingValue) ? 0 : 1
  
    for (; i < sourceArray.length; i++) {
      result = functionOne(sourceArray[i], result)
    }
  
    return result;
}
