webpackHotUpdate("static\\development\\pages\\Vote.js",{

/***/ "./pages/Vote/index.js":
/*!*****************************!*\
  !*** ./pages/Vote/index.js ***!
  \*****************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _ethereum_Vote_factory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ethereum/Vote/factory */ "./ethereum/Vote/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.state = {
      loading: false,
      loading2: false,
      errorMessage: ''
    }; // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：

    _this.login = _this.login.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.create = _this.create.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "login",
    value: function () {
      var _login = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var accounts, addr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                event.preventDefault();
                this.setState({
                  loading: true
                });
                _context.next = 5;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 5:
                accounts = _context.sent;
                console.log(accounts[0]);
                _context.next = 9;
                return _ethereum_Vote_factory__WEBPACK_IMPORTED_MODULE_16__["default"].methods.return_addr(accounts[0]).call();

              case 9:
                addr = _context.sent;
                console.log(addr);
                if (addr != '0x0000000000000000000000000000000000000000') _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/home/".concat(addr.toString()));else alert("please create a mailbox first!");
                this.setState({
                  loading: false
                });
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                alert(_context.t0);
                this.setState({
                  loading: false
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var accounts, addr, _addr;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                event.preventDefault();
                this.setState({
                  loading2: true
                });
                _context2.next = 5;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return _ethereum_Vote_factory__WEBPACK_IMPORTED_MODULE_16__["default"].methods.return_addr(accounts[0]).call();

              case 8:
                addr = _context2.sent;

                if (!(addr != '0x0000000000000000000000000000000000000000')) {
                  _context2.next = 13;
                  break;
                }

                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/home/".concat(addr));
                _context2.next = 20;
                break;

              case 13:
                _context2.next = 15;
                return _ethereum_Vote_factory__WEBPACK_IMPORTED_MODULE_16__["default"].methods.create_mailbox().send({
                  from: accounts[0]
                });

              case 15:
                _context2.next = 17;
                return _ethereum_Vote_factory__WEBPACK_IMPORTED_MODULE_16__["default"].methods.return_addr(accounts[0]).call();

              case 17:
                _addr = _context2.sent;
                if (_addr != null) _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/home/".concat(_addr));else alert("somthing wrong please try again!");
                this.setState({
                  loading2: false
                });

              case 20:
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](0);
                alert(_context2.t0);
                this.setState({
                  loading2: false
                });

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 22]]);
      }));

      function create(_x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossOrigin: "anonymous"
      }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bg: "dark",
        variant: "dark",
        style: {
          width: "100%"
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Brand, null, "Vote"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mr-auto",
        style: {
          width: "50%",
          color: "white"
        }
      }, "Welcome to the vote website!"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/index"
      }, __jsx("a", null, "Go to other service"))), __jsx("div", {
        style: {
          margin: "auto"
        }
      }, __jsx("h2", {
        style: {
          margin: "auto",
          marginTop: "30%"
        }
      }, "Login to your mailbox", __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "outline-info",
        style: {
          width: '75%',
          margin: "auto",
          marginTop: "3%"
        },
        onClick: this.login,
        loading: this.state.loading.toString()
      }, "Login to your mailbox")), __jsx("h2", {
        style: {
          margin: "auto",
          marginTop: "30%"
        }
      }, "Create your new mailbox", __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "outline-info",
        style: {
          width: '75%',
          margin: "auto",
          marginTop: "3%"
        },
        onClick: this.create,
        loading: this.state.loading2.toString()
      }, "Create new mailbox")))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJsb2FkaW5nMiIsImVycm9yTWVzc2FnZSIsImxvZ2luIiwiYmluZCIsImNyZWF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImZhY3RvcnkiLCJtZXRob2RzIiwicmV0dXJuX2FkZHIiLCJjYWxsIiwiYWRkciIsIlJvdXRlciIsInB1c2hSb3V0ZSIsInRvU3RyaW5nIiwiYWxlcnQiLCJjcmVhdGVfbWFpbGJveCIsInNlbmQiLCJmcm9tIiwid2lkdGgiLCJjb2xvciIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsSzs7Ozs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBWTtBQUNWQyxhQUFPLEVBQUcsS0FEQTtBQUVWQyxjQUFRLEVBQUUsS0FGQTtBQUdWQyxrQkFBWSxFQUFDO0FBSEgsS0FBWixDQUZpQixDQU9qQjs7QUFDQSxVQUFLQyxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXQyxJQUFYLHlHQUFiO0FBQ0EsVUFBS0MsTUFBTCxHQUFhLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWix5R0FBYjtBQVRpQjtBQVVsQjs7Ozs7cU5BQ1dFLEs7Ozs7Ozs7QUFFUkEscUJBQUssQ0FBQ0MsY0FBTjtBQUNBLHFCQUFLQyxRQUFMLENBQWM7QUFBQ1IseUJBQU8sRUFBQztBQUFULGlCQUFk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RUFBQyxjQUFoQjtBQUErQixhQUFLLEVBQUk7QUFBQ0gsZUFBSyxFQUFFLEtBQVI7QUFBY0UsZ0JBQU0sRUFBQyxNQUFyQjtBQUE0QkMsbUJBQVMsRUFBRztBQUF4QyxTQUF4QztBQUF1RixlQUFPLEVBQUUsS0FBSzNCLEtBQXJHO0FBQTRHLGVBQU8sRUFBRSxLQUFLSixLQUFMLENBQVdDLE9BQVgsQ0FBbUJzQixRQUFuQjtBQUFySCxpQ0FGQSxDQURELEVBS0M7QUFBSSxhQUFLLEVBQUk7QUFBQ08sZ0JBQU0sRUFBQyxNQUFSO0FBQWVDLG1CQUFTLEVBQUc7QUFBM0I7QUFBYixvQ0FFQSxNQUFDLCtEQUFEO0FBQVEsZUFBTyxFQUFDLGNBQWhCO0FBQStCLGFBQUssRUFBSTtBQUFDSCxlQUFLLEVBQUUsS0FBUjtBQUFjRSxnQkFBTSxFQUFDLE1BQXJCO0FBQTRCQyxtQkFBUyxFQUFHO0FBQXhDLFNBQXhDO0FBQXVGLGVBQU8sRUFBRSxLQUFLekIsTUFBckc7QUFBNkcsZUFBTyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQnFCLFFBQXBCO0FBQXRILDhCQUZBLENBTEQsQ0FUQyxDQUZBLENBREY7QUF5Qkg7Ozs7RUEzRWVTLCtDOztBQStFTGxDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlLmpzLjMyZmM4NmQxNDAwNWE1YjdhYzQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnR7TGlua31mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IHtDYXJkLFRhYmxlfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL2ZhY3RvcnknO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTonJ1xyXG4gICAgfTtcclxuICAgICAgLy8g54K65LqG6K6TIGB0aGlzYCDog73lnKggY2FsbGJhY2sg5Lit6KKr5L2/55So77yM6YCZ6KOh55qE57aB5a6a5piv5b+F6KaB55qE77yaXHJcbiAgICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuY3JlYXRlPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgbG9naW4oZXZlbnQpe1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xyXG4gICAgICAgIGNvbnN0IGFkZHIgPWF3YWl0IGZhY3RvcnkubWV0aG9kcy5yZXR1cm5fYWRkcihhY2NvdW50c1swXSkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHIpO1xyXG4gICAgICAgIGlmKGFkZHIhPScweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnKVJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL2hvbWUvJHthZGRyLnRvU3RyaW5nKCl9YCk7XHJcbiAgICAgICAgZWxzZSBhbGVydChcInBsZWFzZSBjcmVhdGUgYSBtYWlsYm94IGZpcnN0IVwiKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBjcmVhdGUoZXZlbnQpe1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nMjp0cnVlfSk7XHJcbiAgICAgICAgdmFyIGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBsZXQgYWRkciA9YXdhaXQgZmFjdG9yeS5tZXRob2RzLnJldHVybl9hZGRyKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbiAgICAgICAgaWYoYWRkciE9JzB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcpUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke2FkZHJ9YCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuY3JlYXRlX21haWxib3goKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICBsZXQgYWRkciA9YXdhaXQgZmFjdG9yeS5tZXRob2RzLnJldHVybl9hZGRyKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbiAgICAgICAgICBpZihhZGRyIT1udWxsKVJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL2hvbWUvJHthZGRyfWApO1xyXG4gICAgICAgICAgZWxzZSBhbGVydChcInNvbXRoaW5nIHdyb25nIHBsZWFzZSB0cnkgYWdhaW4hXCIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzI6ZmFsc2V9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmcyOmZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcInN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgPlZvdGU8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17e3dpZHRoOlwiNTAlXCIgLGNvbG9yOlwid2hpdGVcIn19PlxyXG4gICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gdGhlIHZvdGUgd2Vic2l0ZSFcclxuICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvaW5kZXhcIn0+PGE+R28gdG8gb3RoZXIgc2VydmljZTwvYT48L0xpbms+XHJcbiAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgPGgyIHN0eWxlID0ge3ttYXJnaW46XCJhdXRvXCIsbWFyZ2luVG9wIDogXCIzMCVcIn19PlxyXG4gICAgICAgICAgICBMb2dpbiB0byB5b3VyIG1haWxib3hcclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIHN0eWxlID0ge3t3aWR0aCA6Jzc1JScsbWFyZ2luOlwiYXV0b1wiLG1hcmdpblRvcCA6IFwiMyVcIn19IG9uQ2xpY2s9e3RoaXMubG9naW59IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZy50b1N0cmluZygpfT5Mb2dpbiB0byB5b3VyIG1haWxib3g8L0J1dHRvbj5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8aDIgc3R5bGUgPSB7e21hcmdpbjpcImF1dG9cIixtYXJnaW5Ub3AgOiBcIjMwJVwifX0+XHJcbiAgICAgICAgICAgIENyZWF0ZSB5b3VyIG5ldyBtYWlsYm94XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBzdHlsZSA9IHt7d2lkdGggOic3NSUnLG1hcmdpbjpcImF1dG9cIixtYXJnaW5Ub3AgOiBcIjMlXCJ9fSBvbkNsaWNrPXt0aGlzLmNyZWF0ZX0gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nMi50b1N0cmluZygpfT5DcmVhdGUgbmV3IG1haWxib3g8L0J1dHRvbj5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9