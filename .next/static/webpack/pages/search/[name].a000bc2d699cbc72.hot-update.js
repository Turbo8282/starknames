"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[name]",{

/***/ "./pages/search/[name].tsx":
/*!*********************************!*\
  !*** ./pages/search/[name].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Name; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/searchbar */ \"./components/searchbar.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/registry */ \"./hooks/registry.tsx\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @starknet-react/core */ \"./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_starknet_react_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_felt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/felt */ \"./utils/felt.tsx\");\n/* harmony import */ var starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! starknet/utils/number */ \"./node_modules/starknet/utils/number.js\");\n/* harmony import */ var starknet_utils_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Name() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var name = router.query.name;\n    var contract = (0,_hooks_registry__WEBPACK_IMPORTED_MODULE_3__.useRegistryContract)().contract;\n    var args = [\n        (0,_utils_felt__WEBPACK_IMPORTED_MODULE_5__.encodeStrAsListOfFelts)(name + \".stark\")\n    ];\n    var ref = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_4__.useStarknetCall)({\n        contract: contract,\n        method: \"get_record_by_name\",\n        args: args\n    }), data = ref.data, loading = ref.loading, error = ref.error;\n    var record = undefined;\n    var a = undefined;\n    if (data !== undefined) {\n        record = {\n            ownerAddress: (0,starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__.toHex)(data[0].owner_addr),\n            resolverAddress: (0,starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__.toHex)(data[0].resolver_addr),\n            apexNamehash: (0,starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__.toHex)(data[0].apex_namehash)\n        };\n        a = record.ownerAddress;\n    }\n    /*  const { contract } = useRegistryContract(); */ /* const { contract } = useContract({\n        abi: RegistryAbi,\n        address: \"0x05ab97cc647943dd0354b7b9073ceed535c3fdc24cc8fbd072979a7897982503\"\n    })\n    let shit = names\n    let yikes = \"hwllo\"\n    let args;\n    if(names !== undefined) {\n        args = [encodeStrAsListOfFelts(names)];\n    }\n\n    const { data, loading, error } = useStarknetCall({\n        contract,\n        method: \"get_record_by_name\",\n        args,\n    }); */ /* let record;\n    if (data !== undefined) {\n        record = {\n          ownerAddress: toHex(data[0].owner_addr),\n          resolverAddress: toHex(data[0].resolver_addr),\n          apexNamehash: toHex(data[0].apex_namehash),\n        };\n    }\n    let a = record.ownerAddress; */ /* let a;\n    let b;\n    let registered = true;\n    \n    if(data === undefined) {\n        registered = false;\n    }\n    else if (toHex(data[0].owner_addr) === '0x0'){\n        registered = false;\n        b = toHex(data[0].owner_addr)\n    } */ /*  else {let a = toHex(data[0].owner_addr)} */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center font-medium text-5xl my-3\",\n                children: [\n                    name,\n                    \".stark\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbar__WEBPACK_IMPORTED_MODULE_1__.NormalSearchBar, {}, void 0, false, {\n                fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading records...\"\n                }, void 0, false, {\n                    fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n                    lineNumber: 91,\n                    columnNumber: 30\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, this);\n};\n_s(Name, \"0t+e9n7gETCtcJIeSGYv7HTjU7c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_registry__WEBPACK_IMPORTED_MODULE_3__.useRegistryContract,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_4__.useStarknetCall\n    ];\n});\n_c = Name;\nvar _c;\n$RefreshReg$(_c, \"Name\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvW25hbWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2RDtBQUNyQjtBQUNtQjtBQUNlO0FBQ2hCO0FBQ1o7O0FBUS9CLFNBQVNNLElBQUksR0FBRzs7SUFDM0IsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLElBQU1PLElBQUksR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNELElBQUk7SUFDOUIsSUFBTSxRQUFVLEdBQUtOLG9FQUFtQixFQUFFLENBQWxDUSxRQUFRO0lBQ2hCLElBQUlDLElBQUksR0FBRztRQUFDUCxtRUFBc0IsQ0FBQ0ksSUFBSSxHQUFHLFFBQVEsQ0FBQztLQUFDO0lBRXBELElBQWlDTCxHQUkvQixHQUorQkEscUVBQWUsQ0FBQztRQUM3Q08sUUFBUSxFQUFSQSxRQUFRO1FBQ1JFLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUJELElBQUksRUFBSkEsSUFBSTtLQUNQLENBQUMsRUFKTUUsSUFBSSxHQUFxQlYsR0FJL0IsQ0FKTVUsSUFBSSxFQUFFQyxPQUFPLEdBQVlYLEdBSS9CLENBSllXLE9BQU8sRUFBRUMsS0FBSyxHQUFLWixHQUkvQixDQUpxQlksS0FBSztJQVE1QixJQUFJQyxNQUFNLEdBQStCQyxTQUFTO0lBQ2xELElBQUlDLENBQUMsR0FBR0QsU0FBUztJQUNqQixJQUFHSixJQUFJLEtBQUtJLFNBQVMsRUFBRTtRQUNuQkQsTUFBTSxHQUFHO1lBQ1RHLFlBQVksRUFBRWQsNERBQUssQ0FBQ1EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxVQUFVLENBQUM7WUFDdkNDLGVBQWUsRUFBRWhCLDREQUFLLENBQUNRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsYUFBYSxDQUFDO1lBQzdDQyxZQUFZLEVBQUVsQiw0REFBSyxDQUFDUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNXLGFBQWEsQ0FBQztTQUN6QztRQUNETixDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csWUFBWTtLQUMxQjtJQUNGLGtEQUFrRCxDQUNqRDs7Ozs7Ozs7Ozs7Ozs7O1VBZU0sQ0FDTjs7Ozs7Ozs7bUNBUStCLENBQy9COzs7Ozs7Ozs7O1FBVUksQ0FDTCwrQ0FBK0MsQ0FTOUMscUJBQ0ksOERBQUNNLEtBQUc7OzBCQUNBLDhEQUFDQSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsK0NBQStDOztvQkFDekRsQixJQUFJO29CQUFDLFFBQ1Y7Ozs7OztvQkFBTTswQkFDTiw4REFBQ1Isa0VBQWU7Ozs7b0JBQUc7MEJBQ25CLDhEQUFDeUIsS0FBRzswQkFDQyxDQUFDWCxPQUFPLGtCQUFJLDhEQUFDVyxLQUFHOzhCQUFDLG9CQUFrQjs7Ozs7d0JBQU07Ozs7O29CQUV4Qzs7Ozs7O1lBRUosQ0FFVDtDQUVKO0dBckZ1Qm5CLElBQUk7O1FBQ1RMLGtEQUFTO1FBRUhDLGdFQUFtQjtRQUdQQyxpRUFBZTs7O0FBTjVCRyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC9bbmFtZV0udHN4PzA4MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9ybWFsU2VhcmNoQmFyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVJlZ2lzdHJ5Q29udHJhY3QgfSBmcm9tIFwiLi4vLi4vaG9va3MvcmVnaXN0cnlcIjtcbmltcG9ydCB7IHVzZVN0YXJrbmV0Q2FsbCwgdXNlU3RhcmtuZXRJbnZva2UgfSBmcm9tIFwiQHN0YXJrbmV0LXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IGVuY29kZVN0ckFzTGlzdE9mRmVsdHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZmVsdFwiO1xuaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwic3RhcmtuZXQvdXRpbHMvbnVtYmVyXCI7XG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lzdHJ5UmVjb3JkIHtcbiAgICBvd25lckFkZHJlc3M6IHN0cmluZztcbiAgICByZXNvbHZlckFkZHJlc3M6IHN0cmluZztcbiAgICBhcGV4TmFtZWhhc2g6IHN0cmluZztcbiAgfVxuICBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmFtZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBuYW1lID0gcm91dGVyLnF1ZXJ5Lm5hbWU7XG4gICAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlUmVnaXN0cnlDb250cmFjdCgpO1xuICAgIGxldCBhcmdzID0gW2VuY29kZVN0ckFzTGlzdE9mRmVsdHMobmFtZSArIFwiLnN0YXJrXCIpXVxuXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlU3RhcmtuZXRDYWxsKHtcbiAgICAgICAgY29udHJhY3QsXG4gICAgICAgIG1ldGhvZDogXCJnZXRfcmVjb3JkX2J5X25hbWVcIixcbiAgICAgICAgYXJncyxcbiAgICB9KTtcblxuICAgIFxuXG4gICAgbGV0IHJlY29yZDogUmVnaXN0cnlSZWNvcmQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgbGV0IGEgPSB1bmRlZmluZWQ7XG4gICAgaWYoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlY29yZCA9IHtcbiAgICAgICAgb3duZXJBZGRyZXNzOiB0b0hleChkYXRhWzBdLm93bmVyX2FkZHIpLFxuICAgICAgICByZXNvbHZlckFkZHJlc3M6IHRvSGV4KGRhdGFbMF0ucmVzb2x2ZXJfYWRkciksXG4gICAgICAgIGFwZXhOYW1laGFzaDogdG9IZXgoZGF0YVswXS5hcGV4X25hbWVoYXNoKSxcbiAgICAgICAgfVxuICAgICAgICBhID0gcmVjb3JkLm93bmVyQWRkcmVzc1xuICAgIH1cbiAgIC8qICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VSZWdpc3RyeUNvbnRyYWN0KCk7ICovXG4gICAgLyogY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3Qoe1xuICAgICAgICBhYmk6IFJlZ2lzdHJ5QWJpLFxuICAgICAgICBhZGRyZXNzOiBcIjB4MDVhYjk3Y2M2NDc5NDNkZDAzNTRiN2I5MDczY2VlZDUzNWMzZmRjMjRjYzhmYmQwNzI5NzlhNzg5Nzk4MjUwM1wiXG4gICAgfSlcbiAgICBsZXQgc2hpdCA9IG5hbWVzXG4gICAgbGV0IHlpa2VzID0gXCJod2xsb1wiXG4gICAgbGV0IGFyZ3M7XG4gICAgaWYobmFtZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhcmdzID0gW2VuY29kZVN0ckFzTGlzdE9mRmVsdHMobmFtZXMpXTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VTdGFya25ldENhbGwoe1xuICAgICAgICBjb250cmFjdCxcbiAgICAgICAgbWV0aG9kOiBcImdldF9yZWNvcmRfYnlfbmFtZVwiLFxuICAgICAgICBhcmdzLFxuICAgIH0pOyAqL1xuICAgIC8qIGxldCByZWNvcmQ7XG4gICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZWNvcmQgPSB7XG4gICAgICAgICAgb3duZXJBZGRyZXNzOiB0b0hleChkYXRhWzBdLm93bmVyX2FkZHIpLFxuICAgICAgICAgIHJlc29sdmVyQWRkcmVzczogdG9IZXgoZGF0YVswXS5yZXNvbHZlcl9hZGRyKSxcbiAgICAgICAgICBhcGV4TmFtZWhhc2g6IHRvSGV4KGRhdGFbMF0uYXBleF9uYW1laGFzaCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxldCBhID0gcmVjb3JkLm93bmVyQWRkcmVzczsgKi9cbiAgICAvKiBsZXQgYTtcbiAgICBsZXQgYjtcbiAgICBsZXQgcmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgXG4gICAgaWYoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlZ2lzdGVyZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodG9IZXgoZGF0YVswXS5vd25lcl9hZGRyKSA9PT0gJzB4MCcpe1xuICAgICAgICByZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgICAgIGIgPSB0b0hleChkYXRhWzBdLm93bmVyX2FkZHIpXG4gICAgfSAqL1xuICAgLyogIGVsc2Uge2xldCBhID0gdG9IZXgoZGF0YVswXS5vd25lcl9hZGRyKX0gKi9cbiAgIFxuXG5cblxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmb250LW1lZGl1bSB0ZXh0LTV4bCBteS0zXCI+XG4gICAgICAgICAgICAgICAge25hbWV9LnN0YXJrXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxOb3JtYWxTZWFyY2hCYXIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIDxkaXY+TG9hZGluZyByZWNvcmRzLi4uPC9kaXY+fVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsiTm9ybWFsU2VhcmNoQmFyIiwidXNlUm91dGVyIiwidXNlUmVnaXN0cnlDb250cmFjdCIsInVzZVN0YXJrbmV0Q2FsbCIsImVuY29kZVN0ckFzTGlzdE9mRmVsdHMiLCJ0b0hleCIsIk5hbWUiLCJyb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJjb250cmFjdCIsImFyZ3MiLCJtZXRob2QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVjb3JkIiwidW5kZWZpbmVkIiwiYSIsIm93bmVyQWRkcmVzcyIsIm93bmVyX2FkZHIiLCJyZXNvbHZlckFkZHJlc3MiLCJyZXNvbHZlcl9hZGRyIiwiYXBleE5hbWVoYXNoIiwiYXBleF9uYW1laGFzaCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search/[name].tsx\n"));

/***/ })

});