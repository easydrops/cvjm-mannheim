import React from 'react';
import Footer from '../components/footer/Footer.jsx';
import Header from '../components/header/Header.jsx';

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Posts"
    }
  }

  render() {
    return (

      <div className="page-wrapper">
        <Header title={this.state.title} />
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

