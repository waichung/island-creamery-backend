// Lib
import InView from 'in-view';

// Views
import Tabs from '../components/Tabs';
import Accordion from '../components/Accordion';

/**
 * @class Journey
 */
export default class Journey {


    /**
     * @constructor
     * @param {HTMLElement} container
     * @param {Class} scrollbar
     */
    constructor(container, scrollbar) {

        if(!container) throw Error('No container passed to the Journey class');

        this.container = container;
        // this.render = new Render(container.querySelector('[data-bloom-render="container"]'));

        this.scrollbar = scrollbar;
        this.navItems = this.getNavItems();
        this.items = this.getItems();

        this.currentIndex = 0;
        this.previousIndex = this.currentIndex;

        this.container.querySelectorAll('[data-journey="tabs"]').forEach((item) => new Tabs(item));
        this.container.querySelectorAll('[data-journey="accordion"]').forEach((item) => new Accordion(item));

        this.initializeInView();

    }


    /**
     * Initialize In View
     *
     * @return {Void}
     */
    initializeInView() {

        for (const [index, item] of Object.entries(this.items)) if(item.name === window.location.hash) this.changeSection(index);

        InView('[data-journey="nav"]')
            .on('enter', (element) => {

                this.previousIndex = this.currentIndex;
                this.currentIndex = parseInt(element.getAttribute('data-index'));
                this.updateNav(this.previousIndex, this.currentIndex, this.items[this.currentIndex].name);

            }).on('exit', (element) => element.classList.remove('in-view'));

    }


    /**
     * Get items in the DOM and create a reference
     *
     * @return {Object}
     */
    getItems() {

        const sections = {};

        this.container.querySelectorAll('[data-journey="section"]').forEach((section, index) => {

            sections[index] = {
                name: section.getAttribute('id'),
                section: section
            };

            section.setAttribute('data-index', index);

        });

        return sections;

    }


    /**
     * Get nav items from the DOM and create a reference
     *
     * @return {Object}
     */
    getNavItems() {

        const navItems = {};

        this.container.querySelectorAll('[data-journey="nav"]').forEach((nav, navIndex) => {

            nav.setAttribute('data-index', navIndex);

            nav.querySelectorAll('[data-journey="nav-item"]').forEach((item, index) => {

                if(navItems[index] === undefined) navItems[index] = [];
                navItems[index].push(item);

                item.addEventListener('click', (event) => {
                    // event.preventDefault();
                    this.onNavClick(index);
                })

            });

        });

        return navItems;

    }


    /**
     * On nav click, change to appropriate section
     *
     * @param  {Number} index
     * @return {Void}
     */
    onNavClick(index) {

        if(index === this.currentIndex) return;
        this.changeSection(index);

    }


    /**
     * Update nav with the active class
     *
     * @param  {Number} previous
     * @param  {Number} current
     * @param {String}  name
     * @return {Void}
     */
    updateNav(previous, current, name) {

        location.hash = name;

        this.navItems[previous].forEach((item) => item.classList.remove('active'));
        this.navItems[current].forEach((item) => item.classList.add('active'));

    }


    /**
     * Change section onn nav click
     * @param  {Number} index
     * @return {Void}
     */
    changeSection(index) {

        this.previousIndex = this.currentIndex;
        this.currentIndex = index;

        this.updateNav(this.previousIndex, this.currentIndex, this.items[index].name);
        this.scrollbar.scrollIntoView(this.items[this.currentIndex].section, { duration: 2000 });


    }

}
