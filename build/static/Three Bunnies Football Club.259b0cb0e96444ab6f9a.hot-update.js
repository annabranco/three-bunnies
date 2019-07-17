webpackHotUpdate("Three Bunnies Football Club",{

/***/ "./packages/mars-theme/src/components/index.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./packages/mars-theme/src/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./packages/mars-theme/src/components/list/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post */ \"./packages/mars-theme/src/components/post.js\");\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Players */ \"./packages/mars-theme/src/components/Players/index.js\");\n/* harmony import */ var _page404_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page404.js */ \"./packages/mars-theme/src/components/page404.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading */ \"./packages/mars-theme/src/components/loading.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home */ \"./packages/mars-theme/src/components/Home/index.js\");\n/* harmony import */ var _Players_playerList_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Players/playerList.js */ \"./packages/mars-theme/src/components/Players/playerList.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../..'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _templateObject4(){var data=_taggedTemplateLiteral([\"\\n  margin: 50px 0 0 35vw;\\n  overscroll-behavior: none;\\n\"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-between;\\n  background-image: linear-gradient(\\n    180deg,\\n    rgba(66, 174, 228, 0.1),\\n    rgba(66, 174, 228, 0)\\n  );\\n  overscroll-behavior: contain;\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  background-image: linear-gradient(to left, darkgreen, mediumseagreen);\\n  border: 4px solid white;\\n  border-top: 0;\\n  border-left: 0;\\n  border-right: 0;\\n  position: fixed;\\n  width: 100vw;\\n  z-index: 5;\\n  box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.4);\\n  overscroll-behavior: none;\\n\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral([\"\\n  body {\\n    margin: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto,\\n      \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n    overflow: auto;\\n  }\\n  a,\\n  a:visited {\\n    color: inherit;\\n    text-decoration: none;\\n  }\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var globalStyles=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject());var Theme=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);console.log(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"title\",null,state.frontity.title),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\",{name:\"description\",content:state.frontity.description}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"html\",{lang:\"en\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\",{rel:\"shortcut icon\",type:\"image/x-icon\",href:\"favicon.png\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\",{href:\"https://fonts.googleapis.com/css?family=Averia+Sans+Libre|Averia+Serif+Libre|Barlow&display=swap\",rel:\"stylesheet\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:globalStyles}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(HeadContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Home__WEBPACK_IMPORTED_MODULE_9__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Main,null,data.isFetching&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_8__[\"default\"],null),data.isArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),data.isPostType&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),data.isPlayersPage&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Players_playerList_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],null),data.isPlayer&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Players__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Players_playerList_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],null)),data.is404&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_page404_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Theme));var HeadContainer=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());var Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject3());var Main=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject4());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz84MWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGxheWVycyBmcm9tIFwiLi9QbGF5ZXJzXCI7XG5pbXBvcnQgUGFnZTQwNCBmcm9tIFwiLi9wYWdlNDA0LmpzXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgUGxheWVyc0xpc3QgZnJvbSBcIi4vUGxheWVycy9wbGF5ZXJMaXN0LmpzXCI7XG5pbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi4vLi4vLi4vLi5cIjtcblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzYFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIGEsXG4gIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zb2xlLmxvZyhzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c3RhdGUuZnJvbnRpdHkudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c3RhdGUuZnJvbnRpdHkuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cImZhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUF2ZXJpYStTYW5zK0xpYnJlfEF2ZXJpYStTZXJpZitMaWJyZXxCYXJsb3cmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG4gICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkQ29udGFpbmVyPlxuICAgICAgPEJvZHk+XG4gICAgICAgIDxIb21lIC8+XG4gICAgICAgIDxNYWluPlxuICAgICAgICAgIHtkYXRhLmlzRmV0Y2hpbmcgJiYgPExvYWRpbmcgLz59XG4gICAgICAgICAge2RhdGEuaXNBcmNoaXZlICYmIDxMaXN0IC8+fVxuICAgICAgICAgIHtkYXRhLmlzUG9zdFR5cGUgJiYgPFBvc3QgLz59XG4gICAgICAgICAge2RhdGEuaXNQbGF5ZXJzUGFnZSAmJiA8UGxheWVyc0xpc3QgLz59XG4gICAgICAgICAge2RhdGEuaXNQbGF5ZXIgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFBsYXllcnMgLz5cbiAgICAgICAgICAgICAgPFBsYXllcnNMaXN0IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkYXRhLmlzNDA0ICYmIDxQYWdlNDA0IC8+fVxuICAgICAgICA8L01haW4+XG4gICAgICA8L0JvZHk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuY29uc3QgSGVhZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBkYXJrZ3JlZW4sIG1lZGl1bXNlYWdyZWVuKTtcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiA1O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbmA7XG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAxODBkZWcsXG4gICAgcmdiYSg2NiwgMTc0LCAyMjgsIDAuMSksXG4gICAgcmdiYSg2NiwgMTc0LCAyMjgsIDApXG4gICk7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG5gO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiA1MHB4IDAgMCAzNXZ3O1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuYDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/index.js\n");

/***/ })

})