// reverse string 

const string  = "Hello world from new york"

// const sliceStr = string.slice(0, -13);
// console.log(sliceStr);

const reverseString = (str) => {
      // console.log(str);
         let reversestr = 0
      for(let i = str.length - 1; i>=0; i--){
            reversestr = reversestr + str[i]
           
      }
      return reversestr;
}
const findReverseString  = reverseString(string);
console.log('Reverse String', findReverseString);

//find summation

const array = [2, 3, 4, 5, 4, 8]

function summation(arr) {
      let sum = 0
      for(let i=0; i < arr.length; i++){ 
            // console.log(arr[i]);
           sum = sum + arr[i]
      }

      return sum;
}
const findSummation = summation(array)
console.log("Summation",findSummation);

//find largest value from this array

const array2 = [3, 6, 2, 56, 32, 5, 89, 32]

// const largestNumber = Math.max(...array2);
// console.log(largestNumber);

function largestNumber(arr){
           let largest = 0
      for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            // console.log(element);

            if(element> largest){
                  largest = element
                  // console.log(largest);
            }
            // console.log(largest);
      }

      return largest;
}
const findLargestNumber = largestNumber(array2);
console.log('Largest Number', findLargestNumber);

//find the smallest value from this array 

  const array3 = [2, 4, 5, 6, 8]
//   const smallArr = Math.min(...array3)
//   console.log(smallArr);
    
            let smallest = array3[0]
            for (let index = 1; index < array3.length; index++) {
            const element = array3[index];
            // console.log(element);
                if(element < smallest){
                  smallest = element 
                  // console.log(`${element}`);
                }
      }
      console.log('Small number', smallest);
     
//find the vowel characters from this array this array

 const array4 = ['w', 'e', 'm', 'p', 'c']
 const vowels = ['a', 'e', 'i', 'o', 'u']
 function vowelChar (char) {
            let volChar = []
      for (let index = 0; index < char.length; index++) {
            const element = char[index];
            console.log(element);
            if(vowels.includes(element)){
                  // console.log(`${element}`); 
                  volChar.push(element) 
                  // volChar = [...volChar, element]
            }      
      }
     return volChar
 }
   const result = vowelChar(array4);
   console.log(result);

//do a function where is time you will get a value from 1 to 6

// const numbers = [1, 2, 3, 4, 5, 6]
const randomNumbers = Math.random() * 7;
// console.log(randomNumbers);
const findRandomNumber = Math.floor(randomNumbers)
console.log(findRandomNumber);

