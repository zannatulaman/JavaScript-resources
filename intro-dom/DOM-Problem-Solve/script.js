// 1. Changing the Content of an Element
// Problem
// Write a function that changes the text content of a paragraph with the id myParagraph to "Hello, World!".

// 2. Adding a New Element to the DOM
// Problem
// Write a function that adds a new list item to an unordered list with the id myList when a button is clicked.

// 3. Removing an Element from the DOM
// Problem
// Write a function that removes a paragraph with the id removeMe when a button is clicked.

// 4. Changing the Style of an Element
// Problem
// Write a function that changes the background color of a div with the id colorDiv to blue when a button is clicked.

// 5. Handling Form Input
// Problem
// Write a function that displays an alert with the value of an input field with the id myInput when a button is clicked.



const people = {
    name: "Anisur Rahman",
    age: 27,
}

const keys = Object.keys(people)

console.log(keys);


//const people2 = [21, 25, 28, 22]


const numbers = [1, 2 ,3 ,5 , 6] ;


const reducerNumber = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue

} , 5)

console.log(reducerNumber);



