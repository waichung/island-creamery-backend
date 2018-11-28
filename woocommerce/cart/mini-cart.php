<?php
/**
 * Mini-cart
 *
 * Contains the markup for the mini-cart, used by the cart widget.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/mini-cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$context = Timber::get_context();

$context['cart'] = WC()->cart->get_cart();
$context['cart_is_empty'] = WC()->cart->is_empty();
$context['cart_subtotal'] = WC()->cart->get_cart_subtotal();
$context['cart_url'] = wc_get_cart_url();

$context['cart_count'] = count($context['cart']);

Timber::render('components/mini-cart.twig', $context); ?>
