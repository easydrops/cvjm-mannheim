"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import classNames from 'classnames';

class Posts extends React.Component {

 constructor(props, context) {
    super(props, context);

    this.state = {
      posts:[]
    };
  };

  componentWillMount(){
    var state = this;
    $.ajax('wp-json/wp/v2/posts').done((data)=>{
      state.setState({posts:data})
    }).fail(()=>{console.log('something went horribly wrong')})
  }

  render() {
    var posts = (this.state.posts);
    //console.log(posts);
    return (
      <div className="post-wrapper">
      { posts.map(function(post){
          return <Post post={post} key={post.id}/>
        })
      }
    </div>
    );
  }
}


class Post extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.state = {
      isActive: this.props.active
    };
  };

  render() {
    var { title, content} = this.props.post;
    var classes = classNames('box', 'post', this.state.isActive && 'active');

    return (
      <div className={classes}>
        <h3 className="post__title">{title.rendered}</h3>
        <div className="post__content" dangerouslySetInnerHTML={ {__html: content.rendered}} ></div>
        <button onClick={this.handleClick.bind(this)}>Click for Color</button>
      </div>
    );
  }

  handleClick() {
    var active = !this.state.isActive;
    this.setState({ isActive: active });
  }
}

window.addEventListener('DOMContentLoaded', ()=> { 
  ReactDOM.render(<Posts/>, document.getElementById('main-content'));
});
