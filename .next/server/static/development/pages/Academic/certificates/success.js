module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./certificate.json":
/*!**************************!*\
  !*** ./certificate.json ***!
  \**************************/
/*! exports provided: data, issuers, transcript, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[{\"name\":\"Su Vincent\",\"address\":\"0xE4aB681D8CeFe12A6bb2c20873Bc02cC2C68746E\",\"issuedDate\":\"2020-06-13\"}],\"issuers\":[{\"name\":\"NTHU\",\"address\":\"0x097F783e11482f5d05753c9619424171E8E8B3f6\"}],\"transcript\":[{\"name\":\"Introduction to Programming\",\"grade\":\"A+\",\"courseCredit\":3,\"courseCode\":\"CS 1110\",\"examinationDate\":\"2022-07-20\",\"semester\":20},{\"name\":\"Object Oriented Programming in Java\",\"grade\":\"A+\",\"courseCredit\":4,\"courseCode\":\"CS 2110\",\"examinationDate\":\"2020-07-20\",\"semester\":10},{\"name\":\"Microeconomics\",\"grade\":\"A+\",\"courseCredit\":4,\"courseCode\":\"ECON 3030\",\"examinationDate\":\"2020-07-20\",\"semester\":20}]}");

/***/ }),

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

/***/ "./pages/Academic/certificates/success.js":
/*!************************************************!*\
  !*** ./pages/Academic/certificates/success.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _certificate_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../certificate.json */ "./certificate.json");
var _certificate_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../certificate.json */ "./certificate.json", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class SuccessPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", null, __jsx("h1", null, "Successfully Verified!!!"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      route: "/Academic/certificates/transcript"
    }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      floated: "right",
      content: "View Transcript",
      primary: true
    }))), __jsx("br", null), __jsx("h2", null, "Issued to "), __jsx("h3", {
      style: {
        display: 'inline'
      }
    }, "Address"), "\u2003", _certificate_json__WEBPACK_IMPORTED_MODULE_4__.data[0].address, __jsx("br", null), __jsx("br", null), __jsx("h3", {
      style: {
        display: 'inline'
      }
    }, "Name"), "\u2003\u2003\u2009\u2009", _certificate_json__WEBPACK_IMPORTED_MODULE_4__.data[0].name, __jsx("h2", null, "Issued by"), __jsx("h3", {
      style: {
        display: 'inline'
      }
    }, "Address"), "\u2003", _certificate_json__WEBPACK_IMPORTED_MODULE_4__.issuers[0].address, __jsx("br", null), " ", __jsx("br", null), __jsx("h3", {
      style: {
        display: 'inline'
      }
    }, "Name"), "\u2003\u2003\u2009\u2009", _certificate_json__WEBPACK_IMPORTED_MODULE_4__.issuers[0].name, __jsx("h2", null, "Issued at"), __jsx("h3", {
      style: {
        display: 'inline'
      }
    }, "Date"), "\u2003\u2003\u2003", _certificate_json__WEBPACK_IMPORTED_MODULE_4__.data[0].issuedDate));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SuccessPage);

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

