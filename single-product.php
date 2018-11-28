<?php
/**
 * Product page template
 * @version 1.6.4
 */

global $product, $post;

$context = Timber::get_context();
$context['post'] = new Timber\Post();

$context['product_raw'] = $product;
$context['product'] = $product->get_data();
$context['currency'] = get_woocommerce_currency_symbol();

if(method_exists($product, 'get_available_variations')) $context['variations'] = $product->get_available_variations();
    else $context['variations'] = [];

$context['attributes'] = $product->get_attributes();

// Restore the context and loop back to the main query loop.
wp_reset_postdata();

Timber::render('/pages/product.twig', $context);
