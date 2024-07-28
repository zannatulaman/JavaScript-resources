const person = {fName: "Junayed Ahmad", role: "Fullstack Developer", age: 30}

const {fName: fullName, role, age} = person;

console.log(fullName, role, age);

const stack = ["ReactJS", "NodeJS", "ReduxJS"]

const [firstFramework,secondFramework, ...restFramework] = stack;

console.log(firstFramework,secondFramework, restFramework );