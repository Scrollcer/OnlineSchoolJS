/* Task - get string and ID of one of the following operations (with optional index):
* 1) Get unicode of marked symbol in string (by index);
* 2) Delete marked symbol (by index);
* 3) Exchange marked symbol with new random smiley face (by index);
* 4) Get number of symbols in string (except spaces);
* Return new string or number.
*/

const SMILEFACES = ["😀", "😄", "😃", "😆", "😊", "🥰", "😋", "😛", "🤪", "🤑",]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeString(string, id, index = 0){
    switch(id){
        case 1:
            console.log(string.charCodeAt(index))
            break
        case 2:
            console.log(string.replace(string[index], ""))
            break
        case 3:
            const randomInt = getRandomIntInclusive(0, 10);
            console.log(string.replace(string[index], SMILEFACES[randomInt]))
            break
        case 4:
            console.log(string.replaceAll(" ", "").length)
            break;
        default:
            console.log("Sorry, incorrect input!")
            break
    }
}
changeString("How are you today?", 1, 6)