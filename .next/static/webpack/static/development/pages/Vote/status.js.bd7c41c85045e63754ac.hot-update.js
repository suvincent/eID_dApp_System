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
      if (this.state.register == "") {
        this.setState({
          register_answer: ""
        });
        return;
      }

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
        className: "mb-2 text-muted",
        style: {
          marginTop: "1%",
          margin: "2%"
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVnaXN0ZXIiLCJyZWdpc3Rlcl9hbnN3ZXIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImJpbmQiLCJzZWFyY2hfcmVnaXN0ZXIiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzZXRTdGF0ZSIsImluZGV4Iiwidm90ZXJfbGlzdCIsImxlbmd0aCIsIndpZHRoIiwibWJfYWRkciIsImNvbG9yIiwiYWRkcmVzcyIsIm1hcmdpbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJzdGFnZV9zdHIiLCJvcHRpb25zIiwic3RhZ2UiLCJxdWVyeSIsInZvdGUiLCJWb3RlX2V2ZW50IiwibWV0aG9kcyIsInJldHVybl9zdGFnZSIsImNhbGwiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJvcHRpb25fbGVuZ3RoIiwicmV0dXJuX3Jlc3VsdCIsInJlc3VsdCIsInJldHVybl9tc2dzZW5kZXJfdm90ZXJfbGlzdCIsInJldHVybl9vcHRpb25zIiwidGVtcCIsImFyciIsInRvU3RyaW5nIiwicHVzaCIsIkNvbXBvbmVudCIsIlJldGFsbHkiLCJnb190YWxseSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29tcHV0ZSIsInNlbmQiLCJmcm9tIiwiYWxlcnQiLCJtZXNzYWdlIiwiVm90ZV9yZXN1bHQiLCJyZXN1bHRzIiwibWFwIiwiVm90ZV9yZXN1bHRfVW5pdCIsImRldGFpbHMiLCJkZXRhaWwiLCJWb3Rlcl9saXN0UVEiLCJsaXN0IiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Q007QUFDSjtBQUNBLGFBQ0ksbUVBQ0MsS0FBS2hFLEtBQUwsQ0FBV2lFLElBQVgsQ0FBZ0JMLEdBQWhCLENBQW9CLFVBQUNNLElBQUQsRUFBTXBELEtBQU47QUFBQSxlQUNqQixrQkFDQSxrQkFBS0EsS0FBSyxHQUFDLENBQVgsQ0FEQSxFQUVBLGtCQUFLb0QsSUFBTCxDQUZBLEVBR0Esd0JBSEEsQ0FEaUI7QUFBQSxPQUFwQixDQURELENBREo7QUFXSDs7OztFQWRzQnBCLCtDOztBQWlCWi9DLHFFQUFmO0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXHN0YXR1cy5qcy5iZDdjNDFjODUwNDVlNjM3NTRhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7Q2FyZCxUYWJsZX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0U2hhZG93U2Nyb2xsIGZyb20gJ3JlYWN0LXNoYWRvdy1zY3JvbGwnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5cclxuY2xhc3MgU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgLy8gTWJfYWRkciA6cHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgICAgIHNlYXJjaCA6IFwiXCIsXHJcbiAgICAgICAgICByZWdpc3RlciA6IFwiXCIsXHJcbiAgICAgICAgICByZWdpc3Rlcl9hbnN3ZXIgOiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoX3JlZ2lzdGVyID0gdGhpcy5zZWFyY2hfcmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0e2FkZHJlc3MsbWJfYWRkcn0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHN0YWdlID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9zdGFnZSgpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBvcHRpb25fbGVuZ3RoID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zX2xlbmd0aCgpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3Jlc3VsdCgpLmNhbGwoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFZvdGVfZXZlbnQpO1xyXG4gICAgICAgIGxldCB2b3Rlcl9saXN0ID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9tc2dzZW5kZXJfdm90ZXJfbGlzdCgpLmNhbGwoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHZvdGVyX2xpc3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2codm90ZXJfbGlzdCk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhZ2Vfc3RyID0gIChzdGFnZSA9PSAwKT9cInN0YWdlIDogU2V0dXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDEpP1wic3RhZ2UgOiBSZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMik/XCJzdGFnZSA6IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDMpP1wic3RhZ2UgOiBUYWxseVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gNCk/XCJzdGFnZSA6IEZpbmlzaFwiOlwic3RhZ2UgOiBTZXR1cFwiO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9uX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9ucyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGFyclswXSA9IChpbmRleCsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhcnJbMV0gPSB0ZW1wO1xyXG4gICAgICAgICAgICBhcnJbMl0gPSByZXN1bHRbaW5kZXhdO1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybnthZGRyZXNzLG1iX2FkZHIsc3RhZ2UscmVzdWx0LG9wdGlvbnMsc3RhZ2Vfc3RyLHZvdGVyX2xpc3R9O1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKVxyXG4gICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9zdGF0dXMvJHt0aGlzLnN0YXRlLnNlYXJjaH1gKTtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgIH1cclxuICAgIHNlYXJjaF9yZWdpc3Rlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucmVnaXN0ZXIgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlcjpcIlwifSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucHJvcHMudm90ZXJfbGlzdC5sZW5ndGg7aW5kZXgrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVnaXN0ZXIgPT0gdGhpcy5wcm9wcy52b3Rlcl9saXN0W2luZGV4XSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXI6XCJBbHJlYWR5IFJlZ2lzdGVyZWQgIVwifSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlcjpcIlwifSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlZ2lzdGVyX2Fuc3dlcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyIDogXCJWb3RlciBub3QgZm91bmQgIVwifSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6XCJcIn0pO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyOlwiXCJ9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgIDxOYXZiYXIuQnJhbmQgPlZvdGU8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgey8qY29uc29sZS5sb2codGhpcy5wcm9wcy5vcHRpb25zKSovfVxyXG4gICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2hvbWUvXCIrIHRoaXMucHJvcHMubWJfYWRkciB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL3N0YXR1cy9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5hZGRyZXNzfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Wb3RlPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2luZGV4XCIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+TG9nb3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3ttYXJnaW4gOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvciA6IFwid2hpdGVcIn19ID4gaW5zZXJ0IHlvdXIgdm90ZSBjb250cmFjdCBhZGRyZXNzIGhlcmUgIC0mZ3Q7ICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIFxyXG4gICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpldmVudC50YXJnZXQudmFsdWV9KX0vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hfc2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJyAsaGVpZ2h0OiAnMzAlJyB9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkVsaWdpYmxlIFZvdGVyczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnZvdGVyIHF1YW50aXR5IDoge3RoaXMucHJvcHMudm90ZXJfbGlzdC5sZW5ndGh9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gaW5saW5lIHN0eWxlPXt7bWFyZ2luIDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlZ2lzdGVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyOmV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoX3JlZ2lzdGVyfT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCIgc3R5bGU9e3ttYXJnaW5Ub3AgOlwiMSVcIixtYXJnaW4gOlwiMiVcIn19Pnt0aGlzLnN0YXRlLnJlZ2lzdGVyX2Fuc3dlcn08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjEwMCVcIiwgJ292ZXJmbG93WSc6J3Njcm9sbCcsICdkaXNwbGF5JzogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Wb3RpbmcgQWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZWdpc3RlciBvciBub3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vm90ZXJfbGlzdFFRIGxpc3QgPXt0aGlzLnByb3BzLnZvdGVyX2xpc3R9PjwvVm90ZXJfbGlzdFFRPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Wb3RpbmcgSWxsdXN0cmF0aW9uPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+Vm90ZSBhZGRyZXNzIDoge3RoaXMucHJvcHMuYWRkcmVzc308L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj57dGhpcy5wcm9wcy5zdGFnZV9zdHJ9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IHRoZSBsYXRlc3QgMjAyMCBwcmVzaWRlbnRpYWwgcG9sbHMgYW5kIGhlYWQtdG8taGVhZCBtYXRjaC11cCBiZXR3ZWVuIEpvZSBCaWRlbiBhbmQgRG9uYWxkIFRydW1wLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdmlldyBjbm4uY29tL2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0NiUnICwgbWFyZ2luOiAnMS41JSd9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlZvdGluZyByZXN1bHQ8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5UaGUgVm90ZSByZXN1bHQgaXMgc2hvd24gYmVsb3c8L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWb3RlX3Jlc3VsdCByZXN1bHRzID0ge3RoaXMucHJvcHMub3B0aW9uc30gc3RhZ2UgPXt0aGlzLnByb3BzLnN0YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2Vfc3RyPXt0aGlzLnByb3BzLnN0YWdlX3N0cn0gYWRkcmVzcyA9IHt0aGlzLnByb3BzLmFkZHJlc3N9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVm90ZV9yZXN1bHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0NiUnICwgbWFyZ2luOiAnMS41JSd9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlJldGFsbHk8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5Zb3UgY2FuIHJldGFsbHkgdGhlIHZvdGUgZm9yIGFzc3VyaW5nIHRoZSByZXN1bHQ8L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8UmV0YWxseSBzdGFnZSA9IHt0aGlzLnByb3BzLnN0YWdlfSBhZGRyZXNzID0ge3RoaXMucHJvcHMuYWRkcmVzc30gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT48L1JldGFsbHk+XHJcbiAgICAgICAgICAgICAgICB7Lyo8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgc3R5bGU9e3sgbWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIFJldGFsbHkgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj4qL31cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUmV0YWxseSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdvX3RhbGx5ID0gdGhpcy5nb190YWxseS5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGFzeW5jIGdvX3RhbGx5KCl7XHJcbiAgICAgICAgICAgIC8vMHg0MjMwOWY5MjQyMzdCYWM2NjJBZjY0OTY1QTJlZkFGOGMwOGZFNGQyXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHdlYjMudXRpbHMuZnJvbUFzY2lpKGhhc2gpKTtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLmNvbXB1dGUoKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9zdGF0dXMvJHt0aGlzLnByb3BzLm1iX2FkZHJ9LyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YWdlIDw9MiApIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMz5IYXZlIG5vdCByZWFjaCB0aGUgc3RhZ2UgY2FuIFRhbGx5PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz5QbGVhc2Ugd2FpdCBmb3IgYSB3aGlsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBzdHlsZT17eyBtYXJnaW46XCJhdXRvXCJ9fSBvbkNsaWNrPXt0aGlzLmdvX3RhbGx5fT5cclxuICAgICAgICAgICAgICAgICAgICAgUmV0YWxseSBidXR0b25cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPnsnICd9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgfTtcclxuXHJcbmNsYXNzIFZvdGVfcmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgLy9jb25zdCB2b3RlX2J0biA9ZnVuY3Rpb24gKHN0YWdlICl7XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLnJlc3VsdHMpO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RhZ2UgPDMgKSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDM+SGF2ZSBub3QgcmVhY2ggdGhlIHN0YWdlIGNhbiBUYWxseTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDM+UGxlYXNlIHdhaXQgZm9yIGEgd2hpbGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5FbGVjdGVkIENhbmRpZGF0ZSA6IEtvcmVhbiBGaXNoPC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PcHRpb24ncyBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdG9sIHZvdGVzIHRvIHRoZSBvcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXN1bHRzLm1hcChyZXN1bHQgPT4gPHRyPjxWb3RlX3Jlc3VsdF9Vbml0IGRldGFpbHM9e3Jlc3VsdH0+PC9Wb3RlX3Jlc3VsdF9Vbml0PjwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICB9O1xyXG5jbGFzcyBWb3RlX3Jlc3VsdF9Vbml0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXRhaWxzLm1hcChkZXRhaWwgPT4gPHRkPntkZXRhaWx9PC90ZD4pfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVm90ZXJfbGlzdFFRIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmxpc3QpO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoKGl0ZW0saW5kZXgpPT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57aW5kZXgrMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpdGVtfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+WWVzPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzO1xyXG5cclxuXHJcbi8qKuaaq+aZguaAp+Weg+WcvlxyXG4gKiA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjUwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPml0ZW1zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmxpbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnJlZ2lzdGVyIG9yIG5vdDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcnVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm90ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2FuZGlkYXRlIDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PENhcmQuTGluayBocmVmPVwiI1wiPnBvbGljeTwvQ2FyZC5MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==