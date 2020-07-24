webpackHotUpdate("static\\development\\pages\\Academic\\school\\students.js",{

/***/ "./pages/Academic/school/students.js":
/*!*******************************************!*\
  !*** ./pages/Academic/school/students.js ***!
  \*******************************************/
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
/* harmony import */ var _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ethereum/academic/verify */ "./ethereum/academic/verify.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);







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
    key: "renderCampaign",
    value: function renderCampaign() {
      var items = this.props.certificates.map(function (string) {
        return {
          header: string,
          description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
            route: "/Academic/certificates/".concat(string, "/success")
          }, __jsx("a", null, "View Certificate")),
          fluid: true
        };
      });
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("div", null, __jsx("h1", null, "All verified certificates"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        route: "/Academic/school/index"
      }, __jsx("a", null, "back")), __jsx("br", null), __jsx("br", null), this.renderCampaign()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var certificates;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_academic_verify__WEBPACK_IMPORTED_MODULE_10__["default"].methods.getDeployedCerts().call();

              case 2:
                certificates = _context.sent;
                return _context.abrupt("return", {
                  certificates: certificates
                });

              case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BY2FkZW1pYy9zY2hvb2wvc3R1ZGVudHMuanMiXSwibmFtZXMiOlsiU3R1ZGVudFBhZ2UiLCJpdGVtcyIsInByb3BzIiwiY2VydGlmaWNhdGVzIiwibWFwIiwic3RyaW5nIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWduIiwidmVyaWZ5IiwibWV0aG9kcyIsImdldERlcGxveWVkQ2VydHMiLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7O3FDQU9hO0FBQ2YsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQUMsTUFBTSxFQUFJO0FBQ2xELGVBQU87QUFDTEMsZ0JBQU0sRUFBRUQsTUFESDtBQUVMRSxxQkFBVyxFQUNULE1BQUMsNkNBQUQ7QUFBTSxpQkFBSyxtQ0FBNEJGLE1BQTVCO0FBQVgsYUFDRSxvQ0FERixDQUhHO0FBT0xHLGVBQUssRUFBRTtBQVBGLFNBQVA7QUFTRCxPQVZhLENBQWQ7QUFZQSxhQUFPLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFUDtBQUFuQixRQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0UsTUFBQywwREFBRCxRQUNFLG1CQUNFLDhDQURGLEVBRUUsTUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBRTtBQUFiLFNBQ0Usd0JBREYsQ0FGRixFQUtFLGlCQUxGLEVBS1EsaUJBTFIsRUFNRyxLQUFLUSxjQUFMLEVBTkgsQ0FERixDQURGO0FBWUQ7Ozs7Ozs7Ozs7O3VCQWxDNEJDLGtFQUFNLENBQUNDLE9BQVAsQ0FBZUMsZ0JBQWYsR0FBa0NDLElBQWxDLEU7OztBQUFyQlYsNEI7aURBRUM7QUFBRUEsOEJBQVksRUFBWkE7QUFBRixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUplVywrQzs7QUF1Q1hkLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxBY2FkZW1pY1xcc2Nob29sXFxzdHVkZW50cy5qcy45Yjg5Nzk0ZTZiYWYwY2RhY2UxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHZlcmlmeSBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9hY2FkZW1pYy92ZXJpZnknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIFN0dWRlbnRQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgY2VydGlmaWNhdGVzID0gYXdhaXQgdmVyaWZ5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDZXJ0cygpLmNhbGwoKTtcclxuXHJcbiAgICByZXR1cm4geyBjZXJ0aWZpY2F0ZXMgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhbXBhaWduKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNlcnRpZmljYXRlcy5tYXAoc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXI6IHN0cmluZyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvQWNhZGVtaWMvY2VydGlmaWNhdGVzLyR7c3RyaW5nfS9zdWNjZXNzYH0+XHJcbiAgICAgICAgICAgIDxhPlZpZXcgQ2VydGlmaWNhdGU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBmbHVpZDogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+QWxsIHZlcmlmaWVkIGNlcnRpZmljYXRlczwvaDE+XHJcbiAgICAgICAgICA8TGluayByb3V0ZT17XCIvQWNhZGVtaWMvc2Nob29sL2luZGV4XCJ9PlxyXG4gICAgICAgICAgICA8YT5iYWNrPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbigpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9