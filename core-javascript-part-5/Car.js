class Car{
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = 50;
    }

    productBrand(amount) {
        this.speed += amount
        console.log(`${this.brand} released now ${this.model} model in ${this.year}`);
        console.log(`${this.brand} is traveling to ${this.speed} mph`);
    }
    
    doBrake(amount){
         if(this.speed - amount){
           this.speed = this.speed - amount
        }else{
            this.speed = 0;
        }

        console.log(`${this.brand} ${this.model} can be slow down ${this.speed}`);
    }
   

}

const car1 = new Car("Toyota", "Camry", 2024);
     
// car1.productBrand(40);
car1.doBrake(30);