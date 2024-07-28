// Function Declaration
function addfournumbers(num1, num2, num3, num4){
    const blockscoped = 500;
    const result = num1 + num2 + num3 + num4
    // console.log(blockscoped)
    return result;
    
}


// Function Calling
// console.log(addfournumbers(50, 50, 50, 50))

// Function Expression

const substrations = function(num1, num2){
    let result = num1 - num2;
    return result;
}
// console.log(substrations(80, 30));

// count the number of vowel in a string
function vowelNumbers (str){
    // console.log(num);
    const vowels = ['a', 'e', 'i', 'o', 'u']
           let vowelCount = 0
           const lowerStr = str.toLowerCase()
        //    console.log(lowerStr);

           for(let char of lowerStr){
                // console.log(char);
                if(vowels.includes(char)){
                    vowelCount++
                }

           }
          return vowelCount;
    }
const string = "Hello world"
const findVowelNumbers = vowelNumbers(string);
// console.log(findVowelNumbers);


//calculate the factorical of a number using while loop

function factorial(num) {
    if(num=== 0){
      return 1
    }
    let count = 1
    let result = 1

    while(count <= 5){
        // console.log('Count', count);
        result *=count
        count++
    }
   return result
}

console.log(factorial(5));
console.log(factorial(0));