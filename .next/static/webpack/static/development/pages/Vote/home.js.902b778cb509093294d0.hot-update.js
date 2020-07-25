webpackHotUpdate("static\\development\\pages\\Vote\\home.js",{

/***/ "./pages/Vote/home.js":
/*!****************************!*\
  !*** ./pages/Vote/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
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
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Vote_mailbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/Vote/mailbox */ "./ethereum/Vote/mailbox.js");
/* harmony import */ var _ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ethereum/Vote/vote */ "./ethereum/Vote/vote.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

//做一個頁面是沒有mailbox時要新增一個mailbox












 //const header = ["#", "vote name", "vote address", "due date", "link"];

var Join = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Join, _Component);

  var _super = _createSuper(Join);

  function Join() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Join);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Join, [{
    key: "render",
    //{this.props.joins.map(item => <td>{item}</td>)}
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("td", null, this.props.joins[0]), __jsx("td", null, this.props.joins[1]), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/vote/" + this.props.mb_addr + "/" + this.props.joins[2]
      }, this.props.joins[2])), __jsx("td", null, this.props.joins[3]), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/status/" + this.props.mb_addr + "/" + this.props.joins[4]
      }, "link")));
    }
  }]);

  return Join;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Join_list = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Join_list, _Component2);

  var _super2 = _createSuper(Join_list);

  function Join_list() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Join_list);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Join_list, [{
    key: "render",
    //const vote_btn =function (stage ){
    value: function render() {
      var _this = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.list.map(function (key) {
        return __jsx("tr", null, __jsx(Join, {
          joins: key,
          mb_addr: _this.props.mb_addr
        }));
      }));
    }
  }]);

  return Join_list;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;

var Self = /*#__PURE__*/function (_Component3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Self, _Component3);

  var _super3 = _createSuper(Self);

  //{this.props.joins.map(item => <td>{item}</td>)}
  function Self(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Self);

    _this2 = _super3.call(this, props);
    _this2.next = _this2.next.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Self, [{
    key: "next",
    value: function () {
      var _next = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var current_stage, v_address, accounts, Vote_event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                current_stage = this.props.selfs[4];
                v_address = this.props.selfs[2];
                _context.next = 4;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 4:
                accounts = _context.sent;
                _context.next = 7;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(v_address);

              case 7:
                Vote_event = _context.sent;

                if (!(current_stage == 0)) {
                  _context.next = 20;
                  break;
                }

                _context.prev = 9;
                _context.next = 12;
                return Vote_event.methods.set_can_register().send({
                  from: accounts[0]
                });

              case 12:
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/home/".concat(this.props.mb_addr));
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](9);
                alert(_context.t0);

              case 18:
                _context.next = 45;
                break;

              case 20:
                if (!(current_stage == 1)) {
                  _context.next = 32;
                  break;
                }

                _context.prev = 21;
                _context.next = 24;
                return Vote_event.methods.set_can_vote().send({
                  from: accounts[0]
                });

              case 24:
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/home/".concat(this.props.mb_addr));
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t1 = _context["catch"](21);
                alert(_context.t1);

              case 30:
                _context.next = 45;
                break;

              case 32:
                if (!(current_stage == 2)) {
                  _context.next = 44;
                  break;
                }

                _context.prev = 33;
                _context.next = 36;
                return Vote_event.methods.set_can_tally().send({
                  from: accounts[0]
                });

              case 36:
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/home/".concat(this.props.mb_addr));
                _context.next = 42;
                break;

              case 39:
                _context.prev = 39;
                _context.t2 = _context["catch"](33);
                alert(_context.t2);

              case 42:
                _context.next = 45;
                break;

              case 44:
                //tally and finish
                alert("current stage don't need other setting");

              case 45:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[9, 15], [21, 27], [33, 39]]);
      }));

      function next() {
        return _next.apply(this, arguments);
      }

      return next;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("td", null, this.props.selfs[0]), __jsx("td", null, this.props.selfs[1]), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/vote/" + this.props.mb_addr + "/" + this.props.selfs[2]
      }, this.props.selfs[2])), __jsx("td", null, this.props.selfs[3]), __jsx("td", null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        onClick: this.next
      }, this.props.selfs[4] == 0 ? "Set Register" : this.props.selfs[4] == 1 ? "Set Vote" : this.props.selfs[4] == 2 ? "Set Tally" : this.props.selfs[4] == 3 ? "Setting finish" : "Finish")), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/status/" + this.props.mb_addr + "/" + this.props.selfs[2]
      }, "link")), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/admin/" + this.props.mb_addr + "/" + this.props.selfs[2]
      }, "link")));
    }
  }]);

  return Self;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Self_list = /*#__PURE__*/function (_Component4) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Self_list, _Component4);

  var _super4 = _createSuper(Self_list);

  function Self_list() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Self_list);

    return _super4.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Self_list, [{
    key: "render",
    //const vote_btn =function (stage ){
    value: function render() {
      var _this3 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.list.map(function (self) {
        return __jsx("tr", null, __jsx(Self, {
          selfs: self,
          mb_addr: _this3.props.mb_addr
        }));
      }));
    }
  }]);

  return Self_list;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;

