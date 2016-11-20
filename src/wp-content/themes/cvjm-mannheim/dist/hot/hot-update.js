webpackHotUpdate(0,{

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(185);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(115);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(111);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _classnames = __webpack_require__(92);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Posts = function (_React$Component) {
	  _inherits(Posts, _React$Component);

	  function Posts(props, context) {
	    _classCallCheck(this, Posts);

	    var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props, context));

	    _this.state = {
	      posts: []
	    };
	    return _this;
	  }

	  _createClass(Posts, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var state = this;
	      _jquery2.default.ajax('wp-json/wp/v2/posts').done(function (data) {
	        state.setState({ posts: data });
	      }).fail(function () {
	        console.log('something went horribly wrong');
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var posts = this.state.posts;
	      //console.log(posts);
	      return _react2.default.createElement(
	        'div',
	        { className: 'post-wrapper' },
	        posts.map(function (post) {
	          return _react2.default.createElement(Post, { post: post, key: post.id });
	        }),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.removeColors.bind(this) },
	          'Toggle Colors'
	        )
	      );
	    }
	  }]);

	  return Posts;
	}(_react2.default.Component);

	var Post = function (_React$Component2) {
	  _inherits(Post, _React$Component2);

	  function Post(props, context) {
	    _classCallCheck(this, Post);

	    var _this2 = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props, context));

	    _this2.state = {
	      isActive: _this2.props.active
	    };
	    return _this2;
	  }

	  _createClass(Post, [{
	    key: 'render',
	    value: function render() {
	      var _props$post = this.props.post,
	          title = _props$post.title,
	          content = _props$post.content;

	      var classes = (0, _classnames2.default)('box', 'post', this.state.isActive && 'active');

	      return _react2.default.createElement(
	        'div',
	        { className: classes },
	        _react2.default.createElement(
	          'h3',
	          { className: 'post__title' },
	          title.rendered
	        ),
	        _react2.default.createElement('div', { className: 'post__content', dangerouslySetInnerHTML: { __html: content.rendered } }),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleClick.bind(this) },
	          'Click for Color'
	        )
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var active = !this.state.isActive;
	      this.setState({ isActive: active });
	    }
	  }]);

	  return Post;
	}(_react2.default.Component);

	window.addEventListener('DOMContentLoaded', function () {
	  _reactDom2.default.render(_react2.default.createElement(Posts, null), document.getElementById('main-content'));
	});
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Posts, 'Posts', '/Users/jhoydem/Sites/cvjm-mannheim.dev/src/wp-content/themes/cvjm-mannheim/components/posts/posts.jsx');

	  __REACT_HOT_LOADER__.register(Post, 'Post', '/Users/jhoydem/Sites/cvjm-mannheim.dev/src/wp-content/themes/cvjm-mannheim/components/posts/posts.jsx');
	}();

	;

/***/ }

})