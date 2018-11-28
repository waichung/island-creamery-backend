/**
 * @class Tabs
 */
export default class Tabs {

    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container) {

        if(!container) throw Error('No container passed to the class Tabs');

        // Dom Elements
        this.container = container;
        this.nav = this.container.querySelector('[data-tabs="nav"]');
        this.items = this.setupItems();

        // this.maxIndex = Object.
        this.currentIndex = 0;
        this.previousIndex = this.currentIndex;

        this.toggleTab(this.currentIndex);

    }


    /**
     * Setup the tabs items
     * @return {Object} itemsObj
     */
    setupItems() {

        const navItems = this.container.querySelectorAll('[data-tabs="nav-item"]');
        const items = this.container.querySelectorAll('[data-tabs="item"]');
        const itemsObj = {};

        navItems.forEach((item, index) => {

            itemsObj[index] = { navItem: navItems[index], item: items[index] };

            item.addEventListener('click', (event) => {

                event.preventDefault();
                this.toggleTab(index);

            });

        });

        return itemsObj;

    }


    /**
     * Toggle Tabs
     * @param  {Number} index
     * @return {Void}
     */
    toggleTab(index) {

        this.previousIndex = this.currentIndex;
        this.currentIndex = index;

        this.items[this.previousIndex].navItem.classList.remove('tabs__navItem--active');
        this.items[this.previousIndex].item.classList.remove('tabs__item--active');

        this.items[this.currentIndex].navItem.classList.add('tabs__navItem--active');
        this.items[this.currentIndex].item.classList.add('tabs__item--active');

    }

}
