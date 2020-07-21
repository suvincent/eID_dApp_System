module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      marginTop: '10px'
    }
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, __jsx("a", {
    className: "item"
  }, "Academic Credential")));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children);
});

/***/ }),

/***/ "./pages/Academic/index.js":
/*!*********************************!*\
  !*** ./pages/Academic/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const path = __webpack_require__(/*! path */ "path"); //const fs = require('fs-extra');


class CertificateIndex extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedFile: null
    });

    _defineProperty(this, "onFileChange", event => {
      this.setState({
        selectedFile: event.target.files[0]
      });
      const curFile = event.target.files[0];
      const reader = new FileReader();
      reader.readAsText(curFile);

      reader.onload = function (e) {
        //console.log('file:', e.target.result);
        let jsonData = JSON.parse(this.result);
        console.log(jsonData); // hash json

        let reader = new FileReader();
        reader.readAsArrayBuffer(curFile);

        reader.onload = function () {
          var wordArray = CryptoJS.lib.WordArray.create(reader.result);
          var hash = CryptoJS.SHA256(wordArray).toString();
          console.log(hash);
        };
      }; // build
      // const buildPath = path.resolve(__dirname, 'build');
      // fs.removeSync(buildPath);
      // const source = fs.readFileSync(jsonData, 'utf8');
      // const output = solc.compile(source, 1).contracts;
      // fs.ensureDirSync(buildPath);
      // //console.log(output);
      // for (let contract in output) {
      //   //console.log(contract);
      //   fs.outputJsonSync(
      //     path.resolve(buildPath, contract.replace(':', '') + '.json'),
      //     output[contract]
      //   );
      // }

    });

    _defineProperty(this, "fileData", () => {
      if (this.state.selectedFile) {
        return __jsx("div", null, __jsx("h2", null, "File Details:"), __jsx("p", null, "File Name: ", this.state.selectedFile.name), __jsx("p", null, "File Type: ", this.state.selectedFile.type));
      }
    });
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"
    }), __jsx("h1", null, "Verify Certificates"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("h3", null, "Choose a JSON file"), __jsx("input", {
      type: "file",
      onChange: this.onFileChange,
      accept: "application/json",
      style: {
        marginBottom: 20
      }
    }), this.fileData(), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/Academic/certificates/success"
    }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      content: "Verify",
      icon: "check circle outline",
      primary: true,
      style: {
        marginTop: 20
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CertificateIndex);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/index', '/').add('/Vote/index', '/Vote/index').add('/Vote/vote/:mb_addr/:address', '/Vote/vote').add('/Vote/status/:mb_addr/:address', '/Vote/status').add('/Vote/admin/:mb_addr/:address', '/Vote/admin').add('/Vote/home/:mb_addr', '/Vote/home').add('/Academic/certificates/success', '/Academic/certificates/success').add('/Academic/certificates/transcript', '/Academic/certificates/transcript').add('/Academic/school', '/Academicschool/index').add('/Academic/school/:address/success', '/Academicschool/success');
module.exports = routes;

/***/ }),

