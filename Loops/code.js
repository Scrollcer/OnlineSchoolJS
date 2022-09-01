//From now on I will use "prompt" to get user input data from html page
//Task - Get user's info in following order:
//1) Year of birth (only number more than 1900 but less than current year)
//2) Month of birth (only number min: 1, max: 12)
//3) Day of birth (only number min: 1, max: from the month table)
//4) Name (min: 1, max: 20)
//5) Surname (min: 1, max: 30)
//In case of incorrect input, repeat input
//After finishing program, ask user if he wants to repeat

const CURRENT_YEAR = 2022
const min_year = 1900
let useryear, usermonth, userday, username, usersurname, symbol
let choice

do{
    let leapyear = false
    do{
        useryear = Number(prompt("Please, enter your year of birth (it must be higher than 1900 but less than current year)."))
    }while(useryear < min_year || useryear > CURRENT_YEAR || isNaN(useryear) === true)
    const age = CURRENT_YEAR - useryear
    if(useryear % 400 === 0){
        leapyear = true
    }
    else if (useryear % 100 === 0 && useryear % 4 === 0){
        leapyear = true
    }
    do{
        usermonth = Number(prompt("Please, enter your month of birth (it must be higher than 0 but less than 12)."))
    }while(usermonth < 1 || usermonth > 12 || isNaN(usermonth) === true)
    do{
        check = true
        userday = Number(prompt("Please, enter your day of birth (it must be higher than 0 but less than max day of your birth month)."))

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
        else{
            check = false
        }
        if(usermonth === 1 && userday > 31){check = false}
        else if ((usermonth === 2 && userday > 28 && leapyear === false) || (usermonth === 2 && userday > 29 && leapyear === true)){check = false}
        else if(usermonth === 3 && userday > 31){check = false}
        else if(usermonth === 4 && userday > 30){check = false}
        else if(usermonth === 5 && userday > 31){check = false}
        else if(usermonth === 6 && userday > 30){check = false}
        else if(usermonth === 7 && userday > 31){check = false}
        else if(usermonth === 8 && userday > 31){check = false}
        else if(usermonth === 9 && userday > 30){check = false}
        else if(usermonth === 10 && userday > 31){check = false}
        else if(usermonth === 11 && userday > 30){check = false}
        else if(usermonth === 12 && userday > 31){check = false}
    }while(check === false)

    do{
        username = prompt("Please, enter your name (it must contain at least one symbol, but no more than 20 symbols).")
    }while(username.length < 1 || username.length > 20)

    do{
        usersurname = prompt("Please, enter your surname (it must contain at least one symbol, but no more than 30 symbols).")
    }while(usersurname.length < 1 || usersurname.length > 30)


    if(leapyear){
        console.log("User Bio: " + username + " " + usersurname + ", " + age + " years old (leap year), " + symbol)
    }
    else{
        console.log("User Bio: " + username + " " + usersurname + ", " + age + " years old, " + symbol)
    }
    do{
        choice = Number(prompt("Input 1 if you want to repeat or 0 if you want to exit."))
    }while((choice!== 0) && (choice!==1))

} while(choice !== 0)

