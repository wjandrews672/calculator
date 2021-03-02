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
let opCount = 0;


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
}

function clearValues() {
    displayValuex = '';
    displayValuey = '';
    currentValue = '';
    operater = '';
    opCount = 0;
}
//current value becomes x and next value is y
function setValues() {
    if (displayValuex == '') { 
        displayValuex = screen.textContent;
    } else {
        displayValuey = screen.textContent;
    }
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
    screen.textContent = currentValue;
}

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

        opCount > 0 ? (setValues(),operate()) : setValues();

        if (button.textContent == 'x') {
            operater = 'multiply';
        } else  if (button.textContent == '/') {
            operater = 'divide';
        } else  if (button.textContent == '+') {
            operater = 'add';
        } else  if (button.textContent == '-') {
            operater = 'subtract';
        }

        opCount++;
    });
});

equalsButton.addEventListener('click', () => {
    setValues();
    operate();
    opCount = 0;
});

clearButton.addEventListener('click', () => {
    clearScreen();
    clearValues();
});
//deleteButton.addEventListener
