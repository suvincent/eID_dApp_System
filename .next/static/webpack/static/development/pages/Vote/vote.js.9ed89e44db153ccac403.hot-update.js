webpackHotUpdate("static\\development\\pages\\Vote\\vote.js",{

/***/ "./pages/Vote/vote.js":
/*!****************************!*\
  !*** ./pages/Vote/vote.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ethereum/Vote/vote */ "./ethereum/Vote/vote.js");
/* harmony import */ var _ethereum_Vote_registry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ethereum/Vote/registry */ "./ethereum/Vote/registry.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var show_btn = function show_btn(stage) {
  if (stage != 0) return null; //console.log(stage);

  return __jsx("div", null, "this vote still needs setting please wait");
};

var Register_btn = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Register_btn, _Component);

  var _super = _createSuper(Register_btn);

  //const register_btn =function ( stage ){
  function Register_btn(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Register_btn);

    _this = _super.call(this, props);
    _this.state = {
      registry_addr: ""
    };
    _this.register = _this.register.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Register_btn, [{
    key: "register",
    value: function () {
      var _register = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var accounts, Vote_event, hash;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                _context.next = 5;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(this.props.address);

              case 5:
                Vote_event = _context.sent;
                hash = CryptoJS.SHA3("human", {
                  outputLength: 256
                }).toString(); //console.log(web3.utils.fromAscii(hash));

                _context.prev = 7;
                _context.next = 10;
                return Vote_event.methods.register('0x' + hash, this.state.registry_addr).send({
                  from: accounts[0]
                });

              case 10:
                _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);
                alert(_context.t0.message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 13]]);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //console.log(this.props.stage );
      if (this.props.stage != 1) return null;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        type: "text",
        placeholder: "enter your registry number",
        className: "mr-sm-2",
        value: this.state.registry_addr,
        onChange: function onChange(event) {
          return _this2.setState({
            registry_addr: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "outline-info",
        style: {
          margin: "2%"
        },
        onClick: this.register
      }, "register"));
    }
  }]);

  return Register_btn;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;

var Vote_btn = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Vote_btn, _Component2);

  var _super2 = _createSuper(Vote_btn);

  //const vote_btn =function (stage ){
  function Vote_btn(props) {
    var _this3;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Vote_btn);

    _this3 = _super2.call(this, props);
    _this3.state = {
      vote_value: 0
    };
    _this3.go_vote = _this3.go_vote.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3));
    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Vote_btn, [{
    key: "go_vote",
    value: function () {
      var _go_vote = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(this.state.vote_value); //const accounts = await web3.eth.getAccounts();
                //await this.props.Vote_event.methods.register().send({from:accounts[0]});

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function go_vote() {
        return _go_vote.apply(this, arguments);
      }

      return go_vote;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.stage != 2) return null;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: '33%',
          margin: 'auto',
          marginTop: "2%"
        },
        onSubmit: this.go_vote
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        as: "select",
        size: "lg",
        onChange: function onChange(event) {
          return _this4.setState({
            vote_value: event.target.value
          });
        }
      }, __jsx("option", {
        value: -1
      }, "\u8ACB\u9078\u64C7"), this.props.ops.map(function (op, index) {
        return __jsx("option", {
          value: index
        }, op);
      }))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "outline-info",
        style: {
          margin: "2%"
        },
        type: "submit"
      }, "Vote")));
    }
  }]);

  return Vote_btn;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;

