// Let us access the arguments object
function sumAllNums() {
    console.log(arguments.length)
}

sumAllNums(1, 2, 3, 4,5)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

const sumMeNums = (...james) => {
    console.log(james)
}
sumMeNums(1,2,3,4,5,6,7)

let squaredNum = (function (n) {
    return n * n
  })(2)
  
console.log(squaredNum)

const callback = (n) => {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))