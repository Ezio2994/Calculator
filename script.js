const screen = document.querySelector('.screen input')
const addiction = document.querySelector('#addiction')
const minus = document.querySelector('#minus')
const times = document.querySelector('#times')
const division = document.querySelector('#division')
const equal = document.querySelector('#equal')
const clear = document.querySelector('#clear')
const clearEntry = document.querySelector('#clearEntry')
const blackSpace = document.querySelector('#blackSpace')
const decimal = document.querySelector('#decimal')
const buttons = document.querySelectorAll('.digitButton')


let inputOne = '';
let operation = '';
let inputTwo = '';
let operated = false; // Check if number has to reset value or been added to the current value
let step = 1;
let equalOn = false; // chech if operation was concluded with equal button
let nextOperator = ''

const resetButton = () => {
    addiction.classList = 'button';
    minus.classList = 'button';
    times.classList = 'button';
    division.classList = 'button';
}

const resetInputs = () => {
    operated = false; // the if below check if user is in the middle of operation if so stop the reset
    if (addiction.className === 'button' && minus.className === 'button' && times.className === 'button' && division.className === 'button') {
    inputOne = '';
    inputTwo = '';
    step = 1;
    }
}

buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (operated === false && screen.value !== '0') { // second IF to prevent user to digit more than one 0 before the comma
            screen.value += button.value;
            } else {
                screen.value = button.value; // If no operation is on process when clicked a number over a value reset the value to the number
            resetInputs() // so user can start a new operation without have to reset value manually
        } resetButton()
    });
});

window.addEventListener('keydown', (event) => { // same as above but with keyboard events
    if (operated === false && event.key >= 0 && event.key <= 9 && screen.value !== '0') {
        screen.value += event.key
        resetButton();
    } else if (event.key === '0') {
        screen.value = event.key;
    } else if (event.key >= 1 && event.key <= 9) {
        screen.value = event.key;
        resetInputs()
        resetButton();
    }
});

window.addEventListener('keydown', (event) => { // keyboard events that are not numbers
    if(event.keyCode === 107 || event.keyCode === 187) {
        addictiOnClick()
    } else if(event.keyCode === 109 || event.keyCode === 189) {
        minusOnClick()
    } else if(event.keyCode === 106 || event.key === '*') {
        timesOnClick()
    } else if(event.keyCode === 186 || event.keyCode === 111 || event.keyCode === 191) {
        divisionOnClick()
    } else if(event.keyCode === 8) {
        blackSpaceKey()
    } else if(event.key === '.') {
        decimalKey()
    } else if(event.keyCode === 13) {
        equalKey()
        event.preventDefault()
    } else if(event.keyCode == 32) {
        blackSpaceKey()
    }
});


decimal.addEventListener('click',  decimalKey = () => { // comma
    if(!screen.value.includes('.') && operated === false) { // with includes I make sure user can only digit one comma
        screen.value += '.' ;
    } else if(!screen.value.includes('.') && operated === true) {
        screen.value = '.' ;
        operated = false;
    }
})

blackSpace.addEventListener('click', blackSpaceKey = () => { // event that simulate blackspace 
    screen.value = screen.value.slice(0, -1);
})

clear.onclick = () => { // clear button, on click reset values and operations
    screen.value = ''
    inputOne = ''
    inputTwo = ''
    step = 1
}

clearEntry.onclick = () => {
    screen.value = ''
}

equal.addEventListener('click', equalKey = () => { 
    if (step === 2) {
        inputTwo = screen.value
        equalOn = true
        result()
    } else if (step === 3) {
        inputTwo = screen.value
        equalOn = true
        result()
    }
})

addiction.addEventListener('click',  addictiOnClick = () => {
    if (addiction.className === 'button') {  
        if (minus.className === 'clickedButton' || times.className === 'clickedButton' || division.className === 'clickedButton') {
            addiction.className = 'clickedButton'
            minus.className = 'button'
            times.className = 'button'
            division.className = 'button'
            operation = 'sum'
        } else if (step === 1) {
            inputOne = screen.value 
            screen.value = ''
            operation = 'sum'
            step = 2
        } else if (step === 2) {
            inputTwo = screen.value
            nextOperator = 'sum'
            nextOperation()
            result()
        } else if (step === 3 && equalOn === false) {
            inputTwo = screen.value
            nextOperator = 'sum'
            result()
        } else if (step === 3 && equalOn === true) {
            screen.value = ''
            operation = 'sum'
            equalOn = false
        } addiction.classList = 'clickedButton';
    }
});

