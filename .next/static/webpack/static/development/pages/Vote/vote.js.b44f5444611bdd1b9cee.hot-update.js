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
        onClick: this.props.register
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
      var _register = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
                return Vote_event.methods.register(_ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].utils.fromAscii(hash)).send({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3ZvdGUuanMiXSwibmFtZXMiOlsic2hvd19idG4iLCJzdGFnZSIsIlJlZ2lzdGVyX2J0biIsInByb3BzIiwic3RhdGUiLCJyZWdpc3RyeV9hZGRyIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwicmVnaXN0ZXIiLCJDb21wb25lbnQiLCJWb3RlX2J0biIsIndpZHRoIiwibWFyZ2luVG9wIiwidm90ZSIsIm9wcyIsIm1hcCIsIm9wIiwiVm90ZXNzcyIsInNlYXJjaCIsImxvYWRpbmciLCJsb2FkaW5nMiIsInJlZnJlc2hfc2VhcmNoIiwiYmluZCIsImdvX3ZvdGUiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFkZHJlc3MiLCJWb3RlX2V2ZW50IiwiaGFzaCIsIkNyeXB0b0pTIiwiU0hBMyIsIm91dHB1dExlbmd0aCIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJ1dGlscyIsImZyb21Bc2NpaSIsInNlbmQiLCJmcm9tIiwibWJfYWRkciIsImFsZXJ0IiwibWVzc2FnZSIsImNvbG9yIiwic3RhZ2Vfc3RyIiwib3B0aW9ucyIsInF1ZXJ5IiwicmV0dXJuX3N0YWdlIiwiY2FsbCIsInJldHVybl9vcHRpb25zX2xlbmd0aCIsIm9wdGlvbl9sZW5ndGgiLCJpbmRleCIsInJldHVybl9vcHRpb25zIiwidGVtcCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVQyxLQUFWLEVBQWlCO0FBQzlCLE1BQUlBLEtBQUssSUFBSSxDQUFiLEVBQWlC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QUFDa0QsSyxFQUExQnBCLE8sZ0JBQUFBLE8sRUFBU2MsTyxnQkFBQUEsTzs7dUJBQ1MvQixvRUFBSSxDQUFDaUIsT0FBRCxDOzs7QUFBdEJDLDBCOzt1QkFDY0EsVUFBVSxDQUFDUSxPQUFYLENBQW1CWSxZQUFuQixHQUFrQ0MsSUFBbEMsRTs7O0FBQWR0RCxxQjs7dUJBRXNCaUMsVUFBVSxDQUFDUSxPQUFYLENBQW1CYyxxQkFBbkIsR0FBMkNELElBQTNDLEU7OztBQUF0QkUsNkI7QUFDQU4seUIsR0FBY2xELEtBQUssSUFBSSxDQUFWLEdBQWEsZUFBYixHQUNDQSxLQUFLLElBQUksQ0FBVixHQUFhLGtCQUFiLEdBQ0NBLEtBQUssSUFBSSxDQUFWLEdBQWEsY0FBYixHQUNDQSxLQUFLLElBQUksQ0FBVixHQUFhLGVBQWIsR0FDQ0EsS0FBSyxJQUFJLENBQVYsR0FBYSxnQkFBYixHQUE4QixlO0FBQzdDbUQsdUIsR0FBVSxFO0FBQ0xNLHFCLEdBQVEsQzs7O3NCQUFHQSxLQUFLLEdBQUdELGE7Ozs7Ozt1QkFDUHZCLFVBQVUsQ0FBQ1EsT0FBWCxDQUFtQmlCLGNBQW5CLENBQWtDRCxLQUFsQyxFQUF5Q0gsSUFBekMsRTs7O0FBQWJLLG9CO0FBQ0pSLHVCQUFPLENBQUNTLElBQVIsQ0FBYUQsSUFBYjs7O0FBRnVDRixxQkFBSyxFOzs7OztrREFJMUM7QUFBQ3pCLHlCQUFPLEVBQVBBLE9BQUQ7QUFBU0MsNEJBQVUsRUFBVkEsVUFBVDtBQUFvQmpDLHVCQUFLLEVBQUxBLEtBQXBCO0FBQTBCd0QsK0JBQWEsRUFBYkEsYUFBMUI7QUFBd0NOLDJCQUFTLEVBQVRBLFNBQXhDO0FBQWtEQyx5QkFBTyxFQUFQQSxPQUFsRDtBQUEwREwseUJBQU8sRUFBUEE7QUFBMUQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQ1FuQywrQzs7QUEyR1BRLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFx2b3RlLmpzLmI0NGY1NDQ0NjExYmRkMWI5Y2VlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnR7TGlua31mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHtSb3V0ZXJ9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHZvdGUgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS92b3RlJztcclxuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvcmVnaXN0cnknO1xyXG5cclxuY29uc3Qgc2hvd19idG4gPSBmdW5jdGlvbiggc3RhZ2UgKXtcclxuICAgIGlmIChzdGFnZSAhPSAwICkgcmV0dXJuIG51bGw7XHJcbiAgICAvL2NvbnNvbGUubG9nKHN0YWdlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj50aGlzIHZvdGUgc3RpbGwgbmVlZHMgc2V0dGluZyBwbGVhc2Ugd2FpdDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuY2xhc3MgUmVnaXN0ZXJfYnRuIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4vL2NvbnN0IHJlZ2lzdGVyX2J0biA9ZnVuY3Rpb24gKCBzdGFnZSApe1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgICByZWdpc3RyeV9hZGRyOlwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5zdGFnZSApO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3RhZ2UgIT0gMSApIHJldHVybiBudWxsO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciByZWdpc3RyeSBudW1iZXJcIiBjbGFzc05hbWU9XCJtci1zbS0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlZ2lzdHJ5X2FkZHJ9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVnaXN0cnlfYWRkcjpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cInN0eWxlPXt7bWFyZ2luIDpcIjIlXCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLnJlZ2lzdGVyfT5yZWdpc3RlcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIH1cclxufTtcclxuY2xhc3MgVm90ZV9idG4gZXh0ZW5kcyBDb21wb25lbnR7XHJcbi8vY29uc3Qgdm90ZV9idG4gPWZ1bmN0aW9uIChzdGFnZSApe1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdGFnZSAhPSAyICkgcmV0dXJuIG51bGw7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3t3aWR0aDonMzMlJywgbWFyZ2luOiAnYXV0bycsIG1hcmdpblRvcCA6IFwiMiVcIn19IG9uU3VibWl0PXt0aGlzLnByb3BzLnZvdGV9PlxyXG4gICAgICAgIDxGb3JtLkdyb3VwID5cclxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInNlbGVjdFwiIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMub3BzLm1hcChvcCA9PiA8b3B0aW9uPntvcH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgey8qPG9wdGlvbj5Lb3JlYW4gRmlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Eb25hbGQgVHJ1bXA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+WGkgREFEQTwvb3B0aW9uPiovfVxyXG4gICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCJzdHlsZT17e21hcmdpbiA6XCIyJVwifX0gdHlwZT1cInN1Ym1pdFwiPlZvdGU8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY2xhc3MgVm90ZXNzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICBzZWFyY2g6XCJcIixcclxuICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgIGxvYWRpbmcyOiBmYWxzZSxcclxuICAgICAgICAgIHN0YWdlOicnLFxyXG4gICAgICAgICAgc2VhcmNoOicnLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOicnLFxyXG4gICAgICAgICAgaHRtbF90ZXN0Om51bGwsXHJcbiAgICAgICAgICBtYWlsYm94X2FkZHI6JydcclxuICAgICAgICB9O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHByb3BzLnF1ZXJ5LmFkZHJlc3MpOy8v5pO35Y+W6YCZ5YCL57ay5Z2A55qEdXJs6YKjcGFydOeahGFkZHJlc3MoZnJvbSByb3V0ZXM/PykgIFxyXG4gICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyID0gdGhpcy5yZWdpc3Rlci5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLmdvX3ZvdGUgPSB0aGlzLmdvX3ZvdGUuYmluZCh0aGlzKTtcclxuICAgICAgLy90aGlzLnNlZV9zdGF0dXMgPSB0aGlzLnNlZV9zdGF0dXModGhpcyk7XHJcbiAgICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0e2FkZHJlc3MsIG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdGFnZSA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fc3RhZ2UoKS5jYWxsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX2xlbmd0aCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9uc19sZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhZ2Vfc3RyID0gIChzdGFnZSA9PSAwKT9cInN0YWdlIDogU2V0dXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDEpP1wic3RhZ2UgOiBSZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMik/XCJzdGFnZSA6IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDMpP1wic3RhZ2UgOiBUYWxseVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gNCk/XCJzdGFnZSA6IEZpbmlzaFwiOlwic3RhZ2UgOiBTZXR1cFwiO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbl9sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57YWRkcmVzcyxWb3RlX2V2ZW50LHN0YWdlLG9wdGlvbl9sZW5ndGgsc3RhZ2Vfc3RyLG9wdGlvbnMsbWJfYWRkcn07XHJcbiAgICB9XHJcbiAgICByZWZyZXNoX3NlYXJjaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoICE9IFwiXCIpXHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvdm90ZS8ke3RoaXMuc3RhdGUuc2VhcmNofWApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHJlZ2lzdGVyKCl7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMoXCJodW1hblwiLCB7IG91dHB1dExlbmd0aDogMjU2IH0pLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaGFzaCk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmVnaXN0ZXIod2ViMy51dGlscy5mcm9tQXNjaWkoaGFzaCkpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvdm90ZS8ke3RoaXMucHJvcHMubWJfYWRkcn0vJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBnb192b3RlKCl7XHJcbiAgICAgICAgLy9jb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgLy9hd2FpdCB0aGlzLnByb3BzLlZvdGVfZXZlbnQubWV0aG9kcy5yZWdpc3RlcigpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvY3J5cHRvLWpzLzMuMS45LTEvY3J5cHRvLWpzLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcInN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPE5hdmJhci5CcmFuZCA+Vm90ZTwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9ob21lL1wiKyB0aGlzLnByb3BzLm1iX2FkZHIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+SG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9zdGF0dXMvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMuYWRkcmVzc30gPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+U3RhdHVzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2luZGV4XCIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+TG9nb3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlxyXG5cclxuICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3sgd2lkdGg6ICczMyUnICwgbWFyZ2luOiAnYXV0bycgLCBtYXJnaW5Ub3AgOiBcIjIlXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJibGFja1wifX0gPiBpbmVzcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2g6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICczMyUnICwgbWFyZ2luOiAnYXV0bycgLCBtYXJnaW5Ub3AgOiBcIjIlXCJ9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkVsZWN0aW9uPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+dm90ZXIgYWRkcmVzcyA6IHt0aGlzLnByb3BzLmFkZHJlc3N9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IHRoZSBsYXRlc3QgMjAyMCBwcmVzaWRlbnRpYWwgcG9sbHMgYW5kIGhlYWQtdG8taGVhZCBtYXRjaC11cCBiZXR3ZWVuIEpvZSBCaWRlbiBhbmQgRG9uYWxkIFRydW1wLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdmlldyBjbm4uY29tL2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0Pnt0aGlzLnByb3BzLnN0YWdlX3N0cn08L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgIHtzaG93X2J0bih0aGlzLnByb3BzLnN0YWdlKX1cclxuICAgICAgICAgICAgICAgIDxSZWdpc3Rlcl9idG4gc3RhZ2UgPXt0aGlzLnByb3BzLnN0YWdlfSByZWdpc3RlciA9IHt0aGlzLnJlZ2lzdGVyfT48L1JlZ2lzdGVyX2J0bj5cclxuICAgICAgICAgICAgICAgIDxWb3RlX2J0biBzdGFnZSA9e3RoaXMucHJvcHMuc3RhZ2V9IHZvdGUgPSB7dGhpcy5nb192b3RlfSBvcHMgPSB7dGhpcy5wcm9wcy5vcHRpb25zfT48L1ZvdGVfYnRuPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm90ZXNzczsiXSwic291cmNlUm9vdCI6IiJ9