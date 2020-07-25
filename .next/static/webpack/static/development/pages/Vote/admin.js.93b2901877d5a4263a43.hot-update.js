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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ethereum/Vote/vote */ "./ethereum/Vote/vote.js");








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
                Vote = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(this.props.address);
                _this$state = this.state, register_start_date = _this$state.register_start_date, register_end_date = _this$state.register_end_date, vote_start_date = _this$state.vote_start_date, vote_end_date = _this$state.vote_end_date, requirement = _this$state.requirement, question = _this$state.question;
                console.log(this.state.register_end_date.getTime()); //console.log(register_start_date);

                /*
                let arr = Uint32Array[4];
                arr[0] = register_start_date.getTime();
                arr[1] = register_end_date.getTime();
                arr[2] = vote_start_date.getTime();
                arr[3] = vote_end_date.getTime();
                console.log(arr);*/

                this.setState({
                  loading: true,
                  errorMessage: ''
                });
                _context.prev = 5;
                _context.next = 8;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return Vote.methods.set_up_all(question, register_start_date.getTime(), register_end_date.getTime(), vote_start_date.getTime(), vote_end_date.getTime(), requirement).send({
                  from: accounts[0]
                });

              case 11:
                //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
                alert("Setting Successfully");
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](5);
                alert(_context.t0);

              case 17:
                this.setState({
                  loading: false
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 14]]);
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
                Vote = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(this.props.address);
                option = this.state.option;
                console.log(option);
                this.setState({
                  loading2: true
                });
                _context2.prev = 5;
                _context2.next = 8;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

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
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"], {
        style: {
          margin: "3%"
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Table"], null, __jsx("thead", null, __jsx("tr", null, __jsx("td", null, __jsx("h5", null, "#")), __jsx("td", null, __jsx("h5", null, "current option")))), __jsx("tbody", null, this.props.options.map(function (option, index) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("tr", null, __jsx("td", null, __jsx("h5", null, index + 1)), __jsx("td", null, __jsx("h5", null, option))));
      })))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
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
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(address);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2FkbWluLmpzIl0sIm5hbWVzIjpbIkFkbWluIiwicHJvcHMiLCJzdGF0ZSIsInJlZ2lzdGVyX3N0YXJ0X2RhdGUiLCJEYXRlIiwicmVnaXN0ZXJfZW5kX2RhdGUiLCJ2b3RlX3N0YXJ0X2RhdGUiLCJ2b3RlX2VuZF9kYXRlIiwicmVxdWlyZW1lbnQiLCJxdWVzdGlvbiIsIm9wdGlvbiIsImxvYWRpbmciLCJsb2FkaW5nMiIsInNlYXJjaCIsImVycm9yTWVzc2FnZSIsInN1Ym1pdF9zZXR0aW5nIiwiYmluZCIsInN1Ym1pdF9vcHRpb24iLCJyZWZyZXNoX3NlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJWb3RlIiwidm90ZSIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0VGltZSIsInNldFN0YXRlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic2V0X3VwX2FsbCIsInNlbmQiLCJmcm9tIiwiYWxlcnQiLCJzZXRfdXBfb3B0aW9ucyIsInRvU3RyaW5nIiwiUm91dGVyIiwicHVzaFJvdXRlIiwibWJfYWRkciIsIndpZHRoIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImRhdGUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJxdWVyeSIsIlZvdGVfZXZlbnQiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJjYWxsIiwib3B0aW9uX2xlbmd0aCIsInJldHVybl9vcHRpb25zIiwidGVtcCIsInB1c2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxLOzs7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVk7QUFDVkMseUJBQW1CLEVBQUMsSUFBSUMsSUFBSixFQURWO0FBRVZDLHVCQUFpQixFQUFDLElBQUlELElBQUosRUFGUjtBQUdWRSxxQkFBZSxFQUFDLElBQUlGLElBQUosRUFITjtBQUlWRyxtQkFBYSxFQUFDLElBQUlILElBQUosRUFKSjtBQUtWSSxpQkFBVyxFQUFDLEVBTEY7QUFNVkMsY0FBUSxFQUFDLEVBTkM7QUFPVkMsWUFBTSxFQUFDLEVBUEc7QUFRVkMsYUFBTyxFQUFHLEtBUkE7QUFTVkMsY0FBUSxFQUFFLEtBVEE7QUFVVkMsWUFBTSxFQUFDLEVBVkc7QUFXVkMsa0JBQVksRUFBQztBQVhILEtBQVosQ0FGZSxDQWVqQjs7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLHlHQUF0QjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIseUdBQXJCO0FBQ0EsVUFBS0UsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRixJQUFwQix5R0FBdEIsQ0FsQmlCLENBbUJqQjs7QUFuQmlCO0FBb0JoQjs7Ozs7OE5BYWtCRyxLOzs7Ozs7O0FBQ2pCQSxxQkFBSyxDQUFDQyxjQUFOO0FBRU1DLG9CLEdBQU9DLG9FQUFJLENBQUMsS0FBS3JCLEtBQUwsQ0FBV3NCLE9BQVosQzs4QkFFa0YsS0FBS3JCLEssRUFBakdDLG1CLGVBQUFBLG1CLEVBQW9CRSxpQixlQUFBQSxpQixFQUFrQkMsZSxlQUFBQSxlLEVBQWdCQyxhLGVBQUFBLGEsRUFBY0MsVyxlQUFBQSxXLEVBQVlDLFEsZUFBQUEsUTtBQUN2RmUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt2QixLQUFMLENBQVdHLGlCQUFYLENBQTZCcUIsT0FBN0IsRUFBWixFLENBQ0E7O0FBQ0E7Ozs7Ozs7O0FBT0EscUJBQUtDLFFBQUwsQ0FBYztBQUFDaEIseUJBQU8sRUFBQyxJQUFUO0FBQWNHLDhCQUFZLEVBQUM7QUFBM0IsaUJBQWQ7Ozt1QkFHMkJjLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBakJDLHdCOzt1QkFDQVYsSUFBSSxDQUFDVyxPQUFMLENBQWFDLFVBQWIsQ0FDRnhCLFFBREUsRUFFRk4sbUJBQW1CLENBQUN1QixPQUFwQixFQUZFLEVBR0ZyQixpQkFBaUIsQ0FBQ3FCLE9BQWxCLEVBSEUsRUFJRnBCLGVBQWUsQ0FBQ29CLE9BQWhCLEVBSkUsRUFLRm5CLGFBQWEsQ0FBQ21CLE9BQWQsRUFMRSxFQU1GbEIsV0FORSxFQU9KMEIsSUFQSSxDQVFGO0FBQUNDLHNCQUFJLEVBQUNKLFFBQVEsQ0FBQyxDQUFEO0FBQWQsaUJBUkUsQzs7O0FBVU47QUFDQUsscUJBQUssQ0FBQyxzQkFBRCxDQUFMOzs7Ozs7O0FBRUFBLHFCQUFLLGFBQUw7OztBQUVKLHFCQUFLVCxRQUFMLENBQWM7QUFBQ2hCLHlCQUFPLEVBQUM7QUFBVCxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4TkFFZ0JRLEs7Ozs7OztBQUNoQkEscUJBQUssQ0FBQ0MsY0FBTjtBQUVNQyxvQixHQUFPQyxvRUFBSSxDQUFDLEtBQUtyQixLQUFMLENBQVdzQixPQUFaLEM7QUFFVmIsc0IsR0FBVSxLQUFLUixLLENBQWZRLE07QUFFUGMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZZixNQUFaO0FBQ0EscUJBQUtpQixRQUFMLENBQWM7QUFBQ2YsMEJBQVEsRUFBQztBQUFWLGlCQUFkOzs7dUJBRzJCZ0IsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQkMsd0I7O3VCQUNBVixJQUFJLENBQUNXLE9BQUwsQ0FBYUssY0FBYixDQUNGM0IsTUFBTSxDQUFDNEIsUUFBUCxFQURFLEVBRUpKLElBRkksQ0FHRjtBQUFDQyxzQkFBSSxFQUFDSixRQUFRLENBQUMsQ0FBRDtBQUFkLGlCQUhFLEM7OztBQUtOO0FBQ0FLLHFCQUFLLENBQUMsNkJBQUQsQ0FBTDs7Ozs7OztBQUVBQSxxQkFBSyxjQUFMOzs7QUFFSixxQkFBS1QsUUFBTCxDQUFjO0FBQUNoQix5QkFBTyxFQUFDO0FBQVQsaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FFWTtBQUNaLFVBQUcsS0FBS1QsS0FBTCxDQUFXVyxNQUFYLElBQXFCLEVBQXhCLEVBQTJCO0FBQzNCMEIsc0RBQU0sQ0FBQ0MsU0FBUCxrQkFBMkIsS0FBS3ZDLEtBQUwsQ0FBV3dDLE9BQXRDLGNBQWlELEtBQUt2QyxLQUFMLENBQVdXLE1BQTVEO0FBQ0FXLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt4QixLQUFMLENBQVdzQixPQUF2QjtBQUNDO0FBQ0osSyxDQUNEOzs7OzZCQUNTO0FBQUE7O0FBQ0w7QUFDQSxhQUNBLG1FQUNDO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDLHVFQUE1QjtBQUFvRyxpQkFBUyxFQUFDLHlFQUE5RztBQUF3TCxtQkFBVyxFQUFDO0FBQXBNLFFBREQsRUFFQztBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQyx3RkFBNUI7QUFBcUgsaUJBQVMsRUFBQyxpR0FBL0g7QUFBaU8sbUJBQVcsRUFBQztBQUE3TyxRQUZELEVBR0MsTUFBQyw0REFBRCxRQUNBLE1BQUMsK0RBQUQ7QUFBUSxVQUFFLEVBQUMsTUFBWDtBQUFrQixlQUFPLEVBQUMsTUFBMUI7QUFBZ0MsYUFBSyxFQUFFO0FBQUNtQixlQUFLLEVBQUM7QUFBUDtBQUF2QyxTQUNHLE1BQUMsK0RBQUQsQ0FBUSxLQUFSLFFBQWUsTUFBQyw0Q0FBRDtBQUFNLGFBQUssRUFBRSxXQUFTLEtBQUt6QyxLQUFMLENBQVdzQjtBQUFqQyxTQUE0QztBQUFHLGFBQUssRUFBRTtBQUFDb0IsZUFBSyxFQUFFLE9BQVI7QUFBaUJELGVBQUssRUFBQztBQUF2QjtBQUFWLGdCQUE1QyxDQUFmLENBREgsRUFFSSxNQUFDLDREQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQXlCLGFBQUssRUFBRTtBQUFDQSxlQUFLLEVBQUM7QUFBUDtBQUFoQyxTQUNHLE1BQUMsNENBQUQ7QUFBTSxhQUFLLEVBQUUsV0FBUyxLQUFLekMsS0FBTCxDQUFXc0I7QUFBakMsU0FBMkM7QUFBRyxhQUFLLEVBQUU7QUFBQ29CLGVBQUssRUFBRSxPQUFSO0FBQWlCRCxlQUFLLEVBQUM7QUFBdkI7QUFBVixnQkFBM0MsQ0FESCxFQUVHLE1BQUMsNENBQUQ7QUFBTSxhQUFLLEVBQUUsYUFBVyxLQUFLekMsS0FBTCxDQUFXc0I7QUFBbkMsU0FBOEM7QUFBRyxhQUFLLEVBQUU7QUFBQ29CLGVBQUssRUFBRSxPQUFSO0FBQWlCRCxlQUFLLEVBQUM7QUFBdkI7QUFBVixrQkFBOUMsQ0FGSCxFQUdHLE1BQUMsNENBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBYixTQUEwQjtBQUFHLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUUsT0FBUjtBQUFpQkQsZUFBSyxFQUFDO0FBQXZCO0FBQVYsa0JBQTFCLENBSEgsQ0FGSixFQU9HLE1BQUMsNkRBQUQ7QUFBTSxjQUFNO0FBQVosU0FDQTtBQUFLLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUc7QUFBVDtBQUFaLDBEQURBLEVBRUEsTUFBQyxvRUFBRDtBQUFhLFlBQUksRUFBQyxNQUFsQjtBQUF5QixtQkFBVyxFQUFDLFFBQXJDO0FBQThDLGlCQUFTLEVBQUMsU0FBeEQ7QUFDSSxhQUFLLEVBQUUsS0FBS3pDLEtBQUwsQ0FBV1csTUFEdEI7QUFFSSxnQkFBUSxFQUFJLGtCQUFBTSxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDUSxRQUFMLENBQWM7QUFBQ2Qsa0JBQU0sRUFBQ00sS0FBSyxDQUFDeUIsTUFBTixDQUFhQztBQUFyQixXQUFkLENBQUo7QUFBQTtBQUZyQixRQUZBLEVBS0EsTUFBQywrREFBRDtBQUFRLGVBQU8sRUFBQyxjQUFoQjtBQUErQixlQUFPLEVBQUUsS0FBSzNCO0FBQTdDLGtCQUxBLENBUEgsQ0FEQSxFQWdCRDtBQUFLLGFBQUssRUFBRTtBQUFDNEIsZ0JBQU0sRUFBQztBQUFSO0FBQVosU0FDQSxNQUFDLDZEQUFEO0FBQU0sYUFBSyxFQUFFO0FBQUVBLGdCQUFNLEVBQUUsTUFBVjtBQUFpQkMsbUJBQVMsRUFBRTtBQUE1QixTQUFiO0FBQWdELGdCQUFRLEVBQUksS0FBS2hDO0FBQWpFLFNBQ0EsaUNBREEsRUFFSSxNQUFDLDZEQUFELENBQU0sR0FBTixRQUNJLE1BQUMsNkRBQUQsQ0FBTSxLQUFOO0FBQVksVUFBRSxFQUFDLFVBQWY7QUFBMEIsaUJBQVMsRUFBQztBQUFwQyxTQUNBLE1BQUMsNkRBQUQsQ0FBTSxLQUFOLHFDQURBLEVBRUEsTUFBQyw2REFBRCxDQUFNLE9BQU47QUFBYyxZQUFJLEVBQUMsTUFBbkI7QUFBMEIsbUJBQVcsRUFBQyxhQUF0QztBQUNJLGFBQUssRUFBRSxLQUFLYixLQUFMLENBQVdPLFFBRHRCO0FBRUksZ0JBQVEsRUFBSSxrQkFBQVUsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ1EsUUFBTCxDQUFjO0FBQUNsQixvQkFBUSxFQUFDVSxLQUFLLENBQUN5QixNQUFOLENBQWFDO0FBQXZCLFdBQWQsQ0FBSjtBQUFBO0FBRnJCLFFBRkEsQ0FESixDQUZKLEVBc0JJLE1BQUMsNkRBQUQsQ0FBTSxHQUFOLFFBRUksTUFBQyw2REFBRCxDQUFNLEtBQU47QUFBWSxVQUFFLEVBQUMscUJBQWY7QUFBcUMsaUJBQVMsRUFBQztBQUEvQyxTQUNBLE1BQUMsNkRBQUQsQ0FBTSxLQUFOLDhCQURBLEVBRUEsTUFBQyx3REFBRDtBQUFZLGdCQUFRLEVBQUUsS0FBSzNDLEtBQUwsQ0FBV0MsbUJBQWpDO0FBQ1ksZ0JBQVEsRUFBRSxrQkFBQTZDLElBQUksRUFBSTtBQUFDLGdCQUFJLENBQUNyQixRQUFMLENBQWM7QUFBQ3hCLCtCQUFtQixFQUFFNkM7QUFBdEIsV0FBZDtBQUEyQztBQUQxRSxRQUZBLENBRkosRUFPSSxNQUFDLDZEQUFELENBQU0sS0FBTjtBQUFZLFVBQUUsRUFBQyxtQkFBZjtBQUFvQyxpQkFBUyxFQUFDO0FBQTlDLFNBQ0EsTUFBQyw2REFBRCxDQUFNLEtBQU4sNEJBREEsRUFFQSxNQUFDLHdEQUFEO0FBQVksZ0JBQVEsRUFBRSxLQUFLOUMsS0FBTCxDQUFXRyxpQkFBakM7QUFDWSxnQkFBUSxFQUFFLGtCQUFBMkMsSUFBSSxFQUFJO0FBQUMsZ0JBQUksQ0FBQ3JCLFFBQUwsQ0FBYztBQUFDdEIsNkJBQWlCLEVBQUUyQztBQUFwQixXQUFkO0FBQXlDO0FBRHhFLFFBRkEsQ0FQSixDQXRCSixFQW9DSSxNQUFDLDZEQUFELENBQU0sR0FBTixRQUVJLE1BQUMsNkRBQUQsQ0FBTSxLQUFOO0FBQVksVUFBRSxFQUFDLGlCQUFmO0FBQWlDLGlCQUFTLEVBQUM7QUFBM0MsU0FDQSxNQUFDLDZEQUFELENBQU0sS0FBTiwwQkFEQSxFQUVBLE1BQUMsd0RBQUQ7QUFBWSxnQkFBUSxFQUFFLEtBQUs5QyxLQUFMLENBQVdJLGVBQWpDO0FBQ1ksZ0JBQVEsRUFBRSxrQkFBQTBDLElBQUksRUFBSTtBQUFDLGdCQUFJLENBQUNyQixRQUFMLENBQWM7QUFBQ3JCLDJCQUFlLEVBQUUwQztBQUFsQixXQUFkO0FBQXVDO0FBRHRFLFFBRkEsQ0FGSixFQU9JLE1BQUMsNkRBQUQsQ0FBTSxLQUFOO0FBQVksVUFBRSxFQUFDLGVBQWY7QUFBZ0MsaUJBQVMsRUFBQztBQUExQyxTQUNBLE1BQUMsNkRBQUQsQ0FBTSxLQUFOLHdCQURBLEVBRUEsTUFBQyx3REFBRDtBQUFZLGdCQUFRLEVBQUUsS0FBSzlDLEtBQUwsQ0FBV0ssYUFBakM7QUFDWSxnQkFBUSxFQUFFLGtCQUFBeUMsSUFBSSxFQUFJO0FBQUMsZ0JBQUksQ0FBQ3JCLFFBQUwsQ0FBYztBQUFDcEIseUJBQWEsRUFBRXlDO0FBQWhCLFdBQWQ7QUFBcUM7QUFEcEUsUUFGQSxDQVBKLENBcENKLEVBa0RJLE1BQUMsNkRBQUQsQ0FBTSxHQUFOLFFBQ0EsTUFBQyw2REFBRCxDQUFNLEtBQU47QUFBWSxVQUFFLEVBQUMsYUFBZjtBQUE2QixpQkFBUyxFQUFDO0FBQXZDLFNBQ0ksTUFBQyw2REFBRCxDQUFNLEtBQU4sMkJBREosRUFFSSxNQUFDLDZEQUFELENBQU0sT0FBTjtBQUFjLFlBQUksRUFBQyxNQUFuQjtBQUEwQixtQkFBVyxFQUFDLG1CQUF0QztBQUNJLGFBQUssRUFBRSxLQUFLOUMsS0FBTCxDQUFXTSxXQUR0QjtBQUVJLGdCQUFRLEVBQUksa0JBQUFXLEtBQUs7QUFBQSxpQkFBSSxNQUFJLENBQUNRLFFBQUwsQ0FBYztBQUFDbkIsdUJBQVcsRUFBQ1csS0FBSyxDQUFDeUIsTUFBTixDQUFhQztBQUExQixXQUFkLENBQUo7QUFBQTtBQUZyQixRQUZKLENBREEsQ0FsREosRUE2REksTUFBQywrREFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUEwQixZQUFJLEVBQUM7QUFBL0IsbUJBN0RKLENBREEsRUFtRUEsTUFBQyw2REFBRDtBQUFNLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFLE1BQVY7QUFBaUJDLG1CQUFTLEVBQUU7QUFBNUIsU0FBYjtBQUFnRCxnQkFBUSxFQUFJLEtBQUs5QjtBQUFqRSxTQUNBLDJDQURBLEVBRUksTUFBQyw2REFBRCxDQUFNLEdBQU4sUUFDSSxNQUFDLDZEQUFELENBQU0sS0FBTjtBQUFZLGlCQUFTLEVBQUM7QUFBdEIsU0FDSSxNQUFDLHFEQUFEO0FBQU0sYUFBSyxFQUFFO0FBQUM2QixnQkFBTSxFQUFFO0FBQVQ7QUFBYixTQUNBLE1BQUMsc0RBQUQsUUFDSSxxQkFDSSxrQkFDSSxrQkFBSSxzQkFBSixDQURKLEVBRUksa0JBQUksbUNBQUosQ0FGSixDQURKLENBREosRUFPSSxxQkFFUyxLQUFLN0MsS0FBTCxDQUFXZ0QsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ3hDLE1BQUQsRUFBU3lDLEtBQVQ7QUFBQSxlQUN4QixtRUFDQSxrQkFDQSxrQkFBSSxrQkFBS0EsS0FBSyxHQUFDLENBQVgsQ0FBSixDQURBLEVBRUEsa0JBQUksa0JBQUt6QyxNQUFMLENBQUosQ0FGQSxDQURBLENBRHdCO0FBQUEsT0FBdkIsQ0FGVCxDQVBKLENBREEsQ0FESixFQXNCSSxNQUFDLDZEQUFELENBQU0sT0FBTjtBQUFjLFlBQUksRUFBQyxNQUFuQjtBQUEwQixtQkFBVyxFQUFDLFFBQXRDO0FBQ0ksYUFBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1EsTUFEdEI7QUFFSSxnQkFBUSxFQUFJLGtCQUFBUyxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDUSxRQUFMLENBQWM7QUFBQ2pCLGtCQUFNLEVBQUNTLEtBQUssQ0FBQ3lCLE1BQU4sQ0FBYUM7QUFBckIsV0FBZCxDQUFKO0FBQUE7QUFGckIsUUF0QkosQ0FESixDQUZKLEVBK0JJLE1BQUMsK0RBQUQ7QUFBUSxlQUFPLEVBQUMsU0FBaEI7QUFBMEIsWUFBSSxFQUFDO0FBQS9CLHVCQS9CSixDQW5FQSxDQWhCQyxDQUhELENBREE7QUE4SEg7Ozs7Z09BL000QjVDLEs7Ozs7Ozs7K0JBQ0FBLEtBQUssQ0FBQ21ELEssRUFBekI3QixPLGdCQUFBQSxPLEVBQVFrQixPLGdCQUFBQSxPOzt1QkFDVW5CLG9FQUFJLENBQUNDLE9BQUQsQzs7O0FBQXRCOEIsMEI7O3VCQUNzQkEsVUFBVSxDQUFDckIsT0FBWCxDQUFtQnNCLHFCQUFuQixHQUEyQ0MsSUFBM0MsRTs7O0FBQXRCQyw2QjtBQUNGUCx1QixHQUFVLEU7QUFDTEUscUIsR0FBUSxDOzs7c0JBQUdBLEtBQUssR0FBR0ssYTs7Ozs7O3VCQUNQSCxVQUFVLENBQUNyQixPQUFYLENBQW1CeUIsY0FBbkIsQ0FBa0NOLEtBQWxDLEVBQXlDSSxJQUF6QyxFOzs7QUFBYkcsb0I7QUFDSlQsdUJBQU8sQ0FBQ1UsSUFBUixDQUFhRCxJQUFiOzs7QUFGdUNQLHFCQUFLLEU7Ozs7O0FBSWhEM0IsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZd0IsT0FBWjtrREFDTTtBQUFDMUIseUJBQU8sRUFBUEEsT0FBRDtBQUFTa0IseUJBQU8sRUFBUEEsT0FBVDtBQUFpQlEseUJBQU8sRUFBUEE7QUFBakIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQ01XLCtDOztBQXlPTDVELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxhZG1pbi5qcy45M2IyOTAxODc3ZDVhNDI2M2E0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7Q2FyZCxUYWJsZX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHtSb3V0ZXJ9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHZvdGUgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS92b3RlJztcclxuXHJcblxyXG5jbGFzcyBBZG1pbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICByZWdpc3Rlcl9zdGFydF9kYXRlOm5ldyBEYXRlKCksXHJcbiAgICAgICAgICByZWdpc3Rlcl9lbmRfZGF0ZTpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgdm90ZV9zdGFydF9kYXRlOm5ldyBEYXRlKCksXHJcbiAgICAgICAgICB2b3RlX2VuZF9kYXRlOm5ldyBEYXRlKCksXHJcbiAgICAgICAgICByZXF1aXJlbWVudDonJyxcclxuICAgICAgICAgIHF1ZXN0aW9uOicnLFxyXG4gICAgICAgICAgb3B0aW9uOicnLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgc2VhcmNoOicnLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgfTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTsvL+aTt+WPlumAmeWAi+e2suWdgOeahHVybOmCo3BhcnTnmoRhZGRyZXNzKGZyb20gcm91dGVzPz8pICBcclxuICAgICAgdGhpcy5zdWJtaXRfc2V0dGluZyA9IHRoaXMuc3VibWl0X3NldHRpbmcuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5zdWJtaXRfb3B0aW9uID0gdGhpcy5zdWJtaXRfb3B0aW9uLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMucmVmcmVzaF9zZWFyY2ggPSB0aGlzLnJlZnJlc2hfc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgIC8vY29uc3QgWyByZWdpc3Rlcl9zdGFydF9kYXRlLCBzZXREYXRlIF0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3R7YWRkcmVzcyxtYl9hZGRyfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUoYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX2xlbmd0aCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9uc19sZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9uX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9ucyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2godGVtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICAgICAgcmV0dXJue2FkZHJlc3MsbWJfYWRkcixvcHRpb25zfTtcclxuICAgIH1cclxuICAgIGFzeW5jIHN1Ym1pdF9zZXR0aW5nKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBWb3RlID0gdm90ZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgICAgICBjb25zdCB7cmVnaXN0ZXJfc3RhcnRfZGF0ZSxyZWdpc3Rlcl9lbmRfZGF0ZSx2b3RlX3N0YXJ0X2RhdGUsdm90ZV9lbmRfZGF0ZSxyZXF1aXJlbWVudCxxdWVzdGlvbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucmVnaXN0ZXJfZW5kX2RhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlZ2lzdGVyX3N0YXJ0X2RhdGUpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IGFyciA9IFVpbnQzMkFycmF5WzRdO1xyXG4gICAgICAgIGFyclswXSA9IHJlZ2lzdGVyX3N0YXJ0X2RhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGFyclsxXSA9IHJlZ2lzdGVyX2VuZF9kYXRlLmdldFRpbWUoKTtcclxuICAgICAgICBhcnJbMl0gPSB2b3RlX3N0YXJ0X2RhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGFyclszXSA9IHZvdGVfZW5kX2RhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7Ki9cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWUsZXJyb3JNZXNzYWdlOicnfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGUubWV0aG9kcy5zZXRfdXBfYWxsKFxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlcl9zdGFydF9kYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyX2VuZF9kYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHZvdGVfc3RhcnRfZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICB2b3RlX2VuZF9kYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVtZW50XHJcbiAgICAgICAgICAgICkuc2VuZChcclxuICAgICAgICAgICAgICAgIHtmcm9tOmFjY291bnRzWzBdfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL1JvdXRlci5wdXNoUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYClcclxuICAgICAgICAgICAgYWxlcnQoXCJTZXR0aW5nIFN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdWJtaXRfb3B0aW9uKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBWb3RlID0gdm90ZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgICAgICBjb25zdCB7b3B0aW9ufSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nMjp0cnVlfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGUubWV0aG9kcy5zZXRfdXBfb3B0aW9ucyhcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50b1N0cmluZygpXHJcbiAgICAgICAgICAgICkuc2VuZChcclxuICAgICAgICAgICAgICAgIHtmcm9tOmFjY291bnRzWzBdfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL1JvdXRlci5wdXNoUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYClcclxuICAgICAgICAgICAgYWxlcnQoXCJTZXR0aW5nIE9wdGlvbiBTdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKXtcclxuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvYWRtaW4vJHt0aGlzLnByb3BzLm1iX2FkZHJ9LyR7dGhpcy5zdGF0ZS5zZWFyY2h9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+mChOWPr+iDveimgeaciemhr+ekuuebruWJjW9wdGlvbueahOWKn+iDvVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1kYXRlcGlja2VyLzMuMS4zL3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1OYzJydlBNbzZ4WExvSW5WVVpSeG8zcU1WRkNROG8xUHpLLzllR2p1dEp2cjBZL1BNNnU0R2c1UmczeE8zM2pzQXE5TDRVYy9QTTBiaXRubE9oMHdwdz09XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgPjxMaW5rIHJvdXRlPXtcIi92b3RlL1wiK3RoaXMucHJvcHMuYWRkcmVzcyB9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlZvdGU8L2E+PC9MaW5rPjwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvaG9tZS9cIit0aGlzLnByb3BzLmFkZHJlc3MgfT48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL3N0YXR1cy9cIit0aGlzLnByb3BzLmFkZHJlc3MgfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5TdGF0dXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL2luZGV4XCIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+TG9nb3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8Rm9ybSBpbmxpbmU+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvciA6IFwid2hpdGVcIn19ID4gaW5lc3J0IHlvdXIgdm90ZSBjb250cmFjdCBhZGRyZXNzIGhlcmUgIC0mZ3Q7ICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5yZWZyZXNoX3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luIDpcImF1dG9cIixtYXJnaW5Ub3AgOlwiMyVcIn19IG9uU3VibWl0ID0ge3RoaXMuc3VibWl0X3NldHRpbmd9PlxyXG4gICAgICAgIDxoMj5FZGl0IFNldHRpbmc8L2gyPlxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cIm5ld192b3RlXCIgY29udHJvbElkPVwiSXNzdWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRoZSBJc3N1ZSB5b3Ugd2FudCB0byB2b3RlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgaXNzdWVcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cXVlc3Rpb246ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+ey8qXHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwiZ2FwXCIgY29udHJvbElkPVwiZ2FwXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5nYXAgdGltZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ2FwIHRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJlbnRyYW5jZV9mZWVcIiBjb250cm9sSWQ9XCJlbnRyYW5jZV9mZWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPmVudHJhbmNlIGZlZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiZW50cmFuY2UgZmVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz4qL31cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cInJlZ2lzdGVyX3N0YXJ0X2RhdGVcIiBjb250cm9sSWQ9XCJyZWdpc3Rlcl9zdGFydF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5yZWdpc3Rlcl9zdGFydF9kYXRlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucmVnaXN0ZXJfc3RhcnRfZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfc3RhcnRfZGF0ZTogZGF0ZX0pfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJyZWdpc3Rlcl9lbmRfZGF0ZVwiICBjb250cm9sSWQ9XCJyZWdpc3Rlcl9lbmRfZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+cmVnaXN0ZXJfZW5kX2RhdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yZWdpc3Rlcl9lbmRfZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfZW5kX2RhdGU6IGRhdGV9KX19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwidm90ZV9zdGFydF9kYXRlXCIgY29udHJvbElkPVwidm90ZV9zdGFydF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD52b3RlX3N0YXJ0X2RhdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17dGhpcy5zdGF0ZS52b3RlX3N0YXJ0X2RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RhdGUgPT4ge3RoaXMuc2V0U3RhdGUoe3ZvdGVfc3RhcnRfZGF0ZTogZGF0ZX0pfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwidm90ZV9lbmRfZGF0ZVwiICBjb250cm9sSWQ9XCJ2b3RlX2VuZF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD52b3RlX2VuZF9kYXRlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudm90ZV9lbmRfZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7dm90ZV9lbmRfZGF0ZTogZGF0ZX0pfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJyZXF1aXJlbWVudFwiIGNvbnRyb2xJZD1cInJlcXVpcmVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD52b3RlIHJlcXVpcmVtZW50PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVxdWlyZW1lbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXF1aXJlbWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVxdWlyZW1lbnQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFNldHRpbmdcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbiA6XCJhdXRvXCIsbWFyZ2luVG9wIDpcIjMlXCJ9fSBvblN1Ym1pdCA9IHt0aGlzLnN1Ym1pdF9vcHRpb259PlxyXG4gICAgICAgIDxoMj5TZXQgb3B0aW9ucyBvbmUgYnkgb25lPC9oMj5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3ttYXJnaW4gOlwiMyVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aDU+IzwvaDU+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGg1PmN1cnJlbnQgb3B0aW9uPC9oNT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aDU+e2luZGV4KzF9PC9oNT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aDU+e29wdGlvbn08L2g1PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm9wdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtvcHRpb246ZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFNldCBvcHRpb25zXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluOyJdLCJzb3VyY2VSb290IjoiIn0=