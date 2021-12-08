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
/* harmony import */ var react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-vector-icons/MaterialIcons */ "react-native-vector-icons/MaterialIcons");
/* harmony import */ var react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './lib/create-icon-set'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! proton-native */ "proton-native");
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(proton_native__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import from react



 // import the proton-native components

var Example = function Example() {
  // all Components must have a render method
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1]; // iniitalize empty object todo


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      todo = _useState4[0],
      setTodo = _useState4[1]; // Initalize empty array to store todos


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      todos = _useState6[0],
      setTodos = _useState6[1]; // function to add todo object in todo list


  var addTodo = function addTodo() {
    if (title.length > 0) {
      // Add todo to the list
      setTodos([].concat(_toConsumableArray(todos), [{
        key: Date.now(),
        name: title,
        isChecked: false
      }])); // clear the value of the textfield

      setTitle("");
    }
  }; // function to mark todo as checked or unchecked


  var checkTodo = function checkTodo(id) {
    // loop through todo list and look for the the todo that matches the given id param
    // update the state using setTodos function
    setTodos(todos.map(function (todo) {
      if (todo.key === id) {
        todo.isChecked = !todo.isChecked;
      }

      return todo;
    }));
  }; // function to delete todo from the todo list


  var deleteTodo = function deleteTodo(id) {
    // loop through todo list and return todos that don't match the id
    // update the state using setTodos function
    setTodos(todos.filter(function (todo) {
      return todo.key !== id;
    }));
  }; // useEffect(() => {
  //   console.log(todos.length, "TodoList length");
  //   //console.log(todos);
  // }, [todos]);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.App, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.Window, {
    style: {
      width: 500,
      height: 600,
      backgroundColor: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.View, {
    style: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.View, {
    style: {
      backgroundColor: "#00ADEF",
      color: "white",
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.Text, {
    style: {
      color: "white",
      fontSize: 24
    }
  }, "Todo App")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.View, {
    style: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
    placeholder: "Add a todo",
    value: title,
    onChangeText: function onChangeText(value) {
      return setTitle(value);
    },
    style: {
      height: 40,
      // borderWidth: 2,
      // borderColor: "#7F39FB",
      // borderRadius: 8,
      padding: 10,
      margin: 10,
      width: "80%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.TouchableOpacity, {
    style: {
      borderWidth: 2,
      borderColor: "#7F39FB",
      backgroundColor: '#fff',
      height: 40,
      width: "10%",
      alignItems: 'center',
      justifyContent: 'center'
    },
    onPress: function onPress() {
      return addTodo();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.Text, {
    style: {
      color: '#00ADEF',
      fontSize: 16
    }
  }, "Add"))), todos.map(function (todo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.View, {
      style: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#EEEEEE",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#666666"
      },
      key: todo.key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_1___default()), {
      name: todo.isChecked ? "check-circle" : "radio-button-unchecked",
      style: {
        width: "20%"
      },
      size: 20,
      color: "#666666",
      onPress: function onPress() {
        return checkTodo(todo.key);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.Text, null, todo.name));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ebfcc543f6d41b367ad6")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.fddadf925abd721f2b70.hot-update.js.map