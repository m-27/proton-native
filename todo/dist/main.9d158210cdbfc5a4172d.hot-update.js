"use strict";
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/components/TodoList.js":
/*!************************************!*\
  !*** ./src/components/TodoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proton-native */ "proton-native");
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proton_native__WEBPACK_IMPORTED_MODULE_1__);
 // import from react

 // import the proton-native components

var TodoList = function TodoList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
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
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onPress: function onPress() {
      return props.checkTodo(props.todo.key);
    },
    title: props.todo.isChecked ? "checked" : "todo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Text, null, props.todo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onPress: function onPress() {
      return props.deleteTodo(props.todo.key);
    },
    title: "delete"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("75052bbc1b53ee76b9ea")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.9d158210cdbfc5a4172d.hot-update.js.map