//Task - create helpful utilities for work with input and output
const STDIN = {
    /*
    Gets message from user for input request (prompt()) and validation function
    strict is an optional parameter that controls if user can press CANCEL and stop data output
    returns valid value of Number (or Null type in case of CANCEL)
    */
    getNumberFromUser(message, validate, strict = true),
    /*
    Gets message from user for input request (prompt()) and validation function
    strict is an optional parameter that controls if user can press CANCEL and stop data output
    returns valid value of String (or Null type in case of CANCEL)
    */
    string(message, validate, strict = true),
}

const validateBirthYear = (value) => {
    const input = Number(value);

    return isNaN(value) || value < 10 || value > 20;
};

const birthYear = STDIN.number('Enter your birthYear', validateBirthYear, true);


const validateFirstName = (input) => {
    return input !== null || input.length < 10 || input.length > 20
};

const birthFirstName = STDIN.string('Enter your birthYear', validateFirstName, true);

const DATE = {
    /*
    Gets year with type Number
    Returns Boolean value (true if year is leap)
    */
    isLeapYear(year),

    /*
    Gets month and day with type Number
    Returns String value - name of zodiac sign
    */
    zodiac(month, day),

    /*
    Gets year and month with type Number
    Returns Number value - maximum number of days in month for a specific year
    */
    maxDays(year, month),
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
        }
    };
}

const archive = archiveFabric();
archive.add(1);
/*
Create fabric function for object Employee generation
with following attributes:
firstName
lastName
year - year of birth.
month - month of birth.
day - birthday.
also with following getters:
fullName - returns concatenation of name and surname.
age - returns age as a Number, depending on CURRENT year, day and month.

// используйте функцию getCurrentDate для расчета возраста без погрешности.*/
// возвращает массив из трех чисел текущей даты
// [год, месяц, день]

const getCurrentDate = function () {
    const now = new Date();

    return [
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate()
    ]
}
/*
Create Application object:
use STDIN for getting information from user and dateFabric for work with information
realise following methods for archive management through browser.*/
const APP = {
    // экземпляр Archive для хранения объектов типа Employee
    archive
    /*
    Asks user about which operation he wishes to accomplish, until he finishes the program
    Operations: ['EXIT', 'ADD', 'DELETE', 'SHOW_ALL'].
    */
    run() {

    },
    /*
    Runs when program is finished, outputs the final message into the console
    */
    exit() {

    },
    /*
    Accomplishes 'ADD' operation.
    Outputs into the console if operation was successful and number of values in the archive.
    */
    addEntry() {
        const firstName = STDIN.string()
        const lastName = STDIN.string();

        const user = userFabric(firstName, lastName);

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

        const index = STDIN.number(`Enter index to be deleted: min 0, max ${length - 1}`);

        this.archive.delete(index);
    },
    /*
    Accomplishes 'SHOW_ALL' operation.
    Outputs into the console if operation was successful and error if archive was empty.
    */
    showEntries() {
        this.archive.each((el, index) => {
            console.log(el)
        })
    }
}