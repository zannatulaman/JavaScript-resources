const greet = (name ="Mujnebin") => {
    console.log(`Hello, ${name}`);
}
greet("Aazeen");

const calculateArea = (width = 6, height= 5) => {
    return width * height;
}

console.log(calculateArea());
console.log(calculateArea(5, 8));

const createName = (firstName ="Tanjina", lastName = getLastName()) => {
   return `${firstName} ${lastName}`
}

const getLastName = () =>{
    return "Sultana";
}

console.log(createName());
console.log(createName("Osmane", "Dialle"));