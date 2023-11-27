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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SocketRoom = ()=>{\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userConnected, setUserConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:3001\");\n        newSocket.on(\"connect\", ()=>{\n            console.log(\"Connected to the server\");\n        });\n        newSocket.on(\"disconnect\", ()=>{\n            console.log(\"Disconnected from the server\");\n        });\n        newSocket.on(\"userId\", (receivedUserId)=>{\n            setUserId(receivedUserId);\n        });\n        newSocket.on(\"userName\", (username)=>{\n            setUserName(username);\n        });\n        newSocket.on(\"chatMessage\", (messageData)=>{\n            console.log(\"Received chat message: \".concat(messageData.message));\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    messageData\n                ]);\n        });\n        newSocket.on(\"userConnected\", (username)=>{\n            data = {\n                \"userName\": username,\n                \"message\": \"connected\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    data\n                ]);\n        });\n        setSocket(newSocket);\n        return ()=>{\n            newSocket.disconnect();\n        };\n    }, []);\n    const handleSendMessage = ()=>{\n        if (socket && message.trim() !== \"\") {\n            socket.emit(\"chatMessage\", {\n                userId,\n                message,\n                userName\n            });\n            setMessage(\"\");\n        }\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSendMessage();\n        }\n    };\n    const handleReset = ()=>{\n        if (userConnected) {\n            socket.close();\n        } else {\n            socket.connect();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex-grow flex flex-col justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    console.log(messages),\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                msg.message === \"connected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center text-gray text-sm\",\n                                    children: [\n                                        \"User \",\n                                        msg.userName,\n                                        \" connected\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 56\n                                }, undefined) : null,\n                                msg.message !== \"connected\" && (msg.userId === userId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-right\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-1 p-3 bg-teal-500 rounded-full rounded-tr-none text-black inline-block \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"!text-gray text-xs\",\n                                                    children: msg.userName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 201\n                                                }, undefined),\n                                                \" \",\n                                                msg.message\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 110\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 82\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"m-1 p-3 bg-white rounded-full rounded-tl-none text-black inline-block\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"!text-gray text-xs\",\n                                                children: msg.userName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 401\n                                            }, undefined),\n                                            \" \",\n                                            msg.message\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 314\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 287\n                                }, undefined))\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleReset,\n                        className: \"w-1/8 px-3\",\n                        children: userConnected ? \"Stop\" : \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value),\n                        className: \"rounded-full w-full h-10 text-black px-3\",\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"w-1/8 px-3\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SocketRoom, \"qvpWseiUsaWI1cAb45TVQusG1a4=\");\n_c = SocketRoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketRoom);\nvar _c;\n$RefreshReg$(_c, \"SocketRoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NvY2tldFJvb20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QztBQUNWO0FBRWxDLE1BQU1HLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2EsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25ELElBQUllO0lBR0poQixnREFBU0EsQ0FBQztRQUNOLE1BQU1pQixZQUFZZiw0REFBRUEsQ0FBQztRQUNyQmUsVUFBVUMsRUFBRSxDQUFDLFdBQVc7WUFDcEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtRQUNBSCxVQUFVQyxFQUFFLENBQUMsY0FBYztZQUN2QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0FILFVBQVVDLEVBQUUsQ0FBQyxVQUFVLENBQUNHO1lBQ3BCVixVQUFVVTtRQUNkO1FBQ0FKLFVBQVVDLEVBQUUsQ0FBQyxZQUFZLENBQUNJO1lBQ3RCVCxZQUFZUztRQUNoQjtRQUNBTCxVQUFVQyxFQUFFLENBQUMsZUFBZSxDQUFDSztZQUN6QkosUUFBUUMsR0FBRyxDQUFDLDBCQUE4QyxPQUFwQkcsWUFBWWpCLE9BQU87WUFDekRHLFlBQVksQ0FBQ2UsZUFBaUI7dUJBQUlBO29CQUFjRDtpQkFBWTtRQUNoRTtRQUNBTixVQUFVQyxFQUFFLENBQUMsaUJBQWlCLENBQUNJO1lBQzNCTixPQUFPO2dCQUFFLFlBQVlNO2dCQUFVLFdBQVc7WUFBWTtZQUN0RGIsWUFBWSxDQUFDZSxlQUFpQjt1QkFBSUE7b0JBQWNSO2lCQUFLO1FBQ3pEO1FBQ0FYLFVBQVVZO1FBQ1YsT0FBTztZQUNIQSxVQUFVUSxVQUFVO1FBQ3hCO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUMsb0JBQW9CO1FBQ3RCLElBQUl0QixVQUFVRSxRQUFRcUIsSUFBSSxPQUFPLElBQUk7WUFDakN2QixPQUFPd0IsSUFBSSxDQUFDLGVBQWU7Z0JBQUVsQjtnQkFBUUo7Z0JBQVNNO1lBQVM7WUFDdkRMLFdBQVc7UUFDZjtJQUNKO0lBQ0EsTUFBTXNCLGdCQUFnQixDQUFDQztRQUNuQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBUztZQUNuQkw7UUFDSjtJQUNKO0lBQ0EsTUFBTU0sY0FBYztRQUNoQixJQUFJbEIsZUFBZTtZQUNmVixPQUFPNkIsS0FBSztRQUNoQixPQUFPO1lBQ0g3QixPQUFPOEIsT0FBTztRQUNsQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDs7b0JBQ0loQixRQUFRQyxHQUFHLENBQUNaO29CQUNaQSxTQUFTNkIsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNoQiw4REFBQ0o7O2dDQUNJRyxJQUFJaEMsT0FBTyxLQUFLLDRCQUFjLDhEQUFDNkI7b0NBQUlDLFdBQVU7O3dDQUFnQzt3Q0FBTUUsSUFBSTFCLFFBQVE7d0NBQUM7Ozs7OztnREFBbUI7Z0NBQ25IMEIsSUFBSWhDLE9BQU8sS0FBSyxlQUFnQmdDLENBQUFBLElBQUk1QixNQUFNLEtBQUtBLHVCQUFTLDhEQUFDeUI7b0NBQUlDLFdBQVU7O3NEQUFhLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQTRFLDhEQUFDRDtvREFBSUMsV0FBVTs4REFBc0JFLElBQUkxQixRQUFROzs7Ozs7Z0RBQU87Z0RBQUUwQixJQUFJaEMsT0FBTzs7Ozs7Ozt3Q0FBTzs7Ozs7OzhEQUFVLDhEQUFDNkI7b0NBQUlDLFdBQVU7OENBQVksNEVBQUNEO3dDQUFJQyxXQUFVOzswREFBd0UsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUFzQkUsSUFBSTFCLFFBQVE7Ozs7Ozs0Q0FBTzs0Q0FBRTBCLElBQUloQyxPQUFPOzs7Ozs7Ozs7Ozs2Q0FBWTs7MkJBRm5jaUM7Ozs7Ozs7Ozs7OzBCQU1sQiw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDSTt3QkFBT0MsU0FBU1Q7d0JBQWFJLFdBQVU7a0NBQWN0QixnQkFBZ0IsU0FBUzs7Ozs7O2tDQUMvRSw4REFBQzRCO3dCQUNHQyxNQUFLO3dCQUNMQyxPQUFPdEM7d0JBQ1B1QyxVQUFVLENBQUNmLElBQU12QixXQUFXdUIsRUFBRWdCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDMUNSLFdBQVU7d0JBQ1ZXLFdBQVdsQjs7Ozs7O2tDQUVmLDhEQUFDVzt3QkFBT0MsU0FBU2Y7d0JBQW1CVSxXQUFVO2tDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0U7R0FsRk1qQztLQUFBQTtBQW9GTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Tb2NrZXRSb29tLmpzPzU5NWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmNvbnN0IFNvY2tldFJvb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlckNvbm5lY3RlZCwgc2V0VXNlckNvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgZGF0YTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDAxJyk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHRoZSBzZXJ2ZXInKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXdTb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSB0aGUgc2VydmVyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCd1c2VySWQnLCAocmVjZWl2ZWRVc2VySWQpID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlcklkKHJlY2VpdmVkVXNlcklkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXdTb2NrZXQub24oJ3VzZXJOYW1lJywgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXJOYW1lKHVzZXJuYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXdTb2NrZXQub24oJ2NoYXRNZXNzYWdlJywgKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBjaGF0IG1lc3NhZ2U6ICR7bWVzc2FnZURhdGEubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbWVzc2FnZURhdGFdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXdTb2NrZXQub24oJ3VzZXJDb25uZWN0ZWQnLCAodXNlcm5hbWUpID0+IHtcclxuICAgICAgICAgICAgZGF0YSA9IHsgJ3VzZXJOYW1lJzogdXNlcm5hbWUsICdtZXNzYWdlJzogJ2Nvbm5lY3RlZCcgfTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgZGF0YV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0U29ja2V0KG5ld1NvY2tldCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgbmV3U29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzb2NrZXQgJiYgbWVzc2FnZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGF0TWVzc2FnZScsIHsgdXNlcklkLCBtZXNzYWdlLCB1c2VyTmFtZSB9KTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBoYW5kbGVTZW5kTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5jb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtZnVsbCBmbGV4LWdyb3cgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKG1lc3NhZ2VzKX1cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bXNnLm1lc3NhZ2UgPT09ICdjb25uZWN0ZWQnID8gPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtZ3JheSB0ZXh0LXNtJz5Vc2VyIHttc2cudXNlck5hbWV9IGNvbm5lY3RlZDwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttc2cubWVzc2FnZSAhPT0gJ2Nvbm5lY3RlZCcgJiYgKG1zZy51c2VySWQgPT09IHVzZXJJZCA/IDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0Jz48ZGl2IGNsYXNzTmFtZT0nbS0xIHAtMyBiZy10ZWFsLTUwMCByb3VuZGVkLWZ1bGwgcm91bmRlZC10ci1ub25lIHRleHQtYmxhY2sgaW5saW5lLWJsb2NrICc+PGRpdiBjbGFzc05hbWU9JyF0ZXh0LWdyYXkgdGV4dC14cyc+e21zZy51c2VyTmFtZX08L2Rpdj4ge21zZy5tZXNzYWdlfTwvZGl2PiA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZWZ0Jz48ZGl2IGNsYXNzTmFtZT0nbS0xIHAtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgcm91bmRlZC10bC1ub25lIHRleHQtYmxhY2sgaW5saW5lLWJsb2NrJz48ZGl2IGNsYXNzTmFtZT0nIXRleHQtZ3JheSB0ZXh0LXhzJz57bXNnLnVzZXJOYW1lfTwvZGl2PiB7bXNnLm1lc3NhZ2V9PC9kaXY+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIHAtNSc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fSBjbGFzc05hbWU9J3ctMS84IHB4LTMnPnt1c2VyQ29ubmVjdGVkID8gXCJTdG9wXCIgOiBcIk5leHRcIn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIHctZnVsbCBoLTEwIHRleHQtYmxhY2sgcHgtMydcclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0gY2xhc3NOYW1lPSd3LTEvOCBweC0zJz5TZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NrZXRSb29tO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsIlNvY2tldFJvb20iLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlckNvbm5lY3RlZCIsInNldFVzZXJDb25uZWN0ZWQiLCJkYXRhIiwibmV3U29ja2V0Iiwib24iLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZWRVc2VySWQiLCJ1c2VybmFtZSIsIm1lc3NhZ2VEYXRhIiwicHJldk1lc3NhZ2VzIiwiZGlzY29ubmVjdCIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsImVtaXQiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImhhbmRsZVJlc2V0IiwiY2xvc2UiLCJjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibXNnIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5RG93biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SocketRoom.js\n"));

/***/ })

});