//find the vowel characters from this array this array

const array4 = ['w', 'e', 'm', 'p', 'a', 'u']
const vowels = ['a', 'e', 'i', 'o', 'u']

function findVowel (arr) {
            let volChar = []
       for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
            //  console.log(element);

            if(vowels.includes(element)){
                // console.log(`${element}`);
                // volChar.push(element)
                volChar = [...volChar, element]
              
            }
       }
         return volChar;
}

const vowelArray = findVowel(array4);
console.log(vowelArray);

//find even numbers from this array

const array = [1, 2, 3, 4, 5, 6]

function evenNumbers (nums) {
                let even = []
          for (let index = 0; index < nums.length; index++) {
            const element = nums[index];
                  if(element % 2 === 0){
                       even.push(element)
                    
                  }
          }
        //   console.log(even);
        return even
}
const findEvenNumbers = evenNumbers(array);
console.log(findEvenNumbers);