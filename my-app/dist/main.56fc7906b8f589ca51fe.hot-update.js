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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(POMODORO_LEN),
      _useState2 = _slicedToArray(_useState, 2),
      timeInSeconds = _useState2[0],
      setTimeInSeconds = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('LIST'),
      _useState4 = _slicedToArray(_useState3, 2),
      option = _useState4[0],
      setOption = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('00'),
      _useState6 = _slicedToArray(_useState5, 2),
      minutes = _useState6[0],
      setMinutes = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('01'),
      _useState8 = _slicedToArray(_useState7, 2),
      seconds = _useState8[0],
      setSeconds = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    hours: 0,
    minutes: 0,
    seconds: 1
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      time = _useState10[0],
      setTime = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      startTime = _useState12[0],
      setStartTime = _useState12[1];

  var initState = {
    count: 0,
    start: false,
    times: 1
  };

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState.count),
      _useState14 = _slicedToArray(_useState13, 2),
      count = _useState14[0],
      setCount = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState.start),
      _useState16 = _slicedToArray(_useState15, 2),
      start = _useState16[0],
      setStart = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState.times),
      _useState18 = _slicedToArray(_useState17, 2),
      times = _useState18[0],
      setTimes = _useState18[1];

  var reset = function reset() {
    setCount(initState.count);
    setStart(initState.start);
    setTimes(initState.times);
  };

  useEffect(function () {
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
  }, [start, times]); // const startTimer = useCallback(() => {
  //   if (!this.intervalId && timeInSeconds > 0) {
  //     this.setState({ startTime: Date.now() }); // [ms]
  //     // https://stackoverflow.com/a/29972322/10620237
  //     this.intervalId = setInterval(() => {
  //       const elapsedTime = Date.now() - this.state.startTime; // [ms]
  //       this.updateTimer(timeInSeconds - Math.floor(elapsedTime / 1000)); // [s]
  //     }, 100);
  //   }
  // }, [timeInSeconds]);

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
  }, "CatApi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
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
/******/ 	__webpack_require__.h = () => ("4b29c49dfecfec8b2ee3")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.56fc7906b8f589ca51fe.hot-update.js.map