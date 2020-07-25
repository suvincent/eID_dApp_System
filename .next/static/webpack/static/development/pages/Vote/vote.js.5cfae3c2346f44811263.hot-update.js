webpackHotUpdate("static\\development\\pages\\Vote\\vote.js",{

/***/ "./pages/Vote/vote.js":
/*!****************************!*\
  !*** ./pages/Vote/vote.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
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

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Register_btn);

    _this = _super.call(this, props);
    _this.state = {
      registry_addr: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Register_btn, [{
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
        onClick: this.props.register(this.state.registry_addr)
      }, "register"));
    }
  }]);

  return Register_btn;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;

var Vote_btn = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Vote_btn, _Component2);

  var _super2 = _createSuper(Vote_btn);

  function Vote_btn() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Vote_btn);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Vote_btn, [{
    key: "render",
    //const vote_btn =function (stage ){
    value: function render() {
      if (this.props.stage != 2) return null;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: '33%',
          margin: 'auto',
          marginTop: "2%"
        },
        onSubmit: this.props.vote
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        as: "select",
        size: "lg"
      }, this.props.ops.map(function (op) {
        return __jsx("option", null, op);
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
    var _this3$state;

    var _this3;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Votesss);

    _this3 = _super3.call(this, props);
    _this3.state = (_this3$state = {
      search: "",
      loading: false,
      loading2: false,
      stage: ''
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3$state, "search", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3$state, "errorMessage", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3$state, "html_test", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3$state, "mailbox_addr", ''), _this3$state); //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  

    _this3.refresh_search = _this3.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this3));
    _this3.register = _this3.register.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this3));
    _this3.go_vote = _this3.go_vote.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this3)); //this.see_status = this.see_status(this);

    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Votesss, [{
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.state.search)); //console.log(this.props.address);
    }
  }, {
    key: "register",
    value: function () {
      var _register = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(addr) {
        var accounts, Vote_event, hash;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                }).toString();
                console.log(hash);
                _context.prev = 8;
                _context.next = 11;
                return Vote_event.methods.register(_ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].utils.fromAscii(hash), addr).send({
                  from: accounts[0]
                });

              case 11:
                _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](8);
                alert(_context.t0.message);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 14]]);
      }));

      function register(_x) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "go_vote",
    value: function () {
      var _go_vote = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
          return _this4.setState({
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
        register: this.register
      }), __jsx(Vote_btn, {
        stage: this.props.stage,
        vote: this.go_vote,
        ops: this.props.options
      })))), __jsx("div", {
        style: {
          width: '100%'
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(props) {
        var _props$query, address, mb_addr, Vote_event, stage, option_length, stage_str, options, index, temp;

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

      function getInitialProps(_x2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3ZvdGUuanMiXSwibmFtZXMiOlsic2hvd19idG4iLCJzdGFnZSIsIlJlZ2lzdGVyX2J0biIsInByb3BzIiwic3RhdGUiLCJyZWdpc3RyeV9hZGRyIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwicmVnaXN0ZXIiLCJDb21wb25lbnQiLCJWb3RlX2J0biIsIndpZHRoIiwibWFyZ2luVG9wIiwidm90ZSIsIm9wcyIsIm1hcCIsIm9wIiwiVm90ZXNzcyIsInNlYXJjaCIsImxvYWRpbmciLCJsb2FkaW5nMiIsInJlZnJlc2hfc2VhcmNoIiwiYmluZCIsImdvX3ZvdGUiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJhZGRyIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhZGRyZXNzIiwiVm90ZV9ldmVudCIsImhhc2giLCJDcnlwdG9KUyIsIlNIQTMiLCJvdXRwdXRMZW5ndGgiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwidXRpbHMiLCJmcm9tQXNjaWkiLCJzZW5kIiwiZnJvbSIsIm1iX2FkZHIiLCJhbGVydCIsIm1lc3NhZ2UiLCJjb2xvciIsInN0YWdlX3N0ciIsIm9wdGlvbnMiLCJxdWVyeSIsInJldHVybl9zdGFnZSIsImNhbGwiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJvcHRpb25fbGVuZ3RoIiwiaW5kZXgiLCJyZXR1cm5fb3B0aW9ucyIsInRlbXAiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBVUMsS0FBVixFQUFpQjtBQUM5QixNQUFJQSxLQUFLLElBQUksQ0FBYixFQUFpQixPQUFPLElBQVAsQ0FEYSxDQUU5Qjs7QUFDQSxTQUNJLCtEQURKO0FBR0gsQ0FORDs7SUFPTUMsWTs7Ozs7QUFDTjtBQUNJLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVk7QUFDUkMsbUJBQWEsRUFBQztBQUROLEtBQVo7QUFGZTtBQUtoQjs7Ozs2QkFDSztBQUFBOztBQUNSO0FBQ0EsVUFBSSxLQUFLRixLQUFMLENBQVdGLEtBQVgsSUFBb0IsQ0FBeEIsRUFBNEIsT0FBTyxJQUFQO0FBRTVCLGFBQ0ksbUVBQ0EsTUFBQyxvRUFBRDtBQUFhLFlBQUksRUFBQyxNQUFsQjtBQUF5QixtQkFBVyxFQUFDLDRCQUFyQztBQUFrRSxpQkFBUyxFQUFDLFNBQTVFO0FBQ1EsYUFBSyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0MsYUFEMUI7QUFFUSxnQkFBUSxFQUFJLGtCQUFBQyxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ0YseUJBQWEsRUFBQ0MsS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQTVCLFdBQWQsQ0FBSjtBQUFBO0FBRnpCLFFBREEsRUFJQSxNQUFDLCtEQUFEO0FBQVEsZUFBTyxFQUFDLGNBQWhCO0FBQThCLGFBQUssRUFBRTtBQUFDQyxnQkFBTSxFQUFFO0FBQVQsU0FBckM7QUFBcUQsZUFBTyxFQUFFLEtBQUtQLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQixLQUFLUCxLQUFMLENBQVdDLGFBQS9CO0FBQTlELG9CQUpBLENBREo7QUFRQzs7OztFQXBCc0JPLCtDOztBQXFCMUI7O0lBQ0tDLFE7Ozs7Ozs7Ozs7Ozs7QUFDTjs2QkFDWTtBQUNSLFVBQUksS0FBS1YsS0FBTCxDQUFXRixLQUFYLElBQW9CLENBQXhCLEVBQTRCLE9BQU8sSUFBUDtBQUU1QixhQUNJLG1FQUNBLE1BQUMsNkRBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBQ2EsZUFBSyxFQUFDLEtBQVA7QUFBY0osZ0JBQU0sRUFBRSxNQUF0QjtBQUE4QkssbUJBQVMsRUFBRztBQUExQyxTQUFiO0FBQThELGdCQUFRLEVBQUUsS0FBS1osS0FBTCxDQUFXYTtBQUFuRixTQUNBLE1BQUMsNkRBQUQsQ0FBTSxLQUFOLFFBQ0ksTUFBQyw2REFBRCxDQUFNLE9BQU47QUFBYyxVQUFFLEVBQUMsUUFBakI7QUFBMEIsWUFBSSxFQUFDO0FBQS9CLFNBQ0ssS0FBS2IsS0FBTCxDQUFXYyxHQUFYLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsRUFBRTtBQUFBLGVBQUksc0JBQVNBLEVBQVQsQ0FBSjtBQUFBLE9BQXJCLENBREwsQ0FESixDQURBLEVBU0EsTUFBQywrREFBRDtBQUFRLGVBQU8sRUFBQyxjQUFoQjtBQUE4QixhQUFLLEVBQUU7QUFBQ1QsZ0JBQU0sRUFBRTtBQUFULFNBQXJDO0FBQXFELFlBQUksRUFBQztBQUExRCxnQkFUQSxDQURBLENBREo7QUFlQzs7OztFQXBCa0JFLCtDOztBQXFCdEI7O0lBRUtRLE87Ozs7O0FBQ0YsbUJBQVlqQixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2YsZ0NBQU1BLEtBQU47QUFDQSxXQUFLQyxLQUFMO0FBQ0VpQixZQUFNLEVBQUMsRUFEVDtBQUVFQyxhQUFPLEVBQUcsS0FGWjtBQUdFQyxjQUFRLEVBQUUsS0FIWjtBQUlFdEIsV0FBSyxFQUFDO0FBSlIseUhBS1MsRUFMVCwySEFNZSxFQU5mLHdIQU9ZLElBUFosMkhBUWUsRUFSZixpQkFGZSxDQVlqQjs7QUFDQSxXQUFLdUIsY0FBTCxHQUFzQixPQUFLQSxjQUFMLENBQW9CQyxJQUFwQiwwR0FBdEI7QUFDQSxXQUFLZCxRQUFMLEdBQWdCLE9BQUtBLFFBQUwsQ0FBY2MsSUFBZCwwR0FBaEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsT0FBS0EsT0FBTCxDQUFhRCxJQUFiLDBHQUFmLENBZmlCLENBZ0JqQjs7QUFoQmlCO0FBaUJoQjs7OztxQ0FtQmE7QUFDWixVQUFHLEtBQUtyQixLQUFMLENBQVdpQixNQUFYLElBQXFCLEVBQXhCLEVBQ0FNLCtDQUFNLENBQUNDLFNBQVAsc0JBQStCLEtBQUt4QixLQUFMLENBQVdpQixNQUExQyxHQUZZLENBR1o7QUFDSDs7Ozt3TkFDY1EsSTs7Ozs7Ozt1QkFDWUMsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQkMsd0I7O3VCQUNrQmpCLG9FQUFJLENBQUMsS0FBS2IsS0FBTCxDQUFXK0IsT0FBWixDOzs7QUFBdEJDLDBCO0FBQ0ZDLG9CLEdBQU9DLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLE9BQWQsRUFBdUI7QUFBRUMsOEJBQVksRUFBRTtBQUFoQixpQkFBdkIsRUFBOENDLFFBQTlDLEU7QUFDWEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaOzs7dUJBRVVELFVBQVUsQ0FBQ1EsT0FBWCxDQUFtQmhDLFFBQW5CLENBQTRCbUIsdURBQUksQ0FBQ2MsS0FBTCxDQUFXQyxTQUFYLENBQXFCVCxJQUFyQixDQUE1QixFQUF1RFAsSUFBdkQsRUFBNkRpQixJQUE3RCxDQUFrRTtBQUFDQyxzQkFBSSxFQUFDZCxRQUFRLENBQUMsQ0FBRDtBQUFkLGlCQUFsRSxDOzs7QUFDTk4sK0RBQU0sQ0FBQ0MsU0FBUCxzQkFBK0IsS0FBS3pCLEtBQUwsQ0FBVzZDLE9BQTFDLGNBQXFELEtBQUs3QyxLQUFMLENBQVcrQixPQUFoRTs7Ozs7OztBQUVBZSxxQkFBSyxDQUFDLFlBQUlDLE9BQUwsQ0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVNDO0FBQUE7O0FBQ0wsYUFDQSxtRUFDQztBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQyx1RUFBNUI7QUFBb0csaUJBQVMsRUFBQyx5RUFBOUc7QUFBd0wsbUJBQVcsRUFBQztBQUFwTSxRQURELEVBRUM7QUFBUSxXQUFHLEVBQUM7QUFBWixRQUZELEVBR0MsTUFBQyw0REFBRCxRQUNBLE1BQUMsK0RBQUQ7QUFBUSxVQUFFLEVBQUMsTUFBWDtBQUFrQixlQUFPLEVBQUMsTUFBMUI7QUFBZ0MsYUFBSyxFQUFFO0FBQUNwQyxlQUFLLEVBQUM7QUFBUDtBQUF2QyxTQUNHLE1BQUMsK0RBQUQsQ0FBUSxLQUFSLGVBREgsRUFFSSxNQUFDLDREQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQXlCLGFBQUssRUFBRTtBQUFDQSxlQUFLLEVBQUM7QUFBUDtBQUFoQyxTQUNHLE1BQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUUsZ0JBQWUsS0FBS1gsS0FBTCxDQUFXNkM7QUFBdkMsU0FBbUQ7QUFBRyxhQUFLLEVBQUU7QUFBQ0csZUFBSyxFQUFFLE9BQVI7QUFBaUJyQyxlQUFLLEVBQUM7QUFBdkI7QUFBVixnQkFBbkQsQ0FESCxFQUVHLE1BQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUUsa0JBQWdCLEtBQUtYLEtBQUwsQ0FBVzZDLE9BQTNCLEdBQW1DLEdBQW5DLEdBQXVDLEtBQUs3QyxLQUFMLENBQVcrQjtBQUEvRCxTQUF5RTtBQUFHLGFBQUssRUFBRTtBQUFDaUIsZUFBSyxFQUFFLE9BQVI7QUFBaUJyQyxlQUFLLEVBQUM7QUFBdkI7QUFBVixrQkFBekUsQ0FGSCxFQUdHLE1BQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBYixTQUErQjtBQUFHLGFBQUssRUFBRTtBQUFDcUMsZUFBSyxFQUFFLE9BQVI7QUFBaUJyQyxlQUFLLEVBQUM7QUFBdkI7QUFBVixrQkFBL0IsQ0FISCxDQUZKLENBREEsRUFVRDtBQUFLLGFBQUssRUFBRTtBQUFDQSxlQUFLLEVBQUU7QUFBUjtBQUFaLFNBRUEsTUFBQyw2REFBRDtBQUFNLGNBQU0sTUFBWjtBQUFhLGFBQUssRUFBRTtBQUFFQSxlQUFLLEVBQUUsS0FBVDtBQUFpQkosZ0JBQU0sRUFBRSxNQUF6QjtBQUFrQ0ssbUJBQVMsRUFBRztBQUE5QztBQUFwQixTQUNJO0FBQUssYUFBSyxFQUFFO0FBQUNvQyxlQUFLLEVBQUc7QUFBVDtBQUFaLDBEQURKLEVBRUksTUFBQyxvRUFBRDtBQUFhLFlBQUksRUFBQyxNQUFsQjtBQUF5QixtQkFBVyxFQUFDLFFBQXJDO0FBQThDLGlCQUFTLEVBQUMsU0FBeEQ7QUFDSSxhQUFLLEVBQUUsS0FBSy9DLEtBQUwsQ0FBV2lCLE1BRHRCO0FBRUksZ0JBQVEsRUFBSSxrQkFBQWYsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNjLGtCQUFNLEVBQUNmLEtBQUssQ0FBQ0UsTUFBTixDQUFhQztBQUFyQixXQUFkLENBQUo7QUFBQTtBQUZyQixRQUZKLEVBS0ksTUFBQywrREFBRDtBQUFRLGVBQU8sRUFBQyxjQUFoQjtBQUErQixlQUFPLEVBQUUsS0FBS2U7QUFBN0Msa0JBTEosQ0FGQSxFQVNBLE1BQUMscURBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBRVYsZUFBSyxFQUFFLEtBQVQ7QUFBaUJKLGdCQUFNLEVBQUUsTUFBekI7QUFBa0NLLG1CQUFTLEVBQUc7QUFBOUM7QUFBYixTQUNJLE1BQUMscURBQUQsQ0FBTSxJQUFOLFFBQ0ksTUFBQyxxREFBRCxDQUFNLEtBQU4sbUJBREosRUFFSSxNQUFDLHFEQUFELENBQU0sUUFBTjtBQUFlLGlCQUFTLEVBQUM7QUFBekIsNkJBQTRELEtBQUtaLEtBQUwsQ0FBVytCLE9BQXZFLENBRkosRUFHSSxNQUFDLHFEQUFELENBQU0sSUFBTiw2SkFISixFQU1JLE1BQUMscURBQUQsQ0FBTSxJQUFOLFFBQVksS0FBSy9CLEtBQUwsQ0FBV2lELFNBQXZCLENBTkosRUFPS3BELFFBQVEsQ0FBQyxLQUFLRyxLQUFMLENBQVdGLEtBQVosQ0FQYixFQVFJLE1BQUMsWUFBRDtBQUFjLGFBQUssRUFBRyxLQUFLRSxLQUFMLENBQVdGLEtBQWpDO0FBQXdDLGdCQUFRLEVBQUksS0FBS1U7QUFBekQsUUFSSixFQVNJLE1BQUMsUUFBRDtBQUFVLGFBQUssRUFBRyxLQUFLUixLQUFMLENBQVdGLEtBQTdCO0FBQW9DLFlBQUksRUFBSSxLQUFLeUIsT0FBakQ7QUFBMEQsV0FBRyxFQUFJLEtBQUt2QixLQUFMLENBQVdrRDtBQUE1RSxRQVRKLENBREosQ0FUQSxDQVZDLEVBaUNEO0FBQUssYUFBSyxFQUFFO0FBQUV2QyxlQUFLLEVBQUU7QUFBVDtBQUFaLFFBakNDLENBSEQsQ0FEQTtBQTBDSDs7OztnT0FwRjRCWCxLOzs7Ozs7OytCQUNDQSxLQUFLLENBQUNtRCxLLEVBQTFCcEIsTyxnQkFBQUEsTyxFQUFTYyxPLGdCQUFBQSxPOzt1QkFDU2hDLG9FQUFJLENBQUNrQixPQUFELEM7OztBQUF0QkMsMEI7O3VCQUNjQSxVQUFVLENBQUNRLE9BQVgsQ0FBbUJZLFlBQW5CLEdBQWtDQyxJQUFsQyxFOzs7QUFBZHZELHFCOzt1QkFFc0JrQyxVQUFVLENBQUNRLE9BQVgsQ0FBbUJjLHFCQUFuQixHQUEyQ0QsSUFBM0MsRTs7O0FBQXRCRSw2QjtBQUNBTix5QixHQUFjbkQsS0FBSyxJQUFJLENBQVYsR0FBYSxlQUFiLEdBQ0NBLEtBQUssSUFBSSxDQUFWLEdBQWEsa0JBQWIsR0FDQ0EsS0FBSyxJQUFJLENBQVYsR0FBYSxjQUFiLEdBQ0NBLEtBQUssSUFBSSxDQUFWLEdBQWEsZUFBYixHQUNDQSxLQUFLLElBQUksQ0FBVixHQUFhLGdCQUFiLEdBQThCLGU7QUFDN0NvRCx1QixHQUFVLEU7QUFDTE0scUIsR0FBUSxDOzs7c0JBQUdBLEtBQUssR0FBR0QsYTs7Ozs7O3VCQUNQdkIsVUFBVSxDQUFDUSxPQUFYLENBQW1CaUIsY0FBbkIsQ0FBa0NELEtBQWxDLEVBQXlDSCxJQUF6QyxFOzs7QUFBYkssb0I7QUFDSlIsdUJBQU8sQ0FBQ1MsSUFBUixDQUFhRCxJQUFiOzs7QUFGdUNGLHFCQUFLLEU7Ozs7O2tEQUkxQztBQUFDekIseUJBQU8sRUFBUEEsT0FBRDtBQUFTQyw0QkFBVSxFQUFWQSxVQUFUO0FBQW9CbEMsdUJBQUssRUFBTEEsS0FBcEI7QUFBMEJ5RCwrQkFBYSxFQUFiQSxhQUExQjtBQUF3Q04sMkJBQVMsRUFBVEEsU0FBeEM7QUFBa0RDLHlCQUFPLEVBQVBBLE9BQWxEO0FBQTBETCx5QkFBTyxFQUFQQTtBQUExRCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5DUXBDLCtDOztBQTJHUFEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXHZvdGUuanMuNWNmYWUzYzIzNDZmNDQ4MTEyNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS9yZWdpc3RyeSc7XHJcblxyXG5jb25zdCBzaG93X2J0biA9IGZ1bmN0aW9uKCBzdGFnZSApe1xyXG4gICAgaWYgKHN0YWdlICE9IDAgKSByZXR1cm4gbnVsbDtcclxuICAgIC8vY29uc29sZS5sb2coc3RhZ2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PnRoaXMgdm90ZSBzdGlsbCBuZWVkcyBzZXR0aW5nIHBsZWFzZSB3YWl0PC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5jbGFzcyBSZWdpc3Rlcl9idG4gZXh0ZW5kcyBDb21wb25lbnR7XHJcbi8vY29uc3QgcmVnaXN0ZXJfYnRuID1mdW5jdGlvbiAoIHN0YWdlICl7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgIHJlZ2lzdHJ5X2FkZHI6XCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0YWdlICk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdGFnZSAhPSAxICkgcmV0dXJuIG51bGw7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIHJlZ2lzdHJ5IG51bWJlclwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVnaXN0cnlfYWRkcn0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtyZWdpc3RyeV9hZGRyOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wic3R5bGU9e3ttYXJnaW4gOlwiMiVcIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMucmVnaXN0ZXIodGhpcy5zdGF0ZS5yZWdpc3RyeV9hZGRyKX0+cmVnaXN0ZXI8L0J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgICB9XHJcbn07XHJcbmNsYXNzIFZvdGVfYnRuIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4vL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3RhZ2UgIT0gMiApIHJldHVybiBudWxsO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7d2lkdGg6JzMzJScsIG1hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3AgOiBcIjIlXCJ9fSBvblN1Ym1pdD17dGhpcy5wcm9wcy52b3RlfT5cclxuICAgICAgICA8Rm9ybS5Hcm91cCA+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgYXM9XCJzZWxlY3RcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9wcy5tYXAob3AgPT4gPG9wdGlvbj57b3B9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgIHsvKjxvcHRpb24+S29yZWFuIEZpc2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+RG9uYWxkIFRydW1wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlhpIERBREE8L29wdGlvbj4qL31cclxuICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2w+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wic3R5bGU9e3ttYXJnaW4gOlwiMiVcIn19IHR5cGU9XCJzdWJtaXRcIj5Wb3RlPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIFZvdGVzc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgc2VhcmNoOlwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgICBzdGFnZTonJyxcclxuICAgICAgICAgIHNlYXJjaDonJyxcclxuICAgICAgICAgIGVycm9yTWVzc2FnZTonJyxcclxuICAgICAgICAgIGh0bWxfdGVzdDpudWxsLFxyXG4gICAgICAgICAgbWFpbGJveF9hZGRyOicnXHJcbiAgICAgICAgfTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTsvL+aTt+WPlumAmeWAi+e2suWdgOeahHVybOmCo3BhcnTnmoRhZGRyZXNzKGZyb20gcm91dGVzPz8pICBcclxuICAgICAgdGhpcy5yZWZyZXNoX3NlYXJjaCA9IHRoaXMucmVmcmVzaF9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5yZWdpc3RlciA9IHRoaXMucmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5nb192b3RlID0gdGhpcy5nb192b3RlLmJpbmQodGhpcyk7XHJcbiAgICAgIC8vdGhpcy5zZWVfc3RhdHVzID0gdGhpcy5zZWVfc3RhdHVzKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdHthZGRyZXNzLCBtYl9hZGRyfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUoYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3N0YWdlKCkuY2FsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbl9sZW5ndGggPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnNfbGVuZ3RoKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YWdlX3N0ciA9ICAoc3RhZ2UgPT0gMCk/XCJzdGFnZSA6IFNldHVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAxKT9cInN0YWdlIDogUmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDIpP1wic3RhZ2UgOiBWb3RlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAzKT9cInN0YWdlIDogVGFsbHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDQpP1wic3RhZ2UgOiBGaW5pc2hcIjpcInN0YWdlIDogU2V0dXBcIjtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25fbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJue2FkZHJlc3MsVm90ZV9ldmVudCxzdGFnZSxvcHRpb25fbGVuZ3RoLHN0YWdlX3N0cixvcHRpb25zLG1iX2FkZHJ9O1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKVxyXG4gICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3ZvdGUvJHt0aGlzLnN0YXRlLnNlYXJjaH1gKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyByZWdpc3RlcihhZGRyKXtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMyhcImh1bWFuXCIsIHsgb3V0cHV0TGVuZ3RoOiAyNTYgfSkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhoYXNoKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZWdpc3Rlcih3ZWIzLnV0aWxzLmZyb21Bc2NpaShoYXNoKSxhZGRyKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3ZvdGUvJHt0aGlzLnByb3BzLm1iX2FkZHJ9LyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ29fdm90ZSgpe1xyXG4gICAgICAgIC8vY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIC8vYXdhaXQgdGhpcy5wcm9wcy5Wb3RlX2V2ZW50Lm1ldGhvZHMucmVnaXN0ZXIoKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2NyeXB0by1qcy8zLjEuOS0xL2NyeXB0by1qcy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgPlZvdGU8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaG9tZS9cIisgdGhpcy5wcm9wcy5tYl9hZGRyIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvc3RhdHVzL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3N9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlN0YXR1czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9pbmRleFwiIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkxvZ291dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuXHJcbiAgICAgICAgPEZvcm0gaW5saW5lIHN0eWxlPXt7IHdpZHRoOiAnMzMlJyAsIG1hcmdpbjogJ2F1dG8nICwgbWFyZ2luVG9wIDogXCIyJVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvciA6IFwiYmxhY2tcIn19ID4gaW5lc3J0IHlvdXIgdm90ZSBjb250cmFjdCBhZGRyZXNzIGhlcmUgIC0mZ3Q7ICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hfc2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMzMlJyAsIG1hcmdpbjogJ2F1dG8nICwgbWFyZ2luVG9wIDogXCIyJVwifX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5FbGVjdGlvbjwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnZvdGVyIGFkZHJlc3MgOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyB0aGUgbGF0ZXN0IDIwMjAgcHJlc2lkZW50aWFsIHBvbGxzIGFuZCBoZWFkLXRvLWhlYWQgbWF0Y2gtdXAgYmV0d2VlbiBKb2UgQmlkZW4gYW5kIERvbmFsZCBUcnVtcC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHZpZXcgY25uLmNvbS9lbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dD57dGhpcy5wcm9wcy5zdGFnZV9zdHJ9PC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICB7c2hvd19idG4odGhpcy5wcm9wcy5zdGFnZSl9XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJfYnRuIHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX0gcmVnaXN0ZXIgPSB7dGhpcy5yZWdpc3Rlcn0+PC9SZWdpc3Rlcl9idG4+XHJcbiAgICAgICAgICAgICAgICA8Vm90ZV9idG4gc3RhZ2UgPXt0aGlzLnByb3BzLnN0YWdlfSB2b3RlID0ge3RoaXMuZ29fdm90ZX0gb3BzID0ge3RoaXMucHJvcHMub3B0aW9uc30+PC9Wb3RlX2J0bj5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGVzc3M7Il0sInNvdXJjZVJvb3QiOiIifQ==