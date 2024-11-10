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

//  ************************ OPERATIONS ************************

let value = 23
let negValue = -value
console.log(negValue) // -23

console.log(3 + 3) // 6
console.log(3 - 3) // 0
console.log(3 * 3) // 9
console.log(3 / 3) // 1
console.log(3 % 3) // 0
console.log(3 ** 3) // 27


let str1 = "sneha"
let str2 = "verma"

let str3 = str1 + " " + str2
console.log(str3) // snehaverma

console.log( "3" + 3) // 63
console.log(3 + "3") // 33
console.log("9" - "3") // 0
console.log("9" * "3") // 27
console.log( "3" + 2 + 2) // 3
console.log( 2 + 2 + "3") // 43

console.log( true);
console.log( +true); // 1


let a,b,c
a= b =c = 3+5

let gameCounter = 100
gameCounter--
console.log(gameCounter) // 99 