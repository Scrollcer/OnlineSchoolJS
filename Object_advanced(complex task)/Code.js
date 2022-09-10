//Task - create helpful utilities for future projects
const STDIN = {
    /*
    Gets message from user for input request (prompt()) and validation function.
    strict is an optional parameter that controls if user can press CANCEL and stop data output or not (true - default).
    Returns valid NUMBER value (or Null if user pressed CANCEL)
    */
    getNumberFromUser(message, validate, strict = true) {
        let value
        do {
            value = Number(prompt(message))
            if (value === null && strict === true) {
                return null
            }
        } while (validate(value))
        return value
    },
    /*
    Gets message from user for input request (prompt()) and validation function.
    strict is an optional parameter that controls if user can press CANCEL and stop data output or not (true - default).
    Returns valid STRING value (or Null if user pressed CANCEL)
    */
    getStringFromUser(message, validate, strict = true) {
        let value
        do {
            value = prompt(message)
            value = value.toString()
            if (value === null && strict === true) {
                return null
            }
        } while (validate(value))
        return value
    }
}

const DATE = {
    /*
    Gets year with type Number
    Returns Boolean value (true if year is leap)
    */
    isLeapYear(year) {
        let leapYear = false
        if (year % 400 === 0) {
            leapYear = true
        } else if (year % 100 === 0 && year % 4 === 0) {
            leapYear = true
        }
        return leapYear
    },
    /*
    Gets month and day with type Number
    Returns String value - name of zodiac sign
    */
    zodiac(month, day) {
        let sign
        if ((month === 1 && day > 19) || (month === 2 && day < 19)) {
            sign = "Aquarius ♒"
        } else if ((month === 2 && day > 18) || (month === 3 && day < 21)) {
            sign = "Pisces ♓"
        } else if ((month === 3 && day > 20) || (month === 4 && day < 20)) {
            sign = "Aries ♈"
        } else if ((month === 4 && day > 19) || (month === 5 && day < 21)) {
            sign = "Taurus ♉"
        } else if ((month === 5 && day > 20) || (month === 6 && day < 21)) {
            sign = "Gemini ♊"
        } else if ((month === 6 && day > 20) || (month === 7 && day < 23)) {
            sign = "Cancer ♋"
        } else if ((month === 7 && day > 22) || (month === 8 && day < 23)) {
            sign = "Leo ♊"
        } else if ((month === 8 && day > 22) || (month === 9 && day < 23)) {
            sign = "Virgo ♍"
        } else if ((month === 9 && day > 22) || (month === 10 && day < 23)) {
            sign = "Libra ♎"
        } else if ((month === 10 && day > 22) || (month === 11 && day < 22)) {
            sign = "Scorpio ♏"
        } else if ((month === 11 && day > 21) || (month === 12 && day < 22)) {
            sign = "Sagittarius ♐"
        } else if ((month === 12 && day > 21) || (month === 1 && day < 20)) {
            sign = "Capricorn ♑"
        } else {
            return undefined
        }
        return sign
    },

    /*
    Gets year and month with type Number
    Returns Number value - maximum number of days in month for a specific year
    */
    maxDays(year, month) {
        if (month === 1) {
            return 31
        } else if (month === 2 && this.isLeapYear(year) === false) {
            return 28
        } else if (month === 2 && this.isLeapYear(year) === true) {
            return 29
        } else if (month === 3) {
            return 31
        } else if (month === 4) {
            return 30
        } else if (month === 5) {
            return 31
        } else if (month === 6) {
            return 30
        } else if (month === 7) {
            return 31
        } else if (month === 8) {
            return 31
        } else if (month === 9) {
            return 30
        } else if (month === 10) {
            return 31
        } else if (month === 11) {
            return 30
        } else if (month === 12) {
            return 31
        } else {
            return undefined
        }
    },

}


/*
Create a fabric function for object generation with type Archive
with following methods:
add(item) - adds value to the archive.
delete(index) - deletes value from the archive, returns deleted value.
find(callback) - searches for the specific value in the archive , returns value or undefined.
filter(callback) - filters values in the archive, returns filtered values.
each(callback) - iteration for each value in the archive.
take(from, to) - returns splice of the archive with from and to indexes.
isEmpty() - returns Boolean value, is archive empty or not.
count() - returns number of values in the archive.*/
const archiveFabric = () => {
    const archive = [];

    return {
        add(item) {
            archive.push(item);
        },
        delete(index) {
            let deletedValue
            if (archive[index]) {
                deletedValue = archive[index]
            }
            archive.splice(index, 1)
            return deletedValue
        },
        find(callback) {
            return archive.find(callback)
        },
        filter(callback) {
            return archive.filter(callback)
        },
        each(callback) {
            return newArchive = archive.map(callback)
        },
        take(from, to) {
            return archive.slice(from, to)
        },
        isEmpty() {
            if (archive.length === 0) return true
            else return false
        },
        count() {
            return archive.length
        }
    };
}


