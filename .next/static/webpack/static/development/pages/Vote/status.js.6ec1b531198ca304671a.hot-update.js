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
      }, this.props.stage_str), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Text, null, "View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        responsive: true,
        style: {
          'height': '200px',
          "width": "100%",
          'overflowY': 'scroll',
          'display': 'block'
        }
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "Start time"), __jsx("th", null, "End time"))), __jsx("tbody", null, __jsx("tr", null, __jsx("th", null, "Register time"), __jsx("th", null, this.props.time !== undefined ? this.props.time[0] : ""), __jsx("th", null, this.props.time !== undefined ? this.props.time[1] : "")), __jsx("tr", null, __jsx("th", null, "Vote time"), __jsx("th", null, this.props.time !== undefined ? this.props.time[2] : ""), __jsx("th", null, this.props.time !== undefined ? this.props.time[3] : "")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Voting result"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "The Vote result is shown below"), __jsx(Vote_result, {
        results: this.props.options,
        stage: this.props.stage,
        winner: this.props.winner,
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
        var _props$query, address, mb_addr, Vote_event, stage, option_length, result, voter_list, _winner, time, correct_time, i, a, options, stage_str, index, temp, arr;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, mb_addr = _props$query.mb_addr;
                console.log(address, mb_addr);
                _context.next = 4;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(address);

              case 4:
                Vote_event = _context.sent;
                console.log(Vote_event);
                _context.next = 8;
                return Vote_event.methods.return_stage().call();

              case 8:
                stage = _context.sent;
                console.log(stage);
                _context.next = 12;
                return Vote_event.methods.return_options_length().call();

              case 12:
                option_length = _context.sent;
                console.log(option_length);
                _context.next = 16;
                return Vote_event.methods.return_result().call();

              case 16:
                result = _context.sent;
                console.log(result); //console.log(Vote_event);

                _context.next = 20;
                return Vote_event.methods.return_msgsender_voter_list().call();

              case 20:
                voter_list = _context.sent;
                console.log(voter_list);

                if (!(stage == 4)) {
                  _context.next = 27;
                  break;
                }

                _context.next = 25;
                return Vote_event.methods.return_winner().call();

              case 25:
                _winner = _context.sent;
                console.log(_winner);

              case 27:
                _context.next = 29;
                return Vote_event.methods.return_time().call();

              case 29:
                time = _context.sent;
                correct_time = [];
                i = 0;

              case 32:
                if (!(i < 4)) {
                  _context.next = 42;
                  break;
                }

                console.log(time[i]);
                _context.next = 36;
                return new Date(time[i] * 1);

              case 36:
                a = _context.sent;
                console.log(a.toString());
                correct_time.push(a.toString());

              case 39:
                i++;
                _context.next = 32;
                break;

              case 42:
                console.log(correct_time);
                time = correct_time;
                options = [];
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                index = 0;

              case 47:
                if (!(index < option_length)) {
                  _context.next = 59;
                  break;
                }

                _context.next = 50;
                return Vote_event.methods.return_options(index).call();

              case 50:
                temp = _context.sent;
                arr = [];
                arr[0] = (index + 1).toString();
                arr[1] = temp;
                arr[2] = result[index];
                options.push(arr);

              case 56:
                index++;
                _context.next = 47;
                break;

              case 59:
                if (!(stage == 4)) {
                  _context.next = 63;
                  break;
                }

                return _context.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  stage: stage,
                  result: result,
                  options: options,
                  stage_str: stage_str,
                  voter_list: voter_list,
                  winner: winner,
                  time: time
                });

              case 63:
                return _context.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  stage: stage,
                  result: result,
                  options: options,
                  stage_str: stage_str,
                  voter_list: voter_list,
                  time: time
                });

              case 64:
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
      }, "Elected Candidate : ", this.props.stage == 4 ? this.props.winner : "wait for tally", " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVnaXN0ZXIiLCJyZWdpc3Rlcl9hbnN3ZXIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImJpbmQiLCJzZWFyY2hfcmVnaXN0ZXIiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzZXRTdGF0ZSIsImluZGV4Iiwidm90ZXJfbGlzdCIsImxlbmd0aCIsIndpZHRoIiwibWJfYWRkciIsImNvbG9yIiwiYWRkcmVzcyIsIm1hcmdpbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJzdGFnZV9zdHIiLCJ0aW1lIiwidW5kZWZpbmVkIiwib3B0aW9ucyIsInN0YWdlIiwid2lubmVyIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidm90ZSIsIlZvdGVfZXZlbnQiLCJtZXRob2RzIiwicmV0dXJuX3N0YWdlIiwiY2FsbCIsInJldHVybl9vcHRpb25zX2xlbmd0aCIsIm9wdGlvbl9sZW5ndGgiLCJyZXR1cm5fcmVzdWx0IiwicmVzdWx0IiwicmV0dXJuX21zZ3NlbmRlcl92b3Rlcl9saXN0IiwicmV0dXJuX3dpbm5lciIsInJldHVybl90aW1lIiwiY29ycmVjdF90aW1lIiwiaSIsIkRhdGUiLCJhIiwidG9TdHJpbmciLCJwdXNoIiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwiYXJyIiwiQ29tcG9uZW50IiwiUmV0YWxseSIsImdvX3RhbGx5Iiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb21wdXRlIiwic2VuZCIsImZyb20iLCJhbGVydCIsIm1lc3NhZ2UiLCJWb3RlX3Jlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJWb3RlX3Jlc3VsdF9Vbml0IiwiZGV0YWlscyIsImRldGFpbCIsIlZvdGVyX2xpc3RRUSIsImxp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Ozs7Ozs7Ozs7Ozs7NkJBQ007QUFDSixhQUNJLG1FQUNDLEtBQUt4RSxLQUFMLENBQVd5RSxPQUFYLENBQW1CRixHQUFuQixDQUF1QixVQUFBRyxNQUFNO0FBQUEsZUFBSSxrQkFBS0EsTUFBTCxDQUFKO0FBQUEsT0FBN0IsQ0FERCxDQURKO0FBS0g7Ozs7RUFQMEJqQiwrQzs7SUFTekJrQixZOzs7Ozs7Ozs7Ozs7OzZCQUNNO0FBQ0o7QUFDQSxhQUNJLG1FQUNDLEtBQUszRSxLQUFMLENBQVc0RSxJQUFYLENBQWdCTCxHQUFoQixDQUFvQixVQUFDTSxJQUFELEVBQU0vRCxLQUFOO0FBQUEsZUFDakIsa0JBQ0Esa0JBQUtBLEtBQUssR0FBQyxDQUFYLENBREEsRUFFQSxrQkFBSytELElBQUwsQ0FGQSxFQUdBLHdCQUhBLENBRGlCO0FBQUEsT0FBcEIsQ0FERCxDQURKO0FBV0g7Ozs7RUFkc0JwQiwrQzs7QUFpQloxRCxxRUFBZjtBQUdBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxzdGF0dXMuanMuNmVjMWI1MzExOThjYTMwNDY3MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmQsVGFibGV9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBSZWFjdFNoYWRvd1Njcm9sbCBmcm9tICdyZWFjdC1zaGFkb3ctc2Nyb2xsJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHtSb3V0ZXJ9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHZvdGUgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS92b3RlJztcclxuXHJcbmNsYXNzIFN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICBzZWFyY2ggOiBcIlwiLFxyXG4gICAgICAgICAgcmVnaXN0ZXIgOiBcIlwiLFxyXG4gICAgICAgICAgcmVnaXN0ZXJfYW5zd2VyIDogXCJcIixcclxuICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgIGxvYWRpbmcyOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yTWVzc2FnZTonJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3NlYXJjaCA9IHRoaXMucmVmcmVzaF9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlYXJjaF9yZWdpc3RlciA9IHRoaXMuc2VhcmNoX3JlZ2lzdGVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdHthZGRyZXNzLG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWRkcmVzcyxtYl9hZGRyKTtcclxuICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID0gYXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhWb3RlX2V2ZW50KTtcclxuICAgICAgICBjb25zdCBzdGFnZSA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fc3RhZ2UoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhZ2UpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbl9sZW5ndGggPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnNfbGVuZ3RoKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbl9sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fcmVzdWx0KCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhWb3RlX2V2ZW50KTtcclxuICAgICAgICBsZXQgdm90ZXJfbGlzdCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fbXNnc2VuZGVyX3ZvdGVyX2xpc3QoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codm90ZXJfbGlzdCk7XHJcbiAgICAgICAgaWYoc3RhZ2U9PTQpe1xyXG4gICAgICAgICAgICBsZXQgd2lubmVyID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl93aW5uZXIoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbm5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0aW1lID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl90aW1lKCkuY2FsbCgpO1xyXG4gICAgICAgIGxldCBjb3JyZWN0X3RpbWUgPVtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTw0O2krKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aW1lW2ldKTtcclxuICAgICAgICAgICAgbGV0IGEgPWF3YWl0IG5ldyBEYXRlKHRpbWVbaV0qMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNvcnJlY3RfdGltZS5wdXNoKGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvcnJlY3RfdGltZSk7XHJcbiAgICAgICAgdGltZSA9IGNvcnJlY3RfdGltZTtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFnZV9zdHIgPSAgKHN0YWdlID09IDApP1wic3RhZ2UgOiBTZXR1cFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMSk/XCJzdGFnZSA6IFJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAyKT9cInN0YWdlIDogVm90ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMyk/XCJzdGFnZSA6IFRhbGx5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSA0KT9cInN0YWdlIDogRmluaXNoXCI6XCJzdGFnZSA6IFNldHVwXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25fbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgYXJyWzBdID0gKGluZGV4KzEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGFyclsxXSA9IHRlbXA7XHJcbiAgICAgICAgICAgIGFyclsyXSA9IHJlc3VsdFtpbmRleF07XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChhcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzdGFnZT09NClcclxuICAgICAgICAgICAgcmV0dXJue2FkZHJlc3MsbWJfYWRkcixzdGFnZSxyZXN1bHQsb3B0aW9ucyxzdGFnZV9zdHIsdm90ZXJfbGlzdCx3aW5uZXIsdGltZX07XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgcmV0dXJue2FkZHJlc3MsbWJfYWRkcixzdGFnZSxyZXN1bHQsb3B0aW9ucyxzdGFnZV9zdHIsdm90ZXJfbGlzdCx0aW1lfTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hfc2VhcmNoKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIilcclxuICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvc3RhdHVzLyR7dGhpcy5zdGF0ZS5zZWFyY2h9YCk7XHJcbiAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICB9XHJcbiAgICBzZWFyY2hfcmVnaXN0ZXIoKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnJlZ2lzdGVyID09IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXI6XCJcIn0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnByb3BzLnZvdGVyX2xpc3QubGVuZ3RoO2luZGV4Kyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnJlZ2lzdGVyID09IHRoaXMucHJvcHMudm90ZXJfbGlzdFtpbmRleF0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyOlwiQWxyZWFkeSBSZWdpc3RlcmVkICFcIn0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6XCJcIn0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZWdpc3Rlcl9hbnN3ZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlciA6IFwiVm90ZXIgbm90IGZvdW5kICFcIn0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyOlwiXCJ9KTtcclxuICAgICAgICAvL3RoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlcjpcIlwifSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICA8TmF2YmFyLkJyYW5kID5Wb3RlPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaG9tZS9cIisgdGhpcy5wcm9wcy5tYl9hZGRyIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvc3RhdHVzL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3N9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlZvdGU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17e21hcmdpbiA6XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJ3aGl0ZVwifX0gPiBpbnNlcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgXHJcbiAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnICxoZWlnaHQ6ICczMCUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RWxpZ2libGUgVm90ZXJzPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+dm90ZXIgcXVhbnRpdHkgOiB7dGhpcy5wcm9wcy52b3Rlcl9saXN0Lmxlbmd0aH08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3ttYXJnaW4gOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVnaXN0ZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5zZWFyY2hfcmVnaXN0ZXJ9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIiBzdHlsZT17e21hcmdpblRvcCA6XCIxJVwiLG1hcmdpbiA6XCIyJVwifX0+e3RoaXMuc3RhdGUucmVnaXN0ZXJfYW5zd2VyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlIHN0eWxlPXt7J2hlaWdodCc6ICcyMDBweCcsXCJ3aWR0aFwiOlwiMTAwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZvdGluZyBBZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ2lzdGVyIG9yIG5vdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWb3Rlcl9saXN0UVEgbGlzdCA9e3RoaXMucHJvcHMudm90ZXJfbGlzdH0+PC9Wb3Rlcl9saXN0UVE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Wb3RpbmcgSWxsdXN0cmF0aW9uPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+Vm90ZSBhZGRyZXNzIDoge3RoaXMucHJvcHMuYWRkcmVzc308L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj57dGhpcy5wcm9wcy5zdGFnZV9zdHJ9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IHRoZSBsYXRlc3QgMjAyMCBwcmVzaWRlbnRpYWwgcG9sbHMgYW5kIGhlYWQtdG8taGVhZCBtYXRjaC11cCBiZXR3ZWVuIEpvZSBCaWRlbiBhbmQgRG9uYWxkIFRydW1wLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdmlldyBjbm4uY29tL2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjEwMCVcIiwgJ292ZXJmbG93WSc6J3Njcm9sbCcsICdkaXNwbGF5JzogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGFydCB0aW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZCB0aW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ2lzdGVyIHRpbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnsodGhpcy5wcm9wcy50aW1lICE9PSB1bmRlZmluZWQpP3RoaXMucHJvcHMudGltZVswXTpcIlwifTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+eyh0aGlzLnByb3BzLnRpbWUgIT09IHVuZGVmaW5lZCk/dGhpcy5wcm9wcy50aW1lWzFdOlwiXCJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZvdGUgdGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+eyh0aGlzLnByb3BzLnRpbWUgIT09IHVuZGVmaW5lZCk/dGhpcy5wcm9wcy50aW1lWzJdOlwiXCJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57KHRoaXMucHJvcHMudGltZSAhPT0gdW5kZWZpbmVkKT90aGlzLnByb3BzLnRpbWVbM106XCJcIn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Vm90aW5nIHJlc3VsdDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlRoZSBWb3RlIHJlc3VsdCBpcyBzaG93biBiZWxvdzwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZvdGVfcmVzdWx0IHJlc3VsdHMgPSB7dGhpcy5wcm9wcy5vcHRpb25zfSBzdGFnZSA9e3RoaXMucHJvcHMuc3RhZ2V9IHdpbm5lcj17dGhpcy5wcm9wcy53aW5uZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZV9zdHI9e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfSBhZGRyZXNzID0ge3RoaXMucHJvcHMuYWRkcmVzc30gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Wb3RlX3Jlc3VsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+UmV0YWxseTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPllvdSBjYW4gcmV0YWxseSB0aGUgdm90ZSBmb3IgYXNzdXJpbmcgdGhlIHJlc3VsdDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxSZXRhbGx5IHN0YWdlID0ge3RoaXMucHJvcHMuc3RhZ2V9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvUmV0YWxseT5cclxuICAgICAgICAgICAgICAgIHsvKjxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBzdHlsZT17eyBtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgUmV0YWxseSBidXR0b25cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiovfVxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXRhbGx5IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ29fdGFsbHkgPSB0aGlzLmdvX3RhbGx5LmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgYXN5bmMgZ29fdGFsbHkoKXtcclxuICAgICAgICAgICAgLy8weDQyMzA5ZjkyNDIzN0JhYzY2MkFmNjQ5NjVBMmVmQUY4YzA4ZkU0ZDJcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2ViMy51dGlscy5mcm9tQXNjaWkoaGFzaCkpO1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMuY29tcHV0ZSgpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3N0YXR1cy8ke3RoaXMucHJvcHMubWJfYWRkcn0vJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RhZ2UgPD0yICkgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgzPkhhdmUgbm90IHJlYWNoIHRoZSBzdGFnZSBjYW4gVGFsbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBsZWFzZSB3YWl0IGZvciBhIHdoaWxlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbjpcImF1dG9cIn19IG9uQ2xpY2s9e3RoaXMuZ29fdGFsbHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICBSZXRhbGx5IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+eycgJ31cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICB9O1xyXG5cclxuY2xhc3MgVm90ZV9yZXN1bHQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICAvL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMucmVzdWx0cyk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGFnZSA8MyApIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMz5IYXZlIG5vdCByZWFjaCB0aGUgc3RhZ2UgY2FuIFRhbGx5PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz5QbGVhc2Ugd2FpdCBmb3IgYSB3aGlsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPkVsZWN0ZWQgQ2FuZGlkYXRlIDogeyh0aGlzLnByb3BzLnN0YWdlPT00KT90aGlzLnByb3BzLndpbm5lcjpcIndhaXQgZm9yIHRhbGx5XCJ9IDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnt0aGlzLnByb3BzLnN0YWdlX3N0cn08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3B0aW9uJ3MgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RvbCB2b3RlcyB0byB0aGUgb3B0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmVzdWx0cy5tYXAocmVzdWx0ID0+IDx0cj48Vm90ZV9yZXN1bHRfVW5pdCBkZXRhaWxzPXtyZXN1bHR9PjwvVm90ZV9yZXN1bHRfVW5pdD48L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgfTtcclxuY2xhc3MgVm90ZV9yZXN1bHRfVW5pdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZGV0YWlscy5tYXAoZGV0YWlsID0+IDx0ZD57ZGV0YWlsfTwvdGQ+KX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZvdGVyX2xpc3RRUSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5saXN0KTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpc3QubWFwKChpdGVtLGluZGV4KT0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2luZGV4KzF9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlllczwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1cztcclxuXHJcblxyXG4vKirmmqvmmYLmgKflnoPlnL5cclxuICogPFRhYmxlIHJlc3BvbnNpdmUgc3R5bGU9e3snaGVpZ2h0JzogJzIwMHB4JyxcIndpZHRoXCI6XCI1MCVcIiwgJ292ZXJmbG93WSc6J3Njcm9sbCcsICdkaXNwbGF5JzogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5pdGVtczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5saW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5yZWdpc3RlciBvciBub3Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJ1ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdHVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNhbmRpZGF0ZSAxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxDYXJkLkxpbmsgaHJlZj1cIiNcIj5wb2xpY3k8L0NhcmQuTGluaz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAqLyJdLCJzb3VyY2VSb290IjoiIn0=