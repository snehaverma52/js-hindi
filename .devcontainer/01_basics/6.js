const name ="snehs"
const repoCount = 50

console.log(`My name is ${name} and I have ${repoCount} repositories on GitHub`);

const myName = new String ("sneha_verma ji")

console.log(myName[2]);
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf("e"));

const newString = myName.substring(0,4)
console.log(newString);

const anotherString = myName.slice(-3,4)
console.log(anotherString);

const newStringOne = "     snehaa "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace("%20",'_'))

url.includes('sneha') ? console.log("Yes") : console.log("No")
console.log (url.includes('hitesh'))

console.log(myName.split(" -"));