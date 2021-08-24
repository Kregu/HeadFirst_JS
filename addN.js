function addN(n) {
    const adder = function (x) {
        return n + x;
    };
    return adder
}

let a = addN(3)

console.log(a(1))
console.log(a(1))
