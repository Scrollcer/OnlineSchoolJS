//Task - create empty array entries = []
//Using prompt fill array with any entries, repeat until user press Cancel
//Using entries fulfill following tasks:
//1) Find all NUMBERS in array and count their sum (you can't break chain of methods!)
//2) Find all non-number STRINGS and sort them by length from bigger to smaller, reformat string to the following format [length]: string,
//output list of all strings to console, every entry must be in new line (you can't break chain of methods!)

const entries = []
while (true) {
    const entry = prompt("Please, enter new value")
    if (entry === null) {
        break
    }
    entries.push(entry)
}

//copy = entries.slice()
result1 = entries.filter((value) => {
    return !isNaN(value)
}).reduce((prevValue, currentValue) => {
    currentValue = Number(currentValue)
    return currentValue += Number(prevValue)
}, 0)


console.log(result1)

entries.filter((value) => {
    return isNaN(value)
}).sort((a, b) => {
    return b.length - a.length
}).map((value) => {
    return value = `${value.length}: ${value}`
}).forEach((value) => console.log(value))

