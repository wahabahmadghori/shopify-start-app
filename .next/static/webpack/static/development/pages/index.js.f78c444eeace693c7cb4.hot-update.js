webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false
  }),
      modal = _useState[0],
      setModal = _useState[1];

  var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');

  function handleSelection(resources) {
    var idsFromRosourses = resources.selection.map(function (product) {
      return product.id;
    });
    setModal({
      open: false
    });
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idsFromRosourses);
    console.log(store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids'));
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: modal.open,
    onCancel: function onCancel() {
      return setModal({
        open: false
      });
    },
    onSelection: function onSelection(resources) {
      return handleSelection(resources);
    }
  }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: "Select Products",
      onAction: function onAction() {
        return setModal({
          open: true
        });
      }
    },
    image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  }, __jsx("p", null, "Select Products"))) : __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

_s(Index, "6vd7uLpZ07cfW854nyoN0ytn9zc=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJlbXB0eVN0YXRlIiwic3RvcmUiLCJnZXQiLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZXMiLCJpZHNGcm9tUm9zb3Vyc2VzIiwic2VsZWN0aW9uIiwibWFwIiwicHJvZHVjdCIsImlkIiwic2V0IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJvbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBQUQsQ0FEcEI7QUFBQSxNQUNQQyxLQURPO0FBQUEsTUFDQUMsUUFEQTs7QUFFZCxNQUFNQyxVQUFVLEdBQUcsQ0FBQ0MsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsQ0FBcEI7O0FBRUEsV0FBU0MsZUFBVCxDQUF5QkMsU0FBekIsRUFBbUM7QUFDakMsUUFBTUMsZ0JBQWdCLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQUMsT0FBTztBQUFBLGFBQUVBLE9BQU8sQ0FBQ0MsRUFBVjtBQUFBLEtBQS9CLENBQXpCO0FBQ0FWLFlBQVEsQ0FBQztBQUFDRixVQUFJLEVBQUM7QUFBTixLQUFELENBQVI7QUFDQUksbURBQUssQ0FBQ1MsR0FBTixDQUFVLEtBQVYsRUFBZ0JMLGdCQUFoQjtBQUNBTSxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsQ0FBWjtBQUNEOztBQUVDLFNBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsd0VBQUQ7QUFDQSxnQkFBWSxFQUFDLFNBRGI7QUFFQSxnQkFBWSxFQUFFLEtBRmQ7QUFHQSxRQUFJLEVBQUVKLEtBQUssQ0FBQ0QsSUFIWjtBQUlBLFlBQVEsRUFBRTtBQUFBLGFBQUlFLFFBQVEsQ0FBQztBQUFDRixZQUFJLEVBQUM7QUFBTixPQUFELENBQVo7QUFBQSxLQUpWO0FBS0EsZUFBVyxFQUFFLHFCQUFDTyxTQUFEO0FBQUEsYUFBYUQsZUFBZSxDQUFDQyxTQUFELENBQTVCO0FBQUE7QUFMYixJQURGLEVBUUdKLFVBQVUsR0FDWCxNQUFDLHVEQUFELFFBQ0UsTUFBQywyREFBRDtBQUNFLFdBQU8sRUFBQyxpQ0FEVjtBQUVFLFVBQU0sRUFBRTtBQUNOYSxhQUFPLEVBQUUsaUJBREg7QUFFTkMsY0FBUSxFQUFDO0FBQUEsZUFBSWYsUUFBUSxDQUFDO0FBQUNGLGNBQUksRUFBQztBQUFOLFNBQUQsQ0FBWjtBQUFBO0FBRkgsS0FGVjtBQU1FLFNBQUssRUFBQztBQU5SLEtBU0UsbUNBVEYsQ0FERixDQURXLEdBYUQsTUFBQywrREFBRCxPQXJCWixDQURGO0FBeUJIOztHQXBDUUYsSzs7S0FBQUEsSztBQXNDTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmY3OGM0NDRlZWFjZTY5M2M3Y2I0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7RW1wdHlTdGF0ZSxQYWdlLExheW91dH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcydcclxuaW1wb3J0IHtSZXNvdXJjZVBpY2tlcn0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCdcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJ1xyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdCdcclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleCgpe1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoe29wZW46ZmFsc2V9KVxyXG4gIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKXtcclxuICAgIGNvbnN0IGlkc0Zyb21Sb3NvdXJzZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcChwcm9kdWN0PT5wcm9kdWN0LmlkKVxyXG4gICAgc2V0TW9kYWwoe29wZW46ZmFsc2V9KVxyXG4gICAgc3RvcmUuc2V0KCdpZHMnLGlkc0Zyb21Sb3NvdXJzZXMpXHJcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXQoJ2lkcycpKVxyXG4gIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZT5cclxuICAgICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICByZXNvdXJjZVR5cGU9J1Byb2R1Y3QnXHJcbiAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuICAgICAgICBvcGVuPXttb2RhbC5vcGVufVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKT0+c2V0TW9kYWwoe29wZW46ZmFsc2V9KX1cclxuICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcyk9PmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2VtcHR5U3RhdGU/XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICAgIGhlYWRpbmc9XCJNYW5hZ2UgeW91ciBpbnZlbnRvcnkgdHJhbnNmZXJzXCJcclxuICAgICAgICAgICAgYWN0aW9uPXt7IFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2VsZWN0IFByb2R1Y3RzXCIsXHJcbiAgICAgICAgICAgICAgb25BY3Rpb246KCk9PnNldE1vZGFsKHtvcGVuOnRydWV9KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlNlbGVjdCBQcm9kdWN0czwvcD5cclxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICA8L0xheW91dD46PFByb2R1Y3RMaXN0Lz59XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==