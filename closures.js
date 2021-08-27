
function count(){
    let a = 0;
    return () => {console.log(++a)};
}

// d = count();
// d()
// d()
// t = count()
// t()

function makePassword(password) {
    return (checkPassword) => {return checkPassword === password};
}

// const check = makePassword(1234);
// console.log (check(1234))
// console.log(check(234))
// console.log(check(123))

function multN(n){
    return (m) => {return m * n}
}

// multNM = multN(5)
// console.log(multNM(4))

function makeCounter(){
    let count = 1;

    const counter = {
        count,
        increment () {
            console.log(this.count++)
        }
    }
    return counter
}

// count = makeCounter()
// count.increment()
// count.increment()
// count2 = makeCounter()
// count2.increment()

function makeTimer(doneMessage, n) {
    setTimeout(() => console.log(doneMessage), n);
}
// makeTimer('Coocies are done!', 2000)