let screen = document.querySelector('p');
const numberButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]');
const equalsButton= document.querySelectorAll('[data-equals]');
// const clearButton
// const deleteButton

let displayValuex = '';
let displayValuey = '';
let operateValue = '';


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

// function operate(x, operateValue, y) {
//     return operateValue(x, y);
//     //why error code
// }

// const displayValue = function() {

// }

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // if (screen = '') {
            displayValuex +=button.textContent;
            screen.textContent += button.textContent;
        // } else {
            // displayValuey +=button.textContent;
            // screen.textContent += button.textContent;
        // }
    });
});

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent == 'x') {
            operateValue = multiply;
        } else  if (button.textContent == '/') {
            operateValue = divide;
        } else  if (button.textContent == '+') {
            operateValue = add;
        } else  if (button.textContent == '-') {
            operateValue = subtract;
        }
        //run operate function on click
        //x = display value, then y equal display value
    console.log(operateValue)
    });
});

// equalsButton.addEventListener('click', operate(displayValuex, operateValue, displayValuey));
//clearButton.addEventListener
//deleteButton.addEventListener