/***/ 6:
/*!******************************************************!*\
  !*** multi ./pages/Academic/certificates/success.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\college\Blockchain\DApp\nextjs-web\pages\Academic\certificates\success.js */"./pages/Academic/certificates/success.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQWNhZGVtaWMvY2VydGlmaWNhdGVzL3N1Y2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIm1hcmdpblRvcCIsInByb3BzIiwiY2hpbGRyZW4iLCJTdWNjZXNzUGFnZSIsIkNvbXBvbmVudCIsInJlbmRlciIsImRpc3BsYXkiLCJjZXJ0RGF0YSIsImRhdGEiLCJhZGRyZXNzIiwibmFtZSIsImlzc3VlcnMiLCJpc3N1ZWREYXRlIiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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WCxFQU02QyxnQ0FON0MsRUFPT0EsR0FQUCxDQU9XLG1DQVBYLEVBT2dELG1DQVBoRCxFQVFPQSxHQVJQLENBUVcsa0JBUlgsRUFRK0IsdUJBUi9CLEVBU09BLEdBVFAsQ0FTVyxtQ0FUWCxFQVNnRCx5QkFUaEQ7QUFVQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxBY2FkZW1pY1xcY2VydGlmaWNhdGVzXFxzdWNjZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICA8TGluayByb3V0ZT1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+QWNhZGVtaWMgQ3JlZGVudGlhbDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9NZW51PlxyXG4gIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7ICBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IGNlcnREYXRhIGZyb20gJy4uLy4uLy4uL2NlcnRpZmljYXRlLmpzb24nO1xyXG5cclxuY2xhc3MgU3VjY2Vzc1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5TdWNjZXNzZnVsbHkgVmVyaWZpZWQhISE8L2gxPlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvQWNhZGVtaWMvY2VydGlmaWNhdGVzL3RyYW5zY3JpcHRcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBmbG9hdGVkPVwicmlnaHRcIiBjb250ZW50PSdWaWV3IFRyYW5zY3JpcHQnIHByaW1hcnk9e3RydWV9Lz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aDI+SXNzdWVkIHRvIDwvaDI+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lJ319PkFkZHJlc3M8L2gzPiZlbXNwO3tjZXJ0RGF0YS5kYXRhWzBdLmFkZHJlc3N9XHJcbiAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgIDxoMyBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnfX0+TmFtZTwvaDM+JmVtc3A7JmVtc3A7JnRoaW5zcDsmdGhpbnNwO3tjZXJ0RGF0YS5kYXRhWzBdLm5hbWV9XHJcbiAgICAgICAgICA8aDI+SXNzdWVkIGJ5PC9oMj5cclxuICAgICAgICAgIDxoMyBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnfX0+QWRkcmVzczwvaDM+JmVtc3A7e2NlcnREYXRhLmlzc3VlcnNbMF0uYWRkcmVzc31cclxuICAgICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICAgIDxoMyBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnfX0+TmFtZTwvaDM+JmVtc3A7JmVtc3A7JnRoaW5zcDsmdGhpbnNwO3tjZXJ0RGF0YS5pc3N1ZXJzWzBdLm5hbWV9XHJcbiAgICAgICAgICA8aDI+SXNzdWVkIGF0PC9oMj5cclxuICAgICAgICAgIDxoMyBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUnfX0+RGF0ZTwvaDM+JmVtc3A7JmVtc3A7JmVtc3A7e2NlcnREYXRhLmRhdGFbMF0uaXNzdWVkRGF0ZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VjY2Vzc1BhZ2U7IiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xyXG5cclxuXHJcbnJvdXRlcy5hZGQoJy9pbmRleCcsICcvJylcclxuICAgICAgLmFkZCgnL1ZvdGUvaW5kZXgnLCAnL1ZvdGUvaW5kZXgnKVxyXG4gICAgICAuYWRkKCcvVm90ZS92b3RlLzptYl9hZGRyLzphZGRyZXNzJywgJy9Wb3RlL3ZvdGUnKVxyXG4gICAgICAuYWRkKCcvVm90ZS9zdGF0dXMvOm1iX2FkZHIvOmFkZHJlc3MnLCAnL1ZvdGUvc3RhdHVzJylcclxuICAgICAgLmFkZCgnL1ZvdGUvYWRtaW4vOm1iX2FkZHIvOmFkZHJlc3MnLCAnL1ZvdGUvYWRtaW4nKVxyXG4gICAgICAuYWRkKCcvVm90ZS9ob21lLzptYl9hZGRyJywgJy9Wb3RlL2hvbWUnKVxyXG4gICAgICAuYWRkKCcvQWNhZGVtaWMvY2VydGlmaWNhdGVzL3N1Y2Nlc3MnLCAnL0FjYWRlbWljL2NlcnRpZmljYXRlcy9zdWNjZXNzJylcclxuICAgICAgLmFkZCgnL0FjYWRlbWljL2NlcnRpZmljYXRlcy90cmFuc2NyaXB0JywgJy9BY2FkZW1pYy9jZXJ0aWZpY2F0ZXMvdHJhbnNjcmlwdCcpXHJcbiAgICAgIC5hZGQoJy9BY2FkZW1pYy9zY2hvb2wnLCAnL0FjYWRlbWljc2Nob29sL2luZGV4JylcclxuICAgICAgLmFkZCgnL0FjYWRlbWljL3NjaG9vbC86YWRkcmVzcy9zdWNjZXNzJywgJy9BY2FkZW1pY3NjaG9vbC9zdWNjZXNzJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9