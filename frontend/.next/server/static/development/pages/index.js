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

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _copy_AboutCopy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copy/AboutCopy */ "./components/copy/AboutCopy.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\About.js";



var AboutSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "About__AboutSection",
  componentId: "sc-1kd2gov-0"
})(["display:flex;flex-direction:row-reverse;width:100vw;min-height:50rem;background-image:url(\"https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80\");background-repeat:no-repeat;background-size:cover;background-origin:border-box;background-position-x:-50rem;@media (max-width:768px){background-position-x:0;}"]);
var AboutText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "About__AboutText",
  componentId: "sc-1kd2gov-1"
})(["background-color:", ";color:", ";padding:4rem 6rem;position:relative;width:50%;transition:0.5s ease;outline:2px solid ", ";outline-offset:-30px;@media (max-width:768px){width:100%;opacity:0.8;}"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return "rgba(".concat(props.theme.offWhiteRGB, ", 0.5)");
});

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutSection, {
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_copy_AboutCopy__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddToCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SelectQuantity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectQuantity */ "./components/SelectQuantity.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\AddToCart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation addToCart($id: ID!, $quantity: Int!) {\n    addToCart(id: $id, quantity: $quantity) {\n      id\n      quantity\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddToCart =
/*#__PURE__*/
function (_Component) {
  _inherits(AddToCart, _Component);

  function AddToCart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddToCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddToCart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      quantity: 1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateQuantity", function (operator) {
      operator == "add" ? _this.setState({
        quantity: _this.state.quantity + 1
      }) : _this.setState({
        quantity: _this.state.quantity - 1
      });
    });

    return _this;
  }

  _createClass(AddToCart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var id = this.props.id;
      var quantity = this.state.quantity;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: ADD_TO_CART_MUTATION,
        variables: {
          id: id,
          quantity: quantity
        },
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, function (addToCart, _ref) {
        var loading = _ref.loading;

        if (_this2.props.button) {
          var CustomButton = _this2.props.button;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectQuantity__WEBPACK_IMPORTED_MODULE_5__["default"], {
            button: CustomButton,
            updateQuantity: _this2.updateQuantity,
            quantity: _this2.state.quantity,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomButton, {
            onClick: addToCart,
            disabled: loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, "Add", loading && "ing", " to Cart"));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: addToCart,
            disabled: loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "Add", loading && "ing", " to Cart");
        }
      });
    }
  }]);

  return AddToCart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/BlogPost.js":
/*!********************************!*\
  !*** ./components/BlogPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_WhiteSpace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/WhiteSpace */ "./components/styles/WhiteSpace.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\BlogPost.js";





var BlogThumbnail = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({
  displayName: "BlogPost__BlogThumbnail",
  componentId: "sc-1fv26a1-0"
})(["width:200px;margin-right:4rem;"]);
var Post = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "BlogPost__Post",
  componentId: "sc-1fv26a1-1"
})(["display:flex;border-bottom:", ";padding:4rem;transition:0.2s ease;position:relative;&:before{height:100%;content:\"\";width:100%;position:absolute;top:0;left:0;opacity:0.2;}> img{filter:grayscale(100%);}&:hover{cursor:pointer;border-bottom:", ";> img{filter:grayscale(0%);}}"], function (props) {
  return "2px solid rgba(".concat(props.theme.lightgreyRGB, ", 0.5)");
}, function (props) {
  return "2px solid ".concat(props.theme.grey);
});

var BlogPost = function BlogPost(props) {
  var post = props.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: "/updatePost",
        query: {
          id: post.id
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: "/post",
        query: {
          id: post.id
        }
      },
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Post, {
      className: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogThumbnail, {
      src: post.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WhiteSpace__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, post.excerpt)))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Center */ "./components/styles/Center.js");
