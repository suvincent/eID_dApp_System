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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("td", {
        key: '1'
      }, this.props.selfs[0]), __jsx("td", {
        key: '2'
      }, this.props.selfs[1]), __jsx("td", {
        key: '3'
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/vote/" + this.props.mb_addr + "/" + this.props.selfs[2]
      }, __jsx("a", null, this.props.selfs[2]))), __jsx("td", {
        key: '4'
      }, this.props.selfs[3]), __jsx("td", {
        key: '5'
      }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        onClick: this.next
      }, this.props.selfs[4] == 0 ? "Set Register" : this.props.selfs[4] == 1 ? "Set Vote" : this.props.selfs[4] == 2 ? "Set Tally" : this.props.selfs[4] == 3 ? "Setting finish" : "Finish")), __jsx("td", {
        key: '6'
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/status/" + this.props.mb_addr + "/" + this.props.selfs[2]
      }, __jsx("a", null, "link"))), __jsx("td", {
        key: '7'
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/admin/" + this.props.mb_addr + "/" + this.props.selfs[2]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2hvbWUuanMiXSwibmFtZXMiOlsiSm9pbiIsInByb3BzIiwiam9pbnMiLCJtYl9hZGRyIiwiQ29tcG9uZW50IiwiSm9pbl9saXN0IiwibGlzdCIsIm1hcCIsImtleSIsIlNlbGYiLCJuZXh0IiwiYmluZCIsImN1cnJlbnRfc3RhZ2UiLCJzZWxmcyIsInZfYWRkcmVzcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwidm90ZSIsIlZvdGVfZXZlbnQiLCJtZXRob2RzIiwic2V0X2Nhbl9yZWdpc3RlciIsInNlbmQiLCJmcm9tIiwiUm91dGVyIiwicHVzaFJvdXRlIiwiYWxlcnQiLCJzZXRfY2FuX3ZvdGUiLCJzZXRfY2FuX3RhbGx5IiwiU2VsZl9saXN0Iiwic2VsZiIsIkhvbWUiLCJzdGF0ZSIsInNlYXJjaCIsImFkZHIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImNyZWF0ZV92b3RlIiwiYWRkX2xpc3QiLCJtYWlsYm94IiwiTWFpbGJveCIsImFkZF90b19qb2luX2xpc3QiLCJ3aWR0aCIsImNvbG9yIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiam9pbl9kZXRhaWwiLCJzZWxmX2RldGFpbCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInJldHVybl9qb2luX2xpc3QiLCJjYWxsIiwiam9pbiIsImluZGV4IiwibGVuZ3RoIiwiYXJyIiwidl9hZGRyIiwidiIsInRvU3RyaW5nIiwicmV0dXJuX3F1ZXN0aW9uIiwicmV0dXJuX3NlbGZfbGlzdCIsInJldHVybl9zdGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVB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QUFDNUMsT0FBRixDQUFVZ0QsWUFBVixHQUF5QlYsSUFBekIsRTs7O0FBQWZJLG9CQUFHLENBQUMsQ0FBRCxDO0FBQTRDO0FBQy9DVCwyQkFBVyxDQUFDTyxNQUFELENBQVgsR0FBbUJFLElBQW5COzs7QUFWdUNGLHNCQUFLLEU7Ozs7O0FBYTlDTCx1QkFBTyxDQUFDQyxHQUFSLENBQVkxQixJQUFaLEUsQ0FDQTs7a0RBQ007QUFBQzVCLHlCQUFPLEVBQVBBLE9BQUQ7QUFBU2tELDZCQUFXLEVBQVhBLFdBQVQ7QUFBcUJDLDZCQUFXLEVBQVhBO0FBQXJCLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeERHbEQsK0M7O0FBeUxKNEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXGhvbWUuanMuOGM2NDU0N2JlNDkwMDZiMTVhZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v5YGa5LiA5YCL6aCB6Z2i5piv5rKS5pyJbWFpbGJveOaZguimgeaWsOWinuS4gOWAi21haWxib3hcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7Q2FyZCxUYWJsZX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnXHJcbmltcG9ydCB7Um91dGVyfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBtYWlsYm94IGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvbWFpbGJveCc7XHJcbmltcG9ydCB2b3RlIGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvdm90ZSc7XHJcbi8vY29uc3QgaGVhZGVyID0gW1wiI1wiLCBcInZvdGUgbmFtZVwiLCBcInZvdGUgYWRkcmVzc1wiLCBcImR1ZSBkYXRlXCIsIFwibGlua1wiXTtcclxuY2xhc3MgSm9pbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgLy97dGhpcy5wcm9wcy5qb2lucy5tYXAoaXRlbSA9PiA8dGQ+e2l0ZW19PC90ZD4pfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5qb2luc1swXX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmpvaW5zWzFdfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PExpbmsgcm91dGU9e1wiL1ZvdGUvdm90ZS9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5qb2luc1syXX0gPjxhPnt0aGlzLnByb3BzLmpvaW5zWzJdfTwvYT48L0xpbms+PC90ZD5cclxuICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5qb2luc1szXX08L3RkPlxyXG4gICAgICAgICAgPHRkPjxMaW5rIHJvdXRlPXtcIi9Wb3RlL3N0YXR1cy9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5qb2luc1s0XX0gPjxhPmxpbms8L2E+PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgSm9pbl9saXN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gIC8vY29uc3Qgdm90ZV9idG4gPWZ1bmN0aW9uIChzdGFnZSApe1xyXG4gICAgICByZW5kZXIoKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0Lm1hcChrZXkgPT4gPHRyPjxKb2luIGpvaW5zPXtrZXl9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9Kb2luPjwvdHI+KX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgICB9XHJcbn07XHJcbmNsYXNzIFNlbGYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8ve3RoaXMucHJvcHMuam9pbnMubWFwKGl0ZW0gPT4gPHRkPntpdGVtfTwvdGQ+KX1cclxuICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgYXN5bmMgbmV4dCgpe1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfc3RhZ2UgPSB0aGlzLnByb3BzLnNlbGZzWzRdO1xyXG4gICAgICAgIGNvbnN0IHZfYWRkcmVzcyA9IHRoaXMucHJvcHMuc2VsZnNbMl07XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUodl9hZGRyZXNzKTtcclxuICAgICAgICBpZihjdXJyZW50X3N0YWdlID09IDApey8vc2V0IHVwXHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMuc2V0X2Nhbl9yZWdpc3RlcigpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke3RoaXMucHJvcHMubWJfYWRkcn1gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY3VycmVudF9zdGFnZSA9PSAxKXsvL3JlZ2lzdHJ5XHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5zZXRfY2FuX3ZvdGUoKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke3RoaXMucHJvcHMubWJfYWRkcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjdXJyZW50X3N0YWdlID09IDIpey8vdm90ZVxyXG4gICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMuc2V0X2Nhbl90YWxseSgpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9ob21lLyR7dGhpcy5wcm9wcy5tYl9hZGRyfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsvL3RhbGx5IGFuZCBmaW5pc2hcclxuICAgICAgICAgIGFsZXJ0KFwiY3VycmVudCBzdGFnZSBkb24ndCBuZWVkIG90aGVyIHNldHRpbmdcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICAgIDx0ZCBrZXk9eycxJ30+e3RoaXMucHJvcHMuc2VsZnNbMF19PC90ZD5cclxuICAgICAgICAgIDx0ZCBrZXk9eycyJ30+e3RoaXMucHJvcHMuc2VsZnNbMV19PC90ZD5cclxuICAgICAgICAgIDx0ZCBrZXk9eyczJ30+PExpbmsgcm91dGU9e1wiL1ZvdGUvdm90ZS9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5zZWxmc1syXX0gPjxhPnt0aGlzLnByb3BzLnNlbGZzWzJdfTwvYT48L0xpbms+PC90ZD5cclxuICAgICAgICAgIDx0ZCBrZXk9eyc0J30+e3RoaXMucHJvcHMuc2VsZnNbM119PC90ZD5cclxuICAgICAgICAgIDx0ZCBrZXk9eyc1J30+PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHR9PlxyXG4gICAgICAgICAgICAgIHsodGhpcy5wcm9wcy5zZWxmc1s0XSA9PSAwKT9cIlNldCBSZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxmc1s0XSA9PSAxKT9cIlNldCBWb3RlXCI6XHJcbiAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnNlbGZzWzRdID09IDIpP1wiU2V0IFRhbGx5XCI6XHJcbiAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnNlbGZzWzRdID09IDMpP1wiU2V0dGluZyBmaW5pc2hcIjpcclxuICAgICAgICAgICAgICAgXCJGaW5pc2hcIn08L0J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgPHRkIGtleT17JzYnfT48TGluayByb3V0ZT17XCIvVm90ZS9zdGF0dXMvXCIrdGhpcy5wcm9wcy5tYl9hZGRyK1wiL1wiK3RoaXMucHJvcHMuc2VsZnNbMl19ID48YT5saW5rPC9hPjwvTGluaz48L3RkPlxyXG4gICAgICAgICAgPHRkIGtleT17JzcnfT48TGluayByb3V0ZT17XCIvVm90ZS9hZG1pbi9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5zZWxmc1syXX0gPjxhPmxpbms8L2E+PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgU2VsZl9saXN0IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gIC8vY29uc3Qgdm90ZV9idG4gPWZ1bmN0aW9uIChzdGFnZSApe1xyXG4gICAgICByZW5kZXIoKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0Lm1hcChzZWxmID0+IDx0cj48U2VsZiBzZWxmcz17c2VsZn0gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT48L1NlbGY+PC90cj4pfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICAgIH1cclxufTtcclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgICAvLyBNYl9hZGRyIDpwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICAgICAgICBzZWFyY2ggOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGRyOlwiXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6JydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVfdm90ZSA9IHRoaXMuY3JlYXRlX3ZvdGUuYmluZCh0aGlzKTtcclxuICAgICAgICAgIHRoaXMuYWRkX2xpc3QgPSB0aGlzLmFkZF9saXN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgICAgLy9jb25zdHttYmFkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgICBjb25zdCBtYl9hZGRyID0gcHJvcHMucXVlcnkubWJfYWRkcjtcclxuICAgICAgICAgIC8vY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgY29uc3QgTWFpbGJveCA9IG1haWxib3gobWJfYWRkcik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhtYl9hZGRyKTtcclxuICAgICAgICAgIGxldCBqb2luID0gYXdhaXQgTWFpbGJveC5tZXRob2RzLnJldHVybl9qb2luX2xpc3QoKS5jYWxsKCk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGpvaW4pO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhqb2luLmxlbmd0aCk7XHJcbiAgICAgICAgICB2YXIgam9pbl9kZXRhaWwgPSBbXTtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBqb2luLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGxldCB2X2FkZHIgPSBqb2luW2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IHYgPSB2b3RlKHZfYWRkcik7XHJcbiAgICAgICAgICAgIGFyclswXSA9IChpbmRleCsxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhcnJbMV0gPSBhd2FpdCB2Lm1ldGhvZHMucmV0dXJuX3F1ZXN0aW9uKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBhcnJbMl0gPSB2X2FkZHI7XHJcbiAgICAgICAgICAgIC8vbGV0IHQgPSBhd2FpdCB2Lm1ldGhvZHMucmV0dXJuX3RpbWUoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codCk7XHJcbiAgICAgICAgICAgIGFyclszXSA9IFwidG9kYXlcIjtcclxuICAgICAgICAgICAgYXJyWzRdID0gdl9hZGRyO1xyXG4gICAgICAgICAgICBqb2luX2RldGFpbFtpbmRleF09YXJyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgc2VsZiA9IGF3YWl0IE1haWxib3gubWV0aG9kcy5yZXR1cm5fc2VsZl9saXN0KCkuY2FsbCgpO1xyXG4gICAgICAgICAgdmFyIHNlbGZfZGV0YWlsID1bXTtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzZWxmLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgYXJyID1bXTtcclxuICAgICAgICAgICAgbGV0IHZfYWRkciA9IHNlbGZbaW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgdiA9IHZvdGUodl9hZGRyKTtcclxuICAgICAgICAgICAgYXJyWzBdID0gKGluZGV4KzEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGFyclsxXSA9IGF3YWl0IHYubWV0aG9kcy5yZXR1cm5fcXVlc3Rpb24oKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGFyclsyXSA9IHZfYWRkcjtcclxuICAgICAgICAgICAgLy9hcnJbM10gPSBhd2FpdCB2Lm1ldGhvZHMucmV0dXJuX3RpbWUoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIGFyclszXSA9IFwidG9kYXlcIjtcclxuICAgICAgICAgICAgYXJyWzRdID0gYXdhaXQgdi5tZXRob2RzLnJldHVybl9zdGFnZSgpLmNhbGwoKTsvL3JldHVybiBzdGFnZSDkuYvlvozopoFzZXQgc3RhZ2VcclxuICAgICAgICAgICAgc2VsZl9kZXRhaWxbaW5kZXhdPWFycjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coam9pbl9kZXRhaWwpO1xyXG4gICAgICAgICAgcmV0dXJue21iX2FkZHIsam9pbl9kZXRhaWwsc2VsZl9kZXRhaWx9O1xyXG4gICAgICB9XHJcbiAgICByZWZyZXNoX3NlYXJjaCgpe1xyXG4gICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT0gXCJcIilcclxuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS92b3RlLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMuc3RhdGUuc2VhcmNofWApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGNyZWF0ZV92b3RlKCl7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IE1haWxib3ggPWF3YWl0IG1haWxib3godGhpcy5wcm9wcy5tYl9hZGRyKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IE1haWxib3gubWV0aG9kcy5jcmVhdGVfdm90ZSgpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvaG9tZS8ke3RoaXMucHJvcHMubWJfYWRkcn1gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBhZGRfbGlzdCgpe1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGNvbnN0IE1haWxib3ggPWF3YWl0IG1haWxib3godGhpcy5wcm9wcy5tYl9hZGRyKTtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGF3YWl0IE1haWxib3gubWV0aG9kcy5hZGRfdG9fam9pbl9saXN0KHRoaXMuc3RhdGUuYWRkcikuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL2hvbWUvJHt0aGlzLnByb3BzLm1iX2FkZHJ9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgPE5hdmJhci5CcmFuZCA+Vm90ZTwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19PlxyXG4gICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2luZGV4XCIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+TG9nb3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3IgOiBcIndoaXRlXCJ9fSA+IGluZXNydCB5b3VyIHZvdGUgY29udHJhY3QgYWRkcmVzcyBoZXJlICAtJmd0OyAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hfc2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgPGgyIHN0eWxlID0ge3t3aWR0aCA6Jzc1JScsbWFyZ2luOlwiYXV0b1wiLG1hcmdpblRvcCA6IFwiMyVcIn19PlxyXG4gICAgICAgICAgIFZvdGUgTGlzdCAodGhlIHZvdGUgeW91IGFyZSBpbnZpdGVkKVxyXG4gICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgICA8aDQ+IGFkZCB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgdG8gbGlzdCAgLSZndDsgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiYWRkXCIgY2xhc3NOYW1lPVwibXItc20tMlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJ9IFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHthZGRyOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmFkZF9saXN0fT5BZGQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCIgc3R5bGUgPSB7e3dpZHRoIDonNzUlJyxtYXJnaW46XCJhdXRvXCIsbWFyZ2luVG9wIDogXCIzJVwifX0+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPnZvdGUgbmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPnZvdGUgYWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPmR1ZSBkYXRlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+c3RhdHVzPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHkgPlxyXG4gICAgICAgICAgPEpvaW5fbGlzdCBsaXN0PXt0aGlzLnByb3BzLmpvaW5fZGV0YWlsfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvSm9pbl9saXN0PlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgPGgyIHN0eWxlID0ge3t3aWR0aCA6Jzc1JScsbWFyZ2luOlwiYXV0b1wiLG1hcmdpblRvcCA6IFwiMyVcIn19PlxyXG4gICAgICAgICAgVm90ZSBBZG1pbiBMaXN0ICh0aGUgdm90ZSB5b3UgY3JlYXRlKVxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiICBvbkNsaWNrPXt0aGlzLmNyZWF0ZV92b3RlfSA+Y3JlYXRlIG5ldyB2b3RlPC9CdXR0b24+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICBcclxuICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCIgc3R5bGUgPSB7e3dpZHRoIDonNzUlJyxtYXJnaW46XCJhdXRvXCIsbWFyZ2luVG9wIDogXCIzJVwifX0+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPnZvdGUgbmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPnZvdGUgYWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPm5leHQgc3RlcCBkdWUgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPm5leHRzdGVwPC90aD5cclxuICAgICAgICAgICAgICA8dGg+c3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+c2V0IHF1ZXN0aW9uPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8U2VsZl9saXN0IGxpc3Q9e3RoaXMucHJvcHMuc2VsZl9kZXRhaWx9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9TZWxmX2xpc3Q+XHJcbiAgICAgICAgICAgIHsvKiBcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+c2hvdWxkIGV2ZXJ5b25lIHdlYXIgbWFzayBvbiBjYW1wdXM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4weDEyMzQ1NTY3Nzg5OTk4ODg8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD43LzE0PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PExpbmsgcm91dGU9XCIvdm90ZVwiID51cGRhdGUgc2V0dGluZzwvTGluaz48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjI8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5zaG91bGQgZXZlcnlvbmUgd2VhciBtYXNrIG9uIGNhbXB1czwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjB4MTIzNDU1Njc3ODk5OTg4ODwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjcvMTQ8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48TGluayByb3V0ZT1cIi92b3RlXCIgPmRpc3RyaWJ1dGUgdm90ZSBjb250cmFjdDwvTGluaz48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5zaG91bGQgZXZlcnlvbmUgd2VhciBtYXNrIG9uIGNhbXB1czwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjB4MTIzNDU1Njc3ODk5OTg4ODwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjcvMTQ8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48TGluayByb3V0ZT1cIi92b3RlXCIgPnRhbGx5PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+Ki99XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=