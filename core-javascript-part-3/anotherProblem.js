
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.


// Example 1:

// Input: millis = 100 Output: 100 Explanation: It should return a promise that resolves after 100ms. let t = Date.now(); sleep(100).then(() => { console.log(Date.now() - t); // 100 }); Example 2:

// Input: millis = 200 Output: 200 Explanation: It should return a promise that resolves after 200ms.

// Constraints:

// 1 <= millis <= 1000  




// Write a function that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 


// function numbers () {
//     for(let i=1; i<=100; i++){
//         // console.log(i);
//         if(i%3===0 && i%5===0){
//                 console.log("FizzBuzz");
//         }else if(i%3===0){
//                 console.log('Fizz');
//         }else if(i%5===0){
//             console.log('Buzz');
//         }else{
//             // console.log(i);
//         }
//     }
// }

// numbers()


// Check for Vowel

// Write a function that takes a character as an argument and returns true if the character is a vowel and false otherwise. 

// function vowelFunc (char){
    
//       const vowel = ['a', 'e', 'i', 'o', 'u']

//     if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//         console.log('The character is vowel');
       

//     }else{
//         console.log('The character is not vowel');
       
//     }
       
// }
// vowelFunc('u')

//Find the unique elements in an array, removes any duplicates, and classify the unique elements into two arrays: one containing even numbers and the other containing odd numbers.

const array = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];

// function findUniqueElements (nums) {
      
//     const uniqueSet = new Set(nums);
//     // console.log(uniqueSet);

//     const uniqueArray = Array.from(uniqueSet)
//     // console.log(uniqueArray);

//     const evenNumbers = uniqueArray.filter(num => num % 2 === 0)
//     const oddNumbers = uniqueArray.filter(num => num % 2 !== 0)

//     return [evenNumbers, oddNumbers]

// }

// const twoArray = findUniqueElements(array);
// console.log(twoArray);


//Creates a program that calculates the total number of hours from a given number of days, use data-type number


function numberOfHours (nums) {
    
    const totalNumber = nums * days
    // console.log(total);
      return totalNumber
   
}
const days = 5
const totalNumberOfHours = numberOfHours(24);
console.log('Total number of hours', totalNumberOfHours);

//Find the largest number from this array[5, 2, 9, 1, 5, 6]

const array2 = [5, 2, 9, 1, 5, 6]

function largestNumber (nums) {
   
     console.log(array2.length);

    // for(let i=0; i<nums.length; i++){

    //     console.log(nums[i]);

    //     if(array2[i] > nums.length){
    //         return(array2[i]);
    //     }
    //}

    const largestNum = array2.filter((num, i, arr) => ((array2[i] >array2.length)))
    return(largestNum);

}
const findLargestNumber = largestNumber(array2);
console.log('Largest number', findLargestNumber.join(""));


//Find the summation from this array elements //Find the summation from this array elements [1, 2, 3, 4, 5]

const array3 = [1, 2, 3, 4, 5]

function summation (array3) {
      
    // console.log(array3);

    let sum = 0

    // for(let i=0; i<array3.length; i++){
    //   // console.log(array3[i]);
    //    sum += array3[i]
    //   //  console.log(sum);
    // }
   
    // console.log(sum);

    // array3.filter((num, i, arr) => sum += array3[i])
    // console.log(sum);

    for(let i= array3.length -1; i>=0; i--){
        // console.log(array3[i]);
        sum+= array3[i]
        // console.log(sum);
    }
    console.log(sum);
}
// summation(array3)

//Reverse the string "Hello World"

const originalStr = "hello world";

function originalString () {
    let  reversestr = ""
    
    for (let i= originalStr.length -1; i>=0; i--){
            // console.log(originalStr.length);
            reversestr += originalStr[i]
           
    }
    console.log(reversestr);
}
originalString()

//find the avarage number 

const numbers = [5, 2, 9, 4, 7, 1, 8];

  const findAvarage = (num) => {
        let sum = 0
        
        for (let index = 0; index < num.length; index++) {
            const element = num[index];
                sum +=element
        }
        // console.log(sum);
        const avarage = Math.round(sum/num.length); 
        // console.log(avarage);
        return avarage
  }
  
  const avarageNumber = findAvarage(numbers);
  console.log('Avarage number', avarageNumber);


  // default parameter
  function greet (name = "Ab") {
      console.log(name);
  }
  // greet()

function createName (firstName = "Aazeen", lastName= getLastName()) {
      return `${firstName}, ${lastName}`
}

function getLastName () {
  return "Islam"
}
// console.log(createName());
// console.log(createName("Aayan" , "Mujnebin"));

//destructuring

const person = {name: "Zannatul", age: 25 , role: "Mern"}

const {role: subject} = person

// console.log(subject);

//find the character vowel 

const vowel =  ["b", "a", "m", "d", "e", "i"]

const getVolChar  = (char) => {
    // console.log(char);
      const vowels = ["a", "e", "i", "o", "u"]
      const volChar = char.filter((num) => vowels.find((num2) => num==num2))
      return (volChar);

    
}
const findVolChar = getVolChar(vowel)
console.log(findVolChar);


