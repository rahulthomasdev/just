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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MenuOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/MenuOutlined.js\");\n/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/button */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var antd_es_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/drawer */ \"(app-pages-browser)/./node_modules/antd/es/drawer/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ResponsiveNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ResponsiveNavbar */ \"(app-pages-browser)/./app/components/ResponsiveNavbar.js\");\n/* harmony import */ var _components_SocketPeer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SocketPeer */ \"(app-pages-browser)/./app/components/SocketPeer.js\");\n/* harmony import */ var _components_SocketRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SocketRoom */ \"(app-pages-browser)/./app/components/SocketRoom.js\");\n/* harmony import */ var _front__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front */ \"(app-pages-browser)/./app/front.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        current: \"mail\",\n        visible: false\n    });\n    const showDrawer = ()=>{\n        setState({\n            visible: true\n        });\n    };\n    const onClose = ()=>{\n        setState({\n            visible: false\n        });\n    };\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-full flex flex-col\",\n        children: [\n            console.log(mode),\n            mode === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"menuBar inline-block\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"logo\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-xl font-bold p-5\",\n                                        children: \"Just\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 36\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"menuCon\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"leftMenu hidden md:block\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ResponsiveNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        className: \"barsMenu bg-gray-500 text-black  md:hidden\",\n                                        type: \"primary\",\n                                        onClick: ()=>showDrawer(),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"barsBtn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_MenuOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 55\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_drawer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        title: \"Basic Drawer\",\n                                        placement: \"left\",\n                                        closable: false,\n                                        onClose: ()=>onClose(),\n                                        visible: state.visible,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ResponsiveNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_front__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setMode: setMode\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true),\n            mode !== null && (mode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocketPeer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 39\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocketRoom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 56\n            }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\page.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"bFvv9aODemlkPCxMlPnLKkkOahU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaUQ7QUFDWDtBQUFBO0FBQ0w7QUFDb0I7QUFDSjtBQUNBO0FBQ3RCO0FBRVosU0FBU1E7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztRQUMvQlEsU0FBUztRQUNUQyxTQUFTO0lBQ2I7SUFDQSxNQUFNQyxhQUFhO1FBQ2ZILFNBQVM7WUFDTEUsU0FBUztRQUNiO0lBQ0o7SUFDQSxNQUFNRSxVQUFVO1FBQ1pKLFNBQVM7WUFDTEUsU0FBUztRQUNiO0lBQ0o7SUFDQSxNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMscUJBQ0ksOERBQUNjO1FBQUlDLFdBQVU7O1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0w7WUFDWkEsU0FBUyxzQkFBUTs7a0NBQ2QsOERBQUNNO3dCQUFJSCxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNJO29DQUFFQyxNQUFLOzhDQUFHLDRFQUFDQzt3Q0FBR04sV0FBVTtrREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRXJELDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDZCxvRUFBUUE7Ozs7Ozs7Ozs7a0RBRWIsOERBQUNILHNEQUFNQTt3Q0FBQ2lCLFdBQVU7d0NBQTZDTyxNQUFLO3dDQUFVQyxTQUFTLElBQU1iO2tEQUN6Riw0RUFBQ2M7NENBQUtULFdBQVU7c0RBQVUsNEVBQUNsQixnRkFBWUE7Ozs7Ozs7Ozs7Ozs7OztrREFFM0MsOERBQUNFLHNEQUFNQTt3Q0FDSDBCLE9BQU07d0NBQ05DLFdBQVU7d0NBQ1ZDLFVBQVU7d0NBQ1ZoQixTQUFTLElBQU1BO3dDQUNmRixTQUFTSCxNQUFNRyxPQUFPO2tEQUV0Qiw0RUFBQ1Isb0VBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlyQiw4REFBQ0csOENBQUlBO3dCQUFDUyxTQUFTQTs7Ozs7Ozs7WUFFbEJELFNBQVMsUUFBU0EsQ0FBQUEscUJBQU8sOERBQUNWLDhEQUFVQTs7OztxQ0FBTSw4REFBQ0MsOERBQVVBOzs7O29CQUFFOzs7Ozs7O0FBR3BFO0dBL0N3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IE1lbnVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIERyYXdlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMZWZ0TWVudSBmcm9tIFwiLi9jb21wb25lbnRzL1Jlc3BvbnNpdmVOYXZiYXJcIjtcclxuaW1wb3J0IFNvY2tldFBlZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Tb2NrZXRQZWVyXCI7XHJcbmltcG9ydCBTb2NrZXRSb29tIGZyb20gXCIuL2NvbXBvbmVudHMvU29ja2V0Um9vbVwiO1xyXG5pbXBvcnQgTW9kZSBmcm9tIFwiLi9mcm9udFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGN1cnJlbnQ6ICdtYWlsJyxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzaG93RHJhd2VyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1mdWxsIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKG1vZGUpfVxyXG4gICAgICAgICAgICB7bW9kZSA9PT0gbnVsbCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51QmFyIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHAtNVwiPkp1c3Q8L2gxPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVDb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0TWVudSBoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiYXJzTWVudSBiZy1ncmF5LTUwMCB0ZXh0LWJsYWNrICBtZDpoaWRkZW5cIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNob3dEcmF3ZXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJzQnRuXCI+PE1lbnVPdXRsaW5lZCAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQmFzaWMgRHJhd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gb25DbG9zZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c3RhdGUudmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8TW9kZSBzZXRNb2RlPXtzZXRNb2RlfSAvPlxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIHttb2RlICE9PSBudWxsICYmIChtb2RlID8gPFNvY2tldFBlZXIgLz4gOiA8U29ja2V0Um9vbSAvPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJNZW51T3V0bGluZWQiLCJCdXR0b24iLCJEcmF3ZXIiLCJ1c2VTdGF0ZSIsIkxlZnRNZW51IiwiU29ja2V0UGVlciIsIlNvY2tldFJvb20iLCJNb2RlIiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjdXJyZW50IiwidmlzaWJsZSIsInNob3dEcmF3ZXIiLCJvbkNsb3NlIiwibW9kZSIsInNldE1vZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiYSIsImhyZWYiLCJoMSIsInR5cGUiLCJvbkNsaWNrIiwic3BhbiIsInRpdGxlIiwicGxhY2VtZW50IiwiY2xvc2FibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});