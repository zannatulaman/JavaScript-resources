//Creating class for person

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello(){
        console.log(`${this.firstName} ${this.lastName} told me hello how are you?`);
    }
}

const person2 = new Person ("Aazeen", "Islam")
person2.sayHello();


class Car{
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = 50
        
    }
    
    product(amount){
        this.speed += amount
        console.log(`${this.brand} is now released ${this.model} in ${this.year}`);
        console.log(`${this.brand} is now going on ${this.speed} mph`);
    }

    doBrake(amount){
        if(this.speed - amount > 0){
            this.speed -= amount
        }else{
            this.speed = 0
        }

        console.log(`${this.brand} can be going on ${this.speed} mph`);
    }
}

const car2 = new Car ('Toyota', 'Camry', 2024)
car2.product(40);
car2.doBrake(30);