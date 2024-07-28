const num = 10;
//implicit coversion
const numStr = "50";

const result = num + numStr;

console.log(typeof result);

//explicit conversion

const age = "50";
const convertedAge = parseInt(age);
console.log(typeof convertedAge);

const age2 = 40;
const convertedAge2 = age2.toString();
console.log(typeof convertedAge2);

const isExist = false;
console.log(typeof +isExist);

//date concept in javascript

//let now = new Date();
//console.log(now)

let now = new Date();
let date = now.toLocaleDateString();
let time = now.toLocaleTimeString();
// console.log(date + " " + time); // outputs the current date and time in a localized format

const number = "100"
const conVertedNumber = parseFloat(number)
console.log(conVertedNumber);