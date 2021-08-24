
const passengers = [
    { name: "Jon", paid: true},
    { name: "Vasya", paid: true},
    { name: "Bill", paid: false},
    { name: "Tom", paid: true},
    { name: "David", paid: true},
]

function processPassenger(passengers, criteria) {
    let result = [];
    for (let i=0; i < passengers.length; i++){
        if (criteria(passengers[i])){
            result.push(passengers[i].name);
        }
    }
    console.log(result);
}

let noPaid = function(data) {
   return !data.paid;
}

let allpassengers = function () {
    return true
}
let namecontain = function (data) {
    return data.name.includes("i")
}

processPassenger(passengers, noPaid)
processPassenger(passengers, allpassengers)
processPassenger(passengers, namecontain)

console.log(noPaid)
