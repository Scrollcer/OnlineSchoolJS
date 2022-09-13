//First task - create generator of leap years, beginning from 1900 until pointed year (current year is default)

function* leapYears(year = 2022) {
    for (let i = 1900; i <= year; i += 4) {
        yield i;
    }
}

const leapYear = leapYears(2001);

console.log(leapYear.next()); // {value: 1904, done: false}
console.log(leapYear.next()); // {value: 1908, done: false}
console.log(leapYear.next()); // {value: 1912, done: false}
console.log(leapYear.next()); // {value: 2000, done: true}
console.log('-----------------------------------------------------------------------------')

//Second task - create counter - generator with dynamic interval. Starting value - 0, interval - 1

function* counter() {
    let currentValue = 1
    let nextValue
    for (let i = 0; ; i += currentValue) {
        nextValue = yield i;
        if (nextValue) currentValue = nextValue
    }
}

const count = counter();

console.log(count.next()); // {value: 0, done: false}
console.log(count.next()); // {value: 1, done: false}
console.log(count.next(10)); // {value: 11, done: false}
console.log(count.next()); // {value: 21, done: false}
console.log(count.next()); // {value: 31, done: false}
console.log(count.next(100)); // {value: 131, done: false}
console.log('-----------------------------------------------------------------------------')

//Third task - create generator of even numbers

const even = evens();

function* evens() {
    for (let i = 2; ; i += 2) {
        yield i
    }
}

console.log(even.next()); // {value: 2, done: false}
console.log(even.next()); // {value: 4, done: false}
console.log(even.next()); // {value: 6, done: false}
console.log('-----------------------------------------------------------------------------')

//Fourth task - create generator of random even numbers sequences. Size of sequence is between 1 and 20 elements

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function* randomEvens() {
    while (true) {
        let result = []
        let size = getRandomInt(1, 20)
        for (let i = 0; i <= size; i++) {
            let number = getRandomInt(1, 10)
            if (number % 2 !== 0) {
                i--
                continue
            }
            result.push(number)
        }
        yield result
    }
}

const evenArr = randomEvens();

console.log(evenArr.next()); // {value: [2, 4, 6], done: false}
console.log(evenArr.next()); // {value: [2, 4, 6, 8, 10], done: false}
console.log(evenArr.next()); // {value: [2], done: false}