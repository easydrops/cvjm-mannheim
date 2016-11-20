import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './pages/Layout.jsx';
import Posts from './components/posts/Posts.jsx';

const app = document.getElementById('main-content');

window.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(<Layout/>, app);
});
