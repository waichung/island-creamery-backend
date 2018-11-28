// Lib
import Events from 'events';

/**
 * Loader
 *
 * @class Loader
 */
export default class Loader extends Events {


    /**
     * @constructor
     */
    constructor() {

        super();
        this.container = document.querySelector('[data-loader="container"]');

        this.on('loading', () => this.loading());
        this.on('complete', () => this.complete());

    }


    /**
     * Load assets from an obj
     *
     * @TODO Handle nested properties
     *
     * @param  {Object}   obj
     * @param  {Function} cb
     * @return {Object}   loaded assets
     */
    loadAssetsObject = (obj, cb) => {

        this.emit('loading');

        let images = {};
        let remaining = Object.keys(obj).length;

        Object.entries(obj).forEach((item) => {

            let image = new Image();
            images[item[0]] = image;

            image.onload = () => {
                --remaining;

                if(remaining === 0) {

                    cb(images);
                    this.emit('complete');
                    return this;

                }

            }

            image.src = item[1];

        });

    }


    /**
     * Load assets from array
     *
     * @param  {Array}   srcs
     * @param  {Function} fn
     * @return {Array}
     */
    loadAssetsArray = (srcs, fn) => {

        this.emit('loading');

        let imgs = [], img;
        let remaining = srcs.length;

        for (var i = 0; i < srcs.length; i++) {

            img = new Image();
            imgs.push(img);

            img.onload = () => {
                --remaining;

                if(remaining === 0) {
                    fn(imgs);
                    this.emit('complete');
                }

            };

            img.src = srcs[i];

        }

        return(imgs);

    }


    /**
     * Loading
     *
     * @return {Class} Loader
     */
    loading = () => {

        console.log('IS Loading');

        this.container.classList.add('loader--loading');

        return this;

    }


    /**
     * Complete
     *
     * @return {Class} Loader
     */
    complete = () => {

        console.log('IS complete');

        setTimeout(() => {
            window.jQuery(this.container).fadeOut(500);
        }, 250);

        return this;

    }

}
