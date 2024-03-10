/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var __webpack_modules__ = {
      "./src/index.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ "./src/modules/functions.js");\n/* harmony import */ var _modules_setupTheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/setupTheme.js */ "./src/modules/setupTheme.js");\n\r\n\r\n\r\ndocument.addEventListener("DOMContentLoaded", function () {\r\n  (0,_modules_setupTheme_js__WEBPACK_IMPORTED_MODULE_1__.handleThemeClick)();\r\n  const buttons = document.querySelectorAll(".button");\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener("click", function () {\r\n      const buttonValue = button.getAttribute("data-value");\r\n\r\n      if (!isNaN(buttonValue) || buttonValue === ".") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleNumberInput)(buttonValue);\r\n      }\r\n\r\n      if (["+", "-", "×", "÷"].includes(buttonValue)) {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleOperationInput)(buttonValue);\r\n      }\r\n\r\n      if (buttonValue === "=") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleEquals)();\r\n      }\r\n\r\n      if (buttonValue === "AC") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.clearCalculator)();\r\n      }\r\n\r\n      if (buttonValue === "+/-") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleSign)();\r\n      }\r\n\r\n      if (buttonValue === "%") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.calculatePercentage)();\r\n      }\r\n    });\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/index.js?',
        );
      },
      "./src/modules/functions.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculatePercentage: () => (/* binding */ calculatePercentage),\n/* harmony export */   clearCalculator: () => (/* binding */ clearCalculator),\n/* harmony export */   handleEquals: () => (/* binding */ handleEquals),\n/* harmony export */   handleNumberInput: () => (/* binding */ handleNumberInput),\n/* harmony export */   handleOperationInput: () => (/* binding */ handleOperationInput),\n/* harmony export */   performCalculation: () => (/* binding */ performCalculation),\n/* harmony export */   toggleSign: () => (/* binding */ toggleSign)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/modules/variables.js");\n\r\n\r\nfunction handleNumberInput(value) {\r\n  if (value === ".") {\r\n    if (!_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand.includes(",")) {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand += ",";\r\n    }\r\n  } else {\r\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand === "0") {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = value;\r\n    } else {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand += value;\r\n    }\r\n  }\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand;\r\n}\r\n\r\nfunction handleOperationInput(value) {\r\n  if (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand !== "") {\r\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation === null) {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue = parseFloat(\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand.replace(",", "."),\r\n      );\r\n    } else {\r\n      performCalculation();\r\n    }\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = "";\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation = value;\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].operationDisplay = `${_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue.toString().replace(".", ",")} ${value} `;\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].operationDisplay;\r\n  } else {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation = value;\r\n  }\r\n}\r\n\r\nfunction handleEquals() {\r\n  if (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand !== "") {\r\n    performCalculation();\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = "";\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation = null;\r\n  }\r\n}\r\n\r\nfunction clearCalculator() {\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = "";\r\n\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation = null;\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].operationDisplay = "";\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = "0";\r\n}\r\n\r\nfunction toggleSign() {\r\n  if (\r\n    typeof _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand === "string" &&\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand !== ""\r\n  ) {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = (-parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand))\r\n      .toString()\r\n      .replace(".", ",");\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand;\r\n  }\r\n}\r\n\r\nfunction calculatePercentage() {\r\n  if (\r\n    typeof _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand === "string" &&\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand !== ""\r\n  ) {\r\n    const currentValue = parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand.replace(",", "."));\r\n    const percentageValue = currentValue / 100;\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = percentageValue.toString().replace(".", ",");\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand;\r\n  }\r\n}\r\n\r\nfunction performCalculation() {\r\n  let result;\r\n  const current = parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand.replace(",", "."));\r\n\r\n  switch (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation) {\r\n    case "+":\r\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue + current;\r\n      break;\r\n    case "-":\r\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue - current;\r\n      break;\r\n    case "×":\r\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue * current;\r\n      break;\r\n    case "÷":\r\n      if (current === 0) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = "Error";\r\n        return;\r\n      }\r\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue / current;\r\n      break;\r\n    default:\r\n      return;\r\n  }\r\n\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = result.toString().replace(".", ",");\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue = result;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/functions.js?',
        );
      },
      "./src/modules/setupTheme.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleThemeClick: () => (/* binding */ handleThemeClick)\n/* harmony export */ });\nfunction handleThemeClick() {\r\n  const buttons = document.querySelectorAll(".button");\r\n  const roundRed = document.querySelector(".round.red");\r\n  const roundYellow = document.querySelector(".round.yellow");\r\n  const roundGreen = document.querySelector(".round.green");\r\n  const display = document.querySelector(".display");\r\n  const calculatorBack = document.querySelector(".calculator");\r\n  function switchColor() {\r\n    display.style.backgroundColor = "#000";\r\n    calculatorBack.style.backgroundColor = "#000";\r\n  }\r\n\r\n  roundRed.addEventListener("click", function () {\r\n    buttons.forEach((button) => {\r\n      button.style.backgroundColor = "#ff5f52";\r\n    });\r\n    display.style.color = "#ff5f52";\r\n    switchColor();\r\n  });\r\n\r\n  roundYellow.addEventListener("click", function () {\r\n    buttons.forEach((button) => {\r\n      button.style.backgroundColor = "#f3ba25";\r\n    });\r\n    display.style.color = "#f3ba25";\r\n    switchColor();\r\n  });\r\n\r\n  roundGreen.addEventListener("click", function () {\r\n    buttons.forEach((button) => {\r\n      button.style.backgroundColor = "#26c938";\r\n    });\r\n    display.style.color = "#26c938";\r\n    switchColor();\r\n  });\r\n\r\n  document.addEventListener("keydown", function (event) {\r\n    if (event.key === "Escape") {\r\n      buttons.forEach((button) => {\r\n        button.style.backgroundColor = "";\r\n      });\r\n      display.style.color = "";\r\n      display.style.backgroundColor = "";\r\n      calculatorBack.style.backgroundColor = "";\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/setupTheme.js?',
        );
      },
      "./src/modules/variables.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet variables = {\r\n  displayElement: document.querySelector(".display"),\r\n  currentOperand: "",\r\n  currentOperation: null,\r\n  operationDisplay: "",\r\n  memoryValue: 0,\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variables);\r\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/variables.js?',
        );
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(_) {
    var e = __webpack_module_cache__[_];
    if (void 0 !== e) return e.exports;
    var r = (__webpack_module_cache__[_] = { exports: {} });
    return __webpack_modules__[_](r, r.exports, __webpack_require__), r.exports;
  }
  (__webpack_require__.d = (_, e) => {
    for (var r in e)
      __webpack_require__.o(e, r) &&
        !__webpack_require__.o(_, r) &&
        Object.defineProperty(_, r, { enumerable: !0, get: e[r] });
  }),
    (__webpack_require__.o = (_, e) =>
      Object.prototype.hasOwnProperty.call(_, e)),
    (__webpack_require__.r = (_) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(_, "__esModule", { value: !0 });
    });
  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
