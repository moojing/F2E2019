webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer */ "./reducer/index.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PaymentCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PaymentCard */ "./components/PaymentCard.js");

var _jsxFileName = "/Users/mujing/Project/TimeRoom/week4-payment/pages/index.js";

 // import Head from 'next/head';
// import Router from 'next/router';




var methods = [{
  name: 'credit',
  texts: ['信用卡', '刷卡'],
  img: 'card-light.png'
}, {
  name: 'shop',
  texts: ['超商代碼', '繳費'],
  img: 'shop-light.png'
}, {
  name: 'atm',
  texts: ['ATM', '轉帳'],
  img: 'ATM-light.png'
}];
var paymentFormInit = {
  method: '',
  data: {}
};

function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(methods[0].name),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentMethod = _useState2[0],
      setCurrentMethod = _useState2[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["PaymentFormReducer"], paymentFormInit),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      paymentData = _useReducer2[0],
      paymentDispatcher = _useReducer2[1];

  var onMethodClick = function onMethodClick(method) {
    setCurrentMethod(method);
    console.log('paymentData', paymentData);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row m-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper wrapper-payment ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\u8ACB\u9078\u64C7\u4ED8\u6B3E\u65B9\u5F0F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "tab tab-method",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, methods.map(function (method, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "card card-method ".concat(currentMethod === method.name ? 'active' : ''),
      onClick: function onClick() {
        onMethodClick(method);
      },
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "/static/".concat(method.img),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, method.texts.map(function (text, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, text);
    })));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab tab-method-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PaymentCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    payment: currentMethod,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "btn btn-teal btn-block py-3 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u78BA\u5B9A\u4ED8\u6B3E ($1500)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper wrapper-order p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u6211\u7684\u8A02\u55AE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "wrapper-body flex-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\b \u6D41\u6D6A\u91D1\u5C6C\u53F2\u840A\u59C6\u93A7\u7532 x 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u6297\u9B54\u6212\u6307 x 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "\u842C\u80FD\u85E5 x 3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u8CE2\u8005\u85E5\u6C34 x 1")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.3fad3b6b1b5c9a0e330f.hot-update.js.map