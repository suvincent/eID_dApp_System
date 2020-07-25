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
        var Vote, _this$state, register_start_date, register_end_date, vote_start_date, vote_end_date, requirement, question, arr, accounts;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                Vote = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props.address);
                _this$state = this.state, register_start_date = _this$state.register_start_date, register_end_date = _this$state.register_end_date, vote_start_date = _this$state.vote_start_date, vote_end_date = _this$state.vote_end_date, requirement = _this$state.requirement, question = _this$state.question; //console.log(this.state.register_end_date.getTime());
                //console.log(register_start_date);

                arr = Uint32Array[4];
                arr[0] = register_start_date.getTime();
                arr[1] = register_end_date.getTime();
                arr[2] = vote_start_date.getTime();
                arr[3] = vote_end_date.getTime();
                console.log(arr);
                this.setState({
                  loading: true,
                  errorMessage: ''
                });
                _context.prev = 10;
                _context.next = 13;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 13:
                accounts = _context.sent;
                _context.next = 16;
                return Vote.methods.set_up_all(question, arr[0], arr[1], arr[2], arr[3], requirement).send({
                  from: accounts[0]
                });

              case 16:
                //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
                alert("Setting Successfully");
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](10);
                alert(_context.t0);

              case 22:
                this.setState({
                  loading: false
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 19]]);
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
                option = this.state.option;
                console.log(option);
                this.setState({
                  loading2: true
                });
                _context2.prev = 5;
                _context2.next = 8;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 8:
                accounts = _context2.sent;
                _context2.next = 11;
                return Vote.methods.set_up_options(option.toString()).send({
                  from: accounts[0]
                });

              case 11:
                //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
                alert("Setting Option Successfully");
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](5);
                alert(_context2.t0);

              case 17:
                this.setState({
                  loading: false
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 14]]);
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
        onSubmit: this.submit_option
      }, __jsx("h2", null, "Set options one by one"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        controlId: "option"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "option"), console.log(this.props.options), this.props.options.map(function (option, index) {
        return __jsx("h5", null, index + 1, ",", option);
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
                console.log(options);
                return _context3.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  options: options
                });

              case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2FkbWluLmpzIl0sIm5hbWVzIjpbIkFkbWluIiwicHJvcHMiLCJzdGF0ZSIsInJlZ2lzdGVyX3N0YXJ0X2RhdGUiLCJEYXRlIiwicmVnaXN0ZXJfZW5kX2RhdGUiLCJ2b3RlX3N0YXJ0X2RhdGUiLCJ2b3RlX2VuZF9kYXRlIiwicmVxdWlyZW1lbnQiLCJxdWVzdGlvbiIsIm9wdGlvbiIsImxvYWRpbmciLCJsb2FkaW5nMiIsInNlYXJjaCIsImVycm9yTWVzc2FnZSIsInN1Ym1pdF9zZXR0aW5nIiwiYmluZCIsInN1Ym1pdF9vcHRpb24iLCJyZWZyZXNoX3NlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJWb3RlIiwidm90ZSIsImFkZHJlc3MiLCJhcnIiLCJVaW50MzJBcnJheSIsImdldFRpbWUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJzZXRfdXBfYWxsIiwic2VuZCIsImZyb20iLCJhbGVydCIsInNldF91cF9vcHRpb25zIiwidG9TdHJpbmciLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtYl9hZGRyIiwid2lkdGgiLCJjb2xvciIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiZGF0ZSIsIm9wdGlvbnMiLCJtYXAiLCJpbmRleCIsInF1ZXJ5IiwiVm90ZV9ldmVudCIsInJldHVybl9vcHRpb25zX2xlbmd0aCIsImNhbGwiLCJvcHRpb25fbGVuZ3RoIiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwicHVzaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0lBR01BLEs7Ozs7O0FBQ0YsaUJBQVlD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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxhZG1pbi5qcy5mYTMzZTVmZDc5OWMyYjQ0YTU0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcblxyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5cclxuXHJcbmNsYXNzIEFkbWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHJlZ2lzdGVyX3N0YXJ0X2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHJlZ2lzdGVyX2VuZF9kYXRlOm5ldyBEYXRlKCksXHJcbiAgICAgICAgICB2b3RlX3N0YXJ0X2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHZvdGVfZW5kX2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHJlcXVpcmVtZW50OicnLFxyXG4gICAgICAgICAgcXVlc3Rpb246JycsXHJcbiAgICAgICAgICBvcHRpb246JycsXHJcbiAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgICBzZWFyY2g6JycsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6JydcclxuICAgICAgICB9O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHByb3BzLnF1ZXJ5LmFkZHJlc3MpOy8v5pO35Y+W6YCZ5YCL57ay5Z2A55qEdXJs6YKjcGFydOeahGFkZHJlc3MoZnJvbSByb3V0ZXM/PykgIFxyXG4gICAgICB0aGlzLnN1Ym1pdF9zZXR0aW5nID0gdGhpcy5zdWJtaXRfc2V0dGluZy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnN1Ym1pdF9vcHRpb24gPSB0aGlzLnN1Ym1pdF9vcHRpb24uYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5yZWZyZXNoX3NlYXJjaCA9IHRoaXMucmVmcmVzaF9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgLy9jb25zdCBbIHJlZ2lzdGVyX3N0YXJ0X2RhdGUsIHNldERhdGUgXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdHthZGRyZXNzLG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBvcHRpb25fbGVuZ3RoID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zX2xlbmd0aCgpLmNhbGwoKTtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25fbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICAgICAgICByZXR1cm57YWRkcmVzcyxtYl9hZGRyLG9wdGlvbnN9O1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3VibWl0X3NldHRpbmcoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IFZvdGUgPSB2b3RlKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtyZWdpc3Rlcl9zdGFydF9kYXRlLHJlZ2lzdGVyX2VuZF9kYXRlLHZvdGVfc3RhcnRfZGF0ZSx2b3RlX2VuZF9kYXRlLHJlcXVpcmVtZW50LHF1ZXN0aW9ufSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlZ2lzdGVyX2VuZF9kYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZWdpc3Rlcl9zdGFydF9kYXRlKTtcclxuICAgICAgICBsZXQgYXJyID0gVWludDMyQXJyYXlbNF07XHJcbiAgICAgICAgYXJyWzBdID0gcmVnaXN0ZXJfc3RhcnRfZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgYXJyWzFdID0gcmVnaXN0ZXJfZW5kX2RhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGFyclsyXSA9IHZvdGVfc3RhcnRfZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgYXJyWzNdID0gdm90ZV9lbmRfZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWUsZXJyb3JNZXNzYWdlOicnfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGUubWV0aG9kcy5zZXRfdXBfYWxsKFxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICBhcnJbMF0sXHJcbiAgICAgICAgICAgICAgICBhcnJbMV0sXHJcbiAgICAgICAgICAgICAgICBhcnJbMl0sXHJcbiAgICAgICAgICAgICAgICBhcnJbM10sXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlbWVudFxyXG4gICAgICAgICAgICApLnNlbmQoXHJcbiAgICAgICAgICAgICAgICB7ZnJvbTphY2NvdW50c1swXX1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy9Sb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU2V0dGluZyBTdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3VibWl0X29wdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgVm90ZSA9IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3Qge29wdGlvbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzI6dHJ1ZX0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlLm1ldGhvZHMuc2V0X3VwX29wdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBvcHRpb24udG9TdHJpbmcoKVxyXG4gICAgICAgICAgICApLnNlbmQoXHJcbiAgICAgICAgICAgICAgICB7ZnJvbTphY2NvdW50c1swXX1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy9Sb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU2V0dGluZyBPcHRpb24gU3VjY2Vzc2Z1bGx5XCIpXHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hfc2VhcmNoKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIil7XHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2FkbWluLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMuc3RhdGUuc2VhcmNofWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/pgoTlj6/og73opoHmnInpoa/npLrnm67liY1vcHRpb27nmoTlip/og71cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL2NvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QtZGF0ZXBpY2tlci8zLjEuMy9yZWFjdC1kYXRlcGlja2VyLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItTmMycnZQTW82eFhMb0luVlVaUnhvM3FNVkZDUThvMVB6Sy85ZUdqdXRKdnIwWS9QTTZ1NEdnNVJnM3hPMzNqc0FxOUw0VWMvUE0wYml0bmxPaDB3cHc9PVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kID48TGluayByb3V0ZT17XCIvdm90ZS9cIit0aGlzLnByb3BzLmFkZHJlc3MgfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Wb3RlPC9hPjwvTGluaz48L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL2hvbWUvXCIrdGhpcy5wcm9wcy5hZGRyZXNzIH0+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9zdGF0dXMvXCIrdGhpcy5wcm9wcy5hZGRyZXNzIH0gPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+U3RhdHVzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9pbmRleFwiIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkxvZ291dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPEZvcm0gaW5saW5lPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3IgOiBcIndoaXRlXCJ9fSA+IGluZXNydCB5b3VyIHZvdGUgY29udHJhY3QgYWRkcmVzcyBoZXJlICAtJmd0OyAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2g6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbiA6XCJhdXRvXCIsbWFyZ2luVG9wIDpcIjMlXCJ9fSBvblN1Ym1pdCA9IHt0aGlzLnN1Ym1pdF9zZXR0aW5nfT5cclxuICAgICAgICA8aDI+RWRpdCBTZXR0aW5nPC9oMj5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJuZXdfdm90ZVwiIGNvbnRyb2xJZD1cIklzc3VlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5UaGUgSXNzdWUgeW91IHdhbnQgdG8gdm90ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGlzc3VlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVlc3Rpb259IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3F1ZXN0aW9uOmV2ZW50LnRhcmdldC52YWx1ZX0pfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PnsvKlxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cImdhcFwiIGNvbnRyb2xJZD1cImdhcFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Z2FwIHRpbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdhcCB0aW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwiZW50cmFuY2VfZmVlXCIgY29udHJvbElkPVwiZW50cmFuY2VfZmVlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5lbnRyYW5jZSBmZWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cImVudHJhbmNlIGZlZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+Ki99XHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJyZWdpc3Rlcl9zdGFydF9kYXRlXCIgY29udHJvbElkPVwicmVnaXN0ZXJfc3RhcnRfZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+cmVnaXN0ZXJfc3RhcnRfZGF0ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnJlZ2lzdGVyX3N0YXJ0X2RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RhdGUgPT4ge3RoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX3N0YXJ0X2RhdGU6IGRhdGV9KX19Lz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwicmVnaXN0ZXJfZW5kX2RhdGVcIiAgY29udHJvbElkPVwicmVnaXN0ZXJfZW5kX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnJlZ2lzdGVyX2VuZF9kYXRlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucmVnaXN0ZXJfZW5kX2RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RhdGUgPT4ge3RoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2VuZF9kYXRlOiBkYXRlfSl9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cInZvdGVfc3RhcnRfZGF0ZVwiIGNvbnRyb2xJZD1cInZvdGVfc3RhcnRfZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+dm90ZV9zdGFydF9kYXRlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudm90ZV9zdGFydF9kYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXRlID0+IHt0aGlzLnNldFN0YXRlKHt2b3RlX3N0YXJ0X2RhdGU6IGRhdGV9KX19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cInZvdGVfZW5kX2RhdGVcIiAgY29udHJvbElkPVwidm90ZV9lbmRfZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+dm90ZV9lbmRfZGF0ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnZvdGVfZW5kX2RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RhdGUgPT4ge3RoaXMuc2V0U3RhdGUoe3ZvdGVfZW5kX2RhdGU6IGRhdGV9KX19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwicmVxdWlyZW1lbnRcIiBjb250cm9sSWQ9XCJyZXF1aXJlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+dm90ZSByZXF1aXJlbWVudDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJlcXVpcmVtZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVxdWlyZW1lbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3JlcXVpcmVtZW50OmV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBTZXR0aW5nXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICBcclxuICAgICAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW4gOlwiYXV0b1wiLG1hcmdpblRvcCA6XCIzJVwifX0gb25TdWJtaXQgPSB7dGhpcy5zdWJtaXRfb3B0aW9ufT5cclxuICAgICAgICA8aDI+U2V0IG9wdGlvbnMgb25lIGJ5IG9uZTwvaDI+XHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPm9wdGlvbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5wcm9wcy5vcHRpb25zKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+PGg1PntpbmRleCsxfSx7b3B0aW9ufTwvaDU+KX1cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJvcHRpb25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7b3B0aW9uOmV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBTZXQgb3B0aW9uc1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjsiXSwic291cmNlUm9vdCI6IiJ9