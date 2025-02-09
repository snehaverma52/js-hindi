// const tinderUser = new Object()    //singleton object
 const tinderUser = {} //non-singleton object
 
    tinderUser.id = "1234";
    tinderUser.name = "sneha";
    tinderUser.age = 30;
    tinderUser.location = "up";
    tinderUser.isLoggedIn = true;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: { 
        userfullname:{
            firstname: "sneha",
            lastname: "verma",
        }
      }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 =(obj1, obj2)
const obj4 = Object.assign({},obj1, obj2) //object assign

const obj5 = {...obj1, ...obj2} //spread operator}
console.log(obj4);
console.log(obj5);

const users = [
    {
        id: 1,
        email:"hgjygk"
    },
    {
        id: 2,
        email:"fsfgdgd"
    },
    { 
        id: 7,
        email:"sneha@gmail.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));