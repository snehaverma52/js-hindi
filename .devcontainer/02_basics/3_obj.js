// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "sneha","full name":"sneha verma",
    [mySym]:"mykey1",
    age: 30,
    email: 'john@example',
    location : "up",
    isLoggedIn: true,
    lastLogin: new Date(),
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

console.log(JsUser.email)
console.log(JsUser.location)
console.log(JsUser["full name"])
console.log(JsUser[mySym])
JsUser.greet()

// JsUser.email = "john@example"
// Object.freeze(JsUser);
// JsUser.email = "ffjf@email.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log(`Hello, my name is sneha ki hal thouda`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);

JsUser.greetingTwo = function () {
    console.log(`Hello, my name is ${this.name}`);
}

console.log(JsUser.greetingTwo());