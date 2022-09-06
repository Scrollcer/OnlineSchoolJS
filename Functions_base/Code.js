//Task - create 3 functions
//FIRST function - Fabric function:
//Gets following arguments: mail index, city, country, street, house address, house symbol(unnecessary)
//Returns Address type object with changed properties:
//Mail index - string
//City - string with lowercase
//Country - string with lowercase
//Street - string with lowercase
//House address - int number
//House symbol - int number(if exists)

//SECOND function - format function:
//Gets Address object and transforms each Address field to uppercase
//Returns string with the following format <street> St, <number> @ <postcode>, <city>, <country>.

//THIRD function - parser function
//Gets string with the following format: <street> St, <number> @ <postcode>, <city>, <country>.
//Uses  FIRST function to return Address object
//Examples:
/*const address = fabricFunc('02000', 'Moscow', 'Russia', 'Ivanov', 17)

console.log(address.city) // -> 'moscow'
console.log(address.buildingNumber) // -> 17

const stringAddress = addressToString(point)

console.log(stringAddress) // -> 'Ivanov St, 17 @ 02000, Moscow, Russia'

const parsedAddress = stringToAddress(stringAddress)

console.log(parsedAddress.city) // -> 'moscow'
console.log(parsedAddress.buildingNumber) // -> 17*/

const fabricFunc = function (mail_index, city, country, street, buildingNumber, symbol) {
    mail_index = mail_index.toString()
    city = city.toString().toLowerCase()
    country = country.toString().toLowerCase()
    street = street.toString().toLowerCase()
    buildingNumber = Number(buildingNumber)
    if (symbol) {
        symbol = Number(symbol)
        const Address = {
            mail_index: mail_index,
            city: city,
            country: country,
            street: street,
            buildingNumber: buildingNumber,
            symbol: symbol
        }
    } else {
        const Address = {
            mail_index: mail_index,
            city: city,
            country: country,
            street: street,
            buildingNumber: buildingNumber
        }
        return Address
    }
}

const addressToString = function (object) {
    for (let element in object) {
        if (isNaN(object[element])) {
            object[element] = object[element].charAt(0).toUpperCase() + object[element].slice(1)
        }
    }
    let result
    if ("symbol" in object) {
        result = `${object.street} St, ${object.buildingNumber} ${object.symbol} @ ${object.mail_index}, ${object.city}, ${object.country}`
    } else {
        result = `${object.street} St, ${object.buildingNumber} @ ${object.mail_index}, ${object.city}, ${object.country}`
    }
    return result
}

const stringToAddress = function (string) {
    let result;
    const array = string.split(' ')
    if (array.length === 7) {
        result = fabricFunc(array[4], array[5], array[6], array[0], array[2])
    } else if (array.length == 8) {
        result = fabricFunc(array[5], array[7], array[7], array[0], array[2], array[3])
    } else {
        console.log("Error, unknown string!")
        return undefined
    }

    return result
}

const address = fabricFunc('02000', 'Moscow', 'Russia', 'Ivanov', 17)

console.log(address.city) // -> 'moscow'
console.log(address.buildingNumber) // -> 17

const stringAddress = addressToString(address)

console.log(stringAddress) // -> 'Ivanov St, 17 @ 02000, Moscow, Russia'

const parsedAddress = stringToAddress(stringAddress)

console.log(parsedAddress.city) // -> 'moscow'
console.log(parsedAddress.buildingNumber) // -> 17