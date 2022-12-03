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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../apis/index.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (modal, meal) => {\n  const ingredients = [];\n\n  for (let i = 1; i <= 20; i += 1) {\n    // Check if ingredient exists\n    if (meal[`strIngredient${i}`]) {\n      // Add ingredient to array\n      ingredients.push(\n        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`,\n      );\n    } else {\n      break;\n    }\n  }\n  modal.innerHTML = `\n    <div class=\"max-w-7xl mx-auto relative transition-all duration-1000 ease-out\">\n    <div class=\"max-w-4xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto  md:mb-8 mt-0 transition-all duration-1000 ease-out\">\n      <div class=\"recipe-summary wrapper md:mt-8 flex flex-col-reverse w-full align-center justify-between md:flex-row\">\n        <div class=\"recipe-details\">\n          <div class=\"primary-info-text\">\n            <div class=\"primary-info-left-wrapper\">\n              <h2 class=\"recipe-title font-bold text-xl md:text-4xl mt-0 mb-4 sm:w-full md:mb-8 font-sans w-80\">\n                ${meal.strMeal}\n              </h2>\n            </div>\n          </div>\n          <div class=\"summary-item-wrapper flex relative justify-center md:justify-start\">\n            <div class=\"recipe-summary-item  text-4xl flex flex-col w-28 border-r border-gray-400  justify-center items-center\">\n              <span class=\"value font-light text-4xl h-12\">\n                ${ingredients.length}\n              </span>\n              <span class=\"unit font-normal text-sm leading-3\">\n                Ingredients\n              </span>\n            </div>\n            <div class=\"recipe-summary-item unit text-4xl flex flex-col w-36 border-r border-gray-400 justify-center items-center\">\n              <span class=\"value font-light text-4xl h-12\">\n                25\n              </span>\n              <span class=\"unit font-normal text-sm leading-3\">\n                Minutes\n              </span>\n            </div>\n            <div class=\"recipe-summary-item nutrition text-4xl flex flex-col w-36 justify-center items-center\">\n              <span class=\"value font-light text-4xl h-12\">\n                210\n              </span>\n              <span class=\"unit font-normal text-sm leading-3\">\n                Calories\n              </span>\n            </div>\n          </div>\n  \n          <div class=\"main mt-6 text-center md:text-justify m-8\">\n            <h2 class=\"h-8 text-center md:text-justify font-bold\">\n              Ingredients\n            </h2>\n            <ul class=\"single-meal-ul w-11/12 mx-auto md:mx-0\">\n            ${ingredients\n    .map(\n      (ing) => `\n              <li\n                class=\"single-meal-ul-li\"\n                id={uuidv4()}\n              >\n                ${ing}\n              </li>\n            `,\n    )\n    .join('')}\n            </ul>\n          </div>\n        </div>\n        <div class=\"recipe-details-image w-full mobile-div relative\">\n          <img\n            alt=${meal.strMeal}\n            src=${meal.strMealThumb}\n            class=\"recipe-image w-11/12 mx-auto md:max-w-full rounded-lg md:rounded-lg mobile\"\n          />\n        </div>\n      </div>\n      <p class=\"single-meal-p w-11/12 m-auto md:mt-6 list-none pb-20 pt-10\">\n        ${meal.strInstructions}\n      </p>\n      \n      <h2 class=\"comment-count-header\">Commment (0) </h2>\n      <ul class=\"comment-display\">\n    \n      </ul>\n      \n      <h2 class=\"comment-header\">Add Comment</h2>\n      <form>\n      <input type=\"text\" class=\"username\" placeholder = \"Your name\" required/>\n      <textarea placeholder=\"Your comment\" class=\"comment\" required></textarea>\n      <input type=\"submit\" class=\"submitBtn\" value=\"Comment\" />\n   </form>\n     \n     \n    </div>\n  </div>`;\n\n  modal.parentElement.classList.add('showRecipe');\n  const btn = document.querySelector('.submitBtn');\n  const username = document.querySelector('.username');\n  const comment = document.querySelector('.comment');\n  const commentCount = document.querySelector('.comment-count-header');\n  const ul = document.querySelector('.comment-display');\n  btn.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    if (username.value.trim() === '') return;\n    if (comment.value.trim() === '') return;\n\n    const userVal = username.value;\n    const commentVal = comment.value;\n    const id = meal.idMeal;\n    const post = { item_id: id, username: userVal, comment: commentVal };\n    btn.value = 'Processing...';\n    btn.disabled = true;\n    await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../apis/index.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(post);\n    const response = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XkZb08sfqWimSB3Sqtb3/comments?item_id=${id}`,\n    );\n    const comments = await response.json();\n\n    ul.innerHTML = '';\n    comments.forEach((comPost) => {\n      ul.innerHTML += `\n          \n        <li><p>${comPost.creation_date}</p><p>${comPost.username}</p><p>${comPost.comment}</p></li>\n    `;\n      commentCount.innerHTML = '';\n\n      commentCount.innerHTML = `Comments (${comments.length})`;\n      btn.value = 'Comment';\n      btn.disabled = false;\n      username.value = '';\n      comment.value = '';\n    });\n  });\n\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XkZb08sfqWimSB3Sqtb3/comments?item_id=${meal.idMeal}`,\n  );\n  const comments = await response.json();\n\n  if (!comments.length) return;\n\n  comments.forEach((comPost) => {\n    ul.innerHTML += `\n      \n    <li><p>${comPost.creation_date}</p><p>${comPost.username}</p><p>${comPost.comment}</p></li>\n`;\n    commentCount.innerHTML = '';\n\n    commentCount.innerHTML = `Comments (${comments.length})`;\n  });\n});\n\n\n//# sourceURL=webpack://basic-setup/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;