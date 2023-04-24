const mathOperator = prompt ('Please, provide one of the math operator: +,-,*,/');
const inputNumA = getOperand();
const inputNumB = getOperand();

const operandA = Number(inputNumA);
const operandB = Number(inputNumB);

function getOperand() {
    return prompt('Please, provide an operand');
}

switch (mathOperator) {
    case '+':
        alert(`Result of your operation: ${inputNumA} + ${inputNumB} = ${operandA + operandB}`);
        break;
    case '-': 
        alert(`Result of your operation: ${inputNumA} - ${inputNumB} = ${operandA - operandB}`);
        break;
    case '*': 
        alert(`Result of your operation: ${inputNumA} * ${inputNumB} = ${operandA * operandB}`);
        break;
    case '/': 
        alert(`Result of your operation: ${inputNumA} / ${inputNumB} = ${operandA / operandB}`);
        break;
    default:
        alert(`Please, provide valid operators`);
}