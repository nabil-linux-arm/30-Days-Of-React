let count = 0
// do {
//   console.log(count)
//   count++
// } while (count < 11)
const numbers = [1,2,3,4,5]
// for (const number of numbers) {
//     console.log(number)
// }

// numbers.forEach((i) => {
//     console.log(i)
// })

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }