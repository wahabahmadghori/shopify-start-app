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
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, {
        fill: true
      }, __jsx("h2", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextStyle"], {
        variation: "strong"
      }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, null, __jsx("p", null, "$", item.images.variants[0].node.price))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWRzIiwic3RvcmUiLCJnZXQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzaW5ndWxhciIsInBsdXJhbCIsIm5vZGVzIiwiaXRlbSIsIm1lZGlhIiwiaW1hZ2VzIiwiZWRnZXMiLCJub2RlIiwib3JpZ2luYWxTcmMiLCJhbHRUZXh0IiwiaWQiLCJ0aXRsZSIsInZhcmlhbnRzIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG1CQUFtQixHQUFHQyxrREFBSCxtQkFBekI7O0FBMkJBLFNBQVNDLFdBQVQsR0FBc0I7QUFBQTs7QUFBQSxrQkFDU0Msb0VBQVEsQ0FBQ0gsbUJBQUQsRUFBcUI7QUFBQ0ksYUFBUyxFQUFDO0FBQUNDLFNBQUcsRUFBQ0MsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVY7QUFBTDtBQUFYLEdBQXJCLENBRGpCO0FBQUEsTUFDYkMsT0FEYSxhQUNiQSxPQURhO0FBQUEsTUFDTEMsS0FESyxhQUNMQSxLQURLO0FBQUEsTUFDQ0MsSUFERCxhQUNDQSxJQUREOztBQUVwQixNQUFHRixPQUFILEVBQVc7QUFBQyxXQUFPLGdDQUFQO0FBQTZCOztBQUN6QyxNQUFHQyxLQUFILEVBQVM7QUFBQyxXQUFPLG1CQUFNQSxLQUFLLENBQUNFLE9BQVosQ0FBUDtBQUFrQzs7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBcUJILElBQXJCO0FBQ0EsU0FDRSxNQUFDLHFEQUFELFFBQ0YsTUFBQyw2REFBRDtBQUNFLGNBQVUsRUFBQyxNQURiO0FBRUUsZ0JBQVksRUFBRTtBQUFDSSxjQUFRLEVBQUUsU0FBWDtBQUFzQkMsWUFBTSxFQUFFO0FBQTlCLEtBRmhCO0FBR0UsU0FBSyxFQUFFTCxJQUFJLENBQUNNLEtBSGQ7QUFJRSxjQUFVLEVBQUUsb0JBQUNDLElBQUQsRUFBVTtBQUNwQixVQUFNQyxLQUFLLEdBQ1QsTUFBQywwREFBRDtBQUNBLGNBQU0sRUFBRUQsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFBcUJILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkMsV0FBL0MsR0FBMkQsRUFEbkU7QUFFQyxXQUFHLEVBQUVMLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLElBQXFCSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJFLE9BQS9DLEdBQXVELEVBRjdEO0FBR0MsWUFBSSxFQUFDO0FBSE4sUUFERjs7QUFNQSxhQUNFLE1BQUMsNkRBQUQ7QUFDRSxVQUFFLEVBQUVOLElBQUksQ0FBQ08sRUFEWDtBQUVFLGFBQUssRUFBRU4sS0FGVDtBQUdFLDBCQUFrQiw2QkFBc0JELElBQUksQ0FBQ1EsS0FBM0I7QUFIcEIsU0FLRSxNQUFDLHNEQUFELFFBQ0UsTUFBQyxzREFBRCxDQUFPLElBQVA7QUFBWSxZQUFJO0FBQWhCLFNBQ0Usa0JBQ0EsTUFBQywwREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FBK0JSLElBQUksQ0FBQ1EsS0FBcEMsQ0FEQSxDQURGLENBREYsRUFNRSxNQUFDLHNEQUFELENBQU8sSUFBUCxRQUNFLHNCQUFLUixJQUFJLENBQUNFLE1BQUwsQ0FBWU8sUUFBWixDQUFxQixDQUFyQixFQUF3QkwsSUFBeEIsQ0FBNkJNLEtBQWxDLENBREYsQ0FORixDQUxGLENBREY7QUFrQkQ7QUE3QkgsSUFERSxDQURGO0FBbUNEOztHQXhDUXpCLFc7VUFDc0JDLDREOzs7S0FEdEJELFc7QUEwQ01BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40MzgzN2I2NmZkMzBiM2ZjOGE5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHtDYXJkLFJlc291cmNlTGlzdCxSZXNvdXJjZUl0ZW0sU3RhY2ssVGV4dFN0eWxlLFRodW1ibmFpbH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcydcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJ1xyXG5cclxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEUyA9IGdxbGBcclxucXVlcnkgZ2V0UHJvZHVjdHMoJGlkczpbSUQhXSEpe1xyXG5cdG5vZGVzKGlkczokaWRzKXtcclxuICAgIC4uLm9uIFByb2R1Y3R7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGhhbmRsZVxyXG4gICAgICBpZFxyXG4gICAgICBpbWFnZXMoZmlyc3Q6MSl7XHJcbiAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHZhcmlhbnRzKGZpcnN0OjEpe1xyXG4gICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuYFxyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCgpe1xyXG4gIGNvbnN0IHtsb2FkaW5nLGVycm9yLGRhdGF9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RTX0JZX0lEUyx7dmFyaWFibGVzOntpZHM6c3RvcmUuZ2V0KCdpZHMnKX19KVxyXG4gIGlmKGxvYWRpbmcpe3JldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj59XHJcbiAgaWYoZXJyb3Ipe3JldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2Pn1cclxuICBjb25zb2xlLmxvZygnZGF0YTogJyxkYXRhKVxyXG4gIHJldHVybihcclxuICAgIDxDYXJkPlxyXG4gIDxSZXNvdXJjZUxpc3RcclxuICAgIHNob3dIZWFkZXI9XCJ0cnVlXCJcclxuICAgIHJlc291cmNlTmFtZT17e3Npbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJ319XHJcbiAgICBpdGVtcz17ZGF0YS5ub2Rlc31cclxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgIDxUaHVtYm5haWwgXHJcbiAgICAgICAgc291cmNlPXtpdGVtLmltYWdlcy5lZGdlc1swXT9pdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjOlwiXCJ9XHJcbiAgICAgICAgIGFsdD17aXRlbS5pbWFnZXMuZWRnZXNbMF0/aXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0OlwiXCJ9IFxyXG4gICAgICAgICBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXNvdXJjZUl0ZW1cclxuICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+e2l0ZW0udGl0bGV9PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD4ke2l0ZW0uaW1hZ2VzLnZhcmlhbnRzWzBdLm5vZGUucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1Jlc291cmNlSXRlbT5cclxuICAgICAgKTtcclxuICAgIH19XHJcbiAgLz5cclxuPC9DYXJkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==