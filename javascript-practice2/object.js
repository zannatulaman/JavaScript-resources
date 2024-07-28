const person = {
    firstName: "Ahmed",
    lastName:  "Akmal",
    age: 30,
    isStudent:true,
    program: "MERN",
    technologies: ["Html", "CSS", "JavaScript"],

}
// .notetion
console.log(person.firstName);
console.log(person.lastName);

// bracketnotetion
console.log(person["age"]);

// concatination
// Ahmed is enroll in MERN
console.log(person.firstName + " is enroll in " + person.program);
console.log(`${person.firstName} is enroll in ${person.program}`);

person.city = "Newyork"
console.log(person.city);
console.log(person)