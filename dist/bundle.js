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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ "./src/modules/functions.js");\n/* harmony import */ var _modules_setupTheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/setupTheme.js */ "./src/modules/setupTheme.js");\n\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  (0,_modules_setupTheme_js__WEBPACK_IMPORTED_MODULE_1__.handleThemeClick)();\n  var buttons = document.querySelectorAll(".button");\n  buttons.forEach(function (button) {\n    button.addEventListener("click", function () {\n      var buttonValue = button.getAttribute("data-value");\n      if (!isNaN(buttonValue) || buttonValue === ".") {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleNumberInput)(buttonValue);\n      }\n      if (["+", "-", "×", "÷"].includes(buttonValue)) {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleOperationInput)(buttonValue);\n      }\n      if (buttonValue === "=") {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleEquals)();\n      }\n      if (buttonValue === "AC") {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.clearCalculator)();\n      }\n      if (buttonValue === "+/-") {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleSign)();\n      }\n      if (buttonValue === "%") {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.calculatePercentage)();\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/index.js?',
        );
      },
      "./src/modules/functions.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculatePercentage: () => (/* binding */ calculatePercentage),\n/* harmony export */   clearCalculator: () => (/* binding */ clearCalculator),\n/* harmony export */   handleEquals: () => (/* binding */ handleEquals),\n/* harmony export */   handleNumberInput: () => (/* binding */ handleNumberInput),\n/* harmony export */   handleOperationInput: () => (/* binding */ handleOperationInput),\n/* harmony export */   performCalculation: () => (/* binding */ performCalculation),\n/* harmony export */   toggleSign: () => (/* binding */ toggleSign)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/modules/variables.js");\n\nfunction handleNumberInput(value) {\n  if (value === ".") {\n    if (!_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand.includes(",")) {\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand += ",";\n    }\n  } else {\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand === "0") {\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = value;\n    } else {\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand += value;\n    }\n  }\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand;\n}\nfunction handleOperationInput(value) {\n  if (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand !== "") {\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation === null) {\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue = parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand.replace(",", "."));\n    } else {\n      performCalculation();\n    }\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = "";\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation = value;\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].operationDisplay = "".concat(_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue.toString().replace(".", ","), " ").concat(value, " ");\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].operationDisplay;\n  } else {\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation = value;\n  }\n}\nfunction handleEquals() {\n  if (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand !== "") {\n    performCalculation();\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = "";\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation = null;\n  }\n}\nfunction clearCalculator() {\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = "";\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation = null;\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].operationDisplay = "";\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = "0";\n}\nfunction toggleSign() {\n  if (typeof _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand === "string" && _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand !== "") {\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = (-parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand)).toString().replace(".", ",");\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand;\n  }\n}\nfunction calculatePercentage() {\n  if (typeof _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand === "string" && _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand !== "") {\n    var currentValue = parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand.replace(",", "."));\n    var percentageValue = currentValue / 100;\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand = percentageValue.toString().replace(".", ",");\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand;\n  }\n}\nfunction performCalculation() {\n  var result;\n  var current = parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperand.replace(",", "."));\n  switch (_variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentOperation) {\n    case "+":\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue + current;\n      break;\n    case "-":\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue - current;\n      break;\n    case "×":\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue * current;\n      break;\n    case "÷":\n      if (current === 0) {\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = "Error";\n        return;\n      }\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue / current;\n      break;\n    default:\n      return;\n  }\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayElement.value = result.toString().replace(".", ",");\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__["default"].memoryValue = result;\n}\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/functions.js?',
        );
      },
      "./src/modules/setupTheme.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleThemeClick: () => (/* binding */ handleThemeClick)\n/* harmony export */ });\nfunction handleThemeClick() {\n  var buttons = document.querySelectorAll(".button");\n  var roundRed = document.querySelector(".round.red");\n  var roundYellow = document.querySelector(".round.yellow");\n  var roundGreen = document.querySelector(".round.green");\n  var display = document.querySelector(".display");\n  var calculatorBack = document.querySelector(".calculator");\n  function switchColor() {\n    display.style.backgroundColor = "#000";\n    calculatorBack.style.backgroundColor = "#000";\n  }\n  roundRed.addEventListener("click", function () {\n    buttons.forEach(function (button) {\n      button.style.backgroundColor = "#ff5f52";\n    });\n    display.style.color = "#ff5f52";\n    switchColor();\n  });\n  roundYellow.addEventListener("click", function () {\n    buttons.forEach(function (button) {\n      button.style.backgroundColor = "#f3ba25";\n    });\n    display.style.color = "#f3ba25";\n    switchColor();\n  });\n  roundGreen.addEventListener("click", function () {\n    buttons.forEach(function (button) {\n      button.style.backgroundColor = "#26c938";\n    });\n    display.style.color = "#26c938";\n    switchColor();\n  });\n  document.addEventListener("keydown", function (event) {\n    if (event.key === "Escape") {\n      buttons.forEach(function (button) {\n        button.style.backgroundColor = "";\n      });\n      display.style.color = "";\n      display.style.backgroundColor = "";\n      calculatorBack.style.backgroundColor = "";\n    }\n  });\n}\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/setupTheme.js?',
        );
      },
      "./src/modules/variables.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar variables = {\n  displayElement: document.querySelector(".display"),\n  currentOperand: "",\n  currentOperation: null,\n  operationDisplay: "",\n  memoryValue: 0\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variables);\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/variables.js?',
        );
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(_) {
    var e = __webpack_module_cache__[_];
    if (void 0 !== e) return e.exports;
    var n = (__webpack_module_cache__[_] = { exports: {} });
    return __webpack_modules__[_](n, n.exports, __webpack_require__), n.exports;
  }
  (__webpack_require__.d = (_, e) => {
    for (var n in e)
      __webpack_require__.o(e, n) &&
        !__webpack_require__.o(_, n) &&
        Object.defineProperty(_, n, { enumerable: !0, get: e[n] });
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
