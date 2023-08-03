const header = document.querySelector("h1")
header.style.backgroundColor = 'green'
const squarsList = document.querySelectorAll(".squar")
for (index in squarsList){
    adad = Number(index)+1
    squarsList[index].textContent = adad
}
//variable for playagain or not
let playAgain = true
//variable to store the dice value
let diceNumber
//variables for figurout who should dice
let blue = true, red = false, green = false, yellow = false
//variables for positioning on the board
let bluePosition = 0,redPosition = 0,greenPosition = 0,yellowPosition = 0


document.querySelector('.dise').addEventListener('click', dice) //click kardan roye tas
document.querySelector('.mowe').addEventListener('click',move)

if(bluePosition == 99) {alert('blue wins')}
if(redPosition == 99) {alert('red wins')}
if(greenPosition == 99) {alert('green wins')}
if(yellowPosition == 99) {alert('yellow wins')}




//choose who has to dice next
// function turn(){
//     if (blue) {
//         blue = false
//         red = true
//     }else if (red){
//         red = false
//         green = true
//     }else if (green){
//         green = false
//         yellow = true
//     }else if(yellow){
//         yellow = false
//         blue = true
//     }
// }
// dice function a random number between 1 and 6
function dice(){
    diceNumber = Math.floor(Math.random() * 6 + 1);
    let dicetext = document.querySelector('.dise')
    dicetext.textContent = diceNumber
    console.log(diceNumber);
    return diceNumber
}
//chosoe that wich peace should be on wich squar and figureout the turns
function move(){
    if(blue && bluePosition+diceNumber<100) {bluePosition = bluePosition+diceNumber
        changeColor()
        console.log('blue');
        console.log(bluePosition);
        if(bluePosition == 99) {alert('blue wins')}
        blue = false;
        red = true;
        
    }
    else if(red && bluePosition+diceNumber<100) {redPosition = redPosition+diceNumber
        changeColor()
        console.log('red');
        console.log(redPosition);
        if(redPosition == 99) {alert('red wins')}
        red = false
        green = true
    }
    else if(green && bluePosition+diceNumber<100) {greenPosition = greenPosition+diceNumber
        changeColor()
        console.log('green');
        console.log(greenPosition);
        if(greenPosition == 99) {alert('green wins')}
        green = false
        yellow = true
    }
    else if(yellow && bluePosition+diceNumber<100) {yellowPosition = yellowPosition+diceNumber
        changeColor()
        console.log('yellow');
        console.log(yellowPosition);
        if(yellowPosition == 99) {alert('yellow wins')}
        yellow = false
        blue = true
    }
}
//avas kardan rang khane ha
function changeColor(){
    squarsList[bluePosition].style.backgroundColor = 'blue'
    squarsList[redPosition].style.backgroundColor = 'red'
    squarsList[greenPosition].style.backgroundColor = 'green'
    squarsList[yellowPosition].style.backgroundColor = 'yellow'
}