/* harmony import */ var _styles_ClickableText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ClickableText */ "./components/styles/ClickableText.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\Contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_ADMIN_EMAIL {\n    adminEmail {\n      someString\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var GET_ADMIN_EMAIL = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showEmail: false
    });

    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
        query: GET_ADMIN_EMAIL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Center__WEBPACK_IMPORTED_MODULE_1__["default"], {
          style: {
            margin: "15rem"
          },
          id: "contact",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ClickableText__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onClick: function onClick() {
            return _this2.setState({
              showEmail: true
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, _this2.state.showEmail ? error ? "Houston, we have an error" : data.adminEmail.someString : "Got questions?"));
      });
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/DeleteItem.js":
/*!**********************************!*\
  !*** ./components/DeleteItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deleteItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Items */ "./components/Items.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\DeleteItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var DELETE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var deleteItem =
/*#__PURE__*/
function (_Component) {
  _inherits(deleteItem, _Component);

  function deleteItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, deleteItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(deleteItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      // manually update cache
      // 1. Read cache
      var data = cache.readQuery({
        query: _Items__WEBPACK_IMPORTED_MODULE_3__["ALL_ITEMS_QUERY"]
      }); // 2. Filter the deleted item out of the page

      data.items = data.items.filter(function (item) {
        return item.id !== payload.data.deleteItem.id;
      }); // 3. Put items back in cache

      cache.writeQuery({
        query: _Items__WEBPACK_IMPORTED_MODULE_3__["ALL_ITEMS_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(deleteItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: DELETE_ITEM_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, function (deleteItem, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          style: {
            cursor: "pointer"
          },
          onClick: function onClick() {
            if (confirm("Are you sure you want to delete this item?")) {
              deleteItem().catch(function (err) {
                return alert(err.message);
              });
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, _this2.props.children);
      });
    }
  }]);

  return deleteItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/FeaturedItems.js":
/*!*************************************!*\
  !*** ./components/FeaturedItems.js ***!
  \*************************************/
/*! exports provided: default, ALL_ITEMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ITEMS_QUERY", function() { return ALL_ITEMS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_styles_ItemsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/ItemsList */ "./components/styles/ItemsList.js");
/* harmony import */ var _components_styles_Center__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/Center */ "./components/styles/Center.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _components_styles_Inner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/styles/Inner */ "./components/styles/Inner.js");
/* harmony import */ var _styles_SectionTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/SectionTitle */ "./components/styles/SectionTitle.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\FeaturedItems.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = 2) {\n    items(first: $first, skip: $skip, orderBy: id_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var FeaturedItemsSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.section.withConfig({
  displayName: "FeaturedItems__FeaturedItemsSection",
  componentId: "iry7ky-0"
})(["background:", ";.product-button{margin:10rem;}"], function (props) {
  return props.theme.offWhite;
});
var ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var FeaturedItems =
/*#__PURE__*/
function (_Component) {
  _inherits(FeaturedItems, _Component);

  function FeaturedItems() {
    _classCallCheck(this, FeaturedItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(FeaturedItems).apply(this, arguments));
  }

  _createClass(FeaturedItems, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeaturedItemsSection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Inner__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Center__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SectionTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Our Latest Creations...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Center__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_ITEMS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_ItemsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, data.items.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: item,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          });
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/shop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "/shop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "product-button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "See All Products"))));
      }))));
    }
  }]);

  return FeaturedItems;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FeaturedItems);


/***/ }),

/***/ "./components/Features.js":
/*!********************************!*\
  !*** ./components/Features.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconBlock */ "./components/IconBlock.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _copy_FeaturesCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copy/FeaturesCopy */ "./components/copy/FeaturesCopy.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\Features.js";




var FeaturesSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "Features__FeaturesSection",
  componentId: "ksrb4h-0"
})(["display:flex;color:white;@media (max-width:768px){flex-direction:column;}> *{flex:1;}"]);

var Features = function Features() {
  var features = Object(_copy_FeaturesCopy__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeaturesSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, features.map(function (feature) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: feature.icon,
      icon: feature.icon,
      title: feature.title,
      text: feature.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Center */ "./components/styles/Center.js");
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\Hero.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var HeroSpacer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroSpacer",
  componentId: "sc-1mnnovr-0"
})(["height:80vh;width:100vw;"]);
var HeroImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroImage",
  componentId: "sc-1mnnovr-1"
})(["top:0;left:0;position:fixed;z-index:-2;width:100%;height:100vh;overflow:hidden;background-image:", ";background-repeat:no-repeat;background-size:cover;"], function (props) {
  return "url(".concat(props.image, ")");
});
var HeroText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Hero__HeroText",
  componentId: "sc-1mnnovr-2"
})(["margin-top:60vh;position:relative;color:", ";mix-blend-mode:screen;"], function (props) {
  return props.theme.offWhite;
});

var Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Hero);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Hero)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      _window: false,
      scroll: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handle", function () {
      var hasWindow = window || null;
      hasWindow && _this.setState({
        scroll: window.scrollY
      });
    });

    return _this;
  }

  _createClass(Hero, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        _window: true
      });
      window.addEventListener("scroll", function () {
        return _this2.handle();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      window.removeEventListener("scroll", function () {
        return _this3.handle();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroSpacer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroImage, {
        image: _env_json__WEBPACK_IMPORTED_MODULE_3__.heroImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Center__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroText, {
        id: "hero-text",
        style: {
          transform: "translateY(calc(-".concat(this.state.scroll, "rem / 10))"),
          filter: "blur(calc(".concat(this.state.scroll, "px / 50))"),
          letterSpacing: "calc(".concat(this.state.scroll, "px / 50)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Some Tagline Here"))));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\Icon.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Flag = function Flag(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#010101",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M92.394 35.115V24.089H7.606v31.427h84.788V44.483H43.42v-9.368zM7.606 64.885h84.787V75.91H7.606z",
    __self: this
  })));
};

Flag.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100"
};

var Plant = function Plant(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0zm-1.752 20.07c-1.171 1.172-3.155 1.087-5.303-1.06C3.798 16.862 4.178 13 4.178 13s3.862-.38 6.01 1.768c2.147 2.147 2.232 4.131 1.06 5.302zM10 9.5C10 6.463 13 4 13 4s3 2.463 3 5.5-1.344 4.5-3 4.5-3-1.463-3-4.5zm10.055 9.51c-2.148 2.147-4.132 2.232-5.303 1.06-1.172-1.171-1.087-3.155 1.06-5.303C17.96 12.62 21.822 13 21.822 13s.38 3.862-1.767 6.01z",
    __self: this
  }));
};

Plant.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 26 26"
};

var Pot = function Pot(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __self: this
  }, "Artboard 10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24.29 23.44h1A9.93 9.93 0 0 1 16 29C9.82 29 5.83 24.8 5 17.51l-.27-.07c-.65-.16-1.62-.41-1.62-1.36v-1.84a.92.92 0 0 1 .89-.92h11v5.06a2.31 2.31 0 0 0 4.61 0 .46.46 0 0 1 .46-.46.47.47 0 0 1 .46.46v1.38a3.68 3.68 0 0 0 3.76 3.68zm4.6-9.2v1.84c0 1-1 1.2-1.62 1.36l-.27.07a18.76 18.76 0 0 1-.91 4.09h-1.8a1.84 1.84 0 0 1-1.84-1.84v-1.38a2.3 2.3 0 1 0-4.6 0 .47.47 0 0 1-.46.46.46.46 0 0 1-.46-.46v-5.06h.53l8-8a.92.92 0 0 1 1.3 0l1.95 2a.94.94 0 0 1 .27.66.9.9 0 0 1-.28.65l-4.9 4.69H28a.92.92 0 0 1 .89.92zm-8.82-.92h1.08l5.62-5.42-.64-.64z",
    __self: this
  }));
};

Pot.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 40"
};

var Location = function Location(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M50 10.015c-14.27 0-26 11.128-26 27 0 5.748 1.657 10.134 4.031 14.532L48.25 88.953a2 2 0 0 0 3.5 0l20.219-37.406C74.343 47.149 76 42.763 76 37.015c0-15.872-11.73-27-26-27zm0 14c6.627 0 12 5.373 12 12 0 6.628-5.373 12-12 12s-12-5.372-12-12c0-6.627 5.373-12 12-12z",
    overflow: "visible",
    color: "#000",
    __self: this
  }));
};

Location.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 125"
};

var Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var iconStyle = {
        height: this.props.height || "15vw",
        width: this.props.width || "50%",
        opacity: this.props.opacity || "0.5"
      };

      switch (this.props.icon) {
        case "flag":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flag, {
            style: iconStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          });

        case "plant":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Plant, {
            style: iconStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          });

        case "pot":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pot, {
            style: iconStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          });

        case "location":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, {
            style: iconStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          });

        default:
          break;
      }
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/IconBlock.js":
/*!*********************************!*\
  !*** ./components/IconBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./components/Icon.js");
/* harmony import */ var _styles_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Center */ "./components/styles/Center.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_InnerBorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/InnerBorder */ "./components/styles/InnerBorder.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\IconBlock.js";





var IconTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({
  displayName: "IconBlock__IconTitle",
  componentId: "sc-1l93s5h-0"
})(["text-shadow:", ";white-space:nowrap;"], function (props) {
  return props.theme.textShadow;
});
var IconText = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "IconBlock__IconText",
  componentId: "sc-1l93s5h-1"
})(["text-shadow:", ";"], function (props) {
  return props.theme.textShadow;
});

var IconBlock = function IconBlock(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_InnerBorder__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Center__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.text)));
};

/* harmony default export */ __webpack_exports__["default"] = (IconBlock);

/***/ }),

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteItem */ "./components/DeleteItem.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
/* harmony import */ var _styles_Center__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/Center */ "./components/styles/Center.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\Item.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var Item =
/*#__PURE__*/
function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, item.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.image,
          alt: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: {
            pathname: "/item",
            query: {
              id: item.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, item.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, item.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(item.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_8__["default"], {
          button: _styles_SickButton__WEBPACK_IMPORTED_MODULE_11__["default"],
          id: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "buttonList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: {
            pathname: "/update",
            query: {
              id: item.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "Delete this Item")))));
      });
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Item, "propTypes", {
  item: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
});



/***/ }),

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default, ALL_ITEMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ITEMS_QUERY", function() { return ALL_ITEMS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_styles_ItemsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/ItemsList */ "./components/styles/ItemsList.js");
/* harmony import */ var _components_styles_Center__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/Center */ "./components/styles/Center.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\Items.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    items(first: $first, skip: $skip, orderBy: id_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]);

var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Center__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_ITEMS_QUERY,
        variables: {
          skip: this.props.page * _config__WEBPACK_IMPORTED_MODULE_6__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_6__["perPage"],
          first: Number(_config__WEBPACK_IMPORTED_MODULE_6__["perPage"])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_ItemsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, data.items.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: item,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          });
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Items);


/***/ }),

/***/ "./components/LatestBlogPost.js":
/*!**************************************!*\
  !*** ./components/LatestBlogPost.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BlogPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlogPost */ "./components/BlogPost.js");
