<?php
/**
 * Custom Quantity input so I can add my appropriate classes.
 * @version 3.4.0
 */
?>

<div class="quantity-field quantity-adjust-container" data-quantity="container">

    <div class="quantity-field__wrapper">

        <label class="screen-reader-text" for="<?php echo esc_attr( $input_id ); ?>"><?php esc_html_e( 'Quantity', 'woocommerce' ); ?></label>

        <div class="quantity-field__adjuster quantity-field__adjuster--dec" data-quantity="adjuster" data-adjust="dec"><span class="straggler"></span></div>

        <input type="number" id="<?php echo esc_attr( $input_id ); ?>" class="quantity-field__input qty quantity-adjust-value"
               step="<?php echo esc_attr( $step ); ?>" min="<?php echo esc_attr( $min_value ); ?>"
               max="<?php echo esc_attr( 0 < $max_value ? $max_value : '' ); ?>"
               name="<?php echo esc_attr( $input_name ); ?>" value="<?php echo esc_attr( $input_value ); ?>"
               title="<?php echo esc_attr_x( 'Qty', 'Product quantity input tooltip', 'woocommerce' ) ?>"
               size="1" pattern="<?php echo esc_attr( $pattern ); ?>" inputmode="<?php echo esc_attr( $inputmode ); ?>" data-quantity="input" />

        <div class="quantity-field__adjuster quantity-field__adjuster--inc" data-quantity="adjuster" data-adjust="inc"><span class="straggler"></span></div>

    </div>

</div>
