const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
countries.forEach(function (country, index, arr) {
  console.log(index, country.toUpperCase())
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
numbers.forEach((n) => sum += n)

console.log(sum) // 15

const newCountries = countries.map((country) => country.toUpperCase())
console.log(newCountries)

const countriesWithLand = countries.filter((country) => !country.includes('land'))
console.log(countriesWithLand)

const sumNum = numbers.reduce((acc, cur) => acc + cur,10)
console.log(sumNum)

console.log(numbers.some((n) => n % 2 !== 0))
console.log('All numbers are even:',numbers.every((n) => n % 2 === 0 ))
const evenNums = [2,4,6,8,10]
console.log('All numbers are even:',evenNums.every((n) => n % 2 === 0 ))

// Excercises
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

products.forEach((product) => console.log(`The price of ${product.product} is ${product.price} euros.`))
let productSum = 0
products.forEach((prod) => {
    if (typeof prod.price !== 'string')
    productSum += prod.price
})
console.log(productSum)

const prices = products.map((prod) => prod.price)
console.log(prices)

const sumPrices = products
                    .map(prod => prod.price)
                    .filter(price => typeof price !== 'string')
                    .reduce((acc, cur) => acc + cur)
console.log(sumPrices)

const firstNullPrice = products.find(prod => typeof prod.price === 'string')
console.log(firstNullPrice)
console.log(products.some(prod => typeof prod.price === 'string'))
console.log(products.every(prod => typeof prod.price !== 'string'))