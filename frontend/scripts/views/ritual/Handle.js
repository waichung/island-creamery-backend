// Lib
import Hammer from 'Hammerjs';

// NodeJS
import Events from 'events';

/**
 * @class Handle
 */
export default class Handle extends Events {


    /**
     * @constructor
     */
    constructor(parent) {

        super();

        if(!parent) throw Error('No parent supplied to the handle class, aborting');

        this.isMobile = window.innerWidth <= 480 ? true : false;

        this.radius = this.isMobile ? 40 : 60;
        this.offset = this.radius / 2;
        this.lastX = 0;
        this.lastY = 0;
        this.isDragging = false;
        this.isPressed = false;

        this.parent = parent;
        this.container = this.generateContainer();

        this.hammer = new Hammer(this.container);
        this.hammer.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL }));
        this.hammer.on('pan', this.onDrag.bind(this));
        this.hammer.on('press', this.onPress.bind(this));
        this.hammer.on('pressup', this.onRelease.bind(this));

        this.container.addEventListener('mouseenter', this.onMouseEnter.bind(this));
        this.container.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.container.addEventListener('mousemove', this.onMouseMove.bind(this));

    }


    /**
     * Generate the container
     * @return {HTMLElement}
     */
    generateContainer() {

        const container = document.createElement('div');
        container.className = 'handle hidden';
        container.style.width = this.radius + 'px';
        container.style.height = this.radius + 'px';

        this.arrow = document.createElement('div');
        this.arrow.classList.add('handle__arrow');

        this.border = document.createElement('div');
        this.border.classList.add('handle__border');

        container.appendChild(this.border);
        container.appendChild(this.arrow);

        this.parent.appendChild(container);

        return container;

    }


    /**
     * Generate the label for the handle
     * @param  {String} text
     * @param  {String} [position='left']
     * @return {Class}  Handle
     */
    generateLabel(text, position = 'left') {
        this.label = document.createElement('span');
        this.label.classList.add('handle__label');
        this.label.classList.add('handle__label--' + position);
        this.label.innerHTML = text;
        this.container.appendChild(this.label);

        setTimeout(() => this.container.classList.remove('hidden'), 500);

        return this;

    }


    /**
     * Set the initial position of the handle
     * @param {Number} x
     * @param {Number} y
     * @return {Class} Handle
     */
    setInitialPosition(x, y) {

        this.container.style.top = (y - this.offset) + 'px' ;
        this.container.style.left = (x - this.offset) + 'px';

        return this;

    }

    setArrow(bool = false) {

        if(!bool) this.container.classList.add('arrow-disabled');
            else this.container.classList.remove('arrow-disabled');

        return this;

    }


    /**
     * Hide the handle
     * @return {Class} Handle
     */
    hide() {

        this.container.classList.add('hidden');
        setTimeout(() => this.container.classList.add('disabled'), 500);

        return this;

    }


    /**
     * Hide the label specifically
     * @return {Class} Handle
     */
    hideLabel() {

        this.label.classList.add('disabled');

        return this;

    }


    /**
     * On press event handler
     * @param  {Object} event
     * @return {Class}  Handle
     */
    onPress(event) {

        this.isPressed = true;
        this.emit('press', event);

        return this;

    }


    /**
     * On release event handler
     * @param  {Object} event
     * @return {Class}  Handle
     */
    onRelease(event) {

        this.isPressed = false;
        this.emit('press', event);

        return this;

    }


    /**
     * On drag event handler
     * @param  {Object} event
     * @return {Class}  Handle
     */
    onDrag(event) {

        this.emit('drag', event);

        if(!this.isDragging) this.container.classList.add('dragging');

        this.hideLabel();

        if(event.isFinal) {
            this.container.classList.remove('dragging');
            this.isDragging = false;
        }

        return this;

    }



    /**
     * On mouse move event handler
     * @param  {Object} event
     * @return {Class}  Handle
     */
    onMouseMove(event) {

        this.border.style.transform = `translate3d(0,0,0) scale(${this.isDragging ? '1' : '1.3'}) translate(${event.offsetX - (this.radius / 2)}px, ${event.offsetY - (this.radius / 2)}px)`;

        return this;

    }


    /**
     * On mouse enter event handler
     * @param  {Object} event
     * @return {Class}  Handle
     */
    onMouseEnter(event) {

        this.container.classList.add('hover');

        return this;

    }


    /**
     * On mouse leave event handler
     * @param  {Object} event
     * @return {Class}  Handler
     */
    onMouseLeave(event) {

        this.container.classList.remove('hover');
        this.border.style.transform = `translate3d(0,0,0)  scale(1) translate(0, 0)`;

        return this;

    }


}
