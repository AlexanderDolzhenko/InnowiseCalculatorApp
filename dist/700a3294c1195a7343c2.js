import {
  handleNumberInput,
  handleOperationInput,
  handleEquals,
  clearCalculator,
  toggleSign,
  calculatePercentage,
} from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonValue = button.getAttribute("data-value");

      if (!isNaN(buttonValue) || buttonValue === ".") {
        handleNumberInput(buttonValue);
      }

      if (["+", "-", "*", "/"].includes(buttonValue)) {
        handleOperationInput(buttonValue);
      }

      if (buttonValue === "=") {
        handleEquals();
      }

      if (buttonValue === "AC") {
        clearCalculator();
      }

      if (buttonValue === "+/-") {
        toggleSign();
      }

      if (buttonValue === "%") {
        calculatePercentage();
      }
    });
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const displayElement = document.querySelector('.display');
//     const buttons = document.querySelectorAll('.button');

//     let currentOperand = '';
//     // let previousOperand = '';
//     let currentOperation = null;
//     let operationDisplay = '';
//     let memoryValue = 0;

//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             const buttonValue = button.getAttribute('data-value');

//             if (!isNaN(buttonValue) || buttonValue === '.') {
//                 handleNumberInput(buttonValue);
//             }

//             if (['+', '-', '×', '÷'].includes(buttonValue)) {
//                 handleOperationInput(buttonValue);
//             }

//             if (buttonValue === '=') {
//                 handleEquals();
//             }

//             if (buttonValue === 'AC') {
//                 clearCalculator();
//             }

//             if (buttonValue === '+/-') {
//                 toggleSign();
//             }

//             if (buttonValue === '%') {
//                 calculatePercentage();
//             }
//         });
//     });

//     function handleNumberInput(value) {
//         if (value === '.') {
//             if (!currentOperand.includes(',')) {
//                 currentOperand += ',';
//             }
//         } else {
//             if (currentOperand === '0') {
//                 currentOperand = value;
//             } else {
//                 currentOperand += value;
//             }
//         }
//         displayElement.value = currentOperand;
//     }

//     function handleOperationInput(value) {
//         if (currentOperand !== '') {
//             if (currentOperation === null) {
//                 memoryValue = parseFloat(currentOperand.replace(',', '.'));
//             } else {
//                 performCalculation();
//             }
//             currentOperand = '';
//             currentOperation = value;
//             operationDisplay = `${memoryValue.toString().replace('.', ',')} ${value} `;
//             displayElement.value = operationDisplay;
//         }
//     }

//     function handleEquals() {
//         if (currentOperand !== '') {
//             performCalculation();
//             currentOperand = '';
//             currentOperation = null;
//         }
//     }

//     function clearCalculator() {
//         currentOperand = '';
//         // previousOperand = '';
//         currentOperation = null;
//         operationDisplay = '';
//         displayElement.value = '0';
//     }

//     function toggleSign() {
//         if (currentOperand !== '') {
//             currentOperand = -parseFloat(currentOperand);
//             displayElement.value = currentOperand;
//         }
//     }

//     function calculatePercentage() {
//         currentOperand = parseFloat(currentOperand) / 100;
//         displayElement.value = currentOperand;
//     }

//     function performCalculation() {
//         let result;
//         const current = parseFloat(currentOperand.replace(',', '.'));

//         switch (currentOperation) {
//             case '+':
//                 result = memoryValue + current;
//                 break;
//             case '-':
//                 result = memoryValue - current;
//                 break;
//             case '×':
//                 result = memoryValue * current;
//                 break;
//             case '÷':
//                 if (current === 0) {
//                     displayElement.value = 'Error';
//                     return;
//                 }
//                 result = memoryValue / current;
//                 break;
//             default:
//                 return;
//         }

//         displayElement.value = result.toString().replace('.', ',');
//         memoryValue = result;
//     }
// });
