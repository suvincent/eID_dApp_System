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
                }).toString();
                console.log(_ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].utils.fromAscii(hash));
                _context.prev = 8;
                _context.next = 11;
                return Vote_event.methods.register('0x' + hash, this.state.registry_addr).send({
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

  function Vote_btn() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Vote_btn);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Vote_btn, [{
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

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Votesss);

    _this3 = _super3.call(this, props);
    _this3.state = (_this3$state = {
      search: "",
      loading: false,
      loading2: false,
      stage: ''
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3$state, "search", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3$state, "errorMessage", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3$state, "html_test", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3$state, "mailbox_addr", ''), _this3$state); //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  

    _this3.refresh_search = _this3.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3));
    _this3.go_vote = _this3.go_vote.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3)); //this.see_status = this.see_status(this);

    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Votesss, [{
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.state.search)); //console.log(this.props.address);
    }
  }, {
    key: "go_vote",
    value: function () {
      var _go_vote = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3ZvdGUuanMiXSwibmFtZXMiOlsic2hvd19idG4iLCJzdGFnZSIsIlJlZ2lzdGVyX2J0biIsInByb3BzIiwic3RhdGUiLCJyZWdpc3RyeV9hZGRyIiwicmVnaXN0ZXIiLCJiaW5kIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJ2b3RlIiwiYWRkcmVzcyIsIlZvdGVfZXZlbnQiLCJoYXNoIiwiQ3J5cHRvSlMiLCJTSEEzIiwib3V0cHV0TGVuZ3RoIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwidXRpbHMiLCJmcm9tQXNjaWkiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtYl9hZGRyIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwiQ29tcG9uZW50IiwiVm90ZV9idG4iLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm9wcyIsIm1hcCIsIm9wIiwiVm90ZXNzcyIsInNlYXJjaCIsImxvYWRpbmciLCJsb2FkaW5nMiIsInJlZnJlc2hfc2VhcmNoIiwiZ29fdm90ZSIsImNvbG9yIiwic3RhZ2Vfc3RyIiwib3B0aW9ucyIsInF1ZXJ5IiwicmV0dXJuX3N0YWdlIiwiY2FsbCIsInJldHVybl9vcHRpb25zX2xlbmd0aCIsIm9wdGlvbl9sZW5ndGgiLCJpbmRleCIsInJldHVybl9vcHRpb25zIiwidGVtcCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVQyxLQUFWLEVBQWlCO0FBQzlCLE1BQUlBLEtBQUssSUFBSSxDQUFiLEVBQWlCLE9BQU8sSUFBUCxDQURhLENBRTlCOztBQUNBLFNBQ0ksK0RBREo7QUFHSCxDQU5EOztJQU9NQyxZOzs7OztBQUNOO0FBQ0ksd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBWTtBQUNSQyxtQkFBYSxFQUFDO0FBRE4sS0FBWjtBQUdBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLHlHQUFoQjtBQUxlO0FBTWhCOzs7Ozs7Ozs7Ozs7dUJBR3dCQyx1REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRTs7O0FBQWpCQyx3Qjs7dUJBQ2tCQyxvRUFBSSxDQUFDLEtBQUtULEtBQUwsQ0FBV1UsT0FBWixDOzs7QUFBdEJDLDBCO0FBQ0ZDLG9CLEdBQU9DLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLE9BQWQsRUFBdUI7QUFBRUMsOEJBQVksRUFBRTtBQUFoQixpQkFBdkIsRUFBOENDLFFBQTlDLEU7QUFDWEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZYix1REFBSSxDQUFDYyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJSLElBQXJCLENBQVo7Ozt1QkFFVUQsVUFBVSxDQUFDVSxPQUFYLENBQW1CbEIsUUFBbkIsQ0FBNEIsT0FBS1MsSUFBakMsRUFBc0MsS0FBS1gsS0FBTCxDQUFXQyxhQUFqRCxFQUFnRW9CLElBQWhFLENBQXFFO0FBQUNDLHNCQUFJLEVBQUNmLFFBQVEsQ0FBQyxDQUFEO0FBQWQsaUJBQXJFLEM7OztBQUNOZ0IsK0RBQU0sQ0FBQ0MsU0FBUCxzQkFBK0IsS0FBS3pCLEtBQUwsQ0FBVzBCLE9BQTFDLGNBQXFELEtBQUsxQixLQUFMLENBQVdVLE9BQWhFOzs7Ozs7O0FBRUFpQixxQkFBSyxDQUFDLFlBQUlDLE9BQUwsQ0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdBO0FBQUE7O0FBQ1I7QUFDQSxVQUFJLEtBQUs1QixLQUFMLENBQVdGLEtBQVgsSUFBb0IsQ0FBeEIsRUFBNEIsT0FBTyxJQUFQO0FBRTVCLGFBQ0ksbUVBQ0EsTUFBQyxvRUFBRDtBQUFhLFlBQUksRUFBQyxNQUFsQjtBQUF5QixtQkFBVyxFQUFDLDRCQUFyQztBQUFrRSxpQkFBUyxFQUFDLFNBQTVFO0FBQ1EsYUFBSyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0MsYUFEMUI7QUFFUSxnQkFBUSxFQUFJLGtCQUFBMkIsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUM1Qix5QkFBYSxFQUFDMkIsS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQTVCLFdBQWQsQ0FBSjtBQUFBO0FBRnpCLFFBREEsRUFJQSxNQUFDLCtEQUFEO0FBQVEsZUFBTyxFQUFDLGNBQWhCO0FBQThCLGFBQUssRUFBRTtBQUFDQyxnQkFBTSxFQUFFO0FBQVQsU0FBckM7QUFBcUQsZUFBTyxFQUFFLEtBQUs5QjtBQUFuRSxvQkFKQSxDQURKO0FBUUM7Ozs7RUFsQ3NCK0IsK0M7O0FBbUMxQjs7SUFDS0MsUTs7Ozs7Ozs7Ozs7OztBQUNOOzZCQUNZO0FBQ1IsVUFBSSxLQUFLbkMsS0FBTCxDQUFXRixLQUFYLElBQW9CLENBQXhCLEVBQTRCLE9BQU8sSUFBUDtBQUU1QixhQUNJLG1FQUNBLE1BQUMsNkRBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBQ3NDLGVBQUssRUFBQyxLQUFQO0FBQWNILGdCQUFNLEVBQUUsTUFBdEI7QUFBOEJJLG1CQUFTLEVBQUc7QUFBMUMsU0FBYjtBQUE4RCxnQkFBUSxFQUFFLEtBQUtyQyxLQUFMLENBQVdTO0FBQW5GLFNBQ0EsTUFBQyw2REFBRCxDQUFNLEtBQU4sUUFDSSxNQUFDLDZEQUFELENBQU0sT0FBTjtBQUFjLFVBQUUsRUFBQyxRQUFqQjtBQUEwQixZQUFJLEVBQUM7QUFBL0IsU0FDSyxLQUFLVCxLQUFMLENBQVdzQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsRUFBRTtBQUFBLGVBQUksc0JBQVNBLEVBQVQsQ0FBSjtBQUFBLE9BQXJCLENBREwsQ0FESixDQURBLEVBU0EsTUFBQywrREFBRDtBQUFRLGVBQU8sRUFBQyxjQUFoQjtBQUE4QixhQUFLLEVBQUU7QUFBQ1AsZ0JBQU0sRUFBRTtBQUFULFNBQXJDO0FBQXFELFlBQUksRUFBQztBQUExRCxnQkFUQSxDQURBLENBREo7QUFlQzs7OztFQXBCa0JDLCtDOztBQXFCdEI7O0lBRUtPLE87Ozs7O0FBQ0YsbUJBQVl6QyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2YsZ0NBQU1BLEtBQU47QUFDQSxXQUFLQyxLQUFMO0FBQ0V5QyxZQUFNLEVBQUMsRUFEVDtBQUVFQyxhQUFPLEVBQUcsS0FGWjtBQUdFQyxjQUFRLEVBQUUsS0FIWjtBQUlFOUMsV0FBSyxFQUFDO0FBSlIseUhBS1MsRUFMVCwySEFNZSxFQU5mLHdIQU9ZLElBUFosMkhBUWUsRUFSZixpQkFGZSxDQVlqQjs7QUFDQSxXQUFLK0MsY0FBTCxHQUFzQixPQUFLQSxjQUFMLENBQW9CekMsSUFBcEIsMEdBQXRCO0FBRUEsV0FBSzBDLE9BQUwsR0FBZSxPQUFLQSxPQUFMLENBQWExQyxJQUFiLDBHQUFmLENBZmlCLENBZ0JqQjs7QUFoQmlCO0FBaUJoQjs7OztxQ0FtQmE7QUFDWixVQUFHLEtBQUtILEtBQUwsQ0FBV3lDLE1BQVgsSUFBcUIsRUFBeEIsRUFDQWxCLCtDQUFNLENBQUNDLFNBQVAsc0JBQStCLEtBQUt4QixLQUFMLENBQVd5QyxNQUExQyxHQUZZLENBR1o7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQU9RO0FBQUE7O0FBQ0wsYUFDQSxtRUFDQztBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQyx1RUFBNUI7QUFBb0csaUJBQVMsRUFBQyx5RUFBOUc7QUFBd0wsbUJBQVcsRUFBQztBQUFwTSxRQURELEVBRUM7QUFBUSxXQUFHLEVBQUM7QUFBWixRQUZELEVBR0MsTUFBQyw0REFBRCxRQUNBLE1BQUMsK0RBQUQ7QUFBUSxVQUFFLEVBQUMsTUFBWDtBQUFrQixlQUFPLEVBQUMsTUFBMUI7QUFBZ0MsYUFBSyxFQUFFO0FBQUNOLGVBQUssRUFBQztBQUFQO0FBQXZDLFNBQ0csTUFBQywrREFBRCxDQUFRLEtBQVIsZUFESCxFQUVJLE1BQUMsNERBQUQ7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBSyxFQUFFO0FBQUNBLGVBQUssRUFBQztBQUFQO0FBQWhDLFNBQ0csTUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBRSxnQkFBZSxLQUFLcEMsS0FBTCxDQUFXMEI7QUFBdkMsU0FBbUQ7QUFBRyxhQUFLLEVBQUU7QUFBQ3FCLGVBQUssRUFBRSxPQUFSO0FBQWlCWCxlQUFLLEVBQUM7QUFBdkI7QUFBVixnQkFBbkQsQ0FESCxFQUVHLE1BQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUUsa0JBQWdCLEtBQUtwQyxLQUFMLENBQVcwQixPQUEzQixHQUFtQyxHQUFuQyxHQUF1QyxLQUFLMUIsS0FBTCxDQUFXVTtBQUEvRCxTQUF5RTtBQUFHLGFBQUssRUFBRTtBQUFDcUMsZUFBSyxFQUFFLE9BQVI7QUFBaUJYLGVBQUssRUFBQztBQUF2QjtBQUFWLGtCQUF6RSxDQUZILEVBR0csTUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBRTtBQUFiLFNBQStCO0FBQUcsYUFBSyxFQUFFO0FBQUNXLGVBQUssRUFBRSxPQUFSO0FBQWlCWCxlQUFLLEVBQUM7QUFBdkI7QUFBVixrQkFBL0IsQ0FISCxDQUZKLENBREEsRUFVRDtBQUFLLGFBQUssRUFBRTtBQUFDQSxlQUFLLEVBQUU7QUFBUjtBQUFaLFNBRUEsTUFBQyw2REFBRDtBQUFNLGNBQU0sTUFBWjtBQUFhLGFBQUssRUFBRTtBQUFFQSxlQUFLLEVBQUUsS0FBVDtBQUFpQkgsZ0JBQU0sRUFBRSxNQUF6QjtBQUFrQ0ksbUJBQVMsRUFBRztBQUE5QztBQUFwQixTQUNJO0FBQUssYUFBSyxFQUFFO0FBQUNVLGVBQUssRUFBRztBQUFUO0FBQVosMERBREosRUFFSSxNQUFDLG9FQUFEO0FBQWEsWUFBSSxFQUFDLE1BQWxCO0FBQXlCLG1CQUFXLEVBQUMsUUFBckM7QUFBOEMsaUJBQVMsRUFBQyxTQUF4RDtBQUNJLGFBQUssRUFBRSxLQUFLOUMsS0FBTCxDQUFXeUMsTUFEdEI7QUFFSSxnQkFBUSxFQUFJLGtCQUFBYixLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ1ksa0JBQU0sRUFBQ2IsS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQXJCLFdBQWQsQ0FBSjtBQUFBO0FBRnJCLFFBRkosRUFLSSxNQUFDLCtEQUFEO0FBQVEsZUFBTyxFQUFDLGNBQWhCO0FBQStCLGVBQU8sRUFBRSxLQUFLYTtBQUE3QyxrQkFMSixDQUZBLEVBU0EsTUFBQyxxREFBRDtBQUFNLGFBQUssRUFBRTtBQUFFVCxlQUFLLEVBQUUsS0FBVDtBQUFpQkgsZ0JBQU0sRUFBRSxNQUF6QjtBQUFrQ0ksbUJBQVMsRUFBRztBQUE5QztBQUFiLFNBQ0ksTUFBQyxxREFBRCxDQUFNLElBQU4sUUFDSSxNQUFDLHFEQUFELENBQU0sS0FBTixtQkFESixFQUVJLE1BQUMscURBQUQsQ0FBTSxRQUFOO0FBQWUsaUJBQVMsRUFBQztBQUF6Qiw2QkFBNEQsS0FBS3JDLEtBQUwsQ0FBV1UsT0FBdkUsQ0FGSixFQUdJLE1BQUMscURBQUQsQ0FBTSxJQUFOLDZKQUhKLEVBTUksTUFBQyxxREFBRCxDQUFNLElBQU4sUUFBWSxLQUFLVixLQUFMLENBQVdnRCxTQUF2QixDQU5KLEVBT0tuRCxRQUFRLENBQUMsS0FBS0csS0FBTCxDQUFXRixLQUFaLENBUGIsRUFRSSxNQUFDLFlBQUQ7QUFBYyxhQUFLLEVBQUcsS0FBS0UsS0FBTCxDQUFXRixLQUFqQztBQUF3QyxlQUFPLEVBQUksS0FBS0UsS0FBTCxDQUFXVSxPQUE5RDtBQUF1RSxlQUFPLEVBQUUsS0FBS1YsS0FBTCxDQUFXMEI7QUFBM0YsUUFSSixFQVNJLE1BQUMsUUFBRDtBQUFVLGFBQUssRUFBRyxLQUFLMUIsS0FBTCxDQUFXRixLQUE3QjtBQUFvQyxXQUFHLEVBQUksS0FBS0UsS0FBTCxDQUFXaUQsT0FBdEQ7QUFBK0QsZUFBTyxFQUFJLEtBQUtqRCxLQUFMLENBQVdVLE9BQXJGO0FBQThGLGVBQU8sRUFBRSxLQUFLVixLQUFMLENBQVcwQjtBQUFsSCxRQVRKLENBREosQ0FUQSxDQVZDLEVBaUNEO0FBQUssYUFBSyxFQUFFO0FBQUVVLGVBQUssRUFBRTtBQUFUO0FBQVosUUFqQ0MsQ0FIRCxDQURBO0FBMENIOzs7O2dPQXhFNEJwQyxLOzs7Ozs7OytCQUNDQSxLQUFLLENBQUNrRCxLLEVBQTFCeEMsTyxnQkFBQUEsTyxFQUFTZ0IsTyxnQkFBQUEsTzs7dUJBQ1NqQixvRUFBSSxDQUFDQyxPQUFELEM7OztBQUF0QkMsMEI7O3VCQUNjQSxVQUFVLENBQUNVLE9BQVgsQ0FBbUI4QixZQUFuQixHQUFrQ0MsSUFBbEMsRTs7O0FBQWR0RCxxQjs7dUJBRXNCYSxVQUFVLENBQUNVLE9BQVgsQ0FBbUJnQyxxQkFBbkIsR0FBMkNELElBQTNDLEU7OztBQUF0QkUsNkI7QUFDQU4seUIsR0FBY2xELEtBQUssSUFBSSxDQUFWLEdBQWEsZUFBYixHQUNDQSxLQUFLLElBQUksQ0FBVixHQUFhLGtCQUFiLEdBQ0NBLEtBQUssSUFBSSxDQUFWLEdBQWEsY0FBYixHQUNDQSxLQUFLLElBQUksQ0FBVixHQUFhLGVBQWIsR0FDQ0EsS0FBSyxJQUFJLENBQVYsR0FBYSxnQkFBYixHQUE4QixlO0FBQzdDbUQsdUIsR0FBVSxFO0FBQ0xNLHFCLEdBQVEsQzs7O3NCQUFHQSxLQUFLLEdBQUdELGE7Ozs7Ozt1QkFDUDNDLFVBQVUsQ0FBQ1UsT0FBWCxDQUFtQm1DLGNBQW5CLENBQWtDRCxLQUFsQyxFQUF5Q0gsSUFBekMsRTs7O0FBQWJLLG9CO0FBQ0pSLHVCQUFPLENBQUNTLElBQVIsQ0FBYUQsSUFBYjs7O0FBRnVDRixxQkFBSyxFOzs7OztrREFJMUM7QUFBQzdDLHlCQUFPLEVBQVBBLE9BQUQ7QUFBU0MsNEJBQVUsRUFBVkEsVUFBVDtBQUFvQmIsdUJBQUssRUFBTEEsS0FBcEI7QUFBMEJ3RCwrQkFBYSxFQUFiQSxhQUExQjtBQUF3Q04sMkJBQVMsRUFBVEEsU0FBeEM7QUFBa0RDLHlCQUFPLEVBQVBBLE9BQWxEO0FBQTBEdkIseUJBQU8sRUFBUEE7QUFBMUQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQ1FRLCtDOztBQStGUE8sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXHZvdGUuanMuNWY1MzIwMDk4YmJlOWZjMTc3NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS9yZWdpc3RyeSc7XHJcblxyXG5jb25zdCBzaG93X2J0biA9IGZ1bmN0aW9uKCBzdGFnZSApe1xyXG4gICAgaWYgKHN0YWdlICE9IDAgKSByZXR1cm4gbnVsbDtcclxuICAgIC8vY29uc29sZS5sb2coc3RhZ2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PnRoaXMgdm90ZSBzdGlsbCBuZWVkcyBzZXR0aW5nIHBsZWFzZSB3YWl0PC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5jbGFzcyBSZWdpc3Rlcl9idG4gZXh0ZW5kcyBDb21wb25lbnR7XHJcbi8vY29uc3QgcmVnaXN0ZXJfYnRuID1mdW5jdGlvbiAoIHN0YWdlICl7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgIHJlZ2lzdHJ5X2FkZHI6XCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlciA9IHRoaXMucmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICBhc3luYyByZWdpc3Rlcigpe1xyXG4gICAgICAgICAgLy8weDQyMzA5ZjkyNDIzN0JhYzY2MkFmNjQ5NjVBMmVmQUY4YzA4ZkU0ZDJcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMyhcImh1bWFuXCIsIHsgb3V0cHV0TGVuZ3RoOiAyNTYgfSkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWIzLnV0aWxzLmZyb21Bc2NpaShoYXNoKSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmVnaXN0ZXIoJzB4JytoYXNoLHRoaXMuc3RhdGUucmVnaXN0cnlfYWRkcikuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS92b3RlLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0YWdlICk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdGFnZSAhPSAxICkgcmV0dXJuIG51bGw7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIHJlZ2lzdHJ5IG51bWJlclwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVnaXN0cnlfYWRkcn0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtyZWdpc3RyeV9hZGRyOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wic3R5bGU9e3ttYXJnaW4gOlwiMiVcIn19IG9uQ2xpY2s9e3RoaXMucmVnaXN0ZXJ9PnJlZ2lzdGVyPC9CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgfVxyXG59O1xyXG5jbGFzcyBWb3RlX2J0biBleHRlbmRzIENvbXBvbmVudHtcclxuLy9jb25zdCB2b3RlX2J0biA9ZnVuY3Rpb24gKHN0YWdlICl7XHJcbiAgICByZW5kZXIoKXtcclxuICAgIGlmICh0aGlzLnByb3BzLnN0YWdlICE9IDIgKSByZXR1cm4gbnVsbDtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Rm9ybSBzdHlsZT17e3dpZHRoOiczMyUnLCBtYXJnaW46ICdhdXRvJywgbWFyZ2luVG9wIDogXCIyJVwifX0gb25TdWJtaXQ9e3RoaXMucHJvcHMudm90ZX0+XHJcbiAgICAgICAgPEZvcm0uR3JvdXAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwic2VsZWN0XCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vcHMubWFwKG9wID0+IDxvcHRpb24+e29wfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICB7Lyo8b3B0aW9uPktvcmVhbiBGaXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkRvbmFsZCBUcnVtcDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5YaSBEQURBPC9vcHRpb24+Ki99XHJcbiAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cInN0eWxlPXt7bWFyZ2luIDpcIjIlXCJ9fSB0eXBlPVwic3VibWl0XCI+Vm90ZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBWb3Rlc3NzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHNlYXJjaDpcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgc3RhZ2U6JycsXHJcbiAgICAgICAgICBzZWFyY2g6JycsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6JycsXHJcbiAgICAgICAgICBodG1sX3Rlc3Q6bnVsbCxcclxuICAgICAgICAgIG1haWxib3hfYWRkcjonJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIC8vY29uc29sZS5sb2cocHJvcHMucXVlcnkuYWRkcmVzcyk7Ly/mk7flj5bpgJnlgIvntrLlnYDnmoR1cmzpgqNwYXJ055qEYWRkcmVzcyhmcm9tIHJvdXRlcz8/KSAgXHJcbiAgICAgIHRoaXMucmVmcmVzaF9zZWFyY2ggPSB0aGlzLnJlZnJlc2hfc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmdvX3ZvdGUgPSB0aGlzLmdvX3ZvdGUuYmluZCh0aGlzKTtcclxuICAgICAgLy90aGlzLnNlZV9zdGF0dXMgPSB0aGlzLnNlZV9zdGF0dXModGhpcyk7XHJcbiAgICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0e2FkZHJlc3MsIG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdGFnZSA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fc3RhZ2UoKS5jYWxsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX2xlbmd0aCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9uc19sZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhZ2Vfc3RyID0gIChzdGFnZSA9PSAwKT9cInN0YWdlIDogU2V0dXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDEpP1wic3RhZ2UgOiBSZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMik/XCJzdGFnZSA6IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDMpP1wic3RhZ2UgOiBUYWxseVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gNCk/XCJzdGFnZSA6IEZpbmlzaFwiOlwic3RhZ2UgOiBTZXR1cFwiO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbl9sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57YWRkcmVzcyxWb3RlX2V2ZW50LHN0YWdlLG9wdGlvbl9sZW5ndGgsc3RhZ2Vfc3RyLG9wdGlvbnMsbWJfYWRkcn07XHJcbiAgICB9XHJcbiAgICByZWZyZXNoX3NlYXJjaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoICE9IFwiXCIpXHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvdm90ZS8ke3RoaXMuc3RhdGUuc2VhcmNofWApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdvX3ZvdGUoKXtcclxuICAgICAgICAvL2NvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAvL2F3YWl0IHRoaXMucHJvcHMuVm90ZV9ldmVudC5tZXRob2RzLnJlZ2lzdGVyKCkuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9jcnlwdG8tanMvMy4xLjktMS9jcnlwdG8tanMuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kID5Wb3RlPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2hvbWUvXCIrIHRoaXMucHJvcHMubWJfYWRkciB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL3N0YXR1cy9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5hZGRyZXNzfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5TdGF0dXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XHJcblxyXG4gICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17eyB3aWR0aDogJzMzJScgLCBtYXJnaW46ICdhdXRvJyAsIG1hcmdpblRvcCA6IFwiMiVcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3IgOiBcImJsYWNrXCJ9fSA+IGluZXNydCB5b3VyIHZvdGUgY29udHJhY3QgYWRkcmVzcyBoZXJlICAtJmd0OyAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5yZWZyZXNoX3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzMzJScgLCBtYXJnaW46ICdhdXRvJyAsIG1hcmdpblRvcCA6IFwiMiVcIn19PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RWxlY3Rpb248L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj52b3RlciBhZGRyZXNzIDoge3RoaXMucHJvcHMuYWRkcmVzc308L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgdGhlIGxhdGVzdCAyMDIwIHByZXNpZGVudGlhbCBwb2xscyBhbmQgaGVhZC10by1oZWFkIG1hdGNoLXVwIGJldHdlZW4gSm9lIEJpZGVuIGFuZCBEb25hbGQgVHJ1bXAuIEZvciBtb3JlIGluZm9ybWF0aW9uLCB2aWV3IGNubi5jb20vZWxlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAge3Nob3dfYnRuKHRoaXMucHJvcHMuc3RhZ2UpfVxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyX2J0biBzdGFnZSA9e3RoaXMucHJvcHMuc3RhZ2V9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvUmVnaXN0ZXJfYnRuPlxyXG4gICAgICAgICAgICAgICAgPFZvdGVfYnRuIHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX0gb3BzID0ge3RoaXMucHJvcHMub3B0aW9uc30gYWRkcmVzcyA9IHt0aGlzLnByb3BzLmFkZHJlc3N9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9Wb3RlX2J0bj5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGVzc3M7Il0sInNvdXJjZVJvb3QiOiIifQ==