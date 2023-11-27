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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SendOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/SendOutlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SocketRoom = ()=>{\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userConnected, setUserConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:3001\");\n        newSocket.on(\"connect\", ()=>{\n            console.log(\"Connected to the server\");\n            setUserConnected(true);\n        });\n        newSocket.on(\"userDisconnected\", (userData)=>{\n            console.log(\"Disconnected from the server\");\n            data = {\n                \"userId\": userData.userId,\n                \"userName\": userData.userName,\n                \"message\": userData.message\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    data\n                ]);\n            userData.userId === userId ? setUserConnected(false) : null;\n        });\n        newSocket.on(\"userId\", (receivedUserId)=>{\n            setUserId(receivedUserId);\n        });\n        newSocket.on(\"userName\", (username)=>{\n            setUserName(username);\n        });\n        newSocket.on(\"chatMessage\", (messageData)=>{\n            console.log(\"Received chat message: \".concat(messageData.message));\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    messageData\n                ]);\n        });\n        newSocket.on(\"userConnected\", (username)=>{\n            data = {\n                \"userName\": username,\n                \"message\": \"connected\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    data\n                ]);\n        });\n        setSocket(newSocket);\n        return ()=>{\n            newSocket.disconnect();\n        };\n    }, []);\n    const handleSendMessage = ()=>{\n        if (socket && message.trim() !== \"\") {\n            socket.emit(\"chatMessage\", {\n                userId,\n                message,\n                userName\n            });\n            setMessage(\"\");\n        }\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSendMessage();\n        }\n    };\n    const handleReset = ()=>{\n        if (userConnected) {\n            setUserConnected(false);\n            socket.close();\n        } else {\n            setUserConnected(true);\n            socket.connect();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex-grow flex flex-col justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    console.log(messages),\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                msg.message === \"connected\" || msg.message === \"disconnected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center text-gray text-sm\",\n                                    children: [\n                                        \"User \",\n                                        msg.userName,\n                                        \" \",\n                                        msg.message\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 92\n                                }, undefined) : null,\n                                msg.message !== \"connected\" && msg.message !== \"disconnected\" && (msg.userId === userId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-right\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-1 p-3 bg-teal-500 rounded-full rounded-tr-none text-black inline-block \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"!text-gray text-xs\",\n                                                    children: msg.userName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 237\n                                                }, undefined),\n                                                \" \",\n                                                msg.message\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 146\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 118\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"m-1 p-3 bg-white rounded-full rounded-tl-none text-black inline-block\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"!text-gray text-xs\",\n                                                children: msg.userName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 437\n                                            }, undefined),\n                                            \" \",\n                                            msg.message\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 350\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 323\n                                }, undefined))\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleReset,\n                        className: \"w-1/8 px-3\",\n                        children: userConnected ? \"Stop\" : \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value),\n                        className: \"rounded-full w-full h-10 text-black px-3 bg-gray-800\",\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"w-1/8 px-3\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                style: {\n                                    rotate: \"-30deg\",\n                                    color: \"#50C878\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                                lineNumber: 91,\n                                columnNumber: 77\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketRoom.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SocketRoom, \"qvpWseiUsaWI1cAb45TVQusG1a4=\");\n_c = SocketRoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketRoom);\nvar _c;\n$RefreshReg$(_c, \"SocketRoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NvY2tldFJvb20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHMkI7QUFDaUI7QUFDVjtBQUVsQyxNQUFNSSxhQUFhOztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuRCxJQUFJZTtJQUdKaEIsZ0RBQVNBLENBQUM7UUFDTixNQUFNaUIsWUFBWWYsNERBQUVBLENBQUM7UUFDckJlLFVBQVVDLEVBQUUsQ0FBQyxXQUFXO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUM7WUFDWkwsaUJBQWlCO1FBQ3JCO1FBQ0FFLFVBQVVDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQ0c7WUFDOUJGLFFBQVFDLEdBQUcsQ0FBQztZQUNaSixPQUFPO2dCQUFFLFVBQVVLLFNBQVNYLE1BQU07Z0JBQUUsWUFBWVcsU0FBU1QsUUFBUTtnQkFBRSxXQUFXUyxTQUFTZixPQUFPO1lBQUM7WUFDL0ZHLFlBQVksQ0FBQ2EsZUFBaUI7dUJBQUlBO29CQUFjTjtpQkFBSztZQUNyREssU0FBU1gsTUFBTSxLQUFLQSxTQUFTSyxpQkFBaUIsU0FBUztRQUMzRDtRQUNBRSxVQUFVQyxFQUFFLENBQUMsVUFBVSxDQUFDSztZQUNwQlosVUFBVVk7UUFDZDtRQUNBTixVQUFVQyxFQUFFLENBQUMsWUFBWSxDQUFDTTtZQUN0QlgsWUFBWVc7UUFDaEI7UUFDQVAsVUFBVUMsRUFBRSxDQUFDLGVBQWUsQ0FBQ087WUFDekJOLFFBQVFDLEdBQUcsQ0FBQywwQkFBOEMsT0FBcEJLLFlBQVluQixPQUFPO1lBQ3pERyxZQUFZLENBQUNhLGVBQWlCO3VCQUFJQTtvQkFBY0c7aUJBQVk7UUFDaEU7UUFDQVIsVUFBVUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDTTtZQUMzQlIsT0FBTztnQkFBRSxZQUFZUTtnQkFBVSxXQUFXO1lBQVk7WUFDdERmLFlBQVksQ0FBQ2EsZUFBaUI7dUJBQUlBO29CQUFjTjtpQkFBSztRQUN6RDtRQUNBWCxVQUFVWTtRQUNWLE9BQU87WUFDSEEsVUFBVVMsVUFBVTtRQUN4QjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1DLG9CQUFvQjtRQUN0QixJQUFJdkIsVUFBVUUsUUFBUXNCLElBQUksT0FBTyxJQUFJO1lBQ2pDeEIsT0FBT3lCLElBQUksQ0FBQyxlQUFlO2dCQUFFbkI7Z0JBQVFKO2dCQUFTTTtZQUFTO1lBQ3ZETCxXQUFXO1FBQ2Y7SUFDSjtJQUNBLE1BQU11QixnQkFBZ0IsQ0FBQ0M7UUFDbkIsSUFBSUEsRUFBRUMsR0FBRyxLQUFLLFNBQVM7WUFDbkJMO1FBQ0o7SUFDSjtJQUNBLE1BQU1NLGNBQWM7UUFDaEIsSUFBSW5CLGVBQWU7WUFDZkMsaUJBQWlCO1lBQ2pCWCxPQUFPOEIsS0FBSztRQUNoQixPQUFPO1lBQ0huQixpQkFBaUI7WUFDakJYLE9BQU8rQixPQUFPO1FBQ2xCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEOztvQkFDSWpCLFFBQVFDLEdBQUcsQ0FBQ1o7b0JBQ1pBLFNBQVM4QixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2hCLDhEQUFDSjs7Z0NBQ0tHLElBQUlqQyxPQUFPLEtBQUssZUFBZWlDLElBQUlqQyxPQUFPLEtBQUssK0JBQWtCLDhEQUFDOEI7b0NBQUlDLFdBQVU7O3dDQUFnQzt3Q0FBTUUsSUFBSTNCLFFBQVE7d0NBQUM7d0NBQUUyQixJQUFJakMsT0FBTzs7Ozs7O2dEQUFVO2dDQUMxSmlDLElBQUlqQyxPQUFPLEtBQUssZUFBZWlDLElBQUlqQyxPQUFPLEtBQUssa0JBQW9CaUMsQ0FBQUEsSUFBSTdCLE1BQU0sS0FBS0EsdUJBQVMsOERBQUMwQjtvQ0FBSUMsV0FBVTs7c0RBQWEsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFBNEUsOERBQUNEO29EQUFJQyxXQUFVOzhEQUFzQkUsSUFBSTNCLFFBQVE7Ozs7OztnREFBTztnREFBRTJCLElBQUlqQyxPQUFPOzs7Ozs7O3dDQUFPOzs7Ozs7OERBQVUsOERBQUM4QjtvQ0FBSUMsV0FBVTs4Q0FBWSw0RUFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUF3RSw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBQXNCRSxJQUFJM0IsUUFBUTs7Ozs7OzRDQUFPOzRDQUFFMkIsSUFBSWpDLE9BQU87Ozs7Ozs7Ozs7OzZDQUFZOzsyQkFGdmVrQzs7Ozs7Ozs7Ozs7MEJBTWxCLDhEQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNJO3dCQUFPQyxTQUFTVDt3QkFBYUksV0FBVTtrQ0FBY3ZCLGdCQUFnQixTQUFTOzs7Ozs7a0NBQy9FLDhEQUFDNkI7d0JBQ0dDLE1BQUs7d0JBQ0xDLE9BQU92Qzt3QkFDUHdDLFVBQVUsQ0FBQ2YsSUFBTXhCLFdBQVd3QixFQUFFZ0IsTUFBTSxDQUFDRixLQUFLO3dCQUMxQ1IsV0FBVTt3QkFDVlcsV0FBV2xCOzs7Ozs7a0NBRWYsOERBQUNXO3dCQUFPQyxTQUFTZjt3QkFBbUJVLFdBQVU7OzRCQUFhOzBDQUFDLDhEQUFDdEMsZ0ZBQVlBO2dDQUFDa0QsT0FBTztvQ0FBRUMsUUFBUTtvQ0FBVUMsT0FBTztnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RJO0dBeEZNaEQ7S0FBQUE7QUEwRk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU29ja2V0Um9vbS5qcz81OTVmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQge1xyXG4gICAgU2VuZE91dGxpbmVkXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5jb25zdCBTb2NrZXRSb29tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJDb25uZWN0ZWQsIHNldFVzZXJDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgbGV0IGRhdGE7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScpO1xyXG4gICAgICAgIG5ld1NvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB0aGUgc2VydmVyJyk7XHJcbiAgICAgICAgICAgIHNldFVzZXJDb25uZWN0ZWQodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCd1c2VyRGlzY29ubmVjdGVkJywgKHVzZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSB0aGUgc2VydmVyJyk7XHJcbiAgICAgICAgICAgIGRhdGEgPSB7IFwidXNlcklkXCI6IHVzZXJEYXRhLnVzZXJJZCwgXCJ1c2VyTmFtZVwiOiB1c2VyRGF0YS51c2VyTmFtZSwgXCJtZXNzYWdlXCI6IHVzZXJEYXRhLm1lc3NhZ2UgfVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBkYXRhXSk7XHJcbiAgICAgICAgICAgIHVzZXJEYXRhLnVzZXJJZCA9PT0gdXNlcklkID8gc2V0VXNlckNvbm5lY3RlZChmYWxzZSkgOiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5ld1NvY2tldC5vbigndXNlcklkJywgKHJlY2VpdmVkVXNlcklkKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXJJZChyZWNlaXZlZFVzZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCd1c2VyTmFtZScsICh1c2VybmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyTmFtZSh1c2VybmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCdjaGF0TWVzc2FnZScsIChtZXNzYWdlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgY2hhdCBtZXNzYWdlOiAke21lc3NhZ2VEYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG1lc3NhZ2VEYXRhXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3U29ja2V0Lm9uKCd1c2VyQ29ubmVjdGVkJywgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB7ICd1c2VyTmFtZSc6IHVzZXJuYW1lLCAnbWVzc2FnZSc6ICdjb25uZWN0ZWQnIH07XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGRhdGFdKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFNvY2tldChuZXdTb2NrZXQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ld1NvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc29ja2V0ICYmIG1lc3NhZ2UudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhdE1lc3NhZ2UnLCB7IHVzZXJJZCwgbWVzc2FnZSwgdXNlck5hbWUgfSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaGFuZGxlU2VuZE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodXNlckNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICBzZXRVc2VyQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VXNlckNvbm5lY3RlZCh0cnVlKTtcclxuICAgICAgICAgICAgc29ja2V0LmNvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cobWVzc2FnZXMpfVxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsobXNnLm1lc3NhZ2UgPT09ICdjb25uZWN0ZWQnIHx8IG1zZy5tZXNzYWdlID09PSAnZGlzY29ubmVjdGVkJykgPyA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1ncmF5IHRleHQtc20nPlVzZXIge21zZy51c2VyTmFtZX0ge21zZy5tZXNzYWdlfTwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsobXNnLm1lc3NhZ2UgIT09ICdjb25uZWN0ZWQnICYmIG1zZy5tZXNzYWdlICE9PSAnZGlzY29ubmVjdGVkJykgJiYgKG1zZy51c2VySWQgPT09IHVzZXJJZCA/IDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0Jz48ZGl2IGNsYXNzTmFtZT0nbS0xIHAtMyBiZy10ZWFsLTUwMCByb3VuZGVkLWZ1bGwgcm91bmRlZC10ci1ub25lIHRleHQtYmxhY2sgaW5saW5lLWJsb2NrICc+PGRpdiBjbGFzc05hbWU9JyF0ZXh0LWdyYXkgdGV4dC14cyc+e21zZy51c2VyTmFtZX08L2Rpdj4ge21zZy5tZXNzYWdlfTwvZGl2PiA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZWZ0Jz48ZGl2IGNsYXNzTmFtZT0nbS0xIHAtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgcm91bmRlZC10bC1ub25lIHRleHQtYmxhY2sgaW5saW5lLWJsb2NrJz48ZGl2IGNsYXNzTmFtZT0nIXRleHQtZ3JheSB0ZXh0LXhzJz57bXNnLnVzZXJOYW1lfTwvZGl2PiB7bXNnLm1lc3NhZ2V9PC9kaXY+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIHAtNSc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fSBjbGFzc05hbWU9J3ctMS84IHB4LTMnPnt1c2VyQ29ubmVjdGVkID8gXCJTdG9wXCIgOiBcIk5leHRcIn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIHctZnVsbCBoLTEwIHRleHQtYmxhY2sgcHgtMyBiZy1ncmF5LTgwMCdcclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0gY2xhc3NOYW1lPSd3LTEvOCBweC0zJz4gPFNlbmRPdXRsaW5lZCBzdHlsZT17eyByb3RhdGU6IFwiLTMwZGVnXCIsIGNvbG9yOiBcIiM1MEM4NzhcIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ja2V0Um9vbTtcclxuIl0sIm5hbWVzIjpbIlNlbmRPdXRsaW5lZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJTb2NrZXRSb29tIiwic29ja2V0Iiwic2V0U29ja2V0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlcklkIiwic2V0VXNlcklkIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInVzZXJDb25uZWN0ZWQiLCJzZXRVc2VyQ29ubmVjdGVkIiwiZGF0YSIsIm5ld1NvY2tldCIsIm9uIiwiY29uc29sZSIsImxvZyIsInVzZXJEYXRhIiwicHJldk1lc3NhZ2VzIiwicmVjZWl2ZWRVc2VySWQiLCJ1c2VybmFtZSIsIm1lc3NhZ2VEYXRhIiwiZGlzY29ubmVjdCIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsImVtaXQiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImhhbmRsZVJlc2V0IiwiY2xvc2UiLCJjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibXNnIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5RG93biIsInN0eWxlIiwicm90YXRlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SocketRoom.js\n"));

/***/ })

});