minus.addEventListener('click',  minusOnClick = () => {
    if (minus.className === 'button') {
        if (addiction.className === 'clickedButton' || times.className === 'clickedButton' || division.className === 'clickedButton') {
            minus.className = 'clickedButton'
            addiction.className = 'button'
            times.className = 'button'
            division.className = 'button'
            operation = 'sub'
        } else if (step === 1) {
            inputOne = screen.value 
            screen.value = ''
            operation = 'sub'
            step = 2
        } else if (step === 2) {
            inputTwo = screen.value
            nextOperator = 'sub'
            nextOperation()
            result()
        } else if (step === 3 && equalOn === false) {
            inputTwo = screen.value
            nextOperator = 'sub'
            result()
        } else if (step === 3 && equalOn === true) {
            screen.value = ''
            equalOn = false
            operation = 'sub'
        } minus.classList = 'clickedButton';
    } 
});

times.addEventListener('click',  timesOnClick = () => {
    if (times.className === 'button') {
        if (minus.className === 'clickedButton' || addiction.className === 'clickedButton' || division.className === 'clickedButton') {
            times.className = 'clickedButton'
            minus.className = 'button'
            addiction.className = 'button'
            division.className = 'button'
            operation = 'times'
        } else if (step === 1) {
            inputOne = screen.value 
            screen.value = ''
            operation = 'times'
            step = 2
        } else if (step === 2) {
            inputTwo = screen.value
            nextOperator = 'times'
            nextOperation()
            result()
        } else if (step === 3 && equalOn === false) {
            inputTwo = screen.value
            nextOperator = 'times'
            result()
        } else if (step === 3 && equalOn === true) {
            screen.value = ''
            equalOn = false
            operation = 'times'
        } times.classList = 'clickedButton';
    } 
})

division.addEventListener('click',  divisionOnClick = () => {
    if (division.className === 'button') {
            if (minus.className === 'clickedButton' || times.className === 'clickedButton' || addiction.className === 'clickedButton') {
                division.className = 'clickedButton'
                minus.className = 'button'
                times.className = 'button'
                addiction.className = 'button'
                operation = 'div'
            } else if (step === 1) {
                inputOne = screen.value 
                screen.value = ''
                operation = 'div'
                step = 2
            } else if (step === 2) {
                inputTwo = screen.value
                nextOperator = 'div'
                nextOperation()
                result()
            } else if (step === 3 && equalOn === false) {
                inputTwo = screen.value
                nextOperator = 'div'
                result()
            } else if (step === 3 && equalOn === true) {
                screen.value = ''
                equalOn = false
                operation = 'div'
            } division.classList = 'clickedButton';
        } 
})

const nextOperation = () => {
    myVar = setTimeout(nextOperation1, 0050);
}

const nextOperation1 = () => {
    if (nextOperator === 'sub') {
        operation = 'sub'
    } else if (nextOperator === 'sum') {
        operation = 'sum'
    } else if (nextOperator === 'times') {
        operation = 'times'
    } else if (nextOperator === 'div') {
        operation = 'div'
    }
}

const result = () => {
    if (operation === 'sum') {
        if  (equalOn === true) {
            screen.value = Number(inputOne) + Number(inputTwo)
            step = 1;
            equalOn = false;
        } else {
            screen.value = Number(inputOne) + Number(inputTwo)
            inputOne = screen.value
            step = 3;
            if (nextOperator === 'sub') {
                operation = 'sub'
            } else if (nextOperator === 'times') {
                operation = 'times'
            } else if (nextOperator === 'div') {
                operation = 'div'
            }}
    } else if (operation === 'sub') {
        if (equalOn === true) {
            screen.value = Number(inputOne) - Number(inputTwo)
            step = 1;
            equalOn = false;
        } else {
            screen.value = Number(inputOne) - Number(inputTwo)
            inputOne = screen.value
            step = 3;
            if (nextOperator === 'sum') {
                operation = 'sum'
            } else if (nextOperator === 'times') {
                operation = 'times'
            } else if (nextOperator === 'div') {
                operation = 'div'
        }} 
    } else if (operation === 'times') {
        if (equalOn === true) {
            screen.value = Number(inputOne) * Number(inputTwo)
            step = 1;
            equalOn = false;
        } else {
            screen.value = Number(inputOne) * Number(inputTwo)
            inputOne = screen.value
            step = 3;
            if (nextOperator === 'sub') {
                operation = 'sub'
            } else if (nextOperator === 'sum') {
                operation = 'sum'
            } else if (nextOperator === 'div') {
                operation = 'div'
        }} 
    } else if (operation === 'div') {
        if (equalOn === true) {
        screen.value = Number(inputOne) / Number(inputTwo)
        step = 1;
        equalOn = false;
        } else {
            screen.value = Number(inputOne) / Number(inputTwo)
            inputOne = screen.value
            step = 3;
            if (nextOperator === 'sum') {
                operation = 'sum'
            } else if (nextOperator === 'times') {
                operation = 'times'
            } else if (nextOperator === 'sub') {
                operation = 'sub'
        }}
    }
    resetButton()
    operated = true;
}

