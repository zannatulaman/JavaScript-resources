//function expression == traditional functions

function multify(a, b){
    return a * b
}
console.log(multify(5, 5));

//arrow function 

const add = (a, b) => {
    return a + b
}
console.log(add(5, 5));
//implicit arrow function

const add2 = (a, b) => a + b;
console.log(add2(20, 10));

const sayHello = () => {
    console.log("Hello, how are you?")
};
sayHello();   

//can not implicit arrow
const subtract = (a, b) => {
    const subtractNumbers = a - b;
    return subtractNumbers;
}

console.log(subtract(20, 3));
