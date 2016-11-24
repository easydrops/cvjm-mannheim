import React from 'react';
import { Link } from 'react-router';
import Icons from '../Icons/Icons.jsx';
import Menu from '../menu/Menu.jsx';

export default class Header extends React.Component {

  render() {
    return (
      <header className="header">
        Logoalksdjals
        <Menu/>
        <h1>{this.props.title}</h1>
        <Icons glyph="#icon-close"/>
        <Icons glyph="#icon-menu"/>
      </header>
    );
  }
}
