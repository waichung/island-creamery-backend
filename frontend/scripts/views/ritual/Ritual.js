// Lib
import Scroll from 'scroll-js';
import Tween from 'tweezer.js'

// Utils
import InteractionManager from '../../utils/InteractionManager';
import Loader from '../../utils/Loader';

// Views
import OpenPack from './OpenPack';
import Dissolving from './Dissolving';
import Stir from './Stir';
import Wave from './Wave';

/**
 * Ritual
 * @class Ritual
 */
export default class Ritual {


    /**
     * Constructor
     *
     * @param {Array} data
     */
    constructor(data, header, scrollbar) {

        // Data
        this.data = data;
        this.flavour = this.getFlavour(data);
        this.imagesRaw = this.getImages(this.flavour);
        this.scrollbar = scrollbar;

        this.main = document.querySelector('main');
        this.main.style.height = 'auto';

        this.header = header;

        // Values
        this.sectionHeight = window.innerHeight;
        this.isAnimating = false;
        this.currentSectionId = 0;
        this.previousSectionId = this.currentSectionId;
        this.deltaThreshold = { mouse: 75, pan: 250 };
        this.defaultEasing = 'easeInOutQuart';

        this.easeInDelay = 750;
        this.easeOutDelay = 2000;

        // DOM Elements
        this.container = document.querySelector('[data-ritual="container"]');
        this.sections = this.container.querySelectorAll('[data-ritual="section"]');

        this.productWrapper = this.container.querySelector('[data-ritual="product-container"]');
        this.productPackaging = this.container.querySelector('[data-product="packaging"]');

        this.setFlavours(data);

        // Utils
        this.scroll = new Scroll(this.container);
        this.interaction = new InteractionManager(this.container, false).on('scroll', this.onScroll).on('resize', this.onResize);
        this.loader = new Loader().loadAssetsObject(this.imagesRaw, this.initialize.bind(this));

        // Initially make sure the window is fully scrolled to top
        // As we are locking the scrolling
        window.scrollTo({ top: 0 });

        this.sections[this.currentSectionId].classList.add('active');

    }


    /**
     * Initialize Ritual
     *
     * @param  {Object} images loaded images
     * @return {void}
     */
    initialize(images) {

        console.info('Initialize');

        // Data
        this.images = images;

        // Components
        this.wave = new Wave(document.querySelector('[data-wave="container"]'));
        this.openPack = new OpenPack({ top: this.images.pack_shot_top, bottom: this.images.pack_shot_bottom }, this.initializeDissolve.bind(this));

        // DOM Element shit
        this.productUnwrapped = this.generateProductUnwrapped(this.images['product_unwrapped']);
        this.emptyBowl = this.generateEmptyBowl();

        this.dissolving = new Dissolving(this.images, {
            parent: this.container,
            productUnwrapped: this.productUnwrapped,
            bowl: this.emptyBowl
        }, this.initializeStir.bind(this));


    }


    /**
     * Initialize the dissolve effect
     *
     * @return {void}
     */
    initializeDissolve() {

        console.info('Initialize Dissolve');

        this.nextSection();

        this.dissolving.setPosition(this.sectionHeight);
        this.dissolving.initialize();
        this.header.toggleCondensed();

        this.moveItem(
            this.productUnwrapped.offsetTop,
            this.productUnwrapped.offsetTop + this.sectionHeight,
            this.productUnwrapped,
            1000
        );

    }


    /**
     * Initialize the stirring effect
     *
     * @return {void}
     */
    initializeStir() {

        console.info('Initialize Stir');

        this.nextSection();

        this.moveItem(
            this.dissolving.container.offsetTop,
            this.dissolving.container.offsetTop + this.sectionHeight,
            this.dissolving.container,
            1000,
            () => this.stir = new Stir(this.dissolving, this.initializeWaiting.bind(this))
        );

    }


