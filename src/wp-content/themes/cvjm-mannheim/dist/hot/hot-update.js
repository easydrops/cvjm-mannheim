webpackHotUpdate(0,{

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(191);

	var _react2 = _interopRequireDefault(_react);

	var _Footer = __webpack_require__(200);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Header = __webpack_require__(199);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Layout = function (_React$Component) {
	  _inherits(Layout, _React$Component);

	  function Layout() {
	    _classCallCheck(this, Layout);

	    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

	    _this.state = {
	      title: "Hello"
	    };
	    return _this;
	  }

	  _createClass(Layout, [{
	    key: 'clickHandle',
	    value: function clickHandle() {
	      this.setState({
	        title: "Mkay"
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page-wrapper' },
	        _react2.default.createElement(_Header2.default, { title: this.state.title }),
	        _react2.default.createElement(_Footer2.default, null),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.clickHandle.bind(this) },
	          'Click me'
	        )
	      );
	    }
	  }]);

	  return Layout;
	}(_react2.default.Component);

	var _default = Layout;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Layout, 'Layout', '/Users/jhoydem/Sites/cvjm-mannheim.dev/src/wp-content/themes/cvjm-mannheim/pages/Layout.jsx');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jhoydem/Sites/cvjm-mannheim.dev/src/wp-content/themes/cvjm-mannheim/pages/Layout.jsx');
	}();

	;

/***/ }

})