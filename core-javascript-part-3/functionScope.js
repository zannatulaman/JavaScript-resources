// Global scope
let number = 10;

function giveAvalue(){

}
giveAvalue();
console.log(number);

//function scope

function giveAvalue2 () {
    //  const myName = "Aazeen Islam"
    //  console.log(myName);
}
giveAvalue2();


//block scope 

let globalNumber = 10;

function myFunc () {
    console.log(globalNumber);

    if (globalNumber === 10) {
           const innerNumber = 50;
           console.log('This number is for children', globalNumber);
           console.log(innerNumber);  // this inner number can not be access outside 
        
           if(true) {   
                console.log('This number is for grand children', globalNumber );
           }
        
    }
}

myFunc()


//function declaration
// function myNumber (num1, num2) {
//     return num1 * num2;
// }

// const mulfilyNumber = myNumber(5, 5);
// console.log(mulfilyNumber);


//function expression
// const names = function (name1, name2) {
//     console.log(name1 +"Mujnebin" , " "  + name2 + "Islam");
// }
// names('Aayan', 'Aazeen')




