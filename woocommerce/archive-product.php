<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

global $wp;

defined( 'ABSPATH' ) || exit;

include(__DIR__ . '/../backend/ProductFilter.php');

/**
 * Template for the shop page
 */
$context = Timber::get_context();

$context['post'] = new Timber\Post();
$context['categories'] = Timber::get_terms([ 'taxonomy' => 'product_cat', 'include' => $context['global_options']['categories'] ]);
$context['currency'] = get_woocommerce_currency_symbol();

$context['queried_category'] = get_queried_object()->name;
$context['virgin'] = get_queried_object()->slug === 'customised-cakes' ? 1 : get_queried_object()->slug === 'ice-cream'? 1 : get_queried_object()->slug === 'ice-cream-cakes'? 1 : get_queried_object()->slug === 'shop'? 1 : false;
$args = array(
    'hierarchical' => 1,
    'show_option_none' => '',
    'hide_empty' => 0,
    'parent' => get_queried_object_id(),
    'taxonomy' => 'product_cat'
 );
$context['subcategories'] = Timber::get_terms($args) ? Timber::get_terms($args) : Timber::get_terms(array(
    'hierarchical' => 1,
    'show_option_none' => '',
    'hide_empty' => 0,
    'parent' => get_queried_object()->parent,
    'taxonomy' => 'product_cat',
));

$context['parent_cat'] = get_term(get_queried_object()->parent)->slug;

$context['current_subcategory'] = strlen($context['queried_category']) > 0 ? $context['queried_category'] : 'all';

$context['current_filter'] = getCurrentFilter();

// Product Filtering Logic
$context['products'] = wc_get_products(array_merge([
    'category' => [ get_queried_object()->slug ],
    'orderby'  => 'meta_value_num'
], orderProducts()));

$context['filters'] = isset($valid_filters) ? $valid_filters : [];
$context['current_url'] = home_url(add_query_arg(array(),$wp->request));

if ( is_product_category() ) {

    $term_id = get_queried_object()->term_id;
    $context['current_category'] = get_term( $term_id, 'product_cat' )->slug;
    $context['title'] = single_term_title( '', false );

}

Timber::render('pages/shop.twig', $context);
