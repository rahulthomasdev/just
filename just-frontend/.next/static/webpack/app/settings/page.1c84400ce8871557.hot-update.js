"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/settings/page",{

/***/ "(app-pages-browser)/./app/settings/page.js":
/*!******************************!*\
  !*** ./app/settings/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/button */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/input */ \"(app-pages-browser)/./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/select */ \"(app-pages-browser)/./node_modules/antd/es/select/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/style.scss */ \"(app-pages-browser)/./styles/style.scss\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./app/components/Footer.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./app/components/Header.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Settings() {\n    _s();\n    const [interests, setInterests] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"male\");\n    const [genderFilter, setGenderFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"female\");\n    const handleData = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"interests\", interests.split(\",\"));\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"gender\", gender);\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"genderFilter\", genderFilter);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto grow p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white text-xl\",\n                        children: \"Settings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-400 py-3\",\n                        children: \"Interests:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"bg-gray-800 border-none text-white\",\n                            placeholder: \"Reading, Coding, Traveling etc\",\n                            onChange: (e)=>setInterests(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                            lineNumber: 27,\n                            columnNumber: 39\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-400 py-3\",\n                        children: \"Gender:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"text-white\",\n                            defaultValue: \"male\",\n                            style: {\n                                width: 120\n                            },\n                            onChange: (value)=>setGender(value),\n                            options: [\n                                {\n                                    value: \"male\",\n                                    label: \"Male\"\n                                },\n                                {\n                                    value: \"female\",\n                                    label: \"Female\"\n                                }\n                            ]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-400 py-3\",\n                        children: \"Gender Filter:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"text-white\",\n                            defaultValue: \"female\",\n                            style: {\n                                width: 120\n                            },\n                            onChange: (value)=>setGenderFilter(value),\n                            options: [\n                                {\n                                    value: \"male\",\n                                    label: \"Male\"\n                                },\n                                {\n                                    value: \"female\",\n                                    label: \"Female\"\n                                }\n                            ]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: \"text-white m-3 hover:!border-yellow-600 hover:!text-yellow-600 border-green-600\",\n                            onClick: handleData,\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\settings\\\\page.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Settings, \"VdqMP1FZXKs442Qe8jKVen5qW+A=\");\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zZXR0aW5ncy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkM7QUFBQTtBQUFBO0FBQ2Q7QUFDRTtBQUNBO0FBQ1M7QUFDQTtBQUUzQixTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUdqRCxNQUFNVSxhQUFhO1FBQ2ZYLGlEQUFNQSxDQUFDWSxHQUFHLENBQUMsYUFBYVAsVUFBVVEsS0FBSyxDQUFDO1FBQ3hDYixpREFBTUEsQ0FBQ1ksR0FBRyxDQUFDLFVBQVVMO1FBQ3JCUCxpREFBTUEsQ0FBQ1ksR0FBRyxDQUFDLGdCQUFnQkg7SUFDL0I7SUFFQSxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNaLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXFCOzs7Ozs7a0NBQ25DLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbEMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFPLDRFQUFDakIscURBQUtBOzRCQUFDaUIsV0FBVTs0QkFBcUNHLGFBQVk7NEJBQWlDQyxVQUFVLENBQUNDLElBQU1kLGFBQWFjLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7a0NBQ3JLLDhEQUFDTDt3QkFBRUYsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbEMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDaEIsc0RBQU1BOzRCQUFDZ0IsV0FBVTs0QkFDZFEsY0FBYTs0QkFDYkMsT0FBTztnQ0FBRUMsT0FBTzs0QkFBSzs0QkFDckJOLFVBQVUsQ0FBQ0csUUFBVWQsVUFBVWM7NEJBQy9CSSxTQUFTO2dDQUNMO29DQUFFSixPQUFPO29DQUFRSyxPQUFPO2dDQUFPO2dDQUMvQjtvQ0FBRUwsT0FBTztvQ0FBVUssT0FBTztnQ0FBUzs2QkFDdEM7Ozs7Ozs7Ozs7O2tDQUVULDhEQUFDVjt3QkFBRUYsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbEMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDaEIsc0RBQU1BOzRCQUFDZ0IsV0FBVTs0QkFDZFEsY0FBYTs0QkFDYkMsT0FBTztnQ0FBRUMsT0FBTzs0QkFBSzs0QkFDckJOLFVBQVUsQ0FBQ0csUUFBVVosZ0JBQWdCWTs0QkFDckNJLFNBQVM7Z0NBQ0w7b0NBQUVKLE9BQU87b0NBQVFLLE9BQU87Z0NBQU87Z0NBQy9CO29DQUFFTCxPQUFPO29DQUFVSyxPQUFPO2dDQUFTOzZCQUN0Qzs7Ozs7Ozs7Ozs7a0NBRVQsOERBQUNiO2tDQUNHLDRFQUFDakIsc0RBQU1BOzRCQUFDa0IsV0FBVTs0QkFBa0ZhLFNBQVNqQjtzQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2pJLDhEQUFDVCwwREFBTUE7Ozs7Ozs7Ozs7O0FBR25CO0dBaER3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NldHRpbmdzL3BhZ2UuanM/N2RkMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XHJcbiAgICBjb25zdCBbaW50ZXJlc3RzLCBzZXRJbnRlcmVzdHNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dlbmRlciwgc2V0R2VuZGVyXSA9IHVzZVN0YXRlKCdtYWxlJyk7XHJcbiAgICBjb25zdCBbZ2VuZGVyRmlsdGVyLCBzZXRHZW5kZXJGaWx0ZXJdID0gdXNlU3RhdGUoJ2ZlbWFsZScpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIENvb2tpZS5zZXQoJ2ludGVyZXN0cycsIGludGVyZXN0cy5zcGxpdCgnLCcpKTtcclxuICAgICAgICBDb29raWUuc2V0KCdnZW5kZXInLCBnZW5kZXIpO1xyXG4gICAgICAgIENvb2tpZS5zZXQoJ2dlbmRlckZpbHRlcicsIGdlbmRlckZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctZnVsbCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBncm93IHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bFwiPlNldHRpbmdzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgcHktM1wiPkludGVyZXN0czo8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTNcIj48SW5wdXQgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgYm9yZGVyLW5vbmUgdGV4dC13aGl0ZVwiIHBsYWNlaG9sZGVyPVwiUmVhZGluZywgQ29kaW5nLCBUcmF2ZWxpbmcgZXRjXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnRlcmVzdHMoZS50YXJnZXQudmFsdWUpfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBweS0zXCI+R2VuZGVyOjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIm1hbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRHZW5kZXIodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnbWFsZScsIGxhYmVsOiAnTWFsZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdmZW1hbGUnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBweS0zXCI+R2VuZGVyIEZpbHRlcjo8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJmZW1hbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRHZW5kZXJGaWx0ZXIodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnbWFsZScsIGxhYmVsOiAnTWFsZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdmZW1hbGUnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbS0zIGhvdmVyOiFib3JkZXIteWVsbG93LTYwMCBob3ZlcjohdGV4dC15ZWxsb3ctNjAwIGJvcmRlci1ncmVlbi02MDBcIiBvbkNsaWNrPXtoYW5kbGVEYXRhfT5TYXZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIklucHV0IiwiU2VsZWN0IiwiQ29va2llIiwidXNlU3RhdGUiLCJGb290ZXIiLCJIZWFkZXIiLCJTZXR0aW5ncyIsImludGVyZXN0cyIsInNldEludGVyZXN0cyIsImdlbmRlciIsInNldEdlbmRlciIsImdlbmRlckZpbHRlciIsInNldEdlbmRlckZpbHRlciIsImhhbmRsZURhdGEiLCJzZXQiLCJzcGxpdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJzdHlsZSIsIndpZHRoIiwib3B0aW9ucyIsImxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/settings/page.js\n"));

/***/ })

});