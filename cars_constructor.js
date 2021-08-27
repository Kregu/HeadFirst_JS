// function Car (make, model, year, color, passengers = 5, convertible = false, mileage = 0){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.passengers = passengers;
//     this.convertible = convertible;
//     this.mileage = mileage;
//     this.started = false;
//
//     this.start = function (){
//         this.started = true;
//     };
//     this.stop = function (){
//         this.started = false;
//     }
//     this.drive = function (){
//         if (this.started){
//             console.log(`${this.make} ${this.model} goes zoom zoom!`);
//         } else {
//             console.log("Start the engine first.");
//         }
//     }
// }

// const chevy = new Car ("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
// const cadi = new Car ("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// const taxi = new Car ("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
// const fiat = new Car ("Fiat", "500", 1957, "Medium blue", 2, false, 88000);
//
// const testCar = new Car ("Webville Motor", "Test car", 2014, "marine", 2, true, 21)

// const cars = [chevy, cadi, taxi, fiat, testCar];
//
// for (let car of cars) {
//     car.start();
//     car.drive();
//     car.drive();
//     car.stop();
// }


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


const cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

const cadi = new Car (cadiParams);
console.log(cadi.color)

cadi.start()
cadi.drive()

