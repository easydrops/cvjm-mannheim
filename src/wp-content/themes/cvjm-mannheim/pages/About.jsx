import React from 'react';
import Footer from '../components/footer/Footer.jsx';
import Header from '../components/header/Header.jsx';

export default class About extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "YO",
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
        <Header title={this.state.title} />
        About / Über Uns
        <button onClick={this.clickHandle.bind(this)}>Click me</button>
        <Footer/>
      </div>
    );
  }
}

