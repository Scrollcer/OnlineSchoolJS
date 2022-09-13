//Task - We have an object with some data (warehouse)
//Make this object iterable, by adding [Symbol.iterator]() method, which realizes following logic:
//Every iteration in for..of cycle must return array with 2 elements:
//1) Name of each category
//2) Total sum of all objects in the category

const warehouse = {
    gadgets: [
        {id: 1, title: "Apple IPad Pro", price: 2000},
        {id: 2, title: "Lenovo IdeaPad", price: 1000},
    ],
    sport: [
        {id: 1, title: "Fitness PRO", price: 500},
        {id: 2, title: "Nike x200", price: 400},
        {id: 3, title: "Ball", price: 100},
    ],
    kids: [
        {id: 1, title: "Lego Builder", price: 100},
        {id: 2, title: "Pokemon X", price: 200},
    ],
    [Symbol.iterator]() {
        const keys = Object.keys(this)
        const obj = this
        let i = -1
        return {
            next() {
                ++i
                let sum = 0
                for (let underKey in obj[keys[i]]) {
                    sum += obj[keys[i]][underKey].price
                }
                return {
                    value: [keys[i], sum],
                    done: i >= keys.length
                }
            }
        }
    }
}

for (const iterator of warehouse) {
    console.log(iterator[0]) // gadgets ... sports ... kids
    console.log(iterator[1]) // 3000 ... 1000 ... 300
}

//Spread operator adds into array a pair of values:
//1) Name of each category
//2) Total sum of all objects in the category
const categories = [...warehouse]; // [['gadgets', 3000], ['sport', 1000], ['kids', 300]]
console.log(categories)