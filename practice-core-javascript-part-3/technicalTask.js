//Find the unique elements in an array, removes any duplicates, and classify the unique elements into two arrays: one containing even numbers and the other containing odd numbers.

function findArrayElements (nums){
    const uniqueSet = new Set(nums);
    //console.log(uniqueSet);
    const uniqueArry = Array.from(uniqueSet);
    const evenNumbers = uniqueArry.filter(num => num % 2 === 0);
    const oddNumbers = uniqueArry.filter(num => num % 2  !== 0 );
    return [evenNumbers, oddNumbers];

    
}
const uniqueArrayElements = findArrayElements([1, 2, 3, 4, 5, 6]);
console.log("uniqueArrayElements", uniqueArrayElements);

//Creates a program that calculates the total number of hours from a given number of days, use data-type number

function calculatesHours (days) {
    const hoursPerDay = 24;
    const totalHours = days* hoursPerDay;
    return totalHours;
}
const days = 5;
const totalHours = calculatesHours(days);
console.log(totalHours);

//Find the largest number from this array[5, 2, 9, 1, 5, 6]

const arrayNumbers = [5, 2, 9, 1, 5, 6]
// largestNumbers = Math.max(...arrayNumbers);
// console.log("The largest number", largestNumbers);





//Find the summation from this array elements [1, 2, 3, 4, 5]

const myArray = [1, 2, 3, 4, 5]
let sum = 0
for(let i=0; i<myArray.length; i++){
    sum += myArray[i];
}
console.log(sum);

//Reverse the string "Hello World"

function reverseString(originalStr){
    let reverseStr = "";
    for(let i=  originalStr.length -1; i>=0; i--){
        reverseStr+= originalStr[i]
    }
    return reverseStr;
}

const originalStr = "Hello World";
const reverseStr = reverseString(originalStr);
console.log("Reverse String" , reverseStr);