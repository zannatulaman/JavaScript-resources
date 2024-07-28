// const myMap = new Map();
// myMap.set("name", "shoaib Hossain");
// myMap.set("age", 26);

// console.log(myMap);



// console.log(myMap.get("name"));
// console.log(myMap.get("age"));

// console.log(myMap.has("age"));

// myMap.delete("age");
// console.log(myMap);


const myMap = new Map();

myMap.set("Brand" , "Toyota");
myMap.set("Model", "Camry");
myMap.set("Speed", "100mph");


console.log(myMap.get("Brand"));
console.log(myMap.get("Model"));
console.log(myMap.get("Speed"));

const product = "Brand";

if(myMap.has(product)) {
    console.log(`The car name is ${(myMap.get(product))}`);

}else{
    console.log('There is no car');
}


// console.log(myMap.size);
// const isTrue = myMap.has("Speed");
// console.log(isTrue);

// myMap.delete("Speed");
// console.log(myMap);



