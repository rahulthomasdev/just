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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MenuOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/MenuOutlined.js\");\n/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/button */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var antd_es_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/drawer */ \"(app-pages-browser)/./node_modules/antd/es/drawer/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ResponsiveNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ResponsiveNavbar */ \"(app-pages-browser)/./app/components/ResponsiveNavbar.js\");\n/* harmony import */ var _components_SocketPeer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SocketPeer */ \"(app-pages-browser)/./app/components/SocketPeer.js\");\n/* harmony import */ var _components_SocketRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SocketRoom */ \"(app-pages-browser)/./app/components/SocketRoom.js\");\n/* harmony import */ var _front__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front */ \"(app-pages-browser)/./app/front.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        current: \"mail\",\n        visible: false\n    });\n    const showDrawer = ()=>{\n        setState({\n            visible: true\n        });\n    };\n    const onClose = ()=>{\n        setState({\n            visible: false\n        });\n    };\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-full flex flex-col\",\n        children: [\n            console.log(mode),\n            mode === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"menuBar flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:hidden flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"barsMenu bg-gray-400 text-black  md:hidden\",\n                                    type: \"primary\",\n                                    onClick: ()=>showDrawer(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"barsBtn\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 55\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"logo\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-xl font-bold p-5\",\n                                        style: {\n                                            background: \"#01172a\"\n                                        },\n                                        children: \"Just\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 36\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"menuCon grow\",\n                                style: {\n                                    background: \"#01172a\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"leftMenu hidden md:block h-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ResponsiveNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_drawer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        title: \"Basic Drawer\",\n                        placement: \"left\",\n                        closable: false,\n                        onClose: ()=>onClose(),\n                        visible: state.visible,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ResponsiveNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_front__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setMode: setMode\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true),\n            mode !== null && (mode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocketPeer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 39\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocketRoom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 56\n            }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"bFvv9aODemlkPCxMlPnLKkkOahU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaUQ7QUFDWDtBQUFBO0FBQ0w7QUFDb0I7QUFDSjtBQUNBO0FBQ3RCO0FBRVosU0FBU1E7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztRQUMvQlEsU0FBUztRQUNUQyxTQUFTO0lBQ2I7SUFDQSxNQUFNQyxhQUFhO1FBQ2ZILFNBQVM7WUFDTEUsU0FBUztRQUNiO0lBQ0o7SUFDQSxNQUFNRSxVQUFVO1FBQ1pKLFNBQVM7WUFDTEUsU0FBUztRQUNiO0lBQ0o7SUFDQSxNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMscUJBQ0ksOERBQUNjO1FBQUlDLFdBQVU7O1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0w7WUFDWkEsU0FBUyxzQkFBUTs7a0NBQ2QsOERBQUNNO3dCQUFJSCxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNqQixzREFBTUE7b0NBQUNpQixXQUFVO29DQUE2Q0ksTUFBSztvQ0FBVUMsU0FBUyxJQUFNVjs4Q0FDekYsNEVBQUNXO3dDQUFLTixXQUFVO2tEQUFVLDRFQUFDbEIsZ0ZBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHL0MsOERBQUNpQjtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ087b0NBQUVDLE1BQUs7OENBQUcsNEVBQUNDO3dDQUFHVCxXQUFVO3dDQUF3QlUsT0FBTzs0Q0FBRUMsWUFBWTt3Q0FBVTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FFdkYsOERBQUNaO2dDQUFJQyxXQUFVO2dDQUFlVSxPQUFPO29DQUFFQyxZQUFZO2dDQUFVOzBDQUN6RCw0RUFBQ1o7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNkLG9FQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlyQiw4REFBQ0Ysc0RBQU1BO3dCQUNINEIsT0FBTTt3QkFDTkMsV0FBVTt3QkFDVkMsVUFBVTt3QkFDVmxCLFNBQVMsSUFBTUE7d0JBQ2ZGLFNBQVNILE1BQU1HLE9BQU87a0NBRXRCLDRFQUFDUixvRUFBUUE7Ozs7Ozs7Ozs7a0NBRWIsOERBQUNHLDhDQUFJQTt3QkFBQ1MsU0FBU0E7Ozs7Ozs7O1lBRWxCRCxTQUFTLFFBQVNBLENBQUFBLHFCQUFPLDhEQUFDViw4REFBVUE7Ozs7cUNBQU0sOERBQUNDLDhEQUFVQTs7OztvQkFBRTs7Ozs7OztBQUdwRTtHQWpEd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBNZW51T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBEcmF3ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGVmdE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9SZXNwb25zaXZlTmF2YmFyXCI7XHJcbmltcG9ydCBTb2NrZXRQZWVyIGZyb20gXCIuL2NvbXBvbmVudHMvU29ja2V0UGVlclwiO1xyXG5pbXBvcnQgU29ja2V0Um9vbSBmcm9tIFwiLi9jb21wb25lbnRzL1NvY2tldFJvb21cIjtcclxuaW1wb3J0IE1vZGUgZnJvbSBcIi4vZnJvbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjdXJyZW50OiAnbWFpbCcsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2hvd0RyYXdlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctZnVsbCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhtb2RlKX1cclxuICAgICAgICAgICAge21vZGUgPT09IG51bGwgJiYgPD5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudUJhciBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiYXJzTWVudSBiZy1ncmF5LTQwMCB0ZXh0LWJsYWNrICBtZDpoaWRkZW5cIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNob3dEcmF3ZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJzQnRuXCI+PE1lbnVPdXRsaW5lZCAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj48aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgcC01XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMDExNzJhXCIgfX0+SnVzdDwvaDE+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudUNvbiBncm93XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMDExNzJhXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdE1lbnUgaGlkZGVuIG1kOmJsb2NrIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCYXNpYyBEcmF3ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBvbkNsb3NlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c3RhdGUudmlzaWJsZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGVmdE1lbnUgLz5cclxuICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGUgc2V0TW9kZT17c2V0TW9kZX0gLz5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICB7bW9kZSAhPT0gbnVsbCAmJiAobW9kZSA/IDxTb2NrZXRQZWVyIC8+IDogPFNvY2tldFJvb20gLz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTWVudU91dGxpbmVkIiwiQnV0dG9uIiwiRHJhd2VyIiwidXNlU3RhdGUiLCJMZWZ0TWVudSIsIlNvY2tldFBlZXIiLCJTb2NrZXRSb29tIiwiTW9kZSIsIkhvbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY3VycmVudCIsInZpc2libGUiLCJzaG93RHJhd2VyIiwib25DbG9zZSIsIm1vZGUiLCJzZXRNb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsIm5hdiIsInR5cGUiLCJvbkNsaWNrIiwic3BhbiIsImEiLCJocmVmIiwiaDEiLCJzdHlsZSIsImJhY2tncm91bmQiLCJ0aXRsZSIsInBsYWNlbWVudCIsImNsb3NhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});