webpackHotUpdate(0,{

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(147);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(107);

	var _About = __webpack_require__(118);

	var _About2 = _interopRequireDefault(_About);

	var _Featured = __webpack_require__(119);

	var _Featured2 = _interopRequireDefault(_Featured);

	var _Layout = __webpack_require__(120);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Service = __webpack_require__(121);

	var _Service2 = _interopRequireDefault(_Service);

	var _Posts = __webpack_require__(74);

	var _Posts2 = _interopRequireDefault(_Posts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = document.getElementById('main-content');

	//@ToDO Remove file type jsx from imports and refactor file type to js

	window.addEventListener('DOMContentLoaded', function () {
	  _reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _Layout2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Featured2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'angebote', activeClassName: 'is-active', component: _Service2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'ueber-uns', activeClassName: 'is-active', component: _About2.default })
	    )
	  ), app);
	});
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(app, 'app', '/Users/jhoydem/Sites/cvjm-mannheim.dev/src/wp-content/themes/cvjm-mannheim/main.js');
	}();

	;

/***/ }

})