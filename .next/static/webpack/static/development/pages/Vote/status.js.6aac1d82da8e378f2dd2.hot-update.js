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
      register: "",
      register_answer: "",
      loading: false,
      loading2: false,
      errorMessage: ''
    };
    _this.refresh_search = _this.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.search_register = _this.search_register.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Status, [{
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/status/".concat(this.state.search)); //console.log(this.props.address);
    }
  }, {
    key: "search_register",
    value: function search_register() {
      for (var index = 0; index < this.props.voter_list.length; index++) {
        if (this.state.register == this.props.voter_list[index]) {
          this.setState({
            register_answer: "Already Registered !"
          });
          this.setState({
            register: ""
          });
          return;
        }
      } //console.log(this.state.register_answer);


      this.setState({
        register_answer: "Voter not found !"
      });
      this.setState({
        register: ""
      }); //this.setState({register_answer:""});
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
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Brand, null, "Vote"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      }, " insert your vote contract address here  ->   "), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      }, "voter quantity : ", this.props.voter_list.length), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true,
        style: {
          margin: "auto"
        }
      }, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "text",
        placeholder: "Search",
        className: "mr-sm-2",
        value: this.state.register,
        onChange: function onChange(event) {
          return _this2.setState({
            register: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "outline-info",
        onClick: this.search_register
      }, "Search"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, this.state.register_answer)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        responsive: true,
        style: {
          'height': '200px',
          "width": "100%",
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
      }, "Vote address : ", this.props.address), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, this.props.stage_str), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Text, null, "View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Voting result"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "The Vote result is shown below"), __jsx(Vote_result, {
        results: this.props.options,
        stage: this.props.stage,
        stage_str: this.props.stage_str,
        address: this.props.address,
        mb_addr: this.props.mb_addr
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Retally"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "You can retally the vote for assuring the result"), __jsx(Retally, {
        stage: this.props.stage,
        address: this.props.address,
        mb_addr: this.props.mb_addr
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
                //console.log(voter_list);
                //console.log(voter_list);
                options = [];
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                index = 0;

              case 19:
                if (!(index < option_length)) {
                  _context.next = 31;
                  break;
                }

                _context.next = 22;
                return Vote_event.methods.return_options(index).call();

              case 22:
                temp = _context.sent;
                arr = [];
                arr[0] = (index + 1).toString();
                arr[1] = temp;
                arr[2] = result[index];
                options.push(arr);

              case 28:
                index++;
                _context.next = 19;
                break;

              case 31:
                return _context.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  stage: stage,
                  result: result,
                  options: options,
                  stage_str: stage_str,
                  voter_list: voter_list
                });

              case 32:
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

  function Retally(props) {
    var _this3;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Retally);

    _this3 = _super2.call(this, props);
    _this3.state = {};
    _this3.go_tally = _this3.go_tally.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3));
    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Retally, [{
    key: "go_tally",
    value: function () {
      var _go_tally = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var accounts, Vote_event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                _context2.next = 5;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(this.props.address);

              case 5:
                Vote_event = _context2.sent;
                _context2.prev = 6;
                _context2.next = 9;
                return Vote_event.methods.compute().send({
                  from: accounts[0]
                });

              case 9:
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/status/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](6);
                alert(_context2.t0.message);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 12]]);
      }));

      function go_tally() {
        return _go_tally.apply(this, arguments);
      }

      return go_tally;
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.props.stage <= 2) return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h3", null, "Have not reach the stage can Tally"), __jsx("h3", null, "Please wait for a while"));else return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        size: "lg",
        style: {
          margin: "auto"
        },
        onClick: this.go_tally
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
      if (this.props.stage < 3) return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h3", null, "Have not reach the stage can Tally"), __jsx("h3", null, "Please wait for a while"));else return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "Elected Candidate : Korean Fish"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, this.props.stage_str), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.list.map(function (item, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVnaXN0ZXIiLCJyZWdpc3Rlcl9hbnN3ZXIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImJpbmQiLCJzZWFyY2hfcmVnaXN0ZXIiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJpbmRleCIsInZvdGVyX2xpc3QiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsIndpZHRoIiwibWJfYWRkciIsImNvbG9yIiwiYWRkcmVzcyIsIm1hcmdpbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJzdGFnZV9zdHIiLCJvcHRpb25zIiwic3RhZ2UiLCJxdWVyeSIsInZvdGUiLCJWb3RlX2V2ZW50IiwibWV0aG9kcyIsInJldHVybl9zdGFnZSIsImNhbGwiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJvcHRpb25fbGVuZ3RoIiwicmV0dXJuX3Jlc3VsdCIsInJlc3VsdCIsInJldHVybl9tc2dzZW5kZXJfdm90ZXJfbGlzdCIsInJldHVybl9vcHRpb25zIiwidGVtcCIsImFyciIsInRvU3RyaW5nIiwicHVzaCIsIkNvbXBvbmVudCIsIlJldGFsbHkiLCJnb190YWxseSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29tcHV0ZSIsInNlbmQiLCJmcm9tIiwiYWxlcnQiLCJtZXNzYWdlIiwiVm90ZV9yZXN1bHQiLCJyZXN1bHRzIiwibWFwIiwiVm90ZV9yZXN1bHRfVW5pdCIsImRldGFpbHMiLCJkZXRhaWwiLCJWb3Rlcl9saXN0UVEiLCJsaXN0IiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBV0g7Ozs7RUFkc0JwQiwrQzs7QUFpQlo5QyxxRUFBZjtBQUdBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxzdGF0dXMuanMuNmFhYzFkODJkYThlMzc4ZjJkZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmQsVGFibGV9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBSZWFjdFNoYWRvd1Njcm9sbCBmcm9tICdyZWFjdC1zaGFkb3ctc2Nyb2xsJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHtSb3V0ZXJ9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHZvdGUgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS92b3RlJztcclxuXHJcbmNsYXNzIFN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgIC8vIE1iX2FkZHIgOnByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgICAgICBzZWFyY2ggOiBcIlwiLFxyXG4gICAgICAgICAgcmVnaXN0ZXIgOiBcIlwiLFxyXG4gICAgICAgICAgcmVnaXN0ZXJfYW5zd2VyIDogXCJcIixcclxuICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgIGxvYWRpbmcyOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yTWVzc2FnZTonJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3NlYXJjaCA9IHRoaXMucmVmcmVzaF9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlYXJjaF9yZWdpc3RlciA9IHRoaXMuc2VhcmNoX3JlZ2lzdGVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdHthZGRyZXNzLG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdGFnZSA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fc3RhZ2UoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX2xlbmd0aCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9uc19sZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9yZXN1bHQoKS5jYWxsKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhWb3RlX2V2ZW50KTtcclxuICAgICAgICBsZXQgdm90ZXJfbGlzdCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fbXNnc2VuZGVyX3ZvdGVyX2xpc3QoKS5jYWxsKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh2b3Rlcl9saXN0KTtcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHZvdGVyX2xpc3QpO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YWdlX3N0ciA9ICAoc3RhZ2UgPT0gMCk/XCJzdGFnZSA6IFNldHVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAxKT9cInN0YWdlIDogUmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDIpP1wic3RhZ2UgOiBWb3RlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAzKT9cInN0YWdlIDogVGFsbHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDQpP1wic3RhZ2UgOiBGaW5pc2hcIjpcInN0YWdlIDogU2V0dXBcIjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbl9sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICBhcnJbMF0gPSAoaW5kZXgrMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgYXJyWzFdID0gdGVtcDtcclxuICAgICAgICAgICAgYXJyWzJdID0gcmVzdWx0W2luZGV4XTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm57YWRkcmVzcyxtYl9hZGRyLHN0YWdlLHJlc3VsdCxvcHRpb25zLHN0YWdlX3N0cix2b3Rlcl9saXN0fTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hfc2VhcmNoKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIilcclxuICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvc3RhdHVzLyR7dGhpcy5zdGF0ZS5zZWFyY2h9YCk7XHJcbiAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICB9XHJcbiAgICBzZWFyY2hfcmVnaXN0ZXIoKXtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5wcm9wcy52b3Rlcl9saXN0Lmxlbmd0aDtpbmRleCsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5yZWdpc3RlciA9PSB0aGlzLnByb3BzLnZvdGVyX2xpc3RbaW5kZXhdKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlcjpcIkFscmVhZHkgUmVnaXN0ZXJlZCAhXCJ9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyOlwiXCJ9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUucmVnaXN0ZXJfYW5zd2VyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXIgOiBcIlZvdGVyIG5vdCBmb3VuZCAhXCJ9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlcjpcIlwifSk7XHJcbiAgICAgICAgLy90aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXI6XCJcIn0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcInN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgPE5hdmJhci5CcmFuZCA+Vm90ZTwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICB7Lypjb25zb2xlLmxvZyh0aGlzLnByb3BzLm9wdGlvbnMpKi99XHJcbiAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaG9tZS9cIisgdGhpcy5wcm9wcy5tYl9hZGRyIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvc3RhdHVzL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3N9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlZvdGU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17e21hcmdpbiA6XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJ3aGl0ZVwifX0gPiBpbnNlcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgXHJcbiAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnICxoZWlnaHQ6ICczMCUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RWxpZ2libGUgVm90ZXJzPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+dm90ZXIgcXVhbnRpdHkgOiB7dGhpcy5wcm9wcy52b3Rlcl9saXN0Lmxlbmd0aH08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3ttYXJnaW4gOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVnaXN0ZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5zZWFyY2hfcmVnaXN0ZXJ9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj57dGhpcy5zdGF0ZS5yZWdpc3Rlcl9hbnN3ZXJ9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNpdmUgc3R5bGU9e3snaGVpZ2h0JzogJzIwMHB4JyxcIndpZHRoXCI6XCIxMDAlXCIsICdvdmVyZmxvd1knOidzY3JvbGwnLCAnZGlzcGxheSc6ICdibG9jayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Vm90aW5nIEFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXIgb3Igbm90PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZvdGVyX2xpc3RRUSBsaXN0ID17dGhpcy5wcm9wcy52b3Rlcl9saXN0fT48L1ZvdGVyX2xpc3RRUT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Vm90aW5nIElsbHVzdHJhdGlvbjwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlZvdGUgYWRkcmVzcyA6IHt0aGlzLnByb3BzLmFkZHJlc3N9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyB0aGUgbGF0ZXN0IDIwMjAgcHJlc2lkZW50aWFsIHBvbGxzIGFuZCBoZWFkLXRvLWhlYWQgbWF0Y2gtdXAgYmV0d2VlbiBKb2UgQmlkZW4gYW5kIERvbmFsZCBUcnVtcC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHZpZXcgY25uLmNvbS9lbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Wb3RpbmcgcmVzdWx0PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+VGhlIFZvdGUgcmVzdWx0IGlzIHNob3duIGJlbG93PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vm90ZV9yZXN1bHQgcmVzdWx0cyA9IHt0aGlzLnByb3BzLm9wdGlvbnN9IHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlX3N0cj17dGhpcy5wcm9wcy5zdGFnZV9zdHJ9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZvdGVfcmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5SZXRhbGx5PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+WW91IGNhbiByZXRhbGx5IHRoZSB2b3RlIGZvciBhc3N1cmluZyB0aGUgcmVzdWx0PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFJldGFsbHkgc3RhZ2UgPSB7dGhpcy5wcm9wcy5zdGFnZX0gYWRkcmVzcyA9IHt0aGlzLnByb3BzLmFkZHJlc3N9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9SZXRhbGx5PlxyXG4gICAgICAgICAgICAgICAgey8qPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICBSZXRhbGx5IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+Ki99XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJldGFsbHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nb190YWxseSA9IHRoaXMuZ29fdGFsbHkuYmluZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICBhc3luYyBnb190YWxseSgpe1xyXG4gICAgICAgICAgICAvLzB4NDIzMDlmOTI0MjM3QmFjNjYyQWY2NDk2NUEyZWZBRjhjMDhmRTRkMlxyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWIzLnV0aWxzLmZyb21Bc2NpaShoYXNoKSk7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5jb21wdXRlKCkuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvc3RhdHVzLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGFnZSA8PTIgKSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDM+SGF2ZSBub3QgcmVhY2ggdGhlIHN0YWdlIGNhbiBUYWxseTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDM+UGxlYXNlIHdhaXQgZm9yIGEgd2hpbGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgc3R5bGU9e3sgbWFyZ2luOlwiYXV0b1wifX0gb25DbGljaz17dGhpcy5nb190YWxseX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIFJldGFsbHkgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG5jbGFzcyBWb3RlX3Jlc3VsdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIC8vY29uc3Qgdm90ZV9idG4gPWZ1bmN0aW9uIChzdGFnZSApe1xyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5yZXN1bHRzKTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YWdlIDwzICkgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgzPkhhdmUgbm90IHJlYWNoIHRoZSBzdGFnZSBjYW4gVGFsbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBsZWFzZSB3YWl0IGZvciBhIHdoaWxlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+RWxlY3RlZCBDYW5kaWRhdGUgOiBLb3JlYW4gRmlzaDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnt0aGlzLnByb3BzLnN0YWdlX3N0cn08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3B0aW9uJ3MgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RvbCB2b3RlcyB0byB0aGUgb3B0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmVzdWx0cy5tYXAocmVzdWx0ID0+IDx0cj48Vm90ZV9yZXN1bHRfVW5pdCBkZXRhaWxzPXtyZXN1bHR9PjwvVm90ZV9yZXN1bHRfVW5pdD48L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgfTtcclxuY2xhc3MgVm90ZV9yZXN1bHRfVW5pdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZGV0YWlscy5tYXAoZGV0YWlsID0+IDx0ZD57ZGV0YWlsfTwvdGQ+KX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZvdGVyX2xpc3RRUSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5saXN0KTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpc3QubWFwKChpdGVtLGluZGV4KT0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2luZGV4KzF9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlllczwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1cztcclxuXHJcblxyXG4vKirmmqvmmYLmgKflnoPlnL5cclxuICogPFRhYmxlIHJlc3BvbnNpdmUgc3R5bGU9e3snaGVpZ2h0JzogJzIwMHB4JyxcIndpZHRoXCI6XCI1MCVcIiwgJ292ZXJmbG93WSc6J3Njcm9sbCcsICdkaXNwbGF5JzogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5pdGVtczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5saW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5yZWdpc3RlciBvciBub3Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJ1ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdHVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNhbmRpZGF0ZSAxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxDYXJkLkxpbmsgaHJlZj1cIiNcIj5wb2xpY3k8L0NhcmQuTGluaz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAqLyJdLCJzb3VyY2VSb290IjoiIn0=