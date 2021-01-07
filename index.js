// Add your functions here
function map(array, func) {
  const sol = []

  for (const i in array) {
    sol.push(func(array[i]))
  }

  return sol
}

function reduce(array, func, starting) {
  let r = (!!starting) ? starting : array[0]
  let i = (!!starting) ? 0 : 1

  for(; i < array.length; i++) {
    r = func(array[i], r)
  }

  return r
}