    /**
     * Initialize the waiting section
     *
     * @return {void}
     */
    initializeWaiting() {

        console.info('Initialize waiting');

        this.nextSection();
        this.stir.destroy();

        this.moveItem(
            this.dissolving.container.offsetTop,
            this.dissolving.container.offsetTop + this.sectionHeight,
            this.dissolving.container,
            1000,
            () => setTimeout(() => this.initializeEnd(), 3000)
        );

    }


    initializeEnd() {

        console.info('Initialize end');

        this.main.style.height = '100vh';

        this.nextSection();
        this.moveItem(
            this.dissolving.container.offsetTop,
            this.dissolving.container.offsetTop + this.sectionHeight,
            this.dissolving.container,
            1000,
            () => this.interaction.setCanScroll(true)
        );

    }


    /**
     * Move a specific item
     *
     * @param  {Number} start
     * @param  {Number} end
     * @param  {HTMLElement} item
     * @param  {Number} delay
     * @param  {Function} callback
     * @return {void}
     */
    moveItem(start, end, item, delay, callback = null) {
        
        let timeout = null;

        const moveProduct = new Tween({
            start: start,
            end: end,
            duration: 2250,
            easing: (t, b, c, d) => {
                if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            }
        }).on('tick', value => {
            item.style.top = value + 'px';
        }).on('done', () => {

            if(callback) callback();

        });

        timeout = setTimeout(() => {
            moveProduct.begin();
            clearTimeout(timeout);
        }, delay);

    }


    /**
     * Move to next section, whether it be via
     * scroll or by completing another event.
     * @return {void}
     */
    nextSection = (id = null) => {

        // set the previous section to the current section before moving on.
        this.previousSectionId = this.currentSectionId;
        this.sections[this.previousSectionId].classList.remove('active');

        // Update current section by the provided ID OR just increment by 1.
        id ? this.currentSectionId = id : this.currentSectionId++;

        this.isAnimatingTimeout = setTimeout(() => {

            this.scroll.toElement(this.sections[this.currentSectionId], { easing: this.defaultEasing, duration: 4000 }).then(() => {
                this.isMoving = false;
                clearTimeout(this.isAnimatingTimeout);
            });

            setTimeout(() => this.sections[this.currentSectionId].classList.add('active'), this.easeOutDelay);

            this.sections[this.currentSectionId].classList.add('triggered');

        }, this.easeInDelay);

    }


    /**
     * Generate Empty Bowl
     * @return {void}
     */
    generateEmptyBowl() {

        const image = new Image();

        this.container.appendChild(image);

        image.src = wp.theme + '/assets/img/ritual/bowl.png';
        image.classList.add('ritual-bowl');
        image.style.top = this.sectionHeight * 1.5 + 'px';

        return image;

    }


    /**
     * Generate the necessary stuff for the unwrapped product
     *
     * @param  {HTMLElement} image
     * @return {HTMLElement} image
     */
    generateProductUnwrapped(image) {
        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        const offset = 20;
        image.className = 'ritual-product__unwrapped';
        image.style.height = (this.openPack.canvas.clientHeight - offset) + 'px';
        image.style.width = 'auto';
        image.style.top = (this.sectionHeight * .5) - (this.openPack.canvas.clientHeight / 2) + offset + 'px';
        this.productWrapper.appendChild(image);

        return image;

    }


    /**
     * Update the product unwrapped Values
     * @return {void}
     */
    updateProductUnwrapped() {

        const offset = 20;

        let sectionModifier = this.currentSectionId === 0 ? .5 : 1.5;

        this.productUnwrapped.style.height = (this.openPack.canvas.clientHeight - offset) + 'px';
        this.productUnwrapped.style.top = (this.sectionHeight * sectionModifier) - (this.openPack.canvas.clientHeight / 2) + offset + 'px';

    }

