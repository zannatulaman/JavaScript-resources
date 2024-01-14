// const program = "Mern"
// console.log(program)

const sentence = "I am a full stuck developer"
// console.log(sentence.length)
// console.log(sentence.charAt(13))
console.log(sentence.slice(18))
console.log(sentence.substring(12, 17))

let originalString = "  Hello, this is a simple string with extra spaces.   ";

let trimmedString = originalString.trim();
console.log("Original String: '" + originalString + "'");
console.log("trimmed String:" + trimmedString+ "'");
console.log("length of originalString:" , originalString.length);
console.log("length of new:" , trimmedString.length)


const fiveWords = "This, is, array, string";
console.log(fiveWords.split(","));

const studentName = "Obayedul Qader"
console.log(studentName.toLowerCase())
console.log(studentName.toUpperCase())



