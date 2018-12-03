// Components
import Handle from './Handle';


/**
 * @class Stir
 */
export default class Stir {


    /**
     * @constructor
     * @param {Class} dissolving
     */
    constructor(dissolving, callback) {

        this.callback = callback;

        this.dissolving = dissolving;
        this.container = dissolving.container;
        this.width = dissolving.width;
        this.height = dissolving.height;

        this.offset = 0;

        this.canStir = true;

        this.stirCount = 0;
        this.stirMultiplier = 3;
        this.stirMax = this.stirMultiplier * 3;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.initialize();
        this.isMobile = window.innerWidth <= 480 ? true : false;
        this.handleOffset = (this.isMobile) ? 20 : 30
    }


    /**
     * Initialize
     * @return {void}
     */
    initialize() {

        this.container.appendChild(this.canvas);
        this.canvasWidth = this.width;
        this.canvasHeight = this.height;

        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.canvas.className = 'ritual-dissolving__stir hide';

        this.arcWidth = this.canvas.width * .5;
        this.arcHeight = this.canvas.height * .5;
        this.arcRadius = this.canvas.width * .25;

        this.arcDistance = 1;

        this.x = this.arcWidth - this.arcRadius;
        this.y = this.dissolving.height * .5;

        this.arcAngle = Math.atan2(this.y - this.arcRadius, this.x - this.arcRadius) * (180 / Math.PI);

        this.handle = new Handle(this.container)
            .generateLabel('Stir', 'left')
            .setArrow(false)
            .setInitialPosition(this.arcWidth - this.arcRadius, this.dissolving.height * .5)
            .on('drag', this.onDragHandler.bind(this));
        // this.handle = new Handle(this.container)
        //     .generateLabel('Stir', 'left')
        //     .setArrow(false)
        //     .setInitialPosition(0, 0)
        //     .on('drag', this.onDragHandler.bind(this));

        setTimeout(() => this.canvas.classList.remove('hide'), 500);

        this.loop();

    }


    /**
     * On Drag Handler
     * @param  {Object} event
     * @return {void}
     */
    onDragHandler(event) {

        const element = event.target;
        const canvasPos = this.canvas.getBoundingClientRect();

        // let x = (event.center.x - canvasPos.x) - (this.handle.offset * 2);
        // let y = (event.center.y - canvasPos.y) - (this.handle.offset * 2);

        this.x = (event.center.x - canvasPos.x) - (this.handle.offset * 2);
        this.y = (event.center.y - canvasPos.y) - (this.handle.offset * 2);

        this.arcAngle = Math.atan2(this.y - this.arcRadius, this.x - this.arcRadius) * (180 / Math.PI);

        element.style.top = this.stirY + 'px';
        element.style.left = this.stirX + 'px';


    }


    /**
     * Animation Loop
     * @return {void}
     */
    loop() {

        this.update();
        this.draw();

        window.requestAnimationFrame(this.loop.bind(this));

    }


    /**
     * Update values in animation loop
     * @return {void}
     */
    update() {

        this.isDissolving = false;

        if(this.canStir) {

            this.stirX = this.arcWidth + this.arcRadius * Math.cos(this.arcAngle * Math.PI / 180) * this.arcDistance - this.handleOffset;
            this.stirY = this.arcWidth + this.arcRadius * Math.sin(this.arcAngle * Math.PI / 180) * this.arcDistance - this.handleOffset;

            const angle = Math.floor(this.arcAngle);
            if(angle >= 0 && angle <= 10) {

                this.stirCount++;

                if(this.stirCount >= this.stirMax) {

                    this.canStir = false;

                    window.cancelAnimationFrame(this.loop);
                    this.handle.hide();
                    this.callback();

                    return false;

                } else {

                    if(this.stirCount % this.stirMultiplier === 0 && !this.isDissolving) {

                        this.isDissolving = true;

                        this.dissolvingTimeout = setTimeout(() => {
                            this.isDissolving = false;
                            clearTimeout(this.dissolvingTimeout);
                        }, 100);

                        this.dissolving.incrementDissolve();

                    }

                }

            }

        }

    }


    /**
     * Destroy Method
     * @return {void}
     */
    destroy() {
        this.handle.hide();
        this.canvas.classList.add('hide');
    }



    /**
     * Draw onn our canvas in animation loop
     * @return {void}
     */
    draw() {

        // Clear the cannvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw the arc to animate around
        this.ctx.setLineDash([5]);
        this.ctx.strokeStyle = '#000000';
        this.ctx.beginPath();
        this.ctx.arc(this.arcWidth, this.arcHeight, this.arcRadius, 0, 2* Math.PI);
        this.ctx.stroke();

    }


    /**
     * Range helper function
     * @param  {Number}  n
     * @param  {Number}  a
     * @param  {Number}  b
     * @return {Boolean}
     */
    isBetween(n, a, b) {
        return (n - a) * (n - b) <= 0;
    }


}
