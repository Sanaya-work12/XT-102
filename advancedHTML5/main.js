/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _mealView = __webpack_require__(1);

	var _mealView2 = _interopRequireDefault(_mealView);

	var _mealController = __webpack_require__(2);

	var _mealController2 = _interopRequireDefault(_mealController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {

	    var view = new _mealView2.default({
	        clearAll: document.querySelector('#clr-button'),
	        itemName: document.querySelector('#item-name'),
	        calorieAmt: document.querySelector('#calorie-amt'),
	        addBtn: document.querySelector('#add-item-button'),
	        updateBtn: document.querySelector('#update-data'),
	        delBtn: document.querySelector('#delete-data'),
	        displayCalTotal: document.querySelector('#display-calories'),
	        itemTable: document.querySelector('#items-table')
	    });

	    var controller = _mealController2.default;
	    view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mealController = __webpack_require__(2);

	var _mealController2 = _interopRequireDefault(_mealController);

	var _mealStorage = __webpack_require__(3);

	var _mealStorage2 = _interopRequireDefault(_mealStorage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.data = _mealStorage2.default;
	        this.controller = _mealController2.default;
	        this.targetId;
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.render(this.controller.items);

	            this.data.itemChanged.attach(function (meal) {
	                _this.render(meal);
	            });

	            this.elements.addBtn.addEventListener('click', function () {
	                if (_this.elements.itemName.value != "" && _this.elements.calorieAmt.value != "") {
	                    if (Number.isInteger(parseInt(_this.elements.calorieAmt.value))) {
	                        _this.controller.addMeal(_this.elements.itemName.value, _this.elements.calorieAmt.value);
	                    }
	                }
	                _this.elements.itemName.value = '';
	                _this.elements.calorieAmt.value = '';
	            });

	            this.elements.clearAll.addEventListener('click', function () {
	                this.controller.clearMeal();
	            });
	        }
	    }, {
	        key: "render",
	        value: function render(meal) {
	            var _this2 = this;

	            this.elements.displayCalTotal.innerHTML = 'Total Calories : ' + this.controller.totalCalories;
	            var mealInfo = this.data.getMeals();
	            mealInfo.forEach(function (item) {
	                var editBtn = document.createElement('button');
	                var tRow = document.createElement('tr');
	                var td1 = document.createElement('td');
	                var td2 = document.createElement('td');
	                var td3 = document.createElement('td');
	                editBtn.id = item.id;
	                editBtn.innerHTML = 'Edit';
	                td1.innerHTML = item.meal;
	                td2.innerHTML = item.calorie;
	                td3.appendChild(editBtn);
	                tRow.appendChild(td1);
	                tRow.appendChild(td2);
	                tRow.appendChild(td3);
	                _this2.elements.itemTable.appendChild(tRow);

	                var that = _this2;
	                editBtn.addEventListener('click', function (event) {
	                    that.targetId = event.currentTarget.id;
	                    that.elements.addBtn.classList.add('hide');
	                    that.elements.updateBtn.classList.remove('hide');
	                    that.elements.delBtn.classList.remove('hide');
	                    that.elements.itemName.value = item.meal;
	                    that.elements.calorieAmt.value = item.calorie;
	                });

	                _this2.elements.updateBtn.addEventListener('click', function () {
	                    that.controller.updateMeal(that.targetId, that.elements.itemName.value, that.elements.calorieAmt.value);
	                    that.elements.addBtn.classList.remove('hide');
	                    that.elements.updateBtn.classList.add('hide');
	                    that.elements.delBtn.classList.add('hide');
	                    that.elements.itemName.value = '';
	                    that.elements.calorieAmt.value = '';
	                });

	                _this2.elements.delBtn.addEventListener('click', function () {
	                    this.controller.removeMeal(this.targetId);
	                    this.elements.addBtn.classList.remove('hide');
	                    this.elements.updateBtn.classList.add('hide');
	                    this.elements.delBtn.classList.add('hide');
	                    this.elements.itemName.value = '';
	                    this.elements.calorieAmt.value = '';
	                });
	            });
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mealStorage = __webpack_require__(3);

	var _mealStorage2 = _interopRequireDefault(_mealStorage);

	var _meal = __webpack_require__(5);

	var _meal2 = _interopRequireDefault(_meal);

	var _listenerNotify = __webpack_require__(4);

	var _listenerNotify2 = _interopRequireDefault(_listenerNotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealController = function () {
	    function MealController() {
	        _classCallCheck(this, MealController);

	        this.items = _mealStorage2.default.getMeals();
	        this.currentMeal = null;
	        this.totalCalories = 0;
	    }

	    _createClass(MealController, [{
	        key: 'addMeal',
	        value: function addMeal(name, calorie) {
	            var id = void 0;
	            this.totalCalories = this.totalCalories + parseInt(calorie);
	            if (this.items.length > 0) {
	                id = this.items[this.items.length - 1].id + 1;
	            } else {
	                id = 0;
	            }
	            var newMeal = new _meal2.default(id, name, calorie);
	            this.items.push(JSON.stringify(newMeal));
	            _mealStorage2.default.storeMeal(newMeal);
	            return newMeal;
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(id, name, calorie) {
	            var _this = this;

	            this.items.forEach(function (item) {
	                if (item.id === id) _this.totalCalories = _this.totalCalories - item.calorie;
	            });
	            var newMeal = new _meal2.default(id, name, calorie);
	            _mealStorage2.default.updateMeal(newMeal);
	            this.totalCalories = this.totalCalories + parseInt(calorie);
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(id) {
	            var _this2 = this;

	            this.items.forEach(function (item) {
	                _this2.items.forEach(function (item) {
	                    if (item.id === id) _this2.totalCalories = _this2.totalCalories - parseInt(item.calorie);
	                });
	                if (item.id === id) {
	                    _mealStorage2.default.removeMeal(item);
	                }
	            });
	        }
	    }, {
	        key: 'clearMeal',
	        value: function clearMeal() {
	            _mealStorage2.default.clearMeal();
	        }

	        /*  displayMeal() {
	             if(this.items.length > 0)
	             {
	                 this.items.forEach((meal) => {
	                     return { name: meal.meal,
	                             calorie: meal.calorie };
	                 });
	             }
	             else {
	                 return { name: '',
	                          calorie: '' };
	             }
	         } */

	    }]);

	    return MealController;
	}();

	exports.default = new MealController();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenerNotify = __webpack_require__(4);

	var _listenerNotify2 = _interopRequireDefault(_listenerNotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataStorage = function () {
	    function DataStorage() {
	        _classCallCheck(this, DataStorage);

	        this.itemChanged = new _listenerNotify2.default();
	    }

	    _createClass(DataStorage, [{
	        key: 'storeMeal',
	        value: function storeMeal(meal) {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            }

	            this.itemChanged.notify(meal);
	        }
	    }, {
	        key: 'getMeals',
	        value: function getMeals() {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	            }
	            return items;
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            meals.forEach(function (existingMeal) {
	                if (existingMeal.id === meal.id) {
	                    Object.assign(existingMeal, meal);
	                    localStorage.setItem('meals', JSON.stringify(meals));
	                }
	            });
	            this.itemChanged.notify(meal);
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            var ids = meals.map(function (item) {
	                return item.id;
	            });
	            meals.forEach(function (existingmeal) {
	                if (existingmeal.id === meal.id) {
	                    meals.splice(ids.indexOf(meal.id), 1);
	                }
	                localStorage.setItem('meals', JSON.stringify(meals));
	            });
	            this.itemChanged.notify(meal);
	        }
	    }, {
	        key: 'clearMeal',
	        value: function clearMeal() {
	            localStorage.removeItem('meals');
	        }
	    }]);

	    return DataStorage;
	}();

	exports.default = new DataStorage();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = function () {
	    function Observer() {
	        _classCallCheck(this, Observer);

	        this.observers = [];
	    }

	    _createClass(Observer, [{
	        key: "attach",
	        value: function attach(cb) {
	            this.observers.push(cb);
	        }
	    }, {
	        key: "notify",
	        value: function notify(meal) {
	            this.observers.forEach(function (cb) {
	                cb(meal);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _listenerNotify = __webpack_require__(4);

	var _listenerNotify2 = _interopRequireDefault(_listenerNotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function Model(id, meal, calorie) {
	    _classCallCheck(this, Model);

	    this.id = id;
	    this.meal = meal; //make properties private using let and then use getters and setters
	    this.calorie = calorie;
	};

	exports.default = Model;

/***/ })
/******/ ]);