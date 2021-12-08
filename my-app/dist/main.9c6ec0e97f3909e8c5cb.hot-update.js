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
/* harmony export */   "default": () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proton-native */ "proton-native");
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proton_native__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import from react

 // import the proton-native components

var Example = /*#__PURE__*/function (_Component) {
  _inherits(Example, _Component);

  var _super = _createSuper(Example);

  function Example() {
    _classCallCheck(this, Example);

    return _super.apply(this, arguments);
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      // all Components must have a render method
      var _useState = useState('LIST'),
          _useState2 = _slicedToArray(_useState, 2),
          view = _useState2[0],
          setView = _useState2[1];

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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onPress: function onPress() {
          return setView('LIST');
        },
        title: "tab1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onPress: function onPress() {
          return setView('ITEM');
        },
        title: "tab2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
        style: {
          flexDirection: 'row',
          marginBottom: 10
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Text, {
        style: {
          marginRight: 15,
          fontSize: 20
        }
      }, view)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
        style: {
          flexDirection: 'row',
          marginBottom: 10
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Text, {
        style: {
          marginRight: 15,
          fontSize: 20
        }
      }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Text, {
        style: {
          marginRight: 15,
          fontSize: 20
        }
      }, "cccccc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
        style: {
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 10
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onPress: function onPress() {},
        title: "Submit"
      })))));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1c602a585007f3db8cab")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.9c6ec0e97f3909e8c5cb.hot-update.js.map