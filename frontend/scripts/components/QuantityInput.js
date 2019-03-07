/**
 * @class QuantityInput
 */
export default class QuantityInput {


    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container) {

        if(!container) throw Error('QuantityInput container not found');

        this.container = container;

        this.input = this.container.querySelector('[data-quantity="input"]')
        this.decBtn = this.container.querySelector('[data-adjust="dec"]');
        this.incBtn = this.container.querySelector('[data-adjust="inc"]');
       
        // this.decBtn.addEventListener('click', this.onAdjust.bind(this));
        // this.incBtn.addEventListener('click', this.onAdjust.bind(this));
        // this.input.addEventListener('onkeyup', this.onKeyUp.bind(this));

        this.maxAmount = 1000;
        this.minAmount = 1;

        this.defaultQuantity = parseInt(this.input.value) || 1;
        this.currentQuantity = this.defaultQuantity;

        document.addEventListener('click', e => {
            // e.preventDefault();
            if (e.target.classList[0] === 'straggler'){
                this.onAdjust(e.target);
            }
        });
    }


    /**
     * On Adjust of the buttons
     * @param  {Object} event
     * @return {Void}
     */
    onAdjust(el) {
        
        let type;
        if (el.parentNode.parentNode.classList.contains('quantity-field__wrapper')) {
            type = el.parentNode.getAttribute('data-adjust');
        } else {
            type = el.getAttribute('data-adjust');
        }

        this.currentQuantity = type === 'inc' ? this.currentQuantity + 1 : this.currentQuantity - 1;

        if(this.currentQuantity <= 1) this.currentQuantity = this.minAmount;
        if(this.currentQuantity >= this.maxAmount && type === 'inc') this.currentQuantity = this.maxAmount;

        this.changeInput(this.currentQuantity);

    }

    changeInput(amount) {

        document.querySelector('.quantity-field__wrapper').children[2].setAttribute('value', amount);
        this.updateCart(amount);

    }

    onKeyUp(event) {}

    updateCart (amount) {
         (function ($) {
            
            var item_hash = $('.quantity-field__wrapper').find('input.qty').attr('name').replace(/cart\[([\w]+)\]\[qty\]/g, "$1");
            var currentVal = parseFloat(amount);

            function qty_cart() {

                $.ajax({
                    type: 'POST',
                    url:  wc_add_to_cart_params.ajax_url,
                    data: {
                        action: 'qty_cart',
                        hash: item_hash,
                        quantity: currentVal
                    },
                    success: function(response) {
                        if (response.error & response.product_url) {

                            window.location = response.product_url;
                            return;

                        } else {

                            for (var i=0; i < document.querySelectorAll('.woocommerce-Price-amount.amount').length; i++) {
                                document.querySelectorAll('.woocommerce-Price-amount.amount')[i].innerHTML = `<span class="woocommerce-Price-currencySymbol">$</span> ${response.cart_total}`;
                            }

                        }
                    }
                });  
    
            }
            qty_cart();
    })(jQuery);
    }


}
