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

	var _websocketClient = __webpack_require__(1);

	var _websocketClient2 = _interopRequireDefault(_websocketClient);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _websocketClient2.default().connect();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WebSocketClient = function () {
	    function WebSocketClient() {
	        _classCallCheck(this, WebSocketClient);

	        this.ws = new WebSocket('ws://localhost:8080'); //does the browser identifies websocket protocol initial handshake is done using http and then protocol upgrade request is sent for ws and then from half duplex... full duplex comm. happens.
	    }

	    _createClass(WebSocketClient, [{
	        key: 'connect',
	        value: function connect() {
	            var _this = this;

	            document.querySelector('form').addEventListener('submit', function () {
	                var name = document.querySelector('#name').value,
	                    message = document.querySelector('#message').value;
	                _this.ws.send(JSON.stringify({ name: name, message: message })); //posts a message to the server
	                return false; //prevent default fom submission.... or use preventDefault();
	            });

	            this.ws.onmessage = function (event) {
	                var li = document.createElement('li');
	                li.appendChild(document.createTextNode(event.data));
	                document.querySelector('#messages').appendChild(li);
	            };

	            this.ws.onerror = function (event) {
	                var li = document.createElement('li'),
	                    span = document.createElement('span');
	                span.appendChild('Error' + event.data);
	                li.appendChild(span);
	                document.querySelector('#messages').appendChild(li);
	            };
	        }
	    }]);

	    return WebSocketClient;
	}();

	exports.default = WebSocketClient;

/***/ })
/******/ ]);