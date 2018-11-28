// Lib
import Tween from 'tweezer.js';

// Views
import Handle from './Handle';

/**
 * Openn the packaging for the first Ritual section
 * @class OpenPack
 */
export default class OpenPack {


    /**
     * @constructor
     */
    constructor(images, callback = null) {

        this.callback = callback;
        this.images = images;

        // DOM Elements
        this.parent = document.querySelector('[data-ritual="product-container"]');
        this.container = this.parent.querySelector('[data-product="packaging"]');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');


        // Append elements to our container
        this.container.appendChild(this.images.top);
        this.container.appendChild(this.images.bottom);
        this.container.appendChild(this.canvas);

        // Size Values
        this.width = this.canvas.width = this.container.clientWidth;
        this.height = this.canvas.height = this.container.clientHeight;

        // Handle
        this.handle = new Handle(this.container)
            .generateLabel('Drag to tear', 'left')
            .setInitialPosition(0, this.height - this.images.bottom.height)
            .on('drag', this.onUpdate);

        // Canvas Values
        this.lastX = 0;
        this.currentX = -this.handle.offset;
        this.minX = this.currentX;
        this.maxX = this.canvas.width - this.handle.offset;

        this.loop();

    }


    /**
     * Trigger the complete animation
     *
     * @return {void}
     */
    trigger() {

        this.handle.hide();
        this.images.bottom.classList.add('torn');

        if(this.callback) this.callback();

        window.cancelAnimationFrame(this.loop);

    }


    autoTrigger = () => {

        if(this.handle) this.handle.hideLabel();

        this.autoTriggerTween = new Tween({

            start: this.currentX,
            end: this.maxX,
            duration: 1000,
            easing: (t, b, c, d) => {
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            }

        })
        .on('tick', value => {

            this.currentX = value;
            if(this.handle) this.handle.container.style.left = this.currentX + 'px';

        })
        .on('done', this.trigger.bind(this))
        .begin();

    }


    loop = () => {

        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.setLineDash([5]);
        this.ctx.beginPath();
        this.ctx.moveTo(5, this.height - this.images.bottom.height);
        this.ctx.lineTo(this.width - 2, this.height - this.images.bottom.height);
        this.ctx.stroke();

        this.ctx.strokeStyle = '#111111';
        this.ctx.beginPath();
        this.ctx.moveTo(5, this.height - this.images.bottom.height);
        this.ctx.lineTo(this.currentX, this.height - this.images.bottom.height);
        this.ctx.stroke();

        window.requestAnimationFrame(this.loop);

    }


    /**
     * On handle drag update
     *
     * @param  {Object} event
     * @return {void}
     */
    onUpdate = (event) => {

        const elem = event.target;
        const eventDeltaX = event.deltaX;

        if (!this.handle.isDragging) {
            this.handle.isDragging = true;
            this.lastX = elem.offsetLeft;
        }

        if((event.deltaX < 0 && this.currentX <= this.minX) || (event.deltaX > 0 && this.currentX >= this.maxX)) {
            this.currentX = this.currentX;
        } else this.currentX = eventDeltaX + this.lastX;

        if((this.currentX >= this.maxX) && event.isFinal) this.trigger();

        elem.style.left = this.currentX + 'px';

    }




}
