"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/ResponsiveNavbar.js":
/*!********************************************!*\
  !*** ./app/components/ResponsiveNavbar.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/menu */ \"(app-pages-browser)/./node_modules/antd/es/menu/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SubMenu = antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SubMenu;\nconst MenuItemGroup = antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ItemGroup;\nconst LeftMenu = ()=>{\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleResize = ()=>{\n        setIsMobile(window.innerWidth < 768);\n    };\n    window.addEventListener(\"resize\", handleResize);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleResize();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        mode: isMobile ? \"vertical\" : \"horizontal\",\n        className: \"bg-dark text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined)\n            }, \"mail\", false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Blogs\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                    lineNumber: 22,\n                    columnNumber: 29\n                }, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItemGroup, {\n                        title: \"Item 1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                                children: \"Option 1\"\n                            }, \"setting:1\", false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                                children: \"Option 2\"\n                            }, \"setting:2\", false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItemGroup, {\n                        title: \"Item 2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                                children: \"Option 3\"\n                            }, \"setting:3\", false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                                children: \"Option 4\"\n                            }, \"setting:4\", false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"\",\n                    children: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, \"alipay\", false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\ResponsiveNavbar.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LeftMenu, \"0VTTNJATKABQPGLm9RVT0tKGUgU=\");\n_c = LeftMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftMenu);\nvar _c;\n$RefreshReg$(_c, \"LeftMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Jlc3BvbnNpdmVOYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QjtBQUNnQjtBQUU1QyxNQUFNRyxVQUFVSCxvREFBSUEsQ0FBQ0csT0FBTztBQUM1QixNQUFNQyxnQkFBZ0JKLG9EQUFJQSxDQUFDSyxTQUFTO0FBQ3BDLE1BQU1DLFdBQVc7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1PLGVBQWU7UUFDakJELFlBQVlFLE9BQU9DLFVBQVUsR0FBRztJQUNwQztJQUNBRCxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtJQUNsQ1IsZ0RBQVNBLENBQUM7UUFDTlE7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1Qsb0RBQUlBO1FBQUNhLE1BQU1OLFdBQVcsYUFBYTtRQUFjTyxXQUFVOzswQkFDeEQsOERBQUNkLG9EQUFJQSxDQUFDZSxJQUFJOzBCQUNOLDRFQUFDQztvQkFBRUMsTUFBSzs4QkFBRzs7Ozs7O2VBREE7Ozs7OzBCQUdmLDhEQUFDZDtnQkFBUWUscUJBQU8sOERBQUNDOzhCQUFLOzs7Ozs7O2tDQUNsQiw4REFBQ2Y7d0JBQWNjLE9BQU07OzBDQUNqQiw4REFBQ2xCLG9EQUFJQSxDQUFDZSxJQUFJOzBDQUFpQjsrQkFBWjs7Ozs7MENBQ2YsOERBQUNmLG9EQUFJQSxDQUFDZSxJQUFJOzBDQUFpQjsrQkFBWjs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDWDt3QkFBY2MsT0FBTTs7MENBQ2pCLDhEQUFDbEIsb0RBQUlBLENBQUNlLElBQUk7MENBQWlCOytCQUFaOzs7OzswQ0FDZiw4REFBQ2Ysb0RBQUlBLENBQUNlLElBQUk7MENBQWlCOytCQUFaOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkIsOERBQUNmLG9EQUFJQSxDQUFDZSxJQUFJOzBCQUNOLDRFQUFDQztvQkFBRUMsTUFBSzs4QkFBRzs7Ozs7O2VBREE7Ozs7Ozs7Ozs7O0FBTTNCO0dBL0JNWDtLQUFBQTtBQWdDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9SZXNwb25zaXZlTmF2YmFyLmpzP2ZhNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFN1Yk1lbnUgPSBNZW51LlN1Yk1lbnU7XHJcbmNvbnN0IE1lbnVJdGVtR3JvdXAgPSBNZW51Lkl0ZW1Hcm91cDtcclxuY29uc3QgTGVmdE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudSBtb2RlPXtpc01vYmlsZSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwifSBjbGFzc05hbWU9J2JnLWRhcmsgdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8U3ViTWVudSB0aXRsZT17PHNwYW4+QmxvZ3M8L3NwYW4+fT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbUdyb3VwIHRpdGxlPVwiSXRlbSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzZXR0aW5nOjFcIj5PcHRpb24gMTwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2V0dGluZzoyXCI+T3B0aW9uIDI8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbUdyb3VwIHRpdGxlPVwiSXRlbSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzZXR0aW5nOjNcIj5PcHRpb24gMzwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2V0dGluZzo0XCI+T3B0aW9uIDQ8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW1Hcm91cD5cclxuICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImFsaXBheVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPkNvbnRhY3QgVXM8L2E+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExlZnRNZW51OyJdLCJuYW1lcyI6WyJNZW51IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdWJNZW51IiwiTWVudUl0ZW1Hcm91cCIsIkl0ZW1Hcm91cCIsIkxlZnRNZW51IiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kZSIsImNsYXNzTmFtZSIsIkl0ZW0iLCJhIiwiaHJlZiIsInRpdGxlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ResponsiveNavbar.js\n"));

/***/ })

});