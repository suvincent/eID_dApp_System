webpackHotUpdate("static\\development\\pages\\Vote\\admin.js",{

/***/ "./pages/Vote/admin.js":
/*!*****************************!*\
  !*** ./pages/Vote/admin.js ***!
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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/Vote/vote */ "./ethereum/Vote/vote.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var Admin = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Admin, _Component);

  var _super = _createSuper(Admin);

  function Admin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Admin);

    _this = _super.call(this, props);
    _this.state = {
      register_start_date: new Date(),
      register_end_date: new Date(),
      vote_start_date: new Date(),
      vote_end_date: new Date(),
      requirement: '',
      question: '',
      option: '',
      loading: false,
      loading2: false,
      search: '',
      errorMessage: ''
    }; //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  

    _this.submit_setting = _this.submit_setting.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.submit_option = _this.submit_option.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.refresh_search = _this.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //const [ register_start_date, setDate ] = useState(new Date());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Admin, [{
    key: "submit_setting",
    value: function () {
      var _submit_setting = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var Vote, _this$state, register_start_date, register_end_date, vote_start_date, vote_end_date, requirement, question, accounts;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                Vote = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props.address);
                _this$state = this.state, register_start_date = _this$state.register_start_date, register_end_date = _this$state.register_end_date, vote_start_date = _this$state.vote_start_date, vote_end_date = _this$state.vote_end_date, requirement = _this$state.requirement, question = _this$state.question; //console.log(this.state.register_end_date.getTime());
                //console.log(register_start_date);

                this.setState({
                  loading: true,
                  errorMessage: ''
                });
                _context.prev = 4;
                _context.next = 7;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return Vote.methods.set_up_all(question, register_start_date.getTime(), register_end_date.getTime(), vote_start_date.getTime(), vote_end_date.getTime(), requirement).send({
                  from: accounts[0]
                });

              case 10:
                //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
                alert("Setting Successfully");
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](4);
                alert(_context.t0);

              case 16:
                this.setState({
                  loading: false
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      function submit_setting(_x) {
        return _submit_setting.apply(this, arguments);
      }

      return submit_setting;
    }()
  }, {
    key: "submit_option",
    value: function () {
      var _submit_option = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var Vote, option, accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                Vote = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props.address);
                option = this.state.option; //console.log(this.state.register_end_date.getTime());
                //console.log(register_start_date);

                this.setState({
                  loading2: true
                });
                _context2.prev = 4;
                _context2.next = 7;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 7:
                accounts = _context2.sent;
                _context2.next = 10;
                return Vote.methods.set_up_options().send({
                  from: accounts[0]
                });

              case 10:
                //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
                alert("Setting Option Successfully");
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                alert(_context2.t0);

              case 16:
                this.setState({
                  loading: false
                });

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 13]]);
      }));

      function submit_option(_x2) {
        return _submit_option.apply(this, arguments);
      }

      return submit_option;
    }()
  }, {
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") {
        _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/admin/".concat(this.props.mb_addr, "/").concat(this.state.search));
        console.log(this.props.address);
      }
    } //還可能要有顯示目前option的功能

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //const [date, setDate] = useState(new Date());
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossOrigin: "anonymous"
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/3.1.3/react-datepicker.min.css",
        integrity: "sha512-Nc2rvPMo6xXLoInVUZRxo3qMVFCQ8o1PzK/9eGjutJvr0Y/PM6u4Gg5Rg3xO33jsAq9L4Uc/PM0bitnlOh0wpw==",
        crossorigin: "anonymous"
      }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bg: "dark",
        variant: "dark",
        style: {
          width: "100%"
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Brand, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/vote/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Vote"))), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mr-auto",
        style: {
          width: "50%"
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/home/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/status/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Status")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/index"
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Logout"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true
      }, __jsx("div", {
        style: {
          color: "white"
        }
      }, " inesrt your vote contract address here  ->   "), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "text",
        placeholder: "Search",
        className: "mr-sm-2",
        value: this.state.search,
        onChange: function onChange(event) {
          return _this2.setState({
            search: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "outline-info",
        onClick: this.refresh_search
      }, "Search"))), __jsx("div", {
        style: {
          margin: "auto"
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          margin: "auto",
          marginTop: "3%"
        },
        onSubmit: this.submit_setting
      }, __jsx("h2", null, "Edit Setting"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "new_vote",
        controlId: "Issue"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "The Issue you want to vote"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        type: "text",
        placeholder: "Enter issue",
        value: this.state.question,
        onChange: function onChange(event) {
          return _this2.setState({
            question: event.target.value
          });
        }
      }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "register_start_date",
        controlId: "register_start_date"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "register_start_date"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        selected: this.state.register_start_date,
        onChange: function onChange(date) {
          _this2.setState({
            register_start_date: date
          });
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "register_end_date",
        controlId: "register_end_date"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "register_end_date"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        selected: this.state.register_end_date,
        onChange: function onChange(date) {
          _this2.setState({
            register_end_date: date
          });
        }
      }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "vote_start_date",
        controlId: "vote_start_date"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "vote_start_date"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        selected: this.state.vote_start_date,
        onChange: function onChange(date) {
          _this2.setState({
            vote_start_date: date
          });
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "vote_end_date",
        controlId: "vote_end_date"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "vote_end_date"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        selected: this.state.vote_end_date,
        onChange: function onChange(date) {
          _this2.setState({
            vote_end_date: date
          });
        }
      }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "requirement",
        controlId: "requirement"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "vote requirement"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        type: "text",
        placeholder: "Enter requirement",
        value: this.state.requirement,
        onChange: function onChange(event) {
          return _this2.setState({
            requirement: event.target.value
          });
        }
      }))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        type: "submit"
      }, "Setting")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          margin: "auto",
          marginTop: "3%"
        },
        onSubmit: this.submit_setting
      }, __jsx("h2", null, "Set options one by one"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        controlId: "option"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "option"), this.props.options.map(function (option, index) {
        __jsx("h3", null, option, ",", index);
      }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        type: "text",
        placeholder: "option",
        value: this.state.option,
        onChange: function onChange(event) {
          return _this2.setState({
            option: event.target.value
          });
        }
      }))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        type: "submit"
      }, "Set options")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(props) {
        var _props$query, address, mb_addr, Vote_event, option_length, options, index, temp;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, mb_addr = _props$query.mb_addr;
                _context3.next = 3;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__["default"])(address);

              case 3:
                Vote_event = _context3.sent;
                _context3.next = 6;
                return Vote_event.methods.return_options_length().call();

              case 6:
                option_length = _context3.sent;
                options = [];
                index = 0;

              case 9:
                if (!(index < option_length)) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 12;
                return Vote_event.methods.return_options(index).call();

              case 12:
                temp = _context3.sent;
                options.push(temp);

              case 14:
                index++;
                _context3.next = 9;
                break;

              case 17:
                return _context3.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  options: options
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Admin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2FkbWluLmpzIl0sIm5hbWVzIjpbIkFkbWluIiwicHJvcHMiLCJzdGF0ZSIsInJlZ2lzdGVyX3N0YXJ0X2RhdGUiLCJEYXRlIiwicmVnaXN0ZXJfZW5kX2RhdGUiLCJ2b3RlX3N0YXJ0X2RhdGUiLCJ2b3RlX2VuZF9kYXRlIiwicmVxdWlyZW1lbnQiLCJxdWVzdGlvbiIsIm9wdGlvbiIsImxvYWRpbmciLCJsb2FkaW5nMiIsInNlYXJjaCIsImVycm9yTWVzc2FnZSIsInN1Ym1pdF9zZXR0aW5nIiwiYmluZCIsInN1Ym1pdF9vcHRpb24iLCJyZWZyZXNoX3NlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJWb3RlIiwidm90ZSIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInNldF91cF9hbGwiLCJnZXRUaW1lIiwic2VuZCIsImZyb20iLCJhbGVydCIsInNldF91cF9vcHRpb25zIiwiUm91dGVyIiwicHVzaFJvdXRlIiwibWJfYWRkciIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImNvbG9yIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJkYXRlIiwib3B0aW9ucyIsIm1hcCIsImluZGV4IiwicXVlcnkiLCJWb3RlX2V2ZW50IiwicmV0dXJuX29wdGlvbnNfbGVuZ3RoIiwiY2FsbCIsIm9wdGlvbl9sZW5ndGgiLCJyZXR1cm5fb3B0aW9ucyIsInRlbXAiLCJwdXNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhC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QixvRUFBSSxDQUFDQyxPQUFELEM7OztBQUF0QjZCLDBCOzt1QkFDc0JBLFVBQVUsQ0FBQ3ZCLE9BQVgsQ0FBbUJ3QixxQkFBbkIsR0FBMkNDLElBQTNDLEU7OztBQUF0QkMsNkI7QUFDRlAsdUIsR0FBVSxFO0FBQ0xFLHFCLEdBQVEsQzs7O3NCQUFHQSxLQUFLLEdBQUdLLGE7Ozs7Ozt1QkFDUEgsVUFBVSxDQUFDdkIsT0FBWCxDQUFtQjJCLGNBQW5CLENBQWtDTixLQUFsQyxFQUF5Q0ksSUFBekMsRTs7O0FBQWJHLG9CO0FBQ0pULHVCQUFPLENBQUNVLElBQVIsQ0FBYUQsSUFBYjs7O0FBRnVDUCxxQkFBSyxFOzs7OztrREFJMUM7QUFBQzNCLHlCQUFPLEVBQVBBLE9BQUQ7QUFBU2UseUJBQU8sRUFBUEEsT0FBVDtBQUFpQlUseUJBQU8sRUFBUEE7QUFBakIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvQk1XLCtDOztBQThNTDNELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxhZG1pbi5qcy43ZDhjY2U4ZjllMTM3MGJkOTIwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcblxyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5cclxuXHJcbmNsYXNzIEFkbWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHJlZ2lzdGVyX3N0YXJ0X2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHJlZ2lzdGVyX2VuZF9kYXRlOm5ldyBEYXRlKCksXHJcbiAgICAgICAgICB2b3RlX3N0YXJ0X2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHZvdGVfZW5kX2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHJlcXVpcmVtZW50OicnLFxyXG4gICAgICAgICAgcXVlc3Rpb246JycsXHJcbiAgICAgICAgICBvcHRpb246JycsXHJcbiAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgICBzZWFyY2g6JycsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6JydcclxuICAgICAgICB9O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHByb3BzLnF1ZXJ5LmFkZHJlc3MpOy8v5pO35Y+W6YCZ5YCL57ay5Z2A55qEdXJs6YKjcGFydOeahGFkZHJlc3MoZnJvbSByb3V0ZXM/PykgIFxyXG4gICAgICB0aGlzLnN1Ym1pdF9zZXR0aW5nID0gdGhpcy5zdWJtaXRfc2V0dGluZy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnN1Ym1pdF9vcHRpb24gPSB0aGlzLnN1Ym1pdF9vcHRpb24uYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5yZWZyZXNoX3NlYXJjaCA9IHRoaXMucmVmcmVzaF9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgLy9jb25zdCBbIHJlZ2lzdGVyX3N0YXJ0X2RhdGUsIHNldERhdGUgXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdHthZGRyZXNzLG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBvcHRpb25fbGVuZ3RoID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zX2xlbmd0aCgpLmNhbGwoKTtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25fbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJue2FkZHJlc3MsbWJfYWRkcixvcHRpb25zfTtcclxuICAgIH1cclxuICAgIGFzeW5jIHN1Ym1pdF9zZXR0aW5nKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBWb3RlID0gdm90ZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgICAgICBjb25zdCB7cmVnaXN0ZXJfc3RhcnRfZGF0ZSxyZWdpc3Rlcl9lbmRfZGF0ZSx2b3RlX3N0YXJ0X2RhdGUsdm90ZV9lbmRfZGF0ZSxyZXF1aXJlbWVudCxxdWVzdGlvbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZWdpc3Rlcl9lbmRfZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVnaXN0ZXJfc3RhcnRfZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzc2FnZTonJ30pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlLm1ldGhvZHMuc2V0X3VwX2FsbChcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJfc3RhcnRfZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlcl9lbmRfZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICB2b3RlX3N0YXJ0X2RhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgdm90ZV9lbmRfZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlbWVudFxyXG4gICAgICAgICAgICApLnNlbmQoXHJcbiAgICAgICAgICAgICAgICB7ZnJvbTphY2NvdW50c1swXX1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy9Sb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU2V0dGluZyBTdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3VibWl0X29wdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgVm90ZSA9IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3Qge29wdGlvbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZWdpc3Rlcl9lbmRfZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVnaXN0ZXJfc3RhcnRfZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzI6dHJ1ZX0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlLm1ldGhvZHMuc2V0X3VwX29wdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKS5zZW5kKFxyXG4gICAgICAgICAgICAgICAge2Zyb206YWNjb3VudHNbMF19XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vUm91dGVyLnB1c2hSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKVxyXG4gICAgICAgICAgICBhbGVydChcIlNldHRpbmcgT3B0aW9uIFN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoX3NlYXJjaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoICE9IFwiXCIpe1xyXG4gICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9hZG1pbi8ke3RoaXMucHJvcHMubWJfYWRkcn0vJHt0aGlzLnN0YXRlLnNlYXJjaH1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6YKE5Y+v6IO96KaB5pyJ6aGv56S655uu5YmNb3B0aW9u55qE5Yqf6IO9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9jb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRhdGVwaWNrZXIvMy4xLjMvcmVhY3QtZGF0ZXBpY2tlci5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhNTEyLU5jMnJ2UE1vNnhYTG9JblZVWlJ4bzNxTVZGQ1E4bzFQeksvOWVHanV0SnZyMFkvUE02dTRHZzVSZzN4TzMzanNBcTlMNFVjL1BNMGJpdG5sT2gwd3B3PT1cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcInN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPE5hdmJhci5CcmFuZCA+PExpbmsgcm91dGU9e1wiL3ZvdGUvXCIrdGhpcy5wcm9wcy5hZGRyZXNzIH0gPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+Vm90ZTwvYT48L0xpbms+PC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9ob21lL1wiK3RoaXMucHJvcHMuYWRkcmVzcyB9PjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+SG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvc3RhdHVzL1wiK3RoaXMucHJvcHMuYWRkcmVzcyB9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlN0YXR1czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJ3aGl0ZVwifX0gPiBpbmVzcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hfc2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW4gOlwiYXV0b1wiLG1hcmdpblRvcCA6XCIzJVwifX0gb25TdWJtaXQgPSB7dGhpcy5zdWJtaXRfc2V0dGluZ30+XHJcbiAgICAgICAgPGgyPkVkaXQgU2V0dGluZzwvaDI+XHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwibmV3X3ZvdGVcIiBjb250cm9sSWQ9XCJJc3N1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGhlIElzc3VlIHlvdSB3YW50IHRvIHZvdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBpc3N1ZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtxdWVzdGlvbjpldmVudC50YXJnZXQudmFsdWV9KX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz57LypcclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJnYXBcIiBjb250cm9sSWQ9XCJnYXBcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPmdhcCB0aW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBnYXAgdGltZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cImVudHJhbmNlX2ZlZVwiIGNvbnRyb2xJZD1cImVudHJhbmNlX2ZlZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+ZW50cmFuY2UgZmVlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJlbnRyYW5jZSBmZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PiovfVxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwicmVnaXN0ZXJfc3RhcnRfZGF0ZVwiIGNvbnRyb2xJZD1cInJlZ2lzdGVyX3N0YXJ0X2RhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnJlZ2lzdGVyX3N0YXJ0X2RhdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yZWdpc3Rlcl9zdGFydF9kYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXRlID0+IHt0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9zdGFydF9kYXRlOiBkYXRlfSl9fS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cInJlZ2lzdGVyX2VuZF9kYXRlXCIgIGNvbnRyb2xJZD1cInJlZ2lzdGVyX2VuZF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5yZWdpc3Rlcl9lbmRfZGF0ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnJlZ2lzdGVyX2VuZF9kYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXRlID0+IHt0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9lbmRfZGF0ZTogZGF0ZX0pfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJ2b3RlX3N0YXJ0X2RhdGVcIiBjb250cm9sSWQ9XCJ2b3RlX3N0YXJ0X2RhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnZvdGVfc3RhcnRfZGF0ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnZvdGVfc3RhcnRfZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7dm90ZV9zdGFydF9kYXRlOiBkYXRlfSl9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJ2b3RlX2VuZF9kYXRlXCIgIGNvbnRyb2xJZD1cInZvdGVfZW5kX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnZvdGVfZW5kX2RhdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17dGhpcy5zdGF0ZS52b3RlX2VuZF9kYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXRlID0+IHt0aGlzLnNldFN0YXRlKHt2b3RlX2VuZF9kYXRlOiBkYXRlfSl9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cInJlcXVpcmVtZW50XCIgY29udHJvbElkPVwicmVxdWlyZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnZvdGUgcmVxdWlyZW1lbnQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciByZXF1aXJlbWVudFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcXVpcmVtZW50fSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtyZXF1aXJlbWVudDpldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgU2V0dGluZ1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luIDpcImF1dG9cIixtYXJnaW5Ub3AgOlwiMyVcIn19IG9uU3VibWl0ID0ge3RoaXMuc3VibWl0X3NldHRpbmd9PlxyXG4gICAgICAgIDxoMj5TZXQgb3B0aW9ucyBvbmUgYnkgb25lPC9oMj5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+b3B0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT57PGgzPntvcHRpb259LHtpbmRleH08L2gzPn0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm9wdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtvcHRpb246ZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFNldCBvcHRpb25zXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluOyJdLCJzb3VyY2VSb290IjoiIn0=