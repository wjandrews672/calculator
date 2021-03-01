let screen = document.querySelector('p');
const numberButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('.clear');
// const deleteButton

let displayValuex = '';
let displayValuey = '';
let currentValue = '';
let operater = '';


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}

function clearScreen() {
    screen.textContent = '';
    // displayValuex = '';
    // displayValuey = '';
    // currentValue = '';
}
//current value becomes x and next value is y
function setValues() {
    if (displayValuex == '') { //|| displayValuex == currentValue) {
        displayValuex = screen.textContent;
    } else {
        displayValuey = screen.textContent;
    }

    // x = Number(displayValuex);
    // y = Number(displayValuey);
    // op = operater;
    console.log('x',displayValuex)
    console.log('y',displayValuey)
}

function operate(op, x, y) {
    // setValues();
    x = Number(displayValuex);
    y = Number(displayValuey);
    op = operater;
        if (op == 'multiply') {
            currentValue = multiply(x,y);
        } else  if (op == 'divide') {
            currentValue = divide(x,y);
        } else  if (op == 'add') {
            currentValue = add(x,y);
        } else  if (op == 'subtract') {
            currentValue = subtract(x,y);
        }
    displayValuex = currentValue;
    displayValuey = '';
    console.log('x',x)
    console.log('y',y)
    console.log('current',currentValue)
    screen.textContent = currentValue;
}

// function setOperation() {
//     //define display values
//     if (displayValuex == '') {
//             displayValuex = screen.textContent;
//         } else {
//             displayValuey = screen.textContent;
//         }
//     }


// const displayValue = function() {

// }

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (screen.textContent == displayValuex) {
            clearScreen();
            screen.textContent += button.textContent;
        } else {
            screen.textContent += button.textContent;
        }
    });
});

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        setValues();
        // displayValuey != '' ? operate() : console.log('not operating');
        if (button.textContent == 'x') {
            operater = 'multiply';
        } else  if (button.textContent == '/') {
            operater = 'divide';
        } else  if (button.textContent == '+') {
            operater = 'add';
        } else  if (button.textContent == '-') {
            operater = 'subtract';
        }
        //run operate function on click
        //x = display value, then y equal display value
        // displayValuey != '' ? operate() : '';
        // console.log(operater)
        // console.log('x', displayValuex)
        // console.log('y', displayValuey)
        // console.log('current',currentValue)
    });
});

equalsButton.addEventListener('click', () => {
    setValues();
    operate();
});

clearButton.addEventListener('click', clearScreen);
//deleteButton.addEventListener
