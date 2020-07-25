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
      }, __jsx("a", {
        style: {
          color: "white"
        }
      }, "Go to other service"))), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJsb2FkaW5nMiIsImVycm9yTWVzc2FnZSIsImxvZ2luIiwiYmluZCIsImNyZWF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImZhY3RvcnkiLCJtZXRob2RzIiwicmV0dXJuX2FkZHIiLCJjYWxsIiwiYWRkciIsIlJvdXRlciIsInB1c2hSb3V0ZSIsInRvU3RyaW5nIiwiYWxlcnQiLCJjcmVhdGVfbWFpbGJveCIsInNlbmQiLCJmcm9tIiwid2lkdGgiLCJjb2xvciIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsSzs7Ozs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBWTtBQUNWQyxhQUFPLEVBQUcsS0FEQTtBQUVWQyxjQUFRLEVBQUUsS0FGQTtBQUdWQyxrQkFBWSxFQUFDO0FBSEgsS0FBWixDQUZpQixDQU9qQjs7QUFDQSxVQUFLQyxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXQyxJQUFYLHlHQUFiO0FBQ0EsVUFBS0MsTUFBTCxHQUFhLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWix5R0FBYjtBQVRpQjtBQVVsQjs7Ozs7cU5BQ1dFLEs7Ozs7Ozs7QUFFUkEscUJBQUssQ0FBQ0MsY0FBTjtBQUNBLHFCQUFLQyxRQUFMLENBQWM7QUFBQ1IseUJBQU8sRUFBQztBQUFULGlCQUFk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QUc7QUFBM0I7QUFBYixrQ0FFQSxNQUFDLCtEQUFEO0FBQVEsZUFBTyxFQUFDLGNBQWhCO0FBQStCLGFBQUssRUFBSTtBQUFDSCxlQUFLLEVBQUUsS0FBUjtBQUFjRSxnQkFBTSxFQUFDLE1BQXJCO0FBQTRCQyxtQkFBUyxFQUFHO0FBQXhDLFNBQXhDO0FBQXVGLGVBQU8sRUFBRSxLQUFLM0IsS0FBckc7QUFBNEcsZUFBTyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQnNCLFFBQW5CO0FBQXJILGlDQUZBLENBREQsRUFLQztBQUFJLGFBQUssRUFBSTtBQUFDTyxnQkFBTSxFQUFDLE1BQVI7QUFBZUMsbUJBQVMsRUFBRztBQUEzQjtBQUFiLG9DQUVBLE1BQUMsK0RBQUQ7QUFBUSxlQUFPLEVBQUMsY0FBaEI7QUFBK0IsYUFBSyxFQUFJO0FBQUNILGVBQUssRUFBRSxLQUFSO0FBQWNFLGdCQUFNLEVBQUMsTUFBckI7QUFBNEJDLG1CQUFTLEVBQUc7QUFBeEMsU0FBeEM7QUFBdUYsZUFBTyxFQUFFLEtBQUt6QixNQUFyRztBQUE2RyxlQUFPLEVBQUUsS0FBS04sS0FBTCxDQUFXRSxRQUFYLENBQW9CcUIsUUFBcEI7QUFBdEgsOEJBRkEsQ0FMRCxDQVRDLENBRkEsQ0FERjtBQXlCSDs7OztFQTNFZVMsK0M7O0FBK0VMbEMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGUuanMuYWE3MDVjOTQ2N2Y4NmVmZWY4YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmQsVGFibGV9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvZmFjdG9yeSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnXHJcbmltcG9ydCB7Um91dGVyfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICB9O1xyXG4gICAgICAvLyDngrrkuoborpMgYHRoaXNgIOiDveWcqCBjYWxsYmFjayDkuK3ooqvkvb/nlKjvvIzpgJnoo6HnmoTntoHlrprmmK/lv4XopoHnmoTvvJpcclxuICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5jcmVhdGU9IHRoaXMuY3JlYXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBsb2dpbihldmVudCl7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50c1swXSk7XHJcbiAgICAgICAgY29uc3QgYWRkciA9YXdhaXQgZmFjdG9yeS5tZXRob2RzLnJldHVybl9hZGRyKGFjY291bnRzWzBdKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWRkcik7XHJcbiAgICAgICAgaWYoYWRkciE9JzB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcpUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke2FkZHIudG9TdHJpbmcoKX1gKTtcclxuICAgICAgICBlbHNlIGFsZXJ0KFwicGxlYXNlIGNyZWF0ZSBhIG1haWxib3ggZmlyc3QhXCIpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGNyZWF0ZShldmVudCl7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmcyOnRydWV9KTtcclxuICAgICAgICB2YXIgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGxldCBhZGRyID1hd2FpdCBmYWN0b3J5Lm1ldGhvZHMucmV0dXJuX2FkZHIoYWNjb3VudHNbMF0pLmNhbGwoKTtcclxuICAgICAgICBpZihhZGRyIT0nMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJylSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9ob21lLyR7YWRkcn1gKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5jcmVhdGVfbWFpbGJveCgpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgIGxldCBhZGRyID1hd2FpdCBmYWN0b3J5Lm1ldGhvZHMucmV0dXJuX2FkZHIoYWNjb3VudHNbMF0pLmNhbGwoKTtcclxuICAgICAgICAgIGlmKGFkZHIhPW51bGwpUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke2FkZHJ9YCk7XHJcbiAgICAgICAgICBlbHNlIGFsZXJ0KFwic29tdGhpbmcgd3JvbmcgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nMjpmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzI6ZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgPE5hdmJhci5CcmFuZCA+Vm90ZTwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXt7d2lkdGg6XCI1MCVcIiAsY29sb3I6XCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgdm90ZSB3ZWJzaXRlIVxyXG4gICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9pbmRleFwifT48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCJ9fT5HbyB0byBvdGhlciBzZXJ2aWNlPC9hPjwvTGluaz5cclxuICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICA8aDIgc3R5bGUgPSB7e21hcmdpbjpcImF1dG9cIixtYXJnaW5Ub3AgOiBcIjMwJVwifX0+XHJcbiAgICAgICAgICAgIExvZ2luIHRvIHlvdXIgbWFpbGJveFxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgc3R5bGUgPSB7e3dpZHRoIDonNzUlJyxtYXJnaW46XCJhdXRvXCIsbWFyZ2luVG9wIDogXCIzJVwifX0gb25DbGljaz17dGhpcy5sb2dpbn0gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nLnRvU3RyaW5nKCl9PkxvZ2luIHRvIHlvdXIgbWFpbGJveDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxoMiBzdHlsZSA9IHt7bWFyZ2luOlwiYXV0b1wiLG1hcmdpblRvcCA6IFwiMzAlXCJ9fT5cclxuICAgICAgICAgICAgQ3JlYXRlIHlvdXIgbmV3IG1haWxib3hcclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIHN0eWxlID0ge3t3aWR0aCA6Jzc1JScsbWFyZ2luOlwiYXV0b1wiLG1hcmdpblRvcCA6IFwiMyVcIn19IG9uQ2xpY2s9e3RoaXMuY3JlYXRlfSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmcyLnRvU3RyaW5nKCl9PkNyZWF0ZSBuZXcgbWFpbGJveDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=