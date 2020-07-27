webpackHotUpdate("static\\development\\pages\\Academic.js",{

/***/ "./pages/Academic/index.js":
/*!*********************************!*\
  !*** ./pages/Academic/index.js ***!
  \*********************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/academic/verify */ "./ethereum/academic/verify.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_14__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js"); //const fs = require('fs-extra');


var CertificateIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CertificateIndex, _Component);

  var _super = _createSuper(CertificateIndex);

  function CertificateIndex() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CertificateIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      selectedFile: null,
      hashValue: '',
      certIssuer: '',
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
        var wordArray = crypto_js__WEBPACK_IMPORTED_MODULE_14___default.a.lib.WordArray.create(reader2.result);
        var hash = crypto_js__WEBPACK_IMPORTED_MODULE_14___default.a.SHA256(wordArray).toString();
        that.setState({
          hashValue: hash
        });
        console.log(that.state.hashValue, "hash");
      }; // build json
      // const buildPath = path.resolve(__dirname, 'build');
      // // const source = fs.readFileSync(jsonData, 'utf8');
      // // const output = solc.compile(source, 1).contracts;
      // fs.ensureDirSync(buildPath);
      // //console.log(output);
      // fs.outputJsonSync(
      //   path.resolve(buildPath, 'certificate.json'),
      //   jsonData
      //   );

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
              return web3.eth.getAccounts();

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_13__["default"].methods.validation(_this.state.hashValue).send({
                from: accounts[0]
              });

            case 7:
              _context.next = 9;
              return _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_13__["default"].methods.legality(_this.state.certIssuer).send({
                from: accounts[0]
              });

            case 9:
              _routes__WEBPACK_IMPORTED_MODULE_12__["Router"].pushRoute("/Academic/certificates/".concat(_this.state.hashValue, "/success"));
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 15:
              _this.setState({
                loading: false
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    })));

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CertificateIndex, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx("h1", null, "Verify Certificates"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
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
        content: "Verify",
        icon: "check circle outline",
        primary: true,
        style: {
          marginTop: 20
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      })));
    }
  }]);

  return CertificateIndex;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CertificateIndex);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BY2FkZW1pYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsIkNlcnRpZmljYXRlSW5kZXgiLCJzZWxlY3RlZEZpbGUiLCJoYXNoVmFsdWUiLCJjZXJ0SXNzdWVyIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJmaWxlcyIsImN1ckZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwidGhhdCIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJlIiwianNvbkRhdGEiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiLCJpc3N1ZXJzIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInJlYWRlcjIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIndvcmRBcnJheSIsIkNyeXB0b0pTIiwibGliIiwiV29yZEFycmF5IiwiY3JlYXRlIiwiaGFzaCIsIlNIQTI1NiIsInRvU3RyaW5nIiwibmFtZSIsInR5cGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInZlcmlmeSIsIm1ldGhvZHMiLCJ2YWxpZGF0aW9uIiwic2VuZCIsImZyb20iLCJsZWdhbGl0eSIsIlJvdXRlciIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJvbkZpbGVDaGFuZ2UiLCJtYXJnaW5Cb3R0b20iLCJmaWxlRGF0YSIsIm9uQ2xpY2siLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMscURBQUQsQ0FBcEIsQyxDQUNBOzs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsa0JBQVksRUFBRSxJQURSO0FBRU5DLGVBQVMsRUFBRSxFQUZMO0FBR05DLGdC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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcQWNhZGVtaWMuanMuZTM5NTM0MTljY2JmMDkwMDJhMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB2ZXJpZnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vYWNhZGVtaWMvdmVyaWZ5JztcclxuaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbi8vY29uc3QgZnMgPSByZXF1aXJlKCdmcy1leHRyYScpO1xyXG5cclxuY2xhc3MgQ2VydGlmaWNhdGVJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZWxlY3RlZEZpbGU6IG51bGwsXHJcbiAgICBoYXNoVmFsdWU6ICcnLFxyXG4gICAgY2VydElzc3VlcjogJycsXHJcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgbG9hZGluZzogZmFsc2VcclxuICB9O1xyXG5cclxuICBvbkZpbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRGaWxlOiBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1ckZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoY3VyRmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygnZmlsZTonLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKHRoaXMucmVzdWx0KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhqc29uRGF0YS5pc3N1ZXJzWzBdLmFkZHJlc3MpO1xyXG4gICAgICB0aGF0LnNldFN0YXRlKHsgY2VydElzc3VlcjoganNvbkRhdGEuaXNzdWVyc1swXS5hZGRyZXNzIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoYXQuc3RhdGUuY2VydElzc3Vlcik7XHJcbiAgICB9O1xyXG4gICAgLy8gaGFzaCBqc29uXHJcbiAgICBjb25zdCByZWFkZXIyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlcjIucmVhZEFzQXJyYXlCdWZmZXIoY3VyRmlsZSk7XHJcbiAgICByZWFkZXIyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShyZWFkZXIyLnJlc3VsdCk7XHJcbiAgICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSkudG9TdHJpbmcoKTtcclxuICAgICAgdGhhdC5zZXRTdGF0ZSh7IGhhc2hWYWx1ZTogaGFzaCB9KTtcclxuICAgICAgY29uc29sZS5sb2codGhhdC5zdGF0ZS5oYXNoVmFsdWUsXCJoYXNoXCIpO1xyXG4gICAgfTtcclxuICAgIC8vIGJ1aWxkIGpzb25cclxuICAgIC8vIGNvbnN0IGJ1aWxkUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdidWlsZCcpO1xyXG5cclxuICAgIC8vIC8vIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhqc29uRGF0YSwgJ3V0ZjgnKTtcclxuICAgIC8vIC8vIGNvbnN0IG91dHB1dCA9IHNvbGMuY29tcGlsZShzb3VyY2UsIDEpLmNvbnRyYWN0cztcclxuXHJcbiAgICAvLyBmcy5lbnN1cmVEaXJTeW5jKGJ1aWxkUGF0aCk7XHJcblxyXG4gICAgLy8gLy9jb25zb2xlLmxvZyhvdXRwdXQpO1xyXG4gICAgLy8gZnMub3V0cHV0SnNvblN5bmMoXHJcbiAgICAvLyAgIHBhdGgucmVzb2x2ZShidWlsZFBhdGgsICdjZXJ0aWZpY2F0ZS5qc29uJyksXHJcbiAgICAvLyAgIGpzb25EYXRhXHJcbiAgICAvLyAgICk7XHJcbiAgfTtcclxuXHJcbiAgZmlsZURhdGEgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPkZpbGUgRGV0YWlsczo8L2gyPlxyXG4gICAgICAgICAgPHA+RmlsZSBOYW1lOiB7dGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUubmFtZX08L3A+XHJcbiAgICAgICAgICA8cD5GaWxlIFR5cGU6IHt0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZS50eXBlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLmhhc2hWYWx1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IHZlcmlmeS5tZXRob2RzLnZhbGlkYXRpb24odGhpcy5zdGF0ZS5oYXNoVmFsdWUpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXdhaXQgdmVyaWZ5Lm1ldGhvZHMubGVnYWxpdHkodGhpcy5zdGF0ZS5jZXJ0SXNzdWVyKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9BY2FkZW1pYy9jZXJ0aWZpY2F0ZXMvJHt0aGlzLnN0YXRlLmhhc2hWYWx1ZX0vc3VjY2Vzc2ApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+VmVyaWZ5IENlcnRpZmljYXRlczwvaDE+XHJcbiAgICAgICAgPEZvcm0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgICAgPGgzPkNob29zZSBhIEpTT04gZmlsZTwvaDM+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RoaXMuZmlsZURhdGEoKX1cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICBjb250ZW50PSdWZXJpZnknXHJcbiAgICAgICAgICAgICAgaWNvbj0nY2hlY2sgY2lyY2xlIG91dGxpbmUnXHJcbiAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2VydGlmaWNhdGVJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9