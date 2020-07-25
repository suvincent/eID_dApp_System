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
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "Start time"), __jsx("th", null, "End time"))), __jsx("tbody", null, __jsx("tr", null, __jsx("th", null, "Register time"), __jsx("th", null, this.props.time !== undefined ? this.props.time[0].getDate() : ""), __jsx("th", null, this.props.time !== undefined ? this.props.time[1] : "")), __jsx("tr", null, __jsx("th", null, "Vote time"), __jsx("th", null, this.props.time !== undefined ? this.props.time[2] : ""), __jsx("th", null, this.props.time !== undefined ? this.props.time[3] : "")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
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
        var _props$query, address, mb_addr, Vote_event, stage, option_length, result, voter_list, winner, time, correct_time, item, options, stage_str, index, temp, arr;

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
                console.log(winner);
                _context.next = 22;
                return Vote_event.methods.return_time().call();

              case 22:
                time = _context.sent;
                correct_time = [];

                for (item in time) {
                  correct_time.push(new Date(item));
                }

                console.log(correct_time);
                time = correct_time;
                options = [];
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                index = 0;

              case 30:
                if (!(index < option_length)) {
                  _context.next = 42;
                  break;
                }

                _context.next = 33;
                return Vote_event.methods.return_options(index).call();

              case 33:
                temp = _context.sent;
                arr = [];
                arr[0] = (index + 1).toString();
                arr[1] = temp;
                arr[2] = result[index];
                options.push(arr);

              case 39:
                index++;
                _context.next = 30;
                break;

              case 42:
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

              case 43:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVnaXN0ZXIiLCJyZWdpc3Rlcl9hbnN3ZXIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImJpbmQiLCJzZWFyY2hfcmVnaXN0ZXIiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzZXRTdGF0ZSIsImluZGV4Iiwidm90ZXJfbGlzdCIsImxlbmd0aCIsIndpZHRoIiwibWJfYWRkciIsImNvbG9yIiwiYWRkcmVzcyIsIm1hcmdpbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJzdGFnZV9zdHIiLCJ0aW1lIiwidW5kZWZpbmVkIiwiZ2V0RGF0ZSIsIm9wdGlvbnMiLCJzdGFnZSIsIndpbm5lciIsInF1ZXJ5Iiwidm90ZSIsIlZvdGVfZXZlbnQiLCJtZXRob2RzIiwicmV0dXJuX3N0YWdlIiwiY2FsbCIsInJldHVybl9vcHRpb25zX2xlbmd0aCIsIm9wdGlvbl9sZW5ndGgiLCJyZXR1cm5fcmVzdWx0IiwicmVzdWx0IiwicmV0dXJuX21zZ3NlbmRlcl92b3Rlcl9saXN0IiwicmV0dXJuX3dpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJyZXR1cm5fdGltZSIsImNvcnJlY3RfdGltZSIsIml0ZW0iLCJwdXNoIiwiRGF0ZSIsInJldHVybl9vcHRpb25zIiwidGVtcCIsImFyciIsInRvU3RyaW5nIiwiQ29tcG9uZW50IiwiUmV0YWxseSIsImdvX3RhbGx5Iiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb21wdXRlIiwic2VuZCIsImZyb20iLCJhbGVydCIsIm1lc3NhZ2UiLCJWb3RlX3Jlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJWb3RlX3Jlc3VsdF9Vbml0IiwiZGV0YWlscyIsImRldGFpbCIsIlZvdGVyX2xp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SSxrQkFDQSxzQkFEQSxFQUVBLGtDQUZBLEVBR0EsOENBSEEsQ0FESixDQURKLEVBUUkscUJBQ0ssS0FBSzNCLEtBQUwsQ0FBV3NFLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUE1QixNQUFNO0FBQUEsZUFBSSxrQkFBSSxNQUFDLGdCQUFEO0FBQWtCLGlCQUFPLEVBQUVBO0FBQTNCLFVBQUosQ0FBSjtBQUFBLE9BQTdCLENBREwsQ0FSSixDQUhBLENBREo7QUFrQkg7Ozs7RUE5QmlCYywrQzs7QUErQnZCOztJQUNHZSxnQjs7Ozs7Ozs7Ozs7Ozs2QkFDTTtBQUNKLGFBQ0ksbUVBQ0MsS0FBS3hFLEtBQUwsQ0FBV3lFLE9BQVgsQ0FBbUJGLEdBQW5CLENBQXVCLFVBQUFHLE1BQU07QUFBQSxlQUFJLGtCQUFLQSxNQUFMLENBQUo7QUFBQSxPQUE3QixDQURELENBREo7QUFLSDs7OztFQVAwQmpCLCtDOztJQVN6QmtCLFk7Ozs7Ozs7Ozs7Ozs7NkJBQ007QUFDSjtBQUNBLGFBQ0ksbUVBQ0MsS0FBSzNFLEtBQUwsQ0FBVzRFLElBQVgsQ0FBZ0JMLEdBQWhCLENBQW9CLFVBQUNyQixJQUFELEVBQU1wQyxLQUFOO0FBQUEsZUFDakIsa0JBQ0Esa0JBQUtBLEtBQUssR0FBQyxDQUFYLENBREEsRUFFQSxrQkFBS29DLElBQUwsQ0FGQSxFQUdBLHdCQUhBLENBRGlCO0FBQUEsT0FBcEIsQ0FERCxDQURKO0FBV0g7Ozs7RUFkc0JPLCtDOztBQWlCWjFELHFFQUFmO0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXHN0YXR1cy5qcy43OWUzY2U3MjgyMjdkZWRiN2JlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7Q2FyZCxUYWJsZX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0U2hhZG93U2Nyb2xsIGZyb20gJ3JlYWN0LXNoYWRvdy1zY3JvbGwnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5cclxuY2xhc3MgU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHNlYXJjaCA6IFwiXCIsXHJcbiAgICAgICAgICByZWdpc3RlciA6IFwiXCIsXHJcbiAgICAgICAgICByZWdpc3Rlcl9hbnN3ZXIgOiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoX3JlZ2lzdGVyID0gdGhpcy5zZWFyY2hfcmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0e2FkZHJlc3MsbWJfYWRkcn0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHN0YWdlID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9zdGFnZSgpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBvcHRpb25fbGVuZ3RoID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zX2xlbmd0aCgpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3Jlc3VsdCgpLmNhbGwoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFZvdGVfZXZlbnQpO1xyXG4gICAgICAgIGxldCB2b3Rlcl9saXN0ID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9tc2dzZW5kZXJfdm90ZXJfbGlzdCgpLmNhbGwoKTtcclxuICAgICAgICBsZXQgd2lubmVyID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl93aW5uZXIoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyKTtcclxuICAgICAgICBsZXQgdGltZSA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fdGltZSgpLmNhbGwoKTtcclxuICAgICAgICBsZXQgY29ycmVjdF90aW1lID1bXTtcclxuICAgICAgICBmb3IobGV0IGl0ZW0gaW4gdGltZSkge1xyXG4gICAgICAgICAgICBjb3JyZWN0X3RpbWUucHVzaChuZXcgRGF0ZShpdGVtKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvcnJlY3RfdGltZSk7XHJcbiAgICAgICAgdGltZSA9IGNvcnJlY3RfdGltZTtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFnZV9zdHIgPSAgKHN0YWdlID09IDApP1wic3RhZ2UgOiBTZXR1cFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMSk/XCJzdGFnZSA6IFJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAyKT9cInN0YWdlIDogVm90ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMyk/XCJzdGFnZSA6IFRhbGx5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSA0KT9cInN0YWdlIDogRmluaXNoXCI6XCJzdGFnZSA6IFNldHVwXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25fbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgYXJyWzBdID0gKGluZGV4KzEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGFyclsxXSA9IHRlbXA7XHJcbiAgICAgICAgICAgIGFyclsyXSA9IHJlc3VsdFtpbmRleF07XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJue2FkZHJlc3MsbWJfYWRkcixzdGFnZSxyZXN1bHQsb3B0aW9ucyxzdGFnZV9zdHIsdm90ZXJfbGlzdCx3aW5uZXIsdGltZX07XHJcbiAgICB9XHJcbiAgICByZWZyZXNoX3NlYXJjaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoICE9IFwiXCIpXHJcbiAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3N0YXR1cy8ke3RoaXMuc3RhdGUuc2VhcmNofWApO1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgfVxyXG4gICAgc2VhcmNoX3JlZ2lzdGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5yZWdpc3RlciA9PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyOlwiXCJ9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5wcm9wcy52b3Rlcl9saXN0Lmxlbmd0aDtpbmRleCsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5yZWdpc3RlciA9PSB0aGlzLnByb3BzLnZvdGVyX2xpc3RbaW5kZXhdKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlcjpcIkFscmVhZHkgUmVnaXN0ZXJlZCAhXCJ9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyOlwiXCJ9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUucmVnaXN0ZXJfYW5zd2VyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXIgOiBcIlZvdGVyIG5vdCBmb3VuZCAhXCJ9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlcjpcIlwifSk7XHJcbiAgICAgICAgLy90aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXI6XCJcIn0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcInN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgPE5hdmJhci5CcmFuZCA+Vm90ZTwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2hvbWUvXCIrIHRoaXMucHJvcHMubWJfYWRkciB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL3N0YXR1cy9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5hZGRyZXNzfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Wb3RlPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2luZGV4XCIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+TG9nb3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3ttYXJnaW4gOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvciA6IFwid2hpdGVcIn19ID4gaW5zZXJ0IHlvdXIgdm90ZSBjb250cmFjdCBhZGRyZXNzIGhlcmUgIC0mZ3Q7ICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIFxyXG4gICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpldmVudC50YXJnZXQudmFsdWV9KX0vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hfc2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJyAsaGVpZ2h0OiAnMzAlJyB9fT5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkVsaWdpYmxlIFZvdGVyczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnZvdGVyIHF1YW50aXR5IDoge3RoaXMucHJvcHMudm90ZXJfbGlzdC5sZW5ndGh9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gaW5saW5lIHN0eWxlPXt7bWFyZ2luIDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlZ2lzdGVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyOmV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoX3JlZ2lzdGVyfT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCIgc3R5bGU9e3ttYXJnaW5Ub3AgOlwiMSVcIixtYXJnaW4gOlwiMiVcIn19Pnt0aGlzLnN0YXRlLnJlZ2lzdGVyX2Fuc3dlcn08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjEwMCVcIiwgJ292ZXJmbG93WSc6J3Njcm9sbCcsICdkaXNwbGF5JzogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Wb3RpbmcgQWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZWdpc3RlciBvciBub3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vm90ZXJfbGlzdFFRIGxpc3QgPXt0aGlzLnByb3BzLnZvdGVyX2xpc3R9PjwvVm90ZXJfbGlzdFFRPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Vm90aW5nIElsbHVzdHJhdGlvbjwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlZvdGUgYWRkcmVzcyA6IHt0aGlzLnByb3BzLmFkZHJlc3N9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyB0aGUgbGF0ZXN0IDIwMjAgcHJlc2lkZW50aWFsIHBvbGxzIGFuZCBoZWFkLXRvLWhlYWQgbWF0Y2gtdXAgYmV0d2VlbiBKb2UgQmlkZW4gYW5kIERvbmFsZCBUcnVtcC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHZpZXcgY25uLmNvbS9lbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNpdmUgc3R5bGU9e3snaGVpZ2h0JzogJzIwMHB4JyxcIndpZHRoXCI6XCIxMDAlXCIsICdvdmVyZmxvd1knOidzY3JvbGwnLCAnZGlzcGxheSc6ICdibG9jayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhcnQgdGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbmQgdGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZWdpc3RlciB0aW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57KHRoaXMucHJvcHMudGltZSAhPT0gdW5kZWZpbmVkKT90aGlzLnByb3BzLnRpbWVbMF0uZ2V0RGF0ZSgpOlwiXCJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57KHRoaXMucHJvcHMudGltZSAhPT0gdW5kZWZpbmVkKT90aGlzLnByb3BzLnRpbWVbMV06XCJcIn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Vm90ZSB0aW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57KHRoaXMucHJvcHMudGltZSAhPT0gdW5kZWZpbmVkKT90aGlzLnByb3BzLnRpbWVbMl06XCJcIn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnsodGhpcy5wcm9wcy50aW1lICE9PSB1bmRlZmluZWQpP3RoaXMucHJvcHMudGltZVszXTpcIlwifTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Wb3RpbmcgcmVzdWx0PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+VGhlIFZvdGUgcmVzdWx0IGlzIHNob3duIGJlbG93PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vm90ZV9yZXN1bHQgcmVzdWx0cyA9IHt0aGlzLnByb3BzLm9wdGlvbnN9IHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX0gd2lubmVyPXt0aGlzLnByb3BzLndpbm5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlX3N0cj17dGhpcy5wcm9wcy5zdGFnZV9zdHJ9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZvdGVfcmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5SZXRhbGx5PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+WW91IGNhbiByZXRhbGx5IHRoZSB2b3RlIGZvciBhc3N1cmluZyB0aGUgcmVzdWx0PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFJldGFsbHkgc3RhZ2UgPSB7dGhpcy5wcm9wcy5zdGFnZX0gYWRkcmVzcyA9IHt0aGlzLnByb3BzLmFkZHJlc3N9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9SZXRhbGx5PlxyXG4gICAgICAgICAgICAgICAgey8qPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbjpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICBSZXRhbGx5IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+Ki99XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJldGFsbHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nb190YWxseSA9IHRoaXMuZ29fdGFsbHkuYmluZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICBhc3luYyBnb190YWxseSgpe1xyXG4gICAgICAgICAgICAvLzB4NDIzMDlmOTI0MjM3QmFjNjYyQWY2NDk2NUEyZWZBRjhjMDhmRTRkMlxyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWIzLnV0aWxzLmZyb21Bc2NpaShoYXNoKSk7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5jb21wdXRlKCkuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvc3RhdHVzLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGFnZSA8PTIgKSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDM+SGF2ZSBub3QgcmVhY2ggdGhlIHN0YWdlIGNhbiBUYWxseTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDM+UGxlYXNlIHdhaXQgZm9yIGEgd2hpbGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgc3R5bGU9e3sgbWFyZ2luOlwiYXV0b1wifX0gb25DbGljaz17dGhpcy5nb190YWxseX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIFJldGFsbHkgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG5jbGFzcyBWb3RlX3Jlc3VsdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIC8vY29uc3Qgdm90ZV9idG4gPWZ1bmN0aW9uIChzdGFnZSApe1xyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5yZXN1bHRzKTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YWdlIDwzICkgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgzPkhhdmUgbm90IHJlYWNoIHRoZSBzdGFnZSBjYW4gVGFsbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBsZWFzZSB3YWl0IGZvciBhIHdoaWxlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+RWxlY3RlZCBDYW5kaWRhdGUgOiB7KHRoaXMucHJvcHMuc3RhZ2U9PTQpP3RoaXMucHJvcHMud2lubmVyOlwid2FpdCBmb3IgdGFsbHlcIn0gPC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PcHRpb24ncyBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdG9sIHZvdGVzIHRvIHRoZSBvcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXN1bHRzLm1hcChyZXN1bHQgPT4gPHRyPjxWb3RlX3Jlc3VsdF9Vbml0IGRldGFpbHM9e3Jlc3VsdH0+PC9Wb3RlX3Jlc3VsdF9Vbml0PjwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICB9O1xyXG5jbGFzcyBWb3RlX3Jlc3VsdF9Vbml0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXRhaWxzLm1hcChkZXRhaWwgPT4gPHRkPntkZXRhaWx9PC90ZD4pfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVm90ZXJfbGlzdFFRIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmxpc3QpO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoKGl0ZW0saW5kZXgpPT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57aW5kZXgrMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpdGVtfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+WWVzPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzO1xyXG5cclxuXHJcbi8qKuaaq+aZguaAp+Weg+WcvlxyXG4gKiA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjUwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPml0ZW1zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmxpbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnJlZ2lzdGVyIG9yIG5vdDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcnVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm90ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2FuZGlkYXRlIDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PENhcmQuTGluayBocmVmPVwiI1wiPnBvbGljeTwvQ2FyZC5MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==