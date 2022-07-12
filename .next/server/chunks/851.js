"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 3658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchBar),
/* harmony export */   "t": () => (/* binding */ NormalSearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const AnimatedInput = ({ placeholder: passedPlaceholder = "" , ...passedProps })=>{
    const { 0: placeholder , 1: setPlaceholder  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(passedPlaceholder.slice(0, 0));
    const { 0: placeholderIndex , 1: setPlaceholderIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const handleKeyDown = (e)=>{
        if (e.key === " " || e.key === "," || e.key === "." || e.key === "+" || e.key === "=" || e.key === "`" || e.key === "~" || e.key === "<" || e.key === ">" || e.key === "/" || e.key === "?" || e.key === ";" || e.key === "'" || e.key === "[" || e.key === "]" || e.key === "{" || e.key === "}" || e.key === "|" || e.key === "(" || e.key === ")" || e.key === "!" || e.key === "@" || e.key === "#" || e.key === "$" || e.key === "%" || e.key === "^" || e.key === "&" || e.key === "*" || e.key === "\\") {
            e.preventDefault();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const intr = setInterval(()=>{
            setPlaceholder(passedPlaceholder.slice(0, placeholderIndex));
            if (placeholderIndex + 1 > passedPlaceholder.length) {} else {
                setPlaceholderIndex(placeholderIndex + 1);
            }
        }, 75);
        return ()=>{
            clearInterval(intr);
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        onKeyDown: handleKeyDown,
        ...passedProps,
        placeholder: placeholder,
        className: "p-3 rounded-3xl border-4 border-slate-300 text-2xl ml-1 relative inline w-full font-light input-searchbar email-id",
        spellCheck: "false",
        minLength: 3
    });
};
const NormalInput = ({ placeholder , ...passedProps })=>{
    const handleKeyDown = (e)=>{
        if (e.key === " " || e.key === "," || e.key === "." || e.key === "+" || e.key === "=" || e.key === "`" || e.key === "~" || e.key === "<" || e.key === ">" || e.key === "/" || e.key === "?" || e.key === ";" || e.key === "'" || e.key === "[" || e.key === "]" || e.key === "{" || e.key === "}" || e.key === "|" || e.key === "(" || e.key === ")" || e.key === "!" || e.key === "@" || e.key === "#" || e.key === "$" || e.key === "%" || e.key === "^" || e.key === "&" || e.key === "*" || e.key === "\\") {
            e.preventDefault();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        onKeyDown: handleKeyDown,
        ...passedProps,
        placeholder: placeholder,
        className: "p-3 rounded-3xl border-4 border-slate-300 text-2xl ml-1 relative inline w-full font-light input-searchbar email-id",
        spellCheck: "false",
        minLength: 3
    });
};
function SearchBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const onSubmit = (event)=>{
        event.preventDefault();
        router.push("/search/" + encodeURI(event.target[0].value));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: onSubmit,
        className: "h-20 flex justify-start items-center xl:h-24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimatedInput, {
                placeholder: "Search names or addresses"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "ml-3 mt-1",
                type: "submit",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/search-solid.svg",
                    width: 30,
                    height: 30
                })
            })
        ]
    });
};
function NormalSearchBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const onSubmit = (event)=>{
        event.preventDefault();
        router.push("/search/" + encodeURI(event.target[0].value));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: onSubmit,
        className: "h-20 flex justify-start items-center xl:h-24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NormalInput, {
                placeholder: "Search other names or addresses"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "ml-3 mt-1",
                type: "submit",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/search-solid.svg",
                    width: 30,
                    height: 30
                })
            })
        ]
    });
}


/***/ })

};
;