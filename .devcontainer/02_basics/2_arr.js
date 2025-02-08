
const marvel = ["thor", "ironman", "captain america", "black widow", "hulk"];
const dc =["batman", "flasher", "superman"]
marvel.push(dc);

// console.log(marvel);
// console.log(marvel [3][2]);

const hero = marvel.concat(dc)
console.log(hero);

const all_new_heros = [...dc, ...marvel]
console.log(all_new_heros);

const newArr = [1,2,3, [4,5,6], 7, [2,5,6,[3,7,8]]]
const realArr = newArr.flat(Infinity)

console.log(Array.isArray("hello"));
console.log(Array.from("hello"))
console.log(Array.from({name: "world",})); // it will not work

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
