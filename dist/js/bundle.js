/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {

function myModule() {
  const obj = {};

  this.define = function (name, param, timeout) {
    obj[name] = new Promise((resolve) =>
      setTimeout(() => resolve(param), timeout)
    );
  };
  this.require = function (param, callback) {
    Promise.all(Object.values(obj)).then((res) => {
      callback(...res);
    });
  };
}

module.exports = myModule;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js");
console.log("ac8пшп");

const modules = new myModule();

modules.define("A", 3, 0);
modules.define("B", 5, 2000);
modules.define("C", 9, 1000);

modules.require(["A", "B"], (A, B) => console.log("result", A + B));
modules.require(["A", "B", "C"], (A, B, C) =>
  console.log("result-2", A + B - C)
);

console.log("4---", 44);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map