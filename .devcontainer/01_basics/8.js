// DATES

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreatedDate = new Date(2025,0,23)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreateDate = new Date(2025,0,2,4,5)
console.log(myCreateDate);
console.log(myCreateDate.toLocaleString());

let myCreatdDate = new Date("01-13-2024")
console.log(myCreatdDate.toLocaleString());

// ++++++++++++++ time  +++++++++++

// let myTimeStamp = new Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

// `${newDate.getDay ()}and the time `

newDate.toLocaleString('default', { 
    weekday:"long",
    timeZone: "UTC"
})