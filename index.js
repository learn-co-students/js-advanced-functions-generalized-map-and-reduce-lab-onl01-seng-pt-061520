// Add your functions here

//Your implementation should expect a source array and a function. All the tests will pass an Array and a block.
function map(array, func) {
    const x = []
    
    for (const i in array) {
      x.push(func(array[i]))
    }
  
    return x
  }
 
  //Your implementation should expect a source array and optionally a starting value. All the tests will pass an Array and (sometimes) a starting point.
  function reduce(array, func, starting) {
    let t = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
  
    for(; i < array.length; i++) {
      t = func(array[i], t)
    }
  
    return t
  }