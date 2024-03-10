import {
  handleNumberInput,
  handleOperationInput,
  handleEquals,
  clearCalculator,
  toggleSign,
  calculatePercentage,
} from "./modules/functions.js";
import { handleThemeClick } from "./modules/setupTheme.js";

document.addEventListener("DOMContentLoaded", function () {
  handleThemeClick();
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonValue = button.getAttribute("data-value");

      if (!isNaN(buttonValue) || buttonValue === ".") {
        handleNumberInput(buttonValue);
      }

      if (["+", "-", "×", "÷"].includes(buttonValue)) {
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
