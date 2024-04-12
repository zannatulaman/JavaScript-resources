class Car{
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = 20;
    }

    productBrand(amount) {
        this.speed += amount
        console.log(`${this.brand} released new ${this.model} model in ${this.year}`);
        console.log(`${this.brand} is traveling to ${this.speed} mph`);
    }
    
    doBrake(amount){
         if(this.speed - amount >= 0){
           this.speed -= amount
        }else{
            this.speed = 0;
        }

        console.log(`${this.brand} ${this.model} can be slow down ${this.speed}`);
    }
   

}

const car1 = new Car("Toyota", "Camry", 2024);
     
car1.productBrand(40);
car1.doBrake(40);