/*
Create fabric function for object Employee generation
with following attributes:
firstName
lastName
year - year of birth.
month - month of birth.
day - birthday.
Also, with following getters:
fullName - returns concatenation of name and surname.
age - returns age as a Number, depending on CURRENT year, day and month.
*/

const getCurrentDate = function () {
    const now = new Date();

    return [
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate()
    ]
}

const employeeGenerator = (firstName, lastName, year, month, day) => {
    return {
        firstName,
        lastName,
        year,
        month,
        day,
        sign: DATE.zodiac(month, day),
        isLeapYear: DATE.isLeapYear(year),

        get fullName() {
            return this.firstName + " " + this.lastName;
        },
        get age() {
            let currentDate = getCurrentDate()
            let age = currentDate[0] - this.year
            if (currentDate[1] <= this.month && currentDate[2] < this.day) {
                age = age - 1
            }
            return age
        }
    }
}

/*
Create Application object:
use STDIN for getting information from user and dateFabric for work with information
realise following methods for archive management through browser.*/
const APP = {
    // экземпляр Archive для хранения объектов типа Employee
    archive: archiveFabric(),
    /*
    Asks user about which operation he wishes to accomplish, until he finishes the program
    Operations: ['EXIT', 'ADD', 'DELETE', 'SHOW_ALL'].
    */
    run() {
        while (true) {
            console.log(`Main menu, please enter one of the following values:
                     0-Finish program
                     1-Add value to the archive
                     2-Delete value from the archive (requires to enter index)
                     3-Show all current values in the archive
                    `)
            let operation = STDIN.getNumberFromUser("Enter your choice", (a) => isNaN(a) || a < 0 || a > 3, true)
            switch (operation) {
                case 0:
                    this.exit()
                    return
                case 1:
                    this.addEntry()
                    break
                case 2:
                    this.deleteEntry()
                    break
                case 3:
                    this.showEntries()
                    break
                case null:
                    this.exit()
                    return
            }
        }
    },
    /*
    Runs when program is finished, outputs the final message into the console
    */
    exit() {
        console.log("Buy, Buy! See you later!")
        return
    },
    /*
    Accomplishes 'ADD' operation.
    Outputs into the console if operation was successful and number of values in the archive.
    */
    addEntry() {
        const firstName = STDIN.getStringFromUser("Please, enter name", (a) => !isNaN(a) || a < 2 || a > 15, true)
        const lastName = STDIN.getStringFromUser("Please, enter surname", (a) => !isNaN(a) || a < 2 || a > 20, true)
        const year = STDIN.getNumberFromUser("Please, enter year", (a) => isNaN(a) || a < 1900 || a > 2022, true)
        const month = STDIN.getNumberFromUser("Please, enter month", (a) => isNaN(a) || a < 1 || a > 12, true)
        const day = STDIN.getNumberFromUser("Please, enter day", (a) => isNaN(a) || a < 1 || a > DATE.maxDays(year, month), true)

        const user = employeeGenerator(firstName, lastName, year, month, day)

        this.archive.add(user);
    },
    /*
    Accomplishes 'DELETE' operation.
    Outputs into the console if operation was successful and error if archive was empty.
    */
    deleteEntry() {
        const length = this.archive.count();
        if (!length) {
            return console.log('EMPTY ARCHIVE');
        }

        const validate = (value) => {
            // ...
        };

        const index = STDIN.getNumberFromUser(`Enter index to be deleted: min 0, max ${length - 1}`, (a) => isNaN(a) || a < 0 || a > length - 1)

        this.archive.delete(index);
    },
    /*
    Accomplishes 'SHOW_ALL' operation.
    Outputs into the console if operation was successful and error if archive was empty.
    */
    showEntries() {
        const length = this.archive.count();
        if (!length) {
            return console.log('EMPTY ARCHIVE');
        }
        this.archive.each((el) => {
            if (el.isLeapYear === true) {
                console.log(" - User Bio: " + el.fullName + ", " + el.age + " years old (leap year), " + el.sign)
            } else {
                console.log(" - User Bio: " + el.fullName + ", " + el.age + " years old, " + el.sign)
            }
        })
    }
}
APP.run()

