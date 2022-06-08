// Add answers here 

// 1 question Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be 
nameOfCity('New York') //➞ 'New York' var city = 'New York'
nameOfCity('newark') //➞ 'newark'
nameOfCity('London') //➞ 'The city name does not begin with Los or New'
function nameOfCity(city) {
  if (city.startsWith('Los') || city.startsWith('New')) {
    return city
  } else {
    return 'The city name does not begin with Los or New'
  }
}
console.log(nameOfCity('New York'))
console.log(nameOfCity('newark'))
console.log(nameOfCity('London'))

//2. question isDivisible?
// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.


isDivisible(1) //➞ false
isDivisible(1000) //➞ true
isDivisible(100) //➞ true
function isDivisible(num) {
    if (num % 100 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isDivisible(1))
console.log(isDivisible(1000))
console.log(isDivisible(100))

//4. question What's the weather?
//Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

isRaining(true) //➞ 'wet day - you need an umbrella'
function isRaining(text) {
    return text ? 'wet day - you need an umbrella' : 'dry day - leave your umbrella at home'
}
console.log(isRaining(true))
console.log(isRaining(false))



// 1. question Sequence
// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.


geometricalSequence() //➞ '1 2 4 8 16 32 64 128 256'
function geometricalSequence() {
    let result = ''
    for (let i = 1; i <= 256; i *= 2) { 
        result += i + ' '
    }
    return result
} 
console.log(geometricalSequence())


//2. question Multiples
// Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.


multiplesOfThree() // ➞ '3 6 9 12 15'
function multiplesOfThree() {
    let result = ''
    for (let i = 3; i <= 15; i += 3) {
        result += i + ' '
    }
    return result
}

console.log(multiplesOfThree())


// Math 

// 1. question You've got the power
// Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

powerOf(3) //➞ 27
powerOf(4) //➞ 256

function powerOf(num) {
    return Math.pow(num, num)
}
console.log(powerOf(3))
console.log(powerOf(4))



// Problem Solving 

// 1. question How many? 
// Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 

vowelCount("hello") // ➞ 2
vowelCount("test") // ➞ 1
vowelCount("fbw") // ➞ 0

function vowelCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count
}
console.log(vowelCount("hello"))
console.log(vowelCount("test"))
console.log(vowelCount("fbw"))




// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

