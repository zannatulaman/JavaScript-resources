class Person{
    constructor(firstName, lastName, topic) {
        this.firstName = firstName
        this.lastName = lastName
        this.topic = topic
    }

    //custom method

    myLearning(){
        console.log(`${this.firstName + " " + this.lastName} is learning ${this.topic}`);

        // console.log(`${this.firstName  +  " "  +  this.lastName} is learning object oriented programming language. `)
    }
}

//creating instance/object
const person1 = new Person("Mickel", "Joe" ,"Object-oriented programmimg language");
//const person2 = new Person("John", "Doe");

person1.myLearning();
//person2.myLearning();



  