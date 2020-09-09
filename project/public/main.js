/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./project/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./project/assets/js/main.js":
/*!***********************************!*\
  !*** ./project/assets/js/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./project/assets/js/service.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./project/assets/js/utils.js\");\n\r\n\r\n\r\nconst search = document.querySelector(\"#iSearch\");\r\n\r\nsearch.addEventListener(\"keyup\", (e) => {\r\n  try {\r\n    const find = e.target.value;\r\n\r\n    (async () => {\r\n      const user = await Object(_service__WEBPACK_IMPORTED_MODULE_0__[\"getUser\"])(find);\r\n      const repo = await Object(_service__WEBPACK_IMPORTED_MODULE_0__[\"getRepo\"])(find);\r\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"updateData\"])(user, repo);\r\n    })();\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./project/assets/js/main.js?");

/***/ }),

/***/ "./project/assets/js/service.js":
/*!**************************************!*\
  !*** ./project/assets/js/service.js ***!
  \**************************************/
/*! exports provided: getUser, getRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRepo\", function() { return getRepo; });\nconst url = \"https://api.github.com/users\";\nconst clientId = \"Iv1.87a07652c4a21083\";\nconst clientSecret = \"143204d4bfc11ac9f70ba25eaf2c1d310451d14c\";\n\nconst getUser = async (user) => {\n  const profileResponse = await fetch(\n    `${url}/${user}?client_id=${clientId}&client_secret=${clientSecret}`);\n  return profileResponse.json();\n};\n\nconst getRepo = async (user) => {\n  const repoResponse = await fetch(\n    `${url}/${user}/repos?client_id=${clientId}&client_secret=${clientSecret}`);\n  return repoResponse.json();\n};\n\n//# sourceURL=webpack:///./project/assets/js/service.js?");

/***/ }),

/***/ "./project/assets/js/utils.js":
/*!************************************!*\
  !*** ./project/assets/js/utils.js ***!
  \************************************/
/*! exports provided: updateData, listRepositories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateData\", function() { return updateData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listRepositories\", function() { return listRepositories; });\nconst updateData = (userResp, repo) => {\n  let avatarImg = document.querySelector(\"#avatar\");\n  let username = document.querySelector(\"#username\");\n  let user = document.querySelector(\"#user\");\n  let company = document.querySelector(\"#company\");\n  let location = document.querySelector(\"#location\");\n  let email = document.querySelector(\"#email\");\n\n  avatarImg.setAttribute(\"src\", userResp.avatar_url);\n\n  username.innerHTML = ` ${userResp.name}`;\n  user.innerHTML = ` <img src=\"https://img.icons8.com/material/20/000000/github-2.png\"/>\n                        ${userResp.login} `;\n  company.innerHTML = `<img src=\"https://img.icons8.com/small/20/000000/link-company-parent.png\"/>\n                        ${userResp.company}`;\n  location.innerHTML = `<img src=\"https://img.icons8.com/ios-glyphs/20/000000/worldwide-location.png\"/>\n                                            ${userResp.location}`;\n  email.innerHTML = `<img src=\"https://img.icons8.com/material-rounded/20/000000/filled-sent.png\"/>\n                        ${userResp.blog}`;\n  \n  listRepositories(repo);\n\n};\n\nconst listRepositories = (repo) => {\n  let searchResult = document.querySelector(\".search_result\");\n\n  console.log('====================================');\n  console.log(repo);\n  console.log('====================================');\n};\n\n\n//# sourceURL=webpack:///./project/assets/js/utils.js?");

/***/ })

/******/ });