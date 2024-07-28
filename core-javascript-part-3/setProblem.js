//find the unique elements in an array and return them in a new array, removing any duplicates

function findUniqueElements (nums) {
const uniqueSet = new Set(nums);
//console.log(uniqueSet);
const uniqueArray = Array.from(uniqueSet);
//console.log(uniqueArray);
return uniqueArray
}

const uniqueArrayValues = findUniqueElements([1, 2, 3, 4, 5, 6, 6, 5]);
// console.log('uniqueArrayValues:',uniqueArrayValues);


//Given two arrays, find their intersection
const array1 = [1, 2, 2, 1];
const array2 = [2, 2];
// Output: [2]

function intersection (arr1, arr2) {
set1 = new Set(arr1);
set2 = new Set(arr2);
        let value = []
 for(let element of set1){
      if(set2.has(element)){
            // console.log(`${element}`);
             value.push(element)
           
             
      }
     
 }
 console.log(value);


//    if(set1 && set2.has(2)){ 
//      return Array.from(set1).filter(num => set2.has(num))

//    }else{
//         console.log('There is no value');
//    }
   
  
}
intersection(array1, array2);
// console.log('Intersection', intersection(array1, array2));


const a = [7, 2, 6, 4, 5];
const b = [1, 6, 4, 9]

function union (num1, num2) {
      const set1 = new Set (num1);
      const set2 = new Set (num2);

      console.log(set1);
      console.log(set2);

      const unionSet= new Set([...set1, ...set2]);

      const unionArray = Array.from(unionSet);
      return unionArray
   }

//  console.log('Union:',union(a, b));