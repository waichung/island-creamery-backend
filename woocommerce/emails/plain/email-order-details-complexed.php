<?php
/**
 * Order details table shown in emails.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/emails/email-order-details.php.
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

$text_align = is_rtl() ? 'right' : 'left';

do_action( 'woocommerce_email_before_order_table', $order, $sent_to_admin, $plain_text, $email ); ?>

<?php if ( ! $sent_to_admin ) : ?>
	<h2><?php printf( __( 'Order #%s', 'woocommerce' ), $order->get_order_number() ); ?> (<?php printf( '<time datetime="%s">%s</time>', $order->get_date_created()->format( 'c' ), wc_format_datetime( $order->get_date_created() ) ); ?>)</h2>
<?php else : ?>
	<h2><a class="link" href="<?php echo esc_url( admin_url( 'post.php?post=' . $order->get_id() . '&action=edit' ) ); ?>"><?php printf( __( 'Order #%s', 'woocommerce' ), $order->get_order_number() ); ?></a> (<?php printf( '<time datetime="%s">%s</time>', $order->get_date_created()->format( 'c' ), wc_format_datetime( $order->get_date_created() ) ); ?>)</h2>
<?php endif; ?>

<div style="margin-bottom: 40px;">
	<table class="td" cellspacing="0" cellpadding="6" style="width: 100%; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;" border="1">
		<thead>
			<tr>
				<th class="td" scope="col" style="text-align:<?php echo $text_align; ?>;"><?php _e( 'Product', 'woocommerce' ); ?></th>
				<th class="td" scope="col" style="text-align:<?php echo $text_align; ?>;"><?php _e( 'Quantity', 'woocommerce' ); ?></th>
				<th class="td" scope="col" style="text-align:<?php echo $text_align; ?>;"><?php _e( 'Price', 'woocommerce' ); ?></th>
			</tr>
		</thead>
		<tbody>
			<?php echo wc_get_email_order_items( $order, array(
				'show_sku'      => $sent_to_admin,
				'show_image'    => false,
				'image_size'    => array( 32, 32 ),
				'plain_text'    => $plain_text,
				'sent_to_admin' => $sent_to_admin,
			) ); ?>
		</tbody>
		<tfoot>
			<?php
				if ( $totals = $order->get_order_item_totals() ) {
					$i = 0;
					foreach ( $totals as $total ) {
						$i++;
						?><tr>
							<th class="td" scope="row" colspan="2" style="text-align:<?php echo $text_align; ?>; <?php echo ( 1 === $i ) ? 'border-top-width: 4px;' : ''; ?>"><?php echo $total['label']; ?></th>
							<td class="td" style="text-align:<?php echo $text_align; ?>; <?php echo ( 1 === $i ) ? 'border-top-width: 4px;' : ''; ?>"><?php echo $total['value']; ?></td>
						</tr><?php
					}
				}
				if ( $order->get_customer_note() ) {
					?><tr>
						<th class="td" scope="row" colspan="2" style="text-align:<?php echo $text_align; ?>;"><?php _e( 'Note:', 'woocommerce' ); ?></th>
						<td class="td" style="text-align:<?php echo $text_align; ?>;"><?php echo wptexturize( $order->get_customer_note() ); ?></td>
					</tr><?php
				}

				$order_personalisation = get_order_personalisation($order->get_id());
				if (!empty($order_personalisation['personalised_card']) && !empty($order_personalisation['personalised_card']['recipient'])) {
					$personalised_card = $order_personalisation['personalised_card'];
					?><tr>
						<th class="td" scope="row" colspan="2" style="text-align:<?php echo $text_align; ?>;"><?php _e( 'Personalised Card:', 'woocommerce' ); ?></th>
						<td class="td" style="text-align:<?php echo $text_align; ?>;"><?php
							switch ($personalised_card['recipient']) {
								case 'nocard':
									echo esc_html(wptexturize(__('No personalised cards.','woocommerce')));
									break;

								case 'personalised':
									if (!empty($personalised_card['recipient_title']) && strtolower($personalised_card['recipient_title']) != 'none') {
										echo esc_html(wptexturize(sprintf(__('Title: %s','woocommerce'), $personalised_card['recipient_title'])));
										echo '<br/>';
									}
									echo esc_html(wptexturize(sprintf(__('Surname: %s','woocommerce'), $personalised_card['recipient_surname'])));
									echo '<br/>';
									echo esc_html(wptexturize(sprintf(__('Message: %s','woocommerce'), $personalised_card['message'])));
									echo '<br/>';
									echo esc_html(wptexturize(sprintf(__('SVG File:','woocommerce')))).' '.sprintf('<a href="%s">%s</a>', get_site_url(null,'/?download_card_svg='.$order->get_id()), esc_html(wptexturize(__('Download','woocommerce'))));
									break;

								default:
									echo esc_html(wptexturize(__('This order is for myself (your name will appear on the card)','woocommerce')));
									break;
							}
						?></td>
					</tr><?php
				}
				if (!empty($order_personalisation['bag']) && !empty($order_personalisation['bag']['ribbon_color'])) {
					?><tr>
						<th class="td" scope="row" colspan="2" style="text-align:<?php echo $text_align; ?>;"><?php _e( 'Shopping Bag Ribbon:', 'woocommerce' ); ?></th>
						<td class="td" style="text-align:<?php echo $text_align; ?>;"><?php echo esc_html(wptexturize(__($order_personalisation['bag']['ribbon_color'],'woocommerce'))); ?></td>
					</tr><?php
				}
			?>
		</tfoot>
	</table>
</div>

<?php do_action( 'woocommerce_email_after_order_table', $order, $sent_to_admin, $plain_text, $email ); ?>