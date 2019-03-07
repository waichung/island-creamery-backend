<?php

include(__DIR__ . '/backend/ProductFilter.php');

/**
 *  Template Name: Menu Page
 * Template for general menu page
 */
$context = Timber::get_context();

$context['post'] = new Timber\Post();
$context['categories'] = Timber::get_terms([ 'taxonomy' => 'product_cat', 'include' => $context['global_options']['categories'] ]);
$context['currency'] = get_woocommerce_currency_symbol();

$heritageOfCategories = $context['categories'];
$currentPrimaryFilter = $heritageOfCategories[0];
$context['current_secondary_filter'] =  null;
$context['current_primary_filter'] =  $currentPrimaryFilter -> slug;

$args = array(
    'hierarchical' => 1,
    'show_option_none' => '',
    'hide_empty' => 0,
    'parent' => $currentPrimaryFilter -> term_id,
    'taxonomy' => 'product_cat'
 );
$context['subcategories'] = Timber::get_terms($args);

$context['products'] = wc_get_products(array_merge([
    'category' => [ $context['current_primary_filter'] ],
    'orderby'  => 'meta_value_num'
], orderProducts()));

Timber::render('pages/shop.twig', $context);
