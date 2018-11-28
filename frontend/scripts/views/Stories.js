// Lib
import Tween from 'tweezer.js';
import InView from 'in-view';


/**
 * @class Stories
 */
export default class Stories {


    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container, scrollbar) {

        if(!container) throw Error('No container passed to Stories');

        this.container = container;

        this.scrollbar = scrollbar;
        this.scrollbar.addListener(this.onScroll);

        this.currentIndex = 0;
        this.previousIndex = this.currentIndex;

        this.items = this.container.querySelectorAll('[data-stories="item"]');
        this.nav = this.container.querySelector('[data-stories="nav"]');
        this.navHeight = this.nav.clientHeight;
        this.navItems = this.nav.querySelectorAll('[data-stories="nav-item"]');
        this.navItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                this.onNavClick(item);
            })
        });

        this.toggleNav(0);
        this.initializeInView();

    }


    /**
     * Initialize In View
     *
     * @return {Void}
     */
    initializeInView() {

        InView.threshold(0.25);
        InView('[data-inview="item"]')
        .on('enter', (element) => {

            element.classList.add('in-view');
            if(element.getAttribute('data-stories')) this.toggleNav(parseInt(element.getAttribute('data-index')));

        }).on('exit', (element) => element.classList.remove('in-view'));

    }


    /**
     * On nav item click
     *
     * @param  {Object} event
     * @return {Void}
     */
    onNavClick(item) {

        const index = parseInt(item.getAttribute('data-index'));

        this.toggleNav(index);
        this.scrollIntoElementView(index);

    }


    /**
     * Toggle Nav
     *
     * @param  {Number} index
     * @return {Void}
     */
    toggleNav(index) {

        this.previousIndex = this.currentIndex;
        this.currentIndex = index;

        this.navItems[this.previousIndex].classList.remove('active');
        this.navItems[this.currentIndex].classList.add('active');

    }


    /**
     * Scroll section into view
     *
     * @param  {Number} index
     * @return {Void}
     */
    scrollIntoElementView(index) {

        this.scrollbar.scrollIntoView(this.items[index], {
            duration: 2000
        });

    }


    /**
     * On Scroll Handler
     *
     * @param  {Object} event
     * @return {Void}
     */
    onScroll = (event) => {

        const navPos = this.container.getBoundingClientRect();
        const navPosTop = navPos.top;

        if(navPosTop <= 0) {
            this.nav.classList.add('fixed');
            this.nav.style.top = event.offset.y + 'px';
        } else {
            this.nav.classList.remove('fixed');
            this.nav.style.top = 0;
            this.toggleNav(0);
        }

    }


}
