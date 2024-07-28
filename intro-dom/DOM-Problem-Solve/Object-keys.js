const car = {
    name : "Toyota",
    brand : "Camry",
    speed : "100mvh"
}

const keys3 = car.brand
console.log(keys3);

const keys2 = "speed"
console.log(car[keys2]);

const user = {
    firstName : "Alice",
    lastName : "Bob",
}

//const propertyName = "Alice"
console.log(user["firstName"]);

const keys = Object.keys(car);
console.log(keys);