var Votesss = /*#__PURE__*/function (_Component3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Votesss, _Component3);

  var _super3 = _createSuper(Votesss);

  function Votesss(props) {
    var _this5$state;

    var _this5;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Votesss);

    _this5 = _super3.call(this, props);
    _this5.state = (_this5$state = {
      search: "",
      loading: false,
      loading2: false,
      stage: ''
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5$state, "search", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5$state, "errorMessage", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5$state, "html_test", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5$state, "mailbox_addr", ''), _this5$state); //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  

    _this5.refresh_search = _this5.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this5));
    return _this5;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Votesss, [{
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.state.search)); //console.log(this.props.address);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossOrigin: "anonymous"
      }), __jsx("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"
      }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        bg: "dark",
        variant: "dark",
        style: {
          width: "100%"
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"].Brand, null, "Vote"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "mr-auto",
        style: {
          width: "50%"
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/Vote/home/" + this.props.mb_addr
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/Vote/status/" + this.props.mb_addr + "/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Status")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/Vote/index"
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Logout")))), __jsx("div", {
        style: {
          width: '100%'
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        inline: true,
        style: {
          width: '33%',
          margin: 'auto',
          marginTop: "2%"
        }
      }, __jsx("div", {
        style: {
          color: "black"
        }
      }, " inesrt your vote contract address here  ->   "), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        type: "text",
        placeholder: "Search",
        className: "mr-sm-2",
        value: this.state.search,
        onChange: function onChange(event) {
          return _this6.setState({
            search: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "outline-info",
        onClick: this.refresh_search
      }, "Search")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"], {
        style: {
          width: '33%',
          margin: 'auto',
          marginTop: "2%"
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Title, null, "Election"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "voter address : ", this.props.address), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Text, null, "View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Text, null, this.props.stage_str), show_btn(this.props.stage), __jsx(Register_btn, {
        stage: this.props.stage,
        address: this.props.address,
        mb_addr: this.props.mb_addr
      }), __jsx(Vote_btn, {
        stage: this.props.stage,
        ops: this.props.options,
        address: this.props.address,
        mb_addr: this.props.mb_addr
      })))), __jsx("div", {
        style: {
          width: '100%'
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(props) {
        var _props$query, address, mb_addr, Vote_event, stage, option_length, stage_str, options, index, temp;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, mb_addr = _props$query.mb_addr;
                _context3.next = 3;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(address);

              case 3:
                Vote_event = _context3.sent;
                _context3.next = 6;
                return Vote_event.methods.return_stage().call();

              case 6:
                stage = _context3.sent;
                _context3.next = 9;
                return Vote_event.methods.return_options_length().call();

              case 9:
                option_length = _context3.sent;
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                options = [];
                index = 0;

              case 13:
                if (!(index < option_length)) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 16;
                return Vote_event.methods.return_options(index).call();

              case 16:
                temp = _context3.sent;
                options.push(temp);

              case 18:
                index++;
                _context3.next = 13;
                break;

              case 21:
                return _context3.abrupt("return", {
                  address: address,
                  Vote_event: Vote_event,
                  stage: stage,
                  option_length: option_length,
                  stage_str: stage_str,
                  options: options,
                  mb_addr: mb_addr
                });

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Votesss;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Votesss);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3ZvdGUuanMiXSwibmFtZXMiOlsic2hvd19idG4iLCJzdGFnZSIsIlJlZ2lzdGVyX2J0biIsInByb3BzIiwic3RhdGUiLCJyZWdpc3RyeV9hZGRyIiwicmVnaXN0ZXIiLCJiaW5kIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJ2b3RlIiwiYWRkcmVzcyIsIlZvdGVfZXZlbnQiLCJoYXNoIiwiQ3J5cHRvSlMiLCJTSEEzIiwib3V0cHV0TGVuZ3RoIiwidG9TdHJpbmciLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtYl9hZGRyIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwiQ29tcG9uZW50IiwiVm90ZV9idG4iLCJ2b3RlX3ZhbHVlIiwiZ29fdm90ZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm9wcyIsIm1hcCIsIm9wIiwiaW5kZXgiLCJWb3Rlc3NzIiwic2VhcmNoIiwibG9hZGluZyIsImxvYWRpbmcyIiwicmVmcmVzaF9zZWFyY2giLCJjb2xvciIsInN0YWdlX3N0ciIsIm9wdGlvbnMiLCJxdWVyeSIsInJldHVybl9zdGFnZSIsImNhbGwiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJvcHRpb25fbGVuZ3RoIiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVDLEtBQVYsRUFBaUI7QUFDOUIsTUFBSUEsS0FBSyxJQUFJLENBQWIsRUFBaUIsT0FBTyxJ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QWtDZCxLQUFsQyxFQUF5Q1csSUFBekMsRTs7O0FBQWJJLG9CO0FBQ0pQLHVCQUFPLENBQUNRLElBQVIsQ0FBYUQsSUFBYjs7O0FBRnVDZixxQkFBSyxFOzs7OztrREFJMUM7QUFBQy9CLHlCQUFPLEVBQVBBLE9BQUQ7QUFBU0MsNEJBQVUsRUFBVkEsVUFBVDtBQUFvQmIsdUJBQUssRUFBTEEsS0FBcEI7QUFBMEJ3RCwrQkFBYSxFQUFiQSxhQUExQjtBQUF3Q04sMkJBQVMsRUFBVEEsU0FBeEM7QUFBa0RDLHlCQUFPLEVBQVBBLE9BQWxEO0FBQTBEM0IseUJBQU8sRUFBUEE7QUFBMUQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQ1FRLCtDOztBQXNGUFksc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXHZvdGUuanMuOWVkODllNDRkYjE1M2NjYWM0MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS9yZWdpc3RyeSc7XHJcblxyXG5jb25zdCBzaG93X2J0biA9IGZ1bmN0aW9uKCBzdGFnZSApe1xyXG4gICAgaWYgKHN0YWdlICE9IDAgKSByZXR1cm4gbnVsbDtcclxuICAgIC8vY29uc29sZS5sb2coc3RhZ2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PnRoaXMgdm90ZSBzdGlsbCBuZWVkcyBzZXR0aW5nIHBsZWFzZSB3YWl0PC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5jbGFzcyBSZWdpc3Rlcl9idG4gZXh0ZW5kcyBDb21wb25lbnR7XHJcbi8vY29uc3QgcmVnaXN0ZXJfYnRuID1mdW5jdGlvbiAoIHN0YWdlICl7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgIHJlZ2lzdHJ5X2FkZHI6XCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlciA9IHRoaXMucmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICBhc3luYyByZWdpc3Rlcigpe1xyXG4gICAgICAgICAgLy8weDQyMzA5ZjkyNDIzN0JhYzY2MkFmNjQ5NjVBMmVmQUY4YzA4ZkU0ZDJcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMyhcImh1bWFuXCIsIHsgb3V0cHV0TGVuZ3RoOiAyNTYgfSkudG9TdHJpbmcoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHdlYjMudXRpbHMuZnJvbUFzY2lpKGhhc2gpKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZWdpc3RlcignMHgnK2hhc2gsdGhpcy5zdGF0ZS5yZWdpc3RyeV9hZGRyKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3ZvdGUvJHt0aGlzLnByb3BzLm1iX2FkZHJ9LyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuc3RhZ2UgKTtcclxuICAgIGlmICh0aGlzLnByb3BzLnN0YWdlICE9IDEgKSByZXR1cm4gbnVsbDtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgcmVnaXN0cnkgbnVtYmVyXCIgY2xhc3NOYW1lPVwibXItc20tMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWdpc3RyeV9hZGRyfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3JlZ2lzdHJ5X2FkZHI6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCJzdHlsZT17e21hcmdpbiA6XCIyJVwifX0gb25DbGljaz17dGhpcy5yZWdpc3Rlcn0+cmVnaXN0ZXI8L0J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgICB9XHJcbn07XHJcbmNsYXNzIFZvdGVfYnRuIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4vL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgICAgdm90ZV92YWx1ZTowXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdvX3ZvdGUgPSB0aGlzLmdvX3ZvdGUuYmluZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgYXN5bmMgZ29fdm90ZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudm90ZV92YWx1ZSk7XHJcbiAgICAgICAgLy9jb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgLy9hd2FpdCB0aGlzLnByb3BzLlZvdGVfZXZlbnQubWV0aG9kcy5yZWdpc3RlcigpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3RhZ2UgIT0gMiApIHJldHVybiBudWxsO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7d2lkdGg6JzMzJScsIG1hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3AgOiBcIjIlXCJ9fSBvblN1Ym1pdD17dGhpcy5nb192b3RlfT5cclxuICAgICAgICA8Rm9ybS5Hcm91cCA+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgYXM9XCJzZWxlY3RcIiBzaXplPVwibGdcIiAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7dm90ZV92YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KX0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXstMX0+6KuL6YG45pOHPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vcHMubWFwKChvcCwgaW5kZXgpID0+IDxvcHRpb24gdmFsdWU9e2luZGV4fT57b3B9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgIHsvKjxvcHRpb24+S29yZWFuIEZpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+RG9uYWxkIFRydW1wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlhpIERBREE8L29wdGlvbj4qL31cclxuICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wic3R5bGU9e3ttYXJnaW4gOlwiMiVcIn19IHR5cGU9XCJzdWJtaXRcIj5Wb3RlPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIFZvdGVzc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgc2VhcmNoOlwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgICBzdGFnZTonJyxcclxuICAgICAgICAgIHNlYXJjaDonJyxcclxuICAgICAgICAgIGVycm9yTWVzc2FnZTonJyxcclxuICAgICAgICAgIGh0bWxfdGVzdDpudWxsLFxyXG4gICAgICAgICAgbWFpbGJveF9hZGRyOicnXHJcbiAgICAgICAgfTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTsvL+aTt+WPlumAmeWAi+e2suWdgOeahHVybOmCo3BhcnTnmoRhZGRyZXNzKGZyb20gcm91dGVzPz8pICBcclxuICAgICAgdGhpcy5yZWZyZXNoX3NlYXJjaCA9IHRoaXMucmVmcmVzaF9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3R7YWRkcmVzcywgbWJfYWRkcn0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHN0YWdlID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9zdGFnZSgpLmNhbGwoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcHRpb25fbGVuZ3RoID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zX2xlbmd0aCgpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBzdGFnZV9zdHIgPSAgKHN0YWdlID09IDApP1wic3RhZ2UgOiBTZXR1cFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMSk/XCJzdGFnZSA6IFJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAyKT9cInN0YWdlIDogVm90ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMyk/XCJzdGFnZSA6IFRhbGx5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSA0KT9cInN0YWdlIDogRmluaXNoXCI6XCJzdGFnZSA6IFNldHVwXCI7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9uX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9ucyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2godGVtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybnthZGRyZXNzLFZvdGVfZXZlbnQsc3RhZ2Usb3B0aW9uX2xlbmd0aCxzdGFnZV9zdHIsb3B0aW9ucyxtYl9hZGRyfTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hfc2VhcmNoKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIilcclxuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS92b3RlLyR7dGhpcy5zdGF0ZS5zZWFyY2h9YCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvY3J5cHRvLWpzLzMuMS45LTEvY3J5cHRvLWpzLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcInN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPE5hdmJhci5CcmFuZCA+Vm90ZTwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9ob21lL1wiKyB0aGlzLnByb3BzLm1iX2FkZHIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+SG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9zdGF0dXMvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMuYWRkcmVzc30gPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+U3RhdHVzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2luZGV4XCIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+TG9nb3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlxyXG5cclxuICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3sgd2lkdGg6ICczMyUnICwgbWFyZ2luOiAnYXV0bycgLCBtYXJnaW5Ub3AgOiBcIjIlXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJibGFja1wifX0gPiBpbmVzcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2g6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICczMyUnICwgbWFyZ2luOiAnYXV0bycgLCBtYXJnaW5Ub3AgOiBcIjIlXCJ9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkVsZWN0aW9uPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+dm90ZXIgYWRkcmVzcyA6IHt0aGlzLnByb3BzLmFkZHJlc3N9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IHRoZSBsYXRlc3QgMjAyMCBwcmVzaWRlbnRpYWwgcG9sbHMgYW5kIGhlYWQtdG8taGVhZCBtYXRjaC11cCBiZXR3ZWVuIEpvZSBCaWRlbiBhbmQgRG9uYWxkIFRydW1wLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdmlldyBjbm4uY29tL2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0Pnt0aGlzLnByb3BzLnN0YWdlX3N0cn08L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgIHtzaG93X2J0bih0aGlzLnByb3BzLnN0YWdlKX1cclxuICAgICAgICAgICAgICAgIDxSZWdpc3Rlcl9idG4gc3RhZ2UgPXt0aGlzLnByb3BzLnN0YWdlfSBhZGRyZXNzID0ge3RoaXMucHJvcHMuYWRkcmVzc30gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT48L1JlZ2lzdGVyX2J0bj5cclxuICAgICAgICAgICAgICAgIDxWb3RlX2J0biBzdGFnZSA9e3RoaXMucHJvcHMuc3RhZ2V9IG9wcyA9IHt0aGlzLnByb3BzLm9wdGlvbnN9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvVm90ZV9idG4+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3Rlc3NzOyJdLCJzb3VyY2VSb290IjoiIn0=