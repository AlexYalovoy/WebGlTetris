/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three.js/shim.js":
/*!***************************************!*\
  !*** ./node_modules/three.js/shim.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:39-53 */
/*! CommonJS bailout: module.exports is used directly at 7:14-28 */
/*! CommonJS bailout: exports is used directly at 7:4-11 */
/***/ ((module, exports, __webpack_require__) => {

eval("var THREE = __webpack_require__(/*! three */ \"./node_modules/three/three.js\");\r\n\r\nconsole.warn( \"WARNING: The 'three.js' npm package is deprecated in favor of the 'three' npm package, please upgrade.\");\r\n\r\nif (true) {\r\n  if ( true && module.exports) {\r\n    exports = module.exports = THREE;\r\n  }\r\n  exports.THREE = THREE;\r\n} else {}\r\n\n\n//# sourceURL=webpack://webgl/./node_modules/three.js/shim.js?");

/***/ }),

/***/ "./node_modules/three/three.js":
/*!*************************************!*\
  !*** ./node_modules/three/three.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 41751:39-53 */
/*! CommonJS bailout: module.exports is used directly at 41752:14-28 */
/*! CommonJS bailout: exports is used directly at 41752:4-11 */
/***/ ((module, exports, __webpack_require__) => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three.js */ \"./node_modules/three.js/shim.js\");\n/* harmony import */ var three_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst scene = new three_js__WEBPACK_IMPORTED_MODULE_0__.THREE.Scene();\r\nconst camera = new three_js__WEBPACK_IMPORTED_MODULE_0__.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n\r\nconst renderer = new three_js__WEBPACK_IMPORTED_MODULE_0__.THREE.WebGLRenderer();\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\n\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\nconst update = () => {\r\n  \r\n};\r\n\r\nconst render = () => {\r\n\r\n};\r\n\r\nconst GameLoop = () => {\r\n  requestAnimationFrame(GameLoop);\r\n\r\n  update();\r\n  render();\r\n};\r\n\r\nGameLoop();\r\n\r\nconsole.log(123)\r\n\n\n//# sourceURL=webpack://webgl/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;