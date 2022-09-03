//Task - check email for validity
function isEmailValid (mail) {
    const reg = /^[\w._-]+@\w{2,6}\.\w+$/i
    return reg.test(mail)
}

const mail1 = "check@sdf.ru"
const mail2 = "incorrectemail.ru"
const mail3 = "correct-email@mail.ru"

console.log(isEmailValid(mail1))
console.log(isEmailValid(mail2))
console.log(isEmailValid(mail3))

// Task - get Russian phone numbers from text and output them on the screen

const text = `I am just writing some text in order to get some phone numbers, oh look, here is the first one - +79823621956, looks like
    it is a valid number, let's try wrong one 9991000011918. Now after those two let's write correct again, but in different form89193512223.
    Okay, now I will write the last incorrect phone number, I promise +7982362676999999999999`

function findPhones(str) {
    const findData = str.match(/(\+7|8)\d{10}(?!\d)/g)
    console.log(findData)
}
findPhones(text)

// Task - get all bank card numbers in text

const text2 = `Well, now it is time to search for bank card numbers, such as: 4441-3333-4444-5555.
But they also can be written as 5375 2222 3333 4444, not to be misinterpreted with single 3344 number, and another correct option 5375222233334444. 
Now lets write incorrect bank card number: 53752222333, it mustn't be included into output list.`

function findCard(str) {
    const findData = str.match(/(\d{4}[ -]?){3}(\d{4})/g);
    console.log(findData)
}
findCard(text2);

// Task - get dates from text

const text3 = `Let's imagine that we have a newspaper article, it must have at least on date - date when it was published,
 such as 12-12-2012, but in special cases it can look like this 12 December 2012, we must take this variant to output too.
 Another example is 01.07.2020 or, maybe, 14 06 2021.`


function findDates(str) {
    const findData = str.match(/(0[1-9]|[12][0-9]|3[01])[- \.](\w+|0[1-9]|1[0-2])[- \.](\d{4})(?!\d)/ig);
    console.log(findData)
}
findDates(text3);