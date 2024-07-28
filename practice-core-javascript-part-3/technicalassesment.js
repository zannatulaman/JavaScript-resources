//find the length of a string

const string = "We learn javascript";
const lengthString = string.length
console.log(lengthString);

//how to concat two strings 

function string2 (str, str2) {
        return str +  " "  + str2
}

const hello = "Hello";
const world = "World"

console.log(string2(hello, world));

//how to convert a string 

const numbers = [3, 8, 12, 5, 7, 10, 4, 6];
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
    evenCount++;
    }
    
}
console.log("Even Count:", evenCount);

//find the specific elements of an array

const array = ["Apple", "Banana", "Orange"];

const target = "Banana";

let index = -1

for(let i=0; i<array.length; i ++){
    console.log(array[i]);
    if(array[i] === target){
        index = i;
        break
    }
}
console.log('Index of',target + ":" , index);

