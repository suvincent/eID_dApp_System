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
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Brand, null, "Vote"), console.log(this.props.winner), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
        var _props$query, address, mb_addr, Vote_event, stage, option_length, result, voter_list, winner, options, stage_str, index, temp, arr;

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
                _context.next = 18;
                return Vote_event.methods.return_winner().call();

              case 18:
                winner = _context.sent;
                console.log(winner); //console.log(voter_list);

                options = [];
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                index = 0;

              case 23:
                if (!(index < option_length)) {
                  _context.next = 35;
                  break;
                }

                _context.next = 26;
                return Vote_event.methods.return_options(index).call();

              case 26:
                temp = _context.sent;
                arr = [];
                arr[0] = (index + 1).toString();
                arr[1] = temp;
                arr[2] = result[index];
                options.push(arr);

              case 32:
                index++;
                _context.next = 23;
                break;

              case 35:
                return _context.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  stage: stage,
                  result: result,
                  options: options,
                  stage_str: stage_str,
                  voter_list: voter_list,
                  winner: winner
                });

              case 36:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVnaXN0ZXIiLCJyZWdpc3Rlcl9hbnN3ZXIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImJpbmQiLCJzZWFyY2hfcmVnaXN0ZXIiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzZXRTdGF0ZSIsImluZGV4Iiwidm90ZXJfbGlzdCIsImxlbmd0aCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsIndpbm5lciIsIm1iX2FkZHIiLCJjb2xvciIsImFkZHJlc3MiLCJtYXJnaW4iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwic3RhZ2Vfc3RyIiwib3B0aW9ucyIsInN0YWdlIiwicXVlcnkiLCJ2b3RlIiwiVm90ZV9ldmVudCIsIm1ldGhvZHMiLCJyZXR1cm5fc3RhZ2UiLCJjYWxsIiwicmV0dXJuX29wdGlvbnNfbGVuZ3RoIiwib3B0aW9uX2xlbmd0aCIsInJldHVybl9yZXN1bHQiLCJyZXN1bHQiLCJyZXR1cm5fbXNnc2VuZGVyX3ZvdGVyX2xpc3QiLCJyZXR1cm5fd2lubmVyIiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwiYXJyIiwidG9TdHJpbmciLCJwdXNoIiwiQ29tcG9uZW50IiwiUmV0YWxseSIsImdvX3RhbGx5Iiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb21wdXRlIiwic2VuZCIsImZyb20iLCJhbGVydCIsIm1lc3NhZ2UiLCJWb3RlX3Jlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJWb3RlX3Jlc3VsdF9Vbml0IiwiZGV0YWlscyIsImRldGFpbCIsIlZvdGVyX2xpc3RRUSIsImxpc3QiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWtCSDs7OztFQTlCaUJRLCtDOztBQStCdkI7O0lBQ0dlLGdCOzs7Ozs7Ozs7Ozs7OzZCQUNNO0FBQ0osYUFDSSxtRUFDQyxLQUFLakUsS0FBTCxDQUFXa0UsT0FBWCxDQUFtQkYsR0FBbkIsQ0FBdUIsVUFBQUcsTUFBTTtBQUFBLGVBQUksa0JBQUtBLE1BQUwsQ0FBSjtBQUFBLE9BQTdCLENBREQsQ0FESjtBQUtIOzs7O0VBUDBCakIsK0M7O0lBU3pCa0IsWTs7Ozs7Ozs7Ozs7Ozs2QkFDTTtBQUNKO0FBQ0EsYUFDSSxtRUFDQyxLQUFLcEUsS0FBTCxDQUFXcUUsSUFBWCxDQUFnQkwsR0FBaEIsQ0FBb0IsVUFBQ00sSUFBRCxFQUFNeEQsS0FBTjtBQUFBLGVBQ2pCLGtCQUNBLGtCQUFLQSxLQUFLLEdBQUMsQ0FBWCxDQURBLEVBRUEsa0JBQUt3RCxJQUFMLENBRkEsRUFHQSx3QkFIQSxDQURpQjtBQUFBLE9BQXBCLENBREQsQ0FESjtBQVdIOzs7O0VBZHNCcEIsK0M7O0FBaUJabkQscUVBQWY7QUFHQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcVm90ZVxcc3RhdHVzLmpzLjM1MDA1NWFjN2MyYjA5NTYyMzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnR7TGlua31mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IHtDYXJkLFRhYmxlfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUmVhY3RTaGFkb3dTY3JvbGwgZnJvbSAncmVhY3Qtc2hhZG93LXNjcm9sbCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnXHJcbmltcG9ydCB7Um91dGVyfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB2b3RlIGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvdm90ZSc7XHJcblxyXG5jbGFzcyBTdGF0dXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgc2VhcmNoIDogXCJcIixcclxuICAgICAgICAgIHJlZ2lzdGVyIDogXCJcIixcclxuICAgICAgICAgIHJlZ2lzdGVyX2Fuc3dlciA6IFwiXCIsXHJcbiAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6JydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF9zZWFyY2ggPSB0aGlzLnJlZnJlc2hfc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hfcmVnaXN0ZXIgPSB0aGlzLnNlYXJjaF9yZWdpc3Rlci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3R7YWRkcmVzcyxtYl9hZGRyfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUoYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3N0YWdlKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbl9sZW5ndGggPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnNfbGVuZ3RoKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fcmVzdWx0KCkuY2FsbCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coVm90ZV9ldmVudCk7XHJcbiAgICAgICAgbGV0IHZvdGVyX2xpc3QgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX21zZ3NlbmRlcl92b3Rlcl9saXN0KCkuY2FsbCgpO1xyXG4gICAgICAgIGxldCB3aW5uZXIgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3dpbm5lcigpLmNhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5uZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2codm90ZXJfbGlzdCk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhZ2Vfc3RyID0gIChzdGFnZSA9PSAwKT9cInN0YWdlIDogU2V0dXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDEpP1wic3RhZ2UgOiBSZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMik/XCJzdGFnZSA6IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDMpP1wic3RhZ2UgOiBUYWxseVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gNCk/XCJzdGFnZSA6IEZpbmlzaFwiOlwic3RhZ2UgOiBTZXR1cFwiO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9uX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9ucyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGFyclswXSA9IChpbmRleCsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhcnJbMV0gPSB0ZW1wO1xyXG4gICAgICAgICAgICBhcnJbMl0gPSByZXN1bHRbaW5kZXhdO1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybnthZGRyZXNzLG1iX2FkZHIsc3RhZ2UscmVzdWx0LG9wdGlvbnMsc3RhZ2Vfc3RyLHZvdGVyX2xpc3Qsd2lubmVyfTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hfc2VhcmNoKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIilcclxuICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvc3RhdHVzLyR7dGhpcy5zdGF0ZS5zZWFyY2h9YCk7XHJcbiAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICB9XHJcbiAgICBzZWFyY2hfcmVnaXN0ZXIoKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnJlZ2lzdGVyID09IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXI6XCJcIn0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnByb3BzLnZvdGVyX2xpc3QubGVuZ3RoO2luZGV4Kyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnJlZ2lzdGVyID09IHRoaXMucHJvcHMudm90ZXJfbGlzdFtpbmRleF0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyOlwiQWxyZWFkeSBSZWdpc3RlcmVkICFcIn0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6XCJcIn0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZWdpc3Rlcl9hbnN3ZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlciA6IFwiVm90ZXIgbm90IGZvdW5kICFcIn0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyOlwiXCJ9KTtcclxuICAgICAgICAvL3RoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlcjpcIlwifSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICA8TmF2YmFyLkJyYW5kID5Wb3RlPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnByb3BzLndpbm5lcil9XHJcbiAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaG9tZS9cIisgdGhpcy5wcm9wcy5tYl9hZGRyIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvc3RhdHVzL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3N9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlZvdGU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17e21hcmdpbiA6XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJ3aGl0ZVwifX0gPiBpbnNlcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgXHJcbiAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnICxoZWlnaHQ6ICczMCUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RWxpZ2libGUgVm90ZXJzPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+dm90ZXIgcXVhbnRpdHkgOiB7dGhpcy5wcm9wcy52b3Rlcl9saXN0Lmxlbmd0aH08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3ttYXJnaW4gOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVnaXN0ZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5zZWFyY2hfcmVnaXN0ZXJ9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIiBzdHlsZT17e21hcmdpblRvcCA6XCIxJVwiLG1hcmdpbiA6XCIyJVwifX0+e3RoaXMuc3RhdGUucmVnaXN0ZXJfYW5zd2VyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlIHN0eWxlPXt7J2hlaWdodCc6ICcyMDBweCcsXCJ3aWR0aFwiOlwiMTAwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZvdGluZyBBZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ2lzdGVyIG9yIG5vdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWb3Rlcl9saXN0UVEgbGlzdCA9e3RoaXMucHJvcHMudm90ZXJfbGlzdH0+PC9Wb3Rlcl9saXN0UVE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0NiUnICwgbWFyZ2luOiAnMS41JSd9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlZvdGluZyBJbGx1c3RyYXRpb248L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5Wb3RlIGFkZHJlc3MgOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnt0aGlzLnByb3BzLnN0YWdlX3N0cn08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgdGhlIGxhdGVzdCAyMDIwIHByZXNpZGVudGlhbCBwb2xscyBhbmQgaGVhZC10by1oZWFkIG1hdGNoLXVwIGJldHdlZW4gSm9lIEJpZGVuIGFuZCBEb25hbGQgVHJ1bXAuIEZvciBtb3JlIGluZm9ybWF0aW9uLCB2aWV3IGNubi5jb20vZWxlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Vm90aW5nIHJlc3VsdDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlRoZSBWb3RlIHJlc3VsdCBpcyBzaG93biBiZWxvdzwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZvdGVfcmVzdWx0IHJlc3VsdHMgPSB7dGhpcy5wcm9wcy5vcHRpb25zfSBzdGFnZSA9e3RoaXMucHJvcHMuc3RhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZV9zdHI9e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfSBhZGRyZXNzID0ge3RoaXMucHJvcHMuYWRkcmVzc30gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Wb3RlX3Jlc3VsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+UmV0YWxseTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPllvdSBjYW4gcmV0YWxseSB0aGUgdm90ZSBmb3IgYXNzdXJpbmcgdGhlIHJlc3VsdDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxSZXRhbGx5IHN0YWdlID0ge3RoaXMucHJvcHMuc3RhZ2V9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvUmV0YWxseT5cclxuICAgICAgICAgICAgICAgIHsvKjxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBzdHlsZT17eyBtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgUmV0YWxseSBidXR0b25cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiovfVxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXRhbGx5IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ29fdGFsbHkgPSB0aGlzLmdvX3RhbGx5LmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgYXN5bmMgZ29fdGFsbHkoKXtcclxuICAgICAgICAgICAgLy8weDQyMzA5ZjkyNDIzN0JhYzY2MkFmNjQ5NjVBMmVmQUY4YzA4ZkU0ZDJcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2ViMy51dGlscy5mcm9tQXNjaWkoaGFzaCkpO1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMuY29tcHV0ZSgpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3N0YXR1cy8ke3RoaXMucHJvcHMubWJfYWRkcn0vJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RhZ2UgPD0yICkgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgzPkhhdmUgbm90IHJlYWNoIHRoZSBzdGFnZSBjYW4gVGFsbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBsZWFzZSB3YWl0IGZvciBhIHdoaWxlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbjpcImF1dG9cIn19IG9uQ2xpY2s9e3RoaXMuZ29fdGFsbHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICBSZXRhbGx5IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+eycgJ31cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICB9O1xyXG5cclxuY2xhc3MgVm90ZV9yZXN1bHQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICAvL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMucmVzdWx0cyk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGFnZSA8MyApIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMz5IYXZlIG5vdCByZWFjaCB0aGUgc3RhZ2UgY2FuIFRhbGx5PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz5QbGVhc2Ugd2FpdCBmb3IgYSB3aGlsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPkVsZWN0ZWQgQ2FuZGlkYXRlIDogS29yZWFuIEZpc2g8L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj57dGhpcy5wcm9wcy5zdGFnZV9zdHJ9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk9wdGlvbidzIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90b2wgdm90ZXMgdG8gdGhlIG9wdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlc3VsdHMubWFwKHJlc3VsdCA9PiA8dHI+PFZvdGVfcmVzdWx0X1VuaXQgZGV0YWlscz17cmVzdWx0fT48L1ZvdGVfcmVzdWx0X1VuaXQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gIH07XHJcbmNsYXNzIFZvdGVfcmVzdWx0X1VuaXQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmRldGFpbHMubWFwKGRldGFpbCA9PiA8dGQ+e2RldGFpbH08L3RkPil9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jbGFzcyBWb3Rlcl9saXN0UVEgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMubGlzdCk7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0Lm1hcCgoaXRlbSxpbmRleCk9PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpbmRleCsxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5ZZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7XHJcblxyXG5cclxuLyoq5pqr5pmC5oCn5Z6D5Zy+XHJcbiAqIDxUYWJsZSByZXNwb25zaXZlIHN0eWxlPXt7J2hlaWdodCc6ICcyMDBweCcsXCJ3aWR0aFwiOlwiNTAlXCIsICdvdmVyZmxvd1knOidzY3JvbGwnLCAnZGlzcGxheSc6ICdibG9jayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+aXRlbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+bGluazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+cmVnaXN0ZXIgb3Igbm90PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRydWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlN0YXR1czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb3RlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DYW5kaWRhdGUgMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48Q2FyZC5MaW5rIGhyZWY9XCIjXCI+cG9saWN5PC9DYXJkLkxpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gKi8iXSwic291cmNlUm9vdCI6IiJ9