const myMap = new Map();
myMap.set("name", "Shoaib Hossain");
myMap.set("age", 25);
console.log(myMap);
console.log(myMap.get("name"));
console.log(myMap.has("age"));

myMap.delete("age");
console.log(myMap);

const productPrice = new Map();

productPrice.set("apple", 50);
productPrice.set("orange", 40);
productPrice.set("banana", 30);

const product = "apple";

if(productPrice.has(product)){
    console.log(`The product value is ${productPrice.get("apple")}`);

}else{
    console.log("There is no product");
}

