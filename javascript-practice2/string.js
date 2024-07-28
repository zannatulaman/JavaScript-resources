const program = "Mern";
console.log(program.length);

const fullSentence = "We are the students of MERN"
// console.log(fullSentence.trim())
// console.log(fullSentence.substring(3,7));
// console.log(fullSentence.charAt(3));
console.log(fullSentence.slice(2, 4));
// console.log(fullSentence.toLowerCase());
// console.log(fullSentence.toUpperCase());

let originalString = "  This is a string with extra spaces  "
let trimmedString = originalString.trim();
console.log("Original string: " + originalString + "");
console.log("Trimmed string: " + trimmedString + "");
console.log("Length of original: ", originalString.length);
console.log("Length of trimmed: ", trimmedString.length);

const fruits = "apple, banana, orange";
console.log(fruits.split(","))