var Home = /*#__PURE__*/function (_Component5) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component5);

  var _super5 = _createSuper(Home);

  function Home(props) {
    var _this4;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Home);

    _this4 = _super5.call(this, props);
    _this4.state = {
      // Mb_addr :props.query.address,
      search: "",
      addr: "",
      loading: false,
      loading2: false,
      errorMessage: ''
    };
    _this4.refresh_search = _this4.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4));
    _this4.create_vote = _this4.create_vote.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4));
    _this4.add_list = _this4.add_list.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4));
    return _this4;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/vote/".concat(this.props.mb_addr, "/").concat(this.state.search)); //console.log(this.props.address);
    }
  }, {
    key: "create_vote",
    value: function () {
      var _create_vote = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var accounts, Mailbox;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                _context2.next = 5;
                return Object(_ethereum_Vote_mailbox__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props.mb_addr);

              case 5:
                Mailbox = _context2.sent;
                _context2.prev = 6;
                _context2.next = 9;
                return Mailbox.methods.create_vote().send({
                  from: accounts[0]
                });

              case 9:
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/home/".concat(this.props.mb_addr));
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](6);
                alert(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 12]]);
      }));

      function create_vote() {
        return _create_vote.apply(this, arguments);
      }

      return create_vote;
    }()
  }, {
    key: "add_list",
    value: function () {
      var _add_list = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var accounts, Mailbox;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 2:
                accounts = _context3.sent;
                _context3.next = 5;
                return Object(_ethereum_Vote_mailbox__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props.mb_addr);

              case 5:
                Mailbox = _context3.sent;
                _context3.prev = 6;
                _context3.next = 9;
                return Mailbox.methods.add_to_join_list(this.state.addr).send({
                  from: accounts[0]
                });

              case 9:
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/home/".concat(this.props.mb_addr));
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](6);
                alert(_context3.t0);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 12]]);
      }));

      function add_list() {
        return _add_list.apply(this, arguments);
      }

      return add_list;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossOrigin: "anonymous"
      }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bg: "dark",
        variant: "dark",
        style: {
          width: "100%"
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Brand, null, "Vote"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mr-auto",
        style: {
          width: "50%"
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/index"
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Logout"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true
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
          return _this5.setState({
            search: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "outline-info",
        onClick: this.refresh_search
      }, "Search"))), __jsx("div", {
        style: {
          width: '100%'
        }
      }, __jsx("h2", {
        style: {
          width: '75%',
          margin: "auto",
          marginTop: "3%"
        }
      }, "Vote List (the vote you are invited)", __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true
      }, __jsx("h4", null, " add vote contract address to list  ->   "), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "text",
        placeholder: "add",
        className: "mr-sm-2",
        value: this.state.addr,
        onChange: function onChange(event) {
          return _this5.setState({
            addr: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        onClick: this.add_list
      }, "Add"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        striped: true,
        bordered: true,
        hover: true,
        size: "sm",
        style: {
          width: '75%',
          margin: "auto",
          marginTop: "3%"
        }
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "vote name"), __jsx("th", null, "vote address"), __jsx("th", null, "due date"), __jsx("th", null, "status"))), __jsx("tbody", null, __jsx(Join_list, {
        list: this.props.join_detail,
        mb_addr: this.props.mb_addr
      })))), __jsx("div", {
        style: {
          width: '100%'
        }
      }, __jsx("h2", {
        style: {
          width: '75%',
          margin: "auto",
          marginTop: "3%"
        }
      }, "Vote Admin List (the vote you create)", __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        onClick: this.create_vote
      }, "create new vote")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        striped: true,
        bordered: true,
        hover: true,
        size: "sm",
        style: {
          width: '75%',
          margin: "auto",
          marginTop: "3%"
        }
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "vote name"), __jsx("th", null, "vote address"), __jsx("th", null, "next step due date"), __jsx("th", null, "nextstep"), __jsx("th", null, "status"), __jsx("th", null, "set question"))), __jsx("tbody", null, __jsx(Self_list, {
        list: this.props.self_detail,
        mb_addr: this.props.mb_addr
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(props) {
        var mb_addr, Mailbox, join, join_detail, index, arr, v_addr, v, self, self_detail, _index, _arr, _v_addr, _v;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //const{mbaddr} = props.query;
                mb_addr = props.query.mb_addr; //const accounts = await web3.eth.getAccounts();

                Mailbox = Object(_ethereum_Vote_mailbox__WEBPACK_IMPORTED_MODULE_17__["default"])(mb_addr);
                console.log(mb_addr);
                _context4.next = 5;
                return Mailbox.methods.return_join_list().call();

              case 5:
                join = _context4.sent;
                //console.log(join);
                //console.log(join.length);
                join_detail = [];
                index = 0;

              case 8:
                if (!(index < join.length)) {
                  _context4.next = 23;
                  break;
                }

                arr = [];
                v_addr = join[index];
                v = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(v_addr);
                arr[0] = (index + 1).toString();
                _context4.next = 15;
                return v.methods.return_question().call();

              case 15:
                arr[1] = _context4.sent;
                arr[2] = v_addr; //let t = await v.methods.return_time().call();
                //console.log(t);

                arr[3] = "today";
                arr[4] = v_addr;
                join_detail[index] = arr;

              case 20:
                index++;
                _context4.next = 8;
                break;

              case 23:
                _context4.next = 25;
                return Mailbox.methods.return_self_list().call();

              case 25:
                self = _context4.sent;
                self_detail = [];
                _index = 0;

              case 28:
                if (!(_index < self.length)) {
                  _context4.next = 45;
                  break;
                }

                _arr = [];
                _v_addr = self[_index];
                _v = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(_v_addr);
                _arr[0] = (_index + 1).toString();
                _context4.next = 35;
                return _v.methods.return_question().call();

              case 35:
                _arr[1] = _context4.sent;
                _arr[2] = _v_addr; //arr[3] = await v.methods.return_time().call();

                _arr[3] = "today";
                _context4.next = 40;
                return _v.methods.return_stage().call();

              case 40:
                _arr[4] = _context4.sent;
                //return stage 之後要set stage
                self_detail[_index] = _arr;

              case 42:
                _index++;
                _context4.next = 28;
                break;

              case 45:
                console.log(self); //console.log(join_detail);

                return _context4.abrupt("return", {
                  mb_addr: mb_addr,
                  join_detail: join_detail,
                  self_detail: self_detail
                });

              case 47:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2hvbWUuanMiXSwibmFtZXMiOlsiSm9pbiIsInByb3BzIiwiam9pbnMiLCJtYl9hZGRyIiwiQ29tcG9uZW50IiwiSm9pbl9saXN0IiwibGlzdCIsIm1hcCIsImtleSIsIlNlbGYiLCJuZXh0IiwiYmluZCIsImN1cnJlbnRfc3RhZ2UiLCJzZWxmcyIsInZfYWRkcmVzcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwidm90ZSIsIlZvdGVfZXZlbnQiLCJtZXRob2RzIiwic2V0X2Nhbl9yZWdpc3RlciIsInNlbmQiLCJmcm9tIiwiUm91dGVyIiwicHVzaFJvdXRlIiwiYWxlcnQiLCJzZXRfY2FuX3ZvdGUiLCJzZXRfY2FuX3RhbGx5IiwiU2VsZl9saXN0Iiwic2VsZiIsIkhvbWUiLCJzdGF0ZSIsInNlYXJjaCIsImFkZHIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImNyZWF0ZV92b3RlIiwiYWRkX2xpc3QiLCJtYWlsYm94IiwiTWFpbGJveCIsImFkZF90b19qb2luX2xpc3QiLCJ3aWR0aCIsImNvbG9yIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiam9pbl9kZXRhaWwiLCJzZWxmX2RldGFpbCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInJldHVybl9qb2luX2xpc3QiLCJjYWxsIiwiam9pbiIsImluZGV4IiwibGVuZ3RoIiwiYXJyIiwidl9hZGRyIiwidiIsInRvU3RyaW5nIiwicmV0dXJuX3F1ZXN0aW9uIiwicmV0dXJuX3NlbGZfbGlzdCIsInJldHVybl9zdGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVB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QkFBTyxFQUFQQSxPQUFEO0FBQVNrRCw2QkFBVyxFQUFYQSxXQUFUO0FBQXFCQyw2QkFBVyxFQUFYQTtBQUFyQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhER2xELCtDOztBQXlMSjRCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxob21lLmpzLjkwMmI3NzhjYjUwOTA5MzI5NGQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+WBmuS4gOWAi+mggemdouaYr+aykuaciW1haWxib3jmmYLopoHmlrDlop7kuIDlgIttYWlsYm94XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmQsVGFibGV9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgbWFpbGJveCBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL21haWxib3gnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG4vL2NvbnN0IGhlYWRlciA9IFtcIiNcIiwgXCJ2b3RlIG5hbWVcIiwgXCJ2b3RlIGFkZHJlc3NcIiwgXCJkdWUgZGF0ZVwiLCBcImxpbmtcIl07XHJcbmNsYXNzIEpvaW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8ve3RoaXMucHJvcHMuam9pbnMubWFwKGl0ZW0gPT4gPHRkPntpdGVtfTwvdGQ+KX1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuam9pbnNbMF19PC90ZD5cclxuICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5qb2luc1sxXX08L3RkPlxyXG4gICAgICAgICAgPHRkPjxMaW5rIHJvdXRlPXtcIi9Wb3RlL3ZvdGUvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMuam9pbnNbMl19ID57dGhpcy5wcm9wcy5qb2luc1syXX08L0xpbms+PC90ZD5cclxuICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5qb2luc1szXX08L3RkPlxyXG4gICAgICAgICAgPHRkPjxMaW5rIHJvdXRlPXtcIi9Wb3RlL3N0YXR1cy9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5qb2luc1s0XX0gPmxpbms8L0xpbms+PC90ZD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBKb2luX2xpc3QgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgLy9jb25zdCB2b3RlX2J0biA9ZnVuY3Rpb24gKHN0YWdlICl7XHJcbiAgICAgIHJlbmRlcigpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmxpc3QubWFwKGtleSA9PiA8dHI+PEpvaW4gam9pbnM9e2tleX0gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT48L0pvaW4+PC90cj4pfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICAgIH1cclxufTtcclxuY2xhc3MgU2VsZiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgLy97dGhpcy5wcm9wcy5qb2lucy5tYXAoaXRlbSA9PiA8dGQ+e2l0ZW19PC90ZD4pfVxyXG4gICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICBhc3luYyBuZXh0KCl7XHJcbiAgICAgICAgY29uc3QgY3VycmVudF9zdGFnZSA9IHRoaXMucHJvcHMuc2VsZnNbNF07XHJcbiAgICAgICAgY29uc3Qgdl9hZGRyZXNzID0gdGhpcy5wcm9wcy5zZWxmc1syXTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZSh2X2FkZHJlc3MpO1xyXG4gICAgICAgIGlmKGN1cnJlbnRfc3RhZ2UgPT0gMCl7Ly9zZXQgdXBcclxuICAgICAgICAgIHRyeXtcclxuICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5zZXRfY2FuX3JlZ2lzdGVyKCkuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9ob21lLyR7dGhpcy5wcm9wcy5tYl9hZGRyfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdXJyZW50X3N0YWdlID09IDEpey8vcmVnaXN0cnlcclxuICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnNldF9jYW5fdm90ZSgpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9ob21lLyR7dGhpcy5wcm9wcy5tYl9hZGRyfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGN1cnJlbnRfc3RhZ2UgPT0gMil7Ly92b3RlXHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5zZXRfY2FuX3RhbGx5KCkuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL2hvbWUvJHt0aGlzLnByb3BzLm1iX2FkZHJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Ugey8vdGFsbHkgYW5kIGZpbmlzaFxyXG4gICAgICAgICAgYWxlcnQoXCJjdXJyZW50IHN0YWdlIGRvbid0IG5lZWQgb3RoZXIgc2V0dGluZ1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgICAgPHRkPnt0aGlzLnByb3BzLnNlbGZzWzBdfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuc2VsZnNbMV19PC90ZD5cclxuICAgICAgICAgIDx0ZD48TGluayByb3V0ZT17XCIvVm90ZS92b3RlL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLnNlbGZzWzJdfSA+e3RoaXMucHJvcHMuc2VsZnNbMl19PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuc2VsZnNbM119PC90ZD5cclxuICAgICAgICAgIDx0ZD48QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dH0+XHJcbiAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLnNlbGZzWzRdID09IDApP1wiU2V0IFJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnNlbGZzWzRdID09IDEpP1wiU2V0IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZnNbNF0gPT0gMik/XCJTZXQgVGFsbHlcIjpcclxuICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZnNbNF0gPT0gMyk/XCJTZXR0aW5nIGZpbmlzaFwiOlxyXG4gICAgICAgICAgICAgICBcIkZpbmlzaFwifTwvQnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PExpbmsgcm91dGU9e1wiL1ZvdGUvc3RhdHVzL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLnNlbGZzWzJdfSA+bGluazwvTGluaz48L3RkPlxyXG4gICAgICAgICAgPHRkPjxMaW5rIHJvdXRlPXtcIi9Wb3RlL2FkbWluL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLnNlbGZzWzJdfSA+bGluazwvTGluaz48L3RkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlbGZfbGlzdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAvL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgICAgcmVuZGVyKCl7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoc2VsZiA9PiA8dHI+PFNlbGYgc2VsZnM9e3NlbGZ9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9TZWxmPjwvdHI+KX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgICB9XHJcbn07XHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgLy8gTWJfYWRkciA6cHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgICAgICAgc2VhcmNoIDogXCJcIixcclxuICAgICAgICAgICAgYWRkcjpcIlwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmcyOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoX3NlYXJjaCA9IHRoaXMucmVmcmVzaF9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlX3ZvdGUgPSB0aGlzLmNyZWF0ZV92b3RlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICB0aGlzLmFkZF9saXN0ID0gdGhpcy5hZGRfbGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICAgIC8vY29uc3R7bWJhZGRyfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgICAgY29uc3QgbWJfYWRkciA9IHByb3BzLnF1ZXJ5Lm1iX2FkZHI7XHJcbiAgICAgICAgICAvL2NvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgIGNvbnN0IE1haWxib3ggPSBtYWlsYm94KG1iX2FkZHIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cobWJfYWRkcik7XHJcbiAgICAgICAgICBsZXQgam9pbiA9IGF3YWl0IE1haWxib3gubWV0aG9kcy5yZXR1cm5fam9pbl9saXN0KCkuY2FsbCgpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhqb2luKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coam9pbi5sZW5ndGgpO1xyXG4gICAgICAgICAgdmFyIGpvaW5fZGV0YWlsID0gW107XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgam9pbi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgdl9hZGRyID0gam9pbltpbmRleF07XHJcbiAgICAgICAgICAgIGxldCB2ID0gdm90ZSh2X2FkZHIpO1xyXG4gICAgICAgICAgICBhcnJbMF0gPSAoaW5kZXgrMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgYXJyWzFdID0gYXdhaXQgdi5tZXRob2RzLnJldHVybl9xdWVzdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgYXJyWzJdID0gdl9hZGRyO1xyXG4gICAgICAgICAgICAvL2xldCB0ID0gYXdhaXQgdi5tZXRob2RzLnJldHVybl90aW1lKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHQpO1xyXG4gICAgICAgICAgICBhcnJbM10gPSBcInRvZGF5XCI7XHJcbiAgICAgICAgICAgIGFycls0XSA9IHZfYWRkcjtcclxuICAgICAgICAgICAgam9pbl9kZXRhaWxbaW5kZXhdPWFycjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHNlbGYgPSBhd2FpdCBNYWlsYm94Lm1ldGhvZHMucmV0dXJuX3NlbGZfbGlzdCgpLmNhbGwoKTtcclxuICAgICAgICAgIHZhciBzZWxmX2RldGFpbCA9W107XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2VsZi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9W107XHJcbiAgICAgICAgICAgIGxldCB2X2FkZHIgPSBzZWxmW2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IHYgPSB2b3RlKHZfYWRkcik7XHJcbiAgICAgICAgICAgIGFyclswXSA9IChpbmRleCsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhcnJbMV0gPSBhd2FpdCB2Lm1ldGhvZHMucmV0dXJuX3F1ZXN0aW9uKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBhcnJbMl0gPSB2X2FkZHI7XHJcbiAgICAgICAgICAgIC8vYXJyWzNdID0gYXdhaXQgdi5tZXRob2RzLnJldHVybl90aW1lKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBhcnJbM10gPSBcInRvZGF5XCI7XHJcbiAgICAgICAgICAgIGFycls0XSA9IGF3YWl0IHYubWV0aG9kcy5yZXR1cm5fc3RhZ2UoKS5jYWxsKCk7Ly9yZXR1cm4gc3RhZ2Ug5LmL5b6M6KaBc2V0IHN0YWdlXHJcbiAgICAgICAgICAgIHNlbGZfZGV0YWlsW2luZGV4XT1hcnI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2coc2VsZik7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGpvaW5fZGV0YWlsKTtcclxuICAgICAgICAgIHJldHVybnttYl9hZGRyLGpvaW5fZGV0YWlsLHNlbGZfZGV0YWlsfTtcclxuICAgICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoICE9IFwiXCIpXHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvdm90ZS8ke3RoaXMucHJvcHMubWJfYWRkcn0vJHt0aGlzLnN0YXRlLnNlYXJjaH1gKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjcmVhdGVfdm90ZSgpe1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBjb25zdCBNYWlsYm94ID1hd2FpdCBtYWlsYm94KHRoaXMucHJvcHMubWJfYWRkcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBNYWlsYm94Lm1ldGhvZHMuY3JlYXRlX3ZvdGUoKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL2hvbWUvJHt0aGlzLnByb3BzLm1iX2FkZHJ9YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgYWRkX2xpc3QoKXtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBjb25zdCBNYWlsYm94ID1hd2FpdCBtYWlsYm94KHRoaXMucHJvcHMubWJfYWRkcik7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBhd2FpdCBNYWlsYm94Lm1ldGhvZHMuYWRkX3RvX2pvaW5fbGlzdCh0aGlzLnN0YXRlLmFkZHIpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9ob21lLyR7dGhpcy5wcm9wcy5tYl9hZGRyfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcInN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgPlZvdGU8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9pbmRleFwiIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkxvZ291dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICA8Rm9ybSBpbmxpbmU+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJ3aGl0ZVwifX0gPiBpbmVzcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtzZWFyY2g6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5yZWZyZXNoX3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgIDxoMiBzdHlsZSA9IHt7d2lkdGggOic3NSUnLG1hcmdpbjpcImF1dG9cIixtYXJnaW5Ub3AgOiBcIjMlXCJ9fT5cclxuICAgICAgICAgICBWb3RlIExpc3QgKHRoZSB2b3RlIHlvdSBhcmUgaW52aXRlZClcclxuICAgICAgICAgICA8Rm9ybSBpbmxpbmU+XHJcbiAgICAgICAgICAgICAgPGg0PiBhZGQgdm90ZSBjb250cmFjdCBhZGRyZXNzIHRvIGxpc3QgIC0mZ3Q7ICAgPC9oND5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImFkZFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyfSBcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7YWRkcjpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5hZGRfbGlzdH0+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHNpemU9XCJzbVwiIHN0eWxlID0ge3t3aWR0aCA6Jzc1JScsbWFyZ2luOlwiYXV0b1wiLG1hcmdpblRvcCA6IFwiMyVcIn19PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD52b3RlIG5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD52b3RlIGFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5kdWUgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPnN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5ID5cclxuICAgICAgICAgIDxKb2luX2xpc3QgbGlzdD17dGhpcy5wcm9wcy5qb2luX2RldGFpbH0gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT48L0pvaW5fbGlzdD5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgIDxoMiBzdHlsZSA9IHt7d2lkdGggOic3NSUnLG1hcmdpbjpcImF1dG9cIixtYXJnaW5Ub3AgOiBcIjMlXCJ9fT5cclxuICAgICAgICAgIFZvdGUgQWRtaW4gTGlzdCAodGhlIHZvdGUgeW91IGNyZWF0ZSlcclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiAgb25DbGljaz17dGhpcy5jcmVhdGVfdm90ZX0gPmNyZWF0ZSBuZXcgdm90ZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHNpemU9XCJzbVwiIHN0eWxlID0ge3t3aWR0aCA6Jzc1JScsbWFyZ2luOlwiYXV0b1wiLG1hcmdpblRvcCA6IFwiMyVcIn19PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD52b3RlIG5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD52b3RlIGFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5uZXh0IHN0ZXAgZHVlIGRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5uZXh0c3RlcDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPnN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPnNldCBxdWVzdGlvbjwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPFNlbGZfbGlzdCBsaXN0PXt0aGlzLnByb3BzLnNlbGZfZGV0YWlsfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvU2VsZl9saXN0PlxyXG4gICAgICAgICAgICB7LyogXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnNob3VsZCBldmVyeW9uZSB3ZWFyIG1hc2sgb24gY2FtcHVzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+MHgxMjM0NTU2Nzc4OTk5ODg4PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+Ny8xNDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxMaW5rIHJvdXRlPVwiL3ZvdGVcIiA+dXBkYXRlIHNldHRpbmc8L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4yPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+c2hvdWxkIGV2ZXJ5b25lIHdlYXIgbWFzayBvbiBjYW1wdXM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4weDEyMzQ1NTY3Nzg5OTk4ODg8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD43LzE0PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PExpbmsgcm91dGU9XCIvdm90ZVwiID5kaXN0cmlidXRlIHZvdGUgY29udHJhY3Q8L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+c2hvdWxkIGV2ZXJ5b25lIHdlYXIgbWFzayBvbiBjYW1wdXM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4weDEyMzQ1NTY3Nzg5OTk4ODg8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD43LzE0PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PExpbmsgcm91dGU9XCIvdm90ZVwiID50YWxseTwvTGluaz48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPiovfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9