<?php 

function theme_styles() {
    // wp_enqueue_style( 'vendor_css', get_template_directory_uri() . '/public/css/vendor.css' );
    // //To avoid caching I use time, remove it in production.   
    // wp_enqueue_style( 'theme_css', get_template_directory_uri() . '/public   /css/app.css?='.time() );

    //For development only! This is where webpack-dev-server would serve the assets from.
    wp_enqueue_style( 'bulma_css', 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css' );
    wp_enqueue_style( 'font', 'https://fonts.googleapis.com/css?family=Rubik:300,400,700" rel="stylesheet' );
    wp_enqueue_style( 'theme_css', get_stylesheet_directory_uri() . '/public/css/app.css' );
    // wp_enqueue_style( 'owl_css', '~/owl.carousel/dist/assets/owl.carousel.min.css' );

}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

function theme_js() {
    //wp_enqueue_script( 'vendor_js', get_template_directory_uri() . '/public/js/vendor.js', '', '', true );    
    //To avoid caching I use time, remove it in production.    
    //wp_enqueue_script( 'theme_js', get_template_directory_uri() . '/public/js/app.js?='.time(), array('vendor_js'), '', true );

    //For development only! This is where webpack-dev-server would serve the assets from.
    wp_enqueue_script( 'vendor_js', get_stylesheet_directory_uri() . '/public/js/vendor.js', '', '', true );
    wp_enqueue_script( 'theme_js', get_stylesheet_directory_uri() . '/public/js/app.js', array('vendor_js'), '', true );
    wp_enqueue_script( 'theme_js', '/node_modules/owl.carousel2/dist/owl.carousel.min.js', array('vendor_js'), '', true );
}
add_action( 'wp_enqueue_scripts', 'theme_js' );

add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' ); 

function modify_jquery() {
    if (!is_admin()) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', false, 'x.xx.x');
        wp_enqueue_script('jquery');
    }
}
add_action('init', 'modify_jquery');