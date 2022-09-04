//Task - create global array USERS = [].
//Compile script until user will not stop it (confirm() before finishing)
//Create variable OPERATION. Make a request of index operation from user (only numbers, that are available in ALLOWED_OPERATIONS
//Menu will look like this:
//1) Finish program [OPERATION === 0]
//2) Add value to USERS [OPERATION === 1]
//3) Delete value from users (with index) [OPERATION === 2]
//4) Show all values from USERS in console [OPERATION === 3]
//If user pressed CANCEL - output to console message: "Buy, Buy! See you later!" and finish script
//Make switch with cases for every operation:
//EXIT operation - output to console "Buy, Buy! See you later!" and finish script
//ADD operation - make array users for this operation,
//instead of variables year, yearType, month, ... in presented order save each entered value with index into user array
//where indexes are: [0] - year [1] - yearType, [2] - month, [3] - day, [4] - firstName, [5] - lastName, [6] - zodiac, [7] - age.
//save array user into array USERS and finish integration
//DELETE value through index - if array USERS is empty - make a message into console and finish integration
//else - find index of deletable value, and delete it with information, such as "User: Bob Williams deleted successfully in console"
//also show information about number of remaining values in array, such as "There are 2 users more in the archive" and finish integration
//SHOW_ALL operation - show all values in console, if USERS is empty - make a message about that in console
//For each value in USERS make a message in console with such information: User [index]: Bob Williams, 22 years old (is leap year), Scorpio ♏ and finish integration

const USERS = []
const CURRENT_YEAR = 2022
const min_year = 1900

function main() {
    let operation
    while (true) {
        console.log(`Main menu, please enter one of the following values:
                     0-Finish program
                     1-Add value to array
                     2-Delete value from array (requires to enter index)
                     3-Show all current values in array
                    `)
        operation = Number(prompt("Enter your choice: "))
        switch (operation) {
            case 0:
                console.log("Buy, Buy! See you later!")
                return
            case 1:
                const users = []
                users[1] = false
                do {
                    users[0] = Number(prompt("Please, enter your year of birth (it must be higher than 1900 but less than current year)."))
                } while (users[0] < min_year || users[0] > CURRENT_YEAR || isNaN(users[0]) === true)
                if (users[0] % 400 === 0) {
                    users[1] = true
                } else if (users[0] % 100 === 0 && users[0] % 4 === 0) {
                    users[1] = true
                }
                do {
                    users[2] = Number(prompt("Please, enter your month of birth (it must be higher than 0 but less than 12)."))
                } while (users[2] < 1 || users[2] > 12 || isNaN(users[2]) === true)
                do {
                    check = true
                    users[3] = Number(prompt("Please, enter your day of birth (it must be higher than 0 but less than max day of your birth month)."))

                    if ((users[2] === 1 && users[3] > 19) || (users[2] === 2 && users[3] < 19)) {
                        users[6] = "Aquarius ♒"
                    } else if ((users[2] === 2 && users[3] > 18) || (users[2] === 3 && users[3] < 21)) {
                        users[6] = "Pisces ♓"
                    } else if ((users[2] === 3 && users[3] > 20) || (users[2] === 4 && users[3] < 20)) {
                        users[6] = "Aries ♈"
                    } else if ((users[2] === 4 && users[3] > 19) || (users[2] === 5 && users[3] < 21)) {
                        users[6] = "Taurus ♉"
                    } else if ((users[2] === 5 && users[3] > 20) || (users[2] === 6 && users[3] < 21)) {
                        users[6] = "Gemini ♊"
                    } else if ((users[2] === 6 && users[3] > 20) || (users[2] === 7 && users[3] < 23)) {
                        users[6] = "Cancer ♋"
                    } else if ((users[2] === 7 && users[3] > 22) || (users[2] === 8 && users[3] < 23)) {
                        users[6] = "Leo ♊"
                    } else if ((users[2] === 8 && users[3] > 22) || (users[2] === 9 && users[3] < 23)) {
                        users[6] = "Virgo ♍"
                    } else if ((users[2] === 9 && users[3] > 22) || (users[2] === 10 && users[3] < 23)) {
                        users[6] = "Libra ♎"
                    } else if ((users[2] === 10 && users[3] > 22) || (users[2] === 11 && users[3] < 22)) {
                        users[6] = "Scorpio ♏"
                    } else if ((users[2] === 11 && users[3] > 21) || (users[2] === 12 && users[3] < 22)) {
                        users[6] = "Sagittarius ♐"
                    } else if ((users[2] === 12 && users[3] > 21) || (users[2] === 1 && users[3] < 20)) {
                        users[6] = "Capricorn ♑"
                    } else {
                        check = false
                    }
                    if (users[2] === 1 && users[3] > 31) {
                        check = false
                    } else if ((users[2] === 2 && users[3] > 28 && users[1] === false) || (users[2] === 2 && users[3] > 29 && users[1] === true)) {
                        check = false
                    } else if (users[2] === 3 && users[3] > 31) {
                        check = false
                    } else if (users[2] === 4 && users[3] > 30) {
                        check = false
                    } else if (users[2] === 5 && users[3] > 31) {
                        check = false
                    } else if (users[2] === 6 && users[3] > 30) {
                        check = false
                    } else if (users[2] === 7 && users[3] > 31) {
                        check = false
                    } else if (users[2] === 8 && users[3] > 31) {
                        check = false
                    } else if (users[2] === 9 && users[3] > 30) {
                        check = false
                    } else if (users[2] === 10 && users[3] > 31) {
                        check = false
                    } else if (users[2] === 11 && users[3] > 30) {
                        check = false
                    } else if (users[2] === 12 && users[3] > 31) {
                        check = false
                    }
                } while (check === false)

                do {
                    users[4] = prompt("Please, enter your name (it must contain at least one symbol, but no more than 20 symbols).")
                } while (users[4].length < 1 || users[4].length > 20)

                do {
                    users[5] = prompt("Please, enter your surname (it must contain at least one symbol, but no more than 30 symbols).")
                } while (users[5].length < 1 || users[5].length > 30)
                users[7] = CURRENT_YEAR - users[0]
                USERS.push(users)
                break
            case 2:
                if (USERS.length === 0) {
                    console.log("Array is empty!")
                } else {
                    let i = Number(prompt("Please, enter index of a value to delete: "))
                    if (USERS[i]) {
                        console.log(`Successfully deleted user: ${USERS[i][4]} ${USERS[i][5]}`)
                        USERS.splice(i, 1)
                        console.log(`There are ${USERS.length} users more in the archive`)
                    } else {
                        console.log("There are no user with such index in array!")
                    }
                }
                break
            case 3:
                if (USERS.length === 0) {
                    console.log("Array is empty!")
                } else {
                    for (let i = 0; i < USERS.length; i++) {
                        if (USERS[i][1]) {
                            console.log(i + " - User Bio: " + USERS[i][4] + " " + USERS[i][5] + ", " + USERS[i][7] + " years old (leap year), " + USERS[i][6])
                        } else {
                            console.log(i + " - User Bio: " + USERS[i][4] + " " + USERS[i][5] + ", " + USERS[i][7] + " years old, " + USERS[i][6])
                        }
                    }
                }
                break

            case null :
                console.log("Buy, Buy! See you later!")
                return
            default:
                console.log("Sorry, incorrect input!")
                break
        }
    }
}

main()