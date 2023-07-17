/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiCaller.js":
/*!**************************!*\
  !*** ./src/apiCaller.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiCaller = (() => {\n  // const getCurrentLocation = async () => {\n  //   const coordinates = navigator.geolocation.getCurrentPosition((position) => {\n  //     const { latitude } = position.coords;\n  //     const { longitude } = position.coords;\n  //     const location = `${latitude},${longitude}`;\n  //     return location;\n  //   });\n  //   return coordinates;\n  // };\n\n  const searchQuery = async (position) => {\n    try {\n      const call = await fetch(\n        `https://api.weatherapi.com/v1/current.json?key=6d0455883e7c4645aa8174008231507&q=${position}`,\n        { mode: 'cors' },\n      );\n      const data = await call.json();\n      console.log(data);\n      return data;\n    } catch (err) {\n      alert(err);\n      return null;\n    }\n  };\n\n  // const initialQuery = async () => {\n  //   try {\n  //     const currentLocation = await getCurrentLocation();\n  //     const data = await searchQuery(currentLocation);\n  //     return data;\n  //   } catch (error) {\n  //     let message;\n  //     if (error === 1) {\n  //       message = 'User denied location services. ';\n  //     } else if (error === 2) {\n  //       message = 'Position unavailable. ';\n  //     } else {\n  //       message = 'Location services request timed out. ';\n  //     }\n  //     alert(`${message}Please search for a location instead.`);\n  //     return null;\n  //   }\n  // };\n\n  const searchCurrentPosition = async (position) => {\n    const { latitude } = position.coords;\n    const { longitude } = position.coords;\n    const location = `${latitude},${longitude}`;\n    console.log(location);\n    searchQuery(location);\n  };\n\n  const initialQuery = async () => {\n    try {\n      navigator.geolocation.getCurrentPosition(searchCurrentPosition);\n    } catch (error) {\n      console.warn(error);\n      let message;\n      if (error === 1) {\n        message = 'User denied location services. ';\n      } else if (error === 2) {\n        message = 'Position unavailable. ';\n      } else {\n        message = 'Location services request timed out. ';\n      }\n      alert(`${message}Please search for a location instead.`);\n    }\n  };\n\n  return { initialQuery, searchQuery };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiCaller);\n\n// async function test() {\n//     try {\n//         throw new Error('oops');\n//     } catch (error) {\n//             console.log('error');\n//             return Promise.reject(new Error(error));\n//         }\n//     }\n\n// async function test2() {\n//   try {\n//       const test3 = await test();\n//   } catch (error) {\n//       console.log('error caught')\n//   }\n// }\n\n// // Check if geolocation is supported by the browser\n// if (\"geolocation\" in navigator) {\n//   // Prompt user for permission to access their location\n//   navigator.geolocation.getCurrentPosition(\n//     // Success callback function\n//     (position) => {\n//       // Get the user's latitude and longitude coordinates\n//       const lat = position.coords.latitude;\n//       const lng = position.coords.longitude;\n\n//       // Do something with the location data, e.g. display on a map\n//       console.log(`Latitude: ${lat}, longitude: ${lng}`);\n//     },\n//     // Error callback function\n//     (error) => {\n//       // Handle errors, e.g. user denied location sharing permissions\n//       console.error(\"Error getting user location:\", error);\n//     }\n//   );\n// } else {\n//   // Geolocation is not supported by the browser\n//   console.error(\"Geolocation is not supported by this browser.\");\n// }\n\n\n//# sourceURL=webpack://weather-app/./src/apiCaller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiCaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCaller */ \"./src/apiCaller.js\");\n// import domManipulator from './domManipulator';\n\n\ndocument.addEventListener('DOMContentLoaded', _apiCaller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initialQuery);\n// document.addEventListener('DOMContentLoaded', domManipulator.weatherLoad);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;