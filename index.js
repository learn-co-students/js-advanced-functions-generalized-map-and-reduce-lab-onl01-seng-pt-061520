// Add your functions here
function map(sourceArray, funaction) {
    return sourceArray.map(funaction)
}

function reduce(sourceArray, funaction, startingValue) {
    if (startingValue) {
        return sourceArray.reduce(funaction, startingValue)
    }
    else {
        return sourceArray.reduce(funaction)
    }
}   
   






