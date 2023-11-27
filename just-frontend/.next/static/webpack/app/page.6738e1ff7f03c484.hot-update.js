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

/***/ "(app-pages-browser)/./app/components/SocketRoom.js":
/*!**************************************!*\
  !*** ./app/components/SocketRoom.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SocketRoom = ()=>{\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userConnected, setUserConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let data;\n    const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:3001\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        newSocket.on(\"connect\", ()=>{\n            console.log(\"Connected to the server\");\n        });\n        newSocket.on(\"disconnect\", ()=>{\n            console.log(\"Disconnected from the server\");\n        });\n        newSocket.on(\"userId\", (receivedUserId)=>{\n            setUserId(receivedUserId);\n        });\n        newSocket.on(\"userName\", (username)=>{\n            setUserName(username);\n        });\n        newSocket.on(\"chatMessage\", (messageData)=>{\n            console.log(\"Received chat message: \".concat(messageData.message));\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    messageData\n                ]);\n        });\n        newSocket.on(\"userConnected\", (username)=>{\n            data = {\n                \"userName\": username,\n                \"message\": \"connected\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    data\n                ]);\n        });\n        setSocket(newSocket);\n        return ()=>{\n            newSocket.disconnect();\n        };\n    }, []);\n    const handleSendMessage = ()=>{\n        if (socket && message.trim() !== \"\") {\n            socket.emit(\"chatMessage\", {\n                userId,\n                message,\n                userName\n            });\n            setMessage(\"\");\n        }\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSendMessage();\n        }\n    };\n    const handleReset = ()=>{\n        if (userConnected) {\n            newSocket.close();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex-grow flex flex-col justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    console.log(messages),\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                msg.message === \"connected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center text-gray text-sm\",\n                                    children: [\n                                        \"User \",\n                                        msg.userName,\n                                        \" connected\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 56\n                                }, undefined) : null,\n                                msg.message !== \"connected\" && (msg.userId === userId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-right\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-1 p-3 bg-teal-500 rounded-full rounded-tr-none text-black inline-block \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"!text-gray text-xs\",\n                                                    children: msg.userName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 201\n                                                }, undefined),\n                                                \" \",\n                                                msg.message\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 110\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 82\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"m-1 p-3 bg-white rounded-full rounded-tl-none text-black inline-block\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"!text-gray text-xs\",\n                                                children: msg.userName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 401\n                                            }, undefined),\n                                            \" \",\n                                            msg.message\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 314\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 287\n                                }, undefined))\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleReset,\n                        className: \"w-1/8 px-3\",\n                        children: userConnected ? \"Stop\" : \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value),\n                        className: \"rounded-full w-full h-10 text-black px-3\",\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"w-1/8 px-3\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SocketRoom, \"qvpWseiUsaWI1cAb45TVQusG1a4=\");\n_c = SocketRoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketRoom);\nvar _c;\n$RefreshReg$(_c, \"SocketRoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NvY2tldFJvb20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QztBQUNWO0FBRWxDLE1BQU1HLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2EsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25ELElBQUllO0lBQ0osTUFBTUMsWUFBWWYsNERBQUVBLENBQUM7SUFFckJGLGdEQUFTQSxDQUFDO1FBQ05pQixVQUFVQyxFQUFFLENBQUMsV0FBVztZQUNwQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0FILFVBQVVDLEVBQUUsQ0FBQyxjQUFjO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFDQUgsVUFBVUMsRUFBRSxDQUFDLFVBQVUsQ0FBQ0c7WUFDcEJWLFVBQVVVO1FBQ2Q7UUFDQUosVUFBVUMsRUFBRSxDQUFDLFlBQVksQ0FBQ0k7WUFDdEJULFlBQVlTO1FBQ2hCO1FBQ0FMLFVBQVVDLEVBQUUsQ0FBQyxlQUFlLENBQUNLO1lBQ3pCSixRQUFRQyxHQUFHLENBQUMsMEJBQThDLE9BQXBCRyxZQUFZakIsT0FBTztZQUN6REcsWUFBWSxDQUFDZSxlQUFpQjt1QkFBSUE7b0JBQWNEO2lCQUFZO1FBQ2hFO1FBQ0FOLFVBQVVDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQ0k7WUFDM0JOLE9BQU87Z0JBQUUsWUFBWU07Z0JBQVUsV0FBVztZQUFZO1lBQ3REYixZQUFZLENBQUNlLGVBQWlCO3VCQUFJQTtvQkFBY1I7aUJBQUs7UUFDekQ7UUFDQVgsVUFBVVk7UUFDVixPQUFPO1lBQ0hBLFVBQVVRLFVBQVU7UUFDeEI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxvQkFBb0I7UUFDdEIsSUFBSXRCLFVBQVVFLFFBQVFxQixJQUFJLE9BQU8sSUFBSTtZQUNqQ3ZCLE9BQU93QixJQUFJLENBQUMsZUFBZTtnQkFBRWxCO2dCQUFRSjtnQkFBU007WUFBUztZQUN2REwsV0FBVztRQUNmO0lBQ0o7SUFDQSxNQUFNc0IsZ0JBQWdCLENBQUNDO1FBQ25CLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTO1lBQ25CTDtRQUNKO0lBQ0o7SUFDQSxNQUFNTSxjQUFjO1FBQ2hCLElBQUlsQixlQUFlO1lBQ2ZHLFVBQVVnQixLQUFLO1FBQ25CO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEOztvQkFDSWYsUUFBUUMsR0FBRyxDQUFDWjtvQkFDWkEsU0FBUzRCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDaEIsOERBQUNKOztnQ0FDSUcsSUFBSS9CLE9BQU8sS0FBSyw0QkFBYyw4REFBQzRCO29DQUFJQyxXQUFVOzt3Q0FBZ0M7d0NBQU1FLElBQUl6QixRQUFRO3dDQUFDOzs7Ozs7Z0RBQW1CO2dDQUNuSHlCLElBQUkvQixPQUFPLEtBQUssZUFBZ0IrQixDQUFBQSxJQUFJM0IsTUFBTSxLQUFLQSx1QkFBUyw4REFBQ3dCO29DQUFJQyxXQUFVOztzREFBYSw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUE0RSw4REFBQ0Q7b0RBQUlDLFdBQVU7OERBQXNCRSxJQUFJekIsUUFBUTs7Ozs7O2dEQUFPO2dEQUFFeUIsSUFBSS9CLE9BQU87Ozs7Ozs7d0NBQU87Ozs7Ozs4REFBVSw4REFBQzRCO29DQUFJQyxXQUFVOzhDQUFZLDRFQUFDRDt3Q0FBSUMsV0FBVTs7MERBQXdFLDhEQUFDRDtnREFBSUMsV0FBVTswREFBc0JFLElBQUl6QixRQUFROzs7Ozs7NENBQU87NENBQUV5QixJQUFJL0IsT0FBTzs7Ozs7Ozs7Ozs7NkNBQVk7OzJCQUZuY2dDOzs7Ozs7Ozs7OzswQkFNbEIsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0k7d0JBQU9DLFNBQVNSO3dCQUFhRyxXQUFVO2tDQUFjckIsZ0JBQWdCLFNBQVM7Ozs7OztrQ0FDL0UsOERBQUMyQjt3QkFDR0MsTUFBSzt3QkFDTEMsT0FBT3JDO3dCQUNQc0MsVUFBVSxDQUFDZCxJQUFNdkIsV0FBV3VCLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDMUNSLFdBQVU7d0JBQ1ZXLFdBQVdqQjs7Ozs7O2tDQUVmLDhEQUFDVTt3QkFBT0MsU0FBU2Q7d0JBQW1CUyxXQUFVO2tDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0U7R0EvRU1oQztLQUFBQTtBQWlGTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Tb2NrZXRSb29tLmpzPzU5NWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmNvbnN0IFNvY2tldFJvb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlckNvbm5lY3RlZCwgc2V0VXNlckNvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIGNvbnN0IG5ld1NvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDEnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG5ld1NvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB0aGUgc2VydmVyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzY29ubmVjdGVkIGZyb20gdGhlIHNlcnZlcicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5ld1NvY2tldC5vbigndXNlcklkJywgKHJlY2VpdmVkVXNlcklkKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXJJZChyZWNlaXZlZFVzZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCd1c2VyTmFtZScsICh1c2VybmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyTmFtZSh1c2VybmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCdjaGF0TWVzc2FnZScsIChtZXNzYWdlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgY2hhdCBtZXNzYWdlOiAke21lc3NhZ2VEYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG1lc3NhZ2VEYXRhXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCd1c2VyQ29ubmVjdGVkJywgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB7ICd1c2VyTmFtZSc6IHVzZXJuYW1lLCAnbWVzc2FnZSc6ICdjb25uZWN0ZWQnIH07XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGRhdGFdKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFNvY2tldChuZXdTb2NrZXQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ld1NvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc29ja2V0ICYmIG1lc3NhZ2UudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhdE1lc3NhZ2UnLCB7IHVzZXJJZCwgbWVzc2FnZSwgdXNlck5hbWUgfSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaGFuZGxlU2VuZE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodXNlckNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICBuZXdTb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cobWVzc2FnZXMpfVxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttc2cubWVzc2FnZSA9PT0gJ2Nvbm5lY3RlZCcgPyA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1ncmF5IHRleHQtc20nPlVzZXIge21zZy51c2VyTmFtZX0gY29ubmVjdGVkPC9kaXY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21zZy5tZXNzYWdlICE9PSAnY29ubmVjdGVkJyAmJiAobXNnLnVzZXJJZCA9PT0gdXNlcklkID8gPGRpdiBjbGFzc05hbWU9J3RleHQtcmlnaHQnPjxkaXYgY2xhc3NOYW1lPSdtLTEgcC0zIGJnLXRlYWwtNTAwIHJvdW5kZWQtZnVsbCByb3VuZGVkLXRyLW5vbmUgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2sgJz48ZGl2IGNsYXNzTmFtZT0nIXRleHQtZ3JheSB0ZXh0LXhzJz57bXNnLnVzZXJOYW1lfTwvZGl2PiB7bXNnLm1lc3NhZ2V9PC9kaXY+IDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxlZnQnPjxkaXYgY2xhc3NOYW1lPSdtLTEgcC0zIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCByb3VuZGVkLXRsLW5vbmUgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2snPjxkaXYgY2xhc3NOYW1lPSchdGV4dC1ncmF5IHRleHQteHMnPnttc2cudXNlck5hbWV9PC9kaXY+IHttc2cubWVzc2FnZX08L2Rpdj48L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgcC01Jz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9IGNsYXNzTmFtZT0ndy0xLzggcHgtMyc+e3VzZXJDb25uZWN0ZWQgPyBcIlN0b3BcIiA6IFwiTmV4dFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgdy1mdWxsIGgtMTAgdGV4dC1ibGFjayBweC0zJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfSBjbGFzc05hbWU9J3ctMS84IHB4LTMnPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2tldFJvb207XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiU29ja2V0Um9vbSIsInNvY2tldCIsInNldFNvY2tldCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZXJJZCIsInNldFVzZXJJZCIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ1c2VyQ29ubmVjdGVkIiwic2V0VXNlckNvbm5lY3RlZCIsImRhdGEiLCJuZXdTb2NrZXQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJyZWNlaXZlZFVzZXJJZCIsInVzZXJuYW1lIiwibWVzc2FnZURhdGEiLCJwcmV2TWVzc2FnZXMiLCJkaXNjb25uZWN0IiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwiZW1pdCIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwiaGFuZGxlUmVzZXQiLCJjbG9zZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1zZyIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SocketRoom.js\n"));

/***/ })

});