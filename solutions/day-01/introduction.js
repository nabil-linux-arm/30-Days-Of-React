console.log('Welcome to External Javascript')
console.log(webTechs)
console.log(countries)

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let words =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

words = words.replace(/[,.]/g, '')
words = words.split(' ')
console.log(words)
console.log(words.length)

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
console.log(webTechs)

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

// Execercise: Level 3
// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - 
// Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) 
//- Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) 
// - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(`min: ${ages[0]}`, `max: ${ages[ages.length - 1]}`) 
console.log(`median: ${ages[ages.length/2]}`)
let average = 0
for (var i = 0; i < ages.length; i++) {
    average += ages[i]
}
average = average / ages.length

console.log(countries.slice(0,10))
console.log(countries[parseInt(countries.length / 2)])
console.log(countries.slice(0,parseInt(countries.length / 2)))