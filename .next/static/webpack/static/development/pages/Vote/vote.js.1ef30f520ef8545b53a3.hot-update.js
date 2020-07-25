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
      var _register = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(registry_addr) {
        var accounts, hash;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                hash = CryptoJS.SHA256("human");
                console.log(hash); //await this.props.Vote_event.methods.register().send({from:accounts[0]});

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3ZvdGUuanMiXSwibmFtZXMiOlsic2hvd19idG4iLCJzdGFnZSIsIlJlZ2lzdGVyX2J0biIsInByb3BzIiwic3RhdGUiLCJyZWdpc3RyeV9hZGRyIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwicmVnaXN0ZXIiLCJDb21wb25lbnQiLCJWb3RlX2J0biIsIndpZHRoIiwibWFyZ2luVG9wIiwidm90ZSIsIm9wcyIsIm1hcCIsIm9wIiwiVm90ZXNzcyIsInNlYXJjaCIsImxvYWRpbmciLCJsb2FkaW5nMiIsInJlZnJlc2hfc2VhcmNoIiwiYmluZCIsImdvX3ZvdGUiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImhhc2giLCJDcnlwdG9KUyIsIlNIQTI1NiIsImNvbnNvbGUiLCJsb2ciLCJtYl9hZGRyIiwiY29sb3IiLCJhZGRyZXNzIiwic3RhZ2Vfc3RyIiwib3B0aW9ucyIsInF1ZXJ5IiwiVm90ZV9ldmVudCIsIm1ldGhvZHMiLCJyZXR1cm5fc3RhZ2UiLCJjYWxsIiwicmV0dXJuX29wdGlvbnNfbGVuZ3RoIiwib3B0aW9uX2xlbmd0aCIsImluZGV4IiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVDLEtBQVYsRUFBaUI7QUFDOUIsTUFBSUEsS0FBSyxJQUFJLENBQWIsRUFBaUIsT0FBTyxJQUFQLENBRGEsQ0FFOUI7O0FBQ0EsU0FDSSwrREFESjtBQUdILENBTkQ7O0lBT01DLFk7Ozs7O0FBQ047QUFDSSx3QkFB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QVEsQzs7O3NCQUFHQSxLQUFLLEdBQUdELGE7Ozs7Ozt1QkFDUEwsVUFBVSxDQUFDQyxPQUFYLENBQW1CTSxjQUFuQixDQUFrQ0QsS0FBbEMsRUFBeUNILElBQXpDLEU7OztBQUFiSyxvQjtBQUNKVix1QkFBTyxDQUFDVyxJQUFSLENBQWFELElBQWI7OztBQUZ1Q0YscUJBQUssRTs7Ozs7a0RBSTFDO0FBQUNWLHlCQUFPLEVBQVBBLE9BQUQ7QUFBU0ksNEJBQVUsRUFBVkEsVUFBVDtBQUFvQjNDLHVCQUFLLEVBQUxBLEtBQXBCO0FBQTBCZ0QsK0JBQWEsRUFBYkEsYUFBMUI7QUFBd0NSLDJCQUFTLEVBQVRBLFNBQXhDO0FBQWtEQyx5QkFBTyxFQUFQQSxPQUFsRDtBQUEwREoseUJBQU8sRUFBUEE7QUFBMUQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQ1ExQiwrQzs7QUFxR1BRLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFx2b3RlLmpzLjFlZjMwZjUyMGVmODU0NWI1M2EzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnR7TGlua31mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHtSb3V0ZXJ9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHZvdGUgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS92b3RlJztcclxuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvcmVnaXN0cnknO1xyXG5cclxuY29uc3Qgc2hvd19idG4gPSBmdW5jdGlvbiggc3RhZ2UgKXtcclxuICAgIGlmIChzdGFnZSAhPSAwICkgcmV0dXJuIG51bGw7XHJcbiAgICAvL2NvbnNvbGUubG9nKHN0YWdlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj50aGlzIHZvdGUgc3RpbGwgbmVlZHMgc2V0dGluZyBwbGVhc2Ugd2FpdDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuY2xhc3MgUmVnaXN0ZXJfYnRuIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4vL2NvbnN0IHJlZ2lzdGVyX2J0biA9ZnVuY3Rpb24gKCBzdGFnZSApe1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgICByZWdpc3RyeV9hZGRyOlwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5zdGFnZSApO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3RhZ2UgIT0gMSApIHJldHVybiBudWxsO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciByZWdpc3RyeSBudW1iZXJcIiBjbGFzc05hbWU9XCJtci1zbS0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlZ2lzdHJ5X2FkZHJ9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVnaXN0cnlfYWRkcjpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cInN0eWxlPXt7bWFyZ2luIDpcIjIlXCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVnaXN0cnlfYWRkcil9PnJlZ2lzdGVyPC9CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgfVxyXG59O1xyXG5jbGFzcyBWb3RlX2J0biBleHRlbmRzIENvbXBvbmVudHtcclxuLy9jb25zdCB2b3RlX2J0biA9ZnVuY3Rpb24gKHN0YWdlICl7XHJcbiAgICByZW5kZXIoKXtcclxuICAgIGlmICh0aGlzLnByb3BzLnN0YWdlICE9IDIgKSByZXR1cm4gbnVsbDtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Rm9ybSBzdHlsZT17e3dpZHRoOiczMyUnLCBtYXJnaW46ICdhdXRvJywgbWFyZ2luVG9wIDogXCIyJVwifX0gb25TdWJtaXQ9e3RoaXMucHJvcHMudm90ZX0+XHJcbiAgICAgICAgPEZvcm0uR3JvdXAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwic2VsZWN0XCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vcHMubWFwKG9wID0+IDxvcHRpb24+e29wfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICB7Lyo8b3B0aW9uPktvcmVhbiBGaXNoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkRvbmFsZCBUcnVtcDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5YaSBEQURBPC9vcHRpb24+Ki99XHJcbiAgICAgICAgICAgIDwvRm9ybS5Db250cm9sPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cInN0eWxlPXt7bWFyZ2luIDpcIjIlXCJ9fSB0eXBlPVwic3VibWl0XCI+Vm90ZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBWb3Rlc3NzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHNlYXJjaDpcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgc3RhZ2U6JycsXHJcbiAgICAgICAgICBzZWFyY2g6JycsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6JycsXHJcbiAgICAgICAgICBodG1sX3Rlc3Q6bnVsbCxcclxuICAgICAgICAgIG1haWxib3hfYWRkcjonJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIC8vY29uc29sZS5sb2cocHJvcHMucXVlcnkuYWRkcmVzcyk7Ly/mk7flj5bpgJnlgIvntrLlnYDnmoR1cmzpgqNwYXJ055qEYWRkcmVzcyhmcm9tIHJvdXRlcz8/KSAgXHJcbiAgICAgIHRoaXMucmVmcmVzaF9zZWFyY2ggPSB0aGlzLnJlZnJlc2hfc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXIgPSB0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuZ29fdm90ZSA9IHRoaXMuZ29fdm90ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAvL3RoaXMuc2VlX3N0YXR1cyA9IHRoaXMuc2VlX3N0YXR1cyh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3R7YWRkcmVzcywgbWJfYWRkcn0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHN0YWdlID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9zdGFnZSgpLmNhbGwoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvcHRpb25fbGVuZ3RoID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zX2xlbmd0aCgpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBzdGFnZV9zdHIgPSAgKHN0YWdlID09IDApP1wic3RhZ2UgOiBTZXR1cFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMSk/XCJzdGFnZSA6IFJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAyKT9cInN0YWdlIDogVm90ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMyk/XCJzdGFnZSA6IFRhbGx5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSA0KT9cInN0YWdlIDogRmluaXNoXCI6XCJzdGFnZSA6IFNldHVwXCI7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9uX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9ucyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2godGVtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybnthZGRyZXNzLFZvdGVfZXZlbnQsc3RhZ2Usb3B0aW9uX2xlbmd0aCxzdGFnZV9zdHIsb3B0aW9ucyxtYl9hZGRyfTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hfc2VhcmNoKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIilcclxuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS92b3RlLyR7dGhpcy5zdGF0ZS5zZWFyY2h9YCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVnaXN0ZXIocmVnaXN0cnlfYWRkcil7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KFwiaHVtYW5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coaGFzaCk7XHJcbiAgICAgICAgLy9hd2FpdCB0aGlzLnByb3BzLlZvdGVfZXZlbnQubWV0aG9kcy5yZWdpc3RlcigpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdvX3ZvdGUoKXtcclxuICAgICAgICAvL2NvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAvL2F3YWl0IHRoaXMucHJvcHMuVm90ZV9ldmVudC5tZXRob2RzLnJlZ2lzdGVyKCkuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9jcnlwdG8tanMvMy4xLjktMS9jcnlwdG8tanMuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kID5Wb3RlPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2hvbWUvXCIrIHRoaXMucHJvcHMubWJfYWRkciB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL3N0YXR1cy9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5hZGRyZXNzfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5TdGF0dXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XHJcblxyXG4gICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17eyB3aWR0aDogJzMzJScgLCBtYXJnaW46ICdhdXRvJyAsIG1hcmdpblRvcCA6IFwiMiVcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3IgOiBcImJsYWNrXCJ9fSA+IGluZXNydCB5b3VyIHZvdGUgY29udHJhY3QgYWRkcmVzcyBoZXJlICAtJmd0OyAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5yZWZyZXNoX3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzMzJScgLCBtYXJnaW46ICdhdXRvJyAsIG1hcmdpblRvcCA6IFwiMiVcIn19PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RWxlY3Rpb248L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj52b3RlciBhZGRyZXNzIDoge3RoaXMucHJvcHMuYWRkcmVzc308L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgdGhlIGxhdGVzdCAyMDIwIHByZXNpZGVudGlhbCBwb2xscyBhbmQgaGVhZC10by1oZWFkIG1hdGNoLXVwIGJldHdlZW4gSm9lIEJpZGVuIGFuZCBEb25hbGQgVHJ1bXAuIEZvciBtb3JlIGluZm9ybWF0aW9uLCB2aWV3IGNubi5jb20vZWxlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAge3Nob3dfYnRuKHRoaXMucHJvcHMuc3RhZ2UpfVxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyX2J0biBzdGFnZSA9e3RoaXMucHJvcHMuc3RhZ2V9IHJlZ2lzdGVyID0ge3RoaXMucmVnaXN0ZXJ9PjwvUmVnaXN0ZXJfYnRuPlxyXG4gICAgICAgICAgICAgICAgPFZvdGVfYnRuIHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX0gdm90ZSA9IHt0aGlzLmdvX3ZvdGV9IG9wcyA9IHt0aGlzLnByb3BzLm9wdGlvbnN9PjwvVm90ZV9idG4+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3Rlc3NzOyJdLCJzb3VyY2VSb290IjoiIn0=