self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/cards/project-card.js":
/*!******************************************!*\
  !*** ./components/cards/project-card.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Project_card; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\d.schapeit\\Documents\\repositories\\spedion-blog\\components\\cards\\project-card.js";

function Project_card(_ref) {
  var title = _ref.title,
      image = _ref.image,
      description = _ref.description,
      link = _ref.link;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
    href: link,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      target: "_blank",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: image,
          alt: title,
          layout: "responsive",
          width: "453px",
          height: "320px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = Project_card;

var _c;

$RefreshReg$(_c, "Project_card");

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


/***/ }),

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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_project_card__WEBPACK_IMPORTED_MODULE_8__.default, {
        title: "SPEDION App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit vitae orci varius feugiat faucibus iaculis. Non pretium."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
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
          lineNumber: 29,
          columnNumber: 13
        }, this), morePosts.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__.default, {
          posts: morePosts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9wcm9qZWN0LWNhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2plY3RfY2FyZCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJJbmRleCIsImFsbFBvc3RzIiwiaGVyb1Bvc3QiLCJtb3JlUG9zdHMiLCJzbGljZSIsIkJMT0dfTkFNRSIsImNvdmVySW1hZ2UiLCJkYXRlIiwiYXV0aG9yIiwic2x1ZyIsImV4Y2VycHQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHZSxTQUFTQSxZQUFULE9BQXlEO0FBQUEsTUFBbENDLEtBQWtDLFFBQWxDQSxLQUFrQztBQUFBLE1BQTNCQyxLQUEyQixRQUEzQkEsS0FBMkI7QUFBQSxNQUFwQkMsV0FBb0IsUUFBcEJBLFdBQW9CO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQ3BFLHNCQUNJLDhEQUFDLElBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQVo7QUFBQSwyQkFDSTtBQUFHLFlBQU0sRUFBQyxRQUFWO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSSw4REFBQyxtREFBRDtBQUNJLGFBQUcsRUFBRUYsS0FEVDtBQUVJLGFBQUcsRUFBRUQsS0FGVDtBQUdJLGdCQUFNLEVBQUMsWUFIWDtBQUlJLGVBQUssRUFBQyxPQUpWO0FBS0ksZ0JBQU0sRUFBQztBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFRSTtBQUFBLG9CQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFTSTtBQUFBLG9CQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDtLQWxCdUJILFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSyxLQUFULE9BQTZCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQzFDLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLENBQWYsQ0FBbEI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHVEQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRTtBQUFBLG9CQUNHQyxxREFBU0E7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUUsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0UsOERBQUMsbUVBQUQ7QUFDRSxhQUFLLEVBQUMsYUFEUjtBQUVFLG1CQUFXLEVBQUM7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFXRSw4REFBQywwREFBRDtBQUFBLG1CQUNHSCxRQUFRLGlCQUNQLDhEQUFDLDBEQUFEO0FBQ0UsZUFBSyxFQUFFQSxRQUFRLENBQUNOLEtBRGxCO0FBRUUsb0JBQVUsRUFBRU0sUUFBUSxDQUFDSSxVQUZ2QjtBQUdFLGNBQUksRUFBRUosUUFBUSxDQUFDSyxJQUhqQjtBQUlFLGdCQUFNLEVBQUVMLFFBQVEsQ0FBQ00sTUFKbkI7QUFLRSxjQUFJLEVBQUVOLFFBQVEsQ0FBQ08sSUFMakI7QUFNRSxpQkFBTyxFQUFFUCxRQUFRLENBQUNRO0FBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosRUFXR1AsU0FBUyxDQUFDUSxNQUFWLEdBQW1CLENBQW5CLGlCQUF3Qiw4REFBQyw2REFBRDtBQUFhLGVBQUssRUFBRVI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE2QkQ7S0FoQ3VCSCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhN2VhZDIxMjBiMDgxZDU3ZTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0X2NhcmQoe3RpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24sIGxpbmt9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1M3B4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKVxyXG59IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3RvcmllcydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uL3BhZ2VzL2FwaS9wb3N0cydcbmltcG9ydCB7IEJMT0dfTkFNRSB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgSW50cm9fY2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmRzL2ludHJvLWNhcmQnXG5pbXBvcnQgUHJvamVjdF9jYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZHMvcHJvamVjdC1jYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGFsbFBvc3RzIH0pIHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0c1swXVxuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICB7QkxPR19OQU1FfVxuICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEludHJvX2NhcmQgLz5cbiAgICAgICAgPFByb2plY3RfY2FyZCBcbiAgICAgICAgICB0aXRsZT1cIlNQRURJT04gQXBwXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlbGl0IHZpdGFlIG9yY2kgdmFyaXVzIGZldWdpYXQgZmF1Y2lidXMgaWFjdWxpcy4gTm9uIHByZXRpdW0uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7aGVyb1Bvc3QgJiYgKFxuICAgICAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17aGVyb1Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXtoZXJvUG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgIHNsdWc9e2hlcm9Qb3N0LnNsdWd9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==