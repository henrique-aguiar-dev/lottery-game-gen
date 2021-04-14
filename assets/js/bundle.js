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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_game_generator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/game_generator.js */ "./src/modules/game_generator.js");
 //-------------Main functions----------

var form = document.querySelector('.form');
var btnCopy = document.querySelector('.copy');

var showGames = function showGames(allGames) {
  document.querySelector('.result').style.display = 'block';
  var displayGames = document.querySelector('.jogos');
  var displayComb = document.querySelector('.combinacoes');
  displayGames.innerHTML = '';
  displayComb.innerHTML = '';
  allGames.main.forEach(function (eachGame) {
    return displayGames.innerHTML += "<p>".concat(eachGame, "</p>");
  });
  allGames.comb.forEach(function (eachGame) {
    return displayComb.innerHTML += "<p>".concat(eachGame, "</p>");
  });
  document.querySelector('.copy').style.display = 'inline-block';
};

var createGames = function createGames() {
  var type = document.querySelector('#game-type').value;
  var games = document.querySelector('#games').value;
  if (!type) return;
  var game = new _modules_game_generator_js__WEBPACK_IMPORTED_MODULE_0__["Game"](type, games);
  var allGames = game.generateGames();
  showGames(allGames);
};

var copyAll = function copyAll() {
  var content = document.querySelector('.result').innerText;
  navigator.clipboard.writeText(content).then(alert('Apostas copiadas. Cole (Ctrl + v) num documento e salve.'));
};

btnCopy.addEventListener('click', function () {
  return copyAll();
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  createGames();
});

/***/ }),

/***/ "./src/modules/game_generator.js":
/*!***************************************!*\
  !*** ./src/modules/game_generator.js ***!
  \***************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
* -------------Lottery game generator / Gerador de jogos para loterias---
* By: Henrique, L. - https://github.com/ApiLogik
* Developed based on the official Brazilian lotteries
* Desenvolvido com base nas loterias oficiais da Caixa Econômica Federal
* -------------------Training project-----------------------------------
*/
//---------Classes----------------
var Game = /*#__PURE__*/function () {
  function Game(type, games) {
    _classCallCheck(this, Game);

    this.type = Number(type); //Type of game selectors [1 - 5]

    this.games = games;
    this.mainGames = [];
    this.allComb = [];
    this.min = 1;
    this.allGames = {
      main: null,
      comb: null
    }; //According to the game option received by the selectors

    switch (this.type) {
      case 1:
        this.limit = 6;
        this.max = 61;
        break;

      case 2:
        this.limit = 6;
        this.max = 51;
        break;

      case 3:
        this.limit = 15;
        this.max = 26;
        break;

      case 4:
        this.limit = 5;
        this.max = 81;
        break;

      case 5:
        this.limit = 50;
        this.min = 0;
        this.max = 100;
        break;
    }
  }

  _createClass(Game, [{
    key: "_addZeroLeft",
    value: function _addZeroLeft(number) {
      if (number >= 10) {
        return number;
      } else {
        return "0".concat(number);
      }

      ;
    } //Generate each game sequence and add zero to the left if < 10;

  }, {
    key: "_generateSequence",
    value: function _generateSequence() {
      this.actualGame = [];

      for (var i = 0; i < this.limit; i++) {
        var number = Math.floor(Math.random() * (this.max - this.min) + this.min).toString();
        number = this._addZeroLeft(number);
        !this.actualGame.includes(number) ? this.actualGame.push(number) : i--;
        this.actualGame.sort(function (a, b) {
          return a - b;
        });
      }
    } //Mount the combinations by splitting each game, reversing the order (up/down) and concatenating again;

  }, {
    key: "_generateHalfComb",
    value: function _generateHalfComb() {
      var _this = this;

      var arrPart1 = [];
      var arrPart2 = [];
      var slicer = Math.ceil(this.limit / 2);
      var arrPart2Temp = [];
      var part1;
      var part2;
      var sizePart2;

      for (var index in this.mainGames) {
        part1 = this.mainGames[index].slice(0, slicer);
        part2 = this.mainGames[index].slice(slicer, this.limit);
        arrPart1.push(part1);
        arrPart2Temp.push(part2);
      }

      sizePart2 = arrPart2Temp.length - 1;
      arrPart2Temp.map(function (_value, _index, arr) {
        arrPart2.push(arr[sizePart2]);
        if (sizePart2 > 0) sizePart2--;
      });
      /*
      * Repeated numbers = no concatenation; discard combination;
      * Other options can be implemented (e.g: change the number or random combinations);
      */

      var _loop = function _loop(i) {
        if (!arrPart1[i].find(function (value) {
          return arrPart2[i].includes(value);
        })) {
          _this.actualComb = arrPart1[i].concat(arrPart2[i]).sort(function (a, b) {
            return a - b;
          });

          _this.allComb.push(_this.actualComb);
        }
      };

      for (var i = 0; i < arrPart1.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "_generate2by2Comb",
    value: function _generate2by2Comb() {
      var _this2 = this;

      var gamesLength = this.games - this.games % 3; //Array length divisible by 3 - each comb need 3 games
      //Get 2 elements of each game - [o, o, x, x, x, x], [x, x, o, o, x, x], [x, x, x, x, o, o]

      var combGen = function combGen(group) {
        var actualComb = [];
        var cut = 0;

        for (var i = 0; i < 3; i++) {
          actualComb.push(group[i].slice(cut, cut + 2));
          cut < 4 ? cut += 2 : cut = 0;
        }
        /*
        * Repeated numbers = no concatenation; discard combination;
        */


        var match1w2 = actualComb[0].find(function (value) {
          return actualComb[1].includes(value);
        });
        var match2w3 = actualComb[1].find(function (value) {
          return actualComb[2].includes(value);
        });

        if (!match1w2 && !match2w3) {
          _this2.allComb.push(actualComb[0].concat(actualComb[1], actualComb[2]).sort(function (a, b) {
            return a - b;
          }));
        }
      }; //Split all games in groups of 3 elements


      for (var groupSize = 3; groupSize <= gamesLength; groupSize += 3) {
        combGen(this.mainGames.slice(groupSize - 3, groupSize));
      }
    }
  }, {
    key: "_stringfyAndFormat",
    value: function _stringfyAndFormat(arrToStr) {
      arrToStr = arrToStr.forEach(function (each, index) {
        arrToStr[index] = each.join(' ');
      });
    }
  }, {
    key: "_filterRepeated",
    value: function _filterRepeated(mainGames, allComb) {
      allComb.find(function (value, index) {
        if (mainGames.includes(value)) {
          allComb = allComb.splice(index, 1);
        }
      });
    } //Main method - calls the sequences and combinations generators; stringfy & format; returns a 'allGames' object

  }, {
    key: "generateGames",
    value: function generateGames() {
      for (var i = 0; i < this.games; i++) {
        this._generateSequence();

        this.mainGames.push(this.actualGame);
      }

      this.mainGames.length > 1 ? this._generateHalfComb() : false;
      this.mainGames.length > 2 && this.limit === 6 ? this._generate2by2Comb() : false;

      this._stringfyAndFormat(this.mainGames);

      this._stringfyAndFormat(this.allComb);

      this._filterRepeated(this.mainGames, this.allComb);

      this.allGames.main = this.mainGames;
      this.allGames.comb = this.allComb;
      return this.allGames;
    }
  }]);

  return Game;
}(); //end - class Game

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map