/***/ 5:
/*!***************************************!*\
  !*** multi ./pages/Academic/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\college\Blockchain\DApp\nextjs-web\pages\Academic\index.js */"./pages/Academic/index.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQWNhZGVtaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJtYXJnaW5Ub3AiLCJwcm9wcyIsImNoaWxkcmVuIiwicGF0aCIsInJlcXVpcmUiLCJDZXJ0aWZpY2F0ZUluZGV4IiwiQ29tcG9uZW50Iiwic2VsZWN0ZWRGaWxlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImZpbGVzIiwiY3VyRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0Iiwib25sb2FkIiwiZSIsImpzb25EYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInJlYWRBc0FycmF5QnVmZmVyIiwid29yZEFycmF5IiwiQ3J5cHRvSlMiLCJsaWIiLCJXb3JkQXJyYXkiLCJjcmVhdGUiLCJoYXNoIiwiU0hBMjU2IiwidG9TdHJpbmciLCJzdGF0ZSIsIm5hbWUiLCJ0eXBlIiwicmVuZGVyIiwib25GaWxlQ2hhbmdlIiwibWFyZ2luQm90dG9tIiwiZmlsZURhdGEiLCJyb3V0ZXMiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUVPQSxHQUZQLENBRVcsOEJBRlgsRUFFMkMsWUFGM0MsRUFHT0EsR0FIUCxDQUdXLGdDQUhYLEVBRzZDLGNBSDdDLEVBSU9BLEdBSlAsQ0FJVywrQkFKWCxFQUk0QyxhQUo1QyxFQUtPQSxHQUxQLENBS1cscUJBTFgsRUFLa0MsWUFMbEMsRUFNT0EsR0FOUCxDQU1XLGdDQU5YLEVBTTZDLGdDQU43QyxFQU9PQSxHQVBQLENBT1csbUNBUFgsRUFPZ0QsbUNBUGhELEVBUU9BLEdBUlAsQ0FRVyxrQkFSWCxFQVErQix1QkFSL0IsRUFTT0EsR0FUUCxDQVNXLG1DQVRYLEVBU2dELHlCQVRoRDtBQVVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE1BQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEFjYWRlbWljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+QWNhZGVtaWMgQ3JlZGVudGlhbDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9NZW51PlxyXG4gIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG4vL2NvbnN0IGZzID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcclxuXHJcbmNsYXNzIENlcnRpZmljYXRlSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0geyBzZWxlY3RlZEZpbGU6IG51bGwgfTtcclxuXHJcbiAgb25GaWxlQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmlsZTogZXZlbnQudGFyZ2V0LmZpbGVzWzBdIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1ckZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoY3VyRmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygnZmlsZTonLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKHRoaXMucmVzdWx0KTtcclxuICAgICAgY29uc29sZS5sb2coanNvbkRhdGEpO1xyXG5cclxuICAgICAgLy8gaGFzaCBqc29uXHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoY3VyRmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhoYXNoKTtcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gYnVpbGRcclxuICAgIC8vIGNvbnN0IGJ1aWxkUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdidWlsZCcpO1xyXG4gICAgLy8gZnMucmVtb3ZlU3luYyhidWlsZFBhdGgpO1xyXG5cclxuICAgIC8vIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhqc29uRGF0YSwgJ3V0ZjgnKTtcclxuICAgIC8vIGNvbnN0IG91dHB1dCA9IHNvbGMuY29tcGlsZShzb3VyY2UsIDEpLmNvbnRyYWN0cztcclxuXHJcbiAgICAvLyBmcy5lbnN1cmVEaXJTeW5jKGJ1aWxkUGF0aCk7XHJcblxyXG4gICAgLy8gLy9jb25zb2xlLmxvZyhvdXRwdXQpO1xyXG4gICAgLy8gZm9yIChsZXQgY29udHJhY3QgaW4gb3V0cHV0KSB7XHJcbiAgICAvLyAgIC8vY29uc29sZS5sb2coY29udHJhY3QpO1xyXG4gICAgLy8gICBmcy5vdXRwdXRKc29uU3luYyhcclxuICAgIC8vICAgICBwYXRoLnJlc29sdmUoYnVpbGRQYXRoLCBjb250cmFjdC5yZXBsYWNlKCc6JywgJycpICsgJy5qc29uJyksXHJcbiAgICAvLyAgICAgb3V0cHV0W2NvbnRyYWN0XVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcblxyXG4gIGZpbGVEYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5GaWxlIERldGFpbHM6PC9oMj5cclxuICAgICAgICAgIDxwPkZpbGUgTmFtZToge3RoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPHA+RmlsZSBUeXBlOiB7dGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUudHlwZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2NyeXB0by1qcy8zLjEuOS0xL2NyeXB0by1qcy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxoMT5WZXJpZnkgQ2VydGlmaWNhdGVzPC9oMT5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxoMz5DaG9vc2UgYSBKU09OIGZpbGU8L2gzPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0aGlzLmZpbGVEYXRhKCl9XHJcbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9BY2FkZW1pYy9jZXJ0aWZpY2F0ZXMvc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PSdWZXJpZnknXHJcbiAgICAgICAgICAgICAgICBpY29uPSdjaGVjayBjaXJjbGUgb3V0bGluZSdcclxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlcnRpZmljYXRlSW5kZXg7IiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xyXG5cclxuXHJcbnJvdXRlcy5hZGQoJy9pbmRleCcsICcvJylcclxuICAgICAgLmFkZCgnL1ZvdGUvaW5kZXgnLCAnL1ZvdGUvaW5kZXgnKVxyXG4gICAgICAuYWRkKCcvVm90ZS92b3RlLzptYl9hZGRyLzphZGRyZXNzJywgJy9Wb3RlL3ZvdGUnKVxyXG4gICAgICAuYWRkKCcvVm90ZS9zdGF0dXMvOm1iX2FkZHIvOmFkZHJlc3MnLCAnL1ZvdGUvc3RhdHVzJylcclxuICAgICAgLmFkZCgnL1ZvdGUvYWRtaW4vOm1iX2FkZHIvOmFkZHJlc3MnLCAnL1ZvdGUvYWRtaW4nKVxyXG4gICAgICAuYWRkKCcvVm90ZS9ob21lLzptYl9hZGRyJywgJy9Wb3RlL2hvbWUnKVxyXG4gICAgICAuYWRkKCcvQWNhZGVtaWMvY2VydGlmaWNhdGVzL3N1Y2Nlc3MnLCAnL0FjYWRlbWljL2NlcnRpZmljYXRlcy9zdWNjZXNzJylcclxuICAgICAgLmFkZCgnL0FjYWRlbWljL2NlcnRpZmljYXRlcy90cmFuc2NyaXB0JywgJy9BY2FkZW1pYy9jZXJ0aWZpY2F0ZXMvdHJhbnNjcmlwdCcpXHJcbiAgICAgIC5hZGQoJy9BY2FkZW1pYy9zY2hvb2wnLCAnL0FjYWRlbWljc2Nob29sL2luZGV4JylcclxuICAgICAgLmFkZCgnL0FjYWRlbWljL3NjaG9vbC86YWRkcmVzcy9zdWNjZXNzJywgJy9BY2FkZW1pY3NjaG9vbC9zdWNjZXNzJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=