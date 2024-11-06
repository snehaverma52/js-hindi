let score = "23"
// let score = 23 
// let score = "23acdshs" 
// let score = "23.23" // 23.23
// let score = undefined // NaN
// let score = null // 0
// let score = true // 1
// let score = "sneha" // NaN
console.log(typeof score) // number

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // 23

// NaN => Not a Number

let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = "sneha" // NaN

// 1 => true ; 0 => false
// "" => false ;
//  "sneha" => true
// null => false
// undefined => false
// NaN => false
// Infinity => true

 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn) // true

 let someNumber = 23
 let someString = String(someNumber)
 console.log(someString) // "23"
 console.log(typeof someString) // string
 

