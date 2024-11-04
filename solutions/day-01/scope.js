//scope.js
a = 'JavaScript' // is a window scope this found anywhere
b = 10 // this is a window scope variable
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
// console.log(a, b) // accessible

//scope.js
let c = 'JavaScript' // is a global scope it will be found anywhere in this file
let d = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(c, d) // JavaScript 10, accessible
  if (true) {
    let c = 'Python'
    let d = 100
    console.log(c, d) // Python 100
  }
  console.log(c, d)
}
letsLearnScope()
console.log(c, d) // JavaScript 10, accessible

function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  }

if (true) {
var gravity = 10.81
console.log(gravity) // 9.81
}
console.log(gravity) // 9.81
  