<?php
/**
 * Cart totals
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart-totals.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.3.6
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<aside class="cart_totals cart-total <?php echo ( WC()->customer->has_calculated_shipping() ) ? 'calculated_shipping' : ''; ?>">

	<?php do_action( 'woocommerce_before_cart_totals' ); ?>

	<h2 class="cart-total__heading"><?php _e( 'Total', 'woocommerce' ); ?></h2>

	<div class="cart-total__section">
		<small><?php _e( 'subtotal', 'woocommerce' ); ?></small>
		<span><?php wc_cart_totals_subtotal_html(); ?></span>
	</div>

    <!-- Discounts -->

    <div class="cart-total__section cart-discount">

		<?php foreach ( WC()->cart->get_coupons() as $code => $coupon ) : ?>

			<div class="cart-discount coupon-<?php echo esc_attr( sanitize_title( $code ) ); ?>">

				<small><?php wc_cart_totals_coupon_label( $coupon ); ?></small>
				<span data-title="<?php echo esc_attr( wc_cart_totals_coupon_label( $coupon, false ) ); ?>"><?php wc_cart_totals_coupon_html( $coupon ); ?></span>

			</div>

		<?php endforeach; ?>

    </div>

    <!-- Shipping -->

    <div class="cart-total__section cart-shipping">

        <!-- Shipping choice or calculator -->

		<?php if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) : ?>

			<?php do_action( 'woocommerce_cart_totals_before_shipping' ); ?>

			<?php wc_cart_totals_shipping_html(); ?>

			<?php do_action( 'woocommerce_cart_totals_after_shipping' ); ?>

		<?php elseif ( WC()->cart->needs_shipping() && 'yes' === get_option( 'woocommerce_enable_shipping_calc' ) ) : ?>

			<small><?php _e( 'Shipping', 'woocommerce' ); ?></small>
			<small><?php woocommerce_shipping_calculator(); ?></small>

		<?php endif; ?>

        <!-- Fees -->

		<?php foreach ( WC()->cart->get_fees() as $fee ) : ?>
			<div class="fee">
				<small><?php echo esc_html( $fee->name ); ?></small>
				<span data-title="<?php echo esc_attr( $fee->name ); ?>"><?php wc_cart_totals_fee_html( $fee ); ?></span>
			</div>
		<?php endforeach; ?>

        <!-- Tax -->

        <?php if ( wc_tax_enabled() && ! WC()->cart->display_prices_including_tax() ) :

            $taxable_address = WC()->customer->get_taxable_address();
            $estimated_text  = WC()->customer->is_customer_outside_base() && ! WC()->customer->has_calculated_shipping()
            ? sprintf( ' <small>' . __( '(estimated for %s)', 'woocommerce' ) . '</small>', WC()->countries->estimated_for_prefix( $taxable_address[0] ) . WC()->countries->countries[ $taxable_address[0] ] )
            : '';

            if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) : ?>

                <?php foreach ( WC()->cart->get_tax_totals() as $code => $tax ) : ?>

                    <div class="tax-rate tax-rate-<?php echo sanitize_title( $code ); ?>">
                        <small><?php echo esc_html( $tax->label ) . $estimated_text; ?></small>
                        <span data-title="<?php echo esc_attr( $tax->label ); ?>"><?php echo wp_kses_post( $tax->formatted_amount ); ?></span>
                    </div>

                <?php endforeach; ?>

            <?php else : ?>

                <div class="tax-total">
                    <small><?php echo esc_html( WC()->countries->tax_or_vat() ) . $estimated_text; ?></small>
                    <span data-title="<?php echo esc_attr( WC()->countries->tax_or_vat() ); ?>"><?php wc_cart_totals_taxes_total_html(); ?></span>
                </div>

            <?php endif; ?>

        <?php endif; ?>

    </div>

    <div class="cart-final-total">

        <?php do_action( 'woocommerce_cart_totals_before_order_total' ); ?>

        <div class="cart-order-total order-total">
            <small><?php _e( 'Total', 'woocommerce' ); ?></small>
            <span data-title="<?php esc_attr_e( 'Total', 'woocommerce' ); ?>"><?php wc_cart_totals_subtotal_html(); ?></span>
        </div>

        <?php do_action( 'woocommerce_cart_totals_after_order_total' ); ?>

    </div>

	<div class="cart-checkout">

		<?php do_action( 'woocommerce_proceed_to_checkout' ); ?>

	</div>

	<?php do_action( 'woocommerce_after_cart_totals' ); ?>

</div>
