import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

  render() {

    {console.log(this.props.children)}
    return (
      <header className="header">
        <ul>
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
        {this.props.children}
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}
