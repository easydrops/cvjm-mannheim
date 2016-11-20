import React from 'react';

export default class Header extends React.Component {

  render() {

    console.log(this.props);
    return (
      <header className="header">
        {this.props.title}
      </header>
    );
  }
}
