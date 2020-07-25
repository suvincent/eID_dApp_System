webpackHotUpdate("static\\development\\pages\\Vote\\status.js",{

/***/ "./pages/Vote/status.js":
/*!******************************!*\
  !*** ./pages/Vote/status.js ***!
  \******************************/
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
/* harmony import */ var react_shadow_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-shadow-scroll */ "./node_modules/react-shadow-scroll/dist/index.js");
/* harmony import */ var react_shadow_scroll__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_shadow_scroll__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ethereum/Vote/vote */ "./ethereum/Vote/vote.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var Status = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Status, _Component);

  var _super = _createSuper(Status);

  function Status(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Status);

    _this = _super.call(this, props);
    _this.state = {
      // Mb_addr :props.query.address,
      search: "",
      loading: false,
      loading2: false,
      errorMessage: ''
    };
    _this.refresh_search = _this.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Status, [{
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/status/".concat(this.state.search)); //console.log(this.props.address);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossorigin: "anonymous"
      }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bg: "dark",
        variant: "dark",
        style: {
          width: "100%"
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Brand, null, "Vote"), console.log(this.props.options), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mr-auto"
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
      }, "Vote")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/index"
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Logout"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true,
        style: {
          margin: "auto"
        }
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
      }, "Search"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%',
          height: '30%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Eligible Voters"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "voter quantity : 10"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true,
        style: {
          margin: "auto"
        }
      }, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "text",
        placeholder: "Search",
        className: "mr-sm-2"
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "outline-info"
      }, "Search")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        responsive: true,
        style: {
          'height': '200px',
          "width": "50%",
          'overflowY': 'scroll',
          'display': 'block'
        }
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "Voting Address"), __jsx("th", null, "Register or not"))), __jsx("tbody", null, __jsx(Voter_listQQ, {
        list: this.props.voter_list
      }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Voting Illustration"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "Vote address : ", this.props.address), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Text, null, "View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Voting result"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "The Vote result is shown below"), __jsx(Vote_result, {
        results: this.props.options,
        stage: this.props.stage
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Retally"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "You can retally the vote for assuring the result"), __jsx(Retally, {
        stage: this.props.stage
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var _props$query, address, mb_addr, Vote_event, stage, option_length, result, voter_list, options, stage_str, index, temp, arr;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, mb_addr = _props$query.mb_addr;
                _context.next = 3;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(address);

              case 3:
                Vote_event = _context.sent;
                _context.next = 6;
                return Vote_event.methods.return_stage().call();

              case 6:
                stage = _context.sent;
                _context.next = 9;
                return Vote_event.methods.return_options_length().call();

              case 9:
                option_length = _context.sent;
                _context.next = 12;
                return Vote_event.methods.return_result().call();

              case 12:
                result = _context.sent;
                _context.next = 15;
                return Vote_event.methods.return_msgsender_voter_list().call();

              case 15:
                voter_list = _context.sent;
                console.log(voter_list); //console.log(voter_list);

                options = [];
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                index = 0;

              case 20:
                if (!(index < option_length)) {
                  _context.next = 32;
                  break;
                }

                _context.next = 23;
                return Vote_event.methods.return_options(index).call();

              case 23:
                temp = _context.sent;
                arr = [];
                arr[0] = (index + 1).toString();
                arr[1] = temp;
                arr[2] = result[index];
                options.push(arr);

              case 29:
                index++;
                _context.next = 20;
                break;

              case 32:
                return _context.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  stage: stage,
                  result: result,
                  options: options,
                  stage_str: stage_str,
                  voter_list: voter_list
                });

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Status;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Retally = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Retally, _Component2);

  var _super2 = _createSuper(Retally);

  function Retally() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Retally);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Retally, [{
    key: "render",
    //const vote_btn =function (stage ){
    value: function render() {
      if (this.props.stage <= 2) return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h3", null, "Have not reach the stage can Tally"), __jsx("h3", null, "Please wait for a while"));else return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        size: "lg",
        style: {
          margin: "auto"
        }
      }, "Retally button"), ' ');
    }
  }]);

  return Retally;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;

var Vote_result = /*#__PURE__*/function (_Component3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Vote_result, _Component3);

  var _super3 = _createSuper(Vote_result);

  function Vote_result() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Vote_result);

    return _super3.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Vote_result, [{
    key: "render",
    //const vote_btn =function (stage ){
    value: function render() {
      //console.log(this.props.results);
      if (this.props.stage <= 3) return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h3", null, "Have not reach the stage can Tally"), __jsx("h3", null, "Please wait for a while"));else return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "Elected Candidate : Korean Fish"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "Election Phase : ", this.props.stage_str), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        responsive: true
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "Option's Name"), __jsx("th", null, "Totol votes to the option"))), __jsx("tbody", null, this.props.results.map(function (result) {
        return __jsx("tr", null, __jsx(Vote_result_Unit, {
          details: result
        }));
      }))));
    }
  }]);

  return Vote_result;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;

