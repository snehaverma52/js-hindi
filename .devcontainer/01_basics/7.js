// +++++++++++++=== NUMBERS ===++++++++++++++

const score = 100
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.6345

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++ MATHS ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(1,2,3,4,5,6));
// console.log(Math.max(1,2,3,4,5,6));
// console.log(Math.sqrt(1,2,3,4,5,6));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1))+min)
// node .\.devcontainer\01_basics\7.js 