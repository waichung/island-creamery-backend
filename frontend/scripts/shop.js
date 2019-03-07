let loadingMore = undefined;

function loadMore (appendToStart = false, originalList) {

    loadingMore = true;

    if (appendToStart) {
        
        document.getElementById('ul-scroll').scrollLeft = 100000;

    }  else {

        for (var i=0; i < originalList.length/3; i++) {

            var item = originalList[appendToStart ? originalList.length - (1+i) : i];
    
            var clnItem = item.cloneNode(true);
    
    
            document.getElementById('ul-scroll').appendChild(clnItem);
    
        }

    }

    loadingMore = false;

}

function scrollToMiddleOfList () {

    //scroll to the second #active-el and followed by offsetting to another half the screen
    document.getElementById
    ('ul-scroll').scrollLeft = document.querySelectorAll('#active-el')[1].offsetLeft - 0.5*window.innerWidth + 0.5*document.querySelectorAll('#active-el')[1].clientWidth+10;

}


function shop () {

    if (window.location.href.includes('menu') || window.location.href.includes('product')) {

        
        (function ($) {
            $( document ).on( 'click','.btn.btn--cart', function(e) {

                e.preventDefault();
                var $thisbutton = $(this),
                $form = $thisbutton.closest('.product-buy'), id = $thisbutton.val(),
                product_qty = $form.find('input[name=quantity]').val() || 1,
                product_id = $form.find('input[name=product_id]').val() || id,
                variation_id = $form.find('input[name=variation_id]').val() || 0;

                var data = {
                    action: 'woocommerce_ajax_add_to_cart',
                    product_id: product_id,
                    product_sku: '',
                    quantity: product_qty,
                    variation_id: variation_id,
                };

                $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

                $.ajax({
                    type: 'post',
                    url: wc_add_to_cart_params.ajax_url,
                    data: data,
                    beforeSend: function (response) {
                        $thisbutton.removeClass('added').addClass('loading');
                    },
                    complete: function (response) {
                        $thisbutton.addClass('added').removeClass('loading');
                    },
                    success: function (response) {
                        if (response.error & response.product_url) {
                            window.location = response.product_url;
                            return;
                        } else {

                            $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);

                            //open .minicart modal
                            document.querySelector('body').style.height = '100%';
                            document.querySelector('body').style.overflow = 'hidden';
                            document.querySelector('#big-gulp').click();
                        }
                    },
                });

            });
        })(jQuery);

        const originalList = document.getElementById('ul-scroll').cloneNode(true).children;

        document.getElementById("ul-scroll") && document.getElementById("ul-scroll").addEventListener('scroll', () => {

            if (document.getElementById("ul-scroll").clientWidth + document.getElementById("ul-scroll").scrollLeft >= document.getElementById("ul-scroll").scrollWidth*0.97 || document.getElementById("ul-scroll").scrollLeft < 20) {

                const shouldAppendToStart = document.getElementById("ul-scroll").scrollLeft < 20;

                if (!loadingMore) loadMore(shouldAppendToStart, originalList);


            }
            
        });

        scrollToMiddleOfList();

        if (window.location.href.includes('product') && !window.location.href.includes('product-category')) {

            //ANCHOR
            setTimeout(() => window.scrollTo(0, document.querySelector('.shop__products').getBoundingClientRect().top), 1500);

        }

    }

}

export default shop;


