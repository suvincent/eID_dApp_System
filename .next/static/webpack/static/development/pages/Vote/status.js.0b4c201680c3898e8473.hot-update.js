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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.list.map(function (items) {
        return __jsx("tr", null, __jsx("td", null, items[0] + 1), __jsx("td", null, items[1]), __jsx("td", null, "Yes"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwibG9hZGluZyIsImxvYWRpbmcyIiwiZXJyb3JNZXNzYWdlIiwicmVmcmVzaF9zZWFyY2giLCJiaW5kIiwiUm91dGVyIiwicHVzaFJvdXRlIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIm1iX2FkZHIiLCJjb2xvciIsImFkZHJlc3MiLCJtYXJnaW4iLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJ2b3Rlcl9saXN0Iiwic3RhZ2UiLCJxdWVyeSIsInZvdGUiLCJWb3RlX2V2ZW50IiwibWV0aG9kcyIsInJldHVybl9zdGFnZSIsImNhbGwiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJvcHRpb25fbGVuZ3RoIiwicmV0dXJuX3Jlc3VsdCIsInJlc3VsdCIsInJldHVybl9tc2dzZW5kZXJfdm90ZXJfbGlzdCIsInN0YWdlX3N0ciIsImluZGV4IiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwiYXJyIiwidG9TdHJpbmciLCJwdXNoIiwiQ29tcG9uZW50IiwiUmV0YWxseSIsIlZvdGVfcmVzdWx0IiwicmVzdWx0cyIsIm1hcCIsIlZvdGVfcmVzdWx0X1VuaXQiLCJkZXRhaWxzIiwiZGV0YWlsIiwiVm90ZXJfbGlzdFFRIiwibGlzdCIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDRixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFZO0FBQ1g7QUFDQ0MsWUFBTSxFQUFHLEVB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LEdBQVMsQ0FBZCxDQURBLEVBRUEsa0JBQUtBLEtBQUssQ0FBQyxDQUFELENBQVYsQ0FGQSxFQUdBLHdCQUhBLENBRHNCO0FBQUEsT0FBekIsQ0FERCxDQURKO0FBV0g7Ozs7RUFkc0JWLCtDOztBQWlCWjVDLHFFQUFmO0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXHN0YXR1cy5qcy4wYjRjMjAxNjgwYzM4OThlODQ3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7Q2FyZCxUYWJsZX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0U2hhZG93U2Nyb2xsIGZyb20gJ3JlYWN0LXNoYWRvdy1zY3JvbGwnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5cclxuY2xhc3MgU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgLy8gTWJfYWRkciA6cHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgICAgIHNlYXJjaCA6IFwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6JydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF9zZWFyY2ggPSB0aGlzLnJlZnJlc2hfc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdHthZGRyZXNzLG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdGFnZSA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fc3RhZ2UoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX2xlbmd0aCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9uc19sZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9yZXN1bHQoKS5jYWxsKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhWb3RlX2V2ZW50KTtcclxuICAgICAgICBsZXQgdm90ZXJfbGlzdCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fbXNnc2VuZGVyX3ZvdGVyX2xpc3QoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codm90ZXJfbGlzdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh2b3Rlcl9saXN0KTtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFnZV9zdHIgPSAgKHN0YWdlID09IDApP1wic3RhZ2UgOiBTZXR1cFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMSk/XCJzdGFnZSA6IFJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAyKT9cInN0YWdlIDogVm90ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMyk/XCJzdGFnZSA6IFRhbGx5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSA0KT9cInN0YWdlIDogRmluaXNoXCI6XCJzdGFnZSA6IFNldHVwXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25fbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgYXJyWzBdID0gKGluZGV4KzEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGFyclsxXSA9IHRlbXA7XHJcbiAgICAgICAgICAgIGFyclsyXSA9IHJlc3VsdFtpbmRleF07XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJue2FkZHJlc3MsbWJfYWRkcixzdGFnZSxyZXN1bHQsb3B0aW9ucyxzdGFnZV9zdHIsdm90ZXJfbGlzdH07XHJcbiAgICB9XHJcbiAgICByZWZyZXNoX3NlYXJjaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoICE9IFwiXCIpXHJcbiAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3N0YXR1cy8ke3RoaXMuc3RhdGUuc2VhcmNofWApO1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcInN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgPE5hdmJhci5CcmFuZCA+Vm90ZTwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICB7Y29uc29sZS5sb2codGhpcy5wcm9wcy5vcHRpb25zKX1cclxuICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9ob21lL1wiKyB0aGlzLnByb3BzLm1iX2FkZHIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+SG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9zdGF0dXMvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMuYWRkcmVzc30gPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+Vm90ZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9pbmRleFwiIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkxvZ291dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPEZvcm0gaW5saW5lIHN0eWxlPXt7bWFyZ2luIDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3IgOiBcIndoaXRlXCJ9fSA+IGluZXNydCB5b3VyIHZvdGUgY29udHJhY3QgYWRkcmVzcyBoZXJlICAtJmd0OyAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiBcclxuICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gXHJcbiAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2g6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5yZWZyZXNoX3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0NiUnICwgbWFyZ2luOiAnMS41JScgLGhlaWdodDogJzMwJScgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5FbGlnaWJsZSBWb3RlcnM8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj52b3RlciBxdWFudGl0eSA6IDEwPC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3ttYXJnaW4gOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiPlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlIHN0eWxlPXt7J2hlaWdodCc6ICcyMDBweCcsXCJ3aWR0aFwiOlwiNTAlXCIsICdvdmVyZmxvd1knOidzY3JvbGwnLCAnZGlzcGxheSc6ICdibG9jayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Vm90aW5nIEFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXIgb3Igbm90PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZvdGVyX2xpc3RRUSBsaXN0ID17dGhpcy5wcm9wcy52b3Rlcl9saXN0fT48L1ZvdGVyX2xpc3RRUT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Vm90aW5nIElsbHVzdHJhdGlvbjwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlZvdGUgYWRkcmVzcyA6IHt0aGlzLnByb3BzLmFkZHJlc3N9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IHRoZSBsYXRlc3QgMjAyMCBwcmVzaWRlbnRpYWwgcG9sbHMgYW5kIGhlYWQtdG8taGVhZCBtYXRjaC11cCBiZXR3ZWVuIEpvZSBCaWRlbiBhbmQgRG9uYWxkIFRydW1wLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdmlldyBjbm4uY29tL2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0NiUnICwgbWFyZ2luOiAnMS41JSd9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlZvdGluZyByZXN1bHQ8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5UaGUgVm90ZSByZXN1bHQgaXMgc2hvd24gYmVsb3c8L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWb3RlX3Jlc3VsdCByZXN1bHRzID0ge3RoaXMucHJvcHMub3B0aW9uc30gc3RhZ2UgPXt0aGlzLnByb3BzLnN0YWdlfT48L1ZvdGVfcmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5SZXRhbGx5PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+WW91IGNhbiByZXRhbGx5IHRoZSB2b3RlIGZvciBhc3N1cmluZyB0aGUgcmVzdWx0PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFJldGFsbHkgc3RhZ2UgPSB7dGhpcy5wcm9wcy5zdGFnZX0+PC9SZXRhbGx5PlxyXG4gICAgICAgICAgICAgICAgey8qPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICBSZXRhbGx5IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+Ki99XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJldGFsbHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICAvL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YWdlIDw9MiApIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMz5IYXZlIG5vdCByZWFjaCB0aGUgc3RhZ2UgY2FuIFRhbGx5PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz5QbGVhc2Ugd2FpdCBmb3IgYSB3aGlsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBzdHlsZT17eyBtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgUmV0YWxseSBidXR0b25cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPnsnICd9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbmNsYXNzIFZvdGVfcmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgLy9jb25zdCB2b3RlX2J0biA9ZnVuY3Rpb24gKHN0YWdlICl7XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLnJlc3VsdHMpO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RhZ2UgPD0zICkgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgzPkhhdmUgbm90IHJlYWNoIHRoZSBzdGFnZSBjYW4gVGFsbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBsZWFzZSB3YWl0IGZvciBhIHdoaWxlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+RWxlY3RlZCBDYW5kaWRhdGUgOiBLb3JlYW4gRmlzaDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPkVsZWN0aW9uIFBoYXNlIDoge3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PcHRpb24ncyBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdG9sIHZvdGVzIHRvIHRoZSBvcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXN1bHRzLm1hcChyZXN1bHQgPT4gPHRyPjxWb3RlX3Jlc3VsdF9Vbml0IGRldGFpbHM9e3Jlc3VsdH0+PC9Wb3RlX3Jlc3VsdF9Vbml0PjwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICB9O1xyXG5jbGFzcyBWb3RlX3Jlc3VsdF9Vbml0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXRhaWxzLm1hcChkZXRhaWwgPT4gPHRkPntkZXRhaWx9PC90ZD4pfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVm90ZXJfbGlzdFFRIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmxpc3QpO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoaXRlbXM9PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpdGVtc1swXSsxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW1zWzFdfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+WWVzPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzO1xyXG5cclxuXHJcbi8qKuaaq+aZguaAp+Weg+WcvlxyXG4gKiA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjUwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPml0ZW1zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmxpbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnJlZ2lzdGVyIG9yIG5vdDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcnVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm90ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2FuZGlkYXRlIDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PENhcmQuTGluayBocmVmPVwiI1wiPnBvbGljeTwvQ2FyZC5MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==