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
        var _props$query, address, mb_addr, Vote_event, stage, option_length, result, voter_list, winner, time, correct_time, i, a, options, stage_str, index, temp, arr;

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
                _context.next = 23;
                return Vote_event.methods.return_winner().call();

              case 23:
                winner = _context.sent;
                console.log(winner);
                _context.next = 27;
                return Vote_event.methods.return_time().call();

              case 27:
                time = _context.sent;
                correct_time = [];
                i = 0;

              case 30:
                if (!(i < 4)) {
                  _context.next = 40;
                  break;
                }

                console.log(time[i]);
                _context.next = 34;
                return new Date(time[i] * 1);

              case 34:
                a = _context.sent;
                console.log(a.toString());
                correct_time.push(a.toString());

              case 37:
                i++;
                _context.next = 30;
                break;

              case 40:
                console.log(correct_time);
                time = correct_time;
                options = [];
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                index = 0;

              case 45:
                if (!(index < option_length)) {
                  _context.next = 57;
                  break;
                }

                _context.next = 48;
                return Vote_event.methods.return_options(index).call();

              case 48:
                temp = _context.sent;
                arr = [];
                arr[0] = (index + 1).toString();
                arr[1] = temp;
                arr[2] = result[index];
                options.push(arr);

              case 54:
                index++;
                _context.next = 45;
                break;

              case 57:
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

              case 58:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVnaXN0ZXIiLCJyZWdpc3Rlcl9hbnN3ZXIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImJpbmQiLCJzZWFyY2hfcmVnaXN0ZXIiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzZXRTdGF0ZSIsImluZGV4Iiwidm90ZXJfbGlzdCIsImxlbmd0aCIsIndpZHRoIiwibWJfYWRkciIsImNvbG9yIiwiYWRkcmVzcyIsIm1hcmdpbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJzdGFnZV9zdHIiLCJ0aW1lIiwidW5kZWZpbmVkIiwib3B0aW9ucyIsInN0YWdlIiwid2lubmVyIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidm90ZSIsIlZvdGVfZXZlbnQiLCJtZXRob2RzIiwicmV0dXJuX3N0YWdlIiwiY2FsbCIsInJldHVybl9vcHRpb25zX2xlbmd0aCIsIm9wdGlvbl9sZW5ndGgiLCJyZXR1cm5fcmVzdWx0IiwicmVzdWx0IiwicmV0dXJuX21zZ3NlbmRlcl92b3Rlcl9saXN0IiwicmV0dXJuX3dpbm5lciIsInJldHVybl90aW1lIiwiY29ycmVjdF90aW1lIiwiaSIsIkRhdGUiLCJhIiwidG9TdHJpbmciLCJwdXNoIiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwiYXJyIiwiQ29tcG9uZW50IiwiUmV0YWxseSIsImdvX3RhbGx5Iiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb21wdXRlIiwic2VuZCIsImZyb20iLCJhbGVydCIsIm1lc3NhZ2UiLCJWb3RlX3Jlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJWb3RlX3Jlc3VsdF9Vbml0IiwiZGV0YWlscyIsImRldGFpbCIsIlZvdGVyX2xpc3RRUSIsImxp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S0EsS0FBSyxHQUFDLENBQVgsQ0FEQSxFQUVBLGtCQUFLK0QsSUFBTCxDQUZBLEVBR0Esd0JBSEEsQ0FEaUI7QUFBQSxPQUFwQixDQURELENBREo7QUFXSDs7OztFQWRzQnBCLCtDOztBQWlCWjFELHFFQUFmO0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXHN0YXR1cy5qcy43MDExODRlNGYxZGQzNTg2N2FlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7Q2FyZCxUYWJsZX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0U2hhZG93U2Nyb2xsIGZyb20gJ3JlYWN0LXNoYWRvdy1zY3JvbGwnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5cclxuY2xhc3MgU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHNlYXJjaCA6IFwiXCIsXHJcbiAgICAgICAgICByZWdpc3RlciA6IFwiXCIsXHJcbiAgICAgICAgICByZWdpc3Rlcl9hbnN3ZXIgOiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoX3JlZ2lzdGVyID0gdGhpcy5zZWFyY2hfcmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0e2FkZHJlc3MsbWJfYWRkcn0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzLG1iX2FkZHIpO1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPSBhd2FpdCB2b3RlKGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFZvdGVfZXZlbnQpO1xyXG4gICAgICAgIGNvbnN0IHN0YWdlID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9zdGFnZSgpLmNhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGFnZSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX2xlbmd0aCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9uc19sZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uX2xlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9yZXN1bHQoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFZvdGVfZXZlbnQpO1xyXG4gICAgICAgIGxldCB2b3Rlcl9saXN0ID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9tc2dzZW5kZXJfdm90ZXJfbGlzdCgpLmNhbGwoKTtcclxuICAgICAgICBsZXQgd2lubmVyID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl93aW5uZXIoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyKTtcclxuICAgICAgICBsZXQgdGltZSA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fdGltZSgpLmNhbGwoKTtcclxuICAgICAgICBsZXQgY29ycmVjdF90aW1lID1bXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8NDtpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGltZVtpXSk7XHJcbiAgICAgICAgICAgIGxldCBhID1hd2FpdCBuZXcgRGF0ZSh0aW1lW2ldKjEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBjb3JyZWN0X3RpbWUucHVzaChhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjb3JyZWN0X3RpbWUpO1xyXG4gICAgICAgIHRpbWUgPSBjb3JyZWN0X3RpbWU7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhZ2Vfc3RyID0gIChzdGFnZSA9PSAwKT9cInN0YWdlIDogU2V0dXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDEpP1wic3RhZ2UgOiBSZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMik/XCJzdGFnZSA6IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDMpP1wic3RhZ2UgOiBUYWxseVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gNCk/XCJzdGFnZSA6IEZpbmlzaFwiOlwic3RhZ2UgOiBTZXR1cFwiO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9uX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9ucyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGFyclswXSA9IChpbmRleCsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhcnJbMV0gPSB0ZW1wO1xyXG4gICAgICAgICAgICBhcnJbMl0gPSByZXN1bHRbaW5kZXhdO1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybnthZGRyZXNzLG1iX2FkZHIsc3RhZ2UscmVzdWx0LG9wdGlvbnMsc3RhZ2Vfc3RyLHZvdGVyX2xpc3Qsd2lubmVyLHRpbWV9O1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKVxyXG4gICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9zdGF0dXMvJHt0aGlzLnN0YXRlLnNlYXJjaH1gKTtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgIH1cclxuICAgIHNlYXJjaF9yZWdpc3Rlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucmVnaXN0ZXIgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlcjpcIlwifSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucHJvcHMudm90ZXJfbGlzdC5sZW5ndGg7aW5kZXgrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVnaXN0ZXIgPT0gdGhpcy5wcm9wcy52b3Rlcl9saXN0W2luZGV4XSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXI6XCJBbHJlYWR5IFJlZ2lzdGVyZWQgIVwifSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlcjpcIlwifSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlZ2lzdGVyX2Fuc3dlcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyIDogXCJWb3RlciBub3QgZm91bmQgIVwifSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6XCJcIn0pO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyOlwiXCJ9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgIDxOYXZiYXIuQnJhbmQgPlZvdGU8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9ob21lL1wiKyB0aGlzLnByb3BzLm1iX2FkZHIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+SG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9zdGF0dXMvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMuYWRkcmVzc30gPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+Vm90ZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9pbmRleFwiIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkxvZ291dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPEZvcm0gaW5saW5lIHN0eWxlPXt7bWFyZ2luIDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3IgOiBcIndoaXRlXCJ9fSA+IGluc2VydCB5b3VyIHZvdGUgY29udHJhY3QgYWRkcmVzcyBoZXJlICAtJmd0OyAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiBcclxuICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gXHJcbiAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2g6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5yZWZyZXNoX3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0NiUnICwgbWFyZ2luOiAnMS41JScgLGhlaWdodDogJzMwJScgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5FbGlnaWJsZSBWb3RlcnM8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj52b3RlciBxdWFudGl0eSA6IHt0aGlzLnByb3BzLnZvdGVyX2xpc3QubGVuZ3RofTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17e21hcmdpbiA6XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWdpc3Rlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtyZWdpc3RlcjpldmVudC50YXJnZXQudmFsdWV9KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXt0aGlzLnNlYXJjaF9yZWdpc3Rlcn0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiIHN0eWxlPXt7bWFyZ2luVG9wIDpcIjElXCIsbWFyZ2luIDpcIjIlXCJ9fT57dGhpcy5zdGF0ZS5yZWdpc3Rlcl9hbnN3ZXJ9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNpdmUgc3R5bGU9e3snaGVpZ2h0JzogJzIwMHB4JyxcIndpZHRoXCI6XCIxMDAlXCIsICdvdmVyZmxvd1knOidzY3JvbGwnLCAnZGlzcGxheSc6ICdibG9jayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Vm90aW5nIEFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXIgb3Igbm90PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZvdGVyX2xpc3RRUSBsaXN0ID17dGhpcy5wcm9wcy52b3Rlcl9saXN0fT48L1ZvdGVyX2xpc3RRUT5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICc0NiUnICwgbWFyZ2luOiAnMS41JSd9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlZvdGluZyBJbGx1c3RyYXRpb248L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5Wb3RlIGFkZHJlc3MgOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnt0aGlzLnByb3BzLnN0YWdlX3N0cn08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgdGhlIGxhdGVzdCAyMDIwIHByZXNpZGVudGlhbCBwb2xscyBhbmQgaGVhZC10by1oZWFkIG1hdGNoLXVwIGJldHdlZW4gSm9lIEJpZGVuIGFuZCBEb25hbGQgVHJ1bXAuIEZvciBtb3JlIGluZm9ybWF0aW9uLCB2aWV3IGNubi5jb20vZWxlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlIHN0eWxlPXt7J2hlaWdodCc6ICcyMDBweCcsXCJ3aWR0aFwiOlwiMTAwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXJ0IHRpbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW5kIHRpbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXIgdGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+eyh0aGlzLnByb3BzLnRpbWUgIT09IHVuZGVmaW5lZCk/dGhpcy5wcm9wcy50aW1lWzBdOlwiXCJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57KHRoaXMucHJvcHMudGltZSAhPT0gdW5kZWZpbmVkKT90aGlzLnByb3BzLnRpbWVbMV06XCJcIn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Vm90ZSB0aW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57KHRoaXMucHJvcHMudGltZSAhPT0gdW5kZWZpbmVkKT90aGlzLnByb3BzLnRpbWVbMl06XCJcIn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnsodGhpcy5wcm9wcy50aW1lICE9PSB1bmRlZmluZWQpP3RoaXMucHJvcHMudGltZVszXTpcIlwifTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Wb3RpbmcgcmVzdWx0PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+VGhlIFZvdGUgcmVzdWx0IGlzIHNob3duIGJlbG93PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vm90ZV9yZXN1bHQgcmVzdWx0cyA9IHt0aGlzLnByb3BzLm9wdGlvbnN9IHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX0gd2lubmVyPXt0aGlzLnByb3BzLndpbm5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlX3N0cj17dGhpcy5wcm9wcy5zdGFnZV9zdHJ9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZvdGVfcmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5SZXRhbGx5PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+WW91IGNhbiByZXRhbGx5IHRoZSB2b3RlIGZvciBhc3N1cmluZyB0aGUgcmVzdWx0PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFJldGFsbHkgc3RhZ2UgPSB7dGhpcy5wcm9wcy5zdGFnZX0gYWRkcmVzcyA9IHt0aGlzLnByb3BzLmFkZHJlc3N9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9SZXRhbGx5PlxyXG4gICAgICAgICAgICAgICAgey8qPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICBSZXRhbGx5IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+Ki99XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJldGFsbHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nb190YWxseSA9IHRoaXMuZ29fdGFsbHkuYmluZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICBhc3luYyBnb190YWxseSgpe1xyXG4gICAgICAgICAgICAvLzB4NDIzMDlmOTI0MjM3QmFjNjYyQWY2NDk2NUEyZWZBRjhjMDhmRTRkMlxyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWIzLnV0aWxzLmZyb21Bc2NpaShoYXNoKSk7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5jb21wdXRlKCkuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvc3RhdHVzLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGFnZSA8PTIgKSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDM+SGF2ZSBub3QgcmVhY2ggdGhlIHN0YWdlIGNhbiBUYWxseTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDM+UGxlYXNlIHdhaXQgZm9yIGEgd2hpbGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgc3R5bGU9e3sgbWFyZ2luOlwiYXV0b1wifX0gb25DbGljaz17dGhpcy5nb190YWxseX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIFJldGFsbHkgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG5jbGFzcyBWb3RlX3Jlc3VsdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIC8vY29uc3Qgdm90ZV9idG4gPWZ1bmN0aW9uIChzdGFnZSApe1xyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5yZXN1bHRzKTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YWdlIDwzICkgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgzPkhhdmUgbm90IHJlYWNoIHRoZSBzdGFnZSBjYW4gVGFsbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBsZWFzZSB3YWl0IGZvciBhIHdoaWxlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+RWxlY3RlZCBDYW5kaWRhdGUgOiB7KHRoaXMucHJvcHMuc3RhZ2U9PTQpP3RoaXMucHJvcHMud2lubmVyOlwid2FpdCBmb3IgdGFsbHlcIn0gPC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PcHRpb24ncyBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdG9sIHZvdGVzIHRvIHRoZSBvcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXN1bHRzLm1hcChyZXN1bHQgPT4gPHRyPjxWb3RlX3Jlc3VsdF9Vbml0IGRldGFpbHM9e3Jlc3VsdH0+PC9Wb3RlX3Jlc3VsdF9Vbml0PjwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICB9O1xyXG5jbGFzcyBWb3RlX3Jlc3VsdF9Vbml0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXRhaWxzLm1hcChkZXRhaWwgPT4gPHRkPntkZXRhaWx9PC90ZD4pfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVm90ZXJfbGlzdFFRIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmxpc3QpO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoKGl0ZW0saW5kZXgpPT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57aW5kZXgrMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpdGVtfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+WWVzPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzO1xyXG5cclxuXHJcbi8qKuaaq+aZguaAp+Weg+WcvlxyXG4gKiA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjUwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPml0ZW1zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmxpbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnJlZ2lzdGVyIG9yIG5vdDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcnVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm90ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2FuZGlkYXRlIDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PENhcmQuTGluayBocmVmPVwiI1wiPnBvbGljeTwvQ2FyZC5MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==