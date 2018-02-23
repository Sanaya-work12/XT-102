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

	var _model = __webpack_require__(1);

	var _model2 = _interopRequireDefault(_model);

	var _view = __webpack_require__(3);

	var _view2 = _interopRequireDefault(_view);

	var _controller = __webpack_require__(4);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {

	    var view = new _view2.default({
	        clearAll: document.querySelector('#clr-button'),
	        itemName: document.querySelector('#item-name'),
	        calorieAmt: document.querySelector('#calorie-amt'),
	        addBtn: document.querySelector('#add-item-button'),
	        updateBtn: document.querySelector('#update-data'),
	        delBtn: document.querySelector('#delete-data'),
	        displayCalTotal: document.querySelector('#display-calories'),
	        itemTable: document.querySelector('#items-table')
	    });

	    var controller = new _controller2.default();
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

	var _listenernotify = __webpack_require__(2);

	var _listenernotify2 = _interopRequireDefault(_listenernotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model() {
	        _classCallCheck(this, Model);

	        this.itemName;
	        this.calorieAmt;
	        this.total = 0;
	        this.itemChanged = new _listenernotify2.default();
	    }

	    _createClass(Model, [{
	        key: "add",
	        value: function add(itemName, calorieAmt, total) {
	            this.itemName = itemName;
	            this.calorieAmt = calorieAmt;
	            this.total += parseInt(this.calorieAmt);
	            this.itemChanged.notify(this.itemName, this.calorieAmt, this.total);
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
	        value: function notify(item, cal, t) {
	            this.observers.forEach(function (cb) {
	                cb(item, cal, t);
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

	var _model = __webpack_require__(1);

	var _model2 = _interopRequireDefault(_model);

	var _controller = __webpack_require__(4);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = _model2.default;
	        this.controller = new _controller2.default();
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.model.itemChanged.attach(function (itemName, calorieAmt, total) {
	                _this.render(itemName, calorieAmt, total);
	            });

	            this.elements.addBtn.addEventListener('click', function () {
	                if (_this.elements.itemName.value != "" && _this.elements.calorieAmt.value != "") {
	                    if (Number.isInteger(parseInt(_this.elements.calorieAmt.value))) {
	                        _this.controller.add(_this.elements.itemName.value, _this.elements.calorieAmt.value);
	                        _this.elements.itemName.value = '';
	                        _this.elements.calorieAmt.value = '';
	                    }
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render(itemName, calorieAmt, total) {
	            this.model.total = total;
	            this.elements.displayCalTotal.innerHTML = 'Total Calories : ' + total;
	            var editBtn = document.createElement('button');
	            var tRow = document.createElement('tr');
	            var td1 = document.createElement('td');
	            var td2 = document.createElement('td');
	            var td3 = document.createElement('td');
	            editBtn.innerHTML = 'Edit';
	            td1.innerHTML = itemName;
	            td2.innerHTML = calorieAmt;
	            td3.appendChild(editBtn);
	            tRow.appendChild(td1);
	            tRow.appendChild(td2);
	            tRow.appendChild(td3);
	            this.elements.itemTable.appendChild(tRow);

	            var that = this;

	            editBtn.addEventListener('click', function (event) {
	                that.elements.addBtn.classList.add('hide');
	                that.elements.updateBtn.classList.remove('hide');
	                that.elements.delBtn.classList.remove('hide');
	                that.elements.itemName.value = event.currentTarget.parentElement.previousSibling.previousSibling.innerHTML;
	                that.elements.calorieAmt.value = event.currentTarget.parentElement.previousSibling.innerHTML;
	                that.model.total = that.model.total - event.currentTarget.parentElement.previousSibling.innerHTML;
	                that.elements.displayCalTotal.innerHTML = 'Total Calories : ' + that.model.total;
	                event.currentTarget.parentElement.parentElement.remove();
	            });

	            this.elements.updateBtn.addEventListener('click', function (event) {
	                //that.model.itemChanged.attach((itemName,calorieAmt,total)=>{that.render(itemName,calorieAmt,total)})
	                if (that.elements.itemName.value != "" && that.elements.calorieAmt.value != "") {
	                    if (Number.isInteger(parseInt(that.elements.calorieAmt.value))) {
	                        that.controller.add(that.elements.itemName.value, that.elements.calorieAmt.value);
	                        that.elements.itemName.value = '';
	                        that.elements.calorieAmt.value = '';
	                    }
	                }
	                that.elements.addBtn.classList.remove('hide');
	                that.elements.updateBtn.classList.add('hide');
	                that.elements.delBtn.classList.add('hide');
	            });

	            this.elements.delBtn.addEventListener('click', function () {
	                that.elements.itemName.value = '';
	                that.elements.calorieAmt.value = '';
	                that.elements.addBtn.classList.remove('hide');
	                that.elements.updateBtn.classList.add('hide');
	                that.elements.delBtn.classList.add('hide');
	            });

	            this.elements.clearAll.addEventListener('click', function () {
	                that.elements.itemTable.remove();
	                that.model.total = 0;
	                that.elements.displayCalTotal.innerHTML = 'Total Calories';
	            });
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

	var _model = __webpack_require__(1);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = _model2.default;
	    }

	    _createClass(Controller, [{
	        key: "add",
	        value: function add(item, cal) {
	            this.model.add(item, cal);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ })
/******/ ]);