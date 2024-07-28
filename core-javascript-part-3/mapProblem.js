const productPrice = new Map();

productPrice.set("apple", 50);
productPrice.set("orange", 40);
productPrice.set("banana", 30);



// const product = "orange";

if(productPrice.has("apple")){
    console.log(`The product value is ${productPrice.get("apple")};`);

}else{
    console.log("There is no product");
}