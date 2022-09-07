// Task - realise splice method as a user function
const str = "Hello world";

function customSlice(str, begin = str[0], end = str.length) {
    let newStr = "";
    if (begin < 0) {
        begin = str.length + begin
    }
    if (end < 0) {
        end = str.length + end;
    }
    for (let i = begin; i < end; i++) {
        newStr += str[i]
    }
    return newStr;
}

//console.log(customSlice(str, 0, -2));

// Task - Realise method forEach as a function
const data = [2, 3, 4, 5];

function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i)
    }
}

//myForEach(data, myFunc);

function myFunc(item, index, arr) {
    console.log(item);
}

// Task - using forEach modify array, by multiplying sum by 2
const arr = [
    {
        name: "user1",
        sum: 20,
    },
    {
        name: "user2",
        sum: 30,
    },
    {
        name: "user3",
        sum: 40,
    }
]

//console.log(arr.forEach(value => value.sum *= 2))


// Task - using map return array (same arr), with multiplied sum by 2

console.log(arr.map(value => {
    return {
        name: value.name,
        sum: value.sum *= 2
    }
}))

//Task - write a function, which can return min value from array or index of this value (second parameter indicates which to return)
//Examples:
//findSmallest([1,2,3,4,5], 'value') // => 1
//findSmallest([1,2,3,4,5], 'index') // => 0

function findSmallest(arr, str) {
    let minValue = arr[0]
    let minIndex;
    for (let element of arr) {
        if (element < minValue) {
            minValue = element
        }
    }
    if (str.toLowerCase() === 'value') {
        return minValue
    } else if (str.toLowerCase() === 'index') {
        minIndex = arr.indexOf(minValue)
        return minIndex
    } else {
        return undefined
    }
}

//console.log(findSmallest([1, 2, 3, 4, 0], 'index'))

//Task - Find sum in array and define if it is even or not, write result as a string «odd» or «even», if array is empty, then it is even
//Examples:
//odd_or_even([0])          ==  "even"
//odd_or_even([0, 1, 4])    ==  "odd"
//odd_or_even([0, -1, -5])  ==  "even"

function odd_or_even(arr) {
    if (arr.length === 0)
        return "even"
    const sum = arr.reduce((prevValue, currentValue) => {
        currentValue = Number(currentValue)
        return currentValue += Number(prevValue)
    }, 0)
    if (sum % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }

}

//console.log(odd_or_even([0, -1, -5]))

//Task - write function insertDash (num), which will input ('-') between two odd numbers in num (count zero as an even number).
//Example: 454379, turns into 4543-7-9.

function insertDash(num) {
    let result = ""
    num = num.toString()
    const arr = num.split("")
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 === arr.length) {
            result += arr[i]
            break
        }
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
            result += arr[i] + "-"
        } else {
            result += arr[i]
        }
    }
    return result
}

//console.log(insertDash(454379))

//Task - Write your own function that returns index of a specified element of an array or -1 if it doesn't exist

function myFindIndex(array, search) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === search) {
            return i
        }
    }
    return -1
}

console.log(myFindIndex([1, 2, 3, 4, 5], 5))

//Task - use method filter to output list of users whose age is between 20 and 30

const arr2 = [
    {
        name: "Vasya",
        age: 24,
    },
    {
        name: "Ira",
        age: 15,
    },
    {
        name: "Jack",
        age: 35,
    },
    {
        name: "Ivan",
        age: 22,
    },
    {
        name: "Maya",
        age: 40,
    },
    {
        name: "Igor",
        age: 29,
    },
]


console.log(arr2.filter((value) => {
    return (value.age >= 20 && value.age <= 30)
}))