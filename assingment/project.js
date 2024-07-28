// Write a program that can find the length of a string, use a function
// Write a program that can print number 10 to 1
// Write a program that can print the even numbers from 1 to 100
// Write a program that can sum up an array of elements. Array elements are ( 2, 5, 7, 8)
// Split a string into an array of substrings based on a separator, use a function
// Replace a substring with another substring in a string Use a function

function stringWords() {
    const myString = "We are mern stuck developer";
    console.log(myString.length);
}

// call the function
stringWords();

// for(let i=10; i>0; i--){
//     console.log(i);
// }

// for(let i=0; i<= 100; i+=1){
//     console.log(i);
// }

const numbers = [2, 5, 7, 8,];
// console.log(numbers.length);

function addedNumbers(){
    const result= 2 + 5 + 7 + 8;
    console.log(result);
    return result;
}

addedNumbers();

// const splitString = "I have an umbrella"
// console.log(splitString.split());

// function arrayString(){

// }

function splitString(inputString, separator) {
    return inputString.split(separator);
}

const stringWithSeparator = "apple,orange,banana";
console.log(stringWithSeparator.split());
function splitString(){

}
// const separator = ",";
// console.log("6. Split string into an array:", splitString(stringWithSeparator, separator));

