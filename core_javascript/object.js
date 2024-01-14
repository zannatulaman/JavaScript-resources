const person = {
    firstName: "Ahmed",
    lastName: "Akmal",
    age: 40,
    program:"MERN",
    isStudent: true,
    technologies: ["Html", "Css", "Javascript"]
}

// .notetion
console.log(person.firstName);
console.log(person.program);
// bracket notetion
console.log(person["lastName"]);
console.log(person["technologies"]);

// concatination Ahmed is enroll in MERN program
console.log(person.firstName + " is enroll in " + person.program +" program ");
// bracticnotation
console.log(`${person.firstName} is enroll in ${person.program} program`)

person.city = "New York";
console.log('City is:', person.city)
console.log('person', person)