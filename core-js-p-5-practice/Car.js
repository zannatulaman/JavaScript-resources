class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    accelarator(amount){
        this.speed  += amount
        console.log(`${this.brand} is now traveling to ${this.speed} mph`);
    }

    doBrake(amount) {
        if(this.speed - amount >=0){
           this.speed -= amount
        }else{
           this.speed = 0
        }

        console.log(`${this.brand} is now traveling to ${this.speed} mph`);
    }
}

const car1 = new Car("Ferrari");
car1.accelarator(60);
car1.doBrake(10)