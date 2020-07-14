webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);


var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery getProducts($ids:[ID!]!){\n\tnodes(ids:$ids){\n    ...on Product{\n      title\n      handle\n      id\n      images(first:1){\n        edges{\n          node{\n            originalSrc\n            altText\n          }\n        }\n      }\n      variants(first:1){\n        edges{\n          node{\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GET_PRODUCTS_BY_IDS = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

function ProductList() {
  _s();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_PRODUCTS_BY_IDS, {
    variables: {
      ids: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids')
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) {
    return __jsx("div", null, "loading...");
  }

  if (error) {
    return __jsx("div", null, error.message);
  }

  console.log('data: ', data);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["ResourceList"], {
    resourceName: {
      singular: 'customer',
      plural: 'customers'
    },
    items: data.nodes,
    renderItem: function renderItem(item) {
      var media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Thumbnail"], {
        source: "{item.images.edges[0].node.originalSrc}",
        alt: "{item.images.edges[0].node.altText}",
        size: "small"
      });

      return __jsx(ResourceItem, {
        id: item.id,
        media: media,
        accessibilityLabel: "View details for ".concat(item.title)
      });
    }
  }));
}

_s(ProductList, "t0z2SrXJDzhl3h6STsA86t9Oe1U=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWRzIiwic3RvcmUiLCJnZXQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzaW5ndWxhciIsInBsdXJhbCIsIm5vZGVzIiwiaXRlbSIsIm1lZGlhIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLGtEQUFILG1CQUF6Qjs7QUEyQkEsU0FBU0MsV0FBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNTQyxvRUFBUSxDQUFDSCxtQkFBRCxFQUFxQjtBQUFDSSxhQUFTLEVBQUM7QUFBQ0MsU0FBRyxFQUFDQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFMO0FBQVgsR0FBckIsQ0FEakI7QUFBQSxNQUNiQyxPQURhLGFBQ2JBLE9BRGE7QUFBQSxNQUNMQyxLQURLLGFBQ0xBLEtBREs7QUFBQSxNQUNDQyxJQURELGFBQ0NBLElBREQ7O0FBRXBCLE1BQUdGLE9BQUgsRUFBVztBQUFDLFdBQU8sZ0NBQVA7QUFBNkI7O0FBQ3pDLE1BQUdDLEtBQUgsRUFBUztBQUFDLFdBQU8sbUJBQU1BLEtBQUssQ0FBQ0UsT0FBWixDQUFQO0FBQWtDOztBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFxQkgsSUFBckI7QUFDQSxTQUNFLE1BQUMscURBQUQsUUFDRixNQUFDLDZEQUFEO0FBQ0UsZ0JBQVksRUFBRTtBQUFDSSxjQUFRLEVBQUUsVUFBWDtBQUF1QkMsWUFBTSxFQUFFO0FBQS9CLEtBRGhCO0FBRUUsU0FBSyxFQUFFTCxJQUFJLENBQUNNLEtBRmQ7QUFHRSxjQUFVLEVBQUUsb0JBQUNDLElBQUQsRUFBVTtBQUNwQixVQUFNQyxLQUFLLEdBQ1QsTUFBQywwREFBRDtBQUFXLGNBQU0sRUFBQyx5Q0FBbEI7QUFDQyxXQUFHLEVBQUMscUNBREw7QUFFQyxZQUFJLEVBQUM7QUFGTixRQURGOztBQUtBLGFBQ0UsTUFBQyxZQUFEO0FBQ0UsVUFBRSxFQUFFRCxJQUFJLENBQUNFLEVBRFg7QUFFRSxhQUFLLEVBQUVELEtBRlQ7QUFHRSwwQkFBa0IsNkJBQXNCRCxJQUFJLENBQUNHLEtBQTNCO0FBSHBCLFFBREY7QUFRRDtBQWpCSCxJQURFLENBREY7QUF1QkQ7O0dBNUJRbEIsVztVQUNzQkMsNEQ7OztLQUR0QkQsVztBQThCTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjA4ZDZhNzhhOTJiODkwNDk1MTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xyXG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge0NhcmQsUmVzb3VyY2VMaXN0LFN0YWNrLFRleHRTdHlsZSxUaHVtYm5haWx9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnXHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcydcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRFMgPSBncWxgXHJcbnF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6W0lEIV0hKXtcclxuXHRub2RlcyhpZHM6JGlkcyl7XHJcbiAgICAuLi5vbiBQcm9kdWN0e1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBoYW5kbGVcclxuICAgICAgaWRcclxuICAgICAgaW1hZ2VzKGZpcnN0OjEpe1xyXG4gICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB2YXJpYW50cyhmaXJzdDoxKXtcclxuICAgICAgICBlZGdlc3tcclxuICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmBcclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKXtcclxuICBjb25zdCB7bG9hZGluZyxlcnJvcixkYXRhfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUU19CWV9JRFMse3ZhcmlhYmxlczp7aWRzOnN0b3JlLmdldCgnaWRzJyl9fSlcclxuICBpZihsb2FkaW5nKXtyZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+fVxyXG4gIGlmKGVycm9yKXtyZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj59XHJcbiAgY29uc29sZS5sb2coJ2RhdGE6ICcsZGF0YSlcclxuICByZXR1cm4oXHJcbiAgICA8Q2FyZD5cclxuICA8UmVzb3VyY2VMaXN0XHJcbiAgICByZXNvdXJjZU5hbWU9e3tzaW5ndWxhcjogJ2N1c3RvbWVyJywgcGx1cmFsOiAnY3VzdG9tZXJzJ319XHJcbiAgICBpdGVtcz17ZGF0YS5ub2Rlc31cclxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgIDxUaHVtYm5haWwgc291cmNlPVwie2l0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmN9XCJcclxuICAgICAgICAgYWx0PVwie2l0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUuYWx0VGV4dH1cIiBcclxuICAgICAgICAgc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UmVzb3VyY2VJdGVtXHJcbiAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvUmVzb3VyY2VJdGVtPlxyXG4gICAgICApO1xyXG4gICAgfX1cclxuICAvPlxyXG48L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9