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

/***/ "(app-pages-browser)/./app/components/SocketPeer.js":
/*!**************************************!*\
  !*** ./app/components/SocketPeer.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/SendOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/SendOutlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ChatComponent = ()=>{\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userConnected, setUserConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [clickCount, setClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:3002\");\n        socket.on(\"connect\", ()=>{\n            console.log(\"Connected to the server:\", socket.id);\n            setUserConnected(true);\n        });\n        socket.on(\"userId\", (receivedUserId)=>{\n            setUserId(receivedUserId);\n        });\n        socket.on(\"userName\", (username)=>{\n            setUserName(username);\n        });\n        socket.on(\"chatEnd\", (userData)=>{\n            data = {\n                \"userId\": userData.userId,\n                \"userName\": userData.userName,\n                \"message\": userData.message\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    data\n                ]);\n            userData.userId === userId ? setUserConnected(false) : null;\n        });\n        socket.on(\"chatStart\", (messageData)=>{\n            console.log(\"Received chat message: \".concat(messageData));\n        });\n        socket.on(\"paired\", (param)=>{\n            let { user1name, user2name } = param;\n            data = {\n                \"user1Name\": user1name,\n                \"user2Name\": user2name,\n                \"message\": \"connected\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    data\n                ]);\n        });\n        socket.on(\"chatMessage\", (messageData)=>{\n            console.log(\"Received chat message: \".concat(messageData.message));\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    messageData\n                ]);\n        });\n        setSocket(socket);\n        return ()=>{\n            socket.disconnect();\n        };\n    }, []);\n    const handleSendMessage = ()=>{\n        if (socket && message.trim() !== \"\") {\n            socket.emit(\"chatMessage\", {\n                userId,\n                message,\n                userName\n            });\n            setMessage(\"\");\n        }\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSendMessage();\n        }\n    };\n    const handleReset = ()=>{\n        if (userConnected) {\n            if (clickCount === 0) {\n                setClickCount(clickCount + 1);\n            }\n            if (clickCount === 1) {\n                setUserConnected(false);\n                socket.close();\n                setClickCount(0);\n            }\n        } else {\n            setMessages([]);\n            setUserConnected(true);\n            socket.connect();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex-grow flex flex-col justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    console.log(messages),\n                    messages.map((msg, index)=>/*#__PURE__*/ {\n                        var _msg_user1Name, _msg_user2Name;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                msg.message === \"connected\" || msg.message === \"disconnected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center text-gray text-sm\",\n                                    children: [\n                                        \"User \",\n                                        msg.user1Name !== userName ? (_msg_user1Name = msg.user1Name) !== null && _msg_user1Name !== void 0 ? _msg_user1Name : msg.userName : (_msg_user2Name = msg.user2Name) !== null && _msg_user2Name !== void 0 ? _msg_user2Name : msg.userName,\n                                        \" \",\n                                        msg.message\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 92\n                                }, undefined) : null,\n                                msg.message !== \"connected\" && msg.message !== \"disconnected\" && (msg.userId === userId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-right\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-1 p-3 bg-teal-500 rounded-full rounded-tr-none text-black inline-block \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"!text-gray text-xs\",\n                                                    children: msg.userName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 237\n                                                }, undefined),\n                                                \" \",\n                                                msg.message\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 146\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 118\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"m-1 p-3 bg-white rounded-full rounded-tl-none text-black inline-block\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"!text-gray text-xs\",\n                                                children: msg.userName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 437\n                                            }, undefined),\n                                            \" \",\n                                            msg.message\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 350\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 323\n                                }, undefined))\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleReset,\n                        className: \"w-1/8 px-3 text-gray-400\",\n                        children: userConnected ? clickCount === 0 ? \"Stop\" : \"Sure?\" : \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value),\n                        className: \"rounded-full w-full h-10 text-black px-3 bg-gray-800 text-white\",\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"w-1/8 px-3 text-xl\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_SendOutlined__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                style: {\n                                    rotate: \"-30deg\",\n                                    color: \"#50C878\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                lineNumber: 102,\n                                columnNumber: 85\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ChatComponent, \"u5tg2fXavN+/XckKnM0a/SuYMc8=\");\n_c = ChatComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatComponent);\nvar _c;\n$RefreshReg$(_c, \"ChatComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NvY2tldFBlZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHMkI7QUFDaUI7QUFDVjtBQUNsQyxNQUFNSSxnQkFBZ0I7O0lBQ2xCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLElBQUlpQjtJQUNKbEIsZ0RBQVNBLENBQUM7UUFDTixNQUFNSSxTQUFTRiw0REFBRUEsQ0FBQztRQUVsQkUsT0FBT2UsRUFBRSxDQUFDLFdBQVc7WUFDakJDLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJqQixPQUFPa0IsRUFBRTtZQUNqRFAsaUJBQWlCO1FBQ3JCO1FBQ0FYLE9BQU9lLEVBQUUsQ0FBQyxVQUFVLENBQUNJO1lBQ2pCaEIsVUFBVWdCO1FBQ2Q7UUFDQW5CLE9BQU9lLEVBQUUsQ0FBQyxZQUFZLENBQUNLO1lBQ25CZixZQUFZZTtRQUNoQjtRQUNBcEIsT0FBT2UsRUFBRSxDQUFDLFdBQVcsQ0FBQ007WUFDbEJQLE9BQU87Z0JBQUUsVUFBVU8sU0FBU25CLE1BQU07Z0JBQUUsWUFBWW1CLFNBQVNqQixRQUFRO2dCQUFFLFdBQVdpQixTQUFTZixPQUFPO1lBQUM7WUFDL0ZHLFlBQVksQ0FBQ2EsZUFBaUI7dUJBQUlBO29CQUFjUjtpQkFBSztZQUNyRE8sU0FBU25C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ZSxJQUFJLFNBQVMsVUFBVzs7Ozs7O2tDQUM1SCw4REFBQ2lDO3dCQUNHQyxNQUFLO3dCQUNMQyxPQUFPekM7d0JBQ1AwQyxVQUFVLENBQUNqQixJQUFNeEIsV0FBV3dCLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7d0JBQzFDVixXQUFVO3dCQUNWYSxXQUFXcEI7Ozs7OztrQ0FFZiw4REFBQ2E7d0JBQU9DLFNBQVNqQjt3QkFBbUJVLFdBQVU7OzRCQUFxQjswQ0FBQyw4REFBQzFDLGdGQUFZQTtnQ0FBQ3dELE9BQU87b0NBQUVDLFFBQVE7b0NBQVVDLE9BQU87Z0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5STtHQXBHTXREO0tBQUFBO0FBc0dOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1NvY2tldFBlZXIuanM/NDkyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHtcclxuICAgIFNlbmRPdXRsaW5lZFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5jb25zdCBDaGF0Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3VzZXJDb25uZWN0ZWQsIHNldFVzZXJDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NsaWNrQ291bnQsIHNldENsaWNrQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMicpO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gdGhlIHNlcnZlcjonLCBzb2NrZXQuaWQpO1xyXG4gICAgICAgICAgICBzZXRVc2VyQ29ubmVjdGVkKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5vbigndXNlcklkJywgKHJlY2VpdmVkVXNlcklkKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXJJZChyZWNlaXZlZFVzZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKCd1c2VyTmFtZScsICh1c2VybmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyTmFtZSh1c2VybmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdjaGF0RW5kJywgKHVzZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB7IFwidXNlcklkXCI6IHVzZXJEYXRhLnVzZXJJZCwgXCJ1c2VyTmFtZVwiOiB1c2VyRGF0YS51c2VyTmFtZSwgXCJtZXNzYWdlXCI6IHVzZXJEYXRhLm1lc3NhZ2UgfVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBkYXRhXSk7XHJcbiAgICAgICAgICAgIHVzZXJEYXRhLnVzZXJJZCA9PT0gdXNlcklkID8gc2V0VXNlckNvbm5lY3RlZChmYWxzZSkgOiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5vbignY2hhdFN0YXJ0JywgKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBjaGF0IG1lc3NhZ2U6ICR7bWVzc2FnZURhdGF9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdwYWlyZWQnLCAoeyB1c2VyMW5hbWUsIHVzZXIybmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB7ICd1c2VyMU5hbWUnOiB1c2VyMW5hbWUsICd1c2VyMk5hbWUnOiB1c2VyMm5hbWUsICdtZXNzYWdlJzogJ2Nvbm5lY3RlZCcgfTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgZGF0YV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc29ja2V0Lm9uKCdjaGF0TWVzc2FnZScsIChtZXNzYWdlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgY2hhdCBtZXNzYWdlOiAke21lc3NhZ2VEYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG1lc3NhZ2VEYXRhXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzb2NrZXQgJiYgbWVzc2FnZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGF0TWVzc2FnZScsIHsgdXNlcklkLCBtZXNzYWdlLCB1c2VyTmFtZSB9KTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaGFuZGxlU2VuZE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodXNlckNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2xpY2tDb3VudChjbGlja0NvdW50ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNsaWNrQ291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJDb25uZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDbGlja0NvdW50KDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKFtdKTtcclxuICAgICAgICAgICAgc2V0VXNlckNvbm5lY3RlZCh0cnVlKTtcclxuICAgICAgICAgICAgc29ja2V0LmNvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cobWVzc2FnZXMpfVxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsobXNnLm1lc3NhZ2UgPT09ICdjb25uZWN0ZWQnIHx8IG1zZy5tZXNzYWdlID09PSAnZGlzY29ubmVjdGVkJykgPyA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1ncmF5IHRleHQtc20nPlVzZXIge21zZy51c2VyMU5hbWUgIT09IHVzZXJOYW1lID8gKG1zZy51c2VyMU5hbWUgPz8gbXNnLnVzZXJOYW1lKSA6IChtc2cudXNlcjJOYW1lID8/IG1zZy51c2VyTmFtZSl9IHttc2cubWVzc2FnZX08L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KG1zZy5tZXNzYWdlICE9PSAnY29ubmVjdGVkJyAmJiBtc2cubWVzc2FnZSAhPT0gJ2Rpc2Nvbm5lY3RlZCcpICYmIChtc2cudXNlcklkID09PSB1c2VySWQgPyA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+PGRpdiBjbGFzc05hbWU9J20tMSBwLTMgYmctdGVhbC01MDAgcm91bmRlZC1mdWxsIHJvdW5kZWQtdHItbm9uZSB0ZXh0LWJsYWNrIGlubGluZS1ibG9jayAnPjxkaXYgY2xhc3NOYW1lPSchdGV4dC1ncmF5IHRleHQteHMnPnttc2cudXNlck5hbWV9PC9kaXY+IHttc2cubWVzc2FnZX08L2Rpdj4gPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9J3RleHQtbGVmdCc+PGRpdiBjbGFzc05hbWU9J20tMSBwLTMgYmctd2hpdGUgcm91bmRlZC1mdWxsIHJvdW5kZWQtdGwtbm9uZSB0ZXh0LWJsYWNrIGlubGluZS1ibG9jayc+PGRpdiBjbGFzc05hbWU9JyF0ZXh0LWdyYXkgdGV4dC14cyc+e21zZy51c2VyTmFtZX08L2Rpdj4ge21zZy5tZXNzYWdlfTwvZGl2PjwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgcC01Jz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9IGNsYXNzTmFtZT0ndy0xLzggcHgtMyB0ZXh0LWdyYXktNDAwJz57dXNlckNvbm5lY3RlZCA/IChjbGlja0NvdW50ID09PSAwID8gXCJTdG9wXCIgOiBcIlN1cmU/XCIpIDogXCJOZXh0XCJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCB3LWZ1bGwgaC0xMCB0ZXh0LWJsYWNrIHB4LTMgYmctZ3JheS04MDAgdGV4dC13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0gY2xhc3NOYW1lPSd3LTEvOCBweC0zIHRleHQteGwnPiA8U2VuZE91dGxpbmVkIHN0eWxlPXt7IHJvdGF0ZTogXCItMzBkZWdcIiwgY29sb3I6IFwiIzUwQzg3OFwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiU2VuZE91dGxpbmVkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsIkNoYXRDb21wb25lbnQiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlckNvbm5lY3RlZCIsInNldFVzZXJDb25uZWN0ZWQiLCJjbGlja0NvdW50Iiwic2V0Q2xpY2tDb3VudCIsImRhdGEiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInJlY2VpdmVkVXNlcklkIiwidXNlcm5hbWUiLCJ1c2VyRGF0YSIsInByZXZNZXNzYWdlcyIsIm1lc3NhZ2VEYXRhIiwidXNlcjFuYW1lIiwidXNlcjJuYW1lIiwiZGlzY29ubmVjdCIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsImVtaXQiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImhhbmRsZVJlc2V0IiwiY2xvc2UiLCJjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibXNnIiwiaW5kZXgiLCJ1c2VyMU5hbWUiLCJ1c2VyMk5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5RG93biIsInN0eWxlIiwicm90YXRlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SocketPeer.js\n"));

/***/ })

});