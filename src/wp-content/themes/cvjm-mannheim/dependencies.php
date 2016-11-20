<?php

  function loadScriptsAndStyles(){
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_script('scripts', get_template_directory_uri().'/bundle.js', array(), '1.0.0', true);
    // wp_enqueue_script('react', get_template_directory_uri().'/node_modules/react/dist/react.min.js');
    // wp_enqueue_script('react', get_template_directory_uri().'/node_modules/react-dom/dist/react-dom.min.js', array('react'));
    // wp_enqueue_script('babel', get_template_directory_uri().'/node_modules/babel-core/lib/api/browser.js');
    // wp_enqueue_script('main', get_template_directory_uri() . '/main.js', array('react', 'react-dom'));
  
  }
  

?>