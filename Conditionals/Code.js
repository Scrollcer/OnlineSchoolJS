/* Task - Get user's name, surname, day, month, year of birth. Get Astrological Zodiac symbol name of user, and also
* count if user was born in leap year or not.  */

const CURRENTYEAR = 2022
const name = "Sergei", surname = "Lazarev", userday = Number(19), usermonth = Number(7), year = Number(1998)
const age = CURRENTYEAR - year
let leapyear = false
let symbol

if(year % 400 === 0){
    leapyear = true
}
else if (year % 100 === 0 && year % 4 === 0){
    leapyear = true
}

if ((usermonth === 1  && userday > 19) || (usermonth === 2  && userday < 19) ){
    symbol = "Aquarius ♒"
}
else if ((usermonth === 2  && userday > 18) || (usermonth === 3  && userday < 21) ){
    symbol = "Pisces ♓"
}
else if ((usermonth === 3  && userday > 20) || (usermonth === 4  && userday < 20) ){
    symbol = "Aries ♈"
}
else if ((usermonth === 4  && userday > 19) || (usermonth === 5  && userday < 21) ){
    symbol = "Taurus ♉"
}
else if ((usermonth === 5  && userday > 20) || (usermonth === 6  && userday < 21) ){
    symbol = "Gemini ♊"
}
else if ((usermonth === 6  && userday > 20) || (usermonth === 7  && userday < 23) ){
    symbol = "Cancer ♋"
}
else if ((usermonth === 7  && userday > 22) || (usermonth === 8  && userday < 23) ){
    symbol = "Leo ♊"
}
else if ((usermonth === 8  && userday > 22) || (usermonth === 9  && userday < 23) ){
    symbol = "Virgo ♍"
}
else if ((usermonth === 9  && userday > 22) || (usermonth === 10  && userday < 23) ){
    symbol = "Libra ♎"
}
else if ((usermonth === 10  && userday > 22) || (usermonth === 11  && userday < 22) ){
    symbol = "Scorpio ♏"
}
else if ((usermonth === 11  && userday > 21) || (usermonth === 12  && userday < 22) ){
    symbol = "Sagittarius ♐"
}
else if ((usermonth === 12  && userday > 21) || (usermonth === 1  && userday < 20) ){
    symbol = "Capricorn ♑"
}

if(leapyear){
    console.log("User Bio: " + name + " " + surname + ", " + age + " years old (leap year), " + symbol)
}
else{
    console.log("User Bio: " + name + " " + surname + ", " + age + " years old, " + symbol)
}
