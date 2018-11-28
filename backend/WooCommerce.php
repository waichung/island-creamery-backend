<?php

/**
 * Remove WooCommerce archive page to set up a custom shop page
 */
add_filter('woocommerce_register_post_type_product', function($post_type) {

    $post_type['has_archive'] = false;
    return $post_type;

});


/**
 * Clear cart endpoint
 */
add_action( 'init', function() {

    if ( isset( $_GET['clear-cart'] ) ) {
        global $woocommerce;
        $woocommerce->cart->empty_cart();
    }

});


/**
 * Exclude products from a particular category on the shop page
 */
function custom_pre_get_posts_query( $q ) {

    $tax_query = (array) $q->get( 'tax_query' );

    $tax_query[] = array(
           'taxonomy' => 'product_cat',
           'field' => 'slug',
           'terms' => ['gift-wrapping'], // Don't display products in the clothing category on the shop page.
           'operator' => 'NOT IN'
    );

    $q->set( 'tax_query', $tax_query );

}
add_action( 'woocommerce_product_query', 'custom_pre_get_posts_query' );


/**
 * Set order personalisation
 */
function set_order_personalisation($cart_updated) {

    $wc_session = WC()->session;

    $personalisation_ribbbon = isset($_POST['personalisation_ribbon']) ? $_POST['personalisation_ribbon'] : '';
    $personalisation_text = isset($_POST['personalisation_text']) ? $_POST['personalisation_text'] : '';

    $personalisation_enabled = isset($_POST['personalisation_enabled']) ? 'yes' : 'no';

    $wc_session->set('personalisation_enabled', $personalisation_enabled);
    $wc_session->set('personalisation_text', $personalisation_text);

    return $cart_updated;

}
add_action( 'woocommerce_update_cart_action_cart_updated', 'set_order_personalisation', 20, 1 );



/**
 * Before checkout create order
 */
function before_checkout_create_order( $order, $data ) {

    $wc_session = WC()->session;
    $personalisation_text = $wc_session->get('personalisation_text');
    $personalisation_enabled = $wc_session->get('personalisation_enabled');

    $order->add_meta_data( 'personalisation_text', $personalisation_text );
    $order->add_meta_data( 'personalisation_enabled', $personalisation_enabled );

}
add_action('woocommerce_checkout_create_order', 'before_checkout_create_order', 20, 2);


/**
 * Update order meta
 */
function checkout_update_order_meta( $order_id, $posted ) {

    $wc_session = WC()->session;
    $personalisation_text = $wc_session->get('personalisation_text');
    $personalisation_enabled = $wc_session->get('personalisation_enabled');

    $order = wc_get_order( $order_id );
    $order->update_meta_data( 'personalisation_enabled', $personalisation_enabled );
    $order->update_meta_data( 'personalisation_text', $personalisation_text );

    $order->save();

}
add_action('woocommerce_checkout_update_order_meta', 'checkout_update_order_meta' , 10, 2);


/**
 * Edit order meta data
 */
function edit_order_meta_data( $order ) {

	echo '<br class="clear" /><h4>Gift Personalisation Settings</h4>';

    $personalisation_enabled = get_post_meta( $order->get_id(), 'personalisation_enabled', true );
    $personalisation_text = get_post_meta( $order->get_id(), 'personalisation_text', true );

    woocommerce_wp_checkbox([
        'id' => 'personalisation_enabled',
        'label' => 'Personalisation Enabled?',
        'style' => 'width: auto;',
        'value' => $personalisation_enabled
    ]);

    woocommerce_wp_textarea_input([
		'id' => 'personalisation_text',
		'label' => 'Gift Personalisation Text:',
		'value' => $personalisation_text ? $personalisation_text : '',
		'wrapper_class' => 'form-field-wide'
	]);

    echo '<br class="clear" /><h4>Download SVG</h4>';

    echo esc_html(wptexturize(sprintf(__('SVG File:','woocommerce')))).' '.sprintf('<a href="%s">%s</a>', get_site_url(null,'/?download_card_svg='.$order->get_id()), esc_html(wptexturize(__('Download','woocommerce'))));


}
add_action( 'woocommerce_admin_order_data_after_order_details', 'edit_order_meta_data' );


/**
 * Save order details
 * @param  Int $ord_id
 * @return Void
 */
function save_general_order_details( $ord_id ) {

    update_post_meta( $ord_id, 'personalisation_enabled', $_POST[ 'personalisation_enabled' ] );
	update_post_meta( $ord_id, 'personalisation_text', wc_sanitize_textarea( $_POST[ 'personalisation_text' ] ) );

}
add_action( 'woocommerce_process_shop_order_meta', 'save_general_order_details' );



function get_order_personalisation($order_id) {

    $out = [];

    $enabled = get_post_meta($order_id, 'personalisation_enabled', true);
    $text = get_post_meta($order_id, 'personalisation_text', true);

    if($enabled == 'yes') {
        $out['personalised_card'] = [ 'text' => $text ];
    }

    return $out;
}

function get_personalisation_svg($text) {

    $svg  = '<?xml version="1.0" encoding="utf-8"?>';
    $svg .= '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">';
    $svg .= '<style type="text/css">.text{font-family:"AntroVectra";font-size:18px; line-height: 18px}</style>';
    $svg .= '<text class="text">' . $text .'</text>';
    $svg .= '</svg>';

    return $svg;
}

function download_card_svg() {

    if (!empty($_GET['download_card_svg'])) {
        $order_personalisation = get_order_personalisation($_GET['download_card_svg']);
        if (!empty($order_personalisation['personalised_card']['text'])) {
            header('Content-Type: image/svg+xml');
            echo get_personalisation_svg($order_personalisation['personalised_card']['text']);
            die();
        }
        else {
            die('Personalisation card data not found.');
        }
    }
}
add_action( 'init', 'download_card_svg', 1 );
