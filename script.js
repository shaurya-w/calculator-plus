function addToDisplay(val) {
    document.getElementById('display').value += val;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const displayValue = document.getElementById('display').value;
        const result = new Function('return ' + displayValue)();
        document.getElementById('display').value = result;
        localStorage.setItem('calcHistory', result);
    } catch (error) {
        alert('Invalid expression');
    }
}

function keyboardInputs(event) {
    const validKeys = '0123456789+-*/.';

    if (validKeys.includes(event.key)) {
        event.preventDefault();            //prevents weird browser behaviour!
        addToDisplay(event.key);
    } else if (event.key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        backspace();
    } else if (event.key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    }
}

document.addEventListener('keydown', keyboardInputs);

function getHistory() {
    const history = localStorage.getItem('calcHistory');
    if (history) {
        alert('Last calculation result: ' + history);
    } else {
        alert('No history found');
    }
}

