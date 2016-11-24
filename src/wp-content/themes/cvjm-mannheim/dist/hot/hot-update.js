webpackHotUpdate(0,{

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(65);

	var _jquery = __webpack_require__(80);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = function (_React$Component) {
	  _inherits(Menu, _React$Component);

	  function Menu(props, context) {
	    _classCallCheck(this, Menu);

	    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));

	    _this.state = {
	      menu: [],
	      loading: true,
	      hasChildren: false
	    };
	    return _this;
	  }

	  _createClass(Menu, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var state = this;
	      _jquery2.default.ajax('wp-json/wp-api-menus/v2/menus/2').done(function (data) {
	        state.setState({ menu: data, loading: false });
	      }).fail(function () {
	        console.log('something went horribly wrong');
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var menu = this.state.menu.items;

	      var hasChildren = this.state.hasChildren;

	      if (hasChildren) {
	        menu = this.state.menu;
	        console.log(menu);
	      }

	      console.log('Übergabe: ', menu);

	      if (this.state.loading === false) {

	        console.log('teasrasd', this.state.menu);

	        var menuItem = menu.map(function (item, index) {

	          var subMenu = void 0;

	          if (item.children) {
	            item.children.map(function (el) {
	              subMenu = el.title;
	            });
	          }

	          return _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { key: item.id, to: item.url },
	              item.title
	            ),
	            item.children && _react2.default.createElement(
	              'span',
	              null,
	              subMenu
	            )
	          );
	        });

	        return _react2.default.createElement(
	          'ul',
	          { className: 'menu' },
	          menuItem
	        );
	      } else {
	        return _react2.default.createElement(
	          'ul',
	          { className: 'menu' },
	          _react2.default.createElement(
	            'li',
	            null,
	            'Loading'
	          )
	        );
	      }
	    }
	  }]);

	  return Menu;
	}(_react2.default.Component);

	var _default = Menu;
	exports.default = _default;

	var MenuLink = function (_React$Component2) {
	  _inherits(MenuLink, _React$Component2);

	  function MenuLink(props, context) {
	    _classCallCheck(this, MenuLink);

	    return _possibleConstructorReturn(this, (MenuLink.__proto__ || Object.getPrototypeOf(MenuLink)).call(this, props, context));
	  }

	  _createClass(MenuLink, [{
	    key: 'render',
	    value: function render() {
	      var _props$item = this.props.item,
	          id = _props$item.id,
	          content = _props$item.content;


	      return _react2.default.createElement(
	        _reactRouter.Link,
	        { key: item.id, to: item.url },
	        item.title
	      );
	    }
	  }]);

	  return MenuLink;
	}(_react2.default.Component);

	/*
	http://cvjm-mannheim.dev/wp-json/wp-api-menus/v2/menus/2
	 {item.children && <Menu menu={item.children}/>}


	 {item.children && this.hasChildren(item.children)}

	 class Menu extends React.Component {

	 render() {
	 return (
	 <ul className="menu menu--main">
	 <li>
	 <Link to="/" activeClassName="is-active">Home</Link>
	 </li>
	 <li>
	 <Link to="ueber-uns" activeClassName="is-active">Über Uns</Link>
	 </li>
	 <li>
	 <Link to="angebote" activeClassName="is-active">Angebote</Link>
	 </li>
	 </ul>
	 );
	 }
	 }

	*/

	/*

	{menu.items.map((menuItem, index) => {
	  return <li>{menuItem.index}</li>;
	})}
	*/


	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Menu, 'Menu', '/Users/jhoydem/Sites/cvjm-mannheim.dev/src/wp-content/themes/cvjm-mannheim/components/menu/Menu.jsx');

	  __REACT_HOT_LOADER__.register(MenuLink, 'MenuLink', '/Users/jhoydem/Sites/cvjm-mannheim.dev/src/wp-content/themes/cvjm-mannheim/components/menu/Menu.jsx');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jhoydem/Sites/cvjm-mannheim.dev/src/wp-content/themes/cvjm-mannheim/components/menu/Menu.jsx');
	}();

	;

/***/ }

})