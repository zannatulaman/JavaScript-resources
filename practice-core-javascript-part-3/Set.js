const mySet = new Set([1, 2, 3, 4, 5, 6]);
console.log(mySet);


const isExist = mySet.has(2);
console.log(isExist);

console.log(mySet.size);

for(let myvalue of mySet){
    console.log(myvalue);
}


