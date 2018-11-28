/**
 * @class ProductSlider
 */
export default class ProductSlider {


    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container) {

        const $ = window.jQuery;

        if(!container) return new Error('no container found in the product slider');

        this.container = container;
        this.btn = this.container.querySelector('[data-product="slider-btn"]');

        this.slidesContainer = this.container.querySelector('[data-product="slider-items"]');
        this.slides = this.container.querySelectorAll('[data-product="slider-item"]');
        this.slidesCount = this.slides.length;

        const slider = $('[data-product="slider-items"]').hubSlider({
     		selector: $('[data-product="slider-item"]'),
     		button: {
     			next: $('[data-product="slider-btn"]')
     		},
     		transition: '0.4s',
     		startOffset: -20,
     		scaleStep: 0.05,
     		auto: false,
     		time: 1,
     	});


        this.slides.forEach((slide, index) => {

            slide.addEventListener('click', (event) => {

                this.btn.click();
            });

        });

    }

}
