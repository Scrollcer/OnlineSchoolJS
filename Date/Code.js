//Task - write a function difference(from, to)
//Where from - ISO string (example: 2022-02-19T19:14:00)
//and from - ISO string (example: 2022-02-19T19:14:00)
//Returns Difference object with following fields:
//    ms - number, difference between from and to in milliseconds.
//     s - number, difference between from and to in seconds.
//     m - number, difference between from and to in minutes.
//     h - number, difference between from and to in hours.
//     d - number, difference between from and to in days.
//     M - number, difference between from and to in month.
//     y - number, difference between from and to in years.

const MS_IN_A_DAY = 1000 * 60 * 60 * 24
const MS_IN_A_HOUR = 1000 * 60 * 60
const MS_IN_A_MINUTE = 1000 * 60
const MS_IN_A_SECOND = 1000

function difference(from, to) {
    let fromMonth = from.getMonth() + 1
    let toMonth = to.getMonth() + 1
    const fromYear = from.getFullYear()
    const toYear = to.getFullYear()

    if (fromYear - toYear) {
        fromMonth += (12 * (fromYear - toYear))
    }

    from = from.getTime()
    to = to.getTime()
    const object = {
        ms: from - to,
        s: (from - to) / MS_IN_A_SECOND,
        m: (from - to) / MS_IN_A_MINUTE,
        h: (from - to) / MS_IN_A_HOUR,
        d: (from - to) / MS_IN_A_DAY,
        M: fromMonth - toMonth,
        y: fromYear - toYear
    }
    return object
}

const from = new Date('2022-09-19T19:14:00')
const to = new Date('2020-09-19T19:14:00')
console.log(difference(from, to))