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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ \"./src/domManipulator.js\");\n\n\nconst apiCaller = (() => {\n  const searchQuery = async (position) => {\n    try {\n      _domManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startLoadingIcon();\n      const call = await fetch(\n        `https://api.weatherapi.com/v1/forecast.json?key=6d0455883e7c4645aa8174008231507&q=${position}&days=5`,\n        { mode: 'cors' },\n      );\n      const data = await call.json();\n      // console.log(data);\n      _domManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updatePage(data);\n    } catch (error) {\n      // console.warn(error);\n      _domManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopLoadingIcon();\n    }\n  };\n\n  const searchCurrentPosition = (position) => {\n    const { latitude } = position.coords;\n    const { longitude } = position.coords;\n    const location = `${latitude},${longitude}`;\n    // console.log(location);\n    searchQuery(location);\n  };\n\n  const geolocationError = () => {\n    // let message;\n    // if (error.code === 1) {\n    //   message = 'User denied location services. ';\n    // } else if (error.code === 2) {\n    //   message = 'Position unavailable. ';\n    // } else {\n    //   message = 'Location services request timed out. ';\n    // }\n    // console.warn(`${message}Please search for a location instead.`);\n    apiCaller.searchQuery('london');\n  };\n\n  const initialQuery = () => {\n    const searchForm = document.getElementById('search');\n    searchForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const formData = new FormData(e.target);\n      searchQuery(`${formData.get('query')}`);\n    });\n    _domManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startLoadingIcon();\n    navigator.geolocation.getCurrentPosition(\n      searchCurrentPosition,\n      geolocationError,\n    );\n  };\n\n  return { initialQuery, searchQuery };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiCaller);\n\n\n//# sourceURL=webpack://weather-app/./src/apiCaller.js?");

/***/ }),

/***/ "./src/domManipulator.js":
/*!*******************************!*\
  !*** ./src/domManipulator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst domManipulator = (() => {\n  const startLoadingIcon = () => {\n    const loading = document.getElementById('loading-image');\n    loading.classList.remove('hidden');\n  };\n\n  const stopLoadingIcon = () => {\n    const loading = document.getElementById('loading-image');\n    loading.classList.add('hidden');\n  };\n\n  const convertTime = (input) => {\n    const dateOptions = {\n      year: 'numeric',\n      month: 'long',\n      day: 'numeric',\n    };\n    const timeOptions = {\n      hour: 'numeric',\n      minute: 'numeric',\n    };\n    const [date, time] = [new Date(input), new Date(input)];\n    const formattedDate = date.toLocaleString('en-US', dateOptions);\n    const formattedTime = time.toLocaleString('en-US', timeOptions);\n    return [formattedDate, formattedTime];\n  };\n\n  const getDayOfWeek = (date) => {\n    const day = new Date(date);\n    day.setMinutes(day.getMinutes() + day.getTimezoneOffset());\n    return day.toLocaleDateString('en-US', { weekday: 'long' });\n  };\n\n  const tempString = (min, max) => `${min}°F/${max}°F`;\n\n  const updateForecastColumn = (data) => {\n    const { forecast } = data;\n    const todayMinTemp = forecast.forecastday[0].day.mintemp_f;\n    const todayMaxTemp = forecast.forecastday[0].day.maxtemp_f;\n    const tomorrowMinTemp = forecast.forecastday[1].day.mintemp_f;\n    const tomorrowMaxTemp = forecast.forecastday[1].day.maxtemp_f;\n    const thirdDayMinTemp = forecast.forecastday[2].day.mintemp_f;\n    const thirdDayMaxTemp = forecast.forecastday[2].day.maxtemp_f;\n    const thirdDay = getDayOfWeek(forecast.forecastday[2].date);\n    const todayTemps = document.getElementById('forecast-today-temps');\n    const tomorrowTemps = document.getElementById('forecast-tomorrow-temps');\n    const thirdDayTemps = document.getElementById('forecast-dat-temps');\n    const thirdDayElem = document.getElementById('day-after-tomorrow');\n    todayTemps.textContent = tempString(todayMinTemp, todayMaxTemp);\n    tomorrowTemps.textContent = tempString(tomorrowMinTemp, tomorrowMaxTemp);\n    thirdDayTemps.textContent = tempString(thirdDayMinTemp, thirdDayMaxTemp);\n    thirdDayElem.textContent = `${thirdDay}`;\n  };\n\n  const updateTodayColumn = (data) => {\n    const { location } = data;\n    const { name } = location;\n    const [currentDate, currentTime] = convertTime(location.localtime);\n    const locationElem = document.getElementById('location');\n    locationElem.textContent = name;\n    const dateElem = document.getElementById('date');\n    dateElem.textContent = currentDate;\n    const timeElem = document.getElementById('time');\n    timeElem.textContent = currentTime;\n    const todaysWeather = data.current;\n    const currentTemp = todaysWeather.temp_f;\n    const feelsLike = `Feels like ${todaysWeather.feelslike_f}`;\n    const { humidity } = todaysWeather;\n    const condition = todaysWeather.condition.text;\n    const sunrisesunset = `${data.forecast.forecastday[0].astro.sunrise} Sunrise - ${data.forecast.forecastday[0].astro.sunset} Sunset`;\n    const wind = `${todaysWeather.wind_mph}mph ${todaysWeather.wind_dir}`;\n    const tempElem = document.getElementById('temperature');\n    tempElem.textContent = `${currentTemp}°F`;\n    const feelsLikeElem = document.getElementById('feels-like');\n    feelsLikeElem.textContent = `${feelsLike}°F`;\n    const humidityElem = document.getElementById('humidity');\n    humidityElem.textContent = `${humidity}% Humidity`;\n    const conditionElem = document.getElementById('cloud-conditions');\n    conditionElem.textContent = condition;\n    const sunElem = document.getElementById('sunrise-sunset');\n    sunElem.textContent = sunrisesunset;\n    const windElem = document.getElementById('wind-speed');\n    windElem.textContent = wind;\n  };\n\n  const updateHourlyTempColumn = (data) => {\n    const { hour } = data.forecast.forecastday[0];\n    const intervals = Array.from(\n      document.getElementsByClassName('interval-temp'),\n    );\n    const temps = Array.from(hour);\n    for (let i = 0; i < 24; i += 1) {\n      intervals[i].textContent = `${temps[i].temp_f}°F`;\n    }\n  };\n\n  const updateBackground = (data) => {\n    const background = document.getElementById('content');\n    background.classList = '';\n    const conditionCode = data.current.condition.code;\n    if (conditionCode === 1000) {\n      background.classList.add('sunny');\n    } else if (conditionCode < 1100) {\n      background.classList.add('cloudy');\n    } else {\n      background.classList.add('stormy');\n    }\n  };\n\n  const removeLoadingEllipsis = () => {\n    const elements = document.getElementsByClassName('loading');\n    Array.from(elements).forEach((element) =>\n      element.classList.remove('loading'),\n    );\n  };\n\n  const updatePage = (data) => {\n    updateForecastColumn(data);\n    updateTodayColumn(data);\n    updateHourlyTempColumn(data);\n    updateBackground(data);\n    stopLoadingIcon();\n    removeLoadingEllipsis();\n  };\n\n  // const alertUser = () => {\n  //   const location = document.getElementById('location');\n  //   location.textContent = `Please search for a location instead.`;\n  // };\n\n  return {\n    updatePage,\n    startLoadingIcon,\n    stopLoadingIcon,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManipulator);\n\n\n//# sourceURL=webpack://weather-app/./src/domManipulator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiCaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCaller */ \"./src/apiCaller.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _apiCaller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initialQuery);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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