import variables from "./variables.js";

function handleNumberInput(value) {
  if (value === ".") {
    if (!variables.currentOperand.includes(",")) {
      variables.currentOperand += ",";
    }
  } else {
    if (variables.currentOperand === "0") {
      variables.currentOperand = value;
    } else {
      variables.currentOperand += value;
    }
  }
  variables.displayElement.value = variables.currentOperand;
}

function handleOperationInput(value) {
  if (variables.currentOperand !== "") {
    if (variables.currentOperation === null) {
      variables.memoryValue = parseFloat(
        variables.currentOperand.replace(",", "."),
      );
    } else {
      performCalculation();
    }
    variables.currentOperand = "";
    variables.currentOperation = value;
    variables.operationDisplay = `${variables.memoryValue.toString().replace(".", ",")} ${value} `;
    variables.displayElement.value = variables.operationDisplay;
  } else {
    variables.currentOperation = value;
  }
}

function handleEquals() {
  if (variables.currentOperand !== "") {
    performCalculation();
    variables.currentOperand = "";
    variables.currentOperation = null;
  }
}

function clearCalculator() {
  variables.currentOperand = "";

  variables.currentOperation = null;
  variables.operationDisplay = "";
  variables.displayElement.value = "0";
}

function toggleSign() {
  if (
    typeof variables.currentOperand === "string" &&
    variables.currentOperand !== ""
  ) {
    variables.currentOperand = (-parseFloat(variables.currentOperand))
      .toString()
      .replace(".", ",");
    variables.displayElement.value = variables.currentOperand;
  }
}

function calculatePercentage() {
  if (
    typeof variables.currentOperand === "string" &&
    variables.currentOperand !== ""
  ) {
    const currentValue = parseFloat(variables.currentOperand.replace(",", "."));
    const percentageValue = currentValue / 100;
    variables.currentOperand = percentageValue.toString().replace(".", ",");
    variables.displayElement.value = variables.currentOperand;
  }
}

function performCalculation() {
  let result;
  const current = parseFloat(variables.currentOperand.replace(",", "."));

  switch (variables.currentOperation) {
    case "+":
      result = variables.memoryValue + current;
      break;
    case "-":
      result = variables.memoryValue - current;
      break;
    case "×":
      result = variables.memoryValue * current;
      break;
    case "÷":
      if (current === 0) {
        variables.displayElement.value = "Error";
        return;
      }
      result = variables.memoryValue / current;
      break;
    default:
      return;
  }

  variables.displayElement.value = result.toString().replace(".", ",");
  variables.memoryValue = result;
}

export {
  handleNumberInput,
  handleOperationInput,
  handleEquals,
  clearCalculator,
  toggleSign,
  calculatePercentage,
  performCalculation,
};
