/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _modules_setupTheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/setupTheme.js */ \"./src/modules/setupTheme.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  (0,_modules_setupTheme_js__WEBPACK_IMPORTED_MODULE_1__.handleThemeClick)();\r\n  const buttons = document.querySelectorAll(\".button\");\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener(\"click\", function () {\r\n      const buttonValue = button.getAttribute(\"data-value\");\r\n\r\n      if (!isNaN(buttonValue) || buttonValue === \".\") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleNumberInput)(buttonValue);\r\n      }\r\n\r\n      if ([\"+\", \"-\", \"×\", \"÷\"].includes(buttonValue)) {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleOperationInput)(buttonValue);\r\n      }\r\n\r\n      if (buttonValue === \"=\") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.handleEquals)();\r\n      }\r\n\r\n      if (buttonValue === \"AC\") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.clearCalculator)();\r\n      }\r\n\r\n      if (buttonValue === \"+/-\") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleSign)();\r\n      }\r\n\r\n      if (buttonValue === \"%\") {\r\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.calculatePercentage)();\r\n      }\r\n    });\r\n  });\r\n});\r\n\r\n// document.addEventListener('DOMContentLoaded', function () {\r\n//     const displayElement = document.querySelector('.display');\r\n//     const buttons = document.querySelectorAll('.button');\r\n\r\n//     let currentOperand = '';\r\n//     // let previousOperand = '';\r\n//     let currentOperation = null;\r\n//     let operationDisplay = '';\r\n//     let memoryValue = 0;\r\n\r\n//     buttons.forEach(button => {\r\n//         button.addEventListener('click', function () {\r\n//             const buttonValue = button.getAttribute('data-value');\r\n\r\n//             if (!isNaN(buttonValue) || buttonValue === '.') {\r\n//                 handleNumberInput(buttonValue);\r\n//             }\r\n\r\n//             if (['+', '-', '×', '÷'].includes(buttonValue)) {\r\n//                 handleOperationInput(buttonValue);\r\n//             }\r\n\r\n//             if (buttonValue === '=') {\r\n//                 handleEquals();\r\n//             }\r\n\r\n//             if (buttonValue === 'AC') {\r\n//                 clearCalculator();\r\n//             }\r\n\r\n//             if (buttonValue === '+/-') {\r\n//                 toggleSign();\r\n//             }\r\n\r\n//             if (buttonValue === '%') {\r\n//                 calculatePercentage();\r\n//             }\r\n//         });\r\n//     });\r\n\r\n//     function handleNumberInput(value) {\r\n//         if (value === '.') {\r\n//             if (!currentOperand.includes(',')) {\r\n//                 currentOperand += ',';\r\n//             }\r\n//         } else {\r\n//             if (currentOperand === '0') {\r\n//                 currentOperand = value;\r\n//             } else {\r\n//                 currentOperand += value;\r\n//             }\r\n//         }\r\n//         displayElement.value = currentOperand;\r\n//     }\r\n\r\n//     function handleOperationInput(value) {\r\n//         if (currentOperand !== '') {\r\n//             if (currentOperation === null) {\r\n//                 memoryValue = parseFloat(currentOperand.replace(',', '.'));\r\n//             } else {\r\n//                 performCalculation();\r\n//             }\r\n//             currentOperand = '';\r\n//             currentOperation = value;\r\n//             operationDisplay = `${memoryValue.toString().replace('.', ',')} ${value} `;\r\n//             displayElement.value = operationDisplay;\r\n//         }\r\n//     }\r\n\r\n//     function handleEquals() {\r\n//         if (currentOperand !== '') {\r\n//             performCalculation();\r\n//             currentOperand = '';\r\n//             currentOperation = null;\r\n//         }\r\n//     }\r\n\r\n//     function clearCalculator() {\r\n//         currentOperand = '';\r\n//         // previousOperand = '';\r\n//         currentOperation = null;\r\n//         operationDisplay = '';\r\n//         displayElement.value = '0';\r\n//     }\r\n\r\n//     function toggleSign() {\r\n//         if (currentOperand !== '') {\r\n//             currentOperand = -parseFloat(currentOperand);\r\n//             displayElement.value = currentOperand;\r\n//         }\r\n//     }\r\n\r\n//     function calculatePercentage() {\r\n//         currentOperand = parseFloat(currentOperand) / 100;\r\n//         displayElement.value = currentOperand;\r\n//     }\r\n\r\n//     function performCalculation() {\r\n//         let result;\r\n//         const current = parseFloat(currentOperand.replace(',', '.'));\r\n\r\n//         switch (currentOperation) {\r\n//             case '+':\r\n//                 result = memoryValue + current;\r\n//                 break;\r\n//             case '-':\r\n//                 result = memoryValue - current;\r\n//                 break;\r\n//             case '×':\r\n//                 result = memoryValue * current;\r\n//                 break;\r\n//             case '÷':\r\n//                 if (current === 0) {\r\n//                     displayElement.value = 'Error';\r\n//                     return;\r\n//                 }\r\n//                 result = memoryValue / current;\r\n//                 break;\r\n//             default:\r\n//                 return;\r\n//         }\r\n\r\n//         displayElement.value = result.toString().replace('.', ',');\r\n//         memoryValue = result;\r\n//     }\r\n// });\r\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculatePercentage: () => (/* binding */ calculatePercentage),\n/* harmony export */   clearCalculator: () => (/* binding */ clearCalculator),\n/* harmony export */   handleEquals: () => (/* binding */ handleEquals),\n/* harmony export */   handleNumberInput: () => (/* binding */ handleNumberInput),\n/* harmony export */   handleOperationInput: () => (/* binding */ handleOperationInput),\n/* harmony export */   performCalculation: () => (/* binding */ performCalculation),\n/* harmony export */   toggleSign: () => (/* binding */ toggleSign)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nfunction handleNumberInput(value) {\r\n  if (value === \".\") {\r\n    if (!_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand.includes(\",\")) {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand += \",\";\r\n    }\r\n  } else {\r\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand === \"0\") {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = value;\r\n    } else {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand += value;\r\n    }\r\n  }\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand;\r\n}\r\n\r\nfunction handleOperationInput(value) {\r\n  if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand !== \"\") {\r\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperation === null) {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].memoryValue = parseFloat(\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand.replace(\",\", \".\"),\r\n      );\r\n    } else {\r\n      performCalculation();\r\n    }\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = \"\";\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperation = value;\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operationDisplay = `${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].memoryValue.toString().replace(\".\", \",\")} ${value} `;\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operationDisplay;\r\n  } else {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperation = value;\r\n  }\r\n}\r\n\r\nfunction handleEquals() {\r\n  if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand !== \"\") {\r\n    performCalculation();\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = \"\";\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperation = null;\r\n  }\r\n}\r\n\r\nfunction clearCalculator() {\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = \"\";\r\n\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperation = null;\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operationDisplay = \"\";\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayElement.value = \"0\";\r\n}\r\n\r\nfunction toggleSign() {\r\n  if (\r\n    typeof _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand === \"string\" &&\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand !== \"\"\r\n  ) {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = (-parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand))\r\n      .toString()\r\n      .replace(\".\", \",\");\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand;\r\n  }\r\n}\r\n\r\nfunction calculatePercentage() {\r\n  if (\r\n    typeof _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand === \"string\" &&\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand !== \"\"\r\n  ) {\r\n    const currentValue = parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand.replace(\",\", \".\"));\r\n    const percentageValue = currentValue / 100;\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = percentageValue.toString().replace(\".\", \",\");\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayElement.value = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand;\r\n  }\r\n}\r\n\r\nfunction performCalculation() {\r\n  let result;\r\n  const current = parseFloat(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand.replace(\",\", \".\"));\r\n\r\n  switch (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperation) {\r\n    case \"+\":\r\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].memoryValue + current;\r\n      break;\r\n    case \"-\":\r\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].memoryValue - current;\r\n      break;\r\n    case \"×\":\r\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].memoryValue * current;\r\n      break;\r\n    case \"÷\":\r\n      if (current === 0) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayElement.value = \"Error\";\r\n        return;\r\n      }\r\n      result = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].memoryValue / current;\r\n      break;\r\n    default:\r\n      return;\r\n  }\r\n\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayElement.value = result.toString().replace(\".\", \",\");\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].memoryValue = result;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/setupTheme.js":
/*!***********************************!*\
  !*** ./src/modules/setupTheme.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleThemeClick: () => (/* binding */ handleThemeClick)\n/* harmony export */ });\nfunction handleThemeClick() {\r\n  const buttons = document.querySelectorAll(\".button\");\r\n  const roundRed = document.querySelector(\".round.red\");\r\n  const roundYellow = document.querySelector(\".round.yellow\");\r\n  const roundGreen = document.querySelector(\".round.green\");\r\n  const display = document.querySelector(\".display\");\r\n  const calculatorBack = document.querySelector(\".calculator\");\r\n  function switchColor() {\r\n    display.style.backgroundColor = \"#000\";\r\n    calculatorBack.style.backgroundColor = \"#000\";\r\n  }\r\n\r\n  roundRed.addEventListener(\"click\", function () {\r\n    buttons.forEach((button) => {\r\n      button.style.backgroundColor = \"#ff5f52\";\r\n    });\r\n    display.style.color = \"#ff5f52\";\r\n    switchColor();\r\n  });\r\n\r\n  roundYellow.addEventListener(\"click\", function () {\r\n    buttons.forEach((button) => {\r\n      button.style.backgroundColor = \"#f3ba25\";\r\n    });\r\n    display.style.color = \"#f3ba25\";\r\n    switchColor();\r\n  });\r\n\r\n  roundGreen.addEventListener(\"click\", function () {\r\n    buttons.forEach((button) => {\r\n      button.style.backgroundColor = \"#26c938\";\r\n    });\r\n    display.style.color = \"#26c938\";\r\n    switchColor();\r\n  });\r\n\r\n  document.addEventListener(\"keydown\", function (event) {\r\n    if (event.key === \"Escape\") {\r\n      buttons.forEach((button) => {\r\n        button.style.backgroundColor = \"\";\r\n      });\r\n      display.style.color = \"\";\r\n      display.style.backgroundColor = \"\";\r\n      calculatorBack.style.backgroundColor = \"\";\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/setupTheme.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet variables = {\r\n  displayElement: document.querySelector(\".display\"),\r\n  currentOperand: \"\",\r\n  currentOperation: null,\r\n  operationDisplay: \"\",\r\n  memoryValue: 0,\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variables);\r\n\n\n//# sourceURL=webpack://innowisecalculatorapp/./src/modules/variables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;