var Vote_result_Unit = /*#__PURE__*/function (_Component4) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Vote_result_Unit, _Component4);

  var _super4 = _createSuper(Vote_result_Unit);

  function Vote_result_Unit() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Vote_result_Unit);

    return _super4.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Vote_result_Unit, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.details.map(function (detail) {
        return __jsx("td", null, detail);
      }));
    }
  }]);

  return Vote_result_Unit;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Voter_listQQ = /*#__PURE__*/function (_Component5) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Voter_listQQ, _Component5);

  var _super5 = _createSuper(Voter_listQQ);

  function Voter_listQQ() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Voter_listQQ);

    return _super5.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Voter_listQQ, [{
    key: "render",
    value: function render() {
      //console.log(this.props.list);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.list.map(function (index, item) {
        return __jsx("tr", null, __jsx("td", null, index + 1), __jsx("td", null, item), __jsx("td", null, "Yes"));
      }));
    }
  }]);

  return Voter_listQQ;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Status);
/**暫時性垃圾
 * <Table responsive style={{'height': '200px',"width":"50%", 'overflowY':'scroll', 'display': 'block'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>items</th>
                        <th>link</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>register or not</td>
                        <td>True</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Status</td>
                        <td>Vote</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Candidate 1</td>
                        <td><Card.Link href="#">policy</Card.Link></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwibG9hZGluZyIsImxvYWRpbmcyIiwiZXJyb3JNZXNzYWdlIiwicmVmcmVzaF9zZWFyY2giLCJiaW5kIiwiUm91dGVyIiwicHVzaFJvdXRlIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1iX2FkZHIiLCJjb2xvciIsImFkZHJlc3MiLCJtYXJnaW4iLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJ2b3Rlcl9saXN0Iiwic3RhZ2UiLCJxdWVyeSIsInZvdGUiLCJWb3RlX2V2ZW50IiwibWV0aG9kcyIsInJldHVybl9zdGFnZSIsImNhbGwiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJvcHRpb25fbGVuZ3RoIiwicmV0dXJuX3Jlc3VsdCIsInJlc3VsdCIsInJldHVybl9tc2dzZW5kZXJfdm90ZXJfbGlzdCIsInN0YWdlX3N0ciIsImluZGV4IiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwiYXJyIiwidG9TdHJpbmciLCJwdXNoIiwiQ29tcG9uZW50IiwiUmV0YWxseSIsIlZvdGVfcmVzdWx0IiwicmVzdWx0cyIsIm1hcCIsIlZvdGVfcmVzdWx0X1VuaXQiLCJkZXRhaWxzIiwiZGV0YWlsIiwiVm90ZXJfbGlzdFFRIiwibGlzdCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxNOzs7OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVk7QUFDWDtBQUNDQyxZQUFNLEVBQUcsRUFG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QUMsQ0FBWCxDQURBLEVBRUEsa0JBQUtnQixJQUFMLENBRkEsRUFHQSx3QkFIQSxDQURpQjtBQUFBLE9BQXBCLENBREQsQ0FESjtBQVdIOzs7O0VBZHNCViwrQzs7QUFpQlo1QyxxRUFBZjtBQUdBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxzdGF0dXMuanMuNmZhNjhlZjUzYjM5NGVjZTRlMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmQsVGFibGV9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBSZWFjdFNoYWRvd1Njcm9sbCBmcm9tICdyZWFjdC1zaGFkb3ctc2Nyb2xsJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHtSb3V0ZXJ9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHZvdGUgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS92b3RlJztcclxuXHJcbmNsYXNzIFN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgIC8vIE1iX2FkZHIgOnByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgICAgICBzZWFyY2ggOiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3R7YWRkcmVzcyxtYl9hZGRyfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUoYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3N0YWdlKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbl9sZW5ndGggPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnNfbGVuZ3RoKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fcmVzdWx0KCkuY2FsbCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coVm90ZV9ldmVudCk7XHJcbiAgICAgICAgbGV0IHZvdGVyX2xpc3QgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX21zZ3NlbmRlcl92b3Rlcl9saXN0KCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZvdGVyX2xpc3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2codm90ZXJfbGlzdCk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhZ2Vfc3RyID0gIChzdGFnZSA9PSAwKT9cInN0YWdlIDogU2V0dXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDEpP1wic3RhZ2UgOiBSZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMik/XCJzdGFnZSA6IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDMpP1wic3RhZ2UgOiBUYWxseVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gNCk/XCJzdGFnZSA6IEZpbmlzaFwiOlwic3RhZ2UgOiBTZXR1cFwiO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9uX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9ucyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGFyclswXSA9IChpbmRleCsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhcnJbMV0gPSB0ZW1wO1xyXG4gICAgICAgICAgICBhcnJbMl0gPSByZXN1bHRbaW5kZXhdO1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybnthZGRyZXNzLG1iX2FkZHIsc3RhZ2UscmVzdWx0LG9wdGlvbnMsc3RhZ2Vfc3RyLHZvdGVyX2xpc3R9O1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKVxyXG4gICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9zdGF0dXMvJHt0aGlzLnN0YXRlLnNlYXJjaH1gKTtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgIDxOYXZiYXIuQnJhbmQgPlZvdGU8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMucHJvcHMub3B0aW9ucyl9XHJcbiAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaG9tZS9cIisgdGhpcy5wcm9wcy5tYl9hZGRyIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvc3RhdHVzL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3N9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlZvdGU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17e21hcmdpbiA6XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJ3aGl0ZVwifX0gPiBpbmVzcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgXHJcbiAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnICxoZWlnaHQ6ICczMCUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RWxpZ2libGUgVm90ZXJzPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+dm90ZXIgcXVhbnRpdHkgOiAxMDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gaW5saW5lIHN0eWxlPXt7bWFyZ2luIDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIj5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjUwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZvdGluZyBBZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ2lzdGVyIG9yIG5vdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWb3Rlcl9saXN0UVEgbGlzdCA9e3RoaXMucHJvcHMudm90ZXJfbGlzdH0+PC9Wb3Rlcl9saXN0UVE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0NiUnICwgbWFyZ2luOiAnMS41JSd9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlZvdGluZyBJbGx1c3RyYXRpb248L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5Wb3RlIGFkZHJlc3MgOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyB0aGUgbGF0ZXN0IDIwMjAgcHJlc2lkZW50aWFsIHBvbGxzIGFuZCBoZWFkLXRvLWhlYWQgbWF0Y2gtdXAgYmV0d2VlbiBKb2UgQmlkZW4gYW5kIERvbmFsZCBUcnVtcC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHZpZXcgY25uLmNvbS9lbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Wb3RpbmcgcmVzdWx0PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+VGhlIFZvdGUgcmVzdWx0IGlzIHNob3duIGJlbG93PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vm90ZV9yZXN1bHQgcmVzdWx0cyA9IHt0aGlzLnByb3BzLm9wdGlvbnN9IHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX0+PC9Wb3RlX3Jlc3VsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+UmV0YWxseTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPllvdSBjYW4gcmV0YWxseSB0aGUgdm90ZSBmb3IgYXNzdXJpbmcgdGhlIHJlc3VsdDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxSZXRhbGx5IHN0YWdlID0ge3RoaXMucHJvcHMuc3RhZ2V9PjwvUmV0YWxseT5cclxuICAgICAgICAgICAgICAgIHsvKjxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBzdHlsZT17eyBtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgUmV0YWxseSBidXR0b25cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiovfVxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXRhbGx5IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgLy9jb25zdCB2b3RlX2J0biA9ZnVuY3Rpb24gKHN0YWdlICl7XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGFnZSA8PTIgKSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDM+SGF2ZSBub3QgcmVhY2ggdGhlIHN0YWdlIGNhbiBUYWxseTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDM+UGxlYXNlIHdhaXQgZm9yIGEgd2hpbGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgc3R5bGU9e3sgbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIFJldGFsbHkgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG5jbGFzcyBWb3RlX3Jlc3VsdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIC8vY29uc3Qgdm90ZV9idG4gPWZ1bmN0aW9uIChzdGFnZSApe1xyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5yZXN1bHRzKTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YWdlIDw9MyApIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMz5IYXZlIG5vdCByZWFjaCB0aGUgc3RhZ2UgY2FuIFRhbGx5PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz5QbGVhc2Ugd2FpdCBmb3IgYSB3aGlsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPkVsZWN0ZWQgQ2FuZGlkYXRlIDogS29yZWFuIEZpc2g8L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5FbGVjdGlvbiBQaGFzZSA6IHt0aGlzLnByb3BzLnN0YWdlX3N0cn08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3B0aW9uJ3MgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RvbCB2b3RlcyB0byB0aGUgb3B0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmVzdWx0cy5tYXAocmVzdWx0ID0+IDx0cj48Vm90ZV9yZXN1bHRfVW5pdCBkZXRhaWxzPXtyZXN1bHR9PjwvVm90ZV9yZXN1bHRfVW5pdD48L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgfTtcclxuY2xhc3MgVm90ZV9yZXN1bHRfVW5pdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZGV0YWlscy5tYXAoZGV0YWlsID0+IDx0ZD57ZGV0YWlsfTwvdGQ+KX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZvdGVyX2xpc3RRUSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5saXN0KTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpc3QubWFwKChpbmRleCwgaXRlbSk9PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpbmRleCsxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5ZZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7XHJcblxyXG5cclxuLyoq5pqr5pmC5oCn5Z6D5Zy+XHJcbiAqIDxUYWJsZSByZXNwb25zaXZlIHN0eWxlPXt7J2hlaWdodCc6ICcyMDBweCcsXCJ3aWR0aFwiOlwiNTAlXCIsICdvdmVyZmxvd1knOidzY3JvbGwnLCAnZGlzcGxheSc6ICdibG9jayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+aXRlbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+bGluazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+cmVnaXN0ZXIgb3Igbm90PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRydWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlN0YXR1czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb3RlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DYW5kaWRhdGUgMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48Q2FyZC5MaW5rIGhyZWY9XCIjXCI+cG9saWN5PC9DYXJkLkxpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gKi8iXSwic291cmNlUm9vdCI6IiJ9