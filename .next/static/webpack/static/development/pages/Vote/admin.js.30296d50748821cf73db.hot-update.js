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
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/admin/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);
                alert(_context.t0);

              case 18:
                this.setState({
                  loading: false
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 15]]);
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
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/admin/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](5);
                alert(_context2.t0);

              case 18:
                this.setState({
                  loading: false
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 15]]);
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
        route: "/Vote/vote/" + this.props.mb_addr + "/" + this.props.address
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
        route: "/Vote/home/" + this.props.mb_addr
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/status/" + this.props.mb_addr + "/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Status")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/index"
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
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Table"], {
        striped: true,
        bordered: true,
        hover: true,
        size: "sm",
        style: {
          width: '100%',
          margin: "20%",
          marginTop: "3%"
        }
      }, __jsx("thead", null, __jsx("tr", null, __jsx("td", null, __jsx("h5", null, "#")), __jsx("td", null, __jsx("h5", null, "current option")))), this.props.options.map(function (option, index) {
        return __jsx("tbody", {
          style: {
            width: '200px'
          }
        }, __jsx("tr", null, __jsx("td", null, index + 1), __jsx("td", null, option)));
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        type: "text",
        placeholder: "option",
        style: {
          width: '100%',
          margin: "20%",
          marginTop: "3%"
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2FkbWluLmpzIl0sIm5hbWVzIjpbIkFkbWluIiwicHJvcHMiLCJzdGF0ZSIsInJlZ2lzdGVyX3N0YXJ0X2RhdGUiLCJEYXRlIiwicmVnaXN0ZXJfZW5kX2RhdGUiLCJ2b3RlX3N0YXJ0X2RhdGUiLCJ2b3RlX2VuZF9kYXRlIiwicmVxdWlyZW1lbnQiLCJxdWVzdGlvbiIsIm9wdGlvbiIsImxvYWRpbmciLCJsb2FkaW5nMiIsInNlYXJjaCIsImVycm9yTWVzc2FnZSIsInN1Ym1pdF9zZXR0aW5nIiwiYmluZCIsInN1Ym1pdF9vcHRpb24iLCJyZWZyZXNoX3NlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJWb3RlIiwidm90ZSIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0VGltZSIsInNldFN0YXRlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic2V0X3VwX2FsbCIsInNlbmQiLCJmcm9tIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtYl9hZGRyIiwic2V0X3VwX29wdGlvbnMiLCJ0b1N0cmluZyIsIndpZHRoIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImRhdGUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJxdWVyeSIsIlZvdGVfZXZlbnQiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJjYWxsIiwib3B0aW9uX2xlbmd0aCIsInJldHVybl9vcHRpb25zIiwidGVtcCIsInB1c2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxLOzs7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FB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LElBQTNDLEU7OztBQUF0QkMsNkI7QUFDRlAsdUIsR0FBVSxFO0FBQ0xFLHFCLEdBQVEsQzs7O3NCQUFHQSxLQUFLLEdBQUdLLGE7Ozs7Ozt1QkFDUEgsVUFBVSxDQUFDckIsT0FBWCxDQUFtQnlCLGNBQW5CLENBQWtDTixLQUFsQyxFQUF5Q0ksSUFBekMsRTs7O0FBQWJHLG9CO0FBQ0pULHVCQUFPLENBQUNVLElBQVIsQ0FBYUQsSUFBYjs7O0FBRnVDUCxxQkFBSyxFOzs7OztBQUloRDNCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWXdCLE9BQVo7a0RBQ007QUFBQzFCLHlCQUFPLEVBQVBBLE9BQUQ7QUFBU2dCLHlCQUFPLEVBQVBBLE9BQVQ7QUFBaUJVLHlCQUFPLEVBQVBBO0FBQWpCLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaENNVywrQzs7QUEwT0w1RCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcVm90ZVxcYWRtaW4uanMuMzAyOTZkNTA3NDg4MjFjZjczZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQge0NhcmQsVGFibGV9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnXHJcbmltcG9ydCB7Um91dGVyfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB2b3RlIGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvdm90ZSc7XHJcblxyXG5cclxuY2xhc3MgQWRtaW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgcmVnaXN0ZXJfc3RhcnRfZGF0ZTpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgcmVnaXN0ZXJfZW5kX2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHZvdGVfc3RhcnRfZGF0ZTpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgdm90ZV9lbmRfZGF0ZTpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgcmVxdWlyZW1lbnQ6JycsXHJcbiAgICAgICAgICBxdWVzdGlvbjonJyxcclxuICAgICAgICAgIG9wdGlvbjonJyxcclxuICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgIGxvYWRpbmcyOiBmYWxzZSxcclxuICAgICAgICAgIHNlYXJjaDonJyxcclxuICAgICAgICAgIGVycm9yTWVzc2FnZTonJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIC8vY29uc29sZS5sb2cocHJvcHMucXVlcnkuYWRkcmVzcyk7Ly/mk7flj5bpgJnlgIvntrLlnYDnmoR1cmzpgqNwYXJ055qEYWRkcmVzcyhmcm9tIHJvdXRlcz8/KSAgXHJcbiAgICAgIHRoaXMuc3VibWl0X3NldHRpbmcgPSB0aGlzLnN1Ym1pdF9zZXR0aW5nLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuc3VibWl0X29wdGlvbiA9IHRoaXMuc3VibWl0X29wdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAvL2NvbnN0IFsgcmVnaXN0ZXJfc3RhcnRfZGF0ZSwgc2V0RGF0ZSBdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0e2FkZHJlc3MsbWJfYWRkcn0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbl9sZW5ndGggPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnNfbGVuZ3RoKCkuY2FsbCgpO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbl9sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgICAgIHJldHVybnthZGRyZXNzLG1iX2FkZHIsb3B0aW9uc307XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdWJtaXRfc2V0dGluZyhldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgVm90ZSA9IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3Qge3JlZ2lzdGVyX3N0YXJ0X2RhdGUscmVnaXN0ZXJfZW5kX2RhdGUsdm90ZV9zdGFydF9kYXRlLHZvdGVfZW5kX2RhdGUscmVxdWlyZW1lbnQscXVlc3Rpb259ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlZ2lzdGVyX2VuZF9kYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZWdpc3Rlcl9zdGFydF9kYXRlKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBhcnIgPSBVaW50MzJBcnJheVs0XTtcclxuICAgICAgICBhcnJbMF0gPSByZWdpc3Rlcl9zdGFydF9kYXRlLmdldFRpbWUoKTtcclxuICAgICAgICBhcnJbMV0gPSByZWdpc3Rlcl9lbmRfZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgYXJyWzJdID0gdm90ZV9zdGFydF9kYXRlLmdldFRpbWUoKTtcclxuICAgICAgICBhcnJbM10gPSB2b3RlX2VuZF9kYXRlLmdldFRpbWUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnIpOyovXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzc2FnZTonJ30pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlLm1ldGhvZHMuc2V0X3VwX2FsbChcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJfc3RhcnRfZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlcl9lbmRfZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICB2b3RlX3N0YXJ0X2RhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgdm90ZV9lbmRfZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlbWVudFxyXG4gICAgICAgICAgICApLnNlbmQoXHJcbiAgICAgICAgICAgICAgICB7ZnJvbTphY2NvdW50c1swXX1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy9Sb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU2V0dGluZyBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL2FkbWluLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3VibWl0X29wdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgVm90ZSA9IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3Qge29wdGlvbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzI6dHJ1ZX0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlLm1ldGhvZHMuc2V0X3VwX29wdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBvcHRpb24udG9TdHJpbmcoKVxyXG4gICAgICAgICAgICApLnNlbmQoXHJcbiAgICAgICAgICAgICAgICB7ZnJvbTphY2NvdW50c1swXX1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy9Sb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU2V0dGluZyBPcHRpb24gU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9hZG1pbi8ke3RoaXMucHJvcHMubWJfYWRkcn0vJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hfc2VhcmNoKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIil7XHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2FkbWluLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMuc3RhdGUuc2VhcmNofWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/pgoTlj6/og73opoHmnInpoa/npLrnm67liY1vcHRpb27nmoTlip/og71cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL2NvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QtZGF0ZXBpY2tlci8zLjEuMy9yZWFjdC1kYXRlcGlja2VyLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItTmMycnZQTW82eFhMb0luVlVaUnhvM3FNVkZDUThvMVB6Sy85ZUdqdXRKdnIwWS9QTTZ1NEdnNVJnM3hPMzNqc0FxOUw0VWMvUE0wYml0bmxPaDB3cHc9PVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kID48TGluayByb3V0ZT17XCIvVm90ZS92b3RlL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3MgfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Wb3RlPC9hPjwvTGluaz48L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaG9tZS9cIit0aGlzLnByb3BzLm1iX2FkZHIgfT48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvc3RhdHVzL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3MgfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5TdGF0dXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJ3aGl0ZVwifX0gPiBpbmVzcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hfc2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW4gOlwiYXV0b1wiLG1hcmdpblRvcCA6XCIzJVwifX0gb25TdWJtaXQgPSB7dGhpcy5zdWJtaXRfc2V0dGluZ30+XHJcbiAgICAgICAgPGgyPkVkaXQgU2V0dGluZzwvaDI+XHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwibmV3X3ZvdGVcIiBjb250cm9sSWQ9XCJJc3N1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VGhlIElzc3VlIHlvdSB3YW50IHRvIHZvdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBpc3N1ZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1ZXN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtxdWVzdGlvbjpldmVudC50YXJnZXQudmFsdWV9KX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz57LypcclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJnYXBcIiBjb250cm9sSWQ9XCJnYXBcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPmdhcCB0aW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBnYXAgdGltZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cImVudHJhbmNlX2ZlZVwiIGNvbnRyb2xJZD1cImVudHJhbmNlX2ZlZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+ZW50cmFuY2UgZmVlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJlbnRyYW5jZSBmZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PiovfVxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwicmVnaXN0ZXJfc3RhcnRfZGF0ZVwiIGNvbnRyb2xJZD1cInJlZ2lzdGVyX3N0YXJ0X2RhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnJlZ2lzdGVyX3N0YXJ0X2RhdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yZWdpc3Rlcl9zdGFydF9kYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXRlID0+IHt0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9zdGFydF9kYXRlOiBkYXRlfSl9fS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cInJlZ2lzdGVyX2VuZF9kYXRlXCIgIGNvbnRyb2xJZD1cInJlZ2lzdGVyX2VuZF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5yZWdpc3Rlcl9lbmRfZGF0ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnJlZ2lzdGVyX2VuZF9kYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXRlID0+IHt0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9lbmRfZGF0ZTogZGF0ZX0pfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJ2b3RlX3N0YXJ0X2RhdGVcIiBjb250cm9sSWQ9XCJ2b3RlX3N0YXJ0X2RhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnZvdGVfc3RhcnRfZGF0ZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnZvdGVfc3RhcnRfZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7dm90ZV9zdGFydF9kYXRlOiBkYXRlfSl9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJ2b3RlX2VuZF9kYXRlXCIgIGNvbnRyb2xJZD1cInZvdGVfZW5kX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnZvdGVfZW5kX2RhdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17dGhpcy5zdGF0ZS52b3RlX2VuZF9kYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXRlID0+IHt0aGlzLnNldFN0YXRlKHt2b3RlX2VuZF9kYXRlOiBkYXRlfSl9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cInJlcXVpcmVtZW50XCIgY29udHJvbElkPVwicmVxdWlyZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPnZvdGUgcmVxdWlyZW1lbnQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciByZXF1aXJlbWVudFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcXVpcmVtZW50fSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtyZXF1aXJlbWVudDpldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgU2V0dGluZ1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luIDpcImF1dG9cIixtYXJnaW5Ub3AgOlwiMyVcIn19IG9uU3VibWl0ID0ge3RoaXMuc3VibWl0X29wdGlvbn0+XHJcbiAgICAgICAgPGgyPlNldCBvcHRpb25zIG9uZSBieSBvbmU8L2gyPlxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCIgc3R5bGUgPSB7e3dpZHRoIDonMTAwJScsbWFyZ2luOlwiMjAlXCIsbWFyZ2luVG9wIDogXCIzJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGg1PiM8L2g1PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxoNT5jdXJyZW50IG9wdGlvbjwvaDU+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBzdHlsZT17e3dpZHRoOiAnMjAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpbmRleCsxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57b3B0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwib3B0aW9uXCIgc3R5bGUgPSB7e3dpZHRoIDonMTAwJScsbWFyZ2luOlwiMjAlXCIsbWFyZ2luVG9wIDogXCIzJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7b3B0aW9uOmV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgPlxyXG4gICAgICAgICAgICAgICAgU2V0IG9wdGlvbnNcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47Il0sInNvdXJjZVJvb3QiOiIifQ==