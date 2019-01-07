/**
 * @class QuantityInput
 */
export default class QuantityInput {


    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor(container) {

        if(!container) throw Error('QuantityInput container not found');

        this.container = container;

        this.input = this.container.querySelector('[data-quantity="input"]')
        this.decBtn = this.container.querySelector('[data-adjust="dec"]');
        this.incBtn = this.container.querySelector('[data-adjust="inc"]');
        this.decBtn.addEventListener('click', this.onAdjust.bind(this));
        this.incBtn.addEventListener('click', this.onAdjust.bind(this));
        this.input.addEventListener('onkeyup', this.onKeyUp.bind(this));

        this.maxAmount = 1000;
        this.minAmount = 1;

        this.defaultQuantity = parseInt(this.input.value) || 1;
        this.currentQuantity = this.defaultQuantity;
    }


    /**
     * On Adjust of the buttons
     * @param  {Object} event
     * @return {Void}
     */
    onAdjust(event) {
        event.preventDefault();

        const type = event.currentTarget.getAttribute('data-adjust');

        this.currentQuantity = type === 'inc' ? this.currentQuantity + 1 : this.currentQuantity - 1;

        if(this.currentQuantity <= 1) this.currentQuantity = this.minAmount;
        if(this.currentQuantity >= this.maxAmount && type === 'inc') this.currentQuantity = this.maxAmount;

        this.changeInput(this.currentQuantity);

    }

    changeInput(amount) {

        // this.input.value = amount;
        this.input.setAttribute('value', amount);

    }

    onKeyUp(event) {}


}
