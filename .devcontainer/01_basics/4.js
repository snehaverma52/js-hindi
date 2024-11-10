console.log(2>1); // true
console.log(2<1); // false

// whenever we compare to different data types, JS will try to convert them to same data type and then compare them

console.log("2" >1);
console.log(null < 1); // true
console.log(null == 0); // false
console.log(null > 0); // false

console.log(null == undefined); // true
console.log(undefined == 0); // false
console.log(undefined < 0); // false

//=== is used to compare the value and the data type
console.log(null === undefined); // false

console.log('2' ===2); // false
