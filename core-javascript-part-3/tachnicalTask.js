//Find the unique elements in an array, removes any duplicates, and classify the unique elements into two arrays: one containing even numbers and the other containing odd numbers.


function findElementsArray(nums) {
    const uniqueSet = new Set(nums);
    const uniqueArray = Array.from(uniqueSet);

    const evenNumbers = uniqueArray.filter(num => num % 2 === 0);
    const oddNumbers = uniqueArray.filter(num =>  num  % 2 !== 0);

    return [evenNumbers, oddNumbers];
}

const uniqueElementsArray = findElementsArray([1, 2, 3, 4, 5, 6]);
console.log("uniqueElementsArray:", uniqueElementsArray);

//Creates a program that calculates the total number of hours from a given number of days, use data-type number

function calculateHours(days) {
    const hoursPerDay = 24;
    const totalHours = days * hoursPerDay;
    return totalHours;
}

// Example usage:
const days = 5;
const totalHours = calculateHours(days);
console.log("Total number of hours:", totalHours);

//Find the largest number from this array[5, 2, 9, 1, 5, 6]

const numbers = [5, 2, 9, 1, 5, 6];
const largestNumber = Math.max(...numbers);

console.log("Largest number:", largestNumber);

//Find the summation from this array elements [1, 2, 3, 4, 5]

const myArray = [1, 2, 3, 4, 5]
let sum = 0
for(let i=0; i<myArray.length; i++){
   sum += myArray[i]
   console.log(sum);
}
console.log(sum);

//Reverse the string "Hello World"
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i>= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const originalStr = "hello world";
const reversedStr = reverseString(originalStr);
console.log(reversedStr);
