"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_bbharris_Desktop_LaunchHouse_collabland_collabland_proxytest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bbharris_Desktop_LaunchHouse_collabland_collabland_proxytest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bbharris_Desktop_LaunchHouse_collabland_collabland_proxytest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"./node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), proxy = ref[0], setProxy = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), signature = ref1[0], setSignature = ref1[1];\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection)().connection;\n    var ref2 = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)(), publicKey = ref2.publicKey, sendTransaction = ref2.sendTransaction;\n    function handleSubmit() {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(_Users_bbharris_Desktop_LaunchHouse_collabland_collabland_proxytest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var message, encodedMsg, signedMsg;\n            return _Users_bbharris_Desktop_LaunchHouse_collabland_collabland_proxytest_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (publicKey) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        alert(\"Please connect your wallet!\");\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        message = \"To avoid digital dognappers, sign below to authenticate with CryptoCorgis\";\n                        encodedMsg = new TextEncoder().encode(proxy);\n                        _ctx.next = 7;\n                        return window.solana.signMessage(encodedMessage);\n                    case 7:\n                        signedMsg = _ctx.sent;\n                        setSignature(signedMsg.signature);\n                        console.log({\n                            \"message\": proxy,\n                            \"signature\": signature\n                        });\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"collabland-proxytest\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"collabland-proxytest\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/collabland.png\",\n                        width: 260,\n                        height: 40,\n                        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_9___default().collab_logo)\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletMultiButton, {\n                        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wallet_adapter_button)\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_9___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Group, {\n                                className: [\n                                    \"mb-3\",\n                                    (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_9___default().form_row)\n                                ].join(\" \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Control, {\n                                    type: \"input\",\n                                    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_9___default().input),\n                                    placeholder: \"Proxy Wallet Address\",\n                                    onChange: function(e) {\n                                        return setProxy(e.target.value);\n                                    },\n                                    disabled: !publicKey\n                                }, void 0, false, {\n                                    fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                type: \"button\",\n                                variant: \"primary\",\n                                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_9___default().submit_btn),\n                                onClick: handleSubmit,\n                                disabled: !publicKey,\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__[\"default\"].Text, {\n                                children: signature\n                            }, void 0, false, {\n                                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__.CopyToClipboard, {\n                                text: signature,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    variant: \"outline-secondary\",\n                                    children: \"Copy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"AKJXA0nBWjb1P0NvKVF9gYYff4o=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUM7cUNBQUE7b0NBQzFDQyxRQUFRLEVBQUUsQ0FBQ3pDLFNBQVM7Ozs7O3dDQUNwQjs7Ozs7b0NBQ1M7MENBQ2IsOERBQUNkLCtEQUFNO2dDQUNMZ0QsSUFBSSxFQUFDLFFBQVE7Z0NBQ2JRLE9BQU8sRUFBQyxTQUFTO2dDQUNqQm5CLFNBQVMsRUFBR25DLDJFQUFpQjtnQ0FDN0J3RCxPQUFPLEVBQUUxQyxZQUFZO2dDQUNyQnVDLFFBQVEsRUFBRSxDQUFDekMsU0FBUzswQ0FBRSxRQUV4Qjs7Ozs7b0NBQVM7Ozs7Ozs0QkFDSjtrQ0FDUCw4REFBQ2IsbUVBQVU7OzBDQUNULDhEQUFDQSx3RUFBZTswQ0FBRVUsU0FBUzs7Ozs7b0NBQW1COzBDQUM5Qyw4REFBQ0osb0VBQWU7Z0NBQUNxRCxJQUFJLEVBQUVqRCxTQUFTOzBDQUM5Qiw0RUFBQ1gsK0RBQU07b0NBQUN3RCxPQUFPLEVBQUMsbUJBQW1COzhDQUFDLE1BQUk7Ozs7O3dDQUFTOzs7OztvQ0FDakM7Ozs7Ozs0QkFDUDs7Ozs7O29CQUVSOztvQkFDTixDQUNKO0NBQ0Y7R0F2RXVCaEQsSUFBSTs7UUFJSEgsdUVBQWE7UUFDR0MsbUVBQVM7OztBQUwxQkUsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgV2FsbGV0TXVsdGlCdXR0b24gfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcbmltcG9ydCAqIGFzIHdlYjMgZnJvbSAnQHNvbGFuYS93ZWIzLmpzJ1xuaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCdcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbcHJveHksIHNldFByb3h5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2lnbmF0dXJlLCBzZXRTaWduYXR1cmVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xuICBjb25zdCB7IHB1YmxpY0tleSwgc2VuZFRyYW5zYWN0aW9uIH0gPSB1c2VXYWxsZXQoKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG5cbiAgICBpZiAoIXB1YmxpY0tleSkge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0IScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgVG8gYXZvaWQgZGlnaXRhbCBkb2duYXBwZXJzLCBzaWduIGJlbG93IHRvIGF1dGhlbnRpY2F0ZSB3aXRoIENyeXB0b0Nvcmdpc2A7XG4gICAgY29uc3QgZW5jb2RlZE1zZyA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm94eSk7XG4gICAgY29uc3Qgc2lnbmVkTXNnID0gYXdhaXQgd2luZG93LnNvbGFuYS5zaWduTWVzc2FnZShlbmNvZGVkTWVzc2FnZSk7XG4gICAgXG4gICAgc2V0U2lnbmF0dXJlKHNpZ25lZE1zZy5zaWduYXR1cmUpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIFwibWVzc2FnZVwiOiBwcm94eSxcbiAgICAgIFwic2lnbmF0dXJlXCI6IHNpZ25hdHVyZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Y29sbGFibGFuZC1wcm94eXRlc3Q8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiY29sbGFibGFuZC1wcm94eXRlc3RcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvY29sbGFibGFuZC5wbmdcIlxuICAgICAgICAgIHdpZHRoPXsyNjB9XG4gICAgICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYWJfbG9nb31cbiAgICAgICAgLz5cbiAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLndhbGxldF9hZGFwdGVyX2J1dHRvbn0vPlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9e1tcIm1iLTNcIiwgc3R5bGVzLmZvcm1fcm93XS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIFxuICAgICAgICAgICAgICB0eXBlPVwiaW5wdXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm94eSBXYWxsZXQgQWRkcmVzc1wiIFxuICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRQcm94eShlLnRhcmdldC52YWx1ZSkgfSBcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwdWJsaWNLZXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWUgPXtzdHlsZXMuc3VibWl0X2J0bn0gXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IFxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFwdWJsaWNLZXl9PlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0PntzaWduYXR1cmV9PC9JbnB1dEdyb3VwLlRleHQ+XG4gICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtzaWduYXR1cmV9PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zZWNvbmRhcnlcIj5Db3B5PC9CdXR0b24+XG4gICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgXG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZVN0YXRlIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0R3JvdXAiLCJzdHlsZXMiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIndlYjMiLCJ1c2VDb25uZWN0aW9uIiwidXNlV2FsbGV0IiwiQ29weVRvQ2xpcGJvYXJkIiwiSG9tZSIsInByb3h5Iiwic2V0UHJveHkiLCJzaWduYXR1cmUiLCJzZXRTaWduYXR1cmUiLCJjb25uZWN0aW9uIiwicHVibGljS2V5Iiwic2VuZFRyYW5zYWN0aW9uIiwiaGFuZGxlU3VibWl0IiwibWVzc2FnZSIsImVuY29kZWRNc2ciLCJzaWduZWRNc2ciLCJhbGVydCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwid2luZG93Iiwic29sYW5hIiwic2lnbk1lc3NhZ2UiLCJlbmNvZGVkTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiY29sbGFiX2xvZ28iLCJ3YWxsZXRfYWRhcHRlcl9idXR0b24iLCJmb3JtIiwiR3JvdXAiLCJmb3JtX3JvdyIsImpvaW4iLCJDb250cm9sIiwidHlwZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc2FibGVkIiwidmFyaWFudCIsInN1Ym1pdF9idG4iLCJvbkNsaWNrIiwiVGV4dCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});