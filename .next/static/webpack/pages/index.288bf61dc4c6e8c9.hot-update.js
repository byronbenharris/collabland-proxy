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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"./node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSubmit = function handleSubmit() {\n        if (!publicKey) {\n            alert(\"Please connect your wallet!\");\n            return;\n        }\n        console.log({\n            \"proxy\": proxy\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), proxy = ref[0], setProxy = ref[1];\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useConnection)().connection;\n    var ref1 = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)(), publicKey = ref1.publicKey, sendTransaction = ref1.sendTransaction;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"collabland-proxytest\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"collabland-proxytest\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/collabland.png\",\n                        width: 260,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.WalletMultiButton, {\n                        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().wallet_adapter_button)\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Group, {\n                                className: [\n                                    \"mb-3\",\n                                    (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().form_row)\n                                ].join(\" \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Control, {\n                                    type: \"input\",\n                                    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),\n                                    placeholder: \"Proxy Wallet Address\",\n                                    onChange: function(e) {\n                                        return setProxy(e.target.value);\n                                    },\n                                    disabled: !publicKey\n                                }, void 0, false, {\n                                    fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                type: \"button\",\n                                variant: \"primary\",\n                                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().submit_btn),\n                                onClick: handleSubmit,\n                                disabled: !publicKey,\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__.CopyToClipboard, {\n                        text: \"test\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Copy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bbharris/Desktop/LaunchHouse/collabland/collabland-proxytest/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"xFUEipzFXQNvg+EUDJ+1YS9fD1k=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNFO0FBQ0U7QUFDTztBQUNJO0FBQ0c7QUFDcUI7QUFDN0I7QUFDZ0M7QUFDYjs7QUFFM0MsU0FBU1csSUFBSSxHQUFHO1FBTXBCQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksR0FBRztRQUV0QixJQUFJLENBQUNDLFNBQVMsRUFBRTtZQUNkQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUNyQyxPQUFPO1NBQ1I7UUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFDVixPQUFPLEVBQUVDLEtBQUs7U0FDZixDQUFDLENBQUM7S0FDSjs7SUFkRCxJQUEwQmYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWJ4QyxLQWFjLEdBQWNBLEdBQVksR0FBMUIsRUFiZCxRQWF3QixHQUFJQSxHQUFZLEdBQWhCO0lBQ3RCLElBQU0sVUFBWSxHQUFLTSwyRUFBYSxFQUFFLENBQTlCVyxVQUFVO0lBQ2xCLElBQXVDVixJQUFXLEdBQVhBLHVFQUFTLEVBQUUsRUFBMUNJLFNBQVMsR0FBc0JKLElBQVcsQ0FBMUNJLFNBQVMsRUFBRU8sZUFBZSxHQUFLWCxJQUFXLENBQS9CVyxlQUFlO0lBY2xDLHFCQUNFOzswQkFDRSw4REFBQ3BCLGtEQUFJOztrQ0FDSCw4REFBQ3FCLE9BQUs7a0NBQUMsc0JBQW9COzs7Ozs0QkFBUTtrQ0FDbkMsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsc0JBQXNCOzs7Ozs0QkFBRztrQ0FDMUQsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NEJBQUc7Ozs7OztvQkFDbEM7MEJBRVAsOERBQUNDLE1BQUk7Z0JBQUNDLFNBQVMsRUFBRXhCLHFFQUFXOztrQ0FDMUIsOERBQUNKLG1EQUFLO3dCQUNKNkIsR0FBRyxFQUFDLGlCQUFpQjt3QkFDckJDLEtBQUssRUFBRSxHQUFHO3dCQUNWQyxNQUFNLEVBQUUsRUFBRTs7Ozs7NEJBQ1Y7a0NBQ0YsOERBQUMxQiw4RUFBaUI7d0JBQUN1QixTQUFTLEVBQUV4QixzRkFBNEI7Ozs7OzRCQUFHO2tDQUM3RCw4REFBQ0YsNERBQUk7d0JBQUMwQixTQUFTLEVBQUV4QixxRUFBVzs7MENBQzFCLDhEQUFDRixrRUFBVTtnQ0FBQzBCLFNBQVMsRUFBRTtvQ0FBQyxNQUFNO29DQUFFeEIseUVBQWU7aUNBQUMsQ0FBQ2dDLElBQUksQ0FBQyxHQUFHLENBQUM7MENBQ3hELDRFQUFDbEMsb0VBQVk7b0NBQ1hvQyxJQUFJLEVBQUMsT0FBTztvQ0FDWlYsU0FBUyxFQUFFeEIsc0VBQVk7b0NBQ3ZCb0MsV0FBVyxFQUFDLHNCQUFzQjtvQ0FDbENDLFFBQVEsRUFBRyxTQUFDQyxDQUFDOytDQUFLekIsUUFBUSxDQUFDeUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztxQ0FBQTtvQ0FDMUNDLFFBQVEsRUFBRSxDQUFDakMsU0FBUzs7Ozs7d0NBQ3BCOzs7OztvQ0FDUzswQ0FDYiw4REFBQ1QsK0RBQU07Z0NBQ0xtQyxJQUFJLEVBQUMsUUFBUTtnQ0FDYlEsT0FBTyxFQUFDLFNBQVM7Z0NBQ2pCbEIsU0FBUyxFQUFHeEIsMkVBQWlCO2dDQUM3QjRDLE9BQU8sRUFBRXJDLFlBQVk7Z0NBQ3JCa0MsUUFBUSxFQUFFLENBQUNqQyxTQUFTOzBDQUFFLFFBRXhCOzs7OztvQ0FBUzs7Ozs7OzRCQUNKO2tDQUNQLDhEQUFDSCxvRUFBZTt3QkFBQ3dDLElBQUksRUFBQyxNQUFNO2tDQUMxQiw0RUFBQ0MsUUFBTTtzQ0FBQyxNQUFJOzs7OztnQ0FBUzs7Ozs7NEJBQ0w7Ozs7OztvQkFDYjs7b0JBQ04sQ0FDSjtDQUNGO0dBMUR1QnhDLElBQUk7O1FBR0hILHVFQUFhO1FBQ0dDLG1FQUFTOzs7QUFKMUJFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IFdhbGxldE11bHRpQnV0dG9uIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSc7XG5pbXBvcnQgKiBhcyB3ZWIzIGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcbmltcG9ydCB7IHVzZUNvbm5lY3Rpb24sIHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnXG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3Byb3h5LCBzZXRQcm94eV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gIGNvbnN0IHsgcHVibGljS2V5LCBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVdhbGxldCgpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcblxuICAgIGlmICghcHVibGljS2V5KSB7XG4gICAgICBhbGVydCgnUGxlYXNlIGNvbm5lY3QgeW91ciB3YWxsZXQhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIFwicHJveHlcIjogcHJveHksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmNvbGxhYmxhbmQtcHJveHl0ZXN0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImNvbGxhYmxhbmQtcHJveHl0ZXN0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL2NvbGxhYmxhbmQucG5nXCJcbiAgICAgICAgICB3aWR0aD17MjYwfVxuICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgIC8+XG4gICAgICAgIDxXYWxsZXRNdWx0aUJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy53YWxsZXRfYWRhcHRlcl9idXR0b259Lz5cbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPXtbXCJtYi0zXCIsIHN0eWxlcy5mb3JtX3Jvd10uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBcbiAgICAgICAgICAgICAgdHlwZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJveHkgV2FsbGV0IEFkZHJlc3NcIiBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gc2V0UHJveHkoZS50YXJnZXQudmFsdWUpIH0gXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshcHVibGljS2V5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9e3N0eWxlcy5zdWJtaXRfYnRufSBcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gXG4gICAgICAgICAgICBkaXNhYmxlZD17IXB1YmxpY0tleX0+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD1cInRlc3RcIj5cbiAgICAgICAgICA8YnV0dG9uPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZVN0YXRlIiwiRm9ybSIsIkJ1dHRvbiIsInN0eWxlcyIsIldhbGxldE11bHRpQnV0dG9uIiwid2ViMyIsInVzZUNvbm5lY3Rpb24iLCJ1c2VXYWxsZXQiLCJDb3B5VG9DbGlwYm9hcmQiLCJIb21lIiwiaGFuZGxlU3VibWl0IiwicHVibGljS2V5IiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwicHJveHkiLCJzZXRQcm94eSIsImNvbm5lY3Rpb24iLCJzZW5kVHJhbnNhY3Rpb24iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwid2FsbGV0X2FkYXB0ZXJfYnV0dG9uIiwiZm9ybSIsIkdyb3VwIiwiZm9ybV9yb3ciLCJqb2luIiwiQ29udHJvbCIsInR5cGUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJzdWJtaXRfYnRuIiwib25DbGljayIsInRleHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});