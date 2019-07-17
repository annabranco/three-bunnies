webpackHotUpdate("Three Bunnies Football Club",{

/***/ "./packages/mars-theme/src/components/index.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./packages/mars-theme/src/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./packages/mars-theme/src/components/list/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post */ \"./packages/mars-theme/src/components/post.js\");\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Players */ \"./packages/mars-theme/src/components/Players/index.js\");\n/* harmony import */ var _page404_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page404.js */ \"./packages/mars-theme/src/components/page404.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading */ \"./packages/mars-theme/src/components/loading.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home */ \"./packages/mars-theme/src/components/Home/index.js\");\n/* harmony import */ var _Players_playerList_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Players/playerList.js */ \"./packages/mars-theme/src/components/Players/playerList.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../../'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _templateObject4(){var data=_taggedTemplateLiteral([\"\\n  margin: 50px 0 0 35vw;\\n  overscroll-behavior: none;\\n\"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-between;\\n  background-image: linear-gradient(\\n    180deg,\\n    rgba(66, 174, 228, 0.1),\\n    rgba(66, 174, 228, 0)\\n  );\\n  overscroll-behavior: contain;\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  background-image: linear-gradient(to left, darkgreen, mediumseagreen);\\n  border: 4px solid white;\\n  border-top: 0;\\n  border-left: 0;\\n  border-right: 0;\\n  position: fixed;\\n  width: 100vw;\\n  z-index: 5;\\n  box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.4);\\n  overscroll-behavior: none;\\n\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral([\"\\n  body {\\n    margin: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto,\\n      \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n    overflow: auto;\\n  }\\n  a,\\n  a:visited {\\n    color: inherit;\\n    text-decoration: none;\\n  }\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var globalStyles=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject());var Theme=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);console.log(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"title\",null,state.frontity.title),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\",{name:\"description\",content:state.frontity.description}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"html\",{lang:\"en\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\",{rel:\"shortcut icon\",type:\"image/x-icon\",href:\"favicon.png\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"link\",{href:\"https://fonts.googleapis.com/css?family=Averia+Sans+Libre|Averia+Serif+Libre|Barlow&display=swap\",rel:\"stylesheet\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:globalStyles}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(HeadContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Home__WEBPACK_IMPORTED_MODULE_9__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Main,null,data.isFetching&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_8__[\"default\"],null),data.isArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),data.isPostType&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),data.isPlayersPage&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Players_playerList_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],null),data.isPlayer&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Players__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Players_playerList_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],null)),data.is404&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_page404_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Theme));var HeadContainer=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());var Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject3());var Main=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject4());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz84MWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGxheWVycyBmcm9tIFwiLi9QbGF5ZXJzXCI7XG5pbXBvcnQgUGFnZTQwNCBmcm9tIFwiLi9wYWdlNDA0LmpzXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgUGxheWVyc0xpc3QgZnJvbSBcIi4vUGxheWVycy9wbGF5ZXJMaXN0LmpzXCI7XG5pbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi4vLi4vLi4vLi4vXCI7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBhLFxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc29sZS5sb2coc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3N0YXRlLmZyb250aXR5LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3N0YXRlLmZyb250aXR5LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCJmYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BdmVyaWErU2FucytMaWJyZXxBdmVyaWErU2VyaWYrTGlicmV8QmFybG93JmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsU3R5bGVzfSAvPlxuICAgICAgPEhlYWRDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDwvSGVhZENvbnRhaW5lcj5cbiAgICAgIDxCb2R5PlxuICAgICAgICA8SG9tZSAvPlxuICAgICAgICA8TWFpbj5cbiAgICAgICAgICB7ZGF0YS5pc0ZldGNoaW5nICYmIDxMb2FkaW5nIC8+fVxuICAgICAgICAgIHtkYXRhLmlzQXJjaGl2ZSAmJiA8TGlzdCAvPn1cbiAgICAgICAgICB7ZGF0YS5pc1Bvc3RUeXBlICYmIDxQb3N0IC8+fVxuICAgICAgICAgIHtkYXRhLmlzUGxheWVyc1BhZ2UgJiYgPFBsYXllcnNMaXN0IC8+fVxuICAgICAgICAgIHtkYXRhLmlzUGxheWVyICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxQbGF5ZXJzIC8+XG4gICAgICAgICAgICAgIDxQbGF5ZXJzTGlzdCAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZGF0YS5pczQwNCAmJiA8UGFnZTQwNCAvPn1cbiAgICAgICAgPC9NYWluPlxuICAgICAgPC9Cb2R5PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cbmNvbnN0IEhlYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgZGFya2dyZWVuLCBtZWRpdW1zZWFncmVlbik7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgei1pbmRleDogNTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTgwZGVnLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwLjEpLFxuICAgIHJnYmEoNjYsIDE3NCwgMjI4LCAwKVxuICApO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuYDtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogNTBweCAwIDAgMzV2dztcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbmA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/index.js\n");

/***/ })

})