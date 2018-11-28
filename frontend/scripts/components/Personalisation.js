/**
 * @class Personalisation
 */
export default class Personalisation {


    /**
     * @constructor
     */
    constructor(container) {

        if(!container) throw Error('No container passed to the Journey class');

        this.container = container;

        this.personalisationCheck = this.container.querySelector('[data-personalisation="check"]');
        this.image = this.container.querySelector('[data-personalisation="image"]');
        this.textarea = this.container.querySelector('[data-personalisation="textarea"]');
        this.text = this.container.querySelector('[data-personalisation="text"]');
        this.saveBtn = this.container.querySelector('[data-personalisation="save"]');

        this.textareaStyles = getComputedStyle(this.textarea);
        this.lineHeight = parseInt(this.textareaStyles.lineHeight);
        this.limit = 5;

        this.textarea.addEventListener('keydown', this.onTextAreaUpdate.bind(this));
        this.textarea.addEventListener('keyup', this.onTextAreaFinish.bind(this));

        this.personalisationCheck.addEventListener('change', (event) => this.enable(event));

        setTimeout(() => this.textarea.style.height = this.textarea.scrollHeight + 'px', 300);

        if(this.personalisationCheck.checked) this.isEnabled = 'yes';
        if(this.isEnabled) this.image.style.display = 'block';

    }


    /**
     * Enable the personalisation
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    enable(event) {

        const input = event.currentTarget;

        this.isEnabled = input.checked;
        input.setAttribute('value', this.isEnabled === 'yes' ? 'yes' : 'no');

        if(!this.isEnabled) {

            this.image.style.display = 'none';
            this.text.value = '';
            this.textarea.innerHTML = '';
            this.saveBtn.click();

        } else this.image.style.display = 'block';

    }


    /**
     * On text area update
     * @param  {Object} event
     * @return {Boolean}
     */
    onTextAreaUpdate(event) {

        this.textarea.style.height = '';
        this.textarea.style.height = this.textarea.scrollHeight + 'px';

        var totalHeight = parseInt(this.textarea.clientHeight);
        var linesUsed = Math.ceil(totalHeight / this.lineHeight);

        if (linesUsed > this.limit) {

            if (event.keyCode !== 8 && event.keyCode !== 46) {
                event.preventDefault();
                return false;
            }

        }


    }


    /**
     * On Text Area Finish
     * @return {Void}
     */
    onTextAreaFinish() {

        this.textarea.style.height = this.textarea.scrollHeight + 'px';
        this.text.setAttribute('value', this.textarea.value);

    }


    escapeHtml(str) {

        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;

    }

}
