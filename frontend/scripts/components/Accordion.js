/**
 * @class Accordion
 */
export default class Accordion {


    /**
     * @constructor
     */
    constructor(container) {

        if(!container) throw Error('no container passed to accoredion');

        this.container = container;
        this.items = this.getItems();

    }


    /**
     * Get items and their children and create a reference
     *
     * @return {Object}
     */
    getItems() {

        const items = {};

        this.container.querySelectorAll('[data-accordion="item"]').forEach((item, index) => {

            if(index === 0) item.classList.add('active');

            const title = item.querySelector('[data-accordion="item-title"]');
            const description = item.querySelector('[data-accordion="item-description"]');
            const accent = item.querySelector('[data-accordion="item-accent"]');

            items[index] = { index, item, title, accent, description };

            item.addEventListener('click', (event) => this.toggleItem(index));

        });

        return items;

    }


    /**
     * Toggle Item
     *
     * @param  {Number} index
     * @return {Void}
     */
    toggleItem(index) {

        Object.values(this.items).forEach((item) => {

            if(item.index === index) item.item.classList.add('active');
                else item.item.classList.remove('active');

        });

    }


}
