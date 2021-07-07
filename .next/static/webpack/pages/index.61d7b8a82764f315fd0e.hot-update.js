self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/more-stories */ "./components/more-stories.js");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
/* harmony import */ var _components_cards_intro_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cards/intro-card */ "./components/cards/intro-card.js");
/* harmony import */ var _components_cards_project_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/cards/project-card */ "./components/cards/project-card.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\d.schapeit\\Documents\\repositories\\spedion-blog\\pages\\index.js";








var __N_SSG = true;
function Index(_ref) {
  var allPosts = _ref.allPosts;
  var heroPost = allPosts[0];
  var morePosts = allPosts.slice(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: _lib_constants__WEBPACK_IMPORTED_MODULE_6__.BLOG_NAME
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_intro_card__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__.default, {
        children: [heroPost && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_post__WEBPACK_IMPORTED_MODULE_3__.default, {
          title: heroPost.title,
          coverImage: heroPost.coverImage,
          date: heroPost.date,
          author: heroPost.author,
          slug: heroPost.slug,
          excerpt: heroPost.excerpt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this), morePosts.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__.default, {
          posts: morePosts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = Index;

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJCTE9HX05BTUUiLCJ0aXRsZSIsImNvdmVySW1hZ2UiLCJkYXRlIiwiYXV0aG9yIiwic2x1ZyIsImV4Y2VycHQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxLQUFULE9BQTZCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQzFDLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLENBQWYsQ0FBbEI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHVEQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRTtBQUFBLG9CQUNHQyxxREFBU0E7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUUsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBUUUsOERBQUMsMERBQUQ7QUFBQSxtQkFDR0gsUUFBUSxpQkFDUCw4REFBQywwREFBRDtBQUNFLGVBQUssRUFBRUEsUUFBUSxDQUFDSSxLQURsQjtBQUVFLG9CQUFVLEVBQUVKLFFBQVEsQ0FBQ0ssVUFGdkI7QUFHRSxjQUFJLEVBQUVMLFFBQVEsQ0FBQ00sSUFIakI7QUFJRSxnQkFBTSxFQUFFTixRQUFRLENBQUNPLE1BSm5CO0FBS0UsY0FBSSxFQUFFUCxRQUFRLENBQUNRLElBTGpCO0FBTUUsaUJBQU8sRUFBRVIsUUFBUSxDQUFDUztBQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLEVBV0dSLFNBQVMsQ0FBQ1MsTUFBVixHQUFtQixDQUFuQixpQkFBd0IsOERBQUMsNkRBQUQ7QUFBYSxlQUFLLEVBQUVUO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBMEJEO0tBN0J1QkgsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MWQ3YjhhODI3NjRmMzE1ZmQwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3RvcmllcydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uL3BhZ2VzL2FwaS9wb3N0cydcbmltcG9ydCB7IEJMT0dfTkFNRSB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgSW50cm9fY2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmRzL2ludHJvLWNhcmQnXG5pbXBvcnQgUHJvamVjdF9jYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZHMvcHJvamVjdC1jYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGFsbFBvc3RzIH0pIHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0c1swXVxuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICB7QkxPR19OQU1FfVxuICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEludHJvX2NhcmQgLz5cbiAgICAgICAgXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge2hlcm9Qb3N0ICYmIChcbiAgICAgICAgICAgIDxIZXJvUG9zdFxuICAgICAgICAgICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGNvdmVySW1hZ2U9e2hlcm9Qb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIGRhdGU9e2hlcm9Qb3N0LmRhdGV9XG4gICAgICAgICAgICAgIGF1dGhvcj17aGVyb1Bvc3QuYXV0aG9yfVxuICAgICAgICAgICAgICBzbHVnPXtoZXJvUG9zdC5zbHVnfVxuICAgICAgICAgICAgICBleGNlcnB0PXtoZXJvUG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gICAgJ2F1dGhvcicsXG4gICAgJ2NvdmVySW1hZ2UnLFxuICAgICdleGNlcnB0JyxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbFBvc3RzIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=