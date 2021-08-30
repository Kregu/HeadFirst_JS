function Dog(name, breed, weight){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

function ShowDog(name, breed, weight, handler){
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function (){
    console.log("Stack");
}
ShowDog.prototype.bait = function (){
    console.log("Bait");
}

ShowDog.prototype.gait = function (kind){
    console.log(kind + "ing");
}

ShowDog.prototype.groom = function (){
    console.log("Groom");
}

Dog.prototype.species = "Canin";
Dog.prototype.sitting = false;

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

Dog.prototype.sit = function () {
    if (this.sitting){ // здесь свойство берется из прототипа
        console.log(this.name + " is already sitting.")
    } else {
        this.sitting = true; // в этом месте свойство переопределяется в объекте
        console.log(this.name + " is now sitting.")
    }
}

const fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog){
    console.log("Fido is a Dog")
};
if (fido instanceof ShowDog){
    console.log("Fido is a ShowDog")
}

const scotty = new ShowDog("Scotty", "Scottich Terrier", 15, "Cookie");
if (scotty instanceof Dog){
    console.log("Scotty is a Dog")
};
if (scotty instanceof ShowDog){
    console.log("Scotty is a ShowDog")
}

console.log("Fifo constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);


//
// const fido = new Dog("Fido", "Mixed", 38);
// const fluffy = new Dog("Fluffy","Mixed", 30);
// const spot = new Dog("Spot", "Chihuahua", 10);

// spot.bark = function (){
//     console.log(this.name + " says Wof!")
// }

// const barnaby = new Dog("Barnaby", "Basset Hound", 55);
//
//
// console.log(barnaby)
// barnaby.sit()
// console.log(barnaby);
// barnaby.sit()
// fido.sit()

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



