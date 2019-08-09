webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/PayByAtm.js":
/*!***************************!*\
  !*** ./pages/PayByAtm.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mujing/Project/TimeRoom/week4-payment/pages/PayByAtm.js";


var PayByCredit = function PayByCredit() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "PayByShop"));
};

/* harmony default export */ __webpack_exports__["default"] = (PayByCredit);

/***/ }),

/***/ "./pages/PayByShop.js":
/*!****************************!*\
  !*** ./pages/PayByShop.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mujing/Project/TimeRoom/week4-payment/pages/PayByShop.js";


var PayByCredit = function PayByCredit() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "PayByShop"));
};

/* harmony default export */ __webpack_exports__["default"] = (PayByCredit);

/***/ }),

/***/ "./pages/PaymentCard.js":
/*!******************************!*\
  !*** ./pages/PaymentCard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_PayByCredit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/PayByCredit */ "./pages/PayByCredit.js");
/* harmony import */ var _pages_PayByShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/PayByShop */ "./pages/PayByShop.js");
/* harmony import */ var _pages_PayByAtm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/PayByAtm */ "./pages/PayByAtm.js");
var _jsxFileName = "/Users/mujing/Project/TimeRoom/week4-payment/pages/PaymentCard.js";





var PaymentCard = function PaymentCard(_ref) {
  var payment = _ref.payment;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, function () {
    switch (payment) {
      case 'credit':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_PayByCredit__WEBPACK_IMPORTED_MODULE_1__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        });
        break;

      case 'shop':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_PayByShop__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        });
        break;

      case 'atm':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_PayByAtm__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        });
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentCard);

/***/ })

})
//# sourceMappingURL=index.js.2510bdb76ed4bc9b3586.hot-update.js.map