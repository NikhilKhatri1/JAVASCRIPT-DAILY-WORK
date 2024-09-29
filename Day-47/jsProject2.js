const prompt = require("prompt-sync")();

function getNumber(promptMessage) {
    let number;
    while (true) {
        number = parseFloat(prompt(promptMessage));
        if (!isNaN(number)) {
            return number;
        }
        console.log("Please enter a valid number.");
    }
}

const number1 = getNumber("Enter number 1: ");
const number2 = getNumber("Enter number 2: ");
const operator = prompt("Enter operator (+, -, *, /): ");

let result;
let flag = true;

switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "/":
        if (number2 === 0) {
            console.log("Cannot divide by zero.");
            flag = false;
        } else {
            result = number1 / number2;
        }
        break;
    case "*":
        result = number1 * number2;
        break;
    default:
        console.log("Invalid operator...");
        flag = false;
        break;
}

if (flag) {
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
