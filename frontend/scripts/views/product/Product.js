// Lib
import Glide from '@glidejs/glide';

// Views
import Carousel from '../../components/Carousel';
import QuantityInput from '../../components/QuantityInput';
import ProductSlider from './ProductSlider';

/**
 * @class Product
 */
export default class Product {

    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container, scrollbar) {

        if(!container) throw Error('Product container not found');

        this.container = container;
        this.productGallery = new Glide(document.querySelector('[data-product="gallery"]')).mount();

        this.quantity = this.container.querySelector('[data-quantity="container"]');
        this.quantityInput = new QuantityInput(this.quantity);

        this.buyBtns = document.querySelectorAll('[data-product="buy-btn"]');
        this.stickyBuyBtn = document.querySelector('[data-btn="sticky"]');
        this.belowFoldElement = document.querySelector('[data-product="below-fold"]');

        this.stickyBtnOffset = 200;

        this.scrollbar = scrollbar;

        this.productSlider = new ProductSlider(document.querySelector('[data-product="slider"]'));

        this.scrollbar.addListener(({ offset }) => {

            const belowFoldPos = this.belowFoldElement.getBoundingClientRect();

            this.stickyBuyBtn.style.top = (offset.y + (window.innerHeight - this.stickyBtnOffset))  + 'px';

            if(belowFoldPos.y < 0) this.stickyBuyBtn.classList.add('in-view');
                else this.stickyBuyBtn.classList.remove('in-view');

        });

    }

}
