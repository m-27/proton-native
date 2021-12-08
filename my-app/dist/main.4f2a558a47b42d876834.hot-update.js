"use strict";
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proton-native */ "proton-native");
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proton_native__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import from react

 // import the proton-native components

var POMODORO_LEN = 1500; // [s]

var Example = function Example() {
  // all Components must have a render method
  var initState = {
    count: 0,
    start: false,
    times: 1
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState.count),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState.start),
      _useState4 = _slicedToArray(_useState3, 2),
      start = _useState4[0],
      setStart = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState.times),
      _useState6 = _slicedToArray(_useState5, 2),
      times = _useState6[0],
      setTimes = _useState6[1];

  var reset = function reset() {
    setCount(initState.count);
    setStart(initState.start);
    setTimes(initState.times);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!start) {
      return;
    }

    var id = setInterval(function () {
      setCount(function (count) {
        return count + 1;
      });
    }, 1000 / times);
    return function () {
      return clearInterval(id);
    };
  }, [start, times]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.App, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Window, {
    style: {
      width: 700,
      height: 700,
      backgroundColor: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: {
      margin: 10,
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: {
      fontSize: 55
    }
  }, "useCounter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: {
      flexDirection: 'row',
      marginBottom: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: {
      fontSize: 50,
      color: 'darkred'
    }
  }, "".concat(count))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: {
      flexDirection: 'row',
      marginBottom: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onPress: function onPress() {
      return setStart(true);
    },
    title: "Start"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onPress: function onPress() {
      return setStart(false);
    },
    title: "Pause"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onPress: function onPress() {
      return reset();
    },
    title: "Reset"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6a3d6403dd1dd65360b")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.4f2a558a47b42d876834.hot-update.js.map