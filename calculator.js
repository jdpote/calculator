//**********JS VARIABLES**********
let numberOnDisplay = ''; //this is the number currently on screen
let operator = '';  //this is the operator on use
let ans = '';   //this is the last result saved in memory
let res = 0; //this is ans but as an int instead of a string


//**********SCREEN**********
const screen = document.querySelector('.input-display');

//***********BUTTONS**********
//numbers
const buttonZero = document.querySelector('.zero');
const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const buttonFive = document.querySelector('.five');
const buttonSix = document.querySelector('.six');
const buttonSeven = document.querySelector('.seven');
const buttonEight = document.querySelector('.eight');
const buttonNine = document.querySelector('.nine'); 
//logistics
const buttonAns = document.querySelector('.Ans');
const buttonAC = document.querySelector('.AC');
const buttonC = document.querySelector('.C');
//operators
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
const buttonTimes = document.querySelector('.times');
const buttonOver = document.querySelector('.over');
const buttonEqual = document.querySelector('.equals');

//**********EVENTLISTENERS
//numbers
buttonZero.addEventListener('click', function () {
    numberOnDisplay += '0';
    screen.innerText = numberOnDisplay;
});

buttonOne.addEventListener('click', function () {
    numberOnDisplay += '1';
    screen.innerText = numberOnDisplay;
});

buttonTwo.addEventListener('click', function () {
    numberOnDisplay += '2';
    screen.innerText = numberOnDisplay;
});

buttonThree.addEventListener('click', function () {
    numberOnDisplay += '3';
    screen.innerText = numberOnDisplay;
});

buttonFour.addEventListener('click', function () {
    numberOnDisplay += '4';
    screen.innerText = numberOnDisplay;
});

buttonFive.addEventListener('click', function () {
    numberOnDisplay += '5';
    screen.innerText = numberOnDisplay;
});

buttonSix.addEventListener('click', function () {
    numberOnDisplay += '6';
    screen.innerText = numberOnDisplay;
});

buttonSeven.addEventListener('click', function () {
    numberOnDisplay += '7';
    screen.innerText = numberOnDisplay;
});

buttonEight.addEventListener('click', function () {
    numberOnDisplay += '8';
    screen.innerText = numberOnDisplay;
});

buttonNine.addEventListener('click', function () {
    numberOnDisplay += '9';
    screen.innerText = numberOnDisplay;
});

//logistics
buttonC.addEventListener('click', function () {
    if (numberOnDisplay != '') {
        numberOnDisplay = numberOnDisplay.substring(0, numberOnDisplay.length - 1);
    }
    screen.innerText = numberOnDisplay;
});

buttonAC.addEventListener('click', function () {
    numberOnDisplay = '';
    operator = '';
    ans = '';
    screen.innerText = numberOnDisplay;
});

buttonAns.addEventListener('click', function () {
    screen.innerText = ans;
    numberOnDisplay='';
});

//operators
buttonPlus.addEventListener('click', function () {
    ans = numberOnDisplay;
    numberOnDisplay = '';
    operator = '+';
});

buttonMinus.addEventListener('click', function () {
    ans = numberOnDisplay;
    numberOnDisplay = '';
    operator = '-';
});

buttonTimes.addEventListener('click', function () {
    ans = numberOnDisplay;
    numberOnDisplay = '';
    operator = '*';
});

buttonOver.addEventListener('click', function () {
    ans = numberOnDisplay;
    numberOnDisplay = '';
    operator = '/';
});

buttonEqual.addEventListener('click', function () {
    switch (operator) {
        case '+':
            res = parseInt(ans, 10) + parseInt(numberOnDisplay, 10);
            ans = res.toString();
            break;
        case '-':
            res = parseInt(ans, 10) - parseInt(numberOnDisplay, 10);
            ans = res.toString();
            break;
        case '*':
            res = parseInt(ans, 10) * parseInt(numberOnDisplay, 10);
            ans = res.toString();
            break;
        case '/':
            res = parseInt(ans, 10) / parseInt(numberOnDisplay, 10);
            ans = res.toString();
            break;
        default:
            ans = numberOnDisplay;
    }
    operator = '';
    screen.innerText = ans;
    numberOnDisplay = '';
});