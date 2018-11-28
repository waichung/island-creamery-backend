// Utils
import CreateElement from '../utils/CreateElement';

/**
 * @class Carousel
 */
export default class Carousel {


    /**
     * Default options
     *
     * @type {Object}
     */
    static defaultOpts = {
        nav: false,
        navPosition: 'after',
        arrows: true
    }


    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container, opts = Carousel.defaultOpts) {

        if(!container) throw Error('Product container not found in Carousel');

        this.opts = opts;

        this.container = container;
        this.content = this.container.querySelector('[data-carousel="content"]');
        this.itemsContainer = this.container.querySelector('[data-carousel="items"]');

        this.itemsWidth = this.content.clientWidth;
        this.itemWidth = this.content.clientWidth;

        this.items = this.generateItems();
        this.itemCount = Object.keys(this.items).length;

        this.nav = this.createNav(this.container);
        this.arrows = this.createArrows(this.container);

        this.currentItem = this.opts.initialItem || 0;
        this.previousItem = this.currentItem;

        console.log(this.items);

    }


    /**
     * Setup
     *
     * @return {Void}
     */
    setup() {

        this.itemWidth = this.content.clientWidth;

        Object.entries(this.items).forEach((arr) => {

            let item = arr[1].item;
            item.style.width = this.itemWidth + 'px';

        });

        this.itemsWidth = this.itemWidth * this.itemCount;
        this.itemsContainer.style.width = this.itemsWidth + 'px';

    }


    createArrows(container) {

        if(!this.opts.arrows) return null;

        const arrows = CreateElement('div', { 'class': 'carousel__arrows', 'data-carousel': 'arrows' });

        const arrowLeft = CreateElement('span', { 'class': 'carousel__arrow carousel__arrow--left', 'data-carousel': 'arrow', 'data-type': 'left', 'content': '<' });
        const arrowRight = CreateElement('span', { 'class': 'carousel__arrow carousel__arrow--right', 'data-carousel': 'arrow', 'data-type': 'right', 'content': '>' });

        arrows.appendChild(arrowLeft);
        arrows.appendChild(arrowRight);

        container.appendChild(arrows);

        return arrows;

    }


    /**
     * Create nav if enabled in the options
     *
     * @param  {HTMLElement} container
     * @return {HTMLElement}
     */
    createNav(container) {

        if(!this.opts.nav) return null;

        const nav = CreateElement('nav', { 'class': 'carousel__nav', 'data-carousel': 'nav' });

        this.generateNavItems(nav, this.items);

        this.opts.navPosition === 'before' ? container.insertBefore(nav, container.firstChild) : container.appendChild(nav);

        return nav;

    }


    /**
     * Generate Nav Items,
     * append them to the nav and add them to the items objecg
     *
     * @param  {HTMLElement} nav
     * @param  {Object} itemsObj
     * @return {Void}
     */
    generateNavItems(nav, itemsObj) {

        for(const [index, object] of Object.entries(itemsObj)) {

            const navItem = CreateElement('a', {
                'class': 'carousel__nav-item',
                'data-carousel': 'nav-item'
            });

            navItem.addEventListener('click', (event) => {
                event.preventDefault();
                this.changeItem(index)
            });

            object['navItem'] = navItem;

            nav.appendChild(navItem);

        }

    }


    /**
     * Generate items and create additional Markup
     *
     * @return {Object}
     */
    generateItems() {

        const itemsObj = {};

        this.itemsContainer.querySelectorAll('[data-carousel="item"]').forEach((item, index) => {

            itemsObj[index] = {
                active: index === 0,
                index,
                item
            };

        });

        return itemsObj;

    }


}
