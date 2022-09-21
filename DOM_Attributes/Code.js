// Task - Attach file index.html
// Realize Rating component functionality, basing on template with class .app-rating
// Upon mouse over score element, all neighbor elements to the left become more visible
// Upon pressing score element, all neighbor elements to the left become more visible
// Realize Dialog component functionality basing on template with .app-dialog class:
//      Dialog window is invisible by default
//      If user presses data-dialog-id button, opens inner dialog window by id
//      If user presses data-dialog-submit button inside dialog window:
//          User function onSubmit executes
//          Window closes
//      If user presses data-dialog-reject button inside dialog window:
//          Window closes

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Developer comments: Task was done and works correctly, but
//it requires a lot of additional improvements (especially code
//size can be much more compact), but due to the lack of free time
//I can't improve this project in near future
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const appDialog = document.getElementsByClassName("app-dialog")
appDialog[0].hidden = true

const openDialogButton = document.querySelector('[data-dialog = "example"]')
openDialogButton.onclick = () => appDialog[0].hidden = false

const closeDialogButton = document.querySelector('[data-dialog-reject]')
closeDialogButton.onclick = () => appDialog[0].hidden = true

const okDialogButton = document.querySelector('[data-dialog-submit]')
okDialogButton.onclick = () => {
    appDialog[0].hidden = true
    onSubmit()
}

function onSubmit() {
    console.log("Hello, world!")
}

let clicked = false
const firstStar = document.getElementsByClassName("star1")
firstStar[0].onmouseover = () => {
    if (clicked === false) {
        firstStar[0].style.backgroundColor = "blue"
    }
}
firstStar[0].onmouseout = () => {
    if (clicked === false) {
        firstStar[0].style.backgroundColor = "white"
    }
}
firstStar[0].onclick = () => {
    if (clicked) {
        clicked = false
        turnOff()
    } else {
        clicked = true
        firstStar[0].style.backgroundColor = "blue"
    }
}

const secondStar = document.getElementsByClassName("star2")
secondStar[0].onmouseover = () => {
    if (clicked === false) {
        secondStar[0].style.backgroundColor = "blue"
        firstStar[0].style.backgroundColor = "blue"
    }
}
secondStar[0].onmouseout = () => {
    if (clicked === false) {
        secondStar[0].style.backgroundColor = "white"
        firstStar[0].style.backgroundColor = "white"
    }
}
secondStar[0].onclick = () => {
    if (clicked) {
        clicked = false
        turnOff()
    } else {
        clicked = true
        secondStar[0].style.backgroundColor = "blue"
        firstStar[0].style.backgroundColor = "blue"
    }
}

const thirdStar = document.getElementsByClassName("star3")
thirdStar[0].onmouseover = () => {
    if (clicked === false) {
        thirdStar[0].style.backgroundColor = "blue"
        secondStar[0].style.backgroundColor = "blue"
        firstStar[0].style.backgroundColor = "blue"
    }
}
thirdStar[0].onmouseout = () => {
    if (clicked === false) {
        thirdStar[0].style.backgroundColor = "white"
        secondStar[0].style.backgroundColor = "white"
        firstStar[0].style.backgroundColor = "white"
    }
}
thirdStar[0].onclick = () => {
    if (clicked) {
        clicked = false
        turnOff()
    } else {
        clicked = true
        thirdStar[0].style.backgroundColor = "blue"
        secondStar[0].style.backgroundColor = "blue"
        firstStar[0].style.backgroundColor = "blue"
    }
}
const fourthStar = document.getElementsByClassName("star4")
fourthStar[0].onmouseover = () => {
    if (clicked === false) {
        fourthStar[0].style.backgroundColor = "blue"
        thirdStar[0].style.backgroundColor = "blue"
        secondStar[0].style.backgroundColor = "blue"
        firstStar[0].style.backgroundColor = "blue"
    }
}
fourthStar[0].onmouseout = () => {
    if (clicked === false) {
        fourthStar[0].style.backgroundColor = "white"
        thirdStar[0].style.backgroundColor = "white"
        secondStar[0].style.backgroundColor = "white"
        firstStar[0].style.backgroundColor = "white"
    }
}
fourthStar[0].onclick = () => {
    if (clicked) {
        clicked = false
        turnOff()
    } else {
        clicked = true
        fourthStar[0].style.backgroundColor = "blue"
        thirdStar[0].style.backgroundColor = "blue"
        secondStar[0].style.backgroundColor = "blue"
        firstStar[0].style.backgroundColor = "blue"
    }
}
const fifthStar = document.getElementsByClassName("star5")
fifthStar[0].onmouseover = () => {
    if (clicked === false) {
        fifthStar[0].style.backgroundColor = "blue"
        fourthStar[0].style.backgroundColor = "blue"
        thirdStar[0].style.backgroundColor = "blue"
        secondStar[0].style.backgroundColor = "blue"
        firstStar[0].style.backgroundColor = "blue"
    }
}
fifthStar[0].onmouseout = () => {
    if (clicked === false) {
        turnOff()
    }
}
fifthStar[0].onclick = () => {
    if (clicked) {
        clicked = false
        turnOff()
    } else {
        clicked = true
        fifthStar[0].style.backgroundColor = "blue"
        fourthStar[0].style.backgroundColor = "blue"
        thirdStar[0].style.backgroundColor = "blue"
        secondStar[0].style.backgroundColor = "blue"
        firstStar[0].style.backgroundColor = "blue"
    }
}

function turnOff() {
    fifthStar[0].style.backgroundColor = "white"
    fourthStar[0].style.backgroundColor = "white"
    thirdStar[0].style.backgroundColor = "white"
    secondStar[0].style.backgroundColor = "white"
    firstStar[0].style.backgroundColor = "white"
}





