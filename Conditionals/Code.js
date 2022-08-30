/* Task - Get user's name, surname, day, month, year of birth. Get Astrological Zodiac symbol name of user, and also
* count if user was born in leap year or not.  */

const CURRENTYEAR = 2022
const name = "Denis", surname = "Lazarev", day = Number(19), month = Number(7), year = Number(2000)
const age = CURRENTYEAR - year
let leapyear = false
let symbol

if(year % 400 === 0){
    leapyear = true
}
else if (year % 100 === 0 && year % 4 === 0){
    leapyear = true
}

if ((month === 1  && day > 19) || (month === 2  && day < 19) ){
    symbol = "Aquarius ♒"
}
else if ((month === 2  && day > 18) || (month === 3  && day < 21) ){
    symbol = "Pisces ♓"
}
else if ((month === 3  && day > 20) || (month === 4  && day < 20) ){
    symbol = "Aries ♈"
}
else if ((month === 4  && day > 19) || (month === 5  && day < 21) ){
    symbol = "Taurus ♉"
}
else if ((month === 5  && day > 20) || (month === 6  && day < 21) ){
    symbol = "Gemini ♊"
}
else if ((month === 6  && day > 20) || (month === 7  && day < 23) ){
    symbol = "Cancer ♋"
}
else if ((month === 7  && day > 22) || (month === 8  && day < 23) ){
    symbol = "Leo ♊"
}
else if ((month === 8  && day > 22) || (month === 9  && day < 23) ){
    symbol = "Virgo ♍"
}
else if ((month === 9  && day > 22) || (month === 10  && day < 23) ){
    symbol = "Libra ♎"
}
else if ((month === 10  && day > 22) || (month === 11  && day < 22) ){
    symbol = "Scorpio ♏"
}
else if ((month === 11  && day > 21) || (month === 12  && day < 22) ){
    symbol = "Sagittarius ♐"
}
else if ((month === 12  && day > 21) || (month === 1  && day < 20) ){
    symbol = "Capricorn ♑"
}

if(leapyear){
    console.log("User Bio: " + name + " " + surname + ", " + age + " years old (leap year), " + symbol)
}
else{
    console.log("User Bio: " + name + " " + surname + ", " + age + " years old, " + symbol)
}
