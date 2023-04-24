const OPERATOR_PLUS = '+';
const OPERATOR_MINUS = '-';
const OPERATOR_MULTIPLY = '*';
const OPERATOR_DIVIDE = '/';
const operatorList = [OPERATOR_PLUS, OPERATOR_MINUS, OPERATOR_MULTIPLY, OPERATOR_DIVIDE];

const mathOperator = prompt (`Please, provide one of the math operator: ${OPERATOR_PLUS}, ${OPERATOR_MINUS}, ${OPERATOR_MULTIPLY}, ${OPERATOR_DIVIDE}`);
const operandA = getOperand('A');
const operandB = getOperand('B');

if (isOperatopValid(mathOperator, operatorList) && !isNaN(operandA) && !isNaN(operandB)) {
    const result = calculate(mathOperator, operandA, operandB);
    showResult(mathOperator, operandA, operandB, result);
} else {
    alert(`There is no valid data`);
}






function getOperand(operandName) {
    return Number(prompt(`Please, provide an operand ${operandName}`));
}

function calculate(mathOperator, operandA, operandB) {
    switch (mathOperator) {
        case OPERATOR_PLUS:
            return plus(operandA, operandB);
        case OPERATOR_MINUS: 
            return minus(operandA, operandB);
        case OPERATOR_MULTIPLY: 
            return multiply(operandA, operandB);
        case OPERATOR_DIVIDE: 
            return divide(operandA, operandB);
    }
}

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function showResult(mathOperator, operandA, operandB, result) {
    alert(`Result of your operation: ${operandA} ${mathOperator} ${operandB} = ${result}`);
}

function isOperatopValid(operator, operatorList) {
    return operatorList.includes(operator);
}