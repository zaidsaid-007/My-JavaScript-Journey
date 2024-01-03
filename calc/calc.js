let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('button'));
let operators = ['/', '*', '-', '+'];
let decimalAdded = false;

buttons.map(button => {
    button.addEventListener('click', () => {

        if (button.textContent === 'C') {
            clearDisplay();
        } else if (button.textContent === 'DEL') {
            deleteDigit();
        } else if (operators.includes(button.textContent)) {
            appendOperator(button.textContent);
        } else if (button.textContent === '.') {
            appendDecimal();
        } else if (button.textContent === '=') {
            calculateResult();
        } else {
            appendDigit(button.textContent);
        }
    });
});

function clearDisplay() {
    display.value = '';
}

function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

function appendOperator(operator) {
    if (!display.value.endsWith(' ') && !operators.includes(display.value.slice(-1))) {
        display.value += operator + ' ';
    }
}

function appendDigit(digit) {
    if (display.value === '0' || display.value === '') {
        display.value = digit;
    } else {
        display.value += digit;
    }
}

function appendDecimal() {
    if (!decimalAdded) {
        display.value += '.';
        decimalAdded = true;
    }
}

function calculateResult() {
    try {
        let result = eval(display.value);
        if (!isFinite(result)) {
            throw new Error('Invalid operation');
        }
        display.value = result;
        decimalAdded = false;
    } catch (error) {
        display.value = 'Error';
    }
}