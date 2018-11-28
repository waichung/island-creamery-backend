// Lib
import Events from 'events';
import Hammer from 'hammerjs';

// Helpers
import Debounce from './Debounce';

/**
 * Interaction manager class
 *
 * @class InteractionManager
 */
export default class InteractionManager extends Events {


    /**
     * @constructor
     */
    constructor(container = window, initialScroll = true) {

        super();

        this.canScroll = initialScroll;
        this.setCanScroll = this.setCanScroll.bind(this);
        this.onScroll = this.onScroll.bind(this);

        this.hammer = new Hammer(container)
        this.hammer.add( new Hammer.Pan({ direction: Hammer.DIRECTION_VERTICAL }));
        this.hammer.on('pan', this.onScroll);

        window.addEventListener('mousewheel', this.onScroll);
        window.addEventListener('resize', Debounce(this.onResize, 250));


    }


    /**
     * Can user scroll?
     *
     * @param  {Boolean} bool
     * @return {void}
     */
    setCanScroll(toggle) {
        this.canScroll = toggle ? toggle : true;
    }


    /**
     * On mouse scroll
     *
     * @param  {Object} event
     * @return {Class} InteractionManager
     */
    onScroll = (event) => {

        this.emit('scroll', event);

        if(!this.canScroll) event.preventDefault();

        return this;

    }


    /**
     * On Resize
     * @param  {Object} event
     * @return {Class} InteractionManager
     */
    onResize = (event) => {

        this.emit('resize', event);

        return this;

    }


}
