<?php

// Set Timber Up
$timber = new \Timber\Timber();
$timber::$dirname = ['templates', 'frontend/views'];

/**
 * NestBloom site functionality.
 * @class NestBloomSite
 */
class NestBloomSite extends TimberSite
{

    /**
     * @constructor
     */
    public function __construct()
    {

        // Theme Support
        add_theme_support('post-formats');
        add_theme_support('post-thumbnails');
        add_theme_support('menus');
        add_theme_support('woocommerce');
        add_theme_support('html5', [ 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ]);

        // Filters
        add_filter('timber_context', [ $this, 'add_to_context' ]);
        add_filter('get_twig', [ $this, 'add_to_twig' ]);

        // Actions
        add_action('init', [ $this, 'register_post_types' ]);
        add_action('init', [ $this, 'register_taxonomies' ]);
        add_action('wp_enqueue_scripts', [ $this, 'enqueue_scripts' ]);

        parent::__construct();

    }

    public function register_post_types() {}
    public function register_taxonomies() {}


    /**
     * Enqueue frontend scripts (Styles and JS).
     * @return void
     */
    public function enqueue_scripts()
    {

        wp_enqueue_style( 'styles', get_template_directory_uri() . '/assets/css/styles.css?v='. time(), [], null, false );
        wp_enqueue_script( 'js', get_template_directory_uri() . '/assets/js/entry.js?v='. time(), [], null, true );
        // if ( is_front_page() ) {
        //     wp_enqueue_style( 'nb-experience-css', get_home_url() . '/assets/nestbloom-experience.css?v='. time(), [], null, false );
        //     wp_enqueue_script( 'nb-experience-smoke-js', get_home_url() . '/assets/smoke.js?v='. time(), [], null, true );
        //     wp_enqueue_script( 'nb-experience-js', get_home_url() . '/assets/nestbloom-experience.js?v='. time(), [], null, true );

        // }
        wp_localize_script( 'js', 'wp', ['theme' => get_stylesheet_directory_uri()]);
    }


    /**
     * Add global variables to twig context for every page
     * @param object $context
     */
    public function add_to_context($context)
    {

        global $woocommerce;

        $context['global_options'] = get_fields('options');
        $context['assets'] = $context['theme']->link . '/assets';
        $context['navigation'] = new TimberMenu('Main Menu');
        $context['footer_nav'] = new TimberMenu('Footer Menu');

        $context['site'] = $this;
        $context['currency'] = get_woocommerce_currency_symbol();

        return $context;

    }


    /**
     * Add custom functions to twig.
     * @param class $twig
     */
    public function add_to_twig($twig)
    {

        $twig->addExtension(new Twig_Extension_StringLoader());
        return $twig;

    }


    /**
     * Set product
     * @param object $post
     */
    public function set_product( $post )
    {

        global $product;

        if(is_woocommerce()) {

            $product = wc_get_product( $post->ID );

        }

    }


    function mime_types($mimes) {

      add_filter('upload_mimes', function() {
          $mimes['svg'] = 'image/svg+xml';
          return $mimes;
      });

    }

}

new NestBloomSite();