/* harmony import */ var _styles_Inner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Inner */ "./components/styles/Inner.js");
/* harmony import */ var _styles_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Section */ "./components/styles/Section.js");
/* harmony import */ var _styles_Center__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Center */ "./components/styles/Center.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_SectionTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SectionTitle */ "./components/styles/SectionTitle.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\LatestBlogPost.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query LATEST_POST($last: Int = 1) {\n    blogPosts(last: $last) {\n      id\n      title\n      excerpt\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var LATEST_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var LatestBlogPost = function LatestBlogPost(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: LATEST_POST,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Inner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Center__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SectionTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "From our Blog...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlogPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
      post: data.blogPosts[0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: {
        pathname: "post",
        query: {
          id: data.blogPosts[0].id
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Center__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        margin: "10rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "See All Posts")))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LatestBlogPost);

/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\Pagination.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var Pagination = function Pagination(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: PAGINATION_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Loading...");
    var count = data.itemsConnection.aggregate.count;
    console.log("count is " + count);
    var pages = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_5__["perPage"]);
    var page = props.page;
    console.log("page is " + page);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: {
        pathname: "items",
        query: {
          page: page - 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "prev",
      "aria-disabled": page <= 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Prev")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Page ", props.page, " of ", pages), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: {
        pathname: "items",
        query: {
          page: page + 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "next",
      "aria-disabled": page >= pages,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Next")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/SelectQuantity.js":
/*!**************************************!*\
  !*** ./components/SelectQuantity.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectQuantity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ClickableText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ClickableText */ "./components/styles/ClickableText.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\SelectQuantity.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var QuantityControls = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SelectQuantity__QuantityControls",
  componentId: "sc-1l4xkmn-0"
})(["display:flex;justify-content:center;animation:fadeIn 0.5s forwards ease;opacity:0;border:", ";padding:1rem;margin:1rem;@keyframes fadeIn{100%{opacity:1;}}> *{margin:1rem;}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}"], function (props) {
  return "1px solid rgba(".concat(props.theme.lightgreyRGB, ", 0.5)");
});

var SelectQuantity =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectQuantity, _Component);

  function SelectQuantity() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectQuantity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectQuantity)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      buttonText: "Add to Cart",
      quantity: 1,
      readytoConfirm: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "confirmQuantity", function () {
      _this.setState({
        readytoConfirm: true
      });
    });

    return _this;
  }

  _createClass(SelectQuantity, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var CustomButton = this.props.button;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ClickableText__WEBPACK_IMPORTED_MODULE_2__["default"], {
        mode: "dark",
        onClick: function onClick() {
          return _this2.setState({
            readytoConfirm: !_this2.state.readytoConfirm
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Select Quantity"), this.state.readytoConfirm && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuantityControls, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomButton, {
        onClick: function onClick() {
          return _this2.state.quantity > 0 && _this2.props.updateQuantity("subtract");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        value: this.props.quantity,
        style: {
          width: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomButton, {
        onClick: function onClick() {
          return _this2.props.updateQuantity("add");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "+")));
    }
  }]);

  return SelectQuantity;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\User.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query CURRENT_USER_QUERY {\n    me {\n      id\n      permissions\n      cart {\n        id\n        quantity\n        item {\n          id\n          title\n          price\n          image\n          description\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./components/copy/AboutCopy.js":
/*!**************************************!*\
  !*** ./components/copy/AboutCopy.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\components\\copy\\AboutCopy.js";


function AboutCopy() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Our Story"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "What is our mission?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "When were we founded?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "How is our product made?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Vivamus consectetuer hendrerit lacus. Curabitur suscipit suscipit tellus. Praesent egestas tristique nibh. Maecenas vestibulum mollis diam. Curabitur suscipit suscipit tellus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Donec vitae sapien ut libero venenatis faucibus. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Quisque ut nisi. Vivamus aliquet elit ac nisl. Nam commodo suscipit quam. Aenean imperdiet. Praesent nonummy mi in odio. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Vivamus in erat ut urna cursus vestibulum. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.")));
}

/* harmony default export */ __webpack_exports__["default"] = (AboutCopy);

/***/ }),

/***/ "./components/copy/FeaturesCopy.js":
/*!*****************************************!*\
  !*** ./components/copy/FeaturesCopy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function FeaturesCopy() {
  return [{
    icon: "location",
    title: "American Made",
    text: "Locally crafted in Steubenville Ohio"
  }, {
    icon: "plant",
    title: "All Organic",
    text: "Blended from all natural ingredients"
  }, {
    icon: "pot",
    title: "Small Batch",
    text: "Made just right, every time."
  }];
}

/* harmony default export */ __webpack_exports__["default"] = (FeaturesCopy);

/***/ }),

/***/ "./components/styles/Center.js":
/*!*************************************!*\
  !*** ./components/styles/Center.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Center = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Center",
  componentId: "sc-4v2qd1-0"
})(["text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (Center);

/***/ }),

/***/ "./components/styles/ClickableText.js":
/*!********************************************!*\
  !*** ./components/styles/ClickableText.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ClickableText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "ClickableText",
  componentId: "tqpg2e-0"
})(["text-decoration:underline;color:", ";cursor:pointer;&:hover{color:", ";}"], function (props) {
  return "rgba(".concat(props.mode === "dark" ? props.theme.greyRGB : props.theme.offWhiteRGB, ", 1)");
}, function (props) {
  return "rgba(".concat(props.mode === "dark" ? props.theme.greyRGB : props.theme.offWhiteRGB, ", 0.5)");
});
/* harmony default export */ __webpack_exports__["default"] = (ClickableText);

/***/ }),

/***/ "./components/styles/Inner.js":
/*!************************************!*\
  !*** ./components/styles/Inner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Inner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inner",
  componentId: "sc-73619n-0"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
/* harmony default export */ __webpack_exports__["default"] = (Inner);

/***/ }),

