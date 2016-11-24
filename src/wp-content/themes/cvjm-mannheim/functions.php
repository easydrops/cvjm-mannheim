<?php

  function wpb_custom_new_menu() {
    register_nav_menu('my-custom-menu',__( 'My Custom Menu' ));
  }

  get_template_part('dependencies');

  add_action( 'init', 'wpb_custom_new_menu' );
  add_action( 'wp_enqueue_scripts', 'loadScriptsAndStyles');
?>
