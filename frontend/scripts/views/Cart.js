// Components
import QuantityInput from '../components/QuantityInput';
import Personalisation from '../components/Personalisation';

/**
 * @class Cart
 */
export default class Cart {


    /**
     * @constructor
     */
    constructor(container, scrollbar) {

        this.container = container;

        this.quantityInputs = this.container.querySelectorAll('[data-quantity="container"]');
        this.quantityInputs.forEach((item) => new QuantityInput(item));

        this.Personalisation = new Personalisation(this.container.querySelector('[data-personalisation="container"]'));


    }


}
