import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';


//@ToDO Remove file type jsx from imports and refactor file type to js

import About from './pages/About.jsx';
import Featured from './pages/Featured';
import Layout from './pages/Layout.jsx';
import Service from './pages/Service';
import Posts from './components/posts/Posts.jsx';

const app = document.getElementById('main-content');

window.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Featured}/>
        <Route path="angebote" activeClassName="is-active" component={Service}/>
        <Route path="ueber-uns" activeClassName="is-active" component={About}/>
      </Route>
    </Router>, app);
});
