function Car (params){
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = params.false;

    this.start = function (){
        this.started = true;
    };
    this.stop = function (){
        this.started = false;
    }
    this.drive = function (){
        if (this.started){
            console.log(`${this.make} ${this.model} goes zoom zoom!`);
        } else {
            console.log("Start the engine first.");
        }
    }
}

function Dog (name, breed, weight) {
    this.name = name;
    this.breed =  breed;
    this.weight = weight;

    this.bark = function () {
        if (weight > 25) {
            console.log(this.name + " says Woof!");
        } else {
            console.log(this.name + " says Yip!");
        }
    };
}

const limoParams = {
    make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120
};

const limo = new Car (limoParams);
const limoDog = new Dog("Rhapsody in Blue", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limo);
console.log(limoDog instanceof Car);




