// function declaration
function myFunction(num1, num2, num3, num4){
    const result = num1 + num2 + num3 +num4 ;
    return result;
}

console.log(myFunction(30, 40, 50, 10));

function addTwonumbers(num1, num2){
    const blockScooped = 500;
    console.log(blockScooped);
    return num1 + num2;
}

let result = addTwonumbers(30,40);
console.log(result);

// function expression
const subtractNumbers = function(num1, num2){
    let result = num1 - num2;
    return result;
}
console.log(subtractNumbers(50, 25));

// array function
let add = (a,b) => a+b;
console.log(add(20,50));

const subtraction = (num1, num2) => num1 - num2;
console.log(subtraction(40,20));