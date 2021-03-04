let screen = document.querySelector('.screen');
const numberButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const decimal = document.querySelector('[data-point]');
window.addEventListener('keydown',readKeypress)


let displayValuex = '';
let displayValuey = '';
let currentValue = '';
let operater = '';
let opCount = 0;
let equalsCount = 0;
let readyForY = false;
// screen.textContent='0';

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
    screen.textContent = 0;
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
    } else if (readyForY == true) {
        displayValuey = screen.textContent;
    }
}

function operate(op, x, y) {
    // setValues();
    if (readyForY == false) { return };
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

    if ((y == 0) && (op == 'divide')) {
        // screen.textContent = '0'
        clearValues()
        alert('cannot divide by zero')
    } else {
        currentValue = Math.round(currentValue * 100) / 100;
        displayValuex = currentValue;
        displayValuey = null
        screen.textContent = currentValue;
        readyForY = false;
    
    };
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (screen.textContent == 0) {
            screen.textContent = '';
            screen.textContent += button.textContent;
        } else if (screen.textContent == displayValuex) {
            screen.textContent = '';
            screen.textContent += button.textContent;
        } else {
            screen.textContent += button.textContent;
        }
        readyForY = true;
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
// dont run operate on multiple ops pushes
        opCount++;
        equalsCount = 0;
    });
});

// decimal.addEventListener('click', () => {
//     if(decimal < 1) {
//         add decimal
//     } else {
//         do not add decimal
//     }
// });

equalsButton.addEventListener('click', () => {
    if (equalsCount < 1) {
        if (operater != ''){
            setValues();
            operate(); 
            equalsCount ++;
        }
    }
    // opCount = 0;
});

clearButton.addEventListener('click', () => {
    clearScreen();
    clearValues();
});

deleteButton.addEventListener('click', () => {
    let length = screen.textContent.length;
    screen.textContent = screen.textContent.slice(0, length-1);
});

function readKeypress(e) {
    console.log(e);
}
