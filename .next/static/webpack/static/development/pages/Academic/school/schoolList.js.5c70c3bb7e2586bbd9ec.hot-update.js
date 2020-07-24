webpackHotUpdate("static\\development\\pages\\Academic\\school\\schoolList.js",{

/***/ "./pages/Academic/school/schoolList.js":
/*!*********************************************!*\
  !*** ./pages/Academic/school/schoolList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_SchoolRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/SchoolRow */ "./components/SchoolRow.js");
/* harmony import */ var _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ethereum/academic/verify */ "./ethereum/academic/verify.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var StudentPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StudentPage, _Component);

  var _super = _createSuper(StudentPage);

  function StudentPage() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StudentPage);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StudentPage, [{
    key: "renderRows",
    value: function renderRows() {
      return this.props.schools.map(function (school, index) {
        return __jsx(_components_SchoolRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: index,
          school: school
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"].Body;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("h1", null, "All verified schools"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        route: "/Academic/school/index"
      }, __jsx("a", null, "back")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Table"], null, __jsx(Header, null, __jsx(Row, null, __jsx(HeaderCell, null, "SchoolAddress"))), __jsx(Body, null, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var schoolCount, schools;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getSchoolsCount().call();

              case 2:
                schoolCount = _context.sent;
                _context.next = 5;
                return Promise.all(Array(parseInt(schoolCount)).fill().map(function (element, index) {
                  return _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_11__["default"].methods.schools(index).call();
                }));

              case 5:
                schools = _context.sent;
                console.log(schools);
                return _context.abrupt("return", {
                  schools: schools
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return StudentPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StudentPage);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BY2FkZW1pYy9zY2hvb2wvc2Nob29sTGlzdC5qcyJdLCJuYW1lcyI6WyJTdHVkZW50UGFnZSIsInByb3BzIiwic2Nob29scyIsIm1hcCIsInNjaG9vbCIsImluZGV4IiwiSGVhZGVyIiwiVGFibGUiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJ2ZXJpZnkiLCJtZXRob2RzIiwiZ2V0U2Nob29sc0NvdW50IiwiY2FsbCIsInNjaG9vbENvdW50IiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7aUNBZVM7QUFDWCxhQUFPLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQy9DLGVBQ0UsTUFBQyw4REFBRDtBQUNFLGFBQUcsRUFBRUEsS0FEUDtBQUVFLGdCQUFNLEVBQUVEO0FBRlYsVUFERjtBQU1ELE9BUE0sQ0FBUDtBQVFEOzs7NkJBRVE7QUFBQSxVQUNDRSxNQURELEdBQ21DQyx1REFEbkMsQ0FDQ0QsTUFERDtBQUFBLFVBQ1NFLEdBRFQsR0FDbUNELHVEQURuQyxDQUNTQyxHQURUO0FBQUEsVUFDY0MsVUFEZCxHQUNtQ0YsdURBRG5DLENBQ2NFLFVBRGQ7QUFBQSxVQUMwQkMsSUFEMUIsR0FDbUNILHVEQURuQyxDQUMwQkcsSUFEMUI7QUFHUCxhQUNFLE1BQUMsMERBQUQsUUFDRSx5Q0FERixFQUVFLE1BQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBYixTQUNFLHdCQURGLENBRkYsRUFLRSxNQUFDLHVEQUFELFFBQ0UsTUFBQyxNQUFELFFBQ0UsTUFBQyxHQUFELFFBQ0UsTUFBQyxVQUFELHdCQURGLENBREYsQ0FERixFQU1FLE1BQUMsSUFBRCxRQUNHLEtBQUtDLFVBQUwsRUFESCxDQU5GLENBTEYsQ0FERjtBQWtCRDs7Ozs7Ozs7Ozs7dUJBN0MyQkMsa0VBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxlQUFmLEdBQWlDQyxJQUFqQyxFOzs7QUFBcEJDLDJCOzt1QkFFZ0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUNwQkMsS0FBSyxDQUFDQyxRQUFRLENBQUNKLFdBQUQsQ0FBVCxDQUFMLENBQTZCSyxJQUE3QixHQUFvQ2xCLEdBQXBDLENBQXdDLFVBQUNtQixPQUFELEVBQVVqQixLQUFWLEVBQW9CO0FBQzFELHlCQUFPTyxrRUFBTSxDQUFDQyxPQUFQLENBQWVYLE9BQWYsQ0FBdUJHLEtBQXZCLEVBQThCVSxJQUE5QixFQUFQO0FBQ0QsaUJBRkQsQ0FEb0IsQzs7O0FBQWhCYix1QjtBQU1OcUIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsT0FBWjtpREFFTztBQUFFQSx5QkFBTyxFQUFQQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWmV1QiwrQzs7QUFrRFh6QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcQWNhZGVtaWNcXHNjaG9vbFxcc2Nob29sTGlzdC5qcy41YzcwYzNiYjdlMjU4NmJiZDllYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBTY2hvb2xSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TY2hvb2xSb3cnO1xyXG5pbXBvcnQgdmVyaWZ5IGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2FjYWRlbWljL3ZlcmlmeSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgU3R1ZGVudFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBjb25zdCBzY2hvb2xDb3VudCA9IGF3YWl0IHZlcmlmeS5tZXRob2RzLmdldFNjaG9vbHNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICBjb25zdCBzY2hvb2xzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIEFycmF5KHBhcnNlSW50KHNjaG9vbENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gdmVyaWZ5Lm1ldGhvZHMuc2Nob29scyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzY2hvb2xzKTtcclxuXHJcbiAgICByZXR1cm4geyBzY2hvb2xzIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXJSb3dzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2Nob29scy5tYXAoKHNjaG9vbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2Nob29sUm93IFxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIHNjaG9vbD17c2Nob29sfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPkFsbCB2ZXJpZmllZCBzY2hvb2xzPC9oMT5cclxuICAgICAgICA8TGluayByb3V0ZT17XCIvQWNhZGVtaWMvc2Nob29sL2luZGV4XCJ9PlxyXG4gICAgICAgICAgPGE+YmFjazwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5TY2hvb2xBZGRyZXNzPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPEJvZHk+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvd3MoKX1cclxuICAgICAgICAgIDwvQm9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9