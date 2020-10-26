const screen = document.querySelector('.screen input')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const addiction = document.querySelector('#addiction')
const minus = document.querySelector('#minus')
const times = document.querySelector('#times')
const division = document.querySelector('#division')
const equal = document.querySelector('#equal')
const clear = document.querySelector('#clear')
const decimal = document.querySelector('#decimal')

let inputOne = ''
let operation = ''
let inputTwo = ''
let operated = false

one.onclick = () => {
    if (operated === false) {
    screen.value += 1;
    } else {
        screen.value = 1;
        operated = false
    }
}

two.onclick = () => {
    if (operated === false) {
    screen.value += 2;
    } else {
        screen.value = 2;
        operated = false
    }
}

three.onclick = () => {
    if (operated === false) {
    screen.value += 3;
    } else {
        screen.value = 3;
        operated = false
    }
}

four.onclick = () => {
if (operated === false) {
    screen.value += 4;
    } else {
        screen.value = 4;
        operated = false
    }
}

five.onclick = () => {
    if (operated === false) {
    screen.value += 5;
    } else {
        screen.value = 5;
        operated = false
    }
}

six.onclick = () => {
    if (operated === false) {
    screen.value += 6;
    } else {
        screen.value = 6;
        operated = false
    }
}

seven.onclick = () => {
    if (operated === false) {
    screen.value += 7;
    } else {
        screen.value = 7;
        operated = false
    }
}

eight.onclick = () => {
    if (operated === false) {
    screen.value += 8;
    } else {
        screen.value = 8;
        operated = false
    }
}

nine.onclick = () => {
    if (operated === false) {
    screen.value += 9;
    } else {
        screen.value = 9;
        operated = false
    }
}

zero.onclick = () => {
    if (screen.value == 0) {
        screen.value = 0;
    } else if (operated === false) {
        screen.value += 0;
    } else if (operated === true) {
        screen.value = 0;
        operated = false
    } else {
        screen.value += 0;
    }
}


decimal.onclick = () => {
    if(!screen.value.includes('.') && operated === false) {
    screen.value += '.' ;
    } else if(!screen.value.includes('.') && operated === true) {
        screen.value = '.' ;
        operated = false;
    }
}

addiction.onclick = () => {
    if(inputOne == '') {
        inputOne = screen.value 
        screen.value = ''
        operation = 'sum'
    } else {
        operation = 'sum'
    }
}

minus.onclick = () => {
    if(inputOne == '') {
        inputOne = screen.value 
        screen.value = ''
        operation = 'sub'
    } else {
        operation = 'sub'
    }
}

times.onclick = () => {
    if(inputOne == '') {
        inputOne = screen.value 
        screen.value = ''
        operation = 'times'
    } else {
        operation = 'times'
    }
}

division.onclick = () => {
    if(inputOne == '') {
        inputOne = screen.value 
        screen.value = ''
        operation = 'div'
    } else {
        operation = 'div'
    }
}


equal.onclick = () => {
    inputTwo = screen.value
    result()
}

clear.onclick = () => {
    screen.value = ''
}


const result = () => {
    if (operation === 'sum') {
        screen.value = Number(inputOne) + Number(inputTwo)
    } else if (operation === 'sub') {
        screen.value = Number(inputOne) - Number(inputTwo)
    } else if (operation === 'times') {
        screen.value = Number(inputOne) * Number(inputTwo)
    } else if (operation === 'div') {
        screen.value = Number(inputOne) / Number(inputTwo)
    }
    inputOne = '';
    inputTwo = '';
    operated = true
    

}

