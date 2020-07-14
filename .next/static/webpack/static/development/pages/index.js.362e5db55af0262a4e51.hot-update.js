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
    showHeader: "true",
    resourceName: {
      singular: 'Product',
      plural: 'Products'
    },
    items: data.nodes,
    renderItem: function renderItem(item) {
      var media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Thumbnail"], {
        source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : "",
        alt: item.images.edges[0] ? item.images.edges[0].node.altText : "",
        size: "small"
      });

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["ResourceItem"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWRzIiwic3RvcmUiLCJnZXQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzaW5ndWxhciIsInBsdXJhbCIsIm5vZGVzIiwiaXRlbSIsIm1lZGlhIiwiaW1hZ2VzIiwiZWRnZXMiLCJub2RlIiwib3JpZ2luYWxTcmMiLCJhbHRUZXh0IiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLGtEQUFILG1CQUF6Qjs7QUEyQkEsU0FBU0MsV0FBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNTQyxvRUFBUSxDQUFDSCxtQkFBRCxFQUFxQjtBQUFDSSxhQUFTLEVBQUM7QUFBQ0MsU0FBRyxFQUFDQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFMO0FBQVgsR0FBckIsQ0FEakI7QUFBQSxNQUNiQyxPQURhLGFBQ2JBLE9BRGE7QUFBQSxNQUNMQyxLQURLLGFBQ0xBLEtBREs7QUFBQSxNQUNDQyxJQURELGFBQ0NBLElBREQ7O0FBRXBCLE1BQUdGLE9BQUgsRUFBVztBQUFDLFdBQU8sZ0NBQVA7QUFBNkI7O0FBQ3pDLE1BQUdDLEtBQUgsRUFBUztBQUFDLFdBQU8sbUJBQU1BLEtBQUssQ0FBQ0UsT0FBWixDQUFQO0FBQWtDOztBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFxQkgsSUFBckI7QUFDQSxTQUNFLE1BQUMscURBQUQsUUFDRixNQUFDLDZEQUFEO0FBQ0UsY0FBVSxFQUFDLE1BRGI7QUFFRSxnQkFBWSxFQUFFO0FBQUNJLGNBQVEsRUFBRSxTQUFYO0FBQXNCQyxZQUFNLEVBQUU7QUFBOUIsS0FGaEI7QUFHRSxTQUFLLEVBQUVMLElBQUksQ0FBQ00sS0FIZDtBQUlFLGNBQVUsRUFBRSxvQkFBQ0MsSUFBRCxFQUFVO0FBQ3BCLFVBQU1DLEtBQUssR0FDVCxNQUFDLDBEQUFEO0FBQ0EsY0FBTSxFQUFFRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUFxQkgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxXQUEvQyxHQUEyRCxFQURuRTtBQUVDLFdBQUcsRUFBRUwsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFBcUJILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkUsT0FBL0MsR0FBdUQsRUFGN0Q7QUFHQyxZQUFJLEVBQUM7QUFITixRQURGOztBQU1BLGFBQ0UsTUFBQyw2REFBRDtBQUNFLFVBQUUsRUFBRU4sSUFBSSxDQUFDTyxFQURYO0FBRUUsYUFBSyxFQUFFTixLQUZUO0FBR0UsMEJBQWtCLDZCQUFzQkQsSUFBSSxDQUFDUSxLQUEzQjtBQUhwQixRQURGO0FBUUQ7QUFuQkgsSUFERSxDQURGO0FBeUJEOztHQTlCUXZCLFc7VUFDc0JDLDREOzs7S0FEdEJELFc7QUFnQ01BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNjJlNWRiNTVhZjAyNjJhNGU1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHtDYXJkLFJlc291cmNlTGlzdCxSZXNvdXJjZUl0ZW0sU3RhY2ssVGV4dFN0eWxlLFRodW1ibmFpbH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcydcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJ1xyXG5cclxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEUyA9IGdxbGBcclxucXVlcnkgZ2V0UHJvZHVjdHMoJGlkczpbSUQhXSEpe1xyXG5cdG5vZGVzKGlkczokaWRzKXtcclxuICAgIC4uLm9uIFByb2R1Y3R7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGhhbmRsZVxyXG4gICAgICBpZFxyXG4gICAgICBpbWFnZXMoZmlyc3Q6MSl7XHJcbiAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHZhcmlhbnRzKGZpcnN0OjEpe1xyXG4gICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuYFxyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCgpe1xyXG4gIGNvbnN0IHtsb2FkaW5nLGVycm9yLGRhdGF9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RTX0JZX0lEUyx7dmFyaWFibGVzOntpZHM6c3RvcmUuZ2V0KCdpZHMnKX19KVxyXG4gIGlmKGxvYWRpbmcpe3JldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj59XHJcbiAgaWYoZXJyb3Ipe3JldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2Pn1cclxuICBjb25zb2xlLmxvZygnZGF0YTogJyxkYXRhKVxyXG4gIHJldHVybihcclxuICAgIDxDYXJkPlxyXG4gIDxSZXNvdXJjZUxpc3RcclxuICAgIHNob3dIZWFkZXI9XCJ0cnVlXCJcclxuICAgIHJlc291cmNlTmFtZT17e3Npbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJ319XHJcbiAgICBpdGVtcz17ZGF0YS5ub2Rlc31cclxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgIDxUaHVtYm5haWwgXHJcbiAgICAgICAgc291cmNlPXtpdGVtLmltYWdlcy5lZGdlc1swXT9pdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjOlwiXCJ9XHJcbiAgICAgICAgIGFsdD17aXRlbS5pbWFnZXMuZWRnZXNbMF0/aXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0OlwiXCJ9IFxyXG4gICAgICAgICBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXNvdXJjZUl0ZW1cclxuICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgPC9SZXNvdXJjZUl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gIC8+XHJcbjwvQ2FyZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=