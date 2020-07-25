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
      }, __jsx("a", null, this.props.joins[2]))), __jsx("td", null, this.props.joins[3]), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/status/" + this.props.mb_addr + "/" + this.props.joins[4]
      }, __jsx("a", null, "link"))));
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
                current_stage = this.props.key[4];
                v_address = this.props.key[2];
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("td", null, this.props.key[0]), __jsx("td", null, this.props.key[1]), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/vote/" + this.props.mb_addr + "/" + this.props.key[2]
      }, __jsx("a", null, this.props.key[2]))), __jsx("td", null, this.props.key[3]), __jsx("td", null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        onClick: this.next
      }, this.props.key[4] == 0 ? "Set Register" : this.props.key[4] == 1 ? "Set Vote" : this.props.key[4] == 2 ? "Set Tally" : this.props.key[4] == 3 ? "Setting finish" : "Finish")), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/status/" + this.props.mb_addr + "/" + this.props.key[2]
      }, __jsx("a", null, "link"))), __jsx("td", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/admin/" + this.props.mb_addr + "/" + this.props.key[2]
      }, __jsx("a", null, "link"))));
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
          key: self,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2hvbWUuanMiXSwibmFtZXMiOlsiSm9pbiIsInByb3BzIiwiam9pbnMiLCJtYl9hZGRyIiwiQ29tcG9uZW50IiwiSm9pbl9saXN0IiwibGlzdCIsIm1hcCIsImtleSIsIlNlbGYiLCJuZXh0IiwiYmluZCIsImN1cnJlbnRfc3RhZ2UiLCJ2X2FkZHJlc3MiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInZvdGUiLCJWb3RlX2V2ZW50IiwibWV0aG9kcyIsInNldF9jYW5fcmVnaXN0ZXIiLCJzZW5kIiwiZnJvbSIsIlJvdXRlciIsInB1c2hSb3V0ZSIsImFsZXJ0Iiwic2V0X2Nhbl92b3RlIiwic2V0X2Nhbl90YWxseSIsIlNlbGZfbGlzdCIsInNlbGYiLCJIb21lIiwic3RhdGUiLCJzZWFyY2giLCJhZGRyIiwibG9hZGluZyIsImxvYWRpbmcyIiwiZXJyb3JNZXNzYWdlIiwicmVmcmVzaF9zZWFyY2giLCJjcmVhdGVfdm90ZSIsImFkZF9saXN0IiwibWFpbGJveCIsIk1haWxib3giLCJhZGRfdG9fam9pbl9saXN0Iiwid2lkdGgiLCJjb2xvciIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImpvaW5fZGV0YWlsIiwic2VsZl9kZXRhaWwiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJyZXR1cm5fam9pbl9saXN0IiwiY2FsbCIsImpvaW4iLCJpbmRleCIsImxlbmd0aCIsImFyciIsInZfYWRkciIsInYiLCJ0b1N0cmluZyIsInJldHVybl9xdWVzdGlvbiIsInJldHVybl9zZWxmX2xpc3QiLCJyZXR1cm5fc3RhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FB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WixFLENBQ0E7O2tEQUNNO0FBQUMzQix5QkFBTyxFQUFQQSxPQUFEO0FBQVNpRCw2QkFBVyxFQUFYQSxXQUFUO0FBQXFCQyw2QkFBVyxFQUFYQTtBQUFyQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhER2pELCtDOztBQXlMSjJCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxob21lLmpzLjg2OTZmN2U1ZDRhMDdhOTE2ZTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+WBmuS4gOWAi+mggemdouaYr+aykuaciW1haWxib3jmmYLopoHmlrDlop7kuIDlgIttYWlsYm94XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydHtMaW5rfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQge0NhcmQsVGFibGV9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgbWFpbGJveCBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL21haWxib3gnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG4vL2NvbnN0IGhlYWRlciA9IFtcIiNcIiwgXCJ2b3RlIG5hbWVcIiwgXCJ2b3RlIGFkZHJlc3NcIiwgXCJkdWUgZGF0ZVwiLCBcImxpbmtcIl07XHJcbmNsYXNzIEpvaW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8ve3RoaXMucHJvcHMuam9pbnMubWFwKGl0ZW0gPT4gPHRkPntpdGVtfTwvdGQ+KX1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuam9pbnNbMF19PC90ZD5cclxuICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5qb2luc1sxXX08L3RkPlxyXG4gICAgICAgICAgPHRkPjxMaW5rIHJvdXRlPXtcIi9Wb3RlL3ZvdGUvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMuam9pbnNbMl19ID48YT57dGhpcy5wcm9wcy5qb2luc1syXX08L2E+PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuam9pbnNbM119PC90ZD5cclxuICAgICAgICAgIDx0ZD48TGluayByb3V0ZT17XCIvVm90ZS9zdGF0dXMvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMuam9pbnNbNF19ID48YT5saW5rPC9hPjwvTGluaz48L3RkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEpvaW5fbGlzdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAvL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgICAgcmVuZGVyKCl7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoa2V5ID0+IDx0cj48Sm9pbiBqb2lucz17a2V5fSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvSm9pbj48L3RyPil9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgICAgfVxyXG59O1xyXG5jbGFzcyBTZWxmIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAvL3t0aGlzLnByb3BzLmpvaW5zLm1hcChpdGVtID0+IDx0ZD57aXRlbX08L3RkPil9XHJcbiAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGFzeW5jIG5leHQoKXtcclxuICAgICAgICBjb25zdCBjdXJyZW50X3N0YWdlID0gdGhpcy5wcm9wcy5rZXlbNF07XHJcbiAgICAgICAgY29uc3Qgdl9hZGRyZXNzID0gdGhpcy5wcm9wcy5rZXlbMl07XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUodl9hZGRyZXNzKTtcclxuICAgICAgICBpZihjdXJyZW50X3N0YWdlID09IDApey8vc2V0IHVwXHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMuc2V0X2Nhbl9yZWdpc3RlcigpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke3RoaXMucHJvcHMubWJfYWRkcn1gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY3VycmVudF9zdGFnZSA9PSAxKXsvL3JlZ2lzdHJ5XHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5zZXRfY2FuX3ZvdGUoKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke3RoaXMucHJvcHMubWJfYWRkcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdXJyZW50X3N0YWdlID09IDIpey8vdm90ZVxyXG4gICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMuc2V0X2Nhbl90YWxseSgpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9ob21lLyR7dGhpcy5wcm9wcy5tYl9hZGRyfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsvL3RhbGx5IGFuZCBmaW5pc2hcclxuICAgICAgICAgIGFsZXJ0KFwiY3VycmVudCBzdGFnZSBkb24ndCBuZWVkIG90aGVyIHNldHRpbmdcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5rZXlbMF19PC90ZD5cclxuICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5rZXlbMV19PC90ZD5cclxuICAgICAgICAgIDx0ZD48TGluayByb3V0ZT17XCIvVm90ZS92b3RlL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmtleVsyXX0gPjxhPnt0aGlzLnByb3BzLmtleVsyXX08L2E+PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMua2V5WzNdfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHR9PlxyXG4gICAgICAgICAgICAgIHsodGhpcy5wcm9wcy5rZXlbNF0gPT0gMCk/XCJTZXQgUmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgKHRoaXMucHJvcHMua2V5WzRdID09IDEpP1wiU2V0IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgKHRoaXMucHJvcHMua2V5WzRdID09IDIpP1wiU2V0IFRhbGx5XCI6XHJcbiAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmtleVs0XSA9PSAzKT9cIlNldHRpbmcgZmluaXNoXCI6XHJcbiAgICAgICAgICAgICAgIFwiRmluaXNoXCJ9PC9CdXR0b24+PC90ZD5cclxuICAgICAgICAgIDx0ZD48TGluayByb3V0ZT17XCIvVm90ZS9zdGF0dXMvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMua2V5WzJdfSA+PGE+bGluazwvYT48L0xpbms+PC90ZD5cclxuICAgICAgICAgIDx0ZD48TGluayByb3V0ZT17XCIvVm90ZS9hZG1pbi9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5rZXlbMl19ID48YT5saW5rPC9hPjwvTGluaz48L3RkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlbGZfbGlzdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAvL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgICAgcmVuZGVyKCl7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoc2VsZiA9PiA8dHI+PFNlbGYga2V5PXtzZWxmfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvU2VsZj48L3RyPil9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgICAgfVxyXG59O1xyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgIC8vIE1iX2FkZHIgOnByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgICAgICAgIHNlYXJjaCA6IFwiXCIsXHJcbiAgICAgICAgICAgIGFkZHI6XCJcIixcclxuICAgICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTonJ1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaF9zZWFyY2ggPSB0aGlzLnJlZnJlc2hfc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZV92b3RlID0gdGhpcy5jcmVhdGVfdm90ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgdGhpcy5hZGRfbGlzdCA9IHRoaXMuYWRkX2xpc3QuYmluZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgICAvL2NvbnN0e21iYWRkcn0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICAgIGNvbnN0IG1iX2FkZHIgPSBwcm9wcy5xdWVyeS5tYl9hZGRyO1xyXG4gICAgICAgICAgLy9jb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICBjb25zdCBNYWlsYm94ID0gbWFpbGJveChtYl9hZGRyKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG1iX2FkZHIpO1xyXG4gICAgICAgICAgbGV0IGpvaW4gPSBhd2FpdCBNYWlsYm94Lm1ldGhvZHMucmV0dXJuX2pvaW5fbGlzdCgpLmNhbGwoKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coam9pbik7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGpvaW4ubGVuZ3RoKTtcclxuICAgICAgICAgIHZhciBqb2luX2RldGFpbCA9IFtdO1xyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGpvaW4ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHZfYWRkciA9IGpvaW5baW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgdiA9IHZvdGUodl9hZGRyKTtcclxuICAgICAgICAgICAgYXJyWzBdID0gKGluZGV4KzEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGFyclsxXSA9IGF3YWl0IHYubWV0aG9kcy5yZXR1cm5fcXVlc3Rpb24oKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGFyclsyXSA9IHZfYWRkcjtcclxuICAgICAgICAgICAgLy9sZXQgdCA9IGF3YWl0IHYubWV0aG9kcy5yZXR1cm5fdGltZSgpLmNhbGwoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0KTtcclxuICAgICAgICAgICAgYXJyWzNdID0gXCJ0b2RheVwiO1xyXG4gICAgICAgICAgICBhcnJbNF0gPSB2X2FkZHI7XHJcbiAgICAgICAgICAgIGpvaW5fZGV0YWlsW2luZGV4XT1hcnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGxldCBzZWxmID0gYXdhaXQgTWFpbGJveC5tZXRob2RzLnJldHVybl9zZWxmX2xpc3QoKS5jYWxsKCk7XHJcbiAgICAgICAgICB2YXIgc2VsZl9kZXRhaWwgPVtdO1xyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlbGYubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPVtdO1xyXG4gICAgICAgICAgICBsZXQgdl9hZGRyID0gc2VsZltpbmRleF07XHJcbiAgICAgICAgICAgIGxldCB2ID0gdm90ZSh2X2FkZHIpO1xyXG4gICAgICAgICAgICBhcnJbMF0gPSAoaW5kZXgrMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgYXJyWzFdID0gYXdhaXQgdi5tZXRob2RzLnJldHVybl9xdWVzdGlvbigpLmNhbGwoKTtcclxuICAgICAgICAgICAgYXJyWzJdID0gdl9hZGRyO1xyXG4gICAgICAgICAgICAvL2FyclszXSA9IGF3YWl0IHYubWV0aG9kcy5yZXR1cm5fdGltZSgpLmNhbGwoKTtcclxuICAgICAgICAgICAgYXJyWzNdID0gXCJ0b2RheVwiO1xyXG4gICAgICAgICAgICBhcnJbNF0gPSBhd2FpdCB2Lm1ldGhvZHMucmV0dXJuX3N0YWdlKCkuY2FsbCgpOy8vcmV0dXJuIHN0YWdlIOS5i+W+jOimgXNldCBzdGFnZVxyXG4gICAgICAgICAgICBzZWxmX2RldGFpbFtpbmRleF09YXJyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhqb2luX2RldGFpbCk7XHJcbiAgICAgICAgICByZXR1cm57bWJfYWRkcixqb2luX2RldGFpbCxzZWxmX2RldGFpbH07XHJcbiAgICAgIH1cclxuICAgIHJlZnJlc2hfc2VhcmNoKCl7XHJcbiAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKVxyXG4gICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3ZvdGUvJHt0aGlzLnByb3BzLm1iX2FkZHJ9LyR7dGhpcy5zdGF0ZS5zZWFyY2h9YCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY3JlYXRlX3ZvdGUoKXtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgTWFpbGJveCA9YXdhaXQgbWFpbGJveCh0aGlzLnByb3BzLm1iX2FkZHIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgYXdhaXQgTWFpbGJveC5tZXRob2RzLmNyZWF0ZV92b3RlKCkuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9ob21lLyR7dGhpcy5wcm9wcy5tYl9hZGRyfWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGFkZF9saXN0KCl7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgY29uc3QgTWFpbGJveCA9YXdhaXQgbWFpbGJveCh0aGlzLnByb3BzLm1iX2FkZHIpO1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgTWFpbGJveC5tZXRob2RzLmFkZF90b19qb2luX2xpc3QodGhpcy5zdGF0ZS5hZGRyKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke3RoaXMucHJvcHMubWJfYWRkcn1gKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kID5Wb3RlPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgPEZvcm0gaW5saW5lPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvciA6IFwid2hpdGVcIn19ID4gaW5lc3J0IHlvdXIgdm90ZSBjb250cmFjdCBhZGRyZXNzIGhlcmUgIC0mZ3Q7ICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICA8aDIgc3R5bGUgPSB7e3dpZHRoIDonNzUlJyxtYXJnaW46XCJhdXRvXCIsbWFyZ2luVG9wIDogXCIzJVwifX0+XHJcbiAgICAgICAgICAgVm90ZSBMaXN0ICh0aGUgdm90ZSB5b3UgYXJlIGludml0ZWQpXHJcbiAgICAgICAgICAgPEZvcm0gaW5saW5lPlxyXG4gICAgICAgICAgICAgIDxoND4gYWRkIHZvdGUgY29udHJhY3QgYWRkcmVzcyB0byBsaXN0ICAtJmd0OyAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJhZGRcIiBjbGFzc05hbWU9XCJtci1zbS0yXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcn0gXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe2FkZHI6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuYWRkX2xpc3R9PkFkZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIiBzdHlsZSA9IHt7d2lkdGggOic3NSUnLG1hcmdpbjpcImF1dG9cIixtYXJnaW5Ub3AgOiBcIjMlXCJ9fT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICA8dGg+dm90ZSBuYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+dm90ZSBhZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+ZHVlIGRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5zdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keSA+XHJcbiAgICAgICAgICA8Sm9pbl9saXN0IGxpc3Q9e3RoaXMucHJvcHMuam9pbl9kZXRhaWx9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9Kb2luX2xpc3Q+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICA8aDIgc3R5bGUgPSB7e3dpZHRoIDonNzUlJyxtYXJnaW46XCJhdXRvXCIsbWFyZ2luVG9wIDogXCIzJVwifX0+XHJcbiAgICAgICAgICBWb3RlIEFkbWluIExpc3QgKHRoZSB2b3RlIHlvdSBjcmVhdGUpXHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlX3ZvdGV9ID5jcmVhdGUgbmV3IHZvdGU8L0J1dHRvbj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIFxyXG4gICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIiBzdHlsZSA9IHt7d2lkdGggOic3NSUnLG1hcmdpbjpcImF1dG9cIixtYXJnaW5Ub3AgOiBcIjMlXCJ9fT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICA8dGg+dm90ZSBuYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+dm90ZSBhZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+bmV4dCBzdGVwIGR1ZSBkYXRlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+bmV4dHN0ZXA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5zdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5zZXQgcXVlc3Rpb248L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDxTZWxmX2xpc3QgbGlzdD17dGhpcy5wcm9wcy5zZWxmX2RldGFpbH0gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT48L1NlbGZfbGlzdD5cclxuICAgICAgICAgICAgey8qIFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5zaG91bGQgZXZlcnlvbmUgd2VhciBtYXNrIG9uIGNhbXB1czwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjB4MTIzNDU1Njc3ODk5OTg4ODwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjcvMTQ8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48TGluayByb3V0ZT1cIi92b3RlXCIgPnVwZGF0ZSBzZXR0aW5nPC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnNob3VsZCBldmVyeW9uZSB3ZWFyIG1hc2sgb24gY2FtcHVzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+MHgxMjM0NTU2Nzc4OTk5ODg4PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+Ny8xNDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxMaW5rIHJvdXRlPVwiL3ZvdGVcIiA+ZGlzdHJpYnV0ZSB2b3RlIGNvbnRyYWN0PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnNob3VsZCBldmVyeW9uZSB3ZWFyIG1hc2sgb24gY2FtcHVzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+MHgxMjM0NTU2Nzc4OTk5ODg4PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+Ny8xNDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxMaW5rIHJvdXRlPVwiL3ZvdGVcIiA+dGFsbHk8L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgPC90cj4qL31cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==