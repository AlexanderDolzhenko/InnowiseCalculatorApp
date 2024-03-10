import {
  handleNumberInput,
  handleOperationInput,
  handleEquals,
  clearCalculator,
  toggleSign,
  calculatePercentage,
} from "../src/modules/functions.js";
import { handleThemeClick } from "./src/modules/setupTheme.js";
document.addEventListener("DOMContentLoaded", function () {
  handleThemeClick(),
    document.querySelectorAll(".button").forEach((e) => {
      e.addEventListener("click", function () {
        const t = e.getAttribute("data-value");
        (isNaN(t) && "." !== t) || handleNumberInput(t),
          ["+", "-", "×", "÷"].includes(t) && handleOperationInput(t),
          "=" === t && handleEquals(),
          "AC" === t && clearCalculator(),
          "+/-" === t && toggleSign(),
          "%" === t && calculatePercentage();
      });
    });
});
