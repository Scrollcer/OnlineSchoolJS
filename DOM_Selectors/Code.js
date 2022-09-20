//Task - organize search and replace text in <span/> elements, using any available methods for navigation through given html document
//Replace text in elements, where text matches with firstName, lastName, age
//You can't use document.getElementsByClassName, element.querySelector and element.querySelectorAll
//For text replacement user must input data through prompt() (you should use STDIN from previous homework)

//Elements calculation
//Go through DOM tree from document.body with the help of recursive function and count number of all tags in given html document
//Resulted list must go into tag <ul id="tag-list">
//Every tag in list must be wrapped in <li><li/>
//In count you must also add number of added <li> elements

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

const firstName = STDIN.getStringFromUser("Please, enter your first name", (a) => {
    return !isNaN(a) || a.length < 2
})
const lastName = STDIN.getStringFromUser("Please, enter your last name", (a) => {
    return !isNaN(a) || a.length < 2
})
const year = STDIN.getNumberFromUser("Please, enter your year of birth", (a) => {
    return isNaN(a) || a < 1900 || a > 2022
})

const map = new Map()

function findAllElements(node) {
    if (node == null) {
        return
    }

    if (node.innerText === 'User: firstName lastName - age years old;') {
        node.innerText = `User: ${firstName} ${lastName} - ${2022 - year} years old;`
    }

    if (node.tagName !== undefined) {
        if (map.has(node.tagName)) {
            let a = Number(map.get(node.tagName))
            map.set(node.tagName, ++a)
        } else {
            map.set(node.tagName, 1)
        }
    }

    findAllElements(node.firstElementChild)
    findAllElements(node.nextElementSibling)
}

findAllElements(document)

if (map.has('LI')) {
    let a = Number(map.get('LI'))
    a += map.size + 1
    map.set('LI', a)
} else {
    map.set('LI', map.size + 1)
}

const elem = document.getElementsByClassName("tag-list")

for (let element of map) {
    elem[0].innerHTML += `<li>${element[0]} : ${element[1]}</li>`
}


