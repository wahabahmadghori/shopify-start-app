module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const GET_PRODUCTS_BY_IDS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
query getProducts($ids:[ID!]!){
	nodes(ids:$ids){
    ...on Product{
      title
      handle
      id
      images(first:1){
        edges{
          node{
            originalSrc
            altText
          }
        }
      }
      variants(first:1){
        edges{
          node{
            price
            id
          }
        }
      }
    }
  }
}
`;

function ProductList() {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PRODUCTS_BY_IDS, {
    variables: {
      ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids')
    }
  });

  if (loading) {
    return __jsx("div", null, "loading...");
  }

  if (error) {
    return __jsx("div", null, error.message);
  }

  console.log('data: ', data);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
    showHeader: "true",
    resourceName: {
      singular: 'Product',
      plural: 'Products'
    },
    items: data.nodes,
    renderItem: item => {
      const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
        source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : "",
        alt: item.images.edges[0] ? item.images.edges[0].node.altText : "",
        size: "small"
      });

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceItem"], {
        id: item.id,
        media: media,
        accessibilityLabel: `View details for ${item.title}`
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
        fill: true
      }, __jsx("h2", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextStyle"], {
        variation: "strong"
      }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx("p", null, "$", item.variants.edges[0].node.price))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false
  });
  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');

  function handleSelection(resources) {
    const idsFromRosourses = resources.selection.map(product => product.id);
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
    onCancel: () => setModal({
      open: false
    }),
    onSelection: resources => handleSelection(resources)
  }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: "Select Products",
      onAction: () => setModal({
        open: true
      })
    },
    image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  }, __jsx("p", null, "Select Products"))) : __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ghori\Desktop\Shopify App\shopify-start-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvcmUtanNcIiJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFNfQllfSURTIiwiZ3FsIiwiUHJvZHVjdExpc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZHMiLCJzdG9yZSIsImdldCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsImlkIiwidGl0bGUiLCJ2YXJpYW50cyIsInByaWNlIiwiSW5kZXgiLCJtb2RhbCIsInNldE1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwiZW1wdHlTdGF0ZSIsImhhbmRsZVNlbGVjdGlvbiIsInJlc291cmNlcyIsImlkc0Zyb21Sb3NvdXJzZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0Iiwic2V0IiwiY29udGVudCIsIm9uQWN0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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Q0FBQztBQUFDRSxZQUFJLEVBQUM7QUFBTixPQUFEO0FBRmYsS0FGVjtBQU1FLFNBQUssRUFBQztBQU5SLEtBU0UsbUNBVEYsQ0FERixDQURXLEdBYUQsTUFBQywrREFBRCxPQXJCWixDQURGO0FBeUJIOztBQUVjSixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xyXG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQge0NhcmQsUmVzb3VyY2VMaXN0LFJlc291cmNlSXRlbSxTdGFjayxUZXh0U3R5bGUsVGh1bWJuYWlsfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnXHJcblxyXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSURTID0gZ3FsYFxyXG5xdWVyeSBnZXRQcm9kdWN0cygkaWRzOltJRCFdISl7XHJcblx0bm9kZXMoaWRzOiRpZHMpe1xyXG4gICAgLi4ub24gUHJvZHVjdHtcclxuICAgICAgdGl0bGVcclxuICAgICAgaGFuZGxlXHJcbiAgICAgIGlkXHJcbiAgICAgIGltYWdlcyhmaXJzdDoxKXtcclxuICAgICAgICBlZGdlc3tcclxuICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdmFyaWFudHMoZmlyc3Q6MSl7XHJcbiAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gXHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCl7XHJcbiAgY29uc3Qge2xvYWRpbmcsZXJyb3IsZGF0YX0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFNfQllfSURTLHt2YXJpYWJsZXM6e2lkczpzdG9yZS5nZXQoJ2lkcycpfX0pXHJcbiAgaWYobG9hZGluZyl7cmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2Pn1cclxuICBpZihlcnJvcil7cmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+fVxyXG4gIGNvbnNvbGUubG9nKCdkYXRhOiAnLGRhdGEpXHJcbiAgcmV0dXJuKFxyXG4gICAgPENhcmQ+XHJcbiAgPFJlc291cmNlTGlzdFxyXG4gICAgc2hvd0hlYWRlcj1cInRydWVcIlxyXG4gICAgcmVzb3VyY2VOYW1lPXt7c2luZ3VsYXI6ICdQcm9kdWN0JywgcGx1cmFsOiAnUHJvZHVjdHMnfX1cclxuICAgIGl0ZW1zPXtkYXRhLm5vZGVzfVxyXG4gICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgPFRodW1ibmFpbCBcclxuICAgICAgICBzb3VyY2U9e2l0ZW0uaW1hZ2VzLmVkZ2VzWzBdP2l0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmM6XCJcIn1cclxuICAgICAgICAgYWx0PXtpdGVtLmltYWdlcy5lZGdlc1swXT9pdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHQ6XCJcIn0gXHJcbiAgICAgICAgIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlc291cmNlSXRlbVxyXG4gICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj57aXRlbS50aXRsZX08L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgIDxwPiR7aXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9SZXNvdXJjZUl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gIC8+XHJcbjwvQ2FyZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtFbXB0eVN0YXRlLFBhZ2UsTGF5b3V0fSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJ1xyXG5pbXBvcnQge1Jlc291cmNlUGlja2VyfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0J1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnXHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KCl7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7b3BlbjpmYWxzZX0pXHJcbiAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpe1xyXG4gICAgY29uc3QgaWRzRnJvbVJvc291cnNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKHByb2R1Y3Q9PnByb2R1Y3QuaWQpXHJcbiAgICBzZXRNb2RhbCh7b3BlbjpmYWxzZX0pXHJcbiAgICBzdG9yZS5zZXQoJ2lkcycsaWRzRnJvbVJvc291cnNlcylcclxuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldCgnaWRzJykpXHJcbiAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQYWdlPlxyXG4gICAgICAgIDxSZXNvdXJjZVBpY2tlclxyXG4gICAgICAgIHJlc291cmNlVHlwZT0nUHJvZHVjdCdcclxuICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgIG9wZW49e21vZGFsLm9wZW59XHJcbiAgICAgICAgb25DYW5jZWw9eygpPT5zZXRNb2RhbCh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKT0+aGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZW1wdHlTdGF0ZT9cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPEVtcHR5U3RhdGVcclxuICAgICAgICAgICAgaGVhZGluZz1cIk1hbmFnZSB5b3VyIGludmVudG9yeSB0cmFuc2ZlcnNcIlxyXG4gICAgICAgICAgICBhY3Rpb249e3sgXHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgUHJvZHVjdHNcIixcclxuICAgICAgICAgICAgICBvbkFjdGlvbjooKT0+c2V0TW9kYWwoe29wZW46dHJ1ZX0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IFByb2R1Y3RzPC9wPlxyXG4gICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICAgIDwvTGF5b3V0Pjo8UHJvZHVjdExpc3QvPn1cclxuICAgICAgPC9QYWdlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9