// Lib
import Tween from 'tweezer.js';

// Components
import Handle from './Handle';

// Utils
import LoadImages from '../../utils/LoadImages';


/**
 * Dissolving
 * @class
 */
export default class Dissolving {


    /**
     * @constructor
     * @param {Object} data
     * @param {Object} elements
     */
    constructor(images, elements, callback) {

        this.callback = callback;

        // DOM Elements
        this.parent = elements.parent;
        this.container = elements.parent.querySelector('[data-product="dissolving"]');
        this.productUnwrapped = elements.productUnwrapped;
        this.bowl = elements.bowl;

        this.imageWrapper = this.container.querySelector('[data-dissolving="wrapper"]');
        this.imageData = images;
        this.images = this.getImages();

        // Values
        this.dissolved = 0;
        this.dissolvedPrevious = this.dissolved;
        this.dissolvedMax = this.images.length - 1;
        this.dissolvedStage = 3;
        this.dissolvedCompleteRan = false
    }


    /**
     * Initialize
     * @return {void}
     */
    initialize() {

        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        // this.container.style.border = "1px solid red";
        this.handle = new Handle(this.container)
            .generateLabel('Hold to dissolve', 'right')
            .setInitialPosition(this.width, this.height * .5)
            .on('press', this.onHold.bind(this));

        this.onLoadTimeout = setTimeout(() => {
            this.container.classList.add('loaded');
            clearTimeout(this.onLoadTimeout);
        }, 3000);

    }


    /**
     * On update from the handle
     * @param  {Object} event
     * @return {Void}
     */
    onHold(event) {

        if(event.type === 'press') {

            this.imageWrapper.classList.add('dissolving');

            this.loop = setInterval(() => {

                if(this.dissolved === this.dissolvedStage) {

                    this.dissolveComplete();
                    clearInterval(this.loop);
                    return false;

                }

                this.incrementDissolve();

                if(!this.productUnwrapped.classList.contains('dissolving')) {
                    this.productUnwrapped.classList.add('dissolving');
                    this.bowl.classList.add('dissolving');
                }

            }, 750);

        }

        if(event.type === 'pressup') {
            clearInterval(this.loop);
        }


    }


    /**
     * Auto Trigger annimation
     * @return {void}
     */
    autoTrigger(stage, callback) {

        this.handle.hide();

        this.imageWrapper.classList.add('dissolving');

        this.loop = setInterval(() => {

            if(this.dissolved === stage) {

                console.log(this.dissolved, stage);

                this.dissolveComplete(callback);
                clearInterval(this.loop);
                return false;

            }

            this.incrementDissolve();

            if(!this.productUnwrapped.classList.contains('dissolving')) {
                this.productUnwrapped.classList.add('dissolving');
                this.bowl.classList.add('dissolving');
            }

        }, 750);

    }


    /**
     * Increment dissolving images
     * @return {Void}
     */
    incrementDissolve() {

        this.dissolvedPrevious = this.dissolved;
        this.dissolved++;

        console.log(this.dissolvedPrevious, this.dissolved);

        this.images[this.dissolvedPrevious].classList.remove('dissolving');
        this.images[this.dissolved].classList.add('dissolving');

    }


    /**
     * Complete callback handler
     * @return {void}
     */
    dissolveComplete(callback) {
        if ( this.dissolvedCompleteRan ) return;
        this.dissolvedCompleteRan = true;
        console.log('DISSOLVED COMPLETE');

        this.handle.hide();

        if(callback) callback(this.container);
            else this.callback(this.container);

    }


    /**
     * Get image URLS from the data object
     * @return {Array} urls
     */
    getImages() {

        const images = [];

        Object.keys(this.imageData).forEach((key, index) => {

            if(key.includes('melting')) {

                let image = this.imageData[key];

                image.classList.add('ritual-dissolving__image');
                image.setAttribute('data-dissolve', 'image');
                image.setAttribute('data-id', index);

                this.imageWrapper.appendChild(image);

                images.push(image);

            }


        });

        return images;

    }


    setPosition = (sectionHeight) => {

        this.container.style.top = (sectionHeight * 1.5) - (this.container.clientHeight / 2) + 'px';
        // this.container.style.top = '50vh'//(sectionHeight * 1.5) - (this.container.clientHeight / 2) + 'px';

    }

}