    setFlavours(flavours) {

        const flavourWrapper = this.container.querySelector('[data-ritual="flavours"]');

        flavours.forEach((flavour) => {

            const flavourElement = document.createElement('a');
            flavourElement.className = 'ritual-flavour';

            flavourElement.setAttribute('href', `/?flavour=${Ritual.sanitizeName(flavour.flavour_name)}`)

            flavourElement.innerHTML = `
                <div class="ritual-flavour__colour" style='background-color: ${flavour.flavour_colour}'></div>
                <small class="ritual-flavour__name">${flavour.flavour_name}</small>
            `;

            flavourElement.addEventListener('mouseenter', () => flavourElement.classList.add('hover'));
            flavourElement.addEventListener('mouseleave', () => flavourElement.classList.remove('hover'));

            flavourWrapper.appendChild(flavourElement);

        });

    }


    /**
     * On Resize Handler
     *
     * @param  {Object} event
     * @return {void}
     */
    onResize = (event) => {

        // Set Values
        this.sectionHeight = window.innerHeight;

        // Update Elements
        this.sections.forEach((section) => section.style.height = this.sectionHeight + 'px');
        this.emptyBowl.style.top = this.sectionHeight * 1.5 + 'px';
        this.updateProductUnwrapped();
        this.wave.resize();

        this.dissolving.container.style.top = (this.sectionHeight * (this.currentSectionId + .5)) - (this.dissolving.container.clientHeight / 2) + 'px';

        // Scroll to section again
        this.isMoving = true;
        this.scroll.toElement(this.sections[this.currentSectionId], { easing: this.defaultEasing, duration: 1000 }).then(() => this.isMoving = false);


    }


    /**
     * on Scroll handler
     *
     * @param  {Object} event
     * @return {void}
     */
    onScroll = (event) => {
        let type = event.type;
        let delta = event.deltaY;
        let canScroll = (type === 'mousewheel' && delta > this.deltaThreshold.mouse) || (type === 'pan' && delta < -this.deltaThreshold.pan);

        if(canScroll && !this.isMoving) {

            this.isMoving = true;

            switch(this.currentSectionId) {

                case 0: {
                    this.openPack.autoTrigger();
                    break;
                }

                case 1: {
                    this.dissolving.autoTrigger(this.dissolving.dissolvedStage, this.initializeStir.bind(this));
                    break;
                }

                case 2: {
                    this.stir.destroy();
                    this.dissolving.autoTrigger(this.dissolving.dissolvedMax, this.initializeWaiting.bind(this));
                    break;
                }


            }

        }


    }


    /**
     * Get chosen flavour
     *
     * @param  {Object} data
     * @return {Object}
     */
    getFlavour(data) {

        let defaultItem = null;

        for (let [index, item] of data.entries()) {

            let sanitizedName = Ritual.sanitizeName(item.flavour_name);

            item.flavour_name_sanitized = sanitizedName;

            if(item.flavour_default === true) defaultItem = item;

            if(Ritual.getUrlParameter('flavour') === sanitizedName) {
                return item;
                break;
            }

        }

        return defaultItem ? defaultItem : data[0];

    }


    /**
     * Get Images
     *
     * @param  {Object} data
     * @return {void}
     */
    getImages(data) {

        const imagesObj = {
            product_unwrapped: data.flavour_product_unwrapped,
            pack_shot_top: data.flavour_pack_shot_top,
            pack_shot_bottom: data.flavour_pack_shot_bottom,
        };

        for (let i = 0; i < data.flavour_product_melting.length; i++) {
            imagesObj['melting' + '-' + i] = data.flavour_product_melting[i].url;
        }

        return imagesObj;

    }


    /**
     * Sanitize Name
     *
     * @param  {String} name
     * @return {String}
     */
    static sanitizeName(name) {
        return name.replace(/\s+/g, '').toLowerCase();
    }


    /**
     * Get URL Parameter from the query string
     *
     * @param  {String} name
     * @return {String|Null}
     */
    static getUrlParameter(name) {

        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(location.search);
        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));

    };


}
