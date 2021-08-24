

const products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function printProducts(products) {
    for (let i = 0; i < products.length; i ++) {
        console.log(`Name: ${products[i].name}, Calories: ${products[i].calories}, Color: ${products[i].color}, Sold: ${products[i].sold}`)
    }
    console.log(`${"=".repeat(60)}`)
}

function compareSold(product1, product2) {
    if (product1.sold > product2.sold) {
        return 1
    } else if (product1.sold < product2.sold) {
        return -1
    }
    return 0
}
function compareName(product1, product2) {
    if (product1.name > product2.name) {
        return 1
    } else if (product1.name < product2.name) {
        return -1
    }
    return 0
}
function compareCalories(product1, product2) {
    if (product1.calories > product2.calories) {
        return 1
    } else if (product1.calories < product2.calories) {
        return -1
    }
    return 0
}
function compareColor(product1, product2) {
    if (product1.color > product2.color) {
        return 1
    } else if (product1.color < product2.color) {
        return -1
    }
    return 0
}



products.sort(compareName)
console.log("Products sorted by Name:")
printProducts(products)
products.sort(compareCalories)
console.log("Products sorted by Calories:")
printProducts(products)
products.sort(compareColor)
console.log("Products sorted by Color:")
printProducts(products)
products.sort(compareSold)
console.log("Products sorted by Sold:")
printProducts(products)
