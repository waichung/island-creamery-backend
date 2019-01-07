<?php

include(__DIR__ . '/backend/ProductFilter.php');

/**
 *
 * Template for general menu page
 */
$context = Timber::get_context();

$context['post'] = new Timber\Post();
$context['categories'] = Timber::get_terms([ 'taxonomy' => 'product_cat', 'include' => $context['global_options']['categories'] ]);
$context['currency'] = get_woocommerce_currency_symbol();

$context['queried_category'] = get_queried_object()->slug;
$context['current_category'] = strlen($context['queried_category']) > 0 ? $context['queried_category'] : 'all';
$context['current_filter'] = getCurrentFilter();

// Product Filtering Logic
$context['products'] = wc_get_products(array_merge([
    'category' => [ $context['current_category'] ],
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
