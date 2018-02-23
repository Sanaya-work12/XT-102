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

	var _city = __webpack_require__(1);

	var _city2 = _interopRequireDefault(_city);

	var _cityView = __webpack_require__(3);

	var _cityView2 = _interopRequireDefault(_cityView);

	var _cityCtrl = __webpack_require__(4);

	var _cityCtrl2 = _interopRequireDefault(_cityCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {

	    //let model = Model;
	    var view = new _cityView2.default({ streetName: document.querySelector('#street-name'), streetShip: document.querySelector('#street-ship'),
	        checkBox: document.querySelector('#check-box'),
	        cityName: document.querySelector('#city'), cityShip: document.querySelector('#city-ship') });

	    //let controller = new Controller();
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

	var _listenerNotify = __webpack_require__(2);

	var _listenerNotify2 = _interopRequireDefault(_listenerNotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model() {
	        _classCallCheck(this, Model);

	        this.streetName;
	        this.cityName;
	        this.itemChanged = new _listenerNotify2.default();
	    }

	    _createClass(Model, [{
	        key: "add",
	        value: function add(streetName, cityName) {
	            this.streetName = streetName;
	            this.cityName = cityName;
	            debugger;
	            this.itemChanged.notify(this.streetName, this.cityName);
	        }
	    }]);

	    return Model;
	}();

	exports.default = new Model();

/***/ }),
/* 2 */
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
	        value: function notify(Street, City) {
	            this.observers.forEach(function (cb) {
	                cb(Street, City);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _city = __webpack_require__(1);

	var _city2 = _interopRequireDefault(_city);

	var _cityCtrl = __webpack_require__(4);

	var _cityCtrl2 = _interopRequireDefault(_cityCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = _city2.default;
	        this.controller = new _cityCtrl2.default();
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.model.itemChanged.attach(function (streetName, cityName) {
	                _this.render(streetName, cityName);
	            });

	            this.elements.checkBox.addEventListener('change', function () {
	                if (_this.elements.streetName.value != "" && _this.elements.cityName.value != "" && _this.elements.checkBox.checked) {
	                    _this.controller.add(_this.elements.streetName.value, _this.elements.cityName.value);
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render(newStreet, newCity) {
	            this.elements.streetShip.value = "";
	            this.elements.cityShip.value = "";
	            this.elements.streetShip.value = newStreet;
	            this.elements.cityShip.value = newCity;
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _city = __webpack_require__(1);

	var _city2 = _interopRequireDefault(_city);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = _city2.default;
	    }

	    _createClass(Controller, [{
	        key: "add",
	        value: function add(street, city) {
	            this.model.add(street, city);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ })
/******/ ]);