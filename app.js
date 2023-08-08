let input1 = document.getElementById('input-1')
let input2 = document.getElementById('input-2')
let result = document.getElementById('result')
let minusBtn = document.getElementById('minus')
let plusBtn = document.getElementById('plus') 
let mulBtn = document.getElementById('multiply')
let divBtn = document.getElementById('division')
let equals = document.getElementById('equal')

let action = '+'

minusBtn.onclick = function () {
    action = '-'
}

plusBtn.onclick = function () {
    action = '+'
}

mulBtn.onclick = function () {
    action = '*'
}

divBtn.onclick = function () {
    action = '/'
}

function sumOfNumber(inp1,inp2,act) {
    let num1 = Number(inp1.value)
    let num2 = Number(inp2.value)
    
    if (act == '+') {
        return num1 + num2
    }

    if (act == '-') {
        return num1 - num2
    }

    if (act == '*') {
        return num1 * num2
    }

    if (act =='/') {
        return num1 / num2
    }
}

function printResult (result1) {
    result.textContent = result1
}

equals.onclick = function () {
    const fullSum =  sumOfNumber(input1,input2,action)
    printResult(fullSum)
}