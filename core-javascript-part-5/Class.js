/*class Person{
    sayHello() {
       console.log("Hello, how are u?");
    }
}

const person1 = new Person();
person1.sayHello();*/

//creating class
class Person{
    constructor(firstPerson, SecondPerson){
        this.firstPerson = firstPerson
        this.SecondPerson = SecondPerson
    }
    sayHello(){
        console.log(`${this.firstPerson} say hello to ${this.SecondPerson}`);
    }
}

//creating instances
const person2 = new Person("Aayan", "Aazeen");
person2.sayHello();