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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ChatComponent = ()=>{\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userConnected, setUserConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [clickCount, setClickCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:3002\");\n        socket.on(\"connect\", ()=>{\n            console.log(\"Connected to the server:\", socket.id);\n        });\n        socket.on(\"userId\", (receivedUserId)=>{\n            setUserId(receivedUserId);\n        });\n        socket.on(\"userName\", (username)=>{\n            setUserName(username);\n        });\n        socket.on(\"userDisconnected\", (userData)=>{\n            data = {\n                \"userId\": userData.userId,\n                \"userName\": userData.userName,\n                \"message\": userData.message\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    data\n                ]);\n            userData.userId === userId ? setUserConnected(false) : null;\n        });\n        socket.on(\"chatStart\", (messageData)=>{\n            console.log(\"Received chat message: \".concat(messageData));\n        });\n        socket.on(\"paired\", (param)=>{\n            let { user1name, user2name } = param;\n            data = {\n                \"user1Name\": user1name,\n                \"user2Name\": user2name,\n                \"message\": \"connected\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    data\n                ]);\n        });\n        socket.on(\"chatMessage\", (messageData)=>{\n            console.log(\"Received chat message: \".concat(messageData.message));\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    messageData\n                ]);\n        });\n        setSocket(socket);\n        return ()=>{\n            socket.disconnect();\n        };\n    }, []);\n    const handleSendMessage = ()=>{\n        if (socket && message.trim() !== \"\") {\n            socket.emit(\"chatMessage\", {\n                userId,\n                message,\n                userName\n            });\n            setMessage(\"\");\n        }\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSendMessage();\n        }\n    };\n    const handleReset = ()=>{\n        if (userConnected) {\n            if (clickCount === 0) {\n                setClickCount(clickCount + 1);\n            }\n            if (clickCount === 1) {\n                setUserConnected(false);\n                socket.close();\n                setClickCount(0);\n            }\n        } else {\n            setUserConnected(true);\n            socket.connect();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex-grow flex flex-col justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    console.log(messages),\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                msg.message === \"connected\" || msg.message === \"disconnected\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center text-gray text-sm\",\n                                    children: [\n                                        \"User \",\n                                        msg.userName,\n                                        \" \",\n                                        msg.message\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 92\n                                }, undefined) : null,\n                                msg.message !== \"connected\" && msg.message !== \"disconnected\" && (msg.userId === userId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-right\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-1 p-3 bg-teal-500 rounded-full rounded-tr-none text-black inline-block \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"!text-gray text-xs\",\n                                                    children: msg.userName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 237\n                                                }, undefined),\n                                                \" \",\n                                                msg.message\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 146\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 118\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"m-1 p-3 bg-white rounded-full rounded-tl-none text-black inline-block\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"!text-gray text-xs\",\n                                                children: msg.userName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 437\n                                            }, undefined),\n                                            \" \",\n                                            msg.message\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 350\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 323\n                                }, undefined))\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleReset,\n                        className: \"w-1/8 px-3 text-gray-400\",\n                        children: userConnected ? clickCount === 0 ? \"Stop\" : \"Sure?\" : \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value),\n                        className: \"rounded-full w-full h-10 text-black px-3 bg-gray-800\",\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"w-1/8 px-3 text-xl\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SendOutlined, {\n                                style: {\n                                    rotate: \"-30deg\",\n                                    color: \"#50C878\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                                lineNumber: 97,\n                                columnNumber: 85\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\front-end\\\\just-frontend\\\\app\\\\components\\\\SocketPeer.js\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ChatComponent, \"u5tg2fXavN+/XckKnM0a/SuYMc8=\");\n_c = ChatComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatComponent);\nvar _c;\n$RefreshReg$(_c, \"ChatComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NvY2tldFBlZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QztBQUNWO0FBRWxDLE1BQU1HLGdCQUFnQjs7SUFDbEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2EsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDN0MsSUFBSWlCO0lBQ0psQixnREFBU0EsQ0FBQztRQUNOLE1BQU1JLFNBQVNGLDREQUFFQSxDQUFDO1FBRWxCRSxPQUFPZSxFQUFFLENBQUMsV0FBVztZQUNqQkMsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QmpCLE9BQU9rQixFQUFFO1FBQ3JEO1FBQ0FsQixPQUFPZSxFQUFFLENBQUMsVUFBVSxDQUFDSTtZQUNqQmhCLFVBQVVnQjtRQUNkO1FBQ0FuQixPQUFPZSxFQUFFLENBQUMsWUFBWSxDQUFDSztZQUNuQmYsWUFBWWU7UUFDaEI7UUFDQXBCLE9BQU9lLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQ007WUFDM0JQLE9BQU87Z0JBQUUsVUFBVU8sU0FBU25CLE1BQU07Z0JBQUUsWUFBWW1CLFNBQVNqQixRQUFRO2dCQUFFLFdBQVdpQixTQUFTZixPQUFPO1lBQUM7WUFDL0ZHLFlBQVksQ0FBQ2EsZUFBaUI7dUJBQUlBO29CQUFjUjtpQkFBSztZQUNyRE8sU0FBU25CLE1BQU0sS0FBS0EsU0FBU1Ms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Ozs0QkFBcUI7MENBQUMsOERBQUNZO2dDQUFhQyxPQUFPO29DQUFFQyxRQUFRO29DQUFVQyxPQUFPO2dDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUk7R0FqR01yRDtLQUFBQTtBQW1HTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Tb2NrZXRQZWVyLmpzPzQ5MjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmNvbnN0IENoYXRDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXNlckNvbm5lY3RlZCwgc2V0VXNlckNvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2xpY2tDb3VudCwgc2V0Q2xpY2tDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDAyJyk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB0aGUgc2VydmVyOicsIHNvY2tldC5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKCd1c2VySWQnLCAocmVjZWl2ZWRVc2VySWQpID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlcklkKHJlY2VpdmVkVXNlcklkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oJ3VzZXJOYW1lJywgKHVzZXJuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXJOYW1lKHVzZXJuYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oJ3VzZXJEaXNjb25uZWN0ZWQnLCAodXNlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgZGF0YSA9IHsgXCJ1c2VySWRcIjogdXNlckRhdGEudXNlcklkLCBcInVzZXJOYW1lXCI6IHVzZXJEYXRhLnVzZXJOYW1lLCBcIm1lc3NhZ2VcIjogdXNlckRhdGEubWVzc2FnZSB9XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGRhdGFdKTtcclxuICAgICAgICAgICAgdXNlckRhdGEudXNlcklkID09PSB1c2VySWQgPyBzZXRVc2VyQ29ubmVjdGVkKGZhbHNlKSA6IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdjaGF0U3RhcnQnLCAobWVzc2FnZURhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFJlY2VpdmVkIGNoYXQgbWVzc2FnZTogJHttZXNzYWdlRGF0YX1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oJ3BhaXJlZCcsICh7IHVzZXIxbmFtZSwgdXNlcjJuYW1lIH0pID0+IHtcclxuICAgICAgICAgICAgZGF0YSA9IHsgJ3VzZXIxTmFtZSc6IHVzZXIxbmFtZSwgJ3VzZXIyTmFtZSc6IHVzZXIybmFtZSwgJ21lc3NhZ2UnOiAnY29ubmVjdGVkJyB9O1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBkYXRhXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzb2NrZXQub24oJ2NoYXRNZXNzYWdlJywgKG1lc3NhZ2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBjaGF0IG1lc3NhZ2U6ICR7bWVzc2FnZURhdGEubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbWVzc2FnZURhdGFdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRTb2NrZXQoc29ja2V0KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvY2tldCAmJiBtZXNzYWdlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXRNZXNzYWdlJywgeyB1c2VySWQsIG1lc3NhZ2UsIHVzZXJOYW1lIH0pO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBoYW5kbGVTZW5kTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjbGlja0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDbGlja0NvdW50KGNsaWNrQ291bnQgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2xpY2tDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlckNvbm5lY3RlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHNldENsaWNrQ291bnQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VXNlckNvbm5lY3RlZCh0cnVlKTtcclxuICAgICAgICAgICAgc29ja2V0LmNvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cobWVzc2FnZXMpfVxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsobXNnLm1lc3NhZ2UgPT09ICdjb25uZWN0ZWQnIHx8IG1zZy5tZXNzYWdlID09PSAnZGlzY29ubmVjdGVkJykgPyA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1ncmF5IHRleHQtc20nPlVzZXIge21zZy51c2VyTmFtZX0ge21zZy5tZXNzYWdlfTwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsobXNnLm1lc3NhZ2UgIT09ICdjb25uZWN0ZWQnICYmIG1zZy5tZXNzYWdlICE9PSAnZGlzY29ubmVjdGVkJykgJiYgKG1zZy51c2VySWQgPT09IHVzZXJJZCA/IDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0Jz48ZGl2IGNsYXNzTmFtZT0nbS0xIHAtMyBiZy10ZWFsLTUwMCByb3VuZGVkLWZ1bGwgcm91bmRlZC10ci1ub25lIHRleHQtYmxhY2sgaW5saW5lLWJsb2NrICc+PGRpdiBjbGFzc05hbWU9JyF0ZXh0LWdyYXkgdGV4dC14cyc+e21zZy51c2VyTmFtZX08L2Rpdj4ge21zZy5tZXNzYWdlfTwvZGl2PiA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZWZ0Jz48ZGl2IGNsYXNzTmFtZT0nbS0xIHAtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgcm91bmRlZC10bC1ub25lIHRleHQtYmxhY2sgaW5saW5lLWJsb2NrJz48ZGl2IGNsYXNzTmFtZT0nIXRleHQtZ3JheSB0ZXh0LXhzJz57bXNnLnVzZXJOYW1lfTwvZGl2PiB7bXNnLm1lc3NhZ2V9PC9kaXY+PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIHAtNSc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fSBjbGFzc05hbWU9J3ctMS84IHB4LTMgdGV4dC1ncmF5LTQwMCc+e3VzZXJDb25uZWN0ZWQgPyAoY2xpY2tDb3VudCA9PT0gMCA/IFwiU3RvcFwiIDogXCJTdXJlP1wiKSA6IFwiTmV4dFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgdy1mdWxsIGgtMTAgdGV4dC1ibGFjayBweC0zIGJnLWdyYXktODAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfSBjbGFzc05hbWU9J3ctMS84IHB4LTMgdGV4dC14bCc+IDxTZW5kT3V0bGluZWQgc3R5bGU9e3sgcm90YXRlOiBcIi0zMGRlZ1wiLCBjb2xvcjogXCIjNTBDODc4XCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiQ2hhdENvbXBvbmVudCIsInNvY2tldCIsInNldFNvY2tldCIsInVzZXJJZCIsInNldFVzZXJJZCIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VyQ29ubmVjdGVkIiwic2V0VXNlckNvbm5lY3RlZCIsImNsaWNrQ291bnQiLCJzZXRDbGlja0NvdW50IiwiZGF0YSIsIm9uIiwiY29uc29sZSIsImxvZyIsImlkIiwicmVjZWl2ZWRVc2VySWQiLCJ1c2VybmFtZSIsInVzZXJEYXRhIiwicHJldk1lc3NhZ2VzIiwibWVzc2FnZURhdGEiLCJ1c2VyMW5hbWUiLCJ1c2VyMm5hbWUiLCJkaXNjb25uZWN0IiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwiZW1pdCIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwiaGFuZGxlUmVzZXQiLCJjbG9zZSIsImNvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtc2ciLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25LZXlEb3duIiwiU2VuZE91dGxpbmVkIiwic3R5bGUiLCJyb3RhdGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SocketPeer.js\n"));

/***/ })

});