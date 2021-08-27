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

const fido =  new Dog("Fido", "Mixed", 38)
const fluffy =  new Dog("Fluffy", "Poodle", 30)
const spot =  new Dog("Spot", "Chihuahua", 10)
const dogs = [fido, fluffy, spot];

for (let dog of dogs){
    let size = "small";
    if (dog.weight > 10) {
        size = "large";
    }
    console.log(`Doq: ${dog.name} is a ${size} ${dog.breed}.`)
    dog.bark()
}

//
// new example
//

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;

    this.getSize = function () {
        let size = "small";
        if (this.ounces == 16){
            size = "large";
        } else if (this.ounces == 12) {
            size = "medium"
        }
        return size
    }
    this.toString = function (){
        console.log(`You've ordered a ${this.getSize()} ${this.roast} coffee.`)
    }
}


const houseBlend = new Coffee("House blend", 8);
houseBlend.toString()
const darkRoast = new Coffee("Dark roast", 16);
darkRoast.toString()
