webpackHotUpdate("static\\development\\pages\\Academic\\school.js",{

/***/ "./pages/Academic/school/index.js":
/*!****************************************!*\
  !*** ./pages/Academic/school/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_academic_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ethereum/academic/web3 */ "./ethereum/academic/web3.js");
/* harmony import */ var _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ethereum/academic/verify */ "./ethereum/academic/verify.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_15__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var UploadIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UploadIndex, _Component);

  var _super = _createSuper(UploadIndex);

  function UploadIndex() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UploadIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      selectedFile: null,
      hashValue: '',
      newSchool: '',
      errorMessage: '',
      loading: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFileChange", function (event) {
      _this.setState({
        selectedFile: event.target.files[0],
        errorMessage: ''
      });

      var curFile = event.target.files[0];
      var reader = new FileReader();

      var that = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this);

      reader.readAsText(curFile);

      reader.onload = function (e) {
        //console.log('file:', e.target.result);
        var jsonData = JSON.parse(this.result); //console.log(jsonData.issuers[0].address);

        that.setState({
          certIssuer: jsonData.issuers[0].address
        });
        console.log(that.state.certIssuer);
      }; // hash json


      var reader2 = new FileReader();
      reader2.readAsArrayBuffer(curFile);

      reader2.onload = function (e) {
        var wordArray = crypto_js__WEBPACK_IMPORTED_MODULE_15___default.a.lib.WordArray.create(reader2.result);
        var hash = crypto_js__WEBPACK_IMPORTED_MODULE_15___default.a.SHA256(wordArray).toString();
        that.setState({
          hashValue: hash
        });
        console.log(that.state.hashValue, "hash");
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fileData", function () {
      if (_this.state.selectedFile) {
        return __jsx("div", null, __jsx("h2", null, "File Details:"), __jsx("p", null, "File Name: ", _this.state.selectedFile.name), __jsx("p", null, "File Type: ", _this.state.selectedFile.type));
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClick", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              }); //console.log(this.state.hashValue);


              _context.prev = 1;
              _context.next = 4;
              return _ethereum_academic_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_14__["default"].methods.upload(_this.state.hashValue).send({
                from: accounts[0]
              });

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 12:
              _this.setState({
                loading: false
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context2.prev = 2;
                _context2.next = 5;
                return _ethereum_academic_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_14__["default"].methods.newSchool(_this.state.newSchool).send({
                  from: accounts[0]
                });

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);

                _this.setState({
                  errorMessage: _context2.t0.message
                });

              case 13:
                _this.setState({
                  loading: false
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(UploadIndex, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"
      }), __jsx("h1", null, "Upload Certificates"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        route: "/Academic/school/schoolList"
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        floated: "right",
        content: "View All Schools",
        primary: true,
        style: {
          marginBottom: 20
        }
      }))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        route: "/Academic/school/students"
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        floated: "right",
        content: "View All Transcripts",
        primary: true,
        style: {
          marginBottom: 20
        }
      }))), __jsx("br", null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        error: !!this.state.errorMessage
      }, __jsx("h3", null, "Choose a JSON file"), __jsx("input", {
        type: "file",
        onChange: this.onFileChange,
        accept: "application/json",
        style: {
          marginBottom: 20
        }
      }), this.fileData(), __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.onClick,
        loading: this.state.loading,
        content: "Upload",
        icon: "upload",
        primary: true,
        style: {
          marginTop: 10,
          marginBottom: 20
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("h3", null, "Add new school"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.newSchool,
        onChange: function onChange(event) {
          return _this2.setState({
            newSchool: event.target.value
          });
        }
      })), __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        loading: this.state.loading,
        content: "Add",
        icon: "add",
        primary: true
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      })));
    }
  }]);

  return UploadIndex;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UploadIndex);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BY2FkZW1pYy9zY2hvb2wvaW5kZXguanMiXSwibmFtZXMiOlsiVXBsb2FkSW5kZXgiLCJzZWxlY3RlZEZpbGUiLCJoYXNoVmFsdWUiLCJuZXdTY2hvb2wiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImZpbGVzIiwiY3VyRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0aGF0IiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsImUiLCJqc29uRGF0YSIsIkpTT04iLCJwYXJzZSIsInJlc3VsdCIsImNlcnRJc3N1ZXIiLCJpc3N1ZXJzIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInJlYWRlcjIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIndvcmRBcnJheSIsIkNyeXB0b0pTIiwibGliIiwiV29yZEFycmF5IiwiY3JlYXRlIiwiaGFzaCIsIlNIQTI1NiIsInRvU3RyaW5nIiwibmFtZSIsInR5cGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInZlcmlmeSIsIm1ldGhvZHMiLCJ1cGxvYWQiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcmdpbkJvdHRvbSIsIm9uRmlsZUNoYW5nZSIsImZpbGVEYXRhIiwib25DbGljayIsIm1hcmdpblRvcCIsIm9uU3VibWl0IiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsVzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxrQkFBWSxFQUFFLElBRFI7QUFFTkMsZUFBUyxFQUFFLEVBRkw7QUFHTkMsZUFBUyxFQUFFLEVBSEw7QUFJTkMsa0JBQVksRUFBRSxFQUpSO0FBS05DLGFBQU8sRUFBRTtB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LE9BRHRCO0FBRUUsZUFBTyxFQUFDLEtBRlY7QUFHRSxZQUFJLEVBQUMsS0FIUDtBQUlFLGVBQU8sRUFBRTtBQUpYLFFBREYsQ0FURixFQWlCRSxNQUFDLDBEQUFEO0FBQVMsYUFBSyxNQUFkO0FBQWUsY0FBTSxFQUFDLE9BQXRCO0FBQThCLGVBQU8sRUFBRSxLQUFLcUIsS0FBTCxDQUFXdEI7QUFBbEQsUUFqQkYsQ0E1Q0YsQ0FERjtBQWtFRDs7OztFQWxKdUJxRCwrQzs7QUFxSlh6RCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcQWNhZGVtaWNcXHNjaG9vbC5qcy5iZjUyMzAwMGU1NDQ2NjIyNjBiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2FjYWRlbWljL3dlYjMnO1xyXG5pbXBvcnQgdmVyaWZ5IGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2FjYWRlbWljL3ZlcmlmeSc7XHJcbmltcG9ydCBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5jbGFzcyBVcGxvYWRJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZWxlY3RlZEZpbGU6IG51bGwsXHJcbiAgICBoYXNoVmFsdWU6ICcnLFxyXG4gICAgbmV3U2Nob29sOiAnJyxcclxuICAgIGVycm9yTWVzc2FnZTogJycsXHJcbiAgICBsb2FkaW5nOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIG9uRmlsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZEZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY3VyRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChjdXJGaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdmaWxlOicsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgIGxldCBqc29uRGF0YSA9IEpTT04ucGFyc2UodGhpcy5yZXN1bHQpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGpzb25EYXRhLmlzc3VlcnNbMF0uYWRkcmVzcyk7XHJcbiAgICAgIHRoYXQuc2V0U3RhdGUoeyBjZXJ0SXNzdWVyOiBqc29uRGF0YS5pc3N1ZXJzWzBdLmFkZHJlc3MgfSlcclxuICAgICAgY29uc29sZS5sb2codGhhdC5zdGF0ZS5jZXJ0SXNzdWVyKTtcclxuICAgIH07XHJcbiAgICAvLyBoYXNoIGpzb25cclxuICAgIGNvbnN0IHJlYWRlcjIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyMi5yZWFkQXNBcnJheUJ1ZmZlcihjdXJGaWxlKTtcclxuICAgIHJlYWRlcjIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKHJlYWRlcjIucmVzdWx0KTtcclxuICAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYod29yZEFycmF5KS50b1N0cmluZygpO1xyXG4gICAgICB0aGF0LnNldFN0YXRlKHsgaGFzaFZhbHVlOiBoYXNoIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGF0LnN0YXRlLmhhc2hWYWx1ZSxcImhhc2hcIik7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGZpbGVEYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5GaWxlIERldGFpbHM6PC9oMj5cclxuICAgICAgICAgIDxwPkZpbGUgTmFtZToge3RoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPHA+RmlsZSBUeXBlOiB7dGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUudHlwZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLmhhc2hWYWx1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IHZlcmlmeS5tZXRob2RzLnVwbG9hZCh0aGlzLnN0YXRlLmhhc2hWYWx1ZSkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCB2ZXJpZnkubWV0aG9kc1xyXG4gICAgICAgIC5uZXdTY2hvb2wodGhpcy5zdGF0ZS5uZXdTY2hvb2wpXHJcbiAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2NyeXB0by1qcy8zLjEuOS0xL2NyeXB0by1qcy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxoMT5VcGxvYWQgQ2VydGlmaWNhdGVzPC9oMT5cclxuICAgICAgICA8TGluayByb3V0ZT1cIi9BY2FkZW1pYy9zY2hvb2wvc2Nob29sTGlzdFwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9J1ZpZXcgQWxsIFNjaG9vbHMnXHJcbiAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL0FjYWRlbWljL3NjaG9vbC9zdHVkZW50c1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9J1ZpZXcgQWxsIFRyYW5zY3JpcHRzJ1xyXG4gICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8Rm9ybSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8aDM+Q2hvb3NlIGEgSlNPTiBmaWxlPC9oMz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgYWNjZXB0PVwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dGhpcy5maWxlRGF0YSgpfVxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9J1VwbG9hZCdcclxuICAgICAgICAgICAgICBpY29uPSd1cGxvYWQnXHJcbiAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGgzPkFkZCBuZXcgc2Nob29sPC9oMz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3U2Nob29sfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1NjaG9vbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgY29udGVudD0nQWRkJ1xyXG4gICAgICAgICAgICAgIGljb249J2FkZCdcclxuICAgICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=