/***/ "./components/styles/InnerBorder.js":
/*!******************************************!*\
  !*** ./components/styles/InnerBorder.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var InnerBorder = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InnerBorder",
  componentId: "sc-18unu0n-0"
})(["outline:2px solid ", ";outline-offset:-30px;padding:4rem 6rem;"], function (props) {
  return "rgba(".concat(props.theme.offWhiteRGB, ", 0.5)");
});
/* harmony default export */ __webpack_exports__["default"] = (InnerBorder);

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ItemStyles__Item",
  componentId: "sc-1w7o9o9-0"
})(["background:white;border:1px solid ", ";box-shadow:", ";position:relative;display:flex;flex-direction:column;align-items:center;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}> button{margin-bottom:2rem;}.buttonList{display:grid;width:100%;border-top:1px solid ", ";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:", ";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./components/styles/ItemsList.js":
/*!****************************************!*\
  !*** ./components/styles/ItemsList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ItemsList",
  componentId: "sc-1vsm6sb-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;color:", ";"], function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ __webpack_exports__["default"] = (ItemsList);

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "dvizpk-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ", ";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ", ";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "PriceTag",
  componentId: "fh02vh-0"
})(["background:", ";clip-path:polygon(10% 0,100% 1%,100% 100%,10% 100%,0% 50%);color:white;padding:2rem;line-height:1;display:inline-block;box-shadow:", ";position:relative;"], function (props) {
  return "rgba(".concat(props.theme.greyRGB, ", 1)");
}, function (props) {
  return props.theme.bs;
});
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/Section.js":
/*!**************************************!*\
  !*** ./components/styles/Section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "Section",
  componentId: "sc-1b0h94m-0"
})(["background:", ";"], function (props) {
  return props.backgroundColor || props.theme.offWhite;
});
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/styles/SectionTitle.js":
/*!*******************************************!*\
  !*** ./components/styles/SectionTitle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "SectionTitle",
  componentId: "y9ty8t-0"
})(["letter-spacing:0.5rem;padding:2rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "rr7vps-0"
})(["background:", ";color:", ";font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:3rem;padding:0.8rem 1.5rem;display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}&:hover{background:", ";cursor:pointer;}"], function (props) {
  return props.backgroundColor ? "rgba(".concat(props.backgroundColor, ", 1)") : props.theme.black;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.backgroundColor ? "rgba(".concat(props.backgroundColor, ", 0.6)") : "rgba(".concat(props.theme.blackRGB, ", 0.6)");
});
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Title",
  componentId: "uzomnv-0"
})(["margin:0 1rem;text-align:center;margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:", ";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:", ";padding:0 1rem;box-decoration-break:clone;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.offWhite;
});
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/styles/WhiteSpace.js":
/*!*****************************************!*\
  !*** ./components/styles/WhiteSpace.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var WhiteSpace = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "WhiteSpace",
  componentId: "sc-1cfsw4d-0"
})(["white-space:pre-wrap;"]);
/* harmony default export */ __webpack_exports__["default"] = (WhiteSpace);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 4;

/***/ }),

/***/ "./env.json":
/*!******************!*\
  !*** ./env.json ***!
  \******************/
/*! exports provided: heroImage, siteTitle, siteFullTitle, default */
/***/ (function(module) {

module.exports = {"heroImage":"https://res.cloudinary.com/dhjyd95yq/image/upload/v1572788062/sickfits/ra6vbivis2y-thomas-tixtaaz.jpg","siteTitle":"Beowulf","siteFullTitle":"Beowulf Beard Co"};

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Items */ "./components/Items.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_FeaturedItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FeaturedItems */ "./components/FeaturedItems.js");
/* harmony import */ var _components_LatestBlogPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LatestBlogPost */ "./components/LatestBlogPost.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Features */ "./components/Features.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
var _jsxFileName = "C:\\Users\\anherr\\projects\\tutorials\\wesbos\\Advanced-React\\beowulf\\frontend\\pages\\index.js";










var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FeaturedItems__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LatestBlogPost__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], {
    email: "andrewlamansky@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map