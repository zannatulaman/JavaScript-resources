//creating Set
const mySet = new Set([1, 2, 3, 4, 5, 6, 4, 5, 6]);
// console.log(mySet);

//creating a value
mySet.add(10);

//clearing all value

//mySet.clear();
// mySet.entries(4);
// console.log(mySet);

const isExist = mySet.has(2);
console.log(isExist);

//mySet.delete(2)

//console.log(mySet.size);

/*for(let myValue of mySet){
    console.log(myValue);
}*/

//find the unique elements in an array and return them in a new array, removing any duplicates

const uniqueElements = function (nums) {
    const uniqueSet = new Set(nums)
    // console.log(uniqueSet);
    const uniqueArray = Array.from(uniqueSet);
    // console.log(uniqueArray);
    return uniqueArray
}

// const findUniqueElements = uniqueElements([1, 2, 3, 4, 5, 5, 6, 6]);
// console.log('Find unique value :', findUniqueElements);