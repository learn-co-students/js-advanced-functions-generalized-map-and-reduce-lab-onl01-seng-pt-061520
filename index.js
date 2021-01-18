// Add your functions here
function map(array, func){
    let newArr = []
    for(let i in array){
        newArr.push(func(array[i]))
    }
    return newArr 
}

function reduce(array, func, startVal){
    let total = (!!startVal) ? startVal : array[0]
    let num = (!!startVal) ? 0 : 1

    for(; num < array.length; num++){
        total = func(array[num], total)
    }
    return total
}