// syntax

// for(let intialization; condition; increment/ discrement ) {
    //   code to be  executed
// }

// for(let i=1; i<=10; i++) {
//     console.log(i);
// }

// for(let i=10; i<66; i++) {
//    console.log(i);
// }


// for(let i=10; i>5; i -= 2) {
//     console.log(i);
// }

const fruits = ["Apple", "Banana", "Orange",]
// console.log(fruits.length);

// const countFruits = fruits.map((num, i, array) => {
//       return num;
// })
// console.log(countFruits);


// for (let i=fruits.length-1; i>=0; i--) {
//     console.log(fruits[i]);
// }
// console.log(fruits);

// let count = 0;
// while(count<=10){
//     console.log('count:', count);
//     count++
// }


// let count2 = 10;
// while(count2<56) {
//     console.log("count:", count2);
//     count2++
// } 

// let count = 10;
// while(count<=55) {
//     console.log("count:", count);
//     count++
// }


//problem solving using for loop

function sumEvenNumbers(num) {
    //  console.log(num);
         let sum = 0
     for (let index = 0; index <=num; index+= 2) {
        //    console.log(index);
            sum = sum + index
     }
    //  console.log(sum);
}
sumEvenNumbers(10); // Output: 30 (2 + 4 + 6 + 8 + 10)
sumEvenNumbers(15); // Output: 56 (2 + 4 + 6 + 8 + 10 + 12 + 14)

//problem solving using while loop
// Calculate the factorical of a number using while loop
function factorial(n) {
    if(n===0){
       return 1
    }

    let product =1
    let count =1
    while(count<= n){
            //  console.log('Count', count);
             product = product* count
             count++
    }
      return product;
}
// console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // Output: 1 (by definition, factorial of 0 is 1)


function sumOfDigits(n) {
    let sum = 0
    let count2 = n

    while(count2 > 0){
        // console.log('Counter', count2);
        sum += count2 % 10
        count2 = Math.floor(count2 / 10)
        count2++
    }
      return sum;
}

console.log(sumOfDigits(1234)); // Output: 10 (1 + 2 + 3 + 4)
console.log(sumOfDigits(567));  // Output: 18 (5 + 6 + 7)
console.log(sumOfDigits(0));    // Output: 0 (since there are no digits to sum)


// count the number of vowel in a string
function vowelNumbers (str){
    // console.log(num);
    const vowels = ['a', 'e', 'i', 'o', 'u']
           let vowelCount = 0
           const lowerStr = str.toLowerCase()
           console.log(lowerStr);

           for(let char of lowerStr){
                if(vowels.includes(char)){
                    vowelCount++
                }

           }
          return vowelCount;
    }
const string = "Hello world"
const findVowelNumbers = vowelNumbers(string);
console.log(findVowelNumbers);