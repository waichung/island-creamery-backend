<?php
/**
 * Order details table shown in emails.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/emails/plain/email-order-details.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates/Emails
 * @version     3.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_email_before_order_table', $order, $sent_to_admin, $plain_text, $email );

echo strtoupper( sprintf( __( 'Order number: %s', 'woocommerce' ), $order->get_order_number() ) ) . "\n";
echo wc_format_datetime( $order->get_date_created() ) . "\n";
echo "\n" . wc_get_email_order_items( $order, array(
	'show_sku'      => $sent_to_admin,
	'show_image'    => false,
	'image_size'    => array( 32, 32 ),
	'plain_text'    => true,
	'sent_to_admin' => $sent_to_admin,
) );

echo "==========\n\n";

if ( $totals = $order->get_order_item_totals() ) {
	foreach ( $totals as $total ) {
		echo $total['label'] . "\t " . $total['value'] . "\n";
	}
}

if ( $order->get_customer_note() ) {
	echo __( 'Note:', 'woocommerce' ) . "\t " . wptexturize( $order->get_customer_note() ) . "\n";
}


$order_personalisation = get_order_personalisation($order->get_id());

if (!empty($order_personalisation['personalised_card']) && !empty($order_personalisation['personalised_card']['text'])) {
	$personalised_card = $order_personalisation['personalised_card'];
	echo wptexturize(__( 'Personalised Card:', 'woocommerce' ));

	if (!empty($personalised_card['recipient_title']) && strtolower($personalised_card['recipient_title']) != 'none') {
		echo "\n";
		echo wptexturize(sprintf(__('Title: %s','woocommerce'), $personalised_card['recipient_title']));
	}
	echo "\n";
	echo wptexturize(sprintf(__('Message: %s','woocommerce'), $personalised_card['text']));
	echo "\n";
	echo wptexturize(sprintf(__('SVG File:','woocommerce'))).' '.get_site_url(null,'/?download_card_svg='.$order->get_id());
	echo "\n";

}
if (!empty($order_personalisation['bag']) && !empty($order_personalisation['bag']['ribbon_color'])) {
	echo wptexturize(__( 'Shopping Bag Ribbon:', 'woocommerce' ));
	echo wptexturize(__( $order_personalisation['bag']['ribbon_color'], 'woocommerce'));
	echo "\n";
}

if ( $sent_to_admin ) {
	echo "\n" . sprintf( __( 'View order: %s', 'woocommerce' ), admin_url( 'post.php?post=' . $order->get_id() . '&action=edit' ) ) . "\n";
}

do_action( 'woocommerce_email_after_order_table', $order, $sent_to_admin, $plain_text, $email );
