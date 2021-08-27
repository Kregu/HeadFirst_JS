function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canin";

Dog.prototype.bark = function (){
    if (this.weight > 25){
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function (){
    console.log("Run!");
};
Dog.prototype.wag = function (){
    console.log("Wag!");
};

const fido = new Dog("Fido", "Mixed", 38);
const fluffy = new Dog("Fluffy","Mixed", 30);
const spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function (){
    console.log(this.name + " says Wof!")
}

const barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sit = function () {
    console.log(this.name + " is now sitting.")
}

barnaby.sit()
fido.sit()

// fido.bark()
// fido.run()
// fido.wag()
//
// fluffy.bark()
// fluffy.run()
// fluffy.wag()
//
// spot.bark()
// spot.run()
// spot.wag()



