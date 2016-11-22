import React from 'react';
import Footer from '../components/footer/Footer.jsx';
import Header from '../components/header/Header.jsx';
import Posts from '../components/posts/Posts.jsx';

export default class Featured extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Hello",
    }
  }


  clickHandle() {
    this.setState({
      title: "Mkay"
    });
  }


  render() {
    return (

      <div className="page-wrapper">
        Featured
        <Posts/>
        <button onClick={this.clickHandle.bind(this)}>Click me</button>
      </div>
    );
  }
}

