// Write a program that can find the length of a string, use a function

function stringLength(str){
    const stringwords = str.length;
    return stringwords;
}
const stringSentence = "Thais is a string";
console.log(stringLength(stringSentence));

// Write a program that can print number 10 to 1

// for (let i=10; i>=1; i--){
//     console.log(i)
// }

// Write a program that can print the even numbers from 1 to 100

// for(let i=1; i<=100; i+=2){
//     console.log(i);
// }

// Write a program that can sum up an array of elements. Array elements are ( 2, 5, 7, 8)

// const myArray = [2, 5, 7, 8];
// let sum = 0;
// for(let i=0; i<myArray.length; i++){
//     sum +=myArray[i];
// }
// console.log(sum);

// Split a string into an array of substrings based on a separator, use a function

function splitString(str, separator){
    return str.split(separator);
}
const myString = "This, is, a ,string";
const separator = ",";
console.log(splitString(myString, separator));

// Replace a substring with another substring in a string Use a function
function replaceString(str, oldString, newString){
    return str.replace(oldString, newString);
}
const originalString = "Hello World";
const oldString = "Hello";
const newString = "Hi";
console.log(replaceString(totalText,oldText,newText));


