const OPERATOR_PLUS = '+';
const OPERATOR_MINUS = '-';
const OPERATOR_MULTIPLY = '*';
const OPERATOR_DIVIDE = '/';
const operatorList = [OPERATOR_PLUS, OPERATOR_MINUS, OPERATOR_MULTIPLY, OPERATOR_DIVIDE];

const mathOperator = getMathOperator();
const operandAmount = getOperandsAmount();
const operands = getOperands();
const result = calculate(mathOperator, operands);
showResult(mathOperator, operands, result);








function getMathOperator() {
    let operator;
    do {
        operator = prompt (`Please, provide one of the math operator: ${operatorList.join(', ')}`);
    } 
    while (!isOperatopValid(operator, operatorList));
    return operator;
}

function getOperandsAmount() {
    let operandsAmount;
    do {
        operandsAmount = Number(prompt(`Please, provide amount of operands, from 1 to 5.`));
    } 
    while (!(operandsAmount > 1 && operandsAmount < 5 && !isNaN(operandsAmount)));
    return operandsAmount;
}

function getOperands() {
    let operands = [];
    for (let i = 1; i <= operandAmount; i++) {
        let operand;
        do {
            operand = Number(prompt(`Please, provide an operand ${i}`));
        } 
        while (isNaN(operand));
        operands.push(operand);
    }
    return operands;
}

function calculate(mathOperator, operands) {
    switch (mathOperator) {
        case OPERATOR_PLUS:
            return plus(operands);
        case OPERATOR_MINUS: 
            return minus(operands);
        case OPERATOR_MULTIPLY: 
            return multiply(operands);
        case OPERATOR_DIVIDE: 
            return divide(operands);
    }
}

function plus(operands) {
    let result = operands[0];
    for (let i = 1; i < operands.length; i++) {
        result = result + operands[i];
    };
    return result;
}

function minus(operands) {
    let result = operands[0];
    for (let i = 1; i < operands.length; i++) {
        result = result - operands[i];
    };
    return result;
}

function multiply(operands) {
    let result = operands[0];
    for (let i = 1; i < operands.length; i++) {
        result = result * operands[i];
    };
    return result;
}

function divide(operands) {
    let result = operands[0];
    for (let i = 1; i < operands.length; i++) {
        result = result / operands[i];
    };
    return result;
}

function showResult(mathOperator, operands, result) {
    alert(`Result of your operation: ${operands.join(` ${mathOperator} `)} = ${result}`);
}

function isOperatopValid(operator, operatorList) {
    return operatorList.includes(operator);
}