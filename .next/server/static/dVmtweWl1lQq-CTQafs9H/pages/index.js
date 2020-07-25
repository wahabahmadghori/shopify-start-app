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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@shopify/polaris"
var polaris_ = __webpack_require__("nj/N");

// EXTERNAL MODULE: external "@shopify/app-bridge-react"
var app_bridge_react_ = __webpack_require__("ZQgG");

// EXTERNAL MODULE: external "store-js"
var external_store_js_ = __webpack_require__("g+b/");
var external_store_js_default = /*#__PURE__*/__webpack_require__.n(external_store_js_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// CONCATENATED MODULE: ./components/ProductList.js

var __jsx = external_react_default.a.createElement;




const GET_PRODUCTS_BY_IDS = external_graphql_tag_default.a`
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
  } = Object(react_hooks_["useQuery"])(GET_PRODUCTS_BY_IDS, {
    variables: {
      ids: external_store_js_default.a.get('ids')
    }
  });

  if (loading) {
    return __jsx("div", null, "loading...");
  }

  if (error) {
    return __jsx("div", null, error.message);
  }

  console.log('data: ', data);
  return __jsx(polaris_["Card"], null, __jsx(polaris_["ResourceList"], {
    showHeader: "true",
    resourceName: {
      singular: 'Product',
      plural: 'Products'
    },
    items: data.nodes,
    renderItem: item => {
      const media = __jsx(polaris_["Thumbnail"], {
        source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : "",
        alt: item.images.edges[0] ? item.images.edges[0].node.altText : "",
        size: "small"
      });

      return __jsx(polaris_["ResourceItem"], {
        id: item.id,
        media: media,
        accessibilityLabel: `View details for ${item.title}`
      }, __jsx(polaris_["Stack"], null, __jsx(polaris_["Stack"].Item, {
        fill: true
      }, __jsx("h2", null, __jsx(polaris_["TextStyle"], {
        variation: "strong"
      }, item.title))), __jsx(polaris_["Stack"].Item, null, __jsx("p", null, "$", item.variants.edges[0].node.price))));
    }
  }));
}

/* harmony default export */ var components_ProductList = (ProductList);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;






function Index() {
  const {
    0: modal,
    1: setModal
  } = Object(external_react_["useState"])({
    open: false
  });
  const emptyState = !external_store_js_default.a.get('ids');

  function handleSelection(resources) {
    const idsFromRosourses = resources.selection.map(product => product.id);
    setModal({
      open: false
    });
    external_store_js_default.a.set('ids', idsFromRosourses);
    console.log(external_store_js_default.a.get('ids'));
  }

  return pages_jsx(polaris_["Page"], null, pages_jsx(polaris_["TitleBar"], {
    primaryAction: {
      content: "Select Products",
      onAction: () => seModal({
        open: true
      })
    }
  }), pages_jsx(app_bridge_react_["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: modal.open,
    onCancel: () => setModal({
      open: false
    }),
    onSelection: resources => handleSelection(resources)
  }), emptyState ? pages_jsx(polaris_["Layout"], null, pages_jsx(polaris_["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: "Select Products",
      onAction: () => setModal({
        open: true
      })
    },
    image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  }, pages_jsx("p", null, "Select Products"))) : pages_jsx(components_ProductList, null));
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "ZQgG":
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g+b/":
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });