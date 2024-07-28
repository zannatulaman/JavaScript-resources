//Find the largest number from this array[5, 2, 9, 1, 5, 6]
// largestNumbers = Math.max(...arrayNumbers);
// console.log("The largest number", largestNumbers);

function arrayElements (arr) {

    let largestNumbers = 0;

    for(let i=0; i<arrayNumbers.length; i++){

        // console.log(arrayNumbers.length);

        if(arr[i] > largestNumbers){

            largestNumbers = arr[i]
        }
    }

    return largestNumbers

}
const arrayNumbers = [5, 2, 9, 1, 5, 6]
const findLargestNumbersarrayElements = arrayElements(arrayNumbers);
console.log("Largest number :" ,findLargestNumbersarrayElements);

//Find the avarage number from this string number


const number = ["5", "5", "5"]

const  avarageNumber = number.reduce((accu, curr) => 
      parseInt(accu) + parseInt(curr)
,0)

console.log(avarageNumber / number.length);



//     let total = 0;
//     for (let i of number) {
//        total+= parseInt(i)



//     }
//     let avarage = total / number.length
//     console.log("Total", total);
//     console.log('Avarage', avarage);


   



    // Problem 1: Finding Even or Odd

    // You need to write a function called EvenOdd() which takes a string as input.
    
    // Task: Based on the total number of characters in the string, you need to output either 'Even' or 'Odd'.
    
    // Sample Input & Output:
    
    // Input: 'Ts4u' Output: Even Input: 'ILoveJS' Output: Odd Input: 'Chatgpt' Output: Odd

    
    
    function evenOdd (string) {
          
        const strings = string.length

        // const inputString = strings  % 2 ===0 ? "Even" : "Odd"
        // return inputString;

        if(strings % 2 === 0) {
            return "Even";
        }else{
            return "Odd";
        }

    }
    
    // console.log(evenOdd("Ts4u"));
    // console.log(evenOdd("ILoveJS"));
    // console.log(evenOdd("Chatgpt")); 


// Problem 2: Let's Play A Mind Game Rules:

// You will be given a function called MindGame() that takes a positive number as input.

// Your task:

// Multiply the input number by 3. Then add 10. Then divide by 2. Finally, subtract 5. Return the result. Sample Input & Output:

// Input: 5

// Output: 7.5

// Input: 50

// Output: 75

// Input: 33

// Output: 49.5


// function mindGame (num) {
//      let result = (num * 3 + 10) /2 -5; // using bodmas mathmatical method
//         // result  += 10;
//         // result  /= 2;
//         // result  -= 5  
//         return result
        
// }
// console.log(mindGame(5));
// console.log(mindGame(50));
// console.log(mindGame(33));

    


   





