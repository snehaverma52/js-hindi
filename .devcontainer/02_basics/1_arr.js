

const myArr = [221,11,22,33,42,50]
const myHeros = ["hello", "world", "how", "are", "you"]

const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[1]);

myArr.push(6)
myArr.push(8)
myArr.push(56)
myArr.pop()

myArr.unshift(5)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// ++++++++++++++++   slice, splice ++++++++++++++++

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);