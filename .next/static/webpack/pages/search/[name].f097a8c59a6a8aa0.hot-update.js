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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Name; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/searchbar */ \"./components/searchbar.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/registry */ \"./hooks/registry.tsx\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @starknet-react/core */ \"./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_starknet_react_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_felt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/felt */ \"./utils/felt.tsx\");\n/* harmony import */ var starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! starknet/utils/number */ \"./node_modules/starknet/utils/number.js\");\n/* harmony import */ var starknet_utils_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Name() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var name = router.query.name;\n    var contract = (0,_hooks_registry__WEBPACK_IMPORTED_MODULE_3__.useRegistryContract)().contract;\n    var args = [\n        (0,_utils_felt__WEBPACK_IMPORTED_MODULE_5__.encodeStrAsListOfFelts)(name + \".stark\")\n    ];\n    var ref = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_4__.useStarknetCall)({\n        contract: contract,\n        method: \"get_record_by_name\",\n        args: args\n    }), data = ref.data, loading = ref.loading, error = ref.error;\n    var record = undefined;\n    var a = undefined;\n    if (data !== undefined) {\n        record = {\n            ownerAddress: (0,starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__.toHex)(data[0].owner_addr),\n            resolverAddress: (0,starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__.toHex)(data[0].resolver_addr),\n            apexNamehash: (0,starknet_utils_number__WEBPACK_IMPORTED_MODULE_6__.toHex)(data[0].apex_namehash)\n        };\n        a = record.ownerAddress;\n    }\n    /*  const { contract } = useRegistryContract(); */ /* const { contract } = useContract({\n        abi: RegistryAbi,\n        address: \"0x05ab97cc647943dd0354b7b9073ceed535c3fdc24cc8fbd072979a7897982503\"\n    })\n    let shit = names\n    let yikes = \"hwllo\"\n    let args;\n    if(names !== undefined) {\n        args = [encodeStrAsListOfFelts(names)];\n    }\n\n    const { data, loading, error } = useStarknetCall({\n        contract,\n        method: \"get_record_by_name\",\n        args,\n    }); */ /* let record;\n    if (data !== undefined) {\n        record = {\n          ownerAddress: toHex(data[0].owner_addr),\n          resolverAddress: toHex(data[0].resolver_addr),\n          apexNamehash: toHex(data[0].apex_namehash),\n        };\n    }\n    let a = record.ownerAddress; */ /* let a;\n    let b;\n    let registered = true;\n    \n    if(data === undefined) {\n        registered = false;\n    }\n    else if (toHex(data[0].owner_addr) === '0x0'){\n        registered = false;\n        b = toHex(data[0].owner_addr)\n    } */ /*  else {let a = toHex(data[0].owner_addr)} */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center font-medium text-5xl my-3\",\n                children: [\n                    name,\n                    \".stark\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbar__WEBPACK_IMPORTED_MODULE_1__.NormalSearchBar, {}, void 0, false, {\n                fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading records...\"\n                }, void 0, false, {\n                    fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n                    lineNumber: 91,\n                    columnNumber: 29\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dmesg/starknames/starknames/pages/search/[name].tsx\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, this);\n};\n_s(Name, \"0t+e9n7gETCtcJIeSGYv7HTjU7c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_registry__WEBPACK_IMPORTED_MODULE_3__.useRegistryContract,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_4__.useStarknetCall\n    ];\n});\n_c = Name;\nvar _c;\n$RefreshReg$(_c, \"Name\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvW25hbWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2RDtBQUNyQjtBQUNtQjtBQUNlO0FBQ2hCO0FBQ1o7O0FBUS9CLFNBQVNNLElBQUksR0FBRzs7SUFDM0IsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLElBQU1PLElBQUksR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNELElBQUk7SUFDOUIsSUFBTSxRQUFVLEdBQUtOLG9FQUFtQixFQUFFLENBQWxDUSxRQUFRO0lBQ2hCLElBQUlDLElBQUksR0FBRztRQUFDUCxtRUFBc0IsQ0FBQ0ksSUFBSSxHQUFHLFFBQVEsQ0FBQztLQUFDO0lBRXBELElBQWlDTCxHQUkvQixHQUorQkEscUVBQWUsQ0FBQztRQUM3Q08sUUFBUSxFQUFSQSxRQUFRO1FBQ1JFLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUJELElBQUksRUFBSkEsSUFBSTtLQUNQLENBQUMsRUFKTUUsSUFBSSxHQUFxQlYsR0FJL0IsQ0FKTVUsSUFBSSxFQUFFQyxPQUFPLEdBQVlYLEdBSS9CLENBSllXLE9BQU8sRUFBRUMsS0FBSyxHQUFLWixHQUkvQixDQUpxQlksS0FBSztJQVE1QixJQUFJQyxNQUFNLEdBQStCQyxTQUFTO0lBQ2xELElBQUlDLENBQUMsR0FBR0QsU0FBUztJQUNqQixJQUFHSixJQUFJLEtBQUtJLFNBQVMsRUFBRTtRQUNuQkQsTUFBTSxHQUFHO1lBQ1RHLFlBQVksRUFBRWQsNERBQUssQ0FBQ1EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxVQUFVLENBQUM7WUFDdkNDLGVBQWUsRUFBRWhCLDREQUFLLENBQUNRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsYUFBYSxDQUFDO1lBQzdDQyxZQUFZLEVBQUVsQiw0REFBSyxDQUFDUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNXLGFBQWEsQ0FBQztTQUN6QztRQUNETixDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csWUFBWTtLQUMxQjtJQUNGLGtEQUFrRCxDQUNqRDs7Ozs7Ozs7Ozs7Ozs7O1VBZU0sQ0FDTjs7Ozs7Ozs7bUNBUStCLENBQy9COzs7Ozs7Ozs7O1FBVUksQ0FDTCwrQ0FBK0MsQ0FTOUMscUJBQ0ksOERBQUNNLEtBQUc7OzBCQUNBLDhEQUFDQSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsK0NBQStDOztvQkFDekRsQixJQUFJO29CQUFDLFFBQ1Y7Ozs7OztvQkFBTTswQkFDTiw4REFBQ1Isa0VBQWU7Ozs7b0JBQUc7MEJBQ25CLDhEQUFDeUIsS0FBRzswQkFDQ1gsT0FBTyxrQkFBSSw4REFBQ1csS0FBRzs4QkFBQyxvQkFBa0I7Ozs7O3dCQUFNOzs7OztvQkFFdkM7Ozs7OztZQUVKLENBRVQ7Q0FFSjtHQXJGdUJuQixJQUFJOztRQUNUTCxrREFBUztRQUVIQyxnRUFBbUI7UUFHUEMsaUVBQWU7OztBQU41QkcsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2gvW25hbWVdLnRzeD8wODBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vcm1hbFNlYXJjaEJhciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaGJhclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VSZWdpc3RyeUNvbnRyYWN0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyB1c2VTdGFya25ldENhbGwsIHVzZVN0YXJrbmV0SW52b2tlIH0gZnJvbSBcIkBzdGFya25ldC1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBlbmNvZGVTdHJBc0xpc3RPZkZlbHRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2ZlbHRcIjtcbmltcG9ydCB7IHRvSGV4IH0gZnJvbSBcInN0YXJrbmV0L3V0aWxzL251bWJlclwiO1xuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RyeVJlY29yZCB7XG4gICAgb3duZXJBZGRyZXNzOiBzdHJpbmc7XG4gICAgcmVzb2x2ZXJBZGRyZXNzOiBzdHJpbmc7XG4gICAgYXBleE5hbWVoYXNoOiBzdHJpbmc7XG4gIH1cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hbWUoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgbmFtZSA9IHJvdXRlci5xdWVyeS5uYW1lO1xuICAgIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZVJlZ2lzdHJ5Q29udHJhY3QoKTtcbiAgICBsZXQgYXJncyA9IFtlbmNvZGVTdHJBc0xpc3RPZkZlbHRzKG5hbWUgKyBcIi5zdGFya1wiKV1cblxuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVN0YXJrbmV0Q2FsbCh7XG4gICAgICAgIGNvbnRyYWN0LFxuICAgICAgICBtZXRob2Q6IFwiZ2V0X3JlY29yZF9ieV9uYW1lXCIsXG4gICAgICAgIGFyZ3MsXG4gICAgfSk7XG5cbiAgICBcblxuICAgIGxldCByZWNvcmQ6IFJlZ2lzdHJ5UmVjb3JkIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGxldCBhID0gdW5kZWZpbmVkO1xuICAgIGlmKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZWNvcmQgPSB7XG4gICAgICAgIG93bmVyQWRkcmVzczogdG9IZXgoZGF0YVswXS5vd25lcl9hZGRyKSxcbiAgICAgICAgcmVzb2x2ZXJBZGRyZXNzOiB0b0hleChkYXRhWzBdLnJlc29sdmVyX2FkZHIpLFxuICAgICAgICBhcGV4TmFtZWhhc2g6IHRvSGV4KGRhdGFbMF0uYXBleF9uYW1laGFzaCksXG4gICAgICAgIH1cbiAgICAgICAgYSA9IHJlY29yZC5vd25lckFkZHJlc3NcbiAgICB9XG4gICAvKiAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlUmVnaXN0cnlDb250cmFjdCgpOyAqL1xuICAgIC8qIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZUNvbnRyYWN0KHtcbiAgICAgICAgYWJpOiBSZWdpc3RyeUFiaSxcbiAgICAgICAgYWRkcmVzczogXCIweDA1YWI5N2NjNjQ3OTQzZGQwMzU0YjdiOTA3M2NlZWQ1MzVjM2ZkYzI0Y2M4ZmJkMDcyOTc5YTc4OTc5ODI1MDNcIlxuICAgIH0pXG4gICAgbGV0IHNoaXQgPSBuYW1lc1xuICAgIGxldCB5aWtlcyA9IFwiaHdsbG9cIlxuICAgIGxldCBhcmdzO1xuICAgIGlmKG5hbWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXJncyA9IFtlbmNvZGVTdHJBc0xpc3RPZkZlbHRzKG5hbWVzKV07XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlU3RhcmtuZXRDYWxsKHtcbiAgICAgICAgY29udHJhY3QsXG4gICAgICAgIG1ldGhvZDogXCJnZXRfcmVjb3JkX2J5X25hbWVcIixcbiAgICAgICAgYXJncyxcbiAgICB9KTsgKi9cbiAgICAvKiBsZXQgcmVjb3JkO1xuICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVjb3JkID0ge1xuICAgICAgICAgIG93bmVyQWRkcmVzczogdG9IZXgoZGF0YVswXS5vd25lcl9hZGRyKSxcbiAgICAgICAgICByZXNvbHZlckFkZHJlc3M6IHRvSGV4KGRhdGFbMF0ucmVzb2x2ZXJfYWRkciksXG4gICAgICAgICAgYXBleE5hbWVoYXNoOiB0b0hleChkYXRhWzBdLmFwZXhfbmFtZWhhc2gpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsZXQgYSA9IHJlY29yZC5vd25lckFkZHJlc3M7ICovXG4gICAgLyogbGV0IGE7XG4gICAgbGV0IGI7XG4gICAgbGV0IHJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgIFxuICAgIGlmKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRvSGV4KGRhdGFbMF0ub3duZXJfYWRkcikgPT09ICcweDAnKXtcbiAgICAgICAgcmVnaXN0ZXJlZCA9IGZhbHNlO1xuICAgICAgICBiID0gdG9IZXgoZGF0YVswXS5vd25lcl9hZGRyKVxuICAgIH0gKi9cbiAgIC8qICBlbHNlIHtsZXQgYSA9IHRvSGV4KGRhdGFbMF0ub3duZXJfYWRkcil9ICovXG4gICBcblxuXG5cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC01eGwgbXktM1wiPlxuICAgICAgICAgICAgICAgIHtuYW1lfS5zdGFya1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Tm9ybWFsU2VhcmNoQmFyIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXY+TG9hZGluZyByZWNvcmRzLi4uPC9kaXY+fVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbiAgICBcbn0iXSwibmFtZXMiOlsiTm9ybWFsU2VhcmNoQmFyIiwidXNlUm91dGVyIiwidXNlUmVnaXN0cnlDb250cmFjdCIsInVzZVN0YXJrbmV0Q2FsbCIsImVuY29kZVN0ckFzTGlzdE9mRmVsdHMiLCJ0b0hleCIsIk5hbWUiLCJyb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJjb250cmFjdCIsImFyZ3MiLCJtZXRob2QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVjb3JkIiwidW5kZWZpbmVkIiwiYSIsIm93bmVyQWRkcmVzcyIsIm93bmVyX2FkZHIiLCJyZXNvbHZlckFkZHJlc3MiLCJyZXNvbHZlcl9hZGRyIiwiYXBleE5hbWVoYXNoIiwiYXBleF9uYW1laGFzaCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search/[name].tsx\n"));

/***/ })

});