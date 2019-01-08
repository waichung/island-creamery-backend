<?php
/**
 * Checkout billing information form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-billing.php.
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
 * @version 3.0.9
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/** @global WC_Checkout $checkout */

?>
<div class="woocommerce-billing-fields">
	<?php if ( wc_ship_to_billing_address_only() && WC()->cart->needs_shipping() ) : ?>

		<h3><?php _e( 'Billing &amp; Shipping', 'woocommerce' ); ?></h3>

	<?php else : ?>

		<h3><?php _e( 'Shipping details', 'woocommerce' ); ?></h3>

	<?php endif; ?>

	<?php do_action( 'woocommerce_before_checkout_billing_form', $checkout ); ?>

	<div class="woocommerce-billing-fields__field-wrapper">
		<?php
			$fields = $checkout->get_checkout_fields( 'billing' );

			foreach ( $fields as $key => $field ) {

				if ( isset( $field['country_field'], $fields[ $field['country_field'] ] ) ) {
					$field['country'] = $checkout->get_value( $field['country_field'] );
				}

				if ( $key == 'billing_company') {
					continue;
				} elseif ( $key == 'billing_address_2' or $key == 'billing_phone' or $key == 'billing_city') {
					continue;
				}
				else {
					woocommerce_form_field( $key, $field, $checkout->get_value( $key ) );
				}

			}
		?>
	</div>

	<?php do_action( 'woocommerce_after_checkout_billing_form', $checkout ); ?>
</div>

<div class="order-summary-container">
	<h1>Your Order</h1>
	<?php 
		do_action( 'woocommerce_review_order_before_cart_contents' );

		foreach( WC()->session->get('shipping_for_package_0')['rates'] as $method_id => $rate ){
			if( WC()->session->get('chosen_shipping_methods')[0] == $method_id ){
				$rate_label = $rate->label; // The shipping method label name
				$rate_cost_excl_tax = floatval($rate->cost); // The cost excluding tax
				// The taxes cost
				$rate_taxes = 0;
				foreach ($rate->taxes as $rate_tax)
					$rate_taxes += floatval($rate_tax);
				// The cost including tax
				$rate_cost_incl_tax = $rate_cost_excl_tax + $rate_taxes;
		
				echo '<h1>'. WC()->cart->get_cart_shipping_total() . '</h1>';
				break;
			}
		}
		

		foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
			$_product = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );

			if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_checkout_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
				?>

				<?php echo $_product->get_image(); ?>
				<?php echo WC()->cart->get_cart_shipping_total(); ?>
				<?php echo get_woocommerce_currency_symbol(); ?>
				<?php echo $_product->get_price(); ?>
				<h1><?php echo $_product->get_name(); ?></h1>
				
				<h1><?php echo $cart_item['quantity'] ?></h1>

				<?php echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ); ?>

				<div class="coupon">
					<input type="text" name="coupon_code" class="input-text coupon__input" id="coupon_code" value="" placeholder="<?php _e( 'Coupon code', 'woocommerce' ) ?>" />
					<input type="submit" class="button coupon__submit" name="apply_coupon" value="<?php _e('Apply coupon', 'woocommerce') ?>" />
					<?php do_action( 'woocommerce_cart_coupon' ); ?>
				</div>
				<?php
			}
		} ?>
</div>

<?php if ( ! is_user_logged_in() && $checkout->is_registration_enabled() ) : ?>
	<div class="woocommerce-account-fields">
		<?php if ( ! $checkout->is_registration_required() ) : ?>

			<p class="form-row form-row-wide create-account">
				<label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
					<input class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" id="createaccount" <?php checked( ( true === $checkout->get_value( 'createaccount' ) || ( true === apply_filters( 'woocommerce_create_account_default_checked', false ) ) ), true ) ?> type="checkbox" name="createaccount" value="1" /> <span><?php _e( 'Create an account?', 'woocommerce' ); ?></span>
				</label>
			</p>

		<?php endif; ?>

		<?php do_action( 'woocommerce_before_checkout_registration_form', $checkout ); ?>

		<?php if ( $checkout->get_checkout_fields( 'account' ) ) : ?>

			<div class="create-account">
				<?php foreach ( $checkout->get_checkout_fields( 'account' ) as $key => $field ) : ?>
					<?php woocommerce_form_field( $key, $field, $checkout->get_value( $key ) ); ?>
				<?php endforeach; ?>
				<div class="clear"></div>
			</div>

		<?php endif; ?>

		<?php do_action( 'woocommerce_after_checkout_registration_form', $checkout ); ?>
	</div>
<?php endif; ?>
