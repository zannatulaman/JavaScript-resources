// for (let i=0; i>=10; i--){
//     console.log(i);
// }

// for (let i=10; i<=100; i+=5){
//     console.log(i);
// }

// let count = 0;
// while(count<10){
//     console.log("count:", count);
//     count++;
// }

// let a = 0;
// do{
//     console.log("count:", a)
//     a++;
// }while(a<10);

const fruits = ["Apple", "banana", "orange"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// const fruits = ["Apple", "Banana", "Orange",]
// console.log(fruits.length);

// for (let i=0; i< fruits.length; i++) {
//     console.log(fruits[i]);
// }

// let count = 0;
// while(count<=10){
//     console.log('count:', count);
//     count++;
// }

let count = 0;
do{
    console.log('count:',count);
    count++;
}while(count<10);

// Write a program that can sum up an array of elements. Array elements are ( 2, 5, 7, 8)

const myArray = [2, 5, 7, 8 ];
let sum = 0;
for(let i=0; i< myArray.length; i++){
    sum+=myArray[i];
}
console.log(sum);